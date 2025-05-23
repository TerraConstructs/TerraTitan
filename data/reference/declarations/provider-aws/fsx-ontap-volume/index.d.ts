/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FsxOntapVolumeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#bypass_snaplock_enterprise_retention FsxOntapVolume#bypass_snaplock_enterprise_retention}
    */
    readonly bypassSnaplockEnterpriseRetention?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#copy_tags_to_backups FsxOntapVolume#copy_tags_to_backups}
    */
    readonly copyTagsToBackups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#final_backup_tags FsxOntapVolume#final_backup_tags}
    */
    readonly finalBackupTags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#id FsxOntapVolume#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#junction_path FsxOntapVolume#junction_path}
    */
    readonly junctionPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#name FsxOntapVolume#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#ontap_volume_type FsxOntapVolume#ontap_volume_type}
    */
    readonly ontapVolumeType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#security_style FsxOntapVolume#security_style}
    */
    readonly securityStyle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#size_in_bytes FsxOntapVolume#size_in_bytes}
    */
    readonly sizeInBytes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#size_in_megabytes FsxOntapVolume#size_in_megabytes}
    */
    readonly sizeInMegabytes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#skip_final_backup FsxOntapVolume#skip_final_backup}
    */
    readonly skipFinalBackup?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#snapshot_policy FsxOntapVolume#snapshot_policy}
    */
    readonly snapshotPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#storage_efficiency_enabled FsxOntapVolume#storage_efficiency_enabled}
    */
    readonly storageEfficiencyEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#storage_virtual_machine_id FsxOntapVolume#storage_virtual_machine_id}
    */
    readonly storageVirtualMachineId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#tags FsxOntapVolume#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#tags_all FsxOntapVolume#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#volume_style FsxOntapVolume#volume_style}
    */
    readonly volumeStyle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#volume_type FsxOntapVolume#volume_type}
    */
    readonly volumeType?: string;
    /**
    * aggregate_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#aggregate_configuration FsxOntapVolume#aggregate_configuration}
    */
    readonly aggregateConfiguration?: FsxOntapVolumeAggregateConfiguration;
    /**
    * snaplock_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#snaplock_configuration FsxOntapVolume#snaplock_configuration}
    */
    readonly snaplockConfiguration?: FsxOntapVolumeSnaplockConfiguration;
    /**
    * tiering_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#tiering_policy FsxOntapVolume#tiering_policy}
    */
    readonly tieringPolicy?: FsxOntapVolumeTieringPolicy;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#timeouts FsxOntapVolume#timeouts}
    */
    readonly timeouts?: FsxOntapVolumeTimeouts;
}
export interface FsxOntapVolumeAggregateConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#aggregates FsxOntapVolume#aggregates}
    */
    readonly aggregates?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#constituents_per_aggregate FsxOntapVolume#constituents_per_aggregate}
    */
    readonly constituentsPerAggregate?: number;
}
export declare function fsxOntapVolumeAggregateConfigurationToTerraform(struct?: FsxOntapVolumeAggregateConfigurationOutputReference | FsxOntapVolumeAggregateConfiguration): any;
export declare function fsxOntapVolumeAggregateConfigurationToHclTerraform(struct?: FsxOntapVolumeAggregateConfigurationOutputReference | FsxOntapVolumeAggregateConfiguration): any;
export declare class FsxOntapVolumeAggregateConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOntapVolumeAggregateConfiguration | undefined;
    set internalValue(value: FsxOntapVolumeAggregateConfiguration | undefined);
    private _aggregates?;
    get aggregates(): string[];
    set aggregates(value: string[]);
    resetAggregates(): void;
    get aggregatesInput(): string[] | undefined;
    private _constituentsPerAggregate?;
    get constituentsPerAggregate(): number;
    set constituentsPerAggregate(value: number);
    resetConstituentsPerAggregate(): void;
    get constituentsPerAggregateInput(): number | undefined;
    get totalConstituents(): number;
}
export interface FsxOntapVolumeSnaplockConfigurationAutocommitPeriod {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}
    */
    readonly value?: number;
}
export declare function fsxOntapVolumeSnaplockConfigurationAutocommitPeriodToTerraform(struct?: FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference | FsxOntapVolumeSnaplockConfigurationAutocommitPeriod): any;
export declare function fsxOntapVolumeSnaplockConfigurationAutocommitPeriodToHclTerraform(struct?: FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference | FsxOntapVolumeSnaplockConfigurationAutocommitPeriod): any;
export declare class FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOntapVolumeSnaplockConfigurationAutocommitPeriod | undefined;
    set internalValue(value: FsxOntapVolumeSnaplockConfigurationAutocommitPeriod | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    resetValue(): void;
    get valueInput(): number | undefined;
}
export interface FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}
    */
    readonly value?: number;
}
export declare function fsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionToTerraform(struct?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference | FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention): any;
export declare function fsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionToHclTerraform(struct?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference | FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention): any;
export declare class FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention | undefined;
    set internalValue(value: FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    resetValue(): void;
    get valueInput(): number | undefined;
}
export interface FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}
    */
    readonly value?: number;
}
export declare function fsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionToTerraform(struct?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference | FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention): any;
export declare function fsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionToHclTerraform(struct?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference | FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention): any;
export declare class FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention | undefined;
    set internalValue(value: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    resetValue(): void;
    get valueInput(): number | undefined;
}
export interface FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}
    */
    readonly value?: number;
}
export declare function fsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionToTerraform(struct?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference | FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention): any;
export declare function fsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionToHclTerraform(struct?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference | FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention): any;
export declare class FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention | undefined;
    set internalValue(value: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    resetValue(): void;
    get valueInput(): number | undefined;
}
export interface FsxOntapVolumeSnaplockConfigurationRetentionPeriod {
    /**
    * default_retention block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#default_retention FsxOntapVolume#default_retention}
    */
    readonly defaultRetention?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention;
    /**
    * maximum_retention block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#maximum_retention FsxOntapVolume#maximum_retention}
    */
    readonly maximumRetention?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention;
    /**
    * minimum_retention block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#minimum_retention FsxOntapVolume#minimum_retention}
    */
    readonly minimumRetention?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention;
}
export declare function fsxOntapVolumeSnaplockConfigurationRetentionPeriodToTerraform(struct?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference | FsxOntapVolumeSnaplockConfigurationRetentionPeriod): any;
export declare function fsxOntapVolumeSnaplockConfigurationRetentionPeriodToHclTerraform(struct?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference | FsxOntapVolumeSnaplockConfigurationRetentionPeriod): any;
export declare class FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOntapVolumeSnaplockConfigurationRetentionPeriod | undefined;
    set internalValue(value: FsxOntapVolumeSnaplockConfigurationRetentionPeriod | undefined);
    private _defaultRetention;
    get defaultRetention(): FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference;
    putDefaultRetention(value: FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention): void;
    resetDefaultRetention(): void;
    get defaultRetentionInput(): FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention | undefined;
    private _maximumRetention;
    get maximumRetention(): FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference;
    putMaximumRetention(value: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention): void;
    resetMaximumRetention(): void;
    get maximumRetentionInput(): FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention | undefined;
    private _minimumRetention;
    get minimumRetention(): FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference;
    putMinimumRetention(value: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention): void;
    resetMinimumRetention(): void;
    get minimumRetentionInput(): FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention | undefined;
}
export interface FsxOntapVolumeSnaplockConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#audit_log_volume FsxOntapVolume#audit_log_volume}
    */
    readonly auditLogVolume?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#privileged_delete FsxOntapVolume#privileged_delete}
    */
    readonly privilegedDelete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#snaplock_type FsxOntapVolume#snaplock_type}
    */
    readonly snaplockType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#volume_append_mode_enabled FsxOntapVolume#volume_append_mode_enabled}
    */
    readonly volumeAppendModeEnabled?: boolean | cdktf.IResolvable;
    /**
    * autocommit_period block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#autocommit_period FsxOntapVolume#autocommit_period}
    */
    readonly autocommitPeriod?: FsxOntapVolumeSnaplockConfigurationAutocommitPeriod;
    /**
    * retention_period block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#retention_period FsxOntapVolume#retention_period}
    */
    readonly retentionPeriod?: FsxOntapVolumeSnaplockConfigurationRetentionPeriod;
}
export declare function fsxOntapVolumeSnaplockConfigurationToTerraform(struct?: FsxOntapVolumeSnaplockConfigurationOutputReference | FsxOntapVolumeSnaplockConfiguration): any;
export declare function fsxOntapVolumeSnaplockConfigurationToHclTerraform(struct?: FsxOntapVolumeSnaplockConfigurationOutputReference | FsxOntapVolumeSnaplockConfiguration): any;
export declare class FsxOntapVolumeSnaplockConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOntapVolumeSnaplockConfiguration | undefined;
    set internalValue(value: FsxOntapVolumeSnaplockConfiguration | undefined);
    private _auditLogVolume?;
    get auditLogVolume(): boolean | cdktf.IResolvable;
    set auditLogVolume(value: boolean | cdktf.IResolvable);
    resetAuditLogVolume(): void;
    get auditLogVolumeInput(): boolean | cdktf.IResolvable | undefined;
    private _privilegedDelete?;
    get privilegedDelete(): string;
    set privilegedDelete(value: string);
    resetPrivilegedDelete(): void;
    get privilegedDeleteInput(): string | undefined;
    private _snaplockType?;
    get snaplockType(): string;
    set snaplockType(value: string);
    get snaplockTypeInput(): string | undefined;
    private _volumeAppendModeEnabled?;
    get volumeAppendModeEnabled(): boolean | cdktf.IResolvable;
    set volumeAppendModeEnabled(value: boolean | cdktf.IResolvable);
    resetVolumeAppendModeEnabled(): void;
    get volumeAppendModeEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _autocommitPeriod;
    get autocommitPeriod(): FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference;
    putAutocommitPeriod(value: FsxOntapVolumeSnaplockConfigurationAutocommitPeriod): void;
    resetAutocommitPeriod(): void;
    get autocommitPeriodInput(): FsxOntapVolumeSnaplockConfigurationAutocommitPeriod | undefined;
    private _retentionPeriod;
    get retentionPeriod(): FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference;
    putRetentionPeriod(value: FsxOntapVolumeSnaplockConfigurationRetentionPeriod): void;
    resetRetentionPeriod(): void;
    get retentionPeriodInput(): FsxOntapVolumeSnaplockConfigurationRetentionPeriod | undefined;
}
export interface FsxOntapVolumeTieringPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#cooling_period FsxOntapVolume#cooling_period}
    */
    readonly coolingPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#name FsxOntapVolume#name}
    */
    readonly name?: string;
}
export declare function fsxOntapVolumeTieringPolicyToTerraform(struct?: FsxOntapVolumeTieringPolicyOutputReference | FsxOntapVolumeTieringPolicy): any;
export declare function fsxOntapVolumeTieringPolicyToHclTerraform(struct?: FsxOntapVolumeTieringPolicyOutputReference | FsxOntapVolumeTieringPolicy): any;
export declare class FsxOntapVolumeTieringPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOntapVolumeTieringPolicy | undefined;
    set internalValue(value: FsxOntapVolumeTieringPolicy | undefined);
    private _coolingPeriod?;
    get coolingPeriod(): number;
    set coolingPeriod(value: number);
    resetCoolingPeriod(): void;
    get coolingPeriodInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
}
export interface FsxOntapVolumeTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#create FsxOntapVolume#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#delete FsxOntapVolume#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#update FsxOntapVolume#update}
    */
    readonly update?: string;
}
export declare function fsxOntapVolumeTimeoutsToTerraform(struct?: FsxOntapVolumeTimeouts | cdktf.IResolvable): any;
export declare function fsxOntapVolumeTimeoutsToHclTerraform(struct?: FsxOntapVolumeTimeouts | cdktf.IResolvable): any;
export declare class FsxOntapVolumeTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOntapVolumeTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FsxOntapVolumeTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume aws_fsx_ontap_volume}
*/
export declare class FsxOntapVolume extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_fsx_ontap_volume";
    /**
    * Generates CDKTF code for importing a FsxOntapVolume resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FsxOntapVolume to import
    * @param importFromId The id of the existing FsxOntapVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FsxOntapVolume to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_volume aws_fsx_ontap_volume} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxOntapVolumeConfig
    */
    constructor(scope: Construct, id: string, config: FsxOntapVolumeConfig);
    get arn(): string;
    private _bypassSnaplockEnterpriseRetention?;
    get bypassSnaplockEnterpriseRetention(): boolean | cdktf.IResolvable;
    set bypassSnaplockEnterpriseRetention(value: boolean | cdktf.IResolvable);
    resetBypassSnaplockEnterpriseRetention(): void;
    get bypassSnaplockEnterpriseRetentionInput(): boolean | cdktf.IResolvable | undefined;
    private _copyTagsToBackups?;
    get copyTagsToBackups(): boolean | cdktf.IResolvable;
    set copyTagsToBackups(value: boolean | cdktf.IResolvable);
    resetCopyTagsToBackups(): void;
    get copyTagsToBackupsInput(): boolean | cdktf.IResolvable | undefined;
    get fileSystemId(): string;
    private _finalBackupTags?;
    get finalBackupTags(): {
        [key: string]: string;
    };
    set finalBackupTags(value: {
        [key: string]: string;
    });
    resetFinalBackupTags(): void;
    get finalBackupTagsInput(): {
        [key: string]: string;
    } | undefined;
    get flexcacheEndpointType(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _junctionPath?;
    get junctionPath(): string;
    set junctionPath(value: string);
    resetJunctionPath(): void;
    get junctionPathInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _ontapVolumeType?;
    get ontapVolumeType(): string;
    set ontapVolumeType(value: string);
    resetOntapVolumeType(): void;
    get ontapVolumeTypeInput(): string | undefined;
    private _securityStyle?;
    get securityStyle(): string;
    set securityStyle(value: string);
    resetSecurityStyle(): void;
    get securityStyleInput(): string | undefined;
    private _sizeInBytes?;
    get sizeInBytes(): string;
    set sizeInBytes(value: string);
    resetSizeInBytes(): void;
    get sizeInBytesInput(): string | undefined;
    private _sizeInMegabytes?;
    get sizeInMegabytes(): number;
    set sizeInMegabytes(value: number);
    resetSizeInMegabytes(): void;
    get sizeInMegabytesInput(): number | undefined;
    private _skipFinalBackup?;
    get skipFinalBackup(): boolean | cdktf.IResolvable;
    set skipFinalBackup(value: boolean | cdktf.IResolvable);
    resetSkipFinalBackup(): void;
    get skipFinalBackupInput(): boolean | cdktf.IResolvable | undefined;
    private _snapshotPolicy?;
    get snapshotPolicy(): string;
    set snapshotPolicy(value: string);
    resetSnapshotPolicy(): void;
    get snapshotPolicyInput(): string | undefined;
    private _storageEfficiencyEnabled?;
    get storageEfficiencyEnabled(): boolean | cdktf.IResolvable;
    set storageEfficiencyEnabled(value: boolean | cdktf.IResolvable);
    resetStorageEfficiencyEnabled(): void;
    get storageEfficiencyEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _storageVirtualMachineId?;
    get storageVirtualMachineId(): string;
    set storageVirtualMachineId(value: string);
    get storageVirtualMachineIdInput(): string | undefined;
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
    get uuid(): string;
    private _volumeStyle?;
    get volumeStyle(): string;
    set volumeStyle(value: string);
    resetVolumeStyle(): void;
    get volumeStyleInput(): string | undefined;
    private _volumeType?;
    get volumeType(): string;
    set volumeType(value: string);
    resetVolumeType(): void;
    get volumeTypeInput(): string | undefined;
    private _aggregateConfiguration;
    get aggregateConfiguration(): FsxOntapVolumeAggregateConfigurationOutputReference;
    putAggregateConfiguration(value: FsxOntapVolumeAggregateConfiguration): void;
    resetAggregateConfiguration(): void;
    get aggregateConfigurationInput(): FsxOntapVolumeAggregateConfiguration | undefined;
    private _snaplockConfiguration;
    get snaplockConfiguration(): FsxOntapVolumeSnaplockConfigurationOutputReference;
    putSnaplockConfiguration(value: FsxOntapVolumeSnaplockConfiguration): void;
    resetSnaplockConfiguration(): void;
    get snaplockConfigurationInput(): FsxOntapVolumeSnaplockConfiguration | undefined;
    private _tieringPolicy;
    get tieringPolicy(): FsxOntapVolumeTieringPolicyOutputReference;
    putTieringPolicy(value: FsxOntapVolumeTieringPolicy): void;
    resetTieringPolicy(): void;
    get tieringPolicyInput(): FsxOntapVolumeTieringPolicy | undefined;
    private _timeouts;
    get timeouts(): FsxOntapVolumeTimeoutsOutputReference;
    putTimeouts(value: FsxOntapVolumeTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FsxOntapVolumeTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
