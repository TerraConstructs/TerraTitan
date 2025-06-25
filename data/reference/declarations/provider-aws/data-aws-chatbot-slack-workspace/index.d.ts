/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsChatbotSlackWorkspaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/chatbot_slack_workspace#slack_team_name DataAwsChatbotSlackWorkspace#slack_team_name}
    */
    readonly slackTeamName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/chatbot_slack_workspace aws_chatbot_slack_workspace}
*/
export declare class DataAwsChatbotSlackWorkspace extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_chatbot_slack_workspace";
    /**
    * Generates CDKTF code for importing a DataAwsChatbotSlackWorkspace resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsChatbotSlackWorkspace to import
    * @param importFromId The id of the existing DataAwsChatbotSlackWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/chatbot_slack_workspace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsChatbotSlackWorkspace to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/chatbot_slack_workspace aws_chatbot_slack_workspace} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsChatbotSlackWorkspaceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsChatbotSlackWorkspaceConfig);
    get slackTeamId(): string;
    private _slackTeamName?;
    get slackTeamName(): string;
    set slackTeamName(value: string);
    get slackTeamNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
