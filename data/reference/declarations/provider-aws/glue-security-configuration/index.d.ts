/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueSecurityConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_security_configuration#id GlueSecurityConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_security_configuration#name GlueSecurityConfiguration#name}
    */
    readonly name: string;
    /**
    * encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_security_configuration#encryption_configuration GlueSecurityConfiguration#encryption_configuration}
    */
    readonly encryptionConfiguration: GlueSecurityConfigurationEncryptionConfiguration;
}
export interface GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_security_configuration#cloudwatch_encryption_mode GlueSecurityConfiguration#cloudwatch_encryption_mode}
    */
    readonly cloudwatchEncryptionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export declare function glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference | GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption): any;
export declare function glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToHclTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference | GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption): any;
export declare class GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption | undefined;
    set internalValue(value: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption | undefined);
    private _cloudwatchEncryptionMode?;
    get cloudwatchEncryptionMode(): string;
    set cloudwatchEncryptionMode(value: string);
    resetCloudwatchEncryptionMode(): void;
    get cloudwatchEncryptionModeInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
}
export interface GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_security_configuration#job_bookmarks_encryption_mode GlueSecurityConfiguration#job_bookmarks_encryption_mode}
    */
    readonly jobBookmarksEncryptionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export declare function glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference | GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption): any;
export declare function glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToHclTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference | GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption): any;
export declare class GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption | undefined;
    set internalValue(value: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption | undefined);
    private _jobBookmarksEncryptionMode?;
    get jobBookmarksEncryptionMode(): string;
    set jobBookmarksEncryptionMode(value: string);
    resetJobBookmarksEncryptionMode(): void;
    get jobBookmarksEncryptionModeInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
}
export interface GlueSecurityConfigurationEncryptionConfigurationS3Encryption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_security_configuration#s3_encryption_mode GlueSecurityConfiguration#s3_encryption_mode}
    */
    readonly s3EncryptionMode?: string;
}
export declare function glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference | GlueSecurityConfigurationEncryptionConfigurationS3Encryption): any;
export declare function glueSecurityConfigurationEncryptionConfigurationS3EncryptionToHclTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference | GlueSecurityConfigurationEncryptionConfigurationS3Encryption): any;
export declare class GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueSecurityConfigurationEncryptionConfigurationS3Encryption | undefined;
    set internalValue(value: GlueSecurityConfigurationEncryptionConfigurationS3Encryption | undefined);
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _s3EncryptionMode?;
    get s3EncryptionMode(): string;
    set s3EncryptionMode(value: string);
    resetS3EncryptionMode(): void;
    get s3EncryptionModeInput(): string | undefined;
}
export interface GlueSecurityConfigurationEncryptionConfiguration {
    /**
    * cloudwatch_encryption block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_security_configuration#cloudwatch_encryption GlueSecurityConfiguration#cloudwatch_encryption}
    */
    readonly cloudwatchEncryption: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption;
    /**
    * job_bookmarks_encryption block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_security_configuration#job_bookmarks_encryption GlueSecurityConfiguration#job_bookmarks_encryption}
    */
    readonly jobBookmarksEncryption: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption;
    /**
    * s3_encryption block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_security_configuration#s3_encryption GlueSecurityConfiguration#s3_encryption}
    */
    readonly s3Encryption: GlueSecurityConfigurationEncryptionConfigurationS3Encryption;
}
export declare function glueSecurityConfigurationEncryptionConfigurationToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationOutputReference | GlueSecurityConfigurationEncryptionConfiguration): any;
export declare function glueSecurityConfigurationEncryptionConfigurationToHclTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationOutputReference | GlueSecurityConfigurationEncryptionConfiguration): any;
export declare class GlueSecurityConfigurationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueSecurityConfigurationEncryptionConfiguration | undefined;
    set internalValue(value: GlueSecurityConfigurationEncryptionConfiguration | undefined);
    private _cloudwatchEncryption;
    get cloudwatchEncryption(): GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference;
    putCloudwatchEncryption(value: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption): void;
    get cloudwatchEncryptionInput(): GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption | undefined;
    private _jobBookmarksEncryption;
    get jobBookmarksEncryption(): GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference;
    putJobBookmarksEncryption(value: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption): void;
    get jobBookmarksEncryptionInput(): GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption | undefined;
    private _s3Encryption;
    get s3Encryption(): GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference;
    putS3Encryption(value: GlueSecurityConfigurationEncryptionConfigurationS3Encryption): void;
    get s3EncryptionInput(): GlueSecurityConfigurationEncryptionConfigurationS3Encryption | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_security_configuration aws_glue_security_configuration}
*/
export declare class GlueSecurityConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glue_security_configuration";
    /**
    * Generates CDKTF code for importing a GlueSecurityConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlueSecurityConfiguration to import
    * @param importFromId The id of the existing GlueSecurityConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_security_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlueSecurityConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_security_configuration aws_glue_security_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueSecurityConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: GlueSecurityConfigurationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _encryptionConfiguration;
    get encryptionConfiguration(): GlueSecurityConfigurationEncryptionConfigurationOutputReference;
    putEncryptionConfiguration(value: GlueSecurityConfigurationEncryptionConfiguration): void;
    get encryptionConfigurationInput(): GlueSecurityConfigurationEncryptionConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
