/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsIamUserSshKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_user_ssh_key#encoding DataAwsIamUserSshKey#encoding}
    */
    readonly encoding: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_user_ssh_key#id DataAwsIamUserSshKey#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_user_ssh_key#ssh_public_key_id DataAwsIamUserSshKey#ssh_public_key_id}
    */
    readonly sshPublicKeyId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_user_ssh_key#username DataAwsIamUserSshKey#username}
    */
    readonly username: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_user_ssh_key aws_iam_user_ssh_key}
*/
export declare class DataAwsIamUserSshKey extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_iam_user_ssh_key";
    /**
    * Generates CDKTF code for importing a DataAwsIamUserSshKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsIamUserSshKey to import
    * @param importFromId The id of the existing DataAwsIamUserSshKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_user_ssh_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsIamUserSshKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_user_ssh_key aws_iam_user_ssh_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamUserSshKeyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsIamUserSshKeyConfig);
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
    get publicKey(): string;
    private _sshPublicKeyId?;
    get sshPublicKeyId(): string;
    set sshPublicKeyId(value: string);
    get sshPublicKeyIdInput(): string | undefined;
    get status(): string;
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
