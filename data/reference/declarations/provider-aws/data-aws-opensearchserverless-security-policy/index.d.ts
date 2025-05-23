/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOpensearchserverlessSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_security_policy#id DataAwsOpensearchserverlessSecurityPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_security_policy#name DataAwsOpensearchserverlessSecurityPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_security_policy#type DataAwsOpensearchserverlessSecurityPolicy#type}
    */
    readonly type: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_security_policy aws_opensearchserverless_security_policy}
*/
export declare class DataAwsOpensearchserverlessSecurityPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_opensearchserverless_security_policy";
    /**
    * Generates CDKTF code for importing a DataAwsOpensearchserverlessSecurityPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsOpensearchserverlessSecurityPolicy to import
    * @param importFromId The id of the existing DataAwsOpensearchserverlessSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_security_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsOpensearchserverlessSecurityPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_security_policy aws_opensearchserverless_security_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOpensearchserverlessSecurityPolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsOpensearchserverlessSecurityPolicyConfig);
    get createdDate(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastModifiedDate(): string;
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
