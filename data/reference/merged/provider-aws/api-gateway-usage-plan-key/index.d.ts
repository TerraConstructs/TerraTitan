/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayUsagePlanKeyConfig extends cdktf.TerraformMetaArguments {
    /** */
    readonly id?: string;
    /** (Required) Identifier of the API key resource. */
    readonly keyId: string;
    /** (Required) Type of the API key resource. Currently, the valid key type is API_KEY. */
    readonly keyType: string;
    /** (Required) Id of the usage plan resource representing to associate the key to. */
    readonly usagePlanId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_usage_plan_key aws_api_gateway_usage_plan_key}
*/
export declare class ApiGatewayUsagePlanKey extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_usage_plan_key";
    /**
    * Generates CDKTF code for importing a ApiGatewayUsagePlanKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayUsagePlanKey to import
    * @param importFromId The id of the existing ApiGatewayUsagePlanKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_usage_plan_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayUsagePlanKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_usage_plan_key aws_api_gateway_usage_plan_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayUsagePlanKeyConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayUsagePlanKeyConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    get keyIdInput(): string | undefined;
    private _keyType?;
    get keyType(): string;
    set keyType(value: string);
    get keyTypeInput(): string | undefined;
    get name(): string;
    private _usagePlanId?;
    get usagePlanId(): string;
    set usagePlanId(value: string);
    get usagePlanIdInput(): string | undefined;
    get value(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
