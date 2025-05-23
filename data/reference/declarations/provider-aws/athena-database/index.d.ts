/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AthenaDatabaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_database#bucket AthenaDatabase#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_database#comment AthenaDatabase#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_database#expected_bucket_owner AthenaDatabase#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_database#force_destroy AthenaDatabase#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_database#id AthenaDatabase#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_database#name AthenaDatabase#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_database#properties AthenaDatabase#properties}
    */
    readonly properties?: {
        [key: string]: string;
    };
    /**
    * acl_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_database#acl_configuration AthenaDatabase#acl_configuration}
    */
    readonly aclConfiguration?: AthenaDatabaseAclConfiguration;
    /**
    * encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_database#encryption_configuration AthenaDatabase#encryption_configuration}
    */
    readonly encryptionConfiguration?: AthenaDatabaseEncryptionConfiguration;
}
export interface AthenaDatabaseAclConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_database#s3_acl_option AthenaDatabase#s3_acl_option}
    */
    readonly s3AclOption: string;
}
export declare function athenaDatabaseAclConfigurationToTerraform(struct?: AthenaDatabaseAclConfigurationOutputReference | AthenaDatabaseAclConfiguration): any;
export declare function athenaDatabaseAclConfigurationToHclTerraform(struct?: AthenaDatabaseAclConfigurationOutputReference | AthenaDatabaseAclConfiguration): any;
export declare class AthenaDatabaseAclConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AthenaDatabaseAclConfiguration | undefined;
    set internalValue(value: AthenaDatabaseAclConfiguration | undefined);
    private _s3AclOption?;
    get s3AclOption(): string;
    set s3AclOption(value: string);
    get s3AclOptionInput(): string | undefined;
}
export interface AthenaDatabaseEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_database#encryption_option AthenaDatabase#encryption_option}
    */
    readonly encryptionOption: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_database#kms_key AthenaDatabase#kms_key}
    */
    readonly kmsKey?: string;
}
export declare function athenaDatabaseEncryptionConfigurationToTerraform(struct?: AthenaDatabaseEncryptionConfigurationOutputReference | AthenaDatabaseEncryptionConfiguration): any;
export declare function athenaDatabaseEncryptionConfigurationToHclTerraform(struct?: AthenaDatabaseEncryptionConfigurationOutputReference | AthenaDatabaseEncryptionConfiguration): any;
export declare class AthenaDatabaseEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AthenaDatabaseEncryptionConfiguration | undefined;
    set internalValue(value: AthenaDatabaseEncryptionConfiguration | undefined);
    private _encryptionOption?;
    get encryptionOption(): string;
    set encryptionOption(value: string);
    get encryptionOptionInput(): string | undefined;
    private _kmsKey?;
    get kmsKey(): string;
    set kmsKey(value: string);
    resetKmsKey(): void;
    get kmsKeyInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_database aws_athena_database}
*/
export declare class AthenaDatabase extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_athena_database";
    /**
    * Generates CDKTF code for importing a AthenaDatabase resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AthenaDatabase to import
    * @param importFromId The id of the existing AthenaDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_database#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AthenaDatabase to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_database aws_athena_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AthenaDatabaseConfig
    */
    constructor(scope: Construct, id: string, config: AthenaDatabaseConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    resetBucket(): void;
    get bucketInput(): string | undefined;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    private _expectedBucketOwner?;
    get expectedBucketOwner(): string;
    set expectedBucketOwner(value: string);
    resetExpectedBucketOwner(): void;
    get expectedBucketOwnerInput(): string | undefined;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _properties?;
    get properties(): {
        [key: string]: string;
    };
    set properties(value: {
        [key: string]: string;
    });
    resetProperties(): void;
    get propertiesInput(): {
        [key: string]: string;
    } | undefined;
    private _aclConfiguration;
    get aclConfiguration(): AthenaDatabaseAclConfigurationOutputReference;
    putAclConfiguration(value: AthenaDatabaseAclConfiguration): void;
    resetAclConfiguration(): void;
    get aclConfigurationInput(): AthenaDatabaseAclConfiguration | undefined;
    private _encryptionConfiguration;
    get encryptionConfiguration(): AthenaDatabaseEncryptionConfigurationOutputReference;
    putEncryptionConfiguration(value: AthenaDatabaseEncryptionConfiguration): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): AthenaDatabaseEncryptionConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
