/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudtrailConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#cloud_watch_logs_group_arn Cloudtrail#cloud_watch_logs_group_arn}
    */
    readonly cloudWatchLogsGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#cloud_watch_logs_role_arn Cloudtrail#cloud_watch_logs_role_arn}
    */
    readonly cloudWatchLogsRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#enable_log_file_validation Cloudtrail#enable_log_file_validation}
    */
    readonly enableLogFileValidation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#enable_logging Cloudtrail#enable_logging}
    */
    readonly enableLogging?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#id Cloudtrail#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#include_global_service_events Cloudtrail#include_global_service_events}
    */
    readonly includeGlobalServiceEvents?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#is_multi_region_trail Cloudtrail#is_multi_region_trail}
    */
    readonly isMultiRegionTrail?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#is_organization_trail Cloudtrail#is_organization_trail}
    */
    readonly isOrganizationTrail?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#kms_key_id Cloudtrail#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#name Cloudtrail#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#s3_bucket_name Cloudtrail#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#s3_key_prefix Cloudtrail#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#sns_topic_name Cloudtrail#sns_topic_name}
    */
    readonly snsTopicName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#tags Cloudtrail#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#tags_all Cloudtrail#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * advanced_event_selector block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#advanced_event_selector Cloudtrail#advanced_event_selector}
    */
    readonly advancedEventSelector?: CloudtrailAdvancedEventSelector[] | cdktf.IResolvable;
    /**
    * event_selector block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#event_selector Cloudtrail#event_selector}
    */
    readonly eventSelector?: CloudtrailEventSelector[] | cdktf.IResolvable;
    /**
    * insight_selector block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#insight_selector Cloudtrail#insight_selector}
    */
    readonly insightSelector?: CloudtrailInsightSelector[] | cdktf.IResolvable;
}
export interface CloudtrailAdvancedEventSelectorFieldSelector {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#ends_with Cloudtrail#ends_with}
    */
    readonly endsWith?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#equals Cloudtrail#equals}
    */
    readonly equalTo?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#field Cloudtrail#field}
    */
    readonly field: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#not_ends_with Cloudtrail#not_ends_with}
    */
    readonly notEndsWith?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#not_equals Cloudtrail#not_equals}
    */
    readonly notEquals?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#not_starts_with Cloudtrail#not_starts_with}
    */
    readonly notStartsWith?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#starts_with Cloudtrail#starts_with}
    */
    readonly startsWith?: string[];
}
export declare function cloudtrailAdvancedEventSelectorFieldSelectorToTerraform(struct?: CloudtrailAdvancedEventSelectorFieldSelector | cdktf.IResolvable): any;
export declare function cloudtrailAdvancedEventSelectorFieldSelectorToHclTerraform(struct?: CloudtrailAdvancedEventSelectorFieldSelector | cdktf.IResolvable): any;
export declare class CloudtrailAdvancedEventSelectorFieldSelectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudtrailAdvancedEventSelectorFieldSelector | cdktf.IResolvable | undefined;
    set internalValue(value: CloudtrailAdvancedEventSelectorFieldSelector | cdktf.IResolvable | undefined);
    private _endsWith?;
    get endsWith(): string[];
    set endsWith(value: string[]);
    resetEndsWith(): void;
    get endsWithInput(): string[] | undefined;
    private _equals?;
    get equalTo(): string[];
    set equalTo(value: string[]);
    resetEqualTo(): void;
    get equalToInput(): string[] | undefined;
    private _field?;
    get field(): string;
    set field(value: string);
    get fieldInput(): string | undefined;
    private _notEndsWith?;
    get notEndsWith(): string[];
    set notEndsWith(value: string[]);
    resetNotEndsWith(): void;
    get notEndsWithInput(): string[] | undefined;
    private _notEquals?;
    get notEquals(): string[];
    set notEquals(value: string[]);
    resetNotEquals(): void;
    get notEqualsInput(): string[] | undefined;
    private _notStartsWith?;
    get notStartsWith(): string[];
    set notStartsWith(value: string[]);
    resetNotStartsWith(): void;
    get notStartsWithInput(): string[] | undefined;
    private _startsWith?;
    get startsWith(): string[];
    set startsWith(value: string[]);
    resetStartsWith(): void;
    get startsWithInput(): string[] | undefined;
}
export declare class CloudtrailAdvancedEventSelectorFieldSelectorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudtrailAdvancedEventSelectorFieldSelector[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudtrailAdvancedEventSelectorFieldSelectorOutputReference;
}
export interface CloudtrailAdvancedEventSelector {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#name Cloudtrail#name}
    */
    readonly name?: string;
    /**
    * field_selector block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#field_selector Cloudtrail#field_selector}
    */
    readonly fieldSelector: CloudtrailAdvancedEventSelectorFieldSelector[] | cdktf.IResolvable;
}
export declare function cloudtrailAdvancedEventSelectorToTerraform(struct?: CloudtrailAdvancedEventSelector | cdktf.IResolvable): any;
export declare function cloudtrailAdvancedEventSelectorToHclTerraform(struct?: CloudtrailAdvancedEventSelector | cdktf.IResolvable): any;
export declare class CloudtrailAdvancedEventSelectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudtrailAdvancedEventSelector | cdktf.IResolvable | undefined;
    set internalValue(value: CloudtrailAdvancedEventSelector | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _fieldSelector;
    get fieldSelector(): CloudtrailAdvancedEventSelectorFieldSelectorList;
    putFieldSelector(value: CloudtrailAdvancedEventSelectorFieldSelector[] | cdktf.IResolvable): void;
    get fieldSelectorInput(): cdktf.IResolvable | CloudtrailAdvancedEventSelectorFieldSelector[] | undefined;
}
export declare class CloudtrailAdvancedEventSelectorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudtrailAdvancedEventSelector[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudtrailAdvancedEventSelectorOutputReference;
}
export interface CloudtrailEventSelectorDataResource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#type Cloudtrail#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#values Cloudtrail#values}
    */
    readonly values: string[];
}
export declare function cloudtrailEventSelectorDataResourceToTerraform(struct?: CloudtrailEventSelectorDataResource | cdktf.IResolvable): any;
export declare function cloudtrailEventSelectorDataResourceToHclTerraform(struct?: CloudtrailEventSelectorDataResource | cdktf.IResolvable): any;
export declare class CloudtrailEventSelectorDataResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudtrailEventSelectorDataResource | cdktf.IResolvable | undefined;
    set internalValue(value: CloudtrailEventSelectorDataResource | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class CloudtrailEventSelectorDataResourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudtrailEventSelectorDataResource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudtrailEventSelectorDataResourceOutputReference;
}
export interface CloudtrailEventSelector {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#exclude_management_event_sources Cloudtrail#exclude_management_event_sources}
    */
    readonly excludeManagementEventSources?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#include_management_events Cloudtrail#include_management_events}
    */
    readonly includeManagementEvents?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#read_write_type Cloudtrail#read_write_type}
    */
    readonly readWriteType?: string;
    /**
    * data_resource block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#data_resource Cloudtrail#data_resource}
    */
    readonly dataResource?: CloudtrailEventSelectorDataResource[] | cdktf.IResolvable;
}
export declare function cloudtrailEventSelectorToTerraform(struct?: CloudtrailEventSelector | cdktf.IResolvable): any;
export declare function cloudtrailEventSelectorToHclTerraform(struct?: CloudtrailEventSelector | cdktf.IResolvable): any;
export declare class CloudtrailEventSelectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudtrailEventSelector | cdktf.IResolvable | undefined;
    set internalValue(value: CloudtrailEventSelector | cdktf.IResolvable | undefined);
    private _excludeManagementEventSources?;
    get excludeManagementEventSources(): string[];
    set excludeManagementEventSources(value: string[]);
    resetExcludeManagementEventSources(): void;
    get excludeManagementEventSourcesInput(): string[] | undefined;
    private _includeManagementEvents?;
    get includeManagementEvents(): boolean | cdktf.IResolvable;
    set includeManagementEvents(value: boolean | cdktf.IResolvable);
    resetIncludeManagementEvents(): void;
    get includeManagementEventsInput(): boolean | cdktf.IResolvable | undefined;
    private _readWriteType?;
    get readWriteType(): string;
    set readWriteType(value: string);
    resetReadWriteType(): void;
    get readWriteTypeInput(): string | undefined;
    private _dataResource;
    get dataResource(): CloudtrailEventSelectorDataResourceList;
    putDataResource(value: CloudtrailEventSelectorDataResource[] | cdktf.IResolvable): void;
    resetDataResource(): void;
    get dataResourceInput(): cdktf.IResolvable | CloudtrailEventSelectorDataResource[] | undefined;
}
export declare class CloudtrailEventSelectorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudtrailEventSelector[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudtrailEventSelectorOutputReference;
}
export interface CloudtrailInsightSelector {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#insight_type Cloudtrail#insight_type}
    */
    readonly insightType: string;
}
export declare function cloudtrailInsightSelectorToTerraform(struct?: CloudtrailInsightSelector | cdktf.IResolvable): any;
export declare function cloudtrailInsightSelectorToHclTerraform(struct?: CloudtrailInsightSelector | cdktf.IResolvable): any;
export declare class CloudtrailInsightSelectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudtrailInsightSelector | cdktf.IResolvable | undefined;
    set internalValue(value: CloudtrailInsightSelector | cdktf.IResolvable | undefined);
    private _insightType?;
    get insightType(): string;
    set insightType(value: string);
    get insightTypeInput(): string | undefined;
}
export declare class CloudtrailInsightSelectorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudtrailInsightSelector[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudtrailInsightSelectorOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail aws_cloudtrail}
*/
export declare class Cloudtrail extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudtrail";
    /**
    * Generates CDKTF code for importing a Cloudtrail resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Cloudtrail to import
    * @param importFromId The id of the existing Cloudtrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Cloudtrail to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail aws_cloudtrail} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudtrailConfig
    */
    constructor(scope: Construct, id: string, config: CloudtrailConfig);
    get arn(): string;
    private _cloudWatchLogsGroupArn?;
    get cloudWatchLogsGroupArn(): string;
    set cloudWatchLogsGroupArn(value: string);
    resetCloudWatchLogsGroupArn(): void;
    get cloudWatchLogsGroupArnInput(): string | undefined;
    private _cloudWatchLogsRoleArn?;
    get cloudWatchLogsRoleArn(): string;
    set cloudWatchLogsRoleArn(value: string);
    resetCloudWatchLogsRoleArn(): void;
    get cloudWatchLogsRoleArnInput(): string | undefined;
    private _enableLogFileValidation?;
    get enableLogFileValidation(): boolean | cdktf.IResolvable;
    set enableLogFileValidation(value: boolean | cdktf.IResolvable);
    resetEnableLogFileValidation(): void;
    get enableLogFileValidationInput(): boolean | cdktf.IResolvable | undefined;
    private _enableLogging?;
    get enableLogging(): boolean | cdktf.IResolvable;
    set enableLogging(value: boolean | cdktf.IResolvable);
    resetEnableLogging(): void;
    get enableLoggingInput(): boolean | cdktf.IResolvable | undefined;
    get homeRegion(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _includeGlobalServiceEvents?;
    get includeGlobalServiceEvents(): boolean | cdktf.IResolvable;
    set includeGlobalServiceEvents(value: boolean | cdktf.IResolvable);
    resetIncludeGlobalServiceEvents(): void;
    get includeGlobalServiceEventsInput(): boolean | cdktf.IResolvable | undefined;
    private _isMultiRegionTrail?;
    get isMultiRegionTrail(): boolean | cdktf.IResolvable;
    set isMultiRegionTrail(value: boolean | cdktf.IResolvable);
    resetIsMultiRegionTrail(): void;
    get isMultiRegionTrailInput(): boolean | cdktf.IResolvable | undefined;
    private _isOrganizationTrail?;
    get isOrganizationTrail(): boolean | cdktf.IResolvable;
    set isOrganizationTrail(value: boolean | cdktf.IResolvable);
    resetIsOrganizationTrail(): void;
    get isOrganizationTrailInput(): boolean | cdktf.IResolvable | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _s3BucketName?;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    get s3BucketNameInput(): string | undefined;
    private _s3KeyPrefix?;
    get s3KeyPrefix(): string;
    set s3KeyPrefix(value: string);
    resetS3KeyPrefix(): void;
    get s3KeyPrefixInput(): string | undefined;
    get snsTopicArn(): string;
    private _snsTopicName?;
    get snsTopicName(): string;
    set snsTopicName(value: string);
    resetSnsTopicName(): void;
    get snsTopicNameInput(): string | undefined;
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
    private _advancedEventSelector;
    get advancedEventSelector(): CloudtrailAdvancedEventSelectorList;
    putAdvancedEventSelector(value: CloudtrailAdvancedEventSelector[] | cdktf.IResolvable): void;
    resetAdvancedEventSelector(): void;
    get advancedEventSelectorInput(): cdktf.IResolvable | CloudtrailAdvancedEventSelector[] | undefined;
    private _eventSelector;
    get eventSelector(): CloudtrailEventSelectorList;
    putEventSelector(value: CloudtrailEventSelector[] | cdktf.IResolvable): void;
    resetEventSelector(): void;
    get eventSelectorInput(): cdktf.IResolvable | CloudtrailEventSelector[] | undefined;
    private _insightSelector;
    get insightSelector(): CloudtrailInsightSelectorList;
    putInsightSelector(value: CloudtrailInsightSelector[] | cdktf.IResolvable): void;
    resetInsightSelector(): void;
    get insightSelectorInput(): cdktf.IResolvable | CloudtrailInsightSelector[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
