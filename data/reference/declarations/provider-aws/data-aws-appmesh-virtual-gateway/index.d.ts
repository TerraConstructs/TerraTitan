/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAppmeshVirtualGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_gateway#id DataAwsAppmeshVirtualGateway#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_gateway#mesh_name DataAwsAppmeshVirtualGateway#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_gateway#name DataAwsAppmeshVirtualGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_gateway#tags DataAwsAppmeshVirtualGateway#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile {
}
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile): any;
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile): any;
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile | undefined);
    get certificateChain(): string;
    get privateKey(): string;
}
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds {
}
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds): any;
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds): any;
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds | undefined);
    get secretName(): string;
}
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate {
}
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate): any;
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate): any;
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate | undefined);
    private _file;
    get file(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileList;
    private _sds;
    get sds(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsList;
}
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
}
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any;
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any;
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined);
    get exact(): string[];
}
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
}
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any;
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any;
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined);
    private _match;
    get match(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList;
}
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
}
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any;
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any;
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined);
    get certificateAuthorityArns(): string[];
}
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile {
}
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile): any;
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile): any;
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined);
    get certificateChain(): string;
}
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds {
}
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds): any;
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds): any;
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined);
    get secretName(): string;
}
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust {
}
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust): any;
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust): any;
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust | undefined);
    private _acm;
    get acm(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmList;
    private _file;
    get file(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileList;
    private _sds;
    get sds(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsList;
}
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation {
}
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation): any;
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation): any;
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation | undefined);
    private _subjectAlternativeNames;
    get subjectAlternativeNames(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList;
    private _trust;
    get trust(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustList;
}
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls {
}
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls): any;
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls): any;
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls | undefined);
    private _certificate;
    get certificate(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateList;
    get enforce(): cdktf.IResolvable;
    get ports(): number[];
    private _validation;
    get validation(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationList;
}
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy {
}
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy): any;
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy): any;
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicy | undefined);
    private _tls;
    get tls(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsList;
}
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecBackendDefaults {
}
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaults): any;
export declare function dataAwsAppmeshVirtualGatewaySpecBackendDefaultsToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecBackendDefaults): any;
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecBackendDefaults | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecBackendDefaults | undefined);
    private _clientPolicy;
    get clientPolicy(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyList;
}
export declare class DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc {
}
export declare function dataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc): any;
export declare function dataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc): any;
export declare class DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpc | undefined);
    get maxRequests(): number;
}
export declare class DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp {
}
export declare function dataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp): any;
export declare function dataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp): any;
export declare class DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp | undefined);
    get maxConnections(): number;
    get maxPendingRequests(): number;
}
export declare class DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 {
}
export declare function dataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2): any;
export declare function dataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2): any;
export declare class DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 | undefined);
    get maxRequests(): number;
}
export declare class DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool {
}
export declare function dataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool): any;
export declare function dataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool): any;
export declare class DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecListenerConnectionPool | undefined);
    private _grpc;
    get grpc(): DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcList;
    private _http;
    get http(): DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttpList;
    private _http2;
    get http2(): DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2List;
}
export declare class DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck {
}
export declare function dataAwsAppmeshVirtualGatewaySpecListenerHealthCheckToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck): any;
export declare function dataAwsAppmeshVirtualGatewaySpecListenerHealthCheckToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck): any;
export declare class DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecListenerHealthCheck | undefined);
    get healthyThreshold(): number;
    get intervalMillis(): number;
    get path(): string;
    get port(): number;
    get protocol(): string;
    get timeoutMillis(): number;
    get unhealthyThreshold(): number;
}
export declare class DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecListenerPortMapping {
}
export declare function dataAwsAppmeshVirtualGatewaySpecListenerPortMappingToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerPortMapping): any;
export declare function dataAwsAppmeshVirtualGatewaySpecListenerPortMappingToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerPortMapping): any;
export declare class DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecListenerPortMapping | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecListenerPortMapping | undefined);
    get port(): number;
    get protocol(): string;
}
export declare class DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerPortMappingOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm {
}
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm): any;
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm): any;
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcm | undefined);
    get certificateArn(): string;
}
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile {
}
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile): any;
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile): any;
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFile | undefined);
    get certificateChain(): string;
    get privateKey(): string;
}
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds {
}
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds): any;
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds): any;
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSds | undefined);
    get secretName(): string;
}
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate {
}
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate): any;
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate): any;
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificate | undefined);
    private _acm;
    get acm(): DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmList;
    private _file;
    get file(): DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateFileList;
    private _sds;
    get sds(): DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsList;
}
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch {
}
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch): any;
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch): any;
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch | undefined);
    get exact(): string[];
}
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames {
}
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames): any;
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames): any;
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames | undefined);
    private _match;
    get match(): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchList;
}
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile {
}
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile): any;
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile): any;
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFile | undefined);
    get certificateChain(): string;
}
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds {
}
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds): any;
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds): any;
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSds | undefined);
    get secretName(): string;
}
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust {
}
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust): any;
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust): any;
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrust | undefined);
    private _file;
    get file(): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileList;
    private _sds;
    get sds(): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsList;
}
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation {
}
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsValidationToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation): any;
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsValidationToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation): any;
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecListenerTlsValidation | undefined);
    private _subjectAlternativeNames;
    get subjectAlternativeNames(): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesList;
    private _trust;
    get trust(): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationTrustList;
}
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecListenerTls {
}
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTls): any;
export declare function dataAwsAppmeshVirtualGatewaySpecListenerTlsToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListenerTls): any;
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecListenerTls | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecListenerTls | undefined);
    private _certificate;
    get certificate(): DataAwsAppmeshVirtualGatewaySpecListenerTlsCertificateList;
    get mode(): string;
    private _validation;
    get validation(): DataAwsAppmeshVirtualGatewaySpecListenerTlsValidationList;
}
export declare class DataAwsAppmeshVirtualGatewaySpecListenerTlsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerTlsOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecListener {
}
export declare function dataAwsAppmeshVirtualGatewaySpecListenerToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListener): any;
export declare function dataAwsAppmeshVirtualGatewaySpecListenerToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecListener): any;
export declare class DataAwsAppmeshVirtualGatewaySpecListenerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecListener | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecListener | undefined);
    private _connectionPool;
    get connectionPool(): DataAwsAppmeshVirtualGatewaySpecListenerConnectionPoolList;
    private _healthCheck;
    get healthCheck(): DataAwsAppmeshVirtualGatewaySpecListenerHealthCheckList;
    private _portMapping;
    get portMapping(): DataAwsAppmeshVirtualGatewaySpecListenerPortMappingList;
    private _tls;
    get tls(): DataAwsAppmeshVirtualGatewaySpecListenerTlsList;
}
export declare class DataAwsAppmeshVirtualGatewaySpecListenerList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecListenerOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson {
}
export declare function dataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson): any;
export declare function dataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson): any;
export declare class DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJson | undefined);
    get key(): string;
    get value(): string;
}
export declare class DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat {
}
export declare function dataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat): any;
export declare function dataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat): any;
export declare class DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormat | undefined);
    private _json;
    get json(): DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatJsonList;
    get text(): string;
}
export declare class DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile {
}
export declare function dataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile): any;
export declare function dataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile): any;
export declare class DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFile | undefined);
    private _format;
    get format(): DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileFormatList;
    get path(): string;
}
export declare class DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog {
}
export declare function dataAwsAppmeshVirtualGatewaySpecLoggingAccessLogToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog): any;
export declare function dataAwsAppmeshVirtualGatewaySpecLoggingAccessLogToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog): any;
export declare class DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecLoggingAccessLog | undefined);
    private _file;
    get file(): DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogFileList;
}
export declare class DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpecLogging {
}
export declare function dataAwsAppmeshVirtualGatewaySpecLoggingToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecLogging): any;
export declare function dataAwsAppmeshVirtualGatewaySpecLoggingToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpecLogging): any;
export declare class DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpecLogging | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpecLogging | undefined);
    private _accessLog;
    get accessLog(): DataAwsAppmeshVirtualGatewaySpecLoggingAccessLogList;
}
export declare class DataAwsAppmeshVirtualGatewaySpecLoggingList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecLoggingOutputReference;
}
export interface DataAwsAppmeshVirtualGatewaySpec {
}
export declare function dataAwsAppmeshVirtualGatewaySpecToTerraform(struct?: DataAwsAppmeshVirtualGatewaySpec): any;
export declare function dataAwsAppmeshVirtualGatewaySpecToHclTerraform(struct?: DataAwsAppmeshVirtualGatewaySpec): any;
export declare class DataAwsAppmeshVirtualGatewaySpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualGatewaySpec | undefined;
    set internalValue(value: DataAwsAppmeshVirtualGatewaySpec | undefined);
    private _backendDefaults;
    get backendDefaults(): DataAwsAppmeshVirtualGatewaySpecBackendDefaultsList;
    private _listener;
    get listener(): DataAwsAppmeshVirtualGatewaySpecListenerList;
    private _logging;
    get logging(): DataAwsAppmeshVirtualGatewaySpecLoggingList;
}
export declare class DataAwsAppmeshVirtualGatewaySpecList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualGatewaySpecOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_gateway aws_appmesh_virtual_gateway}
*/
export declare class DataAwsAppmeshVirtualGateway extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_appmesh_virtual_gateway";
    /**
    * Generates CDKTF code for importing a DataAwsAppmeshVirtualGateway resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAppmeshVirtualGateway to import
    * @param importFromId The id of the existing DataAwsAppmeshVirtualGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAppmeshVirtualGateway to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_gateway aws_appmesh_virtual_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAppmeshVirtualGatewayConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAppmeshVirtualGatewayConfig);
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
    get meshOwner(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get resourceOwner(): string;
    private _spec;
    get spec(): DataAwsAppmeshVirtualGatewaySpecList;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
