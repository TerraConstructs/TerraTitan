/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaPermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_permission#action LambdaPermission#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_permission#event_source_token LambdaPermission#event_source_token}
    */
    readonly eventSourceToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_permission#function_name LambdaPermission#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_permission#function_url_auth_type LambdaPermission#function_url_auth_type}
    */
    readonly functionUrlAuthType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_permission#id LambdaPermission#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_permission#principal LambdaPermission#principal}
    */
    readonly principal: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_permission#principal_org_id LambdaPermission#principal_org_id}
    */
    readonly principalOrgId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_permission#qualifier LambdaPermission#qualifier}
    */
    readonly qualifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_permission#source_account LambdaPermission#source_account}
    */
    readonly sourceAccount?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_permission#source_arn LambdaPermission#source_arn}
    */
    readonly sourceArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_permission#statement_id LambdaPermission#statement_id}
    */
    readonly statementId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_permission#statement_id_prefix LambdaPermission#statement_id_prefix}
    */
    readonly statementIdPrefix?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_permission aws_lambda_permission}
*/
export declare class LambdaPermission extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lambda_permission";
    /**
    * Generates CDKTF code for importing a LambdaPermission resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LambdaPermission to import
    * @param importFromId The id of the existing LambdaPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_permission#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LambdaPermission to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_permission aws_lambda_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaPermissionConfig
    */
    constructor(scope: Construct, id: string, config: LambdaPermissionConfig);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string | undefined;
    private _eventSourceToken?;
    get eventSourceToken(): string;
    set eventSourceToken(value: string);
    resetEventSourceToken(): void;
    get eventSourceTokenInput(): string | undefined;
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string | undefined;
    private _functionUrlAuthType?;
    get functionUrlAuthType(): string;
    set functionUrlAuthType(value: string);
    resetFunctionUrlAuthType(): void;
    get functionUrlAuthTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string | undefined;
    private _principalOrgId?;
    get principalOrgId(): string;
    set principalOrgId(value: string);
    resetPrincipalOrgId(): void;
    get principalOrgIdInput(): string | undefined;
    private _qualifier?;
    get qualifier(): string;
    set qualifier(value: string);
    resetQualifier(): void;
    get qualifierInput(): string | undefined;
    private _sourceAccount?;
    get sourceAccount(): string;
    set sourceAccount(value: string);
    resetSourceAccount(): void;
    get sourceAccountInput(): string | undefined;
    private _sourceArn?;
    get sourceArn(): string;
    set sourceArn(value: string);
    resetSourceArn(): void;
    get sourceArnInput(): string | undefined;
    private _statementId?;
    get statementId(): string;
    set statementId(value: string);
    resetStatementId(): void;
    get statementIdInput(): string | undefined;
    private _statementIdPrefix?;
    get statementIdPrefix(): string;
    set statementIdPrefix(value: string);
    resetStatementIdPrefix(): void;
    get statementIdPrefixInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
