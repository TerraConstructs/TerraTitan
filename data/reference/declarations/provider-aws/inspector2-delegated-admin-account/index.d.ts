/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Inspector2DelegatedAdminAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_delegated_admin_account#account_id Inspector2DelegatedAdminAccount#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_delegated_admin_account#id Inspector2DelegatedAdminAccount#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_delegated_admin_account#timeouts Inspector2DelegatedAdminAccount#timeouts}
    */
    readonly timeouts?: Inspector2DelegatedAdminAccountTimeouts;
}
export interface Inspector2DelegatedAdminAccountTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_delegated_admin_account#create Inspector2DelegatedAdminAccount#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_delegated_admin_account#delete Inspector2DelegatedAdminAccount#delete}
    */
    readonly delete?: string;
}
export declare function inspector2DelegatedAdminAccountTimeoutsToTerraform(struct?: Inspector2DelegatedAdminAccountTimeouts | cdktf.IResolvable): any;
export declare function inspector2DelegatedAdminAccountTimeoutsToHclTerraform(struct?: Inspector2DelegatedAdminAccountTimeouts | cdktf.IResolvable): any;
export declare class Inspector2DelegatedAdminAccountTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Inspector2DelegatedAdminAccountTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2DelegatedAdminAccountTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_delegated_admin_account aws_inspector2_delegated_admin_account}
*/
export declare class Inspector2DelegatedAdminAccount extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_inspector2_delegated_admin_account";
    /**
    * Generates CDKTF code for importing a Inspector2DelegatedAdminAccount resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Inspector2DelegatedAdminAccount to import
    * @param importFromId The id of the existing Inspector2DelegatedAdminAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_delegated_admin_account#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Inspector2DelegatedAdminAccount to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_delegated_admin_account aws_inspector2_delegated_admin_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Inspector2DelegatedAdminAccountConfig
    */
    constructor(scope: Construct, id: string, config: Inspector2DelegatedAdminAccountConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get relationshipStatus(): string;
    private _timeouts;
    get timeouts(): Inspector2DelegatedAdminAccountTimeoutsOutputReference;
    putTimeouts(value: Inspector2DelegatedAdminAccountTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Inspector2DelegatedAdminAccountTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
