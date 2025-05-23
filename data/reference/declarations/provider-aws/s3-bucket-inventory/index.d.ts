/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketInventoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#bucket S3BucketInventory#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#enabled S3BucketInventory#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#id S3BucketInventory#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#included_object_versions S3BucketInventory#included_object_versions}
    */
    readonly includedObjectVersions: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#name S3BucketInventory#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#optional_fields S3BucketInventory#optional_fields}
    */
    readonly optionalFields?: string[];
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#destination S3BucketInventory#destination}
    */
    readonly destination: S3BucketInventoryDestination;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#filter S3BucketInventory#filter}
    */
    readonly filter?: S3BucketInventoryFilter;
    /**
    * schedule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#schedule S3BucketInventory#schedule}
    */
    readonly schedule: S3BucketInventorySchedule;
}
export interface S3BucketInventoryDestinationBucketEncryptionSseKms {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#key_id S3BucketInventory#key_id}
    */
    readonly keyId: string;
}
export declare function s3BucketInventoryDestinationBucketEncryptionSseKmsToTerraform(struct?: S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference | S3BucketInventoryDestinationBucketEncryptionSseKms): any;
export declare function s3BucketInventoryDestinationBucketEncryptionSseKmsToHclTerraform(struct?: S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference | S3BucketInventoryDestinationBucketEncryptionSseKms): any;
export declare class S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketInventoryDestinationBucketEncryptionSseKms | undefined;
    set internalValue(value: S3BucketInventoryDestinationBucketEncryptionSseKms | undefined);
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    get keyIdInput(): string | undefined;
}
export interface S3BucketInventoryDestinationBucketEncryptionSseS3 {
}
export declare function s3BucketInventoryDestinationBucketEncryptionSseS3ToTerraform(struct?: S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference | S3BucketInventoryDestinationBucketEncryptionSseS3): any;
export declare function s3BucketInventoryDestinationBucketEncryptionSseS3ToHclTerraform(struct?: S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference | S3BucketInventoryDestinationBucketEncryptionSseS3): any;
export declare class S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketInventoryDestinationBucketEncryptionSseS3 | undefined;
    set internalValue(value: S3BucketInventoryDestinationBucketEncryptionSseS3 | undefined);
}
export interface S3BucketInventoryDestinationBucketEncryption {
    /**
    * sse_kms block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#sse_kms S3BucketInventory#sse_kms}
    */
    readonly sseKms?: S3BucketInventoryDestinationBucketEncryptionSseKms;
    /**
    * sse_s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#sse_s3 S3BucketInventory#sse_s3}
    */
    readonly sseS3?: S3BucketInventoryDestinationBucketEncryptionSseS3;
}
export declare function s3BucketInventoryDestinationBucketEncryptionToTerraform(struct?: S3BucketInventoryDestinationBucketEncryptionOutputReference | S3BucketInventoryDestinationBucketEncryption): any;
export declare function s3BucketInventoryDestinationBucketEncryptionToHclTerraform(struct?: S3BucketInventoryDestinationBucketEncryptionOutputReference | S3BucketInventoryDestinationBucketEncryption): any;
export declare class S3BucketInventoryDestinationBucketEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketInventoryDestinationBucketEncryption | undefined;
    set internalValue(value: S3BucketInventoryDestinationBucketEncryption | undefined);
    private _sseKms;
    get sseKms(): S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference;
    putSseKms(value: S3BucketInventoryDestinationBucketEncryptionSseKms): void;
    resetSseKms(): void;
    get sseKmsInput(): S3BucketInventoryDestinationBucketEncryptionSseKms | undefined;
    private _sseS3;
    get sseS3(): S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference;
    putSseS3(value: S3BucketInventoryDestinationBucketEncryptionSseS3): void;
    resetSseS3(): void;
    get sseS3Input(): S3BucketInventoryDestinationBucketEncryptionSseS3 | undefined;
}
export interface S3BucketInventoryDestinationBucket {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#account_id S3BucketInventory#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#bucket_arn S3BucketInventory#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#format S3BucketInventory#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#prefix S3BucketInventory#prefix}
    */
    readonly prefix?: string;
    /**
    * encryption block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#encryption S3BucketInventory#encryption}
    */
    readonly encryption?: S3BucketInventoryDestinationBucketEncryption;
}
export declare function s3BucketInventoryDestinationBucketToTerraform(struct?: S3BucketInventoryDestinationBucketOutputReference | S3BucketInventoryDestinationBucket): any;
export declare function s3BucketInventoryDestinationBucketToHclTerraform(struct?: S3BucketInventoryDestinationBucketOutputReference | S3BucketInventoryDestinationBucket): any;
export declare class S3BucketInventoryDestinationBucketOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketInventoryDestinationBucket | undefined;
    set internalValue(value: S3BucketInventoryDestinationBucket | undefined);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string | undefined;
    private _format?;
    get format(): string;
    set format(value: string);
    get formatInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _encryption;
    get encryption(): S3BucketInventoryDestinationBucketEncryptionOutputReference;
    putEncryption(value: S3BucketInventoryDestinationBucketEncryption): void;
    resetEncryption(): void;
    get encryptionInput(): S3BucketInventoryDestinationBucketEncryption | undefined;
}
export interface S3BucketInventoryDestination {
    /**
    * bucket block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#bucket S3BucketInventory#bucket}
    */
    readonly bucket: S3BucketInventoryDestinationBucket;
}
export declare function s3BucketInventoryDestinationToTerraform(struct?: S3BucketInventoryDestinationOutputReference | S3BucketInventoryDestination): any;
export declare function s3BucketInventoryDestinationToHclTerraform(struct?: S3BucketInventoryDestinationOutputReference | S3BucketInventoryDestination): any;
export declare class S3BucketInventoryDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketInventoryDestination | undefined;
    set internalValue(value: S3BucketInventoryDestination | undefined);
    private _bucket;
    get bucket(): S3BucketInventoryDestinationBucketOutputReference;
    putBucket(value: S3BucketInventoryDestinationBucket): void;
    get bucketInput(): S3BucketInventoryDestinationBucket | undefined;
}
export interface S3BucketInventoryFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#prefix S3BucketInventory#prefix}
    */
    readonly prefix?: string;
}
export declare function s3BucketInventoryFilterToTerraform(struct?: S3BucketInventoryFilterOutputReference | S3BucketInventoryFilter): any;
export declare function s3BucketInventoryFilterToHclTerraform(struct?: S3BucketInventoryFilterOutputReference | S3BucketInventoryFilter): any;
export declare class S3BucketInventoryFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketInventoryFilter | undefined;
    set internalValue(value: S3BucketInventoryFilter | undefined);
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
}
export interface S3BucketInventorySchedule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#frequency S3BucketInventory#frequency}
    */
    readonly frequency: string;
}
export declare function s3BucketInventoryScheduleToTerraform(struct?: S3BucketInventoryScheduleOutputReference | S3BucketInventorySchedule): any;
export declare function s3BucketInventoryScheduleToHclTerraform(struct?: S3BucketInventoryScheduleOutputReference | S3BucketInventorySchedule): any;
export declare class S3BucketInventoryScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketInventorySchedule | undefined;
    set internalValue(value: S3BucketInventorySchedule | undefined);
    private _frequency?;
    get frequency(): string;
    set frequency(value: string);
    get frequencyInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory aws_s3_bucket_inventory}
