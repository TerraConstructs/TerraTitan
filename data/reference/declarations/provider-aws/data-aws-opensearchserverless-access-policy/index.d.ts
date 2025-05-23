/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOpensearchserverlessAccessPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_access_policy#name DataAwsOpensearchserverlessAccessPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_access_policy#type DataAwsOpensearchserverlessAccessPolicy#type}
    */
    readonly type: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_access_policy aws_opensearchserverless_access_policy}
*/
export declare class DataAwsOpensearchserverlessAccessPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_opensearchserverless_access_policy";
    /**
    * Generates CDKTF code for importing a DataAwsOpensearchserverlessAccessPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsOpensearchserverlessAccessPolicy to import
    * @param importFromId The id of the existing DataAwsOpensearchserverlessAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_access_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsOpensearchserverlessAccessPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_access_policy aws_opensearchserverless_access_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOpensearchserverlessAccessPolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsOpensearchserverlessAccessPolicyConfig);
    get description(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get policy(): string;
    get policyVersion(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
