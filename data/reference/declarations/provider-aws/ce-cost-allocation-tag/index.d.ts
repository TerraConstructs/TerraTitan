/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CeCostAllocationTagConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_cost_allocation_tag#id CeCostAllocationTag#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_cost_allocation_tag#status CeCostAllocationTag#status}
    */
    readonly status: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_cost_allocation_tag#tag_key CeCostAllocationTag#tag_key}
    */
    readonly tagKey: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_cost_allocation_tag aws_ce_cost_allocation_tag}
*/
export declare class CeCostAllocationTag extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ce_cost_allocation_tag";
    /**
    * Generates CDKTF code for importing a CeCostAllocationTag resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CeCostAllocationTag to import
    * @param importFromId The id of the existing CeCostAllocationTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_cost_allocation_tag#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CeCostAllocationTag to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_cost_allocation_tag aws_ce_cost_allocation_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CeCostAllocationTagConfig
    */
    constructor(scope: Construct, id: string, config: CeCostAllocationTagConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
    private _tagKey?;
    get tagKey(): string;
    set tagKey(value: string);
    get tagKeyInput(): string | undefined;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
