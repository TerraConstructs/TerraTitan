/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchLogDestinationPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_destination_policy#access_policy CloudwatchLogDestinationPolicy#access_policy}
    */
    readonly accessPolicy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_destination_policy#destination_name CloudwatchLogDestinationPolicy#destination_name}
    */
    readonly destinationName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_destination_policy#force_update CloudwatchLogDestinationPolicy#force_update}
    */
    readonly forceUpdate?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_destination_policy#id CloudwatchLogDestinationPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_destination_policy aws_cloudwatch_log_destination_policy}
*/
export declare class CloudwatchLogDestinationPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudwatch_log_destination_policy";
    /**
    * Generates CDKTF code for importing a CloudwatchLogDestinationPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudwatchLogDestinationPolicy to import
    * @param importFromId The id of the existing CloudwatchLogDestinationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_destination_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudwatchLogDestinationPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_destination_policy aws_cloudwatch_log_destination_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchLogDestinationPolicyConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchLogDestinationPolicyConfig);
    private _accessPolicy?;
    get accessPolicy(): string;
    set accessPolicy(value: string);
    get accessPolicyInput(): string | undefined;
    private _destinationName?;
    get destinationName(): string;
    set destinationName(value: string);
    get destinationNameInput(): string | undefined;
    private _forceUpdate?;
    get forceUpdate(): boolean | cdktf.IResolvable;
    set forceUpdate(value: boolean | cdktf.IResolvable);
    resetForceUpdate(): void;
    get forceUpdateInput(): boolean | cdktf.IResolvable | undefined;
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
