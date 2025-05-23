/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EksClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#bootstrap_self_managed_addons EksCluster#bootstrap_self_managed_addons}
    */
    readonly bootstrapSelfManagedAddons?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#enabled_cluster_log_types EksCluster#enabled_cluster_log_types}
    */
    readonly enabledClusterLogTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#id EksCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#name EksCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#role_arn EksCluster#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#tags EksCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#tags_all EksCluster#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#version EksCluster#version}
    */
    readonly version?: string;
    /**
    * access_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#access_config EksCluster#access_config}
    */
    readonly accessConfig?: EksClusterAccessConfig;
    /**
    * compute_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#compute_config EksCluster#compute_config}
    */
    readonly computeConfig?: EksClusterComputeConfig;
    /**
    * encryption_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#encryption_config EksCluster#encryption_config}
    */
    readonly encryptionConfig?: EksClusterEncryptionConfig;
    /**
    * kubernetes_network_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#kubernetes_network_config EksCluster#kubernetes_network_config}
    */
    readonly kubernetesNetworkConfig?: EksClusterKubernetesNetworkConfig;
    /**
    * outpost_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#outpost_config EksCluster#outpost_config}
    */
    readonly outpostConfig?: EksClusterOutpostConfig;
    /**
    * remote_network_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#remote_network_config EksCluster#remote_network_config}
    */
    readonly remoteNetworkConfig?: EksClusterRemoteNetworkConfig;
    /**
    * storage_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#storage_config EksCluster#storage_config}
    */
    readonly storageConfig?: EksClusterStorageConfig;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#timeouts EksCluster#timeouts}
    */
    readonly timeouts?: EksClusterTimeouts;
    /**
    * upgrade_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#upgrade_policy EksCluster#upgrade_policy}
    */
    readonly upgradePolicy?: EksClusterUpgradePolicy;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#vpc_config EksCluster#vpc_config}
    */
    readonly vpcConfig: EksClusterVpcConfig;
    /**
    * zonal_shift_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#zonal_shift_config EksCluster#zonal_shift_config}
    */
    readonly zonalShiftConfig?: EksClusterZonalShiftConfig;
}
export interface EksClusterCertificateAuthority {
}
export declare function eksClusterCertificateAuthorityToTerraform(struct?: EksClusterCertificateAuthority): any;
export declare function eksClusterCertificateAuthorityToHclTerraform(struct?: EksClusterCertificateAuthority): any;
export declare class EksClusterCertificateAuthorityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EksClusterCertificateAuthority | undefined;
    set internalValue(value: EksClusterCertificateAuthority | undefined);
    get data(): string;
}
export declare class EksClusterCertificateAuthorityList extends cdktf.ComplexList {
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
    get(index: number): EksClusterCertificateAuthorityOutputReference;
}
export interface EksClusterIdentityOidc {
}
export declare function eksClusterIdentityOidcToTerraform(struct?: EksClusterIdentityOidc): any;
export declare function eksClusterIdentityOidcToHclTerraform(struct?: EksClusterIdentityOidc): any;
export declare class EksClusterIdentityOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EksClusterIdentityOidc | undefined;
    set internalValue(value: EksClusterIdentityOidc | undefined);
    get issuer(): string;
}
export declare class EksClusterIdentityOidcList extends cdktf.ComplexList {
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
    get(index: number): EksClusterIdentityOidcOutputReference;
}
export interface EksClusterIdentity {
}
export declare function eksClusterIdentityToTerraform(struct?: EksClusterIdentity): any;
export declare function eksClusterIdentityToHclTerraform(struct?: EksClusterIdentity): any;
export declare class EksClusterIdentityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EksClusterIdentity | undefined;
    set internalValue(value: EksClusterIdentity | undefined);
    private _oidc;
    get oidc(): EksClusterIdentityOidcList;
}
export declare class EksClusterIdentityList extends cdktf.ComplexList {
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
    get(index: number): EksClusterIdentityOutputReference;
}
export interface EksClusterAccessConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#authentication_mode EksCluster#authentication_mode}
    */
    readonly authenticationMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#bootstrap_cluster_creator_admin_permissions EksCluster#bootstrap_cluster_creator_admin_permissions}
    */
    readonly bootstrapClusterCreatorAdminPermissions?: boolean | cdktf.IResolvable;
}
export declare function eksClusterAccessConfigToTerraform(struct?: EksClusterAccessConfigOutputReference | EksClusterAccessConfig): any;
export declare function eksClusterAccessConfigToHclTerraform(struct?: EksClusterAccessConfigOutputReference | EksClusterAccessConfig): any;
export declare class EksClusterAccessConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksClusterAccessConfig | undefined;
    set internalValue(value: EksClusterAccessConfig | undefined);
    private _authenticationMode?;
    get authenticationMode(): string;
    set authenticationMode(value: string);
    resetAuthenticationMode(): void;
    get authenticationModeInput(): string | undefined;
    private _bootstrapClusterCreatorAdminPermissions?;
    get bootstrapClusterCreatorAdminPermissions(): boolean | cdktf.IResolvable;
    set bootstrapClusterCreatorAdminPermissions(value: boolean | cdktf.IResolvable);
    resetBootstrapClusterCreatorAdminPermissions(): void;
    get bootstrapClusterCreatorAdminPermissionsInput(): boolean | cdktf.IResolvable | undefined;
}
export interface EksClusterComputeConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#enabled EksCluster#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#node_pools EksCluster#node_pools}
    */
    readonly nodePools?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#node_role_arn EksCluster#node_role_arn}
    */
    readonly nodeRoleArn?: string;
}
export declare function eksClusterComputeConfigToTerraform(struct?: EksClusterComputeConfigOutputReference | EksClusterComputeConfig): any;
export declare function eksClusterComputeConfigToHclTerraform(struct?: EksClusterComputeConfigOutputReference | EksClusterComputeConfig): any;
export declare class EksClusterComputeConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksClusterComputeConfig | undefined;
    set internalValue(value: EksClusterComputeConfig | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _nodePools?;
    get nodePools(): string[];
    set nodePools(value: string[]);
    resetNodePools(): void;
    get nodePoolsInput(): string[] | undefined;
    private _nodeRoleArn?;
    get nodeRoleArn(): string;
    set nodeRoleArn(value: string);
    resetNodeRoleArn(): void;
    get nodeRoleArnInput(): string | undefined;
}
export interface EksClusterEncryptionConfigProvider {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#key_arn EksCluster#key_arn}
    */
    readonly keyArn: string;
}
export declare function eksClusterEncryptionConfigProviderToTerraform(struct?: EksClusterEncryptionConfigProviderOutputReference | EksClusterEncryptionConfigProvider): any;
export declare function eksClusterEncryptionConfigProviderToHclTerraform(struct?: EksClusterEncryptionConfigProviderOutputReference | EksClusterEncryptionConfigProvider): any;
export declare class EksClusterEncryptionConfigProviderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksClusterEncryptionConfigProvider | undefined;
    set internalValue(value: EksClusterEncryptionConfigProvider | undefined);
    private _keyArn?;
    get keyArn(): string;
    set keyArn(value: string);
    get keyArnInput(): string | undefined;
}
export interface EksClusterEncryptionConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#resources EksCluster#resources}
    */
    readonly resources: string[];
    /**
    * provider block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#provider EksCluster#provider}
    */
    readonly provider: EksClusterEncryptionConfigProvider;
}
export declare function eksClusterEncryptionConfigToTerraform(struct?: EksClusterEncryptionConfigOutputReference | EksClusterEncryptionConfig): any;
export declare function eksClusterEncryptionConfigToHclTerraform(struct?: EksClusterEncryptionConfigOutputReference | EksClusterEncryptionConfig): any;
export declare class EksClusterEncryptionConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksClusterEncryptionConfig | undefined;
    set internalValue(value: EksClusterEncryptionConfig | undefined);
    private _resources?;
    get resources(): string[];
    set resources(value: string[]);
    get resourcesInput(): string[] | undefined;
    private _provider;
    get provider(): EksClusterEncryptionConfigProviderOutputReference;
    putProvider(value: EksClusterEncryptionConfigProvider): void;
    get providerInput(): EksClusterEncryptionConfigProvider | undefined;
}
export interface EksClusterKubernetesNetworkConfigElasticLoadBalancing {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#enabled EksCluster#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function eksClusterKubernetesNetworkConfigElasticLoadBalancingToTerraform(struct?: EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference | EksClusterKubernetesNetworkConfigElasticLoadBalancing): any;
export declare function eksClusterKubernetesNetworkConfigElasticLoadBalancingToHclTerraform(struct?: EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference | EksClusterKubernetesNetworkConfigElasticLoadBalancing): any;
export declare class EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksClusterKubernetesNetworkConfigElasticLoadBalancing | undefined;
    set internalValue(value: EksClusterKubernetesNetworkConfigElasticLoadBalancing | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface EksClusterKubernetesNetworkConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#ip_family EksCluster#ip_family}
    */
    readonly ipFamily?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#service_ipv4_cidr EksCluster#service_ipv4_cidr}
    */
    readonly serviceIpv4Cidr?: string;
    /**
    * elastic_load_balancing block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#elastic_load_balancing EksCluster#elastic_load_balancing}
    */
    readonly elasticLoadBalancing?: EksClusterKubernetesNetworkConfigElasticLoadBalancing;
}
export declare function eksClusterKubernetesNetworkConfigToTerraform(struct?: EksClusterKubernetesNetworkConfigOutputReference | EksClusterKubernetesNetworkConfig): any;
export declare function eksClusterKubernetesNetworkConfigToHclTerraform(struct?: EksClusterKubernetesNetworkConfigOutputReference | EksClusterKubernetesNetworkConfig): any;
export declare class EksClusterKubernetesNetworkConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksClusterKubernetesNetworkConfig | undefined;
    set internalValue(value: EksClusterKubernetesNetworkConfig | undefined);
    private _ipFamily?;
    get ipFamily(): string;
    set ipFamily(value: string);
    resetIpFamily(): void;
    get ipFamilyInput(): string | undefined;
    private _serviceIpv4Cidr?;
    get serviceIpv4Cidr(): string;
    set serviceIpv4Cidr(value: string);
    resetServiceIpv4Cidr(): void;
    get serviceIpv4CidrInput(): string | undefined;
    get serviceIpv6Cidr(): string;
    private _elasticLoadBalancing;
    get elasticLoadBalancing(): EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference;
    putElasticLoadBalancing(value: EksClusterKubernetesNetworkConfigElasticLoadBalancing): void;
    resetElasticLoadBalancing(): void;
    get elasticLoadBalancingInput(): EksClusterKubernetesNetworkConfigElasticLoadBalancing | undefined;
}
export interface EksClusterOutpostConfigControlPlanePlacement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#group_name EksCluster#group_name}
    */
    readonly groupName: string;
}
export declare function eksClusterOutpostConfigControlPlanePlacementToTerraform(struct?: EksClusterOutpostConfigControlPlanePlacementOutputReference | EksClusterOutpostConfigControlPlanePlacement): any;
export declare function eksClusterOutpostConfigControlPlanePlacementToHclTerraform(struct?: EksClusterOutpostConfigControlPlanePlacementOutputReference | EksClusterOutpostConfigControlPlanePlacement): any;
export declare class EksClusterOutpostConfigControlPlanePlacementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksClusterOutpostConfigControlPlanePlacement | undefined;
    set internalValue(value: EksClusterOutpostConfigControlPlanePlacement | undefined);
    private _groupName?;
    get groupName(): string;
    set groupName(value: string);
    get groupNameInput(): string | undefined;
}
export interface EksClusterOutpostConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#control_plane_instance_type EksCluster#control_plane_instance_type}
    */
    readonly controlPlaneInstanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#outpost_arns EksCluster#outpost_arns}
    */
    readonly outpostArns: string[];
    /**
    * control_plane_placement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#control_plane_placement EksCluster#control_plane_placement}
    */
    readonly controlPlanePlacement?: EksClusterOutpostConfigControlPlanePlacement;
}
export declare function eksClusterOutpostConfigToTerraform(struct?: EksClusterOutpostConfigOutputReference | EksClusterOutpostConfig): any;
export declare function eksClusterOutpostConfigToHclTerraform(struct?: EksClusterOutpostConfigOutputReference | EksClusterOutpostConfig): any;
export declare class EksClusterOutpostConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksClusterOutpostConfig | undefined;
    set internalValue(value: EksClusterOutpostConfig | undefined);
    private _controlPlaneInstanceType?;
    get controlPlaneInstanceType(): string;
    set controlPlaneInstanceType(value: string);
    get controlPlaneInstanceTypeInput(): string | undefined;
    private _outpostArns?;
    get outpostArns(): string[];
    set outpostArns(value: string[]);
    get outpostArnsInput(): string[] | undefined;
    private _controlPlanePlacement;
    get controlPlanePlacement(): EksClusterOutpostConfigControlPlanePlacementOutputReference;
    putControlPlanePlacement(value: EksClusterOutpostConfigControlPlanePlacement): void;
    resetControlPlanePlacement(): void;
    get controlPlanePlacementInput(): EksClusterOutpostConfigControlPlanePlacement | undefined;
}
export interface EksClusterRemoteNetworkConfigRemoteNodeNetworks {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}
    */
    readonly cidrs?: string[];
}
export declare function eksClusterRemoteNetworkConfigRemoteNodeNetworksToTerraform(struct?: EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference | EksClusterRemoteNetworkConfigRemoteNodeNetworks): any;
export declare function eksClusterRemoteNetworkConfigRemoteNodeNetworksToHclTerraform(struct?: EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference | EksClusterRemoteNetworkConfigRemoteNodeNetworks): any;
export declare class EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksClusterRemoteNetworkConfigRemoteNodeNetworks | undefined;
    set internalValue(value: EksClusterRemoteNetworkConfigRemoteNodeNetworks | undefined);
    private _cidrs?;
    get cidrs(): string[];
    set cidrs(value: string[]);
    resetCidrs(): void;
    get cidrsInput(): string[] | undefined;
}
export interface EksClusterRemoteNetworkConfigRemotePodNetworks {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}
    */
    readonly cidrs?: string[];
}
export declare function eksClusterRemoteNetworkConfigRemotePodNetworksToTerraform(struct?: EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference | EksClusterRemoteNetworkConfigRemotePodNetworks): any;
export declare function eksClusterRemoteNetworkConfigRemotePodNetworksToHclTerraform(struct?: EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference | EksClusterRemoteNetworkConfigRemotePodNetworks): any;
export declare class EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksClusterRemoteNetworkConfigRemotePodNetworks | undefined;
    set internalValue(value: EksClusterRemoteNetworkConfigRemotePodNetworks | undefined);
    private _cidrs?;
    get cidrs(): string[];
    set cidrs(value: string[]);
    resetCidrs(): void;
    get cidrsInput(): string[] | undefined;
}
export interface EksClusterRemoteNetworkConfig {
    /**
    * remote_node_networks block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#remote_node_networks EksCluster#remote_node_networks}
    */
    readonly remoteNodeNetworks: EksClusterRemoteNetworkConfigRemoteNodeNetworks;
    /**
    * remote_pod_networks block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#remote_pod_networks EksCluster#remote_pod_networks}
    */
    readonly remotePodNetworks?: EksClusterRemoteNetworkConfigRemotePodNetworks;
}
export declare function eksClusterRemoteNetworkConfigToTerraform(struct?: EksClusterRemoteNetworkConfigOutputReference | EksClusterRemoteNetworkConfig): any;
export declare function eksClusterRemoteNetworkConfigToHclTerraform(struct?: EksClusterRemoteNetworkConfigOutputReference | EksClusterRemoteNetworkConfig): any;
export declare class EksClusterRemoteNetworkConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksClusterRemoteNetworkConfig | undefined;
    set internalValue(value: EksClusterRemoteNetworkConfig | undefined);
    private _remoteNodeNetworks;
    get remoteNodeNetworks(): EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference;
    putRemoteNodeNetworks(value: EksClusterRemoteNetworkConfigRemoteNodeNetworks): void;
    get remoteNodeNetworksInput(): EksClusterRemoteNetworkConfigRemoteNodeNetworks | undefined;
    private _remotePodNetworks;
    get remotePodNetworks(): EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference;
    putRemotePodNetworks(value: EksClusterRemoteNetworkConfigRemotePodNetworks): void;
    resetRemotePodNetworks(): void;
    get remotePodNetworksInput(): EksClusterRemoteNetworkConfigRemotePodNetworks | undefined;
}
export interface EksClusterStorageConfigBlockStorage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#enabled EksCluster#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function eksClusterStorageConfigBlockStorageToTerraform(struct?: EksClusterStorageConfigBlockStorageOutputReference | EksClusterStorageConfigBlockStorage): any;
export declare function eksClusterStorageConfigBlockStorageToHclTerraform(struct?: EksClusterStorageConfigBlockStorageOutputReference | EksClusterStorageConfigBlockStorage): any;
export declare class EksClusterStorageConfigBlockStorageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksClusterStorageConfigBlockStorage | undefined;
    set internalValue(value: EksClusterStorageConfigBlockStorage | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface EksClusterStorageConfig {
    /**
    * block_storage block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#block_storage EksCluster#block_storage}
    */
    readonly blockStorage?: EksClusterStorageConfigBlockStorage;
}
export declare function eksClusterStorageConfigToTerraform(struct?: EksClusterStorageConfigOutputReference | EksClusterStorageConfig): any;
export declare function eksClusterStorageConfigToHclTerraform(struct?: EksClusterStorageConfigOutputReference | EksClusterStorageConfig): any;
export declare class EksClusterStorageConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksClusterStorageConfig | undefined;
    set internalValue(value: EksClusterStorageConfig | undefined);
    private _blockStorage;
    get blockStorage(): EksClusterStorageConfigBlockStorageOutputReference;
    putBlockStorage(value: EksClusterStorageConfigBlockStorage): void;
    resetBlockStorage(): void;
    get blockStorageInput(): EksClusterStorageConfigBlockStorage | undefined;
}
export interface EksClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#create EksCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#delete EksCluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#update EksCluster#update}
    */
    readonly update?: string;
}
export declare function eksClusterTimeoutsToTerraform(struct?: EksClusterTimeouts | cdktf.IResolvable): any;
export declare function eksClusterTimeoutsToHclTerraform(struct?: EksClusterTimeouts | cdktf.IResolvable): any;
export declare class EksClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksClusterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EksClusterTimeouts | cdktf.IResolvable | undefined);
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
export interface EksClusterUpgradePolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#support_type EksCluster#support_type}
    */
    readonly supportType?: string;
}
export declare function eksClusterUpgradePolicyToTerraform(struct?: EksClusterUpgradePolicyOutputReference | EksClusterUpgradePolicy): any;
export declare function eksClusterUpgradePolicyToHclTerraform(struct?: EksClusterUpgradePolicyOutputReference | EksClusterUpgradePolicy): any;
export declare class EksClusterUpgradePolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksClusterUpgradePolicy | undefined;
    set internalValue(value: EksClusterUpgradePolicy | undefined);
    private _supportType?;
    get supportType(): string;
    set supportType(value: string);
    resetSupportType(): void;
    get supportTypeInput(): string | undefined;
}
export interface EksClusterVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#endpoint_private_access EksCluster#endpoint_private_access}
    */
    readonly endpointPrivateAccess?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#endpoint_public_access EksCluster#endpoint_public_access}
    */
    readonly endpointPublicAccess?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#public_access_cidrs EksCluster#public_access_cidrs}
    */
    readonly publicAccessCidrs?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#security_group_ids EksCluster#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#subnet_ids EksCluster#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function eksClusterVpcConfigToTerraform(struct?: EksClusterVpcConfigOutputReference | EksClusterVpcConfig): any;
