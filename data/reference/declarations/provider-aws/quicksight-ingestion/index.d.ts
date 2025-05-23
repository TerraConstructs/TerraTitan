/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightIngestionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_ingestion#aws_account_id QuicksightIngestion#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_ingestion#data_set_id QuicksightIngestion#data_set_id}
    */
    readonly dataSetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_ingestion#ingestion_id QuicksightIngestion#ingestion_id}
    */
    readonly ingestionId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_ingestion#ingestion_type QuicksightIngestion#ingestion_type}
    */
    readonly ingestionType: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_ingestion aws_quicksight_ingestion}
*/
export declare class QuicksightIngestion extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_quicksight_ingestion";
    /**
    * Generates CDKTF code for importing a QuicksightIngestion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the QuicksightIngestion to import
    * @param importFromId The id of the existing QuicksightIngestion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_ingestion#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the QuicksightIngestion to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_ingestion aws_quicksight_ingestion} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightIngestionConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightIngestionConfig);
    get arn(): string;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    private _dataSetId?;
    get dataSetId(): string;
    set dataSetId(value: string);
    get dataSetIdInput(): string | undefined;
    get id(): string;
    private _ingestionId?;
    get ingestionId(): string;
    set ingestionId(value: string);
    get ingestionIdInput(): string | undefined;
    get ingestionStatus(): string;
    private _ingestionType?;
    get ingestionType(): string;
    set ingestionType(value: string);
    get ingestionTypeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
