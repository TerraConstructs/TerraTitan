/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightTemplateAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template_alias#alias_name QuicksightTemplateAlias#alias_name}
    */
    readonly aliasName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template_alias#aws_account_id QuicksightTemplateAlias#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template_alias#template_id QuicksightTemplateAlias#template_id}
    */
    readonly templateId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template_alias#template_version_number QuicksightTemplateAlias#template_version_number}
    */
    readonly templateVersionNumber: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template_alias aws_quicksight_template_alias}
*/
export declare class QuicksightTemplateAlias extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_quicksight_template_alias";
    /**
    * Generates CDKTF code for importing a QuicksightTemplateAlias resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the QuicksightTemplateAlias to import
    * @param importFromId The id of the existing QuicksightTemplateAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template_alias#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the QuicksightTemplateAlias to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_template_alias aws_quicksight_template_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightTemplateAliasConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightTemplateAliasConfig);
    private _aliasName?;
    get aliasName(): string;
    set aliasName(value: string);
    get aliasNameInput(): string | undefined;
    get arn(): string;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    get id(): string;
    private _templateId?;
    get templateId(): string;
    set templateId(value: string);
    get templateIdInput(): string | undefined;
    private _templateVersionNumber?;
    get templateVersionNumber(): number;
    set templateVersionNumber(value: number);
    get templateVersionNumberInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
