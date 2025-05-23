/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IdentitystoreUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#display_name IdentitystoreUser#display_name}
    */
    readonly displayName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#id IdentitystoreUser#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#identity_store_id IdentitystoreUser#identity_store_id}
    */
    readonly identityStoreId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#locale IdentitystoreUser#locale}
    */
    readonly locale?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#nickname IdentitystoreUser#nickname}
    */
    readonly nickname?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#preferred_language IdentitystoreUser#preferred_language}
    */
    readonly preferredLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#profile_url IdentitystoreUser#profile_url}
    */
    readonly profileUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#timezone IdentitystoreUser#timezone}
    */
    readonly timezone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#title IdentitystoreUser#title}
    */
    readonly title?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#user_name IdentitystoreUser#user_name}
    */
    readonly userName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#user_type IdentitystoreUser#user_type}
    */
    readonly userType?: string;
    /**
    * addresses block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#addresses IdentitystoreUser#addresses}
    */
    readonly addresses?: IdentitystoreUserAddresses;
    /**
    * emails block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#emails IdentitystoreUser#emails}
    */
    readonly emails?: IdentitystoreUserEmails;
    /**
    * name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#name IdentitystoreUser#name}
    */
    readonly name: IdentitystoreUserName;
    /**
    * phone_numbers block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#phone_numbers IdentitystoreUser#phone_numbers}
    */
    readonly phoneNumbers?: IdentitystoreUserPhoneNumbers;
}
export interface IdentitystoreUserExternalIds {
}
export declare function identitystoreUserExternalIdsToTerraform(struct?: IdentitystoreUserExternalIds): any;
export declare function identitystoreUserExternalIdsToHclTerraform(struct?: IdentitystoreUserExternalIds): any;
export declare class IdentitystoreUserExternalIdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IdentitystoreUserExternalIds | undefined;
    set internalValue(value: IdentitystoreUserExternalIds | undefined);
    get id(): string;
    get issuer(): string;
}
export declare class IdentitystoreUserExternalIdsList extends cdktf.ComplexList {
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
    get(index: number): IdentitystoreUserExternalIdsOutputReference;
}
export interface IdentitystoreUserAddresses {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#country IdentitystoreUser#country}
    */
    readonly country?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#formatted IdentitystoreUser#formatted}
    */
    readonly formatted?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#locality IdentitystoreUser#locality}
    */
    readonly locality?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#postal_code IdentitystoreUser#postal_code}
    */
    readonly postalCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}
    */
    readonly primary?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#region IdentitystoreUser#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#street_address IdentitystoreUser#street_address}
    */
    readonly streetAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#type IdentitystoreUser#type}
    */
    readonly type?: string;
}
export declare function identitystoreUserAddressesToTerraform(struct?: IdentitystoreUserAddressesOutputReference | IdentitystoreUserAddresses): any;
export declare function identitystoreUserAddressesToHclTerraform(struct?: IdentitystoreUserAddressesOutputReference | IdentitystoreUserAddresses): any;
export declare class IdentitystoreUserAddressesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IdentitystoreUserAddresses | undefined;
    set internalValue(value: IdentitystoreUserAddresses | undefined);
    private _country?;
    get country(): string;
    set country(value: string);
    resetCountry(): void;
    get countryInput(): string | undefined;
    private _formatted?;
    get formatted(): string;
    set formatted(value: string);
    resetFormatted(): void;
    get formattedInput(): string | undefined;
    private _locality?;
    get locality(): string;
    set locality(value: string);
    resetLocality(): void;
    get localityInput(): string | undefined;
    private _postalCode?;
    get postalCode(): string;
    set postalCode(value: string);
    resetPostalCode(): void;
    get postalCodeInput(): string | undefined;
    private _primary?;
    get primary(): boolean | cdktf.IResolvable;
    set primary(value: boolean | cdktf.IResolvable);
    resetPrimary(): void;
    get primaryInput(): boolean | cdktf.IResolvable | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _streetAddress?;
    get streetAddress(): string;
    set streetAddress(value: string);
    resetStreetAddress(): void;
    get streetAddressInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export interface IdentitystoreUserEmails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}
    */
    readonly primary?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#type IdentitystoreUser#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#value IdentitystoreUser#value}
    */
    readonly value?: string;
}
export declare function identitystoreUserEmailsToTerraform(struct?: IdentitystoreUserEmailsOutputReference | IdentitystoreUserEmails): any;
export declare function identitystoreUserEmailsToHclTerraform(struct?: IdentitystoreUserEmailsOutputReference | IdentitystoreUserEmails): any;
export declare class IdentitystoreUserEmailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IdentitystoreUserEmails | undefined;
    set internalValue(value: IdentitystoreUserEmails | undefined);
    private _primary?;
    get primary(): boolean | cdktf.IResolvable;
    set primary(value: boolean | cdktf.IResolvable);
    resetPrimary(): void;
    get primaryInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export interface IdentitystoreUserName {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#family_name IdentitystoreUser#family_name}
    */
    readonly familyName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#formatted IdentitystoreUser#formatted}
    */
    readonly formatted?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#given_name IdentitystoreUser#given_name}
    */
    readonly givenName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#honorific_prefix IdentitystoreUser#honorific_prefix}
    */
    readonly honorificPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#honorific_suffix IdentitystoreUser#honorific_suffix}
    */
    readonly honorificSuffix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#middle_name IdentitystoreUser#middle_name}
    */
    readonly middleName?: string;
}
export declare function identitystoreUserNameToTerraform(struct?: IdentitystoreUserNameOutputReference | IdentitystoreUserName): any;
export declare function identitystoreUserNameToHclTerraform(struct?: IdentitystoreUserNameOutputReference | IdentitystoreUserName): any;
export declare class IdentitystoreUserNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IdentitystoreUserName | undefined;
    set internalValue(value: IdentitystoreUserName | undefined);
    private _familyName?;
    get familyName(): string;
    set familyName(value: string);
    get familyNameInput(): string | undefined;
    private _formatted?;
    get formatted(): string;
    set formatted(value: string);
    resetFormatted(): void;
    get formattedInput(): string | undefined;
    private _givenName?;
    get givenName(): string;
    set givenName(value: string);
    get givenNameInput(): string | undefined;
    private _honorificPrefix?;
    get honorificPrefix(): string;
    set honorificPrefix(value: string);
    resetHonorificPrefix(): void;
    get honorificPrefixInput(): string | undefined;
    private _honorificSuffix?;
    get honorificSuffix(): string;
    set honorificSuffix(value: string);
    resetHonorificSuffix(): void;
    get honorificSuffixInput(): string | undefined;
    private _middleName?;
    get middleName(): string;
    set middleName(value: string);
    resetMiddleName(): void;
    get middleNameInput(): string | undefined;
}
export interface IdentitystoreUserPhoneNumbers {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}
    */
    readonly primary?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#type IdentitystoreUser#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#value IdentitystoreUser#value}
    */
    readonly value?: string;
}
export declare function identitystoreUserPhoneNumbersToTerraform(struct?: IdentitystoreUserPhoneNumbersOutputReference | IdentitystoreUserPhoneNumbers): any;
export declare function identitystoreUserPhoneNumbersToHclTerraform(struct?: IdentitystoreUserPhoneNumbersOutputReference | IdentitystoreUserPhoneNumbers): any;
export declare class IdentitystoreUserPhoneNumbersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IdentitystoreUserPhoneNumbers | undefined;
    set internalValue(value: IdentitystoreUserPhoneNumbers | undefined);
    private _primary?;
    get primary(): boolean | cdktf.IResolvable;
    set primary(value: boolean | cdktf.IResolvable);
    resetPrimary(): void;
    get primaryInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user aws_identitystore_user}
