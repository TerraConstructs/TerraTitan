/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DefaultSubnetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet#assign_ipv6_address_on_creation DefaultSubnet#assign_ipv6_address_on_creation}
    */
    readonly assignIpv6AddressOnCreation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet#availability_zone DefaultSubnet#availability_zone}
    */
    readonly availabilityZone: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet#customer_owned_ipv4_pool DefaultSubnet#customer_owned_ipv4_pool}
    */
    readonly customerOwnedIpv4Pool?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet#enable_dns64 DefaultSubnet#enable_dns64}
    */
    readonly enableDns64?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet#enable_resource_name_dns_a_record_on_launch DefaultSubnet#enable_resource_name_dns_a_record_on_launch}
    */
    readonly enableResourceNameDnsARecordOnLaunch?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet#enable_resource_name_dns_aaaa_record_on_launch DefaultSubnet#enable_resource_name_dns_aaaa_record_on_launch}
    */
    readonly enableResourceNameDnsAaaaRecordOnLaunch?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet#force_destroy DefaultSubnet#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet#id DefaultSubnet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet#ipv6_cidr_block DefaultSubnet#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet#ipv6_native DefaultSubnet#ipv6_native}
    */
    readonly ipv6Native?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet#map_customer_owned_ip_on_launch DefaultSubnet#map_customer_owned_ip_on_launch}
    */
    readonly mapCustomerOwnedIpOnLaunch?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet#map_public_ip_on_launch DefaultSubnet#map_public_ip_on_launch}
    */
    readonly mapPublicIpOnLaunch?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet#private_dns_hostname_type_on_launch DefaultSubnet#private_dns_hostname_type_on_launch}
    */
    readonly privateDnsHostnameTypeOnLaunch?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet#tags DefaultSubnet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet#tags_all DefaultSubnet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet#timeouts DefaultSubnet#timeouts}
    */
    readonly timeouts?: DefaultSubnetTimeouts;
}
export interface DefaultSubnetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet#create DefaultSubnet#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet#delete DefaultSubnet#delete}
    */
    readonly delete?: string;
}
export declare function defaultSubnetTimeoutsToTerraform(struct?: DefaultSubnetTimeouts | cdktf.IResolvable): any;
export declare function defaultSubnetTimeoutsToHclTerraform(struct?: DefaultSubnetTimeouts | cdktf.IResolvable): any;
export declare class DefaultSubnetTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DefaultSubnetTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DefaultSubnetTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet aws_default_subnet}
*/
export declare class DefaultSubnet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_default_subnet";
    /**
    * Generates CDKTF code for importing a DefaultSubnet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DefaultSubnet to import
    * @param importFromId The id of the existing DefaultSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DefaultSubnet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_subnet aws_default_subnet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultSubnetConfig
    */
    constructor(scope: Construct, id: string, config: DefaultSubnetConfig);
    get arn(): string;
    private _assignIpv6AddressOnCreation?;
    get assignIpv6AddressOnCreation(): boolean | cdktf.IResolvable;
    set assignIpv6AddressOnCreation(value: boolean | cdktf.IResolvable);
    resetAssignIpv6AddressOnCreation(): void;
    get assignIpv6AddressOnCreationInput(): boolean | cdktf.IResolvable | undefined;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    get availabilityZoneInput(): string | undefined;
    get availabilityZoneId(): string;
    get cidrBlock(): string;
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
    get enableLniAtDeviceIndex(): number;
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
    get existingDefaultSubnet(): cdktf.IResolvable;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable | undefined;
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
    get outpostArn(): string;
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
    get vpcId(): string;
    private _timeouts;
    get timeouts(): DefaultSubnetTimeoutsOutputReference;
    putTimeouts(value: DefaultSubnetTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DefaultSubnetTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
