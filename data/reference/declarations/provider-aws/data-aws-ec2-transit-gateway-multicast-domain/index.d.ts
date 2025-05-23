/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2TransitGatewayMulticastDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_multicast_domain#id DataAwsEc2TransitGatewayMulticastDomain#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_multicast_domain#tags DataAwsEc2TransitGatewayMulticastDomain#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_multicast_domain#transit_gateway_multicast_domain_id DataAwsEc2TransitGatewayMulticastDomain#transit_gateway_multicast_domain_id}
    */
    readonly transitGatewayMulticastDomainId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_multicast_domain#filter DataAwsEc2TransitGatewayMulticastDomain#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayMulticastDomainFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_multicast_domain#timeouts DataAwsEc2TransitGatewayMulticastDomain#timeouts}
    */
    readonly timeouts?: DataAwsEc2TransitGatewayMulticastDomainTimeouts;
}
export interface DataAwsEc2TransitGatewayMulticastDomainAssociations {
}
export declare function dataAwsEc2TransitGatewayMulticastDomainAssociationsToTerraform(struct?: DataAwsEc2TransitGatewayMulticastDomainAssociations): any;
export declare function dataAwsEc2TransitGatewayMulticastDomainAssociationsToHclTerraform(struct?: DataAwsEc2TransitGatewayMulticastDomainAssociations): any;
export declare class DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2TransitGatewayMulticastDomainAssociations | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayMulticastDomainAssociations | undefined);
    get subnetId(): string;
    get transitGatewayAttachmentId(): string;
}
export declare class DataAwsEc2TransitGatewayMulticastDomainAssociationsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference;
}
export interface DataAwsEc2TransitGatewayMulticastDomainMembers {
}
export declare function dataAwsEc2TransitGatewayMulticastDomainMembersToTerraform(struct?: DataAwsEc2TransitGatewayMulticastDomainMembers): any;
export declare function dataAwsEc2TransitGatewayMulticastDomainMembersToHclTerraform(struct?: DataAwsEc2TransitGatewayMulticastDomainMembers): any;
export declare class DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2TransitGatewayMulticastDomainMembers | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayMulticastDomainMembers | undefined);
    get groupIpAddress(): string;
    get networkInterfaceId(): string;
}
export declare class DataAwsEc2TransitGatewayMulticastDomainMembersList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference;
}
export interface DataAwsEc2TransitGatewayMulticastDomainSources {
}
export declare function dataAwsEc2TransitGatewayMulticastDomainSourcesToTerraform(struct?: DataAwsEc2TransitGatewayMulticastDomainSources): any;
export declare function dataAwsEc2TransitGatewayMulticastDomainSourcesToHclTerraform(struct?: DataAwsEc2TransitGatewayMulticastDomainSources): any;
export declare class DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2TransitGatewayMulticastDomainSources | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayMulticastDomainSources | undefined);
    get groupIpAddress(): string;
    get networkInterfaceId(): string;
}
export declare class DataAwsEc2TransitGatewayMulticastDomainSourcesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference;
}
export interface DataAwsEc2TransitGatewayMulticastDomainFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_multicast_domain#name DataAwsEc2TransitGatewayMulticastDomain#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_multicast_domain#values DataAwsEc2TransitGatewayMulticastDomain#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2TransitGatewayMulticastDomainFilterToTerraform(struct?: DataAwsEc2TransitGatewayMulticastDomainFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayMulticastDomainFilterToHclTerraform(struct?: DataAwsEc2TransitGatewayMulticastDomainFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2TransitGatewayMulticastDomainFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayMulticastDomainFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2TransitGatewayMulticastDomainFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2TransitGatewayMulticastDomainFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference;
}
export interface DataAwsEc2TransitGatewayMulticastDomainTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_multicast_domain#read DataAwsEc2TransitGatewayMulticastDomain#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2TransitGatewayMulticastDomainTimeoutsToTerraform(struct?: DataAwsEc2TransitGatewayMulticastDomainTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayMulticastDomainTimeoutsToHclTerraform(struct?: DataAwsEc2TransitGatewayMulticastDomainTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2TransitGatewayMulticastDomainTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayMulticastDomainTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_multicast_domain aws_ec2_transit_gateway_multicast_domain}
*/
export declare class DataAwsEc2TransitGatewayMulticastDomain extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_transit_gateway_multicast_domain";
    /**
    * Generates CDKTF code for importing a DataAwsEc2TransitGatewayMulticastDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2TransitGatewayMulticastDomain to import
    * @param importFromId The id of the existing DataAwsEc2TransitGatewayMulticastDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_multicast_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2TransitGatewayMulticastDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_multicast_domain aws_ec2_transit_gateway_multicast_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayMulticastDomainConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayMulticastDomainConfig);
    get arn(): string;
    private _associations;
    get associations(): DataAwsEc2TransitGatewayMulticastDomainAssociationsList;
    get autoAcceptSharedAssociations(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get igmpv2Support(): string;
    private _members;
    get members(): DataAwsEc2TransitGatewayMulticastDomainMembersList;
    get ownerId(): string;
    private _sources;
    get sources(): DataAwsEc2TransitGatewayMulticastDomainSourcesList;
    get state(): string;
    get staticSourcesSupport(): string;
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
    get transitGatewayAttachmentId(): string;
    get transitGatewayId(): string;
    private _transitGatewayMulticastDomainId?;
    get transitGatewayMulticastDomainId(): string;
    set transitGatewayMulticastDomainId(value: string);
    resetTransitGatewayMulticastDomainId(): void;
    get transitGatewayMulticastDomainIdInput(): string | undefined;
    private _filter;
    get filter(): DataAwsEc2TransitGatewayMulticastDomainFilterList;
    putFilter(value: DataAwsEc2TransitGatewayMulticastDomainFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayMulticastDomainFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2TransitGatewayMulticastDomainTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayMulticastDomainTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
