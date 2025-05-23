/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Macie2InvitationAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_invitation_accepter#administrator_account_id Macie2InvitationAccepter#administrator_account_id}
    */
    readonly administratorAccountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_invitation_accepter#id Macie2InvitationAccepter#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_invitation_accepter#timeouts Macie2InvitationAccepter#timeouts}
    */
    readonly timeouts?: Macie2InvitationAccepterTimeouts;
}
export interface Macie2InvitationAccepterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_invitation_accepter#create Macie2InvitationAccepter#create}
    */
    readonly create?: string;
}
export declare function macie2InvitationAccepterTimeoutsToTerraform(struct?: Macie2InvitationAccepterTimeouts | cdktf.IResolvable): any;
export declare function macie2InvitationAccepterTimeoutsToHclTerraform(struct?: Macie2InvitationAccepterTimeouts | cdktf.IResolvable): any;
export declare class Macie2InvitationAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2InvitationAccepterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Macie2InvitationAccepterTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_invitation_accepter aws_macie2_invitation_accepter}
*/
export declare class Macie2InvitationAccepter extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_macie2_invitation_accepter";
    /**
    * Generates CDKTF code for importing a Macie2InvitationAccepter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Macie2InvitationAccepter to import
    * @param importFromId The id of the existing Macie2InvitationAccepter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_invitation_accepter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Macie2InvitationAccepter to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_invitation_accepter aws_macie2_invitation_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2InvitationAccepterConfig
    */
    constructor(scope: Construct, id: string, config: Macie2InvitationAccepterConfig);
    private _administratorAccountId?;
    get administratorAccountId(): string;
    set administratorAccountId(value: string);
    get administratorAccountIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get invitationId(): string;
    private _timeouts;
    get timeouts(): Macie2InvitationAccepterTimeoutsOutputReference;
    putTimeouts(value: Macie2InvitationAccepterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Macie2InvitationAccepterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
