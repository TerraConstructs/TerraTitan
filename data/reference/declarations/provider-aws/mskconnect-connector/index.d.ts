/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MskconnectConnectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#connector_configuration MskconnectConnector#connector_configuration}
    */
    readonly connectorConfiguration: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#description MskconnectConnector#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#id MskconnectConnector#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#kafkaconnect_version MskconnectConnector#kafkaconnect_version}
    */
    readonly kafkaconnectVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#name MskconnectConnector#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#service_execution_role_arn MskconnectConnector#service_execution_role_arn}
    */
    readonly serviceExecutionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#tags MskconnectConnector#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#tags_all MskconnectConnector#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * capacity block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#capacity MskconnectConnector#capacity}
    */
    readonly capacity: MskconnectConnectorCapacity;
    /**
    * kafka_cluster block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#kafka_cluster MskconnectConnector#kafka_cluster}
    */
    readonly kafkaCluster: MskconnectConnectorKafkaCluster;
    /**
    * kafka_cluster_client_authentication block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#kafka_cluster_client_authentication MskconnectConnector#kafka_cluster_client_authentication}
    */
    readonly kafkaClusterClientAuthentication: MskconnectConnectorKafkaClusterClientAuthentication;
    /**
    * kafka_cluster_encryption_in_transit block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#kafka_cluster_encryption_in_transit MskconnectConnector#kafka_cluster_encryption_in_transit}
    */
    readonly kafkaClusterEncryptionInTransit: MskconnectConnectorKafkaClusterEncryptionInTransit;
    /**
    * log_delivery block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#log_delivery MskconnectConnector#log_delivery}
    */
    readonly logDelivery?: MskconnectConnectorLogDelivery;
    /**
    * plugin block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#plugin MskconnectConnector#plugin}
    */
    readonly plugin: MskconnectConnectorPlugin[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#timeouts MskconnectConnector#timeouts}
    */
    readonly timeouts?: MskconnectConnectorTimeouts;
    /**
    * worker_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#worker_configuration MskconnectConnector#worker_configuration}
    */
    readonly workerConfiguration?: MskconnectConnectorWorkerConfiguration;
}
export interface MskconnectConnectorCapacityAutoscalingScaleInPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}
    */
    readonly cpuUtilizationPercentage?: number;
}
export declare function mskconnectConnectorCapacityAutoscalingScaleInPolicyToTerraform(struct?: MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference | MskconnectConnectorCapacityAutoscalingScaleInPolicy): any;
export declare function mskconnectConnectorCapacityAutoscalingScaleInPolicyToHclTerraform(struct?: MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference | MskconnectConnectorCapacityAutoscalingScaleInPolicy): any;
export declare class MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectConnectorCapacityAutoscalingScaleInPolicy | undefined;
    set internalValue(value: MskconnectConnectorCapacityAutoscalingScaleInPolicy | undefined);
    private _cpuUtilizationPercentage?;
    get cpuUtilizationPercentage(): number;
    set cpuUtilizationPercentage(value: number);
    resetCpuUtilizationPercentage(): void;
    get cpuUtilizationPercentageInput(): number | undefined;
}
export interface MskconnectConnectorCapacityAutoscalingScaleOutPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}
    */
    readonly cpuUtilizationPercentage?: number;
}
export declare function mskconnectConnectorCapacityAutoscalingScaleOutPolicyToTerraform(struct?: MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference | MskconnectConnectorCapacityAutoscalingScaleOutPolicy): any;
export declare function mskconnectConnectorCapacityAutoscalingScaleOutPolicyToHclTerraform(struct?: MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference | MskconnectConnectorCapacityAutoscalingScaleOutPolicy): any;
export declare class MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectConnectorCapacityAutoscalingScaleOutPolicy | undefined;
    set internalValue(value: MskconnectConnectorCapacityAutoscalingScaleOutPolicy | undefined);
    private _cpuUtilizationPercentage?;
    get cpuUtilizationPercentage(): number;
    set cpuUtilizationPercentage(value: number);
    resetCpuUtilizationPercentage(): void;
    get cpuUtilizationPercentageInput(): number | undefined;
}
export interface MskconnectConnectorCapacityAutoscaling {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#max_worker_count MskconnectConnector#max_worker_count}
    */
    readonly maxWorkerCount: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}
    */
    readonly mcuCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#min_worker_count MskconnectConnector#min_worker_count}
    */
    readonly minWorkerCount: number;
    /**
    * scale_in_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#scale_in_policy MskconnectConnector#scale_in_policy}
    */
    readonly scaleInPolicy?: MskconnectConnectorCapacityAutoscalingScaleInPolicy;
    /**
    * scale_out_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#scale_out_policy MskconnectConnector#scale_out_policy}
    */
    readonly scaleOutPolicy?: MskconnectConnectorCapacityAutoscalingScaleOutPolicy;
}
export declare function mskconnectConnectorCapacityAutoscalingToTerraform(struct?: MskconnectConnectorCapacityAutoscalingOutputReference | MskconnectConnectorCapacityAutoscaling): any;
export declare function mskconnectConnectorCapacityAutoscalingToHclTerraform(struct?: MskconnectConnectorCapacityAutoscalingOutputReference | MskconnectConnectorCapacityAutoscaling): any;
export declare class MskconnectConnectorCapacityAutoscalingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectConnectorCapacityAutoscaling | undefined;
    set internalValue(value: MskconnectConnectorCapacityAutoscaling | undefined);
    private _maxWorkerCount?;
    get maxWorkerCount(): number;
    set maxWorkerCount(value: number);
    get maxWorkerCountInput(): number | undefined;
    private _mcuCount?;
    get mcuCount(): number;
    set mcuCount(value: number);
    resetMcuCount(): void;
    get mcuCountInput(): number | undefined;
    private _minWorkerCount?;
    get minWorkerCount(): number;
    set minWorkerCount(value: number);
    get minWorkerCountInput(): number | undefined;
    private _scaleInPolicy;
    get scaleInPolicy(): MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference;
    putScaleInPolicy(value: MskconnectConnectorCapacityAutoscalingScaleInPolicy): void;
    resetScaleInPolicy(): void;
    get scaleInPolicyInput(): MskconnectConnectorCapacityAutoscalingScaleInPolicy | undefined;
    private _scaleOutPolicy;
    get scaleOutPolicy(): MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference;
    putScaleOutPolicy(value: MskconnectConnectorCapacityAutoscalingScaleOutPolicy): void;
    resetScaleOutPolicy(): void;
    get scaleOutPolicyInput(): MskconnectConnectorCapacityAutoscalingScaleOutPolicy | undefined;
}
export interface MskconnectConnectorCapacityProvisionedCapacity {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}
    */
    readonly mcuCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#worker_count MskconnectConnector#worker_count}
    */
    readonly workerCount: number;
}
export declare function mskconnectConnectorCapacityProvisionedCapacityToTerraform(struct?: MskconnectConnectorCapacityProvisionedCapacityOutputReference | MskconnectConnectorCapacityProvisionedCapacity): any;
export declare function mskconnectConnectorCapacityProvisionedCapacityToHclTerraform(struct?: MskconnectConnectorCapacityProvisionedCapacityOutputReference | MskconnectConnectorCapacityProvisionedCapacity): any;
export declare class MskconnectConnectorCapacityProvisionedCapacityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectConnectorCapacityProvisionedCapacity | undefined;
    set internalValue(value: MskconnectConnectorCapacityProvisionedCapacity | undefined);
    private _mcuCount?;
    get mcuCount(): number;
    set mcuCount(value: number);
    resetMcuCount(): void;
    get mcuCountInput(): number | undefined;
    private _workerCount?;
    get workerCount(): number;
    set workerCount(value: number);
    get workerCountInput(): number | undefined;
}
export interface MskconnectConnectorCapacity {
    /**
    * autoscaling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#autoscaling MskconnectConnector#autoscaling}
    */
    readonly autoscaling?: MskconnectConnectorCapacityAutoscaling;
    /**
    * provisioned_capacity block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#provisioned_capacity MskconnectConnector#provisioned_capacity}
    */
    readonly provisionedCapacity?: MskconnectConnectorCapacityProvisionedCapacity;
}
export declare function mskconnectConnectorCapacityToTerraform(struct?: MskconnectConnectorCapacityOutputReference | MskconnectConnectorCapacity): any;
export declare function mskconnectConnectorCapacityToHclTerraform(struct?: MskconnectConnectorCapacityOutputReference | MskconnectConnectorCapacity): any;
export declare class MskconnectConnectorCapacityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectConnectorCapacity | undefined;
    set internalValue(value: MskconnectConnectorCapacity | undefined);
    private _autoscaling;
    get autoscaling(): MskconnectConnectorCapacityAutoscalingOutputReference;
    putAutoscaling(value: MskconnectConnectorCapacityAutoscaling): void;
    resetAutoscaling(): void;
    get autoscalingInput(): MskconnectConnectorCapacityAutoscaling | undefined;
    private _provisionedCapacity;
    get provisionedCapacity(): MskconnectConnectorCapacityProvisionedCapacityOutputReference;
    putProvisionedCapacity(value: MskconnectConnectorCapacityProvisionedCapacity): void;
    resetProvisionedCapacity(): void;
    get provisionedCapacityInput(): MskconnectConnectorCapacityProvisionedCapacity | undefined;
}
export interface MskconnectConnectorKafkaClusterApacheKafkaClusterVpc {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#security_groups MskconnectConnector#security_groups}
    */
    readonly securityGroups: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#subnets MskconnectConnector#subnets}
    */
    readonly subnets: string[];
}
export declare function mskconnectConnectorKafkaClusterApacheKafkaClusterVpcToTerraform(struct?: MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference | MskconnectConnectorKafkaClusterApacheKafkaClusterVpc): any;
export declare function mskconnectConnectorKafkaClusterApacheKafkaClusterVpcToHclTerraform(struct?: MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference | MskconnectConnectorKafkaClusterApacheKafkaClusterVpc): any;
export declare class MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectConnectorKafkaClusterApacheKafkaClusterVpc | undefined;
    set internalValue(value: MskconnectConnectorKafkaClusterApacheKafkaClusterVpc | undefined);
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    get securityGroupsInput(): string[] | undefined;
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    get subnetsInput(): string[] | undefined;
}
export interface MskconnectConnectorKafkaClusterApacheKafkaCluster {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#bootstrap_servers MskconnectConnector#bootstrap_servers}
    */
    readonly bootstrapServers: string;
    /**
    * vpc block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#vpc MskconnectConnector#vpc}
    */
    readonly vpc: MskconnectConnectorKafkaClusterApacheKafkaClusterVpc;
}
export declare function mskconnectConnectorKafkaClusterApacheKafkaClusterToTerraform(struct?: MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference | MskconnectConnectorKafkaClusterApacheKafkaCluster): any;
export declare function mskconnectConnectorKafkaClusterApacheKafkaClusterToHclTerraform(struct?: MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference | MskconnectConnectorKafkaClusterApacheKafkaCluster): any;
export declare class MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectConnectorKafkaClusterApacheKafkaCluster | undefined;
    set internalValue(value: MskconnectConnectorKafkaClusterApacheKafkaCluster | undefined);
    private _bootstrapServers?;
    get bootstrapServers(): string;
    set bootstrapServers(value: string);
    get bootstrapServersInput(): string | undefined;
    private _vpc;
    get vpc(): MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference;
    putVpc(value: MskconnectConnectorKafkaClusterApacheKafkaClusterVpc): void;
    get vpcInput(): MskconnectConnectorKafkaClusterApacheKafkaClusterVpc | undefined;
}
export interface MskconnectConnectorKafkaCluster {
    /**
    * apache_kafka_cluster block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#apache_kafka_cluster MskconnectConnector#apache_kafka_cluster}
    */
    readonly apacheKafkaCluster: MskconnectConnectorKafkaClusterApacheKafkaCluster;
}
export declare function mskconnectConnectorKafkaClusterToTerraform(struct?: MskconnectConnectorKafkaClusterOutputReference | MskconnectConnectorKafkaCluster): any;
export declare function mskconnectConnectorKafkaClusterToHclTerraform(struct?: MskconnectConnectorKafkaClusterOutputReference | MskconnectConnectorKafkaCluster): any;
export declare class MskconnectConnectorKafkaClusterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectConnectorKafkaCluster | undefined;
    set internalValue(value: MskconnectConnectorKafkaCluster | undefined);
    private _apacheKafkaCluster;
    get apacheKafkaCluster(): MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference;
    putApacheKafkaCluster(value: MskconnectConnectorKafkaClusterApacheKafkaCluster): void;
    get apacheKafkaClusterInput(): MskconnectConnectorKafkaClusterApacheKafkaCluster | undefined;
}
export interface MskconnectConnectorKafkaClusterClientAuthentication {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#authentication_type MskconnectConnector#authentication_type}
    */
    readonly authenticationType?: string;
}
export declare function mskconnectConnectorKafkaClusterClientAuthenticationToTerraform(struct?: MskconnectConnectorKafkaClusterClientAuthenticationOutputReference | MskconnectConnectorKafkaClusterClientAuthentication): any;
export declare function mskconnectConnectorKafkaClusterClientAuthenticationToHclTerraform(struct?: MskconnectConnectorKafkaClusterClientAuthenticationOutputReference | MskconnectConnectorKafkaClusterClientAuthentication): any;
export declare class MskconnectConnectorKafkaClusterClientAuthenticationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectConnectorKafkaClusterClientAuthentication | undefined;
    set internalValue(value: MskconnectConnectorKafkaClusterClientAuthentication | undefined);
    private _authenticationType?;
    get authenticationType(): string;
    set authenticationType(value: string);
    resetAuthenticationType(): void;
    get authenticationTypeInput(): string | undefined;
}
export interface MskconnectConnectorKafkaClusterEncryptionInTransit {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#encryption_type MskconnectConnector#encryption_type}
    */
    readonly encryptionType?: string;
}
export declare function mskconnectConnectorKafkaClusterEncryptionInTransitToTerraform(struct?: MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference | MskconnectConnectorKafkaClusterEncryptionInTransit): any;
export declare function mskconnectConnectorKafkaClusterEncryptionInTransitToHclTerraform(struct?: MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference | MskconnectConnectorKafkaClusterEncryptionInTransit): any;
export declare class MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectConnectorKafkaClusterEncryptionInTransit | undefined;
    set internalValue(value: MskconnectConnectorKafkaClusterEncryptionInTransit | undefined);
    private _encryptionType?;
    get encryptionType(): string;
    set encryptionType(value: string);
    resetEncryptionType(): void;
    get encryptionTypeInput(): string | undefined;
}
export interface MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#enabled MskconnectConnector#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#log_group MskconnectConnector#log_group}
    */
    readonly logGroup?: string;
}
export declare function mskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsToTerraform(struct?: MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference | MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs): any;
export declare function mskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsToHclTerraform(struct?: MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference | MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs): any;
export declare class MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs | undefined;
    set internalValue(value: MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroup?;
    get logGroup(): string;
    set logGroup(value: string);
    resetLogGroup(): void;
    get logGroupInput(): string | undefined;
}
export interface MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#delivery_stream MskconnectConnector#delivery_stream}
    */
    readonly deliveryStream?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#enabled MskconnectConnector#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function mskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseToTerraform(struct?: MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference | MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose): any;
