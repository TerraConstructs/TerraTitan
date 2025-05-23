/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamAccountPasswordPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_account_password_policy#allow_users_to_change_password IamAccountPasswordPolicy#allow_users_to_change_password}
    */
    readonly allowUsersToChangePassword?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_account_password_policy#hard_expiry IamAccountPasswordPolicy#hard_expiry}
    */
    readonly hardExpiry?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_account_password_policy#id IamAccountPasswordPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_account_password_policy#max_password_age IamAccountPasswordPolicy#max_password_age}
    */
    readonly maxPasswordAge?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_account_password_policy#minimum_password_length IamAccountPasswordPolicy#minimum_password_length}
    */
    readonly minimumPasswordLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_account_password_policy#password_reuse_prevention IamAccountPasswordPolicy#password_reuse_prevention}
    */
    readonly passwordReusePrevention?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_account_password_policy#require_lowercase_characters IamAccountPasswordPolicy#require_lowercase_characters}
    */
    readonly requireLowercaseCharacters?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_account_password_policy#require_numbers IamAccountPasswordPolicy#require_numbers}
    */
    readonly requireNumbers?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_account_password_policy#require_symbols IamAccountPasswordPolicy#require_symbols}
    */
    readonly requireSymbols?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_account_password_policy#require_uppercase_characters IamAccountPasswordPolicy#require_uppercase_characters}
    */
    readonly requireUppercaseCharacters?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_account_password_policy aws_iam_account_password_policy}
*/
export declare class IamAccountPasswordPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iam_account_password_policy";
    /**
    * Generates CDKTF code for importing a IamAccountPasswordPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IamAccountPasswordPolicy to import
    * @param importFromId The id of the existing IamAccountPasswordPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_account_password_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IamAccountPasswordPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_account_password_policy aws_iam_account_password_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamAccountPasswordPolicyConfig = {}
    */
    constructor(scope: Construct, id: string, config?: IamAccountPasswordPolicyConfig);
    private _allowUsersToChangePassword?;
    get allowUsersToChangePassword(): boolean | cdktf.IResolvable;
    set allowUsersToChangePassword(value: boolean | cdktf.IResolvable);
    resetAllowUsersToChangePassword(): void;
    get allowUsersToChangePasswordInput(): boolean | cdktf.IResolvable | undefined;
    get expirePasswords(): cdktf.IResolvable;
    private _hardExpiry?;
    get hardExpiry(): boolean | cdktf.IResolvable;
    set hardExpiry(value: boolean | cdktf.IResolvable);
    resetHardExpiry(): void;
    get hardExpiryInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _maxPasswordAge?;
    get maxPasswordAge(): number;
    set maxPasswordAge(value: number);
    resetMaxPasswordAge(): void;
    get maxPasswordAgeInput(): number | undefined;
    private _minimumPasswordLength?;
    get minimumPasswordLength(): number;
    set minimumPasswordLength(value: number);
    resetMinimumPasswordLength(): void;
    get minimumPasswordLengthInput(): number | undefined;
    private _passwordReusePrevention?;
    get passwordReusePrevention(): number;
    set passwordReusePrevention(value: number);
    resetPasswordReusePrevention(): void;
    get passwordReusePreventionInput(): number | undefined;
    private _requireLowercaseCharacters?;
    get requireLowercaseCharacters(): boolean | cdktf.IResolvable;
    set requireLowercaseCharacters(value: boolean | cdktf.IResolvable);
    resetRequireLowercaseCharacters(): void;
    get requireLowercaseCharactersInput(): boolean | cdktf.IResolvable | undefined;
    private _requireNumbers?;
    get requireNumbers(): boolean | cdktf.IResolvable;
    set requireNumbers(value: boolean | cdktf.IResolvable);
    resetRequireNumbers(): void;
    get requireNumbersInput(): boolean | cdktf.IResolvable | undefined;
    private _requireSymbols?;
    get requireSymbols(): boolean | cdktf.IResolvable;
    set requireSymbols(value: boolean | cdktf.IResolvable);
    resetRequireSymbols(): void;
    get requireSymbolsInput(): boolean | cdktf.IResolvable | undefined;
    private _requireUppercaseCharacters?;
    get requireUppercaseCharacters(): boolean | cdktf.IResolvable;
    set requireUppercaseCharacters(value: boolean | cdktf.IResolvable);
    resetRequireUppercaseCharacters(): void;
    get requireUppercaseCharactersInput(): boolean | cdktf.IResolvable | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
