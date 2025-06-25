/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsMskClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/msk_cluster#cluster_name DataAwsMskCluster#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/msk_cluster#id DataAwsMskCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/msk_cluster#tags DataAwsMskCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess {
}
export declare function dataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessToTerraform(struct?: DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess): any;
export declare function dataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessToHclTerraform(struct?: DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess): any;
export declare class DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess | undefined;
    set internalValue(value: DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess | undefined);
    get type(): string;
}
export declare class DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference;
}
export interface DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl {
}
export declare function dataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslToTerraform(struct?: DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl): any;
export declare function dataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslToHclTerraform(struct?: DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl): any;
export declare class DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl | undefined;
    set internalValue(value: DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl | undefined);
    get iam(): cdktf.IResolvable;
    get scram(): cdktf.IResolvable;
}
export declare class DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference;
}
export interface DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication {
}
export declare function dataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationToTerraform(struct?: DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication): any;
export declare function dataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationToHclTerraform(struct?: DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication): any;
export declare class DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication | undefined;
    set internalValue(value: DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication | undefined);
    private _sasl;
    get sasl(): DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList;
    get tls(): cdktf.IResolvable;
}
export declare class DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference;
}
export interface DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity {
}
export declare function dataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityToTerraform(struct?: DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity): any;
export declare function dataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityToHclTerraform(struct?: DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity): any;
export declare class DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity | undefined;
    set internalValue(value: DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity | undefined);
    private _clientAuthentication;
    get clientAuthentication(): DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList;
}
export declare class DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference;
}
export interface DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfo {
}
export declare function dataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoToTerraform(struct?: DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfo): any;
export declare function dataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoToHclTerraform(struct?: DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfo): any;
export declare class DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfo | undefined;
    set internalValue(value: DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfo | undefined);
    private _publicAccess;
    get publicAccess(): DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList;
    private _vpcConnectivity;
    get vpcConnectivity(): DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList;
}
export declare class DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference;
}
export interface DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput {
}
export declare function dataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputToTerraform(struct?: DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput): any;
export declare function dataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputToHclTerraform(struct?: DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput): any;
export declare class DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput | undefined;
    set internalValue(value: DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput | undefined);
    get enabled(): cdktf.IResolvable;
    get volumeThroughput(): number;
}
export declare class DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference;
}
export interface DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo {
}
export declare function dataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoToTerraform(struct?: DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo): any;
export declare function dataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoToHclTerraform(struct?: DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo): any;
export declare class DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo | undefined;
    set internalValue(value: DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo | undefined);
    private _provisionedThroughput;
    get provisionedThroughput(): DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList;
    get volumeSize(): number;
}
export declare class DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference;
}
export interface DataAwsMskClusterBrokerNodeGroupInfoStorageInfo {
}
export declare function dataAwsMskClusterBrokerNodeGroupInfoStorageInfoToTerraform(struct?: DataAwsMskClusterBrokerNodeGroupInfoStorageInfo): any;
export declare function dataAwsMskClusterBrokerNodeGroupInfoStorageInfoToHclTerraform(struct?: DataAwsMskClusterBrokerNodeGroupInfoStorageInfo): any;
export declare class DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMskClusterBrokerNodeGroupInfoStorageInfo | undefined;
    set internalValue(value: DataAwsMskClusterBrokerNodeGroupInfoStorageInfo | undefined);
    private _ebsStorageInfo;
    get ebsStorageInfo(): DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList;
}
export declare class DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference;
}
export interface DataAwsMskClusterBrokerNodeGroupInfo {
}
export declare function dataAwsMskClusterBrokerNodeGroupInfoToTerraform(struct?: DataAwsMskClusterBrokerNodeGroupInfo): any;
export declare function dataAwsMskClusterBrokerNodeGroupInfoToHclTerraform(struct?: DataAwsMskClusterBrokerNodeGroupInfo): any;
export declare class DataAwsMskClusterBrokerNodeGroupInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMskClusterBrokerNodeGroupInfo | undefined;
    set internalValue(value: DataAwsMskClusterBrokerNodeGroupInfo | undefined);
    get azDistribution(): string;
    get clientSubnets(): string[];
    private _connectivityInfo;
    get connectivityInfo(): DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList;
    get instanceType(): string;
    get securityGroups(): string[];
    private _storageInfo;
    get storageInfo(): DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList;
}
export declare class DataAwsMskClusterBrokerNodeGroupInfoList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMskClusterBrokerNodeGroupInfoOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/msk_cluster aws_msk_cluster}
*/
export declare class DataAwsMskCluster extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_msk_cluster";
    /**
    * Generates CDKTF code for importing a DataAwsMskCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsMskCluster to import
    * @param importFromId The id of the existing DataAwsMskCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/msk_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsMskCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/msk_cluster aws_msk_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskClusterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsMskClusterConfig);
    get arn(): string;
    get bootstrapBrokers(): string;
    get bootstrapBrokersPublicSaslIam(): string;
    get bootstrapBrokersPublicSaslScram(): string;
    get bootstrapBrokersPublicTls(): string;
    get bootstrapBrokersSaslIam(): string;
    get bootstrapBrokersSaslScram(): string;
    get bootstrapBrokersTls(): string;
    private _brokerNodeGroupInfo;
    get brokerNodeGroupInfo(): DataAwsMskClusterBrokerNodeGroupInfoList;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string | undefined;
    get clusterUuid(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get kafkaVersion(): string;
    get numberOfBrokerNodes(): number;
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
    get zookeeperConnectString(): string;
    get zookeeperConnectStringTls(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
