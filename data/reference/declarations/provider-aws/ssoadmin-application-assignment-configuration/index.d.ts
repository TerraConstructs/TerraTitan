/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsoadminApplicationAssignmentConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application_assignment_configuration#application_arn SsoadminApplicationAssignmentConfiguration#application_arn}
    */
    readonly applicationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application_assignment_configuration#assignment_required SsoadminApplicationAssignmentConfiguration#assignment_required}
    */
    readonly assignmentRequired: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application_assignment_configuration aws_ssoadmin_application_assignment_configuration}
*/
export declare class SsoadminApplicationAssignmentConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssoadmin_application_assignment_configuration";
    /**
    * Generates CDKTF code for importing a SsoadminApplicationAssignmentConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsoadminApplicationAssignmentConfiguration to import
    * @param importFromId The id of the existing SsoadminApplicationAssignmentConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application_assignment_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsoadminApplicationAssignmentConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application_assignment_configuration aws_ssoadmin_application_assignment_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminApplicationAssignmentConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: SsoadminApplicationAssignmentConfigurationConfig);
    private _applicationArn?;
    get applicationArn(): string;
    set applicationArn(value: string);
    get applicationArnInput(): string | undefined;
    private _assignmentRequired?;
    get assignmentRequired(): boolean | cdktf.IResolvable;
    set assignmentRequired(value: boolean | cdktf.IResolvable);
    get assignmentRequiredInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
