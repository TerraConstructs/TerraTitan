/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerUserProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#domain_id SagemakerUserProfile#domain_id}
    */
    readonly domainId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#id SagemakerUserProfile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}
    */
    readonly singleSignOnUserIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}
    */
    readonly singleSignOnUserValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#tags SagemakerUserProfile#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#tags_all SagemakerUserProfile#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#user_profile_name SagemakerUserProfile#user_profile_name}
    */
    readonly userProfileName: string;
    /**
    * user_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#user_settings SagemakerUserProfile#user_settings}
    */
    readonly userSettings?: SagemakerUserProfileUserSettings;
}
export interface SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}
    */
    readonly status?: string;
}
export declare function sagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings): any;
export declare function sagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings): any;
export declare class SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface SagemakerUserProfileUserSettingsCanvasAppSettingsEmrServerlessSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#execution_role_arn SagemakerUserProfile#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}
    */
    readonly status?: string;
}
export declare function sagemakerUserProfileUserSettingsCanvasAppSettingsEmrServerlessSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsEmrServerlessSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsEmrServerlessSettings): any;
export declare function sagemakerUserProfileUserSettingsCanvasAppSettingsEmrServerlessSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsEmrServerlessSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsEmrServerlessSettings): any;
export declare class SagemakerUserProfileUserSettingsCanvasAppSettingsEmrServerlessSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsCanvasAppSettingsEmrServerlessSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsCanvasAppSettingsEmrServerlessSettings | undefined);
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    resetExecutionRoleArn(): void;
    get executionRoleArnInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#amazon_bedrock_role_arn SagemakerUserProfile#amazon_bedrock_role_arn}
    */
    readonly amazonBedrockRoleArn?: string;
}
export declare function sagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings): any;
export declare function sagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings): any;
export declare class SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings | undefined);
    private _amazonBedrockRoleArn?;
    get amazonBedrockRoleArn(): string;
    set amazonBedrockRoleArn(value: string);
    resetAmazonBedrockRoleArn(): void;
    get amazonBedrockRoleArnInput(): string | undefined;
}
export interface SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#data_source_name SagemakerUserProfile#data_source_name}
    */
    readonly dataSourceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#secret_arn SagemakerUserProfile#secret_arn}
    */
    readonly secretArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}
    */
    readonly status?: string;
}
export declare function sagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings | cdktf.IResolvable): any;
export declare function sagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings | cdktf.IResolvable): any;
export declare class SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings | cdktf.IResolvable | undefined);
    private _dataSourceName?;
    get dataSourceName(): string;
    set dataSourceName(value: string);
    resetDataSourceName(): void;
    get dataSourceNameInput(): string | undefined;
    private _secretArn?;
    get secretArn(): string;
    set secretArn(value: string);
    get secretArnInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export declare class SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference;
}
export interface SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}
    */
    readonly status?: string;
}
export declare function sagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings): any;
export declare function sagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings): any;
export declare class SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#cross_account_model_register_role_arn SagemakerUserProfile#cross_account_model_register_role_arn}
    */
    readonly crossAccountModelRegisterRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}
    */
    readonly status?: string;
}
export declare function sagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings): any;
export declare function sagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings): any;
export declare class SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings | undefined);
    private _crossAccountModelRegisterRoleArn?;
    get crossAccountModelRegisterRoleArn(): string;
    set crossAccountModelRegisterRoleArn(value: string);
    resetCrossAccountModelRegisterRoleArn(): void;
    get crossAccountModelRegisterRoleArnInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#amazon_forecast_role_arn SagemakerUserProfile#amazon_forecast_role_arn}
    */
    readonly amazonForecastRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}
    */
    readonly status?: string;
}
export declare function sagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings): any;
export declare function sagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings): any;
export declare class SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings | undefined);
    private _amazonForecastRoleArn?;
    get amazonForecastRoleArn(): string;
    set amazonForecastRoleArn(value: string);
    resetAmazonForecastRoleArn(): void;
    get amazonForecastRoleArnInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#s3_artifact_path SagemakerUserProfile#s3_artifact_path}
    */
    readonly s3ArtifactPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}
    */
    readonly s3KmsKeyId?: string;
}
export declare function sagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings): any;
export declare function sagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings): any;
export declare class SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings | undefined);
    private _s3ArtifactPath?;
    get s3ArtifactPath(): string;
    set s3ArtifactPath(value: string);
    resetS3ArtifactPath(): void;
    get s3ArtifactPathInput(): string | undefined;
    private _s3KmsKeyId?;
    get s3KmsKeyId(): string;
    set s3KmsKeyId(value: string);
    resetS3KmsKeyId(): void;
    get s3KmsKeyIdInput(): string | undefined;
}
export interface SagemakerUserProfileUserSettingsCanvasAppSettings {
    /**
    * direct_deploy_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#direct_deploy_settings SagemakerUserProfile#direct_deploy_settings}
    */
    readonly directDeploySettings?: SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings;
    /**
    * emr_serverless_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#emr_serverless_settings SagemakerUserProfile#emr_serverless_settings}
    */
    readonly emrServerlessSettings?: SagemakerUserProfileUserSettingsCanvasAppSettingsEmrServerlessSettings;
    /**
    * generative_ai_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#generative_ai_settings SagemakerUserProfile#generative_ai_settings}
    */
    readonly generativeAiSettings?: SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings;
    /**
    * identity_provider_oauth_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#identity_provider_oauth_settings SagemakerUserProfile#identity_provider_oauth_settings}
    */
    readonly identityProviderOauthSettings?: SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings[] | cdktf.IResolvable;
    /**
    * kendra_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#kendra_settings SagemakerUserProfile#kendra_settings}
    */
    readonly kendraSettings?: SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings;
    /**
    * model_register_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#model_register_settings SagemakerUserProfile#model_register_settings}
    */
    readonly modelRegisterSettings?: SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings;
    /**
    * time_series_forecasting_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#time_series_forecasting_settings SagemakerUserProfile#time_series_forecasting_settings}
    */
    readonly timeSeriesForecastingSettings?: SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings;
    /**
    * workspace_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#workspace_settings SagemakerUserProfile#workspace_settings}
    */
    readonly workspaceSettings?: SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings;
}
export declare function sagemakerUserProfileUserSettingsCanvasAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettings): any;
export declare function sagemakerUserProfileUserSettingsCanvasAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettings): any;
export declare class SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsCanvasAppSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsCanvasAppSettings | undefined);
    private _directDeploySettings;
    get directDeploySettings(): SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference;
    putDirectDeploySettings(value: SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings): void;
    resetDirectDeploySettings(): void;
    get directDeploySettingsInput(): SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings | undefined;
    private _emrServerlessSettings;
    get emrServerlessSettings(): SagemakerUserProfileUserSettingsCanvasAppSettingsEmrServerlessSettingsOutputReference;
    putEmrServerlessSettings(value: SagemakerUserProfileUserSettingsCanvasAppSettingsEmrServerlessSettings): void;
    resetEmrServerlessSettings(): void;
    get emrServerlessSettingsInput(): SagemakerUserProfileUserSettingsCanvasAppSettingsEmrServerlessSettings | undefined;
    private _generativeAiSettings;
    get generativeAiSettings(): SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettingsOutputReference;
    putGenerativeAiSettings(value: SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings): void;
    resetGenerativeAiSettings(): void;
    get generativeAiSettingsInput(): SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings | undefined;
    private _identityProviderOauthSettings;
    get identityProviderOauthSettings(): SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList;
    putIdentityProviderOauthSettings(value: SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings[] | cdktf.IResolvable): void;
    resetIdentityProviderOauthSettings(): void;
    get identityProviderOauthSettingsInput(): cdktf.IResolvable | SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings[] | undefined;
    private _kendraSettings;
    get kendraSettings(): SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference;
    putKendraSettings(value: SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings): void;
    resetKendraSettings(): void;
    get kendraSettingsInput(): SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings | undefined;
    private _modelRegisterSettings;
    get modelRegisterSettings(): SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference;
    putModelRegisterSettings(value: SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings): void;
    resetModelRegisterSettings(): void;
    get modelRegisterSettingsInput(): SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings | undefined;
    private _timeSeriesForecastingSettings;
    get timeSeriesForecastingSettings(): SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference;
    putTimeSeriesForecastingSettings(value: SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings): void;
    resetTimeSeriesForecastingSettings(): void;
    get timeSeriesForecastingSettingsInput(): SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings | undefined;
    private _workspaceSettings;
    get workspaceSettings(): SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference;
    putWorkspaceSettings(value: SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings): void;
    resetWorkspaceSettings(): void;
    get workspaceSettingsInput(): SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings | undefined;
}
export interface SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#idle_timeout_in_minutes SagemakerUserProfile#idle_timeout_in_minutes}
    */
    readonly idleTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#lifecycle_management SagemakerUserProfile#lifecycle_management}
    */
    readonly lifecycleManagement?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#max_idle_timeout_in_minutes SagemakerUserProfile#max_idle_timeout_in_minutes}
    */
    readonly maxIdleTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#min_idle_timeout_in_minutes SagemakerUserProfile#min_idle_timeout_in_minutes}
    */
    readonly minIdleTimeoutInMinutes?: number;
}
export declare function sagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings): any;
export declare function sagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings): any;
export declare class SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | undefined);
    private _idleTimeoutInMinutes?;
    get idleTimeoutInMinutes(): number;
    set idleTimeoutInMinutes(value: number);
    resetIdleTimeoutInMinutes(): void;
    get idleTimeoutInMinutesInput(): number | undefined;
    private _lifecycleManagement?;
    get lifecycleManagement(): string;
    set lifecycleManagement(value: string);
    resetLifecycleManagement(): void;
    get lifecycleManagementInput(): string | undefined;
    private _maxIdleTimeoutInMinutes?;
    get maxIdleTimeoutInMinutes(): number;
    set maxIdleTimeoutInMinutes(value: number);
    resetMaxIdleTimeoutInMinutes(): void;
    get maxIdleTimeoutInMinutesInput(): number | undefined;
    private _minIdleTimeoutInMinutes?;
    get minIdleTimeoutInMinutes(): number;
    set minIdleTimeoutInMinutes(value: number);
    resetMinIdleTimeoutInMinutes(): void;
    get minIdleTimeoutInMinutesInput(): number | undefined;
}
export interface SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement {
    /**
    * idle_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#idle_settings SagemakerUserProfile#idle_settings}
    */
    readonly idleSettings?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;
}
export declare function sagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementToTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference | SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement): any;
export declare function sagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementToHclTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference | SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement): any;
export declare class SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement | undefined);
    private _idleSettings;
    get idleSettings(): SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference;
    putIdleSettings(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings): void;
    resetIdleSettings(): void;
    get idleSettingsInput(): SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | undefined;
}
export interface SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}
    */
    readonly imageName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export declare function sagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImageToTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImage | cdktf.IResolvable): any;
