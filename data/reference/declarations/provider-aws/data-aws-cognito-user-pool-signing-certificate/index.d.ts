/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCognitoUserPoolSigningCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cognito_user_pool_signing_certificate#id DataAwsCognitoUserPoolSigningCertificate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cognito_user_pool_signing_certificate#user_pool_id DataAwsCognitoUserPoolSigningCertificate#user_pool_id}
    */
    readonly userPoolId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cognito_user_pool_signing_certificate aws_cognito_user_pool_signing_certificate}
*/
export declare class DataAwsCognitoUserPoolSigningCertificate extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_cognito_user_pool_signing_certificate";
    /**
    * Generates CDKTF code for importing a DataAwsCognitoUserPoolSigningCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCognitoUserPoolSigningCertificate to import
    * @param importFromId The id of the existing DataAwsCognitoUserPoolSigningCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cognito_user_pool_signing_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCognitoUserPoolSigningCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cognito_user_pool_signing_certificate aws_cognito_user_pool_signing_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCognitoUserPoolSigningCertificateConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCognitoUserPoolSigningCertificateConfig);
    get certificate(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _userPoolId?;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
