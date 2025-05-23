/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsoadminTrustedTokenIssuerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_trusted_token_issuer#client_token SsoadminTrustedTokenIssuer#client_token}
    */
    readonly clientToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_trusted_token_issuer#instance_arn SsoadminTrustedTokenIssuer#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_trusted_token_issuer#name SsoadminTrustedTokenIssuer#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_trusted_token_issuer#tags SsoadminTrustedTokenIssuer#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_trusted_token_issuer#trusted_token_issuer_type SsoadminTrustedTokenIssuer#trusted_token_issuer_type}
    */
    readonly trustedTokenIssuerType: string;
    /**
    * trusted_token_issuer_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_trusted_token_issuer#trusted_token_issuer_configuration SsoadminTrustedTokenIssuer#trusted_token_issuer_configuration}
    */
    readonly trustedTokenIssuerConfiguration?: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration[] | cdktf.IResolvable;
}
export interface SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_trusted_token_issuer#claim_attribute_path SsoadminTrustedTokenIssuer#claim_attribute_path}
    */
    readonly claimAttributePath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_trusted_token_issuer#identity_store_attribute_path SsoadminTrustedTokenIssuer#identity_store_attribute_path}
    */
    readonly identityStoreAttributePath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_trusted_token_issuer#issuer_url SsoadminTrustedTokenIssuer#issuer_url}
    */
    readonly issuerUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_trusted_token_issuer#jwks_retrieval_option SsoadminTrustedTokenIssuer#jwks_retrieval_option}
    */
    readonly jwksRetrievalOption: string;
}
export declare function ssoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationToTerraform(struct?: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration | cdktf.IResolvable): any;
export declare function ssoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationToHclTerraform(struct?: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration | cdktf.IResolvable): any;
export declare class SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration | cdktf.IResolvable | undefined);
    private _claimAttributePath?;
    get claimAttributePath(): string;
    set claimAttributePath(value: string);
    get claimAttributePathInput(): string | undefined;
    private _identityStoreAttributePath?;
    get identityStoreAttributePath(): string;
    set identityStoreAttributePath(value: string);
    get identityStoreAttributePathInput(): string | undefined;
    private _issuerUrl?;
    get issuerUrl(): string;
    set issuerUrl(value: string);
    get issuerUrlInput(): string | undefined;
    private _jwksRetrievalOption?;
    get jwksRetrievalOption(): string;
    set jwksRetrievalOption(value: string);
    get jwksRetrievalOptionInput(): string | undefined;
}
export declare class SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference;
}
export interface SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration {
    /**
    * oidc_jwt_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_trusted_token_issuer#oidc_jwt_configuration SsoadminTrustedTokenIssuer#oidc_jwt_configuration}
    */
    readonly oidcJwtConfiguration?: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration[] | cdktf.IResolvable;
}
export declare function ssoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationToTerraform(struct?: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration | cdktf.IResolvable): any;
export declare function ssoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationToHclTerraform(struct?: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration | cdktf.IResolvable): any;
export declare class SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration | cdktf.IResolvable | undefined);
    private _oidcJwtConfiguration;
    get oidcJwtConfiguration(): SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList;
    putOidcJwtConfiguration(value: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration[] | cdktf.IResolvable): void;
    resetOidcJwtConfiguration(): void;
    get oidcJwtConfigurationInput(): cdktf.IResolvable | SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration[] | undefined;
}
export declare class SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_trusted_token_issuer aws_ssoadmin_trusted_token_issuer}
*/
export declare class SsoadminTrustedTokenIssuer extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssoadmin_trusted_token_issuer";
    /**
    * Generates CDKTF code for importing a SsoadminTrustedTokenIssuer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsoadminTrustedTokenIssuer to import
    * @param importFromId The id of the existing SsoadminTrustedTokenIssuer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_trusted_token_issuer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsoadminTrustedTokenIssuer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_trusted_token_issuer aws_ssoadmin_trusted_token_issuer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminTrustedTokenIssuerConfig
    */
    constructor(scope: Construct, id: string, config: SsoadminTrustedTokenIssuerConfig);
    get arn(): string;
    private _clientToken?;
    get clientToken(): string;
    set clientToken(value: string);
    resetClientToken(): void;
    get clientTokenInput(): string | undefined;
    get id(): string;
    private _instanceArn?;
    get instanceArn(): string;
    set instanceArn(value: string);
    get instanceArnInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _trustedTokenIssuerType?;
    get trustedTokenIssuerType(): string;
    set trustedTokenIssuerType(value: string);
    get trustedTokenIssuerTypeInput(): string | undefined;
    private _trustedTokenIssuerConfiguration;
    get trustedTokenIssuerConfiguration(): SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList;
    putTrustedTokenIssuerConfiguration(value: SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration[] | cdktf.IResolvable): void;
    resetTrustedTokenIssuerConfiguration(): void;
    get trustedTokenIssuerConfigurationInput(): cdktf.IResolvable | SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
