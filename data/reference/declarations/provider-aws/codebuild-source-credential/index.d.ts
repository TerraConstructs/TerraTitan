/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodebuildSourceCredentialConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_source_credential#auth_type CodebuildSourceCredential#auth_type}
    */
    readonly authType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_source_credential#id CodebuildSourceCredential#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_source_credential#server_type CodebuildSourceCredential#server_type}
    */
    readonly serverType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_source_credential#token CodebuildSourceCredential#token}
    */
    readonly token: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_source_credential#user_name CodebuildSourceCredential#user_name}
    */
    readonly userName?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_source_credential aws_codebuild_source_credential}
*/
export declare class CodebuildSourceCredential extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codebuild_source_credential";
    /**
    * Generates CDKTF code for importing a CodebuildSourceCredential resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodebuildSourceCredential to import
    * @param importFromId The id of the existing CodebuildSourceCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_source_credential#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodebuildSourceCredential to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_source_credential aws_codebuild_source_credential} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildSourceCredentialConfig
    */
    constructor(scope: Construct, id: string, config: CodebuildSourceCredentialConfig);
    get arn(): string;
    private _authType?;
    get authType(): string;
    set authType(value: string);
    get authTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _serverType?;
    get serverType(): string;
    set serverType(value: string);
    get serverTypeInput(): string | undefined;
    private _token?;
    get token(): string;
    set token(value: string);
    get tokenInput(): string | undefined;
    private _userName?;
    get userName(): string;
    set userName(value: string);
    resetUserName(): void;
    get userNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
