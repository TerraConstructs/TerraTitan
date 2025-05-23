/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SubnetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#assign_ipv6_address_on_creation Subnet#assign_ipv6_address_on_creation}
    */
    readonly assignIpv6AddressOnCreation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#availability_zone Subnet#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#availability_zone_id Subnet#availability_zone_id}
    */
    readonly availabilityZoneId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#cidr_block Subnet#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#customer_owned_ipv4_pool Subnet#customer_owned_ipv4_pool}
    */
    readonly customerOwnedIpv4Pool?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#enable_dns64 Subnet#enable_dns64}
    */
    readonly enableDns64?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#enable_lni_at_device_index Subnet#enable_lni_at_device_index}
    */
    readonly enableLniAtDeviceIndex?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#enable_resource_name_dns_a_record_on_launch Subnet#enable_resource_name_dns_a_record_on_launch}
    */
    readonly enableResourceNameDnsARecordOnLaunch?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#enable_resource_name_dns_aaaa_record_on_launch Subnet#enable_resource_name_dns_aaaa_record_on_launch}
    */
    readonly enableResourceNameDnsAaaaRecordOnLaunch?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#id Subnet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#ipv6_cidr_block Subnet#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#ipv6_native Subnet#ipv6_native}
    */
    readonly ipv6Native?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#map_customer_owned_ip_on_launch Subnet#map_customer_owned_ip_on_launch}
    */
    readonly mapCustomerOwnedIpOnLaunch?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#map_public_ip_on_launch Subnet#map_public_ip_on_launch}
    */
    readonly mapPublicIpOnLaunch?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#outpost_arn Subnet#outpost_arn}
    */
    readonly outpostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#private_dns_hostname_type_on_launch Subnet#private_dns_hostname_type_on_launch}
    */
    readonly privateDnsHostnameTypeOnLaunch?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#tags Subnet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#tags_all Subnet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#vpc_id Subnet#vpc_id}
    */
    readonly vpcId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#timeouts Subnet#timeouts}
    */
    readonly timeouts?: SubnetTimeouts;
}
export interface SubnetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#create Subnet#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#delete Subnet#delete}
    */
    readonly delete?: string;
}
export declare function subnetTimeoutsToTerraform(struct?: SubnetTimeouts | cdktf.IResolvable): any;
export declare function subnetTimeoutsToHclTerraform(struct?: SubnetTimeouts | cdktf.IResolvable): any;
export declare class SubnetTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SubnetTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SubnetTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet aws_subnet}
*/
export declare class Subnet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_subnet";
    /**
    * Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Subnet to import
    * @param importFromId The id of the existing Subnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Subnet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/subnet aws_subnet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SubnetConfig
    */
    constructor(scope: Construct, id: string, config: SubnetConfig);
    get arn(): string;
    private _assignIpv6AddressOnCreation?;
    get assignIpv6AddressOnCreation(): boolean | cdktf.IResolvable;
    set assignIpv6AddressOnCreation(value: boolean | cdktf.IResolvable);
    resetAssignIpv6AddressOnCreation(): void;
    get assignIpv6AddressOnCreationInput(): boolean | cdktf.IResolvable | undefined;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _availabilityZoneId?;
    get availabilityZoneId(): string;
    set availabilityZoneId(value: string);
    resetAvailabilityZoneId(): void;
    get availabilityZoneIdInput(): string | undefined;
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    resetCidrBlock(): void;
    get cidrBlockInput(): string | undefined;
    private _customerOwnedIpv4Pool?;
    get customerOwnedIpv4Pool(): string;
    set customerOwnedIpv4Pool(value: string);
    resetCustomerOwnedIpv4Pool(): void;
    get customerOwnedIpv4PoolInput(): string | undefined;
    private _enableDns64?;
    get enableDns64(): boolean | cdktf.IResolvable;
    set enableDns64(value: boolean | cdktf.IResolvable);
    resetEnableDns64(): void;
    get enableDns64Input(): boolean | cdktf.IResolvable | undefined;
    private _enableLniAtDeviceIndex?;
    get enableLniAtDeviceIndex(): number;
    set enableLniAtDeviceIndex(value: number);
    resetEnableLniAtDeviceIndex(): void;
    get enableLniAtDeviceIndexInput(): number | undefined;
    private _enableResourceNameDnsARecordOnLaunch?;
    get enableResourceNameDnsARecordOnLaunch(): boolean | cdktf.IResolvable;
    set enableResourceNameDnsARecordOnLaunch(value: boolean | cdktf.IResolvable);
    resetEnableResourceNameDnsARecordOnLaunch(): void;
    get enableResourceNameDnsARecordOnLaunchInput(): boolean | cdktf.IResolvable | undefined;
    private _enableResourceNameDnsAaaaRecordOnLaunch?;
    get enableResourceNameDnsAaaaRecordOnLaunch(): boolean | cdktf.IResolvable;
    set enableResourceNameDnsAaaaRecordOnLaunch(value: boolean | cdktf.IResolvable);
    resetEnableResourceNameDnsAaaaRecordOnLaunch(): void;
    get enableResourceNameDnsAaaaRecordOnLaunchInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ipv6CidrBlock?;
    get ipv6CidrBlock(): string;
    set ipv6CidrBlock(value: string);
    resetIpv6CidrBlock(): void;
    get ipv6CidrBlockInput(): string | undefined;
    get ipv6CidrBlockAssociationId(): string;
    private _ipv6Native?;
    get ipv6Native(): boolean | cdktf.IResolvable;
    set ipv6Native(value: boolean | cdktf.IResolvable);
    resetIpv6Native(): void;
    get ipv6NativeInput(): boolean | cdktf.IResolvable | undefined;
    private _mapCustomerOwnedIpOnLaunch?;
    get mapCustomerOwnedIpOnLaunch(): boolean | cdktf.IResolvable;
    set mapCustomerOwnedIpOnLaunch(value: boolean | cdktf.IResolvable);
    resetMapCustomerOwnedIpOnLaunch(): void;
    get mapCustomerOwnedIpOnLaunchInput(): boolean | cdktf.IResolvable | undefined;
    private _mapPublicIpOnLaunch?;
    get mapPublicIpOnLaunch(): boolean | cdktf.IResolvable;
    set mapPublicIpOnLaunch(value: boolean | cdktf.IResolvable);
    resetMapPublicIpOnLaunch(): void;
    get mapPublicIpOnLaunchInput(): boolean | cdktf.IResolvable | undefined;
    private _outpostArn?;
    get outpostArn(): string;
    set outpostArn(value: string);
    resetOutpostArn(): void;
    get outpostArnInput(): string | undefined;
    get ownerId(): string;
    private _privateDnsHostnameTypeOnLaunch?;
    get privateDnsHostnameTypeOnLaunch(): string;
    set privateDnsHostnameTypeOnLaunch(value: string);
    resetPrivateDnsHostnameTypeOnLaunch(): void;
    get privateDnsHostnameTypeOnLaunchInput(): string | undefined;
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): SubnetTimeoutsOutputReference;
    putTimeouts(value: SubnetTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SubnetTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
