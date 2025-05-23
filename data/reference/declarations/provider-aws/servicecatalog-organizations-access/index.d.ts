/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogOrganizationsAccessConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_organizations_access#enabled ServicecatalogOrganizationsAccess#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_organizations_access#id ServicecatalogOrganizationsAccess#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_organizations_access#timeouts ServicecatalogOrganizationsAccess#timeouts}
    */
    readonly timeouts?: ServicecatalogOrganizationsAccessTimeouts;
}
export interface ServicecatalogOrganizationsAccessTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_organizations_access#read ServicecatalogOrganizationsAccess#read}
    */
    readonly read?: string;
}
export declare function servicecatalogOrganizationsAccessTimeoutsToTerraform(struct?: ServicecatalogOrganizationsAccessTimeouts | cdktf.IResolvable): any;
export declare function servicecatalogOrganizationsAccessTimeoutsToHclTerraform(struct?: ServicecatalogOrganizationsAccessTimeouts | cdktf.IResolvable): any;
export declare class ServicecatalogOrganizationsAccessTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServicecatalogOrganizationsAccessTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ServicecatalogOrganizationsAccessTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_organizations_access aws_servicecatalog_organizations_access}
*/
export declare class ServicecatalogOrganizationsAccess extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_servicecatalog_organizations_access";
    /**
    * Generates CDKTF code for importing a ServicecatalogOrganizationsAccess resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ServicecatalogOrganizationsAccess to import
    * @param importFromId The id of the existing ServicecatalogOrganizationsAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_organizations_access#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ServicecatalogOrganizationsAccess to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_organizations_access aws_servicecatalog_organizations_access} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogOrganizationsAccessConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogOrganizationsAccessConfig);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _timeouts;
    get timeouts(): ServicecatalogOrganizationsAccessTimeoutsOutputReference;
    putTimeouts(value: ServicecatalogOrganizationsAccessTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ServicecatalogOrganizationsAccessTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
