/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamUserSshKeyConfig extends cdktf.TerraformMetaArguments {
    /** (Required) Specifies the public key encoding format to use in the response. To retrieve the public key in ssh-rsa format, use `SSH`. To retrieve the public key in PEM format, use `PEM`. */
    readonly encoding: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_user_ssh_key#id IamUserSshKey#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /** (Required) The SSH public key. The public key must be encoded in ssh-rsa format or PEM format. */
    readonly publicKey: string;
    /** (Optional) The status to assign to the SSH public key. Active means the key can be used for authentication with an AWS CodeCommit repository. Inactive means the key cannot be used. Default is `active`. */
    readonly status?: string;
    /** (Required) The name of the IAM user to associate the SSH public key with. */
    readonly username: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_user_ssh_key aws_iam_user_ssh_key}
*/
export declare class IamUserSshKey extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iam_user_ssh_key";
    /**
    * Generates CDKTF code for importing a IamUserSshKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IamUserSshKey to import
    * @param importFromId The id of the existing IamUserSshKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_user_ssh_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IamUserSshKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_user_ssh_key aws_iam_user_ssh_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamUserSshKeyConfig
    */
    constructor(scope: Construct, id: string, config: IamUserSshKeyConfig);
    private _encoding?;
    get encoding(): string;
    set encoding(value: string);
    get encodingInput(): string | undefined;
    get fingerprint(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _publicKey?;
    get publicKey(): string;
    set publicKey(value: string);
    get publicKeyInput(): string | undefined;
    get sshPublicKeyId(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
