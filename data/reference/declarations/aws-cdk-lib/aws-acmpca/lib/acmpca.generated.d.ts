import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::ACMPCA::Certificate` resource is used to issue a certificate using your private certificate authority.
 *
 * For more information, see the [IssueCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html) action.
 *
 * @cloudformationResource AWS::ACMPCA::Certificate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html
 */
export declare class CfnCertificate extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCertificate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCertificate;
    /**
     * The Amazon Resource Name (ARN) of the issued certificate.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The issued Base64 PEM-encoded certificate.
     *
     * @cloudformationAttribute Certificate
     */
    readonly attrCertificate: string;
    /**
     * Specifies X.509 certificate information to be included in the issued certificate. An `APIPassthrough` or `APICSRPassthrough` template variant must be selected, or else this parameter is ignored.
     */
    apiPassthrough?: CfnCertificate.ApiPassthroughProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) for the private CA issues the certificate.
     */
    certificateAuthorityArn: string;
    /**
     * The certificate signing request (CSR) for the certificate.
     */
    certificateSigningRequest: string;
    /**
     * The name of the algorithm that will be used to sign the certificate to be issued.
     */
    signingAlgorithm: string;
    /**
     * Specifies a custom configuration template to use when issuing a certificate.
     */
    templateArn?: string;
    /**
     * The period of time during which the certificate will be valid.
     */
    validity: cdk.IResolvable | CfnCertificate.ValidityProperty;
    /**
     * Information describing the start of the validity period of the certificate.
     */
    validityNotBefore?: cdk.IResolvable | CfnCertificate.ValidityProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCertificateProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCertificate {
    /**
     * Length of time for which the certificate issued by your private certificate authority (CA), or by the private CA itself, is valid in days, months, or years.
     *
     * You can issue a certificate by calling the `IssueCertificate` operation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-validity.html
     */
    interface ValidityProperty {
        /**
         * Specifies whether the `Value` parameter represents days, months, or years.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-validity.html#cfn-acmpca-certificate-validity-type
         */
        readonly type: string;
        /**
         * A long integer interpreted according to the value of `Type` , below.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-validity.html#cfn-acmpca-certificate-validity-value
         */
        readonly value: number;
    }
    /**
     * Contains X.509 certificate information to be placed in an issued certificate. An `APIPassthrough` or `APICSRPassthrough` template variant must be selected, or else this parameter is ignored.
     *
     * If conflicting or duplicate certificate information is supplied from other sources, AWS Private CA applies [order of operation rules](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations) to determine what information is used.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-apipassthrough.html
     */
    interface ApiPassthroughProperty {
        /**
         * Specifies X.509 extension information for a certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-apipassthrough.html#cfn-acmpca-certificate-apipassthrough-extensions
         */
        readonly extensions?: CfnCertificate.ExtensionsProperty | cdk.IResolvable;
        /**
         * Contains information about the certificate subject.
         *
         * The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-apipassthrough.html#cfn-acmpca-certificate-apipassthrough-subject
         */
        readonly subject?: cdk.IResolvable | CfnCertificate.SubjectProperty;
    }
    /**
     * Contains X.509 extension information for a certificate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-extensions.html
     */
    interface ExtensionsProperty {
        /**
         * Contains a sequence of one or more policy information terms, each of which consists of an object identifier (OID) and optional qualifiers.
         *
         * For more information, see NIST's definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier) .
         *
         * In an end-entity certificate, these terms indicate the policy under which the certificate was issued and the purposes for which it may be used. In a CA certificate, these terms limit the set of policies for certification paths that include this certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-extensions.html#cfn-acmpca-certificate-extensions-certificatepolicies
         */
        readonly certificatePolicies?: Array<cdk.IResolvable | CfnCertificate.PolicyInformationProperty> | cdk.IResolvable;
        /**
         * Contains a sequence of one or more X.509 extensions, each of which consists of an object identifier (OID), a base64-encoded value, and the critical flag. For more information, see the [Global OID reference database.](https://docs.aws.amazon.com/https://oidref.com/2.5.29).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-extensions.html#cfn-acmpca-certificate-extensions-customextensions
         */
        readonly customExtensions?: Array<CfnCertificate.CustomExtensionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the `KeyUsage` extension.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-extensions.html#cfn-acmpca-certificate-extensions-extendedkeyusage
         */
        readonly extendedKeyUsage?: Array<CfnCertificate.ExtendedKeyUsageProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Defines one or more purposes for which the key contained in the certificate can be used.
         *
         * Default value for each option is false.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-extensions.html#cfn-acmpca-certificate-extensions-keyusage
         */
        readonly keyUsage?: cdk.IResolvable | CfnCertificate.KeyUsageProperty;
        /**
         * The subject alternative name extension allows identities to be bound to the subject of the certificate.
         *
         * These identities may be included in addition to or in place of the identity in the subject field of the certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-extensions.html#cfn-acmpca-certificate-extensions-subjectalternativenames
         */
        readonly subjectAlternativeNames?: Array<CfnCertificate.GeneralNameProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Specifies the X.509 extension information for a certificate.
     *
     * Extensions present in `CustomExtensions` follow the `ApiPassthrough` [template rules](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-customextension.html
     */
    interface CustomExtensionProperty {
        /**
         * Specifies the critical flag of the X.509 extension.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-customextension.html#cfn-acmpca-certificate-customextension-critical
         */
        readonly critical?: boolean | cdk.IResolvable;
        /**
         * Specifies the object identifier (OID) of the X.509 extension. For more information, see the [Global OID reference database.](https://docs.aws.amazon.com/https://oidref.com/2.5.29).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-customextension.html#cfn-acmpca-certificate-customextension-objectidentifier
         */
        readonly objectIdentifier: string;
        /**
         * Specifies the base64-encoded value of the X.509 extension.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-customextension.html#cfn-acmpca-certificate-customextension-value
         */
        readonly value: string;
    }
    /**
     * Defines the X.509 `CertificatePolicies` extension.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-policyinformation.html
     */
    interface PolicyInformationProperty {
        /**
         * Specifies the object identifier (OID) of the certificate policy under which the certificate was issued.
         *
         * For more information, see NIST's definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-policyinformation.html#cfn-acmpca-certificate-policyinformation-certpolicyid
         */
        readonly certPolicyId: string;
        /**
         * Modifies the given `CertPolicyId` with a qualifier.
         *
         * AWS Private CA supports the certification practice statement (CPS) qualifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-policyinformation.html#cfn-acmpca-certificate-policyinformation-policyqualifiers
         */
        readonly policyQualifiers?: Array<cdk.IResolvable | CfnCertificate.PolicyQualifierInfoProperty> | cdk.IResolvable;
    }
    /**
     * Modifies the `CertPolicyId` of a `PolicyInformation` object with a qualifier.
     *
     * AWS Private CA supports the certification practice statement (CPS) qualifier.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-policyqualifierinfo.html
     */
    interface PolicyQualifierInfoProperty {
        /**
         * Identifies the qualifier modifying a `CertPolicyId` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-policyqualifierinfo.html#cfn-acmpca-certificate-policyqualifierinfo-policyqualifierid
         */
        readonly policyQualifierId: string;
        /**
         * Defines the qualifier type.
         *
         * AWS Private CA supports the use of a URI for a CPS qualifier in this field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-policyqualifierinfo.html#cfn-acmpca-certificate-policyqualifierinfo-qualifier
         */
        readonly qualifier: cdk.IResolvable | CfnCertificate.QualifierProperty;
    }
    /**
     * Defines a `PolicyInformation` qualifier.
     *
     * AWS Private CA supports the [certification practice statement (CPS) qualifier](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.4) defined in RFC 5280.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-qualifier.html
     */
    interface QualifierProperty {
        /**
         * Contains a pointer to a certification practice statement (CPS) published by the CA.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-qualifier.html#cfn-acmpca-certificate-qualifier-cpsuri
         */
        readonly cpsUri: string;
    }
    /**
     * Defines one or more purposes for which the key contained in the certificate can be used.
     *
     * Default value for each option is false.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-keyusage.html
     */
    interface KeyUsageProperty {
        /**
         * Key can be used to sign CRLs.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-keyusage.html#cfn-acmpca-certificate-keyusage-crlsign
         */
        readonly crlSign?: boolean | cdk.IResolvable;
        /**
         * Key can be used to decipher data.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-keyusage.html#cfn-acmpca-certificate-keyusage-dataencipherment
         */
        readonly dataEncipherment?: boolean | cdk.IResolvable;
        /**
         * Key can be used only to decipher data.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-keyusage.html#cfn-acmpca-certificate-keyusage-decipheronly
         */
        readonly decipherOnly?: boolean | cdk.IResolvable;
        /**
         * Key can be used for digital signing.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-keyusage.html#cfn-acmpca-certificate-keyusage-digitalsignature
         */
        readonly digitalSignature?: boolean | cdk.IResolvable;
        /**
         * Key can be used only to encipher data.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-keyusage.html#cfn-acmpca-certificate-keyusage-encipheronly
         */
        readonly encipherOnly?: boolean | cdk.IResolvable;
        /**
         * Key can be used in a key-agreement protocol.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-keyusage.html#cfn-acmpca-certificate-keyusage-keyagreement
         */
        readonly keyAgreement?: boolean | cdk.IResolvable;
        /**
         * Key can be used to sign certificates.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-keyusage.html#cfn-acmpca-certificate-keyusage-keycertsign
         */
        readonly keyCertSign?: boolean | cdk.IResolvable;
        /**
         * Key can be used to encipher data.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-keyusage.html#cfn-acmpca-certificate-keyusage-keyencipherment
         */
        readonly keyEncipherment?: boolean | cdk.IResolvable;
        /**
         * Key can be used for non-repudiation.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-keyusage.html#cfn-acmpca-certificate-keyusage-nonrepudiation
         */
        readonly nonRepudiation?: boolean | cdk.IResolvable;
    }
    /**
     * Describes an ASN.1 X.400 `GeneralName` as defined in [RFC 5280](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc5280) . Only one of the following naming options should be provided. Providing more than one option results in an `InvalidArgsException` error.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-generalname.html
     */
    interface GeneralNameProperty {
        /**
         * Contains information about the certificate subject.
         *
         * The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-generalname.html#cfn-acmpca-certificate-generalname-directoryname
         */
        readonly directoryName?: cdk.IResolvable | CfnCertificate.SubjectProperty;
        /**
         * Represents `GeneralName` as a DNS name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-generalname.html#cfn-acmpca-certificate-generalname-dnsname
         */
        readonly dnsName?: string;
        /**
         * Represents `GeneralName` as an `EdiPartyName` object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-generalname.html#cfn-acmpca-certificate-generalname-edipartyname
         */
        readonly ediPartyName?: CfnCertificate.EdiPartyNameProperty | cdk.IResolvable;
        /**
         * Represents `GeneralName` as an IPv4 or IPv6 address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-generalname.html#cfn-acmpca-certificate-generalname-ipaddress
         */
        readonly ipAddress?: string;
        /**
         * Represents `GeneralName` using an `OtherName` object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-generalname.html#cfn-acmpca-certificate-generalname-othername
         */
        readonly otherName?: cdk.IResolvable | CfnCertificate.OtherNameProperty;
        /**
         * Represents `GeneralName` as an object identifier (OID).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-generalname.html#cfn-acmpca-certificate-generalname-registeredid
         */
        readonly registeredId?: string;
        /**
         * Represents `GeneralName` as an [RFC 822](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc822) email address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-generalname.html#cfn-acmpca-certificate-generalname-rfc822name
         */
        readonly rfc822Name?: string;
        /**
         * Represents `GeneralName` as a URI.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-generalname.html#cfn-acmpca-certificate-generalname-uniformresourceidentifier
         */
        readonly uniformResourceIdentifier?: string;
    }
    /**
     * Describes an Electronic Data Interchange (EDI) entity as described in as defined in [Subject Alternative Name](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc5280) in RFC 5280.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-edipartyname.html
     */
    interface EdiPartyNameProperty {
        /**
         * Specifies the name assigner.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-edipartyname.html#cfn-acmpca-certificate-edipartyname-nameassigner
         */
        readonly nameAssigner: string;
        /**
         * Specifies the party name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-edipartyname.html#cfn-acmpca-certificate-edipartyname-partyname
         */
        readonly partyName: string;
    }
    /**
     * Defines a custom ASN.1 X.400 `GeneralName` using an object identifier (OID) and value. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-othername.html
     */
    interface OtherNameProperty {
        /**
         * Specifies an OID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-othername.html#cfn-acmpca-certificate-othername-typeid
         */
        readonly typeId: string;
        /**
         * Specifies an OID value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-othername.html#cfn-acmpca-certificate-othername-value
         */
        readonly value: string;
    }
    /**
     * Contains information about the certificate subject.
     *
     * The `Subject` field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The `Subject` must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html
     */
    interface SubjectProperty {
        /**
         * For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit.
         *
         * Note: In publicly trusted certificates, the common name must be a fully qualified domain name (FQDN) associated with the certificate subject.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html#cfn-acmpca-certificate-subject-commonname
         */
        readonly commonName?: string;
        /**
         * Two-digit code that specifies the country in which the certificate subject located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html#cfn-acmpca-certificate-subject-country
         */
        readonly country?: string;
        /**
         * Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST’s definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier) .
         *
         * > Custom attributes cannot be used in combination with standard attributes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html#cfn-acmpca-certificate-subject-customattributes
         */
        readonly customAttributes?: Array<CfnCertificate.CustomAttributeProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Disambiguating information for the certificate subject.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html#cfn-acmpca-certificate-subject-distinguishednamequalifier
         */
        readonly distinguishedNameQualifier?: string;
        /**
         * Typically a qualifier appended to the name of an individual.
         *
         * Examples include Jr. for junior, Sr. for senior, and III for third.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html#cfn-acmpca-certificate-subject-generationqualifier
         */
        readonly generationQualifier?: string;
        /**
         * First name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html#cfn-acmpca-certificate-subject-givenname
         */
        readonly givenName?: string;
        /**
         * Concatenation that typically contains the first letter of the *GivenName* , the first letter of the middle name if one exists, and the first letter of the *Surname* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html#cfn-acmpca-certificate-subject-initials
         */
        readonly initials?: string;
        /**
         * The locality (such as a city or town) in which the certificate subject is located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html#cfn-acmpca-certificate-subject-locality
         */
        readonly locality?: string;
        /**
         * Legal name of the organization with which the certificate subject is affiliated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html#cfn-acmpca-certificate-subject-organization
         */
        readonly organization?: string;
        /**
         * A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html#cfn-acmpca-certificate-subject-organizationalunit
         */
        readonly organizationalUnit?: string;
        /**
         * Typically a shortened version of a longer *GivenName* .
         *
         * For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html#cfn-acmpca-certificate-subject-pseudonym
         */
        readonly pseudonym?: string;
        /**
         * The certificate serial number.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html#cfn-acmpca-certificate-subject-serialnumber
         */
        readonly serialNumber?: string;
        /**
         * State in which the subject of the certificate is located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html#cfn-acmpca-certificate-subject-state
         */
        readonly state?: string;
        /**
         * Family name.
         *
         * In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html#cfn-acmpca-certificate-subject-surname
         */
        readonly surname?: string;
        /**
         * A title such as Mr.
         *
         * or Ms., which is pre-pended to the name to refer formally to the certificate subject.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html#cfn-acmpca-certificate-subject-title
         */
        readonly title?: string;
    }
    /**
     * Defines the X.500 relative distinguished name (RDN).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-customattribute.html
     */
    interface CustomAttributeProperty {
        /**
         * Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-customattribute.html#cfn-acmpca-certificate-customattribute-objectidentifier
         */
        readonly objectIdentifier: string;
        /**
         * Specifies the attribute value of relative distinguished name (RDN).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-customattribute.html#cfn-acmpca-certificate-customattribute-value
         */
        readonly value: string;
    }
    /**
     * Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the `KeyUsage` extension.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-extendedkeyusage.html
     */
    interface ExtendedKeyUsageProperty {
        /**
         * Specifies a custom `ExtendedKeyUsage` with an object identifier (OID).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-extendedkeyusage.html#cfn-acmpca-certificate-extendedkeyusage-extendedkeyusageobjectidentifier
         */
        readonly extendedKeyUsageObjectIdentifier?: string;
        /**
         * Specifies a standard `ExtendedKeyUsage` as defined as in [RFC 5280](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-extendedkeyusage.html#cfn-acmpca-certificate-extendedkeyusage-extendedkeyusagetype
         */
        readonly extendedKeyUsageType?: string;
    }
}
/**
 * Properties for defining a `CfnCertificate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html
 */
