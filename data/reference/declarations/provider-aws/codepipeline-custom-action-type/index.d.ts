/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodepipelineCustomActionTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#category CodepipelineCustomActionType#category}
    */
    readonly category: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#id CodepipelineCustomActionType#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#provider_name CodepipelineCustomActionType#provider_name}
    */
    readonly providerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#tags CodepipelineCustomActionType#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#tags_all CodepipelineCustomActionType#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#version CodepipelineCustomActionType#version}
    */
    readonly version: string;
    /**
    * configuration_property block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#configuration_property CodepipelineCustomActionType#configuration_property}
    */
    readonly configurationProperty?: CodepipelineCustomActionTypeConfigurationProperty[] | cdktf.IResolvable;
    /**
    * input_artifact_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#input_artifact_details CodepipelineCustomActionType#input_artifact_details}
    */
    readonly inputArtifactDetails: CodepipelineCustomActionTypeInputArtifactDetails;
    /**
    * output_artifact_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#output_artifact_details CodepipelineCustomActionType#output_artifact_details}
    */
    readonly outputArtifactDetails: CodepipelineCustomActionTypeOutputArtifactDetails;
    /**
    * settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#settings CodepipelineCustomActionType#settings}
    */
    readonly settings?: CodepipelineCustomActionTypeSettings;
}
export interface CodepipelineCustomActionTypeConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#description CodepipelineCustomActionType#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#key CodepipelineCustomActionType#key}
    */
    readonly key: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#name CodepipelineCustomActionType#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#queryable CodepipelineCustomActionType#queryable}
    */
    readonly queryable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#required CodepipelineCustomActionType#required}
    */
    readonly required: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#secret CodepipelineCustomActionType#secret}
    */
    readonly secret: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#type CodepipelineCustomActionType#type}
    */
    readonly type?: string;
}
export declare function codepipelineCustomActionTypeConfigurationPropertyToTerraform(struct?: CodepipelineCustomActionTypeConfigurationProperty | cdktf.IResolvable): any;
export declare function codepipelineCustomActionTypeConfigurationPropertyToHclTerraform(struct?: CodepipelineCustomActionTypeConfigurationProperty | cdktf.IResolvable): any;
export declare class CodepipelineCustomActionTypeConfigurationPropertyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineCustomActionTypeConfigurationProperty | cdktf.IResolvable | undefined;
    set internalValue(value: CodepipelineCustomActionTypeConfigurationProperty | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _key?;
    get key(): boolean | cdktf.IResolvable;
    set key(value: boolean | cdktf.IResolvable);
    get keyInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _queryable?;
    get queryable(): boolean | cdktf.IResolvable;
    set queryable(value: boolean | cdktf.IResolvable);
    resetQueryable(): void;
    get queryableInput(): boolean | cdktf.IResolvable | undefined;
    private _required?;
    get required(): boolean | cdktf.IResolvable;
    set required(value: boolean | cdktf.IResolvable);
    get requiredInput(): boolean | cdktf.IResolvable | undefined;
    private _secret?;
    get secret(): boolean | cdktf.IResolvable;
    set secret(value: boolean | cdktf.IResolvable);
    get secretInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class CodepipelineCustomActionTypeConfigurationPropertyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodepipelineCustomActionTypeConfigurationProperty[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodepipelineCustomActionTypeConfigurationPropertyOutputReference;
}
export interface CodepipelineCustomActionTypeInputArtifactDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}
    */
    readonly maximumCount: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}
    */
    readonly minimumCount: number;
}
export declare function codepipelineCustomActionTypeInputArtifactDetailsToTerraform(struct?: CodepipelineCustomActionTypeInputArtifactDetailsOutputReference | CodepipelineCustomActionTypeInputArtifactDetails): any;
export declare function codepipelineCustomActionTypeInputArtifactDetailsToHclTerraform(struct?: CodepipelineCustomActionTypeInputArtifactDetailsOutputReference | CodepipelineCustomActionTypeInputArtifactDetails): any;
export declare class CodepipelineCustomActionTypeInputArtifactDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineCustomActionTypeInputArtifactDetails | undefined;
    set internalValue(value: CodepipelineCustomActionTypeInputArtifactDetails | undefined);
    private _maximumCount?;
    get maximumCount(): number;
    set maximumCount(value: number);
    get maximumCountInput(): number | undefined;
    private _minimumCount?;
    get minimumCount(): number;
    set minimumCount(value: number);
    get minimumCountInput(): number | undefined;
}
export interface CodepipelineCustomActionTypeOutputArtifactDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}
    */
    readonly maximumCount: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}
    */
    readonly minimumCount: number;
}
export declare function codepipelineCustomActionTypeOutputArtifactDetailsToTerraform(struct?: CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference | CodepipelineCustomActionTypeOutputArtifactDetails): any;
export declare function codepipelineCustomActionTypeOutputArtifactDetailsToHclTerraform(struct?: CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference | CodepipelineCustomActionTypeOutputArtifactDetails): any;
export declare class CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineCustomActionTypeOutputArtifactDetails | undefined;
    set internalValue(value: CodepipelineCustomActionTypeOutputArtifactDetails | undefined);
    private _maximumCount?;
    get maximumCount(): number;
    set maximumCount(value: number);
    get maximumCountInput(): number | undefined;
    private _minimumCount?;
    get minimumCount(): number;
    set minimumCount(value: number);
    get minimumCountInput(): number | undefined;
}
export interface CodepipelineCustomActionTypeSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#entity_url_template CodepipelineCustomActionType#entity_url_template}
    */
    readonly entityUrlTemplate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#execution_url_template CodepipelineCustomActionType#execution_url_template}
    */
    readonly executionUrlTemplate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#revision_url_template CodepipelineCustomActionType#revision_url_template}
    */
    readonly revisionUrlTemplate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#third_party_configuration_url CodepipelineCustomActionType#third_party_configuration_url}
    */
    readonly thirdPartyConfigurationUrl?: string;
}
export declare function codepipelineCustomActionTypeSettingsToTerraform(struct?: CodepipelineCustomActionTypeSettingsOutputReference | CodepipelineCustomActionTypeSettings): any;
export declare function codepipelineCustomActionTypeSettingsToHclTerraform(struct?: CodepipelineCustomActionTypeSettingsOutputReference | CodepipelineCustomActionTypeSettings): any;
export declare class CodepipelineCustomActionTypeSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineCustomActionTypeSettings | undefined;
    set internalValue(value: CodepipelineCustomActionTypeSettings | undefined);
    private _entityUrlTemplate?;
    get entityUrlTemplate(): string;
    set entityUrlTemplate(value: string);
    resetEntityUrlTemplate(): void;
    get entityUrlTemplateInput(): string | undefined;
    private _executionUrlTemplate?;
    get executionUrlTemplate(): string;
    set executionUrlTemplate(value: string);
    resetExecutionUrlTemplate(): void;
    get executionUrlTemplateInput(): string | undefined;
    private _revisionUrlTemplate?;
    get revisionUrlTemplate(): string;
    set revisionUrlTemplate(value: string);
    resetRevisionUrlTemplate(): void;
    get revisionUrlTemplateInput(): string | undefined;
    private _thirdPartyConfigurationUrl?;
    get thirdPartyConfigurationUrl(): string;
    set thirdPartyConfigurationUrl(value: string);
    resetThirdPartyConfigurationUrl(): void;
    get thirdPartyConfigurationUrlInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type aws_codepipeline_custom_action_type}
