/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsIdentitystoreUsersConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/identitystore_users#identity_store_id DataAwsIdentitystoreUsers#identity_store_id}
    */
    readonly identityStoreId: string;
}
export interface DataAwsIdentitystoreUsersUsersAddresses {
}
export declare function dataAwsIdentitystoreUsersUsersAddressesToTerraform(struct?: DataAwsIdentitystoreUsersUsersAddresses): any;
export declare function dataAwsIdentitystoreUsersUsersAddressesToHclTerraform(struct?: DataAwsIdentitystoreUsersUsersAddresses): any;
export declare class DataAwsIdentitystoreUsersUsersAddressesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIdentitystoreUsersUsersAddresses | undefined;
    set internalValue(value: DataAwsIdentitystoreUsersUsersAddresses | undefined);
    get country(): string;
    get formatted(): string;
    get locality(): string;
    get postalCode(): string;
    get primary(): cdktf.IResolvable;
    get region(): string;
    get streetAddress(): string;
    get type(): string;
}
export declare class DataAwsIdentitystoreUsersUsersAddressesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsIdentitystoreUsersUsersAddressesOutputReference;
}
export interface DataAwsIdentitystoreUsersUsersEmails {
}
export declare function dataAwsIdentitystoreUsersUsersEmailsToTerraform(struct?: DataAwsIdentitystoreUsersUsersEmails): any;
export declare function dataAwsIdentitystoreUsersUsersEmailsToHclTerraform(struct?: DataAwsIdentitystoreUsersUsersEmails): any;
export declare class DataAwsIdentitystoreUsersUsersEmailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIdentitystoreUsersUsersEmails | undefined;
    set internalValue(value: DataAwsIdentitystoreUsersUsersEmails | undefined);
    get primary(): cdktf.IResolvable;
    get type(): string;
    get value(): string;
}
export declare class DataAwsIdentitystoreUsersUsersEmailsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsIdentitystoreUsersUsersEmailsOutputReference;
}
export interface DataAwsIdentitystoreUsersUsersExternalIds {
}
export declare function dataAwsIdentitystoreUsersUsersExternalIdsToTerraform(struct?: DataAwsIdentitystoreUsersUsersExternalIds): any;
export declare function dataAwsIdentitystoreUsersUsersExternalIdsToHclTerraform(struct?: DataAwsIdentitystoreUsersUsersExternalIds): any;
export declare class DataAwsIdentitystoreUsersUsersExternalIdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIdentitystoreUsersUsersExternalIds | undefined;
    set internalValue(value: DataAwsIdentitystoreUsersUsersExternalIds | undefined);
    get id(): string;
    get issuer(): string;
}
export declare class DataAwsIdentitystoreUsersUsersExternalIdsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsIdentitystoreUsersUsersExternalIdsOutputReference;
}
export interface DataAwsIdentitystoreUsersUsersName {
}
export declare function dataAwsIdentitystoreUsersUsersNameToTerraform(struct?: DataAwsIdentitystoreUsersUsersName): any;
export declare function dataAwsIdentitystoreUsersUsersNameToHclTerraform(struct?: DataAwsIdentitystoreUsersUsersName): any;
export declare class DataAwsIdentitystoreUsersUsersNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIdentitystoreUsersUsersName | undefined;
    set internalValue(value: DataAwsIdentitystoreUsersUsersName | undefined);
    get familyName(): string;
    get formatted(): string;
    get givenName(): string;
    get honorificPrefix(): string;
    get honorificSuffix(): string;
    get middleName(): string;
}
export declare class DataAwsIdentitystoreUsersUsersNameList extends cdktf.ComplexList {
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
    get(index: number): DataAwsIdentitystoreUsersUsersNameOutputReference;
}
export interface DataAwsIdentitystoreUsersUsersPhoneNumbers {
}
export declare function dataAwsIdentitystoreUsersUsersPhoneNumbersToTerraform(struct?: DataAwsIdentitystoreUsersUsersPhoneNumbers): any;
export declare function dataAwsIdentitystoreUsersUsersPhoneNumbersToHclTerraform(struct?: DataAwsIdentitystoreUsersUsersPhoneNumbers): any;
export declare class DataAwsIdentitystoreUsersUsersPhoneNumbersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIdentitystoreUsersUsersPhoneNumbers | undefined;
    set internalValue(value: DataAwsIdentitystoreUsersUsersPhoneNumbers | undefined);
    get primary(): cdktf.IResolvable;
    get type(): string;
    get value(): string;
}
export declare class DataAwsIdentitystoreUsersUsersPhoneNumbersList extends cdktf.ComplexList {
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
    get(index: number): DataAwsIdentitystoreUsersUsersPhoneNumbersOutputReference;
}
export interface DataAwsIdentitystoreUsersUsers {
}
export declare function dataAwsIdentitystoreUsersUsersToTerraform(struct?: DataAwsIdentitystoreUsersUsers): any;
export declare function dataAwsIdentitystoreUsersUsersToHclTerraform(struct?: DataAwsIdentitystoreUsersUsers): any;
export declare class DataAwsIdentitystoreUsersUsersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIdentitystoreUsersUsers | undefined;
    set internalValue(value: DataAwsIdentitystoreUsersUsers | undefined);
    private _addresses;
    get addresses(): DataAwsIdentitystoreUsersUsersAddressesList;
    get displayName(): string;
    private _emails;
    get emails(): DataAwsIdentitystoreUsersUsersEmailsList;
    private _externalIds;
    get externalIds(): DataAwsIdentitystoreUsersUsersExternalIdsList;
    get identityStoreId(): string;
    get locale(): string;
    private _name;
    get name(): DataAwsIdentitystoreUsersUsersNameList;
    get nickname(): string;
    private _phoneNumbers;
    get phoneNumbers(): DataAwsIdentitystoreUsersUsersPhoneNumbersList;
    get preferredLanguage(): string;
    get profileUrl(): string;
    get timezone(): string;
    get title(): string;
    get userId(): string;
    get userName(): string;
    get userType(): string;
}
export declare class DataAwsIdentitystoreUsersUsersList extends cdktf.ComplexList {
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
    get(index: number): DataAwsIdentitystoreUsersUsersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/identitystore_users aws_identitystore_users}
*/
export declare class DataAwsIdentitystoreUsers extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_identitystore_users";
    /**
    * Generates CDKTF code for importing a DataAwsIdentitystoreUsers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsIdentitystoreUsers to import
    * @param importFromId The id of the existing DataAwsIdentitystoreUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/identitystore_users#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsIdentitystoreUsers to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/identitystore_users aws_identitystore_users} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIdentitystoreUsersConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsIdentitystoreUsersConfig);
    private _identityStoreId?;
    get identityStoreId(): string;
    set identityStoreId(value: string);
    get identityStoreIdInput(): string | undefined;
    private _users;
    get users(): DataAwsIdentitystoreUsersUsersList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
