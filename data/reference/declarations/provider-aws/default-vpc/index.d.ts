/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DefaultVpcConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_vpc#assign_generated_ipv6_cidr_block DefaultVpc#assign_generated_ipv6_cidr_block}
    */
    readonly assignGeneratedIpv6CidrBlock?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_vpc#enable_dns_hostnames DefaultVpc#enable_dns_hostnames}
    */
    readonly enableDnsHostnames?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_vpc#enable_dns_support DefaultVpc#enable_dns_support}
    */
    readonly enableDnsSupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_vpc#enable_network_address_usage_metrics DefaultVpc#enable_network_address_usage_metrics}
    */
    readonly enableNetworkAddressUsageMetrics?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_vpc#force_destroy DefaultVpc#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_vpc#id DefaultVpc#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_vpc#ipv6_cidr_block DefaultVpc#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_vpc#ipv6_cidr_block_network_border_group DefaultVpc#ipv6_cidr_block_network_border_group}
    */
    readonly ipv6CidrBlockNetworkBorderGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_vpc#ipv6_ipam_pool_id DefaultVpc#ipv6_ipam_pool_id}
    */
    readonly ipv6IpamPoolId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_vpc#ipv6_netmask_length DefaultVpc#ipv6_netmask_length}
    */
    readonly ipv6NetmaskLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_vpc#tags DefaultVpc#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_vpc#tags_all DefaultVpc#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_vpc aws_default_vpc}
*/
export declare class DefaultVpc extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_default_vpc";
    /**
    * Generates CDKTF code for importing a DefaultVpc resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DefaultVpc to import
    * @param importFromId The id of the existing DefaultVpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_vpc#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DefaultVpc to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_vpc aws_default_vpc} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultVpcConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DefaultVpcConfig);
    get arn(): string;
    private _assignGeneratedIpv6CidrBlock?;
    get assignGeneratedIpv6CidrBlock(): boolean | cdktf.IResolvable;
    set assignGeneratedIpv6CidrBlock(value: boolean | cdktf.IResolvable);
    resetAssignGeneratedIpv6CidrBlock(): void;
    get assignGeneratedIpv6CidrBlockInput(): boolean | cdktf.IResolvable | undefined;
    get cidrBlock(): string;
    get defaultNetworkAclId(): string;
    get defaultRouteTableId(): string;
    get defaultSecurityGroupId(): string;
    get dhcpOptionsId(): string;
    private _enableDnsHostnames?;
    get enableDnsHostnames(): boolean | cdktf.IResolvable;
    set enableDnsHostnames(value: boolean | cdktf.IResolvable);
    resetEnableDnsHostnames(): void;
    get enableDnsHostnamesInput(): boolean | cdktf.IResolvable | undefined;
    private _enableDnsSupport?;
    get enableDnsSupport(): boolean | cdktf.IResolvable;
    set enableDnsSupport(value: boolean | cdktf.IResolvable);
    resetEnableDnsSupport(): void;
    get enableDnsSupportInput(): boolean | cdktf.IResolvable | undefined;
    private _enableNetworkAddressUsageMetrics?;
    get enableNetworkAddressUsageMetrics(): boolean | cdktf.IResolvable;
    set enableNetworkAddressUsageMetrics(value: boolean | cdktf.IResolvable);
    resetEnableNetworkAddressUsageMetrics(): void;
    get enableNetworkAddressUsageMetricsInput(): boolean | cdktf.IResolvable | undefined;
    get existingDefaultVpc(): cdktf.IResolvable;
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
    get instanceTenancy(): string;
    get ipv6AssociationId(): string;
    private _ipv6CidrBlock?;
    get ipv6CidrBlock(): string;
    set ipv6CidrBlock(value: string);
    resetIpv6CidrBlock(): void;
    get ipv6CidrBlockInput(): string | undefined;
    private _ipv6CidrBlockNetworkBorderGroup?;
    get ipv6CidrBlockNetworkBorderGroup(): string;
    set ipv6CidrBlockNetworkBorderGroup(value: string);
    resetIpv6CidrBlockNetworkBorderGroup(): void;
    get ipv6CidrBlockNetworkBorderGroupInput(): string | undefined;
    private _ipv6IpamPoolId?;
    get ipv6IpamPoolId(): string;
    set ipv6IpamPoolId(value: string);
    resetIpv6IpamPoolId(): void;
    get ipv6IpamPoolIdInput(): string | undefined;
    private _ipv6NetmaskLength?;
    get ipv6NetmaskLength(): number;
    set ipv6NetmaskLength(value: number);
    resetIpv6NetmaskLength(): void;
    get ipv6NetmaskLengthInput(): number | undefined;
    get mainRouteTableId(): string;
    get ownerId(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
