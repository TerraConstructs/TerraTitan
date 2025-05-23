/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEbsVolumeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volume#id DataAwsEbsVolume#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volume#most_recent DataAwsEbsVolume#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volume#tags DataAwsEbsVolume#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volume#filter DataAwsEbsVolume#filter}
    */
    readonly filter?: DataAwsEbsVolumeFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volume#timeouts DataAwsEbsVolume#timeouts}
    */
    readonly timeouts?: DataAwsEbsVolumeTimeouts;
}
export interface DataAwsEbsVolumeFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volume#name DataAwsEbsVolume#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volume#values DataAwsEbsVolume#values}
    */
    readonly values: string[];
}
export declare function dataAwsEbsVolumeFilterToTerraform(struct?: DataAwsEbsVolumeFilter | cdktf.IResolvable): any;
export declare function dataAwsEbsVolumeFilterToHclTerraform(struct?: DataAwsEbsVolumeFilter | cdktf.IResolvable): any;
export declare class DataAwsEbsVolumeFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEbsVolumeFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEbsVolumeFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEbsVolumeFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEbsVolumeFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEbsVolumeFilterOutputReference;
}
export interface DataAwsEbsVolumeTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volume#read DataAwsEbsVolume#read}
    */
    readonly read?: string;
}
export declare function dataAwsEbsVolumeTimeoutsToTerraform(struct?: DataAwsEbsVolumeTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEbsVolumeTimeoutsToHclTerraform(struct?: DataAwsEbsVolumeTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEbsVolumeTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEbsVolumeTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEbsVolumeTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volume aws_ebs_volume}
*/
export declare class DataAwsEbsVolume extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ebs_volume";
    /**
    * Generates CDKTF code for importing a DataAwsEbsVolume resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEbsVolume to import
    * @param importFromId The id of the existing DataAwsEbsVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volume#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEbsVolume to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volume aws_ebs_volume} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsVolumeConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEbsVolumeConfig);
    get arn(): string;
    get availabilityZone(): string;
    get encrypted(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get iops(): number;
    get kmsKeyId(): string;
    private _mostRecent?;
    get mostRecent(): boolean | cdktf.IResolvable;
    set mostRecent(value: boolean | cdktf.IResolvable);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | cdktf.IResolvable | undefined;
    get multiAttachEnabled(): cdktf.IResolvable;
    get outpostArn(): string;
    get size(): number;
    get snapshotId(): string;
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
    get throughput(): number;
    get volumeId(): string;
    get volumeType(): string;
    private _filter;
    get filter(): DataAwsEbsVolumeFilterList;
    putFilter(value: DataAwsEbsVolumeFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEbsVolumeFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEbsVolumeTimeoutsOutputReference;
    putTimeouts(value: DataAwsEbsVolumeTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEbsVolumeTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
