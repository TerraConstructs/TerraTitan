/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOpensearchDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearch_domain#domain_name DataAwsOpensearchDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearch_domain#id DataAwsOpensearchDomain#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearch_domain#tags DataAwsOpensearchDomain#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * off_peak_window_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearch_domain#off_peak_window_options DataAwsOpensearchDomain#off_peak_window_options}
    */
    readonly offPeakWindowOptions?: DataAwsOpensearchDomainOffPeakWindowOptions;
}
export interface DataAwsOpensearchDomainAdvancedSecurityOptions {
}
export declare function dataAwsOpensearchDomainAdvancedSecurityOptionsToTerraform(struct?: DataAwsOpensearchDomainAdvancedSecurityOptions): any;
export declare function dataAwsOpensearchDomainAdvancedSecurityOptionsToHclTerraform(struct?: DataAwsOpensearchDomainAdvancedSecurityOptions): any;
export declare class DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOpensearchDomainAdvancedSecurityOptions | undefined;
    set internalValue(value: DataAwsOpensearchDomainAdvancedSecurityOptions | undefined);
    get anonymousAuthEnabled(): cdktf.IResolvable;
    get enabled(): cdktf.IResolvable;
    get internalUserDatabaseEnabled(): cdktf.IResolvable;
}
export declare class DataAwsOpensearchDomainAdvancedSecurityOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference;
}
export interface DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration {
}
export declare function dataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationToTerraform(struct?: DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration): any;
export declare function dataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationToHclTerraform(struct?: DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration): any;
export declare class DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration | undefined;
    set internalValue(value: DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference;
}
export interface DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule {
}
export declare function dataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleToTerraform(struct?: DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule): any;
export declare function dataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleToHclTerraform(struct?: DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule): any;
export declare class DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule | undefined;
    set internalValue(value: DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule | undefined);
    get cronExpressionForRecurrence(): string;
    private _duration;
    get duration(): DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList;
    get startAt(): string;
}
export declare class DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference;
}
export interface DataAwsOpensearchDomainAutoTuneOptions {
}
export declare function dataAwsOpensearchDomainAutoTuneOptionsToTerraform(struct?: DataAwsOpensearchDomainAutoTuneOptions): any;
export declare function dataAwsOpensearchDomainAutoTuneOptionsToHclTerraform(struct?: DataAwsOpensearchDomainAutoTuneOptions): any;
export declare class DataAwsOpensearchDomainAutoTuneOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOpensearchDomainAutoTuneOptions | undefined;
    set internalValue(value: DataAwsOpensearchDomainAutoTuneOptions | undefined);
    get desiredState(): string;
    private _maintenanceSchedule;
    get maintenanceSchedule(): DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList;
    get rollbackOnDisable(): string;
    get useOffPeakWindow(): cdktf.IResolvable;
}
export declare class DataAwsOpensearchDomainAutoTuneOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOpensearchDomainAutoTuneOptionsOutputReference;
}
export interface DataAwsOpensearchDomainClusterConfigColdStorageOptions {
}
export declare function dataAwsOpensearchDomainClusterConfigColdStorageOptionsToTerraform(struct?: DataAwsOpensearchDomainClusterConfigColdStorageOptions): any;
export declare function dataAwsOpensearchDomainClusterConfigColdStorageOptionsToHclTerraform(struct?: DataAwsOpensearchDomainClusterConfigColdStorageOptions): any;
export declare class DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOpensearchDomainClusterConfigColdStorageOptions | undefined;
    set internalValue(value: DataAwsOpensearchDomainClusterConfigColdStorageOptions | undefined);
    get enabled(): cdktf.IResolvable;
}
export declare class DataAwsOpensearchDomainClusterConfigColdStorageOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference;
}
export interface DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig {
}
export declare function dataAwsOpensearchDomainClusterConfigZoneAwarenessConfigToTerraform(struct?: DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig): any;
export declare function dataAwsOpensearchDomainClusterConfigZoneAwarenessConfigToHclTerraform(struct?: DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig): any;
export declare class DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig | undefined;
    set internalValue(value: DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig | undefined);
    get availabilityZoneCount(): number;
}
export declare class DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference;
}
export interface DataAwsOpensearchDomainClusterConfig {
}
export declare function dataAwsOpensearchDomainClusterConfigToTerraform(struct?: DataAwsOpensearchDomainClusterConfig): any;
export declare function dataAwsOpensearchDomainClusterConfigToHclTerraform(struct?: DataAwsOpensearchDomainClusterConfig): any;
export declare class DataAwsOpensearchDomainClusterConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOpensearchDomainClusterConfig | undefined;
    set internalValue(value: DataAwsOpensearchDomainClusterConfig | undefined);
    private _coldStorageOptions;
    get coldStorageOptions(): DataAwsOpensearchDomainClusterConfigColdStorageOptionsList;
    get dedicatedMasterCount(): number;
    get dedicatedMasterEnabled(): cdktf.IResolvable;
    get dedicatedMasterType(): string;
    get instanceCount(): number;
    get instanceType(): string;
    get multiAzWithStandbyEnabled(): cdktf.IResolvable;
    get warmCount(): number;
    get warmEnabled(): cdktf.IResolvable;
    get warmType(): string;
    private _zoneAwarenessConfig;
    get zoneAwarenessConfig(): DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList;
    get zoneAwarenessEnabled(): cdktf.IResolvable;
}
export declare class DataAwsOpensearchDomainClusterConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOpensearchDomainClusterConfigOutputReference;
}
export interface DataAwsOpensearchDomainCognitoOptions {
}
export declare function dataAwsOpensearchDomainCognitoOptionsToTerraform(struct?: DataAwsOpensearchDomainCognitoOptions): any;
export declare function dataAwsOpensearchDomainCognitoOptionsToHclTerraform(struct?: DataAwsOpensearchDomainCognitoOptions): any;
export declare class DataAwsOpensearchDomainCognitoOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOpensearchDomainCognitoOptions | undefined;
    set internalValue(value: DataAwsOpensearchDomainCognitoOptions | undefined);
    get enabled(): cdktf.IResolvable;
    get identityPoolId(): string;
    get roleArn(): string;
    get userPoolId(): string;
}
export declare class DataAwsOpensearchDomainCognitoOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOpensearchDomainCognitoOptionsOutputReference;
}
export interface DataAwsOpensearchDomainEbsOptions {
}
export declare function dataAwsOpensearchDomainEbsOptionsToTerraform(struct?: DataAwsOpensearchDomainEbsOptions): any;
export declare function dataAwsOpensearchDomainEbsOptionsToHclTerraform(struct?: DataAwsOpensearchDomainEbsOptions): any;
export declare class DataAwsOpensearchDomainEbsOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOpensearchDomainEbsOptions | undefined;
    set internalValue(value: DataAwsOpensearchDomainEbsOptions | undefined);
    get ebsEnabled(): cdktf.IResolvable;
    get iops(): number;
    get throughput(): number;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class DataAwsOpensearchDomainEbsOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOpensearchDomainEbsOptionsOutputReference;
}
export interface DataAwsOpensearchDomainEncryptionAtRest {
}
export declare function dataAwsOpensearchDomainEncryptionAtRestToTerraform(struct?: DataAwsOpensearchDomainEncryptionAtRest): any;
export declare function dataAwsOpensearchDomainEncryptionAtRestToHclTerraform(struct?: DataAwsOpensearchDomainEncryptionAtRest): any;
export declare class DataAwsOpensearchDomainEncryptionAtRestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOpensearchDomainEncryptionAtRest | undefined;
    set internalValue(value: DataAwsOpensearchDomainEncryptionAtRest | undefined);
    get enabled(): cdktf.IResolvable;
    get kmsKeyId(): string;
}
export declare class DataAwsOpensearchDomainEncryptionAtRestList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOpensearchDomainEncryptionAtRestOutputReference;
}
export interface DataAwsOpensearchDomainLogPublishingOptions {
}
export declare function dataAwsOpensearchDomainLogPublishingOptionsToTerraform(struct?: DataAwsOpensearchDomainLogPublishingOptions): any;
export declare function dataAwsOpensearchDomainLogPublishingOptionsToHclTerraform(struct?: DataAwsOpensearchDomainLogPublishingOptions): any;
export declare class DataAwsOpensearchDomainLogPublishingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOpensearchDomainLogPublishingOptions | undefined;
    set internalValue(value: DataAwsOpensearchDomainLogPublishingOptions | undefined);
    get cloudwatchLogGroupArn(): string;
    get enabled(): cdktf.IResolvable;
    get logType(): string;
}
export declare class DataAwsOpensearchDomainLogPublishingOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOpensearchDomainLogPublishingOptionsOutputReference;
}
export interface DataAwsOpensearchDomainNodeToNodeEncryption {
}
export declare function dataAwsOpensearchDomainNodeToNodeEncryptionToTerraform(struct?: DataAwsOpensearchDomainNodeToNodeEncryption): any;
export declare function dataAwsOpensearchDomainNodeToNodeEncryptionToHclTerraform(struct?: DataAwsOpensearchDomainNodeToNodeEncryption): any;
export declare class DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOpensearchDomainNodeToNodeEncryption | undefined;
    set internalValue(value: DataAwsOpensearchDomainNodeToNodeEncryption | undefined);
    get enabled(): cdktf.IResolvable;
}
export declare class DataAwsOpensearchDomainNodeToNodeEncryptionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference;
}
export interface DataAwsOpensearchDomainSnapshotOptions {
}
export declare function dataAwsOpensearchDomainSnapshotOptionsToTerraform(struct?: DataAwsOpensearchDomainSnapshotOptions): any;
export declare function dataAwsOpensearchDomainSnapshotOptionsToHclTerraform(struct?: DataAwsOpensearchDomainSnapshotOptions): any;
export declare class DataAwsOpensearchDomainSnapshotOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOpensearchDomainSnapshotOptions | undefined;
    set internalValue(value: DataAwsOpensearchDomainSnapshotOptions | undefined);
    get automatedSnapshotStartHour(): number;
}
export declare class DataAwsOpensearchDomainSnapshotOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOpensearchDomainSnapshotOptionsOutputReference;
}
export interface DataAwsOpensearchDomainSoftwareUpdateOptions {
}
export declare function dataAwsOpensearchDomainSoftwareUpdateOptionsToTerraform(struct?: DataAwsOpensearchDomainSoftwareUpdateOptions): any;
export declare function dataAwsOpensearchDomainSoftwareUpdateOptionsToHclTerraform(struct?: DataAwsOpensearchDomainSoftwareUpdateOptions): any;
export declare class DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOpensearchDomainSoftwareUpdateOptions | undefined;
    set internalValue(value: DataAwsOpensearchDomainSoftwareUpdateOptions | undefined);
    get autoSoftwareUpdateEnabled(): cdktf.IResolvable;
}
export declare class DataAwsOpensearchDomainSoftwareUpdateOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference;
}
export interface DataAwsOpensearchDomainVpcOptions {
}
export declare function dataAwsOpensearchDomainVpcOptionsToTerraform(struct?: DataAwsOpensearchDomainVpcOptions): any;
export declare function dataAwsOpensearchDomainVpcOptionsToHclTerraform(struct?: DataAwsOpensearchDomainVpcOptions): any;
export declare class DataAwsOpensearchDomainVpcOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOpensearchDomainVpcOptions | undefined;
    set internalValue(value: DataAwsOpensearchDomainVpcOptions | undefined);
    get availabilityZones(): string[];
    get securityGroupIds(): string[];
    get subnetIds(): string[];
    get vpcId(): string;
}
export declare class DataAwsOpensearchDomainVpcOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOpensearchDomainVpcOptionsOutputReference;
}
export interface DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime {
}
export declare function dataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeToTerraform(struct?: DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime): any;
export declare function dataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeToHclTerraform(struct?: DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime): any;
export declare class DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime | undefined;
    set internalValue(value: DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime | undefined);
    get hours(): number;
    get minutes(): number;
}
export declare class DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference;
}
export interface DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindow {
}
export declare function dataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowToTerraform(struct?: DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindow): any;
export declare function dataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowToHclTerraform(struct?: DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindow): any;
export declare class DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindow | undefined;
    set internalValue(value: DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindow | undefined);
    private _windowStartTime;
    get windowStartTime(): DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList;
}
export declare class DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference;
}
export interface DataAwsOpensearchDomainOffPeakWindowOptions {
}
export declare function dataAwsOpensearchDomainOffPeakWindowOptionsToTerraform(struct?: DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference | DataAwsOpensearchDomainOffPeakWindowOptions): any;
export declare function dataAwsOpensearchDomainOffPeakWindowOptionsToHclTerraform(struct?: DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference | DataAwsOpensearchDomainOffPeakWindowOptions): any;
export declare class DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsOpensearchDomainOffPeakWindowOptions | undefined;
    set internalValue(value: DataAwsOpensearchDomainOffPeakWindowOptions | undefined);
    get enabled(): cdktf.IResolvable;
    private _offPeakWindow;
    get offPeakWindow(): DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearch_domain aws_opensearch_domain}