*/
export declare class CodepipelineCustomActionType extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codepipeline_custom_action_type";
    /**
    * Generates CDKTF code for importing a CodepipelineCustomActionType resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodepipelineCustomActionType to import
    * @param importFromId The id of the existing CodepipelineCustomActionType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodepipelineCustomActionType to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_custom_action_type aws_codepipeline_custom_action_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodepipelineCustomActionTypeConfig
    */
    constructor(scope: Construct, id: string, config: CodepipelineCustomActionTypeConfig);
    get arn(): string;
    private _category?;
    get category(): string;
    set category(value: string);
    get categoryInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get owner(): string;
    private _providerName?;
    get providerName(): string;
    set providerName(value: string);
    get providerNameInput(): string | undefined;
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
    private _version?;
    get version(): string;
    set version(value: string);
    get versionInput(): string | undefined;
    private _configurationProperty;
    get configurationProperty(): CodepipelineCustomActionTypeConfigurationPropertyList;
    putConfigurationProperty(value: CodepipelineCustomActionTypeConfigurationProperty[] | cdktf.IResolvable): void;
    resetConfigurationProperty(): void;
    get configurationPropertyInput(): cdktf.IResolvable | CodepipelineCustomActionTypeConfigurationProperty[] | undefined;
    private _inputArtifactDetails;
    get inputArtifactDetails(): CodepipelineCustomActionTypeInputArtifactDetailsOutputReference;
    putInputArtifactDetails(value: CodepipelineCustomActionTypeInputArtifactDetails): void;
    get inputArtifactDetailsInput(): CodepipelineCustomActionTypeInputArtifactDetails | undefined;
    private _outputArtifactDetails;
    get outputArtifactDetails(): CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference;
    putOutputArtifactDetails(value: CodepipelineCustomActionTypeOutputArtifactDetails): void;
    get outputArtifactDetailsInput(): CodepipelineCustomActionTypeOutputArtifactDetails | undefined;
    private _settings;
    get settings(): CodepipelineCustomActionTypeSettingsOutputReference;
    putSettings(value: CodepipelineCustomActionTypeSettings): void;
    resetSettings(): void;
    get settingsInput(): CodepipelineCustomActionTypeSettings | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
