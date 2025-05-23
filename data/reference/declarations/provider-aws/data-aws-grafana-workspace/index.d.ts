/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsGrafanaWorkspaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/grafana_workspace#id DataAwsGrafanaWorkspace#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/grafana_workspace#tags DataAwsGrafanaWorkspace#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/grafana_workspace#workspace_id DataAwsGrafanaWorkspace#workspace_id}
    */
    readonly workspaceId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/grafana_workspace aws_grafana_workspace}
*/
export declare class DataAwsGrafanaWorkspace extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_grafana_workspace";
    /**
    * Generates CDKTF code for importing a DataAwsGrafanaWorkspace resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsGrafanaWorkspace to import
    * @param importFromId The id of the existing DataAwsGrafanaWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/grafana_workspace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsGrafanaWorkspace to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/grafana_workspace aws_grafana_workspace} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGrafanaWorkspaceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsGrafanaWorkspaceConfig);
    get accountAccessType(): string;
    get arn(): string;
    get authenticationProviders(): string[];
    get createdDate(): string;
    get dataSources(): string[];
    get description(): string;
    get endpoint(): string;
    get grafanaVersion(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedDate(): string;
    get name(): string;
    get notificationDestinations(): string[];
    get organizationRoleName(): string;
    get organizationalUnits(): string[];
    get permissionType(): string;
    get roleArn(): string;
    get samlConfigurationStatus(): string;
    get stackSetName(): string;
    get status(): string;
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
