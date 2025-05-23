/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsNetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_interface#id DataAwsNetworkInterface#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_interface#tags DataAwsNetworkInterface#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_interface#filter DataAwsNetworkInterface#filter}
    */
    readonly filter?: DataAwsNetworkInterfaceFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_interface#timeouts DataAwsNetworkInterface#timeouts}
    */
    readonly timeouts?: DataAwsNetworkInterfaceTimeouts;
}
export interface DataAwsNetworkInterfaceAssociation {
}
export declare function dataAwsNetworkInterfaceAssociationToTerraform(struct?: DataAwsNetworkInterfaceAssociation): any;
export declare function dataAwsNetworkInterfaceAssociationToHclTerraform(struct?: DataAwsNetworkInterfaceAssociation): any;
export declare class DataAwsNetworkInterfaceAssociationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkInterfaceAssociation | undefined;
    set internalValue(value: DataAwsNetworkInterfaceAssociation | undefined);
    get allocationId(): string;
    get associationId(): string;
    get carrierIp(): string;
    get customerOwnedIp(): string;
    get ipOwnerId(): string;
    get publicDnsName(): string;
    get publicIp(): string;
}
export declare class DataAwsNetworkInterfaceAssociationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkInterfaceAssociationOutputReference;
}
export interface DataAwsNetworkInterfaceAttachment {
}
export declare function dataAwsNetworkInterfaceAttachmentToTerraform(struct?: DataAwsNetworkInterfaceAttachment): any;
export declare function dataAwsNetworkInterfaceAttachmentToHclTerraform(struct?: DataAwsNetworkInterfaceAttachment): any;
export declare class DataAwsNetworkInterfaceAttachmentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkInterfaceAttachment | undefined;
    set internalValue(value: DataAwsNetworkInterfaceAttachment | undefined);
    get attachmentId(): string;
    get deviceIndex(): number;
    get instanceId(): string;
    get instanceOwnerId(): string;
}
export declare class DataAwsNetworkInterfaceAttachmentList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkInterfaceAttachmentOutputReference;
}
export interface DataAwsNetworkInterfaceFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_interface#name DataAwsNetworkInterface#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_interface#values DataAwsNetworkInterface#values}
    */
    readonly values: string[];
}
export declare function dataAwsNetworkInterfaceFilterToTerraform(struct?: DataAwsNetworkInterfaceFilter | cdktf.IResolvable): any;
export declare function dataAwsNetworkInterfaceFilterToHclTerraform(struct?: DataAwsNetworkInterfaceFilter | cdktf.IResolvable): any;
export declare class DataAwsNetworkInterfaceFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkInterfaceFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsNetworkInterfaceFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsNetworkInterfaceFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsNetworkInterfaceFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsNetworkInterfaceFilterOutputReference;
}
export interface DataAwsNetworkInterfaceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_interface#read DataAwsNetworkInterface#read}
    */
    readonly read?: string;
}
export declare function dataAwsNetworkInterfaceTimeoutsToTerraform(struct?: DataAwsNetworkInterfaceTimeouts | cdktf.IResolvable): any;
export declare function dataAwsNetworkInterfaceTimeoutsToHclTerraform(struct?: DataAwsNetworkInterfaceTimeouts | cdktf.IResolvable): any;
export declare class DataAwsNetworkInterfaceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsNetworkInterfaceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsNetworkInterfaceTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_interface aws_network_interface}
*/
export declare class DataAwsNetworkInterface extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_network_interface";
    /**
    * Generates CDKTF code for importing a DataAwsNetworkInterface resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsNetworkInterface to import
    * @param importFromId The id of the existing DataAwsNetworkInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_interface#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsNetworkInterface to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_interface aws_network_interface} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNetworkInterfaceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsNetworkInterfaceConfig);
    get arn(): string;
    private _association;
    get association(): DataAwsNetworkInterfaceAssociationList;
    private _attachment;
    get attachment(): DataAwsNetworkInterfaceAttachmentList;
    get availabilityZone(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get interfaceType(): string;
    get ipv6Addresses(): string[];
    get macAddress(): string;
    get outpostArn(): string;
    get ownerId(): string;
    get privateDnsName(): string;
    get privateIp(): string;
    get privateIps(): string[];
    get requesterId(): string;
    get securityGroups(): string[];
    get subnetId(): string;
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
    get vpcId(): string;
    private _filter;
    get filter(): DataAwsNetworkInterfaceFilterList;
    putFilter(value: DataAwsNetworkInterfaceFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsNetworkInterfaceFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsNetworkInterfaceTimeoutsOutputReference;
    putTimeouts(value: DataAwsNetworkInterfaceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsNetworkInterfaceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
