/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsoadminManagedPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_managed_policy_attachment#id SsoadminManagedPolicyAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_managed_policy_attachment#instance_arn SsoadminManagedPolicyAttachment#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_managed_policy_attachment#managed_policy_arn SsoadminManagedPolicyAttachment#managed_policy_arn}
    */
    readonly managedPolicyArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_managed_policy_attachment#permission_set_arn SsoadminManagedPolicyAttachment#permission_set_arn}
    */
    readonly permissionSetArn: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_managed_policy_attachment#timeouts SsoadminManagedPolicyAttachment#timeouts}
    */
    readonly timeouts?: SsoadminManagedPolicyAttachmentTimeouts;
}
export interface SsoadminManagedPolicyAttachmentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_managed_policy_attachment#create SsoadminManagedPolicyAttachment#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_managed_policy_attachment#delete SsoadminManagedPolicyAttachment#delete}
    */
    readonly delete?: string;
}
export declare function ssoadminManagedPolicyAttachmentTimeoutsToTerraform(struct?: SsoadminManagedPolicyAttachmentTimeouts | cdktf.IResolvable): any;
export declare function ssoadminManagedPolicyAttachmentTimeoutsToHclTerraform(struct?: SsoadminManagedPolicyAttachmentTimeouts | cdktf.IResolvable): any;
export declare class SsoadminManagedPolicyAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsoadminManagedPolicyAttachmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SsoadminManagedPolicyAttachmentTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_managed_policy_attachment aws_ssoadmin_managed_policy_attachment}
*/
export declare class SsoadminManagedPolicyAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssoadmin_managed_policy_attachment";
    /**
    * Generates CDKTF code for importing a SsoadminManagedPolicyAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsoadminManagedPolicyAttachment to import
    * @param importFromId The id of the existing SsoadminManagedPolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_managed_policy_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsoadminManagedPolicyAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_managed_policy_attachment aws_ssoadmin_managed_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminManagedPolicyAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: SsoadminManagedPolicyAttachmentConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceArn?;
    get instanceArn(): string;
    set instanceArn(value: string);
    get instanceArnInput(): string | undefined;
    private _managedPolicyArn?;
    get managedPolicyArn(): string;
    set managedPolicyArn(value: string);
    get managedPolicyArnInput(): string | undefined;
    get managedPolicyName(): string;
    private _permissionSetArn?;
    get permissionSetArn(): string;
    set permissionSetArn(value: string);
    get permissionSetArnInput(): string | undefined;
    private _timeouts;
    get timeouts(): SsoadminManagedPolicyAttachmentTimeoutsOutputReference;
    putTimeouts(value: SsoadminManagedPolicyAttachmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SsoadminManagedPolicyAttachmentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
