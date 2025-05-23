/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Resourceexplorer2ViewConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_view#default_view Resourceexplorer2View#default_view}
    */
    readonly defaultView?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_view#name Resourceexplorer2View#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_view#scope Resourceexplorer2View#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_view#tags Resourceexplorer2View#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_view#filters Resourceexplorer2View#filters}
    */
    readonly filters?: Resourceexplorer2ViewFilters[] | cdktf.IResolvable;
    /**
    * included_property block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_view#included_property Resourceexplorer2View#included_property}
    */
    readonly includedProperty?: Resourceexplorer2ViewIncludedProperty[] | cdktf.IResolvable;
}
export interface Resourceexplorer2ViewFilters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_view#filter_string Resourceexplorer2View#filter_string}
    */
    readonly filterString: string;
}
export declare function resourceexplorer2ViewFiltersToTerraform(struct?: Resourceexplorer2ViewFilters | cdktf.IResolvable): any;
export declare function resourceexplorer2ViewFiltersToHclTerraform(struct?: Resourceexplorer2ViewFilters | cdktf.IResolvable): any;
export declare class Resourceexplorer2ViewFiltersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Resourceexplorer2ViewFilters | cdktf.IResolvable | undefined;
    set internalValue(value: Resourceexplorer2ViewFilters | cdktf.IResolvable | undefined);
    private _filterString?;
    get filterString(): string;
    set filterString(value: string);
    get filterStringInput(): string | undefined;
}
export declare class Resourceexplorer2ViewFiltersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Resourceexplorer2ViewFilters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Resourceexplorer2ViewFiltersOutputReference;
}
export interface Resourceexplorer2ViewIncludedProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_view#name Resourceexplorer2View#name}
    */
    readonly name: string;
}
export declare function resourceexplorer2ViewIncludedPropertyToTerraform(struct?: Resourceexplorer2ViewIncludedProperty | cdktf.IResolvable): any;
export declare function resourceexplorer2ViewIncludedPropertyToHclTerraform(struct?: Resourceexplorer2ViewIncludedProperty | cdktf.IResolvable): any;
export declare class Resourceexplorer2ViewIncludedPropertyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Resourceexplorer2ViewIncludedProperty | cdktf.IResolvable | undefined;
    set internalValue(value: Resourceexplorer2ViewIncludedProperty | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export declare class Resourceexplorer2ViewIncludedPropertyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Resourceexplorer2ViewIncludedProperty[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Resourceexplorer2ViewIncludedPropertyOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_view aws_resourceexplorer2_view}
*/
export declare class Resourceexplorer2View extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_resourceexplorer2_view";
    /**
    * Generates CDKTF code for importing a Resourceexplorer2View resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Resourceexplorer2View to import
    * @param importFromId The id of the existing Resourceexplorer2View that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_view#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Resourceexplorer2View to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourceexplorer2_view aws_resourceexplorer2_view} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Resourceexplorer2ViewConfig
    */
    constructor(scope: Construct, id: string, config: Resourceexplorer2ViewConfig);
    get arn(): string;
    private _defaultView?;
    get defaultView(): boolean | cdktf.IResolvable;
    set defaultView(value: boolean | cdktf.IResolvable);
    resetDefaultView(): void;
    get defaultViewInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    resetScope(): void;
    get scopeInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _filters;
    get filters(): Resourceexplorer2ViewFiltersList;
    putFilters(value: Resourceexplorer2ViewFilters[] | cdktf.IResolvable): void;
    resetFilters(): void;
    get filtersInput(): cdktf.IResolvable | Resourceexplorer2ViewFilters[] | undefined;
    private _includedProperty;
    get includedProperty(): Resourceexplorer2ViewIncludedPropertyList;
    putIncludedProperty(value: Resourceexplorer2ViewIncludedProperty[] | cdktf.IResolvable): void;
    resetIncludedProperty(): void;
    get includedPropertyInput(): cdktf.IResolvable | Resourceexplorer2ViewIncludedProperty[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
