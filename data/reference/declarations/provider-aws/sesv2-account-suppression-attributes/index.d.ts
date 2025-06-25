/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Sesv2AccountSuppressionAttributesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_account_suppression_attributes#suppressed_reasons Sesv2AccountSuppressionAttributes#suppressed_reasons}
    */
    readonly suppressedReasons: string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_account_suppression_attributes aws_sesv2_account_suppression_attributes}
*/
export declare class Sesv2AccountSuppressionAttributes extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sesv2_account_suppression_attributes";
    /**
    * Generates CDKTF code for importing a Sesv2AccountSuppressionAttributes resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Sesv2AccountSuppressionAttributes to import
    * @param importFromId The id of the existing Sesv2AccountSuppressionAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_account_suppression_attributes#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Sesv2AccountSuppressionAttributes to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_account_suppression_attributes aws_sesv2_account_suppression_attributes} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Sesv2AccountSuppressionAttributesConfig
    */
    constructor(scope: Construct, id: string, config: Sesv2AccountSuppressionAttributesConfig);
    get id(): string;
    private _suppressedReasons?;
    get suppressedReasons(): string[];
    set suppressedReasons(value: string[]);
    get suppressedReasonsInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
