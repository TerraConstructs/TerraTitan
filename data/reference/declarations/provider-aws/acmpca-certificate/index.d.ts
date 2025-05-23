/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AcmpcaCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate#api_passthrough AcmpcaCertificate#api_passthrough}
    */
    readonly apiPassthrough?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate#certificate_authority_arn AcmpcaCertificate#certificate_authority_arn}
    */
    readonly certificateAuthorityArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate#certificate_signing_request AcmpcaCertificate#certificate_signing_request}
    */
    readonly certificateSigningRequest: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate#id AcmpcaCertificate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate#signing_algorithm AcmpcaCertificate#signing_algorithm}
    */
    readonly signingAlgorithm: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate#template_arn AcmpcaCertificate#template_arn}
    */
    readonly templateArn?: string;
    /**
    * validity block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate#validity AcmpcaCertificate#validity}
    */
    readonly validity: AcmpcaCertificateValidity;
}
export interface AcmpcaCertificateValidity {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate#type AcmpcaCertificate#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}
    */
    readonly value: string;
}
export declare function acmpcaCertificateValidityToTerraform(struct?: AcmpcaCertificateValidityOutputReference | AcmpcaCertificateValidity): any;
export declare function acmpcaCertificateValidityToHclTerraform(struct?: AcmpcaCertificateValidityOutputReference | AcmpcaCertificateValidity): any;
export declare class AcmpcaCertificateValidityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AcmpcaCertificateValidity | undefined;
    set internalValue(value: AcmpcaCertificateValidity | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate aws_acmpca_certificate}
*/
export declare class AcmpcaCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_acmpca_certificate";
    /**
    * Generates CDKTF code for importing a AcmpcaCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AcmpcaCertificate to import
    * @param importFromId The id of the existing AcmpcaCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AcmpcaCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate aws_acmpca_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AcmpcaCertificateConfig
    */
    constructor(scope: Construct, id: string, config: AcmpcaCertificateConfig);
    private _apiPassthrough?;
    get apiPassthrough(): string;
    set apiPassthrough(value: string);
    resetApiPassthrough(): void;
    get apiPassthroughInput(): string | undefined;
    get arn(): string;
    get certificate(): string;
    private _certificateAuthorityArn?;
    get certificateAuthorityArn(): string;
    set certificateAuthorityArn(value: string);
    get certificateAuthorityArnInput(): string | undefined;
    get certificateChain(): string;
    private _certificateSigningRequest?;
    get certificateSigningRequest(): string;
    set certificateSigningRequest(value: string);
    get certificateSigningRequestInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _signingAlgorithm?;
    get signingAlgorithm(): string;
    set signingAlgorithm(value: string);
    get signingAlgorithmInput(): string | undefined;
    private _templateArn?;
    get templateArn(): string;
    set templateArn(value: string);
    resetTemplateArn(): void;
    get templateArnInput(): string | undefined;
    private _validity;
    get validity(): AcmpcaCertificateValidityOutputReference;
    putValidity(value: AcmpcaCertificateValidity): void;
    get validityInput(): AcmpcaCertificateValidity | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
