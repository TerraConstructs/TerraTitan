/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodepipelineWebhookConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_webhook#authentication CodepipelineWebhook#authentication}
    */
    readonly authentication: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_webhook#id CodepipelineWebhook#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_webhook#name CodepipelineWebhook#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_webhook#tags CodepipelineWebhook#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_webhook#tags_all CodepipelineWebhook#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_webhook#target_action CodepipelineWebhook#target_action}
    */
    readonly targetAction: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_webhook#target_pipeline CodepipelineWebhook#target_pipeline}
    */
    readonly targetPipeline: string;
    /**
    * authentication_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_webhook#authentication_configuration CodepipelineWebhook#authentication_configuration}
    */
    readonly authenticationConfiguration?: CodepipelineWebhookAuthenticationConfiguration;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_webhook#filter CodepipelineWebhook#filter}
    */
    readonly filter: CodepipelineWebhookFilter[] | cdktf.IResolvable;
}
export interface CodepipelineWebhookAuthenticationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_webhook#allowed_ip_range CodepipelineWebhook#allowed_ip_range}
    */
    readonly allowedIpRange?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_webhook#secret_token CodepipelineWebhook#secret_token}
    */
    readonly secretToken?: string;
}
export declare function codepipelineWebhookAuthenticationConfigurationToTerraform(struct?: CodepipelineWebhookAuthenticationConfigurationOutputReference | CodepipelineWebhookAuthenticationConfiguration): any;
export declare function codepipelineWebhookAuthenticationConfigurationToHclTerraform(struct?: CodepipelineWebhookAuthenticationConfigurationOutputReference | CodepipelineWebhookAuthenticationConfiguration): any;
export declare class CodepipelineWebhookAuthenticationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineWebhookAuthenticationConfiguration | undefined;
    set internalValue(value: CodepipelineWebhookAuthenticationConfiguration | undefined);
    private _allowedIpRange?;
    get allowedIpRange(): string;
    set allowedIpRange(value: string);
    resetAllowedIpRange(): void;
    get allowedIpRangeInput(): string | undefined;
    private _secretToken?;
    get secretToken(): string;
    set secretToken(value: string);
    resetSecretToken(): void;
    get secretTokenInput(): string | undefined;
}
export interface CodepipelineWebhookFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_webhook#json_path CodepipelineWebhook#json_path}
    */
    readonly jsonPath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_webhook#match_equals CodepipelineWebhook#match_equals}
    */
    readonly matchEquals: string;
}
export declare function codepipelineWebhookFilterToTerraform(struct?: CodepipelineWebhookFilter | cdktf.IResolvable): any;
export declare function codepipelineWebhookFilterToHclTerraform(struct?: CodepipelineWebhookFilter | cdktf.IResolvable): any;
export declare class CodepipelineWebhookFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineWebhookFilter | cdktf.IResolvable | undefined;
    set internalValue(value: CodepipelineWebhookFilter | cdktf.IResolvable | undefined);
    private _jsonPath?;
    get jsonPath(): string;
    set jsonPath(value: string);
    get jsonPathInput(): string | undefined;
    private _matchEquals?;
    get matchEquals(): string;
    set matchEquals(value: string);
    get matchEqualsInput(): string | undefined;
}
export declare class CodepipelineWebhookFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodepipelineWebhookFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodepipelineWebhookFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_webhook aws_codepipeline_webhook}
*/
export declare class CodepipelineWebhook extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codepipeline_webhook";
    /**
    * Generates CDKTF code for importing a CodepipelineWebhook resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodepipelineWebhook to import
    * @param importFromId The id of the existing CodepipelineWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_webhook#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodepipelineWebhook to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline_webhook aws_codepipeline_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodepipelineWebhookConfig
    */
    constructor(scope: Construct, id: string, config: CodepipelineWebhookConfig);
    get arn(): string;
    private _authentication?;
    get authentication(): string;
    set authentication(value: string);
    get authenticationInput(): string | undefined;
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
    private _targetAction?;
    get targetAction(): string;
    set targetAction(value: string);
    get targetActionInput(): string | undefined;
    private _targetPipeline?;
    get targetPipeline(): string;
    set targetPipeline(value: string);
    get targetPipelineInput(): string | undefined;
    get url(): string;
    private _authenticationConfiguration;
    get authenticationConfiguration(): CodepipelineWebhookAuthenticationConfigurationOutputReference;
    putAuthenticationConfiguration(value: CodepipelineWebhookAuthenticationConfiguration): void;
    resetAuthenticationConfiguration(): void;
    get authenticationConfigurationInput(): CodepipelineWebhookAuthenticationConfiguration | undefined;
    private _filter;
    get filter(): CodepipelineWebhookFilterList;
    putFilter(value: CodepipelineWebhookFilter[] | cdktf.IResolvable): void;
    get filterInput(): cdktf.IResolvable | CodepipelineWebhookFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
