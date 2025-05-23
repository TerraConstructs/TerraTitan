/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AuditmanagerAssessmentDelegationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment_delegation#assessment_id AuditmanagerAssessmentDelegation#assessment_id}
    */
    readonly assessmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment_delegation#comment AuditmanagerAssessmentDelegation#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment_delegation#control_set_id AuditmanagerAssessmentDelegation#control_set_id}
    */
    readonly controlSetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment_delegation#role_arn AuditmanagerAssessmentDelegation#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment_delegation#role_type AuditmanagerAssessmentDelegation#role_type}
    */
    readonly roleType: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment_delegation aws_auditmanager_assessment_delegation}
*/
export declare class AuditmanagerAssessmentDelegation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_auditmanager_assessment_delegation";
    /**
    * Generates CDKTF code for importing a AuditmanagerAssessmentDelegation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AuditmanagerAssessmentDelegation to import
    * @param importFromId The id of the existing AuditmanagerAssessmentDelegation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment_delegation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AuditmanagerAssessmentDelegation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_assessment_delegation aws_auditmanager_assessment_delegation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AuditmanagerAssessmentDelegationConfig
    */
    constructor(scope: Construct, id: string, config: AuditmanagerAssessmentDelegationConfig);
    private _assessmentId?;
    get assessmentId(): string;
    set assessmentId(value: string);
    get assessmentIdInput(): string | undefined;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    private _controlSetId?;
    get controlSetId(): string;
    set controlSetId(value: string);
    get controlSetIdInput(): string | undefined;
    get delegationId(): string;
    get id(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _roleType?;
    get roleType(): string;
    set roleType(value: string);
    get roleTypeInput(): string | undefined;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
