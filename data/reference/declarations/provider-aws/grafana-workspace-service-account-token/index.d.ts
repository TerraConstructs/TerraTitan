/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GrafanaWorkspaceServiceAccountTokenConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/grafana_workspace_service_account_token#name GrafanaWorkspaceServiceAccountToken#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/grafana_workspace_service_account_token#seconds_to_live GrafanaWorkspaceServiceAccountToken#seconds_to_live}
    */
    readonly secondsToLive: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/grafana_workspace_service_account_token#service_account_id GrafanaWorkspaceServiceAccountToken#service_account_id}
    */
    readonly serviceAccountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/grafana_workspace_service_account_token#workspace_id GrafanaWorkspaceServiceAccountToken#workspace_id}
    */
    readonly workspaceId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/grafana_workspace_service_account_token aws_grafana_workspace_service_account_token}
*/
export declare class GrafanaWorkspaceServiceAccountToken extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_grafana_workspace_service_account_token";
    /**
    * Generates CDKTF code for importing a GrafanaWorkspaceServiceAccountToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GrafanaWorkspaceServiceAccountToken to import
    * @param importFromId The id of the existing GrafanaWorkspaceServiceAccountToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/grafana_workspace_service_account_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GrafanaWorkspaceServiceAccountToken to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/grafana_workspace_service_account_token aws_grafana_workspace_service_account_token} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GrafanaWorkspaceServiceAccountTokenConfig
    */
    constructor(scope: Construct, id: string, config: GrafanaWorkspaceServiceAccountTokenConfig);
    get createdAt(): string;
    get expiresAt(): string;
    get id(): string;
    get key(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _secondsToLive?;
    get secondsToLive(): number;
    set secondsToLive(value: number);
    get secondsToLiveInput(): number | undefined;
    private _serviceAccountId?;
    get serviceAccountId(): string;
    set serviceAccountId(value: string);
    get serviceAccountIdInput(): string | undefined;
    get serviceAccountTokenId(): string;
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
