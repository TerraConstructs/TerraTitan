/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticsearchDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#access_policies ElasticsearchDomain#access_policies}
    */
    readonly accessPolicies?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#advanced_options ElasticsearchDomain#advanced_options}
    */
    readonly advancedOptions?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#domain_name ElasticsearchDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#elasticsearch_version ElasticsearchDomain#elasticsearch_version}
    */
    readonly elasticsearchVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#id ElasticsearchDomain#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#tags ElasticsearchDomain#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#tags_all ElasticsearchDomain#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * advanced_security_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#advanced_security_options ElasticsearchDomain#advanced_security_options}
    */
    readonly advancedSecurityOptions?: ElasticsearchDomainAdvancedSecurityOptions;
    /**
    * auto_tune_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#auto_tune_options ElasticsearchDomain#auto_tune_options}
    */
    readonly autoTuneOptions?: ElasticsearchDomainAutoTuneOptions;
    /**
    * cluster_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#cluster_config ElasticsearchDomain#cluster_config}
    */
    readonly clusterConfig?: ElasticsearchDomainClusterConfig;
    /**
    * cognito_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#cognito_options ElasticsearchDomain#cognito_options}
    */
    readonly cognitoOptions?: ElasticsearchDomainCognitoOptions;
    /**
    * domain_endpoint_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#domain_endpoint_options ElasticsearchDomain#domain_endpoint_options}
    */
    readonly domainEndpointOptions?: ElasticsearchDomainDomainEndpointOptions;
    /**
    * ebs_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#ebs_options ElasticsearchDomain#ebs_options}
    */
    readonly ebsOptions?: ElasticsearchDomainEbsOptions;
    /**
    * encrypt_at_rest block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#encrypt_at_rest ElasticsearchDomain#encrypt_at_rest}
    */
    readonly encryptAtRest?: ElasticsearchDomainEncryptAtRest;
    /**
    * log_publishing_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#log_publishing_options ElasticsearchDomain#log_publishing_options}
    */
    readonly logPublishingOptions?: ElasticsearchDomainLogPublishingOptions[] | cdktf.IResolvable;
    /**
    * node_to_node_encryption block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#node_to_node_encryption ElasticsearchDomain#node_to_node_encryption}
    */
    readonly nodeToNodeEncryption?: ElasticsearchDomainNodeToNodeEncryption;
    /**
    * snapshot_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#snapshot_options ElasticsearchDomain#snapshot_options}
    */
    readonly snapshotOptions?: ElasticsearchDomainSnapshotOptions;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#timeouts ElasticsearchDomain#timeouts}
    */
    readonly timeouts?: ElasticsearchDomainTimeouts;
    /**
    * vpc_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#vpc_options ElasticsearchDomain#vpc_options}
    */
    readonly vpcOptions?: ElasticsearchDomainVpcOptions;
}
export interface ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#master_user_arn ElasticsearchDomain#master_user_arn}
    */
    readonly masterUserArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#master_user_name ElasticsearchDomain#master_user_name}
    */
    readonly masterUserName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#master_user_password ElasticsearchDomain#master_user_password}
    */
    readonly masterUserPassword?: string;
}
export declare function elasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsToTerraform(struct?: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference | ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions): any;
export declare function elasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsToHclTerraform(struct?: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference | ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions): any;
export declare class ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions | undefined;
    set internalValue(value: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions | undefined);
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
export interface ElasticsearchDomainAdvancedSecurityOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#enabled ElasticsearchDomain#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#internal_user_database_enabled ElasticsearchDomain#internal_user_database_enabled}
    */
    readonly internalUserDatabaseEnabled?: boolean | cdktf.IResolvable;
    /**
    * master_user_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#master_user_options ElasticsearchDomain#master_user_options}
    */
    readonly masterUserOptions?: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions;
}
export declare function elasticsearchDomainAdvancedSecurityOptionsToTerraform(struct?: ElasticsearchDomainAdvancedSecurityOptionsOutputReference | ElasticsearchDomainAdvancedSecurityOptions): any;
export declare function elasticsearchDomainAdvancedSecurityOptionsToHclTerraform(struct?: ElasticsearchDomainAdvancedSecurityOptionsOutputReference | ElasticsearchDomainAdvancedSecurityOptions): any;
export declare class ElasticsearchDomainAdvancedSecurityOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchDomainAdvancedSecurityOptions | undefined;
    set internalValue(value: ElasticsearchDomainAdvancedSecurityOptions | undefined);
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
    get masterUserOptions(): ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference;
    putMasterUserOptions(value: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions): void;
    resetMasterUserOptions(): void;
    get masterUserOptionsInput(): ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions | undefined;
}
export interface ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#unit ElasticsearchDomain#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#value ElasticsearchDomain#value}
    */
    readonly value: number;
}
export declare function elasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationToTerraform(struct?: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference | ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration): any;
export declare function elasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationToHclTerraform(struct?: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference | ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration): any;
export declare class ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration | undefined;
    set internalValue(value: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#cron_expression_for_recurrence ElasticsearchDomain#cron_expression_for_recurrence}
    */
    readonly cronExpressionForRecurrence: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#start_at ElasticsearchDomain#start_at}
    */
    readonly startAt: string;
    /**
    * duration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#duration ElasticsearchDomain#duration}
    */
    readonly duration: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration;
}
export declare function elasticsearchDomainAutoTuneOptionsMaintenanceScheduleToTerraform(struct?: ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule | cdktf.IResolvable): any;
export declare function elasticsearchDomainAutoTuneOptionsMaintenanceScheduleToHclTerraform(struct?: ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule | cdktf.IResolvable): any;
export declare class ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule | cdktf.IResolvable | undefined;
    set internalValue(value: ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule | cdktf.IResolvable | undefined);
    private _cronExpressionForRecurrence?;
    get cronExpressionForRecurrence(): string;
    set cronExpressionForRecurrence(value: string);
    get cronExpressionForRecurrenceInput(): string | undefined;
    private _startAt?;
    get startAt(): string;
    set startAt(value: string);
    get startAtInput(): string | undefined;
    private _duration;
    get duration(): ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference;
    putDuration(value: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration): void;
    get durationInput(): ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration | undefined;
}
export declare class ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference;
}
export interface ElasticsearchDomainAutoTuneOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#desired_state ElasticsearchDomain#desired_state}
    */
    readonly desiredState: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#rollback_on_disable ElasticsearchDomain#rollback_on_disable}
    */
    readonly rollbackOnDisable?: string;
    /**
    * maintenance_schedule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#maintenance_schedule ElasticsearchDomain#maintenance_schedule}
    */
    readonly maintenanceSchedule?: ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule[] | cdktf.IResolvable;
}
export declare function elasticsearchDomainAutoTuneOptionsToTerraform(struct?: ElasticsearchDomainAutoTuneOptionsOutputReference | ElasticsearchDomainAutoTuneOptions): any;
export declare function elasticsearchDomainAutoTuneOptionsToHclTerraform(struct?: ElasticsearchDomainAutoTuneOptionsOutputReference | ElasticsearchDomainAutoTuneOptions): any;
export declare class ElasticsearchDomainAutoTuneOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchDomainAutoTuneOptions | undefined;
    set internalValue(value: ElasticsearchDomainAutoTuneOptions | undefined);
    private _desiredState?;
    get desiredState(): string;
    set desiredState(value: string);
    get desiredStateInput(): string | undefined;
    private _rollbackOnDisable?;
    get rollbackOnDisable(): string;
    set rollbackOnDisable(value: string);
    resetRollbackOnDisable(): void;
    get rollbackOnDisableInput(): string | undefined;
    private _maintenanceSchedule;
    get maintenanceSchedule(): ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList;
    putMaintenanceSchedule(value: ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule[] | cdktf.IResolvable): void;
    resetMaintenanceSchedule(): void;
    get maintenanceScheduleInput(): cdktf.IResolvable | ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule[] | undefined;
}
export interface ElasticsearchDomainClusterConfigColdStorageOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#enabled ElasticsearchDomain#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function elasticsearchDomainClusterConfigColdStorageOptionsToTerraform(struct?: ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference | ElasticsearchDomainClusterConfigColdStorageOptions): any;
export declare function elasticsearchDomainClusterConfigColdStorageOptionsToHclTerraform(struct?: ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference | ElasticsearchDomainClusterConfigColdStorageOptions): any;
export declare class ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchDomainClusterConfigColdStorageOptions | undefined;
    set internalValue(value: ElasticsearchDomainClusterConfigColdStorageOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface ElasticsearchDomainClusterConfigZoneAwarenessConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#availability_zone_count ElasticsearchDomain#availability_zone_count}
    */
    readonly availabilityZoneCount?: number;
}
export declare function elasticsearchDomainClusterConfigZoneAwarenessConfigToTerraform(struct?: ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference | ElasticsearchDomainClusterConfigZoneAwarenessConfig): any;
export declare function elasticsearchDomainClusterConfigZoneAwarenessConfigToHclTerraform(struct?: ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference | ElasticsearchDomainClusterConfigZoneAwarenessConfig): any;
export declare class ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchDomainClusterConfigZoneAwarenessConfig | undefined;
    set internalValue(value: ElasticsearchDomainClusterConfigZoneAwarenessConfig | undefined);
    private _availabilityZoneCount?;
    get availabilityZoneCount(): number;
    set availabilityZoneCount(value: number);
    resetAvailabilityZoneCount(): void;
    get availabilityZoneCountInput(): number | undefined;
}
export interface ElasticsearchDomainClusterConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#dedicated_master_count ElasticsearchDomain#dedicated_master_count}
    */
    readonly dedicatedMasterCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#dedicated_master_enabled ElasticsearchDomain#dedicated_master_enabled}
    */
    readonly dedicatedMasterEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#dedicated_master_type ElasticsearchDomain#dedicated_master_type}
    */
    readonly dedicatedMasterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#instance_count ElasticsearchDomain#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#instance_type ElasticsearchDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#warm_count ElasticsearchDomain#warm_count}
    */
    readonly warmCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#warm_enabled ElasticsearchDomain#warm_enabled}
    */
    readonly warmEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#warm_type ElasticsearchDomain#warm_type}
    */
    readonly warmType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#zone_awareness_enabled ElasticsearchDomain#zone_awareness_enabled}
    */
    readonly zoneAwarenessEnabled?: boolean | cdktf.IResolvable;
    /**
    * cold_storage_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#cold_storage_options ElasticsearchDomain#cold_storage_options}
    */
    readonly coldStorageOptions?: ElasticsearchDomainClusterConfigColdStorageOptions;
    /**
    * zone_awareness_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#zone_awareness_config ElasticsearchDomain#zone_awareness_config}
    */
    readonly zoneAwarenessConfig?: ElasticsearchDomainClusterConfigZoneAwarenessConfig;
}
export declare function elasticsearchDomainClusterConfigToTerraform(struct?: ElasticsearchDomainClusterConfigOutputReference | ElasticsearchDomainClusterConfig): any;
export declare function elasticsearchDomainClusterConfigToHclTerraform(struct?: ElasticsearchDomainClusterConfigOutputReference | ElasticsearchDomainClusterConfig): any;
export declare class ElasticsearchDomainClusterConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchDomainClusterConfig | undefined;
    set internalValue(value: ElasticsearchDomainClusterConfig | undefined);
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
    get coldStorageOptions(): ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference;
    putColdStorageOptions(value: ElasticsearchDomainClusterConfigColdStorageOptions): void;
    resetColdStorageOptions(): void;
    get coldStorageOptionsInput(): ElasticsearchDomainClusterConfigColdStorageOptions | undefined;
    private _zoneAwarenessConfig;
    get zoneAwarenessConfig(): ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference;
    putZoneAwarenessConfig(value: ElasticsearchDomainClusterConfigZoneAwarenessConfig): void;
    resetZoneAwarenessConfig(): void;
    get zoneAwarenessConfigInput(): ElasticsearchDomainClusterConfigZoneAwarenessConfig | undefined;
}
export interface ElasticsearchDomainCognitoOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#enabled ElasticsearchDomain#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#identity_pool_id ElasticsearchDomain#identity_pool_id}
    */
    readonly identityPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#role_arn ElasticsearchDomain#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#user_pool_id ElasticsearchDomain#user_pool_id}
    */
    readonly userPoolId: string;
}
export declare function elasticsearchDomainCognitoOptionsToTerraform(struct?: ElasticsearchDomainCognitoOptionsOutputReference | ElasticsearchDomainCognitoOptions): any;
export declare function elasticsearchDomainCognitoOptionsToHclTerraform(struct?: ElasticsearchDomainCognitoOptionsOutputReference | ElasticsearchDomainCognitoOptions): any;
export declare class ElasticsearchDomainCognitoOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchDomainCognitoOptions | undefined;
    set internalValue(value: ElasticsearchDomainCognitoOptions | undefined);
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
export interface ElasticsearchDomainDomainEndpointOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#custom_endpoint ElasticsearchDomain#custom_endpoint}
    */
    readonly customEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#custom_endpoint_certificate_arn ElasticsearchDomain#custom_endpoint_certificate_arn}
    */
    readonly customEndpointCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#custom_endpoint_enabled ElasticsearchDomain#custom_endpoint_enabled}
    */
    readonly customEndpointEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#enforce_https ElasticsearchDomain#enforce_https}
    */
    readonly enforceHttps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#tls_security_policy ElasticsearchDomain#tls_security_policy}
    */
    readonly tlsSecurityPolicy?: string;
}
export declare function elasticsearchDomainDomainEndpointOptionsToTerraform(struct?: ElasticsearchDomainDomainEndpointOptionsOutputReference | ElasticsearchDomainDomainEndpointOptions): any;
export declare function elasticsearchDomainDomainEndpointOptionsToHclTerraform(struct?: ElasticsearchDomainDomainEndpointOptionsOutputReference | ElasticsearchDomainDomainEndpointOptions): any;
export declare class ElasticsearchDomainDomainEndpointOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchDomainDomainEndpointOptions | undefined;
    set internalValue(value: ElasticsearchDomainDomainEndpointOptions | undefined);
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
export interface ElasticsearchDomainEbsOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#ebs_enabled ElasticsearchDomain#ebs_enabled}
    */
    readonly ebsEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#iops ElasticsearchDomain#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#throughput ElasticsearchDomain#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#volume_size ElasticsearchDomain#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#volume_type ElasticsearchDomain#volume_type}
    */
    readonly volumeType?: string;
}
export declare function elasticsearchDomainEbsOptionsToTerraform(struct?: ElasticsearchDomainEbsOptionsOutputReference | ElasticsearchDomainEbsOptions): any;
export declare function elasticsearchDomainEbsOptionsToHclTerraform(struct?: ElasticsearchDomainEbsOptionsOutputReference | ElasticsearchDomainEbsOptions): any;
export declare class ElasticsearchDomainEbsOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchDomainEbsOptions | undefined;
    set internalValue(value: ElasticsearchDomainEbsOptions | undefined);
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
export interface ElasticsearchDomainEncryptAtRest {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#enabled ElasticsearchDomain#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#kms_key_id ElasticsearchDomain#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export declare function elasticsearchDomainEncryptAtRestToTerraform(struct?: ElasticsearchDomainEncryptAtRestOutputReference | ElasticsearchDomainEncryptAtRest): any;
export declare function elasticsearchDomainEncryptAtRestToHclTerraform(struct?: ElasticsearchDomainEncryptAtRestOutputReference | ElasticsearchDomainEncryptAtRest): any;
export declare class ElasticsearchDomainEncryptAtRestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchDomainEncryptAtRest | undefined;
    set internalValue(value: ElasticsearchDomainEncryptAtRest | undefined);
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
export interface ElasticsearchDomainLogPublishingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#cloudwatch_log_group_arn ElasticsearchDomain#cloudwatch_log_group_arn}
    */
    readonly cloudwatchLogGroupArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#enabled ElasticsearchDomain#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#log_type ElasticsearchDomain#log_type}
    */
    readonly logType: string;
}
export declare function elasticsearchDomainLogPublishingOptionsToTerraform(struct?: ElasticsearchDomainLogPublishingOptions | cdktf.IResolvable): any;
export declare function elasticsearchDomainLogPublishingOptionsToHclTerraform(struct?: ElasticsearchDomainLogPublishingOptions | cdktf.IResolvable): any;
export declare class ElasticsearchDomainLogPublishingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ElasticsearchDomainLogPublishingOptions | cdktf.IResolvable | undefined;
    set internalValue(value: ElasticsearchDomainLogPublishingOptions | cdktf.IResolvable | undefined);
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
export declare class ElasticsearchDomainLogPublishingOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ElasticsearchDomainLogPublishingOptions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ElasticsearchDomainLogPublishingOptionsOutputReference;
}
export interface ElasticsearchDomainNodeToNodeEncryption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#enabled ElasticsearchDomain#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function elasticsearchDomainNodeToNodeEncryptionToTerraform(struct?: ElasticsearchDomainNodeToNodeEncryptionOutputReference | ElasticsearchDomainNodeToNodeEncryption): any;
export declare function elasticsearchDomainNodeToNodeEncryptionToHclTerraform(struct?: ElasticsearchDomainNodeToNodeEncryptionOutputReference | ElasticsearchDomainNodeToNodeEncryption): any;
export declare class ElasticsearchDomainNodeToNodeEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchDomainNodeToNodeEncryption | undefined;
    set internalValue(value: ElasticsearchDomainNodeToNodeEncryption | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface ElasticsearchDomainSnapshotOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#automated_snapshot_start_hour ElasticsearchDomain#automated_snapshot_start_hour}
    */
    readonly automatedSnapshotStartHour: number;
}
export declare function elasticsearchDomainSnapshotOptionsToTerraform(struct?: ElasticsearchDomainSnapshotOptionsOutputReference | ElasticsearchDomainSnapshotOptions): any;
export declare function elasticsearchDomainSnapshotOptionsToHclTerraform(struct?: ElasticsearchDomainSnapshotOptionsOutputReference | ElasticsearchDomainSnapshotOptions): any;
export declare class ElasticsearchDomainSnapshotOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchDomainSnapshotOptions | undefined;
    set internalValue(value: ElasticsearchDomainSnapshotOptions | undefined);
    private _automatedSnapshotStartHour?;
    get automatedSnapshotStartHour(): number;
    set automatedSnapshotStartHour(value: number);
    get automatedSnapshotStartHourInput(): number | undefined;
}
export interface ElasticsearchDomainTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#create ElasticsearchDomain#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#delete ElasticsearchDomain#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#update ElasticsearchDomain#update}
    */
    readonly update?: string;
}
export declare function elasticsearchDomainTimeoutsToTerraform(struct?: ElasticsearchDomainTimeouts | cdktf.IResolvable): any;
export declare function elasticsearchDomainTimeoutsToHclTerraform(struct?: ElasticsearchDomainTimeouts | cdktf.IResolvable): any;
export declare class ElasticsearchDomainTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchDomainTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ElasticsearchDomainTimeouts | cdktf.IResolvable | undefined);
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
export interface ElasticsearchDomainVpcOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#security_group_ids ElasticsearchDomain#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#subnet_ids ElasticsearchDomain#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export declare function elasticsearchDomainVpcOptionsToTerraform(struct?: ElasticsearchDomainVpcOptionsOutputReference | ElasticsearchDomainVpcOptions): any;
export declare function elasticsearchDomainVpcOptionsToHclTerraform(struct?: ElasticsearchDomainVpcOptionsOutputReference | ElasticsearchDomainVpcOptions): any;
export declare class ElasticsearchDomainVpcOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchDomainVpcOptions | undefined;
    set internalValue(value: ElasticsearchDomainVpcOptions | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain aws_elasticsearch_domain}
