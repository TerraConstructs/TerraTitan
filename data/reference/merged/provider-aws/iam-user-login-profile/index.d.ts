/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamUserLoginProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_user_login_profile#id IamUserLoginProfile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /** (Optional) The length of the generated password on resource creation. Only applies on resource creation. Drift detection is not possible with this argument. Default value is `20`. */
    readonly passwordLength?: number;
    /** (Optional) Whether the user should be forced to reset the generated password on resource creation. Only applies on resource creation. */
    readonly passwordResetRequired?: boolean | cdktf.IResolvable;
    /** (Optional) Either a base-64 encoded PGP public key, or a keybase username in the form `keybase:username`. Only applies on resource creation. Drift detection is not possible with this argument. */
    readonly pgpKey?: string;
    /** (Required) The IAM user's name. */
    readonly user: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_user_login_profile aws_iam_user_login_profile}
*/
export declare class IamUserLoginProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iam_user_login_profile";
    /**
    * Generates CDKTF code for importing a IamUserLoginProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IamUserLoginProfile to import
    * @param importFromId The id of the existing IamUserLoginProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_user_login_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IamUserLoginProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_user_login_profile aws_iam_user_login_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamUserLoginProfileConfig
    */
    constructor(scope: Construct, id: string, config: IamUserLoginProfileConfig);
    get encryptedPassword(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get keyFingerprint(): string;
    get password(): string;
    private _passwordLength?;
    get passwordLength(): number;
    set passwordLength(value: number);
    resetPasswordLength(): void;
    get passwordLengthInput(): number | undefined;
    private _passwordResetRequired?;
    get passwordResetRequired(): boolean | cdktf.IResolvable;
    set passwordResetRequired(value: boolean | cdktf.IResolvable);
    resetPasswordResetRequired(): void;
    get passwordResetRequiredInput(): boolean | cdktf.IResolvable | undefined;
    private _pgpKey?;
    get pgpKey(): string;
    set pgpKey(value: string);
    resetPgpKey(): void;
    get pgpKeyInput(): string | undefined;
    private _user?;
    get user(): string;
    set user(value: string);
    get userInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
