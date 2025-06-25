/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatazoneFormTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_form_type#description DatazoneFormType#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_form_type#domain_identifier DatazoneFormType#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_form_type#name DatazoneFormType#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_form_type#owning_project_identifier DatazoneFormType#owning_project_identifier}
    */
    readonly owningProjectIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_form_type#status DatazoneFormType#status}
    */
    readonly status?: string;
    /**
    * model block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_form_type#model DatazoneFormType#model}
    */
    readonly model?: DatazoneFormTypeModel[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_form_type#timeouts DatazoneFormType#timeouts}
    */
    readonly timeouts?: DatazoneFormTypeTimeouts;
}
export interface DatazoneFormTypeImports {
}
export declare function datazoneFormTypeImportsToTerraform(struct?: DatazoneFormTypeImports): any;
export declare function datazoneFormTypeImportsToHclTerraform(struct?: DatazoneFormTypeImports): any;
export declare class DatazoneFormTypeImportsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatazoneFormTypeImports | undefined;
    set internalValue(value: DatazoneFormTypeImports | undefined);
    get name(): string;
    get revision(): string;
}
export declare class DatazoneFormTypeImportsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DatazoneFormTypeImportsOutputReference;
}
export interface DatazoneFormTypeModel {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_form_type#smithy DatazoneFormType#smithy}
    */
    readonly smithy: string;
}
export declare function datazoneFormTypeModelToTerraform(struct?: DatazoneFormTypeModel | cdktf.IResolvable): any;
export declare function datazoneFormTypeModelToHclTerraform(struct?: DatazoneFormTypeModel | cdktf.IResolvable): any;
export declare class DatazoneFormTypeModelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatazoneFormTypeModel | cdktf.IResolvable | undefined;
    set internalValue(value: DatazoneFormTypeModel | cdktf.IResolvable | undefined);
    private _smithy?;
    get smithy(): string;
    set smithy(value: string);
    get smithyInput(): string | undefined;
}
export declare class DatazoneFormTypeModelList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DatazoneFormTypeModel[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DatazoneFormTypeModelOutputReference;
}
export interface DatazoneFormTypeTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_form_type#create DatazoneFormType#create}
    */
    readonly create?: string;
}
export declare function datazoneFormTypeTimeoutsToTerraform(struct?: DatazoneFormTypeTimeouts | cdktf.IResolvable): any;
export declare function datazoneFormTypeTimeoutsToHclTerraform(struct?: DatazoneFormTypeTimeouts | cdktf.IResolvable): any;
export declare class DatazoneFormTypeTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatazoneFormTypeTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DatazoneFormTypeTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_form_type aws_datazone_form_type}
*/
export declare class DatazoneFormType extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datazone_form_type";
    /**
    * Generates CDKTF code for importing a DatazoneFormType resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatazoneFormType to import
    * @param importFromId The id of the existing DatazoneFormType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_form_type#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatazoneFormType to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_form_type aws_datazone_form_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatazoneFormTypeConfig
    */
    constructor(scope: Construct, id: string, config: DatazoneFormTypeConfig);
    get createdAt(): string;
    get createdBy(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _domainIdentifier?;
    get domainIdentifier(): string;
    set domainIdentifier(value: string);
    get domainIdentifierInput(): string | undefined;
    private _imports;
    get imports(): DatazoneFormTypeImportsList;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get originDomainId(): string;
    get originProjectId(): string;
    private _owningProjectIdentifier?;
    get owningProjectIdentifier(): string;
    set owningProjectIdentifier(value: string);
    get owningProjectIdentifierInput(): string | undefined;
    get revision(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _model;
    get model(): DatazoneFormTypeModelList;
    putModel(value: DatazoneFormTypeModel[] | cdktf.IResolvable): void;
    resetModel(): void;
    get modelInput(): cdktf.IResolvable | DatazoneFormTypeModel[] | undefined;
    private _timeouts;
    get timeouts(): DatazoneFormTypeTimeoutsOutputReference;
    putTimeouts(value: DatazoneFormTypeTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DatazoneFormTypeTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
