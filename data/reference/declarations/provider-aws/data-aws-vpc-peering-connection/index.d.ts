/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpcPeeringConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connection#cidr_block DataAwsVpcPeeringConnection#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connection#id DataAwsVpcPeeringConnection#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connection#owner_id DataAwsVpcPeeringConnection#owner_id}
    */
    readonly ownerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connection#peer_cidr_block DataAwsVpcPeeringConnection#peer_cidr_block}
    */
    readonly peerCidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connection#peer_owner_id DataAwsVpcPeeringConnection#peer_owner_id}
    */
    readonly peerOwnerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connection#peer_region DataAwsVpcPeeringConnection#peer_region}
    */
    readonly peerRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connection#peer_vpc_id DataAwsVpcPeeringConnection#peer_vpc_id}
    */
    readonly peerVpcId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connection#region DataAwsVpcPeeringConnection#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connection#status DataAwsVpcPeeringConnection#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connection#tags DataAwsVpcPeeringConnection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connection#vpc_id DataAwsVpcPeeringConnection#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connection#filter DataAwsVpcPeeringConnection#filter}
    */
    readonly filter?: DataAwsVpcPeeringConnectionFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connection#timeouts DataAwsVpcPeeringConnection#timeouts}
    */
    readonly timeouts?: DataAwsVpcPeeringConnectionTimeouts;
}
export interface DataAwsVpcPeeringConnectionCidrBlockSet {
}
export declare function dataAwsVpcPeeringConnectionCidrBlockSetToTerraform(struct?: DataAwsVpcPeeringConnectionCidrBlockSet): any;
export declare function dataAwsVpcPeeringConnectionCidrBlockSetToHclTerraform(struct?: DataAwsVpcPeeringConnectionCidrBlockSet): any;
export declare class DataAwsVpcPeeringConnectionCidrBlockSetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcPeeringConnectionCidrBlockSet | undefined;
    set internalValue(value: DataAwsVpcPeeringConnectionCidrBlockSet | undefined);
    get cidrBlock(): string;
}
export declare class DataAwsVpcPeeringConnectionCidrBlockSetList extends cdktf.ComplexList {
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
    get(index: number): DataAwsVpcPeeringConnectionCidrBlockSetOutputReference;
}
export interface DataAwsVpcPeeringConnectionIpv6CidrBlockSet {
}
export declare function dataAwsVpcPeeringConnectionIpv6CidrBlockSetToTerraform(struct?: DataAwsVpcPeeringConnectionIpv6CidrBlockSet): any;
export declare function dataAwsVpcPeeringConnectionIpv6CidrBlockSetToHclTerraform(struct?: DataAwsVpcPeeringConnectionIpv6CidrBlockSet): any;
export declare class DataAwsVpcPeeringConnectionIpv6CidrBlockSetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcPeeringConnectionIpv6CidrBlockSet | undefined;
    set internalValue(value: DataAwsVpcPeeringConnectionIpv6CidrBlockSet | undefined);
    get ipv6CidrBlock(): string;
}
export declare class DataAwsVpcPeeringConnectionIpv6CidrBlockSetList extends cdktf.ComplexList {
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
    get(index: number): DataAwsVpcPeeringConnectionIpv6CidrBlockSetOutputReference;
}
export interface DataAwsVpcPeeringConnectionPeerCidrBlockSet {
}
export declare function dataAwsVpcPeeringConnectionPeerCidrBlockSetToTerraform(struct?: DataAwsVpcPeeringConnectionPeerCidrBlockSet): any;
export declare function dataAwsVpcPeeringConnectionPeerCidrBlockSetToHclTerraform(struct?: DataAwsVpcPeeringConnectionPeerCidrBlockSet): any;
export declare class DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcPeeringConnectionPeerCidrBlockSet | undefined;
    set internalValue(value: DataAwsVpcPeeringConnectionPeerCidrBlockSet | undefined);
    get cidrBlock(): string;
}
export declare class DataAwsVpcPeeringConnectionPeerCidrBlockSetList extends cdktf.ComplexList {
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
    get(index: number): DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference;
}
export interface DataAwsVpcPeeringConnectionPeerIpv6CidrBlockSet {
}
export declare function dataAwsVpcPeeringConnectionPeerIpv6CidrBlockSetToTerraform(struct?: DataAwsVpcPeeringConnectionPeerIpv6CidrBlockSet): any;
export declare function dataAwsVpcPeeringConnectionPeerIpv6CidrBlockSetToHclTerraform(struct?: DataAwsVpcPeeringConnectionPeerIpv6CidrBlockSet): any;
export declare class DataAwsVpcPeeringConnectionPeerIpv6CidrBlockSetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcPeeringConnectionPeerIpv6CidrBlockSet | undefined;
    set internalValue(value: DataAwsVpcPeeringConnectionPeerIpv6CidrBlockSet | undefined);
    get ipv6CidrBlock(): string;
}
export declare class DataAwsVpcPeeringConnectionPeerIpv6CidrBlockSetList extends cdktf.ComplexList {
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
    get(index: number): DataAwsVpcPeeringConnectionPeerIpv6CidrBlockSetOutputReference;
}
export interface DataAwsVpcPeeringConnectionFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connection#name DataAwsVpcPeeringConnection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connection#values DataAwsVpcPeeringConnection#values}
    */
    readonly values: string[];
}
export declare function dataAwsVpcPeeringConnectionFilterToTerraform(struct?: DataAwsVpcPeeringConnectionFilter | cdktf.IResolvable): any;
export declare function dataAwsVpcPeeringConnectionFilterToHclTerraform(struct?: DataAwsVpcPeeringConnectionFilter | cdktf.IResolvable): any;
export declare class DataAwsVpcPeeringConnectionFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcPeeringConnectionFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpcPeeringConnectionFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsVpcPeeringConnectionFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsVpcPeeringConnectionFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsVpcPeeringConnectionFilterOutputReference;
}
export interface DataAwsVpcPeeringConnectionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connection#read DataAwsVpcPeeringConnection#read}
    */
    readonly read?: string;
}
export declare function dataAwsVpcPeeringConnectionTimeoutsToTerraform(struct?: DataAwsVpcPeeringConnectionTimeouts | cdktf.IResolvable): any;
export declare function dataAwsVpcPeeringConnectionTimeoutsToHclTerraform(struct?: DataAwsVpcPeeringConnectionTimeouts | cdktf.IResolvable): any;
export declare class DataAwsVpcPeeringConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsVpcPeeringConnectionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpcPeeringConnectionTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connection aws_vpc_peering_connection}
*/
export declare class DataAwsVpcPeeringConnection extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_vpc_peering_connection";
    /**
    * Generates CDKTF code for importing a DataAwsVpcPeeringConnection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsVpcPeeringConnection to import
    * @param importFromId The id of the existing DataAwsVpcPeeringConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsVpcPeeringConnection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connection aws_vpc_peering_connection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcPeeringConnectionConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsVpcPeeringConnectionConfig);
    private _accepter;
    get accepter(): cdktf.BooleanMap;
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    resetCidrBlock(): void;
    get cidrBlockInput(): string | undefined;
    private _cidrBlockSet;
    get cidrBlockSet(): DataAwsVpcPeeringConnectionCidrBlockSetList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ipv6CidrBlockSet;
    get ipv6CidrBlockSet(): DataAwsVpcPeeringConnectionIpv6CidrBlockSetList;
    private _ownerId?;
    get ownerId(): string;
    set ownerId(value: string);
    resetOwnerId(): void;
    get ownerIdInput(): string | undefined;
    private _peerCidrBlock?;
    get peerCidrBlock(): string;
    set peerCidrBlock(value: string);
    resetPeerCidrBlock(): void;
    get peerCidrBlockInput(): string | undefined;
    private _peerCidrBlockSet;
    get peerCidrBlockSet(): DataAwsVpcPeeringConnectionPeerCidrBlockSetList;
    private _peerIpv6CidrBlockSet;
    get peerIpv6CidrBlockSet(): DataAwsVpcPeeringConnectionPeerIpv6CidrBlockSetList;
    private _peerOwnerId?;
    get peerOwnerId(): string;
    set peerOwnerId(value: string);
    resetPeerOwnerId(): void;
    get peerOwnerIdInput(): string | undefined;
    private _peerRegion?;
    get peerRegion(): string;
    set peerRegion(value: string);
    resetPeerRegion(): void;
    get peerRegionInput(): string | undefined;
    private _peerVpcId?;
    get peerVpcId(): string;
    set peerVpcId(value: string);
    resetPeerVpcId(): void;
    get peerVpcIdInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _requester;
    get requester(): cdktf.BooleanMap;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
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
    get filter(): DataAwsVpcPeeringConnectionFilterList;
    putFilter(value: DataAwsVpcPeeringConnectionFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsVpcPeeringConnectionFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsVpcPeeringConnectionTimeoutsOutputReference;
    putTimeouts(value: DataAwsVpcPeeringConnectionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsVpcPeeringConnectionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
