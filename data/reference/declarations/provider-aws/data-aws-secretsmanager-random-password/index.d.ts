/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSecretsmanagerRandomPasswordConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/secretsmanager_random_password#exclude_characters DataAwsSecretsmanagerRandomPassword#exclude_characters}
    */
    readonly excludeCharacters?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/secretsmanager_random_password#exclude_lowercase DataAwsSecretsmanagerRandomPassword#exclude_lowercase}
    */
    readonly excludeLowercase?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/secretsmanager_random_password#exclude_numbers DataAwsSecretsmanagerRandomPassword#exclude_numbers}
    */
    readonly excludeNumbers?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/secretsmanager_random_password#exclude_punctuation DataAwsSecretsmanagerRandomPassword#exclude_punctuation}
    */
    readonly excludePunctuation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/secretsmanager_random_password#exclude_uppercase DataAwsSecretsmanagerRandomPassword#exclude_uppercase}
    */
    readonly excludeUppercase?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/secretsmanager_random_password#id DataAwsSecretsmanagerRandomPassword#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/secretsmanager_random_password#include_space DataAwsSecretsmanagerRandomPassword#include_space}
    */
    readonly includeSpace?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/secretsmanager_random_password#password_length DataAwsSecretsmanagerRandomPassword#password_length}
    */
    readonly passwordLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/secretsmanager_random_password#require_each_included_type DataAwsSecretsmanagerRandomPassword#require_each_included_type}
    */
    readonly requireEachIncludedType?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/secretsmanager_random_password aws_secretsmanager_random_password}
*/
export declare class DataAwsSecretsmanagerRandomPassword extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_secretsmanager_random_password";
    /**
    * Generates CDKTF code for importing a DataAwsSecretsmanagerRandomPassword resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSecretsmanagerRandomPassword to import
    * @param importFromId The id of the existing DataAwsSecretsmanagerRandomPassword that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/secretsmanager_random_password#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSecretsmanagerRandomPassword to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/secretsmanager_random_password aws_secretsmanager_random_password} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSecretsmanagerRandomPasswordConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsSecretsmanagerRandomPasswordConfig);
    private _excludeCharacters?;
    get excludeCharacters(): string;
    set excludeCharacters(value: string);
    resetExcludeCharacters(): void;
    get excludeCharactersInput(): string | undefined;
    private _excludeLowercase?;
    get excludeLowercase(): boolean | cdktf.IResolvable;
    set excludeLowercase(value: boolean | cdktf.IResolvable);
    resetExcludeLowercase(): void;
    get excludeLowercaseInput(): boolean | cdktf.IResolvable | undefined;
    private _excludeNumbers?;
    get excludeNumbers(): boolean | cdktf.IResolvable;
    set excludeNumbers(value: boolean | cdktf.IResolvable);
    resetExcludeNumbers(): void;
    get excludeNumbersInput(): boolean | cdktf.IResolvable | undefined;
    private _excludePunctuation?;
    get excludePunctuation(): boolean | cdktf.IResolvable;
    set excludePunctuation(value: boolean | cdktf.IResolvable);
    resetExcludePunctuation(): void;
    get excludePunctuationInput(): boolean | cdktf.IResolvable | undefined;
    private _excludeUppercase?;
    get excludeUppercase(): boolean | cdktf.IResolvable;
    set excludeUppercase(value: boolean | cdktf.IResolvable);
    resetExcludeUppercase(): void;
    get excludeUppercaseInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _includeSpace?;
    get includeSpace(): boolean | cdktf.IResolvable;
    set includeSpace(value: boolean | cdktf.IResolvable);
    resetIncludeSpace(): void;
    get includeSpaceInput(): boolean | cdktf.IResolvable | undefined;
    private _passwordLength?;
    get passwordLength(): number;
    set passwordLength(value: number);
    resetPasswordLength(): void;
    get passwordLengthInput(): number | undefined;
    get randomPassword(): string;
    private _requireEachIncludedType?;
    get requireEachIncludedType(): boolean | cdktf.IResolvable;
    set requireEachIncludedType(value: boolean | cdktf.IResolvable);
    resetRequireEachIncludedType(): void;
    get requireEachIncludedTypeInput(): boolean | cdktf.IResolvable | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