export declare function sagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImageToHclTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImage | cdktf.IResolvable): any;
export declare class SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImage | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImage | cdktf.IResolvable | undefined);
    private _appImageConfigName?;
    get appImageConfigName(): string;
    set appImageConfigName(value: string);
    get appImageConfigNameInput(): string | undefined;
    private _imageName?;
    get imageName(): string;
    set imageName(value: string);
    get imageNameInput(): string | undefined;
    private _imageVersionNumber?;
    get imageVersionNumber(): number;
    set imageVersionNumber(value: number);
    resetImageVersionNumber(): void;
    get imageVersionNumberInput(): number | undefined;
}
export declare class SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImageOutputReference;
}
export interface SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec): any;
export declare function sagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec): any;
export declare class SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _lifecycleConfigArn?;
    get lifecycleConfigArn(): string;
    set lifecycleConfigArn(value: string);
    resetLifecycleConfigArn(): void;
    get lifecycleConfigArnInput(): string | undefined;
    private _sagemakerImageArn?;
    get sagemakerImageArn(): string;
    set sagemakerImageArn(value: string);
    resetSagemakerImageArn(): void;
    get sagemakerImageArnInput(): string | undefined;
    private _sagemakerImageVersionAlias?;
    get sagemakerImageVersionAlias(): string;
    set sagemakerImageVersionAlias(value: string);
    resetSagemakerImageVersionAlias(): void;
    get sagemakerImageVersionAliasInput(): string | undefined;
    private _sagemakerImageVersionArn?;
    get sagemakerImageVersionArn(): string;
    set sagemakerImageVersionArn(value: string);
    resetSagemakerImageVersionArn(): void;
    get sagemakerImageVersionArnInput(): string | undefined;
}
export interface SagemakerUserProfileUserSettingsCodeEditorAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#built_in_lifecycle_config_arn SagemakerUserProfile#built_in_lifecycle_config_arn}
    */
    readonly builtInLifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * app_lifecycle_management block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#app_lifecycle_management SagemakerUserProfile#app_lifecycle_management}
    */
    readonly appLifecycleManagement?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement;
    /**
    * custom_image block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#custom_image SagemakerUserProfile#custom_image}
    */
    readonly customImage?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec;
}
export declare function sagemakerUserProfileUserSettingsCodeEditorAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference | SagemakerUserProfileUserSettingsCodeEditorAppSettings): any;
export declare function sagemakerUserProfileUserSettingsCodeEditorAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference | SagemakerUserProfileUserSettingsCodeEditorAppSettings): any;
export declare class SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsCodeEditorAppSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsCodeEditorAppSettings | undefined);
    private _builtInLifecycleConfigArn?;
    get builtInLifecycleConfigArn(): string;
    set builtInLifecycleConfigArn(value: string);
    resetBuiltInLifecycleConfigArn(): void;
    get builtInLifecycleConfigArnInput(): string | undefined;
    private _lifecycleConfigArns?;
    get lifecycleConfigArns(): string[];
    set lifecycleConfigArns(value: string[]);
    resetLifecycleConfigArns(): void;
    get lifecycleConfigArnsInput(): string[] | undefined;
    private _appLifecycleManagement;
    get appLifecycleManagement(): SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference;
    putAppLifecycleManagement(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement): void;
    resetAppLifecycleManagement(): void;
    get appLifecycleManagementInput(): SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement | undefined;
    private _customImage;
    get customImage(): SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImageList;
    putCustomImage(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImage[] | cdktf.IResolvable): void;
    resetCustomImage(): void;
    get customImageInput(): cdktf.IResolvable | SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImage[] | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#file_system_id SagemakerUserProfile#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#file_system_path SagemakerUserProfile#file_system_path}
    */
    readonly fileSystemPath?: string;
}
export declare function sagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigToTerraform(struct?: SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig | cdktf.IResolvable): any;
export declare function sagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigToHclTerraform(struct?: SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig | cdktf.IResolvable): any;
export declare class SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig | cdktf.IResolvable | undefined);
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string | undefined;
    private _fileSystemPath?;
    get fileSystemPath(): string;
    set fileSystemPath(value: string);
    resetFileSystemPath(): void;
    get fileSystemPathInput(): string | undefined;
}
export declare class SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference;
}
export interface SagemakerUserProfileUserSettingsCustomFileSystemConfig {
    /**
    * efs_file_system_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#efs_file_system_config SagemakerUserProfile#efs_file_system_config}
    */
    readonly efsFileSystemConfig?: SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig[] | cdktf.IResolvable;
}
export declare function sagemakerUserProfileUserSettingsCustomFileSystemConfigToTerraform(struct?: SagemakerUserProfileUserSettingsCustomFileSystemConfig | cdktf.IResolvable): any;
export declare function sagemakerUserProfileUserSettingsCustomFileSystemConfigToHclTerraform(struct?: SagemakerUserProfileUserSettingsCustomFileSystemConfig | cdktf.IResolvable): any;
export declare class SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerUserProfileUserSettingsCustomFileSystemConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsCustomFileSystemConfig | cdktf.IResolvable | undefined);
    private _efsFileSystemConfig;
    get efsFileSystemConfig(): SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList;
    putEfsFileSystemConfig(value: SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig[] | cdktf.IResolvable): void;
    resetEfsFileSystemConfig(): void;
    get efsFileSystemConfigInput(): cdktf.IResolvable | SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig[] | undefined;
}
export declare class SagemakerUserProfileUserSettingsCustomFileSystemConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerUserProfileUserSettingsCustomFileSystemConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference;
}
export interface SagemakerUserProfileUserSettingsCustomPosixUserConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#gid SagemakerUserProfile#gid}
    */
    readonly gid: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#uid SagemakerUserProfile#uid}
    */
    readonly uid: number;
}
export declare function sagemakerUserProfileUserSettingsCustomPosixUserConfigToTerraform(struct?: SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference | SagemakerUserProfileUserSettingsCustomPosixUserConfig): any;
export declare function sagemakerUserProfileUserSettingsCustomPosixUserConfigToHclTerraform(struct?: SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference | SagemakerUserProfileUserSettingsCustomPosixUserConfig): any;
export declare class SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsCustomPosixUserConfig | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsCustomPosixUserConfig | undefined);
    private _gid?;
    get gid(): number;
    set gid(value: number);
    get gidInput(): number | undefined;
    private _uid?;
    get uid(): number;
    set uid(value: number);
    get uidInput(): number | undefined;
}
export interface SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#idle_timeout_in_minutes SagemakerUserProfile#idle_timeout_in_minutes}
    */
    readonly idleTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#lifecycle_management SagemakerUserProfile#lifecycle_management}
    */
    readonly lifecycleManagement?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#max_idle_timeout_in_minutes SagemakerUserProfile#max_idle_timeout_in_minutes}
    */
    readonly maxIdleTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#min_idle_timeout_in_minutes SagemakerUserProfile#min_idle_timeout_in_minutes}
    */
    readonly minIdleTimeoutInMinutes?: number;
}
export declare function sagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): any;
export declare function sagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): any;
export declare class SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined);
    private _idleTimeoutInMinutes?;
    get idleTimeoutInMinutes(): number;
    set idleTimeoutInMinutes(value: number);
    resetIdleTimeoutInMinutes(): void;
    get idleTimeoutInMinutesInput(): number | undefined;
    private _lifecycleManagement?;
    get lifecycleManagement(): string;
    set lifecycleManagement(value: string);
    resetLifecycleManagement(): void;
    get lifecycleManagementInput(): string | undefined;
    private _maxIdleTimeoutInMinutes?;
    get maxIdleTimeoutInMinutes(): number;
    set maxIdleTimeoutInMinutes(value: number);
    resetMaxIdleTimeoutInMinutes(): void;
    get maxIdleTimeoutInMinutesInput(): number | undefined;
    private _minIdleTimeoutInMinutes?;
    get minIdleTimeoutInMinutes(): number;
    set minIdleTimeoutInMinutes(value: number);
    resetMinIdleTimeoutInMinutes(): void;
    get minIdleTimeoutInMinutesInput(): number | undefined;
}
export interface SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement {
    /**
    * idle_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#idle_settings SagemakerUserProfile#idle_settings}
    */
    readonly idleSettings?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
}
export declare function sagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference | SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement): any;
export declare function sagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference | SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement): any;
export declare class SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined);
    private _idleSettings;
    get idleSettings(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference;
    putIdleSettings(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): void;
    resetIdleSettings(): void;
    get idleSettingsInput(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined;
}
export interface SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#repository_url SagemakerUserProfile#repository_url}
    */
    readonly repositoryUrl: string;
}
export declare function sagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable): any;
export declare function sagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable): any;
export declare class SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable | undefined);
    private _repositoryUrl?;
    get repositoryUrl(): string;
    set repositoryUrl(value: string);
    get repositoryUrlInput(): string | undefined;
}
export declare class SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference;
}
export interface SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}
    */
    readonly imageName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export declare function sagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable): any;
