/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchQueryDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_query_definition#id CloudwatchQueryDefinition#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_query_definition#log_group_names CloudwatchQueryDefinition#log_group_names}
    */
    readonly logGroupNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_query_definition#name CloudwatchQueryDefinition#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_query_definition#query_string CloudwatchQueryDefinition#query_string}
    */
    readonly queryString: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_query_definition aws_cloudwatch_query_definition}
*/
export declare class CloudwatchQueryDefinition extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudwatch_query_definition";
    /**
    * Generates CDKTF code for importing a CloudwatchQueryDefinition resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudwatchQueryDefinition to import
    * @param importFromId The id of the existing CloudwatchQueryDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_query_definition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudwatchQueryDefinition to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_query_definition aws_cloudwatch_query_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchQueryDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchQueryDefinitionConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _logGroupNames?;
    get logGroupNames(): string[];
    set logGroupNames(value: string[]);
    resetLogGroupNames(): void;
    get logGroupNamesInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get queryDefinitionId(): string;
    private _queryString?;
    get queryString(): string;
    set queryString(value: string);
    get queryStringInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
