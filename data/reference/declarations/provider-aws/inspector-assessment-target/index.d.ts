/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface InspectorAssessmentTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector_assessment_target#id InspectorAssessmentTarget#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector_assessment_target#name InspectorAssessmentTarget#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector_assessment_target#resource_group_arn InspectorAssessmentTarget#resource_group_arn}
    */
    readonly resourceGroupArn?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector_assessment_target aws_inspector_assessment_target}
*/
export declare class InspectorAssessmentTarget extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_inspector_assessment_target";
    /**
    * Generates CDKTF code for importing a InspectorAssessmentTarget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the InspectorAssessmentTarget to import
    * @param importFromId The id of the existing InspectorAssessmentTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector_assessment_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the InspectorAssessmentTarget to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector_assessment_target aws_inspector_assessment_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options InspectorAssessmentTargetConfig
    */
    constructor(scope: Construct, id: string, config: InspectorAssessmentTargetConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _resourceGroupArn?;
    get resourceGroupArn(): string;
    set resourceGroupArn(value: string);
    resetResourceGroupArn(): void;
    get resourceGroupArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
