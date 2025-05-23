/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsResourcegroupstaggingapiResourcesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/resourcegroupstaggingapi_resources#exclude_compliant_resources DataAwsResourcegroupstaggingapiResources#exclude_compliant_resources}
    */
    readonly excludeCompliantResources?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/resourcegroupstaggingapi_resources#id DataAwsResourcegroupstaggingapiResources#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/resourcegroupstaggingapi_resources#include_compliance_details DataAwsResourcegroupstaggingapiResources#include_compliance_details}
    */
    readonly includeComplianceDetails?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/resourcegroupstaggingapi_resources#resource_arn_list DataAwsResourcegroupstaggingapiResources#resource_arn_list}
    */
    readonly resourceArnList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/resourcegroupstaggingapi_resources#resource_type_filters DataAwsResourcegroupstaggingapiResources#resource_type_filters}
    */
    readonly resourceTypeFilters?: string[];
    /**
    * tag_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/resourcegroupstaggingapi_resources#tag_filter DataAwsResourcegroupstaggingapiResources#tag_filter}
    */
    readonly tagFilter?: DataAwsResourcegroupstaggingapiResourcesTagFilter[] | cdktf.IResolvable;
}
export interface DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails {
}
export declare function dataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsToTerraform(struct?: DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails): any;
export declare function dataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsToHclTerraform(struct?: DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails): any;
export declare class DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails | undefined;
    set internalValue(value: DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails | undefined);
    get complianceStatus(): cdktf.IResolvable;
    get keysWithNoncompliantValues(): string[];
    get nonCompliantKeys(): string[];
}
export declare class DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference;
}
export interface DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStruct {
}
export declare function dataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStructToTerraform(struct?: DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStruct): any;
export declare function dataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStructToHclTerraform(struct?: DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStruct): any;
export declare class DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStruct | undefined;
    set internalValue(value: DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStruct | undefined);
    private _complianceDetails;
    get complianceDetails(): DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList;
    get resourceArn(): string;
    private _tags;
    get tags(): cdktf.StringMap;
}
export declare class DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStructList extends cdktf.ComplexList {
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
    get(index: number): DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStructOutputReference;
}
export interface DataAwsResourcegroupstaggingapiResourcesTagFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/resourcegroupstaggingapi_resources#key DataAwsResourcegroupstaggingapiResources#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/resourcegroupstaggingapi_resources#values DataAwsResourcegroupstaggingapiResources#values}
    */
    readonly values?: string[];
}
export declare function dataAwsResourcegroupstaggingapiResourcesTagFilterToTerraform(struct?: DataAwsResourcegroupstaggingapiResourcesTagFilter | cdktf.IResolvable): any;
export declare function dataAwsResourcegroupstaggingapiResourcesTagFilterToHclTerraform(struct?: DataAwsResourcegroupstaggingapiResourcesTagFilter | cdktf.IResolvable): any;
export declare class DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsResourcegroupstaggingapiResourcesTagFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsResourcegroupstaggingapiResourcesTagFilter | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsResourcegroupstaggingapiResourcesTagFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsResourcegroupstaggingapiResourcesTagFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/resourcegroupstaggingapi_resources aws_resourcegroupstaggingapi_resources}
*/
export declare class DataAwsResourcegroupstaggingapiResources extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_resourcegroupstaggingapi_resources";
    /**
    * Generates CDKTF code for importing a DataAwsResourcegroupstaggingapiResources resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsResourcegroupstaggingapiResources to import
    * @param importFromId The id of the existing DataAwsResourcegroupstaggingapiResources that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/resourcegroupstaggingapi_resources#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsResourcegroupstaggingapiResources to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/resourcegroupstaggingapi_resources aws_resourcegroupstaggingapi_resources} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsResourcegroupstaggingapiResourcesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsResourcegroupstaggingapiResourcesConfig);
    private _excludeCompliantResources?;
    get excludeCompliantResources(): boolean | cdktf.IResolvable;
    set excludeCompliantResources(value: boolean | cdktf.IResolvable);
    resetExcludeCompliantResources(): void;
    get excludeCompliantResourcesInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _includeComplianceDetails?;
    get includeComplianceDetails(): boolean | cdktf.IResolvable;
    set includeComplianceDetails(value: boolean | cdktf.IResolvable);
    resetIncludeComplianceDetails(): void;
    get includeComplianceDetailsInput(): boolean | cdktf.IResolvable | undefined;
    private _resourceArnList?;
    get resourceArnList(): string[];
    set resourceArnList(value: string[]);
    resetResourceArnList(): void;
    get resourceArnListInput(): string[] | undefined;
    private _resourceTagMappingList;
    get resourceTagMappingList(): DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListStructList;
    private _resourceTypeFilters?;
    get resourceTypeFilters(): string[];
    set resourceTypeFilters(value: string[]);
    resetResourceTypeFilters(): void;
    get resourceTypeFiltersInput(): string[] | undefined;
    private _tagFilter;
    get tagFilter(): DataAwsResourcegroupstaggingapiResourcesTagFilterList;
    putTagFilter(value: DataAwsResourcegroupstaggingapiResourcesTagFilter[] | cdktf.IResolvable): void;
    resetTagFilter(): void;
    get tagFilterInput(): cdktf.IResolvable | DataAwsResourcegroupstaggingapiResourcesTagFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
