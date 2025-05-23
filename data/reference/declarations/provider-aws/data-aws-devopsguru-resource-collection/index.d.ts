/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDevopsguruResourceCollectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/devopsguru_resource_collection#type DataAwsDevopsguruResourceCollection#type}
    */
    readonly type: string;
    /**
    * cloudformation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/devopsguru_resource_collection#cloudformation DataAwsDevopsguruResourceCollection#cloudformation}
    */
    readonly cloudformation?: DataAwsDevopsguruResourceCollectionCloudformation[] | cdktf.IResolvable;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/devopsguru_resource_collection#tags DataAwsDevopsguruResourceCollection#tags}
    */
    readonly tags?: DataAwsDevopsguruResourceCollectionTags[] | cdktf.IResolvable;
}
export interface DataAwsDevopsguruResourceCollectionCloudformation {
}
export declare function dataAwsDevopsguruResourceCollectionCloudformationToTerraform(struct?: DataAwsDevopsguruResourceCollectionCloudformation | cdktf.IResolvable): any;
export declare function dataAwsDevopsguruResourceCollectionCloudformationToHclTerraform(struct?: DataAwsDevopsguruResourceCollectionCloudformation | cdktf.IResolvable): any;
export declare class DataAwsDevopsguruResourceCollectionCloudformationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDevopsguruResourceCollectionCloudformation | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsDevopsguruResourceCollectionCloudformation | cdktf.IResolvable | undefined);
    get stackNames(): string[];
}
export declare class DataAwsDevopsguruResourceCollectionCloudformationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsDevopsguruResourceCollectionCloudformation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsDevopsguruResourceCollectionCloudformationOutputReference;
}
export interface DataAwsDevopsguruResourceCollectionTags {
}
export declare function dataAwsDevopsguruResourceCollectionTagsToTerraform(struct?: DataAwsDevopsguruResourceCollectionTags | cdktf.IResolvable): any;
export declare function dataAwsDevopsguruResourceCollectionTagsToHclTerraform(struct?: DataAwsDevopsguruResourceCollectionTags | cdktf.IResolvable): any;
export declare class DataAwsDevopsguruResourceCollectionTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDevopsguruResourceCollectionTags | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsDevopsguruResourceCollectionTags | cdktf.IResolvable | undefined);
    get appBoundaryKey(): string;
    get tagValues(): string[];
}
export declare class DataAwsDevopsguruResourceCollectionTagsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsDevopsguruResourceCollectionTags[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsDevopsguruResourceCollectionTagsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/devopsguru_resource_collection aws_devopsguru_resource_collection}
*/
export declare class DataAwsDevopsguruResourceCollection extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_devopsguru_resource_collection";
    /**
    * Generates CDKTF code for importing a DataAwsDevopsguruResourceCollection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsDevopsguruResourceCollection to import
    * @param importFromId The id of the existing DataAwsDevopsguruResourceCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/devopsguru_resource_collection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsDevopsguruResourceCollection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/devopsguru_resource_collection aws_devopsguru_resource_collection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDevopsguruResourceCollectionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsDevopsguruResourceCollectionConfig);
    get id(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _cloudformation;
    get cloudformation(): DataAwsDevopsguruResourceCollectionCloudformationList;
    putCloudformation(value: DataAwsDevopsguruResourceCollectionCloudformation[] | cdktf.IResolvable): void;
    resetCloudformation(): void;
    get cloudformationInput(): cdktf.IResolvable | DataAwsDevopsguruResourceCollectionCloudformation[] | undefined;
    private _tags;
    get tags(): DataAwsDevopsguruResourceCollectionTagsList;
    putTags(value: DataAwsDevopsguruResourceCollectionTags[] | cdktf.IResolvable): void;
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | DataAwsDevopsguruResourceCollectionTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
