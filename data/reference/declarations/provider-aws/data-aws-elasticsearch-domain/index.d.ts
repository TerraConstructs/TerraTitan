/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsElasticsearchDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticsearch_domain#domain_name DataAwsElasticsearchDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticsearch_domain#id DataAwsElasticsearchDomain#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticsearch_domain#tags DataAwsElasticsearchDomain#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsElasticsearchDomainAdvancedSecurityOptions {
}
export declare function dataAwsElasticsearchDomainAdvancedSecurityOptionsToTerraform(struct?: DataAwsElasticsearchDomainAdvancedSecurityOptions): any;
export declare function dataAwsElasticsearchDomainAdvancedSecurityOptionsToHclTerraform(struct?: DataAwsElasticsearchDomainAdvancedSecurityOptions): any;
export declare class DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElasticsearchDomainAdvancedSecurityOptions | undefined;
    set internalValue(value: DataAwsElasticsearchDomainAdvancedSecurityOptions | undefined);
    get enabled(): cdktf.IResolvable;
    get internalUserDatabaseEnabled(): cdktf.IResolvable;
}
export declare class DataAwsElasticsearchDomainAdvancedSecurityOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference;
}
export interface DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration {
}
export declare function dataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationToTerraform(struct?: DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration): any;
export declare function dataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationToHclTerraform(struct?: DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration): any;
export declare class DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration | undefined;
    set internalValue(value: DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference;
}
export interface DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule {
}
export declare function dataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleToTerraform(struct?: DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule): any;
export declare function dataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleToHclTerraform(struct?: DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule): any;
export declare class DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule | undefined;
    set internalValue(value: DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule | undefined);
    get cronExpressionForRecurrence(): string;
    private _duration;
    get duration(): DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList;
    get startAt(): string;
}
export declare class DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference;
}
export interface DataAwsElasticsearchDomainAutoTuneOptions {
}
export declare function dataAwsElasticsearchDomainAutoTuneOptionsToTerraform(struct?: DataAwsElasticsearchDomainAutoTuneOptions): any;
export declare function dataAwsElasticsearchDomainAutoTuneOptionsToHclTerraform(struct?: DataAwsElasticsearchDomainAutoTuneOptions): any;
export declare class DataAwsElasticsearchDomainAutoTuneOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElasticsearchDomainAutoTuneOptions | undefined;
    set internalValue(value: DataAwsElasticsearchDomainAutoTuneOptions | undefined);
    get desiredState(): string;
    private _maintenanceSchedule;
    get maintenanceSchedule(): DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList;
    get rollbackOnDisable(): string;
}
export declare class DataAwsElasticsearchDomainAutoTuneOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsElasticsearchDomainAutoTuneOptionsOutputReference;
}
export interface DataAwsElasticsearchDomainClusterConfigColdStorageOptions {
}
export declare function dataAwsElasticsearchDomainClusterConfigColdStorageOptionsToTerraform(struct?: DataAwsElasticsearchDomainClusterConfigColdStorageOptions): any;
export declare function dataAwsElasticsearchDomainClusterConfigColdStorageOptionsToHclTerraform(struct?: DataAwsElasticsearchDomainClusterConfigColdStorageOptions): any;
export declare class DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElasticsearchDomainClusterConfigColdStorageOptions | undefined;
    set internalValue(value: DataAwsElasticsearchDomainClusterConfigColdStorageOptions | undefined);
    get enabled(): cdktf.IResolvable;
}
export declare class DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference;
}
export interface DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig {
}
export declare function dataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigToTerraform(struct?: DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig): any;
export declare function dataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigToHclTerraform(struct?: DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig): any;
export declare class DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig | undefined;
    set internalValue(value: DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig | undefined);
    get availabilityZoneCount(): number;
}
export declare class DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference;
}
export interface DataAwsElasticsearchDomainClusterConfig {
}
export declare function dataAwsElasticsearchDomainClusterConfigToTerraform(struct?: DataAwsElasticsearchDomainClusterConfig): any;
export declare function dataAwsElasticsearchDomainClusterConfigToHclTerraform(struct?: DataAwsElasticsearchDomainClusterConfig): any;
export declare class DataAwsElasticsearchDomainClusterConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElasticsearchDomainClusterConfig | undefined;
    set internalValue(value: DataAwsElasticsearchDomainClusterConfig | undefined);
    private _coldStorageOptions;
    get coldStorageOptions(): DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList;
    get dedicatedMasterCount(): number;
    get dedicatedMasterEnabled(): cdktf.IResolvable;
    get dedicatedMasterType(): string;
    get instanceCount(): number;
    get instanceType(): string;
    get warmCount(): number;
    get warmEnabled(): cdktf.IResolvable;
    get warmType(): string;
    private _zoneAwarenessConfig;
    get zoneAwarenessConfig(): DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList;
    get zoneAwarenessEnabled(): cdktf.IResolvable;
}
export declare class DataAwsElasticsearchDomainClusterConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsElasticsearchDomainClusterConfigOutputReference;
}
export interface DataAwsElasticsearchDomainCognitoOptions {
}
export declare function dataAwsElasticsearchDomainCognitoOptionsToTerraform(struct?: DataAwsElasticsearchDomainCognitoOptions): any;
export declare function dataAwsElasticsearchDomainCognitoOptionsToHclTerraform(struct?: DataAwsElasticsearchDomainCognitoOptions): any;
export declare class DataAwsElasticsearchDomainCognitoOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElasticsearchDomainCognitoOptions | undefined;
    set internalValue(value: DataAwsElasticsearchDomainCognitoOptions | undefined);
    get enabled(): cdktf.IResolvable;
    get identityPoolId(): string;
    get roleArn(): string;
    get userPoolId(): string;
}
export declare class DataAwsElasticsearchDomainCognitoOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsElasticsearchDomainCognitoOptionsOutputReference;
}
export interface DataAwsElasticsearchDomainEbsOptions {
}
export declare function dataAwsElasticsearchDomainEbsOptionsToTerraform(struct?: DataAwsElasticsearchDomainEbsOptions): any;
export declare function dataAwsElasticsearchDomainEbsOptionsToHclTerraform(struct?: DataAwsElasticsearchDomainEbsOptions): any;
export declare class DataAwsElasticsearchDomainEbsOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElasticsearchDomainEbsOptions | undefined;
    set internalValue(value: DataAwsElasticsearchDomainEbsOptions | undefined);
    get ebsEnabled(): cdktf.IResolvable;
    get iops(): number;
    get throughput(): number;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class DataAwsElasticsearchDomainEbsOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsElasticsearchDomainEbsOptionsOutputReference;
}
export interface DataAwsElasticsearchDomainEncryptionAtRest {
}
export declare function dataAwsElasticsearchDomainEncryptionAtRestToTerraform(struct?: DataAwsElasticsearchDomainEncryptionAtRest): any;
export declare function dataAwsElasticsearchDomainEncryptionAtRestToHclTerraform(struct?: DataAwsElasticsearchDomainEncryptionAtRest): any;
export declare class DataAwsElasticsearchDomainEncryptionAtRestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElasticsearchDomainEncryptionAtRest | undefined;
    set internalValue(value: DataAwsElasticsearchDomainEncryptionAtRest | undefined);
    get enabled(): cdktf.IResolvable;
    get kmsKeyId(): string;
}
export declare class DataAwsElasticsearchDomainEncryptionAtRestList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsElasticsearchDomainEncryptionAtRestOutputReference;
}
export interface DataAwsElasticsearchDomainLogPublishingOptions {
}
export declare function dataAwsElasticsearchDomainLogPublishingOptionsToTerraform(struct?: DataAwsElasticsearchDomainLogPublishingOptions): any;
export declare function dataAwsElasticsearchDomainLogPublishingOptionsToHclTerraform(struct?: DataAwsElasticsearchDomainLogPublishingOptions): any;
export declare class DataAwsElasticsearchDomainLogPublishingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElasticsearchDomainLogPublishingOptions | undefined;
    set internalValue(value: DataAwsElasticsearchDomainLogPublishingOptions | undefined);
    get cloudwatchLogGroupArn(): string;
    get enabled(): cdktf.IResolvable;
    get logType(): string;
}
export declare class DataAwsElasticsearchDomainLogPublishingOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsElasticsearchDomainLogPublishingOptionsOutputReference;
}
export interface DataAwsElasticsearchDomainNodeToNodeEncryption {
}
export declare function dataAwsElasticsearchDomainNodeToNodeEncryptionToTerraform(struct?: DataAwsElasticsearchDomainNodeToNodeEncryption): any;
export declare function dataAwsElasticsearchDomainNodeToNodeEncryptionToHclTerraform(struct?: DataAwsElasticsearchDomainNodeToNodeEncryption): any;
export declare class DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElasticsearchDomainNodeToNodeEncryption | undefined;
    set internalValue(value: DataAwsElasticsearchDomainNodeToNodeEncryption | undefined);
    get enabled(): cdktf.IResolvable;
}
export declare class DataAwsElasticsearchDomainNodeToNodeEncryptionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference;
}
export interface DataAwsElasticsearchDomainSnapshotOptions {
}
export declare function dataAwsElasticsearchDomainSnapshotOptionsToTerraform(struct?: DataAwsElasticsearchDomainSnapshotOptions): any;
export declare function dataAwsElasticsearchDomainSnapshotOptionsToHclTerraform(struct?: DataAwsElasticsearchDomainSnapshotOptions): any;
export declare class DataAwsElasticsearchDomainSnapshotOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElasticsearchDomainSnapshotOptions | undefined;
    set internalValue(value: DataAwsElasticsearchDomainSnapshotOptions | undefined);
    get automatedSnapshotStartHour(): number;
}
export declare class DataAwsElasticsearchDomainSnapshotOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsElasticsearchDomainSnapshotOptionsOutputReference;
}
export interface DataAwsElasticsearchDomainVpcOptions {
}
export declare function dataAwsElasticsearchDomainVpcOptionsToTerraform(struct?: DataAwsElasticsearchDomainVpcOptions): any;
export declare function dataAwsElasticsearchDomainVpcOptionsToHclTerraform(struct?: DataAwsElasticsearchDomainVpcOptions): any;
export declare class DataAwsElasticsearchDomainVpcOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElasticsearchDomainVpcOptions | undefined;
    set internalValue(value: DataAwsElasticsearchDomainVpcOptions | undefined);
    get availabilityZones(): string[];
    get securityGroupIds(): string[];
    get subnetIds(): string[];
    get vpcId(): string;
}
export declare class DataAwsElasticsearchDomainVpcOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsElasticsearchDomainVpcOptionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticsearch_domain aws_elasticsearch_domain}
*/
export declare class DataAwsElasticsearchDomain extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_elasticsearch_domain";
    /**
    * Generates CDKTF code for importing a DataAwsElasticsearchDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsElasticsearchDomain to import
    * @param importFromId The id of the existing DataAwsElasticsearchDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticsearch_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsElasticsearchDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticsearch_domain aws_elasticsearch_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticsearchDomainConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsElasticsearchDomainConfig);
    get accessPolicies(): string;
    private _advancedOptions;
    get advancedOptions(): cdktf.StringMap;
    private _advancedSecurityOptions;
    get advancedSecurityOptions(): DataAwsElasticsearchDomainAdvancedSecurityOptionsList;
    get arn(): string;
    private _autoTuneOptions;
    get autoTuneOptions(): DataAwsElasticsearchDomainAutoTuneOptionsList;
    private _clusterConfig;
    get clusterConfig(): DataAwsElasticsearchDomainClusterConfigList;
    private _cognitoOptions;
    get cognitoOptions(): DataAwsElasticsearchDomainCognitoOptionsList;
    get created(): cdktf.IResolvable;
    get deleted(): cdktf.IResolvable;
    get domainId(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _ebsOptions;
    get ebsOptions(): DataAwsElasticsearchDomainEbsOptionsList;
    get elasticsearchVersion(): string;
    private _encryptionAtRest;
    get encryptionAtRest(): DataAwsElasticsearchDomainEncryptionAtRestList;
    get endpoint(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get kibanaEndpoint(): string;
    private _logPublishingOptions;
    get logPublishingOptions(): DataAwsElasticsearchDomainLogPublishingOptionsList;
    private _nodeToNodeEncryption;
    get nodeToNodeEncryption(): DataAwsElasticsearchDomainNodeToNodeEncryptionList;
    get processing(): cdktf.IResolvable;
    private _snapshotOptions;
    get snapshotOptions(): DataAwsElasticsearchDomainSnapshotOptionsList;
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
    private _vpcOptions;
    get vpcOptions(): DataAwsElasticsearchDomainVpcOptionsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
