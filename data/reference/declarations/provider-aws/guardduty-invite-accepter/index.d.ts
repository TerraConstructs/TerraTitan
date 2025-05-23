/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyInviteAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_invite_accepter#detector_id GuarddutyInviteAccepter#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_invite_accepter#id GuarddutyInviteAccepter#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_invite_accepter#master_account_id GuarddutyInviteAccepter#master_account_id}
    */
    readonly masterAccountId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_invite_accepter#timeouts GuarddutyInviteAccepter#timeouts}
    */
    readonly timeouts?: GuarddutyInviteAccepterTimeouts;
}
export interface GuarddutyInviteAccepterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_invite_accepter#create GuarddutyInviteAccepter#create}
    */
    readonly create?: string;
}
export declare function guarddutyInviteAccepterTimeoutsToTerraform(struct?: GuarddutyInviteAccepterTimeouts | cdktf.IResolvable): any;
export declare function guarddutyInviteAccepterTimeoutsToHclTerraform(struct?: GuarddutyInviteAccepterTimeouts | cdktf.IResolvable): any;
export declare class GuarddutyInviteAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyInviteAccepterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: GuarddutyInviteAccepterTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_invite_accepter aws_guardduty_invite_accepter}
*/
export declare class GuarddutyInviteAccepter extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_guardduty_invite_accepter";
    /**
    * Generates CDKTF code for importing a GuarddutyInviteAccepter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GuarddutyInviteAccepter to import
    * @param importFromId The id of the existing GuarddutyInviteAccepter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_invite_accepter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GuarddutyInviteAccepter to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_invite_accepter aws_guardduty_invite_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyInviteAccepterConfig
    */
    constructor(scope: Construct, id: string, config: GuarddutyInviteAccepterConfig);
    private _detectorId?;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _masterAccountId?;
    get masterAccountId(): string;
    set masterAccountId(value: string);
    get masterAccountIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): GuarddutyInviteAccepterTimeoutsOutputReference;
    putTimeouts(value: GuarddutyInviteAccepterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | GuarddutyInviteAccepterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
