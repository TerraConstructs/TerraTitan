/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRdsClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_cluster#cluster_identifier DataAwsRdsCluster#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_cluster#id DataAwsRdsCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_cluster#tags DataAwsRdsCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsRdsClusterMasterUserSecret {
}
export declare function dataAwsRdsClusterMasterUserSecretToTerraform(struct?: DataAwsRdsClusterMasterUserSecret): any;
export declare function dataAwsRdsClusterMasterUserSecretToHclTerraform(struct?: DataAwsRdsClusterMasterUserSecret): any;
export declare class DataAwsRdsClusterMasterUserSecretOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRdsClusterMasterUserSecret | undefined;
    set internalValue(value: DataAwsRdsClusterMasterUserSecret | undefined);
    get kmsKeyId(): string;
    get secretArn(): string;
    get secretStatus(): string;
}
export declare class DataAwsRdsClusterMasterUserSecretList extends cdktf.ComplexList {
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
    get(index: number): DataAwsRdsClusterMasterUserSecretOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_cluster aws_rds_cluster}
*/
export declare class DataAwsRdsCluster extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_rds_cluster";
    /**
    * Generates CDKTF code for importing a DataAwsRdsCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRdsCluster to import
    * @param importFromId The id of the existing DataAwsRdsCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRdsCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_cluster aws_rds_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsClusterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRdsClusterConfig);
    get arn(): string;
    get availabilityZones(): string[];
    get backtrackWindow(): number;
    get backupRetentionPeriod(): number;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string | undefined;
    get clusterMembers(): string[];
    get clusterResourceId(): string;
    get databaseName(): string;
    get dbClusterParameterGroupName(): string;
    get dbSubnetGroupName(): string;
    get dbSystemId(): string;
    get enabledCloudwatchLogsExports(): string[];
    get endpoint(): string;
    get engine(): string;
    get engineMode(): string;
    get engineVersion(): string;
    get finalSnapshotIdentifier(): string;
    get hostedZoneId(): string;
    get iamDatabaseAuthenticationEnabled(): cdktf.IResolvable;
    get iamRoles(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get kmsKeyId(): string;
    private _masterUserSecret;
    get masterUserSecret(): DataAwsRdsClusterMasterUserSecretList;
    get masterUsername(): string;
    get monitoringInterval(): number;
    get monitoringRoleArn(): string;
    get networkType(): string;
    get port(): number;
    get preferredBackupWindow(): string;
    get preferredMaintenanceWindow(): string;
    get readerEndpoint(): string;
    get replicationSourceIdentifier(): string;
    get storageEncrypted(): cdktf.IResolvable;
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
    get vpcSecurityGroupIds(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
