/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogappregistryAttributeGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/servicecatalogappregistry_attribute_group#attributes ServicecatalogappregistryAttributeGroup#attributes}
    */
    readonly attributes: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/servicecatalogappregistry_attribute_group#description ServicecatalogappregistryAttributeGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/servicecatalogappregistry_attribute_group#name ServicecatalogappregistryAttributeGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/servicecatalogappregistry_attribute_group#tags ServicecatalogappregistryAttributeGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/servicecatalogappregistry_attribute_group aws_servicecatalogappregistry_attribute_group}
*/
export declare class ServicecatalogappregistryAttributeGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_servicecatalogappregistry_attribute_group";
    /**
    * Generates CDKTF code for importing a ServicecatalogappregistryAttributeGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ServicecatalogappregistryAttributeGroup to import
    * @param importFromId The id of the existing ServicecatalogappregistryAttributeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/servicecatalogappregistry_attribute_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ServicecatalogappregistryAttributeGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/servicecatalogappregistry_attribute_group aws_servicecatalogappregistry_attribute_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogappregistryAttributeGroupConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogappregistryAttributeGroupConfig);
    get arn(): string;
    private _attributes?;
    get attributes(): string;
    set attributes(value: string);
    get attributesInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
