/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpcIpamsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/vpc_ipams#ipam_ids DataAwsVpcIpams#ipam_ids}
    */
    readonly ipamIds?: string[];
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/vpc_ipams#filter DataAwsVpcIpams#filter}
    */
    readonly filter?: DataAwsVpcIpamsFilter[] | cdktf.IResolvable;
}
export interface DataAwsVpcIpamsIpamsOperatingRegions {
}
export declare function dataAwsVpcIpamsIpamsOperatingRegionsToTerraform(struct?: DataAwsVpcIpamsIpamsOperatingRegions): any;
export declare function dataAwsVpcIpamsIpamsOperatingRegionsToHclTerraform(struct?: DataAwsVpcIpamsIpamsOperatingRegions): any;
export declare class DataAwsVpcIpamsIpamsOperatingRegionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcIpamsIpamsOperatingRegions | undefined;
    set internalValue(value: DataAwsVpcIpamsIpamsOperatingRegions | undefined);
    get regionName(): string;
}
export declare class DataAwsVpcIpamsIpamsOperatingRegionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsVpcIpamsIpamsOperatingRegionsOutputReference;
}
export interface DataAwsVpcIpamsIpams {
}
export declare function dataAwsVpcIpamsIpamsToTerraform(struct?: DataAwsVpcIpamsIpams): any;
export declare function dataAwsVpcIpamsIpamsToHclTerraform(struct?: DataAwsVpcIpamsIpams): any;
export declare class DataAwsVpcIpamsIpamsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcIpamsIpams | undefined;
    set internalValue(value: DataAwsVpcIpamsIpams | undefined);
    get arn(): string;
    get defaultResourceDiscoveryAssociationId(): string;
    get defaultResourceDiscoveryId(): string;
    get description(): string;
    get enablePrivateGua(): cdktf.IResolvable;
    get id(): string;
    get ipamRegion(): string;
    private _operatingRegions;
    get operatingRegions(): DataAwsVpcIpamsIpamsOperatingRegionsList;
    get ownerId(): string;
    get privateDefaultScopeId(): string;
    get publicDefaultScopeId(): string;
    get resourceDiscoveryAssociationCount(): number;
    get scopeCount(): number;
    get state(): string;
    get stateMessage(): string;
    get tier(): string;
}
export declare class DataAwsVpcIpamsIpamsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsVpcIpamsIpamsOutputReference;
}
export interface DataAwsVpcIpamsFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/vpc_ipams#name DataAwsVpcIpams#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/vpc_ipams#values DataAwsVpcIpams#values}
    */
    readonly values: string[];
}
export declare function dataAwsVpcIpamsFilterToTerraform(struct?: DataAwsVpcIpamsFilter | cdktf.IResolvable): any;
export declare function dataAwsVpcIpamsFilterToHclTerraform(struct?: DataAwsVpcIpamsFilter | cdktf.IResolvable): any;
export declare class DataAwsVpcIpamsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcIpamsFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpcIpamsFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsVpcIpamsFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsVpcIpamsFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsVpcIpamsFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/vpc_ipams aws_vpc_ipams}
*/
export declare class DataAwsVpcIpams extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_vpc_ipams";
    /**
    * Generates CDKTF code for importing a DataAwsVpcIpams resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsVpcIpams to import
    * @param importFromId The id of the existing DataAwsVpcIpams that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/vpc_ipams#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsVpcIpams to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/vpc_ipams aws_vpc_ipams} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcIpamsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsVpcIpamsConfig);
    private _ipamIds?;
    get ipamIds(): string[];
    set ipamIds(value: string[]);
    resetIpamIds(): void;
    get ipamIdsInput(): string[] | undefined;
    private _ipams;
    get ipams(): DataAwsVpcIpamsIpamsList;
    private _filter;
    get filter(): DataAwsVpcIpamsFilterList;
    putFilter(value: DataAwsVpcIpamsFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsVpcIpamsFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
