/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GrafanaWorkspaceSamlConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration#admin_role_values GrafanaWorkspaceSamlConfiguration#admin_role_values}
    */
    readonly adminRoleValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration#allowed_organizations GrafanaWorkspaceSamlConfiguration#allowed_organizations}
    */
    readonly allowedOrganizations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration#editor_role_values GrafanaWorkspaceSamlConfiguration#editor_role_values}
    */
    readonly editorRoleValues: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration#email_assertion GrafanaWorkspaceSamlConfiguration#email_assertion}
    */
    readonly emailAssertion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration#groups_assertion GrafanaWorkspaceSamlConfiguration#groups_assertion}
    */
    readonly groupsAssertion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration#id GrafanaWorkspaceSamlConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration#idp_metadata_url GrafanaWorkspaceSamlConfiguration#idp_metadata_url}
    */
    readonly idpMetadataUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration#idp_metadata_xml GrafanaWorkspaceSamlConfiguration#idp_metadata_xml}
    */
    readonly idpMetadataXml?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration#login_assertion GrafanaWorkspaceSamlConfiguration#login_assertion}
    */
    readonly loginAssertion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration#login_validity_duration GrafanaWorkspaceSamlConfiguration#login_validity_duration}
    */
    readonly loginValidityDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration#name_assertion GrafanaWorkspaceSamlConfiguration#name_assertion}
    */
    readonly nameAssertion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration#org_assertion GrafanaWorkspaceSamlConfiguration#org_assertion}
    */
    readonly orgAssertion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration#role_assertion GrafanaWorkspaceSamlConfiguration#role_assertion}
    */
    readonly roleAssertion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration#workspace_id GrafanaWorkspaceSamlConfiguration#workspace_id}
    */
    readonly workspaceId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration#timeouts GrafanaWorkspaceSamlConfiguration#timeouts}
    */
    readonly timeouts?: GrafanaWorkspaceSamlConfigurationTimeouts;
}
export interface GrafanaWorkspaceSamlConfigurationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration#create GrafanaWorkspaceSamlConfiguration#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration#delete GrafanaWorkspaceSamlConfiguration#delete}
    */
    readonly delete?: string;
}
export declare function grafanaWorkspaceSamlConfigurationTimeoutsToTerraform(struct?: GrafanaWorkspaceSamlConfigurationTimeouts | cdktf.IResolvable): any;
export declare function grafanaWorkspaceSamlConfigurationTimeoutsToHclTerraform(struct?: GrafanaWorkspaceSamlConfigurationTimeouts | cdktf.IResolvable): any;
export declare class GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GrafanaWorkspaceSamlConfigurationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: GrafanaWorkspaceSamlConfigurationTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration aws_grafana_workspace_saml_configuration}
*/
export declare class GrafanaWorkspaceSamlConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_grafana_workspace_saml_configuration";
    /**
    * Generates CDKTF code for importing a GrafanaWorkspaceSamlConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GrafanaWorkspaceSamlConfiguration to import
    * @param importFromId The id of the existing GrafanaWorkspaceSamlConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GrafanaWorkspaceSamlConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace_saml_configuration aws_grafana_workspace_saml_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GrafanaWorkspaceSamlConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: GrafanaWorkspaceSamlConfigurationConfig);
    private _adminRoleValues?;
    get adminRoleValues(): string[];
    set adminRoleValues(value: string[]);
    resetAdminRoleValues(): void;
    get adminRoleValuesInput(): string[] | undefined;
    private _allowedOrganizations?;
    get allowedOrganizations(): string[];
    set allowedOrganizations(value: string[]);
    resetAllowedOrganizations(): void;
    get allowedOrganizationsInput(): string[] | undefined;
    private _editorRoleValues?;
    get editorRoleValues(): string[];
    set editorRoleValues(value: string[]);
    get editorRoleValuesInput(): string[] | undefined;
    private _emailAssertion?;
    get emailAssertion(): string;
    set emailAssertion(value: string);
    resetEmailAssertion(): void;
    get emailAssertionInput(): string | undefined;
    private _groupsAssertion?;
    get groupsAssertion(): string;
    set groupsAssertion(value: string);
    resetGroupsAssertion(): void;
    get groupsAssertionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _idpMetadataUrl?;
    get idpMetadataUrl(): string;
    set idpMetadataUrl(value: string);
    resetIdpMetadataUrl(): void;
    get idpMetadataUrlInput(): string | undefined;
    private _idpMetadataXml?;
    get idpMetadataXml(): string;
    set idpMetadataXml(value: string);
    resetIdpMetadataXml(): void;
    get idpMetadataXmlInput(): string | undefined;
    private _loginAssertion?;
    get loginAssertion(): string;
    set loginAssertion(value: string);
    resetLoginAssertion(): void;
    get loginAssertionInput(): string | undefined;
    private _loginValidityDuration?;
    get loginValidityDuration(): number;
    set loginValidityDuration(value: number);
    resetLoginValidityDuration(): void;
    get loginValidityDurationInput(): number | undefined;
    private _nameAssertion?;
    get nameAssertion(): string;
    set nameAssertion(value: string);
    resetNameAssertion(): void;
    get nameAssertionInput(): string | undefined;
    private _orgAssertion?;
    get orgAssertion(): string;
    set orgAssertion(value: string);
    resetOrgAssertion(): void;
    get orgAssertionInput(): string | undefined;
    private _roleAssertion?;
    get roleAssertion(): string;
    set roleAssertion(value: string);
    resetRoleAssertion(): void;
    get roleAssertionInput(): string | undefined;
    get status(): string;
    private _workspaceId?;
    get workspaceId(): string;
    set workspaceId(value: string);
    get workspaceIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference;
    putTimeouts(value: GrafanaWorkspaceSamlConfigurationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | GrafanaWorkspaceSamlConfigurationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
