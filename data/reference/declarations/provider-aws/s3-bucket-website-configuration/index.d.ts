/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketWebsiteConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#bucket S3BucketWebsiteConfiguration#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#expected_bucket_owner S3BucketWebsiteConfiguration#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#id S3BucketWebsiteConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#routing_rules S3BucketWebsiteConfiguration#routing_rules}
    */
    readonly routingRules?: string;
    /**
    * error_document block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#error_document S3BucketWebsiteConfiguration#error_document}
    */
    readonly errorDocument?: S3BucketWebsiteConfigurationErrorDocument;
    /**
    * index_document block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#index_document S3BucketWebsiteConfiguration#index_document}
    */
    readonly indexDocument?: S3BucketWebsiteConfigurationIndexDocument;
    /**
    * redirect_all_requests_to block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#redirect_all_requests_to S3BucketWebsiteConfiguration#redirect_all_requests_to}
    */
    readonly redirectAllRequestsTo?: S3BucketWebsiteConfigurationRedirectAllRequestsTo;
    /**
    * routing_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#routing_rule S3BucketWebsiteConfiguration#routing_rule}
    */
    readonly routingRule?: S3BucketWebsiteConfigurationRoutingRule[] | cdktf.IResolvable;
}
export interface S3BucketWebsiteConfigurationErrorDocument {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#key S3BucketWebsiteConfiguration#key}
    */
    readonly key: string;
}
export declare function s3BucketWebsiteConfigurationErrorDocumentToTerraform(struct?: S3BucketWebsiteConfigurationErrorDocumentOutputReference | S3BucketWebsiteConfigurationErrorDocument): any;
export declare function s3BucketWebsiteConfigurationErrorDocumentToHclTerraform(struct?: S3BucketWebsiteConfigurationErrorDocumentOutputReference | S3BucketWebsiteConfigurationErrorDocument): any;
export declare class S3BucketWebsiteConfigurationErrorDocumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketWebsiteConfigurationErrorDocument | undefined;
    set internalValue(value: S3BucketWebsiteConfigurationErrorDocument | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
}
export interface S3BucketWebsiteConfigurationIndexDocument {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#suffix S3BucketWebsiteConfiguration#suffix}
    */
    readonly suffix: string;
}
export declare function s3BucketWebsiteConfigurationIndexDocumentToTerraform(struct?: S3BucketWebsiteConfigurationIndexDocumentOutputReference | S3BucketWebsiteConfigurationIndexDocument): any;
export declare function s3BucketWebsiteConfigurationIndexDocumentToHclTerraform(struct?: S3BucketWebsiteConfigurationIndexDocumentOutputReference | S3BucketWebsiteConfigurationIndexDocument): any;
export declare class S3BucketWebsiteConfigurationIndexDocumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketWebsiteConfigurationIndexDocument | undefined;
    set internalValue(value: S3BucketWebsiteConfigurationIndexDocument | undefined);
    private _suffix?;
    get suffix(): string;
    set suffix(value: string);
    get suffixInput(): string | undefined;
}
export interface S3BucketWebsiteConfigurationRedirectAllRequestsTo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#host_name S3BucketWebsiteConfiguration#host_name}
    */
    readonly hostName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#protocol S3BucketWebsiteConfiguration#protocol}
    */
    readonly protocol?: string;
}
export declare function s3BucketWebsiteConfigurationRedirectAllRequestsToToTerraform(struct?: S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference | S3BucketWebsiteConfigurationRedirectAllRequestsTo): any;
export declare function s3BucketWebsiteConfigurationRedirectAllRequestsToToHclTerraform(struct?: S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference | S3BucketWebsiteConfigurationRedirectAllRequestsTo): any;
export declare class S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketWebsiteConfigurationRedirectAllRequestsTo | undefined;
    set internalValue(value: S3BucketWebsiteConfigurationRedirectAllRequestsTo | undefined);
    private _hostName?;
    get hostName(): string;
    set hostName(value: string);
    get hostNameInput(): string | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string | undefined;
}
export interface S3BucketWebsiteConfigurationRoutingRuleCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#http_error_code_returned_equals S3BucketWebsiteConfiguration#http_error_code_returned_equals}
    */
    readonly httpErrorCodeReturnedEquals?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#key_prefix_equals S3BucketWebsiteConfiguration#key_prefix_equals}
    */
    readonly keyPrefixEquals?: string;
}
export declare function s3BucketWebsiteConfigurationRoutingRuleConditionToTerraform(struct?: S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference | S3BucketWebsiteConfigurationRoutingRuleCondition): any;
export declare function s3BucketWebsiteConfigurationRoutingRuleConditionToHclTerraform(struct?: S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference | S3BucketWebsiteConfigurationRoutingRuleCondition): any;
export declare class S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketWebsiteConfigurationRoutingRuleCondition | undefined;
    set internalValue(value: S3BucketWebsiteConfigurationRoutingRuleCondition | undefined);
    private _httpErrorCodeReturnedEquals?;
    get httpErrorCodeReturnedEquals(): string;
    set httpErrorCodeReturnedEquals(value: string);
    resetHttpErrorCodeReturnedEquals(): void;
    get httpErrorCodeReturnedEqualsInput(): string | undefined;
    private _keyPrefixEquals?;
    get keyPrefixEquals(): string;
    set keyPrefixEquals(value: string);
    resetKeyPrefixEquals(): void;
    get keyPrefixEqualsInput(): string | undefined;
}
export interface S3BucketWebsiteConfigurationRoutingRuleRedirect {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#host_name S3BucketWebsiteConfiguration#host_name}
    */
    readonly hostName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#http_redirect_code S3BucketWebsiteConfiguration#http_redirect_code}
    */
    readonly httpRedirectCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#protocol S3BucketWebsiteConfiguration#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#replace_key_prefix_with S3BucketWebsiteConfiguration#replace_key_prefix_with}
    */
    readonly replaceKeyPrefixWith?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#replace_key_with S3BucketWebsiteConfiguration#replace_key_with}
    */
    readonly replaceKeyWith?: string;
}
export declare function s3BucketWebsiteConfigurationRoutingRuleRedirectToTerraform(struct?: S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference | S3BucketWebsiteConfigurationRoutingRuleRedirect): any;
export declare function s3BucketWebsiteConfigurationRoutingRuleRedirectToHclTerraform(struct?: S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference | S3BucketWebsiteConfigurationRoutingRuleRedirect): any;
export declare class S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketWebsiteConfigurationRoutingRuleRedirect | undefined;
    set internalValue(value: S3BucketWebsiteConfigurationRoutingRuleRedirect | undefined);
    private _hostName?;
    get hostName(): string;
    set hostName(value: string);
    resetHostName(): void;
    get hostNameInput(): string | undefined;
    private _httpRedirectCode?;
    get httpRedirectCode(): string;
    set httpRedirectCode(value: string);
    resetHttpRedirectCode(): void;
    get httpRedirectCodeInput(): string | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string | undefined;
    private _replaceKeyPrefixWith?;
    get replaceKeyPrefixWith(): string;
    set replaceKeyPrefixWith(value: string);
    resetReplaceKeyPrefixWith(): void;
    get replaceKeyPrefixWithInput(): string | undefined;
    private _replaceKeyWith?;
    get replaceKeyWith(): string;
    set replaceKeyWith(value: string);
    resetReplaceKeyWith(): void;
    get replaceKeyWithInput(): string | undefined;
}
export interface S3BucketWebsiteConfigurationRoutingRule {
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#condition S3BucketWebsiteConfiguration#condition}
    */
    readonly condition?: S3BucketWebsiteConfigurationRoutingRuleCondition;
    /**
    * redirect block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#redirect S3BucketWebsiteConfiguration#redirect}
    */
    readonly redirect: S3BucketWebsiteConfigurationRoutingRuleRedirect;
}
export declare function s3BucketWebsiteConfigurationRoutingRuleToTerraform(struct?: S3BucketWebsiteConfigurationRoutingRule | cdktf.IResolvable): any;
export declare function s3BucketWebsiteConfigurationRoutingRuleToHclTerraform(struct?: S3BucketWebsiteConfigurationRoutingRule | cdktf.IResolvable): any;
export declare class S3BucketWebsiteConfigurationRoutingRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketWebsiteConfigurationRoutingRule | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketWebsiteConfigurationRoutingRule | cdktf.IResolvable | undefined);
    private _condition;
    get condition(): S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference;
    putCondition(value: S3BucketWebsiteConfigurationRoutingRuleCondition): void;
    resetCondition(): void;
    get conditionInput(): S3BucketWebsiteConfigurationRoutingRuleCondition | undefined;
    private _redirect;
    get redirect(): S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference;
    putRedirect(value: S3BucketWebsiteConfigurationRoutingRuleRedirect): void;
    get redirectInput(): S3BucketWebsiteConfigurationRoutingRuleRedirect | undefined;
}
export declare class S3BucketWebsiteConfigurationRoutingRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketWebsiteConfigurationRoutingRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketWebsiteConfigurationRoutingRuleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration aws_s3_bucket_website_configuration}
*/
export declare class S3BucketWebsiteConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_bucket_website_configuration";
    /**
    * Generates CDKTF code for importing a S3BucketWebsiteConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketWebsiteConfiguration to import
    * @param importFromId The id of the existing S3BucketWebsiteConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketWebsiteConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_website_configuration aws_s3_bucket_website_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketWebsiteConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketWebsiteConfigurationConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _expectedBucketOwner?;
    get expectedBucketOwner(): string;
    set expectedBucketOwner(value: string);
    resetExpectedBucketOwner(): void;
    get expectedBucketOwnerInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _routingRules?;
    get routingRules(): string;
    set routingRules(value: string);
    resetRoutingRules(): void;
    get routingRulesInput(): string | undefined;
    get websiteDomain(): string;
    get websiteEndpoint(): string;
    private _errorDocument;
    get errorDocument(): S3BucketWebsiteConfigurationErrorDocumentOutputReference;
    putErrorDocument(value: S3BucketWebsiteConfigurationErrorDocument): void;
    resetErrorDocument(): void;
    get errorDocumentInput(): S3BucketWebsiteConfigurationErrorDocument | undefined;
    private _indexDocument;
    get indexDocument(): S3BucketWebsiteConfigurationIndexDocumentOutputReference;
    putIndexDocument(value: S3BucketWebsiteConfigurationIndexDocument): void;
    resetIndexDocument(): void;
    get indexDocumentInput(): S3BucketWebsiteConfigurationIndexDocument | undefined;
    private _redirectAllRequestsTo;
    get redirectAllRequestsTo(): S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference;
    putRedirectAllRequestsTo(value: S3BucketWebsiteConfigurationRedirectAllRequestsTo): void;
    resetRedirectAllRequestsTo(): void;
    get redirectAllRequestsToInput(): S3BucketWebsiteConfigurationRedirectAllRequestsTo | undefined;
    private _routingRule;
    get routingRule(): S3BucketWebsiteConfigurationRoutingRuleList;
    putRoutingRule(value: S3BucketWebsiteConfigurationRoutingRule[] | cdktf.IResolvable): void;
    resetRoutingRule(): void;
    get routingRuleInput(): cdktf.IResolvable | S3BucketWebsiteConfigurationRoutingRule[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
