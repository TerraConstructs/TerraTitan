/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsImagebuilderInfrastructureConfigurationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_infrastructure_configurations#id DataAwsImagebuilderInfrastructureConfigurations#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_infrastructure_configurations#filter DataAwsImagebuilderInfrastructureConfigurations#filter}
    */
    readonly filter?: DataAwsImagebuilderInfrastructureConfigurationsFilter[] | cdktf.IResolvable;
}
export interface DataAwsImagebuilderInfrastructureConfigurationsFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_infrastructure_configurations#name DataAwsImagebuilderInfrastructureConfigurations#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_infrastructure_configurations#values DataAwsImagebuilderInfrastructureConfigurations#values}
    */
    readonly values: string[];
}
export declare function dataAwsImagebuilderInfrastructureConfigurationsFilterToTerraform(struct?: DataAwsImagebuilderInfrastructureConfigurationsFilter | cdktf.IResolvable): any;
export declare function dataAwsImagebuilderInfrastructureConfigurationsFilterToHclTerraform(struct?: DataAwsImagebuilderInfrastructureConfigurationsFilter | cdktf.IResolvable): any;
export declare class DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderInfrastructureConfigurationsFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsImagebuilderInfrastructureConfigurationsFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsImagebuilderInfrastructureConfigurationsFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsImagebuilderInfrastructureConfigurationsFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_infrastructure_configurations aws_imagebuilder_infrastructure_configurations}
*/
export declare class DataAwsImagebuilderInfrastructureConfigurations extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_imagebuilder_infrastructure_configurations";
    /**
    * Generates CDKTF code for importing a DataAwsImagebuilderInfrastructureConfigurations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsImagebuilderInfrastructureConfigurations to import
    * @param importFromId The id of the existing DataAwsImagebuilderInfrastructureConfigurations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_infrastructure_configurations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsImagebuilderInfrastructureConfigurations to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_infrastructure_configurations aws_imagebuilder_infrastructure_configurations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderInfrastructureConfigurationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsImagebuilderInfrastructureConfigurationsConfig);
    get arns(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get names(): string[];
    private _filter;
    get filter(): DataAwsImagebuilderInfrastructureConfigurationsFilterList;
    putFilter(value: DataAwsImagebuilderInfrastructureConfigurationsFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsImagebuilderInfrastructureConfigurationsFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
