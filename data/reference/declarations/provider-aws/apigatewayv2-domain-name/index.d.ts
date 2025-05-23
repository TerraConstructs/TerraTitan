/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Apigatewayv2DomainNameConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_domain_name#domain_name Apigatewayv2DomainName#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_domain_name#id Apigatewayv2DomainName#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_domain_name#tags Apigatewayv2DomainName#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_domain_name#tags_all Apigatewayv2DomainName#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * domain_name_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_domain_name#domain_name_configuration Apigatewayv2DomainName#domain_name_configuration}
    */
    readonly domainNameConfiguration: Apigatewayv2DomainNameDomainNameConfiguration;
    /**
    * mutual_tls_authentication block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_domain_name#mutual_tls_authentication Apigatewayv2DomainName#mutual_tls_authentication}
    */
    readonly mutualTlsAuthentication?: Apigatewayv2DomainNameMutualTlsAuthentication;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_domain_name#timeouts Apigatewayv2DomainName#timeouts}
    */
    readonly timeouts?: Apigatewayv2DomainNameTimeouts;
}
export interface Apigatewayv2DomainNameDomainNameConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_domain_name#certificate_arn Apigatewayv2DomainName#certificate_arn}
    */
    readonly certificateArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_domain_name#endpoint_type Apigatewayv2DomainName#endpoint_type}
    */
    readonly endpointType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_domain_name#ownership_verification_certificate_arn Apigatewayv2DomainName#ownership_verification_certificate_arn}
    */
    readonly ownershipVerificationCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_domain_name#security_policy Apigatewayv2DomainName#security_policy}
    */
    readonly securityPolicy: string;
}
export declare function apigatewayv2DomainNameDomainNameConfigurationToTerraform(struct?: Apigatewayv2DomainNameDomainNameConfigurationOutputReference | Apigatewayv2DomainNameDomainNameConfiguration): any;
export declare function apigatewayv2DomainNameDomainNameConfigurationToHclTerraform(struct?: Apigatewayv2DomainNameDomainNameConfigurationOutputReference | Apigatewayv2DomainNameDomainNameConfiguration): any;
export declare class Apigatewayv2DomainNameDomainNameConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Apigatewayv2DomainNameDomainNameConfiguration | undefined;
    set internalValue(value: Apigatewayv2DomainNameDomainNameConfiguration | undefined);
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    get certificateArnInput(): string | undefined;
    private _endpointType?;
    get endpointType(): string;
    set endpointType(value: string);
    get endpointTypeInput(): string | undefined;
    get hostedZoneId(): string;
    private _ownershipVerificationCertificateArn?;
    get ownershipVerificationCertificateArn(): string;
    set ownershipVerificationCertificateArn(value: string);
    resetOwnershipVerificationCertificateArn(): void;
    get ownershipVerificationCertificateArnInput(): string | undefined;
    private _securityPolicy?;
    get securityPolicy(): string;
    set securityPolicy(value: string);
    get securityPolicyInput(): string | undefined;
    get targetDomainName(): string;
}
export interface Apigatewayv2DomainNameMutualTlsAuthentication {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_domain_name#truststore_uri Apigatewayv2DomainName#truststore_uri}
    */
    readonly truststoreUri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_domain_name#truststore_version Apigatewayv2DomainName#truststore_version}
    */
    readonly truststoreVersion?: string;
}
export declare function apigatewayv2DomainNameMutualTlsAuthenticationToTerraform(struct?: Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference | Apigatewayv2DomainNameMutualTlsAuthentication): any;
export declare function apigatewayv2DomainNameMutualTlsAuthenticationToHclTerraform(struct?: Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference | Apigatewayv2DomainNameMutualTlsAuthentication): any;
export declare class Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Apigatewayv2DomainNameMutualTlsAuthentication | undefined;
    set internalValue(value: Apigatewayv2DomainNameMutualTlsAuthentication | undefined);
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
export interface Apigatewayv2DomainNameTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_domain_name#create Apigatewayv2DomainName#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_domain_name#update Apigatewayv2DomainName#update}
    */
    readonly update?: string;
}
export declare function apigatewayv2DomainNameTimeoutsToTerraform(struct?: Apigatewayv2DomainNameTimeouts | cdktf.IResolvable): any;
export declare function apigatewayv2DomainNameTimeoutsToHclTerraform(struct?: Apigatewayv2DomainNameTimeouts | cdktf.IResolvable): any;
export declare class Apigatewayv2DomainNameTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Apigatewayv2DomainNameTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Apigatewayv2DomainNameTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_domain_name aws_apigatewayv2_domain_name}
*/
export declare class Apigatewayv2DomainName extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_apigatewayv2_domain_name";
    /**
    * Generates CDKTF code for importing a Apigatewayv2DomainName resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Apigatewayv2DomainName to import
    * @param importFromId The id of the existing Apigatewayv2DomainName that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_domain_name#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Apigatewayv2DomainName to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_domain_name aws_apigatewayv2_domain_name} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2DomainNameConfig
    */
    constructor(scope: Construct, id: string, config: Apigatewayv2DomainNameConfig);
    get apiMappingSelectionExpression(): string;
    get arn(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _domainNameConfiguration;
    get domainNameConfiguration(): Apigatewayv2DomainNameDomainNameConfigurationOutputReference;
    putDomainNameConfiguration(value: Apigatewayv2DomainNameDomainNameConfiguration): void;
    get domainNameConfigurationInput(): Apigatewayv2DomainNameDomainNameConfiguration | undefined;
    private _mutualTlsAuthentication;
    get mutualTlsAuthentication(): Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference;
    putMutualTlsAuthentication(value: Apigatewayv2DomainNameMutualTlsAuthentication): void;
    resetMutualTlsAuthentication(): void;
    get mutualTlsAuthenticationInput(): Apigatewayv2DomainNameMutualTlsAuthentication | undefined;
    private _timeouts;
    get timeouts(): Apigatewayv2DomainNameTimeoutsOutputReference;
    putTimeouts(value: Apigatewayv2DomainNameTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Apigatewayv2DomainNameTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