*/
export declare class DataAwsOpensearchDomain extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_opensearch_domain";
    /**
    * Generates CDKTF code for importing a DataAwsOpensearchDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsOpensearchDomain to import
    * @param importFromId The id of the existing DataAwsOpensearchDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearch_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsOpensearchDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearch_domain aws_opensearch_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOpensearchDomainConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsOpensearchDomainConfig);
    get accessPolicies(): string;
    private _advancedOptions;
    get advancedOptions(): cdktf.StringMap;
    private _advancedSecurityOptions;
    get advancedSecurityOptions(): DataAwsOpensearchDomainAdvancedSecurityOptionsList;
    get arn(): string;
    private _autoTuneOptions;
    get autoTuneOptions(): DataAwsOpensearchDomainAutoTuneOptionsList;
    private _clusterConfig;
    get clusterConfig(): DataAwsOpensearchDomainClusterConfigList;
    private _cognitoOptions;
    get cognitoOptions(): DataAwsOpensearchDomainCognitoOptionsList;
    get created(): cdktf.IResolvable;
    get dashboardEndpoint(): string;
    get dashboardEndpointV2(): string;
    get deleted(): cdktf.IResolvable;
    get domainEndpointV2HostedZoneId(): string;
    get domainId(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _ebsOptions;
    get ebsOptions(): DataAwsOpensearchDomainEbsOptionsList;
    private _encryptionAtRest;
    get encryptionAtRest(): DataAwsOpensearchDomainEncryptionAtRestList;
    get endpoint(): string;
    get endpointV2(): string;
    get engineVersion(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ipAddressType(): string;
    get kibanaEndpoint(): string;
    private _logPublishingOptions;
    get logPublishingOptions(): DataAwsOpensearchDomainLogPublishingOptionsList;
    private _nodeToNodeEncryption;
    get nodeToNodeEncryption(): DataAwsOpensearchDomainNodeToNodeEncryptionList;
    get processing(): cdktf.IResolvable;
    private _snapshotOptions;
    get snapshotOptions(): DataAwsOpensearchDomainSnapshotOptionsList;
    private _softwareUpdateOptions;
    get softwareUpdateOptions(): DataAwsOpensearchDomainSoftwareUpdateOptionsList;
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
    get vpcOptions(): DataAwsOpensearchDomainVpcOptionsList;
    private _offPeakWindowOptions;
    get offPeakWindowOptions(): DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference;
    putOffPeakWindowOptions(value: DataAwsOpensearchDomainOffPeakWindowOptions): void;
    resetOffPeakWindowOptions(): void;
    get offPeakWindowOptionsInput(): DataAwsOpensearchDomainOffPeakWindowOptions | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