export declare function sagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable): any;
export declare class SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable | undefined);
    private _appImageConfigName?;
    get appImageConfigName(): string;
    set appImageConfigName(value: string);
    get appImageConfigNameInput(): string | undefined;
    private _imageName?;
    get imageName(): string;
    set imageName(value: string);
    get imageNameInput(): string | undefined;
    private _imageVersionNumber?;
    get imageVersionNumber(): number;
    set imageVersionNumber(value: number);
    resetImageVersionNumber(): void;
    get imageVersionNumberInput(): number | undefined;
}
export declare class SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference;
}
export interface SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec): any;
export declare function sagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec): any;
export declare class SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _lifecycleConfigArn?;
    get lifecycleConfigArn(): string;
    set lifecycleConfigArn(value: string);
    resetLifecycleConfigArn(): void;
    get lifecycleConfigArnInput(): string | undefined;
    private _sagemakerImageArn?;
    get sagemakerImageArn(): string;
    set sagemakerImageArn(value: string);
    resetSagemakerImageArn(): void;
    get sagemakerImageArnInput(): string | undefined;
    private _sagemakerImageVersionAlias?;
    get sagemakerImageVersionAlias(): string;
    set sagemakerImageVersionAlias(value: string);
    resetSagemakerImageVersionAlias(): void;
    get sagemakerImageVersionAliasInput(): string | undefined;
    private _sagemakerImageVersionArn?;
    get sagemakerImageVersionArn(): string;
    set sagemakerImageVersionArn(value: string);
    resetSagemakerImageVersionArn(): void;
    get sagemakerImageVersionArnInput(): string | undefined;
}
export interface SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#assumable_role_arns SagemakerUserProfile#assumable_role_arns}
    */
    readonly assumableRoleArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#execution_role_arns SagemakerUserProfile#execution_role_arns}
    */
    readonly executionRoleArns?: string[];
}
export declare function sagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference | SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings): any;
export declare function sagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference | SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings): any;
export declare class SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings | undefined);
    private _assumableRoleArns?;
    get assumableRoleArns(): string[];
    set assumableRoleArns(value: string[]);
    resetAssumableRoleArns(): void;
    get assumableRoleArnsInput(): string[] | undefined;
    private _executionRoleArns?;
    get executionRoleArns(): string[];
    set executionRoleArns(value: string[]);
    resetExecutionRoleArns(): void;
    get executionRoleArnsInput(): string[] | undefined;
}
export interface SagemakerUserProfileUserSettingsJupyterLabAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#built_in_lifecycle_config_arn SagemakerUserProfile#built_in_lifecycle_config_arn}
    */
    readonly builtInLifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * app_lifecycle_management block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#app_lifecycle_management SagemakerUserProfile#app_lifecycle_management}
    */
    readonly appLifecycleManagement?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement;
    /**
    * code_repository block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#code_repository SagemakerUserProfile#code_repository}
    */
    readonly codeRepository?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable;
    /**
    * custom_image block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#custom_image SagemakerUserProfile#custom_image}
    */
    readonly customImage?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec;
    /**
    * emr_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#emr_settings SagemakerUserProfile#emr_settings}
    */
    readonly emrSettings?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings;
}
export declare function sagemakerUserProfileUserSettingsJupyterLabAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference | SagemakerUserProfileUserSettingsJupyterLabAppSettings): any;
export declare function sagemakerUserProfileUserSettingsJupyterLabAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference | SagemakerUserProfileUserSettingsJupyterLabAppSettings): any;
export declare class SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsJupyterLabAppSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsJupyterLabAppSettings | undefined);
    private _builtInLifecycleConfigArn?;
    get builtInLifecycleConfigArn(): string;
    set builtInLifecycleConfigArn(value: string);
    resetBuiltInLifecycleConfigArn(): void;
    get builtInLifecycleConfigArnInput(): string | undefined;
    private _lifecycleConfigArns?;
    get lifecycleConfigArns(): string[];
    set lifecycleConfigArns(value: string[]);
    resetLifecycleConfigArns(): void;
    get lifecycleConfigArnsInput(): string[] | undefined;
    private _appLifecycleManagement;
    get appLifecycleManagement(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference;
    putAppLifecycleManagement(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement): void;
    resetAppLifecycleManagement(): void;
    get appLifecycleManagementInput(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined;
    private _codeRepository;
    get codeRepository(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList;
    putCodeRepository(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable): void;
    resetCodeRepository(): void;
    get codeRepositoryInput(): cdktf.IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository[] | undefined;
    private _customImage;
    get customImage(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList;
    putCustomImage(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage[] | cdktf.IResolvable): void;
    resetCustomImage(): void;
    get customImageInput(): cdktf.IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage[] | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined;
    private _emrSettings;
    get emrSettings(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference;
    putEmrSettings(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings): void;
    resetEmrSettings(): void;
    get emrSettingsInput(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings | undefined;
}
export interface SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#repository_url SagemakerUserProfile#repository_url}
    */
    readonly repositoryUrl: string;
}
export declare function sagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable): any;
export declare function sagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable): any;
export declare class SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable | undefined);
    private _repositoryUrl?;
    get repositoryUrl(): string;
    set repositoryUrl(value: string);
    get repositoryUrlInput(): string | undefined;
}
export declare class SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference;
}
export interface SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any;
export declare function sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any;
export declare class SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _lifecycleConfigArn?;
    get lifecycleConfigArn(): string;
    set lifecycleConfigArn(value: string);
    resetLifecycleConfigArn(): void;
    get lifecycleConfigArnInput(): string | undefined;
    private _sagemakerImageArn?;
    get sagemakerImageArn(): string;
    set sagemakerImageArn(value: string);
    resetSagemakerImageArn(): void;
    get sagemakerImageArnInput(): string | undefined;
    private _sagemakerImageVersionAlias?;
    get sagemakerImageVersionAlias(): string;
    set sagemakerImageVersionAlias(value: string);
    resetSagemakerImageVersionAlias(): void;
    get sagemakerImageVersionAliasInput(): string | undefined;
    private _sagemakerImageVersionArn?;
    get sagemakerImageVersionArn(): string;
    set sagemakerImageVersionArn(value: string);
    resetSagemakerImageVersionArn(): void;
    get sagemakerImageVersionArnInput(): string | undefined;
}
export interface SagemakerUserProfileUserSettingsJupyterServerAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * code_repository block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#code_repository SagemakerUserProfile#code_repository}
    */
    readonly codeRepository?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable;
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
}
export declare function sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference | SagemakerUserProfileUserSettingsJupyterServerAppSettings): any;
export declare function sagemakerUserProfileUserSettingsJupyterServerAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference | SagemakerUserProfileUserSettingsJupyterServerAppSettings): any;
export declare class SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsJupyterServerAppSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsJupyterServerAppSettings | undefined);
    private _lifecycleConfigArns?;
    get lifecycleConfigArns(): string[];
    set lifecycleConfigArns(value: string[]);
    resetLifecycleConfigArns(): void;
    get lifecycleConfigArnsInput(): string[] | undefined;
    private _codeRepository;
    get codeRepository(): SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList;
    putCodeRepository(value: SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable): void;
    resetCodeRepository(): void;
    get codeRepositoryInput(): cdktf.IResolvable | SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository[] | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}
    */
    readonly imageName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export declare function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable): any;
