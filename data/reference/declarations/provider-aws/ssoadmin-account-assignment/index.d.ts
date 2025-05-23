/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsoadminAccountAssignmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_account_assignment#id SsoadminAccountAssignment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_account_assignment#instance_arn SsoadminAccountAssignment#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_account_assignment#permission_set_arn SsoadminAccountAssignment#permission_set_arn}
    */
    readonly permissionSetArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_account_assignment#principal_id SsoadminAccountAssignment#principal_id}
    */
    readonly principalId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_account_assignment#principal_type SsoadminAccountAssignment#principal_type}
    */
    readonly principalType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_account_assignment#target_id SsoadminAccountAssignment#target_id}
    */
    readonly targetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_account_assignment#target_type SsoadminAccountAssignment#target_type}
    */
    readonly targetType?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_account_assignment#timeouts SsoadminAccountAssignment#timeouts}
    */
    readonly timeouts?: SsoadminAccountAssignmentTimeouts;
}
export interface SsoadminAccountAssignmentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_account_assignment#create SsoadminAccountAssignment#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_account_assignment#delete SsoadminAccountAssignment#delete}
    */
    readonly delete?: string;
}
export declare function ssoadminAccountAssignmentTimeoutsToTerraform(struct?: SsoadminAccountAssignmentTimeouts | cdktf.IResolvable): any;
export declare function ssoadminAccountAssignmentTimeoutsToHclTerraform(struct?: SsoadminAccountAssignmentTimeouts | cdktf.IResolvable): any;
export declare class SsoadminAccountAssignmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsoadminAccountAssignmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SsoadminAccountAssignmentTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_account_assignment aws_ssoadmin_account_assignment}
*/
export declare class SsoadminAccountAssignment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssoadmin_account_assignment";
    /**
    * Generates CDKTF code for importing a SsoadminAccountAssignment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsoadminAccountAssignment to import
    * @param importFromId The id of the existing SsoadminAccountAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_account_assignment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsoadminAccountAssignment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_account_assignment aws_ssoadmin_account_assignment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminAccountAssignmentConfig
    */
    constructor(scope: Construct, id: string, config: SsoadminAccountAssignmentConfig);
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
    private _principalId?;
    get principalId(): string;
    set principalId(value: string);
    get principalIdInput(): string | undefined;
    private _principalType?;
    get principalType(): string;
    set principalType(value: string);
    get principalTypeInput(): string | undefined;
    private _targetId?;
    get targetId(): string;
    set targetId(value: string);
    get targetIdInput(): string | undefined;
    private _targetType?;
    get targetType(): string;
    set targetType(value: string);
    resetTargetType(): void;
    get targetTypeInput(): string | undefined;
    private _timeouts;
    get timeouts(): SsoadminAccountAssignmentTimeoutsOutputReference;
    putTimeouts(value: SsoadminAccountAssignmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SsoadminAccountAssignmentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
