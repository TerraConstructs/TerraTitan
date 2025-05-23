/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConnectInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance#auto_resolve_best_voices_enabled ConnectInstance#auto_resolve_best_voices_enabled}
    */
    readonly autoResolveBestVoicesEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance#contact_flow_logs_enabled ConnectInstance#contact_flow_logs_enabled}
    */
    readonly contactFlowLogsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance#contact_lens_enabled ConnectInstance#contact_lens_enabled}
    */
    readonly contactLensEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance#directory_id ConnectInstance#directory_id}
    */
    readonly directoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance#early_media_enabled ConnectInstance#early_media_enabled}
    */
    readonly earlyMediaEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance#id ConnectInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance#identity_management_type ConnectInstance#identity_management_type}
    */
    readonly identityManagementType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance#inbound_calls_enabled ConnectInstance#inbound_calls_enabled}
    */
    readonly inboundCallsEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance#instance_alias ConnectInstance#instance_alias}
    */
    readonly instanceAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance#multi_party_conference_enabled ConnectInstance#multi_party_conference_enabled}
    */
    readonly multiPartyConferenceEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance#outbound_calls_enabled ConnectInstance#outbound_calls_enabled}
    */
    readonly outboundCallsEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance#tags ConnectInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance#tags_all ConnectInstance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance#timeouts ConnectInstance#timeouts}
    */
    readonly timeouts?: ConnectInstanceTimeouts;
}
export interface ConnectInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance#create ConnectInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance#delete ConnectInstance#delete}
    */
    readonly delete?: string;
}
export declare function connectInstanceTimeoutsToTerraform(struct?: ConnectInstanceTimeouts | cdktf.IResolvable): any;
export declare function connectInstanceTimeoutsToHclTerraform(struct?: ConnectInstanceTimeouts | cdktf.IResolvable): any;
export declare class ConnectInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectInstanceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ConnectInstanceTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance aws_connect_instance}
*/
export declare class ConnectInstance extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_connect_instance";
    /**
    * Generates CDKTF code for importing a ConnectInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConnectInstance to import
    * @param importFromId The id of the existing ConnectInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConnectInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance aws_connect_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectInstanceConfig
    */
    constructor(scope: Construct, id: string, config: ConnectInstanceConfig);
    get arn(): string;
    private _autoResolveBestVoicesEnabled?;
    get autoResolveBestVoicesEnabled(): boolean | cdktf.IResolvable;
    set autoResolveBestVoicesEnabled(value: boolean | cdktf.IResolvable);
    resetAutoResolveBestVoicesEnabled(): void;
    get autoResolveBestVoicesEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _contactFlowLogsEnabled?;
    get contactFlowLogsEnabled(): boolean | cdktf.IResolvable;
    set contactFlowLogsEnabled(value: boolean | cdktf.IResolvable);
    resetContactFlowLogsEnabled(): void;
    get contactFlowLogsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _contactLensEnabled?;
    get contactLensEnabled(): boolean | cdktf.IResolvable;
    set contactLensEnabled(value: boolean | cdktf.IResolvable);
    resetContactLensEnabled(): void;
    get contactLensEnabledInput(): boolean | cdktf.IResolvable | undefined;
    get createdTime(): string;
    private _directoryId?;
    get directoryId(): string;
    set directoryId(value: string);
    resetDirectoryId(): void;
    get directoryIdInput(): string | undefined;
    private _earlyMediaEnabled?;
    get earlyMediaEnabled(): boolean | cdktf.IResolvable;
    set earlyMediaEnabled(value: boolean | cdktf.IResolvable);
    resetEarlyMediaEnabled(): void;
    get earlyMediaEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identityManagementType?;
    get identityManagementType(): string;
    set identityManagementType(value: string);
    get identityManagementTypeInput(): string | undefined;
    private _inboundCallsEnabled?;
    get inboundCallsEnabled(): boolean | cdktf.IResolvable;
    set inboundCallsEnabled(value: boolean | cdktf.IResolvable);
    get inboundCallsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _instanceAlias?;
    get instanceAlias(): string;
    set instanceAlias(value: string);
    resetInstanceAlias(): void;
    get instanceAliasInput(): string | undefined;
    private _multiPartyConferenceEnabled?;
    get multiPartyConferenceEnabled(): boolean | cdktf.IResolvable;
    set multiPartyConferenceEnabled(value: boolean | cdktf.IResolvable);
    resetMultiPartyConferenceEnabled(): void;
    get multiPartyConferenceEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _outboundCallsEnabled?;
    get outboundCallsEnabled(): boolean | cdktf.IResolvable;
    set outboundCallsEnabled(value: boolean | cdktf.IResolvable);
    get outboundCallsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    get serviceRole(): string;
    get status(): string;
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
    private _timeouts;
    get timeouts(): ConnectInstanceTimeoutsOutputReference;
    putTimeouts(value: ConnectInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ConnectInstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
