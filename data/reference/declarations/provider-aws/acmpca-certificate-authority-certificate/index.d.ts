/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AcmpcaCertificateAuthorityCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority_certificate#certificate AcmpcaCertificateAuthorityCertificate#certificate}
    */
    readonly certificate: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority_certificate#certificate_authority_arn AcmpcaCertificateAuthorityCertificate#certificate_authority_arn}
    */
    readonly certificateAuthorityArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority_certificate#certificate_chain AcmpcaCertificateAuthorityCertificate#certificate_chain}
    */
    readonly certificateChain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority_certificate#id AcmpcaCertificateAuthorityCertificate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority_certificate aws_acmpca_certificate_authority_certificate}
*/
export declare class AcmpcaCertificateAuthorityCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_acmpca_certificate_authority_certificate";
    /**
    * Generates CDKTF code for importing a AcmpcaCertificateAuthorityCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AcmpcaCertificateAuthorityCertificate to import
    * @param importFromId The id of the existing AcmpcaCertificateAuthorityCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AcmpcaCertificateAuthorityCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority_certificate aws_acmpca_certificate_authority_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AcmpcaCertificateAuthorityCertificateConfig
    */
    constructor(scope: Construct, id: string, config: AcmpcaCertificateAuthorityCertificateConfig);
    private _certificate?;
    get certificate(): string;
    set certificate(value: string);
    get certificateInput(): string | undefined;
    private _certificateAuthorityArn?;
    get certificateAuthorityArn(): string;
    set certificateAuthorityArn(value: string);
    get certificateAuthorityArnInput(): string | undefined;
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    resetCertificateChain(): void;
    get certificateChainInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
