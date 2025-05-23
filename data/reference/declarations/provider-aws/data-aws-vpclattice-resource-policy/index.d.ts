/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpclatticeResourcePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpclattice_resource_policy#id DataAwsVpclatticeResourcePolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpclattice_resource_policy#resource_arn DataAwsVpclatticeResourcePolicy#resource_arn}
    */
    readonly resourceArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpclattice_resource_policy aws_vpclattice_resource_policy}
*/
export declare class DataAwsVpclatticeResourcePolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_vpclattice_resource_policy";
    /**
    * Generates CDKTF code for importing a DataAwsVpclatticeResourcePolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsVpclatticeResourcePolicy to import
    * @param importFromId The id of the existing DataAwsVpclatticeResourcePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpclattice_resource_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsVpclatticeResourcePolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpclattice_resource_policy aws_vpclattice_resource_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpclatticeResourcePolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsVpclatticeResourcePolicyConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get policy(): string;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
