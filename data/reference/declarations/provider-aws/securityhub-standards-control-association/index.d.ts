/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityhubStandardsControlAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/securityhub_standards_control_association#association_status SecurityhubStandardsControlAssociation#association_status}
    */
    readonly associationStatus: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/securityhub_standards_control_association#security_control_id SecurityhubStandardsControlAssociation#security_control_id}
    */
    readonly securityControlId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/securityhub_standards_control_association#standards_arn SecurityhubStandardsControlAssociation#standards_arn}
    */
    readonly standardsArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/securityhub_standards_control_association#updated_reason SecurityhubStandardsControlAssociation#updated_reason}
    */
    readonly updatedReason?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/securityhub_standards_control_association aws_securityhub_standards_control_association}
*/
export declare class SecurityhubStandardsControlAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_securityhub_standards_control_association";
    /**
    * Generates CDKTF code for importing a SecurityhubStandardsControlAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecurityhubStandardsControlAssociation to import
    * @param importFromId The id of the existing SecurityhubStandardsControlAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/securityhub_standards_control_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecurityhubStandardsControlAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/securityhub_standards_control_association aws_securityhub_standards_control_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubStandardsControlAssociationConfig
    */
    constructor(scope: Construct, id: string, config: SecurityhubStandardsControlAssociationConfig);
    private _associationStatus?;
    get associationStatus(): string;
    set associationStatus(value: string);
    get associationStatusInput(): string | undefined;
    get id(): string;
    private _securityControlId?;
    get securityControlId(): string;
    set securityControlId(value: string);
    get securityControlIdInput(): string | undefined;
    private _standardsArn?;
    get standardsArn(): string;
    set standardsArn(value: string);
    get standardsArnInput(): string | undefined;
    private _updatedReason?;
    get updatedReason(): string;
    set updatedReason(value: string);
    resetUpdatedReason(): void;
    get updatedReasonInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
