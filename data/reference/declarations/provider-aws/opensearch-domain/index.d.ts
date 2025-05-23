/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpensearchDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#access_policies OpensearchDomain#access_policies}
    */
    readonly accessPolicies?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#advanced_options OpensearchDomain#advanced_options}
    */
    readonly advancedOptions?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#domain_name OpensearchDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#engine_version OpensearchDomain#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#id OpensearchDomain#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#ip_address_type OpensearchDomain#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#tags OpensearchDomain#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#tags_all OpensearchDomain#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * advanced_security_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#advanced_security_options OpensearchDomain#advanced_security_options}
    */
    readonly advancedSecurityOptions?: OpensearchDomainAdvancedSecurityOptions;
    /**
    * auto_tune_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#auto_tune_options OpensearchDomain#auto_tune_options}
    */
    readonly autoTuneOptions?: OpensearchDomainAutoTuneOptions;
    /**
    * cluster_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#cluster_config OpensearchDomain#cluster_config}
    */
    readonly clusterConfig?: OpensearchDomainClusterConfig;
    /**
    * cognito_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#cognito_options OpensearchDomain#cognito_options}
    */
    readonly cognitoOptions?: OpensearchDomainCognitoOptions;
    /**
    * domain_endpoint_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#domain_endpoint_options OpensearchDomain#domain_endpoint_options}
    */
    readonly domainEndpointOptions?: OpensearchDomainDomainEndpointOptions;
    /**
    * ebs_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#ebs_options OpensearchDomain#ebs_options}
    */
    readonly ebsOptions?: OpensearchDomainEbsOptions;
    /**
    * encrypt_at_rest block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#encrypt_at_rest OpensearchDomain#encrypt_at_rest}
    */
    readonly encryptAtRest?: OpensearchDomainEncryptAtRest;
    /**
    * log_publishing_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#log_publishing_options OpensearchDomain#log_publishing_options}
    */
    readonly logPublishingOptions?: OpensearchDomainLogPublishingOptions[] | cdktf.IResolvable;
    /**
    * node_to_node_encryption block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#node_to_node_encryption OpensearchDomain#node_to_node_encryption}
    */
    readonly nodeToNodeEncryption?: OpensearchDomainNodeToNodeEncryption;
    /**
    * off_peak_window_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#off_peak_window_options OpensearchDomain#off_peak_window_options}
    */
    readonly offPeakWindowOptions?: OpensearchDomainOffPeakWindowOptions;
    /**
    * snapshot_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#snapshot_options OpensearchDomain#snapshot_options}
    */
    readonly snapshotOptions?: OpensearchDomainSnapshotOptions;
    /**
    * software_update_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#software_update_options OpensearchDomain#software_update_options}
    */
    readonly softwareUpdateOptions?: OpensearchDomainSoftwareUpdateOptions;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#timeouts OpensearchDomain#timeouts}
    */
    readonly timeouts?: OpensearchDomainTimeouts;
    /**
    * vpc_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#vpc_options OpensearchDomain#vpc_options}
    */
    readonly vpcOptions?: OpensearchDomainVpcOptions;
}
export interface OpensearchDomainAdvancedSecurityOptionsMasterUserOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#master_user_arn OpensearchDomain#master_user_arn}
    */
    readonly masterUserArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#master_user_name OpensearchDomain#master_user_name}
    */
    readonly masterUserName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#master_user_password OpensearchDomain#master_user_password}
    */
    readonly masterUserPassword?: string;
}
export declare function opensearchDomainAdvancedSecurityOptionsMasterUserOptionsToTerraform(struct?: OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference | OpensearchDomainAdvancedSecurityOptionsMasterUserOptions): any;
export declare function opensearchDomainAdvancedSecurityOptionsMasterUserOptionsToHclTerraform(struct?: OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference | OpensearchDomainAdvancedSecurityOptionsMasterUserOptions): any;
export declare class OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainAdvancedSecurityOptionsMasterUserOptions | undefined;
    set internalValue(value: OpensearchDomainAdvancedSecurityOptionsMasterUserOptions | undefined);
    private _masterUserArn?;
    get masterUserArn(): string;
    set masterUserArn(value: string);
    resetMasterUserArn(): void;
    get masterUserArnInput(): string | undefined;
    private _masterUserName?;
    get masterUserName(): string;
    set masterUserName(value: string);
    resetMasterUserName(): void;
    get masterUserNameInput(): string | undefined;
    private _masterUserPassword?;
    get masterUserPassword(): string;
    set masterUserPassword(value: string);
    resetMasterUserPassword(): void;
    get masterUserPasswordInput(): string | undefined;
}
export interface OpensearchDomainAdvancedSecurityOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#anonymous_auth_enabled OpensearchDomain#anonymous_auth_enabled}
    */
    readonly anonymousAuthEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#internal_user_database_enabled OpensearchDomain#internal_user_database_enabled}
    */
    readonly internalUserDatabaseEnabled?: boolean | cdktf.IResolvable;
    /**
    * master_user_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#master_user_options OpensearchDomain#master_user_options}
    */
    readonly masterUserOptions?: OpensearchDomainAdvancedSecurityOptionsMasterUserOptions;
}
export declare function opensearchDomainAdvancedSecurityOptionsToTerraform(struct?: OpensearchDomainAdvancedSecurityOptionsOutputReference | OpensearchDomainAdvancedSecurityOptions): any;
export declare function opensearchDomainAdvancedSecurityOptionsToHclTerraform(struct?: OpensearchDomainAdvancedSecurityOptionsOutputReference | OpensearchDomainAdvancedSecurityOptions): any;
export declare class OpensearchDomainAdvancedSecurityOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainAdvancedSecurityOptions | undefined;
    set internalValue(value: OpensearchDomainAdvancedSecurityOptions | undefined);
    private _anonymousAuthEnabled?;
    get anonymousAuthEnabled(): boolean | cdktf.IResolvable;
    set anonymousAuthEnabled(value: boolean | cdktf.IResolvable);
    resetAnonymousAuthEnabled(): void;
    get anonymousAuthEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _internalUserDatabaseEnabled?;
    get internalUserDatabaseEnabled(): boolean | cdktf.IResolvable;
    set internalUserDatabaseEnabled(value: boolean | cdktf.IResolvable);
    resetInternalUserDatabaseEnabled(): void;
    get internalUserDatabaseEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _masterUserOptions;
    get masterUserOptions(): OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference;
    putMasterUserOptions(value: OpensearchDomainAdvancedSecurityOptionsMasterUserOptions): void;
    resetMasterUserOptions(): void;
    get masterUserOptionsInput(): OpensearchDomainAdvancedSecurityOptionsMasterUserOptions | undefined;
}
export interface OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#unit OpensearchDomain#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#value OpensearchDomain#value}
    */
    readonly value: number;
}
export declare function opensearchDomainAutoTuneOptionsMaintenanceScheduleDurationToTerraform(struct?: OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference | OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration): any;
export declare function opensearchDomainAutoTuneOptionsMaintenanceScheduleDurationToHclTerraform(struct?: OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference | OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration): any;
export declare class OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration | undefined;
    set internalValue(value: OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface OpensearchDomainAutoTuneOptionsMaintenanceSchedule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#cron_expression_for_recurrence OpensearchDomain#cron_expression_for_recurrence}
    */
    readonly cronExpressionForRecurrence: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#start_at OpensearchDomain#start_at}
    */
    readonly startAt: string;
    /**
    * duration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#duration OpensearchDomain#duration}
    */
    readonly duration: OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration;
}
export declare function opensearchDomainAutoTuneOptionsMaintenanceScheduleToTerraform(struct?: OpensearchDomainAutoTuneOptionsMaintenanceSchedule | cdktf.IResolvable): any;
export declare function opensearchDomainAutoTuneOptionsMaintenanceScheduleToHclTerraform(struct?: OpensearchDomainAutoTuneOptionsMaintenanceSchedule | cdktf.IResolvable): any;
export declare class OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OpensearchDomainAutoTuneOptionsMaintenanceSchedule | cdktf.IResolvable | undefined;
    set internalValue(value: OpensearchDomainAutoTuneOptionsMaintenanceSchedule | cdktf.IResolvable | undefined);
    private _cronExpressionForRecurrence?;
    get cronExpressionForRecurrence(): string;
    set cronExpressionForRecurrence(value: string);
    get cronExpressionForRecurrenceInput(): string | undefined;
    private _startAt?;
    get startAt(): string;
    set startAt(value: string);
    get startAtInput(): string | undefined;
    private _duration;
    get duration(): OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference;
    putDuration(value: OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration): void;
    get durationInput(): OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration | undefined;
}
export declare class OpensearchDomainAutoTuneOptionsMaintenanceScheduleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OpensearchDomainAutoTuneOptionsMaintenanceSchedule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference;
}
export interface OpensearchDomainAutoTuneOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#desired_state OpensearchDomain#desired_state}
    */
    readonly desiredState: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#rollback_on_disable OpensearchDomain#rollback_on_disable}
    */
    readonly rollbackOnDisable?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#use_off_peak_window OpensearchDomain#use_off_peak_window}
    */
    readonly useOffPeakWindow?: boolean | cdktf.IResolvable;
    /**
    * maintenance_schedule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#maintenance_schedule OpensearchDomain#maintenance_schedule}
    */
    readonly maintenanceSchedule?: OpensearchDomainAutoTuneOptionsMaintenanceSchedule[] | cdktf.IResolvable;
}
export declare function opensearchDomainAutoTuneOptionsToTerraform(struct?: OpensearchDomainAutoTuneOptionsOutputReference | OpensearchDomainAutoTuneOptions): any;
export declare function opensearchDomainAutoTuneOptionsToHclTerraform(struct?: OpensearchDomainAutoTuneOptionsOutputReference | OpensearchDomainAutoTuneOptions): any;
export declare class OpensearchDomainAutoTuneOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainAutoTuneOptions | undefined;
    set internalValue(value: OpensearchDomainAutoTuneOptions | undefined);
    private _desiredState?;
    get desiredState(): string;
    set desiredState(value: string);
    get desiredStateInput(): string | undefined;
    private _rollbackOnDisable?;
    get rollbackOnDisable(): string;
    set rollbackOnDisable(value: string);
    resetRollbackOnDisable(): void;
    get rollbackOnDisableInput(): string | undefined;
    private _useOffPeakWindow?;
    get useOffPeakWindow(): boolean | cdktf.IResolvable;
    set useOffPeakWindow(value: boolean | cdktf.IResolvable);
    resetUseOffPeakWindow(): void;
    get useOffPeakWindowInput(): boolean | cdktf.IResolvable | undefined;
    private _maintenanceSchedule;
    get maintenanceSchedule(): OpensearchDomainAutoTuneOptionsMaintenanceScheduleList;
    putMaintenanceSchedule(value: OpensearchDomainAutoTuneOptionsMaintenanceSchedule[] | cdktf.IResolvable): void;
    resetMaintenanceSchedule(): void;
    get maintenanceScheduleInput(): cdktf.IResolvable | OpensearchDomainAutoTuneOptionsMaintenanceSchedule[] | undefined;
}
export interface OpensearchDomainClusterConfigColdStorageOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function opensearchDomainClusterConfigColdStorageOptionsToTerraform(struct?: OpensearchDomainClusterConfigColdStorageOptionsOutputReference | OpensearchDomainClusterConfigColdStorageOptions): any;
export declare function opensearchDomainClusterConfigColdStorageOptionsToHclTerraform(struct?: OpensearchDomainClusterConfigColdStorageOptionsOutputReference | OpensearchDomainClusterConfigColdStorageOptions): any;
export declare class OpensearchDomainClusterConfigColdStorageOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainClusterConfigColdStorageOptions | undefined;
    set internalValue(value: OpensearchDomainClusterConfigColdStorageOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface OpensearchDomainClusterConfigZoneAwarenessConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#availability_zone_count OpensearchDomain#availability_zone_count}
    */
    readonly availabilityZoneCount?: number;
}
export declare function opensearchDomainClusterConfigZoneAwarenessConfigToTerraform(struct?: OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference | OpensearchDomainClusterConfigZoneAwarenessConfig): any;
export declare function opensearchDomainClusterConfigZoneAwarenessConfigToHclTerraform(struct?: OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference | OpensearchDomainClusterConfigZoneAwarenessConfig): any;
export declare class OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainClusterConfigZoneAwarenessConfig | undefined;
    set internalValue(value: OpensearchDomainClusterConfigZoneAwarenessConfig | undefined);
    private _availabilityZoneCount?;
    get availabilityZoneCount(): number;
    set availabilityZoneCount(value: number);
    resetAvailabilityZoneCount(): void;
    get availabilityZoneCountInput(): number | undefined;
}
export interface OpensearchDomainClusterConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#dedicated_master_count OpensearchDomain#dedicated_master_count}
    */
    readonly dedicatedMasterCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#dedicated_master_enabled OpensearchDomain#dedicated_master_enabled}
    */
    readonly dedicatedMasterEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#dedicated_master_type OpensearchDomain#dedicated_master_type}
    */
    readonly dedicatedMasterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#instance_count OpensearchDomain#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#instance_type OpensearchDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#multi_az_with_standby_enabled OpensearchDomain#multi_az_with_standby_enabled}
    */
    readonly multiAzWithStandbyEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#warm_count OpensearchDomain#warm_count}
    */
    readonly warmCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#warm_enabled OpensearchDomain#warm_enabled}
    */
    readonly warmEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#warm_type OpensearchDomain#warm_type}
    */
    readonly warmType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#zone_awareness_enabled OpensearchDomain#zone_awareness_enabled}
    */
    readonly zoneAwarenessEnabled?: boolean | cdktf.IResolvable;
    /**
    * cold_storage_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#cold_storage_options OpensearchDomain#cold_storage_options}
    */
    readonly coldStorageOptions?: OpensearchDomainClusterConfigColdStorageOptions;
    /**
    * zone_awareness_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#zone_awareness_config OpensearchDomain#zone_awareness_config}
    */
    readonly zoneAwarenessConfig?: OpensearchDomainClusterConfigZoneAwarenessConfig;
}
export declare function opensearchDomainClusterConfigToTerraform(struct?: OpensearchDomainClusterConfigOutputReference | OpensearchDomainClusterConfig): any;
export declare function opensearchDomainClusterConfigToHclTerraform(struct?: OpensearchDomainClusterConfigOutputReference | OpensearchDomainClusterConfig): any;
export declare class OpensearchDomainClusterConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainClusterConfig | undefined;
    set internalValue(value: OpensearchDomainClusterConfig | undefined);
    private _dedicatedMasterCount?;
    get dedicatedMasterCount(): number;
    set dedicatedMasterCount(value: number);
    resetDedicatedMasterCount(): void;
    get dedicatedMasterCountInput(): number | undefined;
    private _dedicatedMasterEnabled?;
    get dedicatedMasterEnabled(): boolean | cdktf.IResolvable;
    set dedicatedMasterEnabled(value: boolean | cdktf.IResolvable);
    resetDedicatedMasterEnabled(): void;
    get dedicatedMasterEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _dedicatedMasterType?;
    get dedicatedMasterType(): string;
    set dedicatedMasterType(value: string);
    resetDedicatedMasterType(): void;
    get dedicatedMasterTypeInput(): string | undefined;
    private _instanceCount?;
    get instanceCount(): number;
    set instanceCount(value: number);
    resetInstanceCount(): void;
    get instanceCountInput(): number | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _multiAzWithStandbyEnabled?;
    get multiAzWithStandbyEnabled(): boolean | cdktf.IResolvable;
    set multiAzWithStandbyEnabled(value: boolean | cdktf.IResolvable);
    resetMultiAzWithStandbyEnabled(): void;
    get multiAzWithStandbyEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _warmCount?;
    get warmCount(): number;
    set warmCount(value: number);
    resetWarmCount(): void;
    get warmCountInput(): number | undefined;
    private _warmEnabled?;
    get warmEnabled(): boolean | cdktf.IResolvable;
    set warmEnabled(value: boolean | cdktf.IResolvable);
    resetWarmEnabled(): void;
    get warmEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _warmType?;
    get warmType(): string;
    set warmType(value: string);
    resetWarmType(): void;
    get warmTypeInput(): string | undefined;
    private _zoneAwarenessEnabled?;
    get zoneAwarenessEnabled(): boolean | cdktf.IResolvable;
    set zoneAwarenessEnabled(value: boolean | cdktf.IResolvable);
    resetZoneAwarenessEnabled(): void;
    get zoneAwarenessEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _coldStorageOptions;
    get coldStorageOptions(): OpensearchDomainClusterConfigColdStorageOptionsOutputReference;
    putColdStorageOptions(value: OpensearchDomainClusterConfigColdStorageOptions): void;
    resetColdStorageOptions(): void;
    get coldStorageOptionsInput(): OpensearchDomainClusterConfigColdStorageOptions | undefined;
    private _zoneAwarenessConfig;
    get zoneAwarenessConfig(): OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference;
    putZoneAwarenessConfig(value: OpensearchDomainClusterConfigZoneAwarenessConfig): void;
    resetZoneAwarenessConfig(): void;
    get zoneAwarenessConfigInput(): OpensearchDomainClusterConfigZoneAwarenessConfig | undefined;
}
export interface OpensearchDomainCognitoOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#identity_pool_id OpensearchDomain#identity_pool_id}
    */
    readonly identityPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#role_arn OpensearchDomain#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#user_pool_id OpensearchDomain#user_pool_id}
    */
    readonly userPoolId: string;
}
export declare function opensearchDomainCognitoOptionsToTerraform(struct?: OpensearchDomainCognitoOptionsOutputReference | OpensearchDomainCognitoOptions): any;
export declare function opensearchDomainCognitoOptionsToHclTerraform(struct?: OpensearchDomainCognitoOptionsOutputReference | OpensearchDomainCognitoOptions): any;
export declare class OpensearchDomainCognitoOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainCognitoOptions | undefined;
    set internalValue(value: OpensearchDomainCognitoOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _identityPoolId?;
    get identityPoolId(): string;
    set identityPoolId(value: string);
    get identityPoolIdInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _userPoolId?;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string | undefined;
}
export interface OpensearchDomainDomainEndpointOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#custom_endpoint OpensearchDomain#custom_endpoint}
    */
    readonly customEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#custom_endpoint_certificate_arn OpensearchDomain#custom_endpoint_certificate_arn}
    */
    readonly customEndpointCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#custom_endpoint_enabled OpensearchDomain#custom_endpoint_enabled}
    */
    readonly customEndpointEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#enforce_https OpensearchDomain#enforce_https}
    */
    readonly enforceHttps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#tls_security_policy OpensearchDomain#tls_security_policy}
    */
    readonly tlsSecurityPolicy?: string;
}
export declare function opensearchDomainDomainEndpointOptionsToTerraform(struct?: OpensearchDomainDomainEndpointOptionsOutputReference | OpensearchDomainDomainEndpointOptions): any;
export declare function opensearchDomainDomainEndpointOptionsToHclTerraform(struct?: OpensearchDomainDomainEndpointOptionsOutputReference | OpensearchDomainDomainEndpointOptions): any;
export declare class OpensearchDomainDomainEndpointOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainDomainEndpointOptions | undefined;
    set internalValue(value: OpensearchDomainDomainEndpointOptions | undefined);
    private _customEndpoint?;
    get customEndpoint(): string;
    set customEndpoint(value: string);
    resetCustomEndpoint(): void;
    get customEndpointInput(): string | undefined;
    private _customEndpointCertificateArn?;
    get customEndpointCertificateArn(): string;
    set customEndpointCertificateArn(value: string);
    resetCustomEndpointCertificateArn(): void;
    get customEndpointCertificateArnInput(): string | undefined;
    private _customEndpointEnabled?;
    get customEndpointEnabled(): boolean | cdktf.IResolvable;
    set customEndpointEnabled(value: boolean | cdktf.IResolvable);
    resetCustomEndpointEnabled(): void;
    get customEndpointEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _enforceHttps?;
    get enforceHttps(): boolean | cdktf.IResolvable;
    set enforceHttps(value: boolean | cdktf.IResolvable);
    resetEnforceHttps(): void;
    get enforceHttpsInput(): boolean | cdktf.IResolvable | undefined;
    private _tlsSecurityPolicy?;
    get tlsSecurityPolicy(): string;
    set tlsSecurityPolicy(value: string);
    resetTlsSecurityPolicy(): void;
    get tlsSecurityPolicyInput(): string | undefined;
}
export interface OpensearchDomainEbsOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#ebs_enabled OpensearchDomain#ebs_enabled}
    */
    readonly ebsEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#iops OpensearchDomain#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#throughput OpensearchDomain#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#volume_size OpensearchDomain#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#volume_type OpensearchDomain#volume_type}
    */
    readonly volumeType?: string;
}
export declare function opensearchDomainEbsOptionsToTerraform(struct?: OpensearchDomainEbsOptionsOutputReference | OpensearchDomainEbsOptions): any;
export declare function opensearchDomainEbsOptionsToHclTerraform(struct?: OpensearchDomainEbsOptionsOutputReference | OpensearchDomainEbsOptions): any;
export declare class OpensearchDomainEbsOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainEbsOptions | undefined;
    set internalValue(value: OpensearchDomainEbsOptions | undefined);
    private _ebsEnabled?;
    get ebsEnabled(): boolean | cdktf.IResolvable;
    set ebsEnabled(value: boolean | cdktf.IResolvable);
    get ebsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number | undefined;
    private _throughput?;
    get throughput(): number;
    set throughput(value: number);
    resetThroughput(): void;
    get throughputInput(): number | undefined;
    private _volumeSize?;
    get volumeSize(): number;
    set volumeSize(value: number);
    resetVolumeSize(): void;
    get volumeSizeInput(): number | undefined;
    private _volumeType?;
    get volumeType(): string;
    set volumeType(value: string);
    resetVolumeType(): void;
    get volumeTypeInput(): string | undefined;
}
export interface OpensearchDomainEncryptAtRest {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#kms_key_id OpensearchDomain#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export declare function opensearchDomainEncryptAtRestToTerraform(struct?: OpensearchDomainEncryptAtRestOutputReference | OpensearchDomainEncryptAtRest): any;
export declare function opensearchDomainEncryptAtRestToHclTerraform(struct?: OpensearchDomainEncryptAtRestOutputReference | OpensearchDomainEncryptAtRest): any;
export declare class OpensearchDomainEncryptAtRestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainEncryptAtRest | undefined;
    set internalValue(value: OpensearchDomainEncryptAtRest | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
}
export interface OpensearchDomainLogPublishingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#cloudwatch_log_group_arn OpensearchDomain#cloudwatch_log_group_arn}
    */
    readonly cloudwatchLogGroupArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#log_type OpensearchDomain#log_type}
    */
    readonly logType: string;
}
export declare function opensearchDomainLogPublishingOptionsToTerraform(struct?: OpensearchDomainLogPublishingOptions | cdktf.IResolvable): any;
export declare function opensearchDomainLogPublishingOptionsToHclTerraform(struct?: OpensearchDomainLogPublishingOptions | cdktf.IResolvable): any;
export declare class OpensearchDomainLogPublishingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OpensearchDomainLogPublishingOptions | cdktf.IResolvable | undefined;
    set internalValue(value: OpensearchDomainLogPublishingOptions | cdktf.IResolvable | undefined);
    private _cloudwatchLogGroupArn?;
    get cloudwatchLogGroupArn(): string;
    set cloudwatchLogGroupArn(value: string);
    get cloudwatchLogGroupArnInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logType?;
    get logType(): string;
    set logType(value: string);
    get logTypeInput(): string | undefined;
}
export declare class OpensearchDomainLogPublishingOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OpensearchDomainLogPublishingOptions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OpensearchDomainLogPublishingOptionsOutputReference;
}
export interface OpensearchDomainNodeToNodeEncryption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function opensearchDomainNodeToNodeEncryptionToTerraform(struct?: OpensearchDomainNodeToNodeEncryptionOutputReference | OpensearchDomainNodeToNodeEncryption): any;
export declare function opensearchDomainNodeToNodeEncryptionToHclTerraform(struct?: OpensearchDomainNodeToNodeEncryptionOutputReference | OpensearchDomainNodeToNodeEncryption): any;
export declare class OpensearchDomainNodeToNodeEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainNodeToNodeEncryption | undefined;
    set internalValue(value: OpensearchDomainNodeToNodeEncryption | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#hours OpensearchDomain#hours}
    */
    readonly hours?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#minutes OpensearchDomain#minutes}
    */
    readonly minutes?: number;
}
export declare function opensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeToTerraform(struct?: OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference | OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime): any;
export declare function opensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeToHclTerraform(struct?: OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference | OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime): any;
export declare class OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime | undefined;
    set internalValue(value: OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime | undefined);
    private _hours?;
    get hours(): number;
    set hours(value: number);
    resetHours(): void;
    get hoursInput(): number | undefined;
    private _minutes?;
    get minutes(): number;
    set minutes(value: number);
    resetMinutes(): void;
    get minutesInput(): number | undefined;
}
export interface OpensearchDomainOffPeakWindowOptionsOffPeakWindow {
    /**
    * window_start_time block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#window_start_time OpensearchDomain#window_start_time}
    */
    readonly windowStartTime?: OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime;
}
export declare function opensearchDomainOffPeakWindowOptionsOffPeakWindowToTerraform(struct?: OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference | OpensearchDomainOffPeakWindowOptionsOffPeakWindow): any;
export declare function opensearchDomainOffPeakWindowOptionsOffPeakWindowToHclTerraform(struct?: OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference | OpensearchDomainOffPeakWindowOptionsOffPeakWindow): any;
export declare class OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainOffPeakWindowOptionsOffPeakWindow | undefined;
    set internalValue(value: OpensearchDomainOffPeakWindowOptionsOffPeakWindow | undefined);
    private _windowStartTime;
    get windowStartTime(): OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference;
    putWindowStartTime(value: OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime): void;
    resetWindowStartTime(): void;
    get windowStartTimeInput(): OpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime | undefined;
}
export interface OpensearchDomainOffPeakWindowOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#enabled OpensearchDomain#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * off_peak_window block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#off_peak_window OpensearchDomain#off_peak_window}
    */
    readonly offPeakWindow?: OpensearchDomainOffPeakWindowOptionsOffPeakWindow;
}
export declare function opensearchDomainOffPeakWindowOptionsToTerraform(struct?: OpensearchDomainOffPeakWindowOptionsOutputReference | OpensearchDomainOffPeakWindowOptions): any;
export declare function opensearchDomainOffPeakWindowOptionsToHclTerraform(struct?: OpensearchDomainOffPeakWindowOptionsOutputReference | OpensearchDomainOffPeakWindowOptions): any;
export declare class OpensearchDomainOffPeakWindowOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainOffPeakWindowOptions | undefined;
    set internalValue(value: OpensearchDomainOffPeakWindowOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _offPeakWindow;
    get offPeakWindow(): OpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference;
    putOffPeakWindow(value: OpensearchDomainOffPeakWindowOptionsOffPeakWindow): void;
    resetOffPeakWindow(): void;
    get offPeakWindowInput(): OpensearchDomainOffPeakWindowOptionsOffPeakWindow | undefined;
}
export interface OpensearchDomainSnapshotOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#automated_snapshot_start_hour OpensearchDomain#automated_snapshot_start_hour}
    */
    readonly automatedSnapshotStartHour: number;
}
export declare function opensearchDomainSnapshotOptionsToTerraform(struct?: OpensearchDomainSnapshotOptionsOutputReference | OpensearchDomainSnapshotOptions): any;
export declare function opensearchDomainSnapshotOptionsToHclTerraform(struct?: OpensearchDomainSnapshotOptionsOutputReference | OpensearchDomainSnapshotOptions): any;
export declare class OpensearchDomainSnapshotOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainSnapshotOptions | undefined;
    set internalValue(value: OpensearchDomainSnapshotOptions | undefined);
    private _automatedSnapshotStartHour?;
    get automatedSnapshotStartHour(): number;
    set automatedSnapshotStartHour(value: number);
    get automatedSnapshotStartHourInput(): number | undefined;
}
export interface OpensearchDomainSoftwareUpdateOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#auto_software_update_enabled OpensearchDomain#auto_software_update_enabled}
    */
    readonly autoSoftwareUpdateEnabled?: boolean | cdktf.IResolvable;
}
export declare function opensearchDomainSoftwareUpdateOptionsToTerraform(struct?: OpensearchDomainSoftwareUpdateOptionsOutputReference | OpensearchDomainSoftwareUpdateOptions): any;
export declare function opensearchDomainSoftwareUpdateOptionsToHclTerraform(struct?: OpensearchDomainSoftwareUpdateOptionsOutputReference | OpensearchDomainSoftwareUpdateOptions): any;
export declare class OpensearchDomainSoftwareUpdateOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainSoftwareUpdateOptions | undefined;
    set internalValue(value: OpensearchDomainSoftwareUpdateOptions | undefined);
    private _autoSoftwareUpdateEnabled?;
    get autoSoftwareUpdateEnabled(): boolean | cdktf.IResolvable;
    set autoSoftwareUpdateEnabled(value: boolean | cdktf.IResolvable);
    resetAutoSoftwareUpdateEnabled(): void;
    get autoSoftwareUpdateEnabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface OpensearchDomainTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#create OpensearchDomain#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#delete OpensearchDomain#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#update OpensearchDomain#update}
    */
    readonly update?: string;
}
export declare function opensearchDomainTimeoutsToTerraform(struct?: OpensearchDomainTimeouts | cdktf.IResolvable): any;
export declare function opensearchDomainTimeoutsToHclTerraform(struct?: OpensearchDomainTimeouts | cdktf.IResolvable): any;
export declare class OpensearchDomainTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: OpensearchDomainTimeouts | cdktf.IResolvable | undefined);
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
export interface OpensearchDomainVpcOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#security_group_ids OpensearchDomain#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#subnet_ids OpensearchDomain#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export declare function opensearchDomainVpcOptionsToTerraform(struct?: OpensearchDomainVpcOptionsOutputReference | OpensearchDomainVpcOptions): any;
export declare function opensearchDomainVpcOptionsToHclTerraform(struct?: OpensearchDomainVpcOptionsOutputReference | OpensearchDomainVpcOptions): any;
export declare class OpensearchDomainVpcOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainVpcOptions | undefined;
    set internalValue(value: OpensearchDomainVpcOptions | undefined);
    get availabilityZones(): string[];
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
    get vpcId(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain aws_opensearch_domain}
