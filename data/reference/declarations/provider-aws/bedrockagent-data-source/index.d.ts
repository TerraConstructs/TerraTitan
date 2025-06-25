/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BedrockagentDataSourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#data_deletion_policy BedrockagentDataSource#data_deletion_policy}
    */
    readonly dataDeletionPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#description BedrockagentDataSource#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#knowledge_base_id BedrockagentDataSource#knowledge_base_id}
    */
    readonly knowledgeBaseId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#name BedrockagentDataSource#name}
    */
    readonly name: string;
    /**
    * data_source_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#data_source_configuration BedrockagentDataSource#data_source_configuration}
    */
    readonly dataSourceConfiguration?: BedrockagentDataSourceDataSourceConfiguration[] | cdktf.IResolvable;
    /**
    * server_side_encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#server_side_encryption_configuration BedrockagentDataSource#server_side_encryption_configuration}
    */
    readonly serverSideEncryptionConfiguration?: BedrockagentDataSourceServerSideEncryptionConfiguration[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#timeouts BedrockagentDataSource#timeouts}
    */
    readonly timeouts?: BedrockagentDataSourceTimeouts;
    /**
    * vector_ingestion_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#vector_ingestion_configuration BedrockagentDataSource#vector_ingestion_configuration}
    */
    readonly vectorIngestionConfiguration?: BedrockagentDataSourceVectorIngestionConfiguration[] | cdktf.IResolvable;
}
export interface BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#exclusion_filters BedrockagentDataSource#exclusion_filters}
    */
    readonly exclusionFilters?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#inclusion_filters BedrockagentDataSource#inclusion_filters}
    */
    readonly inclusionFilters?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#object_type BedrockagentDataSource#object_type}
    */
    readonly objectType: string;
}
export declare function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable | undefined);
    private _exclusionFilters?;
    get exclusionFilters(): string[];
    set exclusionFilters(value: string[]);
    resetExclusionFilters(): void;
    get exclusionFiltersInput(): string[] | undefined;
    private _inclusionFilters?;
    get inclusionFilters(): string[];
    set inclusionFilters(value: string[]);
    resetInclusionFilters(): void;
    get inclusionFiltersInput(): string[] | undefined;
    private _objectType?;
    get objectType(): string;
    set objectType(value: string);
    get objectTypeInput(): string | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter {
    /**
    * filters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#filters BedrockagentDataSource#filters}
    */
    readonly filters?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable | undefined);
    private _filters;
    get filters(): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList;
    putFilters(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktf.IResolvable): void;
    resetFilters(): void;
    get filtersInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#type BedrockagentDataSource#type}
    */
    readonly type: string;
    /**
    * pattern_object_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#pattern_object_filter BedrockagentDataSource#pattern_object_filter}
    */
    readonly patternObjectFilter?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _patternObjectFilter;
    get patternObjectFilter(): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterList;
    putPatternObjectFilter(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | cdktf.IResolvable): void;
    resetPatternObjectFilter(): void;
    get patternObjectFilterInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration {
    /**
    * filter_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#filter_configuration BedrockagentDataSource#filter_configuration}
    */
    readonly filterConfiguration?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined);
    private _filterConfiguration;
    get filterConfiguration(): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationList;
    putFilterConfiguration(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration[] | cdktf.IResolvable): void;
    resetFilterConfiguration(): void;
    get filterConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration[] | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#auth_type BedrockagentDataSource#auth_type}
    */
    readonly authType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#credentials_secret_arn BedrockagentDataSource#credentials_secret_arn}
    */
    readonly credentialsSecretArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#host_type BedrockagentDataSource#host_type}
    */
    readonly hostType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#host_url BedrockagentDataSource#host_url}
    */
    readonly hostUrl: string;
}
export declare function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration | cdktf.IResolvable | undefined);
    private _authType?;
    get authType(): string;
    set authType(value: string);
    get authTypeInput(): string | undefined;
    private _credentialsSecretArn?;
    get credentialsSecretArn(): string;
    set credentialsSecretArn(value: string);
    get credentialsSecretArnInput(): string | undefined;
    private _hostType?;
    get hostType(): string;
    set hostType(value: string);
    get hostTypeInput(): string | undefined;
    private _hostUrl?;
    get hostUrl(): string;
    set hostUrl(value: string);
    get hostUrlInput(): string | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationConfluenceConfiguration {
    /**
    * crawler_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#crawler_configuration BedrockagentDataSource#crawler_configuration}
    */
    readonly crawlerConfiguration?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration[] | cdktf.IResolvable;
    /**
    * source_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#source_configuration BedrockagentDataSource#source_configuration}
    */
    readonly sourceConfiguration?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationConfluenceConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfiguration | cdktf.IResolvable | undefined);
    private _crawlerConfiguration;
    get crawlerConfiguration(): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationList;
    putCrawlerConfiguration(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration[] | cdktf.IResolvable): void;
    resetCrawlerConfiguration(): void;
    get crawlerConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration[] | undefined;
    private _sourceConfiguration;
    get sourceConfiguration(): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationList;
    putSourceConfiguration(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration[] | cdktf.IResolvable): void;
    resetSourceConfiguration(): void;
    get sourceConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration[] | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationS3Configuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#bucket_arn BedrockagentDataSource#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#bucket_owner_account_id BedrockagentDataSource#bucket_owner_account_id}
    */
    readonly bucketOwnerAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#inclusion_prefixes BedrockagentDataSource#inclusion_prefixes}
    */
    readonly inclusionPrefixes?: string[];
}
export declare function bedrockagentDataSourceDataSourceConfigurationS3ConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationS3Configuration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationS3ConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationS3Configuration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationS3Configuration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationS3Configuration | cdktf.IResolvable | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string | undefined;
    private _bucketOwnerAccountId?;
    get bucketOwnerAccountId(): string;
    set bucketOwnerAccountId(value: string);
    resetBucketOwnerAccountId(): void;
    get bucketOwnerAccountIdInput(): string | undefined;
    private _inclusionPrefixes?;
    get inclusionPrefixes(): string[];
    set inclusionPrefixes(value: string[]);
    resetInclusionPrefixes(): void;
    get inclusionPrefixesInput(): string[] | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationS3Configuration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#exclusion_filters BedrockagentDataSource#exclusion_filters}
    */
    readonly exclusionFilters?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#inclusion_filters BedrockagentDataSource#inclusion_filters}
    */
    readonly inclusionFilters?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#object_type BedrockagentDataSource#object_type}
    */
    readonly objectType: string;
}
export declare function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable | undefined);
    private _exclusionFilters?;
    get exclusionFilters(): string[];
    set exclusionFilters(value: string[]);
    resetExclusionFilters(): void;
    get exclusionFiltersInput(): string[] | undefined;
    private _inclusionFilters?;
    get inclusionFilters(): string[];
    set inclusionFilters(value: string[]);
    resetInclusionFilters(): void;
    get inclusionFiltersInput(): string[] | undefined;
    private _objectType?;
    get objectType(): string;
    set objectType(value: string);
    get objectTypeInput(): string | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter {
    /**
    * filters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#filters BedrockagentDataSource#filters}
    */
    readonly filters?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable | undefined);
    private _filters;
    get filters(): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList;
    putFilters(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktf.IResolvable): void;
    resetFilters(): void;
    get filtersInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#type BedrockagentDataSource#type}
    */
    readonly type: string;
    /**
    * pattern_object_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#pattern_object_filter BedrockagentDataSource#pattern_object_filter}
    */
    readonly patternObjectFilter?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _patternObjectFilter;
    get patternObjectFilter(): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterList;
    putPatternObjectFilter(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | cdktf.IResolvable): void;
    resetPatternObjectFilter(): void;
    get patternObjectFilterInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration {
    /**
    * filter_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#filter_configuration BedrockagentDataSource#filter_configuration}
    */
    readonly filterConfiguration?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined);
    private _filterConfiguration;
    get filterConfiguration(): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationList;
    putFilterConfiguration(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration[] | cdktf.IResolvable): void;
    resetFilterConfiguration(): void;
    get filterConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration[] | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#auth_type BedrockagentDataSource#auth_type}
    */
    readonly authType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#credentials_secret_arn BedrockagentDataSource#credentials_secret_arn}
    */
    readonly credentialsSecretArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#host_url BedrockagentDataSource#host_url}
    */
    readonly hostUrl: string;
}
export declare function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration | cdktf.IResolvable | undefined);
    private _authType?;
    get authType(): string;
    set authType(value: string);
    get authTypeInput(): string | undefined;
    private _credentialsSecretArn?;
    get credentialsSecretArn(): string;
    set credentialsSecretArn(value: string);
    get credentialsSecretArnInput(): string | undefined;
    private _hostUrl?;
    get hostUrl(): string;
    set hostUrl(value: string);
    get hostUrlInput(): string | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationSalesforceConfiguration {
    /**
    * crawler_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#crawler_configuration BedrockagentDataSource#crawler_configuration}
    */
    readonly crawlerConfiguration?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration[] | cdktf.IResolvable;
    /**
    * source_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#source_configuration BedrockagentDataSource#source_configuration}
    */
    readonly sourceConfiguration?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationSalesforceConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfiguration | cdktf.IResolvable | undefined);
    private _crawlerConfiguration;
    get crawlerConfiguration(): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationList;
    putCrawlerConfiguration(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration[] | cdktf.IResolvable): void;
    resetCrawlerConfiguration(): void;
    get crawlerConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration[] | undefined;
    private _sourceConfiguration;
    get sourceConfiguration(): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationList;
    putSourceConfiguration(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration[] | cdktf.IResolvable): void;
    resetSourceConfiguration(): void;
    get sourceConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration[] | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#exclusion_filters BedrockagentDataSource#exclusion_filters}
    */
    readonly exclusionFilters?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#inclusion_filters BedrockagentDataSource#inclusion_filters}
    */
    readonly inclusionFilters?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#object_type BedrockagentDataSource#object_type}
    */
    readonly objectType: string;
}
export declare function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable | undefined);
    private _exclusionFilters?;
    get exclusionFilters(): string[];
    set exclusionFilters(value: string[]);
    resetExclusionFilters(): void;
    get exclusionFiltersInput(): string[] | undefined;
    private _inclusionFilters?;
    get inclusionFilters(): string[];
    set inclusionFilters(value: string[]);
    resetInclusionFilters(): void;
    get inclusionFiltersInput(): string[] | undefined;
    private _objectType?;
    get objectType(): string;
    set objectType(value: string);
    get objectTypeInput(): string | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter {
    /**
    * filters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#filters BedrockagentDataSource#filters}
    */
    readonly filters?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable | undefined);
    private _filters;
    get filters(): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList;
    putFilters(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktf.IResolvable): void;
    resetFilters(): void;
    get filtersInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#type BedrockagentDataSource#type}
    */
    readonly type: string;
    /**
    * pattern_object_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#pattern_object_filter BedrockagentDataSource#pattern_object_filter}
    */
    readonly patternObjectFilter?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _patternObjectFilter;
    get patternObjectFilter(): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterList;
    putPatternObjectFilter(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | cdktf.IResolvable): void;
    resetPatternObjectFilter(): void;
    get patternObjectFilterInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration {
    /**
    * filter_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#filter_configuration BedrockagentDataSource#filter_configuration}
    */
    readonly filterConfiguration?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined);
    private _filterConfiguration;
    get filterConfiguration(): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationList;
    putFilterConfiguration(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration[] | cdktf.IResolvable): void;
    resetFilterConfiguration(): void;
    get filterConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration[] | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#auth_type BedrockagentDataSource#auth_type}
    */
    readonly authType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#credentials_secret_arn BedrockagentDataSource#credentials_secret_arn}
    */
    readonly credentialsSecretArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#domain BedrockagentDataSource#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#host_type BedrockagentDataSource#host_type}
    */
    readonly hostType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#site_urls BedrockagentDataSource#site_urls}
    */
    readonly siteUrls: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#tenant_id BedrockagentDataSource#tenant_id}
    */
    readonly tenantId?: string;
}
export declare function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration | cdktf.IResolvable | undefined);
    private _authType?;
    get authType(): string;
    set authType(value: string);
    get authTypeInput(): string | undefined;
    private _credentialsSecretArn?;
    get credentialsSecretArn(): string;
    set credentialsSecretArn(value: string);
    get credentialsSecretArnInput(): string | undefined;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string | undefined;
    private _hostType?;
    get hostType(): string;
    set hostType(value: string);
    get hostTypeInput(): string | undefined;
    private _siteUrls?;
    get siteUrls(): string[];
    set siteUrls(value: string[]);
    get siteUrlsInput(): string[] | undefined;
    private _tenantId?;
    get tenantId(): string;
    set tenantId(value: string);
    resetTenantId(): void;
    get tenantIdInput(): string | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationSharePointConfiguration {
    /**
    * crawler_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#crawler_configuration BedrockagentDataSource#crawler_configuration}
    */
    readonly crawlerConfiguration?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration[] | cdktf.IResolvable;
    /**
    * source_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#source_configuration BedrockagentDataSource#source_configuration}
    */
    readonly sourceConfiguration?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationSharePointConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfiguration | cdktf.IResolvable | undefined);
    private _crawlerConfiguration;
    get crawlerConfiguration(): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationList;
    putCrawlerConfiguration(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration[] | cdktf.IResolvable): void;
    resetCrawlerConfiguration(): void;
    get crawlerConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration[] | undefined;
    private _sourceConfiguration;
    get sourceConfiguration(): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationList;
    putSourceConfiguration(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration[] | cdktf.IResolvable): void;
    resetSourceConfiguration(): void;
    get sourceConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration[] | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationSharePointConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#max_pages BedrockagentDataSource#max_pages}
    */
    readonly maxPages?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#rate_limit BedrockagentDataSource#rate_limit}
    */
    readonly rateLimit?: number;
}
export declare function bedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits | cdktf.IResolvable | undefined);
    private _maxPages?;
    get maxPages(): number;
    set maxPages(value: number);
    resetMaxPages(): void;
    get maxPagesInput(): number | undefined;
    private _rateLimit?;
    get rateLimit(): number;
    set rateLimit(value: number);
    resetRateLimit(): void;
    get rateLimitInput(): number | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#exclusion_filters BedrockagentDataSource#exclusion_filters}
    */
    readonly exclusionFilters?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#inclusion_filters BedrockagentDataSource#inclusion_filters}
    */
    readonly inclusionFilters?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#scope BedrockagentDataSource#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#user_agent BedrockagentDataSource#user_agent}
    */
    readonly userAgent?: string;
    /**
    * crawler_limits block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#crawler_limits BedrockagentDataSource#crawler_limits}
    */
    readonly crawlerLimits?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined);
    private _exclusionFilters?;
    get exclusionFilters(): string[];
    set exclusionFilters(value: string[]);
    resetExclusionFilters(): void;
    get exclusionFiltersInput(): string[] | undefined;
    private _inclusionFilters?;
    get inclusionFilters(): string[];
    set inclusionFilters(value: string[]);
    resetInclusionFilters(): void;
    get inclusionFiltersInput(): string[] | undefined;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    resetScope(): void;
    get scopeInput(): string | undefined;
    private _userAgent?;
    get userAgent(): string;
    set userAgent(value: string);
    resetUserAgent(): void;
    get userAgentInput(): string | undefined;
    private _crawlerLimits;
    get crawlerLimits(): BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsList;
    putCrawlerLimits(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits[] | cdktf.IResolvable): void;
    resetCrawlerLimits(): void;
    get crawlerLimitsInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits[] | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#url BedrockagentDataSource#url}
    */
    readonly url?: string;
}
export declare function bedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls | cdktf.IResolvable | undefined);
    private _url?;
    get url(): string;
    set url(value: string);
    resetUrl(): void;
    get urlInput(): string | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration {
    /**
    * seed_urls block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#seed_urls BedrockagentDataSource#seed_urls}
    */
    readonly seedUrls?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration | cdktf.IResolvable | undefined);
    private _seedUrls;
    get seedUrls(): BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsList;
    putSeedUrls(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls[] | cdktf.IResolvable): void;
    resetSeedUrls(): void;
    get seedUrlsInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls[] | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration {
    /**
    * url_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#url_configuration BedrockagentDataSource#url_configuration}
    */
    readonly urlConfiguration?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration | cdktf.IResolvable | undefined);
    private _urlConfiguration;
    get urlConfiguration(): BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationList;
    putUrlConfiguration(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration[] | cdktf.IResolvable): void;
    resetUrlConfiguration(): void;
    get urlConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration[] | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfigurationWebConfiguration {
    /**
    * crawler_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#crawler_configuration BedrockagentDataSource#crawler_configuration}
    */
    readonly crawlerConfiguration?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration[] | cdktf.IResolvable;
    /**
    * source_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#source_configuration BedrockagentDataSource#source_configuration}
    */
    readonly sourceConfiguration?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceDataSourceConfigurationWebConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationWebConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationWebConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfigurationWebConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfigurationWebConfiguration | cdktf.IResolvable | undefined);
    private _crawlerConfiguration;
    get crawlerConfiguration(): BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationList;
    putCrawlerConfiguration(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration[] | cdktf.IResolvable): void;
    resetCrawlerConfiguration(): void;
    get crawlerConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration[] | undefined;
    private _sourceConfiguration;
    get sourceConfiguration(): BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationList;
    putSourceConfiguration(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration[] | cdktf.IResolvable): void;
    resetSourceConfiguration(): void;
    get sourceConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration[] | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationWebConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfigurationWebConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationWebConfigurationOutputReference;
}
export interface BedrockagentDataSourceDataSourceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#type BedrockagentDataSource#type}
    */
    readonly type: string;
    /**
    * confluence_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#confluence_configuration BedrockagentDataSource#confluence_configuration}
    */
    readonly confluenceConfiguration?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfiguration[] | cdktf.IResolvable;
    /**
    * s3_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#s3_configuration BedrockagentDataSource#s3_configuration}
    */
    readonly s3Configuration?: BedrockagentDataSourceDataSourceConfigurationS3Configuration[] | cdktf.IResolvable;
    /**
    * salesforce_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#salesforce_configuration BedrockagentDataSource#salesforce_configuration}
    */
    readonly salesforceConfiguration?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfiguration[] | cdktf.IResolvable;
    /**
    * share_point_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#share_point_configuration BedrockagentDataSource#share_point_configuration}
    */
    readonly sharePointConfiguration?: BedrockagentDataSourceDataSourceConfigurationSharePointConfiguration[] | cdktf.IResolvable;
    /**
    * web_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#web_configuration BedrockagentDataSource#web_configuration}
    */
    readonly webConfiguration?: BedrockagentDataSourceDataSourceConfigurationWebConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceDataSourceConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceDataSourceConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceDataSourceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceDataSourceConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceDataSourceConfiguration | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _confluenceConfiguration;
    get confluenceConfiguration(): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationList;
    putConfluenceConfiguration(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfiguration[] | cdktf.IResolvable): void;
    resetConfluenceConfiguration(): void;
    get confluenceConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationConfluenceConfiguration[] | undefined;
    private _s3Configuration;
    get s3Configuration(): BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList;
    putS3Configuration(value: BedrockagentDataSourceDataSourceConfigurationS3Configuration[] | cdktf.IResolvable): void;
    resetS3Configuration(): void;
    get s3ConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationS3Configuration[] | undefined;
    private _salesforceConfiguration;
    get salesforceConfiguration(): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationList;
    putSalesforceConfiguration(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfiguration[] | cdktf.IResolvable): void;
    resetSalesforceConfiguration(): void;
    get salesforceConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationSalesforceConfiguration[] | undefined;
    private _sharePointConfiguration;
    get sharePointConfiguration(): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationList;
    putSharePointConfiguration(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfiguration[] | cdktf.IResolvable): void;
    resetSharePointConfiguration(): void;
    get sharePointConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationSharePointConfiguration[] | undefined;
    private _webConfiguration;
    get webConfiguration(): BedrockagentDataSourceDataSourceConfigurationWebConfigurationList;
    putWebConfiguration(value: BedrockagentDataSourceDataSourceConfigurationWebConfiguration[] | cdktf.IResolvable): void;
    resetWebConfiguration(): void;
    get webConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfigurationWebConfiguration[] | undefined;
}
export declare class BedrockagentDataSourceDataSourceConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceDataSourceConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceDataSourceConfigurationOutputReference;
}
export interface BedrockagentDataSourceServerSideEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#kms_key_arn BedrockagentDataSource#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export declare function bedrockagentDataSourceServerSideEncryptionConfigurationToTerraform(struct?: BedrockagentDataSourceServerSideEncryptionConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceServerSideEncryptionConfigurationToHclTerraform(struct?: BedrockagentDataSourceServerSideEncryptionConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceServerSideEncryptionConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceServerSideEncryptionConfiguration | cdktf.IResolvable | undefined);
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
}
export declare class BedrockagentDataSourceServerSideEncryptionConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceServerSideEncryptionConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference;
}
export interface BedrockagentDataSourceTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#create BedrockagentDataSource#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#delete BedrockagentDataSource#delete}
    */
    readonly delete?: string;
}
export declare function bedrockagentDataSourceTimeoutsToTerraform(struct?: BedrockagentDataSourceTimeouts | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceTimeoutsToHclTerraform(struct?: BedrockagentDataSourceTimeouts | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BedrockagentDataSourceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceTimeouts | cdktf.IResolvable | undefined);
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
}
export interface BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#max_tokens BedrockagentDataSource#max_tokens}
    */
    readonly maxTokens: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#overlap_percentage BedrockagentDataSource#overlap_percentage}
    */
    readonly overlapPercentage: number;
}
export declare function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration | cdktf.IResolvable | undefined);
    private _maxTokens?;
    get maxTokens(): number;
    set maxTokens(value: number);
    get maxTokensInput(): number | undefined;
    private _overlapPercentage?;
    get overlapPercentage(): number;
    set overlapPercentage(value: number);
    get overlapPercentageInput(): number | undefined;
}
export declare class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference;
}
export interface BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#max_tokens BedrockagentDataSource#max_tokens}
    */
    readonly maxTokens: number;
}
export declare function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration | cdktf.IResolvable | undefined);
    private _maxTokens?;
    get maxTokens(): number;
    set maxTokens(value: number);
    get maxTokensInput(): number | undefined;
}
export declare class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationOutputReference;
}
export interface BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#overlap_tokens BedrockagentDataSource#overlap_tokens}
    */
    readonly overlapTokens: number;
    /**
    * level_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#level_configuration BedrockagentDataSource#level_configuration}
    */
    readonly levelConfiguration?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration | cdktf.IResolvable | undefined);
    private _overlapTokens?;
    get overlapTokens(): number;
    set overlapTokens(value: number);
    get overlapTokensInput(): number | undefined;
    private _levelConfiguration;
    get levelConfiguration(): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationList;
    putLevelConfiguration(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration[] | cdktf.IResolvable): void;
    resetLevelConfiguration(): void;
    get levelConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration[] | undefined;
}
export declare class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference;
}
export interface BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#breakpoint_percentile_threshold BedrockagentDataSource#breakpoint_percentile_threshold}
    */
    readonly breakpointPercentileThreshold: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#buffer_size BedrockagentDataSource#buffer_size}
    */
    readonly bufferSize: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#max_token BedrockagentDataSource#max_token}
    */
    readonly maxToken: number;
}
export declare function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration | cdktf.IResolvable | undefined);
    private _breakpointPercentileThreshold?;
    get breakpointPercentileThreshold(): number;
    set breakpointPercentileThreshold(value: number);
    get breakpointPercentileThresholdInput(): number | undefined;
    private _bufferSize?;
    get bufferSize(): number;
    set bufferSize(value: number);
    get bufferSizeInput(): number | undefined;
    private _maxToken?;
    get maxToken(): number;
    set maxToken(value: number);
    get maxTokenInput(): number | undefined;
}
export declare class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference;
}
export interface BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#chunking_strategy BedrockagentDataSource#chunking_strategy}
    */
    readonly chunkingStrategy: string;
    /**
    * fixed_size_chunking_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#fixed_size_chunking_configuration BedrockagentDataSource#fixed_size_chunking_configuration}
    */
    readonly fixedSizeChunkingConfiguration?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration[] | cdktf.IResolvable;
    /**
    * hierarchical_chunking_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#hierarchical_chunking_configuration BedrockagentDataSource#hierarchical_chunking_configuration}
    */
    readonly hierarchicalChunkingConfiguration?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration[] | cdktf.IResolvable;
    /**
    * semantic_chunking_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#semantic_chunking_configuration BedrockagentDataSource#semantic_chunking_configuration}
    */
    readonly semanticChunkingConfiguration?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration | cdktf.IResolvable | undefined);
    private _chunkingStrategy?;
    get chunkingStrategy(): string;
    set chunkingStrategy(value: string);
    get chunkingStrategyInput(): string | undefined;
    private _fixedSizeChunkingConfiguration;
    get fixedSizeChunkingConfiguration(): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList;
    putFixedSizeChunkingConfiguration(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration[] | cdktf.IResolvable): void;
    resetFixedSizeChunkingConfiguration(): void;
    get fixedSizeChunkingConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration[] | undefined;
    private _hierarchicalChunkingConfiguration;
    get hierarchicalChunkingConfiguration(): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationList;
    putHierarchicalChunkingConfiguration(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration[] | cdktf.IResolvable): void;
    resetHierarchicalChunkingConfiguration(): void;
    get hierarchicalChunkingConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration[] | undefined;
    private _semanticChunkingConfiguration;
    get semanticChunkingConfiguration(): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationList;
    putSemanticChunkingConfiguration(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration[] | cdktf.IResolvable): void;
    resetSemanticChunkingConfiguration(): void;
    get semanticChunkingConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration[] | undefined;
}
export declare class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference;
}
export interface BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#uri BedrockagentDataSource#uri}
    */
    readonly uri: string;
}
export declare function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location | cdktf.IResolvable | undefined);
    private _uri?;
    get uri(): string;
    set uri(value: string);
    get uriInput(): string | undefined;
}
export declare class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationOutputReference;
}
export interface BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage {
    /**
    * s3_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#s3_location BedrockagentDataSource#s3_location}
    */
    readonly s3Location?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage | cdktf.IResolvable | undefined);
    private _s3Location;
    get s3Location(): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationList;
    putS3Location(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location[] | cdktf.IResolvable): void;
    resetS3Location(): void;
    get s3LocationInput(): cdktf.IResolvable | BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location[] | undefined;
}
export declare class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageOutputReference;
}
export interface BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#lambda_arn BedrockagentDataSource#lambda_arn}
    */
    readonly lambdaArn: string;
}
export declare function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration | cdktf.IResolvable | undefined);
    private _lambdaArn?;
    get lambdaArn(): string;
    set lambdaArn(value: string);
    get lambdaArnInput(): string | undefined;
}
export declare class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfigurationOutputReference;
}
export interface BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction {
    /**
    * transformation_lambda_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#transformation_lambda_configuration BedrockagentDataSource#transformation_lambda_configuration}
    */
    readonly transformationLambdaConfiguration?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction | cdktf.IResolvable | undefined);
    private _transformationLambdaConfiguration;
    get transformationLambdaConfiguration(): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfigurationList;
    putTransformationLambdaConfiguration(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration[] | cdktf.IResolvable): void;
    resetTransformationLambdaConfiguration(): void;
    get transformationLambdaConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration[] | undefined;
}
export declare class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionOutputReference;
}
export interface BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#step_to_apply BedrockagentDataSource#step_to_apply}
    */
    readonly stepToApply: string;
    /**
    * transformation_function block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#transformation_function BedrockagentDataSource#transformation_function}
    */
    readonly transformationFunction?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation | cdktf.IResolvable | undefined);
    private _stepToApply?;
    get stepToApply(): string;
    set stepToApply(value: string);
    get stepToApplyInput(): string | undefined;
    private _transformationFunction;
    get transformationFunction(): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionList;
    putTransformationFunction(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction[] | cdktf.IResolvable): void;
    resetTransformationFunction(): void;
    get transformationFunctionInput(): cdktf.IResolvable | BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction[] | undefined;
}
export declare class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationOutputReference;
}
export interface BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration {
    /**
    * intermediate_storage block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#intermediate_storage BedrockagentDataSource#intermediate_storage}
    */
    readonly intermediateStorage?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage[] | cdktf.IResolvable;
    /**
    * transformation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#transformation BedrockagentDataSource#transformation}
    */
    readonly transformation?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration | cdktf.IResolvable | undefined);
    private _intermediateStorage;
    get intermediateStorage(): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageList;
    putIntermediateStorage(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage[] | cdktf.IResolvable): void;
    resetIntermediateStorage(): void;
    get intermediateStorageInput(): cdktf.IResolvable | BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage[] | undefined;
    private _transformation;
    get transformation(): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationList;
    putTransformation(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation[] | cdktf.IResolvable): void;
    resetTransformation(): void;
    get transformationInput(): cdktf.IResolvable | BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation[] | undefined;
}
export declare class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationOutputReference;
}
export interface BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#parsing_prompt_string BedrockagentDataSource#parsing_prompt_string}
    */
    readonly parsingPromptString: string;
}
export declare function bedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt | cdktf.IResolvable | undefined);
    private _parsingPromptString?;
    get parsingPromptString(): string;
    set parsingPromptString(value: string);
    get parsingPromptStringInput(): string | undefined;
}
export declare class BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference;
}
export interface BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#model_arn BedrockagentDataSource#model_arn}
    */
    readonly modelArn: string;
    /**
    * parsing_prompt block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#parsing_prompt BedrockagentDataSource#parsing_prompt}
    */
    readonly parsingPrompt?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration | cdktf.IResolvable | undefined);
    private _modelArn?;
    get modelArn(): string;
    set modelArn(value: string);
    get modelArnInput(): string | undefined;
    private _parsingPrompt;
    get parsingPrompt(): BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptList;
    putParsingPrompt(value: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt[] | cdktf.IResolvable): void;
    resetParsingPrompt(): void;
    get parsingPromptInput(): cdktf.IResolvable | BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt[] | undefined;
}
export declare class BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference;
}
export interface BedrockagentDataSourceVectorIngestionConfigurationParsingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#parsing_strategy BedrockagentDataSource#parsing_strategy}
    */
    readonly parsingStrategy: string;
    /**
    * bedrock_foundation_model_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#bedrock_foundation_model_configuration BedrockagentDataSource#bedrock_foundation_model_configuration}
    */
    readonly bedrockFoundationModelConfiguration?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationParsingConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationParsingConfiguration | cdktf.IResolvable | undefined);
    private _parsingStrategy?;
    get parsingStrategy(): string;
    set parsingStrategy(value: string);
    get parsingStrategyInput(): string | undefined;
    private _bedrockFoundationModelConfiguration;
    get bedrockFoundationModelConfiguration(): BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationList;
    putBedrockFoundationModelConfiguration(value: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration[] | cdktf.IResolvable): void;
    resetBedrockFoundationModelConfiguration(): void;
    get bedrockFoundationModelConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration[] | undefined;
}
export declare class BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationOutputReference;
}
export interface BedrockagentDataSourceVectorIngestionConfiguration {
    /**
    * chunking_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#chunking_configuration BedrockagentDataSource#chunking_configuration}
    */
    readonly chunkingConfiguration?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration[] | cdktf.IResolvable;
    /**
    * custom_transformation_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#custom_transformation_configuration BedrockagentDataSource#custom_transformation_configuration}
    */
    readonly customTransformationConfiguration?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration[] | cdktf.IResolvable;
    /**
    * parsing_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#parsing_configuration BedrockagentDataSource#parsing_configuration}
    */
    readonly parsingConfiguration?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentDataSourceVectorIngestionConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentDataSourceVectorIngestionConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentDataSourceVectorIngestionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentDataSourceVectorIngestionConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentDataSourceVectorIngestionConfiguration | cdktf.IResolvable | undefined);
    private _chunkingConfiguration;
    get chunkingConfiguration(): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList;
    putChunkingConfiguration(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration[] | cdktf.IResolvable): void;
    resetChunkingConfiguration(): void;
    get chunkingConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration[] | undefined;
    private _customTransformationConfiguration;
    get customTransformationConfiguration(): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationList;
    putCustomTransformationConfiguration(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration[] | cdktf.IResolvable): void;
    resetCustomTransformationConfiguration(): void;
    get customTransformationConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration[] | undefined;
    private _parsingConfiguration;
    get parsingConfiguration(): BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationList;
    putParsingConfiguration(value: BedrockagentDataSourceVectorIngestionConfigurationParsingConfiguration[] | cdktf.IResolvable): void;
    resetParsingConfiguration(): void;
    get parsingConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceVectorIngestionConfigurationParsingConfiguration[] | undefined;
}
export declare class BedrockagentDataSourceVectorIngestionConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentDataSourceVectorIngestionConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentDataSourceVectorIngestionConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source aws_bedrockagent_data_source}
*/
export declare class BedrockagentDataSource extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_bedrockagent_data_source";
    /**
    * Generates CDKTF code for importing a BedrockagentDataSource resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BedrockagentDataSource to import
    * @param importFromId The id of the existing BedrockagentDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BedrockagentDataSource to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_data_source aws_bedrockagent_data_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BedrockagentDataSourceConfig
    */
    constructor(scope: Construct, id: string, config: BedrockagentDataSourceConfig);
    private _dataDeletionPolicy?;
    get dataDeletionPolicy(): string;
    set dataDeletionPolicy(value: string);
    resetDataDeletionPolicy(): void;
    get dataDeletionPolicyInput(): string | undefined;
    get dataSourceId(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _knowledgeBaseId?;
    get knowledgeBaseId(): string;
    set knowledgeBaseId(value: string);
    get knowledgeBaseIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _dataSourceConfiguration;
    get dataSourceConfiguration(): BedrockagentDataSourceDataSourceConfigurationList;
    putDataSourceConfiguration(value: BedrockagentDataSourceDataSourceConfiguration[] | cdktf.IResolvable): void;
    resetDataSourceConfiguration(): void;
    get dataSourceConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceDataSourceConfiguration[] | undefined;
    private _serverSideEncryptionConfiguration;
    get serverSideEncryptionConfiguration(): BedrockagentDataSourceServerSideEncryptionConfigurationList;
    putServerSideEncryptionConfiguration(value: BedrockagentDataSourceServerSideEncryptionConfiguration[] | cdktf.IResolvable): void;
    resetServerSideEncryptionConfiguration(): void;
    get serverSideEncryptionConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceServerSideEncryptionConfiguration[] | undefined;
    private _timeouts;
    get timeouts(): BedrockagentDataSourceTimeoutsOutputReference;
    putTimeouts(value: BedrockagentDataSourceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | BedrockagentDataSourceTimeouts | undefined;
    private _vectorIngestionConfiguration;
    get vectorIngestionConfiguration(): BedrockagentDataSourceVectorIngestionConfigurationList;
    putVectorIngestionConfiguration(value: BedrockagentDataSourceVectorIngestionConfiguration[] | cdktf.IResolvable): void;
    resetVectorIngestionConfiguration(): void;
    get vectorIngestionConfigurationInput(): cdktf.IResolvable | BedrockagentDataSourceVectorIngestionConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
