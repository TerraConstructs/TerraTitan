/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LightsailDiskAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_disk_attachment#disk_name LightsailDiskAttachment#disk_name}
    */
    readonly diskName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_disk_attachment#disk_path LightsailDiskAttachment#disk_path}
    */
    readonly diskPath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_disk_attachment#id LightsailDiskAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_disk_attachment#instance_name LightsailDiskAttachment#instance_name}
    */
    readonly instanceName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_disk_attachment aws_lightsail_disk_attachment}
*/
export declare class LightsailDiskAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lightsail_disk_attachment";
    /**
    * Generates CDKTF code for importing a LightsailDiskAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LightsailDiskAttachment to import
    * @param importFromId The id of the existing LightsailDiskAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_disk_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LightsailDiskAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_disk_attachment aws_lightsail_disk_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailDiskAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: LightsailDiskAttachmentConfig);
    private _diskName?;
    get diskName(): string;
    set diskName(value: string);
    get diskNameInput(): string | undefined;
    private _diskPath?;
    get diskPath(): string;
    set diskPath(value: string);
    get diskPathInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceName?;
    get instanceName(): string;
    set instanceName(value: string);
    get instanceNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
