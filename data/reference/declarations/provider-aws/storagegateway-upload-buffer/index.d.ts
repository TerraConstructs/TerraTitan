/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StoragegatewayUploadBufferConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_upload_buffer#disk_id StoragegatewayUploadBuffer#disk_id}
    */
    readonly diskId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_upload_buffer#disk_path StoragegatewayUploadBuffer#disk_path}
    */
    readonly diskPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_upload_buffer#gateway_arn StoragegatewayUploadBuffer#gateway_arn}
    */
    readonly gatewayArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_upload_buffer#id StoragegatewayUploadBuffer#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_upload_buffer aws_storagegateway_upload_buffer}
*/
export declare class StoragegatewayUploadBuffer extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_storagegateway_upload_buffer";
    /**
    * Generates CDKTF code for importing a StoragegatewayUploadBuffer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StoragegatewayUploadBuffer to import
    * @param importFromId The id of the existing StoragegatewayUploadBuffer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_upload_buffer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StoragegatewayUploadBuffer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_upload_buffer aws_storagegateway_upload_buffer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayUploadBufferConfig
    */
    constructor(scope: Construct, id: string, config: StoragegatewayUploadBufferConfig);
    private _diskId?;
    get diskId(): string;
    set diskId(value: string);
    resetDiskId(): void;
    get diskIdInput(): string | undefined;
    private _diskPath?;
    get diskPath(): string;
    set diskPath(value: string);
    resetDiskPath(): void;
    get diskPathInput(): string | undefined;
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
