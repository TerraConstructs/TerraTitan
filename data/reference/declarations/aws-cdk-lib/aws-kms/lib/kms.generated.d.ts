import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::KMS::Alias` resource specifies a display name for a [KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys) . You can use an alias to identify a KMS key in the AWS KMS console, in the [DescribeKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html) operation, and in [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations) , such as [Decrypt](https://docs.aws.amazon.com/kms/latest/APIReference/API_Decrypt.html) and [GenerateDataKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKey.html) .
 *
 * > Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see [ABAC for AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/abac.html) in the *AWS Key Management Service Developer Guide* .
 *
 * Using an alias to refer to a KMS key can help you simplify key management. For example, an alias in your code can be associated with different KMS keys in different AWS Regions . For more information, see [Using aliases](https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html) in the *AWS Key Management Service Developer Guide* .
 *
 * When specifying an alias, observe the following rules.
 *
 * - Each alias is associated with one KMS key, but multiple aliases can be associated with the same KMS key.
 * - The alias and its associated KMS key must be in the same AWS account and Region.
 * - The alias name must be unique in the AWS account and Region. However, you can create aliases with the same name in different AWS Regions . For example, you can have an `alias/projectKey` in multiple Regions, each of which is associated with a KMS key in its Region.
 * - Each alias name must begin with `alias/` followed by a name, such as `alias/exampleKey` . The alias name can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). Alias names cannot begin with `alias/aws/` . That alias name prefix is reserved for [AWS managed keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk) .
 *
 * *Regions*
 *
 * AWS KMS CloudFormation resources are available in all AWS Regions in which AWS KMS and AWS CloudFormation are supported.
 *
 * @cloudformationResource AWS::KMS::Alias
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-alias.html
 */
export declare class CfnAlias extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAlias from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAlias;
    /**
     * Specifies the alias name. This value must begin with `alias/` followed by a name, such as `alias/ExampleAlias` .
     */
    aliasName: string;
    /**
     * Associates the alias with the specified [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) . The KMS key must be in the same AWS account and Region.
     */
    targetKeyId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAliasProps);
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
 * Properties for defining a `CfnAlias`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-alias.html
 */
export interface CfnAliasProps {
    /**
     * Specifies the alias name. This value must begin with `alias/` followed by a name, such as `alias/ExampleAlias` .
     *
     * > If you change the value of the `AliasName` property, the existing alias is deleted and a new alias is created for the specified KMS key. This change can disrupt applications that use the alias. It can also allow or deny access to a KMS key affected by attribute-based access control (ABAC).
     *
     * The alias must be string of 1-256 characters. It can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). The alias name cannot begin with `alias/aws/` . The `alias/aws/` prefix is reserved for [AWS managed keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-alias.html#cfn-kms-alias-aliasname
     */
    readonly aliasName: string;
    /**
     * Associates the alias with the specified [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) . The KMS key must be in the same AWS account and Region.
     *
     * A valid key ID is required. If you supply a null or empty string value, this operation returns an error.
     *
     * For help finding the key ID and ARN, see [Finding the key ID and ARN](https://docs.aws.amazon.com/kms/latest/developerguide/viewing-keys.html#find-cmk-id-arn) in the *AWS Key Management Service Developer Guide* .
     *
     * Specify the key ID or the key ARN of the KMS key.
     *
     * For example:
     *
     * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
     * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
     *
     * To get the key ID and key ARN for a KMS key, use [ListKeys](https://docs.aws.amazon.com/kms/latest/APIReference/API_ListKeys.html) or [DescribeKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-alias.html#cfn-kms-alias-targetkeyid
     */
    readonly targetKeyId: string;
}
/**
 * The `AWS::KMS::Key` resource specifies an [KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys) in AWS Key Management Service . You can use this resource to create symmetric encryption KMS keys, asymmetric KMS keys for encryption or signing, and symmetric HMAC KMS keys. You can use `AWS::KMS::Key` to create [multi-Region primary keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html#mrk-primary-key) of all supported types. To replicate a multi-Region key, use the `AWS::KMS::ReplicaKey` resource.
 *
 * > If you change the value of the `KeySpec` , `KeyUsage` , `Origin` , or `MultiRegion` properties of an existing KMS key, the update request fails, regardless of the value of the [`UpdateReplacePolicy` attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html) . This prevents you from accidentally deleting a KMS key by changing any of its immutable property values. > AWS KMS replaced the term *customer master key (CMK)* with *AWS KMS key* and *KMS key* . The concept has not changed. To prevent breaking changes, AWS KMS is keeping some variations of this term.
 *
 * You can use symmetric encryption KMS keys to encrypt and decrypt small amounts of data, but they are more commonly used to generate data keys and data key pairs. You can also use a symmetric encryption KMS key to encrypt data stored in AWS services that are [integrated with AWS KMS](https://docs.aws.amazon.com//kms/features/#AWS_Service_Integration) . For more information, see [Symmetric encryption KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#symmetric-cmks) in the *AWS Key Management Service Developer Guide* .
 *
 * You can use asymmetric KMS keys to encrypt and decrypt data or sign messages and verify signatures. To create an asymmetric key, you must specify an asymmetric `KeySpec` value and a `KeyUsage` value. For details, see [Asymmetric keys in AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html) in the *AWS Key Management Service Developer Guide* .
 *
 * You can use HMAC KMS keys (which are also symmetric keys) to generate and verify hash-based message authentication codes. To create an HMAC key, you must specify an HMAC `KeySpec` value and a `KeyUsage` value of `GENERATE_VERIFY_MAC` . For details, see [HMAC keys in AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html) in the *AWS Key Management Service Developer Guide* .
 *
 * You can also create symmetric encryption, asymmetric, and HMAC multi-Region primary keys. To create a multi-Region primary key, set the `MultiRegion` property to `true` . For information about multi-Region keys, see [Multi-Region keys in AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the *AWS Key Management Service Developer Guide* .
 *
 * You cannot use the `AWS::KMS::Key` resource to specify a KMS key with [imported key material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html) or a KMS key in a [custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html) .
 *
 * *Regions*
 *
 * AWS KMS CloudFormation resources are available in all Regions in which AWS KMS and AWS CloudFormation are supported. You can use the `AWS::KMS::Key` resource to create and manage all KMS key types that are supported in a Region.
 *
 * @cloudformationResource AWS::KMS::Key
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html
 */
export declare class CfnKey extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnKey from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnKey;
    /**
     * The Amazon Resource Name (ARN) of the KMS key, such as `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab` .
     *
     * For information about the key ARN of a KMS key, see [Key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN) in the *AWS Key Management Service Developer Guide* .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The key ID of the KMS key, such as `1234abcd-12ab-34cd-56ef-1234567890ab` .
     *
     * For information about the key ID of a KMS key, see [Key ID](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id) in the *AWS Key Management Service Developer Guide* .
     *
     * @cloudformationAttribute KeyId
     */
    readonly attrKeyId: string;
    /**
     * Skips ("bypasses") the key policy lockout safety check. The default value is false.
     */
    bypassPolicyLockoutSafetyCheck?: boolean | cdk.IResolvable;
    /**
     * A description of the KMS key.
     */
    description?: string;
    /**
     * Specifies whether the KMS key is enabled. Disabled KMS keys cannot be used in cryptographic operations.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * Enables automatic rotation of the key material for the specified KMS key.
     */
    enableKeyRotation?: boolean | cdk.IResolvable;
    /**
     * The key policy to attach to the KMS key.
     */
    keyPolicy?: any | cdk.IResolvable;
    /**
     * Specifies the type of KMS key to create.
     */
    keySpec?: string;
    /**
     * Determines the [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations) for which you can use the KMS key. The default value is `ENCRYPT_DECRYPT` . This property is required for asymmetric KMS keys and HMAC KMS keys. You can't change the `KeyUsage` value after the KMS key is created.
     */
    keyUsage?: string;
    /**
     * Creates a multi-Region primary key that you can replicate in other AWS Regions .
     */
    multiRegion?: boolean | cdk.IResolvable;
    /**
     * The source of the key material for the KMS key.
     */
    origin?: string;
    /**
     * Specifies the number of days in the waiting period before AWS KMS deletes a KMS key that has been removed from a CloudFormation stack.
     */
    pendingWindowInDays?: number;
    /**
     * Specifies a custom period of time between each rotation date.
     */
    rotationPeriodInDays?: number;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Assigns one or more tags to the replica key.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnKeyProps);
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
 * Properties for defining a `CfnKey`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html
 */
export interface CfnKeyProps {
    /**
     * Skips ("bypasses") the key policy lockout safety check. The default value is false.
     *
     * > Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not set this value to true indiscriminately.
     * >
     * > For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-default.html#prevent-unmanageable-key) in the *AWS Key Management Service Developer Guide* .
     *
     * Use this parameter only when you intend to prevent the principal that is making the request from making a subsequent [PutKeyPolicy](https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html) request on the KMS key.
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-bypasspolicylockoutsafetycheck
     */
    readonly bypassPolicyLockoutSafetyCheck?: boolean | cdk.IResolvable;
    /**
     * A description of the KMS key.
     *
     * Use a description that helps you to distinguish this KMS key from others in the account, such as its intended use.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-description
     */
    readonly description?: string;
    /**
     * Specifies whether the KMS key is enabled. Disabled KMS keys cannot be used in cryptographic operations.
     *
     * When `Enabled` is `true` , the *key state* of the KMS key is `Enabled` . When `Enabled` is `false` , the key state of the KMS key is `Disabled` . The default value is `true` .
     *
     * The actual key state of the KMS key might be affected by actions taken outside of CloudFormation, such as running the [EnableKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKey.html) , [DisableKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_DisableKey.html) , or [ScheduleKeyDeletion](https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html) operations.
     *
     * For information about the key states of a KMS key, see [Key state: Effect on your KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *AWS Key Management Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * Enables automatic rotation of the key material for the specified KMS key.
     *
     * By default, automatic key rotation is not enabled.
     *
     * AWS KMS supports automatic rotation only for symmetric encryption KMS keys ( `KeySpec` = `SYMMETRIC_DEFAULT` ). For asymmetric KMS keys, HMAC KMS keys, and KMS keys with Origin `EXTERNAL` , omit the `EnableKeyRotation` property or set it to `false` .
     *
     * To enable automatic key rotation of the key material for a multi-Region KMS key, set `EnableKeyRotation` to `true` on the primary key (created by using `AWS::KMS::Key` ). AWS KMS copies the rotation status to all replica keys. For details, see [Rotating multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-manage.html#multi-region-rotate) in the *AWS Key Management Service Developer Guide* .
     *
     * When you enable automatic rotation, AWS KMS automatically creates new key material for the KMS key one year after the enable date and every year thereafter. AWS KMS retains all key material until you delete the KMS key. For detailed information about automatic key rotation, see [Rotating KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html) in the *AWS Key Management Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-enablekeyrotation
     */
    readonly enableKeyRotation?: boolean | cdk.IResolvable;
    /**
     * The key policy to attach to the KMS key.
     *
     * If you provide a key policy, it must meet the following criteria:
     *
     * - The key policy must allow the caller to make a subsequent [PutKeyPolicy](https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html) request on the KMS key. This reduces the risk that the KMS key becomes unmanageable. For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam) in the *AWS Key Management Service Developer Guide* . (To omit this condition, set `BypassPolicyLockoutSafetyCheck` to true.)
     * - Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to AWS KMS . When you create a new AWS principal (for example, an IAM user or role), you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to AWS KMS . For more information, see [Changes that I make are not always immediately visible](https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency) in the *AWS Identity and Access Management User Guide* .
     *
     * If you do not provide a key policy, AWS KMS attaches a default key policy to the KMS key. For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default) in the *AWS Key Management Service Developer Guide* .
     *
     * A key policy document can include only the following characters:
     *
     * - Printable ASCII characters
     * - Printable characters in the Basic Latin and Latin-1 Supplement character set
     * - The tab ( `\u0009` ), line feed ( `\u000A` ), and carriage return ( `\u000D` ) special characters
     *
     * *Minimum* : `1`
     *
     * *Maximum* : `32768`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-keypolicy
     */
    readonly keyPolicy?: any | cdk.IResolvable;
    /**
     * Specifies the type of KMS key to create.
     *
     * The default value, `SYMMETRIC_DEFAULT` , creates a KMS key with a 256-bit symmetric key for encryption and decryption. In China Regions, `SYMMETRIC_DEFAULT` creates a 128-bit symmetric key that uses SM4 encryption. You can't change the `KeySpec` value after the KMS key is created. For help choosing a key spec for your KMS key, see [Choosing a KMS key type](https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-choose.html) in the *AWS Key Management Service Developer Guide* .
     *
     * The `KeySpec` property determines the type of key material in the KMS key and the algorithms that the KMS key supports. To further restrict the algorithms that can be used with the KMS key, use a condition key in its key policy or IAM policy. For more information, see [AWS KMS condition keys](https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms) in the *AWS Key Management Service Developer Guide* .
     *
     * > If you change the value of the `KeySpec` property on an existing KMS key, the update request fails, regardless of the value of the [`UpdateReplacePolicy` attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html) . This prevents you from accidentally deleting a KMS key by changing an immutable property value. > [AWS services that are integrated with AWS KMS](https://docs.aws.amazon.com/kms/features/#AWS_Service_Integration) use symmetric encryption KMS keys to protect your data. These services do not support encryption with asymmetric KMS keys. For help determining whether a KMS key is asymmetric, see [Identifying asymmetric KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/find-symm-asymm.html) in the *AWS Key Management Service Developer Guide* .
     *
     * AWS KMS supports the following key specs for KMS keys:
     *
     * - Symmetric encryption key (default)
     *
     * - `SYMMETRIC_DEFAULT` (AES-256-GCM)
     * - HMAC keys (symmetric)
     *
     * - `HMAC_224`
     * - `HMAC_256`
     * - `HMAC_384`
     * - `HMAC_512`
     * - Asymmetric RSA key pairs (encryption and decryption *or* signing and verification)
     *
     * - `RSA_2048`
     * - `RSA_3072`
     * - `RSA_4096`
     * - Asymmetric NIST-recommended elliptic curve key pairs (signing and verification *or* deriving shared secrets)
     *
     * - `ECC_NIST_P256` (secp256r1)
     * - `ECC_NIST_P384` (secp384r1)
     * - `ECC_NIST_P521` (secp521r1)
     * - Other asymmetric elliptic curve key pairs (signing and verification)
     *
     * - `ECC_SECG_P256K1` (secp256k1), commonly used for cryptocurrencies.
     * - SM2 key pairs (encryption and decryption *or* signing and verification *or* deriving shared secrets)
     *
     * - `SM2` (China Regions only)
     *
     * @default - "SYMMETRIC_DEFAULT"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-keyspec
     */
    readonly keySpec?: string;
    /**
     * Determines the [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations) for which you can use the KMS key. The default value is `ENCRYPT_DECRYPT` . This property is required for asymmetric KMS keys and HMAC KMS keys. You can't change the `KeyUsage` value after the KMS key is created.
     *
     * > If you change the value of the `KeyUsage` property on an existing KMS key, the update request fails, regardless of the value of the [`UpdateReplacePolicy` attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html) . This prevents you from accidentally deleting a KMS key by changing an immutable property value.
     *
     * Select only one valid value.
     *
     * - For symmetric encryption KMS keys, omit the parameter or specify `ENCRYPT_DECRYPT` .
     * - For HMAC KMS keys (symmetric), specify `GENERATE_VERIFY_MAC` .
     * - For asymmetric KMS keys with RSA key pairs, specify `ENCRYPT_DECRYPT` or `SIGN_VERIFY` .
     * - For asymmetric KMS keys with NIST-recommended elliptic curve key pairs, specify `SIGN_VERIFY` or `KEY_AGREEMENT` .
     * - For asymmetric KMS keys with `ECC_SECG_P256K1` key pairs specify `SIGN_VERIFY` .
     * - For asymmetric KMS keys with SM2 key pairs (China Regions only), specify `ENCRYPT_DECRYPT` , `SIGN_VERIFY` , or `KEY_AGREEMENT` .
     *
     * @default - "ENCRYPT_DECRYPT"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-keyusage
     */
    readonly keyUsage?: string;
    /**
     * Creates a multi-Region primary key that you can replicate in other AWS Regions .
     *
     * You can't change the `MultiRegion` value after the KMS key is created.
     *
     * For a list of AWS Regions in which multi-Region keys are supported, see [Multi-Region keys in AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the ** .
     *
     * > If you change the value of the `MultiRegion` property on an existing KMS key, the update request fails, regardless of the value of the [`UpdateReplacePolicy` attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html) . This prevents you from accidentally deleting a KMS key by changing an immutable property value.
     *
     * For a multi-Region key, set to this property to `true` . For a single-Region key, omit this property or set it to `false` . The default value is `false` .
     *
     * *Multi-Region keys* are an AWS KMS feature that lets you create multiple interoperable KMS keys in different AWS Regions . Because these KMS keys have the same key ID, key material, and other metadata, you can use them to encrypt data in one AWS Region and decrypt it in a different AWS Region without making a cross-Region call or exposing the plaintext data. For more information, see [Multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the *AWS Key Management Service Developer Guide* .
     *
     * You can create a symmetric encryption, HMAC, or asymmetric multi-Region KMS key, and you can create a multi-Region key with imported key material. However, you cannot create a multi-Region key in a custom key store.
     *
     * To create a replica of this primary key in a different AWS Region , create an [AWS::KMS::ReplicaKey](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html) resource in a CloudFormation stack in the replica Region. Specify the key ARN of this primary key.
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-multiregion
     */
    readonly multiRegion?: boolean | cdk.IResolvable;
    /**
     * The source of the key material for the KMS key.
     *
     * You cannot change the origin after you create the KMS key. The default is `AWS_KMS` , which means that AWS KMS creates the key material.
     *
     * To [create a KMS key with no key material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-create-cmk.html) (for imported key material), set this value to `EXTERNAL` . For more information about importing key material into AWS KMS , see [Importing Key Material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html) in the *AWS Key Management Service Developer Guide* .
     *
     * You can ignore `ENABLED` when Origin is `EXTERNAL` . When a KMS key with Origin `EXTERNAL` is created, the key state is `PENDING_IMPORT` and `ENABLED` is `false` . After you import the key material, `ENABLED` updated to `true` . The KMS key can then be used for Cryptographic Operations.
     *
     * > AWS CloudFormation doesn't support creating an `Origin` parameter of the `AWS_CLOUDHSM` or `EXTERNAL_KEY_STORE` values.
     *
     * @default - "AWS_KMS"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-origin
     */
    readonly origin?: string;
    /**
     * Specifies the number of days in the waiting period before AWS KMS deletes a KMS key that has been removed from a CloudFormation stack.
     *
     * Enter a value between 7 and 30 days. The default value is 30 days.
     *
     * When you remove a KMS key from a CloudFormation stack, AWS KMS schedules the KMS key for deletion and starts the mandatory waiting period. The `PendingWindowInDays` property determines the length of waiting period. During the waiting period, the key state of KMS key is `Pending Deletion` or `Pending Replica Deletion` , which prevents the KMS key from being used in cryptographic operations. When the waiting period expires, AWS KMS permanently deletes the KMS key.
     *
     * AWS KMS will not delete a [multi-Region primary key](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) that has replica keys. If you remove a multi-Region primary key from a CloudFormation stack, its key state changes to `PendingReplicaDeletion` so it cannot be replicated or used in cryptographic operations. This state can persist indefinitely. When the last of its replica keys is deleted, the key state of the primary key changes to `PendingDeletion` and the waiting period specified by `PendingWindowInDays` begins. When this waiting period expires, AWS KMS deletes the primary key. For details, see [Deleting multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-delete.html) in the *AWS Key Management Service Developer Guide* .
     *
     * You cannot use a CloudFormation template to cancel deletion of the KMS key after you remove it from the stack, regardless of the waiting period. If you specify a KMS key in your template, even one with the same name, CloudFormation creates a new KMS key. To cancel deletion of a KMS key, use the AWS KMS console or the [CancelKeyDeletion](https://docs.aws.amazon.com/kms/latest/APIReference/API_CancelKeyDeletion.html) operation.
     *
     * For information about the `Pending Deletion` and `Pending Replica Deletion` key states, see [Key state: Effect on your KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *AWS Key Management Service Developer Guide* . For more information about deleting KMS keys, see the [ScheduleKeyDeletion](https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html) operation in the *AWS Key Management Service API Reference* and [Deleting KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html) in the *AWS Key Management Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-pendingwindowindays
     */
    readonly pendingWindowInDays?: number;
    /**
     * Specifies a custom period of time between each rotation date.
     *
     * If no value is specified, the default value is 365 days.
     *
     * The rotation period defines the number of days after you enable automatic key rotation that AWS KMS will rotate your key material, and the number of days between each automatic rotation thereafter.
     *
     * You can use the [`kms:RotationPeriodInDays`](https://docs.aws.amazon.com/kms/latest/developerguide/conditions-kms.html#conditions-kms-rotation-period-in-days) condition key to further constrain the values that principals can specify in the `RotationPeriodInDays` parameter.
     *
     * For more information about rotating KMS keys and automatic rotation, see [Rotating keys](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html) in the *AWS Key Management Service Developer Guide* .
     *
     * @default - 365
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-rotationperiodindays
     */
    readonly rotationPeriodInDays?: number;
    /**
     * Assigns one or more tags to the replica key.
     *
     * > Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see [ABAC for AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/abac.html) in the *AWS Key Management Service Developer Guide* .
     *
     * For information about tags in AWS KMS , see [Tagging keys](https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html) in the *AWS Key Management Service Developer Guide* . For information about tags in CloudFormation, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::KMS::ReplicaKey` resource specifies a multi-Region replica key that is based on a multi-Region primary key.
 *
 * *Multi-Region keys* are an AWS KMS feature that lets you create multiple interoperable KMS keys in different AWS Regions . Because these KMS keys have the same key ID, key material, and other metadata, you can use them to encrypt data in one AWS Region and decrypt it in a different AWS Region without making a cross-Region call or exposing the plaintext data. For more information, see [Multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the *AWS Key Management Service Developer Guide* .
 *
 * A multi-Region *primary key* is a fully functional symmetric encryption KMS key, HMAC KMS key, or asymmetric KMS key that is also the model for replica keys in other AWS Regions . To create a multi-Region primary key, add an [AWS::KMS::Key](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html) resource to your CloudFormation stack. Set its `MultiRegion` property to true.
 *
 * A multi-Region *replica key* is a fully functional KMS key that has the same key ID and key material as a multi-Region primary key, but is located in a different AWS Region of the same AWS partition. There can be multiple replicas of a primary key, but each must be in a different AWS Region .
 *
 * When you create a replica key in AWS CloudFormation , the replica key is created in the AWS Region represented by the endpoint you use for the request. If you try to replicate a multi-Region key into a Region in which the key type is not supported, the request will fail.
 *
 * A primary key and its replicas have the same key ID and key material. They also have the same key spec, key usage, key material origin, and automatic key rotation status. These properties are known as *shared properties* . If they change, AWS KMS synchronizes the change to all related multi-Region keys. All other properties of a replica key can differ, including its key policy, tags, aliases, and key state. AWS KMS does not synchronize these properties.
 *
 * *Regions*
 *
 * AWS KMS CloudFormation resources are available in all AWS Regions in which AWS KMS and AWS CloudFormation are supported. You can use the `AWS::KMS::ReplicaKey` resource to create replica keys in all Regions that support multi-Region KMS keys. For details, see [Multi-Region keys in AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the ** .
 *
 * @cloudformationResource AWS::KMS::ReplicaKey
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html
 */
export declare class CfnReplicaKey extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnReplicaKey from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnReplicaKey;
    /**
     * The Amazon Resource Name (ARN) of the replica key, such as `arn:aws:kms:us-west-2:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab` .
     *
     * The key ARNs of related multi-Region keys differ only in the Region value. For information about the key ARNs of multi-Region keys, see [How multi-Region keys work](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html#mrk-how-it-works) in the *AWS Key Management Service Developer Guide* .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The key ID of the replica key, such as `mrk-1234abcd12ab34cd56ef1234567890ab` .
     *
     * Related multi-Region keys have the same key ID. For information about the key IDs of multi-Region keys, see [How multi-Region keys work](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html#mrk-how-it-works) in the *AWS Key Management Service Developer Guide* .
     *
     * @cloudformationAttribute KeyId
     */
    readonly attrKeyId: string;
    /**
     * A description of the KMS key.
     */
    description?: string;
    /**
     * Specifies whether the replica key is enabled. Disabled KMS keys cannot be used in cryptographic operations.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * The key policy that authorizes use of the replica key.
     */
    keyPolicy: any | cdk.IResolvable;
    /**
     * Specifies the number of days in the waiting period before AWS KMS deletes a replica key that has been removed from a CloudFormation stack.
     */
    pendingWindowInDays?: number;
    /**
     * Specifies the multi-Region primary key to replicate.
     */
    primaryKeyArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Assigns one or more tags to the replica key.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnReplicaKeyProps);
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
 * Properties for defining a `CfnReplicaKey`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html
 */
export interface CfnReplicaKeyProps {
    /**
     * A description of the KMS key.
     *
     * The default value is an empty string (no description).
     *
     * The description is not a shared property of multi-Region keys. You can specify the same description or a different description for each key in a set of related multi-Region keys. AWS Key Management Service does not synchronize this property.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html#cfn-kms-replicakey-description
     */
    readonly description?: string;
    /**
     * Specifies whether the replica key is enabled. Disabled KMS keys cannot be used in cryptographic operations.
     *
     * When `Enabled` is `true` , the *key state* of the KMS key is `Enabled` . When `Enabled` is `false` , the key state of the KMS key is `Disabled` . The default value is `true` .
     *
     * The actual key state of the replica might be affected by actions taken outside of CloudFormation, such as running the [EnableKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKey.html) , [DisableKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_DisableKey.html) , or [ScheduleKeyDeletion](https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html) operations. Also, while the replica key is being created, its key state is `Creating` . When the process is complete, the key state of the replica key changes to `Enabled` .
     *
     * For information about the key states of a KMS key, see [Key state: Effect on your KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *AWS Key Management Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html#cfn-kms-replicakey-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * The key policy that authorizes use of the replica key.
     *
     * The key policy is not a shared property of multi-Region keys. You can specify the same key policy or a different key policy for each key in a set of related multi-Region keys. AWS KMS does not synchronize this property.
     *
     * The key policy must conform to the following rules.
     *
     * - The key policy must give the caller [PutKeyPolicy](https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html) permission on the KMS key. This reduces the risk that the KMS key becomes unmanageable. For more information, refer to the scenario in the [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam) section of the **AWS Key Management Service Developer Guide** .
     * - Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to AWS KMS . When you create a new AWS principal (for example, an IAM user or role), you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to AWS KMS . For more information, see [Changes that I make are not always immediately visible](https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency) in the *AWS Identity and Access Management User Guide* .
     *
     * A key policy document can include only the following characters:
     *
     * - Printable ASCII characters from the space character ( `\u0020` ) through the end of the ASCII character range.
     * - Printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF` ).
     * - The tab ( `\u0009` ), line feed ( `\u000A` ), and carriage return ( `\u000D` ) special characters
     *
     * *Minimum* : `1`
     *
     * *Maximum* : `32768`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html#cfn-kms-replicakey-keypolicy
     */
    readonly keyPolicy: any | cdk.IResolvable;
    /**
     * Specifies the number of days in the waiting period before AWS KMS deletes a replica key that has been removed from a CloudFormation stack.
     *
     * Enter a value between 7 and 30 days. The default value is 30 days.
     *
     * When you remove a replica key from a CloudFormation stack, AWS KMS schedules the replica key for deletion and starts the mandatory waiting period. The `PendingWindowInDays` property determines the length of waiting period. During the waiting period, the key state of replica key is `Pending Deletion` , which prevents it from being used in cryptographic operations. When the waiting period expires, AWS KMS permanently deletes the replica key.
     *
     * If the KMS key is a multi-Region primary key with replica keys, the waiting period begins when the last of its replica keys is deleted. Otherwise, the waiting period begins immediately.
     *
     * You cannot use a CloudFormation template to cancel deletion of the replica after you remove it from the stack, regardless of the waiting period. However, if you specify a replica key in your template that is based on the same primary key as the original replica key, CloudFormation creates a new replica key with the same key ID, key material, and other shared properties of the original replica key. This new replica key can decrypt ciphertext that was encrypted under the original replica key, or any related multi-Region key.
     *
     * For detailed information about deleting multi-Region keys, see [Deleting multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-delete.html) in the *AWS Key Management Service Developer Guide* .
     *
     * For information about the `PendingDeletion` key state, see [Key state: Effect on your KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *AWS Key Management Service Developer Guide* . For more information about deleting KMS keys, see the [ScheduleKeyDeletion](https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html) operation in the *AWS Key Management Service API Reference* and [Deleting KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html) in the *AWS Key Management Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html#cfn-kms-replicakey-pendingwindowindays
     */
    readonly pendingWindowInDays?: number;
    /**
     * Specifies the multi-Region primary key to replicate.
     *
     * The primary key must be in a different AWS Region of the same AWS partition. You can create only one replica of a given primary key in each AWS Region .
     *
     * > If you change the `PrimaryKeyArn` value of a replica key, the existing replica key is scheduled for deletion and a new replica key is created based on the specified primary key. While it is scheduled for deletion, the existing replica key becomes unusable. You can cancel the scheduled deletion of the key outside of CloudFormation.
     * >
     * > However, if you inadvertently delete a replica key, you can decrypt ciphertext encrypted by that replica key by using any related multi-Region key. If necessary, you can recreate the replica in the same Region after the previous one is completely deleted. For details, see [Deleting multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-delete.html) in the *AWS Key Management Service Developer Guide*
     *
     * Specify the key ARN of an existing multi-Region primary key. For example, `arn:aws:kms:us-east-2:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html#cfn-kms-replicakey-primarykeyarn
     */
    readonly primaryKeyArn: string;
    /**
     * Assigns one or more tags to the replica key.
     *
     * > Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see [ABAC for AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/abac.html) in the *AWS Key Management Service Developer Guide* .
     *
     * Tags are not a shared property of multi-Region keys. You can specify the same tags or different tags for each key in a set of related multi-Region keys. AWS KMS does not synchronize this property.
     *
     * Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You cannot have more than one tag on a KMS key with the same tag key. If you specify an existing tag key with a different tag value, AWS KMS replaces the current tag value with the specified one.
     *
     * When you assign tags to an AWS resource, AWS generates a cost allocation report with usage and costs aggregated by tags. Tags can also be used to control access to a KMS key. For details, see [Tagging keys](https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html#cfn-kms-replicakey-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