export interface CfnCertificateProps {
    /**
     * Specifies X.509 certificate information to be included in the issued certificate. An `APIPassthrough` or `APICSRPassthrough` template variant must be selected, or else this parameter is ignored.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-apipassthrough
     */
    readonly apiPassthrough?: CfnCertificate.ApiPassthroughProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) for the private CA issues the certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-certificateauthorityarn
     */
    readonly certificateAuthorityArn: string;
    /**
     * The certificate signing request (CSR) for the certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-certificatesigningrequest
     */
    readonly certificateSigningRequest: string;
    /**
     * The name of the algorithm that will be used to sign the certificate to be issued.
     *
     * This parameter should not be confused with the `SigningAlgorithm` parameter used to sign a CSR in the `CreateCertificateAuthority` action.
     *
     * > The specified signing algorithm family (RSA or ECDSA) must match the algorithm family of the CA's secret key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-signingalgorithm
     */
    readonly signingAlgorithm: string;
    /**
     * Specifies a custom configuration template to use when issuing a certificate.
     *
     * If this parameter is not provided, AWS Private CA defaults to the `EndEntityCertificate/V1` template. For more information about AWS Private CA templates, see [Using Templates](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-templatearn
     */
    readonly templateArn?: string;
    /**
     * The period of time during which the certificate will be valid.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-validity
     */
    readonly validity: cdk.IResolvable | CfnCertificate.ValidityProperty;
    /**
     * Information describing the start of the validity period of the certificate.
     *
     * This parameter sets the “Not Before" date for the certificate.
     *
     * By default, when issuing a certificate, AWS Private CA sets the "Not Before" date to the issuance time minus 60 minutes. This compensates for clock inconsistencies across computer systems. The `ValidityNotBefore` parameter can be used to customize the “Not Before” value.
     *
     * Unlike the `Validity` parameter, the `ValidityNotBefore` parameter is optional.
     *
     * The `ValidityNotBefore` value is expressed as an explicit date and time, using the `Validity` type value `ABSOLUTE` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-validitynotbefore
     */
    readonly validityNotBefore?: cdk.IResolvable | CfnCertificate.ValidityProperty;
}
/**
 * Use the `AWS::ACMPCA::CertificateAuthority` resource to create a private CA.
 *
 * Once the CA exists, you can use the `AWS::ACMPCA::Certificate` resource to issue a new CA certificate. Alternatively, you can issue a CA certificate using an on-premises CA, and then use the `AWS::ACMPCA::CertificateAuthorityActivation` resource to import the new CA certificate and activate the CA.
 *
 * > Before removing a `AWS::ACMPCA::CertificateAuthority` resource from the CloudFormation stack, disable the affected CA. Otherwise, the action will fail. You can disable the CA by removing its associated `AWS::ACMPCA::CertificateAuthorityActivation` resource from CloudFormation.
 *
 * @cloudformationResource AWS::ACMPCA::CertificateAuthority
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html
 */
