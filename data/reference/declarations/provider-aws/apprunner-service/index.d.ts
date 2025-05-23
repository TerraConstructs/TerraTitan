/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApprunnerServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#auto_scaling_configuration_arn ApprunnerService#auto_scaling_configuration_arn}
    */
    readonly autoScalingConfigurationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#id ApprunnerService#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#service_name ApprunnerService#service_name}
    */
    readonly serviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#tags ApprunnerService#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#tags_all ApprunnerService#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#encryption_configuration ApprunnerService#encryption_configuration}
    */
    readonly encryptionConfiguration?: ApprunnerServiceEncryptionConfiguration;
    /**
    * health_check_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#health_check_configuration ApprunnerService#health_check_configuration}
    */
    readonly healthCheckConfiguration?: ApprunnerServiceHealthCheckConfiguration;
    /**
    * instance_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#instance_configuration ApprunnerService#instance_configuration}
    */
    readonly instanceConfiguration?: ApprunnerServiceInstanceConfiguration;
    /**
    * network_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#network_configuration ApprunnerService#network_configuration}
    */
    readonly networkConfiguration?: ApprunnerServiceNetworkConfiguration;
    /**
    * observability_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#observability_configuration ApprunnerService#observability_configuration}
    */
    readonly observabilityConfiguration?: ApprunnerServiceObservabilityConfiguration;
    /**
    * source_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#source_configuration ApprunnerService#source_configuration}
    */
    readonly sourceConfiguration: ApprunnerServiceSourceConfiguration;
}
export interface ApprunnerServiceEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#kms_key ApprunnerService#kms_key}
    */
    readonly kmsKey: string;
}
export declare function apprunnerServiceEncryptionConfigurationToTerraform(struct?: ApprunnerServiceEncryptionConfigurationOutputReference | ApprunnerServiceEncryptionConfiguration): any;
export declare function apprunnerServiceEncryptionConfigurationToHclTerraform(struct?: ApprunnerServiceEncryptionConfigurationOutputReference | ApprunnerServiceEncryptionConfiguration): any;
export declare class ApprunnerServiceEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApprunnerServiceEncryptionConfiguration | undefined;
    set internalValue(value: ApprunnerServiceEncryptionConfiguration | undefined);
    private _kmsKey?;
    get kmsKey(): string;
    set kmsKey(value: string);
    get kmsKeyInput(): string | undefined;
}
export interface ApprunnerServiceHealthCheckConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#healthy_threshold ApprunnerService#healthy_threshold}
    */
    readonly healthyThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#interval ApprunnerService#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#path ApprunnerService#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#protocol ApprunnerService#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#timeout ApprunnerService#timeout}
    */
    readonly timeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#unhealthy_threshold ApprunnerService#unhealthy_threshold}
    */
    readonly unhealthyThreshold?: number;
}
export declare function apprunnerServiceHealthCheckConfigurationToTerraform(struct?: ApprunnerServiceHealthCheckConfigurationOutputReference | ApprunnerServiceHealthCheckConfiguration): any;
export declare function apprunnerServiceHealthCheckConfigurationToHclTerraform(struct?: ApprunnerServiceHealthCheckConfigurationOutputReference | ApprunnerServiceHealthCheckConfiguration): any;
export declare class ApprunnerServiceHealthCheckConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApprunnerServiceHealthCheckConfiguration | undefined;
    set internalValue(value: ApprunnerServiceHealthCheckConfiguration | undefined);
    private _healthyThreshold?;
    get healthyThreshold(): number;
    set healthyThreshold(value: number);
    resetHealthyThreshold(): void;
    get healthyThresholdInput(): number | undefined;
    private _interval?;
    get interval(): number;
    set interval(value: number);
    resetInterval(): void;
    get intervalInput(): number | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string | undefined;
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    resetTimeout(): void;
    get timeoutInput(): number | undefined;
    private _unhealthyThreshold?;
    get unhealthyThreshold(): number;
    set unhealthyThreshold(value: number);
    resetUnhealthyThreshold(): void;
    get unhealthyThresholdInput(): number | undefined;
}
export interface ApprunnerServiceInstanceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#cpu ApprunnerService#cpu}
    */
    readonly cpu?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#instance_role_arn ApprunnerService#instance_role_arn}
    */
    readonly instanceRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#memory ApprunnerService#memory}
    */
    readonly memory?: string;
}
export declare function apprunnerServiceInstanceConfigurationToTerraform(struct?: ApprunnerServiceInstanceConfigurationOutputReference | ApprunnerServiceInstanceConfiguration): any;
export declare function apprunnerServiceInstanceConfigurationToHclTerraform(struct?: ApprunnerServiceInstanceConfigurationOutputReference | ApprunnerServiceInstanceConfiguration): any;
export declare class ApprunnerServiceInstanceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApprunnerServiceInstanceConfiguration | undefined;
    set internalValue(value: ApprunnerServiceInstanceConfiguration | undefined);
    private _cpu?;
    get cpu(): string;
    set cpu(value: string);
    resetCpu(): void;
    get cpuInput(): string | undefined;
    private _instanceRoleArn?;
    get instanceRoleArn(): string;
    set instanceRoleArn(value: string);
    resetInstanceRoleArn(): void;
    get instanceRoleArnInput(): string | undefined;
    private _memory?;
    get memory(): string;
    set memory(value: string);
    resetMemory(): void;
    get memoryInput(): string | undefined;
}
export interface ApprunnerServiceNetworkConfigurationEgressConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#egress_type ApprunnerService#egress_type}
    */
    readonly egressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#vpc_connector_arn ApprunnerService#vpc_connector_arn}
    */
    readonly vpcConnectorArn?: string;
}
export declare function apprunnerServiceNetworkConfigurationEgressConfigurationToTerraform(struct?: ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference | ApprunnerServiceNetworkConfigurationEgressConfiguration): any;
export declare function apprunnerServiceNetworkConfigurationEgressConfigurationToHclTerraform(struct?: ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference | ApprunnerServiceNetworkConfigurationEgressConfiguration): any;
export declare class ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApprunnerServiceNetworkConfigurationEgressConfiguration | undefined;
    set internalValue(value: ApprunnerServiceNetworkConfigurationEgressConfiguration | undefined);
    private _egressType?;
    get egressType(): string;
    set egressType(value: string);
    resetEgressType(): void;
    get egressTypeInput(): string | undefined;
    private _vpcConnectorArn?;
    get vpcConnectorArn(): string;
    set vpcConnectorArn(value: string);
    resetVpcConnectorArn(): void;
    get vpcConnectorArnInput(): string | undefined;
}
export interface ApprunnerServiceNetworkConfigurationIngressConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#is_publicly_accessible ApprunnerService#is_publicly_accessible}
    */
    readonly isPubliclyAccessible?: boolean | cdktf.IResolvable;
}
export declare function apprunnerServiceNetworkConfigurationIngressConfigurationToTerraform(struct?: ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference | ApprunnerServiceNetworkConfigurationIngressConfiguration): any;
export declare function apprunnerServiceNetworkConfigurationIngressConfigurationToHclTerraform(struct?: ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference | ApprunnerServiceNetworkConfigurationIngressConfiguration): any;
export declare class ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApprunnerServiceNetworkConfigurationIngressConfiguration | undefined;
    set internalValue(value: ApprunnerServiceNetworkConfigurationIngressConfiguration | undefined);
    private _isPubliclyAccessible?;
    get isPubliclyAccessible(): boolean | cdktf.IResolvable;
    set isPubliclyAccessible(value: boolean | cdktf.IResolvable);
    resetIsPubliclyAccessible(): void;
    get isPubliclyAccessibleInput(): boolean | cdktf.IResolvable | undefined;
}
export interface ApprunnerServiceNetworkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#ip_address_type ApprunnerService#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * egress_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#egress_configuration ApprunnerService#egress_configuration}
    */
    readonly egressConfiguration?: ApprunnerServiceNetworkConfigurationEgressConfiguration;
    /**
    * ingress_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#ingress_configuration ApprunnerService#ingress_configuration}
    */
    readonly ingressConfiguration?: ApprunnerServiceNetworkConfigurationIngressConfiguration;
}
export declare function apprunnerServiceNetworkConfigurationToTerraform(struct?: ApprunnerServiceNetworkConfigurationOutputReference | ApprunnerServiceNetworkConfiguration): any;
export declare function apprunnerServiceNetworkConfigurationToHclTerraform(struct?: ApprunnerServiceNetworkConfigurationOutputReference | ApprunnerServiceNetworkConfiguration): any;
export declare class ApprunnerServiceNetworkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApprunnerServiceNetworkConfiguration | undefined;
    set internalValue(value: ApprunnerServiceNetworkConfiguration | undefined);
    private _ipAddressType?;
    get ipAddressType(): string;
    set ipAddressType(value: string);
    resetIpAddressType(): void;
    get ipAddressTypeInput(): string | undefined;
    private _egressConfiguration;
    get egressConfiguration(): ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference;
    putEgressConfiguration(value: ApprunnerServiceNetworkConfigurationEgressConfiguration): void;
    resetEgressConfiguration(): void;
    get egressConfigurationInput(): ApprunnerServiceNetworkConfigurationEgressConfiguration | undefined;
    private _ingressConfiguration;
    get ingressConfiguration(): ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference;
    putIngressConfiguration(value: ApprunnerServiceNetworkConfigurationIngressConfiguration): void;
    resetIngressConfiguration(): void;
    get ingressConfigurationInput(): ApprunnerServiceNetworkConfigurationIngressConfiguration | undefined;
}
export interface ApprunnerServiceObservabilityConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#observability_configuration_arn ApprunnerService#observability_configuration_arn}
    */
    readonly observabilityConfigurationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#observability_enabled ApprunnerService#observability_enabled}
    */
    readonly observabilityEnabled: boolean | cdktf.IResolvable;
}
export declare function apprunnerServiceObservabilityConfigurationToTerraform(struct?: ApprunnerServiceObservabilityConfigurationOutputReference | ApprunnerServiceObservabilityConfiguration): any;
export declare function apprunnerServiceObservabilityConfigurationToHclTerraform(struct?: ApprunnerServiceObservabilityConfigurationOutputReference | ApprunnerServiceObservabilityConfiguration): any;
export declare class ApprunnerServiceObservabilityConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApprunnerServiceObservabilityConfiguration | undefined;
    set internalValue(value: ApprunnerServiceObservabilityConfiguration | undefined);
    private _observabilityConfigurationArn?;
    get observabilityConfigurationArn(): string;
    set observabilityConfigurationArn(value: string);
    resetObservabilityConfigurationArn(): void;
    get observabilityConfigurationArnInput(): string | undefined;
    private _observabilityEnabled?;
    get observabilityEnabled(): boolean | cdktf.IResolvable;
    set observabilityEnabled(value: boolean | cdktf.IResolvable);
    get observabilityEnabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface ApprunnerServiceSourceConfigurationAuthenticationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#access_role_arn ApprunnerService#access_role_arn}
    */
    readonly accessRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#connection_arn ApprunnerService#connection_arn}
    */
    readonly connectionArn?: string;
}
export declare function apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference | ApprunnerServiceSourceConfigurationAuthenticationConfiguration): any;
export declare function apprunnerServiceSourceConfigurationAuthenticationConfigurationToHclTerraform(struct?: ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference | ApprunnerServiceSourceConfigurationAuthenticationConfiguration): any;
export declare class ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApprunnerServiceSourceConfigurationAuthenticationConfiguration | undefined;
    set internalValue(value: ApprunnerServiceSourceConfigurationAuthenticationConfiguration | undefined);
    private _accessRoleArn?;
    get accessRoleArn(): string;
    set accessRoleArn(value: string);
    resetAccessRoleArn(): void;
    get accessRoleArnInput(): string | undefined;
    private _connectionArn?;
    get connectionArn(): string;
    set connectionArn(value: string);
    resetConnectionArn(): void;
    get connectionArnInput(): string | undefined;
}
export interface ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#build_command ApprunnerService#build_command}
    */
    readonly buildCommand?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#port ApprunnerService#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#runtime ApprunnerService#runtime}
    */
    readonly runtime: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}
    */
    readonly runtimeEnvironmentSecrets?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}
    */
    readonly runtimeEnvironmentVariables?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#start_command ApprunnerService#start_command}
    */
    readonly startCommand?: string;
}
export declare function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference | ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues): any;
export declare function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToHclTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference | ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues): any;
export declare class ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues | undefined;
    set internalValue(value: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues | undefined);
    private _buildCommand?;
    get buildCommand(): string;
    set buildCommand(value: string);
    resetBuildCommand(): void;
    get buildCommandInput(): string | undefined;
    private _port?;
    get port(): string;
    set port(value: string);
    resetPort(): void;
    get portInput(): string | undefined;
    private _runtime?;
    get runtime(): string;
    set runtime(value: string);
    get runtimeInput(): string | undefined;
    private _runtimeEnvironmentSecrets?;
    get runtimeEnvironmentSecrets(): {
        [key: string]: string;
    };
    set runtimeEnvironmentSecrets(value: {
        [key: string]: string;
    });
    resetRuntimeEnvironmentSecrets(): void;
    get runtimeEnvironmentSecretsInput(): {
        [key: string]: string;
    } | undefined;
    private _runtimeEnvironmentVariables?;
    get runtimeEnvironmentVariables(): {
        [key: string]: string;
    };
    set runtimeEnvironmentVariables(value: {
        [key: string]: string;
    });
    resetRuntimeEnvironmentVariables(): void;
    get runtimeEnvironmentVariablesInput(): {
        [key: string]: string;
    } | undefined;
    private _startCommand?;
    get startCommand(): string;
    set startCommand(value: string);
    resetStartCommand(): void;
    get startCommandInput(): string | undefined;
}
export interface ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#configuration_source ApprunnerService#configuration_source}
    */
    readonly configurationSource: string;
    /**
    * code_configuration_values block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#code_configuration_values ApprunnerService#code_configuration_values}
    */
    readonly codeConfigurationValues?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues;
}
export declare function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference | ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration): any;
export declare function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToHclTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference | ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration): any;
export declare class ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration | undefined;
    set internalValue(value: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration | undefined);
    private _configurationSource?;
    get configurationSource(): string;
    set configurationSource(value: string);
    get configurationSourceInput(): string | undefined;
    private _codeConfigurationValues;
    get codeConfigurationValues(): ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference;
    putCodeConfigurationValues(value: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues): void;
    resetCodeConfigurationValues(): void;
    get codeConfigurationValuesInput(): ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues | undefined;
}
export interface ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#type ApprunnerService#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#value ApprunnerService#value}
    */
    readonly value: string;
}
export declare function apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference | ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion): any;
export declare function apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToHclTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference | ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion): any;
export declare class ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion | undefined;
    set internalValue(value: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export interface ApprunnerServiceSourceConfigurationCodeRepository {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#repository_url ApprunnerService#repository_url}
    */
    readonly repositoryUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#source_directory ApprunnerService#source_directory}
    */
    readonly sourceDirectory?: string;
    /**
    * code_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#code_configuration ApprunnerService#code_configuration}
    */
    readonly codeConfiguration?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration;
    /**
    * source_code_version block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#source_code_version ApprunnerService#source_code_version}
    */
    readonly sourceCodeVersion: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion;
}
export declare function apprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference | ApprunnerServiceSourceConfigurationCodeRepository): any;
export declare function apprunnerServiceSourceConfigurationCodeRepositoryToHclTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference | ApprunnerServiceSourceConfigurationCodeRepository): any;
export declare class ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApprunnerServiceSourceConfigurationCodeRepository | undefined;
    set internalValue(value: ApprunnerServiceSourceConfigurationCodeRepository | undefined);
    private _repositoryUrl?;
    get repositoryUrl(): string;
    set repositoryUrl(value: string);
    get repositoryUrlInput(): string | undefined;
    private _sourceDirectory?;
    get sourceDirectory(): string;
    set sourceDirectory(value: string);
    resetSourceDirectory(): void;
    get sourceDirectoryInput(): string | undefined;
    private _codeConfiguration;
    get codeConfiguration(): ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference;
    putCodeConfiguration(value: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration): void;
    resetCodeConfiguration(): void;
    get codeConfigurationInput(): ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration | undefined;
    private _sourceCodeVersion;
    get sourceCodeVersion(): ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference;
    putSourceCodeVersion(value: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion): void;
    get sourceCodeVersionInput(): ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion | undefined;
}
export interface ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#port ApprunnerService#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}
    */
    readonly runtimeEnvironmentSecrets?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}
    */
    readonly runtimeEnvironmentVariables?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#start_command ApprunnerService#start_command}
    */
    readonly startCommand?: string;
}
export declare function apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference | ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration): any;
export declare function apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToHclTerraform(struct?: ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference | ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration): any;
export declare class ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration | undefined;
    set internalValue(value: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration | undefined);
    private _port?;
    get port(): string;
    set port(value: string);
    resetPort(): void;
    get portInput(): string | undefined;
    private _runtimeEnvironmentSecrets?;
    get runtimeEnvironmentSecrets(): {
        [key: string]: string;
    };
    set runtimeEnvironmentSecrets(value: {
        [key: string]: string;
    });
    resetRuntimeEnvironmentSecrets(): void;
    get runtimeEnvironmentSecretsInput(): {
        [key: string]: string;
    } | undefined;
    private _runtimeEnvironmentVariables?;
    get runtimeEnvironmentVariables(): {
        [key: string]: string;
    };
    set runtimeEnvironmentVariables(value: {
        [key: string]: string;
    });
    resetRuntimeEnvironmentVariables(): void;
    get runtimeEnvironmentVariablesInput(): {
        [key: string]: string;
    } | undefined;
    private _startCommand?;
    get startCommand(): string;
    set startCommand(value: string);
    resetStartCommand(): void;
    get startCommandInput(): string | undefined;
}
export interface ApprunnerServiceSourceConfigurationImageRepository {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#image_identifier ApprunnerService#image_identifier}
    */
    readonly imageIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#image_repository_type ApprunnerService#image_repository_type}
    */
    readonly imageRepositoryType: string;
    /**
    * image_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#image_configuration ApprunnerService#image_configuration}
    */
    readonly imageConfiguration?: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration;
}
export declare function apprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct?: ApprunnerServiceSourceConfigurationImageRepositoryOutputReference | ApprunnerServiceSourceConfigurationImageRepository): any;
export declare function apprunnerServiceSourceConfigurationImageRepositoryToHclTerraform(struct?: ApprunnerServiceSourceConfigurationImageRepositoryOutputReference | ApprunnerServiceSourceConfigurationImageRepository): any;
export declare class ApprunnerServiceSourceConfigurationImageRepositoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApprunnerServiceSourceConfigurationImageRepository | undefined;
    set internalValue(value: ApprunnerServiceSourceConfigurationImageRepository | undefined);
    private _imageIdentifier?;
    get imageIdentifier(): string;
    set imageIdentifier(value: string);
    get imageIdentifierInput(): string | undefined;
    private _imageRepositoryType?;
    get imageRepositoryType(): string;
    set imageRepositoryType(value: string);
    get imageRepositoryTypeInput(): string | undefined;
    private _imageConfiguration;
    get imageConfiguration(): ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference;
    putImageConfiguration(value: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration): void;
    resetImageConfiguration(): void;
    get imageConfigurationInput(): ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration | undefined;
}
export interface ApprunnerServiceSourceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#auto_deployments_enabled ApprunnerService#auto_deployments_enabled}
    */
    readonly autoDeploymentsEnabled?: boolean | cdktf.IResolvable;
    /**
    * authentication_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#authentication_configuration ApprunnerService#authentication_configuration}
    */
    readonly authenticationConfiguration?: ApprunnerServiceSourceConfigurationAuthenticationConfiguration;
    /**
    * code_repository block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#code_repository ApprunnerService#code_repository}
    */
    readonly codeRepository?: ApprunnerServiceSourceConfigurationCodeRepository;
    /**
    * image_repository block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#image_repository ApprunnerService#image_repository}
    */
    readonly imageRepository?: ApprunnerServiceSourceConfigurationImageRepository;
}
export declare function apprunnerServiceSourceConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationOutputReference | ApprunnerServiceSourceConfiguration): any;
export declare function apprunnerServiceSourceConfigurationToHclTerraform(struct?: ApprunnerServiceSourceConfigurationOutputReference | ApprunnerServiceSourceConfiguration): any;
export declare class ApprunnerServiceSourceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApprunnerServiceSourceConfiguration | undefined;
    set internalValue(value: ApprunnerServiceSourceConfiguration | undefined);
    private _autoDeploymentsEnabled?;
    get autoDeploymentsEnabled(): boolean | cdktf.IResolvable;
    set autoDeploymentsEnabled(value: boolean | cdktf.IResolvable);
    resetAutoDeploymentsEnabled(): void;
    get autoDeploymentsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _authenticationConfiguration;
    get authenticationConfiguration(): ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference;
    putAuthenticationConfiguration(value: ApprunnerServiceSourceConfigurationAuthenticationConfiguration): void;
    resetAuthenticationConfiguration(): void;
    get authenticationConfigurationInput(): ApprunnerServiceSourceConfigurationAuthenticationConfiguration | undefined;
    private _codeRepository;
    get codeRepository(): ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference;
    putCodeRepository(value: ApprunnerServiceSourceConfigurationCodeRepository): void;
    resetCodeRepository(): void;
    get codeRepositoryInput(): ApprunnerServiceSourceConfigurationCodeRepository | undefined;
    private _imageRepository;
    get imageRepository(): ApprunnerServiceSourceConfigurationImageRepositoryOutputReference;
    putImageRepository(value: ApprunnerServiceSourceConfigurationImageRepository): void;
    resetImageRepository(): void;
    get imageRepositoryInput(): ApprunnerServiceSourceConfigurationImageRepository | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service aws_apprunner_service}
