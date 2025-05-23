/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SqsQueueRedrivePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue_redrive_policy#id SqsQueueRedrivePolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue_redrive_policy#queue_url SqsQueueRedrivePolicy#queue_url}
    */
    readonly queueUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue_redrive_policy#redrive_policy SqsQueueRedrivePolicy#redrive_policy}
    */
    readonly redrivePolicy: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue_redrive_policy aws_sqs_queue_redrive_policy}
*/
export declare class SqsQueueRedrivePolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sqs_queue_redrive_policy";
    /**
    * Generates CDKTF code for importing a SqsQueueRedrivePolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SqsQueueRedrivePolicy to import
    * @param importFromId The id of the existing SqsQueueRedrivePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue_redrive_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SqsQueueRedrivePolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue_redrive_policy aws_sqs_queue_redrive_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SqsQueueRedrivePolicyConfig
    */
    constructor(scope: Construct, id: string, config: SqsQueueRedrivePolicyConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _queueUrl?;
    get queueUrl(): string;
    set queueUrl(value: string);
    get queueUrlInput(): string | undefined;
    private _redrivePolicy?;
    get redrivePolicy(): string;
    set redrivePolicy(value: string);
    get redrivePolicyInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
