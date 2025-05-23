import { kmsAlias } from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { AwsConstructProps, AwsConstructBase } from "../aws-construct";
import { IKey, KeyOutputs } from "./key";
import * as iam from "../iam";
/**
 * Outputs which may be registered for output via the Grid.
 */
export interface AliasOutputs {
    /**
     * The name of the alias.
     *
     * @attribute
     */
    readonly aliasName: string;
    /**
     * The Key to which the Alias refers.
     *
     * @attribute
     */
    readonly aliasTargetKey: KeyOutputs;
}
/**
 * A KMS Key alias.
 * An alias can be used in all places that expect a key.
 */
export interface IAlias extends IKey {
    /** Strongly typed outputs */
    readonly aliasOutputs: AliasOutputs;
    /**
     * The name of the alias.
     *
     * @attribute
     */
    readonly aliasName: string;
    /**
     * The Key to which the Alias refers.
     *
     * @attribute
     */
    readonly aliasTargetKey: IKey;
}
/**
 * Construction properties for a KMS Key Alias object.
 */
export interface AliasProps extends AwsConstructProps {
    /**
     * The name of the alias. The name must start with alias followed by a
     * forward slash, such as alias/. You can't specify aliases that begin with
     * alias/AWS. These aliases are reserved.
     */
    readonly aliasName: string;
    /**
     * The ID of the key for which you are creating the alias. Specify the key's
     * globally unique identifier or Amazon Resource Name (ARN). You can't
     * specify another alias.
     */
    readonly targetKey: IKey;
}
declare abstract class AliasBase extends AwsConstructBase implements IAlias {
    abstract readonly aliasName: string;
    abstract readonly aliasTargetKey: IKey;
    get aliasOutputs(): AliasOutputs;
    get keyOutputs(): KeyOutputs;
    get outputs(): Record<string, any>;
    /**
     * The ARN of the alias.
     *
     * @attribute
     * @deprecated use `aliasArn` instead
     */
    get keyArn(): string;
    /**
     * The ARN of the alias.
     *
     * @attribute
     */
    get aliasArn(): string;
    get keyId(): string;
    addAlias(alias: string): Alias;
    addToResourcePolicy(statement: iam.PolicyStatement, allowNoOp?: boolean): iam.AddToResourcePolicyResult;
    grant(grantee: iam.IGrantable, ...actions: string[]): iam.Grant;
    grantDecrypt(grantee: iam.IGrantable): iam.Grant;
    grantEncrypt(grantee: iam.IGrantable): iam.Grant;
    grantEncryptDecrypt(grantee: iam.IGrantable): iam.Grant;
    grantGenerateMac(grantee: iam.IGrantable): iam.Grant;
    grantVerifyMac(grantee: iam.IGrantable): iam.Grant;
}
/**
 * Properties of a reference to an existing KMS Alias
 */
export interface AliasAttributes {
    /**
     * Specifies the alias name. This value must begin with alias/ followed by a name (i.e. alias/ExampleAlias)
     */
    readonly aliasName: string;
    /**
     * The customer master key (CMK) to which the Alias refers.
     */
    readonly aliasTargetKey: IKey;
}
/**
 * Defines a display name for a customer master key (CMK) in AWS Key Management
 * Service (AWS KMS). Using an alias to refer to a key can help you simplify key
 * management. For example, when rotating keys, you can just update the alias
 * mapping instead of tracking and changing key IDs. For more information, see
 * Working with Aliases in the AWS Key Management Service Developer Guide.
 *
 * You can also add an alias for a key by calling `key.addAlias(alias)`.
 *
 * @resource AWS::KMS::Alias
 */
export declare class Alias extends AliasBase {
    /**
     * Import an existing KMS Alias defined outside the CDK app.
     *
     * @param scope The parent creating construct (usually `this`).
     * @param id The construct's name.
     * @param attrs the properties of the referenced KMS Alias
     */
    static fromAliasAttributes(scope: Construct, id: string, attrs: AliasAttributes): IAlias;
    /**
     * Import an existing KMS Alias defined outside the CDK app, by the alias name. This method should be used
     * instead of 'fromAliasAttributes' when the underlying KMS Key ARN is not available.
     * This Alias will not have a direct reference to the KMS Key, so addAlias and grant* methods are not supported.
     *
     * @param scope The parent creating construct (usually `this`).
     * @param id The construct's name.
     * @param aliasName The full name of the KMS Alias (e.g., 'alias/aws/s3', 'alias/myKeyAlias').
     */
    static fromAliasName(scope: Construct, id: string, aliasName: string): IAlias;
    readonly aliasName: string;
    readonly aliasTargetKey: IKey;
    readonly resource: kmsAlias.KmsAlias;
    constructor(scope: Construct, id: string, props: AliasProps);
}
export {};