export declare function mskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseToHclTerraform(struct?: MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference | MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose): any;
export declare class MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose | undefined;
    set internalValue(value: MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose | undefined);
    private _deliveryStream?;
    get deliveryStream(): string;
    set deliveryStream(value: string);
    resetDeliveryStream(): void;
    get deliveryStreamInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#bucket MskconnectConnector#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#enabled MskconnectConnector#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#prefix MskconnectConnector#prefix}
    */
    readonly prefix?: string;
}
export declare function mskconnectConnectorLogDeliveryWorkerLogDeliveryS3ToTerraform(struct?: MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference | MskconnectConnectorLogDeliveryWorkerLogDeliveryS3): any;
export declare function mskconnectConnectorLogDeliveryWorkerLogDeliveryS3ToHclTerraform(struct?: MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference | MskconnectConnectorLogDeliveryWorkerLogDeliveryS3): any;
export declare class MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 | undefined;
    set internalValue(value: MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    resetBucket(): void;
    get bucketInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
}
export interface MskconnectConnectorLogDeliveryWorkerLogDelivery {
    /**
    * cloudwatch_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#cloudwatch_logs MskconnectConnector#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs;
    /**
    * firehose block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#firehose MskconnectConnector#firehose}
    */
    readonly firehose?: MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose;
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#s3 MskconnectConnector#s3}
    */
    readonly s3?: MskconnectConnectorLogDeliveryWorkerLogDeliveryS3;
}
export declare function mskconnectConnectorLogDeliveryWorkerLogDeliveryToTerraform(struct?: MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference | MskconnectConnectorLogDeliveryWorkerLogDelivery): any;
export declare function mskconnectConnectorLogDeliveryWorkerLogDeliveryToHclTerraform(struct?: MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference | MskconnectConnectorLogDeliveryWorkerLogDelivery): any;
export declare class MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectConnectorLogDeliveryWorkerLogDelivery | undefined;
    set internalValue(value: MskconnectConnectorLogDeliveryWorkerLogDelivery | undefined);
    private _cloudwatchLogs;
    get cloudwatchLogs(): MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference;
    putCloudwatchLogs(value: MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs): void;
    resetCloudwatchLogs(): void;
    get cloudwatchLogsInput(): MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs | undefined;
    private _firehose;
    get firehose(): MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference;
    putFirehose(value: MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose): void;
    resetFirehose(): void;
    get firehoseInput(): MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose | undefined;
    private _s3;
    get s3(): MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference;
    putS3(value: MskconnectConnectorLogDeliveryWorkerLogDeliveryS3): void;
    resetS3(): void;
    get s3Input(): MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 | undefined;
}
export interface MskconnectConnectorLogDelivery {
    /**
    * worker_log_delivery block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#worker_log_delivery MskconnectConnector#worker_log_delivery}
    */
    readonly workerLogDelivery: MskconnectConnectorLogDeliveryWorkerLogDelivery;
}
export declare function mskconnectConnectorLogDeliveryToTerraform(struct?: MskconnectConnectorLogDeliveryOutputReference | MskconnectConnectorLogDelivery): any;
export declare function mskconnectConnectorLogDeliveryToHclTerraform(struct?: MskconnectConnectorLogDeliveryOutputReference | MskconnectConnectorLogDelivery): any;
export declare class MskconnectConnectorLogDeliveryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectConnectorLogDelivery | undefined;
    set internalValue(value: MskconnectConnectorLogDelivery | undefined);
    private _workerLogDelivery;
    get workerLogDelivery(): MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference;
    putWorkerLogDelivery(value: MskconnectConnectorLogDeliveryWorkerLogDelivery): void;
    get workerLogDeliveryInput(): MskconnectConnectorLogDeliveryWorkerLogDelivery | undefined;
}
export interface MskconnectConnectorPluginCustomPlugin {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#arn MskconnectConnector#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#revision MskconnectConnector#revision}
    */
    readonly revision: number;
}
export declare function mskconnectConnectorPluginCustomPluginToTerraform(struct?: MskconnectConnectorPluginCustomPluginOutputReference | MskconnectConnectorPluginCustomPlugin): any;
export declare function mskconnectConnectorPluginCustomPluginToHclTerraform(struct?: MskconnectConnectorPluginCustomPluginOutputReference | MskconnectConnectorPluginCustomPlugin): any;
export declare class MskconnectConnectorPluginCustomPluginOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectConnectorPluginCustomPlugin | undefined;
    set internalValue(value: MskconnectConnectorPluginCustomPlugin | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _revision?;
    get revision(): number;
    set revision(value: number);
    get revisionInput(): number | undefined;
}
export interface MskconnectConnectorPlugin {
    /**
    * custom_plugin block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#custom_plugin MskconnectConnector#custom_plugin}
    */
    readonly customPlugin: MskconnectConnectorPluginCustomPlugin;
}
export declare function mskconnectConnectorPluginToTerraform(struct?: MskconnectConnectorPlugin | cdktf.IResolvable): any;
export declare function mskconnectConnectorPluginToHclTerraform(struct?: MskconnectConnectorPlugin | cdktf.IResolvable): any;
export declare class MskconnectConnectorPluginOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MskconnectConnectorPlugin | cdktf.IResolvable | undefined;
    set internalValue(value: MskconnectConnectorPlugin | cdktf.IResolvable | undefined);
    private _customPlugin;
    get customPlugin(): MskconnectConnectorPluginCustomPluginOutputReference;
    putCustomPlugin(value: MskconnectConnectorPluginCustomPlugin): void;
    get customPluginInput(): MskconnectConnectorPluginCustomPlugin | undefined;
}
export declare class MskconnectConnectorPluginList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MskconnectConnectorPlugin[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MskconnectConnectorPluginOutputReference;
}
export interface MskconnectConnectorTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#create MskconnectConnector#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#delete MskconnectConnector#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#update MskconnectConnector#update}
    */
    readonly update?: string;
}
export declare function mskconnectConnectorTimeoutsToTerraform(struct?: MskconnectConnectorTimeouts | cdktf.IResolvable): any;
export declare function mskconnectConnectorTimeoutsToHclTerraform(struct?: MskconnectConnectorTimeouts | cdktf.IResolvable): any;
export declare class MskconnectConnectorTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectConnectorTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: MskconnectConnectorTimeouts | cdktf.IResolvable | undefined);
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
export interface MskconnectConnectorWorkerConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#arn MskconnectConnector#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#revision MskconnectConnector#revision}
    */
    readonly revision: number;
}
export declare function mskconnectConnectorWorkerConfigurationToTerraform(struct?: MskconnectConnectorWorkerConfigurationOutputReference | MskconnectConnectorWorkerConfiguration): any;
export declare function mskconnectConnectorWorkerConfigurationToHclTerraform(struct?: MskconnectConnectorWorkerConfigurationOutputReference | MskconnectConnectorWorkerConfiguration): any;
export declare class MskconnectConnectorWorkerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectConnectorWorkerConfiguration | undefined;
    set internalValue(value: MskconnectConnectorWorkerConfiguration | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _revision?;
    get revision(): number;
    set revision(value: number);
    get revisionInput(): number | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector aws_mskconnect_connector}