export declare class CfnCertificateAuthority extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCertificateAuthority from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCertificateAuthority;
    /**
     * The Amazon Resource Name (ARN) for the private CA that issued the certificate.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The Base64 PEM-encoded certificate signing request (CSR) for your certificate authority certificate.
     *
     * @cloudformationAttribute CertificateSigningRequest
     */
    readonly attrCertificateSigningRequest: string;
    /**
     * Specifies information to be added to the extension section of the certificate signing request (CSR).
     */
    csrExtensions?: CfnCertificateAuthority.CsrExtensionsProperty | cdk.IResolvable;
    /**
     * Type of the public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate.
     */
    keyAlgorithm: string;
    /**
     * Specifies a cryptographic key management compliance standard used for handling CA keys.
     */
    keyStorageSecurityStandard?: string;
    /**
     * Information about the Online Certificate Status Protocol (OCSP) configuration or certificate revocation list (CRL) created and maintained by your private CA.
     */
    revocationConfiguration?: cdk.IResolvable | CfnCertificateAuthority.RevocationConfigurationProperty;
    /**
     * Name of the algorithm your private CA uses to sign certificate requests.
     */
    signingAlgorithm: string;
    /**
     * Structure that contains X.500 distinguished name information for your private CA.
     */
    subject: cdk.IResolvable | CfnCertificateAuthority.SubjectProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Key-value pairs that will be attached to the new private CA.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Type of your private CA.
     */
    type: string;
    /**
     * Specifies whether the CA issues general-purpose certificates that typically require a revocation mechanism, or short-lived certificates that may optionally omit revocation because they expire quickly.
     */
    usageMode?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCertificateAuthorityProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCertificateAuthority {
    /**
     * Describes the certificate extensions to be added to the certificate signing request (CSR).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-csrextensions.html
     */
    interface CsrExtensionsProperty {
        /**
         * Indicates the purpose of the certificate and of the key contained in the certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-csrextensions.html#cfn-acmpca-certificateauthority-csrextensions-keyusage
         */
        readonly keyUsage?: cdk.IResolvable | CfnCertificateAuthority.KeyUsageProperty;
        /**
         * For CA certificates, provides a path to additional information pertaining to the CA, such as revocation and policy.
         *
         * For more information, see [Subject Information Access](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.2.2) in RFC 5280.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-csrextensions.html#cfn-acmpca-certificateauthority-csrextensions-subjectinformationaccess
         */
        readonly subjectInformationAccess?: Array<CfnCertificateAuthority.AccessDescriptionProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Defines one or more purposes for which the key contained in the certificate can be used.
     *
     * Default value for each option is false.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-keyusage.html
     */
    interface KeyUsageProperty {
        /**
         * Key can be used to sign CRLs.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-keyusage.html#cfn-acmpca-certificateauthority-keyusage-crlsign
         */
        readonly crlSign?: boolean | cdk.IResolvable;
        /**
         * Key can be used to decipher data.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-keyusage.html#cfn-acmpca-certificateauthority-keyusage-dataencipherment
         */
        readonly dataEncipherment?: boolean | cdk.IResolvable;
        /**
         * Key can be used only to decipher data.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-keyusage.html#cfn-acmpca-certificateauthority-keyusage-decipheronly
         */
        readonly decipherOnly?: boolean | cdk.IResolvable;
        /**
         * Key can be used for digital signing.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-keyusage.html#cfn-acmpca-certificateauthority-keyusage-digitalsignature
         */
        readonly digitalSignature?: boolean | cdk.IResolvable;
        /**
         * Key can be used only to encipher data.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-keyusage.html#cfn-acmpca-certificateauthority-keyusage-encipheronly
         */
        readonly encipherOnly?: boolean | cdk.IResolvable;
        /**
         * Key can be used in a key-agreement protocol.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-keyusage.html#cfn-acmpca-certificateauthority-keyusage-keyagreement
         */
        readonly keyAgreement?: boolean | cdk.IResolvable;
        /**
         * Key can be used to sign certificates.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-keyusage.html#cfn-acmpca-certificateauthority-keyusage-keycertsign
         */
        readonly keyCertSign?: boolean | cdk.IResolvable;
        /**
         * Key can be used to encipher data.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-keyusage.html#cfn-acmpca-certificateauthority-keyusage-keyencipherment
         */
        readonly keyEncipherment?: boolean | cdk.IResolvable;
        /**
         * Key can be used for non-repudiation.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-keyusage.html#cfn-acmpca-certificateauthority-keyusage-nonrepudiation
         */
        readonly nonRepudiation?: boolean | cdk.IResolvable;
    }
    /**
     * Provides access information used by the `authorityInfoAccess` and `subjectInfoAccess` extensions described in [RFC 5280](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc5280) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-accessdescription.html
     */
    interface AccessDescriptionProperty {
        /**
         * The location of `AccessDescription` information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-accessdescription.html#cfn-acmpca-certificateauthority-accessdescription-accesslocation
         */
        readonly accessLocation: CfnCertificateAuthority.GeneralNameProperty | cdk.IResolvable;
        /**
         * The type and format of `AccessDescription` information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-accessdescription.html#cfn-acmpca-certificateauthority-accessdescription-accessmethod
         */
        readonly accessMethod: CfnCertificateAuthority.AccessMethodProperty | cdk.IResolvable;
    }
    /**
     * Describes the type and format of extension access.
     *
     * Only one of `CustomObjectIdentifier` or `AccessMethodType` may be provided. Providing both results in `InvalidArgsException` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-accessmethod.html
     */
    interface AccessMethodProperty {
        /**
         * Specifies the `AccessMethod` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-accessmethod.html#cfn-acmpca-certificateauthority-accessmethod-accessmethodtype
         */
        readonly accessMethodType?: string;
        /**
         * An object identifier (OID) specifying the `AccessMethod` .
         *
         * The OID must satisfy the regular expression shown below. For more information, see NIST's definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-accessmethod.html#cfn-acmpca-certificateauthority-accessmethod-customobjectidentifier
         */
        readonly customObjectIdentifier?: string;
    }
    /**
     * Describes an ASN.1 X.400 `GeneralName` as defined in [RFC 5280](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc5280) . Only one of the following naming options should be provided. Providing more than one option results in an `InvalidArgsException` error.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-generalname.html
     */
    interface GeneralNameProperty {
        /**
         * Contains information about the certificate subject.
         *
         * The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-generalname.html#cfn-acmpca-certificateauthority-generalname-directoryname
         */
        readonly directoryName?: cdk.IResolvable | CfnCertificateAuthority.SubjectProperty;
        /**
         * Represents `GeneralName` as a DNS name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-generalname.html#cfn-acmpca-certificateauthority-generalname-dnsname
         */
        readonly dnsName?: string;
        /**
         * Represents `GeneralName` as an `EdiPartyName` object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-generalname.html#cfn-acmpca-certificateauthority-generalname-edipartyname
         */
        readonly ediPartyName?: CfnCertificateAuthority.EdiPartyNameProperty | cdk.IResolvable;
        /**
         * Represents `GeneralName` as an IPv4 or IPv6 address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-generalname.html#cfn-acmpca-certificateauthority-generalname-ipaddress
         */
        readonly ipAddress?: string;
        /**
         * Represents `GeneralName` using an `OtherName` object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-generalname.html#cfn-acmpca-certificateauthority-generalname-othername
         */
        readonly otherName?: cdk.IResolvable | CfnCertificateAuthority.OtherNameProperty;
        /**
         * Represents `GeneralName` as an object identifier (OID).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-generalname.html#cfn-acmpca-certificateauthority-generalname-registeredid
         */
        readonly registeredId?: string;
        /**
         * Represents `GeneralName` as an [RFC 822](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc822) email address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-generalname.html#cfn-acmpca-certificateauthority-generalname-rfc822name
         */
        readonly rfc822Name?: string;
        /**
         * Represents `GeneralName` as a URI.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-generalname.html#cfn-acmpca-certificateauthority-generalname-uniformresourceidentifier
         */
        readonly uniformResourceIdentifier?: string;
    }
    /**
     * Describes an Electronic Data Interchange (EDI) entity as described in as defined in [Subject Alternative Name](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc5280) in RFC 5280.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-edipartyname.html
     */
    interface EdiPartyNameProperty {
        /**
         * Specifies the name assigner.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-edipartyname.html#cfn-acmpca-certificateauthority-edipartyname-nameassigner
         */
        readonly nameAssigner?: string;
        /**
         * Specifies the party name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-edipartyname.html#cfn-acmpca-certificateauthority-edipartyname-partyname
         */
        readonly partyName: string;
    }
    /**
     * Defines a custom ASN.1 X.400 `GeneralName` using an object identifier (OID) and value. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-othername.html
     */
    interface OtherNameProperty {
        /**
         * Specifies an OID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-othername.html#cfn-acmpca-certificateauthority-othername-typeid
         */
        readonly typeId: string;
        /**
         * Specifies an OID value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-othername.html#cfn-acmpca-certificateauthority-othername-value
         */
        readonly value: string;
    }
    /**
     * ASN1 subject for the certificate authority.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-subject.html
     */
    interface SubjectProperty {
        /**
         * Fully qualified domain name (FQDN) associated with the certificate subject.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-subject.html#cfn-acmpca-certificateauthority-subject-commonname
         */
        readonly commonName?: string;
        /**
         * Two-digit code that specifies the country in which the certificate subject located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-subject.html#cfn-acmpca-certificateauthority-subject-country
         */
        readonly country?: string;
        /**
         * Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST’s definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier) .
         *
         * > Custom attributes cannot be used in combination with standard attributes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-subject.html#cfn-acmpca-certificateauthority-subject-customattributes
         */
        readonly customAttributes?: Array<CfnCertificateAuthority.CustomAttributeProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Disambiguating information for the certificate subject.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-subject.html#cfn-acmpca-certificateauthority-subject-distinguishednamequalifier
         */
        readonly distinguishedNameQualifier?: string;
        /**
         * Typically a qualifier appended to the name of an individual.
         *
         * Examples include Jr. for junior, Sr. for senior, and III for third.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-subject.html#cfn-acmpca-certificateauthority-subject-generationqualifier
         */
        readonly generationQualifier?: string;
        /**
         * First name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-subject.html#cfn-acmpca-certificateauthority-subject-givenname
         */
        readonly givenName?: string;
        /**
         * Concatenation that typically contains the first letter of the GivenName, the first letter of the middle name if one exists, and the first letter of the SurName.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-subject.html#cfn-acmpca-certificateauthority-subject-initials
         */
        readonly initials?: string;
        /**
         * The locality (such as a city or town) in which the certificate subject is located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-subject.html#cfn-acmpca-certificateauthority-subject-locality
         */
        readonly locality?: string;
        /**
         * Legal name of the organization with which the certificate subject is affiliated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-subject.html#cfn-acmpca-certificateauthority-subject-organization
         */
        readonly organization?: string;
        /**
         * A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-subject.html#cfn-acmpca-certificateauthority-subject-organizationalunit
         */
        readonly organizationalUnit?: string;
        /**
         * Typically a shortened version of a longer GivenName.
         *
         * For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-subject.html#cfn-acmpca-certificateauthority-subject-pseudonym
         */
        readonly pseudonym?: string;
        /**
         * The certificate serial number.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-subject.html#cfn-acmpca-certificateauthority-subject-serialnumber
         */
        readonly serialNumber?: string;
        /**
         * State in which the subject of the certificate is located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-subject.html#cfn-acmpca-certificateauthority-subject-state
         */
        readonly state?: string;
        /**
         * Family name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-subject.html#cfn-acmpca-certificateauthority-subject-surname
         */
        readonly surname?: string;
        /**
         * A personal title such as Mr.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-subject.html#cfn-acmpca-certificateauthority-subject-title
         */
        readonly title?: string;
    }
    /**
     * Defines the X.500 relative distinguished name (RDN).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-customattribute.html
     */
    interface CustomAttributeProperty {
        /**
         * Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-customattribute.html#cfn-acmpca-certificateauthority-customattribute-objectidentifier
         */
        readonly objectIdentifier: string;
        /**
         * Specifies the attribute value of relative distinguished name (RDN).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-customattribute.html#cfn-acmpca-certificateauthority-customattribute-value
         */
        readonly value: string;
    }
    /**
     * Certificate revocation information used by the [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html) and [UpdateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html) actions. Your private certificate authority (CA) can configure Online Certificate Status Protocol (OCSP) support and/or maintain a certificate revocation list (CRL). OCSP returns validation information about certificates as requested by clients, and a CRL contains an updated list of certificates revoked by your CA. For more information, see [RevokeCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html) in the *AWS Private CA API Reference* and [Setting up a certificate revocation method](https://docs.aws.amazon.com/privateca/latest/userguide/revocation-setup.html) in the *AWS Private CA User Guide* .
     *
     * The following requirements and constraints apply to revocation configurations.
     *
     * - A configuration disabling CRLs or OCSP must contain only the `Enabled=False` parameter, and will fail if other parameters such as `CustomCname` or `ExpirationInDays` are included.
     * - In a CRL configuration, the `S3BucketName` parameter must conform to the [Amazon S3 bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html) .
     * - A configuration containing a custom Canonical Name (CNAME) parameter for CRLs or OCSP must conform to [RFC2396](https://docs.aws.amazon.com/https://www.ietf.org/rfc/rfc2396.txt) restrictions on the use of special characters in a CNAME.
     * - In a CRL or OCSP configuration, the value of a CNAME parameter must not include a protocol prefix such as "http://" or "https://".
     * - To revoke a certificate, delete the resource from your template, and call the AWS Private CA [RevokeCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html) API and specify the resource's certificate authority ARN.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-revocationconfiguration.html
     */
    interface RevocationConfigurationProperty {
        /**
         * Configuration of the certificate revocation list (CRL), if any, maintained by your private CA.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-revocationconfiguration.html#cfn-acmpca-certificateauthority-revocationconfiguration-crlconfiguration
         */
        readonly crlConfiguration?: CfnCertificateAuthority.CrlConfigurationProperty | cdk.IResolvable;
        /**
         * Configuration of Online Certificate Status Protocol (OCSP) support, if any, maintained by your private CA.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-revocationconfiguration.html#cfn-acmpca-certificateauthority-revocationconfiguration-ocspconfiguration
         */
        readonly ocspConfiguration?: cdk.IResolvable | CfnCertificateAuthority.OcspConfigurationProperty;
    }
    /**
     * Contains information to enable and configure Online Certificate Status Protocol (OCSP) for validating certificate revocation status.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-ocspconfiguration.html
     */
    interface OcspConfigurationProperty {
        /**
         * Flag enabling use of the Online Certificate Status Protocol (OCSP) for validating certificate revocation status.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-ocspconfiguration.html#cfn-acmpca-certificateauthority-ocspconfiguration-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
        /**
         * By default, AWS Private CA injects an Amazon domain into certificates being validated by the Online Certificate Status Protocol (OCSP).
         *
         * A customer can alternatively use this object to define a CNAME specifying a customized OCSP domain.
         *
         * > The content of a Canonical Name (CNAME) record must conform to [RFC2396](https://docs.aws.amazon.com/https://www.ietf.org/rfc/rfc2396.txt) restrictions on the use of special characters in URIs. Additionally, the value of the CNAME must not include a protocol prefix such as "http://" or "https://".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-ocspconfiguration.html#cfn-acmpca-certificateauthority-ocspconfiguration-ocspcustomcname
         */
        readonly ocspCustomCname?: string;
    }
    /**
     * Contains configuration information for a certificate revocation list (CRL).
     *
     * Your private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You can enable CRLs for your new or an existing private CA by setting the *Enabled* parameter to `true` . Your private CA writes CRLs to an S3 bucket that you specify in the *S3BucketName* parameter. You can hide the name of your bucket by specifying a value for the *CustomCname* parameter. Your private CA by default copies the CNAME or the S3 bucket name to the *CRL Distribution Points* extension of each certificate it issues. If you want to configure this default behavior to be something different, you can set the *CrlDistributionPointExtensionConfiguration* parameter. Your S3 bucket policy must give write permission to AWS Private CA.
     *
     * AWS Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see [Encrypting Your CRLs](https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#crl-encryption) .
     *
     * Your private CA uses the value in the *ExpirationInDays* parameter to calculate the *nextUpdate* field in the CRL. The CRL is refreshed prior to a certificate's expiration date or when a certificate is revoked. When a certificate is revoked, it appears in the CRL until the certificate expires, and then in one additional CRL after expiration, and it always appears in the audit report.
     *
     * A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason a CRL update fails, AWS Private CA makes further attempts every 15 minutes.
     *
     * CRLs contain the following fields:
     *
     * - *Version* : The current version number defined in RFC 5280 is V2. The integer value is 0x1.
     * - *Signature Algorithm* : The name of the algorithm used to sign the CRL.
     * - *Issuer* : The X.500 distinguished name of your private CA that issued the CRL.
     * - *Last Update* : The issue date and time of this CRL.
     * - *Next Update* : The day and time by which the next CRL will be issued.
     * - *Revoked Certificates* : List of revoked certificates. Each list item contains the following information.
     *
     * - *Serial Number* : The serial number, in hexadecimal format, of the revoked certificate.
     * - *Revocation Date* : Date and time the certificate was revoked.
     * - *CRL Entry Extensions* : Optional extensions for the CRL entry.
     *
     * - *X509v3 CRL Reason Code* : Reason the certificate was revoked.
     * - *CRL Extensions* : Optional extensions for the CRL.
     *
     * - *X509v3 Authority Key Identifier* : Identifies the public key associated with the private key used to sign the certificate.
     * - *X509v3 CRL Number:* : Decimal sequence number for the CRL.
     * - *Signature Algorithm* : Algorithm used by your private CA to sign the CRL.
     * - *Signature Value* : Signature computed over the CRL.
     *
     * Certificate revocation lists created by AWS Private CA are DER-encoded. You can use the following OpenSSL command to list a CRL.
     *
     * `openssl crl -inform DER -text -in *crl_path* -noout`
     *
     * For more information, see [Planning a certificate revocation list (CRL)](https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html) in the *AWS Private Certificate Authority User Guide*
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-crlconfiguration.html
     */
    interface CrlConfigurationProperty {
        /**
         * Configures the default behavior of the CRL Distribution Point extension for certificates issued by your CA.
         *
         * If this field is not provided, then the CRL Distribution Point extension will be present and contain the default CRL URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-crlconfiguration.html#cfn-acmpca-certificateauthority-crlconfiguration-crldistributionpointextensionconfiguration
         */
        readonly crlDistributionPointExtensionConfiguration?: CfnCertificateAuthority.CrlDistributionPointExtensionConfigurationProperty | cdk.IResolvable;
        /**
         * Specifies the type of CRL.
         *
         * This setting determines the maximum number of certificates that the certificate authority can issue and revoke. For more information, see [AWS Private CA quotas](https://docs.aws.amazon.com/general/latest/gr/pca.html#limits_pca) .
         *
         * - `COMPLETE` - The default setting. AWS Private CA maintains a single CRL file for all unexpired certificates issued by a CA that have been revoked for any reason. Each certificate that AWS Private CA issues is bound to a specific CRL through the CRL distribution point (CDP) defined in [RFC 5280](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc5280) .
         * - `PARTITIONED` - Compared to complete CRLs, partitioned CRLs dramatically increase the number of certificates your private CA can issue.
         *
         * > When using partitioned CRLs, you must validate that the CRL's associated issuing distribution point (IDP) URI matches the certiﬁcate's CDP URI to ensure the right CRL has been fetched. AWS Private CA marks the IDP extension as critical, which your client must be able to process.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-crlconfiguration.html#cfn-acmpca-certificateauthority-crlconfiguration-crltype
         */
        readonly crlType?: string;
        /**
         * Name inserted into the certificate *CRL Distribution Points* extension that enables the use of an alias for the CRL distribution point.
         *
         * Use this value if you don't want the name of your S3 bucket to be public.
         *
         * > The content of a Canonical Name (CNAME) record must conform to [RFC2396](https://docs.aws.amazon.com/https://www.ietf.org/rfc/rfc2396.txt) restrictions on the use of special characters in URIs. Additionally, the value of the CNAME must not include a protocol prefix such as "http://" or "https://".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-crlconfiguration.html#cfn-acmpca-certificateauthority-crlconfiguration-customcname
         */
        readonly customCname?: string;
        /**
         * Designates a custom file path in S3 for CRL(s).
         *
         * For example, `http://<CustomName>/<CustomPath>/<CrlPartition_GUID>.crl` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-crlconfiguration.html#cfn-acmpca-certificateauthority-crlconfiguration-custompath
         */
        readonly customPath?: string;
        /**
         * Boolean value that specifies whether certificate revocation lists (CRLs) are enabled.
         *
         * You can use this value to enable certificate revocation for a new CA when you call the `CreateCertificateAuthority` operation or for an existing CA when you call the `UpdateCertificateAuthority` operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-crlconfiguration.html#cfn-acmpca-certificateauthority-crlconfiguration-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
        /**
         * Validity period of the CRL in days.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-crlconfiguration.html#cfn-acmpca-certificateauthority-crlconfiguration-expirationindays
         */
        readonly expirationInDays?: number;
        /**
         * Name of the S3 bucket that contains the CRL.
         *
         * If you do not provide a value for the *CustomCname* argument, the name of your S3 bucket is placed into the *CRL Distribution Points* extension of the issued certificate. You can change the name of your bucket by calling the [UpdateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html) operation. You must specify a [bucket policy](https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#s3-policies) that allows AWS Private CA to write the CRL to your bucket.
         *
         * > The `S3BucketName` parameter must conform to the [S3 bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-crlconfiguration.html#cfn-acmpca-certificateauthority-crlconfiguration-s3bucketname
         */
        readonly s3BucketName?: string;
        /**
         * Determines whether the CRL will be publicly readable or privately held in the CRL Amazon S3 bucket.
         *
         * If you choose PUBLIC_READ, the CRL will be accessible over the public internet. If you choose BUCKET_OWNER_FULL_CONTROL, only the owner of the CRL S3 bucket can access the CRL, and your PKI clients may need an alternative method of access.
         *
         * If no value is specified, the default is PUBLIC_READ.
         *
         * *Note:* This default can cause CA creation to fail in some circumstances. If you have have enabled the Block Public Access (BPA) feature in your S3 account, then you must specify the value of this parameter as `BUCKET_OWNER_FULL_CONTROL` , and not doing so results in an error. If you have disabled BPA in S3, then you can specify either `BUCKET_OWNER_FULL_CONTROL` or `PUBLIC_READ` as the value.
         *
         * For more information, see [Blocking public access to the S3 bucket](https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#s3-bpa) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-crlconfiguration.html#cfn-acmpca-certificateauthority-crlconfiguration-s3objectacl
         */
        readonly s3ObjectAcl?: string;
    }
    /**
     * Contains configuration information for the default behavior of the CRL Distribution Point (CDP) extension in certificates issued by your CA.
     *
     * This extension contains a link to download the CRL, so you can check whether a certificate has been revoked. To choose whether you want this extension omitted or not in certificates issued by your CA, you can set the *OmitExtension* parameter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-crldistributionpointextensionconfiguration.html
     */
    interface CrlDistributionPointExtensionConfigurationProperty {
        /**
         * Configures whether the CRL Distribution Point extension should be populated with the default URL to the CRL.
         *
         * If set to `true` , then the CDP extension will not be present in any certificates issued by that CA unless otherwise specified through CSR or API passthrough.
         *
         * > Only set this if you have another way to distribute the CRL Distribution Points for certificates issued by your CA, such as the Matter Distributed Compliance Ledger.
         * >
         * > This configuration cannot be enabled with a custom CNAME set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-crldistributionpointextensionconfiguration.html#cfn-acmpca-certificateauthority-crldistributionpointextensionconfiguration-omitextension
         */
        readonly omitExtension: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnCertificateAuthority`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html
 */
export interface CfnCertificateAuthorityProps {
    /**
     * Specifies information to be added to the extension section of the certificate signing request (CSR).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-csrextensions
     */
    readonly csrExtensions?: CfnCertificateAuthority.CsrExtensionsProperty | cdk.IResolvable;
    /**
     * Type of the public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate.
     *
     * When you create a subordinate CA, you must use a key algorithm supported by the parent CA.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-keyalgorithm
     */
    readonly keyAlgorithm: string;
    /**
     * Specifies a cryptographic key management compliance standard used for handling CA keys.
     *
     * Default: FIPS_140_2_LEVEL_3_OR_HIGHER
     *
     * > Some AWS Regions do not support the default. When creating a CA in these Regions, you must provide `FIPS_140_2_LEVEL_2_OR_HIGHER` as the argument for `KeyStorageSecurityStandard` . Failure to do this results in an `InvalidArgsException` with the message, "A certificate authority cannot be created in this region with the specified security standard."
     * >
     * > For information about security standard support in various Regions, see [Storage and security compliance of AWS Private CA private keys](https://docs.aws.amazon.com/privateca/latest/userguide/data-protection.html#private-keys) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-keystoragesecuritystandard
     */
    readonly keyStorageSecurityStandard?: string;
    /**
     * Information about the Online Certificate Status Protocol (OCSP) configuration or certificate revocation list (CRL) created and maintained by your private CA.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-revocationconfiguration
     */
    readonly revocationConfiguration?: cdk.IResolvable | CfnCertificateAuthority.RevocationConfigurationProperty;
    /**
     * Name of the algorithm your private CA uses to sign certificate requests.
     *
     * This parameter should not be confused with the `SigningAlgorithm` parameter used to sign certificates when they are issued.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-signingalgorithm
     */
    readonly signingAlgorithm: string;
    /**
     * Structure that contains X.500 distinguished name information for your private CA.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-subject
     */
    readonly subject: cdk.IResolvable | CfnCertificateAuthority.SubjectProperty;
    /**
     * Key-value pairs that will be attached to the new private CA.
     *
     * You can associate up to 50 tags with a private CA. For information using tags with IAM to manage permissions, see [Controlling Access Using IAM Tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Type of your private CA.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-type
     */
    readonly type: string;
    /**
     * Specifies whether the CA issues general-purpose certificates that typically require a revocation mechanism, or short-lived certificates that may optionally omit revocation because they expire quickly.
     *
     * Short-lived certificate validity is limited to seven days.
     *
     * The default value is GENERAL_PURPOSE.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-usagemode
     */
    readonly usageMode?: string;
}
/**
 * The `AWS::ACMPCA::CertificateAuthorityActivation` resource creates and installs a CA certificate on a CA.
 *
 * If no status is specified, the `AWS::ACMPCA::CertificateAuthorityActivation` resource status defaults to ACTIVE. Once the CA has a CA certificate installed, you can use the resource to toggle the CA status field between `ACTIVE` and `DISABLED` .
 *
 * @cloudformationResource AWS::ACMPCA::CertificateAuthorityActivation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html
 */
export declare class CfnCertificateAuthorityActivation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCertificateAuthorityActivation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCertificateAuthorityActivation;
    /**
     * The complete Base64 PEM-encoded certificate chain, including the certificate authority certificate.
     *
     * @cloudformationAttribute CompleteCertificateChain
     */
    readonly attrCompleteCertificateChain: string;
    /**
     * The Base64 PEM-encoded certificate authority certificate.
     */
    certificate: string;
    /**
     * The Amazon Resource Name (ARN) of your private CA.
     */
    certificateAuthorityArn: string;
    /**
     * The Base64 PEM-encoded certificate chain that chains up to the root CA certificate that you used to sign your private CA certificate.
     */
    certificateChain?: string;
    /**
     * Status of your private CA.
     */
    status?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCertificateAuthorityActivationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnCertificateAuthorityActivation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html
 */
export interface CfnCertificateAuthorityActivationProps {
    /**
     * The Base64 PEM-encoded certificate authority certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html#cfn-acmpca-certificateauthorityactivation-certificate
     */
    readonly certificate: string;
    /**
     * The Amazon Resource Name (ARN) of your private CA.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html#cfn-acmpca-certificateauthorityactivation-certificateauthorityarn
     */
    readonly certificateAuthorityArn: string;
    /**
     * The Base64 PEM-encoded certificate chain that chains up to the root CA certificate that you used to sign your private CA certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html#cfn-acmpca-certificateauthorityactivation-certificatechain
     */
    readonly certificateChain?: string;
    /**
     * Status of your private CA.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html#cfn-acmpca-certificateauthorityactivation-status
     */
    readonly status?: string;
}
/**
 * Grants permissions to the AWS Certificate Manager ( ACM ) service principal ( `acm.amazonaws.com` ) to perform [IssueCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html) , [GetCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificate.html) , and [ListPermissions](https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html) actions on a CA. These actions are needed for the ACM principal to renew private PKI certificates requested through ACM and residing in the same AWS account as the CA.
 *
 * **About permissions** - If the private CA and the certificates it issues reside in the same account, you can use `AWS::ACMPCA::Permission` to grant permissions for ACM to carry out automatic certificate renewals.
 * - For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list permissions.
 * - If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see [Using a Resource Based Policy with AWS Private CA](https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html) .
 *
 * > To update an `AWS::ACMPCA::Permission` resource, you must first delete the existing permission resource from the CloudFormation stack and then create a new permission resource with updated properties.
 *
 * @cloudformationResource AWS::ACMPCA::Permission
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html
 */
export declare class CfnPermission extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPermission from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPermission;
    /**
     * The private CA actions that can be performed by the designated AWS service.
     */
    actions: Array<string>;
    /**
     * The Amazon Resource Number (ARN) of the private CA from which the permission was issued.
     */
    certificateAuthorityArn: string;
    /**
     * The AWS service or entity that holds the permission.
     */
    principal: string;
    /**
     * The ID of the account that assigned the permission.
     */
    sourceAccount?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPermissionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnPermission`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html
 */
export interface CfnPermissionProps {
    /**
     * The private CA actions that can be performed by the designated AWS service.
     *
     * Supported actions are `IssueCertificate` , `GetCertificate` , and `ListPermissions` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html#cfn-acmpca-permission-actions
     */
    readonly actions: Array<string>;
    /**
     * The Amazon Resource Number (ARN) of the private CA from which the permission was issued.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html#cfn-acmpca-permission-certificateauthorityarn
     */
    readonly certificateAuthorityArn: string;
    /**
     * The AWS service or entity that holds the permission.
     *
     * At this time, the only valid principal is `acm.amazonaws.com` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html#cfn-acmpca-permission-principal
     */
    readonly principal: string;
    /**
     * The ID of the account that assigned the permission.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html#cfn-acmpca-permission-sourceaccount
     */
    readonly sourceAccount?: string;
}
