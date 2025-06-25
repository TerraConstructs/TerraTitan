/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatazoneGlossaryTermConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary_term#domain_identifier DatazoneGlossaryTerm#domain_identifier}
    */
    readonly domainIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary_term#glossary_identifier DatazoneGlossaryTerm#glossary_identifier}
    */
    readonly glossaryIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary_term#long_description DatazoneGlossaryTerm#long_description}
    */
    readonly longDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary_term#name DatazoneGlossaryTerm#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary_term#short_description DatazoneGlossaryTerm#short_description}
    */
    readonly shortDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary_term#status DatazoneGlossaryTerm#status}
    */
    readonly status?: string;
    /**
    * term_relations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary_term#term_relations DatazoneGlossaryTerm#term_relations}
    */
    readonly termRelations?: DatazoneGlossaryTermTermRelations[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary_term#timeouts DatazoneGlossaryTerm#timeouts}
    */
    readonly timeouts?: DatazoneGlossaryTermTimeouts;
}
export interface DatazoneGlossaryTermTermRelations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary_term#classifies DatazoneGlossaryTerm#classifies}
    */
    readonly classifies?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary_term#is_a DatazoneGlossaryTerm#is_a}
    */
    readonly isA?: string[];
}
export declare function datazoneGlossaryTermTermRelationsToTerraform(struct?: DatazoneGlossaryTermTermRelations | cdktf.IResolvable): any;
export declare function datazoneGlossaryTermTermRelationsToHclTerraform(struct?: DatazoneGlossaryTermTermRelations | cdktf.IResolvable): any;
export declare class DatazoneGlossaryTermTermRelationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatazoneGlossaryTermTermRelations | cdktf.IResolvable | undefined;
    set internalValue(value: DatazoneGlossaryTermTermRelations | cdktf.IResolvable | undefined);
    private _classifies?;
    get classifies(): string[];
    set classifies(value: string[]);
    resetClassifies(): void;
    get classifiesInput(): string[] | undefined;
    private _isA?;
    get isA(): string[];
    set isA(value: string[]);
    resetIsA(): void;
    get isAInput(): string[] | undefined;
}
export declare class DatazoneGlossaryTermTermRelationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DatazoneGlossaryTermTermRelations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DatazoneGlossaryTermTermRelationsOutputReference;
}
export interface DatazoneGlossaryTermTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary_term#create DatazoneGlossaryTerm#create}
    */
    readonly create?: string;
}
export declare function datazoneGlossaryTermTimeoutsToTerraform(struct?: DatazoneGlossaryTermTimeouts | cdktf.IResolvable): any;
export declare function datazoneGlossaryTermTimeoutsToHclTerraform(struct?: DatazoneGlossaryTermTimeouts | cdktf.IResolvable): any;
export declare class DatazoneGlossaryTermTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatazoneGlossaryTermTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DatazoneGlossaryTermTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary_term aws_datazone_glossary_term}
*/
export declare class DatazoneGlossaryTerm extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datazone_glossary_term";
    /**
    * Generates CDKTF code for importing a DatazoneGlossaryTerm resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatazoneGlossaryTerm to import
    * @param importFromId The id of the existing DatazoneGlossaryTerm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary_term#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatazoneGlossaryTerm to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_glossary_term aws_datazone_glossary_term} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatazoneGlossaryTermConfig
    */
    constructor(scope: Construct, id: string, config: DatazoneGlossaryTermConfig);
    get createdAt(): string;
    get createdBy(): string;
    private _domainIdentifier?;
    get domainIdentifier(): string;
    set domainIdentifier(value: string);
    resetDomainIdentifier(): void;
    get domainIdentifierInput(): string | undefined;
    private _glossaryIdentifier?;
    get glossaryIdentifier(): string;
    set glossaryIdentifier(value: string);
    get glossaryIdentifierInput(): string | undefined;
    get id(): string;
    private _longDescription?;
    get longDescription(): string;
    set longDescription(value: string);
    resetLongDescription(): void;
    get longDescriptionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _shortDescription?;
    get shortDescription(): string;
    set shortDescription(value: string);
    resetShortDescription(): void;
    get shortDescriptionInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _termRelations;
    get termRelations(): DatazoneGlossaryTermTermRelationsList;
    putTermRelations(value: DatazoneGlossaryTermTermRelations[] | cdktf.IResolvable): void;
    resetTermRelations(): void;
    get termRelationsInput(): cdktf.IResolvable | DatazoneGlossaryTermTermRelations[] | undefined;
    private _timeouts;
    get timeouts(): DatazoneGlossaryTermTimeoutsOutputReference;
    putTimeouts(value: DatazoneGlossaryTermTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DatazoneGlossaryTermTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
