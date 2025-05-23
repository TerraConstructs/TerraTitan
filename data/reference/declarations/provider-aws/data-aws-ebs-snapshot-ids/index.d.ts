/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEbsSnapshotIdsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot_ids#id DataAwsEbsSnapshotIds#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot_ids#owners DataAwsEbsSnapshotIds#owners}
    */
    readonly owners?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot_ids#restorable_by_user_ids DataAwsEbsSnapshotIds#restorable_by_user_ids}
    */
    readonly restorableByUserIds?: string[];
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot_ids#filter DataAwsEbsSnapshotIds#filter}
    */
    readonly filter?: DataAwsEbsSnapshotIdsFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot_ids#timeouts DataAwsEbsSnapshotIds#timeouts}
    */
    readonly timeouts?: DataAwsEbsSnapshotIdsTimeouts;
}
export interface DataAwsEbsSnapshotIdsFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot_ids#name DataAwsEbsSnapshotIds#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot_ids#values DataAwsEbsSnapshotIds#values}
    */
    readonly values: string[];
}
export declare function dataAwsEbsSnapshotIdsFilterToTerraform(struct?: DataAwsEbsSnapshotIdsFilter | cdktf.IResolvable): any;
export declare function dataAwsEbsSnapshotIdsFilterToHclTerraform(struct?: DataAwsEbsSnapshotIdsFilter | cdktf.IResolvable): any;
export declare class DataAwsEbsSnapshotIdsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEbsSnapshotIdsFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEbsSnapshotIdsFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEbsSnapshotIdsFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEbsSnapshotIdsFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEbsSnapshotIdsFilterOutputReference;
}
export interface DataAwsEbsSnapshotIdsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot_ids#read DataAwsEbsSnapshotIds#read}
    */
    readonly read?: string;
}
export declare function dataAwsEbsSnapshotIdsTimeoutsToTerraform(struct?: DataAwsEbsSnapshotIdsTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEbsSnapshotIdsTimeoutsToHclTerraform(struct?: DataAwsEbsSnapshotIdsTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEbsSnapshotIdsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEbsSnapshotIdsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEbsSnapshotIdsTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot_ids aws_ebs_snapshot_ids}
*/
export declare class DataAwsEbsSnapshotIds extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ebs_snapshot_ids";
    /**
    * Generates CDKTF code for importing a DataAwsEbsSnapshotIds resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEbsSnapshotIds to import
    * @param importFromId The id of the existing DataAwsEbsSnapshotIds that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot_ids#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEbsSnapshotIds to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot_ids aws_ebs_snapshot_ids} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsSnapshotIdsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEbsSnapshotIdsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ids(): string[];
    private _owners?;
    get owners(): string[];
    set owners(value: string[]);
    resetOwners(): void;
    get ownersInput(): string[] | undefined;
    private _restorableByUserIds?;
    get restorableByUserIds(): string[];
    set restorableByUserIds(value: string[]);
    resetRestorableByUserIds(): void;
    get restorableByUserIdsInput(): string[] | undefined;
    private _filter;
    get filter(): DataAwsEbsSnapshotIdsFilterList;
    putFilter(value: DataAwsEbsSnapshotIdsFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEbsSnapshotIdsFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEbsSnapshotIdsTimeoutsOutputReference;
    putTimeouts(value: DataAwsEbsSnapshotIdsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEbsSnapshotIdsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
