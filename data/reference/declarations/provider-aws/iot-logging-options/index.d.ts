/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotLoggingOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_logging_options#default_log_level IotLoggingOptions#default_log_level}
    */
    readonly defaultLogLevel: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_logging_options#disable_all_logs IotLoggingOptions#disable_all_logs}
    */
    readonly disableAllLogs?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_logging_options#id IotLoggingOptions#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_logging_options#role_arn IotLoggingOptions#role_arn}
    */
    readonly roleArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_logging_options aws_iot_logging_options}
*/
export declare class IotLoggingOptions extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iot_logging_options";
    /**
    * Generates CDKTF code for importing a IotLoggingOptions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IotLoggingOptions to import
    * @param importFromId The id of the existing IotLoggingOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_logging_options#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IotLoggingOptions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_logging_options aws_iot_logging_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotLoggingOptionsConfig
    */
    constructor(scope: Construct, id: string, config: IotLoggingOptionsConfig);
    private _defaultLogLevel?;
    get defaultLogLevel(): string;
    set defaultLogLevel(value: string);
    get defaultLogLevelInput(): string | undefined;
    private _disableAllLogs?;
    get disableAllLogs(): boolean | cdktf.IResolvable;
    set disableAllLogs(value: boolean | cdktf.IResolvable);
    resetDisableAllLogs(): void;
    get disableAllLogsInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
