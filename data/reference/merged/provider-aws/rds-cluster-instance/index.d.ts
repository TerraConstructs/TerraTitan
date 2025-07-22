/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RdsClusterInstanceConfig extends cdktf.TerraformMetaArguments {
    /** (Optional) Specifies whether any database modifications are applied immediately, or during the next maintenance window. Default is`false`. */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /** (Optional) Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. Default `true`. */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /** (Optional, Computed, Forces new resource) EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) about the details. */
    readonly availabilityZone?: string;
    /** (Optional) Identifier of the CA certificate for the DB instance. */
    readonly caCertIdentifier?: string;
    /** (Required, Forces new resource) Identifier of the [`aws_rds_cluster`](/docs/providers/aws/r/rds_cluster.html) in which to launch this instance. */
    readonly clusterIdentifier: string;
    /** (Optional, boolean) Indicates whether to copy all of the user-defined tags from the DB instance to snapshots of the DB instance. Default `false`. */
    readonly copyTagsToSnapshot?: boolean | cdktf.IResolvable;
    /** (Optional) Instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. */
    readonly customIamInstanceProfile?: string;
    /** (Optional) Name of the DB parameter group to associate with this instance. */
    readonly dbParameterGroupName?: string;
    /** (Optional, Forces new resource) Specifies the DB subnet group to associate with this DB instance. The default behavior varies depending on whether `dbSubnetGroupName` is specified. Please refer to official [AWS documentation](https://docs.aws.amazon.com/cli/latest/reference/rds/create-db-instance.html) to understand how `dbSubnetGroupName` and `publiclyAccessible` parameters affect DB instance behaviour. **NOTE:** This must match the `dbSubnetGroupName` of the attached [`aws_rds_cluster`](/docs/providers/aws/r/rds_cluster.html). */
    readonly dbSubnetGroupName?: string;
    /** (Required, Forces new resource) Name of the database engine to be used for the RDS cluster instance. */
    readonly engine: string;
    /** (Optional) Database engine version. Please note that to upgrade the `engineVersion` of the instance, it must be done on the `aws_rds_cluster` `engineVersion`. Trying to upgrade in `aws_cluster_instance` will not update the `engineVersion`. */
    readonly engineVersion?: string;
    /** (Optional) Forces an instance to be destroyed when a part of a read replica cluster. **Note:** will promote the read replica to a standalone cluster before instance deletion. */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /** */
    readonly id?: string;
    /** (Optional, Forces new resource) Identifier for the RDS instance, if omitted, Terraform will assign a random, unique identifier. */
    readonly identifier?: string;
    /** (Optional, Forces new resource) Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`. */
    readonly identifierPrefix?: string;
    /** (Required) Instance class to use. For details on CPU and memory, see [Scaling Aurora DB Instances][4]. Aurora uses `db.*` instance classes/types. Please see [AWS Documentation][7] for currently available instance classes and complete details. For Aurora Serverless v2 use `db.serverless`. */
    readonly instanceClass: string;
    /** (Optional) Interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60. */
    readonly monitoringInterval?: number;
    /** (Optional) ARN for the IAM role that permits RDS to send enhanced monitoring metrics to CloudWatch Logs. You can find more information on the [AWS Documentation](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html) what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances. */
    readonly monitoringRoleArn?: string;
    /** (Optional) Specifies whether Performance Insights is enabled or not. **NOTE:** When Performance Insights is configured at the cluster level through `aws_rds_cluster`, this argument cannot be set to a value that conflicts with the cluster's configuration. */
    readonly performanceInsightsEnabled?: boolean | cdktf.IResolvable;
    /** (Optional) ARN for the KMS key to encrypt Performance Insights data. When specifying `performanceInsightsKmsKeyId`, `performanceInsightsEnabled` needs to be set to true. */
    readonly performanceInsightsKmsKeyId?: string;
    /** (Optional) Amount of time in days to retain Performance Insights data. Valid values are `7`, `731` (2 years) or a multiple of `31`. When specifying `performanceInsightsRetentionPeriod`, `performanceInsightsEnabled` needs to be set to true. Defaults to '7'. */
    readonly performanceInsightsRetentionPeriod?: number;
    /** (Optional) Daily time range during which automated backups are created if automated backups are enabled. Eg: "04:00-09:00". **NOTE:** If `preferredBackupWindow` is set at the cluster level, this argument **must** be omitted. */
    readonly preferredBackupWindow?: string;
    /** (Optional) Window to perform maintenance in. Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00". */
    readonly preferredMaintenanceWindow?: string;
    /** (Optional) Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoted to writer. */
    readonly promotionTier?: number;
    /** (Optional) Bool to control if instance is publicly accessible. Default `false`. See the documentation on [Creating DB Instances][6] for more details on controlling this property. */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /** (Optional) Map of tags to assign to the instance. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    readonly tags?: {
        [key: string]: string;
    };
    /** */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /** */
    readonly timeouts?: RdsClusterInstanceTimeouts;
}
export interface RdsClusterInstanceTimeouts {
    /** (Default `90m`) - `update` - (Default `90m`) - `delete` - (Default `90m`) */
    readonly create?: string;
    /** (Default `90m`) */
    readonly delete?: string;
    /** (Default `90m`) - `delete` - (Default `90m`) */
    readonly update?: string;
}
export declare function rdsClusterInstanceTimeoutsToTerraform(struct?: RdsClusterInstanceTimeouts | cdktf.IResolvable): any;
export declare function rdsClusterInstanceTimeoutsToHclTerraform(struct?: RdsClusterInstanceTimeouts | cdktf.IResolvable): any;
export declare class RdsClusterInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RdsClusterInstanceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RdsClusterInstanceTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_cluster_instance aws_rds_cluster_instance}
*/
export declare class RdsClusterInstance extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rds_cluster_instance";
    /**
    * Generates CDKTF code for importing a RdsClusterInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RdsClusterInstance to import
    * @param importFromId The id of the existing RdsClusterInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_cluster_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RdsClusterInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_cluster_instance aws_rds_cluster_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterInstanceConfig
    */
    constructor(scope: Construct, id: string, config: RdsClusterInstanceConfig);
    private _applyImmediately?;
    get applyImmediately(): boolean | cdktf.IResolvable;
    set applyImmediately(value: boolean | cdktf.IResolvable);
    resetApplyImmediately(): void;
    get applyImmediatelyInput(): boolean | cdktf.IResolvable | undefined;
    get arn(): string;
    private _autoMinorVersionUpgrade?;
    get autoMinorVersionUpgrade(): boolean | cdktf.IResolvable;
    set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable);
    resetAutoMinorVersionUpgrade(): void;
    get autoMinorVersionUpgradeInput(): boolean | cdktf.IResolvable | undefined;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _caCertIdentifier?;
    get caCertIdentifier(): string;
    set caCertIdentifier(value: string);
    resetCaCertIdentifier(): void;
    get caCertIdentifierInput(): string | undefined;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string | undefined;
    private _copyTagsToSnapshot?;
    get copyTagsToSnapshot(): boolean | cdktf.IResolvable;
    set copyTagsToSnapshot(value: boolean | cdktf.IResolvable);
    resetCopyTagsToSnapshot(): void;
    get copyTagsToSnapshotInput(): boolean | cdktf.IResolvable | undefined;
    private _customIamInstanceProfile?;
    get customIamInstanceProfile(): string;
    set customIamInstanceProfile(value: string);
    resetCustomIamInstanceProfile(): void;
    get customIamInstanceProfileInput(): string | undefined;
    private _dbParameterGroupName?;
    get dbParameterGroupName(): string;
    set dbParameterGroupName(value: string);
    resetDbParameterGroupName(): void;
    get dbParameterGroupNameInput(): string | undefined;
    private _dbSubnetGroupName?;
    get dbSubnetGroupName(): string;
    set dbSubnetGroupName(value: string);
    resetDbSubnetGroupName(): void;
    get dbSubnetGroupNameInput(): string | undefined;
    get dbiResourceId(): string;
    get endpoint(): string;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    get engineInput(): string | undefined;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string | undefined;
    get engineVersionActual(): string;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    resetIdentifier(): void;
    get identifierInput(): string | undefined;
    private _identifierPrefix?;
    get identifierPrefix(): string;
    set identifierPrefix(value: string);
    resetIdentifierPrefix(): void;
    get identifierPrefixInput(): string | undefined;
    private _instanceClass?;
    get instanceClass(): string;
    set instanceClass(value: string);
    get instanceClassInput(): string | undefined;
    get kmsKeyId(): string;
    private _monitoringInterval?;
    get monitoringInterval(): number;
    set monitoringInterval(value: number);
    resetMonitoringInterval(): void;
    get monitoringIntervalInput(): number | undefined;
    private _monitoringRoleArn?;
    get monitoringRoleArn(): string;
    set monitoringRoleArn(value: string);
    resetMonitoringRoleArn(): void;
    get monitoringRoleArnInput(): string | undefined;
    get networkType(): string;
    private _performanceInsightsEnabled?;
    get performanceInsightsEnabled(): boolean | cdktf.IResolvable;
    set performanceInsightsEnabled(value: boolean | cdktf.IResolvable);
    resetPerformanceInsightsEnabled(): void;
    get performanceInsightsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _performanceInsightsKmsKeyId?;
    get performanceInsightsKmsKeyId(): string;
    set performanceInsightsKmsKeyId(value: string);
    resetPerformanceInsightsKmsKeyId(): void;
    get performanceInsightsKmsKeyIdInput(): string | undefined;
    private _performanceInsightsRetentionPeriod?;
    get performanceInsightsRetentionPeriod(): number;
    set performanceInsightsRetentionPeriod(value: number);
    resetPerformanceInsightsRetentionPeriod(): void;
    get performanceInsightsRetentionPeriodInput(): number | undefined;
    get port(): number;
    private _preferredBackupWindow?;
    get preferredBackupWindow(): string;
    set preferredBackupWindow(value: string);
    resetPreferredBackupWindow(): void;
    get preferredBackupWindowInput(): string | undefined;
    private _preferredMaintenanceWindow?;
    get preferredMaintenanceWindow(): string;
    set preferredMaintenanceWindow(value: string);
    resetPreferredMaintenanceWindow(): void;
    get preferredMaintenanceWindowInput(): string | undefined;
    private _promotionTier?;
    get promotionTier(): number;
    set promotionTier(value: number);
    resetPromotionTier(): void;
    get promotionTierInput(): number | undefined;
    private _publiclyAccessible?;
    get publiclyAccessible(): boolean | cdktf.IResolvable;
    set publiclyAccessible(value: boolean | cdktf.IResolvable);
    resetPubliclyAccessible(): void;
    get publiclyAccessibleInput(): boolean | cdktf.IResolvable | undefined;
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
    get writer(): cdktf.IResolvable;
    private _timeouts;
    get timeouts(): RdsClusterInstanceTimeoutsOutputReference;
    putTimeouts(value: RdsClusterInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RdsClusterInstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
