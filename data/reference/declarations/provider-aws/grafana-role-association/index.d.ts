/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GrafanaRoleAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_role_association#group_ids GrafanaRoleAssociation#group_ids}
    */
    readonly groupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_role_association#id GrafanaRoleAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_role_association#role GrafanaRoleAssociation#role}
    */
    readonly role: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_role_association#user_ids GrafanaRoleAssociation#user_ids}
    */
    readonly userIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_role_association#workspace_id GrafanaRoleAssociation#workspace_id}
    */
    readonly workspaceId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_role_association#timeouts GrafanaRoleAssociation#timeouts}
    */
    readonly timeouts?: GrafanaRoleAssociationTimeouts;
}
export interface GrafanaRoleAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_role_association#create GrafanaRoleAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_role_association#delete GrafanaRoleAssociation#delete}
    */
    readonly delete?: string;
}
export declare function grafanaRoleAssociationTimeoutsToTerraform(struct?: GrafanaRoleAssociationTimeouts | cdktf.IResolvable): any;
export declare function grafanaRoleAssociationTimeoutsToHclTerraform(struct?: GrafanaRoleAssociationTimeouts | cdktf.IResolvable): any;
export declare class GrafanaRoleAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GrafanaRoleAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: GrafanaRoleAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_role_association aws_grafana_role_association}
*/
export declare class GrafanaRoleAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_grafana_role_association";
    /**
    * Generates CDKTF code for importing a GrafanaRoleAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GrafanaRoleAssociation to import
    * @param importFromId The id of the existing GrafanaRoleAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_role_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GrafanaRoleAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_role_association aws_grafana_role_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GrafanaRoleAssociationConfig
    */
    constructor(scope: Construct, id: string, config: GrafanaRoleAssociationConfig);
    private _groupIds?;
    get groupIds(): string[];
    set groupIds(value: string[]);
    resetGroupIds(): void;
    get groupIdsInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _role?;
    get role(): string;
    set role(value: string);
    get roleInput(): string | undefined;
    private _userIds?;
    get userIds(): string[];
    set userIds(value: string[]);
    resetUserIds(): void;
    get userIdsInput(): string[] | undefined;
    private _workspaceId?;
    get workspaceId(): string;
    set workspaceId(value: string);
    get workspaceIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): GrafanaRoleAssociationTimeoutsOutputReference;
    putTimeouts(value: GrafanaRoleAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | GrafanaRoleAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
