/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GrafanaLicenseAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_license_association#grafana_token GrafanaLicenseAssociation#grafana_token}
    */
    readonly grafanaToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_license_association#id GrafanaLicenseAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_license_association#license_type GrafanaLicenseAssociation#license_type}
    */
    readonly licenseType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_license_association#workspace_id GrafanaLicenseAssociation#workspace_id}
    */
    readonly workspaceId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_license_association#timeouts GrafanaLicenseAssociation#timeouts}
    */
    readonly timeouts?: GrafanaLicenseAssociationTimeouts;
}
export interface GrafanaLicenseAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_license_association#create GrafanaLicenseAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_license_association#delete GrafanaLicenseAssociation#delete}
    */
    readonly delete?: string;
}
export declare function grafanaLicenseAssociationTimeoutsToTerraform(struct?: GrafanaLicenseAssociationTimeouts | cdktf.IResolvable): any;
export declare function grafanaLicenseAssociationTimeoutsToHclTerraform(struct?: GrafanaLicenseAssociationTimeouts | cdktf.IResolvable): any;
export declare class GrafanaLicenseAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GrafanaLicenseAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: GrafanaLicenseAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_license_association aws_grafana_license_association}
*/
export declare class GrafanaLicenseAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_grafana_license_association";
    /**
    * Generates CDKTF code for importing a GrafanaLicenseAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GrafanaLicenseAssociation to import
    * @param importFromId The id of the existing GrafanaLicenseAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_license_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GrafanaLicenseAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/grafana_license_association aws_grafana_license_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GrafanaLicenseAssociationConfig
    */
    constructor(scope: Construct, id: string, config: GrafanaLicenseAssociationConfig);
    get freeTrialExpiration(): string;
    private _grafanaToken?;
    get grafanaToken(): string;
    set grafanaToken(value: string);
    resetGrafanaToken(): void;
    get grafanaTokenInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get licenseExpiration(): string;
    private _licenseType?;
    get licenseType(): string;
    set licenseType(value: string);
    get licenseTypeInput(): string | undefined;
    private _workspaceId?;
    get workspaceId(): string;
    set workspaceId(value: string);
    get workspaceIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): GrafanaLicenseAssociationTimeoutsOutputReference;
    putTimeouts(value: GrafanaLicenseAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | GrafanaLicenseAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
