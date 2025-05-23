/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpsworksInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#agent_version OpsworksInstance#agent_version}
    */
    readonly agentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#ami_id OpsworksInstance#ami_id}
    */
    readonly amiId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#architecture OpsworksInstance#architecture}
    */
    readonly architecture?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#auto_scaling_type OpsworksInstance#auto_scaling_type}
    */
    readonly autoScalingType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#availability_zone OpsworksInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#created_at OpsworksInstance#created_at}
    */
    readonly createdAt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#delete_ebs OpsworksInstance#delete_ebs}
    */
    readonly deleteEbs?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#delete_eip OpsworksInstance#delete_eip}
    */
    readonly deleteEip?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#ebs_optimized OpsworksInstance#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#ecs_cluster_arn OpsworksInstance#ecs_cluster_arn}
    */
    readonly ecsClusterArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#elastic_ip OpsworksInstance#elastic_ip}
    */
    readonly elasticIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#hostname OpsworksInstance#hostname}
    */
    readonly hostname?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#id OpsworksInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#infrastructure_class OpsworksInstance#infrastructure_class}
    */
    readonly infrastructureClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#install_updates_on_boot OpsworksInstance#install_updates_on_boot}
    */
    readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#instance_profile_arn OpsworksInstance#instance_profile_arn}
    */
    readonly instanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#instance_type OpsworksInstance#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#layer_ids OpsworksInstance#layer_ids}
    */
    readonly layerIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#os OpsworksInstance#os}
    */
    readonly os?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#root_device_type OpsworksInstance#root_device_type}
    */
    readonly rootDeviceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#security_group_ids OpsworksInstance#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#ssh_key_name OpsworksInstance#ssh_key_name}
    */
    readonly sshKeyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#stack_id OpsworksInstance#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#state OpsworksInstance#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#status OpsworksInstance#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#subnet_id OpsworksInstance#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#tenancy OpsworksInstance#tenancy}
    */
    readonly tenancy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#virtualization_type OpsworksInstance#virtualization_type}
    */
    readonly virtualizationType?: string;
    /**
    * ebs_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#ebs_block_device OpsworksInstance#ebs_block_device}
    */
    readonly ebsBlockDevice?: OpsworksInstanceEbsBlockDevice[] | cdktf.IResolvable;
    /**
    * ephemeral_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#ephemeral_block_device OpsworksInstance#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: OpsworksInstanceEphemeralBlockDevice[] | cdktf.IResolvable;
    /**
    * root_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#root_block_device OpsworksInstance#root_block_device}
    */
    readonly rootBlockDevice?: OpsworksInstanceRootBlockDevice[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#timeouts OpsworksInstance#timeouts}
    */
    readonly timeouts?: OpsworksInstanceTimeouts;
}
export interface OpsworksInstanceEbsBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#delete_on_termination OpsworksInstance#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#device_name OpsworksInstance#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#iops OpsworksInstance#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#snapshot_id OpsworksInstance#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#volume_size OpsworksInstance#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#volume_type OpsworksInstance#volume_type}
    */
    readonly volumeType?: string;
}
export declare function opsworksInstanceEbsBlockDeviceToTerraform(struct?: OpsworksInstanceEbsBlockDevice | cdktf.IResolvable): any;
export declare function opsworksInstanceEbsBlockDeviceToHclTerraform(struct?: OpsworksInstanceEbsBlockDevice | cdktf.IResolvable): any;
export declare class OpsworksInstanceEbsBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OpsworksInstanceEbsBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: OpsworksInstanceEbsBlockDevice | cdktf.IResolvable | undefined);
    private _deleteOnTermination?;
    get deleteOnTermination(): boolean | cdktf.IResolvable;
    set deleteOnTermination(value: boolean | cdktf.IResolvable);
    resetDeleteOnTermination(): void;
    get deleteOnTerminationInput(): boolean | cdktf.IResolvable | undefined;
    private _deviceName?;
    get deviceName(): string;
    set deviceName(value: string);
    get deviceNameInput(): string | undefined;
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number | undefined;
    private _snapshotId?;
    get snapshotId(): string;
    set snapshotId(value: string);
    resetSnapshotId(): void;
    get snapshotIdInput(): string | undefined;
    private _volumeSize?;
    get volumeSize(): number;
    set volumeSize(value: number);
    resetVolumeSize(): void;
    get volumeSizeInput(): number | undefined;
    private _volumeType?;
    get volumeType(): string;
    set volumeType(value: string);
    resetVolumeType(): void;
    get volumeTypeInput(): string | undefined;
}
export declare class OpsworksInstanceEbsBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OpsworksInstanceEbsBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OpsworksInstanceEbsBlockDeviceOutputReference;
}
export interface OpsworksInstanceEphemeralBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#device_name OpsworksInstance#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#virtual_name OpsworksInstance#virtual_name}
    */
    readonly virtualName: string;
}
export declare function opsworksInstanceEphemeralBlockDeviceToTerraform(struct?: OpsworksInstanceEphemeralBlockDevice | cdktf.IResolvable): any;
export declare function opsworksInstanceEphemeralBlockDeviceToHclTerraform(struct?: OpsworksInstanceEphemeralBlockDevice | cdktf.IResolvable): any;
export declare class OpsworksInstanceEphemeralBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OpsworksInstanceEphemeralBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: OpsworksInstanceEphemeralBlockDevice | cdktf.IResolvable | undefined);
    private _deviceName?;
    get deviceName(): string;
    set deviceName(value: string);
    get deviceNameInput(): string | undefined;
    private _virtualName?;
    get virtualName(): string;
    set virtualName(value: string);
    get virtualNameInput(): string | undefined;
}
export declare class OpsworksInstanceEphemeralBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OpsworksInstanceEphemeralBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OpsworksInstanceEphemeralBlockDeviceOutputReference;
}
export interface OpsworksInstanceRootBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#delete_on_termination OpsworksInstance#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#iops OpsworksInstance#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#volume_size OpsworksInstance#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#volume_type OpsworksInstance#volume_type}
    */
    readonly volumeType?: string;
}
export declare function opsworksInstanceRootBlockDeviceToTerraform(struct?: OpsworksInstanceRootBlockDevice | cdktf.IResolvable): any;
export declare function opsworksInstanceRootBlockDeviceToHclTerraform(struct?: OpsworksInstanceRootBlockDevice | cdktf.IResolvable): any;
export declare class OpsworksInstanceRootBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OpsworksInstanceRootBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: OpsworksInstanceRootBlockDevice | cdktf.IResolvable | undefined);
    private _deleteOnTermination?;
    get deleteOnTermination(): boolean | cdktf.IResolvable;
    set deleteOnTermination(value: boolean | cdktf.IResolvable);
    resetDeleteOnTermination(): void;
    get deleteOnTerminationInput(): boolean | cdktf.IResolvable | undefined;
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number | undefined;
    private _volumeSize?;
    get volumeSize(): number;
    set volumeSize(value: number);
    resetVolumeSize(): void;
    get volumeSizeInput(): number | undefined;
    private _volumeType?;
    get volumeType(): string;
    set volumeType(value: string);
    resetVolumeType(): void;
    get volumeTypeInput(): string | undefined;
}
export declare class OpsworksInstanceRootBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OpsworksInstanceRootBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OpsworksInstanceRootBlockDeviceOutputReference;
}
export interface OpsworksInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#create OpsworksInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#delete OpsworksInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#update OpsworksInstance#update}
    */
    readonly update?: string;
}
export declare function opsworksInstanceTimeoutsToTerraform(struct?: OpsworksInstanceTimeouts | cdktf.IResolvable): any;
export declare function opsworksInstanceTimeoutsToHclTerraform(struct?: OpsworksInstanceTimeouts | cdktf.IResolvable): any;
export declare class OpsworksInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpsworksInstanceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: OpsworksInstanceTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance aws_opsworks_instance}
*/
export declare class OpsworksInstance extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opsworks_instance";
    /**
    * Generates CDKTF code for importing a OpsworksInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpsworksInstance to import
    * @param importFromId The id of the existing OpsworksInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpsworksInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_instance aws_opsworks_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksInstanceConfig
    */
    constructor(scope: Construct, id: string, config: OpsworksInstanceConfig);
    private _agentVersion?;
    get agentVersion(): string;
    set agentVersion(value: string);
    resetAgentVersion(): void;
    get agentVersionInput(): string | undefined;
    private _amiId?;
    get amiId(): string;
    set amiId(value: string);
    resetAmiId(): void;
    get amiIdInput(): string | undefined;
    private _architecture?;
    get architecture(): string;
    set architecture(value: string);
    resetArchitecture(): void;
    get architectureInput(): string | undefined;
    private _autoScalingType?;
    get autoScalingType(): string;
    set autoScalingType(value: string);
    resetAutoScalingType(): void;
    get autoScalingTypeInput(): string | undefined;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _createdAt?;
    get createdAt(): string;
    set createdAt(value: string);
    resetCreatedAt(): void;
    get createdAtInput(): string | undefined;
    private _deleteEbs?;
    get deleteEbs(): boolean | cdktf.IResolvable;
    set deleteEbs(value: boolean | cdktf.IResolvable);
    resetDeleteEbs(): void;
    get deleteEbsInput(): boolean | cdktf.IResolvable | undefined;
    private _deleteEip?;
    get deleteEip(): boolean | cdktf.IResolvable;
    set deleteEip(value: boolean | cdktf.IResolvable);
    resetDeleteEip(): void;
    get deleteEipInput(): boolean | cdktf.IResolvable | undefined;
    private _ebsOptimized?;
    get ebsOptimized(): boolean | cdktf.IResolvable;
    set ebsOptimized(value: boolean | cdktf.IResolvable);
    resetEbsOptimized(): void;
    get ebsOptimizedInput(): boolean | cdktf.IResolvable | undefined;
    get ec2InstanceId(): string;
    private _ecsClusterArn?;
    get ecsClusterArn(): string;
    set ecsClusterArn(value: string);
    resetEcsClusterArn(): void;
    get ecsClusterArnInput(): string | undefined;
    private _elasticIp?;
    get elasticIp(): string;
    set elasticIp(value: string);
    resetElasticIp(): void;
    get elasticIpInput(): string | undefined;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    resetHostname(): void;
    get hostnameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _infrastructureClass?;
    get infrastructureClass(): string;
    set infrastructureClass(value: string);
    resetInfrastructureClass(): void;
    get infrastructureClassInput(): string | undefined;
    private _installUpdatesOnBoot?;
    get installUpdatesOnBoot(): boolean | cdktf.IResolvable;
    set installUpdatesOnBoot(value: boolean | cdktf.IResolvable);
    resetInstallUpdatesOnBoot(): void;
    get installUpdatesOnBootInput(): boolean | cdktf.IResolvable | undefined;
    private _instanceProfileArn?;
    get instanceProfileArn(): string;
    set instanceProfileArn(value: string);
    resetInstanceProfileArn(): void;
    get instanceProfileArnInput(): string | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    get lastServiceErrorId(): string;
    private _layerIds?;
    get layerIds(): string[];
    set layerIds(value: string[]);
    get layerIdsInput(): string[] | undefined;
    private _os?;
    get os(): string;
    set os(value: string);
    resetOs(): void;
    get osInput(): string | undefined;
    get platform(): string;
    get privateDns(): string;
    get privateIp(): string;
    get publicDns(): string;
    get publicIp(): string;
    get registeredBy(): string;
    get reportedAgentVersion(): string;
    get reportedOsFamily(): string;
    get reportedOsName(): string;
    get reportedOsVersion(): string;
    private _rootDeviceType?;
    get rootDeviceType(): string;
    set rootDeviceType(value: string);
    resetRootDeviceType(): void;
    get rootDeviceTypeInput(): string | undefined;
    get rootDeviceVolumeId(): string;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    get sshHostDsaKeyFingerprint(): string;
    get sshHostRsaKeyFingerprint(): string;
    private _sshKeyName?;
    get sshKeyName(): string;
    set sshKeyName(value: string);
    resetSshKeyName(): void;
    get sshKeyNameInput(): string | undefined;
    private _stackId?;
    get stackId(): string;
    set stackId(value: string);
    get stackIdInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
    private _tenancy?;
    get tenancy(): string;
    set tenancy(value: string);
    resetTenancy(): void;
    get tenancyInput(): string | undefined;
    private _virtualizationType?;
    get virtualizationType(): string;
    set virtualizationType(value: string);
    resetVirtualizationType(): void;
    get virtualizationTypeInput(): string | undefined;
    private _ebsBlockDevice;
    get ebsBlockDevice(): OpsworksInstanceEbsBlockDeviceList;
    putEbsBlockDevice(value: OpsworksInstanceEbsBlockDevice[] | cdktf.IResolvable): void;
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): cdktf.IResolvable | OpsworksInstanceEbsBlockDevice[] | undefined;
    private _ephemeralBlockDevice;
    get ephemeralBlockDevice(): OpsworksInstanceEphemeralBlockDeviceList;
    putEphemeralBlockDevice(value: OpsworksInstanceEphemeralBlockDevice[] | cdktf.IResolvable): void;
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): cdktf.IResolvable | OpsworksInstanceEphemeralBlockDevice[] | undefined;
    private _rootBlockDevice;
    get rootBlockDevice(): OpsworksInstanceRootBlockDeviceList;
    putRootBlockDevice(value: OpsworksInstanceRootBlockDevice[] | cdktf.IResolvable): void;
    resetRootBlockDevice(): void;
    get rootBlockDeviceInput(): cdktf.IResolvable | OpsworksInstanceRootBlockDevice[] | undefined;
    private _timeouts;
    get timeouts(): OpsworksInstanceTimeoutsOutputReference;
    putTimeouts(value: OpsworksInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | OpsworksInstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
