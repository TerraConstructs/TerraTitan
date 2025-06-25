/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53DomainsDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#admin_privacy Route53DomainsDomain#admin_privacy}
    */
    readonly adminPrivacy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#auto_renew Route53DomainsDomain#auto_renew}
    */
    readonly autoRenew?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#billing_contact Route53DomainsDomain#billing_contact}
    */
    readonly billingContact?: Route53DomainsDomainBillingContact[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#billing_privacy Route53DomainsDomain#billing_privacy}
    */
    readonly billingPrivacy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#domain_name Route53DomainsDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#duration_in_years Route53DomainsDomain#duration_in_years}
    */
    readonly durationInYears?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#name_server Route53DomainsDomain#name_server}
    */
    readonly nameServer?: Route53DomainsDomainNameServer[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#registrant_privacy Route53DomainsDomain#registrant_privacy}
    */
    readonly registrantPrivacy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#tags Route53DomainsDomain#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#tech_privacy Route53DomainsDomain#tech_privacy}
    */
    readonly techPrivacy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#transfer_lock Route53DomainsDomain#transfer_lock}
    */
    readonly transferLock?: boolean | cdktf.IResolvable;
    /**
    * admin_contact block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#admin_contact Route53DomainsDomain#admin_contact}
    */
    readonly adminContact?: Route53DomainsDomainAdminContact[] | cdktf.IResolvable;
    /**
    * registrant_contact block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#registrant_contact Route53DomainsDomain#registrant_contact}
    */
    readonly registrantContact?: Route53DomainsDomainRegistrantContact[] | cdktf.IResolvable;
    /**
    * tech_contact block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#tech_contact Route53DomainsDomain#tech_contact}
    */
    readonly techContact?: Route53DomainsDomainTechContact[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#timeouts Route53DomainsDomain#timeouts}
    */
    readonly timeouts?: Route53DomainsDomainTimeouts;
}
export interface Route53DomainsDomainBillingContactExtraParam {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}
    */
    readonly value?: string;
}
export declare function route53DomainsDomainBillingContactExtraParamToTerraform(struct?: Route53DomainsDomainBillingContactExtraParam | cdktf.IResolvable): any;
export declare function route53DomainsDomainBillingContactExtraParamToHclTerraform(struct?: Route53DomainsDomainBillingContactExtraParam | cdktf.IResolvable): any;
export declare class Route53DomainsDomainBillingContactExtraParamOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53DomainsDomainBillingContactExtraParam | cdktf.IResolvable | undefined;
    set internalValue(value: Route53DomainsDomainBillingContactExtraParam | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class Route53DomainsDomainBillingContactExtraParamList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53DomainsDomainBillingContactExtraParam[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53DomainsDomainBillingContactExtraParamOutputReference;
}
export interface Route53DomainsDomainBillingContact {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}
    */
    readonly addressLine1?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}
    */
    readonly addressLine2?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}
    */
    readonly city?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}
    */
    readonly contactType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}
    */
    readonly countryCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}
    */
    readonly email?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}
    */
    readonly extraParam?: Route53DomainsDomainBillingContactExtraParam[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}
    */
    readonly fax?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}
    */
    readonly firstName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}
    */
    readonly lastName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}
    */
    readonly organizationName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}
    */
    readonly phoneNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}
    */
    readonly zipCode?: string;
}
export declare function route53DomainsDomainBillingContactToTerraform(struct?: Route53DomainsDomainBillingContact | cdktf.IResolvable): any;
export declare function route53DomainsDomainBillingContactToHclTerraform(struct?: Route53DomainsDomainBillingContact | cdktf.IResolvable): any;
export declare class Route53DomainsDomainBillingContactOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53DomainsDomainBillingContact | cdktf.IResolvable | undefined;
    set internalValue(value: Route53DomainsDomainBillingContact | cdktf.IResolvable | undefined);
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
    private _extraParam;
    get extraParam(): Route53DomainsDomainBillingContactExtraParamList;
    putExtraParam(value: Route53DomainsDomainBillingContactExtraParam[] | cdktf.IResolvable): void;
    resetExtraParam(): void;
    get extraParamInput(): cdktf.IResolvable | Route53DomainsDomainBillingContactExtraParam[] | undefined;
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
export declare class Route53DomainsDomainBillingContactList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53DomainsDomainBillingContact[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53DomainsDomainBillingContactOutputReference;
}
export interface Route53DomainsDomainNameServer {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#glue_ips Route53DomainsDomain#glue_ips}
    */
    readonly glueIps?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}
    */
    readonly name?: string;
}
export declare function route53DomainsDomainNameServerToTerraform(struct?: Route53DomainsDomainNameServer | cdktf.IResolvable): any;
export declare function route53DomainsDomainNameServerToHclTerraform(struct?: Route53DomainsDomainNameServer | cdktf.IResolvable): any;
export declare class Route53DomainsDomainNameServerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53DomainsDomainNameServer | cdktf.IResolvable | undefined;
    set internalValue(value: Route53DomainsDomainNameServer | cdktf.IResolvable | undefined);
    private _glueIps?;
    get glueIps(): string[];
    set glueIps(value: string[]);
    resetGlueIps(): void;
    get glueIpsInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
}
export declare class Route53DomainsDomainNameServerList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53DomainsDomainNameServer[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53DomainsDomainNameServerOutputReference;
}
export interface Route53DomainsDomainAdminContactExtraParam {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}
    */
    readonly value: string;
}
export declare function route53DomainsDomainAdminContactExtraParamToTerraform(struct?: Route53DomainsDomainAdminContactExtraParam | cdktf.IResolvable): any;
export declare function route53DomainsDomainAdminContactExtraParamToHclTerraform(struct?: Route53DomainsDomainAdminContactExtraParam | cdktf.IResolvable): any;
export declare class Route53DomainsDomainAdminContactExtraParamOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53DomainsDomainAdminContactExtraParam | cdktf.IResolvable | undefined;
    set internalValue(value: Route53DomainsDomainAdminContactExtraParam | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Route53DomainsDomainAdminContactExtraParamList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53DomainsDomainAdminContactExtraParam[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53DomainsDomainAdminContactExtraParamOutputReference;
}
export interface Route53DomainsDomainAdminContact {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}
    */
    readonly addressLine1?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}
    */
    readonly addressLine2?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}
    */
    readonly city?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}
    */
    readonly contactType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}
    */
    readonly countryCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}
    */
    readonly email?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}
    */
    readonly fax?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}
    */
    readonly firstName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}
    */
    readonly lastName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}
    */
    readonly organizationName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}
    */
    readonly phoneNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}
    */
    readonly zipCode?: string;
    /**
    * extra_param block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}
    */
    readonly extraParam?: Route53DomainsDomainAdminContactExtraParam[] | cdktf.IResolvable;
}
export declare function route53DomainsDomainAdminContactToTerraform(struct?: Route53DomainsDomainAdminContact | cdktf.IResolvable): any;
export declare function route53DomainsDomainAdminContactToHclTerraform(struct?: Route53DomainsDomainAdminContact | cdktf.IResolvable): any;
export declare class Route53DomainsDomainAdminContactOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53DomainsDomainAdminContact | cdktf.IResolvable | undefined;
    set internalValue(value: Route53DomainsDomainAdminContact | cdktf.IResolvable | undefined);
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
    private _extraParam;
    get extraParam(): Route53DomainsDomainAdminContactExtraParamList;
    putExtraParam(value: Route53DomainsDomainAdminContactExtraParam[] | cdktf.IResolvable): void;
    resetExtraParam(): void;
    get extraParamInput(): cdktf.IResolvable | Route53DomainsDomainAdminContactExtraParam[] | undefined;
}
export declare class Route53DomainsDomainAdminContactList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53DomainsDomainAdminContact[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53DomainsDomainAdminContactOutputReference;
}
export interface Route53DomainsDomainRegistrantContactExtraParam {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}
    */
    readonly value: string;
}
export declare function route53DomainsDomainRegistrantContactExtraParamToTerraform(struct?: Route53DomainsDomainRegistrantContactExtraParam | cdktf.IResolvable): any;
export declare function route53DomainsDomainRegistrantContactExtraParamToHclTerraform(struct?: Route53DomainsDomainRegistrantContactExtraParam | cdktf.IResolvable): any;
export declare class Route53DomainsDomainRegistrantContactExtraParamOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53DomainsDomainRegistrantContactExtraParam | cdktf.IResolvable | undefined;
    set internalValue(value: Route53DomainsDomainRegistrantContactExtraParam | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Route53DomainsDomainRegistrantContactExtraParamList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53DomainsDomainRegistrantContactExtraParam[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53DomainsDomainRegistrantContactExtraParamOutputReference;
}
export interface Route53DomainsDomainRegistrantContact {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}
    */
    readonly addressLine1?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}
    */
    readonly addressLine2?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}
    */
    readonly city?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}
    */
    readonly contactType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}
    */
    readonly countryCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}
    */
    readonly email?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}
    */
    readonly fax?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}
    */
    readonly firstName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}
    */
    readonly lastName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}
    */
    readonly organizationName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}
    */
    readonly phoneNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}
    */
    readonly zipCode?: string;
    /**
    * extra_param block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}
    */
    readonly extraParam?: Route53DomainsDomainRegistrantContactExtraParam[] | cdktf.IResolvable;
}
export declare function route53DomainsDomainRegistrantContactToTerraform(struct?: Route53DomainsDomainRegistrantContact | cdktf.IResolvable): any;
export declare function route53DomainsDomainRegistrantContactToHclTerraform(struct?: Route53DomainsDomainRegistrantContact | cdktf.IResolvable): any;
export declare class Route53DomainsDomainRegistrantContactOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53DomainsDomainRegistrantContact | cdktf.IResolvable | undefined;
    set internalValue(value: Route53DomainsDomainRegistrantContact | cdktf.IResolvable | undefined);
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
    private _extraParam;
    get extraParam(): Route53DomainsDomainRegistrantContactExtraParamList;
    putExtraParam(value: Route53DomainsDomainRegistrantContactExtraParam[] | cdktf.IResolvable): void;
    resetExtraParam(): void;
    get extraParamInput(): cdktf.IResolvable | Route53DomainsDomainRegistrantContactExtraParam[] | undefined;
}
export declare class Route53DomainsDomainRegistrantContactList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53DomainsDomainRegistrantContact[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53DomainsDomainRegistrantContactOutputReference;
}
export interface Route53DomainsDomainTechContactExtraParam {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#name Route53DomainsDomain#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#value Route53DomainsDomain#value}
    */
    readonly value: string;
}
export declare function route53DomainsDomainTechContactExtraParamToTerraform(struct?: Route53DomainsDomainTechContactExtraParam | cdktf.IResolvable): any;
export declare function route53DomainsDomainTechContactExtraParamToHclTerraform(struct?: Route53DomainsDomainTechContactExtraParam | cdktf.IResolvable): any;
export declare class Route53DomainsDomainTechContactExtraParamOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53DomainsDomainTechContactExtraParam | cdktf.IResolvable | undefined;
    set internalValue(value: Route53DomainsDomainTechContactExtraParam | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Route53DomainsDomainTechContactExtraParamList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53DomainsDomainTechContactExtraParam[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53DomainsDomainTechContactExtraParamOutputReference;
}
export interface Route53DomainsDomainTechContact {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#address_line_1 Route53DomainsDomain#address_line_1}
    */
    readonly addressLine1?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#address_line_2 Route53DomainsDomain#address_line_2}
    */
    readonly addressLine2?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#city Route53DomainsDomain#city}
    */
    readonly city?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#contact_type Route53DomainsDomain#contact_type}
    */
    readonly contactType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#country_code Route53DomainsDomain#country_code}
    */
    readonly countryCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#email Route53DomainsDomain#email}
    */
    readonly email?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#fax Route53DomainsDomain#fax}
    */
    readonly fax?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#first_name Route53DomainsDomain#first_name}
    */
    readonly firstName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#last_name Route53DomainsDomain#last_name}
    */
    readonly lastName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#organization_name Route53DomainsDomain#organization_name}
    */
    readonly organizationName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#phone_number Route53DomainsDomain#phone_number}
    */
    readonly phoneNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#state Route53DomainsDomain#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#zip_code Route53DomainsDomain#zip_code}
    */
    readonly zipCode?: string;
    /**
    * extra_param block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#extra_param Route53DomainsDomain#extra_param}
    */
    readonly extraParam?: Route53DomainsDomainTechContactExtraParam[] | cdktf.IResolvable;
}
export declare function route53DomainsDomainTechContactToTerraform(struct?: Route53DomainsDomainTechContact | cdktf.IResolvable): any;
export declare function route53DomainsDomainTechContactToHclTerraform(struct?: Route53DomainsDomainTechContact | cdktf.IResolvable): any;
export declare class Route53DomainsDomainTechContactOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53DomainsDomainTechContact | cdktf.IResolvable | undefined;
    set internalValue(value: Route53DomainsDomainTechContact | cdktf.IResolvable | undefined);
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
    private _extraParam;
    get extraParam(): Route53DomainsDomainTechContactExtraParamList;
    putExtraParam(value: Route53DomainsDomainTechContactExtraParam[] | cdktf.IResolvable): void;
    resetExtraParam(): void;
    get extraParamInput(): cdktf.IResolvable | Route53DomainsDomainTechContactExtraParam[] | undefined;
}
export declare class Route53DomainsDomainTechContactList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53DomainsDomainTechContact[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53DomainsDomainTechContactOutputReference;
}
export interface Route53DomainsDomainTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#create Route53DomainsDomain#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#delete Route53DomainsDomain#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#update Route53DomainsDomain#update}
    */
    readonly update?: string;
}
export declare function route53DomainsDomainTimeoutsToTerraform(struct?: Route53DomainsDomainTimeouts | cdktf.IResolvable): any;
export declare function route53DomainsDomainTimeoutsToHclTerraform(struct?: Route53DomainsDomainTimeouts | cdktf.IResolvable): any;
export declare class Route53DomainsDomainTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53DomainsDomainTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Route53DomainsDomainTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain aws_route53domains_domain}
*/
export declare class Route53DomainsDomain extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53domains_domain";
    /**
    * Generates CDKTF code for importing a Route53DomainsDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53DomainsDomain to import
    * @param importFromId The id of the existing Route53DomainsDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53DomainsDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53domains_domain aws_route53domains_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53DomainsDomainConfig
    */
    constructor(scope: Construct, id: string, config: Route53DomainsDomainConfig);
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
    private _billingContact;
    get billingContact(): Route53DomainsDomainBillingContactList;
    putBillingContact(value: Route53DomainsDomainBillingContact[] | cdktf.IResolvable): void;
    resetBillingContact(): void;
    get billingContactInput(): cdktf.IResolvable | Route53DomainsDomainBillingContact[] | undefined;
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
    private _durationInYears?;
    get durationInYears(): number;
    set durationInYears(value: number);
    resetDurationInYears(): void;
    get durationInYearsInput(): number | undefined;
    get expirationDate(): string;
    get hostedZoneId(): string;
    private _nameServer;
    get nameServer(): Route53DomainsDomainNameServerList;
    putNameServer(value: Route53DomainsDomainNameServer[] | cdktf.IResolvable): void;
    resetNameServer(): void;
    get nameServerInput(): cdktf.IResolvable | Route53DomainsDomainNameServer[] | undefined;
    private _registrantPrivacy?;
    get registrantPrivacy(): boolean | cdktf.IResolvable;
    set registrantPrivacy(value: boolean | cdktf.IResolvable);
    resetRegistrantPrivacy(): void;
    get registrantPrivacyInput(): boolean | cdktf.IResolvable | undefined;
    get registrarName(): string;
    get registrarUrl(): string;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
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
    get adminContact(): Route53DomainsDomainAdminContactList;
    putAdminContact(value: Route53DomainsDomainAdminContact[] | cdktf.IResolvable): void;
    resetAdminContact(): void;
    get adminContactInput(): cdktf.IResolvable | Route53DomainsDomainAdminContact[] | undefined;
    private _registrantContact;
    get registrantContact(): Route53DomainsDomainRegistrantContactList;
    putRegistrantContact(value: Route53DomainsDomainRegistrantContact[] | cdktf.IResolvable): void;
    resetRegistrantContact(): void;
    get registrantContactInput(): cdktf.IResolvable | Route53DomainsDomainRegistrantContact[] | undefined;
    private _techContact;
    get techContact(): Route53DomainsDomainTechContactList;
    putTechContact(value: Route53DomainsDomainTechContact[] | cdktf.IResolvable): void;
    resetTechContact(): void;
    get techContactInput(): cdktf.IResolvable | Route53DomainsDomainTechContact[] | undefined;
    private _timeouts;
    get timeouts(): Route53DomainsDomainTimeoutsOutputReference;
    putTimeouts(value: Route53DomainsDomainTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Route53DomainsDomainTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
