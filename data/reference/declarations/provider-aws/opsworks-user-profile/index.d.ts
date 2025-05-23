/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpsworksUserProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_user_profile#allow_self_management OpsworksUserProfile#allow_self_management}
    */
    readonly allowSelfManagement?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_user_profile#id OpsworksUserProfile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_user_profile#ssh_public_key OpsworksUserProfile#ssh_public_key}
    */
    readonly sshPublicKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_user_profile#ssh_username OpsworksUserProfile#ssh_username}
    */
    readonly sshUsername: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_user_profile#user_arn OpsworksUserProfile#user_arn}
    */
    readonly userArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_user_profile aws_opsworks_user_profile}
*/
export declare class OpsworksUserProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opsworks_user_profile";
    /**
    * Generates CDKTF code for importing a OpsworksUserProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpsworksUserProfile to import
    * @param importFromId The id of the existing OpsworksUserProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_user_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpsworksUserProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_user_profile aws_opsworks_user_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksUserProfileConfig
    */
    constructor(scope: Construct, id: string, config: OpsworksUserProfileConfig);
    private _allowSelfManagement?;
    get allowSelfManagement(): boolean | cdktf.IResolvable;
    set allowSelfManagement(value: boolean | cdktf.IResolvable);
    resetAllowSelfManagement(): void;
    get allowSelfManagementInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _sshPublicKey?;
    get sshPublicKey(): string;
    set sshPublicKey(value: string);
    resetSshPublicKey(): void;
    get sshPublicKeyInput(): string | undefined;
    private _sshUsername?;
    get sshUsername(): string;
    set sshUsername(value: string);
    get sshUsernameInput(): string | undefined;
    private _userArn?;
    get userArn(): string;
    set userArn(value: string);
    get userArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
