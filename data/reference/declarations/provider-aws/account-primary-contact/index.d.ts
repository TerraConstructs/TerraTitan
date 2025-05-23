/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AccountPrimaryContactConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_primary_contact#account_id AccountPrimaryContact#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_primary_contact#address_line_1 AccountPrimaryContact#address_line_1}
    */
    readonly addressLine1: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_primary_contact#address_line_2 AccountPrimaryContact#address_line_2}
    */
    readonly addressLine2?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_primary_contact#address_line_3 AccountPrimaryContact#address_line_3}
    */
    readonly addressLine3?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_primary_contact#city AccountPrimaryContact#city}
    */
    readonly city: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_primary_contact#company_name AccountPrimaryContact#company_name}
    */
    readonly companyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_primary_contact#country_code AccountPrimaryContact#country_code}
    */
    readonly countryCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_primary_contact#district_or_county AccountPrimaryContact#district_or_county}
    */
    readonly districtOrCounty?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_primary_contact#full_name AccountPrimaryContact#full_name}
    */
    readonly fullName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_primary_contact#id AccountPrimaryContact#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_primary_contact#phone_number AccountPrimaryContact#phone_number}
    */
    readonly phoneNumber: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_primary_contact#postal_code AccountPrimaryContact#postal_code}
    */
    readonly postalCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_primary_contact#state_or_region AccountPrimaryContact#state_or_region}
    */
    readonly stateOrRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_primary_contact#website_url AccountPrimaryContact#website_url}
    */
    readonly websiteUrl?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_primary_contact aws_account_primary_contact}
*/
export declare class AccountPrimaryContact extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_account_primary_contact";
    /**
    * Generates CDKTF code for importing a AccountPrimaryContact resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AccountPrimaryContact to import
    * @param importFromId The id of the existing AccountPrimaryContact that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_primary_contact#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AccountPrimaryContact to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_primary_contact aws_account_primary_contact} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccountPrimaryContactConfig
    */
    constructor(scope: Construct, id: string, config: AccountPrimaryContactConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    private _addressLine1?;
    get addressLine1(): string;
    set addressLine1(value: string);
    get addressLine1Input(): string | undefined;
    private _addressLine2?;
    get addressLine2(): string;
    set addressLine2(value: string);
    resetAddressLine2(): void;
    get addressLine2Input(): string | undefined;
    private _addressLine3?;
    get addressLine3(): string;
    set addressLine3(value: string);
    resetAddressLine3(): void;
    get addressLine3Input(): string | undefined;
    private _city?;
    get city(): string;
    set city(value: string);
    get cityInput(): string | undefined;
    private _companyName?;
    get companyName(): string;
    set companyName(value: string);
    resetCompanyName(): void;
    get companyNameInput(): string | undefined;
    private _countryCode?;
    get countryCode(): string;
    set countryCode(value: string);
    get countryCodeInput(): string | undefined;
    private _districtOrCounty?;
    get districtOrCounty(): string;
    set districtOrCounty(value: string);
    resetDistrictOrCounty(): void;
    get districtOrCountyInput(): string | undefined;
    private _fullName?;
    get fullName(): string;
    set fullName(value: string);
    get fullNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _phoneNumber?;
    get phoneNumber(): string;
    set phoneNumber(value: string);
    get phoneNumberInput(): string | undefined;
    private _postalCode?;
    get postalCode(): string;
    set postalCode(value: string);
    get postalCodeInput(): string | undefined;
    private _stateOrRegion?;
    get stateOrRegion(): string;
    set stateOrRegion(value: string);
    resetStateOrRegion(): void;
    get stateOrRegionInput(): string | undefined;
    private _websiteUrl?;
    get websiteUrl(): string;
    set websiteUrl(value: string);
    resetWebsiteUrl(): void;
    get websiteUrlInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