*/
export declare class OpensearchDomain extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opensearch_domain";
    /**
    * Generates CDKTF code for importing a OpensearchDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpensearchDomain to import
    * @param importFromId The id of the existing OpensearchDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpensearchDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain aws_opensearch_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpensearchDomainConfig
    */
    constructor(scope: Construct, id: string, config: OpensearchDomainConfig);
    private _accessPolicies?;
    get accessPolicies(): string;
    set accessPolicies(value: string);
    resetAccessPolicies(): void;
    get accessPoliciesInput(): string | undefined;
    private _advancedOptions?;
    get advancedOptions(): {
        [key: string]: string;
    };
    set advancedOptions(value: {
        [key: string]: string;
    });
    resetAdvancedOptions(): void;
    get advancedOptionsInput(): {
        [key: string]: string;
    } | undefined;
    get arn(): string;
    get dashboardEndpoint(): string;
    get dashboardEndpointV2(): string;
    get domainEndpointV2HostedZoneId(): string;
    get domainId(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    get endpoint(): string;
    get endpointV2(): string;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ipAddressType?;
    get ipAddressType(): string;
    set ipAddressType(value: string);
    resetIpAddressType(): void;
    get ipAddressTypeInput(): string | undefined;
    get kibanaEndpoint(): string;
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
    private _advancedSecurityOptions;
    get advancedSecurityOptions(): OpensearchDomainAdvancedSecurityOptionsOutputReference;
    putAdvancedSecurityOptions(value: OpensearchDomainAdvancedSecurityOptions): void;
    resetAdvancedSecurityOptions(): void;
    get advancedSecurityOptionsInput(): OpensearchDomainAdvancedSecurityOptions | undefined;
    private _autoTuneOptions;
    get autoTuneOptions(): OpensearchDomainAutoTuneOptionsOutputReference;
    putAutoTuneOptions(value: OpensearchDomainAutoTuneOptions): void;
    resetAutoTuneOptions(): void;
    get autoTuneOptionsInput(): OpensearchDomainAutoTuneOptions | undefined;
    private _clusterConfig;
    get clusterConfig(): OpensearchDomainClusterConfigOutputReference;
    putClusterConfig(value: OpensearchDomainClusterConfig): void;
    resetClusterConfig(): void;
    get clusterConfigInput(): OpensearchDomainClusterConfig | undefined;
    private _cognitoOptions;
    get cognitoOptions(): OpensearchDomainCognitoOptionsOutputReference;
    putCognitoOptions(value: OpensearchDomainCognitoOptions): void;
    resetCognitoOptions(): void;
    get cognitoOptionsInput(): OpensearchDomainCognitoOptions | undefined;
    private _domainEndpointOptions;
    get domainEndpointOptions(): OpensearchDomainDomainEndpointOptionsOutputReference;
    putDomainEndpointOptions(value: OpensearchDomainDomainEndpointOptions): void;
    resetDomainEndpointOptions(): void;
    get domainEndpointOptionsInput(): OpensearchDomainDomainEndpointOptions | undefined;
    private _ebsOptions;
    get ebsOptions(): OpensearchDomainEbsOptionsOutputReference;
    putEbsOptions(value: OpensearchDomainEbsOptions): void;
    resetEbsOptions(): void;
    get ebsOptionsInput(): OpensearchDomainEbsOptions | undefined;
    private _encryptAtRest;
    get encryptAtRest(): OpensearchDomainEncryptAtRestOutputReference;
    putEncryptAtRest(value: OpensearchDomainEncryptAtRest): void;
    resetEncryptAtRest(): void;
    get encryptAtRestInput(): OpensearchDomainEncryptAtRest | undefined;
    private _logPublishingOptions;
    get logPublishingOptions(): OpensearchDomainLogPublishingOptionsList;
    putLogPublishingOptions(value: OpensearchDomainLogPublishingOptions[] | cdktf.IResolvable): void;
    resetLogPublishingOptions(): void;
    get logPublishingOptionsInput(): cdktf.IResolvable | OpensearchDomainLogPublishingOptions[] | undefined;
    private _nodeToNodeEncryption;
    get nodeToNodeEncryption(): OpensearchDomainNodeToNodeEncryptionOutputReference;
    putNodeToNodeEncryption(value: OpensearchDomainNodeToNodeEncryption): void;
    resetNodeToNodeEncryption(): void;
    get nodeToNodeEncryptionInput(): OpensearchDomainNodeToNodeEncryption | undefined;
    private _offPeakWindowOptions;
    get offPeakWindowOptions(): OpensearchDomainOffPeakWindowOptionsOutputReference;
    putOffPeakWindowOptions(value: OpensearchDomainOffPeakWindowOptions): void;
    resetOffPeakWindowOptions(): void;
    get offPeakWindowOptionsInput(): OpensearchDomainOffPeakWindowOptions | undefined;
    private _snapshotOptions;
    get snapshotOptions(): OpensearchDomainSnapshotOptionsOutputReference;
    putSnapshotOptions(value: OpensearchDomainSnapshotOptions): void;
    resetSnapshotOptions(): void;
    get snapshotOptionsInput(): OpensearchDomainSnapshotOptions | undefined;
    private _softwareUpdateOptions;
    get softwareUpdateOptions(): OpensearchDomainSoftwareUpdateOptionsOutputReference;
    putSoftwareUpdateOptions(value: OpensearchDomainSoftwareUpdateOptions): void;
    resetSoftwareUpdateOptions(): void;
    get softwareUpdateOptionsInput(): OpensearchDomainSoftwareUpdateOptions | undefined;
    private _timeouts;
    get timeouts(): OpensearchDomainTimeoutsOutputReference;
    putTimeouts(value: OpensearchDomainTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | OpensearchDomainTimeouts | undefined;
    private _vpcOptions;
    get vpcOptions(): OpensearchDomainVpcOptionsOutputReference;
    putVpcOptions(value: OpensearchDomainVpcOptions): void;
    resetVpcOptions(): void;
    get vpcOptionsInput(): OpensearchDomainVpcOptions | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
