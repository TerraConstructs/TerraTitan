/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AccountAlternateContactConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_alternate_contact#account_id AccountAlternateContact#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_alternate_contact#alternate_contact_type AccountAlternateContact#alternate_contact_type}
    */
    readonly alternateContactType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_alternate_contact#email_address AccountAlternateContact#email_address}
    */
    readonly emailAddress: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_alternate_contact#id AccountAlternateContact#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_alternate_contact#name AccountAlternateContact#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_alternate_contact#phone_number AccountAlternateContact#phone_number}
    */
    readonly phoneNumber: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_alternate_contact#title AccountAlternateContact#title}
    */
    readonly title: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_alternate_contact#timeouts AccountAlternateContact#timeouts}
    */
    readonly timeouts?: AccountAlternateContactTimeouts;
}
export interface AccountAlternateContactTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_alternate_contact#create AccountAlternateContact#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_alternate_contact#delete AccountAlternateContact#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_alternate_contact#update AccountAlternateContact#update}
    */
    readonly update?: string;
}
export declare function accountAlternateContactTimeoutsToTerraform(struct?: AccountAlternateContactTimeouts | cdktf.IResolvable): any;
export declare function accountAlternateContactTimeoutsToHclTerraform(struct?: AccountAlternateContactTimeouts | cdktf.IResolvable): any;
export declare class AccountAlternateContactTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AccountAlternateContactTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: AccountAlternateContactTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_alternate_contact aws_account_alternate_contact}
*/
export declare class AccountAlternateContact extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_account_alternate_contact";
    /**
    * Generates CDKTF code for importing a AccountAlternateContact resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AccountAlternateContact to import
    * @param importFromId The id of the existing AccountAlternateContact that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_alternate_contact#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AccountAlternateContact to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/account_alternate_contact aws_account_alternate_contact} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccountAlternateContactConfig
    */
    constructor(scope: Construct, id: string, config: AccountAlternateContactConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    private _alternateContactType?;
    get alternateContactType(): string;
    set alternateContactType(value: string);
    get alternateContactTypeInput(): string | undefined;
    private _emailAddress?;
    get emailAddress(): string;
    set emailAddress(value: string);
    get emailAddressInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _phoneNumber?;
    get phoneNumber(): string;
    set phoneNumber(value: string);
    get phoneNumberInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _timeouts;
    get timeouts(): AccountAlternateContactTimeoutsOutputReference;
    putTimeouts(value: AccountAlternateContactTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | AccountAlternateContactTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
