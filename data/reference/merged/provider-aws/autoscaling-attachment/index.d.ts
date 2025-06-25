/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AutoscalingAttachmentConfig extends cdktf.TerraformMetaArguments {
    /** (Required) Name of ASG to associate with the ELB. */
    readonly autoscalingGroupName: string;
    /** (Optional) Name of the ELB. */
    readonly elb?: string;
    /** */
    readonly id?: string;
    /** (Optional) ARN of a load balancer target group. */
    readonly lbTargetGroupArn?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_attachment aws_autoscaling_attachment}
*/
export declare class AutoscalingAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_autoscaling_attachment";
    /**
    * Generates CDKTF code for importing a AutoscalingAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AutoscalingAttachment to import
    * @param importFromId The id of the existing AutoscalingAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AutoscalingAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_attachment aws_autoscaling_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: AutoscalingAttachmentConfig);
    private _autoscalingGroupName?;
    get autoscalingGroupName(): string;
    set autoscalingGroupName(value: string);
    get autoscalingGroupNameInput(): string | undefined;
    private _elb?;
    get elb(): string;
    set elb(value: string);
    resetElb(): void;
    get elbInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _lbTargetGroupArn?;
    get lbTargetGroupArn(): string;
    set lbTargetGroupArn(value: string);
    resetLbTargetGroupArn(): void;
    get lbTargetGroupArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
