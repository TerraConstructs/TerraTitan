/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotCaCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_ca_certificate#active IotCaCertificate#active}
    */
    readonly active: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_ca_certificate#allow_auto_registration IotCaCertificate#allow_auto_registration}
    */
    readonly allowAutoRegistration: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_ca_certificate#ca_certificate_pem IotCaCertificate#ca_certificate_pem}
    */
    readonly caCertificatePem: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_ca_certificate#certificate_mode IotCaCertificate#certificate_mode}
    */
    readonly certificateMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_ca_certificate#id IotCaCertificate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_ca_certificate#tags IotCaCertificate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_ca_certificate#tags_all IotCaCertificate#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_ca_certificate#verification_certificate_pem IotCaCertificate#verification_certificate_pem}
    */
    readonly verificationCertificatePem?: string;
    /**
    * registration_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_ca_certificate#registration_config IotCaCertificate#registration_config}
    */
    readonly registrationConfig?: IotCaCertificateRegistrationConfig;
}
export interface IotCaCertificateValidity {
}
export declare function iotCaCertificateValidityToTerraform(struct?: IotCaCertificateValidity): any;
export declare function iotCaCertificateValidityToHclTerraform(struct?: IotCaCertificateValidity): any;
export declare class IotCaCertificateValidityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotCaCertificateValidity | undefined;
    set internalValue(value: IotCaCertificateValidity | undefined);
    get notAfter(): string;
    get notBefore(): string;
}
export declare class IotCaCertificateValidityList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotCaCertificateValidityOutputReference;
}
export interface IotCaCertificateRegistrationConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_ca_certificate#role_arn IotCaCertificate#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_ca_certificate#template_body IotCaCertificate#template_body}
    */
    readonly templateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_ca_certificate#template_name IotCaCertificate#template_name}
    */
    readonly templateName?: string;
}
export declare function iotCaCertificateRegistrationConfigToTerraform(struct?: IotCaCertificateRegistrationConfigOutputReference | IotCaCertificateRegistrationConfig): any;
export declare function iotCaCertificateRegistrationConfigToHclTerraform(struct?: IotCaCertificateRegistrationConfigOutputReference | IotCaCertificateRegistrationConfig): any;
export declare class IotCaCertificateRegistrationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotCaCertificateRegistrationConfig | undefined;
    set internalValue(value: IotCaCertificateRegistrationConfig | undefined);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _templateBody?;
    get templateBody(): string;
    set templateBody(value: string);
    resetTemplateBody(): void;
    get templateBodyInput(): string | undefined;
    private _templateName?;
    get templateName(): string;
    set templateName(value: string);
    resetTemplateName(): void;
    get templateNameInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_ca_certificate aws_iot_ca_certificate}
*/
export declare class IotCaCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iot_ca_certificate";
    /**
    * Generates CDKTF code for importing a IotCaCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IotCaCertificate to import
    * @param importFromId The id of the existing IotCaCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_ca_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IotCaCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_ca_certificate aws_iot_ca_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotCaCertificateConfig
    */
    constructor(scope: Construct, id: string, config: IotCaCertificateConfig);
    private _active?;
    get active(): boolean | cdktf.IResolvable;
    set active(value: boolean | cdktf.IResolvable);
    get activeInput(): boolean | cdktf.IResolvable | undefined;
    private _allowAutoRegistration?;
    get allowAutoRegistration(): boolean | cdktf.IResolvable;
    set allowAutoRegistration(value: boolean | cdktf.IResolvable);
    get allowAutoRegistrationInput(): boolean | cdktf.IResolvable | undefined;
    get arn(): string;
    private _caCertificatePem?;
    get caCertificatePem(): string;
    set caCertificatePem(value: string);
    get caCertificatePemInput(): string | undefined;
    private _certificateMode?;
    get certificateMode(): string;
    set certificateMode(value: string);
    resetCertificateMode(): void;
    get certificateModeInput(): string | undefined;
    get customerVersion(): number;
    get generationId(): string;
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
    private _validity;
    get validity(): IotCaCertificateValidityList;
    private _verificationCertificatePem?;
    get verificationCertificatePem(): string;
    set verificationCertificatePem(value: string);
    resetVerificationCertificatePem(): void;
    get verificationCertificatePemInput(): string | undefined;
    private _registrationConfig;
    get registrationConfig(): IotCaCertificateRegistrationConfigOutputReference;
    putRegistrationConfig(value: IotCaCertificateRegistrationConfig): void;
    resetRegistrationConfig(): void;
    get registrationConfigInput(): IotCaCertificateRegistrationConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
