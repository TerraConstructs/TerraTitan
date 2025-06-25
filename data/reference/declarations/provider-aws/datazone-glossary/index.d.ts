/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatazoneGlossaryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary#description DatazoneGlossary#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary#domain_identifier DatazoneGlossary#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary#name DatazoneGlossary#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary#owning_project_identifier DatazoneGlossary#owning_project_identifier}
    */
    readonly owningProjectIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary#status DatazoneGlossary#status}
    */
    readonly status?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary aws_datazone_glossary}
*/
export declare class DatazoneGlossary extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datazone_glossary";
    /**
    * Generates CDKTF code for importing a DatazoneGlossary resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatazoneGlossary to import
    * @param importFromId The id of the existing DatazoneGlossary that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatazoneGlossary to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary aws_datazone_glossary} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatazoneGlossaryConfig
    */
    constructor(scope: Construct, id: string, config: DatazoneGlossaryConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _domainIdentifier?;
    get domainIdentifier(): string;
    set domainIdentifier(value: string);
    get domainIdentifierInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _owningProjectIdentifier?;
    get owningProjectIdentifier(): string;
    set owningProjectIdentifier(value: string);
    get owningProjectIdentifierInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
