/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CustomerprofilesProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#account_number CustomerprofilesProfile#account_number}
    */
    readonly accountNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#additional_information CustomerprofilesProfile#additional_information}
    */
    readonly additionalInformation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#attributes CustomerprofilesProfile#attributes}
    */
    readonly attributes?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#birth_date CustomerprofilesProfile#birth_date}
    */
    readonly birthDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#business_email_address CustomerprofilesProfile#business_email_address}
    */
    readonly businessEmailAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#business_name CustomerprofilesProfile#business_name}
    */
    readonly businessName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#business_phone_number CustomerprofilesProfile#business_phone_number}
    */
    readonly businessPhoneNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#domain_name CustomerprofilesProfile#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#email_address CustomerprofilesProfile#email_address}
    */
    readonly emailAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#first_name CustomerprofilesProfile#first_name}
    */
    readonly firstName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#gender_string CustomerprofilesProfile#gender_string}
    */
    readonly genderString?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#home_phone_number CustomerprofilesProfile#home_phone_number}
    */
    readonly homePhoneNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#id CustomerprofilesProfile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#last_name CustomerprofilesProfile#last_name}
    */
    readonly lastName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#middle_name CustomerprofilesProfile#middle_name}
    */
    readonly middleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#mobile_phone_number CustomerprofilesProfile#mobile_phone_number}
    */
    readonly mobilePhoneNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#party_type_string CustomerprofilesProfile#party_type_string}
    */
    readonly partyTypeString?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#personal_email_address CustomerprofilesProfile#personal_email_address}
    */
    readonly personalEmailAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#phone_number CustomerprofilesProfile#phone_number}
    */
    readonly phoneNumber?: string;
    /**
    * address block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#address CustomerprofilesProfile#address}
    */
    readonly address?: CustomerprofilesProfileAddress;
    /**
    * billing_address block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#billing_address CustomerprofilesProfile#billing_address}
    */
    readonly billingAddress?: CustomerprofilesProfileBillingAddress;
    /**
    * mailing_address block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#mailing_address CustomerprofilesProfile#mailing_address}
    */
    readonly mailingAddress?: CustomerprofilesProfileMailingAddress;
    /**
    * shipping_address block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#shipping_address CustomerprofilesProfile#shipping_address}
    */
    readonly shippingAddress?: CustomerprofilesProfileShippingAddress;
}
export interface CustomerprofilesProfileAddress {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}
    */
    readonly address1?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}
    */
    readonly address2?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}
    */
    readonly address3?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}
    */
    readonly address4?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}
    */
    readonly city?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}
    */
    readonly country?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}
    */
    readonly county?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}
    */
    readonly postalCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}
    */
    readonly province?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}
    */
    readonly state?: string;
}
export declare function customerprofilesProfileAddressToTerraform(struct?: CustomerprofilesProfileAddressOutputReference | CustomerprofilesProfileAddress): any;
export declare function customerprofilesProfileAddressToHclTerraform(struct?: CustomerprofilesProfileAddressOutputReference | CustomerprofilesProfileAddress): any;
export declare class CustomerprofilesProfileAddressOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomerprofilesProfileAddress | undefined;
    set internalValue(value: CustomerprofilesProfileAddress | undefined);
    private _address1?;
    get address1(): string;
    set address1(value: string);
    resetAddress1(): void;
    get address1Input(): string | undefined;
    private _address2?;
    get address2(): string;
    set address2(value: string);
    resetAddress2(): void;
    get address2Input(): string | undefined;
    private _address3?;
    get address3(): string;
    set address3(value: string);
    resetAddress3(): void;
    get address3Input(): string | undefined;
    private _address4?;
    get address4(): string;
    set address4(value: string);
    resetAddress4(): void;
    get address4Input(): string | undefined;
    private _city?;
    get city(): string;
    set city(value: string);
    resetCity(): void;
    get cityInput(): string | undefined;
    private _country?;
    get country(): string;
    set country(value: string);
    resetCountry(): void;
    get countryInput(): string | undefined;
    private _county?;
    get county(): string;
    set county(value: string);
    resetCounty(): void;
    get countyInput(): string | undefined;
    private _postalCode?;
    get postalCode(): string;
    set postalCode(value: string);
    resetPostalCode(): void;
    get postalCodeInput(): string | undefined;
    private _province?;
    get province(): string;
    set province(value: string);
    resetProvince(): void;
    get provinceInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
}
export interface CustomerprofilesProfileBillingAddress {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}
    */
    readonly address1?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}
    */
    readonly address2?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}
    */
    readonly address3?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}
    */
    readonly address4?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}
    */
    readonly city?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}
    */
    readonly country?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}
    */
    readonly county?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}
    */
    readonly postalCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}
    */
    readonly province?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}
    */
    readonly state?: string;
}
export declare function customerprofilesProfileBillingAddressToTerraform(struct?: CustomerprofilesProfileBillingAddressOutputReference | CustomerprofilesProfileBillingAddress): any;
export declare function customerprofilesProfileBillingAddressToHclTerraform(struct?: CustomerprofilesProfileBillingAddressOutputReference | CustomerprofilesProfileBillingAddress): any;
export declare class CustomerprofilesProfileBillingAddressOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomerprofilesProfileBillingAddress | undefined;
    set internalValue(value: CustomerprofilesProfileBillingAddress | undefined);
    private _address1?;
    get address1(): string;
    set address1(value: string);
    resetAddress1(): void;
    get address1Input(): string | undefined;
    private _address2?;
    get address2(): string;
    set address2(value: string);
    resetAddress2(): void;
    get address2Input(): string | undefined;
    private _address3?;
    get address3(): string;
    set address3(value: string);
    resetAddress3(): void;
    get address3Input(): string | undefined;
    private _address4?;
    get address4(): string;
    set address4(value: string);
    resetAddress4(): void;
    get address4Input(): string | undefined;
    private _city?;
    get city(): string;
    set city(value: string);
    resetCity(): void;
    get cityInput(): string | undefined;
    private _country?;
    get country(): string;
    set country(value: string);
    resetCountry(): void;
    get countryInput(): string | undefined;
    private _county?;
    get county(): string;
    set county(value: string);
    resetCounty(): void;
    get countyInput(): string | undefined;
    private _postalCode?;
    get postalCode(): string;
    set postalCode(value: string);
    resetPostalCode(): void;
    get postalCodeInput(): string | undefined;
    private _province?;
    get province(): string;
    set province(value: string);
    resetProvince(): void;
    get provinceInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
}
export interface CustomerprofilesProfileMailingAddress {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}
    */
    readonly address1?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}
    */
    readonly address2?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}
    */
    readonly address3?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}
    */
    readonly address4?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}
    */
    readonly city?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}
    */
    readonly country?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}
    */
    readonly county?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}
    */
    readonly postalCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}
    */
    readonly province?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}
    */
    readonly state?: string;
}
export declare function customerprofilesProfileMailingAddressToTerraform(struct?: CustomerprofilesProfileMailingAddressOutputReference | CustomerprofilesProfileMailingAddress): any;
export declare function customerprofilesProfileMailingAddressToHclTerraform(struct?: CustomerprofilesProfileMailingAddressOutputReference | CustomerprofilesProfileMailingAddress): any;
export declare class CustomerprofilesProfileMailingAddressOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomerprofilesProfileMailingAddress | undefined;
    set internalValue(value: CustomerprofilesProfileMailingAddress | undefined);
    private _address1?;
    get address1(): string;
    set address1(value: string);
    resetAddress1(): void;
    get address1Input(): string | undefined;
    private _address2?;
    get address2(): string;
    set address2(value: string);
    resetAddress2(): void;
    get address2Input(): string | undefined;
    private _address3?;
    get address3(): string;
    set address3(value: string);
    resetAddress3(): void;
    get address3Input(): string | undefined;
    private _address4?;
    get address4(): string;
    set address4(value: string);
    resetAddress4(): void;
    get address4Input(): string | undefined;
    private _city?;
    get city(): string;
    set city(value: string);
    resetCity(): void;
    get cityInput(): string | undefined;
    private _country?;
    get country(): string;
    set country(value: string);
    resetCountry(): void;
    get countryInput(): string | undefined;
    private _county?;
    get county(): string;
    set county(value: string);
    resetCounty(): void;
    get countyInput(): string | undefined;
    private _postalCode?;
    get postalCode(): string;
    set postalCode(value: string);
    resetPostalCode(): void;
    get postalCodeInput(): string | undefined;
    private _province?;
    get province(): string;
    set province(value: string);
    resetProvince(): void;
    get provinceInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
}
export interface CustomerprofilesProfileShippingAddress {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}
    */
    readonly address1?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}
    */
    readonly address2?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}
    */
    readonly address3?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}
    */
    readonly address4?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}
    */
    readonly city?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}
    */
    readonly country?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}
    */
    readonly county?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}
    */
    readonly postalCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}
    */
    readonly province?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}
    */
    readonly state?: string;
}
export declare function customerprofilesProfileShippingAddressToTerraform(struct?: CustomerprofilesProfileShippingAddressOutputReference | CustomerprofilesProfileShippingAddress): any;
export declare function customerprofilesProfileShippingAddressToHclTerraform(struct?: CustomerprofilesProfileShippingAddressOutputReference | CustomerprofilesProfileShippingAddress): any;
export declare class CustomerprofilesProfileShippingAddressOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomerprofilesProfileShippingAddress | undefined;
    set internalValue(value: CustomerprofilesProfileShippingAddress | undefined);
    private _address1?;
    get address1(): string;
    set address1(value: string);
    resetAddress1(): void;
    get address1Input(): string | undefined;
    private _address2?;
    get address2(): string;
    set address2(value: string);
    resetAddress2(): void;
    get address2Input(): string | undefined;
    private _address3?;
    get address3(): string;
    set address3(value: string);
    resetAddress3(): void;
    get address3Input(): string | undefined;
    private _address4?;
    get address4(): string;
    set address4(value: string);
    resetAddress4(): void;
    get address4Input(): string | undefined;
    private _city?;
    get city(): string;
    set city(value: string);
    resetCity(): void;
    get cityInput(): string | undefined;
    private _country?;
    get country(): string;
    set country(value: string);
    resetCountry(): void;
    get countryInput(): string | undefined;
    private _county?;
    get county(): string;
    set county(value: string);
    resetCounty(): void;
    get countyInput(): string | undefined;
    private _postalCode?;
    get postalCode(): string;
    set postalCode(value: string);
    resetPostalCode(): void;
    get postalCodeInput(): string | undefined;
    private _province?;
    get province(): string;
    set province(value: string);
    resetProvince(): void;
    get provinceInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile aws_customerprofiles_profile}
