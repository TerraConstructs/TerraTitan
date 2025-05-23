/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2ManagedPrefixListEntryAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_managed_prefix_list_entry#cidr Ec2ManagedPrefixListEntryA#cidr}
    */
    readonly cidr: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_managed_prefix_list_entry#description Ec2ManagedPrefixListEntryA#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_managed_prefix_list_entry#id Ec2ManagedPrefixListEntryA#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_managed_prefix_list_entry#prefix_list_id Ec2ManagedPrefixListEntryA#prefix_list_id}
    */
    readonly prefixListId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_managed_prefix_list_entry aws_ec2_managed_prefix_list_entry}
*/
export declare class Ec2ManagedPrefixListEntryA extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_managed_prefix_list_entry";
    /**
    * Generates CDKTF code for importing a Ec2ManagedPrefixListEntryA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2ManagedPrefixListEntryA to import
    * @param importFromId The id of the existing Ec2ManagedPrefixListEntryA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_managed_prefix_list_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2ManagedPrefixListEntryA to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_managed_prefix_list_entry aws_ec2_managed_prefix_list_entry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ManagedPrefixListEntryAConfig
    */
    constructor(scope: Construct, id: string, config: Ec2ManagedPrefixListEntryAConfig);
    private _cidr?;
    get cidr(): string;
    set cidr(value: string);
    get cidrInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _prefixListId?;
    get prefixListId(): string;
    set prefixListId(value: string);
    get prefixListIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
