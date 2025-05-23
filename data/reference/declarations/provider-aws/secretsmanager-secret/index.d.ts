/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretsmanagerSecretConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret#description SecretsmanagerSecret#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret#force_overwrite_replica_secret SecretsmanagerSecret#force_overwrite_replica_secret}
    */
    readonly forceOverwriteReplicaSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret#id SecretsmanagerSecret#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret#name SecretsmanagerSecret#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret#name_prefix SecretsmanagerSecret#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret#policy SecretsmanagerSecret#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret#recovery_window_in_days SecretsmanagerSecret#recovery_window_in_days}
    */
    readonly recoveryWindowInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret#tags SecretsmanagerSecret#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret#tags_all SecretsmanagerSecret#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * replica block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret#replica SecretsmanagerSecret#replica}
    */
    readonly replica?: SecretsmanagerSecretReplica[] | cdktf.IResolvable;
}
export interface SecretsmanagerSecretReplica {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret#region SecretsmanagerSecret#region}
    */
    readonly region: string;
}
export declare function secretsmanagerSecretReplicaToTerraform(struct?: SecretsmanagerSecretReplica | cdktf.IResolvable): any;
export declare function secretsmanagerSecretReplicaToHclTerraform(struct?: SecretsmanagerSecretReplica | cdktf.IResolvable): any;
export declare class SecretsmanagerSecretReplicaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecretsmanagerSecretReplica | cdktf.IResolvable | undefined;
    set internalValue(value: SecretsmanagerSecretReplica | cdktf.IResolvable | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get lastAccessedDate(): string;
    private _region?;
    get region(): string;
    set region(value: string);
    get regionInput(): string | undefined;
    get status(): string;
    get statusMessage(): string;
}
export declare class SecretsmanagerSecretReplicaList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecretsmanagerSecretReplica[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecretsmanagerSecretReplicaOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret aws_secretsmanager_secret}
*/
export declare class SecretsmanagerSecret extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_secretsmanager_secret";
    /**
    * Generates CDKTF code for importing a SecretsmanagerSecret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretsmanagerSecret to import
    * @param importFromId The id of the existing SecretsmanagerSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretsmanagerSecret to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret aws_secretsmanager_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretsmanagerSecretConfig = {}
    */
    constructor(scope: Construct, id: string, config?: SecretsmanagerSecretConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _forceOverwriteReplicaSecret?;
    get forceOverwriteReplicaSecret(): boolean | cdktf.IResolvable;
    set forceOverwriteReplicaSecret(value: boolean | cdktf.IResolvable);
    resetForceOverwriteReplicaSecret(): void;
    get forceOverwriteReplicaSecretInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string | undefined;
    private _recoveryWindowInDays?;
    get recoveryWindowInDays(): number;
    set recoveryWindowInDays(value: number);
    resetRecoveryWindowInDays(): void;
    get recoveryWindowInDaysInput(): number | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _replica;
    get replica(): SecretsmanagerSecretReplicaList;
    putReplica(value: SecretsmanagerSecretReplica[] | cdktf.IResolvable): void;
    resetReplica(): void;
    get replicaInput(): cdktf.IResolvable | SecretsmanagerSecretReplica[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
