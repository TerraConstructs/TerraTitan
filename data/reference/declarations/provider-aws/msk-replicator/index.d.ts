/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MskReplicatorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#description MskReplicator#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#id MskReplicator#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#replicator_name MskReplicator#replicator_name}
    */
    readonly replicatorName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#service_execution_role_arn MskReplicator#service_execution_role_arn}
    */
    readonly serviceExecutionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#tags MskReplicator#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#tags_all MskReplicator#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * kafka_cluster block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#kafka_cluster MskReplicator#kafka_cluster}
    */
    readonly kafkaCluster: MskReplicatorKafkaCluster[] | cdktf.IResolvable;
    /**
    * replication_info_list block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#replication_info_list MskReplicator#replication_info_list}
    */
    readonly replicationInfoList: MskReplicatorReplicationInfoListStruct;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#timeouts MskReplicator#timeouts}
    */
    readonly timeouts?: MskReplicatorTimeouts;
}
export interface MskReplicatorKafkaClusterAmazonMskCluster {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#msk_cluster_arn MskReplicator#msk_cluster_arn}
    */
    readonly mskClusterArn: string;
}
export declare function mskReplicatorKafkaClusterAmazonMskClusterToTerraform(struct?: MskReplicatorKafkaClusterAmazonMskClusterOutputReference | MskReplicatorKafkaClusterAmazonMskCluster): any;
export declare function mskReplicatorKafkaClusterAmazonMskClusterToHclTerraform(struct?: MskReplicatorKafkaClusterAmazonMskClusterOutputReference | MskReplicatorKafkaClusterAmazonMskCluster): any;
export declare class MskReplicatorKafkaClusterAmazonMskClusterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskReplicatorKafkaClusterAmazonMskCluster | undefined;
    set internalValue(value: MskReplicatorKafkaClusterAmazonMskCluster | undefined);
    private _mskClusterArn?;
    get mskClusterArn(): string;
    set mskClusterArn(value: string);
    get mskClusterArnInput(): string | undefined;
}
export interface MskReplicatorKafkaClusterVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#security_groups_ids MskReplicator#security_groups_ids}
    */
    readonly securityGroupsIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#subnet_ids MskReplicator#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function mskReplicatorKafkaClusterVpcConfigToTerraform(struct?: MskReplicatorKafkaClusterVpcConfigOutputReference | MskReplicatorKafkaClusterVpcConfig): any;
