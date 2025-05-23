/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StoragegatewayGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#activation_key StoragegatewayGateway#activation_key}
    */
    readonly activationKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#average_download_rate_limit_in_bits_per_sec StoragegatewayGateway#average_download_rate_limit_in_bits_per_sec}
    */
    readonly averageDownloadRateLimitInBitsPerSec?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#average_upload_rate_limit_in_bits_per_sec StoragegatewayGateway#average_upload_rate_limit_in_bits_per_sec}
    */
    readonly averageUploadRateLimitInBitsPerSec?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#cloudwatch_log_group_arn StoragegatewayGateway#cloudwatch_log_group_arn}
    */
    readonly cloudwatchLogGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#gateway_ip_address StoragegatewayGateway#gateway_ip_address}
    */
    readonly gatewayIpAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#gateway_name StoragegatewayGateway#gateway_name}
    */
    readonly gatewayName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#gateway_timezone StoragegatewayGateway#gateway_timezone}
    */
    readonly gatewayTimezone: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#gateway_type StoragegatewayGateway#gateway_type}
    */
    readonly gatewayType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#gateway_vpc_endpoint StoragegatewayGateway#gateway_vpc_endpoint}
    */
    readonly gatewayVpcEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#id StoragegatewayGateway#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#medium_changer_type StoragegatewayGateway#medium_changer_type}
    */
    readonly mediumChangerType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#smb_file_share_visibility StoragegatewayGateway#smb_file_share_visibility}
    */
    readonly smbFileShareVisibility?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#smb_guest_password StoragegatewayGateway#smb_guest_password}
    */
    readonly smbGuestPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#smb_security_strategy StoragegatewayGateway#smb_security_strategy}
    */
    readonly smbSecurityStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#tags StoragegatewayGateway#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#tags_all StoragegatewayGateway#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#tape_drive_type StoragegatewayGateway#tape_drive_type}
    */
    readonly tapeDriveType?: string;
    /**
    * maintenance_start_time block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#maintenance_start_time StoragegatewayGateway#maintenance_start_time}
    */
    readonly maintenanceStartTime?: StoragegatewayGatewayMaintenanceStartTime;
    /**
    * smb_active_directory_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#smb_active_directory_settings StoragegatewayGateway#smb_active_directory_settings}
    */
    readonly smbActiveDirectorySettings?: StoragegatewayGatewaySmbActiveDirectorySettings;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#timeouts StoragegatewayGateway#timeouts}
    */
    readonly timeouts?: StoragegatewayGatewayTimeouts;
}
export interface StoragegatewayGatewayGatewayNetworkInterface {
}
export declare function storagegatewayGatewayGatewayNetworkInterfaceToTerraform(struct?: StoragegatewayGatewayGatewayNetworkInterface): any;
export declare function storagegatewayGatewayGatewayNetworkInterfaceToHclTerraform(struct?: StoragegatewayGatewayGatewayNetworkInterface): any;
export declare class StoragegatewayGatewayGatewayNetworkInterfaceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): StoragegatewayGatewayGatewayNetworkInterface | undefined;
    set internalValue(value: StoragegatewayGatewayGatewayNetworkInterface | undefined);
    get ipv4Address(): string;
}
export declare class StoragegatewayGatewayGatewayNetworkInterfaceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): StoragegatewayGatewayGatewayNetworkInterfaceOutputReference;
}
export interface StoragegatewayGatewayMaintenanceStartTime {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#day_of_month StoragegatewayGateway#day_of_month}
    */
    readonly dayOfMonth?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#day_of_week StoragegatewayGateway#day_of_week}
    */
    readonly dayOfWeek?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#hour_of_day StoragegatewayGateway#hour_of_day}
    */
    readonly hourOfDay: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#minute_of_hour StoragegatewayGateway#minute_of_hour}
    */
    readonly minuteOfHour?: number;
}
export declare function storagegatewayGatewayMaintenanceStartTimeToTerraform(struct?: StoragegatewayGatewayMaintenanceStartTimeOutputReference | StoragegatewayGatewayMaintenanceStartTime): any;
export declare function storagegatewayGatewayMaintenanceStartTimeToHclTerraform(struct?: StoragegatewayGatewayMaintenanceStartTimeOutputReference | StoragegatewayGatewayMaintenanceStartTime): any;
export declare class StoragegatewayGatewayMaintenanceStartTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StoragegatewayGatewayMaintenanceStartTime | undefined;
    set internalValue(value: StoragegatewayGatewayMaintenanceStartTime | undefined);
    private _dayOfMonth?;
    get dayOfMonth(): string;
    set dayOfMonth(value: string);
    resetDayOfMonth(): void;
    get dayOfMonthInput(): string | undefined;
    private _dayOfWeek?;
    get dayOfWeek(): string;
    set dayOfWeek(value: string);
    resetDayOfWeek(): void;
    get dayOfWeekInput(): string | undefined;
    private _hourOfDay?;
    get hourOfDay(): number;
    set hourOfDay(value: number);
    get hourOfDayInput(): number | undefined;
    private _minuteOfHour?;
    get minuteOfHour(): number;
    set minuteOfHour(value: number);
    resetMinuteOfHour(): void;
    get minuteOfHourInput(): number | undefined;
}
export interface StoragegatewayGatewaySmbActiveDirectorySettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#domain_controllers StoragegatewayGateway#domain_controllers}
    */
    readonly domainControllers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#domain_name StoragegatewayGateway#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#organizational_unit StoragegatewayGateway#organizational_unit}
    */
    readonly organizationalUnit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#password StoragegatewayGateway#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#timeout_in_seconds StoragegatewayGateway#timeout_in_seconds}
    */
    readonly timeoutInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#username StoragegatewayGateway#username}
    */
    readonly username: string;
}
export declare function storagegatewayGatewaySmbActiveDirectorySettingsToTerraform(struct?: StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference | StoragegatewayGatewaySmbActiveDirectorySettings): any;
export declare function storagegatewayGatewaySmbActiveDirectorySettingsToHclTerraform(struct?: StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference | StoragegatewayGatewaySmbActiveDirectorySettings): any;
export declare class StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StoragegatewayGatewaySmbActiveDirectorySettings | undefined;
    set internalValue(value: StoragegatewayGatewaySmbActiveDirectorySettings | undefined);
    get activeDirectoryStatus(): string;
    private _domainControllers?;
    get domainControllers(): string[];
    set domainControllers(value: string[]);
    resetDomainControllers(): void;
    get domainControllersInput(): string[] | undefined;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _organizationalUnit?;
    get organizationalUnit(): string;
    set organizationalUnit(value: string);
    resetOrganizationalUnit(): void;
    get organizationalUnitInput(): string | undefined;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string | undefined;
    private _timeoutInSeconds?;
    get timeoutInSeconds(): number;
    set timeoutInSeconds(value: number);
    resetTimeoutInSeconds(): void;
    get timeoutInSecondsInput(): number | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string | undefined;
}
export interface StoragegatewayGatewayTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#create StoragegatewayGateway#create}
    */
    readonly create?: string;
}
export declare function storagegatewayGatewayTimeoutsToTerraform(struct?: StoragegatewayGatewayTimeouts | cdktf.IResolvable): any;
export declare function storagegatewayGatewayTimeoutsToHclTerraform(struct?: StoragegatewayGatewayTimeouts | cdktf.IResolvable): any;
export declare class StoragegatewayGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StoragegatewayGatewayTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: StoragegatewayGatewayTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway aws_storagegateway_gateway}
*/
export declare class StoragegatewayGateway extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_storagegateway_gateway";
    /**
    * Generates CDKTF code for importing a StoragegatewayGateway resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StoragegatewayGateway to import
    * @param importFromId The id of the existing StoragegatewayGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StoragegatewayGateway to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_gateway aws_storagegateway_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayGatewayConfig
    */
    constructor(scope: Construct, id: string, config: StoragegatewayGatewayConfig);
    private _activationKey?;
    get activationKey(): string;
    set activationKey(value: string);
    resetActivationKey(): void;
    get activationKeyInput(): string | undefined;
    get arn(): string;
    private _averageDownloadRateLimitInBitsPerSec?;
    get averageDownloadRateLimitInBitsPerSec(): number;
    set averageDownloadRateLimitInBitsPerSec(value: number);
    resetAverageDownloadRateLimitInBitsPerSec(): void;
    get averageDownloadRateLimitInBitsPerSecInput(): number | undefined;
    private _averageUploadRateLimitInBitsPerSec?;
    get averageUploadRateLimitInBitsPerSec(): number;
    set averageUploadRateLimitInBitsPerSec(value: number);
    resetAverageUploadRateLimitInBitsPerSec(): void;
    get averageUploadRateLimitInBitsPerSecInput(): number | undefined;
    private _cloudwatchLogGroupArn?;
    get cloudwatchLogGroupArn(): string;
    set cloudwatchLogGroupArn(value: string);
    resetCloudwatchLogGroupArn(): void;
    get cloudwatchLogGroupArnInput(): string | undefined;
    get ec2InstanceId(): string;
    get endpointType(): string;
    get gatewayId(): string;
    private _gatewayIpAddress?;
    get gatewayIpAddress(): string;
    set gatewayIpAddress(value: string);
    resetGatewayIpAddress(): void;
    get gatewayIpAddressInput(): string | undefined;
    private _gatewayName?;
    get gatewayName(): string;
    set gatewayName(value: string);
    get gatewayNameInput(): string | undefined;
    private _gatewayNetworkInterface;
    get gatewayNetworkInterface(): StoragegatewayGatewayGatewayNetworkInterfaceList;
    private _gatewayTimezone?;
    get gatewayTimezone(): string;
    set gatewayTimezone(value: string);
    get gatewayTimezoneInput(): string | undefined;
    private _gatewayType?;
    get gatewayType(): string;
    set gatewayType(value: string);
    resetGatewayType(): void;
    get gatewayTypeInput(): string | undefined;
    private _gatewayVpcEndpoint?;
    get gatewayVpcEndpoint(): string;
    set gatewayVpcEndpoint(value: string);
    resetGatewayVpcEndpoint(): void;
    get gatewayVpcEndpointInput(): string | undefined;
    get hostEnvironment(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _mediumChangerType?;
    get mediumChangerType(): string;
    set mediumChangerType(value: string);
    resetMediumChangerType(): void;
    get mediumChangerTypeInput(): string | undefined;
    private _smbFileShareVisibility?;
    get smbFileShareVisibility(): boolean | cdktf.IResolvable;
    set smbFileShareVisibility(value: boolean | cdktf.IResolvable);
    resetSmbFileShareVisibility(): void;
    get smbFileShareVisibilityInput(): boolean | cdktf.IResolvable | undefined;
    private _smbGuestPassword?;
    get smbGuestPassword(): string;
    set smbGuestPassword(value: string);
    resetSmbGuestPassword(): void;
    get smbGuestPasswordInput(): string | undefined;
    private _smbSecurityStrategy?;
    get smbSecurityStrategy(): string;
    set smbSecurityStrategy(value: string);
    resetSmbSecurityStrategy(): void;
    get smbSecurityStrategyInput(): string | undefined;
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
    private _tapeDriveType?;
    get tapeDriveType(): string;
    set tapeDriveType(value: string);
    resetTapeDriveType(): void;
    get tapeDriveTypeInput(): string | undefined;
    private _maintenanceStartTime;
    get maintenanceStartTime(): StoragegatewayGatewayMaintenanceStartTimeOutputReference;
    putMaintenanceStartTime(value: StoragegatewayGatewayMaintenanceStartTime): void;
    resetMaintenanceStartTime(): void;
    get maintenanceStartTimeInput(): StoragegatewayGatewayMaintenanceStartTime | undefined;
    private _smbActiveDirectorySettings;
    get smbActiveDirectorySettings(): StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference;
    putSmbActiveDirectorySettings(value: StoragegatewayGatewaySmbActiveDirectorySettings): void;
    resetSmbActiveDirectorySettings(): void;
    get smbActiveDirectorySettingsInput(): StoragegatewayGatewaySmbActiveDirectorySettings | undefined;
    private _timeouts;
    get timeouts(): StoragegatewayGatewayTimeoutsOutputReference;
    putTimeouts(value: StoragegatewayGatewayTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | StoragegatewayGatewayTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
