/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AcmCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate#certificate_authority_arn AcmCertificate#certificate_authority_arn}
    */
    readonly certificateAuthorityArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate#certificate_body AcmCertificate#certificate_body}
    */
    readonly certificateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate#certificate_chain AcmCertificate#certificate_chain}
    */
    readonly certificateChain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate#domain_name AcmCertificate#domain_name}
    */
    readonly domainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate#early_renewal_duration AcmCertificate#early_renewal_duration}
    */
    readonly earlyRenewalDuration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate#id AcmCertificate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate#key_algorithm AcmCertificate#key_algorithm}
    */
    readonly keyAlgorithm?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate#private_key AcmCertificate#private_key}
    */
    readonly privateKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate#subject_alternative_names AcmCertificate#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate#tags AcmCertificate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate#tags_all AcmCertificate#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate#validation_method AcmCertificate#validation_method}
    */
    readonly validationMethod?: string;
    /**
    * options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate#options AcmCertificate#options}
    */
    readonly options?: AcmCertificateOptions;
    /**
    * validation_option block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate#validation_option AcmCertificate#validation_option}
    */
    readonly validationOption?: AcmCertificateValidationOption[] | cdktf.IResolvable;
}
export interface AcmCertificateDomainValidationOptions {
}
export declare function acmCertificateDomainValidationOptionsToTerraform(struct?: AcmCertificateDomainValidationOptions): any;
export declare function acmCertificateDomainValidationOptionsToHclTerraform(struct?: AcmCertificateDomainValidationOptions): any;
export declare class AcmCertificateDomainValidationOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AcmCertificateDomainValidationOptions | undefined;
    set internalValue(value: AcmCertificateDomainValidationOptions | undefined);
    get domainName(): string;
    get resourceRecordName(): string;
    get resourceRecordType(): string;
    get resourceRecordValue(): string;
}
export declare class AcmCertificateDomainValidationOptionsList extends cdktf.ComplexList {
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
    get(index: number): AcmCertificateDomainValidationOptionsOutputReference;
}
export interface AcmCertificateRenewalSummary {
}
export declare function acmCertificateRenewalSummaryToTerraform(struct?: AcmCertificateRenewalSummary): any;
export declare function acmCertificateRenewalSummaryToHclTerraform(struct?: AcmCertificateRenewalSummary): any;
export declare class AcmCertificateRenewalSummaryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AcmCertificateRenewalSummary | undefined;
    set internalValue(value: AcmCertificateRenewalSummary | undefined);
    get renewalStatus(): string;
    get renewalStatusReason(): string;
    get updatedAt(): string;
}
export declare class AcmCertificateRenewalSummaryList extends cdktf.ComplexList {
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
    get(index: number): AcmCertificateRenewalSummaryOutputReference;
}
export interface AcmCertificateOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate#certificate_transparency_logging_preference AcmCertificate#certificate_transparency_logging_preference}
    */
    readonly certificateTransparencyLoggingPreference?: string;
}
export declare function acmCertificateOptionsToTerraform(struct?: AcmCertificateOptionsOutputReference | AcmCertificateOptions): any;
export declare function acmCertificateOptionsToHclTerraform(struct?: AcmCertificateOptionsOutputReference | AcmCertificateOptions): any;
export declare class AcmCertificateOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AcmCertificateOptions | undefined;
    set internalValue(value: AcmCertificateOptions | undefined);
    private _certificateTransparencyLoggingPreference?;
    get certificateTransparencyLoggingPreference(): string;
    set certificateTransparencyLoggingPreference(value: string);
    resetCertificateTransparencyLoggingPreference(): void;
    get certificateTransparencyLoggingPreferenceInput(): string | undefined;
}
export interface AcmCertificateValidationOption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate#domain_name AcmCertificate#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate#validation_domain AcmCertificate#validation_domain}
    */
    readonly validationDomain: string;
}
export declare function acmCertificateValidationOptionToTerraform(struct?: AcmCertificateValidationOption | cdktf.IResolvable): any;
export declare function acmCertificateValidationOptionToHclTerraform(struct?: AcmCertificateValidationOption | cdktf.IResolvable): any;
export declare class AcmCertificateValidationOptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AcmCertificateValidationOption | cdktf.IResolvable | undefined;
    set internalValue(value: AcmCertificateValidationOption | cdktf.IResolvable | undefined);
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _validationDomain?;
    get validationDomain(): string;
    set validationDomain(value: string);
    get validationDomainInput(): string | undefined;
}
export declare class AcmCertificateValidationOptionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AcmCertificateValidationOption[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AcmCertificateValidationOptionOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate aws_acm_certificate}
*/
export declare class AcmCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_acm_certificate";
    /**
    * Generates CDKTF code for importing a AcmCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AcmCertificate to import
    * @param importFromId The id of the existing AcmCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AcmCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/acm_certificate aws_acm_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AcmCertificateConfig = {}
    */
    constructor(scope: Construct, id: string, config?: AcmCertificateConfig);
    get arn(): string;
    private _certificateAuthorityArn?;
    get certificateAuthorityArn(): string;
    set certificateAuthorityArn(value: string);
    resetCertificateAuthorityArn(): void;
    get certificateAuthorityArnInput(): string | undefined;
    private _certificateBody?;
    get certificateBody(): string;
    set certificateBody(value: string);
    resetCertificateBody(): void;
    get certificateBodyInput(): string | undefined;
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    resetCertificateChain(): void;
    get certificateChainInput(): string | undefined;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    resetDomainName(): void;
    get domainNameInput(): string | undefined;
    private _domainValidationOptions;
    get domainValidationOptions(): AcmCertificateDomainValidationOptionsList;
    private _earlyRenewalDuration?;
    get earlyRenewalDuration(): string;
    set earlyRenewalDuration(value: string);
    resetEarlyRenewalDuration(): void;
    get earlyRenewalDurationInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _keyAlgorithm?;
    get keyAlgorithm(): string;
    set keyAlgorithm(value: string);
    resetKeyAlgorithm(): void;
    get keyAlgorithmInput(): string | undefined;
    get notAfter(): string;
    get notBefore(): string;
    get pendingRenewal(): cdktf.IResolvable;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    resetPrivateKey(): void;
    get privateKeyInput(): string | undefined;
    get renewalEligibility(): string;
    private _renewalSummary;
    get renewalSummary(): AcmCertificateRenewalSummaryList;
    get status(): string;
    private _subjectAlternativeNames?;
    get subjectAlternativeNames(): string[];
    set subjectAlternativeNames(value: string[]);
    resetSubjectAlternativeNames(): void;
    get subjectAlternativeNamesInput(): string[] | undefined;
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
    get type(): string;
    get validationEmails(): string[];
    private _validationMethod?;
    get validationMethod(): string;
    set validationMethod(value: string);
    resetValidationMethod(): void;
    get validationMethodInput(): string | undefined;
    private _options;
    get options(): AcmCertificateOptionsOutputReference;
    putOptions(value: AcmCertificateOptions): void;
    resetOptions(): void;
    get optionsInput(): AcmCertificateOptions | undefined;
    private _validationOption;
    get validationOption(): AcmCertificateValidationOptionList;
    putValidationOption(value: AcmCertificateValidationOption[] | cdktf.IResolvable): void;
    resetValidationOption(): void;
    get validationOptionInput(): cdktf.IResolvable | AcmCertificateValidationOption[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
