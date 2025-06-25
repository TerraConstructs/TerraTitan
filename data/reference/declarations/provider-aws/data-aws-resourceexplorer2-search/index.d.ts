/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsResourceexplorer2SearchConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/resourceexplorer2_search#query_string DataAwsResourceexplorer2Search#query_string}
    */
    readonly queryString: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/resourceexplorer2_search#view_arn DataAwsResourceexplorer2Search#view_arn}
    */
    readonly viewArn?: string;
}
export interface DataAwsResourceexplorer2SearchResourceCount {
}
export declare function dataAwsResourceexplorer2SearchResourceCountToTerraform(struct?: DataAwsResourceexplorer2SearchResourceCount): any;
export declare function dataAwsResourceexplorer2SearchResourceCountToHclTerraform(struct?: DataAwsResourceexplorer2SearchResourceCount): any;
export declare class DataAwsResourceexplorer2SearchResourceCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsResourceexplorer2SearchResourceCount | undefined;
    set internalValue(value: DataAwsResourceexplorer2SearchResourceCount | undefined);
    get complete(): cdktf.IResolvable;
    get totalResources(): number;
}
export declare class DataAwsResourceexplorer2SearchResourceCountList extends cdktf.ComplexList {
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
    get(index: number): DataAwsResourceexplorer2SearchResourceCountOutputReference;
}
export interface DataAwsResourceexplorer2SearchResourcesProperties {
}
export declare function dataAwsResourceexplorer2SearchResourcesPropertiesToTerraform(struct?: DataAwsResourceexplorer2SearchResourcesProperties): any;
export declare function dataAwsResourceexplorer2SearchResourcesPropertiesToHclTerraform(struct?: DataAwsResourceexplorer2SearchResourcesProperties): any;
export declare class DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsResourceexplorer2SearchResourcesProperties | undefined;
    set internalValue(value: DataAwsResourceexplorer2SearchResourcesProperties | undefined);
    get data(): string;
    get lastReportedAt(): string;
    get name(): string;
}
export declare class DataAwsResourceexplorer2SearchResourcesPropertiesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference;
}
export interface DataAwsResourceexplorer2SearchResources {
}
export declare function dataAwsResourceexplorer2SearchResourcesToTerraform(struct?: DataAwsResourceexplorer2SearchResources): any;
export declare function dataAwsResourceexplorer2SearchResourcesToHclTerraform(struct?: DataAwsResourceexplorer2SearchResources): any;
export declare class DataAwsResourceexplorer2SearchResourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsResourceexplorer2SearchResources | undefined;
    set internalValue(value: DataAwsResourceexplorer2SearchResources | undefined);
    get arn(): string;
    get lastReportedAt(): string;
    get owningAccountId(): string;
    private _properties;
    get properties(): DataAwsResourceexplorer2SearchResourcesPropertiesList;
    get region(): string;
    get resourceType(): string;
    get service(): string;
}
export declare class DataAwsResourceexplorer2SearchResourcesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsResourceexplorer2SearchResourcesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/resourceexplorer2_search aws_resourceexplorer2_search}
*/
export declare class DataAwsResourceexplorer2Search extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_resourceexplorer2_search";
    /**
    * Generates CDKTF code for importing a DataAwsResourceexplorer2Search resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsResourceexplorer2Search to import
    * @param importFromId The id of the existing DataAwsResourceexplorer2Search that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/resourceexplorer2_search#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsResourceexplorer2Search to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/resourceexplorer2_search aws_resourceexplorer2_search} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsResourceexplorer2SearchConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsResourceexplorer2SearchConfig);
    get id(): string;
    private _queryString?;
    get queryString(): string;
    set queryString(value: string);
    get queryStringInput(): string | undefined;
    private _resourceCount;
    get resourceCount(): DataAwsResourceexplorer2SearchResourceCountList;
    private _resources;
    get resources(): DataAwsResourceexplorer2SearchResourcesList;
    private _viewArn?;
    get viewArn(): string;
    set viewArn(value: string);
    resetViewArn(): void;
    get viewArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
