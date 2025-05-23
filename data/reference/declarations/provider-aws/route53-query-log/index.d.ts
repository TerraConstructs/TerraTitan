/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53QueryLogConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_query_log#cloudwatch_log_group_arn Route53QueryLog#cloudwatch_log_group_arn}
    */
    readonly cloudwatchLogGroupArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_query_log#id Route53QueryLog#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_query_log#zone_id Route53QueryLog#zone_id}
    */
    readonly zoneId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_query_log aws_route53_query_log}
*/
export declare class Route53QueryLog extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53_query_log";
    /**
    * Generates CDKTF code for importing a Route53QueryLog resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53QueryLog to import
    * @param importFromId The id of the existing Route53QueryLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_query_log#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53QueryLog to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_query_log aws_route53_query_log} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53QueryLogConfig
    */
    constructor(scope: Construct, id: string, config: Route53QueryLogConfig);
    get arn(): string;
    private _cloudwatchLogGroupArn?;
    get cloudwatchLogGroupArn(): string;
    set cloudwatchLogGroupArn(value: string);
    get cloudwatchLogGroupArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
