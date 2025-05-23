/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchEventApiDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_api_destination#connection_arn CloudwatchEventApiDestination#connection_arn}
    */
    readonly connectionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_api_destination#description CloudwatchEventApiDestination#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_api_destination#http_method CloudwatchEventApiDestination#http_method}
    */
    readonly httpMethod: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_api_destination#id CloudwatchEventApiDestination#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_api_destination#invocation_endpoint CloudwatchEventApiDestination#invocation_endpoint}
    */
    readonly invocationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_api_destination#invocation_rate_limit_per_second CloudwatchEventApiDestination#invocation_rate_limit_per_second}
    */
    readonly invocationRateLimitPerSecond?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_api_destination#name CloudwatchEventApiDestination#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_api_destination aws_cloudwatch_event_api_destination}
*/
export declare class CloudwatchEventApiDestination extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudwatch_event_api_destination";
    /**
    * Generates CDKTF code for importing a CloudwatchEventApiDestination resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudwatchEventApiDestination to import
    * @param importFromId The id of the existing CloudwatchEventApiDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_api_destination#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudwatchEventApiDestination to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_api_destination aws_cloudwatch_event_api_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventApiDestinationConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchEventApiDestinationConfig);
    get arn(): string;
    private _connectionArn?;
    get connectionArn(): string;
    set connectionArn(value: string);
    get connectionArnInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _httpMethod?;
    get httpMethod(): string;
    set httpMethod(value: string);
    get httpMethodInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _invocationEndpoint?;
    get invocationEndpoint(): string;
    set invocationEndpoint(value: string);
    get invocationEndpointInput(): string | undefined;
    private _invocationRateLimitPerSecond?;
    get invocationRateLimitPerSecond(): number;
    set invocationRateLimitPerSecond(value: number);
    resetInvocationRateLimitPerSecond(): void;
    get invocationRateLimitPerSecondInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
