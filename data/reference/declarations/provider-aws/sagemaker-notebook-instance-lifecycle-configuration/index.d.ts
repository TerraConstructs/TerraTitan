/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerNotebookInstanceLifecycleConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#id SagemakerNotebookInstanceLifecycleConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#name SagemakerNotebookInstanceLifecycleConfiguration#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#on_create SagemakerNotebookInstanceLifecycleConfiguration#on_create}
    */
    readonly onCreate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#on_start SagemakerNotebookInstanceLifecycleConfiguration#on_start}
    */
    readonly onStart?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration aws_sagemaker_notebook_instance_lifecycle_configuration}
*/
export declare class SagemakerNotebookInstanceLifecycleConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_notebook_instance_lifecycle_configuration";
    /**
    * Generates CDKTF code for importing a SagemakerNotebookInstanceLifecycleConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerNotebookInstanceLifecycleConfiguration to import
    * @param importFromId The id of the existing SagemakerNotebookInstanceLifecycleConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerNotebookInstanceLifecycleConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration aws_sagemaker_notebook_instance_lifecycle_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerNotebookInstanceLifecycleConfigurationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: SagemakerNotebookInstanceLifecycleConfigurationConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _onCreate?;
    get onCreate(): string;
    set onCreate(value: string);
    resetOnCreate(): void;
    get onCreateInput(): string | undefined;
    private _onStart?;
    get onStart(): string;
    set onStart(value: string);
    resetOnStart(): void;
    get onStartInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
