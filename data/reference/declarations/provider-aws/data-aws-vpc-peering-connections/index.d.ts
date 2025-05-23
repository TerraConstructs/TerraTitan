/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpcPeeringConnectionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connections#id DataAwsVpcPeeringConnections#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connections#tags DataAwsVpcPeeringConnections#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connections#filter DataAwsVpcPeeringConnections#filter}
    */
    readonly filter?: DataAwsVpcPeeringConnectionsFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connections#timeouts DataAwsVpcPeeringConnections#timeouts}
    */
    readonly timeouts?: DataAwsVpcPeeringConnectionsTimeouts;
}
export interface DataAwsVpcPeeringConnectionsFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connections#name DataAwsVpcPeeringConnections#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connections#values DataAwsVpcPeeringConnections#values}
    */
    readonly values: string[];
}
export declare function dataAwsVpcPeeringConnectionsFilterToTerraform(struct?: DataAwsVpcPeeringConnectionsFilter | cdktf.IResolvable): any;
export declare function dataAwsVpcPeeringConnectionsFilterToHclTerraform(struct?: DataAwsVpcPeeringConnectionsFilter | cdktf.IResolvable): any;
export declare class DataAwsVpcPeeringConnectionsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcPeeringConnectionsFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpcPeeringConnectionsFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsVpcPeeringConnectionsFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsVpcPeeringConnectionsFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsVpcPeeringConnectionsFilterOutputReference;
}
export interface DataAwsVpcPeeringConnectionsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connections#read DataAwsVpcPeeringConnections#read}
    */
    readonly read?: string;
}
export declare function dataAwsVpcPeeringConnectionsTimeoutsToTerraform(struct?: DataAwsVpcPeeringConnectionsTimeouts | cdktf.IResolvable): any;
export declare function dataAwsVpcPeeringConnectionsTimeoutsToHclTerraform(struct?: DataAwsVpcPeeringConnectionsTimeouts | cdktf.IResolvable): any;
export declare class DataAwsVpcPeeringConnectionsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsVpcPeeringConnectionsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpcPeeringConnectionsTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connections aws_vpc_peering_connections}
*/
export declare class DataAwsVpcPeeringConnections extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_vpc_peering_connections";
    /**
    * Generates CDKTF code for importing a DataAwsVpcPeeringConnections resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsVpcPeeringConnections to import
    * @param importFromId The id of the existing DataAwsVpcPeeringConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connections#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsVpcPeeringConnections to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_peering_connections aws_vpc_peering_connections} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcPeeringConnectionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsVpcPeeringConnectionsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ids(): string[];
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
    get filter(): DataAwsVpcPeeringConnectionsFilterList;
    putFilter(value: DataAwsVpcPeeringConnectionsFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsVpcPeeringConnectionsFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsVpcPeeringConnectionsTimeoutsOutputReference;
    putTimeouts(value: DataAwsVpcPeeringConnectionsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsVpcPeeringConnectionsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
