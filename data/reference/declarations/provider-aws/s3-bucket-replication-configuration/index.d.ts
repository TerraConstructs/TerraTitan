/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketReplicationConfigurationAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#bucket S3BucketReplicationConfigurationA#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#id S3BucketReplicationConfigurationA#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#role S3BucketReplicationConfigurationA#role}
    */
    readonly role: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#token S3BucketReplicationConfigurationA#token}
    */
    readonly token?: string;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#rule S3BucketReplicationConfigurationA#rule}
    */
    readonly rule: S3BucketReplicationConfigurationRule[] | cdktf.IResolvable;
}
export interface S3BucketReplicationConfigurationRuleDeleteMarkerReplication {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}
    */
    readonly status: string;
}
export declare function s3BucketReplicationConfigurationRuleDeleteMarkerReplicationToTerraform(struct?: S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference | S3BucketReplicationConfigurationRuleDeleteMarkerReplication): any;
export declare function s3BucketReplicationConfigurationRuleDeleteMarkerReplicationToHclTerraform(struct?: S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference | S3BucketReplicationConfigurationRuleDeleteMarkerReplication): any;
export declare class S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRuleDeleteMarkerReplication | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleDeleteMarkerReplication | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
}
export interface S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#owner S3BucketReplicationConfigurationA#owner}
    */
    readonly owner: string;
}
export declare function s3BucketReplicationConfigurationRuleDestinationAccessControlTranslationToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference | S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation): any;
export declare function s3BucketReplicationConfigurationRuleDestinationAccessControlTranslationToHclTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference | S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation): any;
export declare class S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation | undefined);
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string | undefined;
}
export interface S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#replica_kms_key_id S3BucketReplicationConfigurationA#replica_kms_key_id}
    */
    readonly replicaKmsKeyId: string;
}
export declare function s3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference | S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration): any;
export declare function s3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationToHclTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference | S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration): any;
export declare class S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration | undefined);
    private _replicaKmsKeyId?;
    get replicaKmsKeyId(): string;
    set replicaKmsKeyId(value: string);
    get replicaKmsKeyIdInput(): string | undefined;
}
export interface S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#minutes S3BucketReplicationConfigurationA#minutes}
    */
    readonly minutes: number;
}
export declare function s3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference | S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold): any;
export declare function s3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdToHclTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference | S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold): any;
export declare class S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold | undefined);
    private _minutes?;
    get minutes(): number;
    set minutes(value: number);
    get minutesInput(): number | undefined;
}
export interface S3BucketReplicationConfigurationRuleDestinationMetrics {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}
    */
    readonly status: string;
    /**
    * event_threshold block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#event_threshold S3BucketReplicationConfigurationA#event_threshold}
    */
    readonly eventThreshold?: S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold;
}
export declare function s3BucketReplicationConfigurationRuleDestinationMetricsToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference | S3BucketReplicationConfigurationRuleDestinationMetrics): any;
export declare function s3BucketReplicationConfigurationRuleDestinationMetricsToHclTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference | S3BucketReplicationConfigurationRuleDestinationMetrics): any;
export declare class S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRuleDestinationMetrics | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleDestinationMetrics | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
    private _eventThreshold;
    get eventThreshold(): S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference;
    putEventThreshold(value: S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold): void;
    resetEventThreshold(): void;
    get eventThresholdInput(): S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold | undefined;
}
export interface S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#minutes S3BucketReplicationConfigurationA#minutes}
    */
    readonly minutes: number;
}
export declare function s3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference | S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime): any;
export declare function s3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeToHclTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference | S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime): any;
export declare class S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime | undefined);
    private _minutes?;
    get minutes(): number;
    set minutes(value: number);
    get minutesInput(): number | undefined;
}
export interface S3BucketReplicationConfigurationRuleDestinationReplicationTime {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}
    */
    readonly status: string;
    /**
    * time block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#time S3BucketReplicationConfigurationA#time}
    */
    readonly time: S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime;
}
export declare function s3BucketReplicationConfigurationRuleDestinationReplicationTimeToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference | S3BucketReplicationConfigurationRuleDestinationReplicationTime): any;
export declare function s3BucketReplicationConfigurationRuleDestinationReplicationTimeToHclTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference | S3BucketReplicationConfigurationRuleDestinationReplicationTime): any;
export declare class S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRuleDestinationReplicationTime | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleDestinationReplicationTime | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
    private _time;
    get time(): S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference;
    putTime(value: S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime): void;
    get timeInput(): S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime | undefined;
}
export interface S3BucketReplicationConfigurationRuleDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#account S3BucketReplicationConfigurationA#account}
    */
    readonly account?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#bucket S3BucketReplicationConfigurationA#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#storage_class S3BucketReplicationConfigurationA#storage_class}
    */
    readonly storageClass?: string;
    /**
    * access_control_translation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#access_control_translation S3BucketReplicationConfigurationA#access_control_translation}
    */
    readonly accessControlTranslation?: S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation;
    /**
    * encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#encryption_configuration S3BucketReplicationConfigurationA#encryption_configuration}
    */
    readonly encryptionConfiguration?: S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration;
    /**
    * metrics block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#metrics S3BucketReplicationConfigurationA#metrics}
    */
    readonly metrics?: S3BucketReplicationConfigurationRuleDestinationMetrics;
    /**
    * replication_time block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#replication_time S3BucketReplicationConfigurationA#replication_time}
    */
    readonly replicationTime?: S3BucketReplicationConfigurationRuleDestinationReplicationTime;
}
export declare function s3BucketReplicationConfigurationRuleDestinationToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationOutputReference | S3BucketReplicationConfigurationRuleDestination): any;
export declare function s3BucketReplicationConfigurationRuleDestinationToHclTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationOutputReference | S3BucketReplicationConfigurationRuleDestination): any;
export declare class S3BucketReplicationConfigurationRuleDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRuleDestination | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleDestination | undefined);
    private _account?;
    get account(): string;
    set account(value: string);
    resetAccount(): void;
    get accountInput(): string | undefined;
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _storageClass?;
    get storageClass(): string;
    set storageClass(value: string);
    resetStorageClass(): void;
    get storageClassInput(): string | undefined;
    private _accessControlTranslation;
    get accessControlTranslation(): S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference;
    putAccessControlTranslation(value: S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation): void;
    resetAccessControlTranslation(): void;
    get accessControlTranslationInput(): S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation | undefined;
    private _encryptionConfiguration;
    get encryptionConfiguration(): S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference;
    putEncryptionConfiguration(value: S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration | undefined;
    private _metrics;
    get metrics(): S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference;
    putMetrics(value: S3BucketReplicationConfigurationRuleDestinationMetrics): void;
    resetMetrics(): void;
    get metricsInput(): S3BucketReplicationConfigurationRuleDestinationMetrics | undefined;
    private _replicationTime;
    get replicationTime(): S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference;
    putReplicationTime(value: S3BucketReplicationConfigurationRuleDestinationReplicationTime): void;
    resetReplicationTime(): void;
    get replicationTimeInput(): S3BucketReplicationConfigurationRuleDestinationReplicationTime | undefined;
}
export interface S3BucketReplicationConfigurationRuleExistingObjectReplication {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}
    */
    readonly status: string;
}
export declare function s3BucketReplicationConfigurationRuleExistingObjectReplicationToTerraform(struct?: S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference | S3BucketReplicationConfigurationRuleExistingObjectReplication): any;
export declare function s3BucketReplicationConfigurationRuleExistingObjectReplicationToHclTerraform(struct?: S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference | S3BucketReplicationConfigurationRuleExistingObjectReplication): any;
export declare class S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRuleExistingObjectReplication | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleExistingObjectReplication | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
}
export interface S3BucketReplicationConfigurationRuleFilterAnd {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#tags S3BucketReplicationConfigurationA#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare function s3BucketReplicationConfigurationRuleFilterAndToTerraform(struct?: S3BucketReplicationConfigurationRuleFilterAndOutputReference | S3BucketReplicationConfigurationRuleFilterAnd): any;
export declare function s3BucketReplicationConfigurationRuleFilterAndToHclTerraform(struct?: S3BucketReplicationConfigurationRuleFilterAndOutputReference | S3BucketReplicationConfigurationRuleFilterAnd): any;
export declare class S3BucketReplicationConfigurationRuleFilterAndOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRuleFilterAnd | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleFilterAnd | undefined);
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
export interface S3BucketReplicationConfigurationRuleFilterTag {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#key S3BucketReplicationConfigurationA#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#value S3BucketReplicationConfigurationA#value}
    */
    readonly value: string;
}
export declare function s3BucketReplicationConfigurationRuleFilterTagToTerraform(struct?: S3BucketReplicationConfigurationRuleFilterTagOutputReference | S3BucketReplicationConfigurationRuleFilterTag): any;
export declare function s3BucketReplicationConfigurationRuleFilterTagToHclTerraform(struct?: S3BucketReplicationConfigurationRuleFilterTagOutputReference | S3BucketReplicationConfigurationRuleFilterTag): any;
export declare class S3BucketReplicationConfigurationRuleFilterTagOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRuleFilterTag | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleFilterTag | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export interface S3BucketReplicationConfigurationRuleFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}
    */
    readonly prefix?: string;
    /**
    * and block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#and S3BucketReplicationConfigurationA#and}
    */
    readonly and?: S3BucketReplicationConfigurationRuleFilterAnd;
    /**
    * tag block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#tag S3BucketReplicationConfigurationA#tag}
    */
    readonly tag?: S3BucketReplicationConfigurationRuleFilterTag;
}
export declare function s3BucketReplicationConfigurationRuleFilterToTerraform(struct?: S3BucketReplicationConfigurationRuleFilterOutputReference | S3BucketReplicationConfigurationRuleFilter): any;
export declare function s3BucketReplicationConfigurationRuleFilterToHclTerraform(struct?: S3BucketReplicationConfigurationRuleFilterOutputReference | S3BucketReplicationConfigurationRuleFilter): any;
export declare class S3BucketReplicationConfigurationRuleFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRuleFilter | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleFilter | undefined);
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _and;
    get and(): S3BucketReplicationConfigurationRuleFilterAndOutputReference;
    putAnd(value: S3BucketReplicationConfigurationRuleFilterAnd): void;
    resetAnd(): void;
    get andInput(): S3BucketReplicationConfigurationRuleFilterAnd | undefined;
    private _tag;
    get tag(): S3BucketReplicationConfigurationRuleFilterTagOutputReference;
    putTag(value: S3BucketReplicationConfigurationRuleFilterTag): void;
    resetTag(): void;
    get tagInput(): S3BucketReplicationConfigurationRuleFilterTag | undefined;
}
export interface S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}
    */
    readonly status: string;
}
export declare function s3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsToTerraform(struct?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference | S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications): any;
export declare function s3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsToHclTerraform(struct?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference | S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications): any;
export declare class S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
}
export interface S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}
    */
    readonly status: string;
}
export declare function s3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference | S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects): any;
export declare function s3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsToHclTerraform(struct?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference | S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects): any;
export declare class S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
}
export interface S3BucketReplicationConfigurationRuleSourceSelectionCriteria {
    /**
    * replica_modifications block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#replica_modifications S3BucketReplicationConfigurationA#replica_modifications}
    */
    readonly replicaModifications?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications;
    /**
    * sse_kms_encrypted_objects block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#sse_kms_encrypted_objects S3BucketReplicationConfigurationA#sse_kms_encrypted_objects}
    */
    readonly sseKmsEncryptedObjects?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects;
}
export declare function s3BucketReplicationConfigurationRuleSourceSelectionCriteriaToTerraform(struct?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference | S3BucketReplicationConfigurationRuleSourceSelectionCriteria): any;
export declare function s3BucketReplicationConfigurationRuleSourceSelectionCriteriaToHclTerraform(struct?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference | S3BucketReplicationConfigurationRuleSourceSelectionCriteria): any;
export declare class S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRuleSourceSelectionCriteria | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleSourceSelectionCriteria | undefined);
    private _replicaModifications;
    get replicaModifications(): S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference;
    putReplicaModifications(value: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications): void;
    resetReplicaModifications(): void;
    get replicaModificationsInput(): S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications | undefined;
    private _sseKmsEncryptedObjects;
    get sseKmsEncryptedObjects(): S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference;
    putSseKmsEncryptedObjects(value: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects): void;
    resetSseKmsEncryptedObjects(): void;
    get sseKmsEncryptedObjectsInput(): S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects | undefined;
}
export interface S3BucketReplicationConfigurationRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#id S3BucketReplicationConfigurationA#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#prefix S3BucketReplicationConfigurationA#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#priority S3BucketReplicationConfigurationA#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#status S3BucketReplicationConfigurationA#status}
    */
    readonly status: string;
    /**
    * delete_marker_replication block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#delete_marker_replication S3BucketReplicationConfigurationA#delete_marker_replication}
    */
    readonly deleteMarkerReplication?: S3BucketReplicationConfigurationRuleDeleteMarkerReplication;
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#destination S3BucketReplicationConfigurationA#destination}
    */
    readonly destination: S3BucketReplicationConfigurationRuleDestination;
    /**
    * existing_object_replication block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#existing_object_replication S3BucketReplicationConfigurationA#existing_object_replication}
    */
    readonly existingObjectReplication?: S3BucketReplicationConfigurationRuleExistingObjectReplication;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#filter S3BucketReplicationConfigurationA#filter}
    */
    readonly filter?: S3BucketReplicationConfigurationRuleFilter;
    /**
    * source_selection_criteria block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#source_selection_criteria S3BucketReplicationConfigurationA#source_selection_criteria}
    */
    readonly sourceSelectionCriteria?: S3BucketReplicationConfigurationRuleSourceSelectionCriteria;
}
export declare function s3BucketReplicationConfigurationRuleToTerraform(struct?: S3BucketReplicationConfigurationRule | cdktf.IResolvable): any;
export declare function s3BucketReplicationConfigurationRuleToHclTerraform(struct?: S3BucketReplicationConfigurationRule | cdktf.IResolvable): any;
export declare class S3BucketReplicationConfigurationRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketReplicationConfigurationRule | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRule | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
    private _deleteMarkerReplication;
    get deleteMarkerReplication(): S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference;
    putDeleteMarkerReplication(value: S3BucketReplicationConfigurationRuleDeleteMarkerReplication): void;
    resetDeleteMarkerReplication(): void;
    get deleteMarkerReplicationInput(): S3BucketReplicationConfigurationRuleDeleteMarkerReplication | undefined;
    private _destination;
    get destination(): S3BucketReplicationConfigurationRuleDestinationOutputReference;
    putDestination(value: S3BucketReplicationConfigurationRuleDestination): void;
    get destinationInput(): S3BucketReplicationConfigurationRuleDestination | undefined;
    private _existingObjectReplication;
    get existingObjectReplication(): S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference;
    putExistingObjectReplication(value: S3BucketReplicationConfigurationRuleExistingObjectReplication): void;
    resetExistingObjectReplication(): void;
    get existingObjectReplicationInput(): S3BucketReplicationConfigurationRuleExistingObjectReplication | undefined;
    private _filter;
    get filter(): S3BucketReplicationConfigurationRuleFilterOutputReference;
    putFilter(value: S3BucketReplicationConfigurationRuleFilter): void;
    resetFilter(): void;
    get filterInput(): S3BucketReplicationConfigurationRuleFilter | undefined;
    private _sourceSelectionCriteria;
    get sourceSelectionCriteria(): S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference;
    putSourceSelectionCriteria(value: S3BucketReplicationConfigurationRuleSourceSelectionCriteria): void;
    resetSourceSelectionCriteria(): void;
    get sourceSelectionCriteriaInput(): S3BucketReplicationConfigurationRuleSourceSelectionCriteria | undefined;
}
export declare class S3BucketReplicationConfigurationRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketReplicationConfigurationRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketReplicationConfigurationRuleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration aws_s3_bucket_replication_configuration}
*/
export declare class S3BucketReplicationConfigurationA extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_bucket_replication_configuration";
    /**
    * Generates CDKTF code for importing a S3BucketReplicationConfigurationA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketReplicationConfigurationA to import
    * @param importFromId The id of the existing S3BucketReplicationConfigurationA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketReplicationConfigurationA to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_replication_configuration aws_s3_bucket_replication_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketReplicationConfigurationAConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketReplicationConfigurationAConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _role?;
    get role(): string;
    set role(value: string);
    get roleInput(): string | undefined;
    private _token?;
    get token(): string;
    set token(value: string);
    resetToken(): void;
    get tokenInput(): string | undefined;
    private _rule;
    get rule(): S3BucketReplicationConfigurationRuleList;
    putRule(value: S3BucketReplicationConfigurationRule[] | cdktf.IResolvable): void;
    get ruleInput(): cdktf.IResolvable | S3BucketReplicationConfigurationRule[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
