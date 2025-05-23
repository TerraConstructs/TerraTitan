/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SignerSigningProfilePermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile_permission#action SignerSigningProfilePermission#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile_permission#id SignerSigningProfilePermission#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile_permission#principal SignerSigningProfilePermission#principal}
    */
    readonly principal: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile_permission#profile_name SignerSigningProfilePermission#profile_name}
    */
    readonly profileName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile_permission#profile_version SignerSigningProfilePermission#profile_version}
    */
    readonly profileVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile_permission#statement_id SignerSigningProfilePermission#statement_id}
    */
    readonly statementId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile_permission#statement_id_prefix SignerSigningProfilePermission#statement_id_prefix}
    */
    readonly statementIdPrefix?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile_permission aws_signer_signing_profile_permission}
*/
export declare class SignerSigningProfilePermission extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_signer_signing_profile_permission";
    /**
    * Generates CDKTF code for importing a SignerSigningProfilePermission resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SignerSigningProfilePermission to import
    * @param importFromId The id of the existing SignerSigningProfilePermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile_permission#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SignerSigningProfilePermission to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile_permission aws_signer_signing_profile_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SignerSigningProfilePermissionConfig
    */
    constructor(scope: Construct, id: string, config: SignerSigningProfilePermissionConfig);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string | undefined;
    private _profileName?;
    get profileName(): string;
    set profileName(value: string);
    get profileNameInput(): string | undefined;
    private _profileVersion?;
    get profileVersion(): string;
    set profileVersion(value: string);
    resetProfileVersion(): void;
    get profileVersionInput(): string | undefined;
    private _statementId?;
    get statementId(): string;
    set statementId(value: string);
    resetStatementId(): void;
    get statementIdInput(): string | undefined;
    private _statementIdPrefix?;
    get statementIdPrefix(): string;
    set statementIdPrefix(value: string);
    resetStatementIdPrefix(): void;
    get statementIdPrefixInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
