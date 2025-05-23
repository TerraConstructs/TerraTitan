/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ResourcegroupsGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_group#description ResourcegroupsGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_group#id ResourcegroupsGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_group#name ResourcegroupsGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_group#tags ResourcegroupsGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_group#tags_all ResourcegroupsGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_group#configuration ResourcegroupsGroup#configuration}
    */
    readonly configuration?: ResourcegroupsGroupConfiguration[] | cdktf.IResolvable;
    /**
    * resource_query block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_group#resource_query ResourcegroupsGroup#resource_query}
    */
    readonly resourceQuery?: ResourcegroupsGroupResourceQuery;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_group#timeouts ResourcegroupsGroup#timeouts}
    */
    readonly timeouts?: ResourcegroupsGroupTimeouts;
}
export interface ResourcegroupsGroupConfigurationParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_group#name ResourcegroupsGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_group#values ResourcegroupsGroup#values}
    */
    readonly values: string[];
}
export declare function resourcegroupsGroupConfigurationParametersToTerraform(struct?: ResourcegroupsGroupConfigurationParameters | cdktf.IResolvable): any;
export declare function resourcegroupsGroupConfigurationParametersToHclTerraform(struct?: ResourcegroupsGroupConfigurationParameters | cdktf.IResolvable): any;
export declare class ResourcegroupsGroupConfigurationParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ResourcegroupsGroupConfigurationParameters | cdktf.IResolvable | undefined;
    set internalValue(value: ResourcegroupsGroupConfigurationParameters | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class ResourcegroupsGroupConfigurationParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ResourcegroupsGroupConfigurationParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ResourcegroupsGroupConfigurationParametersOutputReference;
}
export interface ResourcegroupsGroupConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_group#type ResourcegroupsGroup#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_group#parameters ResourcegroupsGroup#parameters}
    */
    readonly parameters?: ResourcegroupsGroupConfigurationParameters[] | cdktf.IResolvable;
}
export declare function resourcegroupsGroupConfigurationToTerraform(struct?: ResourcegroupsGroupConfiguration | cdktf.IResolvable): any;
export declare function resourcegroupsGroupConfigurationToHclTerraform(struct?: ResourcegroupsGroupConfiguration | cdktf.IResolvable): any;
export declare class ResourcegroupsGroupConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ResourcegroupsGroupConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: ResourcegroupsGroupConfiguration | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _parameters;
    get parameters(): ResourcegroupsGroupConfigurationParametersList;
    putParameters(value: ResourcegroupsGroupConfigurationParameters[] | cdktf.IResolvable): void;
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | ResourcegroupsGroupConfigurationParameters[] | undefined;
}
export declare class ResourcegroupsGroupConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ResourcegroupsGroupConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ResourcegroupsGroupConfigurationOutputReference;
}
export interface ResourcegroupsGroupResourceQuery {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_group#query ResourcegroupsGroup#query}
    */
    readonly query: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_group#type ResourcegroupsGroup#type}
    */
    readonly type?: string;
}
export declare function resourcegroupsGroupResourceQueryToTerraform(struct?: ResourcegroupsGroupResourceQueryOutputReference | ResourcegroupsGroupResourceQuery): any;
export declare function resourcegroupsGroupResourceQueryToHclTerraform(struct?: ResourcegroupsGroupResourceQueryOutputReference | ResourcegroupsGroupResourceQuery): any;
export declare class ResourcegroupsGroupResourceQueryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ResourcegroupsGroupResourceQuery | undefined;
    set internalValue(value: ResourcegroupsGroupResourceQuery | undefined);
    private _query?;
    get query(): string;
    set query(value: string);
    get queryInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export interface ResourcegroupsGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_group#create ResourcegroupsGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_group#update ResourcegroupsGroup#update}
    */
    readonly update?: string;
}
export declare function resourcegroupsGroupTimeoutsToTerraform(struct?: ResourcegroupsGroupTimeouts | cdktf.IResolvable): any;
export declare function resourcegroupsGroupTimeoutsToHclTerraform(struct?: ResourcegroupsGroupTimeouts | cdktf.IResolvable): any;
export declare class ResourcegroupsGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ResourcegroupsGroupTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ResourcegroupsGroupTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_group aws_resourcegroups_group}
*/
export declare class ResourcegroupsGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_resourcegroups_group";
    /**
    * Generates CDKTF code for importing a ResourcegroupsGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ResourcegroupsGroup to import
    * @param importFromId The id of the existing ResourcegroupsGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ResourcegroupsGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/resourcegroups_group aws_resourcegroups_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ResourcegroupsGroupConfig
    */
    constructor(scope: Construct, id: string, config: ResourcegroupsGroupConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _configuration;
    get configuration(): ResourcegroupsGroupConfigurationList;
    putConfiguration(value: ResourcegroupsGroupConfiguration[] | cdktf.IResolvable): void;
    resetConfiguration(): void;
    get configurationInput(): cdktf.IResolvable | ResourcegroupsGroupConfiguration[] | undefined;
    private _resourceQuery;
    get resourceQuery(): ResourcegroupsGroupResourceQueryOutputReference;
    putResourceQuery(value: ResourcegroupsGroupResourceQuery): void;
    resetResourceQuery(): void;
    get resourceQueryInput(): ResourcegroupsGroupResourceQuery | undefined;
    private _timeouts;
    get timeouts(): ResourcegroupsGroupTimeoutsOutputReference;
    putTimeouts(value: ResourcegroupsGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ResourcegroupsGroupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
