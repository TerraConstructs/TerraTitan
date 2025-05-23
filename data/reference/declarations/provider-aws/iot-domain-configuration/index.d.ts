/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotDomainConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}
    */
    readonly domainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_domain_configuration#id IotDomainConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_domain_configuration#name IotDomainConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}
    */
    readonly serverCertificateArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}
    */
    readonly serviceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_domain_configuration#status IotDomainConfiguration#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_domain_configuration#tags_all IotDomainConfiguration#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}
    */
    readonly validationCertificateArn?: string;
    /**
    * authorizer_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_domain_configuration#authorizer_config IotDomainConfiguration#authorizer_config}
    */
    readonly authorizerConfig?: IotDomainConfigurationAuthorizerConfig;
    /**
    * tls_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_domain_configuration#tls_config IotDomainConfiguration#tls_config}
    */
    readonly tlsConfig?: IotDomainConfigurationTlsConfig;
}
export interface IotDomainConfigurationAuthorizerConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_domain_configuration#allow_authorizer_override IotDomainConfiguration#allow_authorizer_override}
    */
    readonly allowAuthorizerOverride?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_domain_configuration#default_authorizer_name IotDomainConfiguration#default_authorizer_name}
    */
    readonly defaultAuthorizerName?: string;
}
export declare function iotDomainConfigurationAuthorizerConfigToTerraform(struct?: IotDomainConfigurationAuthorizerConfigOutputReference | IotDomainConfigurationAuthorizerConfig): any;
export declare function iotDomainConfigurationAuthorizerConfigToHclTerraform(struct?: IotDomainConfigurationAuthorizerConfigOutputReference | IotDomainConfigurationAuthorizerConfig): any;
export declare class IotDomainConfigurationAuthorizerConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotDomainConfigurationAuthorizerConfig | undefined;
    set internalValue(value: IotDomainConfigurationAuthorizerConfig | undefined);
    private _allowAuthorizerOverride?;
    get allowAuthorizerOverride(): boolean | cdktf.IResolvable;
    set allowAuthorizerOverride(value: boolean | cdktf.IResolvable);
    resetAllowAuthorizerOverride(): void;
    get allowAuthorizerOverrideInput(): boolean | cdktf.IResolvable | undefined;
    private _defaultAuthorizerName?;
    get defaultAuthorizerName(): string;
    set defaultAuthorizerName(value: string);
    resetDefaultAuthorizerName(): void;
    get defaultAuthorizerNameInput(): string | undefined;
}
export interface IotDomainConfigurationTlsConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_domain_configuration#security_policy IotDomainConfiguration#security_policy}
    */
    readonly securityPolicy?: string;
}
export declare function iotDomainConfigurationTlsConfigToTerraform(struct?: IotDomainConfigurationTlsConfigOutputReference | IotDomainConfigurationTlsConfig): any;
export declare function iotDomainConfigurationTlsConfigToHclTerraform(struct?: IotDomainConfigurationTlsConfigOutputReference | IotDomainConfigurationTlsConfig): any;
export declare class IotDomainConfigurationTlsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotDomainConfigurationTlsConfig | undefined;
    set internalValue(value: IotDomainConfigurationTlsConfig | undefined);
    private _securityPolicy?;
    get securityPolicy(): string;
    set securityPolicy(value: string);
    resetSecurityPolicy(): void;
    get securityPolicyInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_domain_configuration aws_iot_domain_configuration}
*/
export declare class IotDomainConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iot_domain_configuration";
    /**
    * Generates CDKTF code for importing a IotDomainConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IotDomainConfiguration to import
    * @param importFromId The id of the existing IotDomainConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_domain_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IotDomainConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_domain_configuration aws_iot_domain_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotDomainConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: IotDomainConfigurationConfig);
    get arn(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    resetDomainName(): void;
    get domainNameInput(): string | undefined;
    get domainType(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _serverCertificateArns?;
    get serverCertificateArns(): string[];
    set serverCertificateArns(value: string[]);
    resetServerCertificateArns(): void;
    get serverCertificateArnsInput(): string[] | undefined;
    private _serviceType?;
    get serviceType(): string;
    set serviceType(value: string);
    resetServiceType(): void;
    get serviceTypeInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
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
    private _validationCertificateArn?;
    get validationCertificateArn(): string;
    set validationCertificateArn(value: string);
    resetValidationCertificateArn(): void;
    get validationCertificateArnInput(): string | undefined;
    private _authorizerConfig;
    get authorizerConfig(): IotDomainConfigurationAuthorizerConfigOutputReference;
    putAuthorizerConfig(value: IotDomainConfigurationAuthorizerConfig): void;
    resetAuthorizerConfig(): void;
    get authorizerConfigInput(): IotDomainConfigurationAuthorizerConfig | undefined;
    private _tlsConfig;
    get tlsConfig(): IotDomainConfigurationTlsConfigOutputReference;
    putTlsConfig(value: IotDomainConfigurationTlsConfig): void;
    resetTlsConfig(): void;
    get tlsConfigInput(): IotDomainConfigurationTlsConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
