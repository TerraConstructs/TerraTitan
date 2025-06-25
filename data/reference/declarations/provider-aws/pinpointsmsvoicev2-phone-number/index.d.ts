/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Pinpointsmsvoicev2PhoneNumberConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_phone_number#deletion_protection_enabled Pinpointsmsvoicev2PhoneNumber#deletion_protection_enabled}
    */
    readonly deletionProtectionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_phone_number#iso_country_code Pinpointsmsvoicev2PhoneNumber#iso_country_code}
    */
    readonly isoCountryCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_phone_number#message_type Pinpointsmsvoicev2PhoneNumber#message_type}
    */
    readonly messageType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_phone_number#number_capabilities Pinpointsmsvoicev2PhoneNumber#number_capabilities}
    */
    readonly numberCapabilities: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_phone_number#number_type Pinpointsmsvoicev2PhoneNumber#number_type}
    */
    readonly numberType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_phone_number#opt_out_list_name Pinpointsmsvoicev2PhoneNumber#opt_out_list_name}
    */
    readonly optOutListName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_phone_number#registration_id Pinpointsmsvoicev2PhoneNumber#registration_id}
    */
    readonly registrationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_phone_number#self_managed_opt_outs_enabled Pinpointsmsvoicev2PhoneNumber#self_managed_opt_outs_enabled}
    */
    readonly selfManagedOptOutsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_phone_number#tags Pinpointsmsvoicev2PhoneNumber#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_arn Pinpointsmsvoicev2PhoneNumber#two_way_channel_arn}
    */
    readonly twoWayChannelArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_enabled Pinpointsmsvoicev2PhoneNumber#two_way_channel_enabled}
    */
    readonly twoWayChannelEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_role Pinpointsmsvoicev2PhoneNumber#two_way_channel_role}
    */
    readonly twoWayChannelRole?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_phone_number#timeouts Pinpointsmsvoicev2PhoneNumber#timeouts}
    */
    readonly timeouts?: Pinpointsmsvoicev2PhoneNumberTimeouts;
}
export interface Pinpointsmsvoicev2PhoneNumberTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_phone_number#create Pinpointsmsvoicev2PhoneNumber#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_phone_number#delete Pinpointsmsvoicev2PhoneNumber#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_phone_number#update Pinpointsmsvoicev2PhoneNumber#update}
    */
    readonly update?: string;
}
export declare function pinpointsmsvoicev2PhoneNumberTimeoutsToTerraform(struct?: Pinpointsmsvoicev2PhoneNumberTimeouts | cdktf.IResolvable): any;
export declare function pinpointsmsvoicev2PhoneNumberTimeoutsToHclTerraform(struct?: Pinpointsmsvoicev2PhoneNumberTimeouts | cdktf.IResolvable): any;
export declare class Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Pinpointsmsvoicev2PhoneNumberTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Pinpointsmsvoicev2PhoneNumberTimeouts | cdktf.IResolvable | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_phone_number aws_pinpointsmsvoicev2_phone_number}
*/
export declare class Pinpointsmsvoicev2PhoneNumber extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_pinpointsmsvoicev2_phone_number";
    /**
    * Generates CDKTF code for importing a Pinpointsmsvoicev2PhoneNumber resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Pinpointsmsvoicev2PhoneNumber to import
    * @param importFromId The id of the existing Pinpointsmsvoicev2PhoneNumber that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_phone_number#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Pinpointsmsvoicev2PhoneNumber to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_phone_number aws_pinpointsmsvoicev2_phone_number} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Pinpointsmsvoicev2PhoneNumberConfig
    */
    constructor(scope: Construct, id: string, config: Pinpointsmsvoicev2PhoneNumberConfig);
    get arn(): string;
    private _deletionProtectionEnabled?;
    get deletionProtectionEnabled(): boolean | cdktf.IResolvable;
    set deletionProtectionEnabled(value: boolean | cdktf.IResolvable);
    resetDeletionProtectionEnabled(): void;
    get deletionProtectionEnabledInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    private _isoCountryCode?;
    get isoCountryCode(): string;
    set isoCountryCode(value: string);
    get isoCountryCodeInput(): string | undefined;
    private _messageType?;
    get messageType(): string;
    set messageType(value: string);
    get messageTypeInput(): string | undefined;
    get monthlyLeasingPrice(): string;
    private _numberCapabilities?;
    get numberCapabilities(): string[];
    set numberCapabilities(value: string[]);
    get numberCapabilitiesInput(): string[] | undefined;
    private _numberType?;
    get numberType(): string;
    set numberType(value: string);
    get numberTypeInput(): string | undefined;
    private _optOutListName?;
    get optOutListName(): string;
    set optOutListName(value: string);
    resetOptOutListName(): void;
    get optOutListNameInput(): string | undefined;
    get phoneNumber(): string;
    private _registrationId?;
    get registrationId(): string;
    set registrationId(value: string);
    resetRegistrationId(): void;
    get registrationIdInput(): string | undefined;
    private _selfManagedOptOutsEnabled?;
    get selfManagedOptOutsEnabled(): boolean | cdktf.IResolvable;
    set selfManagedOptOutsEnabled(value: boolean | cdktf.IResolvable);
    resetSelfManagedOptOutsEnabled(): void;
    get selfManagedOptOutsEnabledInput(): boolean | cdktf.IResolvable | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _twoWayChannelArn?;
    get twoWayChannelArn(): string;
    set twoWayChannelArn(value: string);
    resetTwoWayChannelArn(): void;
    get twoWayChannelArnInput(): string | undefined;
    private _twoWayChannelEnabled?;
    get twoWayChannelEnabled(): boolean | cdktf.IResolvable;
    set twoWayChannelEnabled(value: boolean | cdktf.IResolvable);
    resetTwoWayChannelEnabled(): void;
    get twoWayChannelEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _twoWayChannelRole?;
    get twoWayChannelRole(): string;
    set twoWayChannelRole(value: string);
    resetTwoWayChannelRole(): void;
    get twoWayChannelRoleInput(): string | undefined;
    private _timeouts;
    get timeouts(): Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference;
    putTimeouts(value: Pinpointsmsvoicev2PhoneNumberTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Pinpointsmsvoicev2PhoneNumberTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
