/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53DomainsRegisteredDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#admin_privacy Route53DomainsRegisteredDomain#admin_privacy}
    */
    readonly adminPrivacy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#auto_renew Route53DomainsRegisteredDomain#auto_renew}
    */
    readonly autoRenew?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#billing_privacy Route53DomainsRegisteredDomain#billing_privacy}
    */
    readonly billingPrivacy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#domain_name Route53DomainsRegisteredDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#id Route53DomainsRegisteredDomain#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#registrant_privacy Route53DomainsRegisteredDomain#registrant_privacy}
    */
    readonly registrantPrivacy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#tags Route53DomainsRegisteredDomain#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#tags_all Route53DomainsRegisteredDomain#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#tech_privacy Route53DomainsRegisteredDomain#tech_privacy}
    */
    readonly techPrivacy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#transfer_lock Route53DomainsRegisteredDomain#transfer_lock}
    */
    readonly transferLock?: boolean | cdktf.IResolvable;
    /**
    * admin_contact block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#admin_contact Route53DomainsRegisteredDomain#admin_contact}
    */
    readonly adminContact?: Route53DomainsRegisteredDomainAdminContact;
    /**
    * billing_contact block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#billing_contact Route53DomainsRegisteredDomain#billing_contact}
    */
    readonly billingContact?: Route53DomainsRegisteredDomainBillingContact;
    /**
    * name_server block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#name_server Route53DomainsRegisteredDomain#name_server}
    */
    readonly nameServer?: Route53DomainsRegisteredDomainNameServer[] | cdktf.IResolvable;
    /**
    * registrant_contact block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#registrant_contact Route53DomainsRegisteredDomain#registrant_contact}
    */
    readonly registrantContact?: Route53DomainsRegisteredDomainRegistrantContact;
    /**
    * tech_contact block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#tech_contact Route53DomainsRegisteredDomain#tech_contact}
    */
    readonly techContact?: Route53DomainsRegisteredDomainTechContact;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#timeouts Route53DomainsRegisteredDomain#timeouts}
    */
    readonly timeouts?: Route53DomainsRegisteredDomainTimeouts;
}
export interface Route53DomainsRegisteredDomainAdminContact {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}
    */
    readonly addressLine1?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}
    */
    readonly addressLine2?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}
    */
    readonly city?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}
    */
    readonly contactType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}
    */
    readonly countryCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}
    */
    readonly email?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}
    */
    readonly extraParams?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}
    */
    readonly fax?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}
    */
    readonly firstName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}
    */
    readonly lastName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}
    */
    readonly organizationName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}
    */
    readonly phoneNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}
    */
    readonly zipCode?: string;
}
export declare function route53DomainsRegisteredDomainAdminContactToTerraform(struct?: Route53DomainsRegisteredDomainAdminContactOutputReference | Route53DomainsRegisteredDomainAdminContact): any;
export declare function route53DomainsRegisteredDomainAdminContactToHclTerraform(struct?: Route53DomainsRegisteredDomainAdminContactOutputReference | Route53DomainsRegisteredDomainAdminContact): any;
export declare class Route53DomainsRegisteredDomainAdminContactOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53DomainsRegisteredDomainAdminContact | undefined;
    set internalValue(value: Route53DomainsRegisteredDomainAdminContact | undefined);
    private _addressLine1?;
    get addressLine1(): string;
    set addressLine1(value: string);
    resetAddressLine1(): void;
    get addressLine1Input(): string | undefined;
    private _addressLine2?;
    get addressLine2(): string;
    set addressLine2(value: string);
    resetAddressLine2(): void;
    get addressLine2Input(): string | undefined;
    private _city?;
    get city(): string;
    set city(value: string);
    resetCity(): void;
    get cityInput(): string | undefined;
    private _contactType?;
    get contactType(): string;
    set contactType(value: string);
    resetContactType(): void;
    get contactTypeInput(): string | undefined;
    private _countryCode?;
    get countryCode(): string;
    set countryCode(value: string);
    resetCountryCode(): void;
    get countryCodeInput(): string | undefined;
    private _email?;
    get email(): string;
    set email(value: string);
    resetEmail(): void;
    get emailInput(): string | undefined;
    private _extraParams?;
    get extraParams(): {
        [key: string]: string;
    };
    set extraParams(value: {
        [key: string]: string;
    });
    resetExtraParams(): void;
    get extraParamsInput(): {
        [key: string]: string;
    } | undefined;
    private _fax?;
    get fax(): string;
    set fax(value: string);
    resetFax(): void;
    get faxInput(): string | undefined;
    private _firstName?;
    get firstName(): string;
    set firstName(value: string);
    resetFirstName(): void;
    get firstNameInput(): string | undefined;
    private _lastName?;
    get lastName(): string;
    set lastName(value: string);
    resetLastName(): void;
    get lastNameInput(): string | undefined;
    private _organizationName?;
    get organizationName(): string;
    set organizationName(value: string);
    resetOrganizationName(): void;
    get organizationNameInput(): string | undefined;
    private _phoneNumber?;
    get phoneNumber(): string;
    set phoneNumber(value: string);
    resetPhoneNumber(): void;
    get phoneNumberInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
    private _zipCode?;
    get zipCode(): string;
    set zipCode(value: string);
    resetZipCode(): void;
    get zipCodeInput(): string | undefined;
}
export interface Route53DomainsRegisteredDomainBillingContact {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}
    */
    readonly addressLine1?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}
    */
    readonly addressLine2?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}
    */
    readonly city?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}
    */
    readonly contactType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}
    */
    readonly countryCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}
    */
    readonly email?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}
    */
    readonly extraParams?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}
    */
    readonly fax?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}
    */
    readonly firstName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}
    */
    readonly lastName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}
    */
    readonly organizationName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}
    */
    readonly phoneNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}
    */
    readonly zipCode?: string;
}
export declare function route53DomainsRegisteredDomainBillingContactToTerraform(struct?: Route53DomainsRegisteredDomainBillingContactOutputReference | Route53DomainsRegisteredDomainBillingContact): any;
export declare function route53DomainsRegisteredDomainBillingContactToHclTerraform(struct?: Route53DomainsRegisteredDomainBillingContactOutputReference | Route53DomainsRegisteredDomainBillingContact): any;
export declare class Route53DomainsRegisteredDomainBillingContactOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53DomainsRegisteredDomainBillingContact | undefined;
    set internalValue(value: Route53DomainsRegisteredDomainBillingContact | undefined);
    private _addressLine1?;
    get addressLine1(): string;
    set addressLine1(value: string);
    resetAddressLine1(): void;
    get addressLine1Input(): string | undefined;
    private _addressLine2?;
    get addressLine2(): string;
    set addressLine2(value: string);
    resetAddressLine2(): void;
    get addressLine2Input(): string | undefined;
    private _city?;
    get city(): string;
    set city(value: string);
    resetCity(): void;
    get cityInput(): string | undefined;
    private _contactType?;
    get contactType(): string;
    set contactType(value: string);
    resetContactType(): void;
    get contactTypeInput(): string | undefined;
    private _countryCode?;
    get countryCode(): string;
    set countryCode(value: string);
    resetCountryCode(): void;
    get countryCodeInput(): string | undefined;
    private _email?;
    get email(): string;
    set email(value: string);
    resetEmail(): void;
    get emailInput(): string | undefined;
    private _extraParams?;
    get extraParams(): {
        [key: string]: string;
    };
    set extraParams(value: {
        [key: string]: string;
    });
    resetExtraParams(): void;
    get extraParamsInput(): {
        [key: string]: string;
    } | undefined;
    private _fax?;
    get fax(): string;
    set fax(value: string);
    resetFax(): void;
    get faxInput(): string | undefined;
    private _firstName?;
    get firstName(): string;
    set firstName(value: string);
    resetFirstName(): void;
    get firstNameInput(): string | undefined;
    private _lastName?;
    get lastName(): string;
    set lastName(value: string);
    resetLastName(): void;
    get lastNameInput(): string | undefined;
    private _organizationName?;
    get organizationName(): string;
    set organizationName(value: string);
    resetOrganizationName(): void;
    get organizationNameInput(): string | undefined;
    private _phoneNumber?;
    get phoneNumber(): string;
    set phoneNumber(value: string);
    resetPhoneNumber(): void;
    get phoneNumberInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
    private _zipCode?;
    get zipCode(): string;
    set zipCode(value: string);
    resetZipCode(): void;
    get zipCodeInput(): string | undefined;
}
export interface Route53DomainsRegisteredDomainNameServer {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#glue_ips Route53DomainsRegisteredDomain#glue_ips}
    */
    readonly glueIps?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#name Route53DomainsRegisteredDomain#name}
    */
    readonly name: string;
}
export declare function route53DomainsRegisteredDomainNameServerToTerraform(struct?: Route53DomainsRegisteredDomainNameServer | cdktf.IResolvable): any;
export declare function route53DomainsRegisteredDomainNameServerToHclTerraform(struct?: Route53DomainsRegisteredDomainNameServer | cdktf.IResolvable): any;
export declare class Route53DomainsRegisteredDomainNameServerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53DomainsRegisteredDomainNameServer | cdktf.IResolvable | undefined;
    set internalValue(value: Route53DomainsRegisteredDomainNameServer | cdktf.IResolvable | undefined);
    private _glueIps?;
    get glueIps(): string[];
    set glueIps(value: string[]);
    resetGlueIps(): void;
    get glueIpsInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export declare class Route53DomainsRegisteredDomainNameServerList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53DomainsRegisteredDomainNameServer[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53DomainsRegisteredDomainNameServerOutputReference;
}
export interface Route53DomainsRegisteredDomainRegistrantContact {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}
    */
    readonly addressLine1?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}
    */
    readonly addressLine2?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}
    */
    readonly city?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}
    */
    readonly contactType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}
    */
    readonly countryCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}
    */
    readonly email?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}
    */
    readonly extraParams?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}
    */
    readonly fax?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}
    */
    readonly firstName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}
    */
    readonly lastName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}
    */
    readonly organizationName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}
    */
    readonly phoneNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}
    */
    readonly zipCode?: string;
}
export declare function route53DomainsRegisteredDomainRegistrantContactToTerraform(struct?: Route53DomainsRegisteredDomainRegistrantContactOutputReference | Route53DomainsRegisteredDomainRegistrantContact): any;
export declare function route53DomainsRegisteredDomainRegistrantContactToHclTerraform(struct?: Route53DomainsRegisteredDomainRegistrantContactOutputReference | Route53DomainsRegisteredDomainRegistrantContact): any;
export declare class Route53DomainsRegisteredDomainRegistrantContactOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53DomainsRegisteredDomainRegistrantContact | undefined;
    set internalValue(value: Route53DomainsRegisteredDomainRegistrantContact | undefined);
    private _addressLine1?;
    get addressLine1(): string;
    set addressLine1(value: string);
    resetAddressLine1(): void;
    get addressLine1Input(): string | undefined;
    private _addressLine2?;
    get addressLine2(): string;
    set addressLine2(value: string);
    resetAddressLine2(): void;
    get addressLine2Input(): string | undefined;
    private _city?;
    get city(): string;
    set city(value: string);
    resetCity(): void;
    get cityInput(): string | undefined;
    private _contactType?;
    get contactType(): string;
    set contactType(value: string);
    resetContactType(): void;
    get contactTypeInput(): string | undefined;
    private _countryCode?;
    get countryCode(): string;
    set countryCode(value: string);
    resetCountryCode(): void;
    get countryCodeInput(): string | undefined;
    private _email?;
    get email(): string;
    set email(value: string);
    resetEmail(): void;
    get emailInput(): string | undefined;
    private _extraParams?;
    get extraParams(): {
        [key: string]: string;
    };
    set extraParams(value: {
        [key: string]: string;
    });
    resetExtraParams(): void;
    get extraParamsInput(): {
        [key: string]: string;
    } | undefined;
    private _fax?;
    get fax(): string;
    set fax(value: string);
    resetFax(): void;
    get faxInput(): string | undefined;
    private _firstName?;
    get firstName(): string;
    set firstName(value: string);
    resetFirstName(): void;
    get firstNameInput(): string | undefined;
    private _lastName?;
    get lastName(): string;
    set lastName(value: string);
    resetLastName(): void;
    get lastNameInput(): string | undefined;
    private _organizationName?;
    get organizationName(): string;
    set organizationName(value: string);
    resetOrganizationName(): void;
    get organizationNameInput(): string | undefined;
    private _phoneNumber?;
    get phoneNumber(): string;
    set phoneNumber(value: string);
    resetPhoneNumber(): void;
    get phoneNumberInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
    private _zipCode?;
    get zipCode(): string;
    set zipCode(value: string);
    resetZipCode(): void;
    get zipCodeInput(): string | undefined;
}
export interface Route53DomainsRegisteredDomainTechContact {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}
    */
    readonly addressLine1?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}
    */
    readonly addressLine2?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}
    */
    readonly city?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}
    */
    readonly contactType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}
    */
    readonly countryCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}
    */
    readonly email?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}
    */
    readonly extraParams?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}
    */
    readonly fax?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}
    */
    readonly firstName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}
    */
    readonly lastName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}
    */
    readonly organizationName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}
    */
    readonly phoneNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}
    */
    readonly zipCode?: string;
}
export declare function route53DomainsRegisteredDomainTechContactToTerraform(struct?: Route53DomainsRegisteredDomainTechContactOutputReference | Route53DomainsRegisteredDomainTechContact): any;
export declare function route53DomainsRegisteredDomainTechContactToHclTerraform(struct?: Route53DomainsRegisteredDomainTechContactOutputReference | Route53DomainsRegisteredDomainTechContact): any;
export declare class Route53DomainsRegisteredDomainTechContactOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53DomainsRegisteredDomainTechContact | undefined;
    set internalValue(value: Route53DomainsRegisteredDomainTechContact | undefined);
    private _addressLine1?;
    get addressLine1(): string;
    set addressLine1(value: string);
    resetAddressLine1(): void;
    get addressLine1Input(): string | undefined;
    private _addressLine2?;
    get addressLine2(): string;
    set addressLine2(value: string);
    resetAddressLine2(): void;
    get addressLine2Input(): string | undefined;
    private _city?;
    get city(): string;
    set city(value: string);
    resetCity(): void;
    get cityInput(): string | undefined;
    private _contactType?;
    get contactType(): string;
    set contactType(value: string);
    resetContactType(): void;
    get contactTypeInput(): string | undefined;
    private _countryCode?;
    get countryCode(): string;
    set countryCode(value: string);
    resetCountryCode(): void;
    get countryCodeInput(): string | undefined;
    private _email?;
    get email(): string;
    set email(value: string);
    resetEmail(): void;
    get emailInput(): string | undefined;
    private _extraParams?;
    get extraParams(): {
        [key: string]: string;
    };
    set extraParams(value: {
        [key: string]: string;
    });
    resetExtraParams(): void;
    get extraParamsInput(): {
        [key: string]: string;
    } | undefined;
    private _fax?;
    get fax(): string;
    set fax(value: string);
    resetFax(): void;
    get faxInput(): string | undefined;
    private _firstName?;
    get firstName(): string;
    set firstName(value: string);
    resetFirstName(): void;
    get firstNameInput(): string | undefined;
    private _lastName?;
    get lastName(): string;
    set lastName(value: string);
    resetLastName(): void;
    get lastNameInput(): string | undefined;
    private _organizationName?;
    get organizationName(): string;
    set organizationName(value: string);
    resetOrganizationName(): void;
    get organizationNameInput(): string | undefined;
    private _phoneNumber?;
    get phoneNumber(): string;
    set phoneNumber(value: string);
    resetPhoneNumber(): void;
    get phoneNumberInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
    private _zipCode?;
    get zipCode(): string;
    set zipCode(value: string);
    resetZipCode(): void;
    get zipCodeInput(): string | undefined;
}
export interface Route53DomainsRegisteredDomainTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#create Route53DomainsRegisteredDomain#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#update Route53DomainsRegisteredDomain#update}
    */
    readonly update?: string;
}
export declare function route53DomainsRegisteredDomainTimeoutsToTerraform(struct?: Route53DomainsRegisteredDomainTimeouts | cdktf.IResolvable): any;
export declare function route53DomainsRegisteredDomainTimeoutsToHclTerraform(struct?: Route53DomainsRegisteredDomainTimeouts | cdktf.IResolvable): any;
export declare class Route53DomainsRegisteredDomainTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53DomainsRegisteredDomainTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Route53DomainsRegisteredDomainTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain aws_route53domains_registered_domain}
*/
export declare class Route53DomainsRegisteredDomain extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53domains_registered_domain";
    /**
    * Generates CDKTF code for importing a Route53DomainsRegisteredDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53DomainsRegisteredDomain to import
    * @param importFromId The id of the existing Route53DomainsRegisteredDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53DomainsRegisteredDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53domains_registered_domain aws_route53domains_registered_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53DomainsRegisteredDomainConfig
    */
    constructor(scope: Construct, id: string, config: Route53DomainsRegisteredDomainConfig);
    get abuseContactEmail(): string;
    get abuseContactPhone(): string;
    private _adminPrivacy?;
    get adminPrivacy(): boolean | cdktf.IResolvable;
    set adminPrivacy(value: boolean | cdktf.IResolvable);
    resetAdminPrivacy(): void;
    get adminPrivacyInput(): boolean | cdktf.IResolvable | undefined;
    private _autoRenew?;
    get autoRenew(): boolean | cdktf.IResolvable;
    set autoRenew(value: boolean | cdktf.IResolvable);
    resetAutoRenew(): void;
    get autoRenewInput(): boolean | cdktf.IResolvable | undefined;
    private _billingPrivacy?;
    get billingPrivacy(): boolean | cdktf.IResolvable;
    set billingPrivacy(value: boolean | cdktf.IResolvable);
    resetBillingPrivacy(): void;
    get billingPrivacyInput(): boolean | cdktf.IResolvable | undefined;
    get creationDate(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    get expirationDate(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _registrantPrivacy?;
    get registrantPrivacy(): boolean | cdktf.IResolvable;
    set registrantPrivacy(value: boolean | cdktf.IResolvable);
    resetRegistrantPrivacy(): void;
    get registrantPrivacyInput(): boolean | cdktf.IResolvable | undefined;
    get registrarName(): string;
    get registrarUrl(): string;
    get reseller(): string;
    get statusList(): string[];
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _techPrivacy?;
    get techPrivacy(): boolean | cdktf.IResolvable;
    set techPrivacy(value: boolean | cdktf.IResolvable);
    resetTechPrivacy(): void;
    get techPrivacyInput(): boolean | cdktf.IResolvable | undefined;
    private _transferLock?;
    get transferLock(): boolean | cdktf.IResolvable;
    set transferLock(value: boolean | cdktf.IResolvable);
    resetTransferLock(): void;
    get transferLockInput(): boolean | cdktf.IResolvable | undefined;
    get updatedDate(): string;
    get whoisServer(): string;
    private _adminContact;
    get adminContact(): Route53DomainsRegisteredDomainAdminContactOutputReference;
    putAdminContact(value: Route53DomainsRegisteredDomainAdminContact): void;
    resetAdminContact(): void;
    get adminContactInput(): Route53DomainsRegisteredDomainAdminContact | undefined;
    private _billingContact;
    get billingContact(): Route53DomainsRegisteredDomainBillingContactOutputReference;
    putBillingContact(value: Route53DomainsRegisteredDomainBillingContact): void;
    resetBillingContact(): void;
    get billingContactInput(): Route53DomainsRegisteredDomainBillingContact | undefined;
    private _nameServer;
    get nameServer(): Route53DomainsRegisteredDomainNameServerList;
    putNameServer(value: Route53DomainsRegisteredDomainNameServer[] | cdktf.IResolvable): void;
    resetNameServer(): void;
    get nameServerInput(): cdktf.IResolvable | Route53DomainsRegisteredDomainNameServer[] | undefined;
    private _registrantContact;
    get registrantContact(): Route53DomainsRegisteredDomainRegistrantContactOutputReference;
    putRegistrantContact(value: Route53DomainsRegisteredDomainRegistrantContact): void;
    resetRegistrantContact(): void;
    get registrantContactInput(): Route53DomainsRegisteredDomainRegistrantContact | undefined;
    private _techContact;
    get techContact(): Route53DomainsRegisteredDomainTechContactOutputReference;
    putTechContact(value: Route53DomainsRegisteredDomainTechContact): void;
    resetTechContact(): void;
    get techContactInput(): Route53DomainsRegisteredDomainTechContact | undefined;
    private _timeouts;
    get timeouts(): Route53DomainsRegisteredDomainTimeoutsOutputReference;
    putTimeouts(value: Route53DomainsRegisteredDomainTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Route53DomainsRegisteredDomainTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
