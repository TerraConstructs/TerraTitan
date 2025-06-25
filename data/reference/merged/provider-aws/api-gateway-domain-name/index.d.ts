/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayDomainNameConfig extends cdktf.TerraformMetaArguments {
    /** (Optional) ARN for an AWS-managed certificate. AWS Certificate Manager is the only supported source. Used when an edge-optimized domain name is desired. Conflicts with `certificateName`, `certificateBody`, `certificateChain`, `certificatePrivateKey`, `regionalCertificateArn`, and `regionalCertificateName`. */
    readonly certificateArn?: string;
    /** (Optional) Certificate issued for the domain name being registered, in PEM format. Only valid for `EDGE` endpoint configuration type. Conflicts with `certificateArn`, `regionalCertificateArn`, and `regionalCertificateName`. */
    readonly certificateBody?: string;
    /** (Optional) Certificate for the CA that issued the certificate, along with any intermediate CA certificates required to create an unbroken chain to a certificate trusted by the intended API clients. Only valid for `EDGE` endpoint configuration type. Conflicts with `certificateArn`, `regionalCertificateArn`, and `regionalCertificateName`. */
    readonly certificateChain?: string;
    /** (Optional) Unique name to use when registering this certificate as an IAM server certificate. Conflicts with `certificateArn`, `regionalCertificateArn`, and `regionalCertificateName`. Required if `certificateArn` is not set. */
    readonly certificateName?: string;
    /** (Optional) Private key associated with the domain certificate given in `certificateBody`. Only valid for `EDGE` endpoint configuration type. Conflicts with `certificateArn`, `regionalCertificateArn`, and `regionalCertificateName`. */
    readonly certificatePrivateKey?: string;
    /** (Required) Fully-qualified domain name to register. */
    readonly domainName: string;
    /** */
    readonly id?: string;
    /** (Optional) ARN of the AWS-issued certificate used to validate custom domain ownership (when `certificateArn` is issued via an ACM Private CA or `mutualTlsAuthentication` is configured with an ACM-imported certificate.) */
    readonly ownershipVerificationCertificateArn?: string;
    /** (Optional) A stringified JSON policy document that applies to the execute-api service for this DomainName regardless of the caller and Method configuration. Supported only for private custom domain names. */
    readonly policy?: string;
    /** (Optional) ARN for an AWS-managed certificate. AWS Certificate Manager is the only supported source. Used when a regional domain name is desired. Conflicts with `certificateArn`, `certificateName`, `certificateBody`, `certificateChain`, and `certificatePrivateKey`. */
    readonly regionalCertificateArn?: string;
    /** (Optional) User-friendly name of the certificate that will be used by regional endpoint for this domain name. Conflicts with `certificateArn`, `certificateName`, `certificateBody`, `certificateChain`, and `certificatePrivateKey`. */
    readonly regionalCertificateName?: string;
    /** (Optional) Transport Layer Security (TLS) version + cipher suite for this DomainName. Valid values are `TLS_1_0` and `TLS_1_2`. Must be configured to perform drift detection. */
    readonly securityPolicy?: string;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    readonly tags?: {
        [key: string]: string;
    };
    /** */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /** */
    readonly endpointConfiguration?: ApiGatewayDomainNameEndpointConfiguration;
    /** */
    readonly mutualTlsAuthentication?: ApiGatewayDomainNameMutualTlsAuthentication;
}
export interface ApiGatewayDomainNameEndpointConfiguration {
    /** (Optional) The IP address types that can invoke a DomainName. Valid values: `ipv4`, `dualstack`. Use `ipv4` to allow only IPv4 addresses to invoke a DomainName, or use `dualstack` to allow both IPv4 and IPv6 addresses to invoke a DomainName. For the `PRIVATE` endpoint type, only `dualstack` is supported. Terraform performs drift detection for this argument only when the value is provided. */
    readonly ipAddressType?: string;
    /** (Required) A list of endpoint types of an API or its custom domain name. For an edge-optimized API and its custom domain name, the endpoint type is `EDGE`. For a regional API and its custom domain name, the endpoint type is `REGIONAL`. For a private API, the endpoint type is `PRIVATE`. */
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
    private _ipAddressType?;
    get ipAddressType(): string;
    set ipAddressType(value: string);
    resetIpAddressType(): void;
    get ipAddressTypeInput(): string | undefined;
    private _types?;
    get types(): string[];
    set types(value: string[]);
    get typesInput(): string[] | undefined;
}
export interface ApiGatewayDomainNameMutualTlsAuthentication {
    /** (Required) Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, `s3://bucket-name/key-name`. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. */
    readonly truststoreUri: string;
    /** (Optional) Version of the S3 object that contains the truststore. To specify a version, you must have versioning enabled for the S3 bucket. */
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_domain_name aws_api_gateway_domain_name}
*/
export declare class ApiGatewayDomainName extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_domain_name";
    /**
    * Generates CDKTF code for importing a ApiGatewayDomainName resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayDomainName to import
    * @param importFromId The id of the existing ApiGatewayDomainName that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_domain_name#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayDomainName to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_domain_name aws_api_gateway_domain_name} Resource
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