export declare function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToHclTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable): any;
export declare class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined);
    private _appImageConfigName?;
    get appImageConfigName(): string;
    set appImageConfigName(value: string);
    get appImageConfigNameInput(): string | undefined;
    private _imageName?;
    get imageName(): string;
    set imageName(value: string);
    get imageNameInput(): string | undefined;
    private _imageVersionNumber?;
    get imageVersionNumber(): number;
    set imageVersionNumber(value: number);
    resetImageVersionNumber(): void;
    get imageVersionNumberInput(): number | undefined;
}
export declare class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference;
}
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any;
export declare function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any;
export declare class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _lifecycleConfigArn?;
    get lifecycleConfigArn(): string;
    set lifecycleConfigArn(value: string);
    resetLifecycleConfigArn(): void;
    get lifecycleConfigArnInput(): string | undefined;
    private _sagemakerImageArn?;
    get sagemakerImageArn(): string;
    set sagemakerImageArn(value: string);
    resetSagemakerImageArn(): void;
    get sagemakerImageArnInput(): string | undefined;
    private _sagemakerImageVersionAlias?;
    get sagemakerImageVersionAlias(): string;
    set sagemakerImageVersionAlias(value: string);
    resetSagemakerImageVersionAlias(): void;
    get sagemakerImageVersionAliasInput(): string | undefined;
    private _sagemakerImageVersionArn?;
    get sagemakerImageVersionArn(): string;
    set sagemakerImageVersionArn(value: string);
    resetSagemakerImageVersionArn(): void;
    get sagemakerImageVersionArnInput(): string | undefined;
}
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * custom_image block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#custom_image SagemakerUserProfile#custom_image}
    */
    readonly customImage?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}
