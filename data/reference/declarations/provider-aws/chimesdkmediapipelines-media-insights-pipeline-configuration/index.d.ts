/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#resource_access_role_arn ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#resource_access_role_arn}
    */
    readonly resourceAccessRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#tags ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#tags_all ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * elements block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#elements ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#elements}
    */
    readonly elements: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElements[] | cdktf.IResolvable;
    /**
    * real_time_alert_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#real_time_alert_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#real_time_alert_configuration}
    */
    readonly realTimeAlertConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#timeouts ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#timeouts}
    */
    readonly timeouts?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeouts;
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#content_redaction_output ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#content_redaction_output}
    */
    readonly contentRedactionOutput?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#data_access_role_arn ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#data_access_role_arn}
    */
    readonly dataAccessRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#output_encryption_kms_key_id ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#output_encryption_kms_key_id}
    */
    readonly outputEncryptionKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#output_location ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#output_location}
    */
    readonly outputLocation: string;
}
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings): any;
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsToHclTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings): any;
export declare class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings | undefined;
    set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings | undefined);
    private _contentRedactionOutput?;
    get contentRedactionOutput(): string;
    set contentRedactionOutput(value: string);
    resetContentRedactionOutput(): void;
    get contentRedactionOutputInput(): string | undefined;
    private _dataAccessRoleArn?;
    get dataAccessRoleArn(): string;
    set dataAccessRoleArn(value: string);
    get dataAccessRoleArnInput(): string | undefined;
    private _outputEncryptionKmsKeyId?;
    get outputEncryptionKmsKeyId(): string;
    set outputEncryptionKmsKeyId(value: string);
    resetOutputEncryptionKmsKeyId(): void;
    get outputEncryptionKmsKeyIdInput(): string | undefined;
    private _outputLocation?;
    get outputLocation(): string;
    set outputLocation(value: string);
    get outputLocationInput(): string | undefined;
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#call_analytics_stream_categories ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#call_analytics_stream_categories}
    */
    readonly callAnalyticsStreamCategories?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#content_identification_type ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#content_identification_type}
    */
    readonly contentIdentificationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#content_redaction_type ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#content_redaction_type}
    */
    readonly contentRedactionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#enable_partial_results_stabilization ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#enable_partial_results_stabilization}
    */
    readonly enablePartialResultsStabilization?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#filter_partial_results ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#filter_partial_results}
    */
    readonly filterPartialResults?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#language_code ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#language_code}
    */
    readonly languageCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#language_model_name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#language_model_name}
    */
    readonly languageModelName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#partial_results_stability ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#partial_results_stability}
    */
    readonly partialResultsStability?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#pii_entity_types ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#pii_entity_types}
    */
    readonly piiEntityTypes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#vocabulary_filter_method ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#vocabulary_filter_method}
    */
    readonly vocabularyFilterMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#vocabulary_filter_name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#vocabulary_filter_name}
    */
    readonly vocabularyFilterName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#vocabulary_name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#vocabulary_name}
    */
    readonly vocabularyName?: string;
    /**
    * post_call_analytics_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#post_call_analytics_settings ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#post_call_analytics_settings}
    */
    readonly postCallAnalyticsSettings?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings;
}
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration): any;
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationToHclTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration): any;
export declare class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration | undefined;
    set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration | undefined);
    private _callAnalyticsStreamCategories?;
    get callAnalyticsStreamCategories(): string[];
    set callAnalyticsStreamCategories(value: string[]);
    resetCallAnalyticsStreamCategories(): void;
    get callAnalyticsStreamCategoriesInput(): string[] | undefined;
    private _contentIdentificationType?;
    get contentIdentificationType(): string;
    set contentIdentificationType(value: string);
    resetContentIdentificationType(): void;
    get contentIdentificationTypeInput(): string | undefined;
    private _contentRedactionType?;
    get contentRedactionType(): string;
    set contentRedactionType(value: string);
    resetContentRedactionType(): void;
    get contentRedactionTypeInput(): string | undefined;
    private _enablePartialResultsStabilization?;
    get enablePartialResultsStabilization(): boolean | cdktf.IResolvable;
    set enablePartialResultsStabilization(value: boolean | cdktf.IResolvable);
    resetEnablePartialResultsStabilization(): void;
    get enablePartialResultsStabilizationInput(): boolean | cdktf.IResolvable | undefined;
    private _filterPartialResults?;
    get filterPartialResults(): boolean | cdktf.IResolvable;
    set filterPartialResults(value: boolean | cdktf.IResolvable);
    resetFilterPartialResults(): void;
    get filterPartialResultsInput(): boolean | cdktf.IResolvable | undefined;
    private _languageCode?;
    get languageCode(): string;
    set languageCode(value: string);
    get languageCodeInput(): string | undefined;
    private _languageModelName?;
    get languageModelName(): string;
    set languageModelName(value: string);
    resetLanguageModelName(): void;
    get languageModelNameInput(): string | undefined;
    private _partialResultsStability?;
    get partialResultsStability(): string;
    set partialResultsStability(value: string);
    resetPartialResultsStability(): void;
    get partialResultsStabilityInput(): string | undefined;
    private _piiEntityTypes?;
    get piiEntityTypes(): string;
    set piiEntityTypes(value: string);
    resetPiiEntityTypes(): void;
    get piiEntityTypesInput(): string | undefined;
    private _vocabularyFilterMethod?;
    get vocabularyFilterMethod(): string;
    set vocabularyFilterMethod(value: string);
    resetVocabularyFilterMethod(): void;
    get vocabularyFilterMethodInput(): string | undefined;
    private _vocabularyFilterName?;
    get vocabularyFilterName(): string;
    set vocabularyFilterName(value: string);
    resetVocabularyFilterName(): void;
    get vocabularyFilterNameInput(): string | undefined;
    private _vocabularyName?;
    get vocabularyName(): string;
    set vocabularyName(value: string);
    resetVocabularyName(): void;
    get vocabularyNameInput(): string | undefined;
    private _postCallAnalyticsSettings;
    get postCallAnalyticsSettings(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference;
    putPostCallAnalyticsSettings(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings): void;
    resetPostCallAnalyticsSettings(): void;
    get postCallAnalyticsSettingsInput(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings | undefined;
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#content_identification_type ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#content_identification_type}
    */
    readonly contentIdentificationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#content_redaction_type ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#content_redaction_type}
    */
    readonly contentRedactionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#enable_partial_results_stabilization ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#enable_partial_results_stabilization}
    */
    readonly enablePartialResultsStabilization?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#filter_partial_results ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#filter_partial_results}
    */
    readonly filterPartialResults?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#language_code ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#language_code}
    */
    readonly languageCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#language_model_name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#language_model_name}
    */
    readonly languageModelName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#partial_results_stability ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#partial_results_stability}
    */
    readonly partialResultsStability?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#pii_entity_types ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#pii_entity_types}
    */
    readonly piiEntityTypes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#show_speaker_label ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#show_speaker_label}
    */
    readonly showSpeakerLabel?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#vocabulary_filter_method ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#vocabulary_filter_method}
    */
    readonly vocabularyFilterMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#vocabulary_filter_name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#vocabulary_filter_name}
    */
    readonly vocabularyFilterName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#vocabulary_name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#vocabulary_name}
    */
    readonly vocabularyName?: string;
}
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration): any;
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationToHclTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration): any;
export declare class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration | undefined;
    set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration | undefined);
    private _contentIdentificationType?;
    get contentIdentificationType(): string;
    set contentIdentificationType(value: string);
    resetContentIdentificationType(): void;
    get contentIdentificationTypeInput(): string | undefined;
    private _contentRedactionType?;
    get contentRedactionType(): string;
    set contentRedactionType(value: string);
    resetContentRedactionType(): void;
    get contentRedactionTypeInput(): string | undefined;
    private _enablePartialResultsStabilization?;
    get enablePartialResultsStabilization(): boolean | cdktf.IResolvable;
    set enablePartialResultsStabilization(value: boolean | cdktf.IResolvable);
    resetEnablePartialResultsStabilization(): void;
    get enablePartialResultsStabilizationInput(): boolean | cdktf.IResolvable | undefined;
    private _filterPartialResults?;
    get filterPartialResults(): boolean | cdktf.IResolvable;
    set filterPartialResults(value: boolean | cdktf.IResolvable);
    resetFilterPartialResults(): void;
    get filterPartialResultsInput(): boolean | cdktf.IResolvable | undefined;
    private _languageCode?;
    get languageCode(): string;
    set languageCode(value: string);
    get languageCodeInput(): string | undefined;
    private _languageModelName?;
    get languageModelName(): string;
    set languageModelName(value: string);
    resetLanguageModelName(): void;
    get languageModelNameInput(): string | undefined;
    private _partialResultsStability?;
    get partialResultsStability(): string;
    set partialResultsStability(value: string);
    resetPartialResultsStability(): void;
    get partialResultsStabilityInput(): string | undefined;
    private _piiEntityTypes?;
    get piiEntityTypes(): string;
    set piiEntityTypes(value: string);
    resetPiiEntityTypes(): void;
    get piiEntityTypesInput(): string | undefined;
    private _showSpeakerLabel?;
    get showSpeakerLabel(): boolean | cdktf.IResolvable;
    set showSpeakerLabel(value: boolean | cdktf.IResolvable);
    resetShowSpeakerLabel(): void;
    get showSpeakerLabelInput(): boolean | cdktf.IResolvable | undefined;
    private _vocabularyFilterMethod?;
    get vocabularyFilterMethod(): string;
    set vocabularyFilterMethod(value: string);
    resetVocabularyFilterMethod(): void;
    get vocabularyFilterMethodInput(): string | undefined;
    private _vocabularyFilterName?;
    get vocabularyFilterName(): string;
    set vocabularyFilterName(value: string);
    resetVocabularyFilterName(): void;
    get vocabularyFilterNameInput(): string | undefined;
    private _vocabularyName?;
    get vocabularyName(): string;
    set vocabularyName(value: string);
    resetVocabularyName(): void;
    get vocabularyNameInput(): string | undefined;
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#insights_target ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#insights_target}
    */
    readonly insightsTarget: string;
}
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration): any;
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationToHclTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration): any;
export declare class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration | undefined;
    set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration | undefined);
    private _insightsTarget?;
    get insightsTarget(): string;
    set insightsTarget(value: string);
    get insightsTargetInput(): string | undefined;
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#insights_target ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#insights_target}
    */
    readonly insightsTarget: string;
}
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfiguration): any;
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfigurationToHclTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfiguration): any;
export declare class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfiguration | undefined;
    set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfiguration | undefined);
    private _insightsTarget?;
    get insightsTarget(): string;
    set insightsTarget(value: string);
    get insightsTargetInput(): string | undefined;
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#destination ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#destination}
    */
    readonly destination?: string;
}
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration): any;
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationToHclTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration): any;
export declare class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration | undefined;
    set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration | undefined);
    private _destination?;
    get destination(): string;
    set destination(value: string);
    resetDestination(): void;
    get destinationInput(): string | undefined;
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#insights_target ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#insights_target}
    */
    readonly insightsTarget: string;
}
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfiguration): any;
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfigurationToHclTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfiguration): any;
export declare class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfiguration | undefined;
    set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfiguration | undefined);
    private _insightsTarget?;
    get insightsTarget(): string;
    set insightsTarget(value: string);
    get insightsTargetInput(): string | undefined;
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#insights_target ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#insights_target}
    */
    readonly insightsTarget: string;
}
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfiguration): any;
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfigurationToHclTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfiguration): any;
export declare class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfiguration | undefined;
    set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfiguration | undefined);
    private _insightsTarget?;
    get insightsTarget(): string;
    set insightsTarget(value: string);
    get insightsTargetInput(): string | undefined;
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#speaker_search_status ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#speaker_search_status}
    */
    readonly speakerSearchStatus: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#voice_tone_analysis_status ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#voice_tone_analysis_status}
    */
    readonly voiceToneAnalysisStatus: string;
}
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfiguration): any;
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfigurationToHclTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfiguration): any;
export declare class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfiguration | undefined;
    set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfiguration | undefined);
    private _speakerSearchStatus?;
    get speakerSearchStatus(): string;
    set speakerSearchStatus(value: string);
    get speakerSearchStatusInput(): string | undefined;
    private _voiceToneAnalysisStatus?;
    get voiceToneAnalysisStatus(): string;
    set voiceToneAnalysisStatus(value: string);
    get voiceToneAnalysisStatusInput(): string | undefined;
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElements {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#type ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#type}
    */
    readonly type: string;
    /**
    * amazon_transcribe_call_analytics_processor_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#amazon_transcribe_call_analytics_processor_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#amazon_transcribe_call_analytics_processor_configuration}
    */
    readonly amazonTranscribeCallAnalyticsProcessorConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration;
    /**
    * amazon_transcribe_processor_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#amazon_transcribe_processor_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#amazon_transcribe_processor_configuration}
    */
    readonly amazonTranscribeProcessorConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration;
    /**
    * kinesis_data_stream_sink_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#kinesis_data_stream_sink_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#kinesis_data_stream_sink_configuration}
    */
    readonly kinesisDataStreamSinkConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration;
    /**
    * lambda_function_sink_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#lambda_function_sink_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#lambda_function_sink_configuration}
    */
    readonly lambdaFunctionSinkConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfiguration;
    /**
    * s3_recording_sink_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#s3_recording_sink_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#s3_recording_sink_configuration}
    */
    readonly s3RecordingSinkConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration;
    /**
    * sns_topic_sink_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#sns_topic_sink_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#sns_topic_sink_configuration}
    */
    readonly snsTopicSinkConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfiguration;
    /**
    * sqs_queue_sink_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#sqs_queue_sink_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#sqs_queue_sink_configuration}
    */
    readonly sqsQueueSinkConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfiguration;
    /**
    * voice_analytics_processor_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#voice_analytics_processor_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#voice_analytics_processor_configuration}
    */
    readonly voiceAnalyticsProcessorConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfiguration;
}
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElements | cdktf.IResolvable): any;
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsToHclTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElements | cdktf.IResolvable): any;
export declare class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElements | cdktf.IResolvable | undefined;
    set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElements | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _amazonTranscribeCallAnalyticsProcessorConfiguration;
    get amazonTranscribeCallAnalyticsProcessorConfiguration(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference;
    putAmazonTranscribeCallAnalyticsProcessorConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration): void;
    resetAmazonTranscribeCallAnalyticsProcessorConfiguration(): void;
    get amazonTranscribeCallAnalyticsProcessorConfigurationInput(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration | undefined;
    private _amazonTranscribeProcessorConfiguration;
    get amazonTranscribeProcessorConfiguration(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference;
    putAmazonTranscribeProcessorConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration): void;
    resetAmazonTranscribeProcessorConfiguration(): void;
    get amazonTranscribeProcessorConfigurationInput(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration | undefined;
    private _kinesisDataStreamSinkConfiguration;
    get kinesisDataStreamSinkConfiguration(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference;
    putKinesisDataStreamSinkConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration): void;
    resetKinesisDataStreamSinkConfiguration(): void;
    get kinesisDataStreamSinkConfigurationInput(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration | undefined;
    private _lambdaFunctionSinkConfiguration;
    get lambdaFunctionSinkConfiguration(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfigurationOutputReference;
    putLambdaFunctionSinkConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfiguration): void;
    resetLambdaFunctionSinkConfiguration(): void;
    get lambdaFunctionSinkConfigurationInput(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfiguration | undefined;
    private _s3RecordingSinkConfiguration;
    get s3RecordingSinkConfiguration(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference;
    putS3RecordingSinkConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration): void;
    resetS3RecordingSinkConfiguration(): void;
    get s3RecordingSinkConfigurationInput(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration | undefined;
    private _snsTopicSinkConfiguration;
    get snsTopicSinkConfiguration(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfigurationOutputReference;
    putSnsTopicSinkConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfiguration): void;
    resetSnsTopicSinkConfiguration(): void;
    get snsTopicSinkConfigurationInput(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfiguration | undefined;
    private _sqsQueueSinkConfiguration;
    get sqsQueueSinkConfiguration(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfigurationOutputReference;
    putSqsQueueSinkConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfiguration): void;
    resetSqsQueueSinkConfiguration(): void;
    get sqsQueueSinkConfigurationInput(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfiguration | undefined;
    private _voiceAnalyticsProcessorConfiguration;
    get voiceAnalyticsProcessorConfiguration(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfigurationOutputReference;
    putVoiceAnalyticsProcessorConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfiguration): void;
    resetVoiceAnalyticsProcessorConfiguration(): void;
    get voiceAnalyticsProcessorConfigurationInput(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfiguration | undefined;
}
export declare class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElements[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsOutputReference;
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#rule_name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#rule_name}
    */
    readonly ruleName: string;
}
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration): any;
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationToHclTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration): any;
export declare class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration | undefined;
    set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration | undefined);
    private _ruleName?;
    get ruleName(): string;
    set ruleName(value: string);
    get ruleNameInput(): string | undefined;
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#keywords ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#keywords}
    */
    readonly keywords: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#negate ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#negate}
    */
    readonly negate?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#rule_name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#rule_name}
    */
    readonly ruleName: string;
}
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration): any;
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationToHclTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration): any;
export declare class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration | undefined;
    set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration | undefined);
    private _keywords?;
    get keywords(): string[];
    set keywords(value: string[]);
    get keywordsInput(): string[] | undefined;
    private _negate?;
    get negate(): boolean | cdktf.IResolvable;
    set negate(value: boolean | cdktf.IResolvable);
    resetNegate(): void;
    get negateInput(): boolean | cdktf.IResolvable | undefined;
    private _ruleName?;
    get ruleName(): string;
    set ruleName(value: string);
    get ruleNameInput(): string | undefined;
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#rule_name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#rule_name}
    */
    readonly ruleName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#sentiment_type ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#sentiment_type}
    */
    readonly sentimentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#time_period ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#time_period}
    */
    readonly timePeriod: number;
}
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration): any;
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationToHclTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration): any;
export declare class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration | undefined;
    set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration | undefined);
    private _ruleName?;
    get ruleName(): string;
    set ruleName(value: string);
    get ruleNameInput(): string | undefined;
    private _sentimentType?;
    get sentimentType(): string;
    set sentimentType(value: string);
    get sentimentTypeInput(): string | undefined;
    private _timePeriod?;
    get timePeriod(): number;
    set timePeriod(value: number);
    get timePeriodInput(): number | undefined;
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#type ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#type}
    */
    readonly type: string;
    /**
    * issue_detection_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#issue_detection_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#issue_detection_configuration}
    */
    readonly issueDetectionConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration;
    /**
    * keyword_match_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#keyword_match_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#keyword_match_configuration}
    */
    readonly keywordMatchConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration;
    /**
    * sentiment_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#sentiment_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#sentiment_configuration}
    */
    readonly sentimentConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration;
}
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules | cdktf.IResolvable): any;
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesToHclTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules | cdktf.IResolvable): any;
export declare class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules | cdktf.IResolvable | undefined;
    set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _issueDetectionConfiguration;
    get issueDetectionConfiguration(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference;
    putIssueDetectionConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration): void;
    resetIssueDetectionConfiguration(): void;
    get issueDetectionConfigurationInput(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration | undefined;
    private _keywordMatchConfiguration;
    get keywordMatchConfiguration(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference;
    putKeywordMatchConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration): void;
    resetKeywordMatchConfiguration(): void;
    get keywordMatchConfigurationInput(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration | undefined;
    private _sentimentConfiguration;
    get sentimentConfiguration(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference;
    putSentimentConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration): void;
    resetSentimentConfiguration(): void;
    get sentimentConfigurationInput(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration | undefined;
}
export declare class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference;
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#disabled ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
    /**
    * rules block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#rules ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#rules}
    */
    readonly rules: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules[] | cdktf.IResolvable;
}
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfiguration): any;
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationToHclTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfiguration): any;
export declare class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfiguration | undefined;
    set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfiguration | undefined);
    private _disabled?;
    get disabled(): boolean | cdktf.IResolvable;
    set disabled(value: boolean | cdktf.IResolvable);
    resetDisabled(): void;
    get disabledInput(): boolean | cdktf.IResolvable | undefined;
    private _rules;
    get rules(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList;
    putRules(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules[] | cdktf.IResolvable): void;
    get rulesInput(): cdktf.IResolvable | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules[] | undefined;
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#create ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#delete ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#update ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#update}
    */
    readonly update?: string;
}
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeoutsToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeouts | cdktf.IResolvable): any;
export declare function chimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeoutsToHclTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeouts | cdktf.IResolvable): any;
export declare class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration aws_chimesdkmediapipelines_media_insights_pipeline_configuration}
*/
export declare class ChimesdkmediapipelinesMediaInsightsPipelineConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_chimesdkmediapipelines_media_insights_pipeline_configuration";
    /**
    * Generates CDKTF code for importing a ChimesdkmediapipelinesMediaInsightsPipelineConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ChimesdkmediapipelinesMediaInsightsPipelineConfiguration to import
    * @param importFromId The id of the existing ChimesdkmediapipelinesMediaInsightsPipelineConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ChimesdkmediapipelinesMediaInsightsPipelineConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration aws_chimesdkmediapipelines_media_insights_pipeline_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimesdkmediapipelinesMediaInsightsPipelineConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _resourceAccessRoleArn?;
    get resourceAccessRoleArn(): string;
    set resourceAccessRoleArn(value: string);
    get resourceAccessRoleArnInput(): string | undefined;
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
    private _elements;
    get elements(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsList;
    putElements(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElements[] | cdktf.IResolvable): void;
    get elementsInput(): cdktf.IResolvable | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElements[] | undefined;
    private _realTimeAlertConfiguration;
    get realTimeAlertConfiguration(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference;
    putRealTimeAlertConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfiguration): void;
    resetRealTimeAlertConfiguration(): void;
    get realTimeAlertConfigurationInput(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfiguration | undefined;
    private _timeouts;
    get timeouts(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeoutsOutputReference;
    putTimeouts(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
