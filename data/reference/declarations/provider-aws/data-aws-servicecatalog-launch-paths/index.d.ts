/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsServicecatalogLaunchPathsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_launch_paths#accept_language DataAwsServicecatalogLaunchPaths#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_launch_paths#id DataAwsServicecatalogLaunchPaths#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_launch_paths#product_id DataAwsServicecatalogLaunchPaths#product_id}
    */
    readonly productId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_launch_paths#timeouts DataAwsServicecatalogLaunchPaths#timeouts}
    */
    readonly timeouts?: DataAwsServicecatalogLaunchPathsTimeouts;
}
export interface DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries {
}
export declare function dataAwsServicecatalogLaunchPathsSummariesConstraintSummariesToTerraform(struct?: DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries): any;
export declare function dataAwsServicecatalogLaunchPathsSummariesConstraintSummariesToHclTerraform(struct?: DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries): any;
export declare class DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries | undefined;
    set internalValue(value: DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries | undefined);
    get description(): string;
    get type(): string;
}
export declare class DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference;
}
export interface DataAwsServicecatalogLaunchPathsSummaries {
}
export declare function dataAwsServicecatalogLaunchPathsSummariesToTerraform(struct?: DataAwsServicecatalogLaunchPathsSummaries): any;
export declare function dataAwsServicecatalogLaunchPathsSummariesToHclTerraform(struct?: DataAwsServicecatalogLaunchPathsSummaries): any;
export declare class DataAwsServicecatalogLaunchPathsSummariesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsServicecatalogLaunchPathsSummaries | undefined;
    set internalValue(value: DataAwsServicecatalogLaunchPathsSummaries | undefined);
    private _constraintSummaries;
    get constraintSummaries(): DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList;
    get name(): string;
    get pathId(): string;
    private _tags;
    get tags(): cdktf.StringMap;
}
export declare class DataAwsServicecatalogLaunchPathsSummariesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsServicecatalogLaunchPathsSummariesOutputReference;
}
export interface DataAwsServicecatalogLaunchPathsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_launch_paths#read DataAwsServicecatalogLaunchPaths#read}
    */
    readonly read?: string;
}
export declare function dataAwsServicecatalogLaunchPathsTimeoutsToTerraform(struct?: DataAwsServicecatalogLaunchPathsTimeouts | cdktf.IResolvable): any;
export declare function dataAwsServicecatalogLaunchPathsTimeoutsToHclTerraform(struct?: DataAwsServicecatalogLaunchPathsTimeouts | cdktf.IResolvable): any;
export declare class DataAwsServicecatalogLaunchPathsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsServicecatalogLaunchPathsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsServicecatalogLaunchPathsTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_launch_paths aws_servicecatalog_launch_paths}
*/
export declare class DataAwsServicecatalogLaunchPaths extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_servicecatalog_launch_paths";
    /**
    * Generates CDKTF code for importing a DataAwsServicecatalogLaunchPaths resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsServicecatalogLaunchPaths to import
    * @param importFromId The id of the existing DataAwsServicecatalogLaunchPaths that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_launch_paths#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsServicecatalogLaunchPaths to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_launch_paths aws_servicecatalog_launch_paths} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogLaunchPathsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsServicecatalogLaunchPathsConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _productId?;
    get productId(): string;
    set productId(value: string);
    get productIdInput(): string | undefined;
    private _summaries;
    get summaries(): DataAwsServicecatalogLaunchPathsSummariesList;
    private _timeouts;
    get timeouts(): DataAwsServicecatalogLaunchPathsTimeoutsOutputReference;
    putTimeouts(value: DataAwsServicecatalogLaunchPathsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsServicecatalogLaunchPathsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
