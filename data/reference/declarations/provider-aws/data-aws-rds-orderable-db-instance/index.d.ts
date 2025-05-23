/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRdsOrderableDbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#availability_zone_group DataAwsRdsOrderableDbInstance#availability_zone_group}
    */
    readonly availabilityZoneGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#engine DataAwsRdsOrderableDbInstance#engine}
    */
    readonly engine: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#engine_latest_version DataAwsRdsOrderableDbInstance#engine_latest_version}
    */
    readonly engineLatestVersion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#engine_version DataAwsRdsOrderableDbInstance#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#id DataAwsRdsOrderableDbInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#instance_class DataAwsRdsOrderableDbInstance#instance_class}
    */
    readonly instanceClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#license_model DataAwsRdsOrderableDbInstance#license_model}
    */
    readonly licenseModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#preferred_engine_versions DataAwsRdsOrderableDbInstance#preferred_engine_versions}
    */
    readonly preferredEngineVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#preferred_instance_classes DataAwsRdsOrderableDbInstance#preferred_instance_classes}
    */
    readonly preferredInstanceClasses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#read_replica_capable DataAwsRdsOrderableDbInstance#read_replica_capable}
    */
    readonly readReplicaCapable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#storage_type DataAwsRdsOrderableDbInstance#storage_type}
    */
    readonly storageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#supported_engine_modes DataAwsRdsOrderableDbInstance#supported_engine_modes}
    */
    readonly supportedEngineModes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#supported_network_types DataAwsRdsOrderableDbInstance#supported_network_types}
    */
    readonly supportedNetworkTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#supports_clusters DataAwsRdsOrderableDbInstance#supports_clusters}
    */
    readonly supportsClusters?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#supports_enhanced_monitoring DataAwsRdsOrderableDbInstance#supports_enhanced_monitoring}
    */
    readonly supportsEnhancedMonitoring?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#supports_global_databases DataAwsRdsOrderableDbInstance#supports_global_databases}
    */
    readonly supportsGlobalDatabases?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#supports_iam_database_authentication DataAwsRdsOrderableDbInstance#supports_iam_database_authentication}
    */
    readonly supportsIamDatabaseAuthentication?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#supports_iops DataAwsRdsOrderableDbInstance#supports_iops}
    */
    readonly supportsIops?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#supports_kerberos_authentication DataAwsRdsOrderableDbInstance#supports_kerberos_authentication}
    */
    readonly supportsKerberosAuthentication?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#supports_multi_az DataAwsRdsOrderableDbInstance#supports_multi_az}
    */
    readonly supportsMultiAz?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#supports_performance_insights DataAwsRdsOrderableDbInstance#supports_performance_insights}
    */
    readonly supportsPerformanceInsights?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#supports_storage_autoscaling DataAwsRdsOrderableDbInstance#supports_storage_autoscaling}
    */
    readonly supportsStorageAutoscaling?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#supports_storage_encryption DataAwsRdsOrderableDbInstance#supports_storage_encryption}
    */
    readonly supportsStorageEncryption?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#vpc DataAwsRdsOrderableDbInstance#vpc}
    */
    readonly vpc?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance aws_rds_orderable_db_instance}
