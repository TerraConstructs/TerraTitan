/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KendraIndexConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#description KendraIndex#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#edition KendraIndex#edition}
    */
    readonly edition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#id KendraIndex#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#name KendraIndex#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#role_arn KendraIndex#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#tags KendraIndex#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#tags_all KendraIndex#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#user_context_policy KendraIndex#user_context_policy}
    */
    readonly userContextPolicy?: string;
    /**
    * capacity_units block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#capacity_units KendraIndex#capacity_units}
    */
    readonly capacityUnits?: KendraIndexCapacityUnits;
    /**
    * document_metadata_configuration_updates block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#document_metadata_configuration_updates KendraIndex#document_metadata_configuration_updates}
    */
    readonly documentMetadataConfigurationUpdates?: KendraIndexDocumentMetadataConfigurationUpdates[] | cdktf.IResolvable;
    /**
    * server_side_encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#server_side_encryption_configuration KendraIndex#server_side_encryption_configuration}
    */
    readonly serverSideEncryptionConfiguration?: KendraIndexServerSideEncryptionConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#timeouts KendraIndex#timeouts}
    */
    readonly timeouts?: KendraIndexTimeouts;
    /**
    * user_group_resolution_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#user_group_resolution_configuration KendraIndex#user_group_resolution_configuration}
    */
    readonly userGroupResolutionConfiguration?: KendraIndexUserGroupResolutionConfiguration;
    /**
    * user_token_configurations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#user_token_configurations KendraIndex#user_token_configurations}
    */
    readonly userTokenConfigurations?: KendraIndexUserTokenConfigurations;
}
export interface KendraIndexIndexStatisticsFaqStatistics {
}
export declare function kendraIndexIndexStatisticsFaqStatisticsToTerraform(struct?: KendraIndexIndexStatisticsFaqStatistics): any;
export declare function kendraIndexIndexStatisticsFaqStatisticsToHclTerraform(struct?: KendraIndexIndexStatisticsFaqStatistics): any;
export declare class KendraIndexIndexStatisticsFaqStatisticsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KendraIndexIndexStatisticsFaqStatistics | undefined;
    set internalValue(value: KendraIndexIndexStatisticsFaqStatistics | undefined);
    get indexedQuestionAnswersCount(): number;
}
export declare class KendraIndexIndexStatisticsFaqStatisticsList extends cdktf.ComplexList {
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
    get(index: number): KendraIndexIndexStatisticsFaqStatisticsOutputReference;
}
export interface KendraIndexIndexStatisticsTextDocumentStatistics {
}
export declare function kendraIndexIndexStatisticsTextDocumentStatisticsToTerraform(struct?: KendraIndexIndexStatisticsTextDocumentStatistics): any;
export declare function kendraIndexIndexStatisticsTextDocumentStatisticsToHclTerraform(struct?: KendraIndexIndexStatisticsTextDocumentStatistics): any;
export declare class KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KendraIndexIndexStatisticsTextDocumentStatistics | undefined;
    set internalValue(value: KendraIndexIndexStatisticsTextDocumentStatistics | undefined);
    get indexedTextBytes(): number;
    get indexedTextDocumentsCount(): number;
}
export declare class KendraIndexIndexStatisticsTextDocumentStatisticsList extends cdktf.ComplexList {
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
    get(index: number): KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference;
}
export interface KendraIndexIndexStatistics {
}
export declare function kendraIndexIndexStatisticsToTerraform(struct?: KendraIndexIndexStatistics): any;
export declare function kendraIndexIndexStatisticsToHclTerraform(struct?: KendraIndexIndexStatistics): any;
export declare class KendraIndexIndexStatisticsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KendraIndexIndexStatistics | undefined;
    set internalValue(value: KendraIndexIndexStatistics | undefined);
    private _faqStatistics;
    get faqStatistics(): KendraIndexIndexStatisticsFaqStatisticsList;
    private _textDocumentStatistics;
    get textDocumentStatistics(): KendraIndexIndexStatisticsTextDocumentStatisticsList;
}
export declare class KendraIndexIndexStatisticsList extends cdktf.ComplexList {
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
    get(index: number): KendraIndexIndexStatisticsOutputReference;
}
export interface KendraIndexCapacityUnits {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#query_capacity_units KendraIndex#query_capacity_units}
    */
    readonly queryCapacityUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#storage_capacity_units KendraIndex#storage_capacity_units}
    */
    readonly storageCapacityUnits?: number;
}
export declare function kendraIndexCapacityUnitsToTerraform(struct?: KendraIndexCapacityUnitsOutputReference | KendraIndexCapacityUnits): any;
export declare function kendraIndexCapacityUnitsToHclTerraform(struct?: KendraIndexCapacityUnitsOutputReference | KendraIndexCapacityUnits): any;
export declare class KendraIndexCapacityUnitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraIndexCapacityUnits | undefined;
    set internalValue(value: KendraIndexCapacityUnits | undefined);
    private _queryCapacityUnits?;
    get queryCapacityUnits(): number;
    set queryCapacityUnits(value: number);
    resetQueryCapacityUnits(): void;
    get queryCapacityUnitsInput(): number | undefined;
    private _storageCapacityUnits?;
    get storageCapacityUnits(): number;
    set storageCapacityUnits(value: number);
    resetStorageCapacityUnits(): void;
    get storageCapacityUnitsInput(): number | undefined;
}
export interface KendraIndexDocumentMetadataConfigurationUpdatesRelevance {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#duration KendraIndex#duration}
    */
    readonly duration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#freshness KendraIndex#freshness}
    */
    readonly freshness?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#importance KendraIndex#importance}
    */
    readonly importance?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#rank_order KendraIndex#rank_order}
    */
    readonly rankOrder?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#values_importance_map KendraIndex#values_importance_map}
    */
    readonly valuesImportanceMap?: {
        [key: string]: number;
    };
}
export declare function kendraIndexDocumentMetadataConfigurationUpdatesRelevanceToTerraform(struct?: KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference | KendraIndexDocumentMetadataConfigurationUpdatesRelevance): any;
export declare function kendraIndexDocumentMetadataConfigurationUpdatesRelevanceToHclTerraform(struct?: KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference | KendraIndexDocumentMetadataConfigurationUpdatesRelevance): any;
export declare class KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraIndexDocumentMetadataConfigurationUpdatesRelevance | undefined;
    set internalValue(value: KendraIndexDocumentMetadataConfigurationUpdatesRelevance | undefined);
    private _duration?;
    get duration(): string;
    set duration(value: string);
    resetDuration(): void;
    get durationInput(): string | undefined;
    private _freshness?;
    get freshness(): boolean | cdktf.IResolvable;
    set freshness(value: boolean | cdktf.IResolvable);
    resetFreshness(): void;
    get freshnessInput(): boolean | cdktf.IResolvable | undefined;
    private _importance?;
    get importance(): number;
    set importance(value: number);
    resetImportance(): void;
    get importanceInput(): number | undefined;
    private _rankOrder?;
    get rankOrder(): string;
    set rankOrder(value: string);
    resetRankOrder(): void;
    get rankOrderInput(): string | undefined;
    private _valuesImportanceMap?;
    get valuesImportanceMap(): {
        [key: string]: number;
    };
    set valuesImportanceMap(value: {
        [key: string]: number;
    });
    resetValuesImportanceMap(): void;
    get valuesImportanceMapInput(): {
        [key: string]: number;
    } | undefined;
}
export interface KendraIndexDocumentMetadataConfigurationUpdatesSearch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#displayable KendraIndex#displayable}
    */
    readonly displayable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#facetable KendraIndex#facetable}
    */
    readonly facetable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#searchable KendraIndex#searchable}
    */
    readonly searchable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#sortable KendraIndex#sortable}
    */
    readonly sortable?: boolean | cdktf.IResolvable;
}
export declare function kendraIndexDocumentMetadataConfigurationUpdatesSearchToTerraform(struct?: KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference | KendraIndexDocumentMetadataConfigurationUpdatesSearch): any;
export declare function kendraIndexDocumentMetadataConfigurationUpdatesSearchToHclTerraform(struct?: KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference | KendraIndexDocumentMetadataConfigurationUpdatesSearch): any;
export declare class KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraIndexDocumentMetadataConfigurationUpdatesSearch | undefined;
    set internalValue(value: KendraIndexDocumentMetadataConfigurationUpdatesSearch | undefined);
    private _displayable?;
    get displayable(): boolean | cdktf.IResolvable;
    set displayable(value: boolean | cdktf.IResolvable);
    resetDisplayable(): void;
    get displayableInput(): boolean | cdktf.IResolvable | undefined;
    private _facetable?;
    get facetable(): boolean | cdktf.IResolvable;
    set facetable(value: boolean | cdktf.IResolvable);
    resetFacetable(): void;
    get facetableInput(): boolean | cdktf.IResolvable | undefined;
    private _searchable?;
    get searchable(): boolean | cdktf.IResolvable;
    set searchable(value: boolean | cdktf.IResolvable);
    resetSearchable(): void;
    get searchableInput(): boolean | cdktf.IResolvable | undefined;
    private _sortable?;
    get sortable(): boolean | cdktf.IResolvable;
    set sortable(value: boolean | cdktf.IResolvable);
    resetSortable(): void;
    get sortableInput(): boolean | cdktf.IResolvable | undefined;
}
export interface KendraIndexDocumentMetadataConfigurationUpdates {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#name KendraIndex#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#type KendraIndex#type}
    */
    readonly type: string;
    /**
    * relevance block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#relevance KendraIndex#relevance}
    */
    readonly relevance?: KendraIndexDocumentMetadataConfigurationUpdatesRelevance;
    /**
    * search block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#search KendraIndex#search}
    */
    readonly search?: KendraIndexDocumentMetadataConfigurationUpdatesSearch;
}
export declare function kendraIndexDocumentMetadataConfigurationUpdatesToTerraform(struct?: KendraIndexDocumentMetadataConfigurationUpdates | cdktf.IResolvable): any;
export declare function kendraIndexDocumentMetadataConfigurationUpdatesToHclTerraform(struct?: KendraIndexDocumentMetadataConfigurationUpdates | cdktf.IResolvable): any;
export declare class KendraIndexDocumentMetadataConfigurationUpdatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KendraIndexDocumentMetadataConfigurationUpdates | cdktf.IResolvable | undefined;
    set internalValue(value: KendraIndexDocumentMetadataConfigurationUpdates | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _relevance;
    get relevance(): KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference;
    putRelevance(value: KendraIndexDocumentMetadataConfigurationUpdatesRelevance): void;
    resetRelevance(): void;
    get relevanceInput(): KendraIndexDocumentMetadataConfigurationUpdatesRelevance | undefined;
    private _search;
    get search(): KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference;
    putSearch(value: KendraIndexDocumentMetadataConfigurationUpdatesSearch): void;
    resetSearch(): void;
    get searchInput(): KendraIndexDocumentMetadataConfigurationUpdatesSearch | undefined;
}
export declare class KendraIndexDocumentMetadataConfigurationUpdatesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KendraIndexDocumentMetadataConfigurationUpdates[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KendraIndexDocumentMetadataConfigurationUpdatesOutputReference;
}
export interface KendraIndexServerSideEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#kms_key_id KendraIndex#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export declare function kendraIndexServerSideEncryptionConfigurationToTerraform(struct?: KendraIndexServerSideEncryptionConfigurationOutputReference | KendraIndexServerSideEncryptionConfiguration): any;
export declare function kendraIndexServerSideEncryptionConfigurationToHclTerraform(struct?: KendraIndexServerSideEncryptionConfigurationOutputReference | KendraIndexServerSideEncryptionConfiguration): any;
export declare class KendraIndexServerSideEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraIndexServerSideEncryptionConfiguration | undefined;
    set internalValue(value: KendraIndexServerSideEncryptionConfiguration | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
}
export interface KendraIndexTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#create KendraIndex#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#delete KendraIndex#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#update KendraIndex#update}
    */
    readonly update?: string;
}
export declare function kendraIndexTimeoutsToTerraform(struct?: KendraIndexTimeouts | cdktf.IResolvable): any;
export declare function kendraIndexTimeoutsToHclTerraform(struct?: KendraIndexTimeouts | cdktf.IResolvable): any;
export declare class KendraIndexTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraIndexTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: KendraIndexTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
export interface KendraIndexUserGroupResolutionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#user_group_resolution_mode KendraIndex#user_group_resolution_mode}
    */
    readonly userGroupResolutionMode: string;
}
export declare function kendraIndexUserGroupResolutionConfigurationToTerraform(struct?: KendraIndexUserGroupResolutionConfigurationOutputReference | KendraIndexUserGroupResolutionConfiguration): any;
export declare function kendraIndexUserGroupResolutionConfigurationToHclTerraform(struct?: KendraIndexUserGroupResolutionConfigurationOutputReference | KendraIndexUserGroupResolutionConfiguration): any;
export declare class KendraIndexUserGroupResolutionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraIndexUserGroupResolutionConfiguration | undefined;
    set internalValue(value: KendraIndexUserGroupResolutionConfiguration | undefined);
    private _userGroupResolutionMode?;
    get userGroupResolutionMode(): string;
    set userGroupResolutionMode(value: string);
    get userGroupResolutionModeInput(): string | undefined;
}
export interface KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#group_attribute_field KendraIndex#group_attribute_field}
    */
    readonly groupAttributeField: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}
    */
    readonly userNameAttributeField: string;
}
export declare function kendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationToTerraform(struct?: KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference | KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration): any;
export declare function kendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationToHclTerraform(struct?: KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference | KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration): any;
export declare class KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration | undefined;
    set internalValue(value: KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration | undefined);
    private _groupAttributeField?;
    get groupAttributeField(): string;
    set groupAttributeField(value: string);
    get groupAttributeFieldInput(): string | undefined;
    private _userNameAttributeField?;
    get userNameAttributeField(): string;
    set userNameAttributeField(value: string);
    get userNameAttributeFieldInput(): string | undefined;
}
export interface KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#claim_regex KendraIndex#claim_regex}
    */
    readonly claimRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#group_attribute_field KendraIndex#group_attribute_field}
    */
    readonly groupAttributeField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#issuer KendraIndex#issuer}
    */
    readonly issuer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#key_location KendraIndex#key_location}
    */
    readonly keyLocation: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#secrets_manager_arn KendraIndex#secrets_manager_arn}
    */
    readonly secretsManagerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#url KendraIndex#url}
    */
    readonly url?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}
    */
    readonly userNameAttributeField?: string;
}
export declare function kendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationToTerraform(struct?: KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference | KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration): any;
export declare function kendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationToHclTerraform(struct?: KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference | KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration): any;
export declare class KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration | undefined;
    set internalValue(value: KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration | undefined);
    private _claimRegex?;
    get claimRegex(): string;
    set claimRegex(value: string);
    resetClaimRegex(): void;
    get claimRegexInput(): string | undefined;
    private _groupAttributeField?;
    get groupAttributeField(): string;
    set groupAttributeField(value: string);
    resetGroupAttributeField(): void;
    get groupAttributeFieldInput(): string | undefined;
    private _issuer?;
    get issuer(): string;
    set issuer(value: string);
    resetIssuer(): void;
    get issuerInput(): string | undefined;
    private _keyLocation?;
    get keyLocation(): string;
    set keyLocation(value: string);
    get keyLocationInput(): string | undefined;
    private _secretsManagerArn?;
    get secretsManagerArn(): string;
    set secretsManagerArn(value: string);
    resetSecretsManagerArn(): void;
    get secretsManagerArnInput(): string | undefined;
    private _url?;
    get url(): string;
    set url(value: string);
    resetUrl(): void;
    get urlInput(): string | undefined;
    private _userNameAttributeField?;
    get userNameAttributeField(): string;
    set userNameAttributeField(value: string);
    resetUserNameAttributeField(): void;
    get userNameAttributeFieldInput(): string | undefined;
}
export interface KendraIndexUserTokenConfigurations {
    /**
    * json_token_type_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#json_token_type_configuration KendraIndex#json_token_type_configuration}
    */
    readonly jsonTokenTypeConfiguration?: KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration;
    /**
    * jwt_token_type_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#jwt_token_type_configuration KendraIndex#jwt_token_type_configuration}
    */
    readonly jwtTokenTypeConfiguration?: KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration;
}
export declare function kendraIndexUserTokenConfigurationsToTerraform(struct?: KendraIndexUserTokenConfigurationsOutputReference | KendraIndexUserTokenConfigurations): any;
export declare function kendraIndexUserTokenConfigurationsToHclTerraform(struct?: KendraIndexUserTokenConfigurationsOutputReference | KendraIndexUserTokenConfigurations): any;
export declare class KendraIndexUserTokenConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraIndexUserTokenConfigurations | undefined;
    set internalValue(value: KendraIndexUserTokenConfigurations | undefined);
    private _jsonTokenTypeConfiguration;
    get jsonTokenTypeConfiguration(): KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference;
    putJsonTokenTypeConfiguration(value: KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration): void;
    resetJsonTokenTypeConfiguration(): void;
    get jsonTokenTypeConfigurationInput(): KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration | undefined;
    private _jwtTokenTypeConfiguration;
    get jwtTokenTypeConfiguration(): KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference;
    putJwtTokenTypeConfiguration(value: KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration): void;
    resetJwtTokenTypeConfiguration(): void;
    get jwtTokenTypeConfigurationInput(): KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index aws_kendra_index}
