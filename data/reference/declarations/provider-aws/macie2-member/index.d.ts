/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Macie2MemberConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_member#account_id Macie2Member#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_member#email Macie2Member#email}
    */
    readonly email: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_member#id Macie2Member#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_member#invitation_disable_email_notification Macie2Member#invitation_disable_email_notification}
    */
    readonly invitationDisableEmailNotification?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_member#invitation_message Macie2Member#invitation_message}
    */
    readonly invitationMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_member#invite Macie2Member#invite}
    */
    readonly invite?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_member#status Macie2Member#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_member#tags Macie2Member#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_member#tags_all Macie2Member#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_member#timeouts Macie2Member#timeouts}
    */
    readonly timeouts?: Macie2MemberTimeouts;
}
export interface Macie2MemberTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_member#create Macie2Member#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_member#update Macie2Member#update}
    */
    readonly update?: string;
}
export declare function macie2MemberTimeoutsToTerraform(struct?: Macie2MemberTimeouts | cdktf.IResolvable): any;
export declare function macie2MemberTimeoutsToHclTerraform(struct?: Macie2MemberTimeouts | cdktf.IResolvable): any;
export declare class Macie2MemberTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2MemberTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Macie2MemberTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_member aws_macie2_member}
*/
export declare class Macie2Member extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_macie2_member";
    /**
    * Generates CDKTF code for importing a Macie2Member resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Macie2Member to import
    * @param importFromId The id of the existing Macie2Member that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_member#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Macie2Member to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_member aws_macie2_member} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2MemberConfig
    */
    constructor(scope: Construct, id: string, config: Macie2MemberConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string | undefined;
    get administratorAccountId(): string;
    get arn(): string;
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _invitationDisableEmailNotification?;
    get invitationDisableEmailNotification(): boolean | cdktf.IResolvable;
    set invitationDisableEmailNotification(value: boolean | cdktf.IResolvable);
    resetInvitationDisableEmailNotification(): void;
    get invitationDisableEmailNotificationInput(): boolean | cdktf.IResolvable | undefined;
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
    get invitedAt(): string;
    get masterAccountId(): string;
    get relationshipStatus(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    get updatedAt(): string;
    private _timeouts;
    get timeouts(): Macie2MemberTimeoutsOutputReference;
    putTimeouts(value: Macie2MemberTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Macie2MemberTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