export declare function mskReplicatorKafkaClusterVpcConfigToHclTerraform(struct?: MskReplicatorKafkaClusterVpcConfigOutputReference | MskReplicatorKafkaClusterVpcConfig): any;
export declare class MskReplicatorKafkaClusterVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskReplicatorKafkaClusterVpcConfig | undefined;
    set internalValue(value: MskReplicatorKafkaClusterVpcConfig | undefined);
    private _securityGroupsIds?;
    get securityGroupsIds(): string[];
    set securityGroupsIds(value: string[]);
    resetSecurityGroupsIds(): void;
    get securityGroupsIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
}
export interface MskReplicatorKafkaCluster {
    /**
    * amazon_msk_cluster block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#amazon_msk_cluster MskReplicator#amazon_msk_cluster}
    */
    readonly amazonMskCluster: MskReplicatorKafkaClusterAmazonMskCluster;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#vpc_config MskReplicator#vpc_config}
    */
    readonly vpcConfig: MskReplicatorKafkaClusterVpcConfig;
}
export declare function mskReplicatorKafkaClusterToTerraform(struct?: MskReplicatorKafkaCluster | cdktf.IResolvable): any;
export declare function mskReplicatorKafkaClusterToHclTerraform(struct?: MskReplicatorKafkaCluster | cdktf.IResolvable): any;
export declare class MskReplicatorKafkaClusterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MskReplicatorKafkaCluster | cdktf.IResolvable | undefined;
    set internalValue(value: MskReplicatorKafkaCluster | cdktf.IResolvable | undefined);
    private _amazonMskCluster;
    get amazonMskCluster(): MskReplicatorKafkaClusterAmazonMskClusterOutputReference;
    putAmazonMskCluster(value: MskReplicatorKafkaClusterAmazonMskCluster): void;
    get amazonMskClusterInput(): MskReplicatorKafkaClusterAmazonMskCluster | undefined;
    private _vpcConfig;
    get vpcConfig(): MskReplicatorKafkaClusterVpcConfigOutputReference;
    putVpcConfig(value: MskReplicatorKafkaClusterVpcConfig): void;
    get vpcConfigInput(): MskReplicatorKafkaClusterVpcConfig | undefined;
}
export declare class MskReplicatorKafkaClusterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MskReplicatorKafkaCluster[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MskReplicatorKafkaClusterOutputReference;
}
export interface MskReplicatorReplicationInfoListConsumerGroupReplication {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#consumer_groups_to_exclude MskReplicator#consumer_groups_to_exclude}
    */
    readonly consumerGroupsToExclude?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#consumer_groups_to_replicate MskReplicator#consumer_groups_to_replicate}
    */
    readonly consumerGroupsToReplicate: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#detect_and_copy_new_consumer_groups MskReplicator#detect_and_copy_new_consumer_groups}
    */
    readonly detectAndCopyNewConsumerGroups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#synchronise_consumer_group_offsets MskReplicator#synchronise_consumer_group_offsets}
    */
    readonly synchroniseConsumerGroupOffsets?: boolean | cdktf.IResolvable;
}
export declare function mskReplicatorReplicationInfoListConsumerGroupReplicationToTerraform(struct?: MskReplicatorReplicationInfoListConsumerGroupReplication | cdktf.IResolvable): any;
export declare function mskReplicatorReplicationInfoListConsumerGroupReplicationToHclTerraform(struct?: MskReplicatorReplicationInfoListConsumerGroupReplication | cdktf.IResolvable): any;
export declare class MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MskReplicatorReplicationInfoListConsumerGroupReplication | cdktf.IResolvable | undefined;
    set internalValue(value: MskReplicatorReplicationInfoListConsumerGroupReplication | cdktf.IResolvable | undefined);
    private _consumerGroupsToExclude?;
    get consumerGroupsToExclude(): string[];
    set consumerGroupsToExclude(value: string[]);
    resetConsumerGroupsToExclude(): void;
    get consumerGroupsToExcludeInput(): string[] | undefined;
    private _consumerGroupsToReplicate?;
    get consumerGroupsToReplicate(): string[];
    set consumerGroupsToReplicate(value: string[]);
    get consumerGroupsToReplicateInput(): string[] | undefined;
    private _detectAndCopyNewConsumerGroups?;
    get detectAndCopyNewConsumerGroups(): boolean | cdktf.IResolvable;
    set detectAndCopyNewConsumerGroups(value: boolean | cdktf.IResolvable);
    resetDetectAndCopyNewConsumerGroups(): void;
    get detectAndCopyNewConsumerGroupsInput(): boolean | cdktf.IResolvable | undefined;
    private _synchroniseConsumerGroupOffsets?;
    get synchroniseConsumerGroupOffsets(): boolean | cdktf.IResolvable;
    set synchroniseConsumerGroupOffsets(value: boolean | cdktf.IResolvable);
    resetSynchroniseConsumerGroupOffsets(): void;
    get synchroniseConsumerGroupOffsetsInput(): boolean | cdktf.IResolvable | undefined;
}
export declare class MskReplicatorReplicationInfoListConsumerGroupReplicationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MskReplicatorReplicationInfoListConsumerGroupReplication[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference;
}
export interface MskReplicatorReplicationInfoListTopicReplicationStartingPosition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#type MskReplicator#type}
    */
    readonly type?: string;
}
export declare function mskReplicatorReplicationInfoListTopicReplicationStartingPositionToTerraform(struct?: MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference | MskReplicatorReplicationInfoListTopicReplicationStartingPosition): any;
export declare function mskReplicatorReplicationInfoListTopicReplicationStartingPositionToHclTerraform(struct?: MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference | MskReplicatorReplicationInfoListTopicReplicationStartingPosition): any;
export declare class MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskReplicatorReplicationInfoListTopicReplicationStartingPosition | undefined;
    set internalValue(value: MskReplicatorReplicationInfoListTopicReplicationStartingPosition | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export interface MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#type MskReplicator#type}
    */
    readonly type?: string;
}
export declare function mskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationToTerraform(struct?: MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference | MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration): any;
export declare function mskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationToHclTerraform(struct?: MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference | MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration): any;
export declare class MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration | undefined;
    set internalValue(value: MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export interface MskReplicatorReplicationInfoListTopicReplication {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#copy_access_control_lists_for_topics MskReplicator#copy_access_control_lists_for_topics}
    */
    readonly copyAccessControlListsForTopics?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#copy_topic_configurations MskReplicator#copy_topic_configurations}
    */
    readonly copyTopicConfigurations?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#detect_and_copy_new_topics MskReplicator#detect_and_copy_new_topics}
    */
    readonly detectAndCopyNewTopics?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#topics_to_exclude MskReplicator#topics_to_exclude}
    */
    readonly topicsToExclude?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#topics_to_replicate MskReplicator#topics_to_replicate}
    */
    readonly topicsToReplicate: string[];
    /**
    * starting_position block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#starting_position MskReplicator#starting_position}
    */
    readonly startingPosition?: MskReplicatorReplicationInfoListTopicReplicationStartingPosition;
    /**
    * topic_name_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#topic_name_configuration MskReplicator#topic_name_configuration}
    */
    readonly topicNameConfiguration?: MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration;
}
export declare function mskReplicatorReplicationInfoListTopicReplicationToTerraform(struct?: MskReplicatorReplicationInfoListTopicReplication | cdktf.IResolvable): any;
export declare function mskReplicatorReplicationInfoListTopicReplicationToHclTerraform(struct?: MskReplicatorReplicationInfoListTopicReplication | cdktf.IResolvable): any;
export declare class MskReplicatorReplicationInfoListTopicReplicationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MskReplicatorReplicationInfoListTopicReplication | cdktf.IResolvable | undefined;
    set internalValue(value: MskReplicatorReplicationInfoListTopicReplication | cdktf.IResolvable | undefined);
    private _copyAccessControlListsForTopics?;
    get copyAccessControlListsForTopics(): boolean | cdktf.IResolvable;
    set copyAccessControlListsForTopics(value: boolean | cdktf.IResolvable);
    resetCopyAccessControlListsForTopics(): void;
    get copyAccessControlListsForTopicsInput(): boolean | cdktf.IResolvable | undefined;
    private _copyTopicConfigurations?;
    get copyTopicConfigurations(): boolean | cdktf.IResolvable;
    set copyTopicConfigurations(value: boolean | cdktf.IResolvable);
    resetCopyTopicConfigurations(): void;
    get copyTopicConfigurationsInput(): boolean | cdktf.IResolvable | undefined;
    private _detectAndCopyNewTopics?;
    get detectAndCopyNewTopics(): boolean | cdktf.IResolvable;
    set detectAndCopyNewTopics(value: boolean | cdktf.IResolvable);
    resetDetectAndCopyNewTopics(): void;
    get detectAndCopyNewTopicsInput(): boolean | cdktf.IResolvable | undefined;
    private _topicsToExclude?;
    get topicsToExclude(): string[];
    set topicsToExclude(value: string[]);
    resetTopicsToExclude(): void;
    get topicsToExcludeInput(): string[] | undefined;
    private _topicsToReplicate?;
    get topicsToReplicate(): string[];
    set topicsToReplicate(value: string[]);
    get topicsToReplicateInput(): string[] | undefined;
    private _startingPosition;
    get startingPosition(): MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference;
    putStartingPosition(value: MskReplicatorReplicationInfoListTopicReplicationStartingPosition): void;
    resetStartingPosition(): void;
    get startingPositionInput(): MskReplicatorReplicationInfoListTopicReplicationStartingPosition | undefined;
    private _topicNameConfiguration;
    get topicNameConfiguration(): MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference;
    putTopicNameConfiguration(value: MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration): void;
    resetTopicNameConfiguration(): void;
    get topicNameConfigurationInput(): MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration | undefined;
}
export declare class MskReplicatorReplicationInfoListTopicReplicationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MskReplicatorReplicationInfoListTopicReplication[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MskReplicatorReplicationInfoListTopicReplicationOutputReference;
}
export interface MskReplicatorReplicationInfoListStruct {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#source_kafka_cluster_arn MskReplicator#source_kafka_cluster_arn}
    */
    readonly sourceKafkaClusterArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#target_compression_type MskReplicator#target_compression_type}
    */
    readonly targetCompressionType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#target_kafka_cluster_arn MskReplicator#target_kafka_cluster_arn}
    */
    readonly targetKafkaClusterArn: string;
    /**
    * consumer_group_replication block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#consumer_group_replication MskReplicator#consumer_group_replication}
    */
    readonly consumerGroupReplication: MskReplicatorReplicationInfoListConsumerGroupReplication[] | cdktf.IResolvable;
    /**
    * topic_replication block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#topic_replication MskReplicator#topic_replication}
    */
    readonly topicReplication: MskReplicatorReplicationInfoListTopicReplication[] | cdktf.IResolvable;
}
export declare function mskReplicatorReplicationInfoListStructToTerraform(struct?: MskReplicatorReplicationInfoListStructOutputReference | MskReplicatorReplicationInfoListStruct): any;
export declare function mskReplicatorReplicationInfoListStructToHclTerraform(struct?: MskReplicatorReplicationInfoListStructOutputReference | MskReplicatorReplicationInfoListStruct): any;
export declare class MskReplicatorReplicationInfoListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskReplicatorReplicationInfoListStruct | undefined;
    set internalValue(value: MskReplicatorReplicationInfoListStruct | undefined);
    get sourceKafkaClusterAlias(): string;
    private _sourceKafkaClusterArn?;
    get sourceKafkaClusterArn(): string;
    set sourceKafkaClusterArn(value: string);
    get sourceKafkaClusterArnInput(): string | undefined;
    private _targetCompressionType?;
    get targetCompressionType(): string;
    set targetCompressionType(value: string);
    get targetCompressionTypeInput(): string | undefined;
    get targetKafkaClusterAlias(): string;
    private _targetKafkaClusterArn?;
    get targetKafkaClusterArn(): string;
    set targetKafkaClusterArn(value: string);
    get targetKafkaClusterArnInput(): string | undefined;
    private _consumerGroupReplication;
    get consumerGroupReplication(): MskReplicatorReplicationInfoListConsumerGroupReplicationList;
    putConsumerGroupReplication(value: MskReplicatorReplicationInfoListConsumerGroupReplication[] | cdktf.IResolvable): void;
    get consumerGroupReplicationInput(): cdktf.IResolvable | MskReplicatorReplicationInfoListConsumerGroupReplication[] | undefined;
    private _topicReplication;
    get topicReplication(): MskReplicatorReplicationInfoListTopicReplicationList;
    putTopicReplication(value: MskReplicatorReplicationInfoListTopicReplication[] | cdktf.IResolvable): void;
    get topicReplicationInput(): cdktf.IResolvable | MskReplicatorReplicationInfoListTopicReplication[] | undefined;
}
export interface MskReplicatorTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#create MskReplicator#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#delete MskReplicator#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#update MskReplicator#update}
    */
    readonly update?: string;
}
export declare function mskReplicatorTimeoutsToTerraform(struct?: MskReplicatorTimeouts | cdktf.IResolvable): any;
export declare function mskReplicatorTimeoutsToHclTerraform(struct?: MskReplicatorTimeouts | cdktf.IResolvable): any;
export declare class MskReplicatorTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskReplicatorTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: MskReplicatorTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator aws_msk_replicator}
*/
export declare class MskReplicator extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_msk_replicator";
    /**
    * Generates CDKTF code for importing a MskReplicator resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MskReplicator to import
    * @param importFromId The id of the existing MskReplicator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MskReplicator to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_replicator aws_msk_replicator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MskReplicatorConfig
    */
    constructor(scope: Construct, id: string, config: MskReplicatorConfig);
    get arn(): string;
    get currentVersion(): string;
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
    private _replicatorName?;
    get replicatorName(): string;
    set replicatorName(value: string);
    get replicatorNameInput(): string | undefined;
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
    private _kafkaCluster;
    get kafkaCluster(): MskReplicatorKafkaClusterList;
    putKafkaCluster(value: MskReplicatorKafkaCluster[] | cdktf.IResolvable): void;
    get kafkaClusterInput(): cdktf.IResolvable | MskReplicatorKafkaCluster[] | undefined;
    private _replicationInfoList;
    get replicationInfoList(): MskReplicatorReplicationInfoListStructOutputReference;
    putReplicationInfoList(value: MskReplicatorReplicationInfoListStruct): void;
    get replicationInfoListInput(): MskReplicatorReplicationInfoListStruct | undefined;
    private _timeouts;
    get timeouts(): MskReplicatorTimeoutsOutputReference;
    putTimeouts(value: MskReplicatorTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | MskReplicatorTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
