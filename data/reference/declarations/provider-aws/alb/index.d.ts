/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AlbConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#client_keep_alive Alb#client_keep_alive}
    */
    readonly clientKeepAlive?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}
    */
    readonly customerOwnedIpv4Pool?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#desync_mitigation_mode Alb#desync_mitigation_mode}
    */
    readonly desyncMitigationMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#dns_record_client_routing_policy Alb#dns_record_client_routing_policy}
    */
    readonly dnsRecordClientRoutingPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#drop_invalid_header_fields Alb#drop_invalid_header_fields}
    */
    readonly dropInvalidHeaderFields?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}
    */
    readonly enableCrossZoneLoadBalancing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#enable_deletion_protection Alb#enable_deletion_protection}
    */
    readonly enableDeletionProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#enable_http2 Alb#enable_http2}
    */
    readonly enableHttp2?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#enable_tls_version_and_cipher_suite_headers Alb#enable_tls_version_and_cipher_suite_headers}
    */
    readonly enableTlsVersionAndCipherSuiteHeaders?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#enable_waf_fail_open Alb#enable_waf_fail_open}
    */
    readonly enableWafFailOpen?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#enable_xff_client_port Alb#enable_xff_client_port}
    */
    readonly enableXffClientPort?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#enable_zonal_shift Alb#enable_zonal_shift}
    */
    readonly enableZonalShift?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#enforce_security_group_inbound_rules_on_private_link_traffic Alb#enforce_security_group_inbound_rules_on_private_link_traffic}
    */
    readonly enforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#id Alb#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#idle_timeout Alb#idle_timeout}
    */
    readonly idleTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#internal Alb#internal}
    */
    readonly internal?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#ip_address_type Alb#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#load_balancer_type Alb#load_balancer_type}
    */
    readonly loadBalancerType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#name Alb#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#name_prefix Alb#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#preserve_host_header Alb#preserve_host_header}
    */
    readonly preserveHostHeader?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#security_groups Alb#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#subnets Alb#subnets}
    */
    readonly subnets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#tags Alb#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#tags_all Alb#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#xff_header_processing_mode Alb#xff_header_processing_mode}
    */
    readonly xffHeaderProcessingMode?: string;
    /**
    * access_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#access_logs Alb#access_logs}
    */
    readonly accessLogs?: AlbAccessLogs;
    /**
    * connection_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#connection_logs Alb#connection_logs}
    */
    readonly connectionLogs?: AlbConnectionLogs;
    /**
    * subnet_mapping block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#subnet_mapping Alb#subnet_mapping}
    */
    readonly subnetMapping?: AlbSubnetMapping[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#timeouts Alb#timeouts}
    */
    readonly timeouts?: AlbTimeouts;
}
export interface AlbAccessLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#bucket Alb#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#enabled Alb#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#prefix Alb#prefix}
    */
    readonly prefix?: string;
}
export declare function albAccessLogsToTerraform(struct?: AlbAccessLogsOutputReference | AlbAccessLogs): any;
export declare function albAccessLogsToHclTerraform(struct?: AlbAccessLogsOutputReference | AlbAccessLogs): any;
export declare class AlbAccessLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbAccessLogs | undefined;
    set internalValue(value: AlbAccessLogs | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
}
export interface AlbConnectionLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#bucket Alb#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#enabled Alb#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#prefix Alb#prefix}
    */
    readonly prefix?: string;
}
export declare function albConnectionLogsToTerraform(struct?: AlbConnectionLogsOutputReference | AlbConnectionLogs): any;
export declare function albConnectionLogsToHclTerraform(struct?: AlbConnectionLogsOutputReference | AlbConnectionLogs): any;
export declare class AlbConnectionLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbConnectionLogs | undefined;
    set internalValue(value: AlbConnectionLogs | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
}
export interface AlbSubnetMapping {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#allocation_id Alb#allocation_id}
    */
    readonly allocationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#ipv6_address Alb#ipv6_address}
    */
    readonly ipv6Address?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#private_ipv4_address Alb#private_ipv4_address}
    */
    readonly privateIpv4Address?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#subnet_id Alb#subnet_id}
    */
    readonly subnetId: string;
}
export declare function albSubnetMappingToTerraform(struct?: AlbSubnetMapping | cdktf.IResolvable): any;
export declare function albSubnetMappingToHclTerraform(struct?: AlbSubnetMapping | cdktf.IResolvable): any;
export declare class AlbSubnetMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AlbSubnetMapping | cdktf.IResolvable | undefined;
    set internalValue(value: AlbSubnetMapping | cdktf.IResolvable | undefined);
    private _allocationId?;
    get allocationId(): string;
    set allocationId(value: string);
    resetAllocationId(): void;
    get allocationIdInput(): string | undefined;
    private _ipv6Address?;
    get ipv6Address(): string;
    set ipv6Address(value: string);
    resetIpv6Address(): void;
    get ipv6AddressInput(): string | undefined;
    get outpostId(): string;
    private _privateIpv4Address?;
    get privateIpv4Address(): string;
    set privateIpv4Address(value: string);
    resetPrivateIpv4Address(): void;
    get privateIpv4AddressInput(): string | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string | undefined;
}
export declare class AlbSubnetMappingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AlbSubnetMapping[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AlbSubnetMappingOutputReference;
}
export interface AlbTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#create Alb#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#delete Alb#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#update Alb#update}
    */
    readonly update?: string;
}
export declare function albTimeoutsToTerraform(struct?: AlbTimeouts | cdktf.IResolvable): any;
export declare function albTimeoutsToHclTerraform(struct?: AlbTimeouts | cdktf.IResolvable): any;
export declare class AlbTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: AlbTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb aws_alb}
*/
export declare class Alb extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_alb";
    /**
    * Generates CDKTF code for importing a Alb resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Alb to import
    * @param importFromId The id of the existing Alb that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Alb to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb aws_alb} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbConfig = {}
    */
    constructor(scope: Construct, id: string, config?: AlbConfig);
    get arn(): string;
    get arnSuffix(): string;
    private _clientKeepAlive?;
    get clientKeepAlive(): number;
    set clientKeepAlive(value: number);
    resetClientKeepAlive(): void;
    get clientKeepAliveInput(): number | undefined;
    private _customerOwnedIpv4Pool?;
    get customerOwnedIpv4Pool(): string;
    set customerOwnedIpv4Pool(value: string);
    resetCustomerOwnedIpv4Pool(): void;
    get customerOwnedIpv4PoolInput(): string | undefined;
    private _desyncMitigationMode?;
    get desyncMitigationMode(): string;
    set desyncMitigationMode(value: string);
    resetDesyncMitigationMode(): void;
    get desyncMitigationModeInput(): string | undefined;
    get dnsName(): string;
    private _dnsRecordClientRoutingPolicy?;
    get dnsRecordClientRoutingPolicy(): string;
    set dnsRecordClientRoutingPolicy(value: string);
    resetDnsRecordClientRoutingPolicy(): void;
    get dnsRecordClientRoutingPolicyInput(): string | undefined;
    private _dropInvalidHeaderFields?;
    get dropInvalidHeaderFields(): boolean | cdktf.IResolvable;
    set dropInvalidHeaderFields(value: boolean | cdktf.IResolvable);
    resetDropInvalidHeaderFields(): void;
    get dropInvalidHeaderFieldsInput(): boolean | cdktf.IResolvable | undefined;
    private _enableCrossZoneLoadBalancing?;
    get enableCrossZoneLoadBalancing(): boolean | cdktf.IResolvable;
    set enableCrossZoneLoadBalancing(value: boolean | cdktf.IResolvable);
    resetEnableCrossZoneLoadBalancing(): void;
    get enableCrossZoneLoadBalancingInput(): boolean | cdktf.IResolvable | undefined;
    private _enableDeletionProtection?;
    get enableDeletionProtection(): boolean | cdktf.IResolvable;
    set enableDeletionProtection(value: boolean | cdktf.IResolvable);
    resetEnableDeletionProtection(): void;
    get enableDeletionProtectionInput(): boolean | cdktf.IResolvable | undefined;
    private _enableHttp2?;
    get enableHttp2(): boolean | cdktf.IResolvable;
    set enableHttp2(value: boolean | cdktf.IResolvable);
    resetEnableHttp2(): void;
    get enableHttp2Input(): boolean | cdktf.IResolvable | undefined;
    private _enableTlsVersionAndCipherSuiteHeaders?;
    get enableTlsVersionAndCipherSuiteHeaders(): boolean | cdktf.IResolvable;
    set enableTlsVersionAndCipherSuiteHeaders(value: boolean | cdktf.IResolvable);
    resetEnableTlsVersionAndCipherSuiteHeaders(): void;
    get enableTlsVersionAndCipherSuiteHeadersInput(): boolean | cdktf.IResolvable | undefined;
    private _enableWafFailOpen?;
    get enableWafFailOpen(): boolean | cdktf.IResolvable;
    set enableWafFailOpen(value: boolean | cdktf.IResolvable);
    resetEnableWafFailOpen(): void;
    get enableWafFailOpenInput(): boolean | cdktf.IResolvable | undefined;
    private _enableXffClientPort?;
    get enableXffClientPort(): boolean | cdktf.IResolvable;
    set enableXffClientPort(value: boolean | cdktf.IResolvable);
    resetEnableXffClientPort(): void;
    get enableXffClientPortInput(): boolean | cdktf.IResolvable | undefined;
    private _enableZonalShift?;
    get enableZonalShift(): boolean | cdktf.IResolvable;
    set enableZonalShift(value: boolean | cdktf.IResolvable);
    resetEnableZonalShift(): void;
    get enableZonalShiftInput(): boolean | cdktf.IResolvable | undefined;
    private _enforceSecurityGroupInboundRulesOnPrivateLinkTraffic?;
    get enforceSecurityGroupInboundRulesOnPrivateLinkTraffic(): string;
    set enforceSecurityGroupInboundRulesOnPrivateLinkTraffic(value: string);
    resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic(): void;
    get enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _idleTimeout?;
    get idleTimeout(): number;
    set idleTimeout(value: number);
    resetIdleTimeout(): void;
    get idleTimeoutInput(): number | undefined;
    private _internal?;
    get internal(): boolean | cdktf.IResolvable;
    set internal(value: boolean | cdktf.IResolvable);
    resetInternal(): void;
    get internalInput(): boolean | cdktf.IResolvable | undefined;
    private _ipAddressType?;
    get ipAddressType(): string;
    set ipAddressType(value: string);
    resetIpAddressType(): void;
    get ipAddressTypeInput(): string | undefined;
    private _loadBalancerType?;
    get loadBalancerType(): string;
    set loadBalancerType(value: string);
    resetLoadBalancerType(): void;
    get loadBalancerTypeInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _preserveHostHeader?;
    get preserveHostHeader(): boolean | cdktf.IResolvable;
    set preserveHostHeader(value: boolean | cdktf.IResolvable);
    resetPreserveHostHeader(): void;
    get preserveHostHeaderInput(): boolean | cdktf.IResolvable | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    resetSubnets(): void;
    get subnetsInput(): string[] | undefined;
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
    get vpcId(): string;
    private _xffHeaderProcessingMode?;
    get xffHeaderProcessingMode(): string;
    set xffHeaderProcessingMode(value: string);
    resetXffHeaderProcessingMode(): void;
    get xffHeaderProcessingModeInput(): string | undefined;
    get zoneId(): string;
    private _accessLogs;
    get accessLogs(): AlbAccessLogsOutputReference;
    putAccessLogs(value: AlbAccessLogs): void;
    resetAccessLogs(): void;
    get accessLogsInput(): AlbAccessLogs | undefined;
    private _connectionLogs;
    get connectionLogs(): AlbConnectionLogsOutputReference;
    putConnectionLogs(value: AlbConnectionLogs): void;
    resetConnectionLogs(): void;
    get connectionLogsInput(): AlbConnectionLogs | undefined;
    private _subnetMapping;
    get subnetMapping(): AlbSubnetMappingList;
    putSubnetMapping(value: AlbSubnetMapping[] | cdktf.IResolvable): void;
    resetSubnetMapping(): void;
    get subnetMappingInput(): cdktf.IResolvable | AlbSubnetMapping[] | undefined;
    private _timeouts;
    get timeouts(): AlbTimeoutsOutputReference;
    putTimeouts(value: AlbTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | AlbTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
