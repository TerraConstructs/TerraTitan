/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VerifiedpermissionsPolicyTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedpermissions_policy_template#description VerifiedpermissionsPolicyTemplate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedpermissions_policy_template#policy_store_id VerifiedpermissionsPolicyTemplate#policy_store_id}
    */
    readonly policyStoreId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedpermissions_policy_template#statement VerifiedpermissionsPolicyTemplate#statement}
    */
    readonly statement: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedpermissions_policy_template aws_verifiedpermissions_policy_template}
*/
export declare class VerifiedpermissionsPolicyTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_verifiedpermissions_policy_template";
    /**
    * Generates CDKTF code for importing a VerifiedpermissionsPolicyTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VerifiedpermissionsPolicyTemplate to import
    * @param importFromId The id of the existing VerifiedpermissionsPolicyTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedpermissions_policy_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VerifiedpermissionsPolicyTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedpermissions_policy_template aws_verifiedpermissions_policy_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VerifiedpermissionsPolicyTemplateConfig
    */
    constructor(scope: Construct, id: string, config: VerifiedpermissionsPolicyTemplateConfig);
    get createdDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _policyStoreId?;
    get policyStoreId(): string;
    set policyStoreId(value: string);
    get policyStoreIdInput(): string | undefined;
    get policyTemplateId(): string;
    private _statement?;
    get statement(): string;
    set statement(value: string);
    get statementInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
