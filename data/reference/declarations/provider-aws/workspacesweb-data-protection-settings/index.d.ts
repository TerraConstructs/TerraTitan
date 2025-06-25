/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkspaceswebDataProtectionSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#additional_encryption_context WorkspaceswebDataProtectionSettings#additional_encryption_context}
    */
    readonly additionalEncryptionContext?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#customer_managed_key WorkspaceswebDataProtectionSettings#customer_managed_key}
    */
    readonly customerManagedKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#description WorkspaceswebDataProtectionSettings#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#display_name WorkspaceswebDataProtectionSettings#display_name}
    */
    readonly displayName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#tags WorkspaceswebDataProtectionSettings#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * inline_redaction_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#inline_redaction_configuration WorkspaceswebDataProtectionSettings#inline_redaction_configuration}
    */
    readonly inlineRedactionConfiguration?: WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration[] | cdktf.IResolvable;
}
export interface WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#keyword_regex WorkspaceswebDataProtectionSettings#keyword_regex}
    */
    readonly keywordRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#pattern_description WorkspaceswebDataProtectionSettings#pattern_description}
    */
    readonly patternDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#pattern_name WorkspaceswebDataProtectionSettings#pattern_name}
    */
    readonly patternName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#pattern_regex WorkspaceswebDataProtectionSettings#pattern_regex}
    */
    readonly patternRegex: string;
}
export declare function workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternToTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern | cdktf.IResolvable): any;
export declare function workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternToHclTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern | cdktf.IResolvable): any;
export declare class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern | cdktf.IResolvable | undefined;
    set internalValue(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern | cdktf.IResolvable | undefined);
    private _keywordRegex?;
    get keywordRegex(): string;
    set keywordRegex(value: string);
    resetKeywordRegex(): void;
    get keywordRegexInput(): string | undefined;
    private _patternDescription?;
    get patternDescription(): string;
    set patternDescription(value: string);
    resetPatternDescription(): void;
    get patternDescriptionInput(): string | undefined;
    private _patternName?;
    get patternName(): string;
    set patternName(value: string);
    get patternNameInput(): string | undefined;
    private _patternRegex?;
    get patternRegex(): string;
    set patternRegex(value: string);
    get patternRegexInput(): string | undefined;
}
export declare class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference;
}
export interface WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder_text WorkspaceswebDataProtectionSettings#redaction_place_holder_text}
    */
    readonly redactionPlaceHolderText?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder_type WorkspaceswebDataProtectionSettings#redaction_place_holder_type}
    */
    readonly redactionPlaceHolderType: string;
}
export declare function workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderToTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder | cdktf.IResolvable): any;
export declare function workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderToHclTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder | cdktf.IResolvable): any;
export declare class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder | cdktf.IResolvable | undefined;
    set internalValue(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder | cdktf.IResolvable | undefined);
    private _redactionPlaceHolderText?;
    get redactionPlaceHolderText(): string;
    set redactionPlaceHolderText(value: string);
    resetRedactionPlaceHolderText(): void;
    get redactionPlaceHolderTextInput(): string | undefined;
    private _redactionPlaceHolderType?;
    get redactionPlaceHolderType(): string;
    set redactionPlaceHolderType(value: string);
    get redactionPlaceHolderTypeInput(): string | undefined;
}
export declare class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference;
}
export interface WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#built_in_pattern_id WorkspaceswebDataProtectionSettings#built_in_pattern_id}
    */
    readonly builtInPatternId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#confidence_level WorkspaceswebDataProtectionSettings#confidence_level}
    */
    readonly confidenceLevel?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#enforced_urls WorkspaceswebDataProtectionSettings#enforced_urls}
    */
    readonly enforcedUrls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#exempt_urls WorkspaceswebDataProtectionSettings#exempt_urls}
    */
    readonly exemptUrls?: string[];
    /**
    * custom_pattern block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#custom_pattern WorkspaceswebDataProtectionSettings#custom_pattern}
    */
    readonly customPattern?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern[] | cdktf.IResolvable;
    /**
    * redaction_place_holder block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder WorkspaceswebDataProtectionSettings#redaction_place_holder}
    */
    readonly redactionPlaceHolder?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder[] | cdktf.IResolvable;
}
export declare function workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternToTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern | cdktf.IResolvable): any;
export declare function workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternToHclTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern | cdktf.IResolvable): any;
export declare class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern | cdktf.IResolvable | undefined;
    set internalValue(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern | cdktf.IResolvable | undefined);
    private _builtInPatternId?;
    get builtInPatternId(): string;
    set builtInPatternId(value: string);
    resetBuiltInPatternId(): void;
    get builtInPatternIdInput(): string | undefined;
    private _confidenceLevel?;
    get confidenceLevel(): number;
    set confidenceLevel(value: number);
    resetConfidenceLevel(): void;
    get confidenceLevelInput(): number | undefined;
    private _enforcedUrls?;
    get enforcedUrls(): string[];
    set enforcedUrls(value: string[]);
    resetEnforcedUrls(): void;
    get enforcedUrlsInput(): string[] | undefined;
    private _exemptUrls?;
    get exemptUrls(): string[];
    set exemptUrls(value: string[]);
    resetExemptUrls(): void;
    get exemptUrlsInput(): string[] | undefined;
    private _customPattern;
    get customPattern(): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList;
    putCustomPattern(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern[] | cdktf.IResolvable): void;
    resetCustomPattern(): void;
    get customPatternInput(): cdktf.IResolvable | WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern[] | undefined;
    private _redactionPlaceHolder;
    get redactionPlaceHolder(): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList;
    putRedactionPlaceHolder(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder[] | cdktf.IResolvable): void;
    resetRedactionPlaceHolder(): void;
    get redactionPlaceHolderInput(): cdktf.IResolvable | WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder[] | undefined;
}
export declare class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference;
}
export interface WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#global_confidence_level WorkspaceswebDataProtectionSettings#global_confidence_level}
    */
    readonly globalConfidenceLevel?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#global_enforced_urls WorkspaceswebDataProtectionSettings#global_enforced_urls}
    */
    readonly globalEnforcedUrls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#global_exempt_urls WorkspaceswebDataProtectionSettings#global_exempt_urls}
    */
    readonly globalExemptUrls?: string[];
    /**
    * inline_redaction_pattern block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#inline_redaction_pattern WorkspaceswebDataProtectionSettings#inline_redaction_pattern}
    */
    readonly inlineRedactionPattern?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern[] | cdktf.IResolvable;
}
export declare function workspaceswebDataProtectionSettingsInlineRedactionConfigurationToTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration | cdktf.IResolvable): any;
export declare function workspaceswebDataProtectionSettingsInlineRedactionConfigurationToHclTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration | cdktf.IResolvable): any;
export declare class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration | cdktf.IResolvable | undefined);
    private _globalConfidenceLevel?;
    get globalConfidenceLevel(): number;
    set globalConfidenceLevel(value: number);
    resetGlobalConfidenceLevel(): void;
    get globalConfidenceLevelInput(): number | undefined;
    private _globalEnforcedUrls?;
    get globalEnforcedUrls(): string[];
    set globalEnforcedUrls(value: string[]);
    resetGlobalEnforcedUrls(): void;
    get globalEnforcedUrlsInput(): string[] | undefined;
    private _globalExemptUrls?;
    get globalExemptUrls(): string[];
    set globalExemptUrls(value: string[]);
    resetGlobalExemptUrls(): void;
    get globalExemptUrlsInput(): string[] | undefined;
    private _inlineRedactionPattern;
    get inlineRedactionPattern(): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList;
    putInlineRedactionPattern(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern[] | cdktf.IResolvable): void;
    resetInlineRedactionPattern(): void;
    get inlineRedactionPatternInput(): cdktf.IResolvable | WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern[] | undefined;
}
export declare class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings aws_workspacesweb_data_protection_settings}
*/
export declare class WorkspaceswebDataProtectionSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_workspacesweb_data_protection_settings";
    /**
    * Generates CDKTF code for importing a WorkspaceswebDataProtectionSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkspaceswebDataProtectionSettings to import
    * @param importFromId The id of the existing WorkspaceswebDataProtectionSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkspaceswebDataProtectionSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_data_protection_settings aws_workspacesweb_data_protection_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkspaceswebDataProtectionSettingsConfig
    */
    constructor(scope: Construct, id: string, config: WorkspaceswebDataProtectionSettingsConfig);
    private _additionalEncryptionContext?;
    get additionalEncryptionContext(): {
        [key: string]: string;
    };
    set additionalEncryptionContext(value: {
        [key: string]: string;
    });
    resetAdditionalEncryptionContext(): void;
    get additionalEncryptionContextInput(): {
        [key: string]: string;
    } | undefined;
    get associatedPortalArns(): string[];
    private _customerManagedKey?;
    get customerManagedKey(): string;
    set customerManagedKey(value: string);
    resetCustomerManagedKey(): void;
    get customerManagedKeyInput(): string | undefined;
    get dataProtectionSettingsArn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    get displayNameInput(): string | undefined;
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
    private _inlineRedactionConfiguration;
    get inlineRedactionConfiguration(): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList;
    putInlineRedactionConfiguration(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration[] | cdktf.IResolvable): void;
    resetInlineRedactionConfiguration(): void;
    get inlineRedactionConfigurationInput(): cdktf.IResolvable | WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
