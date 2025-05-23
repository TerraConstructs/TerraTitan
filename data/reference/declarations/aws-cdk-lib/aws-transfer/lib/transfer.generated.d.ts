import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates an agreement.
 *
 * An agreement is a bilateral trading partner agreement, or partnership, between an AWS Transfer Family server and an AS2 process. The agreement defines the file and message transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes.
 *
 * The partner is identified with the `PartnerProfileId` , and the AS2 process is identified with the `LocalProfileId` .
 *
 * > Specify *either* `BaseDirectory` or `CustomDirectories` , but not both. Specifying both causes the command to fail.
 *
 * @cloudformationResource AWS::Transfer::Agreement
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html
 */
export declare class CfnAgreement extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAgreement from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAgreement;
    /**
     * The unique identifier for the AS2 agreement, returned after the API call succeeds.
     *
     * @cloudformationAttribute AgreementId
     */
    readonly attrAgreementId: string;
    /**
     * Specifies the unique Amazon Resource Name (ARN) for the agreement.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Connectors are used to send files using either the AS2 or SFTP protocol.
     */
    accessRole: string;
    /**
     * The landing directory (folder) for files that are transferred by using the AS2 protocol.
     */
    baseDirectory: string;
    /**
     * The name or short description that's used to identify the agreement.
     */
    description?: string;
    /**
     * Determines whether or not unsigned messages from your trading partners will be accepted.
     */
    enforceMessageSigning?: string;
    /**
     * A unique identifier for the AS2 local profile.
     */
    localProfileId: string;
    /**
     * A unique identifier for the partner profile used in the agreement.
     */
    partnerProfileId: string;
    /**
     * Determines whether or not Transfer Family appends a unique string of characters to the end of the AS2 message payload filename when saving it.
     */
    preserveFilename?: string;
    /**
     * A system-assigned unique identifier for a server instance.
     */
    serverId: string;
    /**
     * The current status of the agreement, either `ACTIVE` or `INACTIVE` .
     */
    status?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Key-value pairs that can be used to group and search for agreements.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAgreementProps);
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
 * Properties for defining a `CfnAgreement`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html
 */
