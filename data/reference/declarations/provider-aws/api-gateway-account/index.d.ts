/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_account#cloudwatch_role_arn ApiGatewayAccount#cloudwatch_role_arn}
    */
    readonly cloudwatchRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_account#reset_on_delete ApiGatewayAccount#reset_on_delete}
    */
    readonly resetOnDelete?: boolean | cdktf.IResolvable;
}
export interface ApiGatewayAccountThrottleSettings {
}
export declare function apiGatewayAccountThrottleSettingsToTerraform(struct?: ApiGatewayAccountThrottleSettings): any;
export declare function apiGatewayAccountThrottleSettingsToHclTerraform(struct?: ApiGatewayAccountThrottleSettings): any;
export declare class ApiGatewayAccountThrottleSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ApiGatewayAccountThrottleSettings | undefined;
    set internalValue(value: ApiGatewayAccountThrottleSettings | undefined);
    get burstLimit(): number;
    get rateLimit(): number;
}
export declare class ApiGatewayAccountThrottleSettingsList extends cdktf.ComplexList {
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
    get(index: number): ApiGatewayAccountThrottleSettingsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_account aws_api_gateway_account}
*/
export declare class ApiGatewayAccount extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_account";
    /**
    * Generates CDKTF code for importing a ApiGatewayAccount resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayAccount to import
    * @param importFromId The id of the existing ApiGatewayAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_account#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayAccount to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_account aws_api_gateway_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayAccountConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ApiGatewayAccountConfig);
    get apiKeyVersion(): string;
    private _cloudwatchRoleArn?;
    get cloudwatchRoleArn(): string;
    set cloudwatchRoleArn(value: string);
    resetCloudwatchRoleArn(): void;
    get cloudwatchRoleArnInput(): string | undefined;
    get features(): string[];
    get id(): string;
    private _resetOnDelete?;
    get resetOnDelete(): boolean | cdktf.IResolvable;
    set resetOnDelete(value: boolean | cdktf.IResolvable);
    resetResetOnDelete(): void;
    get resetOnDeleteInput(): boolean | cdktf.IResolvable | undefined;
    private _throttleSettings;
    get throttleSettings(): ApiGatewayAccountThrottleSettingsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
