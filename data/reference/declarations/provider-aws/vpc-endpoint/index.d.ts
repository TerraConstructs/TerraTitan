/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#auto_accept VpcEndpoint#auto_accept}
    */
    readonly autoAccept?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#id VpcEndpoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#ip_address_type VpcEndpoint#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#policy VpcEndpoint#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#private_dns_enabled VpcEndpoint#private_dns_enabled}
    */
    readonly privateDnsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#resource_configuration_arn VpcEndpoint#resource_configuration_arn}
    */
    readonly resourceConfigurationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#route_table_ids VpcEndpoint#route_table_ids}
    */
    readonly routeTableIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#security_group_ids VpcEndpoint#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#service_name VpcEndpoint#service_name}
    */
    readonly serviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#service_network_arn VpcEndpoint#service_network_arn}
    */
    readonly serviceNetworkArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#service_region VpcEndpoint#service_region}
    */
    readonly serviceRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#subnet_ids VpcEndpoint#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#tags VpcEndpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#tags_all VpcEndpoint#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#vpc_endpoint_type VpcEndpoint#vpc_endpoint_type}
    */
    readonly vpcEndpointType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#vpc_id VpcEndpoint#vpc_id}
    */
    readonly vpcId: string;
    /**
    * dns_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#dns_options VpcEndpoint#dns_options}
    */
    readonly dnsOptions?: VpcEndpointDnsOptions;
    /**
    * subnet_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#subnet_configuration VpcEndpoint#subnet_configuration}
    */
    readonly subnetConfiguration?: VpcEndpointSubnetConfiguration[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#timeouts VpcEndpoint#timeouts}
    */
    readonly timeouts?: VpcEndpointTimeouts;
}
export interface VpcEndpointDnsEntry {
}
export declare function vpcEndpointDnsEntryToTerraform(struct?: VpcEndpointDnsEntry): any;
export declare function vpcEndpointDnsEntryToHclTerraform(struct?: VpcEndpointDnsEntry): any;
export declare class VpcEndpointDnsEntryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VpcEndpointDnsEntry | undefined;
    set internalValue(value: VpcEndpointDnsEntry | undefined);
    get dnsName(): string;
    get hostedZoneId(): string;
}
export declare class VpcEndpointDnsEntryList extends cdktf.ComplexList {
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
    get(index: number): VpcEndpointDnsEntryOutputReference;
}
export interface VpcEndpointDnsOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#dns_record_ip_type VpcEndpoint#dns_record_ip_type}
    */
    readonly dnsRecordIpType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#private_dns_only_for_inbound_resolver_endpoint VpcEndpoint#private_dns_only_for_inbound_resolver_endpoint}
    */
    readonly privateDnsOnlyForInboundResolverEndpoint?: boolean | cdktf.IResolvable;
}
export declare function vpcEndpointDnsOptionsToTerraform(struct?: VpcEndpointDnsOptionsOutputReference | VpcEndpointDnsOptions): any;
export declare function vpcEndpointDnsOptionsToHclTerraform(struct?: VpcEndpointDnsOptionsOutputReference | VpcEndpointDnsOptions): any;
export declare class VpcEndpointDnsOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcEndpointDnsOptions | undefined;
    set internalValue(value: VpcEndpointDnsOptions | undefined);
    private _dnsRecordIpType?;
    get dnsRecordIpType(): string;
    set dnsRecordIpType(value: string);
    resetDnsRecordIpType(): void;
    get dnsRecordIpTypeInput(): string | undefined;
    private _privateDnsOnlyForInboundResolverEndpoint?;
    get privateDnsOnlyForInboundResolverEndpoint(): boolean | cdktf.IResolvable;
    set privateDnsOnlyForInboundResolverEndpoint(value: boolean | cdktf.IResolvable);
    resetPrivateDnsOnlyForInboundResolverEndpoint(): void;
    get privateDnsOnlyForInboundResolverEndpointInput(): boolean | cdktf.IResolvable | undefined;
}
export interface VpcEndpointSubnetConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#ipv4 VpcEndpoint#ipv4}
    */
    readonly ipv4?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#ipv6 VpcEndpoint#ipv6}
    */
    readonly ipv6?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#subnet_id VpcEndpoint#subnet_id}
    */
    readonly subnetId?: string;
}
export declare function vpcEndpointSubnetConfigurationToTerraform(struct?: VpcEndpointSubnetConfiguration | cdktf.IResolvable): any;
export declare function vpcEndpointSubnetConfigurationToHclTerraform(struct?: VpcEndpointSubnetConfiguration | cdktf.IResolvable): any;
export declare class VpcEndpointSubnetConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VpcEndpointSubnetConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: VpcEndpointSubnetConfiguration | cdktf.IResolvable | undefined);
    private _ipv4?;
    get ipv4(): string;
    set ipv4(value: string);
    resetIpv4(): void;
    get ipv4Input(): string | undefined;
    private _ipv6?;
    get ipv6(): string;
    set ipv6(value: string);
    resetIpv6(): void;
    get ipv6Input(): string | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
}
export declare class VpcEndpointSubnetConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VpcEndpointSubnetConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VpcEndpointSubnetConfigurationOutputReference;
}
export interface VpcEndpointTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#create VpcEndpoint#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#delete VpcEndpoint#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#update VpcEndpoint#update}
    */
    readonly update?: string;
}
export declare function vpcEndpointTimeoutsToTerraform(struct?: VpcEndpointTimeouts | cdktf.IResolvable): any;
export declare function vpcEndpointTimeoutsToHclTerraform(struct?: VpcEndpointTimeouts | cdktf.IResolvable): any;
export declare class VpcEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcEndpointTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpcEndpointTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint aws_vpc_endpoint}
*/
export declare class VpcEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_endpoint";
    /**
    * Generates CDKTF code for importing a VpcEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcEndpoint to import
    * @param importFromId The id of the existing VpcEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint aws_vpc_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointConfig
    */
    constructor(scope: Construct, id: string, config: VpcEndpointConfig);
    get arn(): string;
    private _autoAccept?;
    get autoAccept(): boolean | cdktf.IResolvable;
    set autoAccept(value: boolean | cdktf.IResolvable);
    resetAutoAccept(): void;
    get autoAcceptInput(): boolean | cdktf.IResolvable | undefined;
    get cidrBlocks(): string[];
    private _dnsEntry;
    get dnsEntry(): VpcEndpointDnsEntryList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ipAddressType?;
    get ipAddressType(): string;
    set ipAddressType(value: string);
    resetIpAddressType(): void;
    get ipAddressTypeInput(): string | undefined;
    get networkInterfaceIds(): string[];
    get ownerId(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string | undefined;
    get prefixListId(): string;
    private _privateDnsEnabled?;
    get privateDnsEnabled(): boolean | cdktf.IResolvable;
    set privateDnsEnabled(value: boolean | cdktf.IResolvable);
    resetPrivateDnsEnabled(): void;
    get privateDnsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    get requesterManaged(): cdktf.IResolvable;
    private _resourceConfigurationArn?;
    get resourceConfigurationArn(): string;
    set resourceConfigurationArn(value: string);
    resetResourceConfigurationArn(): void;
    get resourceConfigurationArnInput(): string | undefined;
    private _routeTableIds?;
    get routeTableIds(): string[];
    set routeTableIds(value: string[]);
    resetRouteTableIds(): void;
    get routeTableIdsInput(): string[] | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    resetServiceName(): void;
    get serviceNameInput(): string | undefined;
    private _serviceNetworkArn?;
    get serviceNetworkArn(): string;
    set serviceNetworkArn(value: string);
    resetServiceNetworkArn(): void;
    get serviceNetworkArnInput(): string | undefined;
    private _serviceRegion?;
    get serviceRegion(): string;
    set serviceRegion(value: string);
    resetServiceRegion(): void;
    get serviceRegionInput(): string | undefined;
    get state(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
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
    private _vpcEndpointType?;
    get vpcEndpointType(): string;
    set vpcEndpointType(value: string);
    resetVpcEndpointType(): void;
    get vpcEndpointTypeInput(): string | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
    private _dnsOptions;
    get dnsOptions(): VpcEndpointDnsOptionsOutputReference;
    putDnsOptions(value: VpcEndpointDnsOptions): void;
    resetDnsOptions(): void;
    get dnsOptionsInput(): VpcEndpointDnsOptions | undefined;
    private _subnetConfiguration;
    get subnetConfiguration(): VpcEndpointSubnetConfigurationList;
    putSubnetConfiguration(value: VpcEndpointSubnetConfiguration[] | cdktf.IResolvable): void;
    resetSubnetConfiguration(): void;
    get subnetConfigurationInput(): cdktf.IResolvable | VpcEndpointSubnetConfiguration[] | undefined;
    private _timeouts;
    get timeouts(): VpcEndpointTimeoutsOutputReference;
    putTimeouts(value: VpcEndpointTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpcEndpointTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