*/
export declare class DataAwsRdsOrderableDbInstance extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_rds_orderable_db_instance";
    /**
    * Generates CDKTF code for importing a DataAwsRdsOrderableDbInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRdsOrderableDbInstance to import
    * @param importFromId The id of the existing DataAwsRdsOrderableDbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRdsOrderableDbInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_orderable_db_instance aws_rds_orderable_db_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsOrderableDbInstanceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRdsOrderableDbInstanceConfig);
    private _availabilityZoneGroup?;
    get availabilityZoneGroup(): string;
    set availabilityZoneGroup(value: string);
    resetAvailabilityZoneGroup(): void;
    get availabilityZoneGroupInput(): string | undefined;
    get availabilityZones(): string[];
    private _engine?;
    get engine(): string;
    set engine(value: string);
    get engineInput(): string | undefined;
    private _engineLatestVersion?;
    get engineLatestVersion(): boolean | cdktf.IResolvable;
    set engineLatestVersion(value: boolean | cdktf.IResolvable);
    resetEngineLatestVersion(): void;
    get engineLatestVersionInput(): boolean | cdktf.IResolvable | undefined;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceClass?;
    get instanceClass(): string;
    set instanceClass(value: string);
    resetInstanceClass(): void;
    get instanceClassInput(): string | undefined;
    private _licenseModel?;
    get licenseModel(): string;
    set licenseModel(value: string);
    resetLicenseModel(): void;
    get licenseModelInput(): string | undefined;
    get maxIopsPerDbInstance(): number;
    get maxIopsPerGib(): number;
    get maxStorageSize(): number;
    get minIopsPerDbInstance(): number;
    get minIopsPerGib(): number;
    get minStorageSize(): number;
    get multiAzCapable(): cdktf.IResolvable;
    get outpostCapable(): cdktf.IResolvable;
    private _preferredEngineVersions?;
    get preferredEngineVersions(): string[];
    set preferredEngineVersions(value: string[]);
    resetPreferredEngineVersions(): void;
    get preferredEngineVersionsInput(): string[] | undefined;
    private _preferredInstanceClasses?;
    get preferredInstanceClasses(): string[];
    set preferredInstanceClasses(value: string[]);
    resetPreferredInstanceClasses(): void;
    get preferredInstanceClassesInput(): string[] | undefined;
    private _readReplicaCapable?;
    get readReplicaCapable(): boolean | cdktf.IResolvable;
    set readReplicaCapable(value: boolean | cdktf.IResolvable);
    resetReadReplicaCapable(): void;
    get readReplicaCapableInput(): boolean | cdktf.IResolvable | undefined;
    private _storageType?;
    get storageType(): string;
    set storageType(value: string);
    resetStorageType(): void;
    get storageTypeInput(): string | undefined;
    private _supportedEngineModes?;
    get supportedEngineModes(): string[];
    set supportedEngineModes(value: string[]);
    resetSupportedEngineModes(): void;
    get supportedEngineModesInput(): string[] | undefined;
    private _supportedNetworkTypes?;
    get supportedNetworkTypes(): string[];
    set supportedNetworkTypes(value: string[]);
    resetSupportedNetworkTypes(): void;
    get supportedNetworkTypesInput(): string[] | undefined;
    private _supportsClusters?;
    get supportsClusters(): boolean | cdktf.IResolvable;
    set supportsClusters(value: boolean | cdktf.IResolvable);
    resetSupportsClusters(): void;
    get supportsClustersInput(): boolean | cdktf.IResolvable | undefined;
    private _supportsEnhancedMonitoring?;
    get supportsEnhancedMonitoring(): boolean | cdktf.IResolvable;
    set supportsEnhancedMonitoring(value: boolean | cdktf.IResolvable);
    resetSupportsEnhancedMonitoring(): void;
    get supportsEnhancedMonitoringInput(): boolean | cdktf.IResolvable | undefined;
    private _supportsGlobalDatabases?;
    get supportsGlobalDatabases(): boolean | cdktf.IResolvable;
    set supportsGlobalDatabases(value: boolean | cdktf.IResolvable);
    resetSupportsGlobalDatabases(): void;
    get supportsGlobalDatabasesInput(): boolean | cdktf.IResolvable | undefined;
    private _supportsIamDatabaseAuthentication?;
    get supportsIamDatabaseAuthentication(): boolean | cdktf.IResolvable;
    set supportsIamDatabaseAuthentication(value: boolean | cdktf.IResolvable);
    resetSupportsIamDatabaseAuthentication(): void;
    get supportsIamDatabaseAuthenticationInput(): boolean | cdktf.IResolvable | undefined;
    private _supportsIops?;
    get supportsIops(): boolean | cdktf.IResolvable;
    set supportsIops(value: boolean | cdktf.IResolvable);
    resetSupportsIops(): void;
    get supportsIopsInput(): boolean | cdktf.IResolvable | undefined;
    private _supportsKerberosAuthentication?;
    get supportsKerberosAuthentication(): boolean | cdktf.IResolvable;
    set supportsKerberosAuthentication(value: boolean | cdktf.IResolvable);
    resetSupportsKerberosAuthentication(): void;
    get supportsKerberosAuthenticationInput(): boolean | cdktf.IResolvable | undefined;
    private _supportsMultiAz?;
    get supportsMultiAz(): boolean | cdktf.IResolvable;
    set supportsMultiAz(value: boolean | cdktf.IResolvable);
    resetSupportsMultiAz(): void;
    get supportsMultiAzInput(): boolean | cdktf.IResolvable | undefined;
    private _supportsPerformanceInsights?;
    get supportsPerformanceInsights(): boolean | cdktf.IResolvable;
    set supportsPerformanceInsights(value: boolean | cdktf.IResolvable);
    resetSupportsPerformanceInsights(): void;
    get supportsPerformanceInsightsInput(): boolean | cdktf.IResolvable | undefined;
    private _supportsStorageAutoscaling?;
    get supportsStorageAutoscaling(): boolean | cdktf.IResolvable;
    set supportsStorageAutoscaling(value: boolean | cdktf.IResolvable);
    resetSupportsStorageAutoscaling(): void;
    get supportsStorageAutoscalingInput(): boolean | cdktf.IResolvable | undefined;
    private _supportsStorageEncryption?;
    get supportsStorageEncryption(): boolean | cdktf.IResolvable;
    set supportsStorageEncryption(value: boolean | cdktf.IResolvable);
    resetSupportsStorageEncryption(): void;
    get supportsStorageEncryptionInput(): boolean | cdktf.IResolvable | undefined;
    private _vpc?;
    get vpc(): boolean | cdktf.IResolvable;
    set vpc(value: boolean | cdktf.IResolvable);
    resetVpc(): void;
    get vpcInput(): boolean | cdktf.IResolvable | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
