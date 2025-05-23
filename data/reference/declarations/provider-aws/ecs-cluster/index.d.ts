/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcsClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#id EcsCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#name EcsCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#tags EcsCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#tags_all EcsCluster#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#configuration EcsCluster#configuration}
    */
    readonly configuration?: EcsClusterConfiguration;
    /**
    * service_connect_defaults block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#service_connect_defaults EcsCluster#service_connect_defaults}
    */
    readonly serviceConnectDefaults?: EcsClusterServiceConnectDefaults;
    /**
    * setting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#setting EcsCluster#setting}
    */
    readonly setting?: EcsClusterSetting[] | cdktf.IResolvable;
}
export interface EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#cloud_watch_encryption_enabled EcsCluster#cloud_watch_encryption_enabled}
    */
    readonly cloudWatchEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#cloud_watch_log_group_name EcsCluster#cloud_watch_log_group_name}
    */
    readonly cloudWatchLogGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#s3_bucket_encryption_enabled EcsCluster#s3_bucket_encryption_enabled}
    */
    readonly s3BucketEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#s3_bucket_name EcsCluster#s3_bucket_name}
    */
    readonly s3BucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#s3_key_prefix EcsCluster#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
}
export declare function ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform(struct?: EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference | EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration): any;
export declare function ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToHclTerraform(struct?: EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference | EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration): any;
export declare class EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration | undefined;
    set internalValue(value: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration | undefined);
    private _cloudWatchEncryptionEnabled?;
    get cloudWatchEncryptionEnabled(): boolean | cdktf.IResolvable;
    set cloudWatchEncryptionEnabled(value: boolean | cdktf.IResolvable);
    resetCloudWatchEncryptionEnabled(): void;
    get cloudWatchEncryptionEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _cloudWatchLogGroupName?;
    get cloudWatchLogGroupName(): string;
    set cloudWatchLogGroupName(value: string);
    resetCloudWatchLogGroupName(): void;
    get cloudWatchLogGroupNameInput(): string | undefined;
    private _s3BucketEncryptionEnabled?;
    get s3BucketEncryptionEnabled(): boolean | cdktf.IResolvable;
    set s3BucketEncryptionEnabled(value: boolean | cdktf.IResolvable);
    resetS3BucketEncryptionEnabled(): void;
    get s3BucketEncryptionEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _s3BucketName?;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    resetS3BucketName(): void;
    get s3BucketNameInput(): string | undefined;
    private _s3KeyPrefix?;
    get s3KeyPrefix(): string;
    set s3KeyPrefix(value: string);
    resetS3KeyPrefix(): void;
    get s3KeyPrefixInput(): string | undefined;
}
export interface EcsClusterConfigurationExecuteCommandConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#kms_key_id EcsCluster#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#logging EcsCluster#logging}
    */
    readonly logging?: string;
    /**
    * log_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#log_configuration EcsCluster#log_configuration}
    */
    readonly logConfiguration?: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration;
}
export declare function ecsClusterConfigurationExecuteCommandConfigurationToTerraform(struct?: EcsClusterConfigurationExecuteCommandConfigurationOutputReference | EcsClusterConfigurationExecuteCommandConfiguration): any;
export declare function ecsClusterConfigurationExecuteCommandConfigurationToHclTerraform(struct?: EcsClusterConfigurationExecuteCommandConfigurationOutputReference | EcsClusterConfigurationExecuteCommandConfiguration): any;
export declare class EcsClusterConfigurationExecuteCommandConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsClusterConfigurationExecuteCommandConfiguration | undefined;
    set internalValue(value: EcsClusterConfigurationExecuteCommandConfiguration | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _logging?;
    get logging(): string;
    set logging(value: string);
    resetLogging(): void;
    get loggingInput(): string | undefined;
    private _logConfiguration;
    get logConfiguration(): EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference;
    putLogConfiguration(value: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration): void;
    resetLogConfiguration(): void;
    get logConfigurationInput(): EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration | undefined;
}
export interface EcsClusterConfigurationManagedStorageConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#fargate_ephemeral_storage_kms_key_id EcsCluster#fargate_ephemeral_storage_kms_key_id}
    */
    readonly fargateEphemeralStorageKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#kms_key_id EcsCluster#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export declare function ecsClusterConfigurationManagedStorageConfigurationToTerraform(struct?: EcsClusterConfigurationManagedStorageConfigurationOutputReference | EcsClusterConfigurationManagedStorageConfiguration): any;
