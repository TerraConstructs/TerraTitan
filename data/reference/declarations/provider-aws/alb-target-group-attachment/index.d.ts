/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AlbTargetGroupAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group_attachment#availability_zone AlbTargetGroupAttachment#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group_attachment#id AlbTargetGroupAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group_attachment#port AlbTargetGroupAttachment#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group_attachment#target_group_arn AlbTargetGroupAttachment#target_group_arn}
    */
    readonly targetGroupArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group_attachment#target_id AlbTargetGroupAttachment#target_id}
    */
    readonly targetId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group_attachment aws_alb_target_group_attachment}
*/
export declare class AlbTargetGroupAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_alb_target_group_attachment";
    /**
    * Generates CDKTF code for importing a AlbTargetGroupAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AlbTargetGroupAttachment to import
    * @param importFromId The id of the existing AlbTargetGroupAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AlbTargetGroupAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group_attachment aws_alb_target_group_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbTargetGroupAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: AlbTargetGroupAttachmentConfig);
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _targetGroupArn?;
    get targetGroupArn(): string;
    set targetGroupArn(value: string);
    get targetGroupArnInput(): string | undefined;
    private _targetId?;
    get targetId(): string;
    set targetId(value: string);
    get targetIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
