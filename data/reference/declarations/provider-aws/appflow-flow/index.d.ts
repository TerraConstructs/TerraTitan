/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppflowFlowConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#description AppflowFlow#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#id AppflowFlow#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#kms_arn AppflowFlow#kms_arn}
    */
    readonly kmsArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#name AppflowFlow#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#tags AppflowFlow#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#tags_all AppflowFlow#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * destination_flow_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#destination_flow_config AppflowFlow#destination_flow_config}
    */
    readonly destinationFlowConfig: AppflowFlowDestinationFlowConfig[] | cdktf.IResolvable;
    /**
    * metadata_catalog_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#metadata_catalog_config AppflowFlow#metadata_catalog_config}
    */
    readonly metadataCatalogConfig?: AppflowFlowMetadataCatalogConfig;
    /**
    * source_flow_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#source_flow_config AppflowFlow#source_flow_config}
    */
    readonly sourceFlowConfig: AppflowFlowSourceFlowConfig;
    /**
    * task block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#task AppflowFlow#task}
    */
    readonly task: AppflowFlowTask[] | cdktf.IResolvable;
    /**
    * trigger_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#trigger_config AppflowFlow#trigger_config}
    */
    readonly triggerConfig: AppflowFlowTriggerConfig;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
    */
    readonly failOnFirstDestinationError?: boolean | cdktf.IResolvable;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    private _failOnFirstDestinationError?;
    get failOnFirstDestinationError(): boolean | cdktf.IResolvable;
    set failOnFirstDestinationError(value: boolean | cdktf.IResolvable);
    resetFailOnFirstDestinationError(): void;
    get failOnFirstDestinationErrorInput(): boolean | cdktf.IResolvable | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#custom_properties AppflowFlow#custom_properties}
    */
    readonly customProperties?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#entity_name AppflowFlow#entity_name}
    */
    readonly entityName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#id_field_names AppflowFlow#id_field_names}
    */
    readonly idFieldNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#write_operation_type AppflowFlow#write_operation_type}
    */
    readonly writeOperationType?: string;
    /**
    * error_handling_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector | undefined);
    private _customProperties?;
    get customProperties(): {
        [key: string]: string;
    };
    set customProperties(value: {
        [key: string]: string;
    });
    resetCustomProperties(): void;
    get customPropertiesInput(): {
        [key: string]: string;
    } | undefined;
    private _entityName?;
    get entityName(): string;
    set entityName(value: string);
    get entityNameInput(): string | undefined;
    private _idFieldNames?;
    get idFieldNames(): string[];
    set idFieldNames(value: string[]);
    resetIdFieldNames(): void;
    get idFieldNamesInput(): string[] | undefined;
    private _writeOperationType?;
    get writeOperationType(): string;
    set writeOperationType(value: string);
    resetWriteOperationType(): void;
    get writeOperationTypeInput(): string | undefined;
    private _errorHandlingConfig;
    get errorHandlingConfig(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigOutputReference;
    putErrorHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig): void;
    resetErrorHandlingConfig(): void;
    get errorHandlingConfigInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#domain_name AppflowFlow#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object_type_name AppflowFlow#object_type_name}
    */
    readonly objectTypeName?: string;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfilesToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfilesOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfilesToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfilesOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfilesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles | undefined);
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _objectTypeName?;
    get objectTypeName(): string;
    set objectTypeName(value: string);
    resetObjectTypeName(): void;
    get objectTypeNameInput(): string | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
    */
    readonly failOnFirstDestinationError?: boolean | cdktf.IResolvable;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    private _failOnFirstDestinationError?;
    get failOnFirstDestinationError(): boolean | cdktf.IResolvable;
    set failOnFirstDestinationError(value: boolean | cdktf.IResolvable);
    resetFailOnFirstDestinationError(): void;
    get failOnFirstDestinationErrorInput(): boolean | cdktf.IResolvable | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
    /**
    * error_handling_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge | undefined);
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
    private _errorHandlingConfig;
    get errorHandlingConfig(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigOutputReference;
    putErrorHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig): void;
    resetErrorHandlingConfig(): void;
    get errorHandlingConfigInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
    */
    readonly failOnFirstDestinationError?: boolean | cdktf.IResolvable;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    private _failOnFirstDestinationError?;
    get failOnFirstDestinationError(): boolean | cdktf.IResolvable;
    set failOnFirstDestinationError(value: boolean | cdktf.IResolvable);
    resetFailOnFirstDestinationError(): void;
    get failOnFirstDestinationErrorInput(): boolean | cdktf.IResolvable | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
    /**
    * error_handling_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode | undefined);
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
    private _errorHandlingConfig;
    get errorHandlingConfig(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigOutputReference;
    putErrorHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig): void;
    resetErrorHandlingConfig(): void;
    get errorHandlingConfigInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics {
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetricsToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetricsOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetricsToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetricsOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics | undefined);
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
    */
    readonly failOnFirstDestinationError?: boolean | cdktf.IResolvable;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    private _failOnFirstDestinationError?;
    get failOnFirstDestinationError(): boolean | cdktf.IResolvable;
    set failOnFirstDestinationError(value: boolean | cdktf.IResolvable);
    resetFailOnFirstDestinationError(): void;
    get failOnFirstDestinationErrorInput(): boolean | cdktf.IResolvable | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
    /**
    * error_handling_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketo): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketo): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketo | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketo | undefined);
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
    private _errorHandlingConfig;
    get errorHandlingConfig(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigOutputReference;
    putErrorHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig): void;
    resetErrorHandlingConfig(): void;
    get errorHandlingConfigInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
    */
    readonly failOnFirstDestinationError?: boolean | cdktf.IResolvable;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    private _failOnFirstDestinationError?;
    get failOnFirstDestinationError(): boolean | cdktf.IResolvable;
    set failOnFirstDestinationError(value: boolean | cdktf.IResolvable);
    resetFailOnFirstDestinationError(): void;
    get failOnFirstDestinationErrorInput(): boolean | cdktf.IResolvable | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshift {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#intermediate_bucket_name AppflowFlow#intermediate_bucket_name}
    */
    readonly intermediateBucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
    /**
    * error_handling_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshift): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshift): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshift | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshift | undefined);
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    private _intermediateBucketName?;
    get intermediateBucketName(): string;
    set intermediateBucketName(value: string);
    get intermediateBucketNameInput(): string | undefined;
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
    private _errorHandlingConfig;
    get errorHandlingConfig(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigOutputReference;
    putErrorHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig): void;
    resetErrorHandlingConfig(): void;
    get errorHandlingConfigInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#aggregation_type AppflowFlow#aggregation_type}
    */
    readonly aggregationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#target_file_size AppflowFlow#target_file_size}
    */
    readonly targetFileSize?: number;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig | undefined);
    private _aggregationType?;
    get aggregationType(): string;
    set aggregationType(value: string);
    resetAggregationType(): void;
    get aggregationTypeInput(): string | undefined;
    private _targetFileSize?;
    get targetFileSize(): number;
    set targetFileSize(value: number);
    resetTargetFileSize(): void;
    get targetFileSizeInput(): number | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#prefix_format AppflowFlow#prefix_format}
    */
    readonly prefixFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#prefix_hierarchy AppflowFlow#prefix_hierarchy}
    */
    readonly prefixHierarchy?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#prefix_type AppflowFlow#prefix_type}
    */
    readonly prefixType?: string;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig | undefined);
    private _prefixFormat?;
    get prefixFormat(): string;
    set prefixFormat(value: string);
    resetPrefixFormat(): void;
    get prefixFormatInput(): string | undefined;
    private _prefixHierarchy?;
    get prefixHierarchy(): string[];
    set prefixHierarchy(value: string[]);
    resetPrefixHierarchy(): void;
    get prefixHierarchyInput(): string[] | undefined;
    private _prefixType?;
    get prefixType(): string;
    set prefixType(value: string);
    resetPrefixType(): void;
    get prefixTypeInput(): string | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#file_type AppflowFlow#file_type}
    */
    readonly fileType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#preserve_source_data_typing AppflowFlow#preserve_source_data_typing}
    */
    readonly preserveSourceDataTyping?: boolean | cdktf.IResolvable;
    /**
    * aggregation_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#aggregation_config AppflowFlow#aggregation_config}
    */
    readonly aggregationConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig;
    /**
    * prefix_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#prefix_config AppflowFlow#prefix_config}
    */
    readonly prefixConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig | undefined);
    private _fileType?;
    get fileType(): string;
    set fileType(value: string);
    resetFileType(): void;
    get fileTypeInput(): string | undefined;
    private _preserveSourceDataTyping?;
    get preserveSourceDataTyping(): boolean | cdktf.IResolvable;
    set preserveSourceDataTyping(value: boolean | cdktf.IResolvable);
    resetPreserveSourceDataTyping(): void;
    get preserveSourceDataTypingInput(): boolean | cdktf.IResolvable | undefined;
    private _aggregationConfig;
    get aggregationConfig(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigOutputReference;
    putAggregationConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig): void;
    resetAggregationConfig(): void;
    get aggregationConfigInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig | undefined;
    private _prefixConfig;
    get prefixConfig(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigOutputReference;
    putPrefixConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig): void;
    resetPrefixConfig(): void;
    get prefixConfigInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * s3_output_format_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#s3_output_format_config AppflowFlow#s3_output_format_config}
    */
    readonly s3OutputFormatConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3ToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3OutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3ToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3OutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3 | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3 | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    private _s3OutputFormatConfig;
    get s3OutputFormatConfig(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigOutputReference;
    putS3OutputFormatConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig): void;
    resetS3OutputFormatConfig(): void;
    get s3OutputFormatConfigInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
    */
    readonly failOnFirstDestinationError?: boolean | cdktf.IResolvable;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    private _failOnFirstDestinationError?;
    get failOnFirstDestinationError(): boolean | cdktf.IResolvable;
    set failOnFirstDestinationError(value: boolean | cdktf.IResolvable);
    resetFailOnFirstDestinationError(): void;
    get failOnFirstDestinationErrorInput(): boolean | cdktf.IResolvable | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#id_field_names AppflowFlow#id_field_names}
    */
    readonly idFieldNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#write_operation_type AppflowFlow#write_operation_type}
    */
    readonly writeOperationType?: string;
    /**
    * error_handling_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce | undefined);
    private _idFieldNames?;
    get idFieldNames(): string[];
    set idFieldNames(value: string[]);
    resetIdFieldNames(): void;
    get idFieldNamesInput(): string[] | undefined;
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
    private _writeOperationType?;
    get writeOperationType(): string;
    set writeOperationType(value: string);
    resetWriteOperationType(): void;
    get writeOperationTypeInput(): string | undefined;
    private _errorHandlingConfig;
    get errorHandlingConfig(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigOutputReference;
    putErrorHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig): void;
    resetErrorHandlingConfig(): void;
    get errorHandlingConfigInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
    */
    readonly failOnFirstDestinationError?: boolean | cdktf.IResolvable;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    private _failOnFirstDestinationError?;
    get failOnFirstDestinationError(): boolean | cdktf.IResolvable;
    set failOnFirstDestinationError(value: boolean | cdktf.IResolvable);
    resetFailOnFirstDestinationError(): void;
    get failOnFirstDestinationErrorInput(): boolean | cdktf.IResolvable | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoData {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#id_field_names AppflowFlow#id_field_names}
    */
    readonly idFieldNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object_path AppflowFlow#object_path}
    */
    readonly objectPath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#write_operation_type AppflowFlow#write_operation_type}
    */
    readonly writeOperationType?: string;
    /**
    * error_handling_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig;
    /**
    * success_response_handling_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#success_response_handling_config AppflowFlow#success_response_handling_config}
    */
    readonly successResponseHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoData): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoData): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoData | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoData | undefined);
    private _idFieldNames?;
    get idFieldNames(): string[];
    set idFieldNames(value: string[]);
    resetIdFieldNames(): void;
    get idFieldNamesInput(): string[] | undefined;
    private _objectPath?;
    get objectPath(): string;
    set objectPath(value: string);
    get objectPathInput(): string | undefined;
    private _writeOperationType?;
    get writeOperationType(): string;
    set writeOperationType(value: string);
    resetWriteOperationType(): void;
    get writeOperationTypeInput(): string | undefined;
    private _errorHandlingConfig;
    get errorHandlingConfig(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigOutputReference;
    putErrorHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig): void;
    resetErrorHandlingConfig(): void;
    get errorHandlingConfigInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig | undefined;
    private _successResponseHandlingConfig;
    get successResponseHandlingConfig(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfigOutputReference;
    putSuccessResponseHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig): void;
    resetSuccessResponseHandlingConfig(): void;
    get successResponseHandlingConfigInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
    */
    readonly failOnFirstDestinationError?: boolean | cdktf.IResolvable;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    private _failOnFirstDestinationError?;
    get failOnFirstDestinationError(): boolean | cdktf.IResolvable;
    set failOnFirstDestinationError(value: boolean | cdktf.IResolvable);
    resetFailOnFirstDestinationError(): void;
    get failOnFirstDestinationErrorInput(): boolean | cdktf.IResolvable | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#intermediate_bucket_name AppflowFlow#intermediate_bucket_name}
    */
    readonly intermediateBucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
    /**
    * error_handling_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake | undefined);
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    private _intermediateBucketName?;
    get intermediateBucketName(): string;
    set intermediateBucketName(value: string);
    get intermediateBucketNameInput(): string | undefined;
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
    private _errorHandlingConfig;
    get errorHandlingConfig(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigOutputReference;
    putErrorHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig): void;
    resetErrorHandlingConfig(): void;
    get errorHandlingConfigInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#aggregation_type AppflowFlow#aggregation_type}
    */
    readonly aggregationType?: string;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig | undefined);
    private _aggregationType?;
    get aggregationType(): string;
    set aggregationType(value: string);
    resetAggregationType(): void;
    get aggregationTypeInput(): string | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#prefix_format AppflowFlow#prefix_format}
    */
    readonly prefixFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#prefix_hierarchy AppflowFlow#prefix_hierarchy}
    */
    readonly prefixHierarchy?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#prefix_type AppflowFlow#prefix_type}
    */
    readonly prefixType: string;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig | undefined);
    private _prefixFormat?;
    get prefixFormat(): string;
    set prefixFormat(value: string);
    resetPrefixFormat(): void;
    get prefixFormatInput(): string | undefined;
    private _prefixHierarchy?;
    get prefixHierarchy(): string[];
    set prefixHierarchy(value: string[]);
    resetPrefixHierarchy(): void;
    get prefixHierarchyInput(): string[] | undefined;
    private _prefixType?;
    get prefixType(): string;
    set prefixType(value: string);
    get prefixTypeInput(): string | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#file_type AppflowFlow#file_type}
    */
    readonly fileType?: string;
    /**
    * aggregation_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#aggregation_config AppflowFlow#aggregation_config}
    */
    readonly aggregationConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig;
    /**
    * prefix_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#prefix_config AppflowFlow#prefix_config}
    */
    readonly prefixConfig: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig | undefined);
    private _fileType?;
    get fileType(): string;
    set fileType(value: string);
    resetFileType(): void;
    get fileTypeInput(): string | undefined;
    private _aggregationConfig;
    get aggregationConfig(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigOutputReference;
    putAggregationConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig): void;
    resetAggregationConfig(): void;
    get aggregationConfigInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig | undefined;
    private _prefixConfig;
    get prefixConfig(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigOutputReference;
    putPrefixConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig): void;
    get prefixConfigInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * s3_output_format_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#s3_output_format_config AppflowFlow#s3_output_format_config}
    */
    readonly s3OutputFormatConfig: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    private _s3OutputFormatConfig;
    get s3OutputFormatConfig(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigOutputReference;
    putS3OutputFormatConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig): void;
    get s3OutputFormatConfigInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
    */
    readonly failOnFirstDestinationError?: boolean | cdktf.IResolvable;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    private _failOnFirstDestinationError?;
    get failOnFirstDestinationError(): boolean | cdktf.IResolvable;
    set failOnFirstDestinationError(value: boolean | cdktf.IResolvable);
    resetFailOnFirstDestinationError(): void;
    get failOnFirstDestinationErrorInput(): boolean | cdktf.IResolvable | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendesk {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#id_field_names AppflowFlow#id_field_names}
    */
    readonly idFieldNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#write_operation_type AppflowFlow#write_operation_type}
    */
    readonly writeOperationType?: string;
    /**
    * error_handling_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendesk): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendesk): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendesk | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendesk | undefined);
    private _idFieldNames?;
    get idFieldNames(): string[];
    set idFieldNames(value: string[]);
    resetIdFieldNames(): void;
    get idFieldNamesInput(): string[] | undefined;
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
    private _writeOperationType?;
    get writeOperationType(): string;
    set writeOperationType(value: string);
    resetWriteOperationType(): void;
    get writeOperationTypeInput(): string | undefined;
    private _errorHandlingConfig;
    get errorHandlingConfig(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigOutputReference;
    putErrorHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig): void;
    resetErrorHandlingConfig(): void;
    get errorHandlingConfigInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig | undefined;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorProperties {
    /**
    * custom_connector block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#custom_connector AppflowFlow#custom_connector}
    */
    readonly customConnector?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector;
    /**
    * customer_profiles block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#customer_profiles AppflowFlow#customer_profiles}
    */
    readonly customerProfiles?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles;
    /**
    * event_bridge block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#event_bridge AppflowFlow#event_bridge}
    */
    readonly eventBridge?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge;
    /**
    * honeycode block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#honeycode AppflowFlow#honeycode}
    */
    readonly honeycode?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode;
    /**
    * lookout_metrics block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#lookout_metrics AppflowFlow#lookout_metrics}
    */
    readonly lookoutMetrics?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics;
    /**
    * marketo block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#marketo AppflowFlow#marketo}
    */
    readonly marketo?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketo;
    /**
    * redshift block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#redshift AppflowFlow#redshift}
    */
    readonly redshift?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshift;
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#s3 AppflowFlow#s3}
    */
    readonly s3?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3;
    /**
    * salesforce block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#salesforce AppflowFlow#salesforce}
    */
    readonly salesforce?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce;
    /**
    * sapo_data block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#sapo_data AppflowFlow#sapo_data}
    */
    readonly sapoData?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoData;
    /**
    * snowflake block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#snowflake AppflowFlow#snowflake}
    */
    readonly snowflake?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake;
    /**
    * upsolver block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#upsolver AppflowFlow#upsolver}
    */
    readonly upsolver?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver;
    /**
    * zendesk block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#zendesk AppflowFlow#zendesk}
    */
    readonly zendesk?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendesk;
}
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorProperties): any;
export declare function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorProperties): any;
export declare class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorProperties | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorProperties | undefined);
    private _customConnector;
    get customConnector(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorOutputReference;
    putCustomConnector(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector): void;
    resetCustomConnector(): void;
    get customConnectorInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector | undefined;
    private _customerProfiles;
    get customerProfiles(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfilesOutputReference;
    putCustomerProfiles(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles): void;
    resetCustomerProfiles(): void;
    get customerProfilesInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles | undefined;
    private _eventBridge;
    get eventBridge(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeOutputReference;
    putEventBridge(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge): void;
    resetEventBridge(): void;
    get eventBridgeInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge | undefined;
    private _honeycode;
    get honeycode(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeOutputReference;
    putHoneycode(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode): void;
    resetHoneycode(): void;
    get honeycodeInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode | undefined;
    private _lookoutMetrics;
    get lookoutMetrics(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetricsOutputReference;
    putLookoutMetrics(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics): void;
    resetLookoutMetrics(): void;
    get lookoutMetricsInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics | undefined;
    private _marketo;
    get marketo(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoOutputReference;
    putMarketo(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketo): void;
    resetMarketo(): void;
    get marketoInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketo | undefined;
    private _redshift;
    get redshift(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftOutputReference;
    putRedshift(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshift): void;
    resetRedshift(): void;
    get redshiftInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshift | undefined;
    private _s3;
    get s3(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3OutputReference;
    putS3(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3): void;
    resetS3(): void;
    get s3Input(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3 | undefined;
    private _salesforce;
    get salesforce(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceOutputReference;
    putSalesforce(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce): void;
    resetSalesforce(): void;
    get salesforceInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce | undefined;
    private _sapoData;
    get sapoData(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataOutputReference;
    putSapoData(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoData): void;
    resetSapoData(): void;
    get sapoDataInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoData | undefined;
    private _snowflake;
    get snowflake(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeOutputReference;
    putSnowflake(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake): void;
    resetSnowflake(): void;
    get snowflakeInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake | undefined;
    private _upsolver;
    get upsolver(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverOutputReference;
    putUpsolver(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver): void;
    resetUpsolver(): void;
    get upsolverInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver | undefined;
    private _zendesk;
    get zendesk(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskOutputReference;
    putZendesk(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendesk): void;
    resetZendesk(): void;
    get zendeskInput(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendesk | undefined;
}
export interface AppflowFlowDestinationFlowConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#api_version AppflowFlow#api_version}
    */
    readonly apiVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#connector_profile_name AppflowFlow#connector_profile_name}
    */
    readonly connectorProfileName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#connector_type AppflowFlow#connector_type}
    */
    readonly connectorType: string;
    /**
    * destination_connector_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#destination_connector_properties AppflowFlow#destination_connector_properties}
    */
    readonly destinationConnectorProperties: AppflowFlowDestinationFlowConfigDestinationConnectorProperties;
}
export declare function appflowFlowDestinationFlowConfigToTerraform(struct?: AppflowFlowDestinationFlowConfig | cdktf.IResolvable): any;
export declare function appflowFlowDestinationFlowConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfig | cdktf.IResolvable): any;
export declare class AppflowFlowDestinationFlowConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppflowFlowDestinationFlowConfig | cdktf.IResolvable | undefined;
    set internalValue(value: AppflowFlowDestinationFlowConfig | cdktf.IResolvable | undefined);
    private _apiVersion?;
    get apiVersion(): string;
    set apiVersion(value: string);
    resetApiVersion(): void;
    get apiVersionInput(): string | undefined;
    private _connectorProfileName?;
    get connectorProfileName(): string;
    set connectorProfileName(value: string);
    resetConnectorProfileName(): void;
    get connectorProfileNameInput(): string | undefined;
    private _connectorType?;
    get connectorType(): string;
    set connectorType(value: string);
    get connectorTypeInput(): string | undefined;
    private _destinationConnectorProperties;
    get destinationConnectorProperties(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesOutputReference;
    putDestinationConnectorProperties(value: AppflowFlowDestinationFlowConfigDestinationConnectorProperties): void;
    get destinationConnectorPropertiesInput(): AppflowFlowDestinationFlowConfigDestinationConnectorProperties | undefined;
}
export declare class AppflowFlowDestinationFlowConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppflowFlowDestinationFlowConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppflowFlowDestinationFlowConfigOutputReference;
}
export interface AppflowFlowMetadataCatalogConfigGlueDataCatalog {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#database_name AppflowFlow#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#role_arn AppflowFlow#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#table_prefix AppflowFlow#table_prefix}
    */
    readonly tablePrefix: string;
}
export declare function appflowFlowMetadataCatalogConfigGlueDataCatalogToTerraform(struct?: AppflowFlowMetadataCatalogConfigGlueDataCatalogOutputReference | AppflowFlowMetadataCatalogConfigGlueDataCatalog): any;
export declare function appflowFlowMetadataCatalogConfigGlueDataCatalogToHclTerraform(struct?: AppflowFlowMetadataCatalogConfigGlueDataCatalogOutputReference | AppflowFlowMetadataCatalogConfigGlueDataCatalog): any;
export declare class AppflowFlowMetadataCatalogConfigGlueDataCatalogOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowMetadataCatalogConfigGlueDataCatalog | undefined;
    set internalValue(value: AppflowFlowMetadataCatalogConfigGlueDataCatalog | undefined);
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _tablePrefix?;
    get tablePrefix(): string;
    set tablePrefix(value: string);
    get tablePrefixInput(): string | undefined;
}
export interface AppflowFlowMetadataCatalogConfig {
    /**
    * glue_data_catalog block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#glue_data_catalog AppflowFlow#glue_data_catalog}
    */
    readonly glueDataCatalog?: AppflowFlowMetadataCatalogConfigGlueDataCatalog;
}
export declare function appflowFlowMetadataCatalogConfigToTerraform(struct?: AppflowFlowMetadataCatalogConfigOutputReference | AppflowFlowMetadataCatalogConfig): any;
export declare function appflowFlowMetadataCatalogConfigToHclTerraform(struct?: AppflowFlowMetadataCatalogConfigOutputReference | AppflowFlowMetadataCatalogConfig): any;
export declare class AppflowFlowMetadataCatalogConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowMetadataCatalogConfig | undefined;
    set internalValue(value: AppflowFlowMetadataCatalogConfig | undefined);
    private _glueDataCatalog;
    get glueDataCatalog(): AppflowFlowMetadataCatalogConfigGlueDataCatalogOutputReference;
    putGlueDataCatalog(value: AppflowFlowMetadataCatalogConfigGlueDataCatalog): void;
    resetGlueDataCatalog(): void;
    get glueDataCatalogInput(): AppflowFlowMetadataCatalogConfigGlueDataCatalog | undefined;
}
export interface AppflowFlowSourceFlowConfigIncrementalPullConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#datetime_type_field_name AppflowFlow#datetime_type_field_name}
    */
    readonly datetimeTypeFieldName?: string;
}
export declare function appflowFlowSourceFlowConfigIncrementalPullConfigToTerraform(struct?: AppflowFlowSourceFlowConfigIncrementalPullConfigOutputReference | AppflowFlowSourceFlowConfigIncrementalPullConfig): any;
export declare function appflowFlowSourceFlowConfigIncrementalPullConfigToHclTerraform(struct?: AppflowFlowSourceFlowConfigIncrementalPullConfigOutputReference | AppflowFlowSourceFlowConfigIncrementalPullConfig): any;
export declare class AppflowFlowSourceFlowConfigIncrementalPullConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigIncrementalPullConfig | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigIncrementalPullConfig | undefined);
    private _datetimeTypeFieldName?;
    get datetimeTypeFieldName(): string;
    set datetimeTypeFieldName(value: string);
    resetDatetimeTypeFieldName(): void;
    get datetimeTypeFieldNameInput(): string | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude | undefined);
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#custom_properties AppflowFlow#custom_properties}
    */
    readonly customProperties?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#entity_name AppflowFlow#entity_name}
    */
    readonly entityName: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector | undefined);
    private _customProperties?;
    get customProperties(): {
        [key: string]: string;
    };
    set customProperties(value: {
        [key: string]: string;
    });
    resetCustomProperties(): void;
    get customPropertiesInput(): {
        [key: string]: string;
    } | undefined;
    private _entityName?;
    get entityName(): string;
    set entityName(value: string);
    get entityNameInput(): string | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog | undefined);
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace | undefined);
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics | undefined);
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus | undefined);
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo | undefined);
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#s3_input_file_type AppflowFlow#s3_input_file_type}
    */
    readonly s3InputFileType?: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfigToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfigOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfigToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfigOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig | undefined);
    private _s3InputFileType?;
    get s3InputFileType(): string;
    set s3InputFileType(value: string);
    resetS3InputFileType(): void;
    get s3InputFileTypeInput(): string | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix: string;
    /**
    * s3_input_format_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#s3_input_format_config AppflowFlow#s3_input_format_config}
    */
    readonly s3InputFormatConfig?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3OutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesS3ToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3OutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3 | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3 | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    get bucketPrefixInput(): string | undefined;
    private _s3InputFormatConfig;
    get s3InputFormatConfig(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfigOutputReference;
    putS3InputFormatConfig(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig): void;
    resetS3InputFormatConfig(): void;
    get s3InputFormatConfigInput(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#data_transfer_api AppflowFlow#data_transfer_api}
    */
    readonly dataTransferApi?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#enable_dynamic_field_update AppflowFlow#enable_dynamic_field_update}
    */
    readonly enableDynamicFieldUpdate?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#include_deleted_records AppflowFlow#include_deleted_records}
    */
    readonly includeDeletedRecords?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce | undefined);
    private _dataTransferApi?;
    get dataTransferApi(): string;
    set dataTransferApi(value: string);
    resetDataTransferApi(): void;
    get dataTransferApiInput(): string | undefined;
    private _enableDynamicFieldUpdate?;
    get enableDynamicFieldUpdate(): boolean | cdktf.IResolvable;
    set enableDynamicFieldUpdate(value: boolean | cdktf.IResolvable);
    resetEnableDynamicFieldUpdate(): void;
    get enableDynamicFieldUpdateInput(): boolean | cdktf.IResolvable | undefined;
    private _includeDeletedRecords?;
    get includeDeletedRecords(): boolean | cdktf.IResolvable;
    set includeDeletedRecords(value: boolean | cdktf.IResolvable);
    resetIncludeDeletedRecords(): void;
    get includeDeletedRecordsInput(): boolean | cdktf.IResolvable | undefined;
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#max_page_size AppflowFlow#max_page_size}
    */
    readonly maxPageSize: number;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfigToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfigOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfigToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfigOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig | undefined);
    private _maxPageSize?;
    get maxPageSize(): number;
    set maxPageSize(value: number);
    get maxPageSizeInput(): number | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#max_page_size AppflowFlow#max_page_size}
    */
    readonly maxPageSize: number;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfigToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfigOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfigToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfigOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig | undefined);
    private _maxPageSize?;
    get maxPageSize(): number;
    set maxPageSize(value: number);
    get maxPageSizeInput(): number | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object_path AppflowFlow#object_path}
    */
    readonly objectPath: string;
    /**
    * pagination_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#pagination_config AppflowFlow#pagination_config}
    */
    readonly paginationConfig?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig;
    /**
    * parallelism_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#parallelism_config AppflowFlow#parallelism_config}
    */
    readonly parallelismConfig?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData | undefined);
    private _objectPath?;
    get objectPath(): string;
    set objectPath(value: string);
    get objectPathInput(): string | undefined;
    private _paginationConfig;
    get paginationConfig(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfigOutputReference;
    putPaginationConfig(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig): void;
    resetPaginationConfig(): void;
    get paginationConfigInput(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig | undefined;
    private _parallelismConfig;
    get parallelismConfig(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfigOutputReference;
    putParallelismConfig(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig): void;
    resetParallelismConfig(): void;
    get parallelismConfigInput(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow | undefined);
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesSingularToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesSingularToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular | undefined);
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesSlackToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesSlackToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack | undefined);
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro | undefined);
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#document_type AppflowFlow#document_type}
    */
    readonly documentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#include_all_versions AppflowFlow#include_all_versions}
    */
    readonly includeAllVersions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#include_renditions AppflowFlow#include_renditions}
    */
    readonly includeRenditions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#include_source_files AppflowFlow#include_source_files}
    */
    readonly includeSourceFiles?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva | undefined);
    private _documentType?;
    get documentType(): string;
    set documentType(value: string);
    resetDocumentType(): void;
    get documentTypeInput(): string | undefined;
    private _includeAllVersions?;
    get includeAllVersions(): boolean | cdktf.IResolvable;
    set includeAllVersions(value: boolean | cdktf.IResolvable);
    resetIncludeAllVersions(): void;
    get includeAllVersionsInput(): boolean | cdktf.IResolvable | undefined;
    private _includeRenditions?;
    get includeRenditions(): boolean | cdktf.IResolvable;
    set includeRenditions(value: boolean | cdktf.IResolvable);
    resetIncludeRenditions(): void;
    get includeRenditionsInput(): boolean | cdktf.IResolvable | undefined;
    private _includeSourceFiles?;
    get includeSourceFiles(): boolean | cdktf.IResolvable;
    set includeSourceFiles(value: boolean | cdktf.IResolvable);
    resetIncludeSourceFiles(): void;
    get includeSourceFilesInput(): boolean | cdktf.IResolvable | undefined;
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk | undefined);
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
}
export interface AppflowFlowSourceFlowConfigSourceConnectorProperties {
    /**
    * amplitude block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#amplitude AppflowFlow#amplitude}
    */
    readonly amplitude?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude;
    /**
    * custom_connector block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#custom_connector AppflowFlow#custom_connector}
    */
    readonly customConnector?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector;
    /**
    * datadog block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#datadog AppflowFlow#datadog}
    */
    readonly datadog?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog;
    /**
    * dynatrace block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#dynatrace AppflowFlow#dynatrace}
    */
    readonly dynatrace?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace;
    /**
    * google_analytics block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#google_analytics AppflowFlow#google_analytics}
    */
    readonly googleAnalytics?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics;
    /**
    * infor_nexus block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#infor_nexus AppflowFlow#infor_nexus}
    */
    readonly inforNexus?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus;
    /**
    * marketo block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#marketo AppflowFlow#marketo}
    */
    readonly marketo?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo;
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#s3 AppflowFlow#s3}
    */
    readonly s3?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3;
    /**
    * salesforce block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#salesforce AppflowFlow#salesforce}
    */
    readonly salesforce?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce;
    /**
    * sapo_data block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#sapo_data AppflowFlow#sapo_data}
    */
    readonly sapoData?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData;
    /**
    * service_now block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#service_now AppflowFlow#service_now}
    */
    readonly serviceNow?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow;
    /**
    * singular block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#singular AppflowFlow#singular}
    */
    readonly singular?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular;
    /**
    * slack block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#slack AppflowFlow#slack}
    */
    readonly slack?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack;
    /**
    * trendmicro block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#trendmicro AppflowFlow#trendmicro}
    */
    readonly trendmicro?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro;
    /**
    * veeva block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#veeva AppflowFlow#veeva}
    */
    readonly veeva?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva;
    /**
    * zendesk block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#zendesk AppflowFlow#zendesk}
    */
    readonly zendesk?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesOutputReference | AppflowFlowSourceFlowConfigSourceConnectorProperties): any;
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesOutputReference | AppflowFlowSourceFlowConfigSourceConnectorProperties): any;
export declare class AppflowFlowSourceFlowConfigSourceConnectorPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorProperties | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorProperties | undefined);
    private _amplitude;
    get amplitude(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeOutputReference;
    putAmplitude(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude): void;
    resetAmplitude(): void;
    get amplitudeInput(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude | undefined;
    private _customConnector;
    get customConnector(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorOutputReference;
    putCustomConnector(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector): void;
    resetCustomConnector(): void;
    get customConnectorInput(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector | undefined;
    private _datadog;
    get datadog(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogOutputReference;
    putDatadog(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog): void;
    resetDatadog(): void;
    get datadogInput(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog | undefined;
    private _dynatrace;
    get dynatrace(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceOutputReference;
    putDynatrace(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace): void;
    resetDynatrace(): void;
    get dynatraceInput(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace | undefined;
    private _googleAnalytics;
    get googleAnalytics(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsOutputReference;
    putGoogleAnalytics(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics): void;
    resetGoogleAnalytics(): void;
    get googleAnalyticsInput(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics | undefined;
    private _inforNexus;
    get inforNexus(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusOutputReference;
    putInforNexus(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus): void;
    resetInforNexus(): void;
    get inforNexusInput(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus | undefined;
    private _marketo;
    get marketo(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference;
    putMarketo(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo): void;
    resetMarketo(): void;
    get marketoInput(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo | undefined;
    private _s3;
    get s3(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3OutputReference;
    putS3(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3): void;
    resetS3(): void;
    get s3Input(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3 | undefined;
    private _salesforce;
    get salesforce(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference;
    putSalesforce(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce): void;
    resetSalesforce(): void;
    get salesforceInput(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce | undefined;
    private _sapoData;
    get sapoData(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataOutputReference;
    putSapoData(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData): void;
    resetSapoData(): void;
    get sapoDataInput(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData | undefined;
    private _serviceNow;
    get serviceNow(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference;
    putServiceNow(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow): void;
    resetServiceNow(): void;
    get serviceNowInput(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow | undefined;
    private _singular;
    get singular(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularOutputReference;
    putSingular(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular): void;
    resetSingular(): void;
    get singularInput(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular | undefined;
    private _slack;
    get slack(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackOutputReference;
    putSlack(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack): void;
    resetSlack(): void;
    get slackInput(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack | undefined;
    private _trendmicro;
    get trendmicro(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroOutputReference;
    putTrendmicro(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro): void;
    resetTrendmicro(): void;
    get trendmicroInput(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro | undefined;
    private _veeva;
    get veeva(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaOutputReference;
    putVeeva(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva): void;
    resetVeeva(): void;
    get veevaInput(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva | undefined;
    private _zendesk;
    get zendesk(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference;
    putZendesk(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk): void;
    resetZendesk(): void;
    get zendeskInput(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk | undefined;
}
export interface AppflowFlowSourceFlowConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#api_version AppflowFlow#api_version}
    */
    readonly apiVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#connector_profile_name AppflowFlow#connector_profile_name}
    */
    readonly connectorProfileName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#connector_type AppflowFlow#connector_type}
    */
    readonly connectorType: string;
    /**
    * incremental_pull_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#incremental_pull_config AppflowFlow#incremental_pull_config}
    */
    readonly incrementalPullConfig?: AppflowFlowSourceFlowConfigIncrementalPullConfig;
    /**
    * source_connector_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#source_connector_properties AppflowFlow#source_connector_properties}
    */
    readonly sourceConnectorProperties: AppflowFlowSourceFlowConfigSourceConnectorProperties;
}
export declare function appflowFlowSourceFlowConfigToTerraform(struct?: AppflowFlowSourceFlowConfigOutputReference | AppflowFlowSourceFlowConfig): any;
export declare function appflowFlowSourceFlowConfigToHclTerraform(struct?: AppflowFlowSourceFlowConfigOutputReference | AppflowFlowSourceFlowConfig): any;
export declare class AppflowFlowSourceFlowConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowSourceFlowConfig | undefined;
    set internalValue(value: AppflowFlowSourceFlowConfig | undefined);
    private _apiVersion?;
    get apiVersion(): string;
    set apiVersion(value: string);
    resetApiVersion(): void;
    get apiVersionInput(): string | undefined;
    private _connectorProfileName?;
    get connectorProfileName(): string;
    set connectorProfileName(value: string);
    resetConnectorProfileName(): void;
    get connectorProfileNameInput(): string | undefined;
    private _connectorType?;
    get connectorType(): string;
    set connectorType(value: string);
    get connectorTypeInput(): string | undefined;
    private _incrementalPullConfig;
    get incrementalPullConfig(): AppflowFlowSourceFlowConfigIncrementalPullConfigOutputReference;
    putIncrementalPullConfig(value: AppflowFlowSourceFlowConfigIncrementalPullConfig): void;
    resetIncrementalPullConfig(): void;
    get incrementalPullConfigInput(): AppflowFlowSourceFlowConfigIncrementalPullConfig | undefined;
    private _sourceConnectorProperties;
    get sourceConnectorProperties(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesOutputReference;
    putSourceConnectorProperties(value: AppflowFlowSourceFlowConfigSourceConnectorProperties): void;
    get sourceConnectorPropertiesInput(): AppflowFlowSourceFlowConfigSourceConnectorProperties | undefined;
}
export interface AppflowFlowTaskConnectorOperator {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#amplitude AppflowFlow#amplitude}
    */
    readonly amplitude?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#custom_connector AppflowFlow#custom_connector}
    */
    readonly customConnector?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#datadog AppflowFlow#datadog}
    */
    readonly datadog?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#dynatrace AppflowFlow#dynatrace}
    */
    readonly dynatrace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#google_analytics AppflowFlow#google_analytics}
    */
    readonly googleAnalytics?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#infor_nexus AppflowFlow#infor_nexus}
    */
    readonly inforNexus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#marketo AppflowFlow#marketo}
    */
    readonly marketo?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#s3 AppflowFlow#s3}
    */
    readonly s3?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#salesforce AppflowFlow#salesforce}
    */
    readonly salesforce?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#sapo_data AppflowFlow#sapo_data}
    */
    readonly sapoData?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#service_now AppflowFlow#service_now}
    */
    readonly serviceNow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#singular AppflowFlow#singular}
    */
    readonly singular?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#slack AppflowFlow#slack}
    */
    readonly slack?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#trendmicro AppflowFlow#trendmicro}
    */
    readonly trendmicro?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#veeva AppflowFlow#veeva}
    */
    readonly veeva?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#zendesk AppflowFlow#zendesk}
    */
    readonly zendesk?: string;
}
export declare function appflowFlowTaskConnectorOperatorToTerraform(struct?: AppflowFlowTaskConnectorOperator | cdktf.IResolvable): any;
export declare function appflowFlowTaskConnectorOperatorToHclTerraform(struct?: AppflowFlowTaskConnectorOperator | cdktf.IResolvable): any;
export declare class AppflowFlowTaskConnectorOperatorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppflowFlowTaskConnectorOperator | cdktf.IResolvable | undefined;
    set internalValue(value: AppflowFlowTaskConnectorOperator | cdktf.IResolvable | undefined);
    private _amplitude?;
    get amplitude(): string;
    set amplitude(value: string);
    resetAmplitude(): void;
    get amplitudeInput(): string | undefined;
    private _customConnector?;
    get customConnector(): string;
    set customConnector(value: string);
    resetCustomConnector(): void;
    get customConnectorInput(): string | undefined;
    private _datadog?;
    get datadog(): string;
    set datadog(value: string);
    resetDatadog(): void;
    get datadogInput(): string | undefined;
    private _dynatrace?;
    get dynatrace(): string;
    set dynatrace(value: string);
    resetDynatrace(): void;
    get dynatraceInput(): string | undefined;
    private _googleAnalytics?;
    get googleAnalytics(): string;
    set googleAnalytics(value: string);
    resetGoogleAnalytics(): void;
    get googleAnalyticsInput(): string | undefined;
    private _inforNexus?;
    get inforNexus(): string;
    set inforNexus(value: string);
    resetInforNexus(): void;
    get inforNexusInput(): string | undefined;
    private _marketo?;
    get marketo(): string;
    set marketo(value: string);
    resetMarketo(): void;
    get marketoInput(): string | undefined;
    private _s3?;
    get s3(): string;
    set s3(value: string);
    resetS3(): void;
    get s3Input(): string | undefined;
    private _salesforce?;
    get salesforce(): string;
    set salesforce(value: string);
    resetSalesforce(): void;
    get salesforceInput(): string | undefined;
    private _sapoData?;
    get sapoData(): string;
    set sapoData(value: string);
    resetSapoData(): void;
    get sapoDataInput(): string | undefined;
    private _serviceNow?;
    get serviceNow(): string;
    set serviceNow(value: string);
    resetServiceNow(): void;
    get serviceNowInput(): string | undefined;
    private _singular?;
    get singular(): string;
    set singular(value: string);
    resetSingular(): void;
    get singularInput(): string | undefined;
    private _slack?;
    get slack(): string;
    set slack(value: string);
    resetSlack(): void;
    get slackInput(): string | undefined;
    private _trendmicro?;
    get trendmicro(): string;
    set trendmicro(value: string);
    resetTrendmicro(): void;
    get trendmicroInput(): string | undefined;
    private _veeva?;
    get veeva(): string;
    set veeva(value: string);
    resetVeeva(): void;
    get veevaInput(): string | undefined;
    private _zendesk?;
    get zendesk(): string;
    set zendesk(value: string);
    resetZendesk(): void;
    get zendeskInput(): string | undefined;
}
export declare class AppflowFlowTaskConnectorOperatorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppflowFlowTaskConnectorOperator[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppflowFlowTaskConnectorOperatorOutputReference;
}
export interface AppflowFlowTask {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#destination_field AppflowFlow#destination_field}
    */
    readonly destinationField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#source_fields AppflowFlow#source_fields}
    */
    readonly sourceFields?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#task_properties AppflowFlow#task_properties}
    */
    readonly taskProperties?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#task_type AppflowFlow#task_type}
    */
    readonly taskType: string;
    /**
    * connector_operator block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#connector_operator AppflowFlow#connector_operator}
    */
    readonly connectorOperator?: AppflowFlowTaskConnectorOperator[] | cdktf.IResolvable;
}
export declare function appflowFlowTaskToTerraform(struct?: AppflowFlowTask | cdktf.IResolvable): any;
export declare function appflowFlowTaskToHclTerraform(struct?: AppflowFlowTask | cdktf.IResolvable): any;
export declare class AppflowFlowTaskOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppflowFlowTask | cdktf.IResolvable | undefined;
    set internalValue(value: AppflowFlowTask | cdktf.IResolvable | undefined);
    private _destinationField?;
    get destinationField(): string;
    set destinationField(value: string);
    resetDestinationField(): void;
    get destinationFieldInput(): string | undefined;
    private _sourceFields?;
    get sourceFields(): string[];
    set sourceFields(value: string[]);
    resetSourceFields(): void;
    get sourceFieldsInput(): string[] | undefined;
    private _taskProperties?;
    get taskProperties(): {
        [key: string]: string;
    };
    set taskProperties(value: {
        [key: string]: string;
    });
    resetTaskProperties(): void;
    get taskPropertiesInput(): {
        [key: string]: string;
    } | undefined;
    private _taskType?;
    get taskType(): string;
    set taskType(value: string);
    get taskTypeInput(): string | undefined;
    private _connectorOperator;
    get connectorOperator(): AppflowFlowTaskConnectorOperatorList;
    putConnectorOperator(value: AppflowFlowTaskConnectorOperator[] | cdktf.IResolvable): void;
    resetConnectorOperator(): void;
    get connectorOperatorInput(): cdktf.IResolvable | AppflowFlowTaskConnectorOperator[] | undefined;
}
export declare class AppflowFlowTaskList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppflowFlowTask[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppflowFlowTaskOutputReference;
}
export interface AppflowFlowTriggerConfigTriggerPropertiesScheduled {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#data_pull_mode AppflowFlow#data_pull_mode}
    */
    readonly dataPullMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#first_execution_from AppflowFlow#first_execution_from}
    */
    readonly firstExecutionFrom?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#schedule_end_time AppflowFlow#schedule_end_time}
    */
    readonly scheduleEndTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#schedule_expression AppflowFlow#schedule_expression}
    */
    readonly scheduleExpression: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#schedule_offset AppflowFlow#schedule_offset}
    */
    readonly scheduleOffset?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#schedule_start_time AppflowFlow#schedule_start_time}
    */
    readonly scheduleStartTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#timezone AppflowFlow#timezone}
    */
    readonly timezone?: string;
}
export declare function appflowFlowTriggerConfigTriggerPropertiesScheduledToTerraform(struct?: AppflowFlowTriggerConfigTriggerPropertiesScheduledOutputReference | AppflowFlowTriggerConfigTriggerPropertiesScheduled): any;
export declare function appflowFlowTriggerConfigTriggerPropertiesScheduledToHclTerraform(struct?: AppflowFlowTriggerConfigTriggerPropertiesScheduledOutputReference | AppflowFlowTriggerConfigTriggerPropertiesScheduled): any;
export declare class AppflowFlowTriggerConfigTriggerPropertiesScheduledOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowTriggerConfigTriggerPropertiesScheduled | undefined;
    set internalValue(value: AppflowFlowTriggerConfigTriggerPropertiesScheduled | undefined);
    private _dataPullMode?;
    get dataPullMode(): string;
    set dataPullMode(value: string);
    resetDataPullMode(): void;
    get dataPullModeInput(): string | undefined;
    private _firstExecutionFrom?;
    get firstExecutionFrom(): string;
    set firstExecutionFrom(value: string);
    resetFirstExecutionFrom(): void;
    get firstExecutionFromInput(): string | undefined;
    private _scheduleEndTime?;
    get scheduleEndTime(): string;
    set scheduleEndTime(value: string);
    resetScheduleEndTime(): void;
    get scheduleEndTimeInput(): string | undefined;
    private _scheduleExpression?;
    get scheduleExpression(): string;
    set scheduleExpression(value: string);
    get scheduleExpressionInput(): string | undefined;
    private _scheduleOffset?;
    get scheduleOffset(): number;
    set scheduleOffset(value: number);
    resetScheduleOffset(): void;
    get scheduleOffsetInput(): number | undefined;
    private _scheduleStartTime?;
    get scheduleStartTime(): string;
    set scheduleStartTime(value: string);
    resetScheduleStartTime(): void;
    get scheduleStartTimeInput(): string | undefined;
    private _timezone?;
    get timezone(): string;
    set timezone(value: string);
    resetTimezone(): void;
    get timezoneInput(): string | undefined;
}
export interface AppflowFlowTriggerConfigTriggerProperties {
    /**
    * scheduled block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#scheduled AppflowFlow#scheduled}
    */
    readonly scheduled?: AppflowFlowTriggerConfigTriggerPropertiesScheduled;
}
export declare function appflowFlowTriggerConfigTriggerPropertiesToTerraform(struct?: AppflowFlowTriggerConfigTriggerPropertiesOutputReference | AppflowFlowTriggerConfigTriggerProperties): any;
export declare function appflowFlowTriggerConfigTriggerPropertiesToHclTerraform(struct?: AppflowFlowTriggerConfigTriggerPropertiesOutputReference | AppflowFlowTriggerConfigTriggerProperties): any;
export declare class AppflowFlowTriggerConfigTriggerPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowTriggerConfigTriggerProperties | undefined;
    set internalValue(value: AppflowFlowTriggerConfigTriggerProperties | undefined);
    private _scheduled;
    get scheduled(): AppflowFlowTriggerConfigTriggerPropertiesScheduledOutputReference;
    putScheduled(value: AppflowFlowTriggerConfigTriggerPropertiesScheduled): void;
    resetScheduled(): void;
    get scheduledInput(): AppflowFlowTriggerConfigTriggerPropertiesScheduled | undefined;
}
export interface AppflowFlowTriggerConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#trigger_type AppflowFlow#trigger_type}
    */
    readonly triggerType: string;
    /**
    * trigger_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#trigger_properties AppflowFlow#trigger_properties}
    */
    readonly triggerProperties?: AppflowFlowTriggerConfigTriggerProperties;
}
export declare function appflowFlowTriggerConfigToTerraform(struct?: AppflowFlowTriggerConfigOutputReference | AppflowFlowTriggerConfig): any;
export declare function appflowFlowTriggerConfigToHclTerraform(struct?: AppflowFlowTriggerConfigOutputReference | AppflowFlowTriggerConfig): any;
export declare class AppflowFlowTriggerConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowFlowTriggerConfig | undefined;
    set internalValue(value: AppflowFlowTriggerConfig | undefined);
    private _triggerType?;
    get triggerType(): string;
    set triggerType(value: string);
    get triggerTypeInput(): string | undefined;
    private _triggerProperties;
    get triggerProperties(): AppflowFlowTriggerConfigTriggerPropertiesOutputReference;
    putTriggerProperties(value: AppflowFlowTriggerConfigTriggerProperties): void;
    resetTriggerProperties(): void;
    get triggerPropertiesInput(): AppflowFlowTriggerConfigTriggerProperties | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow aws_appflow_flow}
*/
export declare class AppflowFlow extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appflow_flow";
    /**
    * Generates CDKTF code for importing a AppflowFlow resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppflowFlow to import
    * @param importFromId The id of the existing AppflowFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppflowFlow to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_flow aws_appflow_flow} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppflowFlowConfig
    */
    constructor(scope: Construct, id: string, config: AppflowFlowConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get flowStatus(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsArn?;
    get kmsArn(): string;
    set kmsArn(value: string);
    resetKmsArn(): void;
    get kmsArnInput(): string | undefined;
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
    private _destinationFlowConfig;
    get destinationFlowConfig(): AppflowFlowDestinationFlowConfigList;
    putDestinationFlowConfig(value: AppflowFlowDestinationFlowConfig[] | cdktf.IResolvable): void;
    get destinationFlowConfigInput(): cdktf.IResolvable | AppflowFlowDestinationFlowConfig[] | undefined;
    private _metadataCatalogConfig;
    get metadataCatalogConfig(): AppflowFlowMetadataCatalogConfigOutputReference;
    putMetadataCatalogConfig(value: AppflowFlowMetadataCatalogConfig): void;
    resetMetadataCatalogConfig(): void;
    get metadataCatalogConfigInput(): AppflowFlowMetadataCatalogConfig | undefined;
    private _sourceFlowConfig;
    get sourceFlowConfig(): AppflowFlowSourceFlowConfigOutputReference;
    putSourceFlowConfig(value: AppflowFlowSourceFlowConfig): void;
    get sourceFlowConfigInput(): AppflowFlowSourceFlowConfig | undefined;
    private _task;
    get task(): AppflowFlowTaskList;
    putTask(value: AppflowFlowTask[] | cdktf.IResolvable): void;
    get taskInput(): cdktf.IResolvable | AppflowFlowTask[] | undefined;
    private _triggerConfig;
    get triggerConfig(): AppflowFlowTriggerConfigOutputReference;
    putTriggerConfig(value: AppflowFlowTriggerConfig): void;
    get triggerConfigInput(): AppflowFlowTriggerConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