export declare function ecsClusterConfigurationManagedStorageConfigurationToHclTerraform(struct?: EcsClusterConfigurationManagedStorageConfigurationOutputReference | EcsClusterConfigurationManagedStorageConfiguration): any;
export declare class EcsClusterConfigurationManagedStorageConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsClusterConfigurationManagedStorageConfiguration | undefined;
    set internalValue(value: EcsClusterConfigurationManagedStorageConfiguration | undefined);
    private _fargateEphemeralStorageKmsKeyId?;
    get fargateEphemeralStorageKmsKeyId(): string;
    set fargateEphemeralStorageKmsKeyId(value: string);
    resetFargateEphemeralStorageKmsKeyId(): void;
    get fargateEphemeralStorageKmsKeyIdInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
}
export interface EcsClusterConfiguration {
    /**
    * execute_command_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#execute_command_configuration EcsCluster#execute_command_configuration}
    */
    readonly executeCommandConfiguration?: EcsClusterConfigurationExecuteCommandConfiguration;
    /**
    * managed_storage_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#managed_storage_configuration EcsCluster#managed_storage_configuration}
    */
    readonly managedStorageConfiguration?: EcsClusterConfigurationManagedStorageConfiguration;
}
export declare function ecsClusterConfigurationToTerraform(struct?: EcsClusterConfigurationOutputReference | EcsClusterConfiguration): any;
export declare function ecsClusterConfigurationToHclTerraform(struct?: EcsClusterConfigurationOutputReference | EcsClusterConfiguration): any;
export declare class EcsClusterConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsClusterConfiguration | undefined;
    set internalValue(value: EcsClusterConfiguration | undefined);
    private _executeCommandConfiguration;
    get executeCommandConfiguration(): EcsClusterConfigurationExecuteCommandConfigurationOutputReference;
    putExecuteCommandConfiguration(value: EcsClusterConfigurationExecuteCommandConfiguration): void;
    resetExecuteCommandConfiguration(): void;
    get executeCommandConfigurationInput(): EcsClusterConfigurationExecuteCommandConfiguration | undefined;
    private _managedStorageConfiguration;
    get managedStorageConfiguration(): EcsClusterConfigurationManagedStorageConfigurationOutputReference;
    putManagedStorageConfiguration(value: EcsClusterConfigurationManagedStorageConfiguration): void;
    resetManagedStorageConfiguration(): void;
    get managedStorageConfigurationInput(): EcsClusterConfigurationManagedStorageConfiguration | undefined;
}
export interface EcsClusterServiceConnectDefaults {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#namespace EcsCluster#namespace}
    */
    readonly namespace: string;
}
export declare function ecsClusterServiceConnectDefaultsToTerraform(struct?: EcsClusterServiceConnectDefaultsOutputReference | EcsClusterServiceConnectDefaults): any;
export declare function ecsClusterServiceConnectDefaultsToHclTerraform(struct?: EcsClusterServiceConnectDefaultsOutputReference | EcsClusterServiceConnectDefaults): any;
export declare class EcsClusterServiceConnectDefaultsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsClusterServiceConnectDefaults | undefined;
    set internalValue(value: EcsClusterServiceConnectDefaults | undefined);
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string | undefined;
}
export interface EcsClusterSetting {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#name EcsCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#value EcsCluster#value}
    */
    readonly value: string;
}
export declare function ecsClusterSettingToTerraform(struct?: EcsClusterSetting | cdktf.IResolvable): any;
export declare function ecsClusterSettingToHclTerraform(struct?: EcsClusterSetting | cdktf.IResolvable): any;
export declare class EcsClusterSettingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcsClusterSetting | cdktf.IResolvable | undefined;
    set internalValue(value: EcsClusterSetting | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class EcsClusterSettingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcsClusterSetting[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcsClusterSettingOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster aws_ecs_cluster}
*/
export declare class EcsCluster extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ecs_cluster";
    /**
    * Generates CDKTF code for importing a EcsCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EcsCluster to import
    * @param importFromId The id of the existing EcsCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EcsCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster aws_ecs_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsClusterConfig
    */
    constructor(scope: Construct, id: string, config: EcsClusterConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _configuration;
    get configuration(): EcsClusterConfigurationOutputReference;
    putConfiguration(value: EcsClusterConfiguration): void;
    resetConfiguration(): void;
    get configurationInput(): EcsClusterConfiguration | undefined;
    private _serviceConnectDefaults;
    get serviceConnectDefaults(): EcsClusterServiceConnectDefaultsOutputReference;
    putServiceConnectDefaults(value: EcsClusterServiceConnectDefaults): void;
    resetServiceConnectDefaults(): void;
    get serviceConnectDefaultsInput(): EcsClusterServiceConnectDefaults | undefined;
    private _setting;
    get setting(): EcsClusterSettingList;
    putSetting(value: EcsClusterSetting[] | cdktf.IResolvable): void;
    resetSetting(): void;
    get settingInput(): cdktf.IResolvable | EcsClusterSetting[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
