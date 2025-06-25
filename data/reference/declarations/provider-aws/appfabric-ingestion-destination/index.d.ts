/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppfabricIngestionDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#app_bundle_arn AppfabricIngestionDestination#app_bundle_arn}
    */
    readonly appBundleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#ingestion_arn AppfabricIngestionDestination#ingestion_arn}
    */
    readonly ingestionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#tags AppfabricIngestionDestination#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * destination_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#destination_configuration AppfabricIngestionDestination#destination_configuration}
    */
    readonly destinationConfiguration?: AppfabricIngestionDestinationDestinationConfiguration[] | cdktf.IResolvable;
    /**
    * processing_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#processing_configuration AppfabricIngestionDestination#processing_configuration}
    */
    readonly processingConfiguration?: AppfabricIngestionDestinationProcessingConfiguration[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#timeouts AppfabricIngestionDestination#timeouts}
    */
    readonly timeouts?: AppfabricIngestionDestinationTimeouts;
}
export interface AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#stream_name AppfabricIngestionDestination#stream_name}
    */
    readonly streamName: string;
}
export declare function appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamToTerraform(struct?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream | cdktf.IResolvable): any;
export declare function appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamToHclTerraform(struct?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream | cdktf.IResolvable): any;
export declare class AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream | cdktf.IResolvable | undefined;
    set internalValue(value: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream | cdktf.IResolvable | undefined);
    private _streamName?;
    get streamName(): string;
    set streamName(value: string);
    get streamNameInput(): string | undefined;
}
export declare class AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference;
}
export interface AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#bucket_name AppfabricIngestionDestination#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#prefix AppfabricIngestionDestination#prefix}
    */
    readonly prefix?: string;
}
export declare function appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketToTerraform(struct?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket | cdktf.IResolvable): any;
export declare function appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketToHclTerraform(struct?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket | cdktf.IResolvable): any;
export declare class AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket | cdktf.IResolvable | undefined;
    set internalValue(value: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket | cdktf.IResolvable | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
}
export declare class AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference;
}
export interface AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination {
    /**
    * firehose_stream block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#firehose_stream AppfabricIngestionDestination#firehose_stream}
    */
    readonly firehoseStream?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream[] | cdktf.IResolvable;
    /**
    * s3_bucket block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#s3_bucket AppfabricIngestionDestination#s3_bucket}
    */
    readonly s3Bucket?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket[] | cdktf.IResolvable;
}
export declare function appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationToTerraform(struct?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination | cdktf.IResolvable): any;
export declare function appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationToHclTerraform(struct?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination | cdktf.IResolvable): any;
export declare class AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination | cdktf.IResolvable | undefined;
    set internalValue(value: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination | cdktf.IResolvable | undefined);
    private _firehoseStream;
    get firehoseStream(): AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList;
    putFirehoseStream(value: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream[] | cdktf.IResolvable): void;
    resetFirehoseStream(): void;
    get firehoseStreamInput(): cdktf.IResolvable | AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream[] | undefined;
    private _s3Bucket;
    get s3Bucket(): AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList;
    putS3Bucket(value: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket[] | cdktf.IResolvable): void;
    resetS3Bucket(): void;
    get s3BucketInput(): cdktf.IResolvable | AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket[] | undefined;
}
export declare class AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference;
}
export interface AppfabricIngestionDestinationDestinationConfigurationAuditLog {
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#destination AppfabricIngestionDestination#destination}
    */
    readonly destination?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination[] | cdktf.IResolvable;
}
export declare function appfabricIngestionDestinationDestinationConfigurationAuditLogToTerraform(struct?: AppfabricIngestionDestinationDestinationConfigurationAuditLog | cdktf.IResolvable): any;
export declare function appfabricIngestionDestinationDestinationConfigurationAuditLogToHclTerraform(struct?: AppfabricIngestionDestinationDestinationConfigurationAuditLog | cdktf.IResolvable): any;
export declare class AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppfabricIngestionDestinationDestinationConfigurationAuditLog | cdktf.IResolvable | undefined;
    set internalValue(value: AppfabricIngestionDestinationDestinationConfigurationAuditLog | cdktf.IResolvable | undefined);
    private _destination;
    get destination(): AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList;
    putDestination(value: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination[] | cdktf.IResolvable): void;
    resetDestination(): void;
    get destinationInput(): cdktf.IResolvable | AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination[] | undefined;
}
export declare class AppfabricIngestionDestinationDestinationConfigurationAuditLogList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppfabricIngestionDestinationDestinationConfigurationAuditLog[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference;
}
export interface AppfabricIngestionDestinationDestinationConfiguration {
    /**
    * audit_log block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#audit_log AppfabricIngestionDestination#audit_log}
    */
    readonly auditLog?: AppfabricIngestionDestinationDestinationConfigurationAuditLog[] | cdktf.IResolvable;
}
export declare function appfabricIngestionDestinationDestinationConfigurationToTerraform(struct?: AppfabricIngestionDestinationDestinationConfiguration | cdktf.IResolvable): any;
export declare function appfabricIngestionDestinationDestinationConfigurationToHclTerraform(struct?: AppfabricIngestionDestinationDestinationConfiguration | cdktf.IResolvable): any;
export declare class AppfabricIngestionDestinationDestinationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppfabricIngestionDestinationDestinationConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: AppfabricIngestionDestinationDestinationConfiguration | cdktf.IResolvable | undefined);
    private _auditLog;
    get auditLog(): AppfabricIngestionDestinationDestinationConfigurationAuditLogList;
    putAuditLog(value: AppfabricIngestionDestinationDestinationConfigurationAuditLog[] | cdktf.IResolvable): void;
    resetAuditLog(): void;
    get auditLogInput(): cdktf.IResolvable | AppfabricIngestionDestinationDestinationConfigurationAuditLog[] | undefined;
}
export declare class AppfabricIngestionDestinationDestinationConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppfabricIngestionDestinationDestinationConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppfabricIngestionDestinationDestinationConfigurationOutputReference;
}
export interface AppfabricIngestionDestinationProcessingConfigurationAuditLog {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#format AppfabricIngestionDestination#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#schema AppfabricIngestionDestination#schema}
    */
    readonly schema: string;
}
export declare function appfabricIngestionDestinationProcessingConfigurationAuditLogToTerraform(struct?: AppfabricIngestionDestinationProcessingConfigurationAuditLog | cdktf.IResolvable): any;
export declare function appfabricIngestionDestinationProcessingConfigurationAuditLogToHclTerraform(struct?: AppfabricIngestionDestinationProcessingConfigurationAuditLog | cdktf.IResolvable): any;
export declare class AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppfabricIngestionDestinationProcessingConfigurationAuditLog | cdktf.IResolvable | undefined;
    set internalValue(value: AppfabricIngestionDestinationProcessingConfigurationAuditLog | cdktf.IResolvable | undefined);
    private _format?;
    get format(): string;
    set format(value: string);
    get formatInput(): string | undefined;
    private _schema?;
    get schema(): string;
    set schema(value: string);
    get schemaInput(): string | undefined;
}
export declare class AppfabricIngestionDestinationProcessingConfigurationAuditLogList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppfabricIngestionDestinationProcessingConfigurationAuditLog[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference;
}
export interface AppfabricIngestionDestinationProcessingConfiguration {
    /**
    * audit_log block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#audit_log AppfabricIngestionDestination#audit_log}
    */
    readonly auditLog?: AppfabricIngestionDestinationProcessingConfigurationAuditLog[] | cdktf.IResolvable;
}
export declare function appfabricIngestionDestinationProcessingConfigurationToTerraform(struct?: AppfabricIngestionDestinationProcessingConfiguration | cdktf.IResolvable): any;
export declare function appfabricIngestionDestinationProcessingConfigurationToHclTerraform(struct?: AppfabricIngestionDestinationProcessingConfiguration | cdktf.IResolvable): any;
export declare class AppfabricIngestionDestinationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppfabricIngestionDestinationProcessingConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: AppfabricIngestionDestinationProcessingConfiguration | cdktf.IResolvable | undefined);
    private _auditLog;
    get auditLog(): AppfabricIngestionDestinationProcessingConfigurationAuditLogList;
    putAuditLog(value: AppfabricIngestionDestinationProcessingConfigurationAuditLog[] | cdktf.IResolvable): void;
    resetAuditLog(): void;
    get auditLogInput(): cdktf.IResolvable | AppfabricIngestionDestinationProcessingConfigurationAuditLog[] | undefined;
}
export declare class AppfabricIngestionDestinationProcessingConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppfabricIngestionDestinationProcessingConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppfabricIngestionDestinationProcessingConfigurationOutputReference;
}
export interface AppfabricIngestionDestinationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#create AppfabricIngestionDestination#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#delete AppfabricIngestionDestination#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#update AppfabricIngestionDestination#update}
    */
    readonly update?: string;
}
export declare function appfabricIngestionDestinationTimeoutsToTerraform(struct?: AppfabricIngestionDestinationTimeouts | cdktf.IResolvable): any;
export declare function appfabricIngestionDestinationTimeoutsToHclTerraform(struct?: AppfabricIngestionDestinationTimeouts | cdktf.IResolvable): any;
export declare class AppfabricIngestionDestinationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppfabricIngestionDestinationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: AppfabricIngestionDestinationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination aws_appfabric_ingestion_destination}
*/
export declare class AppfabricIngestionDestination extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appfabric_ingestion_destination";
    /**
    * Generates CDKTF code for importing a AppfabricIngestionDestination resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppfabricIngestionDestination to import
    * @param importFromId The id of the existing AppfabricIngestionDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppfabricIngestionDestination to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_ingestion_destination aws_appfabric_ingestion_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppfabricIngestionDestinationConfig
    */
    constructor(scope: Construct, id: string, config: AppfabricIngestionDestinationConfig);
    private _appBundleArn?;
    get appBundleArn(): string;
    set appBundleArn(value: string);
    get appBundleArnInput(): string | undefined;
    get arn(): string;
    get id(): string;
    private _ingestionArn?;
    get ingestionArn(): string;
    set ingestionArn(value: string);
    get ingestionArnInput(): string | undefined;
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
    private _destinationConfiguration;
    get destinationConfiguration(): AppfabricIngestionDestinationDestinationConfigurationList;
    putDestinationConfiguration(value: AppfabricIngestionDestinationDestinationConfiguration[] | cdktf.IResolvable): void;
    resetDestinationConfiguration(): void;
    get destinationConfigurationInput(): cdktf.IResolvable | AppfabricIngestionDestinationDestinationConfiguration[] | undefined;
    private _processingConfiguration;
    get processingConfiguration(): AppfabricIngestionDestinationProcessingConfigurationList;
    putProcessingConfiguration(value: AppfabricIngestionDestinationProcessingConfiguration[] | cdktf.IResolvable): void;
    resetProcessingConfiguration(): void;
    get processingConfigurationInput(): cdktf.IResolvable | AppfabricIngestionDestinationProcessingConfiguration[] | undefined;
    private _timeouts;
    get timeouts(): AppfabricIngestionDestinationTimeoutsOutputReference;
    putTimeouts(value: AppfabricIngestionDestinationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | AppfabricIngestionDestinationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
