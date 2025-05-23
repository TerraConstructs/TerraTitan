/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEksClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eks_cluster#id DataAwsEksCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eks_cluster#name DataAwsEksCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eks_cluster#tags DataAwsEksCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsEksClusterAccessConfig {
}
export declare function dataAwsEksClusterAccessConfigToTerraform(struct?: DataAwsEksClusterAccessConfig): any;
export declare function dataAwsEksClusterAccessConfigToHclTerraform(struct?: DataAwsEksClusterAccessConfig): any;
export declare class DataAwsEksClusterAccessConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksClusterAccessConfig | undefined;
    set internalValue(value: DataAwsEksClusterAccessConfig | undefined);
    get authenticationMode(): string;
    get bootstrapClusterCreatorAdminPermissions(): cdktf.IResolvable;
}
export declare class DataAwsEksClusterAccessConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksClusterAccessConfigOutputReference;
}
export interface DataAwsEksClusterCertificateAuthority {
}
export declare function dataAwsEksClusterCertificateAuthorityToTerraform(struct?: DataAwsEksClusterCertificateAuthority): any;
export declare function dataAwsEksClusterCertificateAuthorityToHclTerraform(struct?: DataAwsEksClusterCertificateAuthority): any;
export declare class DataAwsEksClusterCertificateAuthorityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksClusterCertificateAuthority | undefined;
    set internalValue(value: DataAwsEksClusterCertificateAuthority | undefined);
    get data(): string;
}
export declare class DataAwsEksClusterCertificateAuthorityList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksClusterCertificateAuthorityOutputReference;
}
export interface DataAwsEksClusterComputeConfig {
}
export declare function dataAwsEksClusterComputeConfigToTerraform(struct?: DataAwsEksClusterComputeConfig): any;
export declare function dataAwsEksClusterComputeConfigToHclTerraform(struct?: DataAwsEksClusterComputeConfig): any;
export declare class DataAwsEksClusterComputeConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksClusterComputeConfig | undefined;
    set internalValue(value: DataAwsEksClusterComputeConfig | undefined);
    get enabled(): cdktf.IResolvable;
    get nodePools(): string[];
    get nodeRoleArn(): string;
}
export declare class DataAwsEksClusterComputeConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksClusterComputeConfigOutputReference;
}
export interface DataAwsEksClusterIdentityOidc {
}
export declare function dataAwsEksClusterIdentityOidcToTerraform(struct?: DataAwsEksClusterIdentityOidc): any;
export declare function dataAwsEksClusterIdentityOidcToHclTerraform(struct?: DataAwsEksClusterIdentityOidc): any;
export declare class DataAwsEksClusterIdentityOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksClusterIdentityOidc | undefined;
    set internalValue(value: DataAwsEksClusterIdentityOidc | undefined);
    get issuer(): string;
}
export declare class DataAwsEksClusterIdentityOidcList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksClusterIdentityOidcOutputReference;
}
export interface DataAwsEksClusterIdentity {
}
export declare function dataAwsEksClusterIdentityToTerraform(struct?: DataAwsEksClusterIdentity): any;
export declare function dataAwsEksClusterIdentityToHclTerraform(struct?: DataAwsEksClusterIdentity): any;
export declare class DataAwsEksClusterIdentityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksClusterIdentity | undefined;
    set internalValue(value: DataAwsEksClusterIdentity | undefined);
    private _oidc;
    get oidc(): DataAwsEksClusterIdentityOidcList;
}
export declare class DataAwsEksClusterIdentityList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksClusterIdentityOutputReference;
}
export interface DataAwsEksClusterKubernetesNetworkConfigElasticLoadBalancing {
}
export declare function dataAwsEksClusterKubernetesNetworkConfigElasticLoadBalancingToTerraform(struct?: DataAwsEksClusterKubernetesNetworkConfigElasticLoadBalancing): any;
export declare function dataAwsEksClusterKubernetesNetworkConfigElasticLoadBalancingToHclTerraform(struct?: DataAwsEksClusterKubernetesNetworkConfigElasticLoadBalancing): any;
export declare class DataAwsEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksClusterKubernetesNetworkConfigElasticLoadBalancing | undefined;
    set internalValue(value: DataAwsEksClusterKubernetesNetworkConfigElasticLoadBalancing | undefined);
    get enabled(): cdktf.IResolvable;
}
export declare class DataAwsEksClusterKubernetesNetworkConfigElasticLoadBalancingList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference;
}
export interface DataAwsEksClusterKubernetesNetworkConfig {
}
export declare function dataAwsEksClusterKubernetesNetworkConfigToTerraform(struct?: DataAwsEksClusterKubernetesNetworkConfig): any;
export declare function dataAwsEksClusterKubernetesNetworkConfigToHclTerraform(struct?: DataAwsEksClusterKubernetesNetworkConfig): any;
export declare class DataAwsEksClusterKubernetesNetworkConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksClusterKubernetesNetworkConfig | undefined;
    set internalValue(value: DataAwsEksClusterKubernetesNetworkConfig | undefined);
    private _elasticLoadBalancing;
    get elasticLoadBalancing(): DataAwsEksClusterKubernetesNetworkConfigElasticLoadBalancingList;
    get ipFamily(): string;
    get serviceIpv4Cidr(): string;
    get serviceIpv6Cidr(): string;
}
export declare class DataAwsEksClusterKubernetesNetworkConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksClusterKubernetesNetworkConfigOutputReference;
}
export interface DataAwsEksClusterOutpostConfigControlPlanePlacement {
}
export declare function dataAwsEksClusterOutpostConfigControlPlanePlacementToTerraform(struct?: DataAwsEksClusterOutpostConfigControlPlanePlacement): any;
export declare function dataAwsEksClusterOutpostConfigControlPlanePlacementToHclTerraform(struct?: DataAwsEksClusterOutpostConfigControlPlanePlacement): any;
export declare class DataAwsEksClusterOutpostConfigControlPlanePlacementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksClusterOutpostConfigControlPlanePlacement | undefined;
    set internalValue(value: DataAwsEksClusterOutpostConfigControlPlanePlacement | undefined);
    get groupName(): string;
}
export declare class DataAwsEksClusterOutpostConfigControlPlanePlacementList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksClusterOutpostConfigControlPlanePlacementOutputReference;
}
export interface DataAwsEksClusterOutpostConfig {
}
export declare function dataAwsEksClusterOutpostConfigToTerraform(struct?: DataAwsEksClusterOutpostConfig): any;
export declare function dataAwsEksClusterOutpostConfigToHclTerraform(struct?: DataAwsEksClusterOutpostConfig): any;
export declare class DataAwsEksClusterOutpostConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksClusterOutpostConfig | undefined;
    set internalValue(value: DataAwsEksClusterOutpostConfig | undefined);
    get controlPlaneInstanceType(): string;
    private _controlPlanePlacement;
    get controlPlanePlacement(): DataAwsEksClusterOutpostConfigControlPlanePlacementList;
    get outpostArns(): string[];
}
export declare class DataAwsEksClusterOutpostConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksClusterOutpostConfigOutputReference;
}
export interface DataAwsEksClusterRemoteNetworkConfigRemoteNodeNetworks {
}
export declare function dataAwsEksClusterRemoteNetworkConfigRemoteNodeNetworksToTerraform(struct?: DataAwsEksClusterRemoteNetworkConfigRemoteNodeNetworks): any;
export declare function dataAwsEksClusterRemoteNetworkConfigRemoteNodeNetworksToHclTerraform(struct?: DataAwsEksClusterRemoteNetworkConfigRemoteNodeNetworks): any;
export declare class DataAwsEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksClusterRemoteNetworkConfigRemoteNodeNetworks | undefined;
    set internalValue(value: DataAwsEksClusterRemoteNetworkConfigRemoteNodeNetworks | undefined);
    get cidrs(): string[];
}
export declare class DataAwsEksClusterRemoteNetworkConfigRemoteNodeNetworksList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference;
}
export interface DataAwsEksClusterRemoteNetworkConfigRemotePodNetworks {
}
export declare function dataAwsEksClusterRemoteNetworkConfigRemotePodNetworksToTerraform(struct?: DataAwsEksClusterRemoteNetworkConfigRemotePodNetworks): any;
export declare function dataAwsEksClusterRemoteNetworkConfigRemotePodNetworksToHclTerraform(struct?: DataAwsEksClusterRemoteNetworkConfigRemotePodNetworks): any;
export declare class DataAwsEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksClusterRemoteNetworkConfigRemotePodNetworks | undefined;
    set internalValue(value: DataAwsEksClusterRemoteNetworkConfigRemotePodNetworks | undefined);
    get cidrs(): string[];
}
export declare class DataAwsEksClusterRemoteNetworkConfigRemotePodNetworksList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference;
}
export interface DataAwsEksClusterRemoteNetworkConfig {
}
export declare function dataAwsEksClusterRemoteNetworkConfigToTerraform(struct?: DataAwsEksClusterRemoteNetworkConfig): any;
export declare function dataAwsEksClusterRemoteNetworkConfigToHclTerraform(struct?: DataAwsEksClusterRemoteNetworkConfig): any;
export declare class DataAwsEksClusterRemoteNetworkConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksClusterRemoteNetworkConfig | undefined;
    set internalValue(value: DataAwsEksClusterRemoteNetworkConfig | undefined);
    private _remoteNodeNetworks;
    get remoteNodeNetworks(): DataAwsEksClusterRemoteNetworkConfigRemoteNodeNetworksList;
    private _remotePodNetworks;
    get remotePodNetworks(): DataAwsEksClusterRemoteNetworkConfigRemotePodNetworksList;
}
export declare class DataAwsEksClusterRemoteNetworkConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksClusterRemoteNetworkConfigOutputReference;
}
export interface DataAwsEksClusterStorageConfigBlockStorage {
}
export declare function dataAwsEksClusterStorageConfigBlockStorageToTerraform(struct?: DataAwsEksClusterStorageConfigBlockStorage): any;
export declare function dataAwsEksClusterStorageConfigBlockStorageToHclTerraform(struct?: DataAwsEksClusterStorageConfigBlockStorage): any;
export declare class DataAwsEksClusterStorageConfigBlockStorageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksClusterStorageConfigBlockStorage | undefined;
    set internalValue(value: DataAwsEksClusterStorageConfigBlockStorage | undefined);
    get enabled(): cdktf.IResolvable;
}
export declare class DataAwsEksClusterStorageConfigBlockStorageList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksClusterStorageConfigBlockStorageOutputReference;
}
export interface DataAwsEksClusterStorageConfig {
}
export declare function dataAwsEksClusterStorageConfigToTerraform(struct?: DataAwsEksClusterStorageConfig): any;
export declare function dataAwsEksClusterStorageConfigToHclTerraform(struct?: DataAwsEksClusterStorageConfig): any;
export declare class DataAwsEksClusterStorageConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksClusterStorageConfig | undefined;
    set internalValue(value: DataAwsEksClusterStorageConfig | undefined);
    private _blockStorage;
    get blockStorage(): DataAwsEksClusterStorageConfigBlockStorageList;
}
export declare class DataAwsEksClusterStorageConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksClusterStorageConfigOutputReference;
}
export interface DataAwsEksClusterUpgradePolicy {
}
export declare function dataAwsEksClusterUpgradePolicyToTerraform(struct?: DataAwsEksClusterUpgradePolicy): any;
export declare function dataAwsEksClusterUpgradePolicyToHclTerraform(struct?: DataAwsEksClusterUpgradePolicy): any;
export declare class DataAwsEksClusterUpgradePolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksClusterUpgradePolicy | undefined;
    set internalValue(value: DataAwsEksClusterUpgradePolicy | undefined);
    get supportType(): string;
}
export declare class DataAwsEksClusterUpgradePolicyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksClusterUpgradePolicyOutputReference;
}
export interface DataAwsEksClusterVpcConfig {
}
export declare function dataAwsEksClusterVpcConfigToTerraform(struct?: DataAwsEksClusterVpcConfig): any;
export declare function dataAwsEksClusterVpcConfigToHclTerraform(struct?: DataAwsEksClusterVpcConfig): any;
export declare class DataAwsEksClusterVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksClusterVpcConfig | undefined;
    set internalValue(value: DataAwsEksClusterVpcConfig | undefined);
    get clusterSecurityGroupId(): string;
    get endpointPrivateAccess(): cdktf.IResolvable;
    get endpointPublicAccess(): cdktf.IResolvable;
    get publicAccessCidrs(): string[];
    get securityGroupIds(): string[];
    get subnetIds(): string[];
    get vpcId(): string;
}
export declare class DataAwsEksClusterVpcConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksClusterVpcConfigOutputReference;
}
export interface DataAwsEksClusterZonalShiftConfig {
}
export declare function dataAwsEksClusterZonalShiftConfigToTerraform(struct?: DataAwsEksClusterZonalShiftConfig): any;
export declare function dataAwsEksClusterZonalShiftConfigToHclTerraform(struct?: DataAwsEksClusterZonalShiftConfig): any;
export declare class DataAwsEksClusterZonalShiftConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksClusterZonalShiftConfig | undefined;
    set internalValue(value: DataAwsEksClusterZonalShiftConfig | undefined);
    get enabled(): cdktf.IResolvable;
}
export declare class DataAwsEksClusterZonalShiftConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksClusterZonalShiftConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eks_cluster aws_eks_cluster}
*/
export declare class DataAwsEksCluster extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_eks_cluster";
    /**
    * Generates CDKTF code for importing a DataAwsEksCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEksCluster to import
    * @param importFromId The id of the existing DataAwsEksCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eks_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEksCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eks_cluster aws_eks_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksClusterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEksClusterConfig);
    private _accessConfig;
    get accessConfig(): DataAwsEksClusterAccessConfigList;
    get arn(): string;
    private _certificateAuthority;
    get certificateAuthority(): DataAwsEksClusterCertificateAuthorityList;
    get clusterId(): string;
    private _computeConfig;
    get computeConfig(): DataAwsEksClusterComputeConfigList;
    get createdAt(): string;
    get enabledClusterLogTypes(): string[];
    get endpoint(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identity;
    get identity(): DataAwsEksClusterIdentityList;
    private _kubernetesNetworkConfig;
    get kubernetesNetworkConfig(): DataAwsEksClusterKubernetesNetworkConfigList;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _outpostConfig;
    get outpostConfig(): DataAwsEksClusterOutpostConfigList;
    get platformVersion(): string;
    private _remoteNetworkConfig;
    get remoteNetworkConfig(): DataAwsEksClusterRemoteNetworkConfigList;
    get roleArn(): string;
    get status(): string;
    private _storageConfig;
    get storageConfig(): DataAwsEksClusterStorageConfigList;
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
    private _upgradePolicy;
    get upgradePolicy(): DataAwsEksClusterUpgradePolicyList;
    get version(): string;
    private _vpcConfig;
    get vpcConfig(): DataAwsEksClusterVpcConfigList;
    private _zonalShiftConfig;
    get zonalShiftConfig(): DataAwsEksClusterZonalShiftConfigList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