*/
export declare class IdentitystoreUser extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_identitystore_user";
    /**
    * Generates CDKTF code for importing a IdentitystoreUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentitystoreUser to import
    * @param importFromId The id of the existing IdentitystoreUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentitystoreUser to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_user aws_identitystore_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentitystoreUserConfig
    */
    constructor(scope: Construct, id: string, config: IdentitystoreUserConfig);
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    get displayNameInput(): string | undefined;
    private _externalIds;
    get externalIds(): IdentitystoreUserExternalIdsList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identityStoreId?;
    get identityStoreId(): string;
    set identityStoreId(value: string);
    get identityStoreIdInput(): string | undefined;
    private _locale?;
    get locale(): string;
    set locale(value: string);
    resetLocale(): void;
    get localeInput(): string | undefined;
    private _nickname?;
    get nickname(): string;
    set nickname(value: string);
    resetNickname(): void;
    get nicknameInput(): string | undefined;
    private _preferredLanguage?;
    get preferredLanguage(): string;
    set preferredLanguage(value: string);
    resetPreferredLanguage(): void;
    get preferredLanguageInput(): string | undefined;
    private _profileUrl?;
    get profileUrl(): string;
    set profileUrl(value: string);
    resetProfileUrl(): void;
    get profileUrlInput(): string | undefined;
    private _timezone?;
    get timezone(): string;
    set timezone(value: string);
    resetTimezone(): void;
    get timezoneInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    resetTitle(): void;
    get titleInput(): string | undefined;
    get userId(): string;
    private _userName?;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string | undefined;
    private _userType?;
    get userType(): string;
    set userType(value: string);
    resetUserType(): void;
    get userTypeInput(): string | undefined;
    private _addresses;
    get addresses(): IdentitystoreUserAddressesOutputReference;
    putAddresses(value: IdentitystoreUserAddresses): void;
    resetAddresses(): void;
    get addressesInput(): IdentitystoreUserAddresses | undefined;
    private _emails;
    get emails(): IdentitystoreUserEmailsOutputReference;
    putEmails(value: IdentitystoreUserEmails): void;
    resetEmails(): void;
    get emailsInput(): IdentitystoreUserEmails | undefined;
    private _name;
    get name(): IdentitystoreUserNameOutputReference;
    putName(value: IdentitystoreUserName): void;
    get nameInput(): IdentitystoreUserName | undefined;
    private _phoneNumbers;
    get phoneNumbers(): IdentitystoreUserPhoneNumbersOutputReference;
    putPhoneNumbers(value: IdentitystoreUserPhoneNumbers): void;
    resetPhoneNumbers(): void;
    get phoneNumbersInput(): IdentitystoreUserPhoneNumbers | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
