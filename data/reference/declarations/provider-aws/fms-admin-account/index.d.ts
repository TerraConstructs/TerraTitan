/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FmsAdminAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fms_admin_account#account_id FmsAdminAccount#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fms_admin_account#id FmsAdminAccount#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fms_admin_account#timeouts FmsAdminAccount#timeouts}
    */
    readonly timeouts?: FmsAdminAccountTimeouts;
}
export interface FmsAdminAccountTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fms_admin_account#create FmsAdminAccount#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fms_admin_account#delete FmsAdminAccount#delete}
    */
    readonly delete?: string;
}
export declare function fmsAdminAccountTimeoutsToTerraform(struct?: FmsAdminAccountTimeouts | cdktf.IResolvable): any;
export declare function fmsAdminAccountTimeoutsToHclTerraform(struct?: FmsAdminAccountTimeouts | cdktf.IResolvable): any;
export declare class FmsAdminAccountTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FmsAdminAccountTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FmsAdminAccountTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fms_admin_account aws_fms_admin_account}
*/
export declare class FmsAdminAccount extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_fms_admin_account";
    /**
    * Generates CDKTF code for importing a FmsAdminAccount resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FmsAdminAccount to import
    * @param importFromId The id of the existing FmsAdminAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fms_admin_account#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FmsAdminAccount to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fms_admin_account aws_fms_admin_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FmsAdminAccountConfig = {}
    */
    constructor(scope: Construct, id: string, config?: FmsAdminAccountConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _timeouts;
    get timeouts(): FmsAdminAccountTimeoutsOutputReference;
    putTimeouts(value: FmsAdminAccountTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FmsAdminAccountTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
