/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpnConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}
    */
    readonly customerGatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#enable_acceleration VpnConnection#enable_acceleration}
    */
    readonly enableAcceleration?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#id VpnConnection#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#local_ipv4_network_cidr VpnConnection#local_ipv4_network_cidr}
    */
    readonly localIpv4NetworkCidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#local_ipv6_network_cidr VpnConnection#local_ipv6_network_cidr}
    */
    readonly localIpv6NetworkCidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#outside_ip_address_type VpnConnection#outside_ip_address_type}
    */
    readonly outsideIpAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#remote_ipv4_network_cidr VpnConnection#remote_ipv4_network_cidr}
    */
    readonly remoteIpv4NetworkCidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#remote_ipv6_network_cidr VpnConnection#remote_ipv6_network_cidr}
    */
    readonly remoteIpv6NetworkCidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#static_routes_only VpnConnection#static_routes_only}
    */
    readonly staticRoutesOnly?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tags VpnConnection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tags_all VpnConnection#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#transit_gateway_id VpnConnection#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#transport_transit_gateway_attachment_id VpnConnection#transport_transit_gateway_attachment_id}
    */
    readonly transportTransitGatewayAttachmentId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_dpd_timeout_action VpnConnection#tunnel1_dpd_timeout_action}
    */
    readonly tunnel1DpdTimeoutAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_dpd_timeout_seconds VpnConnection#tunnel1_dpd_timeout_seconds}
    */
    readonly tunnel1DpdTimeoutSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_enable_tunnel_lifecycle_control VpnConnection#tunnel1_enable_tunnel_lifecycle_control}
    */
    readonly tunnel1EnableTunnelLifecycleControl?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_ike_versions VpnConnection#tunnel1_ike_versions}
    */
    readonly tunnel1IkeVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_inside_cidr VpnConnection#tunnel1_inside_cidr}
    */
    readonly tunnel1InsideCidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_inside_ipv6_cidr VpnConnection#tunnel1_inside_ipv6_cidr}
    */
    readonly tunnel1InsideIpv6Cidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_phase1_dh_group_numbers VpnConnection#tunnel1_phase1_dh_group_numbers}
    */
    readonly tunnel1Phase1DhGroupNumbers?: number[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_phase1_encryption_algorithms VpnConnection#tunnel1_phase1_encryption_algorithms}
    */
    readonly tunnel1Phase1EncryptionAlgorithms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_phase1_integrity_algorithms VpnConnection#tunnel1_phase1_integrity_algorithms}
    */
    readonly tunnel1Phase1IntegrityAlgorithms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_phase1_lifetime_seconds VpnConnection#tunnel1_phase1_lifetime_seconds}
    */
    readonly tunnel1Phase1LifetimeSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_phase2_dh_group_numbers VpnConnection#tunnel1_phase2_dh_group_numbers}
    */
    readonly tunnel1Phase2DhGroupNumbers?: number[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_phase2_encryption_algorithms VpnConnection#tunnel1_phase2_encryption_algorithms}
    */
    readonly tunnel1Phase2EncryptionAlgorithms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_phase2_integrity_algorithms VpnConnection#tunnel1_phase2_integrity_algorithms}
    */
    readonly tunnel1Phase2IntegrityAlgorithms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_phase2_lifetime_seconds VpnConnection#tunnel1_phase2_lifetime_seconds}
    */
    readonly tunnel1Phase2LifetimeSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_preshared_key VpnConnection#tunnel1_preshared_key}
    */
    readonly tunnel1PresharedKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_rekey_fuzz_percentage VpnConnection#tunnel1_rekey_fuzz_percentage}
    */
    readonly tunnel1RekeyFuzzPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_rekey_margin_time_seconds VpnConnection#tunnel1_rekey_margin_time_seconds}
    */
    readonly tunnel1RekeyMarginTimeSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_replay_window_size VpnConnection#tunnel1_replay_window_size}
    */
    readonly tunnel1ReplayWindowSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_startup_action VpnConnection#tunnel1_startup_action}
    */
    readonly tunnel1StartupAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_dpd_timeout_action VpnConnection#tunnel2_dpd_timeout_action}
    */
    readonly tunnel2DpdTimeoutAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_dpd_timeout_seconds VpnConnection#tunnel2_dpd_timeout_seconds}
    */
    readonly tunnel2DpdTimeoutSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_enable_tunnel_lifecycle_control VpnConnection#tunnel2_enable_tunnel_lifecycle_control}
    */
    readonly tunnel2EnableTunnelLifecycleControl?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_ike_versions VpnConnection#tunnel2_ike_versions}
    */
    readonly tunnel2IkeVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_inside_cidr VpnConnection#tunnel2_inside_cidr}
    */
    readonly tunnel2InsideCidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_inside_ipv6_cidr VpnConnection#tunnel2_inside_ipv6_cidr}
    */
    readonly tunnel2InsideIpv6Cidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_phase1_dh_group_numbers VpnConnection#tunnel2_phase1_dh_group_numbers}
    */
    readonly tunnel2Phase1DhGroupNumbers?: number[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_phase1_encryption_algorithms VpnConnection#tunnel2_phase1_encryption_algorithms}
    */
    readonly tunnel2Phase1EncryptionAlgorithms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_phase1_integrity_algorithms VpnConnection#tunnel2_phase1_integrity_algorithms}
    */
    readonly tunnel2Phase1IntegrityAlgorithms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_phase1_lifetime_seconds VpnConnection#tunnel2_phase1_lifetime_seconds}
    */
    readonly tunnel2Phase1LifetimeSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_phase2_dh_group_numbers VpnConnection#tunnel2_phase2_dh_group_numbers}
    */
    readonly tunnel2Phase2DhGroupNumbers?: number[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_phase2_encryption_algorithms VpnConnection#tunnel2_phase2_encryption_algorithms}
    */
    readonly tunnel2Phase2EncryptionAlgorithms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_phase2_integrity_algorithms VpnConnection#tunnel2_phase2_integrity_algorithms}
    */
    readonly tunnel2Phase2IntegrityAlgorithms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_phase2_lifetime_seconds VpnConnection#tunnel2_phase2_lifetime_seconds}
    */
    readonly tunnel2Phase2LifetimeSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_preshared_key VpnConnection#tunnel2_preshared_key}
    */
    readonly tunnel2PresharedKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_rekey_fuzz_percentage VpnConnection#tunnel2_rekey_fuzz_percentage}
    */
    readonly tunnel2RekeyFuzzPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_rekey_margin_time_seconds VpnConnection#tunnel2_rekey_margin_time_seconds}
    */
    readonly tunnel2RekeyMarginTimeSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_replay_window_size VpnConnection#tunnel2_replay_window_size}
    */
    readonly tunnel2ReplayWindowSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_startup_action VpnConnection#tunnel2_startup_action}
    */
    readonly tunnel2StartupAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel_inside_ip_version VpnConnection#tunnel_inside_ip_version}
    */
    readonly tunnelInsideIpVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#type VpnConnection#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#vpn_gateway_id VpnConnection#vpn_gateway_id}
    */
    readonly vpnGatewayId?: string;
    /**
    * tunnel1_log_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel1_log_options VpnConnection#tunnel1_log_options}
    */
    readonly tunnel1LogOptions?: VpnConnectionTunnel1LogOptions;
    /**
    * tunnel2_log_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#tunnel2_log_options VpnConnection#tunnel2_log_options}
    */
    readonly tunnel2LogOptions?: VpnConnectionTunnel2LogOptions;
}
export interface VpnConnectionRoutes {
}
export declare function vpnConnectionRoutesToTerraform(struct?: VpnConnectionRoutes): any;
export declare function vpnConnectionRoutesToHclTerraform(struct?: VpnConnectionRoutes): any;
export declare class VpnConnectionRoutesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VpnConnectionRoutes | undefined;
    set internalValue(value: VpnConnectionRoutes | undefined);
    get destinationCidrBlock(): string;
    get source(): string;
    get state(): string;
}
export declare class VpnConnectionRoutesList extends cdktf.ComplexList {
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
    get(index: number): VpnConnectionRoutesOutputReference;
}
export interface VpnConnectionVgwTelemetry {
}
export declare function vpnConnectionVgwTelemetryToTerraform(struct?: VpnConnectionVgwTelemetry): any;
export declare function vpnConnectionVgwTelemetryToHclTerraform(struct?: VpnConnectionVgwTelemetry): any;
export declare class VpnConnectionVgwTelemetryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VpnConnectionVgwTelemetry | undefined;
    set internalValue(value: VpnConnectionVgwTelemetry | undefined);
    get acceptedRouteCount(): number;
    get certificateArn(): string;
    get lastStatusChange(): string;
    get outsideIpAddress(): string;
    get status(): string;
    get statusMessage(): string;
}
export declare class VpnConnectionVgwTelemetryList extends cdktf.ComplexList {
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
    get(index: number): VpnConnectionVgwTelemetryOutputReference;
}
export interface VpnConnectionTunnel1LogOptionsCloudwatchLogOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#log_enabled VpnConnection#log_enabled}
    */
    readonly logEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#log_group_arn VpnConnection#log_group_arn}
    */
    readonly logGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#log_output_format VpnConnection#log_output_format}
    */
    readonly logOutputFormat?: string;
}
export declare function vpnConnectionTunnel1LogOptionsCloudwatchLogOptionsToTerraform(struct?: VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference | VpnConnectionTunnel1LogOptionsCloudwatchLogOptions): any;
export declare function vpnConnectionTunnel1LogOptionsCloudwatchLogOptionsToHclTerraform(struct?: VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference | VpnConnectionTunnel1LogOptionsCloudwatchLogOptions): any;
export declare class VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpnConnectionTunnel1LogOptionsCloudwatchLogOptions | undefined;
    set internalValue(value: VpnConnectionTunnel1LogOptionsCloudwatchLogOptions | undefined);
    private _logEnabled?;
    get logEnabled(): boolean | cdktf.IResolvable;
    set logEnabled(value: boolean | cdktf.IResolvable);
    resetLogEnabled(): void;
    get logEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupArn?;
    get logGroupArn(): string;
    set logGroupArn(value: string);
    resetLogGroupArn(): void;
    get logGroupArnInput(): string | undefined;
    private _logOutputFormat?;
    get logOutputFormat(): string;
    set logOutputFormat(value: string);
    resetLogOutputFormat(): void;
    get logOutputFormatInput(): string | undefined;
}
export interface VpnConnectionTunnel1LogOptions {
    /**
    * cloudwatch_log_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#cloudwatch_log_options VpnConnection#cloudwatch_log_options}
    */
    readonly cloudwatchLogOptions?: VpnConnectionTunnel1LogOptionsCloudwatchLogOptions;
}
export declare function vpnConnectionTunnel1LogOptionsToTerraform(struct?: VpnConnectionTunnel1LogOptionsOutputReference | VpnConnectionTunnel1LogOptions): any;
export declare function vpnConnectionTunnel1LogOptionsToHclTerraform(struct?: VpnConnectionTunnel1LogOptionsOutputReference | VpnConnectionTunnel1LogOptions): any;
export declare class VpnConnectionTunnel1LogOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpnConnectionTunnel1LogOptions | undefined;
    set internalValue(value: VpnConnectionTunnel1LogOptions | undefined);
    private _cloudwatchLogOptions;
    get cloudwatchLogOptions(): VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference;
    putCloudwatchLogOptions(value: VpnConnectionTunnel1LogOptionsCloudwatchLogOptions): void;
    resetCloudwatchLogOptions(): void;
    get cloudwatchLogOptionsInput(): VpnConnectionTunnel1LogOptionsCloudwatchLogOptions | undefined;
}
export interface VpnConnectionTunnel2LogOptionsCloudwatchLogOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#log_enabled VpnConnection#log_enabled}
    */
    readonly logEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#log_group_arn VpnConnection#log_group_arn}
    */
    readonly logGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#log_output_format VpnConnection#log_output_format}
    */
    readonly logOutputFormat?: string;
}
export declare function vpnConnectionTunnel2LogOptionsCloudwatchLogOptionsToTerraform(struct?: VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference | VpnConnectionTunnel2LogOptionsCloudwatchLogOptions): any;
export declare function vpnConnectionTunnel2LogOptionsCloudwatchLogOptionsToHclTerraform(struct?: VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference | VpnConnectionTunnel2LogOptionsCloudwatchLogOptions): any;
export declare class VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpnConnectionTunnel2LogOptionsCloudwatchLogOptions | undefined;
    set internalValue(value: VpnConnectionTunnel2LogOptionsCloudwatchLogOptions | undefined);
    private _logEnabled?;
    get logEnabled(): boolean | cdktf.IResolvable;
    set logEnabled(value: boolean | cdktf.IResolvable);
    resetLogEnabled(): void;
    get logEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupArn?;
    get logGroupArn(): string;
    set logGroupArn(value: string);
    resetLogGroupArn(): void;
    get logGroupArnInput(): string | undefined;
    private _logOutputFormat?;
    get logOutputFormat(): string;
    set logOutputFormat(value: string);
    resetLogOutputFormat(): void;
    get logOutputFormatInput(): string | undefined;
}
export interface VpnConnectionTunnel2LogOptions {
    /**
    * cloudwatch_log_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#cloudwatch_log_options VpnConnection#cloudwatch_log_options}
    */
    readonly cloudwatchLogOptions?: VpnConnectionTunnel2LogOptionsCloudwatchLogOptions;
}
export declare function vpnConnectionTunnel2LogOptionsToTerraform(struct?: VpnConnectionTunnel2LogOptionsOutputReference | VpnConnectionTunnel2LogOptions): any;
export declare function vpnConnectionTunnel2LogOptionsToHclTerraform(struct?: VpnConnectionTunnel2LogOptionsOutputReference | VpnConnectionTunnel2LogOptions): any;
export declare class VpnConnectionTunnel2LogOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpnConnectionTunnel2LogOptions | undefined;
    set internalValue(value: VpnConnectionTunnel2LogOptions | undefined);
    private _cloudwatchLogOptions;
    get cloudwatchLogOptions(): VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference;
    putCloudwatchLogOptions(value: VpnConnectionTunnel2LogOptionsCloudwatchLogOptions): void;
    resetCloudwatchLogOptions(): void;
    get cloudwatchLogOptionsInput(): VpnConnectionTunnel2LogOptionsCloudwatchLogOptions | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection aws_vpn_connection}