*/
export declare class S3BucketInventory extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_bucket_inventory";
    /**
    * Generates CDKTF code for importing a S3BucketInventory resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketInventory to import
    * @param importFromId The id of the existing S3BucketInventory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketInventory to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_inventory aws_s3_bucket_inventory} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketInventoryConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketInventoryConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _includedObjectVersions?;
    get includedObjectVersions(): string;
    set includedObjectVersions(value: string);
    get includedObjectVersionsInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _optionalFields?;
    get optionalFields(): string[];
    set optionalFields(value: string[]);
    resetOptionalFields(): void;
    get optionalFieldsInput(): string[] | undefined;
    private _destination;
    get destination(): S3BucketInventoryDestinationOutputReference;
    putDestination(value: S3BucketInventoryDestination): void;
    get destinationInput(): S3BucketInventoryDestination | undefined;
    private _filter;
    get filter(): S3BucketInventoryFilterOutputReference;
    putFilter(value: S3BucketInventoryFilter): void;
    resetFilter(): void;
    get filterInput(): S3BucketInventoryFilter | undefined;
    private _schedule;
    get schedule(): S3BucketInventoryScheduleOutputReference;
    putSchedule(value: S3BucketInventorySchedule): void;
    get scheduleInput(): S3BucketInventorySchedule | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
