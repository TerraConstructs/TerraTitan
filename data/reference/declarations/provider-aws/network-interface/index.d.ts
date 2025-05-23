/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#description NetworkInterface#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#enable_primary_ipv6 NetworkInterface#enable_primary_ipv6}
    */
    readonly enablePrimaryIpv6?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#id NetworkInterface#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#interface_type NetworkInterface#interface_type}
    */
    readonly interfaceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#ipv4_prefix_count NetworkInterface#ipv4_prefix_count}
    */
    readonly ipv4PrefixCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#ipv4_prefixes NetworkInterface#ipv4_prefixes}
    */
    readonly ipv4Prefixes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#ipv6_address_count NetworkInterface#ipv6_address_count}
    */
    readonly ipv6AddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#ipv6_address_list NetworkInterface#ipv6_address_list}
    */
    readonly ipv6AddressList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#ipv6_address_list_enabled NetworkInterface#ipv6_address_list_enabled}
    */
    readonly ipv6AddressListEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#ipv6_addresses NetworkInterface#ipv6_addresses}
    */
    readonly ipv6Addresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#ipv6_prefix_count NetworkInterface#ipv6_prefix_count}
    */
    readonly ipv6PrefixCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#ipv6_prefixes NetworkInterface#ipv6_prefixes}
    */
    readonly ipv6Prefixes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#private_ip NetworkInterface#private_ip}
    */
    readonly privateIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#private_ip_list NetworkInterface#private_ip_list}
    */
    readonly privateIpList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#private_ip_list_enabled NetworkInterface#private_ip_list_enabled}
    */
    readonly privateIpListEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#private_ips NetworkInterface#private_ips}
    */
    readonly privateIps?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#private_ips_count NetworkInterface#private_ips_count}
    */
    readonly privateIpsCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#security_groups NetworkInterface#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#source_dest_check NetworkInterface#source_dest_check}
    */
    readonly sourceDestCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#subnet_id NetworkInterface#subnet_id}
    */
    readonly subnetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#tags NetworkInterface#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#tags_all NetworkInterface#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * attachment block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#attachment NetworkInterface#attachment}
    */
    readonly attachment?: NetworkInterfaceAttachment[] | cdktf.IResolvable;
}
export interface NetworkInterfaceAttachment {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#device_index NetworkInterface#device_index}
    */
    readonly deviceIndex: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#instance NetworkInterface#instance}
    */
    readonly instance: string;
}
export declare function networkInterfaceAttachmentToTerraform(struct?: NetworkInterfaceAttachment | cdktf.IResolvable): any;
export declare function networkInterfaceAttachmentToHclTerraform(struct?: NetworkInterfaceAttachment | cdktf.IResolvable): any;
export declare class NetworkInterfaceAttachmentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkInterfaceAttachment | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkInterfaceAttachment | cdktf.IResolvable | undefined);
    get attachmentId(): string;
    private _deviceIndex?;
    get deviceIndex(): number;
    set deviceIndex(value: number);
    get deviceIndexInput(): number | undefined;
    private _instance?;
    get instance(): string;
    set instance(value: string);
    get instanceInput(): string | undefined;
}
export declare class NetworkInterfaceAttachmentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkInterfaceAttachment[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkInterfaceAttachmentOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface aws_network_interface}
*/
export declare class NetworkInterface extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_network_interface";
    /**
    * Generates CDKTF code for importing a NetworkInterface resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkInterface to import
    * @param importFromId The id of the existing NetworkInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkInterface to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_interface aws_network_interface} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkInterfaceConfig
    */
    constructor(scope: Construct, id: string, config: NetworkInterfaceConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _enablePrimaryIpv6?;
    get enablePrimaryIpv6(): boolean | cdktf.IResolvable;
    set enablePrimaryIpv6(value: boolean | cdktf.IResolvable);
    resetEnablePrimaryIpv6(): void;
    get enablePrimaryIpv6Input(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _interfaceType?;
    get interfaceType(): string;
    set interfaceType(value: string);
    resetInterfaceType(): void;
    get interfaceTypeInput(): string | undefined;
    private _ipv4PrefixCount?;
    get ipv4PrefixCount(): number;
    set ipv4PrefixCount(value: number);
    resetIpv4PrefixCount(): void;
    get ipv4PrefixCountInput(): number | undefined;
    private _ipv4Prefixes?;
    get ipv4Prefixes(): string[];
    set ipv4Prefixes(value: string[]);
    resetIpv4Prefixes(): void;
    get ipv4PrefixesInput(): string[] | undefined;
    private _ipv6AddressCount?;
    get ipv6AddressCount(): number;
    set ipv6AddressCount(value: number);
    resetIpv6AddressCount(): void;
    get ipv6AddressCountInput(): number | undefined;
    private _ipv6AddressList?;
    get ipv6AddressList(): string[];
    set ipv6AddressList(value: string[]);
    resetIpv6AddressList(): void;
    get ipv6AddressListInput(): string[] | undefined;
    private _ipv6AddressListEnabled?;
    get ipv6AddressListEnabled(): boolean | cdktf.IResolvable;
    set ipv6AddressListEnabled(value: boolean | cdktf.IResolvable);
    resetIpv6AddressListEnabled(): void;
    get ipv6AddressListEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _ipv6Addresses?;
    get ipv6Addresses(): string[];
    set ipv6Addresses(value: string[]);
    resetIpv6Addresses(): void;
    get ipv6AddressesInput(): string[] | undefined;
    private _ipv6PrefixCount?;
    get ipv6PrefixCount(): number;
    set ipv6PrefixCount(value: number);
    resetIpv6PrefixCount(): void;
    get ipv6PrefixCountInput(): number | undefined;
    private _ipv6Prefixes?;
    get ipv6Prefixes(): string[];
    set ipv6Prefixes(value: string[]);
    resetIpv6Prefixes(): void;
    get ipv6PrefixesInput(): string[] | undefined;
    get macAddress(): string;
    get outpostArn(): string;
    get ownerId(): string;
    get privateDnsName(): string;
    private _privateIp?;
    get privateIp(): string;
    set privateIp(value: string);
    resetPrivateIp(): void;
    get privateIpInput(): string | undefined;
    private _privateIpList?;
    get privateIpList(): string[];
    set privateIpList(value: string[]);
    resetPrivateIpList(): void;
    get privateIpListInput(): string[] | undefined;
    private _privateIpListEnabled?;
    get privateIpListEnabled(): boolean | cdktf.IResolvable;
    set privateIpListEnabled(value: boolean | cdktf.IResolvable);
    resetPrivateIpListEnabled(): void;
    get privateIpListEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _privateIps?;
    get privateIps(): string[];
    set privateIps(value: string[]);
    resetPrivateIps(): void;
    get privateIpsInput(): string[] | undefined;
    private _privateIpsCount?;
    get privateIpsCount(): number;
    set privateIpsCount(value: number);
    resetPrivateIpsCount(): void;
    get privateIpsCountInput(): number | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _sourceDestCheck?;
    get sourceDestCheck(): boolean | cdktf.IResolvable;
    set sourceDestCheck(value: boolean | cdktf.IResolvable);
    resetSourceDestCheck(): void;
    get sourceDestCheckInput(): boolean | cdktf.IResolvable | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string | undefined;
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
    private _attachment;
    get attachment(): NetworkInterfaceAttachmentList;
    putAttachment(value: NetworkInterfaceAttachment[] | cdktf.IResolvable): void;
    resetAttachment(): void;
    get attachmentInput(): cdktf.IResolvable | NetworkInterfaceAttachment[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
