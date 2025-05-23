/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketNotificationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#bucket S3BucketNotification#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#eventbridge S3BucketNotification#eventbridge}
    */
    readonly eventbridge?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#id S3BucketNotification#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * lambda_function block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#lambda_function S3BucketNotification#lambda_function}
    */
    readonly lambdaFunction?: S3BucketNotificationLambdaFunction[] | cdktf.IResolvable;
    /**
    * queue block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#queue S3BucketNotification#queue}
    */
    readonly queue?: S3BucketNotificationQueue[] | cdktf.IResolvable;
    /**
    * topic block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#topic S3BucketNotification#topic}
    */
    readonly topic?: S3BucketNotificationTopic[] | cdktf.IResolvable;
}
export interface S3BucketNotificationLambdaFunction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#events S3BucketNotification#events}
    */
    readonly events: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}
    */
    readonly filterPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}
    */
    readonly filterSuffix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#id S3BucketNotification#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#lambda_function_arn S3BucketNotification#lambda_function_arn}
    */
    readonly lambdaFunctionArn?: string;
}
export declare function s3BucketNotificationLambdaFunctionToTerraform(struct?: S3BucketNotificationLambdaFunction | cdktf.IResolvable): any;
export declare function s3BucketNotificationLambdaFunctionToHclTerraform(struct?: S3BucketNotificationLambdaFunction | cdktf.IResolvable): any;
export declare class S3BucketNotificationLambdaFunctionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketNotificationLambdaFunction | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketNotificationLambdaFunction | cdktf.IResolvable | undefined);
    private _events?;
    get events(): string[];
    set events(value: string[]);
    get eventsInput(): string[] | undefined;
    private _filterPrefix?;
    get filterPrefix(): string;
    set filterPrefix(value: string);
    resetFilterPrefix(): void;
    get filterPrefixInput(): string | undefined;
    private _filterSuffix?;
    get filterSuffix(): string;
    set filterSuffix(value: string);
    resetFilterSuffix(): void;
    get filterSuffixInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _lambdaFunctionArn?;
    get lambdaFunctionArn(): string;
    set lambdaFunctionArn(value: string);
    resetLambdaFunctionArn(): void;
    get lambdaFunctionArnInput(): string | undefined;
}
export declare class S3BucketNotificationLambdaFunctionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketNotificationLambdaFunction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketNotificationLambdaFunctionOutputReference;
}
export interface S3BucketNotificationQueue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#events S3BucketNotification#events}
    */
    readonly events: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}
    */
    readonly filterPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}
    */
    readonly filterSuffix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#id S3BucketNotification#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#queue_arn S3BucketNotification#queue_arn}
    */
    readonly queueArn: string;
}
export declare function s3BucketNotificationQueueToTerraform(struct?: S3BucketNotificationQueue | cdktf.IResolvable): any;
export declare function s3BucketNotificationQueueToHclTerraform(struct?: S3BucketNotificationQueue | cdktf.IResolvable): any;
export declare class S3BucketNotificationQueueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketNotificationQueue | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketNotificationQueue | cdktf.IResolvable | undefined);
    private _events?;
    get events(): string[];
    set events(value: string[]);
    get eventsInput(): string[] | undefined;
    private _filterPrefix?;
    get filterPrefix(): string;
    set filterPrefix(value: string);
    resetFilterPrefix(): void;
    get filterPrefixInput(): string | undefined;
    private _filterSuffix?;
    get filterSuffix(): string;
    set filterSuffix(value: string);
    resetFilterSuffix(): void;
    get filterSuffixInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _queueArn?;
    get queueArn(): string;
    set queueArn(value: string);
    get queueArnInput(): string | undefined;
}
export declare class S3BucketNotificationQueueList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketNotificationQueue[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketNotificationQueueOutputReference;
}
export interface S3BucketNotificationTopic {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#events S3BucketNotification#events}
    */
    readonly events: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}
    */
    readonly filterPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}
    */
    readonly filterSuffix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#id S3BucketNotification#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#topic_arn S3BucketNotification#topic_arn}
    */
    readonly topicArn: string;
}
export declare function s3BucketNotificationTopicToTerraform(struct?: S3BucketNotificationTopic | cdktf.IResolvable): any;
export declare function s3BucketNotificationTopicToHclTerraform(struct?: S3BucketNotificationTopic | cdktf.IResolvable): any;
export declare class S3BucketNotificationTopicOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketNotificationTopic | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketNotificationTopic | cdktf.IResolvable | undefined);
    private _events?;
    get events(): string[];
    set events(value: string[]);
    get eventsInput(): string[] | undefined;
    private _filterPrefix?;
    get filterPrefix(): string;
    set filterPrefix(value: string);
    resetFilterPrefix(): void;
    get filterPrefixInput(): string | undefined;
    private _filterSuffix?;
    get filterSuffix(): string;
    set filterSuffix(value: string);
    resetFilterSuffix(): void;
    get filterSuffixInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _topicArn?;
    get topicArn(): string;
    set topicArn(value: string);
    get topicArnInput(): string | undefined;
}
export declare class S3BucketNotificationTopicList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketNotificationTopic[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketNotificationTopicOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification aws_s3_bucket_notification}
*/
export declare class S3BucketNotification extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_bucket_notification";
    /**
    * Generates CDKTF code for importing a S3BucketNotification resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketNotification to import
    * @param importFromId The id of the existing S3BucketNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketNotification to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_notification aws_s3_bucket_notification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketNotificationConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketNotificationConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _eventbridge?;
    get eventbridge(): boolean | cdktf.IResolvable;
    set eventbridge(value: boolean | cdktf.IResolvable);
    resetEventbridge(): void;
    get eventbridgeInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _lambdaFunction;
    get lambdaFunction(): S3BucketNotificationLambdaFunctionList;
    putLambdaFunction(value: S3BucketNotificationLambdaFunction[] | cdktf.IResolvable): void;
    resetLambdaFunction(): void;
    get lambdaFunctionInput(): cdktf.IResolvable | S3BucketNotificationLambdaFunction[] | undefined;
    private _queue;
    get queue(): S3BucketNotificationQueueList;
    putQueue(value: S3BucketNotificationQueue[] | cdktf.IResolvable): void;
    resetQueue(): void;
    get queueInput(): cdktf.IResolvable | S3BucketNotificationQueue[] | undefined;
    private _topic;
    get topic(): S3BucketNotificationTopicList;
    putTopic(value: S3BucketNotificationTopic[] | cdktf.IResolvable): void;
    resetTopic(): void;
    get topicInput(): cdktf.IResolvable | S3BucketNotificationTopic[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
