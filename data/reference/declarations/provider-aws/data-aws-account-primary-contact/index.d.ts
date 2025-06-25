/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAccountPrimaryContactConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/account_primary_contact#account_id DataAwsAccountPrimaryContact#account_id}
    */
    readonly accountId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/account_primary_contact aws_account_primary_contact}
*/
export declare class DataAwsAccountPrimaryContact extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_account_primary_contact";
    /**
    * Generates CDKTF code for importing a DataAwsAccountPrimaryContact resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAccountPrimaryContact to import
    * @param importFromId The id of the existing DataAwsAccountPrimaryContact that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/account_primary_contact#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAccountPrimaryContact to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/account_primary_contact aws_account_primary_contact} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAccountPrimaryContactConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsAccountPrimaryContactConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    get addressLine1(): string;
    get addressLine2(): string;
    get addressLine3(): string;
    get city(): string;
    get companyName(): string;
    get countryCode(): string;
    get districtOrCounty(): string;
    get fullName(): string;
    get phoneNumber(): string;
    get postalCode(): string;
    get stateOrRegion(): string;
    get websiteUrl(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
