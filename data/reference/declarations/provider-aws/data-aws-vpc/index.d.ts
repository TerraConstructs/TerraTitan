/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpcConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc#cidr_block DataAwsVpc#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc#default DataAwsVpc#default}
    */
    readonly default?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc#dhcp_options_id DataAwsVpc#dhcp_options_id}
    */
    readonly dhcpOptionsId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc#id DataAwsVpc#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc#state DataAwsVpc#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc#tags DataAwsVpc#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc#filter DataAwsVpc#filter}
    */
    readonly filter?: DataAwsVpcFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc#timeouts DataAwsVpc#timeouts}
    */
    readonly timeouts?: DataAwsVpcTimeouts;
}
export interface DataAwsVpcCidrBlockAssociations {
}
export declare function dataAwsVpcCidrBlockAssociationsToTerraform(struct?: DataAwsVpcCidrBlockAssociations): any;
export declare function dataAwsVpcCidrBlockAssociationsToHclTerraform(struct?: DataAwsVpcCidrBlockAssociations): any;
export declare class DataAwsVpcCidrBlockAssociationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcCidrBlockAssociations | undefined;
    set internalValue(value: DataAwsVpcCidrBlockAssociations | undefined);
    get associationId(): string;
    get cidrBlock(): string;
    get state(): string;
}
export declare class DataAwsVpcCidrBlockAssociationsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsVpcCidrBlockAssociationsOutputReference;
}
export interface DataAwsVpcFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc#name DataAwsVpc#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc#values DataAwsVpc#values}
    */
    readonly values: string[];
}
export declare function dataAwsVpcFilterToTerraform(struct?: DataAwsVpcFilter | cdktf.IResolvable): any;
export declare function dataAwsVpcFilterToHclTerraform(struct?: DataAwsVpcFilter | cdktf.IResolvable): any;
export declare class DataAwsVpcFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpcFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsVpcFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsVpcFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsVpcFilterOutputReference;
}
export interface DataAwsVpcTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc#read DataAwsVpc#read}
    */
    readonly read?: string;
}
export declare function dataAwsVpcTimeoutsToTerraform(struct?: DataAwsVpcTimeouts | cdktf.IResolvable): any;
export declare function dataAwsVpcTimeoutsToHclTerraform(struct?: DataAwsVpcTimeouts | cdktf.IResolvable): any;
export declare class DataAwsVpcTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsVpcTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpcTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc aws_vpc}
*/
export declare class DataAwsVpc extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_vpc";
    /**
    * Generates CDKTF code for importing a DataAwsVpc resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsVpc to import
    * @param importFromId The id of the existing DataAwsVpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsVpc to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc aws_vpc} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsVpcConfig);
    get arn(): string;
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    resetCidrBlock(): void;
    get cidrBlockInput(): string | undefined;
    private _cidrBlockAssociations;
    get cidrBlockAssociations(): DataAwsVpcCidrBlockAssociationsList;
    private _default?;
    get default(): boolean | cdktf.IResolvable;
    set default(value: boolean | cdktf.IResolvable);
    resetDefault(): void;
    get defaultInput(): boolean | cdktf.IResolvable | undefined;
    private _dhcpOptionsId?;
    get dhcpOptionsId(): string;
    set dhcpOptionsId(value: string);
    resetDhcpOptionsId(): void;
    get dhcpOptionsIdInput(): string | undefined;
    get enableDnsHostnames(): cdktf.IResolvable;
    get enableDnsSupport(): cdktf.IResolvable;
    get enableNetworkAddressUsageMetrics(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get instanceTenancy(): string;
    get ipv6AssociationId(): string;
    get ipv6CidrBlock(): string;
    get mainRouteTableId(): string;
    get ownerId(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
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
    get filter(): DataAwsVpcFilterList;
    putFilter(value: DataAwsVpcFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsVpcFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsVpcTimeoutsOutputReference;
    putTimeouts(value: DataAwsVpcTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsVpcTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
