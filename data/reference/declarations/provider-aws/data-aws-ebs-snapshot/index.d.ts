/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEbsSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot#id DataAwsEbsSnapshot#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot#most_recent DataAwsEbsSnapshot#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot#owners DataAwsEbsSnapshot#owners}
    */
    readonly owners?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot#restorable_by_user_ids DataAwsEbsSnapshot#restorable_by_user_ids}
    */
    readonly restorableByUserIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot#snapshot_ids DataAwsEbsSnapshot#snapshot_ids}
    */
    readonly snapshotIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot#tags DataAwsEbsSnapshot#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot#filter DataAwsEbsSnapshot#filter}
    */
    readonly filter?: DataAwsEbsSnapshotFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot#timeouts DataAwsEbsSnapshot#timeouts}
    */
    readonly timeouts?: DataAwsEbsSnapshotTimeouts;
}
export interface DataAwsEbsSnapshotFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot#name DataAwsEbsSnapshot#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot#values DataAwsEbsSnapshot#values}
    */
    readonly values: string[];
}
export declare function dataAwsEbsSnapshotFilterToTerraform(struct?: DataAwsEbsSnapshotFilter | cdktf.IResolvable): any;
export declare function dataAwsEbsSnapshotFilterToHclTerraform(struct?: DataAwsEbsSnapshotFilter | cdktf.IResolvable): any;
export declare class DataAwsEbsSnapshotFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEbsSnapshotFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEbsSnapshotFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEbsSnapshotFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEbsSnapshotFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEbsSnapshotFilterOutputReference;
}
export interface DataAwsEbsSnapshotTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot#read DataAwsEbsSnapshot#read}
    */
    readonly read?: string;
}
export declare function dataAwsEbsSnapshotTimeoutsToTerraform(struct?: DataAwsEbsSnapshotTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEbsSnapshotTimeoutsToHclTerraform(struct?: DataAwsEbsSnapshotTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEbsSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEbsSnapshotTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEbsSnapshotTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot aws_ebs_snapshot}
*/
export declare class DataAwsEbsSnapshot extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ebs_snapshot";
    /**
    * Generates CDKTF code for importing a DataAwsEbsSnapshot resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEbsSnapshot to import
    * @param importFromId The id of the existing DataAwsEbsSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEbsSnapshot to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_snapshot aws_ebs_snapshot} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsSnapshotConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEbsSnapshotConfig);
    get arn(): string;
    get dataEncryptionKeyId(): string;
    get description(): string;
    get encrypted(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get kmsKeyId(): string;
    private _mostRecent?;
    get mostRecent(): boolean | cdktf.IResolvable;
    set mostRecent(value: boolean | cdktf.IResolvable);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | cdktf.IResolvable | undefined;
    get outpostArn(): string;
    get ownerAlias(): string;
    get ownerId(): string;
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
    get snapshotId(): string;
    private _snapshotIds?;
    get snapshotIds(): string[];
    set snapshotIds(value: string[]);
    resetSnapshotIds(): void;
    get snapshotIdsInput(): string[] | undefined;
    get startTime(): string;
    get state(): string;
    get storageTier(): string;
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
    get volumeSize(): number;
    private _filter;
    get filter(): DataAwsEbsSnapshotFilterList;
    putFilter(value: DataAwsEbsSnapshotFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEbsSnapshotFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEbsSnapshotTimeoutsOutputReference;
    putTimeouts(value: DataAwsEbsSnapshotTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEbsSnapshotTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
