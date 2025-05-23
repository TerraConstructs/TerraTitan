/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RumMetricsDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_metrics_destination#app_monitor_name RumMetricsDestination#app_monitor_name}
    */
    readonly appMonitorName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_metrics_destination#destination RumMetricsDestination#destination}
    */
    readonly destination: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_metrics_destination#destination_arn RumMetricsDestination#destination_arn}
    */
    readonly destinationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_metrics_destination#iam_role_arn RumMetricsDestination#iam_role_arn}
    */
    readonly iamRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_metrics_destination#id RumMetricsDestination#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_metrics_destination aws_rum_metrics_destination}
*/
export declare class RumMetricsDestination extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rum_metrics_destination";
    /**
    * Generates CDKTF code for importing a RumMetricsDestination resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RumMetricsDestination to import
    * @param importFromId The id of the existing RumMetricsDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_metrics_destination#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RumMetricsDestination to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_metrics_destination aws_rum_metrics_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RumMetricsDestinationConfig
    */
    constructor(scope: Construct, id: string, config: RumMetricsDestinationConfig);
    private _appMonitorName?;
    get appMonitorName(): string;
    set appMonitorName(value: string);
    get appMonitorNameInput(): string | undefined;
    private _destination?;
    get destination(): string;
    set destination(value: string);
    get destinationInput(): string | undefined;
    private _destinationArn?;
    get destinationArn(): string;
    set destinationArn(value: string);
    resetDestinationArn(): void;
    get destinationArnInput(): string | undefined;
    private _iamRoleArn?;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    resetIamRoleArn(): void;
    get iamRoleArnInput(): string | undefined;
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
