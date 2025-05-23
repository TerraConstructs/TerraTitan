/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DynamodbKinesisStreamingDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_kinesis_streaming_destination#approximate_creation_date_time_precision DynamodbKinesisStreamingDestination#approximate_creation_date_time_precision}
    */
    readonly approximateCreationDateTimePrecision?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_kinesis_streaming_destination#id DynamodbKinesisStreamingDestination#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_kinesis_streaming_destination#stream_arn DynamodbKinesisStreamingDestination#stream_arn}
    */
    readonly streamArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_kinesis_streaming_destination#table_name DynamodbKinesisStreamingDestination#table_name}
    */
    readonly tableName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_kinesis_streaming_destination aws_dynamodb_kinesis_streaming_destination}
*/
export declare class DynamodbKinesisStreamingDestination extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dynamodb_kinesis_streaming_destination";
    /**
    * Generates CDKTF code for importing a DynamodbKinesisStreamingDestination resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamodbKinesisStreamingDestination to import
    * @param importFromId The id of the existing DynamodbKinesisStreamingDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_kinesis_streaming_destination#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamodbKinesisStreamingDestination to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_kinesis_streaming_destination aws_dynamodb_kinesis_streaming_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbKinesisStreamingDestinationConfig
    */
    constructor(scope: Construct, id: string, config: DynamodbKinesisStreamingDestinationConfig);
    private _approximateCreationDateTimePrecision?;
    get approximateCreationDateTimePrecision(): string;
    set approximateCreationDateTimePrecision(value: string);
    resetApproximateCreationDateTimePrecision(): void;
    get approximateCreationDateTimePrecisionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _streamArn?;
    get streamArn(): string;
    set streamArn(value: string);
    get streamArnInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
