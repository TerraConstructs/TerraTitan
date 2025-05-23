/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AuditmanagerControlConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_control#action_plan_instructions AuditmanagerControl#action_plan_instructions}
    */
    readonly actionPlanInstructions?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_control#action_plan_title AuditmanagerControl#action_plan_title}
    */
    readonly actionPlanTitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_control#description AuditmanagerControl#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_control#name AuditmanagerControl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_control#tags AuditmanagerControl#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_control#testing_information AuditmanagerControl#testing_information}
    */
    readonly testingInformation?: string;
    /**
    * control_mapping_sources block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_control#control_mapping_sources AuditmanagerControl#control_mapping_sources}
    */
    readonly controlMappingSources?: AuditmanagerControlControlMappingSources[] | cdktf.IResolvable;
}
export interface AuditmanagerControlControlMappingSourcesSourceKeyword {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_control#keyword_input_type AuditmanagerControl#keyword_input_type}
    */
    readonly keywordInputType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_control#keyword_value AuditmanagerControl#keyword_value}
    */
    readonly keywordValue: string;
}
export declare function auditmanagerControlControlMappingSourcesSourceKeywordToTerraform(struct?: AuditmanagerControlControlMappingSourcesSourceKeyword | cdktf.IResolvable): any;
export declare function auditmanagerControlControlMappingSourcesSourceKeywordToHclTerraform(struct?: AuditmanagerControlControlMappingSourcesSourceKeyword | cdktf.IResolvable): any;
export declare class AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AuditmanagerControlControlMappingSourcesSourceKeyword | cdktf.IResolvable | undefined;
    set internalValue(value: AuditmanagerControlControlMappingSourcesSourceKeyword | cdktf.IResolvable | undefined);
    private _keywordInputType?;
    get keywordInputType(): string;
    set keywordInputType(value: string);
    get keywordInputTypeInput(): string | undefined;
    private _keywordValue?;
    get keywordValue(): string;
    set keywordValue(value: string);
    get keywordValueInput(): string | undefined;
}
export declare class AuditmanagerControlControlMappingSourcesSourceKeywordList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AuditmanagerControlControlMappingSourcesSourceKeyword[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference;
}
export interface AuditmanagerControlControlMappingSources {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_control#source_description AuditmanagerControl#source_description}
    */
    readonly sourceDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_control#source_frequency AuditmanagerControl#source_frequency}
    */
    readonly sourceFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_control#source_name AuditmanagerControl#source_name}
    */
    readonly sourceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_control#source_set_up_option AuditmanagerControl#source_set_up_option}
    */
    readonly sourceSetUpOption: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_control#source_type AuditmanagerControl#source_type}
    */
    readonly sourceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_control#troubleshooting_text AuditmanagerControl#troubleshooting_text}
    */
    readonly troubleshootingText?: string;
    /**
    * source_keyword block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_control#source_keyword AuditmanagerControl#source_keyword}
    */
    readonly sourceKeyword?: AuditmanagerControlControlMappingSourcesSourceKeyword[] | cdktf.IResolvable;
}
export declare function auditmanagerControlControlMappingSourcesToTerraform(struct?: AuditmanagerControlControlMappingSources | cdktf.IResolvable): any;
export declare function auditmanagerControlControlMappingSourcesToHclTerraform(struct?: AuditmanagerControlControlMappingSources | cdktf.IResolvable): any;
export declare class AuditmanagerControlControlMappingSourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AuditmanagerControlControlMappingSources | cdktf.IResolvable | undefined;
    set internalValue(value: AuditmanagerControlControlMappingSources | cdktf.IResolvable | undefined);
    private _sourceDescription?;
    get sourceDescription(): string;
    set sourceDescription(value: string);
    resetSourceDescription(): void;
    get sourceDescriptionInput(): string | undefined;
    private _sourceFrequency?;
    get sourceFrequency(): string;
    set sourceFrequency(value: string);
    resetSourceFrequency(): void;
    get sourceFrequencyInput(): string | undefined;
    get sourceId(): string;
    private _sourceName?;
    get sourceName(): string;
    set sourceName(value: string);
    get sourceNameInput(): string | undefined;
    private _sourceSetUpOption?;
    get sourceSetUpOption(): string;
    set sourceSetUpOption(value: string);
    get sourceSetUpOptionInput(): string | undefined;
    private _sourceType?;
    get sourceType(): string;
    set sourceType(value: string);
    get sourceTypeInput(): string | undefined;
    private _troubleshootingText?;
    get troubleshootingText(): string;
    set troubleshootingText(value: string);
    resetTroubleshootingText(): void;
    get troubleshootingTextInput(): string | undefined;
    private _sourceKeyword;
    get sourceKeyword(): AuditmanagerControlControlMappingSourcesSourceKeywordList;
    putSourceKeyword(value: AuditmanagerControlControlMappingSourcesSourceKeyword[] | cdktf.IResolvable): void;
    resetSourceKeyword(): void;
    get sourceKeywordInput(): cdktf.IResolvable | AuditmanagerControlControlMappingSourcesSourceKeyword[] | undefined;
}
export declare class AuditmanagerControlControlMappingSourcesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AuditmanagerControlControlMappingSources[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AuditmanagerControlControlMappingSourcesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_control aws_auditmanager_control}
*/
export declare class AuditmanagerControl extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_auditmanager_control";
    /**
    * Generates CDKTF code for importing a AuditmanagerControl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AuditmanagerControl to import
    * @param importFromId The id of the existing AuditmanagerControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_control#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AuditmanagerControl to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_control aws_auditmanager_control} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AuditmanagerControlConfig
    */
    constructor(scope: Construct, id: string, config: AuditmanagerControlConfig);
    private _actionPlanInstructions?;
    get actionPlanInstructions(): string;
    set actionPlanInstructions(value: string);
    resetActionPlanInstructions(): void;
    get actionPlanInstructionsInput(): string | undefined;
    private _actionPlanTitle?;
    get actionPlanTitle(): string;
    set actionPlanTitle(value: string);
    resetActionPlanTitle(): void;
    get actionPlanTitleInput(): string | undefined;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _testingInformation?;
    get testingInformation(): string;
    set testingInformation(value: string);
    resetTestingInformation(): void;
    get testingInformationInput(): string | undefined;
    get type(): string;
    private _controlMappingSources;
    get controlMappingSources(): AuditmanagerControlControlMappingSourcesList;
    putControlMappingSources(value: AuditmanagerControlControlMappingSources[] | cdktf.IResolvable): void;
    resetControlMappingSources(): void;
    get controlMappingSourcesInput(): cdktf.IResolvable | AuditmanagerControlControlMappingSources[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
