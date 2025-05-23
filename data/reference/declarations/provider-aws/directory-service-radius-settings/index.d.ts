/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DirectoryServiceRadiusSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_radius_settings#authentication_protocol DirectoryServiceRadiusSettings#authentication_protocol}
    */
    readonly authenticationProtocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_radius_settings#directory_id DirectoryServiceRadiusSettings#directory_id}
    */
    readonly directoryId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_radius_settings#display_label DirectoryServiceRadiusSettings#display_label}
    */
    readonly displayLabel: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_radius_settings#id DirectoryServiceRadiusSettings#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_radius_settings#radius_port DirectoryServiceRadiusSettings#radius_port}
    */
    readonly radiusPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_radius_settings#radius_retries DirectoryServiceRadiusSettings#radius_retries}
    */
    readonly radiusRetries: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_radius_settings#radius_servers DirectoryServiceRadiusSettings#radius_servers}
    */
    readonly radiusServers: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_radius_settings#radius_timeout DirectoryServiceRadiusSettings#radius_timeout}
    */
    readonly radiusTimeout: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_radius_settings#shared_secret DirectoryServiceRadiusSettings#shared_secret}
    */
    readonly sharedSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_radius_settings#use_same_username DirectoryServiceRadiusSettings#use_same_username}
    */
    readonly useSameUsername?: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_radius_settings#timeouts DirectoryServiceRadiusSettings#timeouts}
    */
    readonly timeouts?: DirectoryServiceRadiusSettingsTimeouts;
}
export interface DirectoryServiceRadiusSettingsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_radius_settings#create DirectoryServiceRadiusSettings#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_radius_settings#update DirectoryServiceRadiusSettings#update}
    */
    readonly update?: string;
}
export declare function directoryServiceRadiusSettingsTimeoutsToTerraform(struct?: DirectoryServiceRadiusSettingsTimeouts | cdktf.IResolvable): any;
export declare function directoryServiceRadiusSettingsTimeoutsToHclTerraform(struct?: DirectoryServiceRadiusSettingsTimeouts | cdktf.IResolvable): any;
export declare class DirectoryServiceRadiusSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DirectoryServiceRadiusSettingsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DirectoryServiceRadiusSettingsTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_radius_settings aws_directory_service_radius_settings}
*/
export declare class DirectoryServiceRadiusSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_directory_service_radius_settings";
    /**
    * Generates CDKTF code for importing a DirectoryServiceRadiusSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DirectoryServiceRadiusSettings to import
    * @param importFromId The id of the existing DirectoryServiceRadiusSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_radius_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DirectoryServiceRadiusSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/directory_service_radius_settings aws_directory_service_radius_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DirectoryServiceRadiusSettingsConfig
    */
    constructor(scope: Construct, id: string, config: DirectoryServiceRadiusSettingsConfig);
    private _authenticationProtocol?;
    get authenticationProtocol(): string;
    set authenticationProtocol(value: string);
    get authenticationProtocolInput(): string | undefined;
    private _directoryId?;
    get directoryId(): string;
    set directoryId(value: string);
    get directoryIdInput(): string | undefined;
    private _displayLabel?;
    get displayLabel(): string;
    set displayLabel(value: string);
    get displayLabelInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _radiusPort?;
    get radiusPort(): number;
    set radiusPort(value: number);
    get radiusPortInput(): number | undefined;
    private _radiusRetries?;
    get radiusRetries(): number;
    set radiusRetries(value: number);
    get radiusRetriesInput(): number | undefined;
    private _radiusServers?;
    get radiusServers(): string[];
    set radiusServers(value: string[]);
    get radiusServersInput(): string[] | undefined;
    private _radiusTimeout?;
    get radiusTimeout(): number;
    set radiusTimeout(value: number);
    get radiusTimeoutInput(): number | undefined;
    private _sharedSecret?;
    get sharedSecret(): string;
    set sharedSecret(value: string);
    get sharedSecretInput(): string | undefined;
    private _useSameUsername?;
    get useSameUsername(): boolean | cdktf.IResolvable;
    set useSameUsername(value: boolean | cdktf.IResolvable);
    resetUseSameUsername(): void;
    get useSameUsernameInput(): boolean | cdktf.IResolvable | undefined;
    private _timeouts;
    get timeouts(): DirectoryServiceRadiusSettingsTimeoutsOutputReference;
    putTimeouts(value: DirectoryServiceRadiusSettingsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DirectoryServiceRadiusSettingsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
