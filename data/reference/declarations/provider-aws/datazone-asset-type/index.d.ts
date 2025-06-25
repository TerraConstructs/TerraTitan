/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatazoneAssetTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_asset_type#description DatazoneAssetType#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_asset_type#domain_identifier DatazoneAssetType#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_asset_type#name DatazoneAssetType#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_asset_type#owning_project_identifier DatazoneAssetType#owning_project_identifier}
    */
    readonly owningProjectIdentifier: string;
    /**
    * forms_input block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_asset_type#forms_input DatazoneAssetType#forms_input}
    */
    readonly formsInput?: DatazoneAssetTypeFormsInput[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_asset_type#timeouts DatazoneAssetType#timeouts}
    */
    readonly timeouts?: DatazoneAssetTypeTimeouts;
}
export interface DatazoneAssetTypeFormsInput {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_asset_type#map_block_key DatazoneAssetType#map_block_key}
    */
    readonly mapBlockKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_asset_type#required DatazoneAssetType#required}
    */
    readonly required?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_asset_type#type_identifier DatazoneAssetType#type_identifier}
    */
    readonly typeIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_asset_type#type_revision DatazoneAssetType#type_revision}
    */
    readonly typeRevision: string;
}
export declare function datazoneAssetTypeFormsInputToTerraform(struct?: DatazoneAssetTypeFormsInput | cdktf.IResolvable): any;
export declare function datazoneAssetTypeFormsInputToHclTerraform(struct?: DatazoneAssetTypeFormsInput | cdktf.IResolvable): any;
export declare class DatazoneAssetTypeFormsInputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatazoneAssetTypeFormsInput | cdktf.IResolvable | undefined;
    set internalValue(value: DatazoneAssetTypeFormsInput | cdktf.IResolvable | undefined);
    private _mapBlockKey?;
    get mapBlockKey(): string;
    set mapBlockKey(value: string);
    get mapBlockKeyInput(): string | undefined;
    private _required?;
    get required(): boolean | cdktf.IResolvable;
    set required(value: boolean | cdktf.IResolvable);
    resetRequired(): void;
    get requiredInput(): boolean | cdktf.IResolvable | undefined;
    private _typeIdentifier?;
    get typeIdentifier(): string;
    set typeIdentifier(value: string);
    get typeIdentifierInput(): string | undefined;
    private _typeRevision?;
    get typeRevision(): string;
    set typeRevision(value: string);
    get typeRevisionInput(): string | undefined;
}
export declare class DatazoneAssetTypeFormsInputList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DatazoneAssetTypeFormsInput[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DatazoneAssetTypeFormsInputOutputReference;
}
export interface DatazoneAssetTypeTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_asset_type#create DatazoneAssetType#create}
    */
    readonly create?: string;
}
export declare function datazoneAssetTypeTimeoutsToTerraform(struct?: DatazoneAssetTypeTimeouts | cdktf.IResolvable): any;
export declare function datazoneAssetTypeTimeoutsToHclTerraform(struct?: DatazoneAssetTypeTimeouts | cdktf.IResolvable): any;
export declare class DatazoneAssetTypeTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatazoneAssetTypeTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DatazoneAssetTypeTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_asset_type aws_datazone_asset_type}
*/
export declare class DatazoneAssetType extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datazone_asset_type";
    /**
    * Generates CDKTF code for importing a DatazoneAssetType resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatazoneAssetType to import
    * @param importFromId The id of the existing DatazoneAssetType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_asset_type#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatazoneAssetType to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_asset_type aws_datazone_asset_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatazoneAssetTypeConfig
    */
    constructor(scope: Construct, id: string, config: DatazoneAssetTypeConfig);
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
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _owningProjectIdentifier?;
    get owningProjectIdentifier(): string;
    set owningProjectIdentifier(value: string);
    get owningProjectIdentifierInput(): string | undefined;
    get revision(): string;
    private _formsInput;
    get formsInput(): DatazoneAssetTypeFormsInputList;
    putFormsInput(value: DatazoneAssetTypeFormsInput[] | cdktf.IResolvable): void;
    resetFormsInput(): void;
    get formsInputInput(): cdktf.IResolvable | DatazoneAssetTypeFormsInput[] | undefined;
    private _timeouts;
    get timeouts(): DatazoneAssetTypeTimeoutsOutputReference;
    putTimeouts(value: DatazoneAssetTypeTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DatazoneAssetTypeTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
