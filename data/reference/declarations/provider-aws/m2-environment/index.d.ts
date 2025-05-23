/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface M2EnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#apply_changes_during_maintenance_window M2Environment#apply_changes_during_maintenance_window}
    */
    readonly applyChangesDuringMaintenanceWindow?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#description M2Environment#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#engine_type M2Environment#engine_type}
    */
    readonly engineType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#engine_version M2Environment#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#force_update M2Environment#force_update}
    */
    readonly forceUpdate?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#instance_type M2Environment#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#kms_key_id M2Environment#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#name M2Environment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#preferred_maintenance_window M2Environment#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#publicly_accessible M2Environment#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#security_group_ids M2Environment#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#subnet_ids M2Environment#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#tags M2Environment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * high_availability_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#high_availability_config M2Environment#high_availability_config}
    */
    readonly highAvailabilityConfig?: M2EnvironmentHighAvailabilityConfig[] | cdktf.IResolvable;
    /**
    * storage_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#storage_configuration M2Environment#storage_configuration}
    */
    readonly storageConfiguration?: M2EnvironmentStorageConfiguration[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#timeouts M2Environment#timeouts}
    */
    readonly timeouts?: M2EnvironmentTimeouts;
}
export interface M2EnvironmentHighAvailabilityConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#desired_capacity M2Environment#desired_capacity}
    */
    readonly desiredCapacity: number;
}
export declare function m2EnvironmentHighAvailabilityConfigToTerraform(struct?: M2EnvironmentHighAvailabilityConfig | cdktf.IResolvable): any;
export declare function m2EnvironmentHighAvailabilityConfigToHclTerraform(struct?: M2EnvironmentHighAvailabilityConfig | cdktf.IResolvable): any;
export declare class M2EnvironmentHighAvailabilityConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): M2EnvironmentHighAvailabilityConfig | cdktf.IResolvable | undefined;
    set internalValue(value: M2EnvironmentHighAvailabilityConfig | cdktf.IResolvable | undefined);
    private _desiredCapacity?;
    get desiredCapacity(): number;
    set desiredCapacity(value: number);
    get desiredCapacityInput(): number | undefined;
}
export declare class M2EnvironmentHighAvailabilityConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: M2EnvironmentHighAvailabilityConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): M2EnvironmentHighAvailabilityConfigOutputReference;
}
export interface M2EnvironmentStorageConfigurationEfs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#file_system_id M2Environment#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#mount_point M2Environment#mount_point}
    */
    readonly mountPoint: string;
}
export declare function m2EnvironmentStorageConfigurationEfsToTerraform(struct?: M2EnvironmentStorageConfigurationEfs | cdktf.IResolvable): any;
export declare function m2EnvironmentStorageConfigurationEfsToHclTerraform(struct?: M2EnvironmentStorageConfigurationEfs | cdktf.IResolvable): any;
export declare class M2EnvironmentStorageConfigurationEfsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): M2EnvironmentStorageConfigurationEfs | cdktf.IResolvable | undefined;
    set internalValue(value: M2EnvironmentStorageConfigurationEfs | cdktf.IResolvable | undefined);
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string | undefined;
    private _mountPoint?;
    get mountPoint(): string;
    set mountPoint(value: string);
    get mountPointInput(): string | undefined;
}
export declare class M2EnvironmentStorageConfigurationEfsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: M2EnvironmentStorageConfigurationEfs[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): M2EnvironmentStorageConfigurationEfsOutputReference;
}
export interface M2EnvironmentStorageConfigurationFsx {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#file_system_id M2Environment#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#mount_point M2Environment#mount_point}
    */
    readonly mountPoint: string;
}
export declare function m2EnvironmentStorageConfigurationFsxToTerraform(struct?: M2EnvironmentStorageConfigurationFsx | cdktf.IResolvable): any;
export declare function m2EnvironmentStorageConfigurationFsxToHclTerraform(struct?: M2EnvironmentStorageConfigurationFsx | cdktf.IResolvable): any;
export declare class M2EnvironmentStorageConfigurationFsxOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): M2EnvironmentStorageConfigurationFsx | cdktf.IResolvable | undefined;
    set internalValue(value: M2EnvironmentStorageConfigurationFsx | cdktf.IResolvable | undefined);
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string | undefined;
    private _mountPoint?;
    get mountPoint(): string;
    set mountPoint(value: string);
    get mountPointInput(): string | undefined;
}
export declare class M2EnvironmentStorageConfigurationFsxList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: M2EnvironmentStorageConfigurationFsx[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): M2EnvironmentStorageConfigurationFsxOutputReference;
}
export interface M2EnvironmentStorageConfiguration {
    /**
    * efs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#efs M2Environment#efs}
    */
    readonly efs?: M2EnvironmentStorageConfigurationEfs[] | cdktf.IResolvable;
    /**
    * fsx block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#fsx M2Environment#fsx}
    */
    readonly fsx?: M2EnvironmentStorageConfigurationFsx[] | cdktf.IResolvable;
}
export declare function m2EnvironmentStorageConfigurationToTerraform(struct?: M2EnvironmentStorageConfiguration | cdktf.IResolvable): any;
export declare function m2EnvironmentStorageConfigurationToHclTerraform(struct?: M2EnvironmentStorageConfiguration | cdktf.IResolvable): any;
export declare class M2EnvironmentStorageConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): M2EnvironmentStorageConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: M2EnvironmentStorageConfiguration | cdktf.IResolvable | undefined);
    private _efs;
    get efs(): M2EnvironmentStorageConfigurationEfsList;
    putEfs(value: M2EnvironmentStorageConfigurationEfs[] | cdktf.IResolvable): void;
    resetEfs(): void;
    get efsInput(): cdktf.IResolvable | M2EnvironmentStorageConfigurationEfs[] | undefined;
    private _fsx;
    get fsx(): M2EnvironmentStorageConfigurationFsxList;
    putFsx(value: M2EnvironmentStorageConfigurationFsx[] | cdktf.IResolvable): void;
    resetFsx(): void;
    get fsxInput(): cdktf.IResolvable | M2EnvironmentStorageConfigurationFsx[] | undefined;
}
export declare class M2EnvironmentStorageConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: M2EnvironmentStorageConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): M2EnvironmentStorageConfigurationOutputReference;
}
export interface M2EnvironmentTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#create M2Environment#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#delete M2Environment#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#update M2Environment#update}
    */
    readonly update?: string;
}
export declare function m2EnvironmentTimeoutsToTerraform(struct?: M2EnvironmentTimeouts | cdktf.IResolvable): any;
export declare function m2EnvironmentTimeoutsToHclTerraform(struct?: M2EnvironmentTimeouts | cdktf.IResolvable): any;
export declare class M2EnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): M2EnvironmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: M2EnvironmentTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment aws_m2_environment}
*/
export declare class M2Environment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_m2_environment";
    /**
    * Generates CDKTF code for importing a M2Environment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the M2Environment to import
    * @param importFromId The id of the existing M2Environment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the M2Environment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_environment aws_m2_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options M2EnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: M2EnvironmentConfig);
    private _applyChangesDuringMaintenanceWindow?;
    get applyChangesDuringMaintenanceWindow(): boolean | cdktf.IResolvable;
    set applyChangesDuringMaintenanceWindow(value: boolean | cdktf.IResolvable);
    resetApplyChangesDuringMaintenanceWindow(): void;
    get applyChangesDuringMaintenanceWindowInput(): boolean | cdktf.IResolvable | undefined;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _engineType?;
    get engineType(): string;
    set engineType(value: string);
    get engineTypeInput(): string | undefined;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string | undefined;
    get environmentId(): string;
    private _forceUpdate?;
    get forceUpdate(): boolean | cdktf.IResolvable;
    set forceUpdate(value: boolean | cdktf.IResolvable);
    resetForceUpdate(): void;
    get forceUpdateInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get loadBalancerArn(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
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
    private _highAvailabilityConfig;
    get highAvailabilityConfig(): M2EnvironmentHighAvailabilityConfigList;
    putHighAvailabilityConfig(value: M2EnvironmentHighAvailabilityConfig[] | cdktf.IResolvable): void;
    resetHighAvailabilityConfig(): void;
    get highAvailabilityConfigInput(): cdktf.IResolvable | M2EnvironmentHighAvailabilityConfig[] | undefined;
    private _storageConfiguration;
    get storageConfiguration(): M2EnvironmentStorageConfigurationList;
    putStorageConfiguration(value: M2EnvironmentStorageConfiguration[] | cdktf.IResolvable): void;
    resetStorageConfiguration(): void;
    get storageConfigurationInput(): cdktf.IResolvable | M2EnvironmentStorageConfiguration[] | undefined;
    private _timeouts;
    get timeouts(): M2EnvironmentTimeoutsOutputReference;
    putTimeouts(value: M2EnvironmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | M2EnvironmentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
