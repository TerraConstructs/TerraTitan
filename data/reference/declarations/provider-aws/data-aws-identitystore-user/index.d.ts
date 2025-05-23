/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsIdentitystoreUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_user#id DataAwsIdentitystoreUser#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_user#identity_store_id DataAwsIdentitystoreUser#identity_store_id}
    */
    readonly identityStoreId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_user#user_id DataAwsIdentitystoreUser#user_id}
    */
    readonly userId?: string;
    /**
    * alternate_identifier block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_user#alternate_identifier DataAwsIdentitystoreUser#alternate_identifier}
    */
    readonly alternateIdentifier?: DataAwsIdentitystoreUserAlternateIdentifier;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_user#filter DataAwsIdentitystoreUser#filter}
    */
    readonly filter?: DataAwsIdentitystoreUserFilter;
}
export interface DataAwsIdentitystoreUserAddresses {
}
export declare function dataAwsIdentitystoreUserAddressesToTerraform(struct?: DataAwsIdentitystoreUserAddresses): any;
export declare function dataAwsIdentitystoreUserAddressesToHclTerraform(struct?: DataAwsIdentitystoreUserAddresses): any;
export declare class DataAwsIdentitystoreUserAddressesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIdentitystoreUserAddresses | undefined;
    set internalValue(value: DataAwsIdentitystoreUserAddresses | undefined);
    get country(): string;
    get formatted(): string;
    get locality(): string;
    get postalCode(): string;
    get primary(): cdktf.IResolvable;
    get region(): string;
    get streetAddress(): string;
    get type(): string;
}
export declare class DataAwsIdentitystoreUserAddressesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsIdentitystoreUserAddressesOutputReference;
}
export interface DataAwsIdentitystoreUserEmails {
}
export declare function dataAwsIdentitystoreUserEmailsToTerraform(struct?: DataAwsIdentitystoreUserEmails): any;
export declare function dataAwsIdentitystoreUserEmailsToHclTerraform(struct?: DataAwsIdentitystoreUserEmails): any;
export declare class DataAwsIdentitystoreUserEmailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIdentitystoreUserEmails | undefined;
    set internalValue(value: DataAwsIdentitystoreUserEmails | undefined);
    get primary(): cdktf.IResolvable;
    get type(): string;
    get value(): string;
}
export declare class DataAwsIdentitystoreUserEmailsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsIdentitystoreUserEmailsOutputReference;
}
export interface DataAwsIdentitystoreUserExternalIds {
}
export declare function dataAwsIdentitystoreUserExternalIdsToTerraform(struct?: DataAwsIdentitystoreUserExternalIds): any;
export declare function dataAwsIdentitystoreUserExternalIdsToHclTerraform(struct?: DataAwsIdentitystoreUserExternalIds): any;
export declare class DataAwsIdentitystoreUserExternalIdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIdentitystoreUserExternalIds | undefined;
    set internalValue(value: DataAwsIdentitystoreUserExternalIds | undefined);
    get id(): string;
    get issuer(): string;
}
export declare class DataAwsIdentitystoreUserExternalIdsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsIdentitystoreUserExternalIdsOutputReference;
}
export interface DataAwsIdentitystoreUserName {
}
export declare function dataAwsIdentitystoreUserNameToTerraform(struct?: DataAwsIdentitystoreUserName): any;
export declare function dataAwsIdentitystoreUserNameToHclTerraform(struct?: DataAwsIdentitystoreUserName): any;
export declare class DataAwsIdentitystoreUserNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIdentitystoreUserName | undefined;
    set internalValue(value: DataAwsIdentitystoreUserName | undefined);
    get familyName(): string;
    get formatted(): string;
    get givenName(): string;
    get honorificPrefix(): string;
    get honorificSuffix(): string;
    get middleName(): string;
}
export declare class DataAwsIdentitystoreUserNameList extends cdktf.ComplexList {
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
    get(index: number): DataAwsIdentitystoreUserNameOutputReference;
}
export interface DataAwsIdentitystoreUserPhoneNumbers {
}
export declare function dataAwsIdentitystoreUserPhoneNumbersToTerraform(struct?: DataAwsIdentitystoreUserPhoneNumbers): any;
export declare function dataAwsIdentitystoreUserPhoneNumbersToHclTerraform(struct?: DataAwsIdentitystoreUserPhoneNumbers): any;
export declare class DataAwsIdentitystoreUserPhoneNumbersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIdentitystoreUserPhoneNumbers | undefined;
    set internalValue(value: DataAwsIdentitystoreUserPhoneNumbers | undefined);
    get primary(): cdktf.IResolvable;
    get type(): string;
    get value(): string;
}
export declare class DataAwsIdentitystoreUserPhoneNumbersList extends cdktf.ComplexList {
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
    get(index: number): DataAwsIdentitystoreUserPhoneNumbersOutputReference;
}
export interface DataAwsIdentitystoreUserAlternateIdentifierExternalId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_user#id DataAwsIdentitystoreUser#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_user#issuer DataAwsIdentitystoreUser#issuer}
    */
    readonly issuer: string;
}
export declare function dataAwsIdentitystoreUserAlternateIdentifierExternalIdToTerraform(struct?: DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference | DataAwsIdentitystoreUserAlternateIdentifierExternalId): any;
export declare function dataAwsIdentitystoreUserAlternateIdentifierExternalIdToHclTerraform(struct?: DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference | DataAwsIdentitystoreUserAlternateIdentifierExternalId): any;
export declare class DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsIdentitystoreUserAlternateIdentifierExternalId | undefined;
    set internalValue(value: DataAwsIdentitystoreUserAlternateIdentifierExternalId | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _issuer?;
    get issuer(): string;
    set issuer(value: string);
    get issuerInput(): string | undefined;
}
export interface DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}
    */
    readonly attributePath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}
    */
    readonly attributeValue: string;
}
export declare function dataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeToTerraform(struct?: DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference | DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute): any;
export declare function dataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeToHclTerraform(struct?: DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference | DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute): any;
export declare class DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute | undefined;
    set internalValue(value: DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute | undefined);
    private _attributePath?;
    get attributePath(): string;
    set attributePath(value: string);
    get attributePathInput(): string | undefined;
    private _attributeValue?;
    get attributeValue(): string;
    set attributeValue(value: string);
    get attributeValueInput(): string | undefined;
}
export interface DataAwsIdentitystoreUserAlternateIdentifier {
    /**
    * external_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_user#external_id DataAwsIdentitystoreUser#external_id}
    */
    readonly externalId?: DataAwsIdentitystoreUserAlternateIdentifierExternalId;
    /**
    * unique_attribute block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_user#unique_attribute DataAwsIdentitystoreUser#unique_attribute}
    */
    readonly uniqueAttribute?: DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute;
}
export declare function dataAwsIdentitystoreUserAlternateIdentifierToTerraform(struct?: DataAwsIdentitystoreUserAlternateIdentifierOutputReference | DataAwsIdentitystoreUserAlternateIdentifier): any;
export declare function dataAwsIdentitystoreUserAlternateIdentifierToHclTerraform(struct?: DataAwsIdentitystoreUserAlternateIdentifierOutputReference | DataAwsIdentitystoreUserAlternateIdentifier): any;
export declare class DataAwsIdentitystoreUserAlternateIdentifierOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsIdentitystoreUserAlternateIdentifier | undefined;
    set internalValue(value: DataAwsIdentitystoreUserAlternateIdentifier | undefined);
    private _externalId;
    get externalId(): DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference;
    putExternalId(value: DataAwsIdentitystoreUserAlternateIdentifierExternalId): void;
    resetExternalId(): void;
    get externalIdInput(): DataAwsIdentitystoreUserAlternateIdentifierExternalId | undefined;
    private _uniqueAttribute;
    get uniqueAttribute(): DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference;
    putUniqueAttribute(value: DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute): void;
    resetUniqueAttribute(): void;
    get uniqueAttributeInput(): DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute | undefined;
}
export interface DataAwsIdentitystoreUserFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}
    */
    readonly attributePath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}
    */
    readonly attributeValue: string;
}
export declare function dataAwsIdentitystoreUserFilterToTerraform(struct?: DataAwsIdentitystoreUserFilterOutputReference | DataAwsIdentitystoreUserFilter): any;
export declare function dataAwsIdentitystoreUserFilterToHclTerraform(struct?: DataAwsIdentitystoreUserFilterOutputReference | DataAwsIdentitystoreUserFilter): any;
export declare class DataAwsIdentitystoreUserFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsIdentitystoreUserFilter | undefined;
    set internalValue(value: DataAwsIdentitystoreUserFilter | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_user aws_identitystore_user}
