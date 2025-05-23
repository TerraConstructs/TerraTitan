/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCloudhsmV2ClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudhsm_v2_cluster#cluster_id DataAwsCloudhsmV2Cluster#cluster_id}
    */
    readonly clusterId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudhsm_v2_cluster#cluster_state DataAwsCloudhsmV2Cluster#cluster_state}
    */
    readonly clusterState?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudhsm_v2_cluster#id DataAwsCloudhsmV2Cluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export interface DataAwsCloudhsmV2ClusterClusterCertificates {
}
export declare function dataAwsCloudhsmV2ClusterClusterCertificatesToTerraform(struct?: DataAwsCloudhsmV2ClusterClusterCertificates): any;
export declare function dataAwsCloudhsmV2ClusterClusterCertificatesToHclTerraform(struct?: DataAwsCloudhsmV2ClusterClusterCertificates): any;
export declare class DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudhsmV2ClusterClusterCertificates | undefined;
    set internalValue(value: DataAwsCloudhsmV2ClusterClusterCertificates | undefined);
    get awsHardwareCertificate(): string;
    get clusterCertificate(): string;
    get clusterCsr(): string;
    get hsmCertificate(): string;
    get manufacturerHardwareCertificate(): string;
}
export declare class DataAwsCloudhsmV2ClusterClusterCertificatesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudhsm_v2_cluster aws_cloudhsm_v2_cluster}
*/
export declare class DataAwsCloudhsmV2Cluster extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_cloudhsm_v2_cluster";
    /**
    * Generates CDKTF code for importing a DataAwsCloudhsmV2Cluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCloudhsmV2Cluster to import
    * @param importFromId The id of the existing DataAwsCloudhsmV2Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudhsm_v2_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCloudhsmV2Cluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudhsm_v2_cluster aws_cloudhsm_v2_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudhsmV2ClusterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCloudhsmV2ClusterConfig);
    private _clusterCertificates;
    get clusterCertificates(): DataAwsCloudhsmV2ClusterClusterCertificatesList;
    private _clusterId?;
    get clusterId(): string;
    set clusterId(value: string);
    get clusterIdInput(): string | undefined;
    private _clusterState?;
    get clusterState(): string;
    set clusterState(value: string);
    resetClusterState(): void;
    get clusterStateInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get securityGroupId(): string;
    get subnetIds(): string[];
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