*/
export declare class VpnConnection extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpn_connection";
    /**
    * Generates CDKTF code for importing a VpnConnection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpnConnection to import
    * @param importFromId The id of the existing VpnConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpnConnection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection aws_vpn_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpnConnectionConfig
    */
    constructor(scope: Construct, id: string, config: VpnConnectionConfig);
    get arn(): string;
    get coreNetworkArn(): string;
    get coreNetworkAttachmentArn(): string;
    get customerGatewayConfiguration(): string;
    private _customerGatewayId?;
    get customerGatewayId(): string;
    set customerGatewayId(value: string);
    get customerGatewayIdInput(): string | undefined;
    private _enableAcceleration?;
    get enableAcceleration(): boolean | cdktf.IResolvable;
    set enableAcceleration(value: boolean | cdktf.IResolvable);
    resetEnableAcceleration(): void;
    get enableAccelerationInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _localIpv4NetworkCidr?;
    get localIpv4NetworkCidr(): string;
    set localIpv4NetworkCidr(value: string);
    resetLocalIpv4NetworkCidr(): void;
    get localIpv4NetworkCidrInput(): string | undefined;
    private _localIpv6NetworkCidr?;
    get localIpv6NetworkCidr(): string;
    set localIpv6NetworkCidr(value: string);
    resetLocalIpv6NetworkCidr(): void;
    get localIpv6NetworkCidrInput(): string | undefined;
    private _outsideIpAddressType?;
    get outsideIpAddressType(): string;
    set outsideIpAddressType(value: string);
    resetOutsideIpAddressType(): void;
    get outsideIpAddressTypeInput(): string | undefined;
    private _remoteIpv4NetworkCidr?;
    get remoteIpv4NetworkCidr(): string;
    set remoteIpv4NetworkCidr(value: string);
    resetRemoteIpv4NetworkCidr(): void;
    get remoteIpv4NetworkCidrInput(): string | undefined;
    private _remoteIpv6NetworkCidr?;
    get remoteIpv6NetworkCidr(): string;
    set remoteIpv6NetworkCidr(value: string);
    resetRemoteIpv6NetworkCidr(): void;
    get remoteIpv6NetworkCidrInput(): string | undefined;
    private _routes;
    get routes(): VpnConnectionRoutesList;
    private _staticRoutesOnly?;
    get staticRoutesOnly(): boolean | cdktf.IResolvable;
    set staticRoutesOnly(value: boolean | cdktf.IResolvable);
    resetStaticRoutesOnly(): void;
    get staticRoutesOnlyInput(): boolean | cdktf.IResolvable | undefined;
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
    get transitGatewayAttachmentId(): string;
    private _transitGatewayId?;
    get transitGatewayId(): string;
    set transitGatewayId(value: string);
    resetTransitGatewayId(): void;
    get transitGatewayIdInput(): string | undefined;
    private _transportTransitGatewayAttachmentId?;
    get transportTransitGatewayAttachmentId(): string;
    set transportTransitGatewayAttachmentId(value: string);
    resetTransportTransitGatewayAttachmentId(): void;
    get transportTransitGatewayAttachmentIdInput(): string | undefined;
    get tunnel1Address(): string;
    get tunnel1BgpAsn(): string;
    get tunnel1BgpHoldtime(): number;
    get tunnel1CgwInsideAddress(): string;
    private _tunnel1DpdTimeoutAction?;
    get tunnel1DpdTimeoutAction(): string;
    set tunnel1DpdTimeoutAction(value: string);
    resetTunnel1DpdTimeoutAction(): void;
    get tunnel1DpdTimeoutActionInput(): string | undefined;
    private _tunnel1DpdTimeoutSeconds?;
    get tunnel1DpdTimeoutSeconds(): number;
    set tunnel1DpdTimeoutSeconds(value: number);
    resetTunnel1DpdTimeoutSeconds(): void;
    get tunnel1DpdTimeoutSecondsInput(): number | undefined;
    private _tunnel1EnableTunnelLifecycleControl?;
    get tunnel1EnableTunnelLifecycleControl(): boolean | cdktf.IResolvable;
    set tunnel1EnableTunnelLifecycleControl(value: boolean | cdktf.IResolvable);
    resetTunnel1EnableTunnelLifecycleControl(): void;
    get tunnel1EnableTunnelLifecycleControlInput(): boolean | cdktf.IResolvable | undefined;
    private _tunnel1IkeVersions?;
    get tunnel1IkeVersions(): string[];
    set tunnel1IkeVersions(value: string[]);
    resetTunnel1IkeVersions(): void;
    get tunnel1IkeVersionsInput(): string[] | undefined;
    private _tunnel1InsideCidr?;
    get tunnel1InsideCidr(): string;
    set tunnel1InsideCidr(value: string);
    resetTunnel1InsideCidr(): void;
    get tunnel1InsideCidrInput(): string | undefined;
    private _tunnel1InsideIpv6Cidr?;
    get tunnel1InsideIpv6Cidr(): string;
    set tunnel1InsideIpv6Cidr(value: string);
    resetTunnel1InsideIpv6Cidr(): void;
    get tunnel1InsideIpv6CidrInput(): string | undefined;
    private _tunnel1Phase1DhGroupNumbers?;
    get tunnel1Phase1DhGroupNumbers(): number[];
    set tunnel1Phase1DhGroupNumbers(value: number[]);
    resetTunnel1Phase1DhGroupNumbers(): void;
    get tunnel1Phase1DhGroupNumbersInput(): number[] | undefined;
    private _tunnel1Phase1EncryptionAlgorithms?;
    get tunnel1Phase1EncryptionAlgorithms(): string[];
    set tunnel1Phase1EncryptionAlgorithms(value: string[]);
    resetTunnel1Phase1EncryptionAlgorithms(): void;
    get tunnel1Phase1EncryptionAlgorithmsInput(): string[] | undefined;
    private _tunnel1Phase1IntegrityAlgorithms?;
    get tunnel1Phase1IntegrityAlgorithms(): string[];
    set tunnel1Phase1IntegrityAlgorithms(value: string[]);
    resetTunnel1Phase1IntegrityAlgorithms(): void;
    get tunnel1Phase1IntegrityAlgorithmsInput(): string[] | undefined;
    private _tunnel1Phase1LifetimeSeconds?;
    get tunnel1Phase1LifetimeSeconds(): number;
    set tunnel1Phase1LifetimeSeconds(value: number);
    resetTunnel1Phase1LifetimeSeconds(): void;
    get tunnel1Phase1LifetimeSecondsInput(): number | undefined;
    private _tunnel1Phase2DhGroupNumbers?;
    get tunnel1Phase2DhGroupNumbers(): number[];
    set tunnel1Phase2DhGroupNumbers(value: number[]);
    resetTunnel1Phase2DhGroupNumbers(): void;
    get tunnel1Phase2DhGroupNumbersInput(): number[] | undefined;
    private _tunnel1Phase2EncryptionAlgorithms?;
    get tunnel1Phase2EncryptionAlgorithms(): string[];
    set tunnel1Phase2EncryptionAlgorithms(value: string[]);
    resetTunnel1Phase2EncryptionAlgorithms(): void;
    get tunnel1Phase2EncryptionAlgorithmsInput(): string[] | undefined;
    private _tunnel1Phase2IntegrityAlgorithms?;
    get tunnel1Phase2IntegrityAlgorithms(): string[];
    set tunnel1Phase2IntegrityAlgorithms(value: string[]);
    resetTunnel1Phase2IntegrityAlgorithms(): void;
    get tunnel1Phase2IntegrityAlgorithmsInput(): string[] | undefined;
    private _tunnel1Phase2LifetimeSeconds?;
    get tunnel1Phase2LifetimeSeconds(): number;
    set tunnel1Phase2LifetimeSeconds(value: number);
    resetTunnel1Phase2LifetimeSeconds(): void;
    get tunnel1Phase2LifetimeSecondsInput(): number | undefined;
    private _tunnel1PresharedKey?;
    get tunnel1PresharedKey(): string;
    set tunnel1PresharedKey(value: string);
    resetTunnel1PresharedKey(): void;
    get tunnel1PresharedKeyInput(): string | undefined;
    private _tunnel1RekeyFuzzPercentage?;
    get tunnel1RekeyFuzzPercentage(): number;
    set tunnel1RekeyFuzzPercentage(value: number);
    resetTunnel1RekeyFuzzPercentage(): void;
    get tunnel1RekeyFuzzPercentageInput(): number | undefined;
    private _tunnel1RekeyMarginTimeSeconds?;
    get tunnel1RekeyMarginTimeSeconds(): number;
    set tunnel1RekeyMarginTimeSeconds(value: number);
    resetTunnel1RekeyMarginTimeSeconds(): void;
    get tunnel1RekeyMarginTimeSecondsInput(): number | undefined;
    private _tunnel1ReplayWindowSize?;
    get tunnel1ReplayWindowSize(): number;
    set tunnel1ReplayWindowSize(value: number);
    resetTunnel1ReplayWindowSize(): void;
    get tunnel1ReplayWindowSizeInput(): number | undefined;
    private _tunnel1StartupAction?;
    get tunnel1StartupAction(): string;
    set tunnel1StartupAction(value: string);
    resetTunnel1StartupAction(): void;
    get tunnel1StartupActionInput(): string | undefined;
    get tunnel1VgwInsideAddress(): string;
    get tunnel2Address(): string;
    get tunnel2BgpAsn(): string;
    get tunnel2BgpHoldtime(): number;
    get tunnel2CgwInsideAddress(): string;
    private _tunnel2DpdTimeoutAction?;
    get tunnel2DpdTimeoutAction(): string;
    set tunnel2DpdTimeoutAction(value: string);
    resetTunnel2DpdTimeoutAction(): void;
    get tunnel2DpdTimeoutActionInput(): string | undefined;
    private _tunnel2DpdTimeoutSeconds?;
    get tunnel2DpdTimeoutSeconds(): number;
    set tunnel2DpdTimeoutSeconds(value: number);
    resetTunnel2DpdTimeoutSeconds(): void;
    get tunnel2DpdTimeoutSecondsInput(): number | undefined;
    private _tunnel2EnableTunnelLifecycleControl?;
    get tunnel2EnableTunnelLifecycleControl(): boolean | cdktf.IResolvable;
    set tunnel2EnableTunnelLifecycleControl(value: boolean | cdktf.IResolvable);
    resetTunnel2EnableTunnelLifecycleControl(): void;
    get tunnel2EnableTunnelLifecycleControlInput(): boolean | cdktf.IResolvable | undefined;
    private _tunnel2IkeVersions?;
    get tunnel2IkeVersions(): string[];
    set tunnel2IkeVersions(value: string[]);
    resetTunnel2IkeVersions(): void;
    get tunnel2IkeVersionsInput(): string[] | undefined;
    private _tunnel2InsideCidr?;
    get tunnel2InsideCidr(): string;
    set tunnel2InsideCidr(value: string);
    resetTunnel2InsideCidr(): void;
    get tunnel2InsideCidrInput(): string | undefined;
    private _tunnel2InsideIpv6Cidr?;
    get tunnel2InsideIpv6Cidr(): string;
    set tunnel2InsideIpv6Cidr(value: string);
    resetTunnel2InsideIpv6Cidr(): void;
    get tunnel2InsideIpv6CidrInput(): string | undefined;
    private _tunnel2Phase1DhGroupNumbers?;
    get tunnel2Phase1DhGroupNumbers(): number[];
    set tunnel2Phase1DhGroupNumbers(value: number[]);
    resetTunnel2Phase1DhGroupNumbers(): void;
    get tunnel2Phase1DhGroupNumbersInput(): number[] | undefined;
    private _tunnel2Phase1EncryptionAlgorithms?;
    get tunnel2Phase1EncryptionAlgorithms(): string[];
    set tunnel2Phase1EncryptionAlgorithms(value: string[]);
    resetTunnel2Phase1EncryptionAlgorithms(): void;
    get tunnel2Phase1EncryptionAlgorithmsInput(): string[] | undefined;
    private _tunnel2Phase1IntegrityAlgorithms?;
    get tunnel2Phase1IntegrityAlgorithms(): string[];
    set tunnel2Phase1IntegrityAlgorithms(value: string[]);
    resetTunnel2Phase1IntegrityAlgorithms(): void;
    get tunnel2Phase1IntegrityAlgorithmsInput(): string[] | undefined;
    private _tunnel2Phase1LifetimeSeconds?;
    get tunnel2Phase1LifetimeSeconds(): number;
    set tunnel2Phase1LifetimeSeconds(value: number);
    resetTunnel2Phase1LifetimeSeconds(): void;
    get tunnel2Phase1LifetimeSecondsInput(): number | undefined;
    private _tunnel2Phase2DhGroupNumbers?;
    get tunnel2Phase2DhGroupNumbers(): number[];
    set tunnel2Phase2DhGroupNumbers(value: number[]);
    resetTunnel2Phase2DhGroupNumbers(): void;
    get tunnel2Phase2DhGroupNumbersInput(): number[] | undefined;
    private _tunnel2Phase2EncryptionAlgorithms?;
    get tunnel2Phase2EncryptionAlgorithms(): string[];
    set tunnel2Phase2EncryptionAlgorithms(value: string[]);
    resetTunnel2Phase2EncryptionAlgorithms(): void;
    get tunnel2Phase2EncryptionAlgorithmsInput(): string[] | undefined;
    private _tunnel2Phase2IntegrityAlgorithms?;
    get tunnel2Phase2IntegrityAlgorithms(): string[];
    set tunnel2Phase2IntegrityAlgorithms(value: string[]);
    resetTunnel2Phase2IntegrityAlgorithms(): void;
    get tunnel2Phase2IntegrityAlgorithmsInput(): string[] | undefined;
    private _tunnel2Phase2LifetimeSeconds?;
    get tunnel2Phase2LifetimeSeconds(): number;
    set tunnel2Phase2LifetimeSeconds(value: number);
    resetTunnel2Phase2LifetimeSeconds(): void;
    get tunnel2Phase2LifetimeSecondsInput(): number | undefined;
    private _tunnel2PresharedKey?;
    get tunnel2PresharedKey(): string;
    set tunnel2PresharedKey(value: string);
    resetTunnel2PresharedKey(): void;
    get tunnel2PresharedKeyInput(): string | undefined;
    private _tunnel2RekeyFuzzPercentage?;
    get tunnel2RekeyFuzzPercentage(): number;
    set tunnel2RekeyFuzzPercentage(value: number);
    resetTunnel2RekeyFuzzPercentage(): void;
    get tunnel2RekeyFuzzPercentageInput(): number | undefined;
    private _tunnel2RekeyMarginTimeSeconds?;
    get tunnel2RekeyMarginTimeSeconds(): number;
    set tunnel2RekeyMarginTimeSeconds(value: number);
    resetTunnel2RekeyMarginTimeSeconds(): void;
    get tunnel2RekeyMarginTimeSecondsInput(): number | undefined;
    private _tunnel2ReplayWindowSize?;
    get tunnel2ReplayWindowSize(): number;
    set tunnel2ReplayWindowSize(value: number);
    resetTunnel2ReplayWindowSize(): void;
    get tunnel2ReplayWindowSizeInput(): number | undefined;
    private _tunnel2StartupAction?;
    get tunnel2StartupAction(): string;
    set tunnel2StartupAction(value: string);
    resetTunnel2StartupAction(): void;
    get tunnel2StartupActionInput(): string | undefined;
    get tunnel2VgwInsideAddress(): string;
    private _tunnelInsideIpVersion?;
    get tunnelInsideIpVersion(): string;
    set tunnelInsideIpVersion(value: string);
    resetTunnelInsideIpVersion(): void;
    get tunnelInsideIpVersionInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _vgwTelemetry;
    get vgwTelemetry(): VpnConnectionVgwTelemetryList;
    private _vpnGatewayId?;
    get vpnGatewayId(): string;
    set vpnGatewayId(value: string);
    resetVpnGatewayId(): void;
    get vpnGatewayIdInput(): string | undefined;
    private _tunnel1LogOptions;
    get tunnel1LogOptions(): VpnConnectionTunnel1LogOptionsOutputReference;
    putTunnel1LogOptions(value: VpnConnectionTunnel1LogOptions): void;
    resetTunnel1LogOptions(): void;
    get tunnel1LogOptionsInput(): VpnConnectionTunnel1LogOptions | undefined;
    private _tunnel2LogOptions;
    get tunnel2LogOptions(): VpnConnectionTunnel2LogOptionsOutputReference;
    putTunnel2LogOptions(value: VpnConnectionTunnel2LogOptions): void;
    resetTunnel2LogOptions(): void;
    get tunnel2LogOptionsInput(): VpnConnectionTunnel2LogOptions | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
