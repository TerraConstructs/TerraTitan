/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GrafanaWorkspaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#account_access_type GrafanaWorkspace#account_access_type}
    */
    readonly accountAccessType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#authentication_providers GrafanaWorkspace#authentication_providers}
    */
    readonly authenticationProviders: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#configuration GrafanaWorkspace#configuration}
    */
    readonly configuration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#data_sources GrafanaWorkspace#data_sources}
    */
    readonly dataSources?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#description GrafanaWorkspace#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#grafana_version GrafanaWorkspace#grafana_version}
    */
    readonly grafanaVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#id GrafanaWorkspace#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#name GrafanaWorkspace#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#notification_destinations GrafanaWorkspace#notification_destinations}
    */
    readonly notificationDestinations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#organization_role_name GrafanaWorkspace#organization_role_name}
    */
    readonly organizationRoleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#organizational_units GrafanaWorkspace#organizational_units}
    */
    readonly organizationalUnits?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#permission_type GrafanaWorkspace#permission_type}
    */
    readonly permissionType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#role_arn GrafanaWorkspace#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#stack_set_name GrafanaWorkspace#stack_set_name}
    */
    readonly stackSetName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#tags GrafanaWorkspace#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#tags_all GrafanaWorkspace#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * network_access_control block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#network_access_control GrafanaWorkspace#network_access_control}
    */
    readonly networkAccessControl?: GrafanaWorkspaceNetworkAccessControl;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#timeouts GrafanaWorkspace#timeouts}
    */
    readonly timeouts?: GrafanaWorkspaceTimeouts;
    /**
    * vpc_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#vpc_configuration GrafanaWorkspace#vpc_configuration}
    */
    readonly vpcConfiguration?: GrafanaWorkspaceVpcConfiguration;
}
export interface GrafanaWorkspaceNetworkAccessControl {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#prefix_list_ids GrafanaWorkspace#prefix_list_ids}
    */
    readonly prefixListIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#vpce_ids GrafanaWorkspace#vpce_ids}
    */
    readonly vpceIds: string[];
}
export declare function grafanaWorkspaceNetworkAccessControlToTerraform(struct?: GrafanaWorkspaceNetworkAccessControlOutputReference | GrafanaWorkspaceNetworkAccessControl): any;
export declare function grafanaWorkspaceNetworkAccessControlToHclTerraform(struct?: GrafanaWorkspaceNetworkAccessControlOutputReference | GrafanaWorkspaceNetworkAccessControl): any;
export declare class GrafanaWorkspaceNetworkAccessControlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GrafanaWorkspaceNetworkAccessControl | undefined;
    set internalValue(value: GrafanaWorkspaceNetworkAccessControl | undefined);
    private _prefixListIds?;
    get prefixListIds(): string[];
    set prefixListIds(value: string[]);
    get prefixListIdsInput(): string[] | undefined;
    private _vpceIds?;
    get vpceIds(): string[];
    set vpceIds(value: string[]);
    get vpceIdsInput(): string[] | undefined;
}
export interface GrafanaWorkspaceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#create GrafanaWorkspace#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#update GrafanaWorkspace#update}
    */
    readonly update?: string;
}
export declare function grafanaWorkspaceTimeoutsToTerraform(struct?: GrafanaWorkspaceTimeouts | cdktf.IResolvable): any;
export declare function grafanaWorkspaceTimeoutsToHclTerraform(struct?: GrafanaWorkspaceTimeouts | cdktf.IResolvable): any;
export declare class GrafanaWorkspaceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GrafanaWorkspaceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: GrafanaWorkspaceTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
export interface GrafanaWorkspaceVpcConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#security_group_ids GrafanaWorkspace#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#subnet_ids GrafanaWorkspace#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function grafanaWorkspaceVpcConfigurationToTerraform(struct?: GrafanaWorkspaceVpcConfigurationOutputReference | GrafanaWorkspaceVpcConfiguration): any;
export declare function grafanaWorkspaceVpcConfigurationToHclTerraform(struct?: GrafanaWorkspaceVpcConfigurationOutputReference | GrafanaWorkspaceVpcConfiguration): any;
export declare class GrafanaWorkspaceVpcConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GrafanaWorkspaceVpcConfiguration | undefined;
    set internalValue(value: GrafanaWorkspaceVpcConfiguration | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace aws_grafana_workspace}
*/
export declare class GrafanaWorkspace extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_grafana_workspace";
    /**
    * Generates CDKTF code for importing a GrafanaWorkspace resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GrafanaWorkspace to import
    * @param importFromId The id of the existing GrafanaWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GrafanaWorkspace to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_workspace aws_grafana_workspace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GrafanaWorkspaceConfig
    */
    constructor(scope: Construct, id: string, config: GrafanaWorkspaceConfig);
    private _accountAccessType?;
    get accountAccessType(): string;
    set accountAccessType(value: string);
    get accountAccessTypeInput(): string | undefined;
    get arn(): string;
    private _authenticationProviders?;
    get authenticationProviders(): string[];
    set authenticationProviders(value: string[]);
    get authenticationProvidersInput(): string[] | undefined;
    private _configuration?;
    get configuration(): string;
    set configuration(value: string);
    resetConfiguration(): void;
    get configurationInput(): string | undefined;
    private _dataSources?;
    get dataSources(): string[];
    set dataSources(value: string[]);
    resetDataSources(): void;
    get dataSourcesInput(): string[] | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get endpoint(): string;
    private _grafanaVersion?;
    get grafanaVersion(): string;
    set grafanaVersion(value: string);
    resetGrafanaVersion(): void;
    get grafanaVersionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _notificationDestinations?;
    get notificationDestinations(): string[];
    set notificationDestinations(value: string[]);
    resetNotificationDestinations(): void;
    get notificationDestinationsInput(): string[] | undefined;
    private _organizationRoleName?;
    get organizationRoleName(): string;
    set organizationRoleName(value: string);
    resetOrganizationRoleName(): void;
    get organizationRoleNameInput(): string | undefined;
    private _organizationalUnits?;
    get organizationalUnits(): string[];
    set organizationalUnits(value: string[]);
    resetOrganizationalUnits(): void;
    get organizationalUnitsInput(): string[] | undefined;
    private _permissionType?;
    get permissionType(): string;
    set permissionType(value: string);
    get permissionTypeInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    get samlConfigurationStatus(): string;
    private _stackSetName?;
    get stackSetName(): string;
    set stackSetName(value: string);
    resetStackSetName(): void;
    get stackSetNameInput(): string | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _networkAccessControl;
    get networkAccessControl(): GrafanaWorkspaceNetworkAccessControlOutputReference;
    putNetworkAccessControl(value: GrafanaWorkspaceNetworkAccessControl): void;
    resetNetworkAccessControl(): void;
    get networkAccessControlInput(): GrafanaWorkspaceNetworkAccessControl | undefined;
    private _timeouts;
    get timeouts(): GrafanaWorkspaceTimeoutsOutputReference;
    putTimeouts(value: GrafanaWorkspaceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | GrafanaWorkspaceTimeouts | undefined;
    private _vpcConfiguration;
    get vpcConfiguration(): GrafanaWorkspaceVpcConfigurationOutputReference;
    putVpcConfiguration(value: GrafanaWorkspaceVpcConfiguration): void;
    resetVpcConfiguration(): void;
    get vpcConfigurationInput(): GrafanaWorkspaceVpcConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
