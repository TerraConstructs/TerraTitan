/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsoadminPermissionsBoundaryAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permissions_boundary_attachment#id SsoadminPermissionsBoundaryAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permissions_boundary_attachment#instance_arn SsoadminPermissionsBoundaryAttachment#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permissions_boundary_attachment#permission_set_arn SsoadminPermissionsBoundaryAttachment#permission_set_arn}
    */
    readonly permissionSetArn: string;
    /**
    * permissions_boundary block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permissions_boundary_attachment#permissions_boundary SsoadminPermissionsBoundaryAttachment#permissions_boundary}
    */
    readonly permissionsBoundary: SsoadminPermissionsBoundaryAttachmentPermissionsBoundary;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permissions_boundary_attachment#timeouts SsoadminPermissionsBoundaryAttachment#timeouts}
    */
    readonly timeouts?: SsoadminPermissionsBoundaryAttachmentTimeouts;
}
export interface SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permissions_boundary_attachment#name SsoadminPermissionsBoundaryAttachment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permissions_boundary_attachment#path SsoadminPermissionsBoundaryAttachment#path}
    */
    readonly path?: string;
}
export declare function ssoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceToTerraform(struct?: SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference | SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference): any;
export declare function ssoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceToHclTerraform(struct?: SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference | SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference): any;
export declare class SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference | undefined;
    set internalValue(value: SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
}
export interface SsoadminPermissionsBoundaryAttachmentPermissionsBoundary {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permissions_boundary_attachment#managed_policy_arn SsoadminPermissionsBoundaryAttachment#managed_policy_arn}
    */
    readonly managedPolicyArn?: string;
    /**
    * customer_managed_policy_reference block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permissions_boundary_attachment#customer_managed_policy_reference SsoadminPermissionsBoundaryAttachment#customer_managed_policy_reference}
    */
    readonly customerManagedPolicyReference?: SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference;
}
export declare function ssoadminPermissionsBoundaryAttachmentPermissionsBoundaryToTerraform(struct?: SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference | SsoadminPermissionsBoundaryAttachmentPermissionsBoundary): any;
export declare function ssoadminPermissionsBoundaryAttachmentPermissionsBoundaryToHclTerraform(struct?: SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference | SsoadminPermissionsBoundaryAttachmentPermissionsBoundary): any;
export declare class SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsoadminPermissionsBoundaryAttachmentPermissionsBoundary | undefined;
    set internalValue(value: SsoadminPermissionsBoundaryAttachmentPermissionsBoundary | undefined);
    private _managedPolicyArn?;
    get managedPolicyArn(): string;
    set managedPolicyArn(value: string);
    resetManagedPolicyArn(): void;
    get managedPolicyArnInput(): string | undefined;
    private _customerManagedPolicyReference;
    get customerManagedPolicyReference(): SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference;
    putCustomerManagedPolicyReference(value: SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference): void;
    resetCustomerManagedPolicyReference(): void;
    get customerManagedPolicyReferenceInput(): SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference | undefined;
}
export interface SsoadminPermissionsBoundaryAttachmentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permissions_boundary_attachment#create SsoadminPermissionsBoundaryAttachment#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permissions_boundary_attachment#delete SsoadminPermissionsBoundaryAttachment#delete}
    */
    readonly delete?: string;
}
export declare function ssoadminPermissionsBoundaryAttachmentTimeoutsToTerraform(struct?: SsoadminPermissionsBoundaryAttachmentTimeouts | cdktf.IResolvable): any;
export declare function ssoadminPermissionsBoundaryAttachmentTimeoutsToHclTerraform(struct?: SsoadminPermissionsBoundaryAttachmentTimeouts | cdktf.IResolvable): any;
export declare class SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsoadminPermissionsBoundaryAttachmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SsoadminPermissionsBoundaryAttachmentTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permissions_boundary_attachment aws_ssoadmin_permissions_boundary_attachment}
*/
export declare class SsoadminPermissionsBoundaryAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssoadmin_permissions_boundary_attachment";
    /**
    * Generates CDKTF code for importing a SsoadminPermissionsBoundaryAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsoadminPermissionsBoundaryAttachment to import
    * @param importFromId The id of the existing SsoadminPermissionsBoundaryAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permissions_boundary_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsoadminPermissionsBoundaryAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_permissions_boundary_attachment aws_ssoadmin_permissions_boundary_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminPermissionsBoundaryAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: SsoadminPermissionsBoundaryAttachmentConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceArn?;
    get instanceArn(): string;
    set instanceArn(value: string);
    get instanceArnInput(): string | undefined;
    private _permissionSetArn?;
    get permissionSetArn(): string;
    set permissionSetArn(value: string);
    get permissionSetArnInput(): string | undefined;
    private _permissionsBoundary;
    get permissionsBoundary(): SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference;
    putPermissionsBoundary(value: SsoadminPermissionsBoundaryAttachmentPermissionsBoundary): void;
    get permissionsBoundaryInput(): SsoadminPermissionsBoundaryAttachmentPermissionsBoundary | undefined;
    private _timeouts;
    get timeouts(): SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference;
    putTimeouts(value: SsoadminPermissionsBoundaryAttachmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SsoadminPermissionsBoundaryAttachmentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
