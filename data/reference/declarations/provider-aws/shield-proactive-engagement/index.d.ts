/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ShieldProactiveEngagementConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_proactive_engagement#enabled ShieldProactiveEngagement#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * emergency_contact block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_proactive_engagement#emergency_contact ShieldProactiveEngagement#emergency_contact}
    */
    readonly emergencyContact?: ShieldProactiveEngagementEmergencyContact[] | cdktf.IResolvable;
}
export interface ShieldProactiveEngagementEmergencyContact {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_proactive_engagement#contact_notes ShieldProactiveEngagement#contact_notes}
    */
    readonly contactNotes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_proactive_engagement#email_address ShieldProactiveEngagement#email_address}
    */
    readonly emailAddress: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_proactive_engagement#phone_number ShieldProactiveEngagement#phone_number}
    */
    readonly phoneNumber?: string;
}
export declare function shieldProactiveEngagementEmergencyContactToTerraform(struct?: ShieldProactiveEngagementEmergencyContact | cdktf.IResolvable): any;
export declare function shieldProactiveEngagementEmergencyContactToHclTerraform(struct?: ShieldProactiveEngagementEmergencyContact | cdktf.IResolvable): any;
export declare class ShieldProactiveEngagementEmergencyContactOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ShieldProactiveEngagementEmergencyContact | cdktf.IResolvable | undefined;
    set internalValue(value: ShieldProactiveEngagementEmergencyContact | cdktf.IResolvable | undefined);
    private _contactNotes?;
    get contactNotes(): string;
    set contactNotes(value: string);
    resetContactNotes(): void;
    get contactNotesInput(): string | undefined;
    private _emailAddress?;
    get emailAddress(): string;
    set emailAddress(value: string);
    get emailAddressInput(): string | undefined;
    private _phoneNumber?;
    get phoneNumber(): string;
    set phoneNumber(value: string);
    resetPhoneNumber(): void;
    get phoneNumberInput(): string | undefined;
}
export declare class ShieldProactiveEngagementEmergencyContactList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ShieldProactiveEngagementEmergencyContact[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ShieldProactiveEngagementEmergencyContactOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_proactive_engagement aws_shield_proactive_engagement}
*/
export declare class ShieldProactiveEngagement extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_shield_proactive_engagement";
    /**
    * Generates CDKTF code for importing a ShieldProactiveEngagement resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ShieldProactiveEngagement to import
    * @param importFromId The id of the existing ShieldProactiveEngagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_proactive_engagement#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ShieldProactiveEngagement to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_proactive_engagement aws_shield_proactive_engagement} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ShieldProactiveEngagementConfig
    */
    constructor(scope: Construct, id: string, config: ShieldProactiveEngagementConfig);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    private _emergencyContact;
    get emergencyContact(): ShieldProactiveEngagementEmergencyContactList;
    putEmergencyContact(value: ShieldProactiveEngagementEmergencyContact[] | cdktf.IResolvable): void;
    resetEmergencyContact(): void;
    get emergencyContactInput(): cdktf.IResolvable | ShieldProactiveEngagementEmergencyContact[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