export declare function eksClusterVpcConfigToHclTerraform(struct?: EksClusterVpcConfigOutputReference | EksClusterVpcConfig): any;
export declare class EksClusterVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksClusterVpcConfig | undefined;
    set internalValue(value: EksClusterVpcConfig | undefined);
    get clusterSecurityGroupId(): string;
    private _endpointPrivateAccess?;
    get endpointPrivateAccess(): boolean | cdktf.IResolvable;
    set endpointPrivateAccess(value: boolean | cdktf.IResolvable);
    resetEndpointPrivateAccess(): void;
    get endpointPrivateAccessInput(): boolean | cdktf.IResolvable | undefined;
    private _endpointPublicAccess?;
    get endpointPublicAccess(): boolean | cdktf.IResolvable;
    set endpointPublicAccess(value: boolean | cdktf.IResolvable);
    resetEndpointPublicAccess(): void;
    get endpointPublicAccessInput(): boolean | cdktf.IResolvable | undefined;
    private _publicAccessCidrs?;
    get publicAccessCidrs(): string[];
    set publicAccessCidrs(value: string[]);
    resetPublicAccessCidrs(): void;
    get publicAccessCidrsInput(): string[] | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
    get vpcId(): string;
}
export interface EksClusterZonalShiftConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#enabled EksCluster#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function eksClusterZonalShiftConfigToTerraform(struct?: EksClusterZonalShiftConfigOutputReference | EksClusterZonalShiftConfig): any;
export declare function eksClusterZonalShiftConfigToHclTerraform(struct?: EksClusterZonalShiftConfigOutputReference | EksClusterZonalShiftConfig): any;
export declare class EksClusterZonalShiftConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksClusterZonalShiftConfig | undefined;
    set internalValue(value: EksClusterZonalShiftConfig | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster aws_eks_cluster}
