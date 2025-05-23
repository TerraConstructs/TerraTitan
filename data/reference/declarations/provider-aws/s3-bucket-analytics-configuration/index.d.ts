/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketAnalyticsConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_analytics_configuration#bucket S3BucketAnalyticsConfiguration#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_analytics_configuration#id S3BucketAnalyticsConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_analytics_configuration#name S3BucketAnalyticsConfiguration#name}
    */
    readonly name: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_analytics_configuration#filter S3BucketAnalyticsConfiguration#filter}
    */
    readonly filter?: S3BucketAnalyticsConfigurationFilter;
    /**
    * storage_class_analysis block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_analytics_configuration#storage_class_analysis S3BucketAnalyticsConfiguration#storage_class_analysis}
    */
    readonly storageClassAnalysis?: S3BucketAnalyticsConfigurationStorageClassAnalysis;
}
export interface S3BucketAnalyticsConfigurationFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_analytics_configuration#prefix S3BucketAnalyticsConfiguration#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_analytics_configuration#tags S3BucketAnalyticsConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare function s3BucketAnalyticsConfigurationFilterToTerraform(struct?: S3BucketAnalyticsConfigurationFilterOutputReference | S3BucketAnalyticsConfigurationFilter): any;
export declare function s3BucketAnalyticsConfigurationFilterToHclTerraform(struct?: S3BucketAnalyticsConfigurationFilterOutputReference | S3BucketAnalyticsConfigurationFilter): any;
export declare class S3BucketAnalyticsConfigurationFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketAnalyticsConfigurationFilter | undefined;
    set internalValue(value: S3BucketAnalyticsConfigurationFilter | undefined);
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
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
}
export interface S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_analytics_configuration#bucket_account_id S3BucketAnalyticsConfiguration#bucket_account_id}
    */
    readonly bucketAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_analytics_configuration#bucket_arn S3BucketAnalyticsConfiguration#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_analytics_configuration#format S3BucketAnalyticsConfiguration#format}
    */
    readonly format?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_analytics_configuration#prefix S3BucketAnalyticsConfiguration#prefix}
    */
    readonly prefix?: string;
}
export declare function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationToTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationOutputReference | S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination): any;
export declare function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationToHclTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationOutputReference | S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination): any;
export declare class S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination | undefined;
    set internalValue(value: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination | undefined);
    private _bucketAccountId?;
    get bucketAccountId(): string;
    set bucketAccountId(value: string);
    resetBucketAccountId(): void;
    get bucketAccountIdInput(): string | undefined;
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string | undefined;
    private _format?;
    get format(): string;
    set format(value: string);
    resetFormat(): void;
    get formatInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
}
export interface S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination {
    /**
    * s3_bucket_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_analytics_configuration#s3_bucket_destination S3BucketAnalyticsConfiguration#s3_bucket_destination}
    */
    readonly s3BucketDestination: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination;
}
export declare function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationToTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationOutputReference | S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination): any;
export declare function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationToHclTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationOutputReference | S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination): any;
export declare class S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination | undefined;
    set internalValue(value: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination | undefined);
    private _s3BucketDestination;
    get s3BucketDestination(): S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationOutputReference;
    putS3BucketDestination(value: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination): void;
    get s3BucketDestinationInput(): S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination | undefined;
}
export interface S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_analytics_configuration#output_schema_version S3BucketAnalyticsConfiguration#output_schema_version}
    */
    readonly outputSchemaVersion?: string;
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_analytics_configuration#destination S3BucketAnalyticsConfiguration#destination}
    */
    readonly destination: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination;
}
export declare function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportToTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportOutputReference | S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport): any;
export declare function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportToHclTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportOutputReference | S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport): any;
export declare class S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport | undefined;
    set internalValue(value: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport | undefined);
    private _outputSchemaVersion?;
    get outputSchemaVersion(): string;
    set outputSchemaVersion(value: string);
    resetOutputSchemaVersion(): void;
    get outputSchemaVersionInput(): string | undefined;
    private _destination;
    get destination(): S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationOutputReference;
    putDestination(value: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination): void;
    get destinationInput(): S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination | undefined;
}
export interface S3BucketAnalyticsConfigurationStorageClassAnalysis {
    /**
    * data_export block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_analytics_configuration#data_export S3BucketAnalyticsConfiguration#data_export}
    */
    readonly dataExport: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport;
}
export declare function s3BucketAnalyticsConfigurationStorageClassAnalysisToTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysisOutputReference | S3BucketAnalyticsConfigurationStorageClassAnalysis): any;
export declare function s3BucketAnalyticsConfigurationStorageClassAnalysisToHclTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysisOutputReference | S3BucketAnalyticsConfigurationStorageClassAnalysis): any;
export declare class S3BucketAnalyticsConfigurationStorageClassAnalysisOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketAnalyticsConfigurationStorageClassAnalysis | undefined;
    set internalValue(value: S3BucketAnalyticsConfigurationStorageClassAnalysis | undefined);
    private _dataExport;
    get dataExport(): S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportOutputReference;
    putDataExport(value: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport): void;
    get dataExportInput(): S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_analytics_configuration aws_s3_bucket_analytics_configuration}
*/
export declare class S3BucketAnalyticsConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_bucket_analytics_configuration";
    /**
    * Generates CDKTF code for importing a S3BucketAnalyticsConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketAnalyticsConfiguration to import
    * @param importFromId The id of the existing S3BucketAnalyticsConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_analytics_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketAnalyticsConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_analytics_configuration aws_s3_bucket_analytics_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketAnalyticsConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketAnalyticsConfigurationConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _filter;
    get filter(): S3BucketAnalyticsConfigurationFilterOutputReference;
    putFilter(value: S3BucketAnalyticsConfigurationFilter): void;
    resetFilter(): void;
    get filterInput(): S3BucketAnalyticsConfigurationFilter | undefined;
    private _storageClassAnalysis;
    get storageClassAnalysis(): S3BucketAnalyticsConfigurationStorageClassAnalysisOutputReference;
    putStorageClassAnalysis(value: S3BucketAnalyticsConfigurationStorageClassAnalysis): void;
    resetStorageClassAnalysis(): void;
    get storageClassAnalysisInput(): S3BucketAnalyticsConfigurationStorageClassAnalysis | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
