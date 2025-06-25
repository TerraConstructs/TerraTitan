/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsApiGatewayApiKeysConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/api_gateway_api_keys#customer_id DataAwsApiGatewayApiKeys#customer_id}
    */
    readonly customerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/api_gateway_api_keys#include_values DataAwsApiGatewayApiKeys#include_values}
    */
    readonly includeValues?: boolean | cdktf.IResolvable;
}
export interface DataAwsApiGatewayApiKeysItems {
}
export declare function dataAwsApiGatewayApiKeysItemsToTerraform(struct?: DataAwsApiGatewayApiKeysItems): any;
export declare function dataAwsApiGatewayApiKeysItemsToHclTerraform(struct?: DataAwsApiGatewayApiKeysItems): any;
export declare class DataAwsApiGatewayApiKeysItemsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsApiGatewayApiKeysItems | undefined;
    set internalValue(value: DataAwsApiGatewayApiKeysItems | undefined);
    get createdDate(): string;
    get customerId(): string;
    get description(): string;
    get enabled(): cdktf.IResolvable;
    get id(): string;
    get lastUpdatedDate(): string;
    get name(): string;
    get stageKeys(): string[];
    private _tags;
    get tags(): cdktf.StringMap;
    get value(): string;
}
export declare class DataAwsApiGatewayApiKeysItemsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsApiGatewayApiKeysItemsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/api_gateway_api_keys aws_api_gateway_api_keys}
*/
export declare class DataAwsApiGatewayApiKeys extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_api_gateway_api_keys";
    /**
    * Generates CDKTF code for importing a DataAwsApiGatewayApiKeys resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsApiGatewayApiKeys to import
    * @param importFromId The id of the existing DataAwsApiGatewayApiKeys that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/api_gateway_api_keys#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsApiGatewayApiKeys to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/api_gateway_api_keys aws_api_gateway_api_keys} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApiGatewayApiKeysConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsApiGatewayApiKeysConfig);
    private _customerId?;
    get customerId(): string;
    set customerId(value: string);
    resetCustomerId(): void;
    get customerIdInput(): string | undefined;
    get id(): string;
    private _includeValues?;
    get includeValues(): boolean | cdktf.IResolvable;
    set includeValues(value: boolean | cdktf.IResolvable);
    resetIncludeValues(): void;
    get includeValuesInput(): boolean | cdktf.IResolvable | undefined;
    private _items;
    get items(): DataAwsApiGatewayApiKeysItemsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