*/
export declare class DataAwsIdentitystoreUser extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_identitystore_user";
    /**
    * Generates CDKTF code for importing a DataAwsIdentitystoreUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsIdentitystoreUser to import
    * @param importFromId The id of the existing DataAwsIdentitystoreUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsIdentitystoreUser to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/identitystore_user aws_identitystore_user} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIdentitystoreUserConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsIdentitystoreUserConfig);
    private _addresses;
    get addresses(): DataAwsIdentitystoreUserAddressesList;
    get displayName(): string;
    private _emails;
    get emails(): DataAwsIdentitystoreUserEmailsList;
    private _externalIds;
    get externalIds(): DataAwsIdentitystoreUserExternalIdsList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identityStoreId?;
    get identityStoreId(): string;
    set identityStoreId(value: string);
    get identityStoreIdInput(): string | undefined;
    get locale(): string;
    private _name;
    get name(): DataAwsIdentitystoreUserNameList;
    get nickname(): string;
    private _phoneNumbers;
    get phoneNumbers(): DataAwsIdentitystoreUserPhoneNumbersList;
    get preferredLanguage(): string;
    get profileUrl(): string;
    get timezone(): string;
    get title(): string;
    private _userId?;
    get userId(): string;
    set userId(value: string);
    resetUserId(): void;
    get userIdInput(): string | undefined;
    get userName(): string;
    get userType(): string;
    private _alternateIdentifier;
    get alternateIdentifier(): DataAwsIdentitystoreUserAlternateIdentifierOutputReference;
    putAlternateIdentifier(value: DataAwsIdentitystoreUserAlternateIdentifier): void;
    resetAlternateIdentifier(): void;
    get alternateIdentifierInput(): DataAwsIdentitystoreUserAlternateIdentifier | undefined;
    private _filter;
    get filter(): DataAwsIdentitystoreUserFilterOutputReference;
    putFilter(value: DataAwsIdentitystoreUserFilter): void;
    resetFilter(): void;
    get filterInput(): DataAwsIdentitystoreUserFilter | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
