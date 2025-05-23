/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchEventBusPolicyConfig extends cdktf.TerraformMetaArguments {
    /** (Optional) The name of the event bus to set the permissions on. If you omit this, the permissions are set on the `default` event bus. */
    readonly eventBusName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_bus_policy#id CloudwatchEventBusPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /** (Required) The text of the policy. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). */
    readonly policy: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_bus_policy aws_cloudwatch_event_bus_policy}
*/
export declare class CloudwatchEventBusPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudwatch_event_bus_policy";
    /**
    * Generates CDKTF code for importing a CloudwatchEventBusPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudwatchEventBusPolicy to import
    * @param importFromId The id of the existing CloudwatchEventBusPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_bus_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudwatchEventBusPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_bus_policy aws_cloudwatch_event_bus_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventBusPolicyConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchEventBusPolicyConfig);
    private _eventBusName?;
    get eventBusName(): string;
    set eventBusName(value: string);
    resetEventBusName(): void;
    get eventBusNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
