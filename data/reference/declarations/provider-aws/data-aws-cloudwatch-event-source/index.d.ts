/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCloudwatchEventSourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_event_source#id DataAwsCloudwatchEventSource#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_event_source#name_prefix DataAwsCloudwatchEventSource#name_prefix}
    */
    readonly namePrefix?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_event_source aws_cloudwatch_event_source}
*/
export declare class DataAwsCloudwatchEventSource extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_cloudwatch_event_source";
    /**
    * Generates CDKTF code for importing a DataAwsCloudwatchEventSource resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCloudwatchEventSource to import
    * @param importFromId The id of the existing DataAwsCloudwatchEventSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_event_source#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCloudwatchEventSource to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_event_source aws_cloudwatch_event_source} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudwatchEventSourceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsCloudwatchEventSourceConfig);
    get arn(): string;
    get createdBy(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get name(): string;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    get state(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
