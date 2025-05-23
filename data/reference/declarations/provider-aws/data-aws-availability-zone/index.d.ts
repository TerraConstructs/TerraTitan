/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAvailabilityZoneConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zone#all_availability_zones DataAwsAvailabilityZone#all_availability_zones}
    */
    readonly allAvailabilityZones?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zone#id DataAwsAvailabilityZone#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zone#name DataAwsAvailabilityZone#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zone#state DataAwsAvailabilityZone#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zone#zone_id DataAwsAvailabilityZone#zone_id}
    */
    readonly zoneId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zone#filter DataAwsAvailabilityZone#filter}
    */
    readonly filter?: DataAwsAvailabilityZoneFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zone#timeouts DataAwsAvailabilityZone#timeouts}
    */
    readonly timeouts?: DataAwsAvailabilityZoneTimeouts;
}
export interface DataAwsAvailabilityZoneFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zone#name DataAwsAvailabilityZone#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zone#values DataAwsAvailabilityZone#values}
    */
    readonly values: string[];
}
export declare function dataAwsAvailabilityZoneFilterToTerraform(struct?: DataAwsAvailabilityZoneFilter | cdktf.IResolvable): any;
export declare function dataAwsAvailabilityZoneFilterToHclTerraform(struct?: DataAwsAvailabilityZoneFilter | cdktf.IResolvable): any;
export declare class DataAwsAvailabilityZoneFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAvailabilityZoneFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsAvailabilityZoneFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsAvailabilityZoneFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsAvailabilityZoneFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsAvailabilityZoneFilterOutputReference;
}
export interface DataAwsAvailabilityZoneTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zone#read DataAwsAvailabilityZone#read}
    */
    readonly read?: string;
}
export declare function dataAwsAvailabilityZoneTimeoutsToTerraform(struct?: DataAwsAvailabilityZoneTimeouts | cdktf.IResolvable): any;
export declare function dataAwsAvailabilityZoneTimeoutsToHclTerraform(struct?: DataAwsAvailabilityZoneTimeouts | cdktf.IResolvable): any;
export declare class DataAwsAvailabilityZoneTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsAvailabilityZoneTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsAvailabilityZoneTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zone aws_availability_zone}
*/
export declare class DataAwsAvailabilityZone extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_availability_zone";
    /**
    * Generates CDKTF code for importing a DataAwsAvailabilityZone resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAvailabilityZone to import
    * @param importFromId The id of the existing DataAwsAvailabilityZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zone#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAvailabilityZone to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/availability_zone aws_availability_zone} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAvailabilityZoneConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsAvailabilityZoneConfig);
    private _allAvailabilityZones?;
    get allAvailabilityZones(): boolean | cdktf.IResolvable;
    set allAvailabilityZones(value: boolean | cdktf.IResolvable);
    resetAllAvailabilityZones(): void;
    get allAvailabilityZonesInput(): boolean | cdktf.IResolvable | undefined;
    get groupName(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get nameSuffix(): string;
    get networkBorderGroup(): string;
    get optInStatus(): string;
    get parentZoneId(): string;
    get parentZoneName(): string;
    get region(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string | undefined;
    get zoneType(): string;
    private _filter;
    get filter(): DataAwsAvailabilityZoneFilterList;
    putFilter(value: DataAwsAvailabilityZoneFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsAvailabilityZoneFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsAvailabilityZoneTimeoutsOutputReference;
    putTimeouts(value: DataAwsAvailabilityZoneTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsAvailabilityZoneTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