export interface CfnAgreementProps {
    /**
     * Connectors are used to send files using either the AS2 or SFTP protocol.
     *
     * For the access role, provide the Amazon Resource Name (ARN) of the AWS Identity and Access Management role to use.
     *
     * *For AS2 connectors*
     *
     * With AS2, you can send files by calling `StartFileTransfer` and specifying the file paths in the request parameter, `SendFilePaths` . We use the file’s parent directory (for example, for `--send-file-paths /bucket/dir/file.txt` , parent directory is `/bucket/dir/` ) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the `AccessRole` needs to provide read and write access to the parent directory of the file location used in the `StartFileTransfer` request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with `StartFileTransfer` .
     *
     * If you are using Basic authentication for your AS2 connector, the access role requires the `secretsmanager:GetSecretValue` permission for the secret. If the secret is encrypted using a customer-managed key instead of the AWS managed key in Secrets Manager, then the role also needs the `kms:Decrypt` permission for that key.
     *
     * *For SFTP connectors*
     *
     * Make sure that the access role provides read and write access to the parent directory of the file location that's used in the `StartFileTransfer` request. Additionally, make sure that the role provides `secretsmanager:GetSecretValue` permission to AWS Secrets Manager .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-accessrole
     */
    readonly accessRole: string;
    /**
     * The landing directory (folder) for files that are transferred by using the AS2 protocol.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-basedirectory
     */
    readonly baseDirectory: string;
    /**
     * The name or short description that's used to identify the agreement.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-description
     */
    readonly description?: string;
    /**
     * Determines whether or not unsigned messages from your trading partners will be accepted.
     *
     * - `ENABLED` : Transfer Family rejects unsigned messages from your trading partner.
     * - `DISABLED` (default value): Transfer Family accepts unsigned messages from your trading partner.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-enforcemessagesigning
     */
    readonly enforceMessageSigning?: string;
    /**
     * A unique identifier for the AS2 local profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-localprofileid
     */
    readonly localProfileId: string;
    /**
     * A unique identifier for the partner profile used in the agreement.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-partnerprofileid
     */
    readonly partnerProfileId: string;
    /**
     * Determines whether or not Transfer Family appends a unique string of characters to the end of the AS2 message payload filename when saving it.
     *
     * - `ENABLED` : the filename provided by your trading parter is preserved when the file is saved.
     * - `DISABLED` (default value): when Transfer Family saves the file, the filename is adjusted, as described in [File names and locations](https://docs.aws.amazon.com/transfer/latest/userguide/send-as2-messages.html#file-names-as2) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-preservefilename
     */
    readonly preserveFilename?: string;
    /**
     * A system-assigned unique identifier for a server instance.
     *
     * This identifier indicates the specific server that the agreement uses.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-serverid
     */
    readonly serverId: string;
    /**
     * The current status of the agreement, either `ACTIVE` or `INACTIVE` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-status
     */
    readonly status?: string;
    /**
     * Key-value pairs that can be used to group and search for agreements.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Imports the signing and encryption certificates that you need to create local (AS2) profiles and partner profiles.
 *
 * @cloudformationResource AWS::Transfer::Certificate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html
 */
export declare class CfnCertificate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
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
     * The unique Amazon Resource Name (ARN) for the certificate.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.
     *
     * @cloudformationAttribute CertificateId
     */
    readonly attrCertificateId: string;
    /**
     * The final date that the certificate is valid.
     *
     * @cloudformationAttribute NotAfterDate
     */
    readonly attrNotAfterDate: string;
    /**
     * The earliest date that the certificate is valid.
     *
     * @cloudformationAttribute NotBeforeDate
     */
    readonly attrNotBeforeDate: string;
    /**
     * The serial number for the certificate.
     *
     * @cloudformationAttribute Serial
     */
    readonly attrSerial: string;
    /**
     * The certificate can be either `ACTIVE` , `PENDING_ROTATION` , or `INACTIVE` . `PENDING_ROTATION` means that this certificate will replace the current certificate when it expires.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * If a private key has been specified for the certificate, its type is `CERTIFICATE_WITH_PRIVATE_KEY` . If there is no private key, the type is `CERTIFICATE` .
     *
     * @cloudformationAttribute Type
     */
    readonly attrType: string;
    /**
     * An optional date that specifies when the certificate becomes active.
     */
    activeDate?: string;
    /**
     * The file name for the certificate.
     */
    certificate: string;
    /**
     * The list of certificates that make up the chain for the certificate.
     */
    certificateChain?: string;
    /**
     * The name or description that's used to identity the certificate.
     */
    description?: string;
    /**
     * An optional date that specifies when the certificate becomes inactive.
     */
    inactiveDate?: string;
    /**
     * The file that contains the private key for the certificate that's being imported.
     */
    privateKey?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Key-value pairs that can be used to group and search for certificates.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Specifies how this certificate is used. It can be used in the following ways:.
     */
    usage: string;
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
/**
 * Properties for defining a `CfnCertificate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html
 */
export interface CfnCertificateProps {
    /**
     * An optional date that specifies when the certificate becomes active.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html#cfn-transfer-certificate-activedate
     */
    readonly activeDate?: string;
    /**
     * The file name for the certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html#cfn-transfer-certificate-certificate
     */
    readonly certificate: string;
    /**
     * The list of certificates that make up the chain for the certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html#cfn-transfer-certificate-certificatechain
     */
    readonly certificateChain?: string;
    /**
     * The name or description that's used to identity the certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html#cfn-transfer-certificate-description
     */
    readonly description?: string;
    /**
     * An optional date that specifies when the certificate becomes inactive.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html#cfn-transfer-certificate-inactivedate
     */
    readonly inactiveDate?: string;
    /**
     * The file that contains the private key for the certificate that's being imported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html#cfn-transfer-certificate-privatekey
     */
    readonly privateKey?: string;
    /**
     * Key-value pairs that can be used to group and search for certificates.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html#cfn-transfer-certificate-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specifies how this certificate is used. It can be used in the following ways:.
     *
     * - `SIGNING` : For signing AS2 messages
     * - `ENCRYPTION` : For encrypting AS2 messages
     * - `TLS` : For securing AS2 communications sent over HTTPS
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html#cfn-transfer-certificate-usage
     */
    readonly usage: string;
}
/**
 * Creates the connector, which captures the parameters for a connection for the AS2 or SFTP protocol.
 *
 * For AS2, the connector is required for sending files to an externally hosted AS2 server. For SFTP, the connector is required when sending files to an SFTP server or receiving files from an SFTP server. For more details about connectors, see [Configure AS2 connectors](https://docs.aws.amazon.com/transfer/latest/userguide/configure-as2-connector.html) and [Create SFTP connectors](https://docs.aws.amazon.com/transfer/latest/userguide/configure-sftp-connector.html) .
 *
 * > You must specify exactly one configuration object: either for AS2 ( `As2Config` ) or SFTP ( `SftpConfig` ).
 *
 * @cloudformationResource AWS::Transfer::Connector
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html
 */
export declare class CfnConnector extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConnector from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConnector;
    /**
     * Specifies the unique Amazon Resource Name (ARN) for the connector.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The service-assigned ID of the connector that is created.
     *
     * @cloudformationAttribute ConnectorId
     */
    readonly attrConnectorId: string;
    /**
     * The list of egress IP addresses of this connector. These IP addresses are assigned automatically when you create the connector.
     *
     * @cloudformationAttribute ServiceManagedEgressIpAddresses
     */
    readonly attrServiceManagedEgressIpAddresses: Array<string>;
    /**
     * Connectors are used to send files using either the AS2 or SFTP protocol.
     */
    accessRole: string;
    /**
     * A structure that contains the parameters for an AS2 connector object.
     */
    as2Config?: any | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that allows a connector to turn on CloudWatch logging for Amazon S3 events.
     */
    loggingRole?: string;
    /**
     * The text name of the security policy for the specified connector.
     */
    securityPolicyName?: string;
    /**
     * A structure that contains the parameters for an SFTP connector object.
     */
    sftpConfig?: cdk.IResolvable | CfnConnector.SftpConfigProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Key-value pairs that can be used to group and search for connectors.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The URL of the partner's AS2 or SFTP endpoint.
     */
    url: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConnectorProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConnector {
    /**
     * A structure that contains the parameters for an AS2 connector object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-as2config.html
     */
    interface As2ConfigProperty {
        /**
         * Provides Basic authentication support to the AS2 Connectors API.
         *
         * To use Basic authentication, you must provide the name or Amazon Resource Name (ARN) of a secret in AWS Secrets Manager .
         *
         * The default value for this parameter is `null` , which indicates that Basic authentication is not enabled for the connector.
         *
         * If the connector should use Basic authentication, the secret needs to be in the following format:
         *
         * `{ "Username": "user-name", "Password": "user-password" }`
         *
         * Replace `user-name` and `user-password` with the credentials for the actual user that is being authenticated.
         *
         * Note the following:
         *
         * - You are storing these credentials in Secrets Manager, *not passing them directly* into this API.
         * - If you are using the API, SDKs, or CloudFormation to configure your connector, then you must create the secret before you can enable Basic authentication. However, if you are using the AWS management console, you can have the system create the secret for you.
         *
         * If you have previously enabled Basic authentication for a connector, you can disable it by using the `UpdateConnector` API call. For example, if you are using the CLI, you can run the following command to remove Basic authentication:
         *
         * `update-connector --connector-id my-connector-id --as2-config 'BasicAuthSecretId=""'`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-as2config.html#cfn-transfer-connector-as2config-basicauthsecretid
         */
        readonly basicAuthSecretId?: string;
        /**
         * Specifies whether the AS2 file is compressed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-as2config.html#cfn-transfer-connector-as2config-compression
         */
        readonly compression?: string;
        /**
         * The algorithm that is used to encrypt the file.
         *
         * Note the following:
         *
         * - Do not use the `DES_EDE3_CBC` algorithm unless you must support a legacy client that requires it, as it is a weak encryption algorithm.
         * - You can only specify `NONE` if the URL for your connector uses HTTPS. Using HTTPS ensures that no traffic is sent in clear text.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-as2config.html#cfn-transfer-connector-as2config-encryptionalgorithm
         */
        readonly encryptionAlgorithm?: string;
        /**
         * A unique identifier for the AS2 local profile.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-as2config.html#cfn-transfer-connector-as2config-localprofileid
         */
        readonly localProfileId?: string;
        /**
         * Used for outbound requests (from an AWS Transfer Family server to a partner AS2 server) to determine whether the partner response for transfers is synchronous or asynchronous.
         *
         * Specify either of the following values:
         *
         * - `SYNC` : The system expects a synchronous MDN response, confirming that the file was transferred successfully (or not).
         * - `NONE` : Specifies that no MDN response is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-as2config.html#cfn-transfer-connector-as2config-mdnresponse
         */
        readonly mdnResponse?: string;
        /**
         * The signing algorithm for the MDN response.
         *
         * > If set to DEFAULT (or not set at all), the value for `SigningAlgorithm` is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-as2config.html#cfn-transfer-connector-as2config-mdnsigningalgorithm
         */
        readonly mdnSigningAlgorithm?: string;
        /**
         * Used as the `Subject` HTTP header attribute in AS2 messages that are being sent with the connector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-as2config.html#cfn-transfer-connector-as2config-messagesubject
         */
        readonly messageSubject?: string;
        /**
         * A unique identifier for the partner profile for the connector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-as2config.html#cfn-transfer-connector-as2config-partnerprofileid
         */
        readonly partnerProfileId?: string;
        /**
         * Specifies whether to use the AWS S3 object content-type as the content-type for the AS2 message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-as2config.html#cfn-transfer-connector-as2config-preservecontenttype
         */
        readonly preserveContentType?: string;
        /**
         * The algorithm that is used to sign the AS2 messages sent with the connector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-as2config.html#cfn-transfer-connector-as2config-signingalgorithm
         */
        readonly signingAlgorithm?: string;
    }
    /**
     * A structure that contains the parameters for an SFTP connector object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-sftpconfig.html
     */
    interface SftpConfigProperty {
        /**
         * The public portion of the host key, or keys, that are used to identify the external server to which you are connecting.
         *
         * You can use the `ssh-keyscan` command against the SFTP server to retrieve the necessary key.
         *
         * The three standard SSH public key format elements are `<key type>` , `<body base64>` , and an optional `<comment>` , with spaces between each element. Specify only the `<key type>` and `<body base64>` : do not enter the `<comment>` portion of the key.
         *
         * For the trusted host key, AWS Transfer Family accepts RSA and ECDSA keys.
         *
         * - For RSA keys, the `<key type>` string is `ssh-rsa` .
         * - For ECDSA keys, the `<key type>` string is either `ecdsa-sha2-nistp256` , `ecdsa-sha2-nistp384` , or `ecdsa-sha2-nistp521` , depending on the size of the key you generated.
         *
         * Run this command to retrieve the SFTP server host key, where your SFTP server name is `ftp.host.com` .
         *
         * `ssh-keyscan ftp.host.com`
         *
         * This prints the public host key to standard output.
         *
         * `ftp.host.com ssh-rsa AAAAB3Nza...<long-string-for-public-key`
         *
         * Copy and paste this string into the `TrustedHostKeys` field for the `create-connector` command or into the *Trusted host keys* field in the console.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-sftpconfig.html#cfn-transfer-connector-sftpconfig-trustedhostkeys
         */
        readonly trustedHostKeys?: Array<string>;
        /**
         * The identifier for the secret (in AWS Secrets Manager) that contains the SFTP user's private key, password, or both.
         *
         * The identifier must be the Amazon Resource Name (ARN) of the secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-sftpconfig.html#cfn-transfer-connector-sftpconfig-usersecretid
         */
        readonly userSecretId?: string;
    }
}
/**
 * Properties for defining a `CfnConnector`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html
 */
export interface CfnConnectorProps {
    /**
     * Connectors are used to send files using either the AS2 or SFTP protocol.
     *
     * For the access role, provide the Amazon Resource Name (ARN) of the AWS Identity and Access Management role to use.
     *
     * *For AS2 connectors*
     *
     * With AS2, you can send files by calling `StartFileTransfer` and specifying the file paths in the request parameter, `SendFilePaths` . We use the file’s parent directory (for example, for `--send-file-paths /bucket/dir/file.txt` , parent directory is `/bucket/dir/` ) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the `AccessRole` needs to provide read and write access to the parent directory of the file location used in the `StartFileTransfer` request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with `StartFileTransfer` .
     *
     * If you are using Basic authentication for your AS2 connector, the access role requires the `secretsmanager:GetSecretValue` permission for the secret. If the secret is encrypted using a customer-managed key instead of the AWS managed key in Secrets Manager, then the role also needs the `kms:Decrypt` permission for that key.
     *
     * *For SFTP connectors*
     *
     * Make sure that the access role provides read and write access to the parent directory of the file location that's used in the `StartFileTransfer` request. Additionally, make sure that the role provides `secretsmanager:GetSecretValue` permission to AWS Secrets Manager .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-accessrole
     */
    readonly accessRole: string;
    /**
     * A structure that contains the parameters for an AS2 connector object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-as2config
     */
    readonly as2Config?: any | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that allows a connector to turn on CloudWatch logging for Amazon S3 events.
     *
     * When set, you can view connector activity in your CloudWatch logs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-loggingrole
     */
    readonly loggingRole?: string;
    /**
     * The text name of the security policy for the specified connector.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-securitypolicyname
     */
    readonly securityPolicyName?: string;
    /**
     * A structure that contains the parameters for an SFTP connector object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-sftpconfig
     */
    readonly sftpConfig?: cdk.IResolvable | CfnConnector.SftpConfigProperty;
    /**
     * Key-value pairs that can be used to group and search for connectors.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The URL of the partner's AS2 or SFTP endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-url
     */
    readonly url: string;
}
/**
 * Creates the local or partner profile to use for AS2 transfers.
 *
 * @cloudformationResource AWS::Transfer::Profile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-profile.html
 */
export declare class CfnProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnProfile;
    /**
     * The Amazon Resource Name associated with the profile, in the form `arn:aws:transfer:region:account-id:profile/profile-id/` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The unique identifier for the AS2 profile, returned after the API call succeeds.
     *
     * @cloudformationAttribute ProfileId
     */
    readonly attrProfileId: string;
    /**
     * The `As2Id` is the *AS2-name* , as defined in the [RFC 4130](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc4130) . For inbound transfers, this is the `AS2-From` header for the AS2 messages sent from the partner. For outbound connectors, this is the `AS2-To` header for the AS2 messages sent to the partner using the `StartFileTransfer` API operation. This ID cannot include spaces.
     */
    as2Id: string;
    /**
     * An array of identifiers for the imported certificates.
     */
    certificateIds?: Array<string>;
    /**
     * Indicates whether to list only `LOCAL` type profiles or only `PARTNER` type profiles.
     */
    profileType: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Key-value pairs that can be used to group and search for profiles.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnProfileProps);
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
 * Properties for defining a `CfnProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-profile.html
 */
export interface CfnProfileProps {
    /**
     * The `As2Id` is the *AS2-name* , as defined in the [RFC 4130](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc4130) . For inbound transfers, this is the `AS2-From` header for the AS2 messages sent from the partner. For outbound connectors, this is the `AS2-To` header for the AS2 messages sent to the partner using the `StartFileTransfer` API operation. This ID cannot include spaces.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-profile.html#cfn-transfer-profile-as2id
     */
    readonly as2Id: string;
    /**
     * An array of identifiers for the imported certificates.
     *
     * You use this identifier for working with profiles and partner profiles.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-profile.html#cfn-transfer-profile-certificateids
     */
    readonly certificateIds?: Array<string>;
    /**
     * Indicates whether to list only `LOCAL` type profiles or only `PARTNER` type profiles.
     *
     * If not supplied in the request, the command lists all types of profiles.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-profile.html#cfn-transfer-profile-profiletype
     */
    readonly profileType: string;
    /**
     * Key-value pairs that can be used to group and search for profiles.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-profile.html#cfn-transfer-profile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Instantiates an auto-scaling virtual server based on the selected file transfer protocol in AWS .
 *
 * When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated `ServerId` property that is assigned to the newly created server.
 *
 * @cloudformationResource AWS::Transfer::Server
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html
 */
export declare class CfnServer extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnServer from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnServer;
    /**
     * Specifies the unique Amazon Resource Name (ARN) of the server.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The list of egress IP addresses of this server. These IP addresses are only relevant for servers that use the AS2 protocol. They are used for sending asynchronous MDNs.
     *
     * These IP addresses are assigned automatically when you create an AS2 server. Additionally, if you update an existing server and add the AS2 protocol, static IP addresses are assigned as well.
     *
     * @cloudformationAttribute As2ServiceManagedEgressIpAddresses
     */
    readonly attrAs2ServiceManagedEgressIpAddresses: Array<string>;
    /**
     * Specifies the unique system-assigned identifier for a server that you instantiate.
     *
     * @cloudformationAttribute ServerId
     */
    readonly attrServerId: string;
    /**
     * The condition of the server that was described. A value of `ONLINE` indicates that the server can accept jobs and transfer files. A `State` value of `OFFLINE` means that the server cannot perform file transfer operations.
     *
     * The states of `STARTING` and `STOPPING` indicate that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of `START_FAILED` or `STOP_FAILED` can indicate an error condition.
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * The Amazon Resource Name (ARN) of the AWS Certificate Manager (ACM) certificate.
     */
    certificate?: string;
    /**
     * Specifies the domain of the storage system that is used for file transfers.
     */
    domain?: string;
    /**
     * The virtual private cloud (VPC) endpoint settings that are configured for your server.
     */
    endpointDetails?: CfnServer.EndpointDetailsProperty | cdk.IResolvable;
    /**
     * The type of endpoint that you want your server to use.
     */
    endpointType?: string;
    /**
     * Required when `IdentityProviderType` is set to `AWS_DIRECTORY_SERVICE` , `AWS _LAMBDA` or `API_GATEWAY` .
     */
    identityProviderDetails?: CfnServer.IdentityProviderDetailsProperty | cdk.IResolvable;
    /**
     * The mode of authentication for a server.
     */
    identityProviderType?: string;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging for Amazon S3 or Amazon EFSevents.
     */
    loggingRole?: string;
    /**
     * Specifies a string to display when users connect to a server. This string is displayed after the user authenticates.
     */
    postAuthenticationLoginBanner?: string;
    /**
     * Specifies a string to display when users connect to a server.
     */
    preAuthenticationLoginBanner?: string;
    /**
     * The protocol settings that are configured for your server.
     */
    protocolDetails?: cdk.IResolvable | CfnServer.ProtocolDetailsProperty;
    /**
     * Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint.
     */
    protocols?: Array<string>;
    /**
     * Specifies whether or not performance for your Amazon S3 directories is optimized. This is disabled by default.
     */
    s3StorageOptions?: cdk.IResolvable | CfnServer.S3StorageOptionsProperty;
    /**
     * Specifies the name of the security policy for the server.
     */
    securityPolicyName?: string;
    /**
     * Specifies the log groups to which your server logs are sent.
     */
    structuredLogDestinations?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Key-value pairs that can be used to group and search for servers.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.
     */
    workflowDetails?: cdk.IResolvable | CfnServer.WorkflowDetailsProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnServerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnServer {
    /**
     * Required when `IdentityProviderType` is set to `AWS_DIRECTORY_SERVICE` , `AWS _LAMBDA` or `API_GATEWAY` .
     *
     * Accepts an array containing all of the information required to use a directory in `AWS_DIRECTORY_SERVICE` or invoke a customer-supplied authentication API, including the API Gateway URL. Cannot be specified when `IdentityProviderType` is set to `SERVICE_MANAGED` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-identityproviderdetails.html
     */
    interface IdentityProviderDetailsProperty {
        /**
         * The identifier of the AWS Directory Service directory that you want to use as your identity provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-identityproviderdetails.html#cfn-transfer-server-identityproviderdetails-directoryid
         */
        readonly directoryId?: string;
        /**
         * The ARN for a Lambda function to use for the Identity provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-identityproviderdetails.html#cfn-transfer-server-identityproviderdetails-function
         */
        readonly function?: string;
        /**
         * This parameter is only applicable if your `IdentityProviderType` is `API_GATEWAY` .
         *
         * Provides the type of `InvocationRole` used to authenticate the user account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-identityproviderdetails.html#cfn-transfer-server-identityproviderdetails-invocationrole
         */
        readonly invocationRole?: string;
        /**
         * For SFTP-enabled servers, and for custom identity providers *only* , you can specify whether to authenticate using a password, SSH key pair, or both.
         *
         * - `PASSWORD` - users must provide their password to connect.
         * - `PUBLIC_KEY` - users must provide their private key to connect.
         * - `PUBLIC_KEY_OR_PASSWORD` - users can authenticate with either their password or their key. This is the default value.
         * - `PUBLIC_KEY_AND_PASSWORD` - users must provide both their private key and their password to connect. The server checks the key first, and then if the key is valid, the system prompts for a password. If the private key provided does not match the public key that is stored, authentication fails.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-identityproviderdetails.html#cfn-transfer-server-identityproviderdetails-sftpauthenticationmethods
         */
        readonly sftpAuthenticationMethods?: string;
        /**
         * Provides the location of the service endpoint used to authenticate users.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-identityproviderdetails.html#cfn-transfer-server-identityproviderdetails-url
         */
        readonly url?: string;
    }
    /**
     * The virtual private cloud (VPC) endpoint settings that are configured for your server.
     *
     * When you host your endpoint within your VPC, you can make your endpoint accessible only to resources within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over the internet. Your VPC's default security groups are automatically assigned to your endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-endpointdetails.html
     */
    interface EndpointDetailsProperty {
        /**
         * A list of address allocation IDs that are required to attach an Elastic IP address to your server's endpoint.
         *
         * An address allocation ID corresponds to the allocation ID of an Elastic IP address. This value can be retrieved from the `allocationId` field from the Amazon EC2 [Address](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Address.html) data type. One way to retrieve this value is by calling the EC2 [DescribeAddresses](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAddresses.html) API.
         *
         * This parameter is optional. Set this parameter if you want to make your VPC endpoint public-facing. For details, see [Create an internet-facing endpoint for your server](https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#create-internet-facing-endpoint) .
         *
         * > This property can only be set as follows:
         * >
         * > - `EndpointType` must be set to `VPC`
         * > - The Transfer Family server must be offline.
         * > - You cannot set this parameter for Transfer Family servers that use the FTP protocol.
         * > - The server must already have `SubnetIds` populated ( `SubnetIds` and `AddressAllocationIds` cannot be updated simultaneously).
         * > - `AddressAllocationIds` can't contain duplicates, and must be equal in length to `SubnetIds` . For example, if you have three subnet IDs, you must also specify three address allocation IDs.
         * > - Call the `UpdateServer` API to set or change this parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-endpointdetails.html#cfn-transfer-server-endpointdetails-addressallocationids
         */
        readonly addressAllocationIds?: Array<string>;
        /**
         * A list of security groups IDs that are available to attach to your server's endpoint.
         *
         * > This property can only be set when `EndpointType` is set to `VPC` .
         * >
         * > You can edit the `SecurityGroupIds` property in the [UpdateServer](https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateServer.html) API only if you are changing the `EndpointType` from `PUBLIC` or `VPC_ENDPOINT` to `VPC` . To change security groups associated with your server's VPC endpoint after creation, use the Amazon EC2 [ModifyVpcEndpoint](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpoint.html) API.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-endpointdetails.html#cfn-transfer-server-endpointdetails-securitygroupids
         */
        readonly securityGroupIds?: Array<string>;
        /**
         * A list of subnet IDs that are required to host your server endpoint in your VPC.
         *
         * > This property can only be set when `EndpointType` is set to `VPC` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-endpointdetails.html#cfn-transfer-server-endpointdetails-subnetids
         */
        readonly subnetIds?: Array<string>;
        /**
         * The ID of the VPC endpoint.
         *
         * > This property can only be set when `EndpointType` is set to `VPC_ENDPOINT` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-endpointdetails.html#cfn-transfer-server-endpointdetails-vpcendpointid
         */
        readonly vpcEndpointId?: string;
        /**
         * The VPC ID of the virtual private cloud in which the server's endpoint will be hosted.
         *
         * > This property can only be set when `EndpointType` is set to `VPC` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-endpointdetails.html#cfn-transfer-server-endpointdetails-vpcid
         */
        readonly vpcId?: string;
    }
    /**
     * The protocol settings that are configured for your server.
     *
     * - To indicate passive mode (for FTP and FTPS protocols), use the `PassiveIp` parameter. Enter a single dotted-quad IPv4 address, such as the external IP address of a firewall, router, or load balancer.
     * - To ignore the error that is generated when the client attempts to use the `SETSTAT` command on a file that you are uploading to an Amazon S3 bucket, use the `SetStatOption` parameter. To have the AWS Transfer Family server ignore the `SETSTAT` command and upload files without needing to make any changes to your SFTP client, set the value to `ENABLE_NO_OP` . If you set the `SetStatOption` parameter to `ENABLE_NO_OP` , Transfer Family generates a log entry to Amazon CloudWatch Logs, so that you can determine when the client is making a `SETSTAT` call.
     * - To determine whether your AWS Transfer Family server resumes recent, negotiated sessions through a unique session ID, use the `TlsSessionResumptionMode` parameter.
     * - `As2Transports` indicates the transport method for the AS2 messages. Currently, only HTTP is supported.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-protocoldetails.html
     */
    interface ProtocolDetailsProperty {
        /**
         * List of `As2Transport` objects.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-protocoldetails.html#cfn-transfer-server-protocoldetails-as2transports
         */
        readonly as2Transports?: Array<string>;
        /**
         * Indicates passive mode, for FTP and FTPS protocols.
         *
         * Enter a single IPv4 address, such as the public IP address of a firewall, router, or load balancer. For example:
         *
         * `aws transfer update-server --protocol-details PassiveIp=0.0.0.0`
         *
         * Replace `0.0.0.0` in the example above with the actual IP address you want to use.
         *
         * > If you change the `PassiveIp` value, you must stop and then restart your Transfer Family server for the change to take effect. For details on using passive mode (PASV) in a NAT environment, see [Configuring your FTPS server behind a firewall or NAT with AWS Transfer Family](https://docs.aws.amazon.com/storage/configuring-your-ftps-server-behind-a-firewall-or-nat-with-aws-transfer-family/) .
         *
         * *Special values*
         *
         * The `AUTO` and `0.0.0.0` are special values for the `PassiveIp` parameter. The value `PassiveIp=AUTO` is assigned by default to FTP and FTPS type servers. In this case, the server automatically responds with one of the endpoint IPs within the PASV response. `PassiveIp=0.0.0.0` has a more unique application for its usage. For example, if you have a High Availability (HA) Network Load Balancer (NLB) environment, where you have 3 subnets, you can only specify a single IP address using the `PassiveIp` parameter. This reduces the effectiveness of having High Availability. In this case, you can specify `PassiveIp=0.0.0.0` . This tells the client to use the same IP address as the Control connection and utilize all AZs for their connections. Note, however, that not all FTP clients support the `PassiveIp=0.0.0.0` response. FileZilla and WinSCP do support it. If you are using other clients, check to see if your client supports the `PassiveIp=0.0.0.0` response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-protocoldetails.html#cfn-transfer-server-protocoldetails-passiveip
         */
        readonly passiveIp?: string;
        /**
         * Use the `SetStatOption` to ignore the error that is generated when the client attempts to use `SETSTAT` on a file you are uploading to an S3 bucket.
         *
         * Some SFTP file transfer clients can attempt to change the attributes of remote files, including timestamp and permissions, using commands, such as `SETSTAT` when uploading the file. However, these commands are not compatible with object storage systems, such as Amazon S3. Due to this incompatibility, file uploads from these clients can result in errors even when the file is otherwise successfully uploaded.
         *
         * Set the value to `ENABLE_NO_OP` to have the Transfer Family server ignore the `SETSTAT` command, and upload files without needing to make any changes to your SFTP client. While the `SetStatOption` `ENABLE_NO_OP` setting ignores the error, it does generate a log entry in Amazon CloudWatch Logs, so you can determine when the client is making a `SETSTAT` call.
         *
         * > If you want to preserve the original timestamp for your file, and modify other file attributes using `SETSTAT` , you can use Amazon EFS as backend storage with Transfer Family.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-protocoldetails.html#cfn-transfer-server-protocoldetails-setstatoption
         */
        readonly setStatOption?: string;
        /**
         * A property used with Transfer Family servers that use the FTPS protocol.
         *
         * TLS Session Resumption provides a mechanism to resume or share a negotiated secret key between the control and data connection for an FTPS session. `TlsSessionResumptionMode` determines whether or not the server resumes recent, negotiated sessions through a unique session ID. This property is available during `CreateServer` and `UpdateServer` calls. If a `TlsSessionResumptionMode` value is not specified during `CreateServer` , it is set to `ENFORCED` by default.
         *
         * - `DISABLED` : the server does not process TLS session resumption client requests and creates a new TLS session for each request.
         * - `ENABLED` : the server processes and accepts clients that are performing TLS session resumption. The server doesn't reject client data connections that do not perform the TLS session resumption client processing.
         * - `ENFORCED` : the server processes and accepts clients that are performing TLS session resumption. The server rejects client data connections that do not perform the TLS session resumption client processing. Before you set the value to `ENFORCED` , test your clients.
         *
         * > Not all FTPS clients perform TLS session resumption. So, if you choose to enforce TLS session resumption, you prevent any connections from FTPS clients that don't perform the protocol negotiation. To determine whether or not you can use the `ENFORCED` value, you need to test your clients.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-protocoldetails.html#cfn-transfer-server-protocoldetails-tlssessionresumptionmode
         */
        readonly tlsSessionResumptionMode?: string;
    }
    /**
     * Container for the `WorkflowDetail` data type.
     *
     * It is used by actions that trigger a workflow to begin execution.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-workflowdetails.html
     */
    interface WorkflowDetailsProperty {
        /**
         * A trigger that starts a workflow if a file is only partially uploaded.
         *
         * You can attach a workflow to a server that executes whenever there is a partial upload.
         *
         * A *partial upload* occurs when a file is open when the session disconnects.
         *
         * > `OnPartialUpload` can contain a maximum of one `WorkflowDetail` object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-workflowdetails.html#cfn-transfer-server-workflowdetails-onpartialupload
         */
        readonly onPartialUpload?: Array<cdk.IResolvable | CfnServer.WorkflowDetailProperty> | cdk.IResolvable;
        /**
         * A trigger that starts a workflow: the workflow begins to execute after a file is uploaded.
         *
         * To remove an associated workflow from a server, you can provide an empty `OnUpload` object, as in the following example.
         *
         * `aws transfer update-server --server-id s-01234567890abcdef --workflow-details '{"OnUpload":[]}'`
         *
         * > `OnUpload` can contain a maximum of one `WorkflowDetail` object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-workflowdetails.html#cfn-transfer-server-workflowdetails-onupload
         */
        readonly onUpload?: Array<cdk.IResolvable | CfnServer.WorkflowDetailProperty> | cdk.IResolvable;
    }
    /**
     * Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.
     *
     * In addition to a workflow to execute when a file is uploaded completely, `WorkflowDetails` can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when a file is open when the session disconnects.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-workflowdetail.html
     */
    interface WorkflowDetailProperty {
        /**
         * Includes the necessary permissions for S3, EFS, and Lambda operations that Transfer can assume, so that all workflow steps can operate on the required resources.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-workflowdetail.html#cfn-transfer-server-workflowdetail-executionrole
         */
        readonly executionRole: string;
        /**
         * A unique identifier for the workflow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-workflowdetail.html#cfn-transfer-server-workflowdetail-workflowid
         */
        readonly workflowId: string;
    }
    /**
     * The Amazon S3 storage options that are configured for your server.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-s3storageoptions.html
     */
    interface S3StorageOptionsProperty {
        /**
         * Specifies whether or not performance for your Amazon S3 directories is optimized. This is disabled by default.
         *
         * By default, home directory mappings have a `TYPE` of `DIRECTORY` . If you enable this option, you would then need to explicitly set the `HomeDirectoryMapEntry` `Type` to `FILE` if you want a mapping to have a file target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-s3storageoptions.html#cfn-transfer-server-s3storageoptions-directorylistingoptimization
         */
        readonly directoryListingOptimization?: string;
    }
}
/**
 * Properties for defining a `CfnServer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html
 */
