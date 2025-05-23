/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcrRegistryScanningConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_registry_scanning_configuration#id EcrRegistryScanningConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_registry_scanning_configuration#scan_type EcrRegistryScanningConfiguration#scan_type}
    */
    readonly scanType: string;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_registry_scanning_configuration#rule EcrRegistryScanningConfiguration#rule}
    */
    readonly rule?: EcrRegistryScanningConfigurationRule[] | cdktf.IResolvable;
}
export interface EcrRegistryScanningConfigurationRuleRepositoryFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_registry_scanning_configuration#filter EcrRegistryScanningConfiguration#filter}
    */
    readonly filter: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_registry_scanning_configuration#filter_type EcrRegistryScanningConfiguration#filter_type}
    */
    readonly filterType: string;
}
export declare function ecrRegistryScanningConfigurationRuleRepositoryFilterToTerraform(struct?: EcrRegistryScanningConfigurationRuleRepositoryFilter | cdktf.IResolvable): any;
export declare function ecrRegistryScanningConfigurationRuleRepositoryFilterToHclTerraform(struct?: EcrRegistryScanningConfigurationRuleRepositoryFilter | cdktf.IResolvable): any;
export declare class EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcrRegistryScanningConfigurationRuleRepositoryFilter | cdktf.IResolvable | undefined;
    set internalValue(value: EcrRegistryScanningConfigurationRuleRepositoryFilter | cdktf.IResolvable | undefined);
    private _filter?;
    get filter(): string;
    set filter(value: string);
    get filterInput(): string | undefined;
    private _filterType?;
    get filterType(): string;
    set filterType(value: string);
    get filterTypeInput(): string | undefined;
}
export declare class EcrRegistryScanningConfigurationRuleRepositoryFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcrRegistryScanningConfigurationRuleRepositoryFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference;
}
export interface EcrRegistryScanningConfigurationRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_registry_scanning_configuration#scan_frequency EcrRegistryScanningConfiguration#scan_frequency}
    */
    readonly scanFrequency: string;
    /**
    * repository_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_registry_scanning_configuration#repository_filter EcrRegistryScanningConfiguration#repository_filter}
    */
    readonly repositoryFilter: EcrRegistryScanningConfigurationRuleRepositoryFilter[] | cdktf.IResolvable;
}
export declare function ecrRegistryScanningConfigurationRuleToTerraform(struct?: EcrRegistryScanningConfigurationRule | cdktf.IResolvable): any;
export declare function ecrRegistryScanningConfigurationRuleToHclTerraform(struct?: EcrRegistryScanningConfigurationRule | cdktf.IResolvable): any;
export declare class EcrRegistryScanningConfigurationRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcrRegistryScanningConfigurationRule | cdktf.IResolvable | undefined;
    set internalValue(value: EcrRegistryScanningConfigurationRule | cdktf.IResolvable | undefined);
    private _scanFrequency?;
    get scanFrequency(): string;
    set scanFrequency(value: string);
    get scanFrequencyInput(): string | undefined;
    private _repositoryFilter;
    get repositoryFilter(): EcrRegistryScanningConfigurationRuleRepositoryFilterList;
    putRepositoryFilter(value: EcrRegistryScanningConfigurationRuleRepositoryFilter[] | cdktf.IResolvable): void;
    get repositoryFilterInput(): cdktf.IResolvable | EcrRegistryScanningConfigurationRuleRepositoryFilter[] | undefined;
}
export declare class EcrRegistryScanningConfigurationRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcrRegistryScanningConfigurationRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcrRegistryScanningConfigurationRuleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_registry_scanning_configuration aws_ecr_registry_scanning_configuration}
*/
export declare class EcrRegistryScanningConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ecr_registry_scanning_configuration";
    /**
    * Generates CDKTF code for importing a EcrRegistryScanningConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EcrRegistryScanningConfiguration to import
    * @param importFromId The id of the existing EcrRegistryScanningConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_registry_scanning_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EcrRegistryScanningConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_registry_scanning_configuration aws_ecr_registry_scanning_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrRegistryScanningConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: EcrRegistryScanningConfigurationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get registryId(): string;
    private _scanType?;
    get scanType(): string;
    set scanType(value: string);
    get scanTypeInput(): string | undefined;
    private _rule;
    get rule(): EcrRegistryScanningConfigurationRuleList;
    putRule(value: EcrRegistryScanningConfigurationRule[] | cdktf.IResolvable): void;
    resetRule(): void;
    get ruleInput(): cdktf.IResolvable | EcrRegistryScanningConfigurationRule[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
