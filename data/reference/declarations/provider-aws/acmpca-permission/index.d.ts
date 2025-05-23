/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AcmpcaPermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_permission#actions AcmpcaPermission#actions}
    */
    readonly actions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_permission#certificate_authority_arn AcmpcaPermission#certificate_authority_arn}
    */
    readonly certificateAuthorityArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_permission#id AcmpcaPermission#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_permission#principal AcmpcaPermission#principal}
    */
    readonly principal: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_permission#source_account AcmpcaPermission#source_account}
    */
    readonly sourceAccount?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_permission aws_acmpca_permission}
*/
export declare class AcmpcaPermission extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_acmpca_permission";
    /**
    * Generates CDKTF code for importing a AcmpcaPermission resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AcmpcaPermission to import
    * @param importFromId The id of the existing AcmpcaPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_permission#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AcmpcaPermission to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_permission aws_acmpca_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AcmpcaPermissionConfig
    */
    constructor(scope: Construct, id: string, config: AcmpcaPermissionConfig);
    private _actions?;
    get actions(): string[];
    set actions(value: string[]);
    get actionsInput(): string[] | undefined;
    private _certificateAuthorityArn?;
    get certificateAuthorityArn(): string;
    set certificateAuthorityArn(value: string);
    get certificateAuthorityArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get policy(): string;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string | undefined;
    private _sourceAccount?;
    get sourceAccount(): string;
    set sourceAccount(value: string);
    resetSourceAccount(): void;
    get sourceAccountInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
