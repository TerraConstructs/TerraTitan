/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GrafanaWorkspaceServiceAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/grafana_workspace_service_account#grafana_role GrafanaWorkspaceServiceAccount#grafana_role}
    */
    readonly grafanaRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/grafana_workspace_service_account#name GrafanaWorkspaceServiceAccount#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/grafana_workspace_service_account#workspace_id GrafanaWorkspaceServiceAccount#workspace_id}
    */
    readonly workspaceId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/grafana_workspace_service_account aws_grafana_workspace_service_account}
*/
export declare class GrafanaWorkspaceServiceAccount extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_grafana_workspace_service_account";
    /**
    * Generates CDKTF code for importing a GrafanaWorkspaceServiceAccount resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GrafanaWorkspaceServiceAccount to import
    * @param importFromId The id of the existing GrafanaWorkspaceServiceAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/grafana_workspace_service_account#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GrafanaWorkspaceServiceAccount to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/grafana_workspace_service_account aws_grafana_workspace_service_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GrafanaWorkspaceServiceAccountConfig
    */
    constructor(scope: Construct, id: string, config: GrafanaWorkspaceServiceAccountConfig);
    private _grafanaRole?;
    get grafanaRole(): string;
    set grafanaRole(value: string);
    get grafanaRoleInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get serviceAccountId(): string;
    private _workspaceId?;
    get workspaceId(): string;
    set workspaceId(value: string);
    get workspaceIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
