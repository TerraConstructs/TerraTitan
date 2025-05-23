/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcDhcpOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_dhcp_options#domain_name VpcDhcpOptions#domain_name}
    */
    readonly domainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_dhcp_options#domain_name_servers VpcDhcpOptions#domain_name_servers}
    */
    readonly domainNameServers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_dhcp_options#id VpcDhcpOptions#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_dhcp_options#ipv6_address_preferred_lease_time VpcDhcpOptions#ipv6_address_preferred_lease_time}
    */
    readonly ipv6AddressPreferredLeaseTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_dhcp_options#netbios_name_servers VpcDhcpOptions#netbios_name_servers}
    */
    readonly netbiosNameServers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_dhcp_options#netbios_node_type VpcDhcpOptions#netbios_node_type}
    */
    readonly netbiosNodeType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_dhcp_options#ntp_servers VpcDhcpOptions#ntp_servers}
    */
    readonly ntpServers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_dhcp_options#tags VpcDhcpOptions#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_dhcp_options#tags_all VpcDhcpOptions#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_dhcp_options aws_vpc_dhcp_options}
*/
export declare class VpcDhcpOptions extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_dhcp_options";
    /**
    * Generates CDKTF code for importing a VpcDhcpOptions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcDhcpOptions to import
    * @param importFromId The id of the existing VpcDhcpOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_dhcp_options#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcDhcpOptions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_dhcp_options aws_vpc_dhcp_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcDhcpOptionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: VpcDhcpOptionsConfig);
    get arn(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    resetDomainName(): void;
    get domainNameInput(): string | undefined;
    private _domainNameServers?;
    get domainNameServers(): string[];
    set domainNameServers(value: string[]);
    resetDomainNameServers(): void;
    get domainNameServersInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ipv6AddressPreferredLeaseTime?;
    get ipv6AddressPreferredLeaseTime(): string;
    set ipv6AddressPreferredLeaseTime(value: string);
    resetIpv6AddressPreferredLeaseTime(): void;
    get ipv6AddressPreferredLeaseTimeInput(): string | undefined;
    private _netbiosNameServers?;
    get netbiosNameServers(): string[];
    set netbiosNameServers(value: string[]);
    resetNetbiosNameServers(): void;
    get netbiosNameServersInput(): string[] | undefined;
    private _netbiosNodeType?;
    get netbiosNodeType(): string;
    set netbiosNodeType(value: string);
    resetNetbiosNodeType(): void;
    get netbiosNodeTypeInput(): string | undefined;
    private _ntpServers?;
    get ntpServers(): string[];
    set ntpServers(value: string[]);
    resetNtpServers(): void;
    get ntpServersInput(): string[] | undefined;
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
