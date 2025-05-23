/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpcDhcpOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_dhcp_options#dhcp_options_id DataAwsVpcDhcpOptions#dhcp_options_id}
    */
    readonly dhcpOptionsId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_dhcp_options#id DataAwsVpcDhcpOptions#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_dhcp_options#tags DataAwsVpcDhcpOptions#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_dhcp_options#filter DataAwsVpcDhcpOptions#filter}
    */
    readonly filter?: DataAwsVpcDhcpOptionsFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_dhcp_options#timeouts DataAwsVpcDhcpOptions#timeouts}
    */
    readonly timeouts?: DataAwsVpcDhcpOptionsTimeouts;
}
export interface DataAwsVpcDhcpOptionsFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_dhcp_options#name DataAwsVpcDhcpOptions#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_dhcp_options#values DataAwsVpcDhcpOptions#values}
    */
    readonly values: string[];
}
export declare function dataAwsVpcDhcpOptionsFilterToTerraform(struct?: DataAwsVpcDhcpOptionsFilter | cdktf.IResolvable): any;
export declare function dataAwsVpcDhcpOptionsFilterToHclTerraform(struct?: DataAwsVpcDhcpOptionsFilter | cdktf.IResolvable): any;
export declare class DataAwsVpcDhcpOptionsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcDhcpOptionsFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpcDhcpOptionsFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsVpcDhcpOptionsFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsVpcDhcpOptionsFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsVpcDhcpOptionsFilterOutputReference;
}
export interface DataAwsVpcDhcpOptionsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_dhcp_options#read DataAwsVpcDhcpOptions#read}
    */
    readonly read?: string;
}
export declare function dataAwsVpcDhcpOptionsTimeoutsToTerraform(struct?: DataAwsVpcDhcpOptionsTimeouts | cdktf.IResolvable): any;
export declare function dataAwsVpcDhcpOptionsTimeoutsToHclTerraform(struct?: DataAwsVpcDhcpOptionsTimeouts | cdktf.IResolvable): any;
export declare class DataAwsVpcDhcpOptionsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsVpcDhcpOptionsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpcDhcpOptionsTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_dhcp_options aws_vpc_dhcp_options}
*/
export declare class DataAwsVpcDhcpOptions extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_vpc_dhcp_options";
    /**
    * Generates CDKTF code for importing a DataAwsVpcDhcpOptions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsVpcDhcpOptions to import
    * @param importFromId The id of the existing DataAwsVpcDhcpOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_dhcp_options#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsVpcDhcpOptions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_dhcp_options aws_vpc_dhcp_options} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcDhcpOptionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsVpcDhcpOptionsConfig);
    get arn(): string;
    private _dhcpOptionsId?;
    get dhcpOptionsId(): string;
    set dhcpOptionsId(value: string);
    resetDhcpOptionsId(): void;
    get dhcpOptionsIdInput(): string | undefined;
    get domainName(): string;
    get domainNameServers(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ipv6AddressPreferredLeaseTime(): string;
    get netbiosNameServers(): string[];
    get netbiosNodeType(): string;
    get ntpServers(): string[];
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
    private _filter;
    get filter(): DataAwsVpcDhcpOptionsFilterList;
    putFilter(value: DataAwsVpcDhcpOptionsFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsVpcDhcpOptionsFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsVpcDhcpOptionsTimeoutsOutputReference;
    putTimeouts(value: DataAwsVpcDhcpOptionsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsVpcDhcpOptionsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
