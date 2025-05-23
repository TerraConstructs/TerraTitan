/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaLayerVersionPermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_layer_version_permission#action LambdaLayerVersionPermission#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_layer_version_permission#id LambdaLayerVersionPermission#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_layer_version_permission#layer_name LambdaLayerVersionPermission#layer_name}
    */
    readonly layerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_layer_version_permission#organization_id LambdaLayerVersionPermission#organization_id}
    */
    readonly organizationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_layer_version_permission#principal LambdaLayerVersionPermission#principal}
    */
    readonly principal: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_layer_version_permission#skip_destroy LambdaLayerVersionPermission#skip_destroy}
    */
    readonly skipDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_layer_version_permission#statement_id LambdaLayerVersionPermission#statement_id}
    */
    readonly statementId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_layer_version_permission#version_number LambdaLayerVersionPermission#version_number}
    */
    readonly versionNumber: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_layer_version_permission aws_lambda_layer_version_permission}
*/
export declare class LambdaLayerVersionPermission extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lambda_layer_version_permission";
    /**
    * Generates CDKTF code for importing a LambdaLayerVersionPermission resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LambdaLayerVersionPermission to import
    * @param importFromId The id of the existing LambdaLayerVersionPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_layer_version_permission#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LambdaLayerVersionPermission to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_layer_version_permission aws_lambda_layer_version_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaLayerVersionPermissionConfig
    */
    constructor(scope: Construct, id: string, config: LambdaLayerVersionPermissionConfig);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _layerName?;
    get layerName(): string;
    set layerName(value: string);
    get layerNameInput(): string | undefined;
    private _organizationId?;
    get organizationId(): string;
    set organizationId(value: string);
    resetOrganizationId(): void;
    get organizationIdInput(): string | undefined;
    get policy(): string;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string | undefined;
    get revisionId(): string;
    private _skipDestroy?;
    get skipDestroy(): boolean | cdktf.IResolvable;
    set skipDestroy(value: boolean | cdktf.IResolvable);
    resetSkipDestroy(): void;
    get skipDestroyInput(): boolean | cdktf.IResolvable | undefined;
    private _statementId?;
    get statementId(): string;
    set statementId(value: string);
    get statementIdInput(): string | undefined;
    private _versionNumber?;
    get versionNumber(): number;
    set versionNumber(value: number);
    get versionNumberInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
