/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsImagebuilderDistributionConfigurationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_distribution_configurations#id DataAwsImagebuilderDistributionConfigurations#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_distribution_configurations#filter DataAwsImagebuilderDistributionConfigurations#filter}
    */
    readonly filter?: DataAwsImagebuilderDistributionConfigurationsFilter[] | cdktf.IResolvable;
}
export interface DataAwsImagebuilderDistributionConfigurationsFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_distribution_configurations#name DataAwsImagebuilderDistributionConfigurations#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_distribution_configurations#values DataAwsImagebuilderDistributionConfigurations#values}
    */
    readonly values: string[];
}
export declare function dataAwsImagebuilderDistributionConfigurationsFilterToTerraform(struct?: DataAwsImagebuilderDistributionConfigurationsFilter | cdktf.IResolvable): any;
export declare function dataAwsImagebuilderDistributionConfigurationsFilterToHclTerraform(struct?: DataAwsImagebuilderDistributionConfigurationsFilter | cdktf.IResolvable): any;
export declare class DataAwsImagebuilderDistributionConfigurationsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderDistributionConfigurationsFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsImagebuilderDistributionConfigurationsFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsImagebuilderDistributionConfigurationsFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsImagebuilderDistributionConfigurationsFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsImagebuilderDistributionConfigurationsFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_distribution_configurations aws_imagebuilder_distribution_configurations}
*/
export declare class DataAwsImagebuilderDistributionConfigurations extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_imagebuilder_distribution_configurations";
    /**
    * Generates CDKTF code for importing a DataAwsImagebuilderDistributionConfigurations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsImagebuilderDistributionConfigurations to import
    * @param importFromId The id of the existing DataAwsImagebuilderDistributionConfigurations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_distribution_configurations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsImagebuilderDistributionConfigurations to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_distribution_configurations aws_imagebuilder_distribution_configurations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderDistributionConfigurationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsImagebuilderDistributionConfigurationsConfig);
    get arns(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get names(): string[];
    private _filter;
    get filter(): DataAwsImagebuilderDistributionConfigurationsFilterList;
    putFilter(value: DataAwsImagebuilderDistributionConfigurationsFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsImagebuilderDistributionConfigurationsFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
