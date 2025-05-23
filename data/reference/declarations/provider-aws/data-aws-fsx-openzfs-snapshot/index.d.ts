/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsFsxOpenzfsSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_openzfs_snapshot#id DataAwsFsxOpenzfsSnapshot#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_openzfs_snapshot#most_recent DataAwsFsxOpenzfsSnapshot#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_openzfs_snapshot#snapshot_ids DataAwsFsxOpenzfsSnapshot#snapshot_ids}
    */
    readonly snapshotIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_openzfs_snapshot#tags DataAwsFsxOpenzfsSnapshot#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_openzfs_snapshot#filter DataAwsFsxOpenzfsSnapshot#filter}
    */
    readonly filter?: DataAwsFsxOpenzfsSnapshotFilter[] | cdktf.IResolvable;
}
export interface DataAwsFsxOpenzfsSnapshotFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_openzfs_snapshot#values DataAwsFsxOpenzfsSnapshot#values}
    */
    readonly values: string[];
}
export declare function dataAwsFsxOpenzfsSnapshotFilterToTerraform(struct?: DataAwsFsxOpenzfsSnapshotFilter | cdktf.IResolvable): any;
export declare function dataAwsFsxOpenzfsSnapshotFilterToHclTerraform(struct?: DataAwsFsxOpenzfsSnapshotFilter | cdktf.IResolvable): any;
export declare class DataAwsFsxOpenzfsSnapshotFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsFsxOpenzfsSnapshotFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsFsxOpenzfsSnapshotFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsFsxOpenzfsSnapshotFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsFsxOpenzfsSnapshotFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsFsxOpenzfsSnapshotFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_openzfs_snapshot aws_fsx_openzfs_snapshot}
*/
export declare class DataAwsFsxOpenzfsSnapshot extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_fsx_openzfs_snapshot";
    /**
    * Generates CDKTF code for importing a DataAwsFsxOpenzfsSnapshot resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsFsxOpenzfsSnapshot to import
    * @param importFromId The id of the existing DataAwsFsxOpenzfsSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_openzfs_snapshot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsFsxOpenzfsSnapshot to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_openzfs_snapshot aws_fsx_openzfs_snapshot} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsFsxOpenzfsSnapshotConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsFsxOpenzfsSnapshotConfig);
    get arn(): string;
    get creationTime(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _mostRecent?;
    get mostRecent(): boolean | cdktf.IResolvable;
    set mostRecent(value: boolean | cdktf.IResolvable);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get snapshotId(): string;
    private _snapshotIds?;
    get snapshotIds(): string[];
    set snapshotIds(value: string[]);
    resetSnapshotIds(): void;
    get snapshotIdsInput(): string[] | undefined;
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
    get volumeId(): string;
    private _filter;
    get filter(): DataAwsFsxOpenzfsSnapshotFilterList;
    putFilter(value: DataAwsFsxOpenzfsSnapshotFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsFsxOpenzfsSnapshotFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
