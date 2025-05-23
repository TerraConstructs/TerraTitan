/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AcmpcaCertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#id AcmpcaCertificateAuthority#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#key_storage_security_standard AcmpcaCertificateAuthority#key_storage_security_standard}
    */
    readonly keyStorageSecurityStandard?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#permanent_deletion_time_in_days AcmpcaCertificateAuthority#permanent_deletion_time_in_days}
    */
    readonly permanentDeletionTimeInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#tags_all AcmpcaCertificateAuthority#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#type AcmpcaCertificateAuthority#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#usage_mode AcmpcaCertificateAuthority#usage_mode}
    */
    readonly usageMode?: string;
    /**
    * certificate_authority_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#certificate_authority_configuration AcmpcaCertificateAuthority#certificate_authority_configuration}
    */
    readonly certificateAuthorityConfiguration: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration;
    /**
    * revocation_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#revocation_configuration AcmpcaCertificateAuthority#revocation_configuration}
    */
    readonly revocationConfiguration?: AcmpcaCertificateAuthorityRevocationConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#timeouts AcmpcaCertificateAuthority#timeouts}
    */
    readonly timeouts?: AcmpcaCertificateAuthorityTimeouts;
}
export interface AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}
    */
    readonly commonName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}
    */
    readonly country?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}
    */
    readonly distinguishedNameQualifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}
    */
    readonly generationQualifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}
    */
    readonly givenName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}
    */
    readonly initials?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}
    */
    readonly locality?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}
    */
    readonly organization?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}
    */
    readonly organizationalUnit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}
    */
    readonly pseudonym?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}
    */
    readonly surname?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}
    */
    readonly title?: string;
}
export declare function acmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectToTerraform(struct?: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference | AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject): any;
export declare function acmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectToHclTerraform(struct?: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference | AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject): any;
export declare class AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject | undefined;
    set internalValue(value: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject | undefined);
    private _commonName?;
    get commonName(): string;
    set commonName(value: string);
    resetCommonName(): void;
    get commonNameInput(): string | undefined;
    private _country?;
    get country(): string;
    set country(value: string);
    resetCountry(): void;
    get countryInput(): string | undefined;
    private _distinguishedNameQualifier?;
    get distinguishedNameQualifier(): string;
    set distinguishedNameQualifier(value: string);
    resetDistinguishedNameQualifier(): void;
    get distinguishedNameQualifierInput(): string | undefined;
    private _generationQualifier?;
    get generationQualifier(): string;
    set generationQualifier(value: string);
    resetGenerationQualifier(): void;
    get generationQualifierInput(): string | undefined;
    private _givenName?;
    get givenName(): string;
    set givenName(value: string);
    resetGivenName(): void;
    get givenNameInput(): string | undefined;
    private _initials?;
    get initials(): string;
    set initials(value: string);
    resetInitials(): void;
    get initialsInput(): string | undefined;
    private _locality?;
    get locality(): string;
    set locality(value: string);
    resetLocality(): void;
    get localityInput(): string | undefined;
    private _organization?;
    get organization(): string;
    set organization(value: string);
    resetOrganization(): void;
    get organizationInput(): string | undefined;
    private _organizationalUnit?;
    get organizationalUnit(): string;
    set organizationalUnit(value: string);
    resetOrganizationalUnit(): void;
    get organizationalUnitInput(): string | undefined;
    private _pseudonym?;
    get pseudonym(): string;
    set pseudonym(value: string);
    resetPseudonym(): void;
    get pseudonymInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
    private _surname?;
    get surname(): string;
    set surname(value: string);
    resetSurname(): void;
    get surnameInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    resetTitle(): void;
    get titleInput(): string | undefined;
}
export interface AcmpcaCertificateAuthorityCertificateAuthorityConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#key_algorithm AcmpcaCertificateAuthority#key_algorithm}
    */
    readonly keyAlgorithm: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#signing_algorithm AcmpcaCertificateAuthority#signing_algorithm}
    */
    readonly signingAlgorithm: string;
    /**
    * subject block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#subject AcmpcaCertificateAuthority#subject}
    */
    readonly subject: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject;
}
export declare function acmpcaCertificateAuthorityCertificateAuthorityConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference | AcmpcaCertificateAuthorityCertificateAuthorityConfiguration): any;
export declare function acmpcaCertificateAuthorityCertificateAuthorityConfigurationToHclTerraform(struct?: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference | AcmpcaCertificateAuthorityCertificateAuthorityConfiguration): any;
export declare class AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AcmpcaCertificateAuthorityCertificateAuthorityConfiguration | undefined;
    set internalValue(value: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration | undefined);
    private _keyAlgorithm?;
    get keyAlgorithm(): string;
    set keyAlgorithm(value: string);
    get keyAlgorithmInput(): string | undefined;
    private _signingAlgorithm?;
    get signingAlgorithm(): string;
    set signingAlgorithm(value: string);
    get signingAlgorithmInput(): string | undefined;
    private _subject;
    get subject(): AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference;
    putSubject(value: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject): void;
    get subjectInput(): AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject | undefined;
}
export interface AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#custom_cname AcmpcaCertificateAuthority#custom_cname}
    */
    readonly customCname?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#expiration_in_days AcmpcaCertificateAuthority#expiration_in_days}
    */
    readonly expirationInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#s3_bucket_name AcmpcaCertificateAuthority#s3_bucket_name}
    */
    readonly s3BucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#s3_object_acl AcmpcaCertificateAuthority#s3_object_acl}
    */
    readonly s3ObjectAcl?: string;
}
export declare function acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference | AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration): any;
export declare function acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToHclTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference | AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration): any;
export declare class AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration | undefined;
    set internalValue(value: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration | undefined);
    private _customCname?;
    get customCname(): string;
    set customCname(value: string);
    resetCustomCname(): void;
    get customCnameInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _expirationInDays?;
    get expirationInDays(): number;
    set expirationInDays(value: number);
    resetExpirationInDays(): void;
    get expirationInDaysInput(): number | undefined;
    private _s3BucketName?;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    resetS3BucketName(): void;
    get s3BucketNameInput(): string | undefined;
    private _s3ObjectAcl?;
    get s3ObjectAcl(): string;
    set s3ObjectAcl(value: string);
    resetS3ObjectAcl(): void;
    get s3ObjectAclInput(): string | undefined;
}
export interface AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#ocsp_custom_cname AcmpcaCertificateAuthority#ocsp_custom_cname}
    */
    readonly ocspCustomCname?: string;
}
export declare function acmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference | AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration): any;
export declare function acmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationToHclTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference | AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration): any;
export declare class AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration | undefined;
    set internalValue(value: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _ocspCustomCname?;
    get ocspCustomCname(): string;
    set ocspCustomCname(value: string);
    resetOcspCustomCname(): void;
    get ocspCustomCnameInput(): string | undefined;
}
export interface AcmpcaCertificateAuthorityRevocationConfiguration {
    /**
    * crl_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#crl_configuration AcmpcaCertificateAuthority#crl_configuration}
    */
    readonly crlConfiguration?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration;
    /**
    * ocsp_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#ocsp_configuration AcmpcaCertificateAuthority#ocsp_configuration}
    */
    readonly ocspConfiguration?: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration;
}
export declare function acmpcaCertificateAuthorityRevocationConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfigurationOutputReference | AcmpcaCertificateAuthorityRevocationConfiguration): any;
export declare function acmpcaCertificateAuthorityRevocationConfigurationToHclTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfigurationOutputReference | AcmpcaCertificateAuthorityRevocationConfiguration): any;
export declare class AcmpcaCertificateAuthorityRevocationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AcmpcaCertificateAuthorityRevocationConfiguration | undefined;
    set internalValue(value: AcmpcaCertificateAuthorityRevocationConfiguration | undefined);
    private _crlConfiguration;
    get crlConfiguration(): AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference;
    putCrlConfiguration(value: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration): void;
    resetCrlConfiguration(): void;
    get crlConfigurationInput(): AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration | undefined;
    private _ocspConfiguration;
    get ocspConfiguration(): AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference;
    putOcspConfiguration(value: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration): void;
    resetOcspConfiguration(): void;
    get ocspConfigurationInput(): AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration | undefined;
}
export interface AcmpcaCertificateAuthorityTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#create AcmpcaCertificateAuthority#create}
    */
    readonly create?: string;
}
export declare function acmpcaCertificateAuthorityTimeoutsToTerraform(struct?: AcmpcaCertificateAuthorityTimeouts | cdktf.IResolvable): any;
export declare function acmpcaCertificateAuthorityTimeoutsToHclTerraform(struct?: AcmpcaCertificateAuthorityTimeouts | cdktf.IResolvable): any;
export declare class AcmpcaCertificateAuthorityTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AcmpcaCertificateAuthorityTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: AcmpcaCertificateAuthorityTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority aws_acmpca_certificate_authority}
*/
export declare class AcmpcaCertificateAuthority extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_acmpca_certificate_authority";
    /**
    * Generates CDKTF code for importing a AcmpcaCertificateAuthority resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AcmpcaCertificateAuthority to import
    * @param importFromId The id of the existing AcmpcaCertificateAuthority that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AcmpcaCertificateAuthority to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acmpca_certificate_authority aws_acmpca_certificate_authority} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AcmpcaCertificateAuthorityConfig
    */
    constructor(scope: Construct, id: string, config: AcmpcaCertificateAuthorityConfig);
    get arn(): string;
    get certificate(): string;
    get certificateChain(): string;
    get certificateSigningRequest(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _keyStorageSecurityStandard?;
    get keyStorageSecurityStandard(): string;
    set keyStorageSecurityStandard(value: string);
    resetKeyStorageSecurityStandard(): void;
    get keyStorageSecurityStandardInput(): string | undefined;
    get notAfter(): string;
    get notBefore(): string;
    private _permanentDeletionTimeInDays?;
    get permanentDeletionTimeInDays(): number;
    set permanentDeletionTimeInDays(value: number);
    resetPermanentDeletionTimeInDays(): void;
    get permanentDeletionTimeInDaysInput(): number | undefined;
    get serial(): string;
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
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _usageMode?;
    get usageMode(): string;
    set usageMode(value: string);
    resetUsageMode(): void;
    get usageModeInput(): string | undefined;
    private _certificateAuthorityConfiguration;
    get certificateAuthorityConfiguration(): AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference;
    putCertificateAuthorityConfiguration(value: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration): void;
    get certificateAuthorityConfigurationInput(): AcmpcaCertificateAuthorityCertificateAuthorityConfiguration | undefined;
    private _revocationConfiguration;
    get revocationConfiguration(): AcmpcaCertificateAuthorityRevocationConfigurationOutputReference;
    putRevocationConfiguration(value: AcmpcaCertificateAuthorityRevocationConfiguration): void;
    resetRevocationConfiguration(): void;
    get revocationConfigurationInput(): AcmpcaCertificateAuthorityRevocationConfiguration | undefined;
    private _timeouts;
    get timeouts(): AcmpcaCertificateAuthorityTimeoutsOutputReference;
    putTimeouts(value: AcmpcaCertificateAuthorityTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | AcmpcaCertificateAuthorityTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
