/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AmiLaunchPermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_launch_permission#account_id AmiLaunchPermission#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_launch_permission#group AmiLaunchPermission#group}
    */
    readonly group?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_launch_permission#id AmiLaunchPermission#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_launch_permission#image_id AmiLaunchPermission#image_id}
    */
    readonly imageId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_launch_permission#organization_arn AmiLaunchPermission#organization_arn}
    */
    readonly organizationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_launch_permission#organizational_unit_arn AmiLaunchPermission#organizational_unit_arn}
    */
    readonly organizationalUnitArn?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_launch_permission aws_ami_launch_permission}
*/
export declare class AmiLaunchPermission extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ami_launch_permission";
    /**
    * Generates CDKTF code for importing a AmiLaunchPermission resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AmiLaunchPermission to import
    * @param importFromId The id of the existing AmiLaunchPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_launch_permission#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AmiLaunchPermission to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_launch_permission aws_ami_launch_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmiLaunchPermissionConfig
    */
    constructor(scope: Construct, id: string, config: AmiLaunchPermissionConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    private _group?;
    get group(): string;
    set group(value: string);
    resetGroup(): void;
    get groupInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _imageId?;
    get imageId(): string;
    set imageId(value: string);
    get imageIdInput(): string | undefined;
    private _organizationArn?;
    get organizationArn(): string;
    set organizationArn(value: string);
    resetOrganizationArn(): void;
    get organizationArnInput(): string | undefined;
    private _organizationalUnitArn?;
    get organizationalUnitArn(): string;
    set organizationalUnitArn(value: string);
    resetOrganizationalUnitArn(): void;
    get organizationalUnitArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
