/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodebuildWebhookConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#branch_filter CodebuildWebhook#branch_filter}
    */
    readonly branchFilter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#build_type CodebuildWebhook#build_type}
    */
    readonly buildType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#id CodebuildWebhook#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#manual_creation CodebuildWebhook#manual_creation}
    */
    readonly manualCreation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#project_name CodebuildWebhook#project_name}
    */
    readonly projectName: string;
    /**
    * filter_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#filter_group CodebuildWebhook#filter_group}
    */
    readonly filterGroup?: CodebuildWebhookFilterGroup[] | cdktf.IResolvable;
    /**
    * scope_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#scope_configuration CodebuildWebhook#scope_configuration}
    */
    readonly scopeConfiguration?: CodebuildWebhookScopeConfiguration;
}
export interface CodebuildWebhookFilterGroupFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#exclude_matched_pattern CodebuildWebhook#exclude_matched_pattern}
    */
    readonly excludeMatchedPattern?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#pattern CodebuildWebhook#pattern}
    */
    readonly pattern: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#type CodebuildWebhook#type}
    */
    readonly type: string;
}
export declare function codebuildWebhookFilterGroupFilterToTerraform(struct?: CodebuildWebhookFilterGroupFilter | cdktf.IResolvable): any;
export declare function codebuildWebhookFilterGroupFilterToHclTerraform(struct?: CodebuildWebhookFilterGroupFilter | cdktf.IResolvable): any;
export declare class CodebuildWebhookFilterGroupFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodebuildWebhookFilterGroupFilter | cdktf.IResolvable | undefined;
    set internalValue(value: CodebuildWebhookFilterGroupFilter | cdktf.IResolvable | undefined);
    private _excludeMatchedPattern?;
    get excludeMatchedPattern(): boolean | cdktf.IResolvable;
    set excludeMatchedPattern(value: boolean | cdktf.IResolvable);
    resetExcludeMatchedPattern(): void;
    get excludeMatchedPatternInput(): boolean | cdktf.IResolvable | undefined;
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    get patternInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class CodebuildWebhookFilterGroupFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodebuildWebhookFilterGroupFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodebuildWebhookFilterGroupFilterOutputReference;
}
export interface CodebuildWebhookFilterGroup {
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#filter CodebuildWebhook#filter}
    */
    readonly filter?: CodebuildWebhookFilterGroupFilter[] | cdktf.IResolvable;
}
export declare function codebuildWebhookFilterGroupToTerraform(struct?: CodebuildWebhookFilterGroup | cdktf.IResolvable): any;
export declare function codebuildWebhookFilterGroupToHclTerraform(struct?: CodebuildWebhookFilterGroup | cdktf.IResolvable): any;
export declare class CodebuildWebhookFilterGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodebuildWebhookFilterGroup | cdktf.IResolvable | undefined;
    set internalValue(value: CodebuildWebhookFilterGroup | cdktf.IResolvable | undefined);
    private _filter;
    get filter(): CodebuildWebhookFilterGroupFilterList;
    putFilter(value: CodebuildWebhookFilterGroupFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | CodebuildWebhookFilterGroupFilter[] | undefined;
}
export declare class CodebuildWebhookFilterGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodebuildWebhookFilterGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodebuildWebhookFilterGroupOutputReference;
}
export interface CodebuildWebhookScopeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#domain CodebuildWebhook#domain}
    */
    readonly domain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#name CodebuildWebhook#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#scope CodebuildWebhook#scope}
    */
    readonly scope: string;
}
export declare function codebuildWebhookScopeConfigurationToTerraform(struct?: CodebuildWebhookScopeConfigurationOutputReference | CodebuildWebhookScopeConfiguration): any;
export declare function codebuildWebhookScopeConfigurationToHclTerraform(struct?: CodebuildWebhookScopeConfigurationOutputReference | CodebuildWebhookScopeConfiguration): any;
export declare class CodebuildWebhookScopeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildWebhookScopeConfiguration | undefined;
    set internalValue(value: CodebuildWebhookScopeConfiguration | undefined);
    private _domain?;
    get domain(): string;
    set domain(value: string);
    resetDomain(): void;
    get domainInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook aws_codebuild_webhook}
*/
export declare class CodebuildWebhook extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codebuild_webhook";
    /**
    * Generates CDKTF code for importing a CodebuildWebhook resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodebuildWebhook to import
    * @param importFromId The id of the existing CodebuildWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodebuildWebhook to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_webhook aws_codebuild_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildWebhookConfig
    */
    constructor(scope: Construct, id: string, config: CodebuildWebhookConfig);
    private _branchFilter?;
    get branchFilter(): string;
    set branchFilter(value: string);
    resetBranchFilter(): void;
    get branchFilterInput(): string | undefined;
    private _buildType?;
    get buildType(): string;
    set buildType(value: string);
    resetBuildType(): void;
    get buildTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _manualCreation?;
    get manualCreation(): boolean | cdktf.IResolvable;
    set manualCreation(value: boolean | cdktf.IResolvable);
    resetManualCreation(): void;
    get manualCreationInput(): boolean | cdktf.IResolvable | undefined;
    get payloadUrl(): string;
    private _projectName?;
    get projectName(): string;
    set projectName(value: string);
    get projectNameInput(): string | undefined;
    get secret(): string;
    get url(): string;
    private _filterGroup;
    get filterGroup(): CodebuildWebhookFilterGroupList;
    putFilterGroup(value: CodebuildWebhookFilterGroup[] | cdktf.IResolvable): void;
    resetFilterGroup(): void;
    get filterGroupInput(): cdktf.IResolvable | CodebuildWebhookFilterGroup[] | undefined;
    private _scopeConfiguration;
    get scopeConfiguration(): CodebuildWebhookScopeConfigurationOutputReference;
    putScopeConfiguration(value: CodebuildWebhookScopeConfiguration): void;
    resetScopeConfiguration(): void;
    get scopeConfigurationInput(): CodebuildWebhookScopeConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
