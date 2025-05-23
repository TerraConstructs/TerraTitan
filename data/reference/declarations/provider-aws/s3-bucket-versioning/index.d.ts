/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketVersioningAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_versioning#bucket S3BucketVersioningA#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_versioning#expected_bucket_owner S3BucketVersioningA#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_versioning#id S3BucketVersioningA#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_versioning#mfa S3BucketVersioningA#mfa}
    */
    readonly mfa?: string;
    /**
    * versioning_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_versioning#versioning_configuration S3BucketVersioningA#versioning_configuration}
    */
    readonly versioningConfiguration: S3BucketVersioningVersioningConfiguration;
}
export interface S3BucketVersioningVersioningConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_versioning#mfa_delete S3BucketVersioningA#mfa_delete}
    */
    readonly mfaDelete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_versioning#status S3BucketVersioningA#status}
    */
    readonly status: string;
}
export declare function s3BucketVersioningVersioningConfigurationToTerraform(struct?: S3BucketVersioningVersioningConfigurationOutputReference | S3BucketVersioningVersioningConfiguration): any;
export declare function s3BucketVersioningVersioningConfigurationToHclTerraform(struct?: S3BucketVersioningVersioningConfigurationOutputReference | S3BucketVersioningVersioningConfiguration): any;
export declare class S3BucketVersioningVersioningConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketVersioningVersioningConfiguration | undefined;
    set internalValue(value: S3BucketVersioningVersioningConfiguration | undefined);
    private _mfaDelete?;
    get mfaDelete(): string;
    set mfaDelete(value: string);
    resetMfaDelete(): void;
    get mfaDeleteInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_versioning aws_s3_bucket_versioning}
*/
export declare class S3BucketVersioningA extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_bucket_versioning";
    /**
    * Generates CDKTF code for importing a S3BucketVersioningA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketVersioningA to import
    * @param importFromId The id of the existing S3BucketVersioningA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_versioning#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketVersioningA to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_versioning aws_s3_bucket_versioning} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketVersioningAConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketVersioningAConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _expectedBucketOwner?;
    get expectedBucketOwner(): string;
    set expectedBucketOwner(value: string);
    resetExpectedBucketOwner(): void;
    get expectedBucketOwnerInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _mfa?;
    get mfa(): string;
    set mfa(value: string);
    resetMfa(): void;
    get mfaInput(): string | undefined;
    private _versioningConfiguration;
    get versioningConfiguration(): S3BucketVersioningVersioningConfigurationOutputReference;
    putVersioningConfiguration(value: S3BucketVersioningVersioningConfiguration): void;
    get versioningConfigurationInput(): S3BucketVersioningVersioningConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
