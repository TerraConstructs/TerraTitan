/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsoadminPermissionSetInlinePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set_inline_policy#id SsoadminPermissionSetInlinePolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set_inline_policy#inline_policy SsoadminPermissionSetInlinePolicy#inline_policy}
    */
    readonly inlinePolicy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set_inline_policy#instance_arn SsoadminPermissionSetInlinePolicy#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set_inline_policy#permission_set_arn SsoadminPermissionSetInlinePolicy#permission_set_arn}
    */
    readonly permissionSetArn: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set_inline_policy#timeouts SsoadminPermissionSetInlinePolicy#timeouts}
    */
    readonly timeouts?: SsoadminPermissionSetInlinePolicyTimeouts;
}
export interface SsoadminPermissionSetInlinePolicyTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set_inline_policy#create SsoadminPermissionSetInlinePolicy#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set_inline_policy#delete SsoadminPermissionSetInlinePolicy#delete}
    */
    readonly delete?: string;
}
export declare function ssoadminPermissionSetInlinePolicyTimeoutsToTerraform(struct?: SsoadminPermissionSetInlinePolicyTimeouts | cdktf.IResolvable): any;
export declare function ssoadminPermissionSetInlinePolicyTimeoutsToHclTerraform(struct?: SsoadminPermissionSetInlinePolicyTimeouts | cdktf.IResolvable): any;
export declare class SsoadminPermissionSetInlinePolicyTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsoadminPermissionSetInlinePolicyTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SsoadminPermissionSetInlinePolicyTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set_inline_policy aws_ssoadmin_permission_set_inline_policy}
*/
export declare class SsoadminPermissionSetInlinePolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssoadmin_permission_set_inline_policy";
    /**
    * Generates CDKTF code for importing a SsoadminPermissionSetInlinePolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsoadminPermissionSetInlinePolicy to import
    * @param importFromId The id of the existing SsoadminPermissionSetInlinePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set_inline_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsoadminPermissionSetInlinePolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permission_set_inline_policy aws_ssoadmin_permission_set_inline_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminPermissionSetInlinePolicyConfig
    */
    constructor(scope: Construct, id: string, config: SsoadminPermissionSetInlinePolicyConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _inlinePolicy?;
    get inlinePolicy(): string;
    set inlinePolicy(value: string);
    get inlinePolicyInput(): string | undefined;
    private _instanceArn?;
    get instanceArn(): string;
    set instanceArn(value: string);
    get instanceArnInput(): string | undefined;
    private _permissionSetArn?;
    get permissionSetArn(): string;
    set permissionSetArn(value: string);
    get permissionSetArnInput(): string | undefined;
    private _timeouts;
    get timeouts(): SsoadminPermissionSetInlinePolicyTimeoutsOutputReference;
    putTimeouts(value: SsoadminPermissionSetInlinePolicyTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SsoadminPermissionSetInlinePolicyTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
