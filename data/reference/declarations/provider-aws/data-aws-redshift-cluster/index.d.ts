/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRedshiftClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_cluster#cluster_identifier DataAwsRedshiftCluster#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_cluster#id DataAwsRedshiftCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_cluster#tags DataAwsRedshiftCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsRedshiftClusterClusterNodes {
}
export declare function dataAwsRedshiftClusterClusterNodesToTerraform(struct?: DataAwsRedshiftClusterClusterNodes): any;
export declare function dataAwsRedshiftClusterClusterNodesToHclTerraform(struct?: DataAwsRedshiftClusterClusterNodes): any;
export declare class DataAwsRedshiftClusterClusterNodesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRedshiftClusterClusterNodes | undefined;
    set internalValue(value: DataAwsRedshiftClusterClusterNodes | undefined);
    get nodeRole(): string;
    get privateIpAddress(): string;
    get publicIpAddress(): string;
}
export declare class DataAwsRedshiftClusterClusterNodesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsRedshiftClusterClusterNodesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_cluster aws_redshift_cluster}
*/
export declare class DataAwsRedshiftCluster extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_redshift_cluster";
    /**
    * Generates CDKTF code for importing a DataAwsRedshiftCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRedshiftCluster to import
    * @param importFromId The id of the existing DataAwsRedshiftCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRedshiftCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_cluster aws_redshift_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRedshiftClusterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRedshiftClusterConfig);
    get allowVersionUpgrade(): cdktf.IResolvable;
    get aquaConfigurationStatus(): string;
    get arn(): string;
    get automatedSnapshotRetentionPeriod(): number;
    get availabilityZone(): string;
    get availabilityZoneRelocationEnabled(): cdktf.IResolvable;
    get bucketName(): string;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string | undefined;
    get clusterNamespaceArn(): string;
    private _clusterNodes;
    get clusterNodes(): DataAwsRedshiftClusterClusterNodesList;
    get clusterParameterGroupName(): string;
    get clusterPublicKey(): string;
    get clusterRevisionNumber(): string;
    get clusterSubnetGroupName(): string;
    get clusterType(): string;
    get clusterVersion(): string;
    get databaseName(): string;
    get defaultIamRoleArn(): string;
    get elasticIp(): string;
    get enableLogging(): cdktf.IResolvable;
    get encrypted(): cdktf.IResolvable;
    get endpoint(): string;
    get enhancedVpcRouting(): cdktf.IResolvable;
    get iamRoles(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get kmsKeyId(): string;
    get logDestinationType(): string;
    get logExports(): string[];
    get maintenanceTrackName(): string;
    get manualSnapshotRetentionPeriod(): number;
    get masterUsername(): string;
    get multiAz(): cdktf.IResolvable;
    get nodeType(): string;
    get numberOfNodes(): number;
    get port(): number;
    get preferredMaintenanceWindow(): string;
    get publiclyAccessible(): cdktf.IResolvable;
    get s3KeyPrefix(): string;
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
    get vpcId(): string;
    get vpcSecurityGroupIds(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
