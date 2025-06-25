/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchLogDeliveryDestinationPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery_destination_policy#delivery_destination_name CloudwatchLogDeliveryDestinationPolicy#delivery_destination_name}
    */
    readonly deliveryDestinationName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery_destination_policy#delivery_destination_policy CloudwatchLogDeliveryDestinationPolicy#delivery_destination_policy}
    */
    readonly deliveryDestinationPolicy: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery_destination_policy aws_cloudwatch_log_delivery_destination_policy}
*/
export declare class CloudwatchLogDeliveryDestinationPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudwatch_log_delivery_destination_policy";
    /**
    * Generates CDKTF code for importing a CloudwatchLogDeliveryDestinationPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudwatchLogDeliveryDestinationPolicy to import
    * @param importFromId The id of the existing CloudwatchLogDeliveryDestinationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery_destination_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudwatchLogDeliveryDestinationPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery_destination_policy aws_cloudwatch_log_delivery_destination_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchLogDeliveryDestinationPolicyConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchLogDeliveryDestinationPolicyConfig);
    private _deliveryDestinationName?;
    get deliveryDestinationName(): string;
    set deliveryDestinationName(value: string);
    get deliveryDestinationNameInput(): string | undefined;
    private _deliveryDestinationPolicy?;
    get deliveryDestinationPolicy(): string;
    set deliveryDestinationPolicy(value: string);
    get deliveryDestinationPolicyInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
