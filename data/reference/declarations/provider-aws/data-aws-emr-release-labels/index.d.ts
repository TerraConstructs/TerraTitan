/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEmrReleaseLabelsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/emr_release_labels#id DataAwsEmrReleaseLabels#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * filters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/emr_release_labels#filters DataAwsEmrReleaseLabels#filters}
    */
    readonly filters?: DataAwsEmrReleaseLabelsFilters;
}
export interface DataAwsEmrReleaseLabelsFilters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/emr_release_labels#application DataAwsEmrReleaseLabels#application}
    */
    readonly application?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/emr_release_labels#prefix DataAwsEmrReleaseLabels#prefix}
    */
    readonly prefix?: string;
}
export declare function dataAwsEmrReleaseLabelsFiltersToTerraform(struct?: DataAwsEmrReleaseLabelsFiltersOutputReference | DataAwsEmrReleaseLabelsFilters): any;
export declare function dataAwsEmrReleaseLabelsFiltersToHclTerraform(struct?: DataAwsEmrReleaseLabelsFiltersOutputReference | DataAwsEmrReleaseLabelsFilters): any;
export declare class DataAwsEmrReleaseLabelsFiltersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEmrReleaseLabelsFilters | undefined;
    set internalValue(value: DataAwsEmrReleaseLabelsFilters | undefined);
    private _application?;
    get application(): string;
    set application(value: string);
    resetApplication(): void;
    get applicationInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/emr_release_labels aws_emr_release_labels}
*/
export declare class DataAwsEmrReleaseLabels extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_emr_release_labels";
    /**
    * Generates CDKTF code for importing a DataAwsEmrReleaseLabels resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEmrReleaseLabels to import
    * @param importFromId The id of the existing DataAwsEmrReleaseLabels that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/emr_release_labels#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEmrReleaseLabels to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/emr_release_labels aws_emr_release_labels} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEmrReleaseLabelsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEmrReleaseLabelsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get releaseLabels(): string[];
    private _filters;
    get filters(): DataAwsEmrReleaseLabelsFiltersOutputReference;
    putFilters(value: DataAwsEmrReleaseLabelsFilters): void;
    resetFilters(): void;
    get filtersInput(): DataAwsEmrReleaseLabelsFilters | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
