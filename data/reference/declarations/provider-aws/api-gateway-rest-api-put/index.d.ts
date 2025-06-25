/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayRestApiPutConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_rest_api_put#body ApiGatewayRestApiPut#body}
    */
    readonly body: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_rest_api_put#fail_on_warnings ApiGatewayRestApiPut#fail_on_warnings}
    */
    readonly failOnWarnings?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_rest_api_put#parameters ApiGatewayRestApiPut#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_rest_api_put#rest_api_id ApiGatewayRestApiPut#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_rest_api_put#triggers ApiGatewayRestApiPut#triggers}
    */
    readonly triggers?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_rest_api_put#timeouts ApiGatewayRestApiPut#timeouts}
    */
    readonly timeouts?: ApiGatewayRestApiPutTimeouts;
}
export interface ApiGatewayRestApiPutTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_rest_api_put#create ApiGatewayRestApiPut#create}
    */
    readonly create?: string;
}
export declare function apiGatewayRestApiPutTimeoutsToTerraform(struct?: ApiGatewayRestApiPutTimeouts | cdktf.IResolvable): any;
export declare function apiGatewayRestApiPutTimeoutsToHclTerraform(struct?: ApiGatewayRestApiPutTimeouts | cdktf.IResolvable): any;
export declare class ApiGatewayRestApiPutTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiGatewayRestApiPutTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ApiGatewayRestApiPutTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_rest_api_put aws_api_gateway_rest_api_put}
*/
export declare class ApiGatewayRestApiPut extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_rest_api_put";
    /**
    * Generates CDKTF code for importing a ApiGatewayRestApiPut resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayRestApiPut to import
    * @param importFromId The id of the existing ApiGatewayRestApiPut that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_rest_api_put#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayRestApiPut to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_rest_api_put aws_api_gateway_rest_api_put} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayRestApiPutConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayRestApiPutConfig);
    private _body?;
    get body(): string;
    set body(value: string);
    get bodyInput(): string | undefined;
    private _failOnWarnings?;
    get failOnWarnings(): boolean | cdktf.IResolvable;
    set failOnWarnings(value: boolean | cdktf.IResolvable);
    resetFailOnWarnings(): void;
    get failOnWarningsInput(): boolean | cdktf.IResolvable | undefined;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    };
    set parameters(value: {
        [key: string]: string;
    });
    resetParameters(): void;
    get parametersInput(): {
        [key: string]: string;
    } | undefined;
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string | undefined;
    private _triggers?;
    get triggers(): {
        [key: string]: string;
    };
    set triggers(value: {
        [key: string]: string;
    });
    resetTriggers(): void;
    get triggersInput(): {
        [key: string]: string;
    } | undefined;
    private _timeouts;
    get timeouts(): ApiGatewayRestApiPutTimeoutsOutputReference;
    putTimeouts(value: ApiGatewayRestApiPutTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ApiGatewayRestApiPutTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
