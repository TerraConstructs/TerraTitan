/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyMemberConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_member#account_id GuarddutyMember#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_member#detector_id GuarddutyMember#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_member#disable_email_notification GuarddutyMember#disable_email_notification}
    */
    readonly disableEmailNotification?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_member#email GuarddutyMember#email}
    */
    readonly email: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_member#id GuarddutyMember#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_member#invitation_message GuarddutyMember#invitation_message}
    */
    readonly invitationMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_member#invite GuarddutyMember#invite}
    */
    readonly invite?: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_member#timeouts GuarddutyMember#timeouts}
    */
    readonly timeouts?: GuarddutyMemberTimeouts;
}
export interface GuarddutyMemberTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_member#create GuarddutyMember#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_member#update GuarddutyMember#update}
    */
    readonly update?: string;
}
export declare function guarddutyMemberTimeoutsToTerraform(struct?: GuarddutyMemberTimeouts | cdktf.IResolvable): any;
export declare function guarddutyMemberTimeoutsToHclTerraform(struct?: GuarddutyMemberTimeouts | cdktf.IResolvable): any;
export declare class GuarddutyMemberTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyMemberTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: GuarddutyMemberTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_member aws_guardduty_member}
*/
export declare class GuarddutyMember extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_guardduty_member";
    /**
    * Generates CDKTF code for importing a GuarddutyMember resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GuarddutyMember to import
    * @param importFromId The id of the existing GuarddutyMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_member#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GuarddutyMember to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_member aws_guardduty_member} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyMemberConfig
    */
    constructor(scope: Construct, id: string, config: GuarddutyMemberConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string | undefined;
    private _detectorId?;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string | undefined;
    private _disableEmailNotification?;
    get disableEmailNotification(): boolean | cdktf.IResolvable;
    set disableEmailNotification(value: boolean | cdktf.IResolvable);
    resetDisableEmailNotification(): void;
    get disableEmailNotificationInput(): boolean | cdktf.IResolvable | undefined;
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _invitationMessage?;
    get invitationMessage(): string;
    set invitationMessage(value: string);
    resetInvitationMessage(): void;
    get invitationMessageInput(): string | undefined;
    private _invite?;
    get invite(): boolean | cdktf.IResolvable;
    set invite(value: boolean | cdktf.IResolvable);
    resetInvite(): void;
    get inviteInput(): boolean | cdktf.IResolvable | undefined;
    get relationshipStatus(): string;
    private _timeouts;
    get timeouts(): GuarddutyMemberTimeoutsOutputReference;
    putTimeouts(value: GuarddutyMemberTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | GuarddutyMemberTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
