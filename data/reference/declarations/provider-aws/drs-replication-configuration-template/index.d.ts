/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DrsReplicationConfigurationTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#associate_default_security_group DrsReplicationConfigurationTemplate#associate_default_security_group}
    */
    readonly associateDefaultSecurityGroup: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#auto_replicate_new_disks DrsReplicationConfigurationTemplate#auto_replicate_new_disks}
    */
    readonly autoReplicateNewDisks?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#bandwidth_throttling DrsReplicationConfigurationTemplate#bandwidth_throttling}
    */
    readonly bandwidthThrottling: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#create_public_ip DrsReplicationConfigurationTemplate#create_public_ip}
    */
    readonly createPublicIp: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#data_plane_routing DrsReplicationConfigurationTemplate#data_plane_routing}
    */
    readonly dataPlaneRouting: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#default_large_staging_disk_type DrsReplicationConfigurationTemplate#default_large_staging_disk_type}
    */
    readonly defaultLargeStagingDiskType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#ebs_encryption DrsReplicationConfigurationTemplate#ebs_encryption}
    */
    readonly ebsEncryption: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#ebs_encryption_key_arn DrsReplicationConfigurationTemplate#ebs_encryption_key_arn}
    */
    readonly ebsEncryptionKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#replication_server_instance_type DrsReplicationConfigurationTemplate#replication_server_instance_type}
    */
    readonly replicationServerInstanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#replication_servers_security_groups_ids DrsReplicationConfigurationTemplate#replication_servers_security_groups_ids}
    */
    readonly replicationServersSecurityGroupsIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#staging_area_subnet_id DrsReplicationConfigurationTemplate#staging_area_subnet_id}
    */
    readonly stagingAreaSubnetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#staging_area_tags DrsReplicationConfigurationTemplate#staging_area_tags}
    */
    readonly stagingAreaTags: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#tags DrsReplicationConfigurationTemplate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#use_dedicated_replication_server DrsReplicationConfigurationTemplate#use_dedicated_replication_server}
    */
    readonly useDedicatedReplicationServer: boolean | cdktf.IResolvable;
    /**
    * pit_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#pit_policy DrsReplicationConfigurationTemplate#pit_policy}
    */
    readonly pitPolicy?: DrsReplicationConfigurationTemplatePitPolicy[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#timeouts DrsReplicationConfigurationTemplate#timeouts}
    */
    readonly timeouts?: DrsReplicationConfigurationTemplateTimeouts;
}
export interface DrsReplicationConfigurationTemplatePitPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#enabled DrsReplicationConfigurationTemplate#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#interval DrsReplicationConfigurationTemplate#interval}
    */
    readonly interval: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#retention_duration DrsReplicationConfigurationTemplate#retention_duration}
    */
    readonly retentionDuration: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#rule_id DrsReplicationConfigurationTemplate#rule_id}
    */
    readonly ruleId?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#units DrsReplicationConfigurationTemplate#units}
    */
    readonly units: string;
}
export declare function drsReplicationConfigurationTemplatePitPolicyToTerraform(struct?: DrsReplicationConfigurationTemplatePitPolicy | cdktf.IResolvable): any;
export declare function drsReplicationConfigurationTemplatePitPolicyToHclTerraform(struct?: DrsReplicationConfigurationTemplatePitPolicy | cdktf.IResolvable): any;
export declare class DrsReplicationConfigurationTemplatePitPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DrsReplicationConfigurationTemplatePitPolicy | cdktf.IResolvable | undefined;
    set internalValue(value: DrsReplicationConfigurationTemplatePitPolicy | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _interval?;
    get interval(): number;
    set interval(value: number);
    get intervalInput(): number | undefined;
    private _retentionDuration?;
    get retentionDuration(): number;
    set retentionDuration(value: number);
    get retentionDurationInput(): number | undefined;
    private _ruleId?;
    get ruleId(): number;
    set ruleId(value: number);
    resetRuleId(): void;
    get ruleIdInput(): number | undefined;
    private _units?;
    get units(): string;
    set units(value: string);
    get unitsInput(): string | undefined;
}
export declare class DrsReplicationConfigurationTemplatePitPolicyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DrsReplicationConfigurationTemplatePitPolicy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DrsReplicationConfigurationTemplatePitPolicyOutputReference;
}
export interface DrsReplicationConfigurationTemplateTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#create DrsReplicationConfigurationTemplate#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#delete DrsReplicationConfigurationTemplate#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#update DrsReplicationConfigurationTemplate#update}
    */
    readonly update?: string;
}
export declare function drsReplicationConfigurationTemplateTimeoutsToTerraform(struct?: DrsReplicationConfigurationTemplateTimeouts | cdktf.IResolvable): any;
export declare function drsReplicationConfigurationTemplateTimeoutsToHclTerraform(struct?: DrsReplicationConfigurationTemplateTimeouts | cdktf.IResolvable): any;
export declare class DrsReplicationConfigurationTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DrsReplicationConfigurationTemplateTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DrsReplicationConfigurationTemplateTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template aws_drs_replication_configuration_template}
*/
export declare class DrsReplicationConfigurationTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_drs_replication_configuration_template";
    /**
    * Generates CDKTF code for importing a DrsReplicationConfigurationTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DrsReplicationConfigurationTemplate to import
    * @param importFromId The id of the existing DrsReplicationConfigurationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DrsReplicationConfigurationTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/drs_replication_configuration_template aws_drs_replication_configuration_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DrsReplicationConfigurationTemplateConfig
    */
    constructor(scope: Construct, id: string, config: DrsReplicationConfigurationTemplateConfig);
    get arn(): string;
    private _associateDefaultSecurityGroup?;
    get associateDefaultSecurityGroup(): boolean | cdktf.IResolvable;
    set associateDefaultSecurityGroup(value: boolean | cdktf.IResolvable);
    get associateDefaultSecurityGroupInput(): boolean | cdktf.IResolvable | undefined;
    private _autoReplicateNewDisks?;
    get autoReplicateNewDisks(): boolean | cdktf.IResolvable;
    set autoReplicateNewDisks(value: boolean | cdktf.IResolvable);
    resetAutoReplicateNewDisks(): void;
    get autoReplicateNewDisksInput(): boolean | cdktf.IResolvable | undefined;
    private _bandwidthThrottling?;
    get bandwidthThrottling(): number;
    set bandwidthThrottling(value: number);
    get bandwidthThrottlingInput(): number | undefined;
    private _createPublicIp?;
    get createPublicIp(): boolean | cdktf.IResolvable;
    set createPublicIp(value: boolean | cdktf.IResolvable);
    get createPublicIpInput(): boolean | cdktf.IResolvable | undefined;
    private _dataPlaneRouting?;
    get dataPlaneRouting(): string;
    set dataPlaneRouting(value: string);
    get dataPlaneRoutingInput(): string | undefined;
    private _defaultLargeStagingDiskType?;
    get defaultLargeStagingDiskType(): string;
    set defaultLargeStagingDiskType(value: string);
    get defaultLargeStagingDiskTypeInput(): string | undefined;
    private _ebsEncryption?;
    get ebsEncryption(): string;
    set ebsEncryption(value: string);
    get ebsEncryptionInput(): string | undefined;
    private _ebsEncryptionKeyArn?;
    get ebsEncryptionKeyArn(): string;
    set ebsEncryptionKeyArn(value: string);
    resetEbsEncryptionKeyArn(): void;
    get ebsEncryptionKeyArnInput(): string | undefined;
    get id(): string;
    private _replicationServerInstanceType?;
    get replicationServerInstanceType(): string;
    set replicationServerInstanceType(value: string);
    get replicationServerInstanceTypeInput(): string | undefined;
    private _replicationServersSecurityGroupsIds?;
    get replicationServersSecurityGroupsIds(): string[];
    set replicationServersSecurityGroupsIds(value: string[]);
    get replicationServersSecurityGroupsIdsInput(): string[] | undefined;
    private _stagingAreaSubnetId?;
    get stagingAreaSubnetId(): string;
    set stagingAreaSubnetId(value: string);
    get stagingAreaSubnetIdInput(): string | undefined;
    private _stagingAreaTags?;
    get stagingAreaTags(): {
        [key: string]: string;
    };
    set stagingAreaTags(value: {
        [key: string]: string;
    });
    get stagingAreaTagsInput(): {
        [key: string]: string;
    } | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _useDedicatedReplicationServer?;
    get useDedicatedReplicationServer(): boolean | cdktf.IResolvable;
    set useDedicatedReplicationServer(value: boolean | cdktf.IResolvable);
    get useDedicatedReplicationServerInput(): boolean | cdktf.IResolvable | undefined;
    private _pitPolicy;
    get pitPolicy(): DrsReplicationConfigurationTemplatePitPolicyList;
    putPitPolicy(value: DrsReplicationConfigurationTemplatePitPolicy[] | cdktf.IResolvable): void;
    resetPitPolicy(): void;
    get pitPolicyInput(): cdktf.IResolvable | DrsReplicationConfigurationTemplatePitPolicy[] | undefined;
    private _timeouts;
    get timeouts(): DrsReplicationConfigurationTemplateTimeoutsOutputReference;
    putTimeouts(value: DrsReplicationConfigurationTemplateTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DrsReplicationConfigurationTemplateTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
