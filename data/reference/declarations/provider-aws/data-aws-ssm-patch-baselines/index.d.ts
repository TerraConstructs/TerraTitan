/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSsmPatchBaselinesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ssm_patch_baselines#default_baselines DataAwsSsmPatchBaselines#default_baselines}
    */
    readonly defaultBaselines?: boolean | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ssm_patch_baselines#filter DataAwsSsmPatchBaselines#filter}
    */
    readonly filter?: DataAwsSsmPatchBaselinesFilter[] | cdktf.IResolvable;
}
export interface DataAwsSsmPatchBaselinesBaselineIdentities {
}
export declare function dataAwsSsmPatchBaselinesBaselineIdentitiesToTerraform(struct?: DataAwsSsmPatchBaselinesBaselineIdentities): any;
export declare function dataAwsSsmPatchBaselinesBaselineIdentitiesToHclTerraform(struct?: DataAwsSsmPatchBaselinesBaselineIdentities): any;
export declare class DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmPatchBaselinesBaselineIdentities | undefined;
    set internalValue(value: DataAwsSsmPatchBaselinesBaselineIdentities | undefined);
    get baselineDescription(): string;
    get baselineId(): string;
    get baselineName(): string;
    get defaultBaseline(): cdktf.IResolvable;
    get operatingSystem(): string;
}
export declare class DataAwsSsmPatchBaselinesBaselineIdentitiesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference;
}
export interface DataAwsSsmPatchBaselinesFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ssm_patch_baselines#key DataAwsSsmPatchBaselines#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ssm_patch_baselines#values DataAwsSsmPatchBaselines#values}
    */
    readonly values: string[];
}
export declare function dataAwsSsmPatchBaselinesFilterToTerraform(struct?: DataAwsSsmPatchBaselinesFilter | cdktf.IResolvable): any;
export declare function dataAwsSsmPatchBaselinesFilterToHclTerraform(struct?: DataAwsSsmPatchBaselinesFilter | cdktf.IResolvable): any;
export declare class DataAwsSsmPatchBaselinesFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmPatchBaselinesFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsSsmPatchBaselinesFilter | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsSsmPatchBaselinesFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsSsmPatchBaselinesFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsSsmPatchBaselinesFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ssm_patch_baselines aws_ssm_patch_baselines}
*/
export declare class DataAwsSsmPatchBaselines extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ssm_patch_baselines";
    /**
    * Generates CDKTF code for importing a DataAwsSsmPatchBaselines resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSsmPatchBaselines to import
    * @param importFromId The id of the existing DataAwsSsmPatchBaselines that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ssm_patch_baselines#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSsmPatchBaselines to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ssm_patch_baselines aws_ssm_patch_baselines} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmPatchBaselinesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsSsmPatchBaselinesConfig);
    private _baselineIdentities;
    get baselineIdentities(): DataAwsSsmPatchBaselinesBaselineIdentitiesList;
    private _defaultBaselines?;
    get defaultBaselines(): boolean | cdktf.IResolvable;
    set defaultBaselines(value: boolean | cdktf.IResolvable);
    resetDefaultBaselines(): void;
    get defaultBaselinesInput(): boolean | cdktf.IResolvable | undefined;
    private _filter;
    get filter(): DataAwsSsmPatchBaselinesFilterList;
    putFilter(value: DataAwsSsmPatchBaselinesFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsSsmPatchBaselinesFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
