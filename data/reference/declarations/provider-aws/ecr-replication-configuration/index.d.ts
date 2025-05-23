/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcrReplicationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_replication_configuration#id EcrReplicationConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * replication_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_replication_configuration#replication_configuration EcrReplicationConfiguration#replication_configuration}
    */
    readonly replicationConfiguration?: EcrReplicationConfigurationReplicationConfiguration;
}
export interface EcrReplicationConfigurationReplicationConfigurationRuleDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_replication_configuration#region EcrReplicationConfiguration#region}
    */
    readonly region: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_replication_configuration#registry_id EcrReplicationConfiguration#registry_id}
    */
    readonly registryId: string;
}
export declare function ecrReplicationConfigurationReplicationConfigurationRuleDestinationToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRuleDestination | cdktf.IResolvable): any;
export declare function ecrReplicationConfigurationReplicationConfigurationRuleDestinationToHclTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRuleDestination | cdktf.IResolvable): any;
export declare class EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcrReplicationConfigurationReplicationConfigurationRuleDestination | cdktf.IResolvable | undefined;
    set internalValue(value: EcrReplicationConfigurationReplicationConfigurationRuleDestination | cdktf.IResolvable | undefined);
    private _region?;
    get region(): string;
    set region(value: string);
    get regionInput(): string | undefined;
    private _registryId?;
    get registryId(): string;
    set registryId(value: string);
    get registryIdInput(): string | undefined;
}
export declare class EcrReplicationConfigurationReplicationConfigurationRuleDestinationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcrReplicationConfigurationReplicationConfigurationRuleDestination[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference;
}
export interface EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_replication_configuration#filter EcrReplicationConfiguration#filter}
    */
    readonly filter: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_replication_configuration#filter_type EcrReplicationConfiguration#filter_type}
    */
    readonly filterType: string;
}
export declare function ecrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter | cdktf.IResolvable): any;
export declare function ecrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterToHclTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter | cdktf.IResolvable): any;
export declare class EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter | cdktf.IResolvable | undefined;
    set internalValue(value: EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter | cdktf.IResolvable | undefined);
    private _filter?;
    get filter(): string;
    set filter(value: string);
    get filterInput(): string | undefined;
    private _filterType?;
    get filterType(): string;
    set filterType(value: string);
    get filterTypeInput(): string | undefined;
}
export declare class EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference;
}
export interface EcrReplicationConfigurationReplicationConfigurationRule {
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_replication_configuration#destination EcrReplicationConfiguration#destination}
    */
    readonly destination: EcrReplicationConfigurationReplicationConfigurationRuleDestination[] | cdktf.IResolvable;
    /**
    * repository_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_replication_configuration#repository_filter EcrReplicationConfiguration#repository_filter}
    */
    readonly repositoryFilter?: EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter[] | cdktf.IResolvable;
}
export declare function ecrReplicationConfigurationReplicationConfigurationRuleToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRule | cdktf.IResolvable): any;
export declare function ecrReplicationConfigurationReplicationConfigurationRuleToHclTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRule | cdktf.IResolvable): any;
export declare class EcrReplicationConfigurationReplicationConfigurationRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcrReplicationConfigurationReplicationConfigurationRule | cdktf.IResolvable | undefined;
    set internalValue(value: EcrReplicationConfigurationReplicationConfigurationRule | cdktf.IResolvable | undefined);
    private _destination;
    get destination(): EcrReplicationConfigurationReplicationConfigurationRuleDestinationList;
    putDestination(value: EcrReplicationConfigurationReplicationConfigurationRuleDestination[] | cdktf.IResolvable): void;
    get destinationInput(): cdktf.IResolvable | EcrReplicationConfigurationReplicationConfigurationRuleDestination[] | undefined;
    private _repositoryFilter;
    get repositoryFilter(): EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList;
    putRepositoryFilter(value: EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter[] | cdktf.IResolvable): void;
    resetRepositoryFilter(): void;
    get repositoryFilterInput(): cdktf.IResolvable | EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter[] | undefined;
}
export declare class EcrReplicationConfigurationReplicationConfigurationRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcrReplicationConfigurationReplicationConfigurationRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcrReplicationConfigurationReplicationConfigurationRuleOutputReference;
}
export interface EcrReplicationConfigurationReplicationConfiguration {
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_replication_configuration#rule EcrReplicationConfiguration#rule}
    */
    readonly rule: EcrReplicationConfigurationReplicationConfigurationRule[] | cdktf.IResolvable;
}
export declare function ecrReplicationConfigurationReplicationConfigurationToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationOutputReference | EcrReplicationConfigurationReplicationConfiguration): any;
export declare function ecrReplicationConfigurationReplicationConfigurationToHclTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationOutputReference | EcrReplicationConfigurationReplicationConfiguration): any;
export declare class EcrReplicationConfigurationReplicationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcrReplicationConfigurationReplicationConfiguration | undefined;
    set internalValue(value: EcrReplicationConfigurationReplicationConfiguration | undefined);
    private _rule;
    get rule(): EcrReplicationConfigurationReplicationConfigurationRuleList;
    putRule(value: EcrReplicationConfigurationReplicationConfigurationRule[] | cdktf.IResolvable): void;
    get ruleInput(): cdktf.IResolvable | EcrReplicationConfigurationReplicationConfigurationRule[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_replication_configuration aws_ecr_replication_configuration}
*/
export declare class EcrReplicationConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ecr_replication_configuration";
    /**
    * Generates CDKTF code for importing a EcrReplicationConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EcrReplicationConfiguration to import
    * @param importFromId The id of the existing EcrReplicationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_replication_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EcrReplicationConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_replication_configuration aws_ecr_replication_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrReplicationConfigurationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: EcrReplicationConfigurationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get registryId(): string;
    private _replicationConfiguration;
    get replicationConfiguration(): EcrReplicationConfigurationReplicationConfigurationOutputReference;
    putReplicationConfiguration(value: EcrReplicationConfigurationReplicationConfiguration): void;
    resetReplicationConfiguration(): void;
    get replicationConfigurationInput(): EcrReplicationConfigurationReplicationConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
