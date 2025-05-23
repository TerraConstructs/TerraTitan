/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAppmeshVirtualNodeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_node#id DataAwsAppmeshVirtualNode#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_node#mesh_name DataAwsAppmeshVirtualNode#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_node#mesh_owner DataAwsAppmeshVirtualNode#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_node#name DataAwsAppmeshVirtualNode#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_node#tags DataAwsAppmeshVirtualNode#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile | undefined);
    get certificateChain(): string;
    get privateKey(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds | undefined);
    get secretName(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate | undefined);
    private _file;
    get file(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileList;
    private _sds;
    get sds(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsList;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined);
    get exact(): string[];
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames | undefined);
    private _match;
    get match(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchList;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm | undefined);
    get certificateAuthorityArns(): string[];
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile | undefined);
    get certificateChain(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds | undefined);
    get secretName(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust | undefined);
    private _acm;
    get acm(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmList;
    private _file;
    get file(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileList;
    private _sds;
    get sds(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsList;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation | undefined);
    private _subjectAlternativeNames;
    get subjectAlternativeNames(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesList;
    private _trust;
    get trust(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustList;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls | undefined);
    private _certificate;
    get certificate(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateList;
    get enforce(): cdktf.IResolvable;
    get ports(): number[];
    private _validation;
    get validation(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationList;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy | undefined);
    private _tls;
    get tls(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsList;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendVirtualService {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualService): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendVirtualServiceToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendVirtualService): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendVirtualService | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendVirtualService | undefined);
    private _clientPolicy;
    get clientPolicy(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyList;
    get virtualServiceName(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackend {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackend): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackend): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackend | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackend | undefined);
    private _virtualService;
    get virtualService(): DataAwsAppmeshVirtualNodeSpecBackendVirtualServiceList;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile | undefined);
    get certificateChain(): string;
    get privateKey(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds | undefined);
    get secretName(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate | undefined);
    private _file;
    get file(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileList;
    private _sds;
    get sds(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsList;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | undefined);
    get exact(): string[];
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined);
    private _match;
    get match(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchList;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined);
    get certificateAuthorityArns(): string[];
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined);
    get certificateChain(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined);
    get secretName(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust | undefined);
    private _acm;
    get acm(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmList;
    private _file;
    get file(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileList;
    private _sds;
    get sds(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsList;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation | undefined);
    private _subjectAlternativeNames;
    get subjectAlternativeNames(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesList;
    private _trust;
    get trust(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustList;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls | undefined);
    private _certificate;
    get certificate(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateList;
    get enforce(): cdktf.IResolvable;
    get ports(): number[];
    private _validation;
    get validation(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationList;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicy {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicy): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicy): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicy | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicy | undefined);
    private _tls;
    get tls(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsList;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecBackendDefaults {
}
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaults): any;
export declare function dataAwsAppmeshVirtualNodeSpecBackendDefaultsToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecBackendDefaults): any;
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecBackendDefaults | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecBackendDefaults | undefined);
    private _clientPolicy;
    get clientPolicy(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsClientPolicyList;
}
export declare class DataAwsAppmeshVirtualNodeSpecBackendDefaultsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecBackendDefaultsOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolGrpc {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolGrpc): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerConnectionPoolGrpcToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolGrpc): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolGrpc | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolGrpc | undefined);
    get maxRequests(): number;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolGrpcList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttp {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttp): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttpToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttp): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttp | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttp | undefined);
    get maxConnections(): number;
    get maxPendingRequests(): number;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttpList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttp2 {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttp2): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttp2ToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttp2): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttp2 | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttp2 | undefined);
    get maxRequests(): number;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttp2List extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolTcp {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolTcp): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerConnectionPoolTcpToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolTcp): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolTcp | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolTcp | undefined);
    get maxConnections(): number;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolTcpList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerConnectionPool {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerConnectionPoolToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerConnectionPool): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerConnectionPoolToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerConnectionPool): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerConnectionPool | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerConnectionPool | undefined);
    private _grpc;
    get grpc(): DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolGrpcList;
    private _http;
    get http(): DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttpList;
    private _http2;
    get http2(): DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolHttp2List;
    private _tcp;
    get tcp(): DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolTcpList;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerHealthCheck {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerHealthCheckToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerHealthCheck): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerHealthCheckToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerHealthCheck): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerHealthCheck | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerHealthCheck | undefined);
    get healthyThreshold(): number;
    get intervalMillis(): number;
    get path(): string;
    get port(): number;
    get protocol(): string;
    get timeoutMillis(): number;
    get unhealthyThreshold(): number;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerHealthCheckList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerHealthCheckOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionInterval {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionInterval): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionIntervalToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionInterval): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionInterval | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionInterval | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionIntervalList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerOutlierDetection {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerOutlierDetection): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerOutlierDetection): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerOutlierDetection | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerOutlierDetection | undefined);
    private _baseEjectionDuration;
    get baseEjectionDuration(): DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationList;
    private _interval;
    get interval(): DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionIntervalList;
    get maxEjectionPercent(): number;
    get maxServerErrors(): number;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerPortMapping {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerPortMappingToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerPortMapping): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerPortMappingToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerPortMapping): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerPortMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerPortMapping | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerPortMapping | undefined);
    get port(): number;
    get protocol(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerPortMappingList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerPortMappingOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcIdle {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcIdle): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcIdleToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcIdle): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcIdle | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcIdle | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcIdleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpc {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpc): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpc): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpc | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpc | undefined);
    private _idle;
    get idle(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcIdleList;
    private _perRequest;
    get perRequest(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestList;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpIdle {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpIdle): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpIdleToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpIdle): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpIdle | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpIdle | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpIdleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp | undefined);
    private _idle;
    get idle(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpIdleList;
    private _perRequest;
    get perRequest(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestList;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2Idle {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2Idle): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2IdleToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2Idle): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2Idle | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2Idle | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2IdleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2 {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2ToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2 | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2 | undefined);
    private _idle;
    get idle(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2IdleList;
    private _perRequest;
    get perRequest(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestList;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2List extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTimeoutTcpIdle {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutTcpIdle): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutTcpIdleToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutTcpIdle): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutTcpIdle | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTimeoutTcpIdle | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutTcpIdleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTimeoutTcp {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutTcpToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutTcp): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutTcpToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeoutTcp): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutTcp | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTimeoutTcp | undefined);
    private _idle;
    get idle(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutTcpIdleList;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutTcpList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTimeout {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeout): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTimeoutToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTimeout): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTimeout | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTimeout | undefined);
    private _grpc;
    get grpc(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutGrpcList;
    private _http;
    get http(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttpList;
    private _http2;
    get http2(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutHttp2List;
    private _tcp;
    get tcp(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutTcpList;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTimeoutList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTimeoutOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateAcm {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateAcm): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsCertificateAcmToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateAcm): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateAcm | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateAcm | undefined);
    get certificateArn(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateAcmList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateFile {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateFile): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsCertificateFileToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateFile): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateFile | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateFile | undefined);
    get certificateChain(): string;
    get privateKey(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateFileList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateSds {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateSds): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsCertificateSdsToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateSds): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateSds | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateSds | undefined);
    get secretName(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateSdsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTlsCertificate {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsCertificateToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsCertificate): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsCertificateToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsCertificate): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTlsCertificate | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTlsCertificate | undefined);
    private _acm;
    get acm(): DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateAcmList;
    private _file;
    get file(): DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateFileList;
    private _sds;
    get sds(): DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateSdsList;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch | undefined);
    get exact(): string[];
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames | undefined);
    private _match;
    get match(): DataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchList;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustFile {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustFile): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustFileToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustFile): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustFile | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustFile | undefined);
    get certificateChain(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustFileList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustSds {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustSds): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustSdsToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustSds): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustSds | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustSds | undefined);
    get secretName(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustSdsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrust {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrust): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrust): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrust | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrust | undefined);
    private _file;
    get file(): DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustFileList;
    private _sds;
    get sds(): DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustSdsList;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTlsValidation {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsValidationToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsValidation): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsValidationToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTlsValidation): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsValidationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTlsValidation | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTlsValidation | undefined);
    private _subjectAlternativeNames;
    get subjectAlternativeNames(): DataAwsAppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesList;
    private _trust;
    get trust(): DataAwsAppmeshVirtualNodeSpecListenerTlsValidationTrustList;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsValidationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTlsValidationOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListenerTls {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTls): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerTlsToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListenerTls): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListenerTls | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListenerTls | undefined);
    private _certificate;
    get certificate(): DataAwsAppmeshVirtualNodeSpecListenerTlsCertificateList;
    get mode(): string;
    private _validation;
    get validation(): DataAwsAppmeshVirtualNodeSpecListenerTlsValidationList;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerTlsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerTlsOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecListener {
}
export declare function dataAwsAppmeshVirtualNodeSpecListenerToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListener): any;
export declare function dataAwsAppmeshVirtualNodeSpecListenerToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecListener): any;
export declare class DataAwsAppmeshVirtualNodeSpecListenerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecListener | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecListener | undefined);
    private _connectionPool;
    get connectionPool(): DataAwsAppmeshVirtualNodeSpecListenerConnectionPoolList;
    private _healthCheck;
    get healthCheck(): DataAwsAppmeshVirtualNodeSpecListenerHealthCheckList;
    private _outlierDetection;
    get outlierDetection(): DataAwsAppmeshVirtualNodeSpecListenerOutlierDetectionList;
    private _portMapping;
    get portMapping(): DataAwsAppmeshVirtualNodeSpecListenerPortMappingList;
    private _timeout;
    get timeout(): DataAwsAppmeshVirtualNodeSpecListenerTimeoutList;
    private _tls;
    get tls(): DataAwsAppmeshVirtualNodeSpecListenerTlsList;
}
export declare class DataAwsAppmeshVirtualNodeSpecListenerList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecListenerOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson {
}
export declare function dataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson): any;
export declare function dataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson): any;
export declare class DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormatJson | undefined);
    get key(): string;
    get value(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormat {
}
export declare function dataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormatToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormat): any;
export declare function dataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormatToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormat): any;
export declare class DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormat | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormat | undefined);
    private _json;
    get json(): DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormatJsonList;
    get text(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormatList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormatOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFile {
}
export declare function dataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFile): any;
export declare function dataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFile): any;
export declare class DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFile | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFile | undefined);
    private _format;
    get format(): DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileFormatList;
    get path(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecLoggingAccessLog {
}
export declare function dataAwsAppmeshVirtualNodeSpecLoggingAccessLogToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecLoggingAccessLog): any;
export declare function dataAwsAppmeshVirtualNodeSpecLoggingAccessLogToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecLoggingAccessLog): any;
export declare class DataAwsAppmeshVirtualNodeSpecLoggingAccessLogOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecLoggingAccessLog | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecLoggingAccessLog | undefined);
    private _file;
    get file(): DataAwsAppmeshVirtualNodeSpecLoggingAccessLogFileList;
}
export declare class DataAwsAppmeshVirtualNodeSpecLoggingAccessLogList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecLoggingAccessLogOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecLogging {
}
export declare function dataAwsAppmeshVirtualNodeSpecLoggingToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecLogging): any;
export declare function dataAwsAppmeshVirtualNodeSpecLoggingToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecLogging): any;
export declare class DataAwsAppmeshVirtualNodeSpecLoggingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecLogging | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecLogging | undefined);
    private _accessLog;
    get accessLog(): DataAwsAppmeshVirtualNodeSpecLoggingAccessLogList;
}
export declare class DataAwsAppmeshVirtualNodeSpecLoggingList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecLoggingOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap {
}
export declare function dataAwsAppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap): any;
export declare function dataAwsAppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap): any;
export declare class DataAwsAppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap | undefined);
    private _attributes;
    get attributes(): cdktf.StringMap;
    get namespaceName(): string;
    get serviceName(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecServiceDiscoveryDns {
}
export declare function dataAwsAppmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecServiceDiscoveryDns): any;
export declare function dataAwsAppmeshVirtualNodeSpecServiceDiscoveryDnsToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecServiceDiscoveryDns): any;
export declare class DataAwsAppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecServiceDiscoveryDns | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecServiceDiscoveryDns | undefined);
    get hostname(): string;
    get ipPreference(): string;
    get responseType(): string;
}
export declare class DataAwsAppmeshVirtualNodeSpecServiceDiscoveryDnsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpecServiceDiscovery {
}
export declare function dataAwsAppmeshVirtualNodeSpecServiceDiscoveryToTerraform(struct?: DataAwsAppmeshVirtualNodeSpecServiceDiscovery): any;
export declare function dataAwsAppmeshVirtualNodeSpecServiceDiscoveryToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpecServiceDiscovery): any;
export declare class DataAwsAppmeshVirtualNodeSpecServiceDiscoveryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpecServiceDiscovery | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpecServiceDiscovery | undefined);
    private _awsCloudMap;
    get awsCloudMap(): DataAwsAppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapList;
    private _dns;
    get dns(): DataAwsAppmeshVirtualNodeSpecServiceDiscoveryDnsList;
}
export declare class DataAwsAppmeshVirtualNodeSpecServiceDiscoveryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecServiceDiscoveryOutputReference;
}
export interface DataAwsAppmeshVirtualNodeSpec {
}
export declare function dataAwsAppmeshVirtualNodeSpecToTerraform(struct?: DataAwsAppmeshVirtualNodeSpec): any;
export declare function dataAwsAppmeshVirtualNodeSpecToHclTerraform(struct?: DataAwsAppmeshVirtualNodeSpec): any;
export declare class DataAwsAppmeshVirtualNodeSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualNodeSpec | undefined;
    set internalValue(value: DataAwsAppmeshVirtualNodeSpec | undefined);
    private _backend;
    get backend(): DataAwsAppmeshVirtualNodeSpecBackendList;
    private _backendDefaults;
    get backendDefaults(): DataAwsAppmeshVirtualNodeSpecBackendDefaultsList;
    private _listener;
    get listener(): DataAwsAppmeshVirtualNodeSpecListenerList;
    private _logging;
    get logging(): DataAwsAppmeshVirtualNodeSpecLoggingList;
    private _serviceDiscovery;
    get serviceDiscovery(): DataAwsAppmeshVirtualNodeSpecServiceDiscoveryList;
}
export declare class DataAwsAppmeshVirtualNodeSpecList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualNodeSpecOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_node aws_appmesh_virtual_node}
*/
export declare class DataAwsAppmeshVirtualNode extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_appmesh_virtual_node";
    /**
    * Generates CDKTF code for importing a DataAwsAppmeshVirtualNode resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAppmeshVirtualNode to import
    * @param importFromId The id of the existing DataAwsAppmeshVirtualNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_node#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAppmeshVirtualNode to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_node aws_appmesh_virtual_node} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAppmeshVirtualNodeConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAppmeshVirtualNodeConfig);
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
    private _spec;
    get spec(): DataAwsAppmeshVirtualNodeSpecList;
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
