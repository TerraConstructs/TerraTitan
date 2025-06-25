/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RekognitionStreamProcessorConfig extends cdktf.TerraformMetaArguments {
    /**
    * The identifier for your AWS Key Management Service key (AWS KMS key). You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#kms_key_id RekognitionStreamProcessor#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * An identifier you assign to the stream processor.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#name RekognitionStreamProcessor#name}
    */
    readonly name: string;
    /**
    * The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#role_arn RekognitionStreamProcessor#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#tags RekognitionStreamProcessor#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * data_sharing_preference block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#data_sharing_preference RekognitionStreamProcessor#data_sharing_preference}
    */
    readonly dataSharingPreference?: RekognitionStreamProcessorDataSharingPreference[] | cdktf.IResolvable;
    /**
    * input block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#input RekognitionStreamProcessor#input}
    */
    readonly input?: RekognitionStreamProcessorInput[] | cdktf.IResolvable;
    /**
    * notification_channel block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#notification_channel RekognitionStreamProcessor#notification_channel}
    */
    readonly notificationChannel?: RekognitionStreamProcessorNotificationChannel[] | cdktf.IResolvable;
    /**
    * output block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#output RekognitionStreamProcessor#output}
    */
    readonly output?: RekognitionStreamProcessorOutput[] | cdktf.IResolvable;
    /**
    * regions_of_interest block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#regions_of_interest RekognitionStreamProcessor#regions_of_interest}
    */
    readonly regionsOfInterest?: RekognitionStreamProcessorRegionsOfInterest[] | cdktf.IResolvable;
    /**
    * settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#settings RekognitionStreamProcessor#settings}
    */
    readonly settings?: RekognitionStreamProcessorSettings[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#timeouts RekognitionStreamProcessor#timeouts}
    */
    readonly timeouts?: RekognitionStreamProcessorTimeouts;
}
export interface RekognitionStreamProcessorDataSharingPreference {
    /**
    * Do you want to share data with Rekognition to improve model performance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#opt_in RekognitionStreamProcessor#opt_in}
    */
    readonly optIn: boolean | cdktf.IResolvable;
}
export declare function rekognitionStreamProcessorDataSharingPreferenceToTerraform(struct?: RekognitionStreamProcessorDataSharingPreference | cdktf.IResolvable): any;
export declare function rekognitionStreamProcessorDataSharingPreferenceToHclTerraform(struct?: RekognitionStreamProcessorDataSharingPreference | cdktf.IResolvable): any;
export declare class RekognitionStreamProcessorDataSharingPreferenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RekognitionStreamProcessorDataSharingPreference | cdktf.IResolvable | undefined;
    set internalValue(value: RekognitionStreamProcessorDataSharingPreference | cdktf.IResolvable | undefined);
    private _optIn?;
    get optIn(): boolean | cdktf.IResolvable;
    set optIn(value: boolean | cdktf.IResolvable);
    get optInInput(): boolean | cdktf.IResolvable | undefined;
}
export declare class RekognitionStreamProcessorDataSharingPreferenceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RekognitionStreamProcessorDataSharingPreference[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RekognitionStreamProcessorDataSharingPreferenceOutputReference;
}
export interface RekognitionStreamProcessorInputKinesisVideoStream {
    /**
    * ARN of the Kinesis video stream stream that streams the source video.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#arn RekognitionStreamProcessor#arn}
    */
    readonly arn: string;
}
export declare function rekognitionStreamProcessorInputKinesisVideoStreamToTerraform(struct?: RekognitionStreamProcessorInputKinesisVideoStream | cdktf.IResolvable): any;
export declare function rekognitionStreamProcessorInputKinesisVideoStreamToHclTerraform(struct?: RekognitionStreamProcessorInputKinesisVideoStream | cdktf.IResolvable): any;
export declare class RekognitionStreamProcessorInputKinesisVideoStreamOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RekognitionStreamProcessorInputKinesisVideoStream | cdktf.IResolvable | undefined;
    set internalValue(value: RekognitionStreamProcessorInputKinesisVideoStream | cdktf.IResolvable | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
}
export declare class RekognitionStreamProcessorInputKinesisVideoStreamList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RekognitionStreamProcessorInputKinesisVideoStream[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RekognitionStreamProcessorInputKinesisVideoStreamOutputReference;
}
export interface RekognitionStreamProcessorInput {
    /**
    * kinesis_video_stream block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#kinesis_video_stream RekognitionStreamProcessor#kinesis_video_stream}
    */
    readonly kinesisVideoStream?: RekognitionStreamProcessorInputKinesisVideoStream[] | cdktf.IResolvable;
}
export declare function rekognitionStreamProcessorInputToTerraform(struct?: RekognitionStreamProcessorInput | cdktf.IResolvable): any;
export declare function rekognitionStreamProcessorInputToHclTerraform(struct?: RekognitionStreamProcessorInput | cdktf.IResolvable): any;
export declare class RekognitionStreamProcessorInputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RekognitionStreamProcessorInput | cdktf.IResolvable | undefined;
    set internalValue(value: RekognitionStreamProcessorInput | cdktf.IResolvable | undefined);
    private _kinesisVideoStream;
    get kinesisVideoStream(): RekognitionStreamProcessorInputKinesisVideoStreamList;
    putKinesisVideoStream(value: RekognitionStreamProcessorInputKinesisVideoStream[] | cdktf.IResolvable): void;
    resetKinesisVideoStream(): void;
    get kinesisVideoStreamInput(): cdktf.IResolvable | RekognitionStreamProcessorInputKinesisVideoStream[] | undefined;
}
export declare class RekognitionStreamProcessorInputList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RekognitionStreamProcessorInput[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RekognitionStreamProcessorInputOutputReference;
}
export interface RekognitionStreamProcessorNotificationChannel {
    /**
    * The Amazon Resource Number (ARN) of the Amazon Amazon Simple Notification Service topic to which Amazon Rekognition posts the completion status.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#sns_topic_arn RekognitionStreamProcessor#sns_topic_arn}
    */
    readonly snsTopicArn?: string;
}
export declare function rekognitionStreamProcessorNotificationChannelToTerraform(struct?: RekognitionStreamProcessorNotificationChannel | cdktf.IResolvable): any;
export declare function rekognitionStreamProcessorNotificationChannelToHclTerraform(struct?: RekognitionStreamProcessorNotificationChannel | cdktf.IResolvable): any;
export declare class RekognitionStreamProcessorNotificationChannelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RekognitionStreamProcessorNotificationChannel | cdktf.IResolvable | undefined;
    set internalValue(value: RekognitionStreamProcessorNotificationChannel | cdktf.IResolvable | undefined);
    private _snsTopicArn?;
    get snsTopicArn(): string;
    set snsTopicArn(value: string);
    resetSnsTopicArn(): void;
    get snsTopicArnInput(): string | undefined;
}
export declare class RekognitionStreamProcessorNotificationChannelList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RekognitionStreamProcessorNotificationChannel[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RekognitionStreamProcessorNotificationChannelOutputReference;
}
export interface RekognitionStreamProcessorOutputKinesisDataStream {
    /**
    * ARN of the output Amazon Kinesis Data Streams stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#arn RekognitionStreamProcessor#arn}
    */
    readonly arn?: string;
}
export declare function rekognitionStreamProcessorOutputKinesisDataStreamToTerraform(struct?: RekognitionStreamProcessorOutputKinesisDataStream | cdktf.IResolvable): any;
export declare function rekognitionStreamProcessorOutputKinesisDataStreamToHclTerraform(struct?: RekognitionStreamProcessorOutputKinesisDataStream | cdktf.IResolvable): any;
export declare class RekognitionStreamProcessorOutputKinesisDataStreamOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RekognitionStreamProcessorOutputKinesisDataStream | cdktf.IResolvable | undefined;
    set internalValue(value: RekognitionStreamProcessorOutputKinesisDataStream | cdktf.IResolvable | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
}
export declare class RekognitionStreamProcessorOutputKinesisDataStreamList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RekognitionStreamProcessorOutputKinesisDataStream[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RekognitionStreamProcessorOutputKinesisDataStreamOutputReference;
}
export interface RekognitionStreamProcessorOutputS3Destination {
    /**
    * The name of the Amazon S3 bucket you want to associate with the streaming video project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#bucket RekognitionStreamProcessor#bucket}
    */
    readonly bucket?: string;
    /**
    * The prefix value of the location within the bucket that you want the information to be published to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#key_prefix RekognitionStreamProcessor#key_prefix}
    */
    readonly keyPrefix?: string;
}
export declare function rekognitionStreamProcessorOutputS3DestinationToTerraform(struct?: RekognitionStreamProcessorOutputS3Destination | cdktf.IResolvable): any;
export declare function rekognitionStreamProcessorOutputS3DestinationToHclTerraform(struct?: RekognitionStreamProcessorOutputS3Destination | cdktf.IResolvable): any;
export declare class RekognitionStreamProcessorOutputS3DestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RekognitionStreamProcessorOutputS3Destination | cdktf.IResolvable | undefined;
    set internalValue(value: RekognitionStreamProcessorOutputS3Destination | cdktf.IResolvable | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    resetBucket(): void;
    get bucketInput(): string | undefined;
    private _keyPrefix?;
    get keyPrefix(): string;
    set keyPrefix(value: string);
    resetKeyPrefix(): void;
    get keyPrefixInput(): string | undefined;
}
export declare class RekognitionStreamProcessorOutputS3DestinationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RekognitionStreamProcessorOutputS3Destination[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RekognitionStreamProcessorOutputS3DestinationOutputReference;
}
export interface RekognitionStreamProcessorOutput {
    /**
    * kinesis_data_stream block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#kinesis_data_stream RekognitionStreamProcessor#kinesis_data_stream}
    */
    readonly kinesisDataStream?: RekognitionStreamProcessorOutputKinesisDataStream[] | cdktf.IResolvable;
    /**
    * s3_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#s3_destination RekognitionStreamProcessor#s3_destination}
    */
    readonly s3Destination?: RekognitionStreamProcessorOutputS3Destination[] | cdktf.IResolvable;
}
export declare function rekognitionStreamProcessorOutputToTerraform(struct?: RekognitionStreamProcessorOutput | cdktf.IResolvable): any;
export declare function rekognitionStreamProcessorOutputToHclTerraform(struct?: RekognitionStreamProcessorOutput | cdktf.IResolvable): any;
export declare class RekognitionStreamProcessorOutputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RekognitionStreamProcessorOutput | cdktf.IResolvable | undefined;
    set internalValue(value: RekognitionStreamProcessorOutput | cdktf.IResolvable | undefined);
    private _kinesisDataStream;
    get kinesisDataStream(): RekognitionStreamProcessorOutputKinesisDataStreamList;
    putKinesisDataStream(value: RekognitionStreamProcessorOutputKinesisDataStream[] | cdktf.IResolvable): void;
    resetKinesisDataStream(): void;
    get kinesisDataStreamInput(): cdktf.IResolvable | RekognitionStreamProcessorOutputKinesisDataStream[] | undefined;
    private _s3Destination;
    get s3Destination(): RekognitionStreamProcessorOutputS3DestinationList;
    putS3Destination(value: RekognitionStreamProcessorOutputS3Destination[] | cdktf.IResolvable): void;
    resetS3Destination(): void;
    get s3DestinationInput(): cdktf.IResolvable | RekognitionStreamProcessorOutputS3Destination[] | undefined;
}
export declare class RekognitionStreamProcessorOutputList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RekognitionStreamProcessorOutput[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RekognitionStreamProcessorOutputOutputReference;
}
export interface RekognitionStreamProcessorRegionsOfInterestBoundingBox {
    /**
    * Height of the bounding box as a ratio of the overall image height.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#height RekognitionStreamProcessor#height}
    */
    readonly height?: number;
    /**
    * Left coordinate of the bounding box as a ratio of overall image width.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#left RekognitionStreamProcessor#left}
    */
    readonly left?: number;
    /**
    * Top coordinate of the bounding box as a ratio of overall image height.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#top RekognitionStreamProcessor#top}
    */
    readonly top?: number;
    /**
    * Width of the bounding box as a ratio of the overall image width.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#width RekognitionStreamProcessor#width}
    */
    readonly width?: number;
}
export declare function rekognitionStreamProcessorRegionsOfInterestBoundingBoxToTerraform(struct?: RekognitionStreamProcessorRegionsOfInterestBoundingBox | cdktf.IResolvable): any;
export declare function rekognitionStreamProcessorRegionsOfInterestBoundingBoxToHclTerraform(struct?: RekognitionStreamProcessorRegionsOfInterestBoundingBox | cdktf.IResolvable): any;
export declare class RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RekognitionStreamProcessorRegionsOfInterestBoundingBox | cdktf.IResolvable | undefined;
    set internalValue(value: RekognitionStreamProcessorRegionsOfInterestBoundingBox | cdktf.IResolvable | undefined);
    private _height?;
    get height(): number;
    set height(value: number);
    resetHeight(): void;
    get heightInput(): number | undefined;
    private _left?;
    get left(): number;
    set left(value: number);
    resetLeft(): void;
    get leftInput(): number | undefined;
    private _top?;
    get top(): number;
    set top(value: number);
    resetTop(): void;
    get topInput(): number | undefined;
    private _width?;
    get width(): number;
    set width(value: number);
    resetWidth(): void;
    get widthInput(): number | undefined;
}
export interface RekognitionStreamProcessorRegionsOfInterestPolygon {
    /**
    * The value of the X coordinate for a point on a Polygon.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#x RekognitionStreamProcessor#x}
    */
    readonly x?: number;
    /**
    * The value of the Y coordinate for a point on a Polygon.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#y RekognitionStreamProcessor#y}
    */
    readonly y?: number;
}
export declare function rekognitionStreamProcessorRegionsOfInterestPolygonToTerraform(struct?: RekognitionStreamProcessorRegionsOfInterestPolygon | cdktf.IResolvable): any;
export declare function rekognitionStreamProcessorRegionsOfInterestPolygonToHclTerraform(struct?: RekognitionStreamProcessorRegionsOfInterestPolygon | cdktf.IResolvable): any;
export declare class RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RekognitionStreamProcessorRegionsOfInterestPolygon | cdktf.IResolvable | undefined;
    set internalValue(value: RekognitionStreamProcessorRegionsOfInterestPolygon | cdktf.IResolvable | undefined);
    private _x?;
    get x(): number;
    set x(value: number);
    resetX(): void;
    get xInput(): number | undefined;
    private _y?;
    get y(): number;
    set y(value: number);
    resetY(): void;
    get yInput(): number | undefined;
}
export declare class RekognitionStreamProcessorRegionsOfInterestPolygonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RekognitionStreamProcessorRegionsOfInterestPolygon[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference;
}
export interface RekognitionStreamProcessorRegionsOfInterest {
    /**
    * bounding_box block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#bounding_box RekognitionStreamProcessor#bounding_box}
    */
    readonly boundingBox?: RekognitionStreamProcessorRegionsOfInterestBoundingBox;
    /**
    * polygon block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#polygon RekognitionStreamProcessor#polygon}
    */
    readonly polygon?: RekognitionStreamProcessorRegionsOfInterestPolygon[] | cdktf.IResolvable;
}
export declare function rekognitionStreamProcessorRegionsOfInterestToTerraform(struct?: RekognitionStreamProcessorRegionsOfInterest | cdktf.IResolvable): any;
export declare function rekognitionStreamProcessorRegionsOfInterestToHclTerraform(struct?: RekognitionStreamProcessorRegionsOfInterest | cdktf.IResolvable): any;
export declare class RekognitionStreamProcessorRegionsOfInterestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RekognitionStreamProcessorRegionsOfInterest | cdktf.IResolvable | undefined;
    set internalValue(value: RekognitionStreamProcessorRegionsOfInterest | cdktf.IResolvable | undefined);
    private _boundingBox;
    get boundingBox(): RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference;
    putBoundingBox(value: RekognitionStreamProcessorRegionsOfInterestBoundingBox): void;
    resetBoundingBox(): void;
    get boundingBoxInput(): cdktf.IResolvable | RekognitionStreamProcessorRegionsOfInterestBoundingBox | undefined;
    private _polygon;
    get polygon(): RekognitionStreamProcessorRegionsOfInterestPolygonList;
    putPolygon(value: RekognitionStreamProcessorRegionsOfInterestPolygon[] | cdktf.IResolvable): void;
    resetPolygon(): void;
    get polygonInput(): cdktf.IResolvable | RekognitionStreamProcessorRegionsOfInterestPolygon[] | undefined;
}
export declare class RekognitionStreamProcessorRegionsOfInterestList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RekognitionStreamProcessorRegionsOfInterest[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RekognitionStreamProcessorRegionsOfInterestOutputReference;
}
export interface RekognitionStreamProcessorSettingsConnectedHome {
    /**
    * Specifies what you want to detect in the video, such as people, packages, or pets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#labels RekognitionStreamProcessor#labels}
    */
    readonly labels?: string[];
    /**
    * The minimum confidence required to label an object in the video.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#min_confidence RekognitionStreamProcessor#min_confidence}
    */
    readonly minConfidence?: number;
}
export declare function rekognitionStreamProcessorSettingsConnectedHomeToTerraform(struct?: RekognitionStreamProcessorSettingsConnectedHome | cdktf.IResolvable): any;
export declare function rekognitionStreamProcessorSettingsConnectedHomeToHclTerraform(struct?: RekognitionStreamProcessorSettingsConnectedHome | cdktf.IResolvable): any;
export declare class RekognitionStreamProcessorSettingsConnectedHomeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RekognitionStreamProcessorSettingsConnectedHome | cdktf.IResolvable | undefined;
    set internalValue(value: RekognitionStreamProcessorSettingsConnectedHome | cdktf.IResolvable | undefined);
    private _labels?;
    get labels(): string[];
    set labels(value: string[]);
    resetLabels(): void;
    get labelsInput(): string[] | undefined;
    private _minConfidence?;
    get minConfidence(): number;
    set minConfidence(value: number);
    resetMinConfidence(): void;
    get minConfidenceInput(): number | undefined;
}
export declare class RekognitionStreamProcessorSettingsConnectedHomeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RekognitionStreamProcessorSettingsConnectedHome[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RekognitionStreamProcessorSettingsConnectedHomeOutputReference;
}
export interface RekognitionStreamProcessorSettingsFaceSearch {
    /**
    * The ID of a collection that contains faces that you want to search for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#collection_id RekognitionStreamProcessor#collection_id}
    */
    readonly collectionId: string;
    /**
    * Minimum face match confidence score that must be met to return a result for a recognized face.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#face_match_threshold RekognitionStreamProcessor#face_match_threshold}
    */
    readonly faceMatchThreshold?: number;
}
export declare function rekognitionStreamProcessorSettingsFaceSearchToTerraform(struct?: RekognitionStreamProcessorSettingsFaceSearch | cdktf.IResolvable): any;
export declare function rekognitionStreamProcessorSettingsFaceSearchToHclTerraform(struct?: RekognitionStreamProcessorSettingsFaceSearch | cdktf.IResolvable): any;
export declare class RekognitionStreamProcessorSettingsFaceSearchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RekognitionStreamProcessorSettingsFaceSearch | cdktf.IResolvable | undefined;
    set internalValue(value: RekognitionStreamProcessorSettingsFaceSearch | cdktf.IResolvable | undefined);
    private _collectionId?;
    get collectionId(): string;
    set collectionId(value: string);
    get collectionIdInput(): string | undefined;
    private _faceMatchThreshold?;
    get faceMatchThreshold(): number;
    set faceMatchThreshold(value: number);
    resetFaceMatchThreshold(): void;
    get faceMatchThresholdInput(): number | undefined;
}
export declare class RekognitionStreamProcessorSettingsFaceSearchList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RekognitionStreamProcessorSettingsFaceSearch[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RekognitionStreamProcessorSettingsFaceSearchOutputReference;
}
export interface RekognitionStreamProcessorSettings {
    /**
    * connected_home block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#connected_home RekognitionStreamProcessor#connected_home}
    */
    readonly connectedHome?: RekognitionStreamProcessorSettingsConnectedHome[] | cdktf.IResolvable;
    /**
    * face_search block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#face_search RekognitionStreamProcessor#face_search}
    */
    readonly faceSearch?: RekognitionStreamProcessorSettingsFaceSearch[] | cdktf.IResolvable;
}
export declare function rekognitionStreamProcessorSettingsToTerraform(struct?: RekognitionStreamProcessorSettings | cdktf.IResolvable): any;
export declare function rekognitionStreamProcessorSettingsToHclTerraform(struct?: RekognitionStreamProcessorSettings | cdktf.IResolvable): any;
export declare class RekognitionStreamProcessorSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RekognitionStreamProcessorSettings | cdktf.IResolvable | undefined;
    set internalValue(value: RekognitionStreamProcessorSettings | cdktf.IResolvable | undefined);
    private _connectedHome;
    get connectedHome(): RekognitionStreamProcessorSettingsConnectedHomeList;
    putConnectedHome(value: RekognitionStreamProcessorSettingsConnectedHome[] | cdktf.IResolvable): void;
    resetConnectedHome(): void;
    get connectedHomeInput(): cdktf.IResolvable | RekognitionStreamProcessorSettingsConnectedHome[] | undefined;
    private _faceSearch;
    get faceSearch(): RekognitionStreamProcessorSettingsFaceSearchList;
    putFaceSearch(value: RekognitionStreamProcessorSettingsFaceSearch[] | cdktf.IResolvable): void;
    resetFaceSearch(): void;
    get faceSearchInput(): cdktf.IResolvable | RekognitionStreamProcessorSettingsFaceSearch[] | undefined;
}
export declare class RekognitionStreamProcessorSettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RekognitionStreamProcessorSettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RekognitionStreamProcessorSettingsOutputReference;
}
export interface RekognitionStreamProcessorTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#create RekognitionStreamProcessor#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#delete RekognitionStreamProcessor#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#update RekognitionStreamProcessor#update}
    */
    readonly update?: string;
}
export declare function rekognitionStreamProcessorTimeoutsToTerraform(struct?: RekognitionStreamProcessorTimeouts | cdktf.IResolvable): any;
export declare function rekognitionStreamProcessorTimeoutsToHclTerraform(struct?: RekognitionStreamProcessorTimeouts | cdktf.IResolvable): any;
export declare class RekognitionStreamProcessorTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RekognitionStreamProcessorTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RekognitionStreamProcessorTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor aws_rekognition_stream_processor}
*/
export declare class RekognitionStreamProcessor extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rekognition_stream_processor";
    /**
    * Generates CDKTF code for importing a RekognitionStreamProcessor resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RekognitionStreamProcessor to import
    * @param importFromId The id of the existing RekognitionStreamProcessor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RekognitionStreamProcessor to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rekognition_stream_processor aws_rekognition_stream_processor} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RekognitionStreamProcessorConfig
    */
    constructor(scope: Construct, id: string, config: RekognitionStreamProcessorConfig);
    get arn(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    get streamProcessorArn(): string;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _dataSharingPreference;
    get dataSharingPreference(): RekognitionStreamProcessorDataSharingPreferenceList;
    putDataSharingPreference(value: RekognitionStreamProcessorDataSharingPreference[] | cdktf.IResolvable): void;
    resetDataSharingPreference(): void;
    get dataSharingPreferenceInput(): cdktf.IResolvable | RekognitionStreamProcessorDataSharingPreference[] | undefined;
    private _input;
    get input(): RekognitionStreamProcessorInputList;
    putInput(value: RekognitionStreamProcessorInput[] | cdktf.IResolvable): void;
    resetInput(): void;
    get inputInput(): cdktf.IResolvable | RekognitionStreamProcessorInput[] | undefined;
    private _notificationChannel;
    get notificationChannel(): RekognitionStreamProcessorNotificationChannelList;
    putNotificationChannel(value: RekognitionStreamProcessorNotificationChannel[] | cdktf.IResolvable): void;
    resetNotificationChannel(): void;
    get notificationChannelInput(): cdktf.IResolvable | RekognitionStreamProcessorNotificationChannel[] | undefined;
    private _output;
    get output(): RekognitionStreamProcessorOutputList;
    putOutput(value: RekognitionStreamProcessorOutput[] | cdktf.IResolvable): void;
    resetOutput(): void;
    get outputInput(): cdktf.IResolvable | RekognitionStreamProcessorOutput[] | undefined;
    private _regionsOfInterest;
    get regionsOfInterest(): RekognitionStreamProcessorRegionsOfInterestList;
    putRegionsOfInterest(value: RekognitionStreamProcessorRegionsOfInterest[] | cdktf.IResolvable): void;
    resetRegionsOfInterest(): void;
    get regionsOfInterestInput(): cdktf.IResolvable | RekognitionStreamProcessorRegionsOfInterest[] | undefined;
    private _settings;
    get settings(): RekognitionStreamProcessorSettingsList;
    putSettings(value: RekognitionStreamProcessorSettings[] | cdktf.IResolvable): void;
    resetSettings(): void;
    get settingsInput(): cdktf.IResolvable | RekognitionStreamProcessorSettings[] | undefined;
    private _timeouts;
    get timeouts(): RekognitionStreamProcessorTimeoutsOutputReference;
    putTimeouts(value: RekognitionStreamProcessorTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RekognitionStreamProcessorTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
