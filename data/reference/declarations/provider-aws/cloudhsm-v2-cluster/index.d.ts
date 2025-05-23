/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudhsmV2ClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_cluster#hsm_type CloudhsmV2Cluster#hsm_type}
    */
    readonly hsmType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_cluster#id CloudhsmV2Cluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_cluster#mode CloudhsmV2Cluster#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_cluster#source_backup_identifier CloudhsmV2Cluster#source_backup_identifier}
    */
    readonly sourceBackupIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_cluster#subnet_ids CloudhsmV2Cluster#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_cluster#tags CloudhsmV2Cluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_cluster#tags_all CloudhsmV2Cluster#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_cluster#timeouts CloudhsmV2Cluster#timeouts}
    */
    readonly timeouts?: CloudhsmV2ClusterTimeouts;
}
export interface CloudhsmV2ClusterClusterCertificates {
}
export declare function cloudhsmV2ClusterClusterCertificatesToTerraform(struct?: CloudhsmV2ClusterClusterCertificates): any;
export declare function cloudhsmV2ClusterClusterCertificatesToHclTerraform(struct?: CloudhsmV2ClusterClusterCertificates): any;
export declare class CloudhsmV2ClusterClusterCertificatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudhsmV2ClusterClusterCertificates | undefined;
    set internalValue(value: CloudhsmV2ClusterClusterCertificates | undefined);
    get awsHardwareCertificate(): string;
    get clusterCertificate(): string;
    get clusterCsr(): string;
    get hsmCertificate(): string;
    get manufacturerHardwareCertificate(): string;
}
export declare class CloudhsmV2ClusterClusterCertificatesList extends cdktf.ComplexList {
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
    get(index: number): CloudhsmV2ClusterClusterCertificatesOutputReference;
}
export interface CloudhsmV2ClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_cluster#create CloudhsmV2Cluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_cluster#delete CloudhsmV2Cluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_cluster#update CloudhsmV2Cluster#update}
    */
    readonly update?: string;
}
export declare function cloudhsmV2ClusterTimeoutsToTerraform(struct?: CloudhsmV2ClusterTimeouts | cdktf.IResolvable): any;
export declare function cloudhsmV2ClusterTimeoutsToHclTerraform(struct?: CloudhsmV2ClusterTimeouts | cdktf.IResolvable): any;
export declare class CloudhsmV2ClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudhsmV2ClusterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CloudhsmV2ClusterTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_cluster aws_cloudhsm_v2_cluster}
*/
export declare class CloudhsmV2Cluster extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudhsm_v2_cluster";
    /**
    * Generates CDKTF code for importing a CloudhsmV2Cluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudhsmV2Cluster to import
    * @param importFromId The id of the existing CloudhsmV2Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudhsmV2Cluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_cluster aws_cloudhsm_v2_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudhsmV2ClusterConfig
    */
    constructor(scope: Construct, id: string, config: CloudhsmV2ClusterConfig);
    private _clusterCertificates;
    get clusterCertificates(): CloudhsmV2ClusterClusterCertificatesList;
    get clusterId(): string;
    get clusterState(): string;
    private _hsmType?;
    get hsmType(): string;
    set hsmType(value: string);
    get hsmTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string | undefined;
    get securityGroupId(): string;
    private _sourceBackupIdentifier?;
    get sourceBackupIdentifier(): string;
    set sourceBackupIdentifier(value: string);
    resetSourceBackupIdentifier(): void;
    get sourceBackupIdentifierInput(): string | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
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
    get vpcId(): string;
    private _timeouts;
    get timeouts(): CloudhsmV2ClusterTimeoutsOutputReference;
    putTimeouts(value: CloudhsmV2ClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CloudhsmV2ClusterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
