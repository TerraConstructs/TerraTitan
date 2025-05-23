/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppmeshVirtualNodeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#id AppmeshVirtualNode#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#mesh_name AppmeshVirtualNode#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#mesh_owner AppmeshVirtualNode#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#name AppmeshVirtualNode#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#tags AppmeshVirtualNode#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#tags_all AppmeshVirtualNode#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#spec AppmeshVirtualNode#spec}
    */
    readonly spec: AppmeshVirtualNodeSpec;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#private_key AppmeshVirtualNode#private_key}
    */
    readonly privateKey: string;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile): any;
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string | undefined;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    get privateKeyInput(): string | undefined;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds): any;
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string | undefined;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate {
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate): any;
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate | undefined);
    private _file;
    get file(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference;
    putFile(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile | undefined;
    private _sds;
    get sds(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference;
    putSds(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds | undefined;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#exact AppmeshVirtualNode#exact}
    */
    readonly exact: string[];
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch): any;
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined);
    private _exact?;
    get exact(): string[];
    set exact(value: string[]);
    get exactInput(): string[] | undefined;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames {
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#match AppmeshVirtualNode#match}
    */
    readonly match: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames): any;
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames | undefined);
    private _match;
    get match(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference;
    putMatch(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch): void;
    get matchInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#certificate_authority_arns AppmeshVirtualNode#certificate_authority_arns}
    */
    readonly certificateAuthorityArns: string[];
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm): any;
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm | undefined);
    private _certificateAuthorityArns?;
    get certificateAuthorityArns(): string[];
    set certificateAuthorityArns(value: string[]);
    get certificateAuthorityArnsInput(): string[] | undefined;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile): any;
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string | undefined;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds): any;
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string | undefined;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust {
    /**
    * acm block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#acm AppmeshVirtualNode#acm}
    */
    readonly acm?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm;
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust): any;
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust | undefined);
    private _acm;
    get acm(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference;
    putAcm(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm): void;
    resetAcm(): void;
    get acmInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm | undefined;
    private _file;
    get file(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference;
    putFile(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile | undefined;
    private _sds;
    get sds(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference;
    putSds(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds | undefined;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation {
    /**
    * subject_alternative_names block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames;
    /**
    * trust block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#trust AppmeshVirtualNode#trust}
    */
    readonly trust: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation): any;
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation | undefined);
    private _subjectAlternativeNames;
    get subjectAlternativeNames(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference;
    putSubjectAlternativeNames(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames): void;
    resetSubjectAlternativeNames(): void;
    get subjectAlternativeNamesInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames | undefined;
    private _trust;
    get trust(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference;
    putTrust(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust): void;
    get trustInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust | undefined;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#enforce AppmeshVirtualNode#enforce}
    */
    readonly enforce?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#ports AppmeshVirtualNode#ports}
    */
    readonly ports?: number[];
    /**
    * certificate block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#certificate AppmeshVirtualNode#certificate}
    */
    readonly certificate?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate;
    /**
    * validation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#validation AppmeshVirtualNode#validation}
    */
    readonly validation: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls): any;
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls | undefined);
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
    get certificate(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference;
    putCertificate(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate): void;
    resetCertificate(): void;
    get certificateInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate | undefined;
    private _validation;
    get validation(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference;
    putValidation(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation): void;
    get validationInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation | undefined;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy {
    /**
    * tls block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#tls AppmeshVirtualNode#tls}
    */
    readonly tls?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy): any;
export declare function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy | undefined);
    private _tls;
    get tls(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference;
    putTls(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls): void;
    resetTls(): void;
    get tlsInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls | undefined;
}
export interface AppmeshVirtualNodeSpecBackendVirtualService {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#virtual_service_name AppmeshVirtualNode#virtual_service_name}
    */
    readonly virtualServiceName: string;
    /**
    * client_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#client_policy AppmeshVirtualNode#client_policy}
    */
    readonly clientPolicy?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy;
}
export declare function appmeshVirtualNodeSpecBackendVirtualServiceToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference | AppmeshVirtualNodeSpecBackendVirtualService): any;
export declare function appmeshVirtualNodeSpecBackendVirtualServiceToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference | AppmeshVirtualNodeSpecBackendVirtualService): any;
export declare class AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendVirtualService | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendVirtualService | undefined);
    private _virtualServiceName?;
    get virtualServiceName(): string;
    set virtualServiceName(value: string);
    get virtualServiceNameInput(): string | undefined;
    private _clientPolicy;
    get clientPolicy(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference;
    putClientPolicy(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy): void;
    resetClientPolicy(): void;
    get clientPolicyInput(): AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy | undefined;
}
export interface AppmeshVirtualNodeSpecBackend {
    /**
    * virtual_service block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#virtual_service AppmeshVirtualNode#virtual_service}
    */
    readonly virtualService: AppmeshVirtualNodeSpecBackendVirtualService;
}
export declare function appmeshVirtualNodeSpecBackendToTerraform(struct?: AppmeshVirtualNodeSpecBackend | cdktf.IResolvable): any;
export declare function appmeshVirtualNodeSpecBackendToHclTerraform(struct?: AppmeshVirtualNodeSpecBackend | cdktf.IResolvable): any;
export declare class AppmeshVirtualNodeSpecBackendOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshVirtualNodeSpecBackend | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackend | cdktf.IResolvable | undefined);
    private _virtualService;
    get virtualService(): AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference;
    putVirtualService(value: AppmeshVirtualNodeSpecBackendVirtualService): void;
    get virtualServiceInput(): AppmeshVirtualNodeSpecBackendVirtualService | undefined;
}
export declare class AppmeshVirtualNodeSpecBackendList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshVirtualNodeSpecBackend[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshVirtualNodeSpecBackendOutputReference;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#private_key AppmeshVirtualNode#private_key}
    */
    readonly privateKey: string;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile): any;
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string | undefined;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    get privateKeyInput(): string | undefined;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds): any;
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string | undefined;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate {
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate): any;
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate | undefined);
    private _file;
    get file(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference;
    putFile(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile | undefined;
    private _sds;
    get sds(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference;
    putSds(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds | undefined;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#exact AppmeshVirtualNode#exact}
    */
    readonly exact: string[];
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any;
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined);
    private _exact?;
    get exact(): string[];
    set exact(value: string[]);
    get exactInput(): string[] | undefined;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#match AppmeshVirtualNode#match}
    */
    readonly match: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any;
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined);
    private _match;
    get match(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference;
    putMatch(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): void;
    get matchInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#certificate_authority_arns AppmeshVirtualNode#certificate_authority_arns}
    */
    readonly certificateAuthorityArns: string[];
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any;
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined);
    private _certificateAuthorityArns?;
    get certificateAuthorityArns(): string[];
    set certificateAuthorityArns(value: string[]);
    get certificateAuthorityArnsInput(): string[] | undefined;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile): any;
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string | undefined;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds): any;
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string | undefined;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust {
    /**
    * acm block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#acm AppmeshVirtualNode#acm}
    */
    readonly acm?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm;
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust): any;
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust | undefined);
    private _acm;
    get acm(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference;
    putAcm(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm): void;
    resetAcm(): void;
    get acmInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined;
    private _file;
    get file(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference;
    putFile(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined;
    private _sds;
    get sds(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference;
    putSds(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation {
    /**
    * subject_alternative_names block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;
    /**
    * trust block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#trust AppmeshVirtualNode#trust}
    */
    readonly trust: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation): any;
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation | undefined);
    private _subjectAlternativeNames;
    get subjectAlternativeNames(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference;
    putSubjectAlternativeNames(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): void;
    resetSubjectAlternativeNames(): void;
    get subjectAlternativeNamesInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined;
    private _trust;
    get trust(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference;
    putTrust(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust): void;
    get trustInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust | undefined;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#enforce AppmeshVirtualNode#enforce}
    */
    readonly enforce?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#ports AppmeshVirtualNode#ports}
    */
    readonly ports?: number[];
    /**
    * certificate block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#certificate AppmeshVirtualNode#certificate}
    */
    readonly certificate?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate;
    /**
    * validation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#validation AppmeshVirtualNode#validation}
    */
    readonly validation: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls): any;
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls | undefined);
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
    get certificate(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference;
    putCertificate(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate): void;
    resetCertificate(): void;
    get certificateInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate | undefined;
    private _validation;
    get validation(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference;
    putValidation(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation): void;
    get validationInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation | undefined;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicy {
    /**
    * tls block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#tls AppmeshVirtualNode#tls}
    */
    readonly tls?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicy): any;
export declare function appmeshVirtualNodeSpecBackendDefaultsClientPolicyToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicy): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicy | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy | undefined);
    private _tls;
    get tls(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference;
    putTls(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls): void;
    resetTls(): void;
    get tlsInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls | undefined;
}
export interface AppmeshVirtualNodeSpecBackendDefaults {
    /**
    * client_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#client_policy AppmeshVirtualNode#client_policy}
    */
    readonly clientPolicy?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy;
}
export declare function appmeshVirtualNodeSpecBackendDefaultsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsOutputReference | AppmeshVirtualNodeSpecBackendDefaults): any;
export declare function appmeshVirtualNodeSpecBackendDefaultsToHclTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsOutputReference | AppmeshVirtualNodeSpecBackendDefaults): any;
export declare class AppmeshVirtualNodeSpecBackendDefaultsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecBackendDefaults | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecBackendDefaults | undefined);
    private _clientPolicy;
    get clientPolicy(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference;
    putClientPolicy(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy): void;
    resetClientPolicy(): void;
    get clientPolicyInput(): AppmeshVirtualNodeSpecBackendDefaultsClientPolicy | undefined;
}
export interface AppmeshVirtualNodeSpecListenerConnectionPoolGrpc {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#max_requests AppmeshVirtualNode#max_requests}
    */
    readonly maxRequests: number;
}
export declare function appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference | AppmeshVirtualNodeSpecListenerConnectionPoolGrpc): any;
export declare function appmeshVirtualNodeSpecListenerConnectionPoolGrpcToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference | AppmeshVirtualNodeSpecListenerConnectionPoolGrpc): any;
export declare class AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerConnectionPoolGrpc | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc | undefined);
    private _maxRequests?;
    get maxRequests(): number;
    set maxRequests(value: number);
    get maxRequestsInput(): number | undefined;
}
export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#max_connections AppmeshVirtualNode#max_connections}
    */
    readonly maxConnections: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#max_pending_requests AppmeshVirtualNode#max_pending_requests}
    */
    readonly maxPendingRequests?: number;
}
export declare function appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp | cdktf.IResolvable): any;
export declare function appmeshVirtualNodeSpecListenerConnectionPoolHttpToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp | cdktf.IResolvable): any;
export declare class AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerConnectionPoolHttp | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerConnectionPoolHttp | cdktf.IResolvable | undefined);
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
export declare class AppmeshVirtualNodeSpecListenerConnectionPoolHttpList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference;
}
export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#max_requests AppmeshVirtualNode#max_requests}
    */
    readonly maxRequests: number;
}
export declare function appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 | cdktf.IResolvable): any;
export declare function appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 | cdktf.IResolvable): any;
export declare class AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 | cdktf.IResolvable | undefined);
    private _maxRequests?;
    get maxRequests(): number;
    set maxRequests(value: number);
    get maxRequestsInput(): number | undefined;
}
export declare class AppmeshVirtualNodeSpecListenerConnectionPoolHttp2List extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference;
}
export interface AppmeshVirtualNodeSpecListenerConnectionPoolTcp {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#max_connections AppmeshVirtualNode#max_connections}
    */
    readonly maxConnections: number;
}
export declare function appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolTcp | cdktf.IResolvable): any;
export declare function appmeshVirtualNodeSpecListenerConnectionPoolTcpToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolTcp | cdktf.IResolvable): any;
export declare class AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListenerConnectionPoolTcp | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerConnectionPoolTcp | cdktf.IResolvable | undefined);
    private _maxConnections?;
    get maxConnections(): number;
    set maxConnections(value: number);
    get maxConnectionsInput(): number | undefined;
}
export declare class AppmeshVirtualNodeSpecListenerConnectionPoolTcpList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshVirtualNodeSpecListenerConnectionPoolTcp[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference;
}
export interface AppmeshVirtualNodeSpecListenerConnectionPool {
    /**
    * grpc block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#grpc AppmeshVirtualNode#grpc}
    */
    readonly grpc?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc;
    /**
    * http block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#http AppmeshVirtualNode#http}
    */
    readonly http?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp[] | cdktf.IResolvable;
    /**
    * http2 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#http2 AppmeshVirtualNode#http2}
    */
    readonly http2?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2[] | cdktf.IResolvable;
    /**
    * tcp block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#tcp AppmeshVirtualNode#tcp}
    */
    readonly tcp?: AppmeshVirtualNodeSpecListenerConnectionPoolTcp[] | cdktf.IResolvable;
}
export declare function appmeshVirtualNodeSpecListenerConnectionPoolToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference | AppmeshVirtualNodeSpecListenerConnectionPool): any;
export declare function appmeshVirtualNodeSpecListenerConnectionPoolToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference | AppmeshVirtualNodeSpecListenerConnectionPool): any;
export declare class AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerConnectionPool | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerConnectionPool | undefined);
    private _grpc;
    get grpc(): AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference;
    putGrpc(value: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc): void;
    resetGrpc(): void;
    get grpcInput(): AppmeshVirtualNodeSpecListenerConnectionPoolGrpc | undefined;
    private _http;
    get http(): AppmeshVirtualNodeSpecListenerConnectionPoolHttpList;
    putHttp(value: AppmeshVirtualNodeSpecListenerConnectionPoolHttp[] | cdktf.IResolvable): void;
    resetHttp(): void;
    get httpInput(): cdktf.IResolvable | AppmeshVirtualNodeSpecListenerConnectionPoolHttp[] | undefined;
    private _http2;
    get http2(): AppmeshVirtualNodeSpecListenerConnectionPoolHttp2List;
    putHttp2(value: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2[] | cdktf.IResolvable): void;
    resetHttp2(): void;
    get http2Input(): cdktf.IResolvable | AppmeshVirtualNodeSpecListenerConnectionPoolHttp2[] | undefined;
    private _tcp;
    get tcp(): AppmeshVirtualNodeSpecListenerConnectionPoolTcpList;
    putTcp(value: AppmeshVirtualNodeSpecListenerConnectionPoolTcp[] | cdktf.IResolvable): void;
    resetTcp(): void;
    get tcpInput(): cdktf.IResolvable | AppmeshVirtualNodeSpecListenerConnectionPoolTcp[] | undefined;
}
export interface AppmeshVirtualNodeSpecListenerHealthCheck {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#healthy_threshold AppmeshVirtualNode#healthy_threshold}
    */
    readonly healthyThreshold: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#interval_millis AppmeshVirtualNode#interval_millis}
    */
    readonly intervalMillis: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#path AppmeshVirtualNode#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#port AppmeshVirtualNode#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#protocol AppmeshVirtualNode#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#timeout_millis AppmeshVirtualNode#timeout_millis}
    */
    readonly timeoutMillis: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#unhealthy_threshold AppmeshVirtualNode#unhealthy_threshold}
    */
    readonly unhealthyThreshold: number;
}
export declare function appmeshVirtualNodeSpecListenerHealthCheckToTerraform(struct?: AppmeshVirtualNodeSpecListenerHealthCheckOutputReference | AppmeshVirtualNodeSpecListenerHealthCheck): any;
export declare function appmeshVirtualNodeSpecListenerHealthCheckToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerHealthCheckOutputReference | AppmeshVirtualNodeSpecListenerHealthCheck): any;
export declare class AppmeshVirtualNodeSpecListenerHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerHealthCheck | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerHealthCheck | undefined);
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
export interface AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
    */
    readonly value: number;
}
export declare function appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration): any;
export declare function appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration): any;
export declare class AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface AppmeshVirtualNodeSpecListenerOutlierDetectionInterval {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
    */
    readonly value: number;
}
export declare function appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetectionInterval): any;
export declare function appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetectionInterval): any;
export declare class AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerOutlierDetectionInterval | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface AppmeshVirtualNodeSpecListenerOutlierDetection {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#max_ejection_percent AppmeshVirtualNode#max_ejection_percent}
    */
    readonly maxEjectionPercent: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#max_server_errors AppmeshVirtualNode#max_server_errors}
    */
    readonly maxServerErrors: number;
    /**
    * base_ejection_duration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#base_ejection_duration AppmeshVirtualNode#base_ejection_duration}
    */
    readonly baseEjectionDuration: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration;
    /**
    * interval block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#interval AppmeshVirtualNode#interval}
    */
    readonly interval: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval;
}
export declare function appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetection): any;
export declare function appmeshVirtualNodeSpecListenerOutlierDetectionToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetection): any;
export declare class AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerOutlierDetection | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerOutlierDetection | undefined);
    private _maxEjectionPercent?;
    get maxEjectionPercent(): number;
    set maxEjectionPercent(value: number);
    get maxEjectionPercentInput(): number | undefined;
    private _maxServerErrors?;
    get maxServerErrors(): number;
    set maxServerErrors(value: number);
    get maxServerErrorsInput(): number | undefined;
    private _baseEjectionDuration;
    get baseEjectionDuration(): AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference;
    putBaseEjectionDuration(value: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration): void;
    get baseEjectionDurationInput(): AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration | undefined;
    private _interval;
    get interval(): AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference;
    putInterval(value: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval): void;
    get intervalInput(): AppmeshVirtualNodeSpecListenerOutlierDetectionInterval | undefined;
}
export interface AppmeshVirtualNodeSpecListenerPortMapping {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#port AppmeshVirtualNode#port}
    */
    readonly port: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#protocol AppmeshVirtualNode#protocol}
    */
    readonly protocol: string;
}
export declare function appmeshVirtualNodeSpecListenerPortMappingToTerraform(struct?: AppmeshVirtualNodeSpecListenerPortMappingOutputReference | AppmeshVirtualNodeSpecListenerPortMapping): any;
export declare function appmeshVirtualNodeSpecListenerPortMappingToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerPortMappingOutputReference | AppmeshVirtualNodeSpecListenerPortMapping): any;
export declare class AppmeshVirtualNodeSpecListenerPortMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerPortMapping | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerPortMapping | undefined);
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
    */
    readonly value: number;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle): any;
