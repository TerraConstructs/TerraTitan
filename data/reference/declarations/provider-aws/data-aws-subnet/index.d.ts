/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSubnetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/subnet#availability_zone DataAwsSubnet#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/subnet#availability_zone_id DataAwsSubnet#availability_zone_id}
    */
    readonly availabilityZoneId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/subnet#cidr_block DataAwsSubnet#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/subnet#default_for_az DataAwsSubnet#default_for_az}
    */
    readonly defaultForAz?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/subnet#id DataAwsSubnet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/subnet#ipv6_cidr_block DataAwsSubnet#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/subnet#state DataAwsSubnet#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/subnet#tags DataAwsSubnet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/subnet#vpc_id DataAwsSubnet#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/subnet#filter DataAwsSubnet#filter}
    */
    readonly filter?: DataAwsSubnetFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/subnet#timeouts DataAwsSubnet#timeouts}
    */
    readonly timeouts?: DataAwsSubnetTimeouts;
}
export interface DataAwsSubnetFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/subnet#name DataAwsSubnet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/subnet#values DataAwsSubnet#values}
    */
    readonly values: string[];
}
export declare function dataAwsSubnetFilterToTerraform(struct?: DataAwsSubnetFilter | cdktf.IResolvable): any;
export declare function dataAwsSubnetFilterToHclTerraform(struct?: DataAwsSubnetFilter | cdktf.IResolvable): any;
export declare class DataAwsSubnetFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSubnetFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsSubnetFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsSubnetFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsSubnetFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsSubnetFilterOutputReference;
}
export interface DataAwsSubnetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/subnet#read DataAwsSubnet#read}
    */
    readonly read?: string;
}
export declare function dataAwsSubnetTimeoutsToTerraform(struct?: DataAwsSubnetTimeouts | cdktf.IResolvable): any;
export declare function dataAwsSubnetTimeoutsToHclTerraform(struct?: DataAwsSubnetTimeouts | cdktf.IResolvable): any;
export declare class DataAwsSubnetTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsSubnetTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsSubnetTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/subnet aws_subnet}
*/
export declare class DataAwsSubnet extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_subnet";
    /**
    * Generates CDKTF code for importing a DataAwsSubnet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSubnet to import
    * @param importFromId The id of the existing DataAwsSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/subnet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSubnet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/subnet aws_subnet} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSubnetConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsSubnetConfig);
    get arn(): string;
    get assignIpv6AddressOnCreation(): cdktf.IResolvable;
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
    get availableIpAddressCount(): number;
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    resetCidrBlock(): void;
    get cidrBlockInput(): string | undefined;
    get customerOwnedIpv4Pool(): string;
    private _defaultForAz?;
    get defaultForAz(): boolean | cdktf.IResolvable;
    set defaultForAz(value: boolean | cdktf.IResolvable);
    resetDefaultForAz(): void;
    get defaultForAzInput(): boolean | cdktf.IResolvable | undefined;
    get enableDns64(): cdktf.IResolvable;
    get enableLniAtDeviceIndex(): number;
    get enableResourceNameDnsARecordOnLaunch(): cdktf.IResolvable;
    get enableResourceNameDnsAaaaRecordOnLaunch(): cdktf.IResolvable;
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
    get ipv6Native(): cdktf.IResolvable;
    get mapCustomerOwnedIpOnLaunch(): cdktf.IResolvable;
    get mapPublicIpOnLaunch(): cdktf.IResolvable;
    get outpostArn(): string;
    get ownerId(): string;
    get privateDnsHostnameTypeOnLaunch(): string;
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    private _filter;
    get filter(): DataAwsSubnetFilterList;
    putFilter(value: DataAwsSubnetFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsSubnetFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsSubnetTimeoutsOutputReference;
    putTimeouts(value: DataAwsSubnetTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsSubnetTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
