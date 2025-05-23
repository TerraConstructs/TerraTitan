/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsoadminCustomerManagedPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_customer_managed_policy_attachment#id SsoadminCustomerManagedPolicyAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_customer_managed_policy_attachment#instance_arn SsoadminCustomerManagedPolicyAttachment#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_customer_managed_policy_attachment#permission_set_arn SsoadminCustomerManagedPolicyAttachment#permission_set_arn}
    */
    readonly permissionSetArn: string;
    /**
    * customer_managed_policy_reference block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_customer_managed_policy_attachment#customer_managed_policy_reference SsoadminCustomerManagedPolicyAttachment#customer_managed_policy_reference}
    */
    readonly customerManagedPolicyReference: SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_customer_managed_policy_attachment#timeouts SsoadminCustomerManagedPolicyAttachment#timeouts}
    */
    readonly timeouts?: SsoadminCustomerManagedPolicyAttachmentTimeouts;
}
export interface SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_customer_managed_policy_attachment#name SsoadminCustomerManagedPolicyAttachment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_customer_managed_policy_attachment#path SsoadminCustomerManagedPolicyAttachment#path}
    */
    readonly path?: string;
}
export declare function ssoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceToTerraform(struct?: SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference | SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference): any;
export declare function ssoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceToHclTerraform(struct?: SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference | SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference): any;
export declare class SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference | undefined;
    set internalValue(value: SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference | undefined);
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
export interface SsoadminCustomerManagedPolicyAttachmentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_customer_managed_policy_attachment#create SsoadminCustomerManagedPolicyAttachment#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_customer_managed_policy_attachment#delete SsoadminCustomerManagedPolicyAttachment#delete}
    */
    readonly delete?: string;
}
export declare function ssoadminCustomerManagedPolicyAttachmentTimeoutsToTerraform(struct?: SsoadminCustomerManagedPolicyAttachmentTimeouts | cdktf.IResolvable): any;
export declare function ssoadminCustomerManagedPolicyAttachmentTimeoutsToHclTerraform(struct?: SsoadminCustomerManagedPolicyAttachmentTimeouts | cdktf.IResolvable): any;
export declare class SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsoadminCustomerManagedPolicyAttachmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SsoadminCustomerManagedPolicyAttachmentTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_customer_managed_policy_attachment aws_ssoadmin_customer_managed_policy_attachment}
*/
export declare class SsoadminCustomerManagedPolicyAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssoadmin_customer_managed_policy_attachment";
    /**
    * Generates CDKTF code for importing a SsoadminCustomerManagedPolicyAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsoadminCustomerManagedPolicyAttachment to import
    * @param importFromId The id of the existing SsoadminCustomerManagedPolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_customer_managed_policy_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsoadminCustomerManagedPolicyAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_customer_managed_policy_attachment aws_ssoadmin_customer_managed_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminCustomerManagedPolicyAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: SsoadminCustomerManagedPolicyAttachmentConfig);
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
    private _customerManagedPolicyReference;
    get customerManagedPolicyReference(): SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference;
    putCustomerManagedPolicyReference(value: SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference): void;
    get customerManagedPolicyReferenceInput(): SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference | undefined;
    private _timeouts;
    get timeouts(): SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference;
    putTimeouts(value: SsoadminCustomerManagedPolicyAttachmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SsoadminCustomerManagedPolicyAttachmentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
