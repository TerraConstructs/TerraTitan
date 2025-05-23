/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CognitoIdentityPoolProviderPrincipalTagConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_provider_principal_tag#id CognitoIdentityPoolProviderPrincipalTag#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_provider_principal_tag#identity_pool_id CognitoIdentityPoolProviderPrincipalTag#identity_pool_id}
    */
    readonly identityPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_provider_principal_tag#identity_provider_name CognitoIdentityPoolProviderPrincipalTag#identity_provider_name}
    */
    readonly identityProviderName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_provider_principal_tag#principal_tags CognitoIdentityPoolProviderPrincipalTag#principal_tags}
    */
    readonly principalTags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_provider_principal_tag#use_defaults CognitoIdentityPoolProviderPrincipalTag#use_defaults}
    */
    readonly useDefaults?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_provider_principal_tag aws_cognito_identity_pool_provider_principal_tag}
*/
export declare class CognitoIdentityPoolProviderPrincipalTag extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cognito_identity_pool_provider_principal_tag";
    /**
    * Generates CDKTF code for importing a CognitoIdentityPoolProviderPrincipalTag resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CognitoIdentityPoolProviderPrincipalTag to import
    * @param importFromId The id of the existing CognitoIdentityPoolProviderPrincipalTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_provider_principal_tag#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CognitoIdentityPoolProviderPrincipalTag to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_provider_principal_tag aws_cognito_identity_pool_provider_principal_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoIdentityPoolProviderPrincipalTagConfig
    */
    constructor(scope: Construct, id: string, config: CognitoIdentityPoolProviderPrincipalTagConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identityPoolId?;
    get identityPoolId(): string;
    set identityPoolId(value: string);
    get identityPoolIdInput(): string | undefined;
    private _identityProviderName?;
    get identityProviderName(): string;
    set identityProviderName(value: string);
    get identityProviderNameInput(): string | undefined;
    private _principalTags?;
    get principalTags(): {
        [key: string]: string;
    };
    set principalTags(value: {
        [key: string]: string;
    });
    resetPrincipalTags(): void;
    get principalTagsInput(): {
        [key: string]: string;
    } | undefined;
    private _useDefaults?;
    get useDefaults(): boolean | cdktf.IResolvable;
    set useDefaults(value: boolean | cdktf.IResolvable);
    resetUseDefaults(): void;
    get useDefaultsInput(): boolean | cdktf.IResolvable | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