*/
export declare class KendraIndex extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_kendra_index";
    /**
    * Generates CDKTF code for importing a KendraIndex resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KendraIndex to import
    * @param importFromId The id of the existing KendraIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KendraIndex to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_index aws_kendra_index} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KendraIndexConfig
    */
    constructor(scope: Construct, id: string, config: KendraIndexConfig);
    get arn(): string;
    get createdAt(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _edition?;
    get edition(): string;
    set edition(value: string);
    resetEdition(): void;
    get editionInput(): string | undefined;
    get errorMessage(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _indexStatistics;
    get indexStatistics(): KendraIndexIndexStatisticsList;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
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
    get updatedAt(): string;
    private _userContextPolicy?;
    get userContextPolicy(): string;
    set userContextPolicy(value: string);
    resetUserContextPolicy(): void;
    get userContextPolicyInput(): string | undefined;
    private _capacityUnits;
    get capacityUnits(): KendraIndexCapacityUnitsOutputReference;
    putCapacityUnits(value: KendraIndexCapacityUnits): void;
    resetCapacityUnits(): void;
    get capacityUnitsInput(): KendraIndexCapacityUnits | undefined;
    private _documentMetadataConfigurationUpdates;
    get documentMetadataConfigurationUpdates(): KendraIndexDocumentMetadataConfigurationUpdatesList;
    putDocumentMetadataConfigurationUpdates(value: KendraIndexDocumentMetadataConfigurationUpdates[] | cdktf.IResolvable): void;
    resetDocumentMetadataConfigurationUpdates(): void;
    get documentMetadataConfigurationUpdatesInput(): cdktf.IResolvable | KendraIndexDocumentMetadataConfigurationUpdates[] | undefined;
    private _serverSideEncryptionConfiguration;
    get serverSideEncryptionConfiguration(): KendraIndexServerSideEncryptionConfigurationOutputReference;
    putServerSideEncryptionConfiguration(value: KendraIndexServerSideEncryptionConfiguration): void;
    resetServerSideEncryptionConfiguration(): void;
    get serverSideEncryptionConfigurationInput(): KendraIndexServerSideEncryptionConfiguration | undefined;
    private _timeouts;
    get timeouts(): KendraIndexTimeoutsOutputReference;
    putTimeouts(value: KendraIndexTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | KendraIndexTimeouts | undefined;
    private _userGroupResolutionConfiguration;
    get userGroupResolutionConfiguration(): KendraIndexUserGroupResolutionConfigurationOutputReference;
    putUserGroupResolutionConfiguration(value: KendraIndexUserGroupResolutionConfiguration): void;
    resetUserGroupResolutionConfiguration(): void;
    get userGroupResolutionConfigurationInput(): KendraIndexUserGroupResolutionConfiguration | undefined;
    private _userTokenConfigurations;
    get userTokenConfigurations(): KendraIndexUserTokenConfigurationsOutputReference;
    putUserTokenConfigurations(value: KendraIndexUserTokenConfigurations): void;
    resetUserTokenConfigurations(): void;
    get userTokenConfigurationsInput(): KendraIndexUserTokenConfigurations | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
