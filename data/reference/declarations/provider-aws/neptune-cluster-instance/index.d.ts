/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NeptuneClusterInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#apply_immediately NeptuneClusterInstance#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#auto_minor_version_upgrade NeptuneClusterInstance#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#availability_zone NeptuneClusterInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#cluster_identifier NeptuneClusterInstance#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#engine NeptuneClusterInstance#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#engine_version NeptuneClusterInstance#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#id NeptuneClusterInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#identifier NeptuneClusterInstance#identifier}
    */
    readonly identifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#identifier_prefix NeptuneClusterInstance#identifier_prefix}
    */
    readonly identifierPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#instance_class NeptuneClusterInstance#instance_class}
    */
    readonly instanceClass: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#neptune_parameter_group_name NeptuneClusterInstance#neptune_parameter_group_name}
    */
    readonly neptuneParameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#neptune_subnet_group_name NeptuneClusterInstance#neptune_subnet_group_name}
    */
    readonly neptuneSubnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#port NeptuneClusterInstance#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#preferred_backup_window NeptuneClusterInstance#preferred_backup_window}
    */
    readonly preferredBackupWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#preferred_maintenance_window NeptuneClusterInstance#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#promotion_tier NeptuneClusterInstance#promotion_tier}
    */
    readonly promotionTier?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#publicly_accessible NeptuneClusterInstance#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#skip_final_snapshot NeptuneClusterInstance#skip_final_snapshot}
    */
    readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#tags NeptuneClusterInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#tags_all NeptuneClusterInstance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#timeouts NeptuneClusterInstance#timeouts}
    */
    readonly timeouts?: NeptuneClusterInstanceTimeouts;
}
export interface NeptuneClusterInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#create NeptuneClusterInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#delete NeptuneClusterInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#update NeptuneClusterInstance#update}
    */
    readonly update?: string;
}
export declare function neptuneClusterInstanceTimeoutsToTerraform(struct?: NeptuneClusterInstanceTimeouts | cdktf.IResolvable): any;
export declare function neptuneClusterInstanceTimeoutsToHclTerraform(struct?: NeptuneClusterInstanceTimeouts | cdktf.IResolvable): any;
export declare class NeptuneClusterInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NeptuneClusterInstanceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NeptuneClusterInstanceTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance aws_neptune_cluster_instance}
*/
export declare class NeptuneClusterInstance extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_neptune_cluster_instance";
    /**
    * Generates CDKTF code for importing a NeptuneClusterInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NeptuneClusterInstance to import
    * @param importFromId The id of the existing NeptuneClusterInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NeptuneClusterInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/neptune_cluster_instance aws_neptune_cluster_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NeptuneClusterInstanceConfig
    */
    constructor(scope: Construct, id: string, config: NeptuneClusterInstanceConfig);
    get address(): string;
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
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string | undefined;
    get dbiResourceId(): string;
    get endpoint(): string;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string | undefined;
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
    get kmsKeyArn(): string;
    private _neptuneParameterGroupName?;
    get neptuneParameterGroupName(): string;
    set neptuneParameterGroupName(value: string);
    resetNeptuneParameterGroupName(): void;
    get neptuneParameterGroupNameInput(): string | undefined;
    private _neptuneSubnetGroupName?;
    get neptuneSubnetGroupName(): string;
    set neptuneSubnetGroupName(value: string);
    resetNeptuneSubnetGroupName(): void;
    get neptuneSubnetGroupNameInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
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
    private _skipFinalSnapshot?;
    get skipFinalSnapshot(): boolean | cdktf.IResolvable;
    set skipFinalSnapshot(value: boolean | cdktf.IResolvable);
    resetSkipFinalSnapshot(): void;
    get skipFinalSnapshotInput(): boolean | cdktf.IResolvable | undefined;
    get storageEncrypted(): cdktf.IResolvable;
    get storageType(): string;
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
    get timeouts(): NeptuneClusterInstanceTimeoutsOutputReference;
    putTimeouts(value: NeptuneClusterInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NeptuneClusterInstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
