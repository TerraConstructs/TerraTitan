/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TransferSshKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_ssh_key#body TransferSshKey#body}
    */
    readonly body: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_ssh_key#id TransferSshKey#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_ssh_key#server_id TransferSshKey#server_id}
    */
    readonly serverId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_ssh_key#user_name TransferSshKey#user_name}
    */
    readonly userName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_ssh_key aws_transfer_ssh_key}
*/
export declare class TransferSshKey extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_transfer_ssh_key";
    /**
    * Generates CDKTF code for importing a TransferSshKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TransferSshKey to import
    * @param importFromId The id of the existing TransferSshKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_ssh_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TransferSshKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_ssh_key aws_transfer_ssh_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferSshKeyConfig
    */
    constructor(scope: Construct, id: string, config: TransferSshKeyConfig);
    private _body?;
    get body(): string;
    set body(value: string);
    get bodyInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _serverId?;
    get serverId(): string;
    set serverId(value: string);
    get serverIdInput(): string | undefined;
    get sshKeyId(): string;
    private _userName?;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
