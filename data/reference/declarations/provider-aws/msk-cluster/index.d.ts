/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MskClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#cluster_name MskCluster#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#enhanced_monitoring MskCluster#enhanced_monitoring}
    */
    readonly enhancedMonitoring?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#id MskCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#kafka_version MskCluster#kafka_version}
    */
    readonly kafkaVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#number_of_broker_nodes MskCluster#number_of_broker_nodes}
    */
    readonly numberOfBrokerNodes: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#storage_mode MskCluster#storage_mode}
    */
    readonly storageMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#tags MskCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#tags_all MskCluster#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * broker_node_group_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#broker_node_group_info MskCluster#broker_node_group_info}
    */
    readonly brokerNodeGroupInfo: MskClusterBrokerNodeGroupInfo;
    /**
    * client_authentication block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#client_authentication MskCluster#client_authentication}
    */
    readonly clientAuthentication?: MskClusterClientAuthentication;
    /**
    * configuration_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#configuration_info MskCluster#configuration_info}
    */
    readonly configurationInfo?: MskClusterConfigurationInfo;
    /**
    * encryption_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#encryption_info MskCluster#encryption_info}
    */
    readonly encryptionInfo?: MskClusterEncryptionInfo;
    /**
    * logging_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#logging_info MskCluster#logging_info}
    */
    readonly loggingInfo?: MskClusterLoggingInfo;
    /**
    * open_monitoring block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#open_monitoring MskCluster#open_monitoring}
    */
    readonly openMonitoring?: MskClusterOpenMonitoring;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#timeouts MskCluster#timeouts}
    */
    readonly timeouts?: MskClusterTimeouts;
}
export interface MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#type MskCluster#type}
    */
    readonly type?: string;
}
export declare function mskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessToTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference | MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess): any;
export declare function mskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference | MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess): any;
export declare class MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess | undefined;
    set internalValue(value: MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export interface MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#iam MskCluster#iam}
    */
    readonly iam?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#scram MskCluster#scram}
    */
    readonly scram?: boolean | cdktf.IResolvable;
}
export declare function mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslToTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference | MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl): any;
export declare function mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference | MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl): any;
export declare class MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl | undefined;
    set internalValue(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl | undefined);
    private _iam?;
    get iam(): boolean | cdktf.IResolvable;
    set iam(value: boolean | cdktf.IResolvable);
    resetIam(): void;
    get iamInput(): boolean | cdktf.IResolvable | undefined;
    private _scram?;
    get scram(): boolean | cdktf.IResolvable;
    set scram(value: boolean | cdktf.IResolvable);
    resetScram(): void;
    get scramInput(): boolean | cdktf.IResolvable | undefined;
}
export interface MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#tls MskCluster#tls}
    */
    readonly tls?: boolean | cdktf.IResolvable;
    /**
    * sasl block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#sasl MskCluster#sasl}
    */
    readonly sasl?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl;
}
export declare function mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationToTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference | MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication): any;
export declare function mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference | MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication): any;
export declare class MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication | undefined;
    set internalValue(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication | undefined);
    private _tls?;
    get tls(): boolean | cdktf.IResolvable;
    set tls(value: boolean | cdktf.IResolvable);
    resetTls(): void;
    get tlsInput(): boolean | cdktf.IResolvable | undefined;
    private _sasl;
    get sasl(): MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference;
    putSasl(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl): void;
    resetSasl(): void;
    get saslInput(): MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl | undefined;
}
export interface MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity {
    /**
    * client_authentication block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#client_authentication MskCluster#client_authentication}
    */
    readonly clientAuthentication?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication;
}
export declare function mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityToTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference | MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity): any;
export declare function mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference | MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity): any;
export declare class MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity | undefined;
    set internalValue(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity | undefined);
    private _clientAuthentication;
    get clientAuthentication(): MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference;
    putClientAuthentication(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication): void;
    resetClientAuthentication(): void;
    get clientAuthenticationInput(): MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication | undefined;
}
export interface MskClusterBrokerNodeGroupInfoConnectivityInfo {
    /**
    * public_access block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#public_access MskCluster#public_access}
    */
    readonly publicAccess?: MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess;
    /**
    * vpc_connectivity block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#vpc_connectivity MskCluster#vpc_connectivity}
    */
    readonly vpcConnectivity?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity;
}
export declare function mskClusterBrokerNodeGroupInfoConnectivityInfoToTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference | MskClusterBrokerNodeGroupInfoConnectivityInfo): any;
export declare function mskClusterBrokerNodeGroupInfoConnectivityInfoToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference | MskClusterBrokerNodeGroupInfoConnectivityInfo): any;
export declare class MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterBrokerNodeGroupInfoConnectivityInfo | undefined;
    set internalValue(value: MskClusterBrokerNodeGroupInfoConnectivityInfo | undefined);
    private _publicAccess;
    get publicAccess(): MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference;
    putPublicAccess(value: MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess): void;
    resetPublicAccess(): void;
    get publicAccessInput(): MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess | undefined;
    private _vpcConnectivity;
    get vpcConnectivity(): MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference;
    putVpcConnectivity(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity): void;
    resetVpcConnectivity(): void;
    get vpcConnectivityInput(): MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity | undefined;
}
export interface MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#enabled MskCluster#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#volume_throughput MskCluster#volume_throughput}
    */
    readonly volumeThroughput?: number;
}
export declare function mskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputToTerraform(struct?: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference | MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput): any;
export declare function mskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference | MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput): any;
export declare class MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput | undefined;
    set internalValue(value: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _volumeThroughput?;
    get volumeThroughput(): number;
    set volumeThroughput(value: number);
    resetVolumeThroughput(): void;
    get volumeThroughputInput(): number | undefined;
}
export interface MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#volume_size MskCluster#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * provisioned_throughput block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#provisioned_throughput MskCluster#provisioned_throughput}
    */
    readonly provisionedThroughput?: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput;
}
export declare function mskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoToTerraform(struct?: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference | MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo): any;
export declare function mskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference | MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo): any;
export declare class MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo | undefined;
    set internalValue(value: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo | undefined);
    private _volumeSize?;
    get volumeSize(): number;
    set volumeSize(value: number);
    resetVolumeSize(): void;
    get volumeSizeInput(): number | undefined;
    private _provisionedThroughput;
    get provisionedThroughput(): MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference;
    putProvisionedThroughput(value: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput): void;
    resetProvisionedThroughput(): void;
    get provisionedThroughputInput(): MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput | undefined;
}
export interface MskClusterBrokerNodeGroupInfoStorageInfo {
    /**
    * ebs_storage_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#ebs_storage_info MskCluster#ebs_storage_info}
    */
    readonly ebsStorageInfo?: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo;
}
export declare function mskClusterBrokerNodeGroupInfoStorageInfoToTerraform(struct?: MskClusterBrokerNodeGroupInfoStorageInfoOutputReference | MskClusterBrokerNodeGroupInfoStorageInfo): any;
export declare function mskClusterBrokerNodeGroupInfoStorageInfoToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoStorageInfoOutputReference | MskClusterBrokerNodeGroupInfoStorageInfo): any;
export declare class MskClusterBrokerNodeGroupInfoStorageInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterBrokerNodeGroupInfoStorageInfo | undefined;
    set internalValue(value: MskClusterBrokerNodeGroupInfoStorageInfo | undefined);
    private _ebsStorageInfo;
    get ebsStorageInfo(): MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference;
    putEbsStorageInfo(value: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo): void;
    resetEbsStorageInfo(): void;
    get ebsStorageInfoInput(): MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo | undefined;
}
export interface MskClusterBrokerNodeGroupInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#az_distribution MskCluster#az_distribution}
    */
    readonly azDistribution?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#client_subnets MskCluster#client_subnets}
    */
    readonly clientSubnets: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#instance_type MskCluster#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#security_groups MskCluster#security_groups}
    */
    readonly securityGroups: string[];
    /**
    * connectivity_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#connectivity_info MskCluster#connectivity_info}
    */
    readonly connectivityInfo?: MskClusterBrokerNodeGroupInfoConnectivityInfo;
    /**
    * storage_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#storage_info MskCluster#storage_info}
    */
    readonly storageInfo?: MskClusterBrokerNodeGroupInfoStorageInfo;
}
export declare function mskClusterBrokerNodeGroupInfoToTerraform(struct?: MskClusterBrokerNodeGroupInfoOutputReference | MskClusterBrokerNodeGroupInfo): any;
export declare function mskClusterBrokerNodeGroupInfoToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoOutputReference | MskClusterBrokerNodeGroupInfo): any;
export declare class MskClusterBrokerNodeGroupInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterBrokerNodeGroupInfo | undefined;
    set internalValue(value: MskClusterBrokerNodeGroupInfo | undefined);
    private _azDistribution?;
    get azDistribution(): string;
    set azDistribution(value: string);
    resetAzDistribution(): void;
    get azDistributionInput(): string | undefined;
    private _clientSubnets?;
    get clientSubnets(): string[];
    set clientSubnets(value: string[]);
    get clientSubnetsInput(): string[] | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    get securityGroupsInput(): string[] | undefined;
    private _connectivityInfo;
    get connectivityInfo(): MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference;
    putConnectivityInfo(value: MskClusterBrokerNodeGroupInfoConnectivityInfo): void;
    resetConnectivityInfo(): void;
    get connectivityInfoInput(): MskClusterBrokerNodeGroupInfoConnectivityInfo | undefined;
    private _storageInfo;
    get storageInfo(): MskClusterBrokerNodeGroupInfoStorageInfoOutputReference;
    putStorageInfo(value: MskClusterBrokerNodeGroupInfoStorageInfo): void;
    resetStorageInfo(): void;
    get storageInfoInput(): MskClusterBrokerNodeGroupInfoStorageInfo | undefined;
}
export interface MskClusterClientAuthenticationSasl {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#iam MskCluster#iam}
    */
    readonly iam?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#scram MskCluster#scram}
    */
    readonly scram?: boolean | cdktf.IResolvable;
}
export declare function mskClusterClientAuthenticationSaslToTerraform(struct?: MskClusterClientAuthenticationSaslOutputReference | MskClusterClientAuthenticationSasl): any;
export declare function mskClusterClientAuthenticationSaslToHclTerraform(struct?: MskClusterClientAuthenticationSaslOutputReference | MskClusterClientAuthenticationSasl): any;
export declare class MskClusterClientAuthenticationSaslOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterClientAuthenticationSasl | undefined;
    set internalValue(value: MskClusterClientAuthenticationSasl | undefined);
    private _iam?;
    get iam(): boolean | cdktf.IResolvable;
    set iam(value: boolean | cdktf.IResolvable);
    resetIam(): void;
    get iamInput(): boolean | cdktf.IResolvable | undefined;
    private _scram?;
    get scram(): boolean | cdktf.IResolvable;
    set scram(value: boolean | cdktf.IResolvable);
    resetScram(): void;
    get scramInput(): boolean | cdktf.IResolvable | undefined;
}
export interface MskClusterClientAuthenticationTls {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#certificate_authority_arns MskCluster#certificate_authority_arns}
    */
    readonly certificateAuthorityArns?: string[];
}
export declare function mskClusterClientAuthenticationTlsToTerraform(struct?: MskClusterClientAuthenticationTlsOutputReference | MskClusterClientAuthenticationTls): any;
export declare function mskClusterClientAuthenticationTlsToHclTerraform(struct?: MskClusterClientAuthenticationTlsOutputReference | MskClusterClientAuthenticationTls): any;
export declare class MskClusterClientAuthenticationTlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterClientAuthenticationTls | undefined;
    set internalValue(value: MskClusterClientAuthenticationTls | undefined);
    private _certificateAuthorityArns?;
    get certificateAuthorityArns(): string[];
    set certificateAuthorityArns(value: string[]);
    resetCertificateAuthorityArns(): void;
    get certificateAuthorityArnsInput(): string[] | undefined;
}
export interface MskClusterClientAuthentication {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#unauthenticated MskCluster#unauthenticated}
    */
    readonly unauthenticated?: boolean | cdktf.IResolvable;
    /**
    * sasl block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#sasl MskCluster#sasl}
    */
    readonly sasl?: MskClusterClientAuthenticationSasl;
    /**
    * tls block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#tls MskCluster#tls}
    */
    readonly tls?: MskClusterClientAuthenticationTls;
}
export declare function mskClusterClientAuthenticationToTerraform(struct?: MskClusterClientAuthenticationOutputReference | MskClusterClientAuthentication): any;
export declare function mskClusterClientAuthenticationToHclTerraform(struct?: MskClusterClientAuthenticationOutputReference | MskClusterClientAuthentication): any;
export declare class MskClusterClientAuthenticationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterClientAuthentication | undefined;
    set internalValue(value: MskClusterClientAuthentication | undefined);
    private _unauthenticated?;
    get unauthenticated(): boolean | cdktf.IResolvable;
    set unauthenticated(value: boolean | cdktf.IResolvable);
    resetUnauthenticated(): void;
    get unauthenticatedInput(): boolean | cdktf.IResolvable | undefined;
    private _sasl;
    get sasl(): MskClusterClientAuthenticationSaslOutputReference;
    putSasl(value: MskClusterClientAuthenticationSasl): void;
    resetSasl(): void;
    get saslInput(): MskClusterClientAuthenticationSasl | undefined;
    private _tls;
    get tls(): MskClusterClientAuthenticationTlsOutputReference;
    putTls(value: MskClusterClientAuthenticationTls): void;
    resetTls(): void;
    get tlsInput(): MskClusterClientAuthenticationTls | undefined;
}
export interface MskClusterConfigurationInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#arn MskCluster#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#revision MskCluster#revision}
    */
    readonly revision: number;
}
export declare function mskClusterConfigurationInfoToTerraform(struct?: MskClusterConfigurationInfoOutputReference | MskClusterConfigurationInfo): any;
export declare function mskClusterConfigurationInfoToHclTerraform(struct?: MskClusterConfigurationInfoOutputReference | MskClusterConfigurationInfo): any;
export declare class MskClusterConfigurationInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterConfigurationInfo | undefined;
    set internalValue(value: MskClusterConfigurationInfo | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _revision?;
    get revision(): number;
    set revision(value: number);
    get revisionInput(): number | undefined;
}
export interface MskClusterEncryptionInfoEncryptionInTransit {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#client_broker MskCluster#client_broker}
    */
    readonly clientBroker?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#in_cluster MskCluster#in_cluster}
    */
    readonly inCluster?: boolean | cdktf.IResolvable;
}
export declare function mskClusterEncryptionInfoEncryptionInTransitToTerraform(struct?: MskClusterEncryptionInfoEncryptionInTransitOutputReference | MskClusterEncryptionInfoEncryptionInTransit): any;
export declare function mskClusterEncryptionInfoEncryptionInTransitToHclTerraform(struct?: MskClusterEncryptionInfoEncryptionInTransitOutputReference | MskClusterEncryptionInfoEncryptionInTransit): any;
export declare class MskClusterEncryptionInfoEncryptionInTransitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterEncryptionInfoEncryptionInTransit | undefined;
    set internalValue(value: MskClusterEncryptionInfoEncryptionInTransit | undefined);
    private _clientBroker?;
    get clientBroker(): string;
    set clientBroker(value: string);
    resetClientBroker(): void;
    get clientBrokerInput(): string | undefined;
    private _inCluster?;
    get inCluster(): boolean | cdktf.IResolvable;
    set inCluster(value: boolean | cdktf.IResolvable);
    resetInCluster(): void;
    get inClusterInput(): boolean | cdktf.IResolvable | undefined;
}
export interface MskClusterEncryptionInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#encryption_at_rest_kms_key_arn MskCluster#encryption_at_rest_kms_key_arn}
    */
    readonly encryptionAtRestKmsKeyArn?: string;
    /**
    * encryption_in_transit block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#encryption_in_transit MskCluster#encryption_in_transit}
    */
    readonly encryptionInTransit?: MskClusterEncryptionInfoEncryptionInTransit;
}
export declare function mskClusterEncryptionInfoToTerraform(struct?: MskClusterEncryptionInfoOutputReference | MskClusterEncryptionInfo): any;
export declare function mskClusterEncryptionInfoToHclTerraform(struct?: MskClusterEncryptionInfoOutputReference | MskClusterEncryptionInfo): any;
export declare class MskClusterEncryptionInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterEncryptionInfo | undefined;
    set internalValue(value: MskClusterEncryptionInfo | undefined);
    private _encryptionAtRestKmsKeyArn?;
    get encryptionAtRestKmsKeyArn(): string;
    set encryptionAtRestKmsKeyArn(value: string);
    resetEncryptionAtRestKmsKeyArn(): void;
    get encryptionAtRestKmsKeyArnInput(): string | undefined;
    private _encryptionInTransit;
    get encryptionInTransit(): MskClusterEncryptionInfoEncryptionInTransitOutputReference;
    putEncryptionInTransit(value: MskClusterEncryptionInfoEncryptionInTransit): void;
    resetEncryptionInTransit(): void;
    get encryptionInTransitInput(): MskClusterEncryptionInfoEncryptionInTransit | undefined;
}
export interface MskClusterLoggingInfoBrokerLogsCloudwatchLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#enabled MskCluster#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#log_group MskCluster#log_group}
    */
    readonly logGroup?: string;
}
export declare function mskClusterLoggingInfoBrokerLogsCloudwatchLogsToTerraform(struct?: MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference | MskClusterLoggingInfoBrokerLogsCloudwatchLogs): any;
export declare function mskClusterLoggingInfoBrokerLogsCloudwatchLogsToHclTerraform(struct?: MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference | MskClusterLoggingInfoBrokerLogsCloudwatchLogs): any;
export declare class MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterLoggingInfoBrokerLogsCloudwatchLogs | undefined;
    set internalValue(value: MskClusterLoggingInfoBrokerLogsCloudwatchLogs | undefined);
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
export interface MskClusterLoggingInfoBrokerLogsFirehose {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#delivery_stream MskCluster#delivery_stream}
    */
    readonly deliveryStream?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#enabled MskCluster#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function mskClusterLoggingInfoBrokerLogsFirehoseToTerraform(struct?: MskClusterLoggingInfoBrokerLogsFirehoseOutputReference | MskClusterLoggingInfoBrokerLogsFirehose): any;
export declare function mskClusterLoggingInfoBrokerLogsFirehoseToHclTerraform(struct?: MskClusterLoggingInfoBrokerLogsFirehoseOutputReference | MskClusterLoggingInfoBrokerLogsFirehose): any;
export declare class MskClusterLoggingInfoBrokerLogsFirehoseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterLoggingInfoBrokerLogsFirehose | undefined;
    set internalValue(value: MskClusterLoggingInfoBrokerLogsFirehose | undefined);
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
export interface MskClusterLoggingInfoBrokerLogsS3 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#bucket MskCluster#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#enabled MskCluster#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#prefix MskCluster#prefix}
    */
    readonly prefix?: string;
}
export declare function mskClusterLoggingInfoBrokerLogsS3ToTerraform(struct?: MskClusterLoggingInfoBrokerLogsS3OutputReference | MskClusterLoggingInfoBrokerLogsS3): any;
export declare function mskClusterLoggingInfoBrokerLogsS3ToHclTerraform(struct?: MskClusterLoggingInfoBrokerLogsS3OutputReference | MskClusterLoggingInfoBrokerLogsS3): any;
export declare class MskClusterLoggingInfoBrokerLogsS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterLoggingInfoBrokerLogsS3 | undefined;
    set internalValue(value: MskClusterLoggingInfoBrokerLogsS3 | undefined);
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
export interface MskClusterLoggingInfoBrokerLogs {
    /**
    * cloudwatch_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#cloudwatch_logs MskCluster#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: MskClusterLoggingInfoBrokerLogsCloudwatchLogs;
    /**
    * firehose block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#firehose MskCluster#firehose}
    */
    readonly firehose?: MskClusterLoggingInfoBrokerLogsFirehose;
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#s3 MskCluster#s3}
    */
    readonly s3?: MskClusterLoggingInfoBrokerLogsS3;
}
export declare function mskClusterLoggingInfoBrokerLogsToTerraform(struct?: MskClusterLoggingInfoBrokerLogsOutputReference | MskClusterLoggingInfoBrokerLogs): any;
export declare function mskClusterLoggingInfoBrokerLogsToHclTerraform(struct?: MskClusterLoggingInfoBrokerLogsOutputReference | MskClusterLoggingInfoBrokerLogs): any;
export declare class MskClusterLoggingInfoBrokerLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterLoggingInfoBrokerLogs | undefined;
    set internalValue(value: MskClusterLoggingInfoBrokerLogs | undefined);
    private _cloudwatchLogs;
    get cloudwatchLogs(): MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference;
    putCloudwatchLogs(value: MskClusterLoggingInfoBrokerLogsCloudwatchLogs): void;
    resetCloudwatchLogs(): void;
    get cloudwatchLogsInput(): MskClusterLoggingInfoBrokerLogsCloudwatchLogs | undefined;
    private _firehose;
    get firehose(): MskClusterLoggingInfoBrokerLogsFirehoseOutputReference;
    putFirehose(value: MskClusterLoggingInfoBrokerLogsFirehose): void;
    resetFirehose(): void;
    get firehoseInput(): MskClusterLoggingInfoBrokerLogsFirehose | undefined;
    private _s3;
    get s3(): MskClusterLoggingInfoBrokerLogsS3OutputReference;
    putS3(value: MskClusterLoggingInfoBrokerLogsS3): void;
    resetS3(): void;
    get s3Input(): MskClusterLoggingInfoBrokerLogsS3 | undefined;
}
export interface MskClusterLoggingInfo {
    /**
    * broker_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#broker_logs MskCluster#broker_logs}
    */
    readonly brokerLogs: MskClusterLoggingInfoBrokerLogs;
}
export declare function mskClusterLoggingInfoToTerraform(struct?: MskClusterLoggingInfoOutputReference | MskClusterLoggingInfo): any;
export declare function mskClusterLoggingInfoToHclTerraform(struct?: MskClusterLoggingInfoOutputReference | MskClusterLoggingInfo): any;
export declare class MskClusterLoggingInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterLoggingInfo | undefined;
    set internalValue(value: MskClusterLoggingInfo | undefined);
    private _brokerLogs;
    get brokerLogs(): MskClusterLoggingInfoBrokerLogsOutputReference;
    putBrokerLogs(value: MskClusterLoggingInfoBrokerLogs): void;
    get brokerLogsInput(): MskClusterLoggingInfoBrokerLogs | undefined;
}
export interface MskClusterOpenMonitoringPrometheusJmxExporter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}
    */
    readonly enabledInBroker: boolean | cdktf.IResolvable;
}
export declare function mskClusterOpenMonitoringPrometheusJmxExporterToTerraform(struct?: MskClusterOpenMonitoringPrometheusJmxExporterOutputReference | MskClusterOpenMonitoringPrometheusJmxExporter): any;
export declare function mskClusterOpenMonitoringPrometheusJmxExporterToHclTerraform(struct?: MskClusterOpenMonitoringPrometheusJmxExporterOutputReference | MskClusterOpenMonitoringPrometheusJmxExporter): any;
export declare class MskClusterOpenMonitoringPrometheusJmxExporterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterOpenMonitoringPrometheusJmxExporter | undefined;
    set internalValue(value: MskClusterOpenMonitoringPrometheusJmxExporter | undefined);
    private _enabledInBroker?;
    get enabledInBroker(): boolean | cdktf.IResolvable;
    set enabledInBroker(value: boolean | cdktf.IResolvable);
    get enabledInBrokerInput(): boolean | cdktf.IResolvable | undefined;
}
export interface MskClusterOpenMonitoringPrometheusNodeExporter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}
    */
    readonly enabledInBroker: boolean | cdktf.IResolvable;
}
export declare function mskClusterOpenMonitoringPrometheusNodeExporterToTerraform(struct?: MskClusterOpenMonitoringPrometheusNodeExporterOutputReference | MskClusterOpenMonitoringPrometheusNodeExporter): any;
export declare function mskClusterOpenMonitoringPrometheusNodeExporterToHclTerraform(struct?: MskClusterOpenMonitoringPrometheusNodeExporterOutputReference | MskClusterOpenMonitoringPrometheusNodeExporter): any;
export declare class MskClusterOpenMonitoringPrometheusNodeExporterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterOpenMonitoringPrometheusNodeExporter | undefined;
    set internalValue(value: MskClusterOpenMonitoringPrometheusNodeExporter | undefined);
    private _enabledInBroker?;
    get enabledInBroker(): boolean | cdktf.IResolvable;
    set enabledInBroker(value: boolean | cdktf.IResolvable);
    get enabledInBrokerInput(): boolean | cdktf.IResolvable | undefined;
}
export interface MskClusterOpenMonitoringPrometheus {
    /**
    * jmx_exporter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#jmx_exporter MskCluster#jmx_exporter}
    */
    readonly jmxExporter?: MskClusterOpenMonitoringPrometheusJmxExporter;
    /**
    * node_exporter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#node_exporter MskCluster#node_exporter}
    */
    readonly nodeExporter?: MskClusterOpenMonitoringPrometheusNodeExporter;
}
export declare function mskClusterOpenMonitoringPrometheusToTerraform(struct?: MskClusterOpenMonitoringPrometheusOutputReference | MskClusterOpenMonitoringPrometheus): any;
export declare function mskClusterOpenMonitoringPrometheusToHclTerraform(struct?: MskClusterOpenMonitoringPrometheusOutputReference | MskClusterOpenMonitoringPrometheus): any;
export declare class MskClusterOpenMonitoringPrometheusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterOpenMonitoringPrometheus | undefined;
    set internalValue(value: MskClusterOpenMonitoringPrometheus | undefined);
    private _jmxExporter;
    get jmxExporter(): MskClusterOpenMonitoringPrometheusJmxExporterOutputReference;
    putJmxExporter(value: MskClusterOpenMonitoringPrometheusJmxExporter): void;
    resetJmxExporter(): void;
    get jmxExporterInput(): MskClusterOpenMonitoringPrometheusJmxExporter | undefined;
    private _nodeExporter;
    get nodeExporter(): MskClusterOpenMonitoringPrometheusNodeExporterOutputReference;
    putNodeExporter(value: MskClusterOpenMonitoringPrometheusNodeExporter): void;
    resetNodeExporter(): void;
    get nodeExporterInput(): MskClusterOpenMonitoringPrometheusNodeExporter | undefined;
}
export interface MskClusterOpenMonitoring {
    /**
    * prometheus block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#prometheus MskCluster#prometheus}
    */
    readonly prometheus: MskClusterOpenMonitoringPrometheus;
}
export declare function mskClusterOpenMonitoringToTerraform(struct?: MskClusterOpenMonitoringOutputReference | MskClusterOpenMonitoring): any;
export declare function mskClusterOpenMonitoringToHclTerraform(struct?: MskClusterOpenMonitoringOutputReference | MskClusterOpenMonitoring): any;
export declare class MskClusterOpenMonitoringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterOpenMonitoring | undefined;
    set internalValue(value: MskClusterOpenMonitoring | undefined);
    private _prometheus;
    get prometheus(): MskClusterOpenMonitoringPrometheusOutputReference;
    putPrometheus(value: MskClusterOpenMonitoringPrometheus): void;
    get prometheusInput(): MskClusterOpenMonitoringPrometheus | undefined;
}
export interface MskClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#create MskCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#delete MskCluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#update MskCluster#update}
    */
    readonly update?: string;
}
export declare function mskClusterTimeoutsToTerraform(struct?: MskClusterTimeouts | cdktf.IResolvable): any;
export declare function mskClusterTimeoutsToHclTerraform(struct?: MskClusterTimeouts | cdktf.IResolvable): any;
export declare class MskClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskClusterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: MskClusterTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster aws_msk_cluster}
*/
export declare class MskCluster extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_msk_cluster";
    /**
    * Generates CDKTF code for importing a MskCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MskCluster to import
    * @param importFromId The id of the existing MskCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MskCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/msk_cluster aws_msk_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MskClusterConfig
    */
    constructor(scope: Construct, id: string, config: MskClusterConfig);
    get arn(): string;
    get bootstrapBrokers(): string;
    get bootstrapBrokersPublicSaslIam(): string;
    get bootstrapBrokersPublicSaslScram(): string;
    get bootstrapBrokersPublicTls(): string;
    get bootstrapBrokersSaslIam(): string;
    get bootstrapBrokersSaslScram(): string;
    get bootstrapBrokersTls(): string;
    get bootstrapBrokersVpcConnectivitySaslIam(): string;
    get bootstrapBrokersVpcConnectivitySaslScram(): string;
    get bootstrapBrokersVpcConnectivityTls(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string | undefined;
    get clusterUuid(): string;
    get currentVersion(): string;
    private _enhancedMonitoring?;
    get enhancedMonitoring(): string;
    set enhancedMonitoring(value: string);
    resetEnhancedMonitoring(): void;
    get enhancedMonitoringInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kafkaVersion?;
    get kafkaVersion(): string;
    set kafkaVersion(value: string);
    get kafkaVersionInput(): string | undefined;
    private _numberOfBrokerNodes?;
    get numberOfBrokerNodes(): number;
    set numberOfBrokerNodes(value: number);
    get numberOfBrokerNodesInput(): number | undefined;
    private _storageMode?;
    get storageMode(): string;
    set storageMode(value: string);
    resetStorageMode(): void;
    get storageModeInput(): string | undefined;
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
    get zookeeperConnectString(): string;
    get zookeeperConnectStringTls(): string;
    private _brokerNodeGroupInfo;
    get brokerNodeGroupInfo(): MskClusterBrokerNodeGroupInfoOutputReference;
    putBrokerNodeGroupInfo(value: MskClusterBrokerNodeGroupInfo): void;
    get brokerNodeGroupInfoInput(): MskClusterBrokerNodeGroupInfo | undefined;
    private _clientAuthentication;
    get clientAuthentication(): MskClusterClientAuthenticationOutputReference;
    putClientAuthentication(value: MskClusterClientAuthentication): void;
    resetClientAuthentication(): void;
    get clientAuthenticationInput(): MskClusterClientAuthentication | undefined;
    private _configurationInfo;
    get configurationInfo(): MskClusterConfigurationInfoOutputReference;
    putConfigurationInfo(value: MskClusterConfigurationInfo): void;
    resetConfigurationInfo(): void;
    get configurationInfoInput(): MskClusterConfigurationInfo | undefined;
    private _encryptionInfo;
    get encryptionInfo(): MskClusterEncryptionInfoOutputReference;
    putEncryptionInfo(value: MskClusterEncryptionInfo): void;
    resetEncryptionInfo(): void;
    get encryptionInfoInput(): MskClusterEncryptionInfo | undefined;
    private _loggingInfo;
    get loggingInfo(): MskClusterLoggingInfoOutputReference;
    putLoggingInfo(value: MskClusterLoggingInfo): void;
    resetLoggingInfo(): void;
    get loggingInfoInput(): MskClusterLoggingInfo | undefined;
    private _openMonitoring;
    get openMonitoring(): MskClusterOpenMonitoringOutputReference;
    putOpenMonitoring(value: MskClusterOpenMonitoring): void;
    resetOpenMonitoring(): void;
    get openMonitoringInput(): MskClusterOpenMonitoring | undefined;
    private _timeouts;
    get timeouts(): MskClusterTimeoutsOutputReference;
    putTimeouts(value: MskClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | MskClusterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
