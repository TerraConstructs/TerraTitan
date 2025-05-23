/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftserverlessUsageLimitConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_usage_limit#amount RedshiftserverlessUsageLimit#amount}
    */
    readonly amount: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_usage_limit#breach_action RedshiftserverlessUsageLimit#breach_action}
    */
    readonly breachAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_usage_limit#id RedshiftserverlessUsageLimit#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_usage_limit#period RedshiftserverlessUsageLimit#period}
    */
    readonly period?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_usage_limit#resource_arn RedshiftserverlessUsageLimit#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_usage_limit#usage_type RedshiftserverlessUsageLimit#usage_type}
    */
    readonly usageType: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_usage_limit aws_redshiftserverless_usage_limit}
*/
export declare class RedshiftserverlessUsageLimit extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_redshiftserverless_usage_limit";
    /**
    * Generates CDKTF code for importing a RedshiftserverlessUsageLimit resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RedshiftserverlessUsageLimit to import
    * @param importFromId The id of the existing RedshiftserverlessUsageLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_usage_limit#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RedshiftserverlessUsageLimit to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_usage_limit aws_redshiftserverless_usage_limit} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftserverlessUsageLimitConfig
    */
    constructor(scope: Construct, id: string, config: RedshiftserverlessUsageLimitConfig);
    private _amount?;
    get amount(): number;
    set amount(value: number);
    get amountInput(): number | undefined;
    get arn(): string;
    private _breachAction?;
    get breachAction(): string;
    set breachAction(value: string);
    resetBreachAction(): void;
    get breachActionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _period?;
    get period(): string;
    set period(value: string);
    resetPeriod(): void;
    get periodInput(): string | undefined;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    private _usageType?;
    get usageType(): string;
    set usageType(value: string);
    get usageTypeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
