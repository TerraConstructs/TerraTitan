/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsConnectLambdaFunctionAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_lambda_function_association#function_arn DataAwsConnectLambdaFunctionAssociation#function_arn}
    */
    readonly functionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_lambda_function_association#id DataAwsConnectLambdaFunctionAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_lambda_function_association#instance_id DataAwsConnectLambdaFunctionAssociation#instance_id}
    */
    readonly instanceId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_lambda_function_association aws_connect_lambda_function_association}
*/
export declare class DataAwsConnectLambdaFunctionAssociation extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_connect_lambda_function_association";
    /**
    * Generates CDKTF code for importing a DataAwsConnectLambdaFunctionAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsConnectLambdaFunctionAssociation to import
    * @param importFromId The id of the existing DataAwsConnectLambdaFunctionAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_lambda_function_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsConnectLambdaFunctionAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_lambda_function_association aws_connect_lambda_function_association} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsConnectLambdaFunctionAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsConnectLambdaFunctionAssociationConfig);
    private _functionArn?;
    get functionArn(): string;
    set functionArn(value: string);
    get functionArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
