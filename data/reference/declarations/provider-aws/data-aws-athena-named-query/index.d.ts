/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAthenaNamedQueryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/athena_named_query#id DataAwsAthenaNamedQuery#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/athena_named_query#name DataAwsAthenaNamedQuery#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/athena_named_query#workgroup DataAwsAthenaNamedQuery#workgroup}
    */
    readonly workgroup?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/athena_named_query aws_athena_named_query}
*/
export declare class DataAwsAthenaNamedQuery extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_athena_named_query";
    /**
    * Generates CDKTF code for importing a DataAwsAthenaNamedQuery resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAthenaNamedQuery to import
    * @param importFromId The id of the existing DataAwsAthenaNamedQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/athena_named_query#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAthenaNamedQuery to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/athena_named_query aws_athena_named_query} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAthenaNamedQueryConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAthenaNamedQueryConfig);
    get database(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get querystring(): string;
    private _workgroup?;
    get workgroup(): string;
    set workgroup(value: string);
    resetWorkgroup(): void;
    get workgroupInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
