/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayDomainNameConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#certificate_arn ApiGatewayDomainName#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#certificate_body ApiGatewayDomainName#certificate_body}
    */
    readonly certificateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#certificate_chain ApiGatewayDomainName#certificate_chain}
    */
    readonly certificateChain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#certificate_name ApiGatewayDomainName#certificate_name}
    */
    readonly certificateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#certificate_private_key ApiGatewayDomainName#certificate_private_key}
    */
    readonly certificatePrivateKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#domain_name ApiGatewayDomainName#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#id ApiGatewayDomainName#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#ownership_verification_certificate_arn ApiGatewayDomainName#ownership_verification_certificate_arn}
    */
    readonly ownershipVerificationCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#policy ApiGatewayDomainName#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#regional_certificate_arn ApiGatewayDomainName#regional_certificate_arn}
    */
    readonly regionalCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#regional_certificate_name ApiGatewayDomainName#regional_certificate_name}
    */
    readonly regionalCertificateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#security_policy ApiGatewayDomainName#security_policy}
    */
    readonly securityPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#tags ApiGatewayDomainName#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#tags_all ApiGatewayDomainName#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * endpoint_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#endpoint_configuration ApiGatewayDomainName#endpoint_configuration}
    */
    readonly endpointConfiguration?: ApiGatewayDomainNameEndpointConfiguration;
    /**
    * mutual_tls_authentication block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#mutual_tls_authentication ApiGatewayDomainName#mutual_tls_authentication}
    */
    readonly mutualTlsAuthentication?: ApiGatewayDomainNameMutualTlsAuthentication;
}
export interface ApiGatewayDomainNameEndpointConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#types ApiGatewayDomainName#types}
    */
    readonly types: string[];
}
export declare function apiGatewayDomainNameEndpointConfigurationToTerraform(struct?: ApiGatewayDomainNameEndpointConfigurationOutputReference | ApiGatewayDomainNameEndpointConfiguration): any;
export declare function apiGatewayDomainNameEndpointConfigurationToHclTerraform(struct?: ApiGatewayDomainNameEndpointConfigurationOutputReference | ApiGatewayDomainNameEndpointConfiguration): any;
export declare class ApiGatewayDomainNameEndpointConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiGatewayDomainNameEndpointConfiguration | undefined;
    set internalValue(value: ApiGatewayDomainNameEndpointConfiguration | undefined);
    private _types?;
    get types(): string[];
    set types(value: string[]);
    get typesInput(): string[] | undefined;
}
export interface ApiGatewayDomainNameMutualTlsAuthentication {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#truststore_uri ApiGatewayDomainName#truststore_uri}
    */
    readonly truststoreUri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#truststore_version ApiGatewayDomainName#truststore_version}
    */
    readonly truststoreVersion?: string;
}
export declare function apiGatewayDomainNameMutualTlsAuthenticationToTerraform(struct?: ApiGatewayDomainNameMutualTlsAuthenticationOutputReference | ApiGatewayDomainNameMutualTlsAuthentication): any;
export declare function apiGatewayDomainNameMutualTlsAuthenticationToHclTerraform(struct?: ApiGatewayDomainNameMutualTlsAuthenticationOutputReference | ApiGatewayDomainNameMutualTlsAuthentication): any;
export declare class ApiGatewayDomainNameMutualTlsAuthenticationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiGatewayDomainNameMutualTlsAuthentication | undefined;
    set internalValue(value: ApiGatewayDomainNameMutualTlsAuthentication | undefined);
    private _truststoreUri?;
    get truststoreUri(): string;
    set truststoreUri(value: string);
    get truststoreUriInput(): string | undefined;
    private _truststoreVersion?;
    get truststoreVersion(): string;
    set truststoreVersion(value: string);
    resetTruststoreVersion(): void;
    get truststoreVersionInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name aws_api_gateway_domain_name}
*/
export declare class ApiGatewayDomainName extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_domain_name";
    /**
    * Generates CDKTF code for importing a ApiGatewayDomainName resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayDomainName to import
    * @param importFromId The id of the existing ApiGatewayDomainName that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayDomainName to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_domain_name aws_api_gateway_domain_name} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayDomainNameConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayDomainNameConfig);
    get arn(): string;
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    resetCertificateArn(): void;
    get certificateArnInput(): string | undefined;
    private _certificateBody?;
    get certificateBody(): string;
    set certificateBody(value: string);
    resetCertificateBody(): void;
    get certificateBodyInput(): string | undefined;
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    resetCertificateChain(): void;
    get certificateChainInput(): string | undefined;
    private _certificateName?;
    get certificateName(): string;
    set certificateName(value: string);
    resetCertificateName(): void;
    get certificateNameInput(): string | undefined;
    private _certificatePrivateKey?;
    get certificatePrivateKey(): string;
    set certificatePrivateKey(value: string);
    resetCertificatePrivateKey(): void;
    get certificatePrivateKeyInput(): string | undefined;
    get certificateUploadDate(): string;
    get cloudfrontDomainName(): string;
    get cloudfrontZoneId(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    get domainNameId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ownershipVerificationCertificateArn?;
    get ownershipVerificationCertificateArn(): string;
    set ownershipVerificationCertificateArn(value: string);
    resetOwnershipVerificationCertificateArn(): void;
    get ownershipVerificationCertificateArnInput(): string | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string | undefined;
    private _regionalCertificateArn?;
    get regionalCertificateArn(): string;
    set regionalCertificateArn(value: string);
    resetRegionalCertificateArn(): void;
    get regionalCertificateArnInput(): string | undefined;
    private _regionalCertificateName?;
    get regionalCertificateName(): string;
    set regionalCertificateName(value: string);
    resetRegionalCertificateName(): void;
    get regionalCertificateNameInput(): string | undefined;
    get regionalDomainName(): string;
    get regionalZoneId(): string;
    private _securityPolicy?;
    get securityPolicy(): string;
    set securityPolicy(value: string);
    resetSecurityPolicy(): void;
    get securityPolicyInput(): string | undefined;
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
    private _endpointConfiguration;
    get endpointConfiguration(): ApiGatewayDomainNameEndpointConfigurationOutputReference;
    putEndpointConfiguration(value: ApiGatewayDomainNameEndpointConfiguration): void;
    resetEndpointConfiguration(): void;
    get endpointConfigurationInput(): ApiGatewayDomainNameEndpointConfiguration | undefined;
    private _mutualTlsAuthentication;
    get mutualTlsAuthentication(): ApiGatewayDomainNameMutualTlsAuthenticationOutputReference;
    putMutualTlsAuthentication(value: ApiGatewayDomainNameMutualTlsAuthentication): void;
    resetMutualTlsAuthentication(): void;
    get mutualTlsAuthenticationInput(): ApiGatewayDomainNameMutualTlsAuthentication | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
