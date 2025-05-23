/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GrafanaWorkspaceApiKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_api_key#id GrafanaWorkspaceApiKey#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_api_key#key_name GrafanaWorkspaceApiKey#key_name}
    */
    readonly keyName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_api_key#key_role GrafanaWorkspaceApiKey#key_role}
    */
    readonly keyRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_api_key#seconds_to_live GrafanaWorkspaceApiKey#seconds_to_live}
    */
    readonly secondsToLive: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_api_key#workspace_id GrafanaWorkspaceApiKey#workspace_id}
    */
    readonly workspaceId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_api_key aws_grafana_workspace_api_key}
*/
export declare class GrafanaWorkspaceApiKey extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_grafana_workspace_api_key";
    /**
    * Generates CDKTF code for importing a GrafanaWorkspaceApiKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GrafanaWorkspaceApiKey to import
    * @param importFromId The id of the existing GrafanaWorkspaceApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_api_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GrafanaWorkspaceApiKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_api_key aws_grafana_workspace_api_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GrafanaWorkspaceApiKeyConfig
    */
    constructor(scope: Construct, id: string, config: GrafanaWorkspaceApiKeyConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get key(): string;
    private _keyName?;
    get keyName(): string;
    set keyName(value: string);
    get keyNameInput(): string | undefined;
    private _keyRole?;
    get keyRole(): string;
    set keyRole(value: string);
    get keyRoleInput(): string | undefined;
    private _secondsToLive?;
    get secondsToLive(): number;
    set secondsToLive(value: number);
    get secondsToLiveInput(): number | undefined;
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