*/
export declare class EksCluster extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_eks_cluster";
    /**
    * Generates CDKTF code for importing a EksCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EksCluster to import
    * @param importFromId The id of the existing EksCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EksCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_cluster aws_eks_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksClusterConfig
    */
    constructor(scope: Construct, id: string, config: EksClusterConfig);
    get arn(): string;
    private _bootstrapSelfManagedAddons?;
    get bootstrapSelfManagedAddons(): boolean | cdktf.IResolvable;
    set bootstrapSelfManagedAddons(value: boolean | cdktf.IResolvable);
    resetBootstrapSelfManagedAddons(): void;
    get bootstrapSelfManagedAddonsInput(): boolean | cdktf.IResolvable | undefined;
    private _certificateAuthority;
    get certificateAuthority(): EksClusterCertificateAuthorityList;
    get clusterId(): string;
    get createdAt(): string;
    private _enabledClusterLogTypes?;
    get enabledClusterLogTypes(): string[];
    set enabledClusterLogTypes(value: string[]);
    resetEnabledClusterLogTypes(): void;
    get enabledClusterLogTypesInput(): string[] | undefined;
    get endpoint(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identity;
    get identity(): EksClusterIdentityList;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get platformVersion(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    get status(): string;
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
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    private _accessConfig;
    get accessConfig(): EksClusterAccessConfigOutputReference;
    putAccessConfig(value: EksClusterAccessConfig): void;
    resetAccessConfig(): void;
    get accessConfigInput(): EksClusterAccessConfig | undefined;
    private _computeConfig;
    get computeConfig(): EksClusterComputeConfigOutputReference;
    putComputeConfig(value: EksClusterComputeConfig): void;
    resetComputeConfig(): void;
    get computeConfigInput(): EksClusterComputeConfig | undefined;
    private _encryptionConfig;
    get encryptionConfig(): EksClusterEncryptionConfigOutputReference;
    putEncryptionConfig(value: EksClusterEncryptionConfig): void;
    resetEncryptionConfig(): void;
    get encryptionConfigInput(): EksClusterEncryptionConfig | undefined;
    private _kubernetesNetworkConfig;
    get kubernetesNetworkConfig(): EksClusterKubernetesNetworkConfigOutputReference;
    putKubernetesNetworkConfig(value: EksClusterKubernetesNetworkConfig): void;
    resetKubernetesNetworkConfig(): void;
    get kubernetesNetworkConfigInput(): EksClusterKubernetesNetworkConfig | undefined;
    private _outpostConfig;
    get outpostConfig(): EksClusterOutpostConfigOutputReference;
    putOutpostConfig(value: EksClusterOutpostConfig): void;
    resetOutpostConfig(): void;
    get outpostConfigInput(): EksClusterOutpostConfig | undefined;
    private _remoteNetworkConfig;
    get remoteNetworkConfig(): EksClusterRemoteNetworkConfigOutputReference;
    putRemoteNetworkConfig(value: EksClusterRemoteNetworkConfig): void;
    resetRemoteNetworkConfig(): void;
    get remoteNetworkConfigInput(): EksClusterRemoteNetworkConfig | undefined;
    private _storageConfig;
    get storageConfig(): EksClusterStorageConfigOutputReference;
    putStorageConfig(value: EksClusterStorageConfig): void;
    resetStorageConfig(): void;
    get storageConfigInput(): EksClusterStorageConfig | undefined;
    private _timeouts;
    get timeouts(): EksClusterTimeoutsOutputReference;
    putTimeouts(value: EksClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EksClusterTimeouts | undefined;
    private _upgradePolicy;
    get upgradePolicy(): EksClusterUpgradePolicyOutputReference;
    putUpgradePolicy(value: EksClusterUpgradePolicy): void;
    resetUpgradePolicy(): void;
    get upgradePolicyInput(): EksClusterUpgradePolicy | undefined;
    private _vpcConfig;
    get vpcConfig(): EksClusterVpcConfigOutputReference;
    putVpcConfig(value: EksClusterVpcConfig): void;
    get vpcConfigInput(): EksClusterVpcConfig | undefined;
    private _zonalShiftConfig;
    get zonalShiftConfig(): EksClusterZonalShiftConfigOutputReference;
    putZonalShiftConfig(value: EksClusterZonalShiftConfig): void;
    resetZonalShiftConfig(): void;
    get zonalShiftConfigInput(): EksClusterZonalShiftConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
