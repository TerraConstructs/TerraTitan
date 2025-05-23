/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CognitoIdentityPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}
    */
    readonly allowClassicFlow?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}
    */
    readonly allowUnauthenticatedIdentities?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}
    */
    readonly developerProviderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool#id CognitoIdentityPool#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}
    */
    readonly identityPoolName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool#openid_connect_provider_arns CognitoIdentityPool#openid_connect_provider_arns}
    */
    readonly openidConnectProviderArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool#saml_provider_arns CognitoIdentityPool#saml_provider_arns}
    */
    readonly samlProviderArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}
    */
    readonly supportedLoginProviders?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool#tags CognitoIdentityPool#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool#tags_all CognitoIdentityPool#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * cognito_identity_providers block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}
    */
    readonly cognitoIdentityProviders?: CognitoIdentityPoolCognitoIdentityProviders[] | cdktf.IResolvable;
}
export interface CognitoIdentityPoolCognitoIdentityProviders {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool#client_id CognitoIdentityPool#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool#provider_name CognitoIdentityPool#provider_name}
    */
    readonly providerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool#server_side_token_check CognitoIdentityPool#server_side_token_check}
    */
    readonly serverSideTokenCheck?: boolean | cdktf.IResolvable;
}
export declare function cognitoIdentityPoolCognitoIdentityProvidersToTerraform(struct?: CognitoIdentityPoolCognitoIdentityProviders | cdktf.IResolvable): any;
export declare function cognitoIdentityPoolCognitoIdentityProvidersToHclTerraform(struct?: CognitoIdentityPoolCognitoIdentityProviders | cdktf.IResolvable): any;
export declare class CognitoIdentityPoolCognitoIdentityProvidersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CognitoIdentityPoolCognitoIdentityProviders | cdktf.IResolvable | undefined;
    set internalValue(value: CognitoIdentityPoolCognitoIdentityProviders | cdktf.IResolvable | undefined);
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    resetClientId(): void;
    get clientIdInput(): string | undefined;
    private _providerName?;
    get providerName(): string;
    set providerName(value: string);
    resetProviderName(): void;
    get providerNameInput(): string | undefined;
    private _serverSideTokenCheck?;
    get serverSideTokenCheck(): boolean | cdktf.IResolvable;
    set serverSideTokenCheck(value: boolean | cdktf.IResolvable);
    resetServerSideTokenCheck(): void;
    get serverSideTokenCheckInput(): boolean | cdktf.IResolvable | undefined;
}
export declare class CognitoIdentityPoolCognitoIdentityProvidersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CognitoIdentityPoolCognitoIdentityProviders[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CognitoIdentityPoolCognitoIdentityProvidersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool aws_cognito_identity_pool}
*/
export declare class CognitoIdentityPool extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cognito_identity_pool";
    /**
    * Generates CDKTF code for importing a CognitoIdentityPool resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CognitoIdentityPool to import
    * @param importFromId The id of the existing CognitoIdentityPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CognitoIdentityPool to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool aws_cognito_identity_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoIdentityPoolConfig
    */
    constructor(scope: Construct, id: string, config: CognitoIdentityPoolConfig);
    private _allowClassicFlow?;
    get allowClassicFlow(): boolean | cdktf.IResolvable;
    set allowClassicFlow(value: boolean | cdktf.IResolvable);
    resetAllowClassicFlow(): void;
    get allowClassicFlowInput(): boolean | cdktf.IResolvable | undefined;
    private _allowUnauthenticatedIdentities?;
    get allowUnauthenticatedIdentities(): boolean | cdktf.IResolvable;
    set allowUnauthenticatedIdentities(value: boolean | cdktf.IResolvable);
    resetAllowUnauthenticatedIdentities(): void;
    get allowUnauthenticatedIdentitiesInput(): boolean | cdktf.IResolvable | undefined;
    get arn(): string;
    private _developerProviderName?;
    get developerProviderName(): string;
    set developerProviderName(value: string);
    resetDeveloperProviderName(): void;
    get developerProviderNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identityPoolName?;
    get identityPoolName(): string;
    set identityPoolName(value: string);
    get identityPoolNameInput(): string | undefined;
    private _openidConnectProviderArns?;
    get openidConnectProviderArns(): string[];
    set openidConnectProviderArns(value: string[]);
    resetOpenidConnectProviderArns(): void;
    get openidConnectProviderArnsInput(): string[] | undefined;
    private _samlProviderArns?;
    get samlProviderArns(): string[];
    set samlProviderArns(value: string[]);
    resetSamlProviderArns(): void;
    get samlProviderArnsInput(): string[] | undefined;
    private _supportedLoginProviders?;
    get supportedLoginProviders(): {
        [key: string]: string;
    };
    set supportedLoginProviders(value: {
        [key: string]: string;
    });
    resetSupportedLoginProviders(): void;
    get supportedLoginProvidersInput(): {
        [key: string]: string;
    } | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _cognitoIdentityProviders;
    get cognitoIdentityProviders(): CognitoIdentityPoolCognitoIdentityProvidersList;
    putCognitoIdentityProviders(value: CognitoIdentityPoolCognitoIdentityProviders[] | cdktf.IResolvable): void;
    resetCognitoIdentityProviders(): void;
    get cognitoIdentityProvidersInput(): cdktf.IResolvable | CognitoIdentityPoolCognitoIdentityProviders[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
