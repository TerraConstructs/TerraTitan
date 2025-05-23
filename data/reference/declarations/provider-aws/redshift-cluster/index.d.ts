/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}
    */
    readonly allowVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#apply_immediately RedshiftCluster#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}
    */
    readonly aquaConfigurationStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}
    */
    readonly automatedSnapshotRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#availability_zone RedshiftCluster#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#availability_zone_relocation_enabled RedshiftCluster#availability_zone_relocation_enabled}
    */
    readonly availabilityZoneRelocationEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}
    */
    readonly clusterParameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#cluster_public_key RedshiftCluster#cluster_public_key}
    */
    readonly clusterPublicKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#cluster_revision_number RedshiftCluster#cluster_revision_number}
    */
    readonly clusterRevisionNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}
    */
    readonly clusterSubnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#cluster_type RedshiftCluster#cluster_type}
    */
    readonly clusterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#cluster_version RedshiftCluster#cluster_version}
    */
    readonly clusterVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#database_name RedshiftCluster#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#default_iam_role_arn RedshiftCluster#default_iam_role_arn}
    */
    readonly defaultIamRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}
    */
    readonly elasticIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#encrypted RedshiftCluster#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#endpoint RedshiftCluster#endpoint}
    */
    readonly endpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}
    */
    readonly enhancedVpcRouting?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#final_snapshot_identifier RedshiftCluster#final_snapshot_identifier}
    */
    readonly finalSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#iam_roles RedshiftCluster#iam_roles}
    */
    readonly iamRoles?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#id RedshiftCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}
    */
    readonly maintenanceTrackName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#manage_master_password RedshiftCluster#manage_master_password}
    */
    readonly manageMasterPassword?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}
    */
    readonly manualSnapshotRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#master_password RedshiftCluster#master_password}
    */
    readonly masterPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#master_password_secret_kms_key_id RedshiftCluster#master_password_secret_kms_key_id}
    */
    readonly masterPasswordSecretKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#master_password_wo RedshiftCluster#master_password_wo}
    */
    readonly masterPasswordWo?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#master_password_wo_version RedshiftCluster#master_password_wo_version}
    */
    readonly masterPasswordWoVersion?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#master_username RedshiftCluster#master_username}
    */
    readonly masterUsername?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#multi_az RedshiftCluster#multi_az}
    */
    readonly multiAz?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#node_type RedshiftCluster#node_type}
    */
    readonly nodeType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}
    */
    readonly numberOfNodes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}
    */
    readonly ownerAccount?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#port RedshiftCluster#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#skip_final_snapshot RedshiftCluster#skip_final_snapshot}
    */
    readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#snapshot_arn RedshiftCluster#snapshot_arn}
    */
    readonly snapshotArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}
    */
    readonly snapshotClusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}
    */
    readonly snapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#tags RedshiftCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#tags_all RedshiftCluster#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * logging block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#logging RedshiftCluster#logging}
    */
    readonly logging?: RedshiftClusterLogging;
    /**
    * snapshot_copy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#snapshot_copy RedshiftCluster#snapshot_copy}
    */
    readonly snapshotCopy?: RedshiftClusterSnapshotCopy;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#timeouts RedshiftCluster#timeouts}
    */
    readonly timeouts?: RedshiftClusterTimeouts;
}
export interface RedshiftClusterClusterNodes {
}
export declare function redshiftClusterClusterNodesToTerraform(struct?: RedshiftClusterClusterNodes): any;
export declare function redshiftClusterClusterNodesToHclTerraform(struct?: RedshiftClusterClusterNodes): any;
export declare class RedshiftClusterClusterNodesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RedshiftClusterClusterNodes | undefined;
    set internalValue(value: RedshiftClusterClusterNodes | undefined);
    get nodeRole(): string;
    get privateIpAddress(): string;
    get publicIpAddress(): string;
}
export declare class RedshiftClusterClusterNodesList extends cdktf.ComplexList {
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
    get(index: number): RedshiftClusterClusterNodesOutputReference;
}
export interface RedshiftClusterLogging {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#bucket_name RedshiftCluster#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#enable RedshiftCluster#enable}
    */
    readonly enable: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#log_destination_type RedshiftCluster#log_destination_type}
    */
    readonly logDestinationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#log_exports RedshiftCluster#log_exports}
    */
    readonly logExports?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#s3_key_prefix RedshiftCluster#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
}
export declare function redshiftClusterLoggingToTerraform(struct?: RedshiftClusterLoggingOutputReference | RedshiftClusterLogging): any;
export declare function redshiftClusterLoggingToHclTerraform(struct?: RedshiftClusterLoggingOutputReference | RedshiftClusterLogging): any;
export declare class RedshiftClusterLoggingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RedshiftClusterLogging | undefined;
    set internalValue(value: RedshiftClusterLogging | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _enable?;
    get enable(): boolean | cdktf.IResolvable;
    set enable(value: boolean | cdktf.IResolvable);
    get enableInput(): boolean | cdktf.IResolvable | undefined;
    private _logDestinationType?;
    get logDestinationType(): string;
    set logDestinationType(value: string);
    resetLogDestinationType(): void;
    get logDestinationTypeInput(): string | undefined;
    private _logExports?;
    get logExports(): string[];
    set logExports(value: string[]);
    resetLogExports(): void;
    get logExportsInput(): string[] | undefined;
    private _s3KeyPrefix?;
    get s3KeyPrefix(): string;
    set s3KeyPrefix(value: string);
    resetS3KeyPrefix(): void;
    get s3KeyPrefixInput(): string | undefined;
}
export interface RedshiftClusterSnapshotCopy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#destination_region RedshiftCluster#destination_region}
    */
    readonly destinationRegion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#grant_name RedshiftCluster#grant_name}
    */
    readonly grantName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#retention_period RedshiftCluster#retention_period}
    */
    readonly retentionPeriod?: number;
}
export declare function redshiftClusterSnapshotCopyToTerraform(struct?: RedshiftClusterSnapshotCopyOutputReference | RedshiftClusterSnapshotCopy): any;
export declare function redshiftClusterSnapshotCopyToHclTerraform(struct?: RedshiftClusterSnapshotCopyOutputReference | RedshiftClusterSnapshotCopy): any;
export declare class RedshiftClusterSnapshotCopyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RedshiftClusterSnapshotCopy | undefined;
    set internalValue(value: RedshiftClusterSnapshotCopy | undefined);
    private _destinationRegion?;
    get destinationRegion(): string;
    set destinationRegion(value: string);
    get destinationRegionInput(): string | undefined;
    private _grantName?;
    get grantName(): string;
    set grantName(value: string);
    resetGrantName(): void;
    get grantNameInput(): string | undefined;
    private _retentionPeriod?;
    get retentionPeriod(): number;
    set retentionPeriod(value: number);
    resetRetentionPeriod(): void;
    get retentionPeriodInput(): number | undefined;
}
export interface RedshiftClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#create RedshiftCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#delete RedshiftCluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#update RedshiftCluster#update}
    */
    readonly update?: string;
}
export declare function redshiftClusterTimeoutsToTerraform(struct?: RedshiftClusterTimeouts | cdktf.IResolvable): any;
export declare function redshiftClusterTimeoutsToHclTerraform(struct?: RedshiftClusterTimeouts | cdktf.IResolvable): any;
export declare class RedshiftClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RedshiftClusterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RedshiftClusterTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster aws_redshift_cluster}
*/
export declare class RedshiftCluster extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_redshift_cluster";
    /**
    * Generates CDKTF code for importing a RedshiftCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RedshiftCluster to import
    * @param importFromId The id of the existing RedshiftCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RedshiftCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_cluster aws_redshift_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftClusterConfig
    */
    constructor(scope: Construct, id: string, config: RedshiftClusterConfig);
    private _allowVersionUpgrade?;
    get allowVersionUpgrade(): boolean | cdktf.IResolvable;
    set allowVersionUpgrade(value: boolean | cdktf.IResolvable);
    resetAllowVersionUpgrade(): void;
    get allowVersionUpgradeInput(): boolean | cdktf.IResolvable | undefined;
    private _applyImmediately?;
    get applyImmediately(): boolean | cdktf.IResolvable;
    set applyImmediately(value: boolean | cdktf.IResolvable);
    resetApplyImmediately(): void;
    get applyImmediatelyInput(): boolean | cdktf.IResolvable | undefined;
    private _aquaConfigurationStatus?;
    get aquaConfigurationStatus(): string;
    set aquaConfigurationStatus(value: string);
    resetAquaConfigurationStatus(): void;
    get aquaConfigurationStatusInput(): string | undefined;
    get arn(): string;
    private _automatedSnapshotRetentionPeriod?;
    get automatedSnapshotRetentionPeriod(): number;
    set automatedSnapshotRetentionPeriod(value: number);
    resetAutomatedSnapshotRetentionPeriod(): void;
    get automatedSnapshotRetentionPeriodInput(): number | undefined;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _availabilityZoneRelocationEnabled?;
    get availabilityZoneRelocationEnabled(): boolean | cdktf.IResolvable;
    set availabilityZoneRelocationEnabled(value: boolean | cdktf.IResolvable);
    resetAvailabilityZoneRelocationEnabled(): void;
    get availabilityZoneRelocationEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string | undefined;
    get clusterNamespaceArn(): string;
    private _clusterNodes;
    get clusterNodes(): RedshiftClusterClusterNodesList;
    private _clusterParameterGroupName?;
    get clusterParameterGroupName(): string;
    set clusterParameterGroupName(value: string);
    resetClusterParameterGroupName(): void;
    get clusterParameterGroupNameInput(): string | undefined;
    private _clusterPublicKey?;
    get clusterPublicKey(): string;
    set clusterPublicKey(value: string);
    resetClusterPublicKey(): void;
    get clusterPublicKeyInput(): string | undefined;
    private _clusterRevisionNumber?;
    get clusterRevisionNumber(): string;
    set clusterRevisionNumber(value: string);
    resetClusterRevisionNumber(): void;
    get clusterRevisionNumberInput(): string | undefined;
    private _clusterSubnetGroupName?;
    get clusterSubnetGroupName(): string;
    set clusterSubnetGroupName(value: string);
    resetClusterSubnetGroupName(): void;
    get clusterSubnetGroupNameInput(): string | undefined;
    private _clusterType?;
    get clusterType(): string;
    set clusterType(value: string);
    resetClusterType(): void;
    get clusterTypeInput(): string | undefined;
    private _clusterVersion?;
    get clusterVersion(): string;
    set clusterVersion(value: string);
    resetClusterVersion(): void;
    get clusterVersionInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    resetDatabaseName(): void;
    get databaseNameInput(): string | undefined;
    private _defaultIamRoleArn?;
    get defaultIamRoleArn(): string;
    set defaultIamRoleArn(value: string);
    resetDefaultIamRoleArn(): void;
    get defaultIamRoleArnInput(): string | undefined;
    get dnsName(): string;
    private _elasticIp?;
    get elasticIp(): string;
    set elasticIp(value: string);
    resetElasticIp(): void;
    get elasticIpInput(): string | undefined;
    private _encrypted?;
    get encrypted(): boolean | cdktf.IResolvable;
    set encrypted(value: boolean | cdktf.IResolvable);
    resetEncrypted(): void;
    get encryptedInput(): boolean | cdktf.IResolvable | undefined;
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    resetEndpoint(): void;
    get endpointInput(): string | undefined;
    private _enhancedVpcRouting?;
    get enhancedVpcRouting(): boolean | cdktf.IResolvable;
    set enhancedVpcRouting(value: boolean | cdktf.IResolvable);
    resetEnhancedVpcRouting(): void;
    get enhancedVpcRoutingInput(): boolean | cdktf.IResolvable | undefined;
    private _finalSnapshotIdentifier?;
    get finalSnapshotIdentifier(): string;
    set finalSnapshotIdentifier(value: string);
    resetFinalSnapshotIdentifier(): void;
    get finalSnapshotIdentifierInput(): string | undefined;
    private _iamRoles?;
    get iamRoles(): string[];
    set iamRoles(value: string[]);
    resetIamRoles(): void;
    get iamRolesInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _maintenanceTrackName?;
    get maintenanceTrackName(): string;
    set maintenanceTrackName(value: string);
    resetMaintenanceTrackName(): void;
    get maintenanceTrackNameInput(): string | undefined;
    private _manageMasterPassword?;
    get manageMasterPassword(): boolean | cdktf.IResolvable;
    set manageMasterPassword(value: boolean | cdktf.IResolvable);
    resetManageMasterPassword(): void;
    get manageMasterPasswordInput(): boolean | cdktf.IResolvable | undefined;
    private _manualSnapshotRetentionPeriod?;
    get manualSnapshotRetentionPeriod(): number;
    set manualSnapshotRetentionPeriod(value: number);
    resetManualSnapshotRetentionPeriod(): void;
    get manualSnapshotRetentionPeriodInput(): number | undefined;
    private _masterPassword?;
    get masterPassword(): string;
    set masterPassword(value: string);
    resetMasterPassword(): void;
    get masterPasswordInput(): string | undefined;
    get masterPasswordSecretArn(): string;
    private _masterPasswordSecretKmsKeyId?;
    get masterPasswordSecretKmsKeyId(): string;
    set masterPasswordSecretKmsKeyId(value: string);
    resetMasterPasswordSecretKmsKeyId(): void;
    get masterPasswordSecretKmsKeyIdInput(): string | undefined;
    private _masterPasswordWo?;
    get masterPasswordWo(): string;
    set masterPasswordWo(value: string);
    resetMasterPasswordWo(): void;
    get masterPasswordWoInput(): string | undefined;
    private _masterPasswordWoVersion?;
    get masterPasswordWoVersion(): number;
    set masterPasswordWoVersion(value: number);
    resetMasterPasswordWoVersion(): void;
    get masterPasswordWoVersionInput(): number | undefined;
    private _masterUsername?;
    get masterUsername(): string;
    set masterUsername(value: string);
    resetMasterUsername(): void;
    get masterUsernameInput(): string | undefined;
    private _multiAz?;
    get multiAz(): boolean | cdktf.IResolvable;
    set multiAz(value: boolean | cdktf.IResolvable);
    resetMultiAz(): void;
    get multiAzInput(): boolean | cdktf.IResolvable | undefined;
    private _nodeType?;
    get nodeType(): string;
    set nodeType(value: string);
    get nodeTypeInput(): string | undefined;
    private _numberOfNodes?;
    get numberOfNodes(): number;
    set numberOfNodes(value: number);
    resetNumberOfNodes(): void;
    get numberOfNodesInput(): number | undefined;
    private _ownerAccount?;
    get ownerAccount(): string;
    set ownerAccount(value: string);
    resetOwnerAccount(): void;
    get ownerAccountInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _preferredMaintenanceWindow?;
    get preferredMaintenanceWindow(): string;
    set preferredMaintenanceWindow(value: string);
    resetPreferredMaintenanceWindow(): void;
    get preferredMaintenanceWindowInput(): string | undefined;
    private _publiclyAccessible?;
    get publiclyAccessible(): boolean | cdktf.IResolvable;
    set publiclyAccessible(value: boolean | cdktf.IResolvable);
    resetPubliclyAccessible(): void;
    get publiclyAccessibleInput(): boolean | cdktf.IResolvable | undefined;
    private _skipFinalSnapshot?;
    get skipFinalSnapshot(): boolean | cdktf.IResolvable;
    set skipFinalSnapshot(value: boolean | cdktf.IResolvable);
    resetSkipFinalSnapshot(): void;
    get skipFinalSnapshotInput(): boolean | cdktf.IResolvable | undefined;
    private _snapshotArn?;
    get snapshotArn(): string;
    set snapshotArn(value: string);
    resetSnapshotArn(): void;
    get snapshotArnInput(): string | undefined;
    private _snapshotClusterIdentifier?;
    get snapshotClusterIdentifier(): string;
    set snapshotClusterIdentifier(value: string);
    resetSnapshotClusterIdentifier(): void;
    get snapshotClusterIdentifierInput(): string | undefined;
    private _snapshotIdentifier?;
    get snapshotIdentifier(): string;
    set snapshotIdentifier(value: string);
    resetSnapshotIdentifier(): void;
    get snapshotIdentifierInput(): string | undefined;
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
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[] | undefined;
    private _logging;
    get logging(): RedshiftClusterLoggingOutputReference;
    putLogging(value: RedshiftClusterLogging): void;
    resetLogging(): void;
    get loggingInput(): RedshiftClusterLogging | undefined;
    private _snapshotCopy;
    get snapshotCopy(): RedshiftClusterSnapshotCopyOutputReference;
    putSnapshotCopy(value: RedshiftClusterSnapshotCopy): void;
    resetSnapshotCopy(): void;
    get snapshotCopyInput(): RedshiftClusterSnapshotCopy | undefined;
    private _timeouts;
    get timeouts(): RedshiftClusterTimeoutsOutputReference;
    putTimeouts(value: RedshiftClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RedshiftClusterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
