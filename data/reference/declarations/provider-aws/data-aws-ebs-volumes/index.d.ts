/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEbsVolumesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volumes#id DataAwsEbsVolumes#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volumes#tags DataAwsEbsVolumes#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volumes#filter DataAwsEbsVolumes#filter}
    */
    readonly filter?: DataAwsEbsVolumesFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volumes#timeouts DataAwsEbsVolumes#timeouts}
    */
    readonly timeouts?: DataAwsEbsVolumesTimeouts;
}
export interface DataAwsEbsVolumesFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volumes#name DataAwsEbsVolumes#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volumes#values DataAwsEbsVolumes#values}
    */
    readonly values: string[];
}
export declare function dataAwsEbsVolumesFilterToTerraform(struct?: DataAwsEbsVolumesFilter | cdktf.IResolvable): any;
export declare function dataAwsEbsVolumesFilterToHclTerraform(struct?: DataAwsEbsVolumesFilter | cdktf.IResolvable): any;
export declare class DataAwsEbsVolumesFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEbsVolumesFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEbsVolumesFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEbsVolumesFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEbsVolumesFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEbsVolumesFilterOutputReference;
}
export interface DataAwsEbsVolumesTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volumes#read DataAwsEbsVolumes#read}
    */
    readonly read?: string;
}
export declare function dataAwsEbsVolumesTimeoutsToTerraform(struct?: DataAwsEbsVolumesTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEbsVolumesTimeoutsToHclTerraform(struct?: DataAwsEbsVolumesTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEbsVolumesTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEbsVolumesTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEbsVolumesTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volumes aws_ebs_volumes}
*/
export declare class DataAwsEbsVolumes extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ebs_volumes";
    /**
    * Generates CDKTF code for importing a DataAwsEbsVolumes resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEbsVolumes to import
    * @param importFromId The id of the existing DataAwsEbsVolumes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volumes#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEbsVolumes to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ebs_volumes aws_ebs_volumes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsVolumesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEbsVolumesConfig);
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
    get filter(): DataAwsEbsVolumesFilterList;
    putFilter(value: DataAwsEbsVolumesFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEbsVolumesFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEbsVolumesTimeoutsOutputReference;
    putTimeouts(value: DataAwsEbsVolumesTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEbsVolumesTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
