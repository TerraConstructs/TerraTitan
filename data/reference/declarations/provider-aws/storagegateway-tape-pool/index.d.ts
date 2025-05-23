/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StoragegatewayTapePoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_tape_pool#id StoragegatewayTapePool#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_tape_pool#pool_name StoragegatewayTapePool#pool_name}
    */
    readonly poolName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_tape_pool#retention_lock_time_in_days StoragegatewayTapePool#retention_lock_time_in_days}
    */
    readonly retentionLockTimeInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_tape_pool#retention_lock_type StoragegatewayTapePool#retention_lock_type}
    */
    readonly retentionLockType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_tape_pool#storage_class StoragegatewayTapePool#storage_class}
    */
    readonly storageClass: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_tape_pool#tags StoragegatewayTapePool#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_tape_pool#tags_all StoragegatewayTapePool#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_tape_pool aws_storagegateway_tape_pool}
*/
export declare class StoragegatewayTapePool extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_storagegateway_tape_pool";
    /**
    * Generates CDKTF code for importing a StoragegatewayTapePool resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StoragegatewayTapePool to import
    * @param importFromId The id of the existing StoragegatewayTapePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_tape_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StoragegatewayTapePool to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_tape_pool aws_storagegateway_tape_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayTapePoolConfig
    */
    constructor(scope: Construct, id: string, config: StoragegatewayTapePoolConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _poolName?;
    get poolName(): string;
    set poolName(value: string);
    get poolNameInput(): string | undefined;
    private _retentionLockTimeInDays?;
    get retentionLockTimeInDays(): number;
    set retentionLockTimeInDays(value: number);
    resetRetentionLockTimeInDays(): void;
    get retentionLockTimeInDaysInput(): number | undefined;
    private _retentionLockType?;
    get retentionLockType(): string;
    set retentionLockType(value: string);
    resetRetentionLockType(): void;
    get retentionLockTypeInput(): string | undefined;
    private _storageClass?;
    get storageClass(): string;
    set storageClass(value: string);
    get storageClassInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