export interface CfnServerProps {
    /**
     * The Amazon Resource Name (ARN) of the AWS Certificate Manager (ACM) certificate.
     *
     * Required when `Protocols` is set to `FTPS` .
     *
     * To request a new public certificate, see [Request a public certificate](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html) in the *AWS Certificate Manager User Guide* .
     *
     * To import an existing certificate into ACM, see [Importing certificates into ACM](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) in the *AWS Certificate Manager User Guide* .
     *
     * To request a private certificate to use FTPS through private IP addresses, see [Request a private certificate](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-private.html) in the *AWS Certificate Manager User Guide* .
     *
     * Certificates with the following cryptographic algorithms and key sizes are supported:
     *
     * - 2048-bit RSA (RSA_2048)
     * - 4096-bit RSA (RSA_4096)
     * - Elliptic Prime Curve 256 bit (EC_prime256v1)
     * - Elliptic Prime Curve 384 bit (EC_secp384r1)
     * - Elliptic Prime Curve 521 bit (EC_secp521r1)
     *
     * > The certificate must be a valid SSL/TLS X.509 version 3 certificate with FQDN or IP address specified and information about the issuer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-certificate
     */
    readonly certificate?: string;
    /**
     * Specifies the domain of the storage system that is used for file transfers.
     *
     * There are two domains available: Amazon Simple Storage Service (Amazon S3) and Amazon Elastic File System (Amazon EFS). The default value is S3.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-domain
     */
    readonly domain?: string;
    /**
     * The virtual private cloud (VPC) endpoint settings that are configured for your server.
     *
     * When you host your endpoint within your VPC, you can make your endpoint accessible only to resources within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over the internet. Your VPC's default security groups are automatically assigned to your endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-endpointdetails
     */
    readonly endpointDetails?: CfnServer.EndpointDetailsProperty | cdk.IResolvable;
    /**
     * The type of endpoint that you want your server to use.
     *
     * You can choose to make your server's endpoint publicly accessible (PUBLIC) or host it inside your VPC. With an endpoint that is hosted in a VPC, you can restrict access to your server and resources only within your VPC or choose to make it internet facing by attaching Elastic IP addresses directly to it.
     *
     * > After May 19, 2021, you won't be able to create a server using `EndpointType=VPC_ENDPOINT` in your AWS account if your account hasn't already done so before May 19, 2021. If you have already created servers with `EndpointType=VPC_ENDPOINT` in your AWS account on or before May 19, 2021, you will not be affected. After this date, use `EndpointType` = `VPC` .
     * >
     * > For more information, see [Discontinuing the use of VPC_ENDPOINT](https://docs.aws.amazon.com//transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint) .
     * >
     * > It is recommended that you use `VPC` as the `EndpointType` . With this endpoint type, you have the option to directly associate up to three Elastic IPv4 addresses (BYO IP included) with your server's endpoint and use VPC security groups to restrict traffic by the client's public IP address. This is not possible with `EndpointType` set to `VPC_ENDPOINT` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-endpointtype
     */
    readonly endpointType?: string;
    /**
     * Required when `IdentityProviderType` is set to `AWS_DIRECTORY_SERVICE` , `AWS _LAMBDA` or `API_GATEWAY` .
     *
     * Accepts an array containing all of the information required to use a directory in `AWS_DIRECTORY_SERVICE` or invoke a customer-supplied authentication API, including the API Gateway URL. Cannot be specified when `IdentityProviderType` is set to `SERVICE_MANAGED` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-identityproviderdetails
     */
    readonly identityProviderDetails?: CfnServer.IdentityProviderDetailsProperty | cdk.IResolvable;
    /**
     * The mode of authentication for a server.
     *
     * The default value is `SERVICE_MANAGED` , which allows you to store and access user credentials within the AWS Transfer Family service.
     *
     * Use `AWS_DIRECTORY_SERVICE` to provide access to Active Directory groups in AWS Directory Service for Microsoft Active Directory or Microsoft Active Directory in your on-premises environment or in AWS using AD Connector. This option also requires you to provide a Directory ID by using the `IdentityProviderDetails` parameter.
     *
     * Use the `API_GATEWAY` value to integrate with an identity provider of your choosing. The `API_GATEWAY` setting requires you to provide an Amazon API Gateway endpoint URL to call for authentication by using the `IdentityProviderDetails` parameter.
     *
     * Use the `AWS_LAMBDA` value to directly use an AWS Lambda function as your identity provider. If you choose this value, you must specify the ARN for the Lambda function in the `Function` parameter for the `IdentityProviderDetails` data type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-identityprovidertype
     */
    readonly identityProviderType?: string;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging for Amazon S3 or Amazon EFSevents.
     *
     * When set, you can view user activity in your CloudWatch logs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-loggingrole
     */
    readonly loggingRole?: string;
    /**
     * Specifies a string to display when users connect to a server. This string is displayed after the user authenticates.
     *
     * > The SFTP protocol does not support post-authentication display banners.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-postauthenticationloginbanner
     */
    readonly postAuthenticationLoginBanner?: string;
    /**
     * Specifies a string to display when users connect to a server.
     *
     * This string is displayed before the user authenticates. For example, the following banner displays details about using the system:
     *
     * `This system is for the use of authorized users only. Individuals using this computer system without authority, or in excess of their authority, are subject to having all of their activities on this system monitored and recorded by system personnel.`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-preauthenticationloginbanner
     */
    readonly preAuthenticationLoginBanner?: string;
    /**
     * The protocol settings that are configured for your server.
     *
     * - To indicate passive mode (for FTP and FTPS protocols), use the `PassiveIp` parameter. Enter a single dotted-quad IPv4 address, such as the external IP address of a firewall, router, or load balancer.
     * - To ignore the error that is generated when the client attempts to use the `SETSTAT` command on a file that you are uploading to an Amazon S3 bucket, use the `SetStatOption` parameter. To have the AWS Transfer Family server ignore the `SETSTAT` command and upload files without needing to make any changes to your SFTP client, set the value to `ENABLE_NO_OP` . If you set the `SetStatOption` parameter to `ENABLE_NO_OP` , Transfer Family generates a log entry to Amazon CloudWatch Logs, so that you can determine when the client is making a `SETSTAT` call.
     * - To determine whether your AWS Transfer Family server resumes recent, negotiated sessions through a unique session ID, use the `TlsSessionResumptionMode` parameter.
     * - `As2Transports` indicates the transport method for the AS2 messages. Currently, only HTTP is supported.
     *
     * The `Protocols` parameter is an array of strings.
     *
     * *Allowed values* : One or more of `SFTP` , `FTPS` , `FTP` , `AS2`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-protocoldetails
     */
    readonly protocolDetails?: cdk.IResolvable | CfnServer.ProtocolDetailsProperty;
    /**
     * Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint.
     *
     * The available protocols are:
     *
     * - `SFTP` (Secure Shell (SSH) File Transfer Protocol): File transfer over SSH
     * - `FTPS` (File Transfer Protocol Secure): File transfer with TLS encryption
     * - `FTP` (File Transfer Protocol): Unencrypted file transfer
     * - `AS2` (Applicability Statement 2): used for transporting structured business-to-business data
     *
     * > - If you select `FTPS` , you must choose a certificate stored in AWS Certificate Manager (ACM) which is used to identify your server when clients connect to it over FTPS.
     * > - If `Protocol` includes either `FTP` or `FTPS` , then the `EndpointType` must be `VPC` and the `IdentityProviderType` must be either `AWS_DIRECTORY_SERVICE` , `AWS_LAMBDA` , or `API_GATEWAY` .
     * > - If `Protocol` includes `FTP` , then `AddressAllocationIds` cannot be associated.
     * > - If `Protocol` is set only to `SFTP` , the `EndpointType` can be set to `PUBLIC` and the `IdentityProviderType` can be set any of the supported identity types: `SERVICE_MANAGED` , `AWS_DIRECTORY_SERVICE` , `AWS_LAMBDA` , or `API_GATEWAY` .
     * > - If `Protocol` includes `AS2` , then the `EndpointType` must be `VPC` , and domain must be Amazon S3.
     *
     * The `Protocols` parameter is an array of strings.
     *
     * *Allowed values* : One or more of `SFTP` , `FTPS` , `FTP` , `AS2`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-protocols
     */
    readonly protocols?: Array<string>;
    /**
     * Specifies whether or not performance for your Amazon S3 directories is optimized. This is disabled by default.
     *
     * By default, home directory mappings have a `TYPE` of `DIRECTORY` . If you enable this option, you would then need to explicitly set the `HomeDirectoryMapEntry` `Type` to `FILE` if you want a mapping to have a file target.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-s3storageoptions
     */
    readonly s3StorageOptions?: cdk.IResolvable | CfnServer.S3StorageOptionsProperty;
    /**
     * Specifies the name of the security policy for the server.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-securitypolicyname
     */
    readonly securityPolicyName?: string;
    /**
     * Specifies the log groups to which your server logs are sent.
     *
     * To specify a log group, you must provide the ARN for an existing log group. In this case, the format of the log group is as follows:
     *
     * `arn:aws:logs:region-name:amazon-account-id:log-group:log-group-name:*`
     *
     * For example, `arn:aws:logs:us-east-1:111122223333:log-group:mytestgroup:*`
     *
     * If you have previously specified a log group for a server, you can clear it, and in effect turn off structured logging, by providing an empty value for this parameter in an `update-server` call. For example:
     *
     * `update-server --server-id s-1234567890abcdef0 --structured-log-destinations`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-structuredlogdestinations
     */
    readonly structuredLogDestinations?: Array<string>;
    /**
     * Key-value pairs that can be used to group and search for servers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.
     *
     * In addition to a workflow to execute when a file is uploaded completely, `WorkflowDetails` can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when a file is open when the session disconnects.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#cfn-transfer-server-workflowdetails
     */
    readonly workflowDetails?: cdk.IResolvable | CfnServer.WorkflowDetailsProperty;
}
/**
 * The `AWS::Transfer::User` resource creates a user and associates them with an existing server.
 *
 * You can only create and associate users with servers that have the `IdentityProviderType` set to `SERVICE_MANAGED` . Using parameters for `CreateUser` , you can specify the user name, set the home directory, store the user's public key, and assign the user's AWS Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users.
 *
 * @cloudformationResource AWS::Transfer::User
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html
 */
