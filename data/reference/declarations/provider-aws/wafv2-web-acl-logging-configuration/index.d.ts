/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Wafv2WebAclLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#id Wafv2WebAclLoggingConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * AWS Kinesis Firehose Delivery Stream ARNs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#log_destination_configs Wafv2WebAclLoggingConfiguration#log_destination_configs}
    */
    readonly logDestinationConfigs: string[];
    /**
    * AWS WebACL ARN
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#resource_arn Wafv2WebAclLoggingConfiguration#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * logging_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#logging_filter Wafv2WebAclLoggingConfiguration#logging_filter}
    */
    readonly loggingFilter?: Wafv2WebAclLoggingConfigurationLoggingFilter;
    /**
    * redacted_fields block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#redacted_fields Wafv2WebAclLoggingConfiguration#redacted_fields}
    */
    readonly redactedFields?: Wafv2WebAclLoggingConfigurationRedactedFields[] | cdktf.IResolvable;
}
export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#action Wafv2WebAclLoggingConfiguration#action}
    */
    readonly action: string;
}
export declare function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference | Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition): any;
export declare function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference | Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition): any;
export declare class Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string | undefined;
}
export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#label_name Wafv2WebAclLoggingConfiguration#label_name}
    */
    readonly labelName: string;
}
export declare function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference | Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition): any;
export declare function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference | Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition): any;
export declare class Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition | undefined);
    private _labelName?;
    get labelName(): string;
    set labelName(value: string);
    get labelNameInput(): string | undefined;
}
export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition {
    /**
    * action_condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#action_condition Wafv2WebAclLoggingConfiguration#action_condition}
    */
    readonly actionCondition?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition;
    /**
    * label_name_condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#label_name_condition Wafv2WebAclLoggingConfiguration#label_name_condition}
    */
    readonly labelNameCondition?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition;
}
export declare function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition | cdktf.IResolvable): any;
export declare function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition | cdktf.IResolvable): any;
export declare class Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition | cdktf.IResolvable | undefined);
    private _actionCondition;
    get actionCondition(): Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference;
    putActionCondition(value: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition): void;
    resetActionCondition(): void;
    get actionConditionInput(): Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition | undefined;
    private _labelNameCondition;
    get labelNameCondition(): Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference;
    putLabelNameCondition(value: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition): void;
    resetLabelNameCondition(): void;
    get labelNameConditionInput(): Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition | undefined;
}
export declare class Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionOutputReference;
}
export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#behavior Wafv2WebAclLoggingConfiguration#behavior}
    */
    readonly behavior: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#requirement Wafv2WebAclLoggingConfiguration#requirement}
    */
    readonly requirement: string;
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#condition Wafv2WebAclLoggingConfiguration#condition}
    */
    readonly condition: Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition[] | cdktf.IResolvable;
}
export declare function wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilter | cdktf.IResolvable): any;
export declare function wafv2WebAclLoggingConfigurationLoggingFilterFilterToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilter | cdktf.IResolvable): any;
export declare class Wafv2WebAclLoggingConfigurationLoggingFilterFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclLoggingConfigurationLoggingFilterFilter | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationLoggingFilterFilter | cdktf.IResolvable | undefined);
    private _behavior?;
    get behavior(): string;
    set behavior(value: string);
    get behaviorInput(): string | undefined;
    private _requirement?;
    get requirement(): string;
    set requirement(value: string);
    get requirementInput(): string | undefined;
    private _condition;
    get condition(): Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionList;
    putCondition(value: Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition[] | cdktf.IResolvable): void;
    get conditionInput(): cdktf.IResolvable | Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition[] | undefined;
}
export declare class Wafv2WebAclLoggingConfigurationLoggingFilterFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclLoggingConfigurationLoggingFilterFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclLoggingConfigurationLoggingFilterFilterOutputReference;
}
export interface Wafv2WebAclLoggingConfigurationLoggingFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#default_behavior Wafv2WebAclLoggingConfiguration#default_behavior}
    */
    readonly defaultBehavior: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#filter Wafv2WebAclLoggingConfiguration#filter}
    */
    readonly filter: Wafv2WebAclLoggingConfigurationLoggingFilterFilter[] | cdktf.IResolvable;
}
export declare function wafv2WebAclLoggingConfigurationLoggingFilterToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference | Wafv2WebAclLoggingConfigurationLoggingFilter): any;
export declare function wafv2WebAclLoggingConfigurationLoggingFilterToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference | Wafv2WebAclLoggingConfigurationLoggingFilter): any;
export declare class Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclLoggingConfigurationLoggingFilter | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationLoggingFilter | undefined);
    private _defaultBehavior?;
    get defaultBehavior(): string;
    set defaultBehavior(value: string);
    get defaultBehaviorInput(): string | undefined;
    private _filter;
    get filter(): Wafv2WebAclLoggingConfigurationLoggingFilterFilterList;
    putFilter(value: Wafv2WebAclLoggingConfigurationLoggingFilterFilter[] | cdktf.IResolvable): void;
    get filterInput(): cdktf.IResolvable | Wafv2WebAclLoggingConfigurationLoggingFilterFilter[] | undefined;
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsMethod {
}
export declare function wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsMethod): any;
export declare function wafv2WebAclLoggingConfigurationRedactedFieldsMethodToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsMethod): any;
export declare class Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclLoggingConfigurationRedactedFieldsMethod | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationRedactedFieldsMethod | undefined);
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString {
}
export declare function wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString): any;
export declare function wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString): any;
export declare class Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString | undefined);
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#name Wafv2WebAclLoggingConfiguration#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader): any;
export declare function wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader): any;
export declare class Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath {
}
export declare function wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath): any;
export declare function wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath): any;
export declare class Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath | undefined);
}
export interface Wafv2WebAclLoggingConfigurationRedactedFields {
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#method Wafv2WebAclLoggingConfiguration#method}
    */
    readonly method?: Wafv2WebAclLoggingConfigurationRedactedFieldsMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#query_string Wafv2WebAclLoggingConfiguration#query_string}
    */
    readonly queryString?: Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#single_header Wafv2WebAclLoggingConfiguration#single_header}
    */
    readonly singleHeader?: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#uri_path Wafv2WebAclLoggingConfiguration#uri_path}
    */
    readonly uriPath?: Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath;
}
export declare function wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFields | cdktf.IResolvable): any;
export declare function wafv2WebAclLoggingConfigurationRedactedFieldsToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFields | cdktf.IResolvable): any;
export declare class Wafv2WebAclLoggingConfigurationRedactedFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclLoggingConfigurationRedactedFields | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationRedactedFields | cdktf.IResolvable | undefined);
    private _method;
    get method(): Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference;
    putMethod(value: Wafv2WebAclLoggingConfigurationRedactedFieldsMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclLoggingConfigurationRedactedFieldsMethod | undefined;
    private _queryString;
    get queryString(): Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString | undefined;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader | undefined;
    private _uriPath;
    get uriPath(): Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference;
    putUriPath(value: Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath | undefined;
}
export declare class Wafv2WebAclLoggingConfigurationRedactedFieldsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclLoggingConfigurationRedactedFields[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclLoggingConfigurationRedactedFieldsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration aws_wafv2_web_acl_logging_configuration}
*/
export declare class Wafv2WebAclLoggingConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_wafv2_web_acl_logging_configuration";
    /**
    * Generates CDKTF code for importing a Wafv2WebAclLoggingConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Wafv2WebAclLoggingConfiguration to import
    * @param importFromId The id of the existing Wafv2WebAclLoggingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Wafv2WebAclLoggingConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl_logging_configuration aws_wafv2_web_acl_logging_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2WebAclLoggingConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: Wafv2WebAclLoggingConfigurationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _logDestinationConfigs?;
    get logDestinationConfigs(): string[];
    set logDestinationConfigs(value: string[]);
    get logDestinationConfigsInput(): string[] | undefined;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    private _loggingFilter;
    get loggingFilter(): Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference;
    putLoggingFilter(value: Wafv2WebAclLoggingConfigurationLoggingFilter): void;
    resetLoggingFilter(): void;
    get loggingFilterInput(): Wafv2WebAclLoggingConfigurationLoggingFilter | undefined;
    private _redactedFields;
    get redactedFields(): Wafv2WebAclLoggingConfigurationRedactedFieldsList;
    putRedactedFields(value: Wafv2WebAclLoggingConfigurationRedactedFields[] | cdktf.IResolvable): void;
    resetRedactedFields(): void;
    get redactedFieldsInput(): cdktf.IResolvable | Wafv2WebAclLoggingConfigurationRedactedFields[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
