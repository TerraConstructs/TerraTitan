/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmonitorMonitorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmonitor_monitor#aggregation_period NetworkmonitorMonitor#aggregation_period}
    */
    readonly aggregationPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmonitor_monitor#monitor_name NetworkmonitorMonitor#monitor_name}
    */
    readonly monitorName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmonitor_monitor#tags NetworkmonitorMonitor#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmonitor_monitor aws_networkmonitor_monitor}
*/
export declare class NetworkmonitorMonitor extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkmonitor_monitor";
    /**
    * Generates CDKTF code for importing a NetworkmonitorMonitor resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkmonitorMonitor to import
    * @param importFromId The id of the existing NetworkmonitorMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmonitor_monitor#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkmonitorMonitor to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmonitor_monitor aws_networkmonitor_monitor} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmonitorMonitorConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmonitorMonitorConfig);
    private _aggregationPeriod?;
    get aggregationPeriod(): number;
    set aggregationPeriod(value: number);
    resetAggregationPeriod(): void;
    get aggregationPeriodInput(): number | undefined;
    get arn(): string;
    get id(): string;
    private _monitorName?;
    get monitorName(): string;
    set monitorName(value: string);
    get monitorNameInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
