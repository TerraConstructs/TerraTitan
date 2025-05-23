/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecuritylakeDataLakeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#meta_store_manager_role_arn SecuritylakeDataLake#meta_store_manager_role_arn}
    */
    readonly metaStoreManagerRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#tags SecuritylakeDataLake#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#configuration SecuritylakeDataLake#configuration}
    */
    readonly configuration?: SecuritylakeDataLakeConfiguration[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#timeouts SecuritylakeDataLake#timeouts}
    */
    readonly timeouts?: SecuritylakeDataLakeTimeouts;
}
export interface SecuritylakeDataLakeConfigurationEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#kms_key_id SecuritylakeDataLake#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export declare function securitylakeDataLakeConfigurationEncryptionConfigurationToTerraform(struct?: SecuritylakeDataLakeConfigurationEncryptionConfiguration | cdktf.IResolvable): any;
export declare function securitylakeDataLakeConfigurationEncryptionConfigurationToHclTerraform(struct?: SecuritylakeDataLakeConfigurationEncryptionConfiguration | cdktf.IResolvable): any;
export declare class SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeDataLakeConfigurationEncryptionConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: SecuritylakeDataLakeConfigurationEncryptionConfiguration | cdktf.IResolvable | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
}
export declare class SecuritylakeDataLakeConfigurationEncryptionConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecuritylakeDataLakeConfigurationEncryptionConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference;
}
export interface SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}
    */
    readonly days?: number;
}
export declare function securitylakeDataLakeConfigurationLifecycleConfigurationExpirationToTerraform(struct?: SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration | cdktf.IResolvable): any;
export declare function securitylakeDataLakeConfigurationLifecycleConfigurationExpirationToHclTerraform(struct?: SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration | cdktf.IResolvable): any;
export declare class SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration | cdktf.IResolvable | undefined;
    set internalValue(value: SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration | cdktf.IResolvable | undefined);
    private _days?;
    get days(): number;
    set days(value: number);
    resetDays(): void;
    get daysInput(): number | undefined;
}
export declare class SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference;
}
export interface SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}
    */
    readonly days?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#storage_class SecuritylakeDataLake#storage_class}
    */
    readonly storageClass?: string;
}
export declare function securitylakeDataLakeConfigurationLifecycleConfigurationTransitionToTerraform(struct?: SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition | cdktf.IResolvable): any;
export declare function securitylakeDataLakeConfigurationLifecycleConfigurationTransitionToHclTerraform(struct?: SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition | cdktf.IResolvable): any;
export declare class SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition | cdktf.IResolvable | undefined;
    set internalValue(value: SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition | cdktf.IResolvable | undefined);
    private _days?;
    get days(): number;
    set days(value: number);
    resetDays(): void;
    get daysInput(): number | undefined;
    private _storageClass?;
    get storageClass(): string;
    set storageClass(value: string);
    resetStorageClass(): void;
    get storageClassInput(): string | undefined;
}
export declare class SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference;
}
export interface SecuritylakeDataLakeConfigurationLifecycleConfiguration {
    /**
    * expiration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#expiration SecuritylakeDataLake#expiration}
    */
    readonly expiration?: SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration[] | cdktf.IResolvable;
    /**
    * transition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#transition SecuritylakeDataLake#transition}
    */
    readonly transition?: SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition[] | cdktf.IResolvable;
}
export declare function securitylakeDataLakeConfigurationLifecycleConfigurationToTerraform(struct?: SecuritylakeDataLakeConfigurationLifecycleConfiguration | cdktf.IResolvable): any;
export declare function securitylakeDataLakeConfigurationLifecycleConfigurationToHclTerraform(struct?: SecuritylakeDataLakeConfigurationLifecycleConfiguration | cdktf.IResolvable): any;
export declare class SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeDataLakeConfigurationLifecycleConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: SecuritylakeDataLakeConfigurationLifecycleConfiguration | cdktf.IResolvable | undefined);
    private _expiration;
    get expiration(): SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList;
    putExpiration(value: SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration[] | cdktf.IResolvable): void;
    resetExpiration(): void;
    get expirationInput(): cdktf.IResolvable | SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration[] | undefined;
    private _transition;
    get transition(): SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList;
    putTransition(value: SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition[] | cdktf.IResolvable): void;
    resetTransition(): void;
    get transitionInput(): cdktf.IResolvable | SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition[] | undefined;
}
export declare class SecuritylakeDataLakeConfigurationLifecycleConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecuritylakeDataLakeConfigurationLifecycleConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference;
}
export interface SecuritylakeDataLakeConfigurationReplicationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#regions SecuritylakeDataLake#regions}
    */
    readonly regions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#role_arn SecuritylakeDataLake#role_arn}
    */
    readonly roleArn?: string;
}
export declare function securitylakeDataLakeConfigurationReplicationConfigurationToTerraform(struct?: SecuritylakeDataLakeConfigurationReplicationConfiguration | cdktf.IResolvable): any;
export declare function securitylakeDataLakeConfigurationReplicationConfigurationToHclTerraform(struct?: SecuritylakeDataLakeConfigurationReplicationConfiguration | cdktf.IResolvable): any;
export declare class SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeDataLakeConfigurationReplicationConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: SecuritylakeDataLakeConfigurationReplicationConfiguration | cdktf.IResolvable | undefined);
    private _regions?;
    get regions(): string[];
    set regions(value: string[]);
    resetRegions(): void;
    get regionsInput(): string[] | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
}
export declare class SecuritylakeDataLakeConfigurationReplicationConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecuritylakeDataLakeConfigurationReplicationConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference;
}
export interface SecuritylakeDataLakeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#encryption_configuration SecuritylakeDataLake#encryption_configuration}
    */
    readonly encryptionConfiguration?: SecuritylakeDataLakeConfigurationEncryptionConfiguration[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#region SecuritylakeDataLake#region}
    */
    readonly region: string;
    /**
    * lifecycle_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#lifecycle_configuration SecuritylakeDataLake#lifecycle_configuration}
    */
    readonly lifecycleConfiguration?: SecuritylakeDataLakeConfigurationLifecycleConfiguration[] | cdktf.IResolvable;
    /**
    * replication_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#replication_configuration SecuritylakeDataLake#replication_configuration}
    */
    readonly replicationConfiguration?: SecuritylakeDataLakeConfigurationReplicationConfiguration[] | cdktf.IResolvable;
}
export declare function securitylakeDataLakeConfigurationToTerraform(struct?: SecuritylakeDataLakeConfiguration | cdktf.IResolvable): any;
export declare function securitylakeDataLakeConfigurationToHclTerraform(struct?: SecuritylakeDataLakeConfiguration | cdktf.IResolvable): any;
export declare class SecuritylakeDataLakeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeDataLakeConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: SecuritylakeDataLakeConfiguration | cdktf.IResolvable | undefined);
    private _encryptionConfiguration;
    get encryptionConfiguration(): SecuritylakeDataLakeConfigurationEncryptionConfigurationList;
    putEncryptionConfiguration(value: SecuritylakeDataLakeConfigurationEncryptionConfiguration[] | cdktf.IResolvable): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): cdktf.IResolvable | SecuritylakeDataLakeConfigurationEncryptionConfiguration[] | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    get regionInput(): string | undefined;
    private _lifecycleConfiguration;
    get lifecycleConfiguration(): SecuritylakeDataLakeConfigurationLifecycleConfigurationList;
    putLifecycleConfiguration(value: SecuritylakeDataLakeConfigurationLifecycleConfiguration[] | cdktf.IResolvable): void;
    resetLifecycleConfiguration(): void;
    get lifecycleConfigurationInput(): cdktf.IResolvable | SecuritylakeDataLakeConfigurationLifecycleConfiguration[] | undefined;
    private _replicationConfiguration;
    get replicationConfiguration(): SecuritylakeDataLakeConfigurationReplicationConfigurationList;
    putReplicationConfiguration(value: SecuritylakeDataLakeConfigurationReplicationConfiguration[] | cdktf.IResolvable): void;
    resetReplicationConfiguration(): void;
    get replicationConfigurationInput(): cdktf.IResolvable | SecuritylakeDataLakeConfigurationReplicationConfiguration[] | undefined;
}
export declare class SecuritylakeDataLakeConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecuritylakeDataLakeConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecuritylakeDataLakeConfigurationOutputReference;
}
export interface SecuritylakeDataLakeTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#create SecuritylakeDataLake#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#delete SecuritylakeDataLake#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#update SecuritylakeDataLake#update}
    */
    readonly update?: string;
}
export declare function securitylakeDataLakeTimeoutsToTerraform(struct?: SecuritylakeDataLakeTimeouts | cdktf.IResolvable): any;
export declare function securitylakeDataLakeTimeoutsToHclTerraform(struct?: SecuritylakeDataLakeTimeouts | cdktf.IResolvable): any;
export declare class SecuritylakeDataLakeTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecuritylakeDataLakeTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SecuritylakeDataLakeTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake aws_securitylake_data_lake}
*/
export declare class SecuritylakeDataLake extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_securitylake_data_lake";
    /**
    * Generates CDKTF code for importing a SecuritylakeDataLake resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecuritylakeDataLake to import
    * @param importFromId The id of the existing SecuritylakeDataLake that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecuritylakeDataLake to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_data_lake aws_securitylake_data_lake} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecuritylakeDataLakeConfig
    */
    constructor(scope: Construct, id: string, config: SecuritylakeDataLakeConfig);
    get arn(): string;
    get id(): string;
    private _metaStoreManagerRoleArn?;
    get metaStoreManagerRoleArn(): string;
    set metaStoreManagerRoleArn(value: string);
    get metaStoreManagerRoleArnInput(): string | undefined;
    get s3BucketArn(): string;
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
    private _configuration;
    get configuration(): SecuritylakeDataLakeConfigurationList;
    putConfiguration(value: SecuritylakeDataLakeConfiguration[] | cdktf.IResolvable): void;
    resetConfiguration(): void;
    get configurationInput(): cdktf.IResolvable | SecuritylakeDataLakeConfiguration[] | undefined;
    private _timeouts;
    get timeouts(): SecuritylakeDataLakeTimeoutsOutputReference;
    putTimeouts(value: SecuritylakeDataLakeTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SecuritylakeDataLakeTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
