/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsKendraIndexConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_index#id DataAwsKendraIndex#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_index#tags DataAwsKendraIndex#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsKendraIndexCapacityUnits {
}
export declare function dataAwsKendraIndexCapacityUnitsToTerraform(struct?: DataAwsKendraIndexCapacityUnits): any;
export declare function dataAwsKendraIndexCapacityUnitsToHclTerraform(struct?: DataAwsKendraIndexCapacityUnits): any;
export declare class DataAwsKendraIndexCapacityUnitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKendraIndexCapacityUnits | undefined;
    set internalValue(value: DataAwsKendraIndexCapacityUnits | undefined);
    get queryCapacityUnits(): number;
    get storageCapacityUnits(): number;
}
export declare class DataAwsKendraIndexCapacityUnitsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKendraIndexCapacityUnitsOutputReference;
}
export interface DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance {
}
export declare function dataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceToTerraform(struct?: DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance): any;
export declare function dataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceToHclTerraform(struct?: DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance): any;
export declare class DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance | undefined;
    set internalValue(value: DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance | undefined);
    get duration(): string;
    get freshness(): cdktf.IResolvable;
    get importance(): number;
    get rankOrder(): string;
    private _valuesImportanceMap;
    get valuesImportanceMap(): cdktf.NumberMap;
}
export declare class DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference;
}
export interface DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch {
}
export declare function dataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchToTerraform(struct?: DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch): any;
export declare function dataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchToHclTerraform(struct?: DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch): any;
export declare class DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch | undefined;
    set internalValue(value: DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch | undefined);
    get displayable(): cdktf.IResolvable;
    get facetable(): cdktf.IResolvable;
    get searchable(): cdktf.IResolvable;
    get sortable(): cdktf.IResolvable;
}
export declare class DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference;
}
export interface DataAwsKendraIndexDocumentMetadataConfigurationUpdates {
}
export declare function dataAwsKendraIndexDocumentMetadataConfigurationUpdatesToTerraform(struct?: DataAwsKendraIndexDocumentMetadataConfigurationUpdates): any;
export declare function dataAwsKendraIndexDocumentMetadataConfigurationUpdatesToHclTerraform(struct?: DataAwsKendraIndexDocumentMetadataConfigurationUpdates): any;
export declare class DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKendraIndexDocumentMetadataConfigurationUpdates | undefined;
    set internalValue(value: DataAwsKendraIndexDocumentMetadataConfigurationUpdates | undefined);
    get name(): string;
    private _relevance;
    get relevance(): DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList;
    private _search;
    get search(): DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList;
    get type(): string;
}
export declare class DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference;
}
export interface DataAwsKendraIndexIndexStatisticsFaqStatistics {
}
export declare function dataAwsKendraIndexIndexStatisticsFaqStatisticsToTerraform(struct?: DataAwsKendraIndexIndexStatisticsFaqStatistics): any;
export declare function dataAwsKendraIndexIndexStatisticsFaqStatisticsToHclTerraform(struct?: DataAwsKendraIndexIndexStatisticsFaqStatistics): any;
export declare class DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKendraIndexIndexStatisticsFaqStatistics | undefined;
    set internalValue(value: DataAwsKendraIndexIndexStatisticsFaqStatistics | undefined);
    get indexedQuestionAnswersCount(): number;
}
export declare class DataAwsKendraIndexIndexStatisticsFaqStatisticsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference;
}
export interface DataAwsKendraIndexIndexStatisticsTextDocumentStatistics {
}
export declare function dataAwsKendraIndexIndexStatisticsTextDocumentStatisticsToTerraform(struct?: DataAwsKendraIndexIndexStatisticsTextDocumentStatistics): any;
export declare function dataAwsKendraIndexIndexStatisticsTextDocumentStatisticsToHclTerraform(struct?: DataAwsKendraIndexIndexStatisticsTextDocumentStatistics): any;
export declare class DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKendraIndexIndexStatisticsTextDocumentStatistics | undefined;
    set internalValue(value: DataAwsKendraIndexIndexStatisticsTextDocumentStatistics | undefined);
    get indexedTextBytes(): number;
    get indexedTextDocumentsCount(): number;
}
export declare class DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference;
}
export interface DataAwsKendraIndexIndexStatistics {
}
export declare function dataAwsKendraIndexIndexStatisticsToTerraform(struct?: DataAwsKendraIndexIndexStatistics): any;
export declare function dataAwsKendraIndexIndexStatisticsToHclTerraform(struct?: DataAwsKendraIndexIndexStatistics): any;
export declare class DataAwsKendraIndexIndexStatisticsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKendraIndexIndexStatistics | undefined;
    set internalValue(value: DataAwsKendraIndexIndexStatistics | undefined);
    private _faqStatistics;
    get faqStatistics(): DataAwsKendraIndexIndexStatisticsFaqStatisticsList;
    private _textDocumentStatistics;
    get textDocumentStatistics(): DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList;
}
export declare class DataAwsKendraIndexIndexStatisticsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKendraIndexIndexStatisticsOutputReference;
}
export interface DataAwsKendraIndexServerSideEncryptionConfiguration {
}
export declare function dataAwsKendraIndexServerSideEncryptionConfigurationToTerraform(struct?: DataAwsKendraIndexServerSideEncryptionConfiguration): any;
export declare function dataAwsKendraIndexServerSideEncryptionConfigurationToHclTerraform(struct?: DataAwsKendraIndexServerSideEncryptionConfiguration): any;
export declare class DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKendraIndexServerSideEncryptionConfiguration | undefined;
    set internalValue(value: DataAwsKendraIndexServerSideEncryptionConfiguration | undefined);
    get kmsKeyId(): string;
}
export declare class DataAwsKendraIndexServerSideEncryptionConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference;
}
export interface DataAwsKendraIndexUserGroupResolutionConfiguration {
}
export declare function dataAwsKendraIndexUserGroupResolutionConfigurationToTerraform(struct?: DataAwsKendraIndexUserGroupResolutionConfiguration): any;
export declare function dataAwsKendraIndexUserGroupResolutionConfigurationToHclTerraform(struct?: DataAwsKendraIndexUserGroupResolutionConfiguration): any;
export declare class DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKendraIndexUserGroupResolutionConfiguration | undefined;
    set internalValue(value: DataAwsKendraIndexUserGroupResolutionConfiguration | undefined);
    get userGroupResolutionMode(): string;
}
export declare class DataAwsKendraIndexUserGroupResolutionConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference;
}
export interface DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration {
}
export declare function dataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationToTerraform(struct?: DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration): any;
export declare function dataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationToHclTerraform(struct?: DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration): any;
export declare class DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration | undefined;
    set internalValue(value: DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration | undefined);
    get groupAttributeField(): string;
    get userNameAttributeField(): string;
}
export declare class DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference;
}
export interface DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration {
}
export declare function dataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationToTerraform(struct?: DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration): any;
export declare function dataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationToHclTerraform(struct?: DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration): any;
export declare class DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration | undefined;
    set internalValue(value: DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration | undefined);
    get claimRegex(): string;
    get groupAttributeField(): string;
    get issuer(): string;
    get keyLocation(): string;
    get secretsManagerArn(): string;
    get url(): string;
    get userNameAttributeField(): string;
}
export declare class DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference;
}
export interface DataAwsKendraIndexUserTokenConfigurations {
}
export declare function dataAwsKendraIndexUserTokenConfigurationsToTerraform(struct?: DataAwsKendraIndexUserTokenConfigurations): any;
export declare function dataAwsKendraIndexUserTokenConfigurationsToHclTerraform(struct?: DataAwsKendraIndexUserTokenConfigurations): any;
export declare class DataAwsKendraIndexUserTokenConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKendraIndexUserTokenConfigurations | undefined;
    set internalValue(value: DataAwsKendraIndexUserTokenConfigurations | undefined);
    private _jsonTokenTypeConfiguration;
    get jsonTokenTypeConfiguration(): DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList;
    private _jwtTokenTypeConfiguration;
    get jwtTokenTypeConfiguration(): DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList;
}
export declare class DataAwsKendraIndexUserTokenConfigurationsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKendraIndexUserTokenConfigurationsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_index aws_kendra_index}
*/
export declare class DataAwsKendraIndex extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_kendra_index";
    /**
    * Generates CDKTF code for importing a DataAwsKendraIndex resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsKendraIndex to import
    * @param importFromId The id of the existing DataAwsKendraIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_index#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsKendraIndex to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_index aws_kendra_index} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKendraIndexConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsKendraIndexConfig);
    get arn(): string;
    private _capacityUnits;
    get capacityUnits(): DataAwsKendraIndexCapacityUnitsList;
    get createdAt(): string;
    get description(): string;
    private _documentMetadataConfigurationUpdates;
    get documentMetadataConfigurationUpdates(): DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList;
    get edition(): string;
    get errorMessage(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _indexStatistics;
    get indexStatistics(): DataAwsKendraIndexIndexStatisticsList;
    get name(): string;
    get roleArn(): string;
    private _serverSideEncryptionConfiguration;
    get serverSideEncryptionConfiguration(): DataAwsKendraIndexServerSideEncryptionConfigurationList;
    get status(): string;
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
    get updatedAt(): string;
    get userContextPolicy(): string;
    private _userGroupResolutionConfiguration;
    get userGroupResolutionConfiguration(): DataAwsKendraIndexUserGroupResolutionConfigurationList;
    private _userTokenConfigurations;
    get userTokenConfigurations(): DataAwsKendraIndexUserTokenConfigurationsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
