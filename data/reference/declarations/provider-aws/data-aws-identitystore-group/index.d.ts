/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsIdentitystoreGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_group#group_id DataAwsIdentitystoreGroup#group_id}
    */
    readonly groupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_group#id DataAwsIdentitystoreGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_group#identity_store_id DataAwsIdentitystoreGroup#identity_store_id}
    */
    readonly identityStoreId: string;
    /**
    * alternate_identifier block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_group#alternate_identifier DataAwsIdentitystoreGroup#alternate_identifier}
    */
    readonly alternateIdentifier?: DataAwsIdentitystoreGroupAlternateIdentifier;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_group#filter DataAwsIdentitystoreGroup#filter}
    */
    readonly filter?: DataAwsIdentitystoreGroupFilter;
}
export interface DataAwsIdentitystoreGroupExternalIds {
}
export declare function dataAwsIdentitystoreGroupExternalIdsToTerraform(struct?: DataAwsIdentitystoreGroupExternalIds): any;
export declare function dataAwsIdentitystoreGroupExternalIdsToHclTerraform(struct?: DataAwsIdentitystoreGroupExternalIds): any;
export declare class DataAwsIdentitystoreGroupExternalIdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIdentitystoreGroupExternalIds | undefined;
    set internalValue(value: DataAwsIdentitystoreGroupExternalIds | undefined);
    get id(): string;
    get issuer(): string;
}
export declare class DataAwsIdentitystoreGroupExternalIdsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsIdentitystoreGroupExternalIdsOutputReference;
}
export interface DataAwsIdentitystoreGroupAlternateIdentifierExternalId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_group#id DataAwsIdentitystoreGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_group#issuer DataAwsIdentitystoreGroup#issuer}
    */
    readonly issuer: string;
}
export declare function dataAwsIdentitystoreGroupAlternateIdentifierExternalIdToTerraform(struct?: DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference | DataAwsIdentitystoreGroupAlternateIdentifierExternalId): any;
export declare function dataAwsIdentitystoreGroupAlternateIdentifierExternalIdToHclTerraform(struct?: DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference | DataAwsIdentitystoreGroupAlternateIdentifierExternalId): any;
export declare class DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsIdentitystoreGroupAlternateIdentifierExternalId | undefined;
    set internalValue(value: DataAwsIdentitystoreGroupAlternateIdentifierExternalId | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _issuer?;
    get issuer(): string;
    set issuer(value: string);
    get issuerInput(): string | undefined;
}
export interface DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}
    */
    readonly attributePath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}
    */
    readonly attributeValue: string;
}
export declare function dataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeToTerraform(struct?: DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference | DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute): any;
export declare function dataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeToHclTerraform(struct?: DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference | DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute): any;
export declare class DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute | undefined;
    set internalValue(value: DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute | undefined);
    private _attributePath?;
    get attributePath(): string;
    set attributePath(value: string);
    get attributePathInput(): string | undefined;
    private _attributeValue?;
    get attributeValue(): string;
    set attributeValue(value: string);
    get attributeValueInput(): string | undefined;
}
export interface DataAwsIdentitystoreGroupAlternateIdentifier {
    /**
    * external_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_group#external_id DataAwsIdentitystoreGroup#external_id}
    */
    readonly externalId?: DataAwsIdentitystoreGroupAlternateIdentifierExternalId;
    /**
    * unique_attribute block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_group#unique_attribute DataAwsIdentitystoreGroup#unique_attribute}
    */
    readonly uniqueAttribute?: DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute;
}
export declare function dataAwsIdentitystoreGroupAlternateIdentifierToTerraform(struct?: DataAwsIdentitystoreGroupAlternateIdentifierOutputReference | DataAwsIdentitystoreGroupAlternateIdentifier): any;
export declare function dataAwsIdentitystoreGroupAlternateIdentifierToHclTerraform(struct?: DataAwsIdentitystoreGroupAlternateIdentifierOutputReference | DataAwsIdentitystoreGroupAlternateIdentifier): any;
export declare class DataAwsIdentitystoreGroupAlternateIdentifierOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsIdentitystoreGroupAlternateIdentifier | undefined;
    set internalValue(value: DataAwsIdentitystoreGroupAlternateIdentifier | undefined);
    private _externalId;
    get externalId(): DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference;
    putExternalId(value: DataAwsIdentitystoreGroupAlternateIdentifierExternalId): void;
    resetExternalId(): void;
    get externalIdInput(): DataAwsIdentitystoreGroupAlternateIdentifierExternalId | undefined;
    private _uniqueAttribute;
    get uniqueAttribute(): DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference;
    putUniqueAttribute(value: DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute): void;
    resetUniqueAttribute(): void;
    get uniqueAttributeInput(): DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute | undefined;
}
export interface DataAwsIdentitystoreGroupFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}
    */
    readonly attributePath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}
    */
    readonly attributeValue: string;
}
export declare function dataAwsIdentitystoreGroupFilterToTerraform(struct?: DataAwsIdentitystoreGroupFilterOutputReference | DataAwsIdentitystoreGroupFilter): any;
export declare function dataAwsIdentitystoreGroupFilterToHclTerraform(struct?: DataAwsIdentitystoreGroupFilterOutputReference | DataAwsIdentitystoreGroupFilter): any;
export declare class DataAwsIdentitystoreGroupFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsIdentitystoreGroupFilter | undefined;
    set internalValue(value: DataAwsIdentitystoreGroupFilter | undefined);
    private _attributePath?;
    get attributePath(): string;
    set attributePath(value: string);
    get attributePathInput(): string | undefined;
    private _attributeValue?;
    get attributeValue(): string;
    set attributeValue(value: string);
    get attributeValueInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_group aws_identitystore_group}
*/
export declare class DataAwsIdentitystoreGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_identitystore_group";
    /**
    * Generates CDKTF code for importing a DataAwsIdentitystoreGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsIdentitystoreGroup to import
    * @param importFromId The id of the existing DataAwsIdentitystoreGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsIdentitystoreGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_group aws_identitystore_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIdentitystoreGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsIdentitystoreGroupConfig);
    get description(): string;
    get displayName(): string;
    private _externalIds;
    get externalIds(): DataAwsIdentitystoreGroupExternalIdsList;
    private _groupId?;
    get groupId(): string;
    set groupId(value: string);
    resetGroupId(): void;
    get groupIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identityStoreId?;
    get identityStoreId(): string;
    set identityStoreId(value: string);
    get identityStoreIdInput(): string | undefined;
    private _alternateIdentifier;
    get alternateIdentifier(): DataAwsIdentitystoreGroupAlternateIdentifierOutputReference;
    putAlternateIdentifier(value: DataAwsIdentitystoreGroupAlternateIdentifier): void;
    resetAlternateIdentifier(): void;
    get alternateIdentifierInput(): DataAwsIdentitystoreGroupAlternateIdentifier | undefined;
    private _filter;
    get filter(): DataAwsIdentitystoreGroupFilterOutputReference;
    putFilter(value: DataAwsIdentitystoreGroupFilter): void;
    resetFilter(): void;
    get filterInput(): DataAwsIdentitystoreGroupFilter | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
