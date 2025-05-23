/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DmsReplicationInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#allocated_storage DmsReplicationInstance#allocated_storage}
    */
    readonly allocatedStorage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#allow_major_version_upgrade DmsReplicationInstance#allow_major_version_upgrade}
    */
    readonly allowMajorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#apply_immediately DmsReplicationInstance#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#auto_minor_version_upgrade DmsReplicationInstance#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#availability_zone DmsReplicationInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#engine_version DmsReplicationInstance#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#id DmsReplicationInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#kms_key_arn DmsReplicationInstance#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#multi_az DmsReplicationInstance#multi_az}
    */
    readonly multiAz?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#network_type DmsReplicationInstance#network_type}
    */
    readonly networkType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#preferred_maintenance_window DmsReplicationInstance#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#publicly_accessible DmsReplicationInstance#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#replication_instance_class DmsReplicationInstance#replication_instance_class}
    */
    readonly replicationInstanceClass: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#replication_instance_id DmsReplicationInstance#replication_instance_id}
    */
    readonly replicationInstanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#replication_subnet_group_id DmsReplicationInstance#replication_subnet_group_id}
    */
    readonly replicationSubnetGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#tags DmsReplicationInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#tags_all DmsReplicationInstance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#vpc_security_group_ids DmsReplicationInstance#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#timeouts DmsReplicationInstance#timeouts}
    */
    readonly timeouts?: DmsReplicationInstanceTimeouts;
}
export interface DmsReplicationInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#create DmsReplicationInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#delete DmsReplicationInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#update DmsReplicationInstance#update}
    */
    readonly update?: string;
}
export declare function dmsReplicationInstanceTimeoutsToTerraform(struct?: DmsReplicationInstanceTimeouts | cdktf.IResolvable): any;
export declare function dmsReplicationInstanceTimeoutsToHclTerraform(struct?: DmsReplicationInstanceTimeouts | cdktf.IResolvable): any;
export declare class DmsReplicationInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DmsReplicationInstanceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DmsReplicationInstanceTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance aws_dms_replication_instance}
*/
export declare class DmsReplicationInstance extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dms_replication_instance";
    /**
    * Generates CDKTF code for importing a DmsReplicationInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DmsReplicationInstance to import
    * @param importFromId The id of the existing DmsReplicationInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DmsReplicationInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_instance aws_dms_replication_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsReplicationInstanceConfig
    */
    constructor(scope: Construct, id: string, config: DmsReplicationInstanceConfig);
    private _allocatedStorage?;
    get allocatedStorage(): number;
    set allocatedStorage(value: number);
    resetAllocatedStorage(): void;
    get allocatedStorageInput(): number | undefined;
    private _allowMajorVersionUpgrade?;
    get allowMajorVersionUpgrade(): boolean | cdktf.IResolvable;
    set allowMajorVersionUpgrade(value: boolean | cdktf.IResolvable);
    resetAllowMajorVersionUpgrade(): void;
    get allowMajorVersionUpgradeInput(): boolean | cdktf.IResolvable | undefined;
    private _applyImmediately?;
    get applyImmediately(): boolean | cdktf.IResolvable;
    set applyImmediately(value: boolean | cdktf.IResolvable);
    resetApplyImmediately(): void;
    get applyImmediatelyInput(): boolean | cdktf.IResolvable | undefined;
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
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _multiAz?;
    get multiAz(): boolean | cdktf.IResolvable;
    set multiAz(value: boolean | cdktf.IResolvable);
    resetMultiAz(): void;
    get multiAzInput(): boolean | cdktf.IResolvable | undefined;
    private _networkType?;
    get networkType(): string;
    set networkType(value: string);
    resetNetworkType(): void;
    get networkTypeInput(): string | undefined;
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
    get replicationInstanceArn(): string;
    private _replicationInstanceClass?;
    get replicationInstanceClass(): string;
    set replicationInstanceClass(value: string);
    get replicationInstanceClassInput(): string | undefined;
    private _replicationInstanceId?;
    get replicationInstanceId(): string;
    set replicationInstanceId(value: string);
    get replicationInstanceIdInput(): string | undefined;
    get replicationInstancePrivateIps(): string[];
    get replicationInstancePublicIps(): string[];
    private _replicationSubnetGroupId?;
    get replicationSubnetGroupId(): string;
    set replicationSubnetGroupId(value: string);
    resetReplicationSubnetGroupId(): void;
    get replicationSubnetGroupIdInput(): string | undefined;
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
    private _timeouts;
    get timeouts(): DmsReplicationInstanceTimeoutsOutputReference;
    putTimeouts(value: DmsReplicationInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DmsReplicationInstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