export declare class CfnUser extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUser from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUser;
    /**
     * The Amazon Resource Name associated with the user, in the form `arn:aws:transfer:region: *account-id* :user/ *server-id* / *username*` .
     *
     * An example of a user ARN is: `arn:aws:transfer:us-east-1:123456789012:user/user1` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the server to which the user is attached.
     *
     * An example `ServerId` is `s-01234567890abcdef` .
     *
     * @cloudformationAttribute ServerId
     */
    readonly attrServerId: string;
    /**
     * A unique string that identifies a Transfer Family user account associated with a server.
     *
     * An example `UserName` is `transfer-user-1` .
     *
     * @cloudformationAttribute UserName
     */
    readonly attrUserName: string;
    /**
     * The landing directory (folder) for a user when they log in to the server using the client.
     */
    homeDirectory?: string;
    /**
     * Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible.
     */
    homeDirectoryMappings?: Array<CfnUser.HomeDirectoryMapEntryProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The type of landing directory (folder) that you want your users' home directory to be when they log in to the server.
     */
    homeDirectoryType?: string;
    /**
     * A session policy for your user so you can use the same IAM role across multiple users.
     */
    policy?: string;
    /**
     * Specifies the full POSIX identity, including user ID ( `Uid` ), group ID ( `Gid` ), and any secondary groups IDs ( `SecondaryGids` ), that controls your users' access to your Amazon Elastic File System (Amazon EFS) file systems.
     */
    posixProfile?: cdk.IResolvable | CfnUser.PosixProfileProperty;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system.
     */
    role: string;
    /**
     * A system-assigned unique identifier for a server instance.
     */
    serverId: string;
    /**
     * Specifies the public key portion of the Secure Shell (SSH) keys stored for the described user.
     */
    sshPublicKeys?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Key-value pairs that can be used to group and search for users.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * A unique string that identifies a user and is associated with a `ServerId` .
     */
    userName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnUser {
    /**
     * Represents an object that contains entries and targets for `HomeDirectoryMappings` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-homedirectorymapentry.html
     */
    interface HomeDirectoryMapEntryProperty {
        /**
         * Represents an entry for `HomeDirectoryMappings` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-homedirectorymapentry.html#cfn-transfer-user-homedirectorymapentry-entry
         */
        readonly entry: string;
        /**
         * Represents the map target that is used in a `HomeDirectoryMapEntry` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-homedirectorymapentry.html#cfn-transfer-user-homedirectorymapentry-target
         */
        readonly target: string;
        /**
         * Specifies the type of mapping.
         *
         * Set the type to `FILE` if you want the mapping to point to a file, or `DIRECTORY` for the directory to point to a directory.
         *
         * > By default, home directory mappings have a `Type` of `DIRECTORY` when you create a Transfer Family server. You would need to explicitly set `Type` to `FILE` if you want a mapping to have a file target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-homedirectorymapentry.html#cfn-transfer-user-homedirectorymapentry-type
         */
        readonly type?: string;
    }
    /**
     * The full POSIX identity, including user ID ( `Uid` ), group ID ( `Gid` ), and any secondary groups IDs ( `SecondaryGids` ), that controls your users' access to your Amazon EFS file systems.
     *
     * The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-posixprofile.html
     */
    interface PosixProfileProperty {
        /**
         * The POSIX group ID used for all EFS operations by this user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-posixprofile.html#cfn-transfer-user-posixprofile-gid
         */
        readonly gid: number;
        /**
         * The secondary POSIX group IDs used for all EFS operations by this user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-posixprofile.html#cfn-transfer-user-posixprofile-secondarygids
         */
        readonly secondaryGids?: Array<number> | cdk.IResolvable;
        /**
         * The POSIX user ID used for all EFS operations by this user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-posixprofile.html#cfn-transfer-user-posixprofile-uid
         */
        readonly uid: number;
    }
}
/**
 * Properties for defining a `CfnUser`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html
 */
