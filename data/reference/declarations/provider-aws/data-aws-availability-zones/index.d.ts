/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAvailabilityZonesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zones#all_availability_zones DataAwsAvailabilityZones#all_availability_zones}
    */
    readonly allAvailabilityZones?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zones#exclude_names DataAwsAvailabilityZones#exclude_names}
    */
    readonly excludeNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zones#exclude_zone_ids DataAwsAvailabilityZones#exclude_zone_ids}
    */
    readonly excludeZoneIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zones#id DataAwsAvailabilityZones#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zones#state DataAwsAvailabilityZones#state}
    */
    readonly state?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zones#filter DataAwsAvailabilityZones#filter}
    */
    readonly filter?: DataAwsAvailabilityZonesFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zones#timeouts DataAwsAvailabilityZones#timeouts}
    */
    readonly timeouts?: DataAwsAvailabilityZonesTimeouts;
}
export interface DataAwsAvailabilityZonesFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zones#name DataAwsAvailabilityZones#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zones#values DataAwsAvailabilityZones#values}
    */
    readonly values: string[];
}
export declare function dataAwsAvailabilityZonesFilterToTerraform(struct?: DataAwsAvailabilityZonesFilter | cdktf.IResolvable): any;
export declare function dataAwsAvailabilityZonesFilterToHclTerraform(struct?: DataAwsAvailabilityZonesFilter | cdktf.IResolvable): any;
export declare class DataAwsAvailabilityZonesFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAvailabilityZonesFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsAvailabilityZonesFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsAvailabilityZonesFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsAvailabilityZonesFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsAvailabilityZonesFilterOutputReference;
}
export interface DataAwsAvailabilityZonesTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zones#read DataAwsAvailabilityZones#read}
    */
    readonly read?: string;
}
export declare function dataAwsAvailabilityZonesTimeoutsToTerraform(struct?: DataAwsAvailabilityZonesTimeouts | cdktf.IResolvable): any;
export declare function dataAwsAvailabilityZonesTimeoutsToHclTerraform(struct?: DataAwsAvailabilityZonesTimeouts | cdktf.IResolvable): any;
export declare class DataAwsAvailabilityZonesTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsAvailabilityZonesTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsAvailabilityZonesTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zones aws_availability_zones}
*/
export declare class DataAwsAvailabilityZones extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_availability_zones";
    /**
    * Generates CDKTF code for importing a DataAwsAvailabilityZones resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAvailabilityZones to import
    * @param importFromId The id of the existing DataAwsAvailabilityZones that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zones#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAvailabilityZones to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zones aws_availability_zones} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAvailabilityZonesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsAvailabilityZonesConfig);
    private _allAvailabilityZones?;
    get allAvailabilityZones(): boolean | cdktf.IResolvable;
    set allAvailabilityZones(value: boolean | cdktf.IResolvable);
    resetAllAvailabilityZones(): void;
    get allAvailabilityZonesInput(): boolean | cdktf.IResolvable | undefined;
    private _excludeNames?;
    get excludeNames(): string[];
    set excludeNames(value: string[]);
    resetExcludeNames(): void;
    get excludeNamesInput(): string[] | undefined;
    private _excludeZoneIds?;
    get excludeZoneIds(): string[];
    set excludeZoneIds(value: string[]);
    resetExcludeZoneIds(): void;
    get excludeZoneIdsInput(): string[] | undefined;
    get groupNames(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get names(): string[];
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
    get zoneIds(): string[];
    private _filter;
    get filter(): DataAwsAvailabilityZonesFilterList;
    putFilter(value: DataAwsAvailabilityZonesFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsAvailabilityZonesFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsAvailabilityZonesTimeoutsOutputReference;
    putTimeouts(value: DataAwsAvailabilityZonesTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsAvailabilityZonesTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
