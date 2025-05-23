/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlacierVaultLockConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glacier_vault_lock#complete_lock GlacierVaultLock#complete_lock}
    */
    readonly completeLock: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glacier_vault_lock#id GlacierVaultLock#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glacier_vault_lock#ignore_deletion_error GlacierVaultLock#ignore_deletion_error}
    */
    readonly ignoreDeletionError?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glacier_vault_lock#policy GlacierVaultLock#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glacier_vault_lock#vault_name GlacierVaultLock#vault_name}
    */
    readonly vaultName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glacier_vault_lock aws_glacier_vault_lock}
*/
export declare class GlacierVaultLock extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glacier_vault_lock";
    /**
    * Generates CDKTF code for importing a GlacierVaultLock resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlacierVaultLock to import
    * @param importFromId The id of the existing GlacierVaultLock that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glacier_vault_lock#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlacierVaultLock to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glacier_vault_lock aws_glacier_vault_lock} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlacierVaultLockConfig
    */
    constructor(scope: Construct, id: string, config: GlacierVaultLockConfig);
    private _completeLock?;
    get completeLock(): boolean | cdktf.IResolvable;
    set completeLock(value: boolean | cdktf.IResolvable);
    get completeLockInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ignoreDeletionError?;
    get ignoreDeletionError(): boolean | cdktf.IResolvable;
    set ignoreDeletionError(value: boolean | cdktf.IResolvable);
    resetIgnoreDeletionError(): void;
    get ignoreDeletionErrorInput(): boolean | cdktf.IResolvable | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string | undefined;
    private _vaultName?;
    get vaultName(): string;
    set vaultName(value: string);
    get vaultNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