export interface CfnUserProps {
    /**
     * The landing directory (folder) for a user when they log in to the server using the client.
     *
     * A `HomeDirectory` example is `/bucket_name/home/mydirectory` .
     *
     * > The `HomeDirectory` parameter is only used if `HomeDirectoryType` is set to `PATH` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html#cfn-transfer-user-homedirectory
     */
    readonly homeDirectory?: string;
    /**
     * Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible.
     *
     * You must specify the `Entry` and `Target` pair, where `Entry` shows how the path is made visible and `Target` is the actual Amazon S3 or Amazon EFS path. If you only specify a target, it is displayed as is. You also must ensure that your AWS Identity and Access Management (IAM) role provides access to paths in `Target` . This value can be set only when `HomeDirectoryType` is set to *LOGICAL* .
     *
     * The following is an `Entry` and `Target` pair example.
     *
     * `[ { "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" } ]`
     *
     * In most cases, you can use this value instead of the session policy to lock your user down to the designated home directory (" `chroot` "). To do this, you can set `Entry` to `/` and set `Target` to the value the user should see for their home directory when they log in.
     *
     * The following is an `Entry` and `Target` pair example for `chroot` .
     *
     * `[ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html#cfn-transfer-user-homedirectorymappings
     */
    readonly homeDirectoryMappings?: Array<CfnUser.HomeDirectoryMapEntryProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The type of landing directory (folder) that you want your users' home directory to be when they log in to the server.
     *
     * If you set it to `PATH` , the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer protocol clients. If you set it to `LOGICAL` , you need to provide mappings in the `HomeDirectoryMappings` for how you want to make Amazon S3 or Amazon EFS paths visible to your users.
     *
     * > If `HomeDirectoryType` is `LOGICAL` , you must provide mappings, using the `HomeDirectoryMappings` parameter. If, on the other hand, `HomeDirectoryType` is `PATH` , you provide an absolute path using the `HomeDirectory` parameter. You cannot have both `HomeDirectory` and `HomeDirectoryMappings` in your template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html#cfn-transfer-user-homedirectorytype
     */
    readonly homeDirectoryType?: string;
    /**
     * A session policy for your user so you can use the same IAM role across multiple users.
     *
     * This policy restricts user access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include `${Transfer:UserName}` , `${Transfer:HomeDirectory}` , and `${Transfer:HomeBucket}` .
     *
     * > For session policies, AWS Transfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the `Policy` argument.
     * >
     * > For an example of a session policy, see [Example session policy](https://docs.aws.amazon.com/transfer/latest/userguide/session-policy.html) .
     * >
     * > For more information, see [AssumeRole](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html) in the *AWS Security Token Service API Reference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html#cfn-transfer-user-policy
     */
    readonly policy?: string;
    /**
     * Specifies the full POSIX identity, including user ID ( `Uid` ), group ID ( `Gid` ), and any secondary groups IDs ( `SecondaryGids` ), that controls your users' access to your Amazon Elastic File System (Amazon EFS) file systems.
     *
     * The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html#cfn-transfer-user-posixprofile
     */
    readonly posixProfile?: cdk.IResolvable | CfnUser.PosixProfileProperty;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system.
     *
     * The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html#cfn-transfer-user-role
     */
    readonly role: string;
    /**
     * A system-assigned unique identifier for a server instance.
     *
     * This is the specific server that you added your user to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html#cfn-transfer-user-serverid
     */
    readonly serverId: string;
    /**
     * Specifies the public key portion of the Secure Shell (SSH) keys stored for the described user.
     *
     * > To delete the public key body, set its value to zero keys, as shown here:
     * >
     * > `SshPublicKeys: []`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html#cfn-transfer-user-sshpublickeys
     */
    readonly sshPublicKeys?: Array<string>;
    /**
     * Key-value pairs that can be used to group and search for users.
     *
     * Tags are metadata attached to users for any purpose.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html#cfn-transfer-user-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * A unique string that identifies a user and is associated with a `ServerId` .
     *
     * This user name must be a minimum of 3 and a maximum of 100 characters long. The following are valid characters: a-z, A-Z, 0-9, underscore '_', hyphen '-', period '.', and at sign '@'. The user name can't start with a hyphen, period, or at sign.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html#cfn-transfer-user-username
     */
    readonly userName: string;
}
/**
 * Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes.
 *
 * After creating a workflow, you can associate the workflow created with any transfer servers by specifying the `workflow-details` field in `CreateServer` and `UpdateServer` operations.
 *
 * @cloudformationResource AWS::Transfer::Workflow
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html
 */
