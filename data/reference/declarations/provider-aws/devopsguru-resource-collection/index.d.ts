/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DevopsguruResourceCollectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_resource_collection#type DevopsguruResourceCollection#type}
    */
    readonly type: string;
    /**
    * cloudformation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_resource_collection#cloudformation DevopsguruResourceCollection#cloudformation}
    */
    readonly cloudformation?: DevopsguruResourceCollectionCloudformation[] | cdktf.IResolvable;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_resource_collection#tags DevopsguruResourceCollection#tags}
    */
    readonly tags?: DevopsguruResourceCollectionTags[] | cdktf.IResolvable;
}
export interface DevopsguruResourceCollectionCloudformation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_resource_collection#stack_names DevopsguruResourceCollection#stack_names}
    */
    readonly stackNames: string[];
}
export declare function devopsguruResourceCollectionCloudformationToTerraform(struct?: DevopsguruResourceCollectionCloudformation | cdktf.IResolvable): any;
export declare function devopsguruResourceCollectionCloudformationToHclTerraform(struct?: DevopsguruResourceCollectionCloudformation | cdktf.IResolvable): any;
export declare class DevopsguruResourceCollectionCloudformationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DevopsguruResourceCollectionCloudformation | cdktf.IResolvable | undefined;
    set internalValue(value: DevopsguruResourceCollectionCloudformation | cdktf.IResolvable | undefined);
    private _stackNames?;
    get stackNames(): string[];
    set stackNames(value: string[]);
    get stackNamesInput(): string[] | undefined;
}
export declare class DevopsguruResourceCollectionCloudformationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DevopsguruResourceCollectionCloudformation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DevopsguruResourceCollectionCloudformationOutputReference;
}
export interface DevopsguruResourceCollectionTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_resource_collection#app_boundary_key DevopsguruResourceCollection#app_boundary_key}
    */
    readonly appBoundaryKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_resource_collection#tag_values DevopsguruResourceCollection#tag_values}
    */
    readonly tagValues: string[];
}
export declare function devopsguruResourceCollectionTagsToTerraform(struct?: DevopsguruResourceCollectionTags | cdktf.IResolvable): any;
export declare function devopsguruResourceCollectionTagsToHclTerraform(struct?: DevopsguruResourceCollectionTags | cdktf.IResolvable): any;
export declare class DevopsguruResourceCollectionTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DevopsguruResourceCollectionTags | cdktf.IResolvable | undefined;
    set internalValue(value: DevopsguruResourceCollectionTags | cdktf.IResolvable | undefined);
    private _appBoundaryKey?;
    get appBoundaryKey(): string;
    set appBoundaryKey(value: string);
    get appBoundaryKeyInput(): string | undefined;
    private _tagValues?;
    get tagValues(): string[];
    set tagValues(value: string[]);
    get tagValuesInput(): string[] | undefined;
}
export declare class DevopsguruResourceCollectionTagsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DevopsguruResourceCollectionTags[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DevopsguruResourceCollectionTagsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_resource_collection aws_devopsguru_resource_collection}
*/
export declare class DevopsguruResourceCollection extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_devopsguru_resource_collection";
    /**
    * Generates CDKTF code for importing a DevopsguruResourceCollection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DevopsguruResourceCollection to import
    * @param importFromId The id of the existing DevopsguruResourceCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_resource_collection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DevopsguruResourceCollection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_resource_collection aws_devopsguru_resource_collection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DevopsguruResourceCollectionConfig
    */
    constructor(scope: Construct, id: string, config: DevopsguruResourceCollectionConfig);
    get id(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _cloudformation;
    get cloudformation(): DevopsguruResourceCollectionCloudformationList;
    putCloudformation(value: DevopsguruResourceCollectionCloudformation[] | cdktf.IResolvable): void;
    resetCloudformation(): void;
    get cloudformationInput(): cdktf.IResolvable | DevopsguruResourceCollectionCloudformation[] | undefined;
    private _tags;
    get tags(): DevopsguruResourceCollectionTagsList;
    putTags(value: DevopsguruResourceCollectionTags[] | cdktf.IResolvable): void;
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | DevopsguruResourceCollectionTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