export declare function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference | SagemakerUserProfileUserSettingsKernelGatewayAppSettings): any;
export declare function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference | SagemakerUserProfileUserSettingsKernelGatewayAppSettings): any;
export declare class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsKernelGatewayAppSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettings | undefined);
    private _lifecycleConfigArns?;
    get lifecycleConfigArns(): string[];
    set lifecycleConfigArns(value: string[]);
    resetLifecycleConfigArns(): void;
    get lifecycleConfigArnsInput(): string[] | undefined;
    private _customImage;
    get customImage(): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList;
    putCustomImage(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable): void;
    resetCustomImage(): void;
    get customImageInput(): cdktf.IResolvable | SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage[] | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}
    */
    readonly imageName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export declare function sagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageToTerraform(struct?: SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage | cdktf.IResolvable): any;
export declare function sagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageToHclTerraform(struct?: SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage | cdktf.IResolvable): any;
export declare class SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage | cdktf.IResolvable | undefined);
    private _appImageConfigName?;
    get appImageConfigName(): string;
    set appImageConfigName(value: string);
    get appImageConfigNameInput(): string | undefined;
    private _imageName?;
    get imageName(): string;
    set imageName(value: string);
    get imageNameInput(): string | undefined;
    private _imageVersionNumber?;
    get imageVersionNumber(): number;
    set imageVersionNumber(value: number);
    resetImageVersionNumber(): void;
    get imageVersionNumberInput(): number | undefined;
}
export declare class SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference;
}
export interface SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec): any;
export declare function sagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec): any;
export declare class SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _lifecycleConfigArn?;
    get lifecycleConfigArn(): string;
    set lifecycleConfigArn(value: string);
    resetLifecycleConfigArn(): void;
    get lifecycleConfigArnInput(): string | undefined;
    private _sagemakerImageArn?;
    get sagemakerImageArn(): string;
    set sagemakerImageArn(value: string);
    resetSagemakerImageArn(): void;
    get sagemakerImageArnInput(): string | undefined;
    private _sagemakerImageVersionAlias?;
    get sagemakerImageVersionAlias(): string;
    set sagemakerImageVersionAlias(value: string);
    resetSagemakerImageVersionAlias(): void;
    get sagemakerImageVersionAliasInput(): string | undefined;
    private _sagemakerImageVersionArn?;
    get sagemakerImageVersionArn(): string;
    set sagemakerImageVersionArn(value: string);
    resetSagemakerImageVersionArn(): void;
    get sagemakerImageVersionArnInput(): string | undefined;
}
export interface SagemakerUserProfileUserSettingsRSessionAppSettings {
    /**
    * custom_image block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#custom_image SagemakerUserProfile#custom_image}
    */
    readonly customImage?: SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec;
}
export declare function sagemakerUserProfileUserSettingsRSessionAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference | SagemakerUserProfileUserSettingsRSessionAppSettings): any;
export declare function sagemakerUserProfileUserSettingsRSessionAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference | SagemakerUserProfileUserSettingsRSessionAppSettings): any;
export declare class SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsRSessionAppSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsRSessionAppSettings | undefined);
    private _customImage;
    get customImage(): SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList;
    putCustomImage(value: SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage[] | cdktf.IResolvable): void;
    resetCustomImage(): void;
    get customImageInput(): cdktf.IResolvable | SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage[] | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerUserProfileUserSettingsRStudioServerProAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#access_status SagemakerUserProfile#access_status}
    */
    readonly accessStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#user_group SagemakerUserProfile#user_group}
    */
    readonly userGroup?: string;
}
export declare function sagemakerUserProfileUserSettingsRStudioServerProAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference | SagemakerUserProfileUserSettingsRStudioServerProAppSettings): any;
export declare function sagemakerUserProfileUserSettingsRStudioServerProAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference | SagemakerUserProfileUserSettingsRStudioServerProAppSettings): any;
export declare class SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsRStudioServerProAppSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsRStudioServerProAppSettings | undefined);
    private _accessStatus?;
    get accessStatus(): string;
    set accessStatus(value: string);
    resetAccessStatus(): void;
    get accessStatusInput(): string | undefined;
    private _userGroup?;
    get userGroup(): string;
    set userGroup(value: string);
    resetUserGroup(): void;
    get userGroupInput(): string | undefined;
}
export interface SagemakerUserProfileUserSettingsSharingSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#notebook_output_option SagemakerUserProfile#notebook_output_option}
    */
    readonly notebookOutputOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}
    */
    readonly s3KmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#s3_output_path SagemakerUserProfile#s3_output_path}
    */
    readonly s3OutputPath?: string;
}
export declare function sagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsSharingSettingsOutputReference | SagemakerUserProfileUserSettingsSharingSettings): any;
export declare function sagemakerUserProfileUserSettingsSharingSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsSharingSettingsOutputReference | SagemakerUserProfileUserSettingsSharingSettings): any;
export declare class SagemakerUserProfileUserSettingsSharingSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsSharingSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsSharingSettings | undefined);
    private _notebookOutputOption?;
    get notebookOutputOption(): string;
    set notebookOutputOption(value: string);
    resetNotebookOutputOption(): void;
    get notebookOutputOptionInput(): string | undefined;
    private _s3KmsKeyId?;
    get s3KmsKeyId(): string;
    set s3KmsKeyId(value: string);
    resetS3KmsKeyId(): void;
    get s3KmsKeyIdInput(): string | undefined;
    private _s3OutputPath?;
    get s3OutputPath(): string;
    set s3OutputPath(value: string);
    resetS3OutputPath(): void;
    get s3OutputPathInput(): string | undefined;
}
export interface SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#default_ebs_volume_size_in_gb SagemakerUserProfile#default_ebs_volume_size_in_gb}
    */
    readonly defaultEbsVolumeSizeInGb: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#maximum_ebs_volume_size_in_gb SagemakerUserProfile#maximum_ebs_volume_size_in_gb}
    */
    readonly maximumEbsVolumeSizeInGb: number;
}
export declare function sagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference | SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings): any;
export declare function sagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference | SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings): any;
export declare class SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined);
    private _defaultEbsVolumeSizeInGb?;
    get defaultEbsVolumeSizeInGb(): number;
    set defaultEbsVolumeSizeInGb(value: number);
    get defaultEbsVolumeSizeInGbInput(): number | undefined;
    private _maximumEbsVolumeSizeInGb?;
    get maximumEbsVolumeSizeInGb(): number;
    set maximumEbsVolumeSizeInGb(value: number);
    get maximumEbsVolumeSizeInGbInput(): number | undefined;
}
export interface SagemakerUserProfileUserSettingsSpaceStorageSettings {
    /**
    * default_ebs_storage_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#default_ebs_storage_settings SagemakerUserProfile#default_ebs_storage_settings}
    */
    readonly defaultEbsStorageSettings?: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
}
export declare function sagemakerUserProfileUserSettingsSpaceStorageSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference | SagemakerUserProfileUserSettingsSpaceStorageSettings): any;
export declare function sagemakerUserProfileUserSettingsSpaceStorageSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference | SagemakerUserProfileUserSettingsSpaceStorageSettings): any;
export declare class SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsSpaceStorageSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsSpaceStorageSettings | undefined);
    private _defaultEbsStorageSettings;
    get defaultEbsStorageSettings(): SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference;
    putDefaultEbsStorageSettings(value: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings): void;
    resetDefaultEbsStorageSettings(): void;
    get defaultEbsStorageSettingsInput(): SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined;
}
export interface SagemakerUserProfileUserSettingsStudioWebPortalSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#hidden_app_types SagemakerUserProfile#hidden_app_types}
    */
    readonly hiddenAppTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#hidden_instance_types SagemakerUserProfile#hidden_instance_types}
    */
    readonly hiddenInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#hidden_ml_tools SagemakerUserProfile#hidden_ml_tools}
    */
    readonly hiddenMlTools?: string[];
}
export declare function sagemakerUserProfileUserSettingsStudioWebPortalSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference | SagemakerUserProfileUserSettingsStudioWebPortalSettings): any;
export declare function sagemakerUserProfileUserSettingsStudioWebPortalSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference | SagemakerUserProfileUserSettingsStudioWebPortalSettings): any;
export declare class SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsStudioWebPortalSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsStudioWebPortalSettings | undefined);
    private _hiddenAppTypes?;
    get hiddenAppTypes(): string[];
    set hiddenAppTypes(value: string[]);
    resetHiddenAppTypes(): void;
    get hiddenAppTypesInput(): string[] | undefined;
    private _hiddenInstanceTypes?;
    get hiddenInstanceTypes(): string[];
    set hiddenInstanceTypes(value: string[]);
    resetHiddenInstanceTypes(): void;
    get hiddenInstanceTypesInput(): string[] | undefined;
    private _hiddenMlTools?;
    get hiddenMlTools(): string[];
    set hiddenMlTools(value: string[]);
    resetHiddenMlTools(): void;
    get hiddenMlToolsInput(): string[] | undefined;
}
export interface SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec): any;
export declare function sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec): any;
export declare class SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _lifecycleConfigArn?;
    get lifecycleConfigArn(): string;
    set lifecycleConfigArn(value: string);
    resetLifecycleConfigArn(): void;
    get lifecycleConfigArnInput(): string | undefined;
    private _sagemakerImageArn?;
    get sagemakerImageArn(): string;
    set sagemakerImageArn(value: string);
    resetSagemakerImageArn(): void;
    get sagemakerImageArnInput(): string | undefined;
    private _sagemakerImageVersionAlias?;
    get sagemakerImageVersionAlias(): string;
    set sagemakerImageVersionAlias(value: string);
    resetSagemakerImageVersionAlias(): void;
    get sagemakerImageVersionAliasInput(): string | undefined;
    private _sagemakerImageVersionArn?;
    get sagemakerImageVersionArn(): string;
    set sagemakerImageVersionArn(value: string);
    resetSagemakerImageVersionArn(): void;
    get sagemakerImageVersionArnInput(): string | undefined;
}
export interface SagemakerUserProfileUserSettingsTensorBoardAppSettings {
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec;
}
export declare function sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference | SagemakerUserProfileUserSettingsTensorBoardAppSettings): any;
export declare function sagemakerUserProfileUserSettingsTensorBoardAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference | SagemakerUserProfileUserSettingsTensorBoardAppSettings): any;
export declare class SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettingsTensorBoardAppSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettingsTensorBoardAppSettings | undefined);
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerUserProfileUserSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#auto_mount_home_efs SagemakerUserProfile#auto_mount_home_efs}
    */
    readonly autoMountHomeEfs?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#default_landing_uri SagemakerUserProfile#default_landing_uri}
    */
    readonly defaultLandingUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#execution_role SagemakerUserProfile#execution_role}
    */
    readonly executionRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#security_groups SagemakerUserProfile#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#studio_web_portal SagemakerUserProfile#studio_web_portal}
    */
    readonly studioWebPortal?: string;
    /**
    * canvas_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#canvas_app_settings SagemakerUserProfile#canvas_app_settings}
    */
    readonly canvasAppSettings?: SagemakerUserProfileUserSettingsCanvasAppSettings;
    /**
    * code_editor_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#code_editor_app_settings SagemakerUserProfile#code_editor_app_settings}
    */
    readonly codeEditorAppSettings?: SagemakerUserProfileUserSettingsCodeEditorAppSettings;
    /**
    * custom_file_system_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#custom_file_system_config SagemakerUserProfile#custom_file_system_config}
    */
    readonly customFileSystemConfig?: SagemakerUserProfileUserSettingsCustomFileSystemConfig[] | cdktf.IResolvable;
    /**
    * custom_posix_user_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#custom_posix_user_config SagemakerUserProfile#custom_posix_user_config}
    */
    readonly customPosixUserConfig?: SagemakerUserProfileUserSettingsCustomPosixUserConfig;
    /**
    * jupyter_lab_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#jupyter_lab_app_settings SagemakerUserProfile#jupyter_lab_app_settings}
    */
    readonly jupyterLabAppSettings?: SagemakerUserProfileUserSettingsJupyterLabAppSettings;
    /**
    * jupyter_server_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#jupyter_server_app_settings SagemakerUserProfile#jupyter_server_app_settings}
    */
    readonly jupyterServerAppSettings?: SagemakerUserProfileUserSettingsJupyterServerAppSettings;
    /**
    * kernel_gateway_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#kernel_gateway_app_settings SagemakerUserProfile#kernel_gateway_app_settings}
    */
    readonly kernelGatewayAppSettings?: SagemakerUserProfileUserSettingsKernelGatewayAppSettings;
    /**
    * r_session_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#r_session_app_settings SagemakerUserProfile#r_session_app_settings}
    */
    readonly rSessionAppSettings?: SagemakerUserProfileUserSettingsRSessionAppSettings;
    /**
    * r_studio_server_pro_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#r_studio_server_pro_app_settings SagemakerUserProfile#r_studio_server_pro_app_settings}
    */
    readonly rStudioServerProAppSettings?: SagemakerUserProfileUserSettingsRStudioServerProAppSettings;
    /**
    * sharing_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#sharing_settings SagemakerUserProfile#sharing_settings}
    */
    readonly sharingSettings?: SagemakerUserProfileUserSettingsSharingSettings;
    /**
    * space_storage_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#space_storage_settings SagemakerUserProfile#space_storage_settings}
    */
    readonly spaceStorageSettings?: SagemakerUserProfileUserSettingsSpaceStorageSettings;
    /**
    * studio_web_portal_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#studio_web_portal_settings SagemakerUserProfile#studio_web_portal_settings}
    */
    readonly studioWebPortalSettings?: SagemakerUserProfileUserSettingsStudioWebPortalSettings;
    /**
    * tensor_board_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#tensor_board_app_settings SagemakerUserProfile#tensor_board_app_settings}
    */
    readonly tensorBoardAppSettings?: SagemakerUserProfileUserSettingsTensorBoardAppSettings;
}
export declare function sagemakerUserProfileUserSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsOutputReference | SagemakerUserProfileUserSettings): any;
export declare function sagemakerUserProfileUserSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsOutputReference | SagemakerUserProfileUserSettings): any;
export declare class SagemakerUserProfileUserSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerUserProfileUserSettings | undefined;
    set internalValue(value: SagemakerUserProfileUserSettings | undefined);
    private _autoMountHomeEfs?;
    get autoMountHomeEfs(): string;
    set autoMountHomeEfs(value: string);
    resetAutoMountHomeEfs(): void;
    get autoMountHomeEfsInput(): string | undefined;
    private _defaultLandingUri?;
    get defaultLandingUri(): string;
    set defaultLandingUri(value: string);
    resetDefaultLandingUri(): void;
    get defaultLandingUriInput(): string | undefined;
    private _executionRole?;
    get executionRole(): string;
    set executionRole(value: string);
    get executionRoleInput(): string | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _studioWebPortal?;
    get studioWebPortal(): string;
    set studioWebPortal(value: string);
    resetStudioWebPortal(): void;
    get studioWebPortalInput(): string | undefined;
    private _canvasAppSettings;
    get canvasAppSettings(): SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference;
    putCanvasAppSettings(value: SagemakerUserProfileUserSettingsCanvasAppSettings): void;
    resetCanvasAppSettings(): void;
    get canvasAppSettingsInput(): SagemakerUserProfileUserSettingsCanvasAppSettings | undefined;
    private _codeEditorAppSettings;
    get codeEditorAppSettings(): SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference;
    putCodeEditorAppSettings(value: SagemakerUserProfileUserSettingsCodeEditorAppSettings): void;
    resetCodeEditorAppSettings(): void;
    get codeEditorAppSettingsInput(): SagemakerUserProfileUserSettingsCodeEditorAppSettings | undefined;
    private _customFileSystemConfig;
    get customFileSystemConfig(): SagemakerUserProfileUserSettingsCustomFileSystemConfigList;
    putCustomFileSystemConfig(value: SagemakerUserProfileUserSettingsCustomFileSystemConfig[] | cdktf.IResolvable): void;
    resetCustomFileSystemConfig(): void;
    get customFileSystemConfigInput(): cdktf.IResolvable | SagemakerUserProfileUserSettingsCustomFileSystemConfig[] | undefined;
    private _customPosixUserConfig;
    get customPosixUserConfig(): SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference;
    putCustomPosixUserConfig(value: SagemakerUserProfileUserSettingsCustomPosixUserConfig): void;
    resetCustomPosixUserConfig(): void;
    get customPosixUserConfigInput(): SagemakerUserProfileUserSettingsCustomPosixUserConfig | undefined;
    private _jupyterLabAppSettings;
    get jupyterLabAppSettings(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference;
    putJupyterLabAppSettings(value: SagemakerUserProfileUserSettingsJupyterLabAppSettings): void;
    resetJupyterLabAppSettings(): void;
    get jupyterLabAppSettingsInput(): SagemakerUserProfileUserSettingsJupyterLabAppSettings | undefined;
    private _jupyterServerAppSettings;
    get jupyterServerAppSettings(): SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference;
    putJupyterServerAppSettings(value: SagemakerUserProfileUserSettingsJupyterServerAppSettings): void;
    resetJupyterServerAppSettings(): void;
    get jupyterServerAppSettingsInput(): SagemakerUserProfileUserSettingsJupyterServerAppSettings | undefined;
    private _kernelGatewayAppSettings;
    get kernelGatewayAppSettings(): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference;
    putKernelGatewayAppSettings(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettings): void;
    resetKernelGatewayAppSettings(): void;
    get kernelGatewayAppSettingsInput(): SagemakerUserProfileUserSettingsKernelGatewayAppSettings | undefined;
    private _rSessionAppSettings;
    get rSessionAppSettings(): SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference;
    putRSessionAppSettings(value: SagemakerUserProfileUserSettingsRSessionAppSettings): void;
    resetRSessionAppSettings(): void;
    get rSessionAppSettingsInput(): SagemakerUserProfileUserSettingsRSessionAppSettings | undefined;
    private _rStudioServerProAppSettings;
    get rStudioServerProAppSettings(): SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference;
    putRStudioServerProAppSettings(value: SagemakerUserProfileUserSettingsRStudioServerProAppSettings): void;
    resetRStudioServerProAppSettings(): void;
    get rStudioServerProAppSettingsInput(): SagemakerUserProfileUserSettingsRStudioServerProAppSettings | undefined;
    private _sharingSettings;
    get sharingSettings(): SagemakerUserProfileUserSettingsSharingSettingsOutputReference;
    putSharingSettings(value: SagemakerUserProfileUserSettingsSharingSettings): void;
    resetSharingSettings(): void;
    get sharingSettingsInput(): SagemakerUserProfileUserSettingsSharingSettings | undefined;
    private _spaceStorageSettings;
    get spaceStorageSettings(): SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference;
    putSpaceStorageSettings(value: SagemakerUserProfileUserSettingsSpaceStorageSettings): void;
    resetSpaceStorageSettings(): void;
    get spaceStorageSettingsInput(): SagemakerUserProfileUserSettingsSpaceStorageSettings | undefined;
    private _studioWebPortalSettings;
    get studioWebPortalSettings(): SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference;
    putStudioWebPortalSettings(value: SagemakerUserProfileUserSettingsStudioWebPortalSettings): void;
    resetStudioWebPortalSettings(): void;
    get studioWebPortalSettingsInput(): SagemakerUserProfileUserSettingsStudioWebPortalSettings | undefined;
    private _tensorBoardAppSettings;
    get tensorBoardAppSettings(): SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference;
    putTensorBoardAppSettings(value: SagemakerUserProfileUserSettingsTensorBoardAppSettings): void;
    resetTensorBoardAppSettings(): void;
    get tensorBoardAppSettingsInput(): SagemakerUserProfileUserSettingsTensorBoardAppSettings | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile aws_sagemaker_user_profile}