export declare class CfnWorkflow extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWorkflow from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWorkflow;
    /**
     * Specifies the unique Amazon Resource Name (ARN) for the workflow.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A unique identifier for a workflow.
     *
     * @cloudformationAttribute WorkflowId
     */
    readonly attrWorkflowId: string;
    /**
     * Specifies the text description for the workflow.
     */
    description?: string;
    /**
     * Specifies the steps (actions) to take if errors are encountered during execution of the workflow.
     */
    onExceptionSteps?: Array<cdk.IResolvable | CfnWorkflow.WorkflowStepProperty> | cdk.IResolvable;
    /**
     * Specifies the details for the steps that are in the specified workflow.
     */
    steps: Array<cdk.IResolvable | CfnWorkflow.WorkflowStepProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Key-value pairs that can be used to group and search for workflows.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnWorkflowProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnWorkflow {
    /**
     * The basic building block of a workflow.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-workflowstep.html
     */
    interface WorkflowStepProperty {
        /**
         * Details for a step that performs a file copy.
         *
         * Consists of the following values:
         *
         * - A description
         * - An Amazon S3 location for the destination of the file copy.
         * - A flag that indicates whether to overwrite an existing file of the same name. The default is `FALSE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-workflowstep.html#cfn-transfer-workflow-workflowstep-copystepdetails
         */
        readonly copyStepDetails?: any | cdk.IResolvable;
        /**
         * Details for a step that invokes an AWS Lambda function.
         *
         * Consists of the Lambda function's name, target, and timeout (in seconds).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-workflowstep.html#cfn-transfer-workflow-workflowstep-customstepdetails
         */
        readonly customStepDetails?: any | cdk.IResolvable;
        /**
         * Details for a step that decrypts an encrypted file.
         *
         * Consists of the following values:
         *
         * - A descriptive name
         * - An Amazon S3 or Amazon Elastic File System (Amazon EFS) location for the source file to decrypt.
         * - An S3 or Amazon EFS location for the destination of the file decryption.
         * - A flag that indicates whether to overwrite an existing file of the same name. The default is `FALSE` .
         * - The type of encryption that's used. Currently, only PGP encryption is supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-workflowstep.html#cfn-transfer-workflow-workflowstep-decryptstepdetails
         */
        readonly decryptStepDetails?: CfnWorkflow.DecryptStepDetailsProperty | cdk.IResolvable;
        /**
         * Details for a step that deletes the file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-workflowstep.html#cfn-transfer-workflow-workflowstep-deletestepdetails
         */
        readonly deleteStepDetails?: any | cdk.IResolvable;
        /**
         * Details for a step that creates one or more tags.
         *
         * You specify one or more tags. Each tag contains a key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-workflowstep.html#cfn-transfer-workflow-workflowstep-tagstepdetails
         */
        readonly tagStepDetails?: any | cdk.IResolvable;
        /**
         * Currently, the following step types are supported.
         *
         * - *`COPY`* - Copy the file to another location.
         * - *`CUSTOM`* - Perform a custom step with an AWS Lambda function target.
         * - *`DECRYPT`* - Decrypt a file that was encrypted before it was uploaded.
         * - *`DELETE`* - Delete the file.
         * - *`TAG`* - Add a tag to the file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-workflowstep.html#cfn-transfer-workflow-workflowstep-type
         */
        readonly type?: string;
    }
    /**
     * Details for a step that decrypts an encrypted file.
     *
     * Consists of the following values:
     *
     * - A descriptive name
     * - An Amazon S3 or Amazon Elastic File System (Amazon EFS) location for the source file to decrypt.
     * - An S3 or Amazon EFS location for the destination of the file decryption.
     * - A flag that indicates whether to overwrite an existing file of the same name. The default is `FALSE` .
     * - The type of encryption that's used. Currently, only PGP encryption is supported.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-decryptstepdetails.html
     */
    interface DecryptStepDetailsProperty {
        /**
         * Specifies the location for the file being decrypted.
         *
         * Use `${Transfer:UserName}` or `${Transfer:UploadDate}` in this field to parametrize the destination prefix by username or uploaded date.
         *
         * - Set the value of `DestinationFileLocation` to `${Transfer:UserName}` to decrypt uploaded files to an Amazon S3 bucket that is prefixed with the name of the Transfer Family user that uploaded the file.
         * - Set the value of `DestinationFileLocation` to `${Transfer:UploadDate}` to decrypt uploaded files to an Amazon S3 bucket that is prefixed with the date of the upload.
         *
         * > The system resolves `UploadDate` to a date format of *YYYY-MM-DD* , based on the date the file is uploaded in UTC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-decryptstepdetails.html#cfn-transfer-workflow-decryptstepdetails-destinationfilelocation
         */
        readonly destinationFileLocation: CfnWorkflow.InputFileLocationProperty | cdk.IResolvable;
        /**
         * The name of the step, used as an identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-decryptstepdetails.html#cfn-transfer-workflow-decryptstepdetails-name
         */
        readonly name?: string;
        /**
         * A flag that indicates whether to overwrite an existing file of the same name. The default is `FALSE` .
         *
         * If the workflow is processing a file that has the same name as an existing file, the behavior is as follows:
         *
         * - If `OverwriteExisting` is `TRUE` , the existing file is replaced with the file being processed.
         * - If `OverwriteExisting` is `FALSE` , nothing happens, and the workflow processing stops.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-decryptstepdetails.html#cfn-transfer-workflow-decryptstepdetails-overwriteexisting
         */
        readonly overwriteExisting?: string;
        /**
         * Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.
         *
         * - To use the previous file as the input, enter `${previous.file}` . In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value.
         * - To use the originally uploaded file location as input for this step, enter `${original.file}` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-decryptstepdetails.html#cfn-transfer-workflow-decryptstepdetails-sourcefilelocation
         */
        readonly sourceFileLocation?: string;
        /**
         * The type of encryption used.
         *
         * Currently, this value must be `PGP` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-decryptstepdetails.html#cfn-transfer-workflow-decryptstepdetails-type
         */
        readonly type: string;
    }
    /**
     * Specifies the location for the file that's being processed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-inputfilelocation.html
     */
    interface InputFileLocationProperty {
        /**
         * Specifies the details for the Amazon Elastic File System (Amazon EFS) file that's being decrypted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-inputfilelocation.html#cfn-transfer-workflow-inputfilelocation-efsfilelocation
         */
        readonly efsFileLocation?: CfnWorkflow.EfsInputFileLocationProperty | cdk.IResolvable;
        /**
         * Specifies the details for the Amazon S3 file that's being copied or decrypted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-inputfilelocation.html#cfn-transfer-workflow-inputfilelocation-s3filelocation
         */
        readonly s3FileLocation?: cdk.IResolvable | CfnWorkflow.S3InputFileLocationProperty;
    }
    /**
     * Specifies the Amazon EFS identifier and the path for the file being used.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-efsinputfilelocation.html
     */
    interface EfsInputFileLocationProperty {
        /**
         * The identifier of the file system, assigned by Amazon EFS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-efsinputfilelocation.html#cfn-transfer-workflow-efsinputfilelocation-filesystemid
         */
        readonly fileSystemId?: string;
        /**
         * The pathname for the folder being used by a workflow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-efsinputfilelocation.html#cfn-transfer-workflow-efsinputfilelocation-path
         */
        readonly path?: string;
    }
    /**
     * Specifies the details for the Amazon S3 location for an input file to a workflow.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-s3inputfilelocation.html
     */
    interface S3InputFileLocationProperty {
        /**
         * Specifies the S3 bucket for the customer input file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-s3inputfilelocation.html#cfn-transfer-workflow-s3inputfilelocation-bucket
         */
        readonly bucket?: string;
        /**
         * The name assigned to the file when it was created in Amazon S3.
         *
         * You use the object key to retrieve the object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-s3inputfilelocation.html#cfn-transfer-workflow-s3inputfilelocation-key
         */
        readonly key?: string;
    }
    /**
     * Details for a step that performs a file copy.
     *
     * Consists of the following values:
     *
     * - A description
     * - An Amazon S3 location for the destination of the file copy.
     * - A flag that indicates whether to overwrite an existing file of the same name. The default is `FALSE` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-copystepdetails.html
     */
    interface CopyStepDetailsProperty {
        /**
         * Specifies the location for the file being copied.
         *
         * Use `${Transfer:UserName}` or `${Transfer:UploadDate}` in this field to parametrize the destination prefix by username or uploaded date.
         *
         * - Set the value of `DestinationFileLocation` to `${Transfer:UserName}` to copy uploaded files to an Amazon S3 bucket that is prefixed with the name of the Transfer Family user that uploaded the file.
         * - Set the value of `DestinationFileLocation` to `${Transfer:UploadDate}` to copy uploaded files to an Amazon S3 bucket that is prefixed with the date of the upload.
         *
         * > The system resolves `UploadDate` to a date format of *YYYY-MM-DD* , based on the date the file is uploaded in UTC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-copystepdetails.html#cfn-transfer-workflow-copystepdetails-destinationfilelocation
         */
        readonly destinationFileLocation?: cdk.IResolvable | CfnWorkflow.S3FileLocationProperty;
        /**
         * The name of the step, used as an identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-copystepdetails.html#cfn-transfer-workflow-copystepdetails-name
         */
        readonly name?: string;
        /**
         * A flag that indicates whether to overwrite an existing file of the same name. The default is `FALSE` .
         *
         * If the workflow is processing a file that has the same name as an existing file, the behavior is as follows:
         *
         * - If `OverwriteExisting` is `TRUE` , the existing file is replaced with the file being processed.
         * - If `OverwriteExisting` is `FALSE` , nothing happens, and the workflow processing stops.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-copystepdetails.html#cfn-transfer-workflow-copystepdetails-overwriteexisting
         */
        readonly overwriteExisting?: string;
        /**
         * Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.
         *
         * - To use the previous file as the input, enter `${previous.file}` . In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value.
         * - To use the originally uploaded file location as input for this step, enter `${original.file}` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-copystepdetails.html#cfn-transfer-workflow-copystepdetails-sourcefilelocation
         */
        readonly sourceFileLocation?: string;
    }
    /**
     * Specifies the S3 details for the file being used, such as bucket, ETag, and so forth.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-s3filelocation.html
     */
    interface S3FileLocationProperty {
        /**
         * Specifies the details for the file location for the file that's being used in the workflow.
         *
         * Only applicable if you are using Amazon S3 storage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-s3filelocation.html#cfn-transfer-workflow-s3filelocation-s3filelocation
         */
        readonly s3FileLocation?: cdk.IResolvable | CfnWorkflow.S3InputFileLocationProperty;
    }
    /**
     * Details for a step that invokes an AWS Lambda function.
     *
     * Consists of the Lambda function's name, target, and timeout (in seconds).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-customstepdetails.html
     */
    interface CustomStepDetailsProperty {
        /**
         * The name of the step, used as an identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-customstepdetails.html#cfn-transfer-workflow-customstepdetails-name
         */
        readonly name?: string;
        /**
         * Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.
         *
         * - To use the previous file as the input, enter `${previous.file}` . In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value.
         * - To use the originally uploaded file location as input for this step, enter `${original.file}` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-customstepdetails.html#cfn-transfer-workflow-customstepdetails-sourcefilelocation
         */
        readonly sourceFileLocation?: string;
        /**
         * The ARN for the Lambda function that is being called.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-customstepdetails.html#cfn-transfer-workflow-customstepdetails-target
         */
        readonly target?: string;
        /**
         * Timeout, in seconds, for the step.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-customstepdetails.html#cfn-transfer-workflow-customstepdetails-timeoutseconds
         */
        readonly timeoutSeconds?: number;
    }
    /**
     * An object that contains the name and file location for a file being deleted by a workflow.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-deletestepdetails.html
     */
    interface DeleteStepDetailsProperty {
        /**
         * The name of the step, used as an identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-deletestepdetails.html#cfn-transfer-workflow-deletestepdetails-name
         */
        readonly name?: string;
        /**
         * Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.
         *
         * - To use the previous file as the input, enter `${previous.file}` . In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value.
         * - To use the originally uploaded file location as input for this step, enter `${original.file}` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-deletestepdetails.html#cfn-transfer-workflow-deletestepdetails-sourcefilelocation
         */
        readonly sourceFileLocation?: string;
    }
    /**
     * Specifies the key-value pair that are assigned to a file during the execution of a Tagging step.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-s3tag.html
     */
    interface S3TagProperty {
        /**
         * The name assigned to the tag that you create.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-s3tag.html#cfn-transfer-workflow-s3tag-key
         */
        readonly key: string;
        /**
         * The value that corresponds to the key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-s3tag.html#cfn-transfer-workflow-s3tag-value
         */
        readonly value: string;
    }
    /**
     * Details for a step that creates one or more tags.
     *
     * You specify one or more tags. Each tag contains a key-value pair.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-tagstepdetails.html
     */
    interface TagStepDetailsProperty {
        /**
         * The name of the step, used as an identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-tagstepdetails.html#cfn-transfer-workflow-tagstepdetails-name
         */
        readonly name?: string;
        /**
         * Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.
         *
         * - To use the previous file as the input, enter `${previous.file}` . In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value.
         * - To use the originally uploaded file location as input for this step, enter `${original.file}` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-tagstepdetails.html#cfn-transfer-workflow-tagstepdetails-sourcefilelocation
         */
        readonly sourceFileLocation?: string;
        /**
         * Array that contains from 1 to 10 key/value pairs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-tagstepdetails.html#cfn-transfer-workflow-tagstepdetails-tags
         */
        readonly tags?: Array<CfnWorkflow.S3TagProperty>;
    }
}
/**
 * Properties for defining a `CfnWorkflow`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html
 */
