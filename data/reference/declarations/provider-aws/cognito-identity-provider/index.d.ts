/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CognitoIdentityProviderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_provider#attribute_mapping CognitoIdentityProvider#attribute_mapping}
    */
    readonly attributeMapping?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_provider#id CognitoIdentityProvider#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_provider#idp_identifiers CognitoIdentityProvider#idp_identifiers}
    */
    readonly idpIdentifiers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_provider#provider_details CognitoIdentityProvider#provider_details}
    */
    readonly providerDetails: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_provider#provider_name CognitoIdentityProvider#provider_name}
    */
    readonly providerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_provider#provider_type CognitoIdentityProvider#provider_type}
    */
    readonly providerType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_provider#user_pool_id CognitoIdentityProvider#user_pool_id}
    */
    readonly userPoolId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_provider aws_cognito_identity_provider}
*/
export declare class CognitoIdentityProvider extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cognito_identity_provider";
    /**
    * Generates CDKTF code for importing a CognitoIdentityProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CognitoIdentityProvider to import
    * @param importFromId The id of the existing CognitoIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CognitoIdentityProvider to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_provider aws_cognito_identity_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoIdentityProviderConfig
    */
    constructor(scope: Construct, id: string, config: CognitoIdentityProviderConfig);
    private _attributeMapping?;
    get attributeMapping(): {
        [key: string]: string;
    };
    set attributeMapping(value: {
        [key: string]: string;
    });
    resetAttributeMapping(): void;
    get attributeMappingInput(): {
        [key: string]: string;
    } | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _idpIdentifiers?;
    get idpIdentifiers(): string[];
    set idpIdentifiers(value: string[]);
    resetIdpIdentifiers(): void;
    get idpIdentifiersInput(): string[] | undefined;
    private _providerDetails?;
    get providerDetails(): {
        [key: string]: string;
    };
    set providerDetails(value: {
        [key: string]: string;
    });
    get providerDetailsInput(): {
        [key: string]: string;
    } | undefined;
    private _providerName?;
    get providerName(): string;
    set providerName(value: string);
    get providerNameInput(): string | undefined;
    private _providerType?;
    get providerType(): string;
    set providerType(value: string);
    get providerTypeInput(): string | undefined;
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
