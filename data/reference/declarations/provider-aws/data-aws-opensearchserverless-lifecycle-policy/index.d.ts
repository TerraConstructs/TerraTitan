/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOpensearchserverlessLifecyclePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_lifecycle_policy#name DataAwsOpensearchserverlessLifecyclePolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_lifecycle_policy#type DataAwsOpensearchserverlessLifecyclePolicy#type}
    */
    readonly type: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_lifecycle_policy aws_opensearchserverless_lifecycle_policy}
*/
export declare class DataAwsOpensearchserverlessLifecyclePolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_opensearchserverless_lifecycle_policy";
    /**
    * Generates CDKTF code for importing a DataAwsOpensearchserverlessLifecyclePolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsOpensearchserverlessLifecyclePolicy to import
    * @param importFromId The id of the existing DataAwsOpensearchserverlessLifecyclePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_lifecycle_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsOpensearchserverlessLifecyclePolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_lifecycle_policy aws_opensearchserverless_lifecycle_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOpensearchserverlessLifecyclePolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsOpensearchserverlessLifecyclePolicyConfig);
    get createdDate(): string;
    get description(): string;
    get id(): string;
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
