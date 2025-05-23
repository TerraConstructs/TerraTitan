/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DmsReplicationConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#id DmsReplicationConfig#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#replication_config_identifier DmsReplicationConfig#replication_config_identifier}
    */
    readonly replicationConfigIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#replication_settings DmsReplicationConfig#replication_settings}
    */
    readonly replicationSettings?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#replication_type DmsReplicationConfig#replication_type}
    */
    readonly replicationType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#resource_identifier DmsReplicationConfig#resource_identifier}
    */
    readonly resourceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#source_endpoint_arn DmsReplicationConfig#source_endpoint_arn}
    */
    readonly sourceEndpointArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#start_replication DmsReplicationConfig#start_replication}
    */
    readonly startReplication?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#supplemental_settings DmsReplicationConfig#supplemental_settings}
    */
    readonly supplementalSettings?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#table_mappings DmsReplicationConfig#table_mappings}
    */
    readonly tableMappings: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#tags DmsReplicationConfig#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#tags_all DmsReplicationConfig#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#target_endpoint_arn DmsReplicationConfig#target_endpoint_arn}
    */
    readonly targetEndpointArn: string;
    /**
    * compute_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#compute_config DmsReplicationConfig#compute_config}
    */
    readonly computeConfig: DmsReplicationConfigComputeConfig;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#timeouts DmsReplicationConfig#timeouts}
    */
    readonly timeouts?: DmsReplicationConfigTimeouts;
}
export interface DmsReplicationConfigComputeConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#availability_zone DmsReplicationConfig#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#dns_name_servers DmsReplicationConfig#dns_name_servers}
    */
    readonly dnsNameServers?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#kms_key_id DmsReplicationConfig#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#max_capacity_units DmsReplicationConfig#max_capacity_units}
    */
    readonly maxCapacityUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#min_capacity_units DmsReplicationConfig#min_capacity_units}
    */
    readonly minCapacityUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#multi_az DmsReplicationConfig#multi_az}
    */
    readonly multiAz?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#preferred_maintenance_window DmsReplicationConfig#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#replication_subnet_group_id DmsReplicationConfig#replication_subnet_group_id}
    */
    readonly replicationSubnetGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#vpc_security_group_ids DmsReplicationConfig#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
}
export declare function dmsReplicationConfigComputeConfigToTerraform(struct?: DmsReplicationConfigComputeConfigOutputReference | DmsReplicationConfigComputeConfig): any;
export declare function dmsReplicationConfigComputeConfigToHclTerraform(struct?: DmsReplicationConfigComputeConfigOutputReference | DmsReplicationConfigComputeConfig): any;
export declare class DmsReplicationConfigComputeConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DmsReplicationConfigComputeConfig | undefined;
    set internalValue(value: DmsReplicationConfigComputeConfig | undefined);
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _dnsNameServers?;
    get dnsNameServers(): string;
    set dnsNameServers(value: string);
    resetDnsNameServers(): void;
    get dnsNameServersInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _maxCapacityUnits?;
    get maxCapacityUnits(): number;
    set maxCapacityUnits(value: number);
    resetMaxCapacityUnits(): void;
    get maxCapacityUnitsInput(): number | undefined;
    private _minCapacityUnits?;
    get minCapacityUnits(): number;
    set minCapacityUnits(value: number);
    resetMinCapacityUnits(): void;
    get minCapacityUnitsInput(): number | undefined;
    private _multiAz?;
    get multiAz(): boolean | cdktf.IResolvable;
    set multiAz(value: boolean | cdktf.IResolvable);
    resetMultiAz(): void;
    get multiAzInput(): boolean | cdktf.IResolvable | undefined;
    private _preferredMaintenanceWindow?;
    get preferredMaintenanceWindow(): string;
    set preferredMaintenanceWindow(value: string);
    resetPreferredMaintenanceWindow(): void;
    get preferredMaintenanceWindowInput(): string | undefined;
    private _replicationSubnetGroupId?;
    get replicationSubnetGroupId(): string;
    set replicationSubnetGroupId(value: string);
    get replicationSubnetGroupIdInput(): string | undefined;
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[] | undefined;
}
export interface DmsReplicationConfigTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#create DmsReplicationConfig#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#delete DmsReplicationConfig#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#update DmsReplicationConfig#update}
    */
    readonly update?: string;
}
export declare function dmsReplicationConfigTimeoutsToTerraform(struct?: DmsReplicationConfigTimeouts | cdktf.IResolvable): any;
export declare function dmsReplicationConfigTimeoutsToHclTerraform(struct?: DmsReplicationConfigTimeouts | cdktf.IResolvable): any;
export declare class DmsReplicationConfigTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DmsReplicationConfigTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DmsReplicationConfigTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config aws_dms_replication_config}
*/
export declare class DmsReplicationConfig extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dms_replication_config";
    /**
    * Generates CDKTF code for importing a DmsReplicationConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DmsReplicationConfig to import
    * @param importFromId The id of the existing DmsReplicationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DmsReplicationConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_config aws_dms_replication_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsReplicationConfigConfig
    */
    constructor(scope: Construct, id: string, config: DmsReplicationConfigConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _replicationConfigIdentifier?;
    get replicationConfigIdentifier(): string;
    set replicationConfigIdentifier(value: string);
    get replicationConfigIdentifierInput(): string | undefined;
    private _replicationSettings?;
    get replicationSettings(): string;
    set replicationSettings(value: string);
    resetReplicationSettings(): void;
    get replicationSettingsInput(): string | undefined;
    private _replicationType?;
    get replicationType(): string;
    set replicationType(value: string);
    get replicationTypeInput(): string | undefined;
    private _resourceIdentifier?;
    get resourceIdentifier(): string;
    set resourceIdentifier(value: string);
    resetResourceIdentifier(): void;
    get resourceIdentifierInput(): string | undefined;
    private _sourceEndpointArn?;
    get sourceEndpointArn(): string;
    set sourceEndpointArn(value: string);
    get sourceEndpointArnInput(): string | undefined;
    private _startReplication?;
    get startReplication(): boolean | cdktf.IResolvable;
    set startReplication(value: boolean | cdktf.IResolvable);
    resetStartReplication(): void;
    get startReplicationInput(): boolean | cdktf.IResolvable | undefined;
    private _supplementalSettings?;
    get supplementalSettings(): string;
    set supplementalSettings(value: string);
    resetSupplementalSettings(): void;
    get supplementalSettingsInput(): string | undefined;
    private _tableMappings?;
    get tableMappings(): string;
    set tableMappings(value: string);
    get tableMappingsInput(): string | undefined;
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
    private _targetEndpointArn?;
    get targetEndpointArn(): string;
    set targetEndpointArn(value: string);
    get targetEndpointArnInput(): string | undefined;
    private _computeConfig;
    get computeConfig(): DmsReplicationConfigComputeConfigOutputReference;
    putComputeConfig(value: DmsReplicationConfigComputeConfig): void;
    get computeConfigInput(): DmsReplicationConfigComputeConfig | undefined;
    private _timeouts;
    get timeouts(): DmsReplicationConfigTimeoutsOutputReference;
    putTimeouts(value: DmsReplicationConfigTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DmsReplicationConfigTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
