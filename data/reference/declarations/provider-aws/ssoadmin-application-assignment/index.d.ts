/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsoadminApplicationAssignmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application_assignment#application_arn SsoadminApplicationAssignment#application_arn}
    */
    readonly applicationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application_assignment#principal_id SsoadminApplicationAssignment#principal_id}
    */
    readonly principalId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application_assignment#principal_type SsoadminApplicationAssignment#principal_type}
    */
    readonly principalType: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application_assignment aws_ssoadmin_application_assignment}
*/
export declare class SsoadminApplicationAssignment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssoadmin_application_assignment";
    /**
    * Generates CDKTF code for importing a SsoadminApplicationAssignment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsoadminApplicationAssignment to import
    * @param importFromId The id of the existing SsoadminApplicationAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application_assignment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsoadminApplicationAssignment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_application_assignment aws_ssoadmin_application_assignment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminApplicationAssignmentConfig
    */
    constructor(scope: Construct, id: string, config: SsoadminApplicationAssignmentConfig);
    private _applicationArn?;
    get applicationArn(): string;
    set applicationArn(value: string);
    get applicationArnInput(): string | undefined;
    get id(): string;
    private _principalId?;
    get principalId(): string;
    set principalId(value: string);
    get principalIdInput(): string | undefined;
    private _principalType?;
    get principalType(): string;
    set principalType(value: string);
    get principalTypeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
