/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KendraDataSourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#description KendraDataSource#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#id KendraDataSource#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#index_id KendraDataSource#index_id}
    */
    readonly indexId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#language_code KendraDataSource#language_code}
    */
    readonly languageCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#name KendraDataSource#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#role_arn KendraDataSource#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#schedule KendraDataSource#schedule}
    */
    readonly schedule?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#tags KendraDataSource#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#tags_all KendraDataSource#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#type KendraDataSource#type}
    */
    readonly type: string;
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#configuration KendraDataSource#configuration}
    */
    readonly configuration?: KendraDataSourceConfiguration;
    /**
    * custom_document_enrichment_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#custom_document_enrichment_configuration KendraDataSource#custom_document_enrichment_configuration}
    */
    readonly customDocumentEnrichmentConfiguration?: KendraDataSourceCustomDocumentEnrichmentConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#timeouts KendraDataSource#timeouts}
    */
    readonly timeouts?: KendraDataSourceTimeouts;
}
export interface KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#key_path KendraDataSource#key_path}
    */
    readonly keyPath?: string;
}
export declare function kendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToTerraform(struct?: KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference | KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration): any;
export declare function kendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToHclTerraform(struct?: KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference | KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration): any;
export declare class KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration | undefined;
    set internalValue(value: KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration | undefined);
    private _keyPath?;
    get keyPath(): string;
    set keyPath(value: string);
    resetKeyPath(): void;
    get keyPathInput(): string | undefined;
}
export interface KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#s3_prefix KendraDataSource#s3_prefix}
    */
    readonly s3Prefix?: string;
}
export declare function kendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToTerraform(struct?: KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference | KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration): any;
export declare function kendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToHclTerraform(struct?: KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference | KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration): any;
export declare class KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration | undefined;
    set internalValue(value: KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration | undefined);
    private _s3Prefix?;
    get s3Prefix(): string;
    set s3Prefix(value: string);
    resetS3Prefix(): void;
    get s3PrefixInput(): string | undefined;
}
export interface KendraDataSourceConfigurationS3Configuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#bucket_name KendraDataSource#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#exclusion_patterns KendraDataSource#exclusion_patterns}
    */
    readonly exclusionPatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#inclusion_patterns KendraDataSource#inclusion_patterns}
    */
    readonly inclusionPatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#inclusion_prefixes KendraDataSource#inclusion_prefixes}
    */
    readonly inclusionPrefixes?: string[];
    /**
    * access_control_list_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#access_control_list_configuration KendraDataSource#access_control_list_configuration}
    */
    readonly accessControlListConfiguration?: KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration;
    /**
    * documents_metadata_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#documents_metadata_configuration KendraDataSource#documents_metadata_configuration}
    */
    readonly documentsMetadataConfiguration?: KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration;
}
export declare function kendraDataSourceConfigurationS3ConfigurationToTerraform(struct?: KendraDataSourceConfigurationS3ConfigurationOutputReference | KendraDataSourceConfigurationS3Configuration): any;
export declare function kendraDataSourceConfigurationS3ConfigurationToHclTerraform(struct?: KendraDataSourceConfigurationS3ConfigurationOutputReference | KendraDataSourceConfigurationS3Configuration): any;
export declare class KendraDataSourceConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceConfigurationS3Configuration | undefined;
    set internalValue(value: KendraDataSourceConfigurationS3Configuration | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _exclusionPatterns?;
    get exclusionPatterns(): string[];
    set exclusionPatterns(value: string[]);
    resetExclusionPatterns(): void;
    get exclusionPatternsInput(): string[] | undefined;
    private _inclusionPatterns?;
    get inclusionPatterns(): string[];
    set inclusionPatterns(value: string[]);
    resetInclusionPatterns(): void;
    get inclusionPatternsInput(): string[] | undefined;
    private _inclusionPrefixes?;
    get inclusionPrefixes(): string[];
    set inclusionPrefixes(value: string[]);
    resetInclusionPrefixes(): void;
    get inclusionPrefixesInput(): string[] | undefined;
    private _accessControlListConfiguration;
    get accessControlListConfiguration(): KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference;
    putAccessControlListConfiguration(value: KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration): void;
    resetAccessControlListConfiguration(): void;
    get accessControlListConfigurationInput(): KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration | undefined;
    private _documentsMetadataConfiguration;
    get documentsMetadataConfiguration(): KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference;
    putDocumentsMetadataConfiguration(value: KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration): void;
    resetDocumentsMetadataConfiguration(): void;
    get documentsMetadataConfigurationInput(): KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration | undefined;
}
export interface KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#credentials KendraDataSource#credentials}
    */
    readonly credentials: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#host KendraDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#port KendraDataSource#port}
    */
    readonly port: number;
}
export declare function kendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationToTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication | cdktf.IResolvable): any;
export declare function kendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationToHclTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication | cdktf.IResolvable): any;
export declare class KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication | cdktf.IResolvable | undefined;
    set internalValue(value: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication | cdktf.IResolvable | undefined);
    private _credentials?;
    get credentials(): string;
    set credentials(value: string);
    get credentialsInput(): string | undefined;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number | undefined;
}
export declare class KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference;
}
export interface KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration {
    /**
    * basic_authentication block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#basic_authentication KendraDataSource#basic_authentication}
    */
    readonly basicAuthentication?: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication[] | cdktf.IResolvable;
}
export declare function kendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationToTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference | KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration): any;
export declare function kendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationToHclTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference | KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration): any;
export declare class KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration | undefined;
    set internalValue(value: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration | undefined);
    private _basicAuthentication;
    get basicAuthentication(): KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList;
    putBasicAuthentication(value: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication[] | cdktf.IResolvable): void;
    resetBasicAuthentication(): void;
    get basicAuthenticationInput(): cdktf.IResolvable | KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication[] | undefined;
}
export interface KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#credentials KendraDataSource#credentials}
    */
    readonly credentials?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#host KendraDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#port KendraDataSource#port}
    */
    readonly port: number;
}
export declare function kendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationToTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference | KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration): any;
export declare function kendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationToHclTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference | KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration): any;
export declare class KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration | undefined;
    set internalValue(value: KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration | undefined);
    private _credentials?;
    get credentials(): string;
    set credentials(value: string);
    resetCredentials(): void;
    get credentialsInput(): string | undefined;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number | undefined;
}
export interface KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#seed_urls KendraDataSource#seed_urls}
    */
    readonly seedUrls: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#web_crawler_mode KendraDataSource#web_crawler_mode}
    */
    readonly webCrawlerMode?: string;
}
export declare function kendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationToTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference | KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration): any;
export declare function kendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationToHclTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference | KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration): any;
export declare class KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration | undefined;
    set internalValue(value: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration | undefined);
    private _seedUrls?;
    get seedUrls(): string[];
    set seedUrls(value: string[]);
    get seedUrlsInput(): string[] | undefined;
    private _webCrawlerMode?;
    get webCrawlerMode(): string;
    set webCrawlerMode(value: string);
    resetWebCrawlerMode(): void;
    get webCrawlerModeInput(): string | undefined;
}
export interface KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#site_maps KendraDataSource#site_maps}
    */
    readonly siteMaps: string[];
}
export declare function kendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationToTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference | KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration): any;
export declare function kendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationToHclTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference | KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration): any;
export declare class KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration | undefined;
    set internalValue(value: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration | undefined);
    private _siteMaps?;
    get siteMaps(): string[];
    set siteMaps(value: string[]);
    get siteMapsInput(): string[] | undefined;
}
export interface KendraDataSourceConfigurationWebCrawlerConfigurationUrls {
    /**
    * seed_url_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#seed_url_configuration KendraDataSource#seed_url_configuration}
    */
    readonly seedUrlConfiguration?: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration;
    /**
    * site_maps_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#site_maps_configuration KendraDataSource#site_maps_configuration}
    */
    readonly siteMapsConfiguration?: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration;
}
export declare function kendraDataSourceConfigurationWebCrawlerConfigurationUrlsToTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference | KendraDataSourceConfigurationWebCrawlerConfigurationUrls): any;
export declare function kendraDataSourceConfigurationWebCrawlerConfigurationUrlsToHclTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference | KendraDataSourceConfigurationWebCrawlerConfigurationUrls): any;
export declare class KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceConfigurationWebCrawlerConfigurationUrls | undefined;
    set internalValue(value: KendraDataSourceConfigurationWebCrawlerConfigurationUrls | undefined);
    private _seedUrlConfiguration;
    get seedUrlConfiguration(): KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference;
    putSeedUrlConfiguration(value: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration): void;
    resetSeedUrlConfiguration(): void;
    get seedUrlConfigurationInput(): KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration | undefined;
    private _siteMapsConfiguration;
    get siteMapsConfiguration(): KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference;
    putSiteMapsConfiguration(value: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration): void;
    resetSiteMapsConfiguration(): void;
    get siteMapsConfigurationInput(): KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration | undefined;
}
export interface KendraDataSourceConfigurationWebCrawlerConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#crawl_depth KendraDataSource#crawl_depth}
    */
    readonly crawlDepth?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#max_content_size_per_page_in_mega_bytes KendraDataSource#max_content_size_per_page_in_mega_bytes}
    */
    readonly maxContentSizePerPageInMegaBytes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#max_links_per_page KendraDataSource#max_links_per_page}
    */
    readonly maxLinksPerPage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#max_urls_per_minute_crawl_rate KendraDataSource#max_urls_per_minute_crawl_rate}
    */
    readonly maxUrlsPerMinuteCrawlRate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#url_exclusion_patterns KendraDataSource#url_exclusion_patterns}
    */
    readonly urlExclusionPatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#url_inclusion_patterns KendraDataSource#url_inclusion_patterns}
    */
    readonly urlInclusionPatterns?: string[];
    /**
    * authentication_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#authentication_configuration KendraDataSource#authentication_configuration}
    */
    readonly authenticationConfiguration?: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration;
    /**
    * proxy_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#proxy_configuration KendraDataSource#proxy_configuration}
    */
    readonly proxyConfiguration?: KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration;
    /**
    * urls block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#urls KendraDataSource#urls}
    */
    readonly urls: KendraDataSourceConfigurationWebCrawlerConfigurationUrls;
}
export declare function kendraDataSourceConfigurationWebCrawlerConfigurationToTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference | KendraDataSourceConfigurationWebCrawlerConfiguration): any;
export declare function kendraDataSourceConfigurationWebCrawlerConfigurationToHclTerraform(struct?: KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference | KendraDataSourceConfigurationWebCrawlerConfiguration): any;
export declare class KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceConfigurationWebCrawlerConfiguration | undefined;
    set internalValue(value: KendraDataSourceConfigurationWebCrawlerConfiguration | undefined);
    private _crawlDepth?;
    get crawlDepth(): number;
    set crawlDepth(value: number);
    resetCrawlDepth(): void;
    get crawlDepthInput(): number | undefined;
    private _maxContentSizePerPageInMegaBytes?;
    get maxContentSizePerPageInMegaBytes(): number;
    set maxContentSizePerPageInMegaBytes(value: number);
    resetMaxContentSizePerPageInMegaBytes(): void;
    get maxContentSizePerPageInMegaBytesInput(): number | undefined;
    private _maxLinksPerPage?;
    get maxLinksPerPage(): number;
    set maxLinksPerPage(value: number);
    resetMaxLinksPerPage(): void;
    get maxLinksPerPageInput(): number | undefined;
    private _maxUrlsPerMinuteCrawlRate?;
    get maxUrlsPerMinuteCrawlRate(): number;
    set maxUrlsPerMinuteCrawlRate(value: number);
    resetMaxUrlsPerMinuteCrawlRate(): void;
    get maxUrlsPerMinuteCrawlRateInput(): number | undefined;
    private _urlExclusionPatterns?;
    get urlExclusionPatterns(): string[];
    set urlExclusionPatterns(value: string[]);
    resetUrlExclusionPatterns(): void;
    get urlExclusionPatternsInput(): string[] | undefined;
    private _urlInclusionPatterns?;
    get urlInclusionPatterns(): string[];
    set urlInclusionPatterns(value: string[]);
    resetUrlInclusionPatterns(): void;
    get urlInclusionPatternsInput(): string[] | undefined;
    private _authenticationConfiguration;
    get authenticationConfiguration(): KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference;
    putAuthenticationConfiguration(value: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration): void;
    resetAuthenticationConfiguration(): void;
    get authenticationConfigurationInput(): KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration | undefined;
    private _proxyConfiguration;
    get proxyConfiguration(): KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference;
    putProxyConfiguration(value: KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration): void;
    resetProxyConfiguration(): void;
    get proxyConfigurationInput(): KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration | undefined;
    private _urls;
    get urls(): KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference;
    putUrls(value: KendraDataSourceConfigurationWebCrawlerConfigurationUrls): void;
    get urlsInput(): KendraDataSourceConfigurationWebCrawlerConfigurationUrls | undefined;
}
export interface KendraDataSourceConfiguration {
    /**
    * s3_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#s3_configuration KendraDataSource#s3_configuration}
    */
    readonly s3Configuration?: KendraDataSourceConfigurationS3Configuration;
    /**
    * web_crawler_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#web_crawler_configuration KendraDataSource#web_crawler_configuration}
    */
    readonly webCrawlerConfiguration?: KendraDataSourceConfigurationWebCrawlerConfiguration;
}
export declare function kendraDataSourceConfigurationToTerraform(struct?: KendraDataSourceConfigurationOutputReference | KendraDataSourceConfiguration): any;
export declare function kendraDataSourceConfigurationToHclTerraform(struct?: KendraDataSourceConfigurationOutputReference | KendraDataSourceConfiguration): any;
export declare class KendraDataSourceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceConfiguration | undefined;
    set internalValue(value: KendraDataSourceConfiguration | undefined);
    private _s3Configuration;
    get s3Configuration(): KendraDataSourceConfigurationS3ConfigurationOutputReference;
    putS3Configuration(value: KendraDataSourceConfigurationS3Configuration): void;
    resetS3Configuration(): void;
    get s3ConfigurationInput(): KendraDataSourceConfigurationS3Configuration | undefined;
    private _webCrawlerConfiguration;
    get webCrawlerConfiguration(): KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference;
    putWebCrawlerConfiguration(value: KendraDataSourceConfigurationWebCrawlerConfiguration): void;
    resetWebCrawlerConfiguration(): void;
    get webCrawlerConfigurationInput(): KendraDataSourceConfigurationWebCrawlerConfiguration | undefined;
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#date_value KendraDataSource#date_value}
    */
    readonly dateValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#long_value KendraDataSource#long_value}
    */
    readonly longValue?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#string_list_value KendraDataSource#string_list_value}
    */
    readonly stringListValue?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#string_value KendraDataSource#string_value}
    */
    readonly stringValue?: string;
}
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue): any;
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue): any;
export declare class KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue | undefined;
    set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue | undefined);
    private _dateValue?;
    get dateValue(): string;
    set dateValue(value: string);
    resetDateValue(): void;
    get dateValueInput(): string | undefined;
    private _longValue?;
    get longValue(): number;
    set longValue(value: number);
    resetLongValue(): void;
    get longValueInput(): number | undefined;
    private _stringListValue?;
    get stringListValue(): string[];
    set stringListValue(value: string[]);
    resetStringListValue(): void;
    get stringListValueInput(): string[] | undefined;
    private _stringValue?;
    get stringValue(): string;
    set stringValue(value: string);
    resetStringValue(): void;
    get stringValueInput(): string | undefined;
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}
    */
    readonly conditionDocumentAttributeKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#operator KendraDataSource#operator}
    */
    readonly operator: string;
    /**
    * condition_on_value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#condition_on_value KendraDataSource#condition_on_value}
    */
    readonly conditionOnValue?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue;
}
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition): any;
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition): any;
export declare class KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition | undefined;
    set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition | undefined);
    private _conditionDocumentAttributeKey?;
    get conditionDocumentAttributeKey(): string;
    set conditionDocumentAttributeKey(value: string);
    get conditionDocumentAttributeKeyInput(): string | undefined;
    private _operator?;
    get operator(): string;
    set operator(value: string);
    get operatorInput(): string | undefined;
    private _conditionOnValue;
    get conditionOnValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference;
    putConditionOnValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue): void;
    resetConditionOnValue(): void;
    get conditionOnValueInput(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue | undefined;
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#date_value KendraDataSource#date_value}
    */
    readonly dateValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#long_value KendraDataSource#long_value}
    */
    readonly longValue?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#string_list_value KendraDataSource#string_list_value}
    */
    readonly stringListValue?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#string_value KendraDataSource#string_value}
    */
    readonly stringValue?: string;
}
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue): any;
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue): any;
export declare class KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue | undefined;
    set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue | undefined);
    private _dateValue?;
    get dateValue(): string;
    set dateValue(value: string);
    resetDateValue(): void;
    get dateValueInput(): string | undefined;
    private _longValue?;
    get longValue(): number;
    set longValue(value: number);
    resetLongValue(): void;
    get longValueInput(): number | undefined;
    private _stringListValue?;
    get stringListValue(): string[];
    set stringListValue(value: string[]);
    resetStringListValue(): void;
    get stringListValueInput(): string[] | undefined;
    private _stringValue?;
    get stringValue(): string;
    set stringValue(value: string);
    resetStringValue(): void;
    get stringValueInput(): string | undefined;
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#target_document_attribute_key KendraDataSource#target_document_attribute_key}
    */
    readonly targetDocumentAttributeKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#target_document_attribute_value_deletion KendraDataSource#target_document_attribute_value_deletion}
    */
    readonly targetDocumentAttributeValueDeletion?: boolean | cdktf.IResolvable;
    /**
    * target_document_attribute_value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#target_document_attribute_value KendraDataSource#target_document_attribute_value}
    */
    readonly targetDocumentAttributeValue?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue;
}
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget): any;
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget): any;
export declare class KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget | undefined;
    set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget | undefined);
    private _targetDocumentAttributeKey?;
    get targetDocumentAttributeKey(): string;
    set targetDocumentAttributeKey(value: string);
    resetTargetDocumentAttributeKey(): void;
    get targetDocumentAttributeKeyInput(): string | undefined;
    private _targetDocumentAttributeValueDeletion?;
    get targetDocumentAttributeValueDeletion(): boolean | cdktf.IResolvable;
    set targetDocumentAttributeValueDeletion(value: boolean | cdktf.IResolvable);
    resetTargetDocumentAttributeValueDeletion(): void;
    get targetDocumentAttributeValueDeletionInput(): boolean | cdktf.IResolvable | undefined;
    private _targetDocumentAttributeValue;
    get targetDocumentAttributeValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference;
    putTargetDocumentAttributeValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue): void;
    resetTargetDocumentAttributeValue(): void;
    get targetDocumentAttributeValueInput(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue | undefined;
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#document_content_deletion KendraDataSource#document_content_deletion}
    */
    readonly documentContentDeletion?: boolean | cdktf.IResolvable;
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#condition KendraDataSource#condition}
    */
    readonly condition?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition;
    /**
    * target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#target KendraDataSource#target}
    */
    readonly target?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget;
}
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations | cdktf.IResolvable): any;
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations | cdktf.IResolvable): any;
export declare class KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations | cdktf.IResolvable | undefined;
    set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations | cdktf.IResolvable | undefined);
    private _documentContentDeletion?;
    get documentContentDeletion(): boolean | cdktf.IResolvable;
    set documentContentDeletion(value: boolean | cdktf.IResolvable);
    resetDocumentContentDeletion(): void;
    get documentContentDeletionInput(): boolean | cdktf.IResolvable | undefined;
    private _condition;
    get condition(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference;
    putCondition(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition): void;
    resetCondition(): void;
    get conditionInput(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition | undefined;
    private _target;
    get target(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference;
    putTarget(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget): void;
    resetTarget(): void;
    get targetInput(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget | undefined;
}
export declare class KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference;
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#date_value KendraDataSource#date_value}
    */
    readonly dateValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#long_value KendraDataSource#long_value}
    */
    readonly longValue?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#string_list_value KendraDataSource#string_list_value}
    */
    readonly stringListValue?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#string_value KendraDataSource#string_value}
    */
    readonly stringValue?: string;
}
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue): any;
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue): any;
export declare class KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue | undefined;
    set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue | undefined);
    private _dateValue?;
    get dateValue(): string;
    set dateValue(value: string);
    resetDateValue(): void;
    get dateValueInput(): string | undefined;
    private _longValue?;
    get longValue(): number;
    set longValue(value: number);
    resetLongValue(): void;
    get longValueInput(): number | undefined;
    private _stringListValue?;
    get stringListValue(): string[];
    set stringListValue(value: string[]);
    resetStringListValue(): void;
    get stringListValueInput(): string[] | undefined;
    private _stringValue?;
    get stringValue(): string;
    set stringValue(value: string);
    resetStringValue(): void;
    get stringValueInput(): string | undefined;
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}
    */
    readonly conditionDocumentAttributeKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#operator KendraDataSource#operator}
    */
    readonly operator: string;
    /**
    * condition_on_value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#condition_on_value KendraDataSource#condition_on_value}
    */
    readonly conditionOnValue?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue;
}
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition): any;
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition): any;
export declare class KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition | undefined;
    set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition | undefined);
    private _conditionDocumentAttributeKey?;
    get conditionDocumentAttributeKey(): string;
    set conditionDocumentAttributeKey(value: string);
    get conditionDocumentAttributeKeyInput(): string | undefined;
    private _operator?;
    get operator(): string;
    set operator(value: string);
    get operatorInput(): string | undefined;
    private _conditionOnValue;
    get conditionOnValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference;
    putConditionOnValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue): void;
    resetConditionOnValue(): void;
    get conditionOnValueInput(): KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue | undefined;
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#lambda_arn KendraDataSource#lambda_arn}
    */
    readonly lambdaArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#s3_bucket KendraDataSource#s3_bucket}
    */
    readonly s3Bucket: string;
    /**
    * invocation_condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#invocation_condition KendraDataSource#invocation_condition}
    */
    readonly invocationCondition?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition;
}
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration): any;
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration): any;
export declare class KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration | undefined;
    set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration | undefined);
    private _lambdaArn?;
    get lambdaArn(): string;
    set lambdaArn(value: string);
    get lambdaArnInput(): string | undefined;
    private _s3Bucket?;
    get s3Bucket(): string;
    set s3Bucket(value: string);
    get s3BucketInput(): string | undefined;
    private _invocationCondition;
    get invocationCondition(): KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference;
    putInvocationCondition(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition): void;
    resetInvocationCondition(): void;
    get invocationConditionInput(): KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition | undefined;
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#date_value KendraDataSource#date_value}
    */
    readonly dateValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#long_value KendraDataSource#long_value}
    */
    readonly longValue?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#string_list_value KendraDataSource#string_list_value}
    */
    readonly stringListValue?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#string_value KendraDataSource#string_value}
    */
    readonly stringValue?: string;
}
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue): any;
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue): any;
export declare class KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue | undefined;
    set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue | undefined);
    private _dateValue?;
    get dateValue(): string;
    set dateValue(value: string);
    resetDateValue(): void;
    get dateValueInput(): string | undefined;
    private _longValue?;
    get longValue(): number;
    set longValue(value: number);
    resetLongValue(): void;
    get longValueInput(): number | undefined;
    private _stringListValue?;
    get stringListValue(): string[];
    set stringListValue(value: string[]);
    resetStringListValue(): void;
    get stringListValueInput(): string[] | undefined;
    private _stringValue?;
    get stringValue(): string;
    set stringValue(value: string);
    resetStringValue(): void;
    get stringValueInput(): string | undefined;
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}
    */
    readonly conditionDocumentAttributeKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#operator KendraDataSource#operator}
    */
    readonly operator: string;
    /**
    * condition_on_value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#condition_on_value KendraDataSource#condition_on_value}
    */
    readonly conditionOnValue?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue;
}
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition): any;
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition): any;
export declare class KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition | undefined;
    set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition | undefined);
    private _conditionDocumentAttributeKey?;
    get conditionDocumentAttributeKey(): string;
    set conditionDocumentAttributeKey(value: string);
    get conditionDocumentAttributeKeyInput(): string | undefined;
    private _operator?;
    get operator(): string;
    set operator(value: string);
    get operatorInput(): string | undefined;
    private _conditionOnValue;
    get conditionOnValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference;
    putConditionOnValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue): void;
    resetConditionOnValue(): void;
    get conditionOnValueInput(): KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue | undefined;
}
export interface KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#lambda_arn KendraDataSource#lambda_arn}
    */
    readonly lambdaArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#s3_bucket KendraDataSource#s3_bucket}
    */
    readonly s3Bucket: string;
    /**
    * invocation_condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#invocation_condition KendraDataSource#invocation_condition}
    */
    readonly invocationCondition?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition;
}
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration): any;
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference | KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration): any;
export declare class KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration | undefined;
    set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration | undefined);
    private _lambdaArn?;
    get lambdaArn(): string;
    set lambdaArn(value: string);
    get lambdaArnInput(): string | undefined;
    private _s3Bucket?;
    get s3Bucket(): string;
    set s3Bucket(value: string);
    get s3BucketInput(): string | undefined;
    private _invocationCondition;
    get invocationCondition(): KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference;
    putInvocationCondition(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition): void;
    resetInvocationCondition(): void;
    get invocationConditionInput(): KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition | undefined;
}
export interface KendraDataSourceCustomDocumentEnrichmentConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#role_arn KendraDataSource#role_arn}
    */
    readonly roleArn?: string;
    /**
    * inline_configurations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#inline_configurations KendraDataSource#inline_configurations}
    */
    readonly inlineConfigurations?: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations[] | cdktf.IResolvable;
    /**
    * post_extraction_hook_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#post_extraction_hook_configuration KendraDataSource#post_extraction_hook_configuration}
    */
    readonly postExtractionHookConfiguration?: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration;
    /**
    * pre_extraction_hook_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#pre_extraction_hook_configuration KendraDataSource#pre_extraction_hook_configuration}
    */
    readonly preExtractionHookConfiguration?: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration;
}
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationToTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference | KendraDataSourceCustomDocumentEnrichmentConfiguration): any;
export declare function kendraDataSourceCustomDocumentEnrichmentConfigurationToHclTerraform(struct?: KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference | KendraDataSourceCustomDocumentEnrichmentConfiguration): any;
export declare class KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceCustomDocumentEnrichmentConfiguration | undefined;
    set internalValue(value: KendraDataSourceCustomDocumentEnrichmentConfiguration | undefined);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _inlineConfigurations;
    get inlineConfigurations(): KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList;
    putInlineConfigurations(value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations[] | cdktf.IResolvable): void;
    resetInlineConfigurations(): void;
    get inlineConfigurationsInput(): cdktf.IResolvable | KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations[] | undefined;
    private _postExtractionHookConfiguration;
    get postExtractionHookConfiguration(): KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference;
    putPostExtractionHookConfiguration(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration): void;
    resetPostExtractionHookConfiguration(): void;
    get postExtractionHookConfigurationInput(): KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration | undefined;
    private _preExtractionHookConfiguration;
    get preExtractionHookConfiguration(): KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference;
    putPreExtractionHookConfiguration(value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration): void;
    resetPreExtractionHookConfiguration(): void;
    get preExtractionHookConfigurationInput(): KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration | undefined;
}
export interface KendraDataSourceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#create KendraDataSource#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#delete KendraDataSource#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#update KendraDataSource#update}
    */
    readonly update?: string;
}
export declare function kendraDataSourceTimeoutsToTerraform(struct?: KendraDataSourceTimeouts | cdktf.IResolvable): any;
export declare function kendraDataSourceTimeoutsToHclTerraform(struct?: KendraDataSourceTimeouts | cdktf.IResolvable): any;
export declare class KendraDataSourceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraDataSourceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: KendraDataSourceTimeouts | cdktf.IResolvable | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source aws_kendra_data_source}
*/
export declare class KendraDataSource extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_kendra_data_source";
    /**
    * Generates CDKTF code for importing a KendraDataSource resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KendraDataSource to import
    * @param importFromId The id of the existing KendraDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KendraDataSource to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_data_source aws_kendra_data_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KendraDataSourceConfig
    */
    constructor(scope: Construct, id: string, config: KendraDataSourceConfig);
    get arn(): string;
    get createdAt(): string;
    get dataSourceId(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get errorMessage(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _indexId?;
    get indexId(): string;
    set indexId(value: string);
    get indexIdInput(): string | undefined;
    private _languageCode?;
    get languageCode(): string;
    set languageCode(value: string);
    resetLanguageCode(): void;
    get languageCodeInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _schedule?;
    get schedule(): string;
    set schedule(value: string);
    resetSchedule(): void;
    get scheduleInput(): string | undefined;
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    get updatedAt(): string;
    private _configuration;
    get configuration(): KendraDataSourceConfigurationOutputReference;
    putConfiguration(value: KendraDataSourceConfiguration): void;
    resetConfiguration(): void;
    get configurationInput(): KendraDataSourceConfiguration | undefined;
    private _customDocumentEnrichmentConfiguration;
    get customDocumentEnrichmentConfiguration(): KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference;
    putCustomDocumentEnrichmentConfiguration(value: KendraDataSourceCustomDocumentEnrichmentConfiguration): void;
    resetCustomDocumentEnrichmentConfiguration(): void;
    get customDocumentEnrichmentConfigurationInput(): KendraDataSourceCustomDocumentEnrichmentConfiguration | undefined;
    private _timeouts;
    get timeouts(): KendraDataSourceTimeoutsOutputReference;
    putTimeouts(value: KendraDataSourceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | KendraDataSourceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
