/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLbTrustStoreConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb_trust_store#arn DataAwsLbTrustStore#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb_trust_store#id DataAwsLbTrustStore#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb_trust_store#name DataAwsLbTrustStore#name}
    */
    readonly name?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb_trust_store aws_lb_trust_store}
*/
export declare class DataAwsLbTrustStore extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_lb_trust_store";
    /**
    * Generates CDKTF code for importing a DataAwsLbTrustStore resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLbTrustStore to import
    * @param importFromId The id of the existing DataAwsLbTrustStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb_trust_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLbTrustStore to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb_trust_store aws_lb_trust_store} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLbTrustStoreConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsLbTrustStoreConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