export interface CfnWorkflowProps {
    /**
     * Specifies the text description for the workflow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-description
     */
    readonly description?: string;
    /**
     * Specifies the steps (actions) to take if errors are encountered during execution of the workflow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-onexceptionsteps
     */
    readonly onExceptionSteps?: Array<cdk.IResolvable | CfnWorkflow.WorkflowStepProperty> | cdk.IResolvable;
    /**
     * Specifies the details for the steps that are in the specified workflow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-steps
     */
    readonly steps: Array<cdk.IResolvable | CfnWorkflow.WorkflowStepProperty> | cdk.IResolvable;
    /**
     * Key-value pairs that can be used to group and search for workflows.
     *
     * Tags are metadata attached to workflows for any purpose.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#cfn-transfer-workflow-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a web app based on specified parameters, and returns the ID for the new web app.
 *
 * @cloudformationResource AWS::Transfer::WebApp
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html
 */
export declare class CfnWebApp extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWebApp from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWebApp;
    /**
     * The Amazon Resource Name (ARN) of the web app.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The Amazon Resource Name (ARN) for the IAM Identity Center application: this value is set automatically when you create your web app.
     *
     * @cloudformationAttribute IdentityProviderDetails.ApplicationArn
     */
    readonly attrIdentityProviderDetailsApplicationArn: string;
    /**
     * The unique identifier for the web app.
     *
     * @cloudformationAttribute WebAppId
     */
    readonly attrWebAppId: string;
    /**
     * The `AccessEndpoint` is the URL that you provide to your users for them to interact with the Transfer Family web app.
     */
    accessEndpoint?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * You can provide a structure that contains the details for the identity provider to use with your web app.
     */
    identityProviderDetails: CfnWebApp.IdentityProviderDetailsProperty | cdk.IResolvable;
    /**
     * Key-value pairs that can be used to group and search for web apps.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * A structure that contains the customization fields for the web app.
     */
    webAppCustomization?: cdk.IResolvable | CfnWebApp.WebAppCustomizationProperty;
    /**
     * A union that contains the value for number of concurrent connections or the user sessions on your web app.
     */
    webAppUnits?: cdk.IResolvable | CfnWebApp.WebAppUnitsProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnWebAppProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnWebApp {
    /**
     * A structure that describes the values to use for the IAM Identity Center settings when you create or update a web app.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-webapp-identityproviderdetails.html
     */
    interface IdentityProviderDetailsProperty {
        /**
         * The Amazon Resource Name (ARN) for the IAM Identity Center application: this value is set automatically when you create your web app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-webapp-identityproviderdetails.html#cfn-transfer-webapp-identityproviderdetails-applicationarn
         */
        readonly applicationArn?: string;
        /**
         * The Amazon Resource Name (ARN) for the IAM Identity Center used for the web app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-webapp-identityproviderdetails.html#cfn-transfer-webapp-identityproviderdetails-instancearn
         */
        readonly instanceArn?: string;
        /**
         * The IAM role in IAM Identity Center used for the web app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-webapp-identityproviderdetails.html#cfn-transfer-webapp-identityproviderdetails-role
         */
        readonly role?: string;
    }
    /**
     * Contains an integer value that represents the value for number of concurrent connections or the user sessions on your web app.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-webapp-webappunits.html
     */
    interface WebAppUnitsProperty {
        /**
         * An integer that represents the number of units for your desired number of concurrent connections, or the number of user sessions on your web app at the same time.
         *
         * Each increment allows an additional 250 concurrent sessions: a value of `1` sets the number of concurrent sessions to 250; `2` sets a value of 500, and so on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-webapp-webappunits.html#cfn-transfer-webapp-webappunits-provisioned
         */
        readonly provisioned: number;
    }
    /**
     * A structure that contains the customization fields for the web app.
     *
     * You can provide a title, logo, and icon to customize the appearance of your web app.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-webapp-webappcustomization.html
     */
    interface WebAppCustomizationProperty {
        /**
         * Returns an icon file data string (in base64 encoding).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-webapp-webappcustomization.html#cfn-transfer-webapp-webappcustomization-faviconfile
         */
        readonly faviconFile?: string;
        /**
         * Returns a logo file data string (in base64 encoding).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-webapp-webappcustomization.html#cfn-transfer-webapp-webappcustomization-logofile
         */
        readonly logoFile?: string;
        /**
         * Returns the page title that you defined for your web app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-webapp-webappcustomization.html#cfn-transfer-webapp-webappcustomization-title
         */
        readonly title?: string;
    }
}
/**
 * Properties for defining a `CfnWebApp`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html
 */
export interface CfnWebAppProps {
    /**
     * The `AccessEndpoint` is the URL that you provide to your users for them to interact with the Transfer Family web app.
     *
     * You can specify a custom URL or use the default value.
     *
     * Before you enter a custom URL for this parameter, follow the steps described in [Update your access endpoint with a custom URL](https://docs.aws.amazon.com//transfer/latest/userguide/webapp-customize.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-accessendpoint
     */
    readonly accessEndpoint?: string;
    /**
     * You can provide a structure that contains the details for the identity provider to use with your web app.
     *
     * For more details about this parameter, see [Configure your identity provider for Transfer Family web apps](https://docs.aws.amazon.com//transfer/latest/userguide/webapp-identity-center.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-identityproviderdetails
     */
    readonly identityProviderDetails: CfnWebApp.IdentityProviderDetailsProperty | cdk.IResolvable;
    /**
     * Key-value pairs that can be used to group and search for web apps.
     *
     * Tags are metadata attached to web apps for any purpose.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * A structure that contains the customization fields for the web app.
     *
     * You can provide a title, logo, and icon to customize the appearance of your web app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-webappcustomization
     */
    readonly webAppCustomization?: cdk.IResolvable | CfnWebApp.WebAppCustomizationProperty;
    /**
     * A union that contains the value for number of concurrent connections or the user sessions on your web app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-webappunits
     */
    readonly webAppUnits?: cdk.IResolvable | CfnWebApp.WebAppUnitsProperty;
}
