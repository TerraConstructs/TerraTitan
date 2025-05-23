/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerWorkforceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#id SagemakerWorkforce#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#workforce_name SagemakerWorkforce#workforce_name}
    */
    readonly workforceName: string;
    /**
    * cognito_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#cognito_config SagemakerWorkforce#cognito_config}
    */
    readonly cognitoConfig?: SagemakerWorkforceCognitoConfig;
    /**
    * oidc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#oidc_config SagemakerWorkforce#oidc_config}
    */
    readonly oidcConfig?: SagemakerWorkforceOidcConfig;
    /**
    * source_ip_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#source_ip_config SagemakerWorkforce#source_ip_config}
    */
    readonly sourceIpConfig?: SagemakerWorkforceSourceIpConfig;
    /**
    * workforce_vpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#workforce_vpc_config SagemakerWorkforce#workforce_vpc_config}
    */
    readonly workforceVpcConfig?: SagemakerWorkforceWorkforceVpcConfig;
}
export interface SagemakerWorkforceCognitoConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#client_id SagemakerWorkforce#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#user_pool SagemakerWorkforce#user_pool}
    */
    readonly userPool: string;
}
export declare function sagemakerWorkforceCognitoConfigToTerraform(struct?: SagemakerWorkforceCognitoConfigOutputReference | SagemakerWorkforceCognitoConfig): any;
export declare function sagemakerWorkforceCognitoConfigToHclTerraform(struct?: SagemakerWorkforceCognitoConfigOutputReference | SagemakerWorkforceCognitoConfig): any;
export declare class SagemakerWorkforceCognitoConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerWorkforceCognitoConfig | undefined;
    set internalValue(value: SagemakerWorkforceCognitoConfig | undefined);
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string | undefined;
    private _userPool?;
    get userPool(): string;
    set userPool(value: string);
    get userPoolInput(): string | undefined;
}
export interface SagemakerWorkforceOidcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#authentication_request_extra_params SagemakerWorkforce#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#authorization_endpoint SagemakerWorkforce#authorization_endpoint}
    */
    readonly authorizationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#client_id SagemakerWorkforce#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#client_secret SagemakerWorkforce#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#issuer SagemakerWorkforce#issuer}
    */
    readonly issuer: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#jwks_uri SagemakerWorkforce#jwks_uri}
    */
    readonly jwksUri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#logout_endpoint SagemakerWorkforce#logout_endpoint}
    */
    readonly logoutEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#scope SagemakerWorkforce#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#token_endpoint SagemakerWorkforce#token_endpoint}
    */
    readonly tokenEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#user_info_endpoint SagemakerWorkforce#user_info_endpoint}
    */
    readonly userInfoEndpoint: string;
}
export declare function sagemakerWorkforceOidcConfigToTerraform(struct?: SagemakerWorkforceOidcConfigOutputReference | SagemakerWorkforceOidcConfig): any;
export declare function sagemakerWorkforceOidcConfigToHclTerraform(struct?: SagemakerWorkforceOidcConfigOutputReference | SagemakerWorkforceOidcConfig): any;
export declare class SagemakerWorkforceOidcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerWorkforceOidcConfig | undefined;
    set internalValue(value: SagemakerWorkforceOidcConfig | undefined);
    private _authenticationRequestExtraParams?;
    get authenticationRequestExtraParams(): {
        [key: string]: string;
    };
    set authenticationRequestExtraParams(value: {
        [key: string]: string;
    });
    resetAuthenticationRequestExtraParams(): void;
    get authenticationRequestExtraParamsInput(): {
        [key: string]: string;
    } | undefined;
    private _authorizationEndpoint?;
    get authorizationEndpoint(): string;
    set authorizationEndpoint(value: string);
    get authorizationEndpointInput(): string | undefined;
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string | undefined;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    get clientSecretInput(): string | undefined;
    private _issuer?;
    get issuer(): string;
    set issuer(value: string);
    get issuerInput(): string | undefined;
    private _jwksUri?;
    get jwksUri(): string;
    set jwksUri(value: string);
    get jwksUriInput(): string | undefined;
    private _logoutEndpoint?;
    get logoutEndpoint(): string;
    set logoutEndpoint(value: string);
    get logoutEndpointInput(): string | undefined;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    resetScope(): void;
    get scopeInput(): string | undefined;
    private _tokenEndpoint?;
    get tokenEndpoint(): string;
    set tokenEndpoint(value: string);
    get tokenEndpointInput(): string | undefined;
    private _userInfoEndpoint?;
    get userInfoEndpoint(): string;
    set userInfoEndpoint(value: string);
    get userInfoEndpointInput(): string | undefined;
}
export interface SagemakerWorkforceSourceIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#cidrs SagemakerWorkforce#cidrs}
    */
    readonly cidrs: string[];
}
export declare function sagemakerWorkforceSourceIpConfigToTerraform(struct?: SagemakerWorkforceSourceIpConfigOutputReference | SagemakerWorkforceSourceIpConfig): any;
export declare function sagemakerWorkforceSourceIpConfigToHclTerraform(struct?: SagemakerWorkforceSourceIpConfigOutputReference | SagemakerWorkforceSourceIpConfig): any;
export declare class SagemakerWorkforceSourceIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerWorkforceSourceIpConfig | undefined;
    set internalValue(value: SagemakerWorkforceSourceIpConfig | undefined);
    private _cidrs?;
    get cidrs(): string[];
    set cidrs(value: string[]);
    get cidrsInput(): string[] | undefined;
}
export interface SagemakerWorkforceWorkforceVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#security_group_ids SagemakerWorkforce#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#subnets SagemakerWorkforce#subnets}
    */
    readonly subnets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#vpc_id SagemakerWorkforce#vpc_id}
    */
    readonly vpcId?: string;
}
export declare function sagemakerWorkforceWorkforceVpcConfigToTerraform(struct?: SagemakerWorkforceWorkforceVpcConfigOutputReference | SagemakerWorkforceWorkforceVpcConfig): any;
export declare function sagemakerWorkforceWorkforceVpcConfigToHclTerraform(struct?: SagemakerWorkforceWorkforceVpcConfigOutputReference | SagemakerWorkforceWorkforceVpcConfig): any;
export declare class SagemakerWorkforceWorkforceVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerWorkforceWorkforceVpcConfig | undefined;
    set internalValue(value: SagemakerWorkforceWorkforceVpcConfig | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    resetSubnets(): void;
    get subnetsInput(): string[] | undefined;
    get vpcEndpointId(): string;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce aws_sagemaker_workforce}
