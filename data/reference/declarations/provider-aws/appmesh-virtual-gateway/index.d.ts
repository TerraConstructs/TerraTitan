/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppmeshVirtualGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#id AppmeshVirtualGateway#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#mesh_name AppmeshVirtualGateway#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#mesh_owner AppmeshVirtualGateway#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#name AppmeshVirtualGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#tags AppmeshVirtualGateway#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#tags_all AppmeshVirtualGateway#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#spec AppmeshVirtualGateway#spec}
    */
    readonly spec: AppmeshVirtualGatewaySpec;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#private_key AppmeshVirtualGateway#private_key}
    */
    readonly privateKey: string;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile): any;
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToHclTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string | undefined;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    get privateKeyInput(): string | undefined;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds): any;
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToHclTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string | undefined;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate {
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}
    */
    readonly sds?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate): any;
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToHclTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate | undefined);
    private _file;
    get file(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference;
    putFile(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile | undefined;
    private _sds;
    get sds(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference;
    putSds(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds | undefined;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#exact AppmeshVirtualGateway#exact}
    */
    readonly exact: string[];
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any;
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined);
    private _exact?;
    get exact(): string[];
    set exact(value: string[]);
    get exactInput(): string[] | undefined;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#match AppmeshVirtualGateway#match}
    */
    readonly match: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any;
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined);
    private _match;
    get match(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference;
    putMatch(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): void;
    get matchInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#certificate_authority_arns AppmeshVirtualGateway#certificate_authority_arns}
    */
    readonly certificateAuthorityArns: string[];
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any;
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToHclTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined);
    private _certificateAuthorityArns?;
    get certificateAuthorityArns(): string[];
    set certificateAuthorityArns(value: string[]);
    get certificateAuthorityArnsInput(): string[] | undefined;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}
    */
    readonly certificateChain: string;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile): any;
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToHclTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string | undefined;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds): any;
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToHclTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string | undefined;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust {
    /**
    * acm block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#acm AppmeshVirtualGateway#acm}
    */
    readonly acm?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm;
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}
    */
    readonly sds?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust): any;
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToHclTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust | undefined);
    private _acm;
    get acm(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference;
    putAcm(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm): void;
    resetAcm(): void;
    get acmInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined;
    private _file;
    get file(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference;
    putFile(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined;
    private _sds;
    get sds(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference;
    putSds(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation {
    /**
    * subject_alternative_names block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;
    /**
    * trust block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#trust AppmeshVirtualGateway#trust}
    */
    readonly trust: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation): any;
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToHclTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation | undefined);
    private _subjectAlternativeNames;
    get subjectAlternativeNames(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference;
    putSubjectAlternativeNames(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): void;
    resetSubjectAlternativeNames(): void;
    get subjectAlternativeNamesInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined;
    private _trust;
    get trust(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference;
    putTrust(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust): void;
    get trustInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust | undefined;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#enforce AppmeshVirtualGateway#enforce}
    */
    readonly enforce?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#ports AppmeshVirtualGateway#ports}
    */
    readonly ports?: number[];
    /**
    * certificate block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#certificate AppmeshVirtualGateway#certificate}
    */
    readonly certificate?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate;
    /**
    * validation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#validation AppmeshVirtualGateway#validation}
    */
    readonly validation: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls): any;
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToHclTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls | undefined);
    private _enforce?;
    get enforce(): boolean | cdktf.IResolvable;
    set enforce(value: boolean | cdktf.IResolvable);
    resetEnforce(): void;
    get enforceInput(): boolean | cdktf.IResolvable | undefined;
    private _ports?;
    get ports(): number[];
    set ports(value: number[]);
    resetPorts(): void;
    get portsInput(): number[] | undefined;
    private _certificate;
    get certificate(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference;
    putCertificate(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate): void;
    resetCertificate(): void;
    get certificateInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate | undefined;
    private _validation;
    get validation(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference;
    putValidation(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation): void;
    get validationInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation | undefined;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy {
    /**
    * tls block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#tls AppmeshVirtualGateway#tls}
    */
    readonly tls?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy): any;
export declare function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToHclTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy | undefined);
    private _tls;
    get tls(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference;
    putTls(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls): void;
    resetTls(): void;
    get tlsInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls | undefined;
}
export interface AppmeshVirtualGatewaySpecBackendDefaults {
    /**
    * client_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#client_policy AppmeshVirtualGateway#client_policy}
    */
    readonly clientPolicy?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy;
}
export declare function appmeshVirtualGatewaySpecBackendDefaultsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsOutputReference | AppmeshVirtualGatewaySpecBackendDefaults): any;
export declare function appmeshVirtualGatewaySpecBackendDefaultsToHclTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsOutputReference | AppmeshVirtualGatewaySpecBackendDefaults): any;
export declare class AppmeshVirtualGatewaySpecBackendDefaultsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecBackendDefaults | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecBackendDefaults | undefined);
    private _clientPolicy;
    get clientPolicy(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference;
    putClientPolicy(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy): void;
    resetClientPolicy(): void;
    get clientPolicyInput(): AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy | undefined;
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#max_requests AppmeshVirtualGateway#max_requests}
    */
    readonly maxRequests: number;
}
export declare function appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference | AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc): any;
export declare function appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToHclTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference | AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc): any;
export declare class AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc | undefined);
    private _maxRequests?;
    get maxRequests(): number;
    set maxRequests(value: number);
    get maxRequestsInput(): number | undefined;
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPoolHttp {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#max_connections AppmeshVirtualGateway#max_connections}
    */
    readonly maxConnections: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#max_pending_requests AppmeshVirtualGateway#max_pending_requests}
    */
    readonly maxPendingRequests?: number;
}
export declare function appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference | AppmeshVirtualGatewaySpecListenerConnectionPoolHttp): any;
export declare function appmeshVirtualGatewaySpecListenerConnectionPoolHttpToHclTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference | AppmeshVirtualGatewaySpecListenerConnectionPoolHttp): any;
export declare class AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecListenerConnectionPoolHttp | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp | undefined);
    private _maxConnections?;
    get maxConnections(): number;
    set maxConnections(value: number);
    get maxConnectionsInput(): number | undefined;
    private _maxPendingRequests?;
    get maxPendingRequests(): number;
    set maxPendingRequests(value: number);
    resetMaxPendingRequests(): void;
    get maxPendingRequestsInput(): number | undefined;
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#max_requests AppmeshVirtualGateway#max_requests}
    */
    readonly maxRequests: number;
}
export declare function appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference | AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2): any;
export declare function appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToHclTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference | AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2): any;
export declare class AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 | undefined);
    private _maxRequests?;
    get maxRequests(): number;
    set maxRequests(value: number);
    get maxRequestsInput(): number | undefined;
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPool {
    /**
    * grpc block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#grpc AppmeshVirtualGateway#grpc}
    */
    readonly grpc?: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc;
    /**
    * http block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#http AppmeshVirtualGateway#http}
    */
    readonly http?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp;
    /**
    * http2 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#http2 AppmeshVirtualGateway#http2}
    */
    readonly http2?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2;
}
export declare function appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference | AppmeshVirtualGatewaySpecListenerConnectionPool): any;
export declare function appmeshVirtualGatewaySpecListenerConnectionPoolToHclTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference | AppmeshVirtualGatewaySpecListenerConnectionPool): any;
export declare class AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecListenerConnectionPool | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerConnectionPool | undefined);
    private _grpc;
    get grpc(): AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference;
    putGrpc(value: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc): void;
    resetGrpc(): void;
    get grpcInput(): AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc | undefined;
    private _http;
    get http(): AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference;
    putHttp(value: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp): void;
    resetHttp(): void;
    get httpInput(): AppmeshVirtualGatewaySpecListenerConnectionPoolHttp | undefined;
    private _http2;
    get http2(): AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference;
    putHttp2(value: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2): void;
    resetHttp2(): void;
    get http2Input(): AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 | undefined;
}
export interface AppmeshVirtualGatewaySpecListenerHealthCheck {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#healthy_threshold AppmeshVirtualGateway#healthy_threshold}
    */
    readonly healthyThreshold: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#interval_millis AppmeshVirtualGateway#interval_millis}
    */
    readonly intervalMillis: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#path AppmeshVirtualGateway#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#port AppmeshVirtualGateway#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#protocol AppmeshVirtualGateway#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#timeout_millis AppmeshVirtualGateway#timeout_millis}
    */
    readonly timeoutMillis: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#unhealthy_threshold AppmeshVirtualGateway#unhealthy_threshold}
    */
    readonly unhealthyThreshold: number;
}
export declare function appmeshVirtualGatewaySpecListenerHealthCheckToTerraform(struct?: AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference | AppmeshVirtualGatewaySpecListenerHealthCheck): any;
export declare function appmeshVirtualGatewaySpecListenerHealthCheckToHclTerraform(struct?: AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference | AppmeshVirtualGatewaySpecListenerHealthCheck): any;
export declare class AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecListenerHealthCheck | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerHealthCheck | undefined);
    private _healthyThreshold?;
    get healthyThreshold(): number;
    set healthyThreshold(value: number);
    get healthyThresholdInput(): number | undefined;
    private _intervalMillis?;
    get intervalMillis(): number;
    set intervalMillis(value: number);
    get intervalMillisInput(): number | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string | undefined;
    private _timeoutMillis?;
    get timeoutMillis(): number;
    set timeoutMillis(value: number);
    get timeoutMillisInput(): number | undefined;
    private _unhealthyThreshold?;
    get unhealthyThreshold(): number;
    set unhealthyThreshold(value: number);
    get unhealthyThresholdInput(): number | undefined;
}
export interface AppmeshVirtualGatewaySpecListenerPortMapping {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#port AppmeshVirtualGateway#port}
    */
    readonly port: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#protocol AppmeshVirtualGateway#protocol}
    */
    readonly protocol: string;
}
export declare function appmeshVirtualGatewaySpecListenerPortMappingToTerraform(struct?: AppmeshVirtualGatewaySpecListenerPortMappingOutputReference | AppmeshVirtualGatewaySpecListenerPortMapping): any;
export declare function appmeshVirtualGatewaySpecListenerPortMappingToHclTerraform(struct?: AppmeshVirtualGatewaySpecListenerPortMappingOutputReference | AppmeshVirtualGatewaySpecListenerPortMapping): any;
export declare class AppmeshVirtualGatewaySpecListenerPortMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecListenerPortMapping | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerPortMapping | undefined);
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string | undefined;
}
export interface AppmeshVirtualGatewaySpecListenerTlsCertificateAcm {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#certificate_arn AppmeshVirtualGateway#certificate_arn}
    */
    readonly certificateArn: string;
}
export declare function appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificateAcm): any;
export declare function appmeshVirtualGatewaySpecListenerTlsCertificateAcmToHclTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificateAcm): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsCertificateAcm | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm | undefined);
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    get certificateArnInput(): string | undefined;
}
export interface AppmeshVirtualGatewaySpecListenerTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#private_key AppmeshVirtualGateway#private_key}
    */
    readonly privateKey: string;
}
export declare function appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificateFile): any;
export declare function appmeshVirtualGatewaySpecListenerTlsCertificateFileToHclTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificateFile): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsCertificateFile | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsCertificateFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string | undefined;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    get privateKeyInput(): string | undefined;
}
export interface AppmeshVirtualGatewaySpecListenerTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificateSds): any;
export declare function appmeshVirtualGatewaySpecListenerTlsCertificateSdsToHclTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificateSds): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsCertificateSds | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsCertificateSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string | undefined;
}
export interface AppmeshVirtualGatewaySpecListenerTlsCertificate {
    /**
    * acm block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#acm AppmeshVirtualGateway#acm}
    */
    readonly acm?: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm;
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecListenerTlsCertificateFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}
    */
    readonly sds?: AppmeshVirtualGatewaySpecListenerTlsCertificateSds;
}
export declare function appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificate): any;
export declare function appmeshVirtualGatewaySpecListenerTlsCertificateToHclTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificate): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsCertificate | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsCertificate | undefined);
    private _acm;
    get acm(): AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference;
    putAcm(value: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm): void;
    resetAcm(): void;
    get acmInput(): AppmeshVirtualGatewaySpecListenerTlsCertificateAcm | undefined;
    private _file;
    get file(): AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference;
    putFile(value: AppmeshVirtualGatewaySpecListenerTlsCertificateFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualGatewaySpecListenerTlsCertificateFile | undefined;
    private _sds;
    get sds(): AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference;
    putSds(value: AppmeshVirtualGatewaySpecListenerTlsCertificateSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualGatewaySpecListenerTlsCertificateSds | undefined;
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#exact AppmeshVirtualGateway#exact}
    */
    readonly exact: string[];
}
export declare function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch): any;
export declare function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch | undefined);
    private _exact?;
    get exact(): string[];
    set exact(value: string[]);
    get exactInput(): string[] | undefined;
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames {
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#match AppmeshVirtualGateway#match}
    */
    readonly match: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch;
}
export declare function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames): any;
export declare function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToHclTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames | undefined);
    private _match;
    get match(): AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference;
    putMatch(value: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch): void;
    get matchInput(): AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch | undefined;
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}
    */
    readonly certificateChain: string;
}
export declare function appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile): any;
export declare function appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToHclTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string | undefined;
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds): any;
export declare function appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToHclTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string | undefined;
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrust {
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}
    */
    readonly sds?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds;
}
export declare function appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationTrust): any;
export declare function appmeshVirtualGatewaySpecListenerTlsValidationTrustToHclTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationTrust): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsValidationTrust | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsValidationTrust | undefined);
    private _file;
    get file(): AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference;
    putFile(value: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile | undefined;
    private _sds;
    get sds(): AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference;
    putSds(value: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds | undefined;
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidation {
    /**
    * subject_alternative_names block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames;
    /**
    * trust block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#trust AppmeshVirtualGateway#trust}
    */
    readonly trust: AppmeshVirtualGatewaySpecListenerTlsValidationTrust;
}
export declare function appmeshVirtualGatewaySpecListenerTlsValidationToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidation): any;
export declare function appmeshVirtualGatewaySpecListenerTlsValidationToHclTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidation): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTlsValidation | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTlsValidation | undefined);
    private _subjectAlternativeNames;
    get subjectAlternativeNames(): AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference;
    putSubjectAlternativeNames(value: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames): void;
    resetSubjectAlternativeNames(): void;
    get subjectAlternativeNamesInput(): AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames | undefined;
    private _trust;
    get trust(): AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference;
    putTrust(value: AppmeshVirtualGatewaySpecListenerTlsValidationTrust): void;
    get trustInput(): AppmeshVirtualGatewaySpecListenerTlsValidationTrust | undefined;
}
export interface AppmeshVirtualGatewaySpecListenerTls {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#mode AppmeshVirtualGateway#mode}
    */
    readonly mode: string;
    /**
    * certificate block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#certificate AppmeshVirtualGateway#certificate}
    */
    readonly certificate: AppmeshVirtualGatewaySpecListenerTlsCertificate;
    /**
    * validation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#validation AppmeshVirtualGateway#validation}
    */
    readonly validation?: AppmeshVirtualGatewaySpecListenerTlsValidation;
}
export declare function appmeshVirtualGatewaySpecListenerTlsToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsOutputReference | AppmeshVirtualGatewaySpecListenerTls): any;
export declare function appmeshVirtualGatewaySpecListenerTlsToHclTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsOutputReference | AppmeshVirtualGatewaySpecListenerTls): any;
export declare class AppmeshVirtualGatewaySpecListenerTlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecListenerTls | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListenerTls | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string | undefined;
    private _certificate;
    get certificate(): AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference;
    putCertificate(value: AppmeshVirtualGatewaySpecListenerTlsCertificate): void;
    get certificateInput(): AppmeshVirtualGatewaySpecListenerTlsCertificate | undefined;
    private _validation;
    get validation(): AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference;
    putValidation(value: AppmeshVirtualGatewaySpecListenerTlsValidation): void;
    resetValidation(): void;
    get validationInput(): AppmeshVirtualGatewaySpecListenerTlsValidation | undefined;
}
export interface AppmeshVirtualGatewaySpecListener {
    /**
    * connection_pool block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#connection_pool AppmeshVirtualGateway#connection_pool}
    */
    readonly connectionPool?: AppmeshVirtualGatewaySpecListenerConnectionPool;
    /**
    * health_check block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#health_check AppmeshVirtualGateway#health_check}
    */
    readonly healthCheck?: AppmeshVirtualGatewaySpecListenerHealthCheck;
    /**
    * port_mapping block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#port_mapping AppmeshVirtualGateway#port_mapping}
    */
    readonly portMapping: AppmeshVirtualGatewaySpecListenerPortMapping;
    /**
    * tls block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#tls AppmeshVirtualGateway#tls}
    */
    readonly tls?: AppmeshVirtualGatewaySpecListenerTls;
}
export declare function appmeshVirtualGatewaySpecListenerToTerraform(struct?: AppmeshVirtualGatewaySpecListener | cdktf.IResolvable): any;
export declare function appmeshVirtualGatewaySpecListenerToHclTerraform(struct?: AppmeshVirtualGatewaySpecListener | cdktf.IResolvable): any;
export declare class AppmeshVirtualGatewaySpecListenerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecListener | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecListener | cdktf.IResolvable | undefined);
    private _connectionPool;
    get connectionPool(): AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference;
    putConnectionPool(value: AppmeshVirtualGatewaySpecListenerConnectionPool): void;
    resetConnectionPool(): void;
    get connectionPoolInput(): AppmeshVirtualGatewaySpecListenerConnectionPool | undefined;
    private _healthCheck;
    get healthCheck(): AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference;
    putHealthCheck(value: AppmeshVirtualGatewaySpecListenerHealthCheck): void;
    resetHealthCheck(): void;
    get healthCheckInput(): AppmeshVirtualGatewaySpecListenerHealthCheck | undefined;
    private _portMapping;
    get portMapping(): AppmeshVirtualGatewaySpecListenerPortMappingOutputReference;
    putPortMapping(value: AppmeshVirtualGatewaySpecListenerPortMapping): void;
    get portMappingInput(): AppmeshVirtualGatewaySpecListenerPortMapping | undefined;
    private _tls;
    get tls(): AppmeshVirtualGatewaySpecListenerTlsOutputReference;
    putTls(value: AppmeshVirtualGatewaySpecListenerTls): void;
    resetTls(): void;
    get tlsInput(): AppmeshVirtualGatewaySpecListenerTls | undefined;
}
export declare class AppmeshVirtualGatewaySpecListenerList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshVirtualGatewaySpecListener[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshVirtualGatewaySpecListenerOutputReference;
}
export interface AppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#key AppmeshVirtualGateway#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#value AppmeshVirtualGateway#value}
    */
    readonly value: string;
}
export declare function appmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson | cdktf.IResolvable): any;
export declare function appmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonToHclTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson | cdktf.IResolvable): any;
export declare class AppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class AppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference;
}
export interface AppmeshVirtualGatewaySpecLoggingAccessLogFileFormat {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#text AppmeshVirtualGateway#text}
    */
    readonly text?: string;
    /**
    * json block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#json AppmeshVirtualGateway#json}
    */
    readonly json?: AppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson[] | cdktf.IResolvable;
}
export declare function appmeshVirtualGatewaySpecLoggingAccessLogFileFormatToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference | AppmeshVirtualGatewaySpecLoggingAccessLogFileFormat): any;
export declare function appmeshVirtualGatewaySpecLoggingAccessLogFileFormatToHclTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference | AppmeshVirtualGatewaySpecLoggingAccessLogFileFormat): any;
export declare class AppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecLoggingAccessLogFileFormat | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecLoggingAccessLogFileFormat | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    resetText(): void;
    get textInput(): string | undefined;
    private _json;
    get json(): AppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList;
    putJson(value: AppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson[] | cdktf.IResolvable): void;
    resetJson(): void;
    get jsonInput(): cdktf.IResolvable | AppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson[] | undefined;
}
export interface AppmeshVirtualGatewaySpecLoggingAccessLogFile {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#path AppmeshVirtualGateway#path}
    */
    readonly path: string;
    /**
    * format block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#format AppmeshVirtualGateway#format}
    */
    readonly format?: AppmeshVirtualGatewaySpecLoggingAccessLogFileFormat;
}
export declare function appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference | AppmeshVirtualGatewaySpecLoggingAccessLogFile): any;
export declare function appmeshVirtualGatewaySpecLoggingAccessLogFileToHclTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference | AppmeshVirtualGatewaySpecLoggingAccessLogFile): any;
export declare class AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecLoggingAccessLogFile | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecLoggingAccessLogFile | undefined);
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string | undefined;
    private _format;
    get format(): AppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference;
    putFormat(value: AppmeshVirtualGatewaySpecLoggingAccessLogFileFormat): void;
    resetFormat(): void;
    get formatInput(): AppmeshVirtualGatewaySpecLoggingAccessLogFileFormat | undefined;
}
export interface AppmeshVirtualGatewaySpecLoggingAccessLog {
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecLoggingAccessLogFile;
}
export declare function appmeshVirtualGatewaySpecLoggingAccessLogToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference | AppmeshVirtualGatewaySpecLoggingAccessLog): any;
export declare function appmeshVirtualGatewaySpecLoggingAccessLogToHclTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference | AppmeshVirtualGatewaySpecLoggingAccessLog): any;
export declare class AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecLoggingAccessLog | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecLoggingAccessLog | undefined);
    private _file;
    get file(): AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference;
    putFile(value: AppmeshVirtualGatewaySpecLoggingAccessLogFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualGatewaySpecLoggingAccessLogFile | undefined;
}
export interface AppmeshVirtualGatewaySpecLogging {
    /**
    * access_log block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#access_log AppmeshVirtualGateway#access_log}
    */
    readonly accessLog?: AppmeshVirtualGatewaySpecLoggingAccessLog;
}
export declare function appmeshVirtualGatewaySpecLoggingToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingOutputReference | AppmeshVirtualGatewaySpecLogging): any;
export declare function appmeshVirtualGatewaySpecLoggingToHclTerraform(struct?: AppmeshVirtualGatewaySpecLoggingOutputReference | AppmeshVirtualGatewaySpecLogging): any;
export declare class AppmeshVirtualGatewaySpecLoggingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpecLogging | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpecLogging | undefined);
    private _accessLog;
    get accessLog(): AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference;
    putAccessLog(value: AppmeshVirtualGatewaySpecLoggingAccessLog): void;
    resetAccessLog(): void;
    get accessLogInput(): AppmeshVirtualGatewaySpecLoggingAccessLog | undefined;
}
export interface AppmeshVirtualGatewaySpec {
    /**
    * backend_defaults block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#backend_defaults AppmeshVirtualGateway#backend_defaults}
    */
    readonly backendDefaults?: AppmeshVirtualGatewaySpecBackendDefaults;
    /**
    * listener block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#listener AppmeshVirtualGateway#listener}
    */
    readonly listener: AppmeshVirtualGatewaySpecListener[] | cdktf.IResolvable;
    /**
    * logging block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#logging AppmeshVirtualGateway#logging}
    */
    readonly logging?: AppmeshVirtualGatewaySpecLogging;
}
export declare function appmeshVirtualGatewaySpecToTerraform(struct?: AppmeshVirtualGatewaySpecOutputReference | AppmeshVirtualGatewaySpec): any;
export declare function appmeshVirtualGatewaySpecToHclTerraform(struct?: AppmeshVirtualGatewaySpecOutputReference | AppmeshVirtualGatewaySpec): any;
export declare class AppmeshVirtualGatewaySpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualGatewaySpec | undefined;
    set internalValue(value: AppmeshVirtualGatewaySpec | undefined);
    private _backendDefaults;
    get backendDefaults(): AppmeshVirtualGatewaySpecBackendDefaultsOutputReference;
    putBackendDefaults(value: AppmeshVirtualGatewaySpecBackendDefaults): void;
    resetBackendDefaults(): void;
    get backendDefaultsInput(): AppmeshVirtualGatewaySpecBackendDefaults | undefined;
    private _listener;
    get listener(): AppmeshVirtualGatewaySpecListenerList;
    putListener(value: AppmeshVirtualGatewaySpecListener[] | cdktf.IResolvable): void;
    get listenerInput(): cdktf.IResolvable | AppmeshVirtualGatewaySpecListener[] | undefined;
    private _logging;
    get logging(): AppmeshVirtualGatewaySpecLoggingOutputReference;
    putLogging(value: AppmeshVirtualGatewaySpecLogging): void;
    resetLogging(): void;
    get loggingInput(): AppmeshVirtualGatewaySpecLogging | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway aws_appmesh_virtual_gateway}
*/
export declare class AppmeshVirtualGateway extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appmesh_virtual_gateway";
    /**
    * Generates CDKTF code for importing a AppmeshVirtualGateway resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppmeshVirtualGateway to import
    * @param importFromId The id of the existing AppmeshVirtualGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppmeshVirtualGateway to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_gateway aws_appmesh_virtual_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualGatewayConfig
    */
    constructor(scope: Construct, id: string, config: AppmeshVirtualGatewayConfig);
    get arn(): string;
    get createdDate(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedDate(): string;
    private _meshName?;
    get meshName(): string;
    set meshName(value: string);
    get meshNameInput(): string | undefined;
    private _meshOwner?;
    get meshOwner(): string;
    set meshOwner(value: string);
    resetMeshOwner(): void;
    get meshOwnerInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get resourceOwner(): string;
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
    private _spec;
    get spec(): AppmeshVirtualGatewaySpecOutputReference;
    putSpec(value: AppmeshVirtualGatewaySpec): void;
    get specInput(): AppmeshVirtualGatewaySpec | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
