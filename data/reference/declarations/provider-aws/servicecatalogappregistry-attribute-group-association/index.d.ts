/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogappregistryAttributeGroupAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * ID of the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/servicecatalogappregistry_attribute_group_association#application_id ServicecatalogappregistryAttributeGroupAssociation#application_id}
    */
    readonly applicationId: string;
    /**
    * ID of the attribute group to associate with the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/servicecatalogappregistry_attribute_group_association#attribute_group_id ServicecatalogappregistryAttributeGroupAssociation#attribute_group_id}
    */
    readonly attributeGroupId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/servicecatalogappregistry_attribute_group_association aws_servicecatalogappregistry_attribute_group_association}
*/
export declare class ServicecatalogappregistryAttributeGroupAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_servicecatalogappregistry_attribute_group_association";
    /**
    * Generates CDKTF code for importing a ServicecatalogappregistryAttributeGroupAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ServicecatalogappregistryAttributeGroupAssociation to import
    * @param importFromId The id of the existing ServicecatalogappregistryAttributeGroupAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/servicecatalogappregistry_attribute_group_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ServicecatalogappregistryAttributeGroupAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/servicecatalogappregistry_attribute_group_association aws_servicecatalogappregistry_attribute_group_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogappregistryAttributeGroupAssociationConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogappregistryAttributeGroupAssociationConfig);
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string | undefined;
    private _attributeGroupId?;
    get attributeGroupId(): string;
    set attributeGroupId(value: string);
    get attributeGroupIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