*/
export declare class SagemakerWorkforce extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_workforce";
    /**
    * Generates CDKTF code for importing a SagemakerWorkforce resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerWorkforce to import
    * @param importFromId The id of the existing SagemakerWorkforce that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerWorkforce to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workforce aws_sagemaker_workforce} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerWorkforceConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerWorkforceConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get subdomain(): string;
    private _workforceName?;
    get workforceName(): string;
    set workforceName(value: string);
    get workforceNameInput(): string | undefined;
    private _cognitoConfig;
    get cognitoConfig(): SagemakerWorkforceCognitoConfigOutputReference;
    putCognitoConfig(value: SagemakerWorkforceCognitoConfig): void;
    resetCognitoConfig(): void;
    get cognitoConfigInput(): SagemakerWorkforceCognitoConfig | undefined;
    private _oidcConfig;
    get oidcConfig(): SagemakerWorkforceOidcConfigOutputReference;
    putOidcConfig(value: SagemakerWorkforceOidcConfig): void;
    resetOidcConfig(): void;
    get oidcConfigInput(): SagemakerWorkforceOidcConfig | undefined;
    private _sourceIpConfig;
    get sourceIpConfig(): SagemakerWorkforceSourceIpConfigOutputReference;
    putSourceIpConfig(value: SagemakerWorkforceSourceIpConfig): void;
    resetSourceIpConfig(): void;
    get sourceIpConfigInput(): SagemakerWorkforceSourceIpConfig | undefined;
    private _workforceVpcConfig;
    get workforceVpcConfig(): SagemakerWorkforceWorkforceVpcConfigOutputReference;
    putWorkforceVpcConfig(value: SagemakerWorkforceWorkforceVpcConfig): void;
    resetWorkforceVpcConfig(): void;
    get workforceVpcConfigInput(): SagemakerWorkforceWorkforceVpcConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
