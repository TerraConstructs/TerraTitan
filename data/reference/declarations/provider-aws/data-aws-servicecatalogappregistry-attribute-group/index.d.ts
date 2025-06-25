/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsServicecatalogappregistryAttributeGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/servicecatalogappregistry_attribute_group#arn DataAwsServicecatalogappregistryAttributeGroup#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/servicecatalogappregistry_attribute_group#id DataAwsServicecatalogappregistryAttributeGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/servicecatalogappregistry_attribute_group#name DataAwsServicecatalogappregistryAttributeGroup#name}
    */
    readonly name?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/servicecatalogappregistry_attribute_group aws_servicecatalogappregistry_attribute_group}
*/
export declare class DataAwsServicecatalogappregistryAttributeGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_servicecatalogappregistry_attribute_group";
    /**
    * Generates CDKTF code for importing a DataAwsServicecatalogappregistryAttributeGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsServicecatalogappregistryAttributeGroup to import
    * @param importFromId The id of the existing DataAwsServicecatalogappregistryAttributeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/servicecatalogappregistry_attribute_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsServicecatalogappregistryAttributeGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/servicecatalogappregistry_attribute_group aws_servicecatalogappregistry_attribute_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogappregistryAttributeGroupConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsServicecatalogappregistryAttributeGroupConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
    get attributes(): string;
    get description(): string;
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
    private _tags;
    get tags(): cdktf.StringMap;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
