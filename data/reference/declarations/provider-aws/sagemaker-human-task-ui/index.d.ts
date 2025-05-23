/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerHumanTaskUiConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_human_task_ui#human_task_ui_name SagemakerHumanTaskUi#human_task_ui_name}
    */
    readonly humanTaskUiName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_human_task_ui#id SagemakerHumanTaskUi#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_human_task_ui#tags SagemakerHumanTaskUi#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_human_task_ui#tags_all SagemakerHumanTaskUi#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * ui_template block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_human_task_ui#ui_template SagemakerHumanTaskUi#ui_template}
    */
    readonly uiTemplate: SagemakerHumanTaskUiUiTemplate;
}
export interface SagemakerHumanTaskUiUiTemplate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_human_task_ui#content SagemakerHumanTaskUi#content}
    */
    readonly content?: string;
}
export declare function sagemakerHumanTaskUiUiTemplateToTerraform(struct?: SagemakerHumanTaskUiUiTemplateOutputReference | SagemakerHumanTaskUiUiTemplate): any;
export declare function sagemakerHumanTaskUiUiTemplateToHclTerraform(struct?: SagemakerHumanTaskUiUiTemplateOutputReference | SagemakerHumanTaskUiUiTemplate): any;
export declare class SagemakerHumanTaskUiUiTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerHumanTaskUiUiTemplate | undefined;
    set internalValue(value: SagemakerHumanTaskUiUiTemplate | undefined);
    private _content?;
    get content(): string;
    set content(value: string);
    resetContent(): void;
    get contentInput(): string | undefined;
    get contentSha256(): string;
    get url(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_human_task_ui aws_sagemaker_human_task_ui}
*/
export declare class SagemakerHumanTaskUi extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_human_task_ui";
    /**
    * Generates CDKTF code for importing a SagemakerHumanTaskUi resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerHumanTaskUi to import
    * @param importFromId The id of the existing SagemakerHumanTaskUi that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_human_task_ui#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerHumanTaskUi to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_human_task_ui aws_sagemaker_human_task_ui} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerHumanTaskUiConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerHumanTaskUiConfig);
    get arn(): string;
    private _humanTaskUiName?;
    get humanTaskUiName(): string;
    set humanTaskUiName(value: string);
    get humanTaskUiNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _uiTemplate;
    get uiTemplate(): SagemakerHumanTaskUiUiTemplateOutputReference;
    putUiTemplate(value: SagemakerHumanTaskUiUiTemplate): void;
    get uiTemplateInput(): SagemakerHumanTaskUiUiTemplate | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
