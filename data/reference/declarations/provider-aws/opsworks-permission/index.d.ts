/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpsworksPermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_permission#allow_ssh OpsworksPermission#allow_ssh}
    */
    readonly allowSsh?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_permission#allow_sudo OpsworksPermission#allow_sudo}
    */
    readonly allowSudo?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_permission#id OpsworksPermission#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_permission#level OpsworksPermission#level}
    */
    readonly level?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_permission#stack_id OpsworksPermission#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_permission#user_arn OpsworksPermission#user_arn}
    */
    readonly userArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_permission aws_opsworks_permission}
*/
export declare class OpsworksPermission extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opsworks_permission";
    /**
    * Generates CDKTF code for importing a OpsworksPermission resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpsworksPermission to import
    * @param importFromId The id of the existing OpsworksPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_permission#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpsworksPermission to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_permission aws_opsworks_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksPermissionConfig
    */
    constructor(scope: Construct, id: string, config: OpsworksPermissionConfig);
    private _allowSsh?;
    get allowSsh(): boolean | cdktf.IResolvable;
    set allowSsh(value: boolean | cdktf.IResolvable);
    resetAllowSsh(): void;
    get allowSshInput(): boolean | cdktf.IResolvable | undefined;
    private _allowSudo?;
    get allowSudo(): boolean | cdktf.IResolvable;
    set allowSudo(value: boolean | cdktf.IResolvable);
    resetAllowSudo(): void;
    get allowSudoInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _level?;
    get level(): string;
    set level(value: string);
    resetLevel(): void;
    get levelInput(): string | undefined;
    private _stackId?;
    get stackId(): string;
    set stackId(value: string);
    get stackIdInput(): string | undefined;
    private _userArn?;
    get userArn(): string;
    set userArn(value: string);
    get userArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