export declare function appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
    */
    readonly value: number;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest): any;
export declare function appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutGrpc {
    /**
    * idle block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#idle AppmeshVirtualNode#idle}
    */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle;
    /**
    * per_request block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#per_request AppmeshVirtualNode#per_request}
    */
    readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpc): any;
export declare function appmeshVirtualNodeSpecListenerTimeoutGrpcToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpc): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutGrpc | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutGrpc | undefined);
    private _idle;
    get idle(): AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference;
    putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle): void;
    resetIdle(): void;
    get idleInput(): AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle | undefined;
    private _perRequest;
    get perRequest(): AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference;
    putPerRequest(value: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest): void;
    resetPerRequest(): void;
    get perRequestInput(): AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttpIdle {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
    */
    readonly value: number;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttpIdle): any;
export declare function appmeshVirtualNodeSpecListenerTimeoutHttpIdleToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttpIdle): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutHttpIdle | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
    */
    readonly value: number;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest): any;
export declare function appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp {
    /**
    * idle block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#idle AppmeshVirtualNode#idle}
    */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle;
    /**
    * per_request block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#per_request AppmeshVirtualNode#per_request}
    */
    readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp): any;
export declare function appmeshVirtualNodeSpecListenerTimeoutHttpToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutHttp | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutHttp | undefined);
    private _idle;
    get idle(): AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference;
    putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle): void;
    resetIdle(): void;
    get idleInput(): AppmeshVirtualNodeSpecListenerTimeoutHttpIdle | undefined;
    private _perRequest;
    get perRequest(): AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference;
    putPerRequest(value: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest): void;
    resetPerRequest(): void;
    get perRequestInput(): AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
    */
    readonly value: number;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle): any;
