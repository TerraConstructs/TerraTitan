/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StoragegatewayWorkingStorageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_working_storage#disk_id StoragegatewayWorkingStorage#disk_id}
    */
    readonly diskId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_working_storage#gateway_arn StoragegatewayWorkingStorage#gateway_arn}
    */
    readonly gatewayArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_working_storage#id StoragegatewayWorkingStorage#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_working_storage aws_storagegateway_working_storage}
*/
export declare class StoragegatewayWorkingStorage extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_storagegateway_working_storage";
    /**
    * Generates CDKTF code for importing a StoragegatewayWorkingStorage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StoragegatewayWorkingStorage to import
    * @param importFromId The id of the existing StoragegatewayWorkingStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_working_storage#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StoragegatewayWorkingStorage to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_working_storage aws_storagegateway_working_storage} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayWorkingStorageConfig
    */
    constructor(scope: Construct, id: string, config: StoragegatewayWorkingStorageConfig);
    private _diskId?;
    get diskId(): string;
    set diskId(value: string);
    get diskIdInput(): string | undefined;
    private _gatewayArn?;
    get gatewayArn(): string;
    set gatewayArn(value: string);
    get gatewayArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