*/
export declare class SagemakerUserProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_user_profile";
    /**
    * Generates CDKTF code for importing a SagemakerUserProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerUserProfile to import
    * @param importFromId The id of the existing SagemakerUserProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerUserProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_user_profile aws_sagemaker_user_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerUserProfileConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerUserProfileConfig);
    get arn(): string;
    private _domainId?;
    get domainId(): string;
    set domainId(value: string);
    get domainIdInput(): string | undefined;
    get homeEfsFileSystemUid(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _singleSignOnUserIdentifier?;
    get singleSignOnUserIdentifier(): string;
    set singleSignOnUserIdentifier(value: string);
    resetSingleSignOnUserIdentifier(): void;
    get singleSignOnUserIdentifierInput(): string | undefined;
    private _singleSignOnUserValue?;
    get singleSignOnUserValue(): string;
    set singleSignOnUserValue(value: string);
    resetSingleSignOnUserValue(): void;
    get singleSignOnUserValueInput(): string | undefined;
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
    private _userProfileName?;
    get userProfileName(): string;
    set userProfileName(value: string);
    get userProfileNameInput(): string | undefined;
    private _userSettings;
    get userSettings(): SagemakerUserProfileUserSettingsOutputReference;
    putUserSettings(value: SagemakerUserProfileUserSettings): void;
    resetUserSettings(): void;
    get userSettingsInput(): SagemakerUserProfileUserSettings | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
