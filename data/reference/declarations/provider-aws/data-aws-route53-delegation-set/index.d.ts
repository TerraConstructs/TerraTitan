/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRoute53DelegationSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_delegation_set#id DataAwsRoute53DelegationSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_delegation_set aws_route53_delegation_set}
*/
export declare class DataAwsRoute53DelegationSet extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_route53_delegation_set";
    /**
    * Generates CDKTF code for importing a DataAwsRoute53DelegationSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRoute53DelegationSet to import
    * @param importFromId The id of the existing DataAwsRoute53DelegationSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_delegation_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRoute53DelegationSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_delegation_set aws_route53_delegation_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53DelegationSetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRoute53DelegationSetConfig);
    get arn(): string;
    get callerReference(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    get nameServers(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