*/
export declare class ElasticsearchDomain extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_elasticsearch_domain";
    /**
    * Generates CDKTF code for importing a ElasticsearchDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ElasticsearchDomain to import
    * @param importFromId The id of the existing ElasticsearchDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ElasticsearchDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain aws_elasticsearch_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticsearchDomainConfig
    */
    constructor(scope: Construct, id: string, config: ElasticsearchDomainConfig);
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
    get domainId(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _elasticsearchVersion?;
    get elasticsearchVersion(): string;
    set elasticsearchVersion(value: string);
    resetElasticsearchVersion(): void;
    get elasticsearchVersionInput(): string | undefined;
    get endpoint(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    get advancedSecurityOptions(): ElasticsearchDomainAdvancedSecurityOptionsOutputReference;
    putAdvancedSecurityOptions(value: ElasticsearchDomainAdvancedSecurityOptions): void;
    resetAdvancedSecurityOptions(): void;
    get advancedSecurityOptionsInput(): ElasticsearchDomainAdvancedSecurityOptions | undefined;
    private _autoTuneOptions;
    get autoTuneOptions(): ElasticsearchDomainAutoTuneOptionsOutputReference;
    putAutoTuneOptions(value: ElasticsearchDomainAutoTuneOptions): void;
    resetAutoTuneOptions(): void;
    get autoTuneOptionsInput(): ElasticsearchDomainAutoTuneOptions | undefined;
    private _clusterConfig;
    get clusterConfig(): ElasticsearchDomainClusterConfigOutputReference;
    putClusterConfig(value: ElasticsearchDomainClusterConfig): void;
    resetClusterConfig(): void;
    get clusterConfigInput(): ElasticsearchDomainClusterConfig | undefined;
    private _cognitoOptions;
    get cognitoOptions(): ElasticsearchDomainCognitoOptionsOutputReference;
    putCognitoOptions(value: ElasticsearchDomainCognitoOptions): void;
    resetCognitoOptions(): void;
    get cognitoOptionsInput(): ElasticsearchDomainCognitoOptions | undefined;
    private _domainEndpointOptions;
    get domainEndpointOptions(): ElasticsearchDomainDomainEndpointOptionsOutputReference;
    putDomainEndpointOptions(value: ElasticsearchDomainDomainEndpointOptions): void;
    resetDomainEndpointOptions(): void;
    get domainEndpointOptionsInput(): ElasticsearchDomainDomainEndpointOptions | undefined;
    private _ebsOptions;
    get ebsOptions(): ElasticsearchDomainEbsOptionsOutputReference;
    putEbsOptions(value: ElasticsearchDomainEbsOptions): void;
    resetEbsOptions(): void;
    get ebsOptionsInput(): ElasticsearchDomainEbsOptions | undefined;
    private _encryptAtRest;
    get encryptAtRest(): ElasticsearchDomainEncryptAtRestOutputReference;
    putEncryptAtRest(value: ElasticsearchDomainEncryptAtRest): void;
    resetEncryptAtRest(): void;
    get encryptAtRestInput(): ElasticsearchDomainEncryptAtRest | undefined;
    private _logPublishingOptions;
    get logPublishingOptions(): ElasticsearchDomainLogPublishingOptionsList;
    putLogPublishingOptions(value: ElasticsearchDomainLogPublishingOptions[] | cdktf.IResolvable): void;
    resetLogPublishingOptions(): void;
    get logPublishingOptionsInput(): cdktf.IResolvable | ElasticsearchDomainLogPublishingOptions[] | undefined;
    private _nodeToNodeEncryption;
    get nodeToNodeEncryption(): ElasticsearchDomainNodeToNodeEncryptionOutputReference;
    putNodeToNodeEncryption(value: ElasticsearchDomainNodeToNodeEncryption): void;
    resetNodeToNodeEncryption(): void;
    get nodeToNodeEncryptionInput(): ElasticsearchDomainNodeToNodeEncryption | undefined;
    private _snapshotOptions;
    get snapshotOptions(): ElasticsearchDomainSnapshotOptionsOutputReference;
    putSnapshotOptions(value: ElasticsearchDomainSnapshotOptions): void;
    resetSnapshotOptions(): void;
    get snapshotOptionsInput(): ElasticsearchDomainSnapshotOptions | undefined;
    private _timeouts;
    get timeouts(): ElasticsearchDomainTimeoutsOutputReference;
    putTimeouts(value: ElasticsearchDomainTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ElasticsearchDomainTimeouts | undefined;
    private _vpcOptions;
    get vpcOptions(): ElasticsearchDomainVpcOptionsOutputReference;
    putVpcOptions(value: ElasticsearchDomainVpcOptions): void;
    resetVpcOptions(): void;
    get vpcOptionsInput(): ElasticsearchDomainVpcOptions | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