*/
export declare class CustomerprofilesProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_customerprofiles_profile";
    /**
    * Generates CDKTF code for importing a CustomerprofilesProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CustomerprofilesProfile to import
    * @param importFromId The id of the existing CustomerprofilesProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CustomerprofilesProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_profile aws_customerprofiles_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CustomerprofilesProfileConfig
    */
    constructor(scope: Construct, id: string, config: CustomerprofilesProfileConfig);
    private _accountNumber?;
    get accountNumber(): string;
    set accountNumber(value: string);
    resetAccountNumber(): void;
    get accountNumberInput(): string | undefined;
    private _additionalInformation?;
    get additionalInformation(): string;
    set additionalInformation(value: string);
    resetAdditionalInformation(): void;
    get additionalInformationInput(): string | undefined;
    private _attributes?;
    get attributes(): {
        [key: string]: string;
    };
    set attributes(value: {
        [key: string]: string;
    });
    resetAttributes(): void;
    get attributesInput(): {
        [key: string]: string;
    } | undefined;
    private _birthDate?;
    get birthDate(): string;
    set birthDate(value: string);
    resetBirthDate(): void;
    get birthDateInput(): string | undefined;
    private _businessEmailAddress?;
    get businessEmailAddress(): string;
    set businessEmailAddress(value: string);
    resetBusinessEmailAddress(): void;
    get businessEmailAddressInput(): string | undefined;
    private _businessName?;
    get businessName(): string;
    set businessName(value: string);
    resetBusinessName(): void;
    get businessNameInput(): string | undefined;
    private _businessPhoneNumber?;
    get businessPhoneNumber(): string;
    set businessPhoneNumber(value: string);
    resetBusinessPhoneNumber(): void;
    get businessPhoneNumberInput(): string | undefined;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _emailAddress?;
    get emailAddress(): string;
    set emailAddress(value: string);
    resetEmailAddress(): void;
    get emailAddressInput(): string | undefined;
    private _firstName?;
    get firstName(): string;
    set firstName(value: string);
    resetFirstName(): void;
    get firstNameInput(): string | undefined;
    private _genderString?;
    get genderString(): string;
    set genderString(value: string);
    resetGenderString(): void;
    get genderStringInput(): string | undefined;
    private _homePhoneNumber?;
    get homePhoneNumber(): string;
    set homePhoneNumber(value: string);
    resetHomePhoneNumber(): void;
    get homePhoneNumberInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _lastName?;
    get lastName(): string;
    set lastName(value: string);
    resetLastName(): void;
    get lastNameInput(): string | undefined;
    private _middleName?;
    get middleName(): string;
    set middleName(value: string);
    resetMiddleName(): void;
    get middleNameInput(): string | undefined;
    private _mobilePhoneNumber?;
    get mobilePhoneNumber(): string;
    set mobilePhoneNumber(value: string);
    resetMobilePhoneNumber(): void;
    get mobilePhoneNumberInput(): string | undefined;
    private _partyTypeString?;
    get partyTypeString(): string;
    set partyTypeString(value: string);
    resetPartyTypeString(): void;
    get partyTypeStringInput(): string | undefined;
    private _personalEmailAddress?;
    get personalEmailAddress(): string;
    set personalEmailAddress(value: string);
    resetPersonalEmailAddress(): void;
    get personalEmailAddressInput(): string | undefined;
    private _phoneNumber?;
    get phoneNumber(): string;
    set phoneNumber(value: string);
    resetPhoneNumber(): void;
    get phoneNumberInput(): string | undefined;
    private _address;
    get address(): CustomerprofilesProfileAddressOutputReference;
    putAddress(value: CustomerprofilesProfileAddress): void;
    resetAddress(): void;
    get addressInput(): CustomerprofilesProfileAddress | undefined;
    private _billingAddress;
    get billingAddress(): CustomerprofilesProfileBillingAddressOutputReference;
    putBillingAddress(value: CustomerprofilesProfileBillingAddress): void;
    resetBillingAddress(): void;
    get billingAddressInput(): CustomerprofilesProfileBillingAddress | undefined;
    private _mailingAddress;
    get mailingAddress(): CustomerprofilesProfileMailingAddressOutputReference;
    putMailingAddress(value: CustomerprofilesProfileMailingAddress): void;
    resetMailingAddress(): void;
    get mailingAddressInput(): CustomerprofilesProfileMailingAddress | undefined;
    private _shippingAddress;
    get shippingAddress(): CustomerprofilesProfileShippingAddressOutputReference;
    putShippingAddress(value: CustomerprofilesProfileShippingAddress): void;
    resetShippingAddress(): void;
    get shippingAddressInput(): CustomerprofilesProfileShippingAddress | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