*/
export declare class ApprunnerService extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_apprunner_service";
    /**
    * Generates CDKTF code for importing a ApprunnerService resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApprunnerService to import
    * @param importFromId The id of the existing ApprunnerService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApprunnerService to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_service aws_apprunner_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerServiceConfig
    */
    constructor(scope: Construct, id: string, config: ApprunnerServiceConfig);
    get arn(): string;
    private _autoScalingConfigurationArn?;
    get autoScalingConfigurationArn(): string;
    set autoScalingConfigurationArn(value: string);
    resetAutoScalingConfigurationArn(): void;
    get autoScalingConfigurationArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get serviceId(): string;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string | undefined;
    get serviceUrl(): string;
    get status(): string;
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
    private _encryptionConfiguration;
    get encryptionConfiguration(): ApprunnerServiceEncryptionConfigurationOutputReference;
    putEncryptionConfiguration(value: ApprunnerServiceEncryptionConfiguration): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): ApprunnerServiceEncryptionConfiguration | undefined;
    private _healthCheckConfiguration;
    get healthCheckConfiguration(): ApprunnerServiceHealthCheckConfigurationOutputReference;
    putHealthCheckConfiguration(value: ApprunnerServiceHealthCheckConfiguration): void;
    resetHealthCheckConfiguration(): void;
    get healthCheckConfigurationInput(): ApprunnerServiceHealthCheckConfiguration | undefined;
    private _instanceConfiguration;
    get instanceConfiguration(): ApprunnerServiceInstanceConfigurationOutputReference;
    putInstanceConfiguration(value: ApprunnerServiceInstanceConfiguration): void;
    resetInstanceConfiguration(): void;
    get instanceConfigurationInput(): ApprunnerServiceInstanceConfiguration | undefined;
    private _networkConfiguration;
    get networkConfiguration(): ApprunnerServiceNetworkConfigurationOutputReference;
    putNetworkConfiguration(value: ApprunnerServiceNetworkConfiguration): void;
    resetNetworkConfiguration(): void;
    get networkConfigurationInput(): ApprunnerServiceNetworkConfiguration | undefined;
    private _observabilityConfiguration;
    get observabilityConfiguration(): ApprunnerServiceObservabilityConfigurationOutputReference;
    putObservabilityConfiguration(value: ApprunnerServiceObservabilityConfiguration): void;
    resetObservabilityConfiguration(): void;
    get observabilityConfigurationInput(): ApprunnerServiceObservabilityConfiguration | undefined;
    private _sourceConfiguration;
    get sourceConfiguration(): ApprunnerServiceSourceConfigurationOutputReference;
    putSourceConfiguration(value: ApprunnerServiceSourceConfiguration): void;
    get sourceConfigurationInput(): ApprunnerServiceSourceConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
