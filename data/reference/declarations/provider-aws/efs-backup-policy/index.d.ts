/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EfsBackupPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_backup_policy#file_system_id EfsBackupPolicy#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_backup_policy#id EfsBackupPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * backup_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_backup_policy#backup_policy EfsBackupPolicy#backup_policy}
    */
    readonly backupPolicy: EfsBackupPolicyBackupPolicy;
}
export interface EfsBackupPolicyBackupPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_backup_policy#status EfsBackupPolicy#status}
    */
    readonly status: string;
}
export declare function efsBackupPolicyBackupPolicyToTerraform(struct?: EfsBackupPolicyBackupPolicyOutputReference | EfsBackupPolicyBackupPolicy): any;
export declare function efsBackupPolicyBackupPolicyToHclTerraform(struct?: EfsBackupPolicyBackupPolicyOutputReference | EfsBackupPolicyBackupPolicy): any;
export declare class EfsBackupPolicyBackupPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EfsBackupPolicyBackupPolicy | undefined;
    set internalValue(value: EfsBackupPolicyBackupPolicy | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_backup_policy aws_efs_backup_policy}
*/
export declare class EfsBackupPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_efs_backup_policy";
    /**
    * Generates CDKTF code for importing a EfsBackupPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EfsBackupPolicy to import
    * @param importFromId The id of the existing EfsBackupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_backup_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EfsBackupPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_backup_policy aws_efs_backup_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsBackupPolicyConfig
    */
    constructor(scope: Construct, id: string, config: EfsBackupPolicyConfig);
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _backupPolicy;
    get backupPolicy(): EfsBackupPolicyBackupPolicyOutputReference;
    putBackupPolicy(value: EfsBackupPolicyBackupPolicy): void;
    get backupPolicyInput(): EfsBackupPolicyBackupPolicy | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