export declare function appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
    */
    readonly value: number;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest): any;
export declare function appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2 {
    /**
    * idle block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#idle AppmeshVirtualNode#idle}
    */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle;
    /**
    * per_request block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#per_request AppmeshVirtualNode#per_request}
    */
    readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2): any;
export declare function appmeshVirtualNodeSpecListenerTimeoutHttp2ToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutHttp2 | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2 | undefined);
    private _idle;
    get idle(): AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference;
    putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle): void;
    resetIdle(): void;
    get idleInput(): AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle | undefined;
    private _perRequest;
    get perRequest(): AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference;
    putPerRequest(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest): void;
    resetPerRequest(): void;
    get perRequestInput(): AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutTcpIdle {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
    */
    readonly value: number;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutTcpIdle): any;
export declare function appmeshVirtualNodeSpecListenerTimeoutTcpIdleToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutTcpIdle): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutTcpIdle | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutTcp {
    /**
    * idle block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#idle AppmeshVirtualNode#idle}
    */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference | AppmeshVirtualNodeSpecListenerTimeoutTcp): any;
export declare function appmeshVirtualNodeSpecListenerTimeoutTcpToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference | AppmeshVirtualNodeSpecListenerTimeoutTcp): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeoutTcp | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeoutTcp | undefined);
    private _idle;
    get idle(): AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference;
    putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle): void;
    resetIdle(): void;
    get idleInput(): AppmeshVirtualNodeSpecListenerTimeoutTcpIdle | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTimeout {
    /**
    * grpc block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#grpc AppmeshVirtualNode#grpc}
    */
    readonly grpc?: AppmeshVirtualNodeSpecListenerTimeoutGrpc;
    /**
    * http block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#http AppmeshVirtualNode#http}
    */
    readonly http?: AppmeshVirtualNodeSpecListenerTimeoutHttp;
    /**
    * http2 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#http2 AppmeshVirtualNode#http2}
    */
    readonly http2?: AppmeshVirtualNodeSpecListenerTimeoutHttp2;
    /**
    * tcp block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#tcp AppmeshVirtualNode#tcp}
    */
    readonly tcp?: AppmeshVirtualNodeSpecListenerTimeoutTcp;
}
export declare function appmeshVirtualNodeSpecListenerTimeoutToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutOutputReference | AppmeshVirtualNodeSpecListenerTimeout): any;
export declare function appmeshVirtualNodeSpecListenerTimeoutToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutOutputReference | AppmeshVirtualNodeSpecListenerTimeout): any;
export declare class AppmeshVirtualNodeSpecListenerTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTimeout | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTimeout | undefined);
    private _grpc;
    get grpc(): AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference;
    putGrpc(value: AppmeshVirtualNodeSpecListenerTimeoutGrpc): void;
    resetGrpc(): void;
    get grpcInput(): AppmeshVirtualNodeSpecListenerTimeoutGrpc | undefined;
    private _http;
    get http(): AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference;
    putHttp(value: AppmeshVirtualNodeSpecListenerTimeoutHttp): void;
    resetHttp(): void;
    get httpInput(): AppmeshVirtualNodeSpecListenerTimeoutHttp | undefined;
    private _http2;
    get http2(): AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference;
    putHttp2(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2): void;
    resetHttp2(): void;
    get http2Input(): AppmeshVirtualNodeSpecListenerTimeoutHttp2 | undefined;
    private _tcp;
    get tcp(): AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference;
    putTcp(value: AppmeshVirtualNodeSpecListenerTimeoutTcp): void;
    resetTcp(): void;
    get tcpInput(): AppmeshVirtualNodeSpecListenerTimeoutTcp | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTlsCertificateAcm {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#certificate_arn AppmeshVirtualNode#certificate_arn}
    */
    readonly certificateArn: string;
}
export declare function appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateAcm): any;
export declare function appmeshVirtualNodeSpecListenerTlsCertificateAcmToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateAcm): any;
export declare class AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsCertificateAcm | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsCertificateAcm | undefined);
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    get certificateArnInput(): string | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#private_key AppmeshVirtualNode#private_key}
    */
    readonly privateKey: string;
}
export declare function appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateFile): any;
export declare function appmeshVirtualNodeSpecListenerTlsCertificateFileToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateFile): any;
export declare class AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsCertificateFile | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsCertificateFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string | undefined;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    get privateKeyInput(): string | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateSds): any;
export declare function appmeshVirtualNodeSpecListenerTlsCertificateSdsToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateSds): any;
export declare class AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsCertificateSds | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsCertificateSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTlsCertificate {
    /**
    * acm block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#acm AppmeshVirtualNode#acm}
    */
    readonly acm?: AppmeshVirtualNodeSpecListenerTlsCertificateAcm;
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecListenerTlsCertificateFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecListenerTlsCertificateSds;
}
export declare function appmeshVirtualNodeSpecListenerTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificate): any;
export declare function appmeshVirtualNodeSpecListenerTlsCertificateToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificate): any;
export declare class AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsCertificate | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsCertificate | undefined);
    private _acm;
    get acm(): AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference;
    putAcm(value: AppmeshVirtualNodeSpecListenerTlsCertificateAcm): void;
    resetAcm(): void;
    get acmInput(): AppmeshVirtualNodeSpecListenerTlsCertificateAcm | undefined;
    private _file;
    get file(): AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference;
    putFile(value: AppmeshVirtualNodeSpecListenerTlsCertificateFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualNodeSpecListenerTlsCertificateFile | undefined;
    private _sds;
    get sds(): AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference;
    putSds(value: AppmeshVirtualNodeSpecListenerTlsCertificateSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualNodeSpecListenerTlsCertificateSds | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#exact AppmeshVirtualNode#exact}
    */
    readonly exact: string[];
}
export declare function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch): any;
export declare function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch): any;
export declare class AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch | undefined);
    private _exact?;
    get exact(): string[];
    set exact(value: string[]);
    get exactInput(): string[] | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames {
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#match AppmeshVirtualNode#match}
    */
    readonly match: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch;
}
export declare function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames): any;
export declare function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames): any;
export declare class AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames | undefined);
    private _match;
    get match(): AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference;
    putMatch(value: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch): void;
    get matchInput(): AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
}
export declare function appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrustFile): any;
export declare function appmeshVirtualNodeSpecListenerTlsValidationTrustFileToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrustFile): any;
export declare class AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsValidationTrustFile | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile | undefined);
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    get certificateChainInput(): string | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
}
export declare function appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrustSds): any;
export declare function appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrustSds): any;
export declare class AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsValidationTrustSds | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds | undefined);
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationTrust {
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile;
    /**
    * sds block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds;
}
export declare function appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrust): any;
export declare function appmeshVirtualNodeSpecListenerTlsValidationTrustToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrust): any;
export declare class AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsValidationTrust | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsValidationTrust | undefined);
    private _file;
    get file(): AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference;
    putFile(value: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualNodeSpecListenerTlsValidationTrustFile | undefined;
    private _sds;
    get sds(): AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference;
    putSds(value: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds): void;
    resetSds(): void;
    get sdsInput(): AppmeshVirtualNodeSpecListenerTlsValidationTrustSds | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTlsValidation {
    /**
    * subject_alternative_names block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames;
    /**
    * trust block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#trust AppmeshVirtualNode#trust}
    */
    readonly trust: AppmeshVirtualNodeSpecListenerTlsValidationTrust;
}
export declare function appmeshVirtualNodeSpecListenerTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationOutputReference | AppmeshVirtualNodeSpecListenerTlsValidation): any;
export declare function appmeshVirtualNodeSpecListenerTlsValidationToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationOutputReference | AppmeshVirtualNodeSpecListenerTlsValidation): any;
export declare class AppmeshVirtualNodeSpecListenerTlsValidationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTlsValidation | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTlsValidation | undefined);
    private _subjectAlternativeNames;
    get subjectAlternativeNames(): AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference;
    putSubjectAlternativeNames(value: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames): void;
    resetSubjectAlternativeNames(): void;
    get subjectAlternativeNamesInput(): AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames | undefined;
    private _trust;
    get trust(): AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference;
    putTrust(value: AppmeshVirtualNodeSpecListenerTlsValidationTrust): void;
    get trustInput(): AppmeshVirtualNodeSpecListenerTlsValidationTrust | undefined;
}
export interface AppmeshVirtualNodeSpecListenerTls {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#mode AppmeshVirtualNode#mode}
    */
    readonly mode: string;
    /**
    * certificate block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#certificate AppmeshVirtualNode#certificate}
    */
    readonly certificate: AppmeshVirtualNodeSpecListenerTlsCertificate;
    /**
    * validation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#validation AppmeshVirtualNode#validation}
    */
    readonly validation?: AppmeshVirtualNodeSpecListenerTlsValidation;
}
export declare function appmeshVirtualNodeSpecListenerTlsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsOutputReference | AppmeshVirtualNodeSpecListenerTls): any;
export declare function appmeshVirtualNodeSpecListenerTlsToHclTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsOutputReference | AppmeshVirtualNodeSpecListenerTls): any;
export declare class AppmeshVirtualNodeSpecListenerTlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecListenerTls | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListenerTls | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string | undefined;
    private _certificate;
    get certificate(): AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference;
    putCertificate(value: AppmeshVirtualNodeSpecListenerTlsCertificate): void;
    get certificateInput(): AppmeshVirtualNodeSpecListenerTlsCertificate | undefined;
    private _validation;
    get validation(): AppmeshVirtualNodeSpecListenerTlsValidationOutputReference;
    putValidation(value: AppmeshVirtualNodeSpecListenerTlsValidation): void;
    resetValidation(): void;
    get validationInput(): AppmeshVirtualNodeSpecListenerTlsValidation | undefined;
}
export interface AppmeshVirtualNodeSpecListener {
    /**
    * connection_pool block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#connection_pool AppmeshVirtualNode#connection_pool}
    */
    readonly connectionPool?: AppmeshVirtualNodeSpecListenerConnectionPool;
    /**
    * health_check block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#health_check AppmeshVirtualNode#health_check}
    */
    readonly healthCheck?: AppmeshVirtualNodeSpecListenerHealthCheck;
    /**
    * outlier_detection block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#outlier_detection AppmeshVirtualNode#outlier_detection}
    */
    readonly outlierDetection?: AppmeshVirtualNodeSpecListenerOutlierDetection;
    /**
    * port_mapping block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#port_mapping AppmeshVirtualNode#port_mapping}
    */
    readonly portMapping: AppmeshVirtualNodeSpecListenerPortMapping;
    /**
    * timeout block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#timeout AppmeshVirtualNode#timeout}
    */
    readonly timeout?: AppmeshVirtualNodeSpecListenerTimeout;
    /**
    * tls block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#tls AppmeshVirtualNode#tls}
    */
    readonly tls?: AppmeshVirtualNodeSpecListenerTls;
}
export declare function appmeshVirtualNodeSpecListenerToTerraform(struct?: AppmeshVirtualNodeSpecListener | cdktf.IResolvable): any;
export declare function appmeshVirtualNodeSpecListenerToHclTerraform(struct?: AppmeshVirtualNodeSpecListener | cdktf.IResolvable): any;
export declare class AppmeshVirtualNodeSpecListenerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshVirtualNodeSpecListener | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecListener | cdktf.IResolvable | undefined);
    private _connectionPool;
    get connectionPool(): AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference;
    putConnectionPool(value: AppmeshVirtualNodeSpecListenerConnectionPool): void;
    resetConnectionPool(): void;
    get connectionPoolInput(): AppmeshVirtualNodeSpecListenerConnectionPool | undefined;
    private _healthCheck;
    get healthCheck(): AppmeshVirtualNodeSpecListenerHealthCheckOutputReference;
    putHealthCheck(value: AppmeshVirtualNodeSpecListenerHealthCheck): void;
    resetHealthCheck(): void;
    get healthCheckInput(): AppmeshVirtualNodeSpecListenerHealthCheck | undefined;
    private _outlierDetection;
    get outlierDetection(): AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference;
    putOutlierDetection(value: AppmeshVirtualNodeSpecListenerOutlierDetection): void;
    resetOutlierDetection(): void;
    get outlierDetectionInput(): AppmeshVirtualNodeSpecListenerOutlierDetection | undefined;
    private _portMapping;
    get portMapping(): AppmeshVirtualNodeSpecListenerPortMappingOutputReference;
    putPortMapping(value: AppmeshVirtualNodeSpecListenerPortMapping): void;
    get portMappingInput(): AppmeshVirtualNodeSpecListenerPortMapping | undefined;
    private _timeout;
    get timeout(): AppmeshVirtualNodeSpecListenerTimeoutOutputReference;
    putTimeout(value: AppmeshVirtualNodeSpecListenerTimeout): void;
    resetTimeout(): void;
    get timeoutInput(): AppmeshVirtualNodeSpecListenerTimeout | undefined;
    private _tls;
    get tls(): AppmeshVirtualNodeSpecListenerTlsOutputReference;
    putTls(value: AppmeshVirtualNodeSpecListenerTls): void;
    resetTls(): void;
    get tlsInput(): AppmeshVirtualNodeSpecListenerTls | undefined;
}
export declare class AppmeshVirtualNodeSpecListenerList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshVirtualNodeSpecListener[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshVirtualNodeSpecListenerOutputReference;
}
export interface AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#key AppmeshVirtualNode#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#value AppmeshVirtualNode#value}
    */
    readonly value: string;
}
export declare function appmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson | cdktf.IResolvable): any;
export declare function appmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonToHclTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson | cdktf.IResolvable): any;
export declare class AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonOutputReference;
}
export interface AppmeshVirtualNodeSpecLoggingAccessLogFileFormat {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#text AppmeshVirtualNode#text}
    */
    readonly text?: string;
    /**
    * json block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#json AppmeshVirtualNode#json}
    */
    readonly json?: AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson[] | cdktf.IResolvable;
}
export declare function appmeshVirtualNodeSpecLoggingAccessLogFileFormatToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogFileFormatOutputReference | AppmeshVirtualNodeSpecLoggingAccessLogFileFormat): any;
export declare function appmeshVirtualNodeSpecLoggingAccessLogFileFormatToHclTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogFileFormatOutputReference | AppmeshVirtualNodeSpecLoggingAccessLogFileFormat): any;
export declare class AppmeshVirtualNodeSpecLoggingAccessLogFileFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecLoggingAccessLogFileFormat | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecLoggingAccessLogFileFormat | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    resetText(): void;
    get textInput(): string | undefined;
    private _json;
    get json(): AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonList;
    putJson(value: AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson[] | cdktf.IResolvable): void;
    resetJson(): void;
    get jsonInput(): cdktf.IResolvable | AppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson[] | undefined;
}
export interface AppmeshVirtualNodeSpecLoggingAccessLogFile {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#path AppmeshVirtualNode#path}
    */
    readonly path: string;
    /**
    * format block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#format AppmeshVirtualNode#format}
    */
    readonly format?: AppmeshVirtualNodeSpecLoggingAccessLogFileFormat;
}
export declare function appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference | AppmeshVirtualNodeSpecLoggingAccessLogFile): any;
export declare function appmeshVirtualNodeSpecLoggingAccessLogFileToHclTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference | AppmeshVirtualNodeSpecLoggingAccessLogFile): any;
export declare class AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecLoggingAccessLogFile | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecLoggingAccessLogFile | undefined);
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string | undefined;
    private _format;
    get format(): AppmeshVirtualNodeSpecLoggingAccessLogFileFormatOutputReference;
    putFormat(value: AppmeshVirtualNodeSpecLoggingAccessLogFileFormat): void;
    resetFormat(): void;
    get formatInput(): AppmeshVirtualNodeSpecLoggingAccessLogFileFormat | undefined;
}
export interface AppmeshVirtualNodeSpecLoggingAccessLog {
    /**
    * file block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecLoggingAccessLogFile;
}
export declare function appmeshVirtualNodeSpecLoggingAccessLogToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogOutputReference | AppmeshVirtualNodeSpecLoggingAccessLog): any;
export declare function appmeshVirtualNodeSpecLoggingAccessLogToHclTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogOutputReference | AppmeshVirtualNodeSpecLoggingAccessLog): any;
export declare class AppmeshVirtualNodeSpecLoggingAccessLogOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecLoggingAccessLog | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecLoggingAccessLog | undefined);
    private _file;
    get file(): AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference;
    putFile(value: AppmeshVirtualNodeSpecLoggingAccessLogFile): void;
    resetFile(): void;
    get fileInput(): AppmeshVirtualNodeSpecLoggingAccessLogFile | undefined;
}
export interface AppmeshVirtualNodeSpecLogging {
    /**
    * access_log block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#access_log AppmeshVirtualNode#access_log}
    */
    readonly accessLog?: AppmeshVirtualNodeSpecLoggingAccessLog;
}
export declare function appmeshVirtualNodeSpecLoggingToTerraform(struct?: AppmeshVirtualNodeSpecLoggingOutputReference | AppmeshVirtualNodeSpecLogging): any;
export declare function appmeshVirtualNodeSpecLoggingToHclTerraform(struct?: AppmeshVirtualNodeSpecLoggingOutputReference | AppmeshVirtualNodeSpecLogging): any;
export declare class AppmeshVirtualNodeSpecLoggingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecLogging | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecLogging | undefined);
    private _accessLog;
    get accessLog(): AppmeshVirtualNodeSpecLoggingAccessLogOutputReference;
    putAccessLog(value: AppmeshVirtualNodeSpecLoggingAccessLog): void;
    resetAccessLog(): void;
    get accessLogInput(): AppmeshVirtualNodeSpecLoggingAccessLog | undefined;
}
export interface AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#attributes AppmeshVirtualNode#attributes}
    */
    readonly attributes?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#namespace_name AppmeshVirtualNode#namespace_name}
    */
    readonly namespaceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#service_name AppmeshVirtualNode#service_name}
    */
    readonly serviceName: string;
}
export declare function appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference | AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap): any;
export declare function appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToHclTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference | AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap): any;
export declare class AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap | undefined);
    private _attributes?;
    get attributes(): {
        [key: string]: string;
    };
    set attributes(value: {
        [key: string]: string;
    });
    resetAttributes(): void;
    get attributesInput(): {
        [key: string]: string;
    } | undefined;
    private _namespaceName?;
    get namespaceName(): string;
    set namespaceName(value: string);
    get namespaceNameInput(): string | undefined;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string | undefined;
}
export interface AppmeshVirtualNodeSpecServiceDiscoveryDns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#hostname AppmeshVirtualNode#hostname}
    */
    readonly hostname: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#ip_preference AppmeshVirtualNode#ip_preference}
    */
    readonly ipPreference?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#response_type AppmeshVirtualNode#response_type}
    */
    readonly responseType?: string;
}
export declare function appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference | AppmeshVirtualNodeSpecServiceDiscoveryDns): any;
export declare function appmeshVirtualNodeSpecServiceDiscoveryDnsToHclTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference | AppmeshVirtualNodeSpecServiceDiscoveryDns): any;
export declare class AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecServiceDiscoveryDns | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecServiceDiscoveryDns | undefined);
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    get hostnameInput(): string | undefined;
    private _ipPreference?;
    get ipPreference(): string;
    set ipPreference(value: string);
    resetIpPreference(): void;
    get ipPreferenceInput(): string | undefined;
    private _responseType?;
    get responseType(): string;
    set responseType(value: string);
    resetResponseType(): void;
    get responseTypeInput(): string | undefined;
}
export interface AppmeshVirtualNodeSpecServiceDiscovery {
    /**
    * aws_cloud_map block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#aws_cloud_map AppmeshVirtualNode#aws_cloud_map}
    */
    readonly awsCloudMap?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap;
    /**
    * dns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#dns AppmeshVirtualNode#dns}
    */
    readonly dns?: AppmeshVirtualNodeSpecServiceDiscoveryDns;
}
export declare function appmeshVirtualNodeSpecServiceDiscoveryToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryOutputReference | AppmeshVirtualNodeSpecServiceDiscovery): any;
export declare function appmeshVirtualNodeSpecServiceDiscoveryToHclTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryOutputReference | AppmeshVirtualNodeSpecServiceDiscovery): any;
export declare class AppmeshVirtualNodeSpecServiceDiscoveryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpecServiceDiscovery | undefined;
    set internalValue(value: AppmeshVirtualNodeSpecServiceDiscovery | undefined);
    private _awsCloudMap;
    get awsCloudMap(): AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference;
    putAwsCloudMap(value: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap): void;
    resetAwsCloudMap(): void;
    get awsCloudMapInput(): AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap | undefined;
    private _dns;
    get dns(): AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference;
    putDns(value: AppmeshVirtualNodeSpecServiceDiscoveryDns): void;
    resetDns(): void;
    get dnsInput(): AppmeshVirtualNodeSpecServiceDiscoveryDns | undefined;
}
export interface AppmeshVirtualNodeSpec {
    /**
    * backend block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#backend AppmeshVirtualNode#backend}
    */
    readonly backend?: AppmeshVirtualNodeSpecBackend[] | cdktf.IResolvable;
    /**
    * backend_defaults block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#backend_defaults AppmeshVirtualNode#backend_defaults}
    */
    readonly backendDefaults?: AppmeshVirtualNodeSpecBackendDefaults;
    /**
    * listener block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#listener AppmeshVirtualNode#listener}
    */
    readonly listener?: AppmeshVirtualNodeSpecListener[] | cdktf.IResolvable;
    /**
    * logging block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#logging AppmeshVirtualNode#logging}
    */
    readonly logging?: AppmeshVirtualNodeSpecLogging;
    /**
    * service_discovery block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#service_discovery AppmeshVirtualNode#service_discovery}
    */
    readonly serviceDiscovery?: AppmeshVirtualNodeSpecServiceDiscovery;
}
export declare function appmeshVirtualNodeSpecToTerraform(struct?: AppmeshVirtualNodeSpecOutputReference | AppmeshVirtualNodeSpec): any;
export declare function appmeshVirtualNodeSpecToHclTerraform(struct?: AppmeshVirtualNodeSpecOutputReference | AppmeshVirtualNodeSpec): any;
export declare class AppmeshVirtualNodeSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualNodeSpec | undefined;
    set internalValue(value: AppmeshVirtualNodeSpec | undefined);
    private _backend;
    get backend(): AppmeshVirtualNodeSpecBackendList;
    putBackend(value: AppmeshVirtualNodeSpecBackend[] | cdktf.IResolvable): void;
    resetBackend(): void;
    get backendInput(): cdktf.IResolvable | AppmeshVirtualNodeSpecBackend[] | undefined;
    private _backendDefaults;
    get backendDefaults(): AppmeshVirtualNodeSpecBackendDefaultsOutputReference;
    putBackendDefaults(value: AppmeshVirtualNodeSpecBackendDefaults): void;
    resetBackendDefaults(): void;
    get backendDefaultsInput(): AppmeshVirtualNodeSpecBackendDefaults | undefined;
    private _listener;
    get listener(): AppmeshVirtualNodeSpecListenerList;
    putListener(value: AppmeshVirtualNodeSpecListener[] | cdktf.IResolvable): void;
    resetListener(): void;
    get listenerInput(): cdktf.IResolvable | AppmeshVirtualNodeSpecListener[] | undefined;
    private _logging;
    get logging(): AppmeshVirtualNodeSpecLoggingOutputReference;
    putLogging(value: AppmeshVirtualNodeSpecLogging): void;
    resetLogging(): void;
    get loggingInput(): AppmeshVirtualNodeSpecLogging | undefined;
    private _serviceDiscovery;
    get serviceDiscovery(): AppmeshVirtualNodeSpecServiceDiscoveryOutputReference;
    putServiceDiscovery(value: AppmeshVirtualNodeSpecServiceDiscovery): void;
    resetServiceDiscovery(): void;
    get serviceDiscoveryInput(): AppmeshVirtualNodeSpecServiceDiscovery | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node aws_appmesh_virtual_node}
*/
export declare class AppmeshVirtualNode extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appmesh_virtual_node";
    /**
    * Generates CDKTF code for importing a AppmeshVirtualNode resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppmeshVirtualNode to import
    * @param importFromId The id of the existing AppmeshVirtualNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppmeshVirtualNode to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_node aws_appmesh_virtual_node} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualNodeConfig
    */
    constructor(scope: Construct, id: string, config: AppmeshVirtualNodeConfig);
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
    get spec(): AppmeshVirtualNodeSpecOutputReference;
    putSpec(value: AppmeshVirtualNodeSpec): void;
    get specInput(): AppmeshVirtualNodeSpec | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