*/
export declare class MskconnectConnector extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_mskconnect_connector";
    /**
    * Generates CDKTF code for importing a MskconnectConnector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MskconnectConnector to import
    * @param importFromId The id of the existing MskconnectConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MskconnectConnector to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_connector aws_mskconnect_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MskconnectConnectorConfig
    */
    constructor(scope: Construct, id: string, config: MskconnectConnectorConfig);
    get arn(): string;
    private _connectorConfiguration?;
    get connectorConfiguration(): {
        [key: string]: string;
    };
    set connectorConfiguration(value: {
        [key: string]: string;
    });
    get connectorConfigurationInput(): {
        [key: string]: string;
    } | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kafkaconnectVersion?;
    get kafkaconnectVersion(): string;
    set kafkaconnectVersion(value: string);
    get kafkaconnectVersionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _serviceExecutionRoleArn?;
    get serviceExecutionRoleArn(): string;
    set serviceExecutionRoleArn(value: string);
    get serviceExecutionRoleArnInput(): string | undefined;
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
    get version(): string;
    private _capacity;
    get capacity(): MskconnectConnectorCapacityOutputReference;
    putCapacity(value: MskconnectConnectorCapacity): void;
    get capacityInput(): MskconnectConnectorCapacity | undefined;
    private _kafkaCluster;
    get kafkaCluster(): MskconnectConnectorKafkaClusterOutputReference;
    putKafkaCluster(value: MskconnectConnectorKafkaCluster): void;
    get kafkaClusterInput(): MskconnectConnectorKafkaCluster | undefined;
    private _kafkaClusterClientAuthentication;
    get kafkaClusterClientAuthentication(): MskconnectConnectorKafkaClusterClientAuthenticationOutputReference;
    putKafkaClusterClientAuthentication(value: MskconnectConnectorKafkaClusterClientAuthentication): void;
    get kafkaClusterClientAuthenticationInput(): MskconnectConnectorKafkaClusterClientAuthentication | undefined;
    private _kafkaClusterEncryptionInTransit;
    get kafkaClusterEncryptionInTransit(): MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference;
    putKafkaClusterEncryptionInTransit(value: MskconnectConnectorKafkaClusterEncryptionInTransit): void;
    get kafkaClusterEncryptionInTransitInput(): MskconnectConnectorKafkaClusterEncryptionInTransit | undefined;
    private _logDelivery;
    get logDelivery(): MskconnectConnectorLogDeliveryOutputReference;
    putLogDelivery(value: MskconnectConnectorLogDelivery): void;
    resetLogDelivery(): void;
    get logDeliveryInput(): MskconnectConnectorLogDelivery | undefined;
    private _plugin;
    get plugin(): MskconnectConnectorPluginList;
    putPlugin(value: MskconnectConnectorPlugin[] | cdktf.IResolvable): void;
    get pluginInput(): cdktf.IResolvable | MskconnectConnectorPlugin[] | undefined;
    private _timeouts;
    get timeouts(): MskconnectConnectorTimeoutsOutputReference;
    putTimeouts(value: MskconnectConnectorTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | MskconnectConnectorTimeouts | undefined;
    private _workerConfiguration;
    get workerConfiguration(): MskconnectConnectorWorkerConfigurationOutputReference;
    putWorkerConfiguration(value: MskconnectConnectorWorkerConfiguration): void;
    resetWorkerConfiguration(): void;
    get workerConfigurationInput(): MskconnectConnectorWorkerConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
