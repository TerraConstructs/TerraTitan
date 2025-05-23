/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketOwnershipControlsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_ownership_controls#bucket S3BucketOwnershipControls#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_ownership_controls#id S3BucketOwnershipControls#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_ownership_controls#rule S3BucketOwnershipControls#rule}
    */
    readonly rule: S3BucketOwnershipControlsRule;
}
export interface S3BucketOwnershipControlsRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_ownership_controls#object_ownership S3BucketOwnershipControls#object_ownership}
    */
    readonly objectOwnership: string;
}
export declare function s3BucketOwnershipControlsRuleToTerraform(struct?: S3BucketOwnershipControlsRuleOutputReference | S3BucketOwnershipControlsRule): any;
export declare function s3BucketOwnershipControlsRuleToHclTerraform(struct?: S3BucketOwnershipControlsRuleOutputReference | S3BucketOwnershipControlsRule): any;
export declare class S3BucketOwnershipControlsRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketOwnershipControlsRule | undefined;
    set internalValue(value: S3BucketOwnershipControlsRule | undefined);
    private _objectOwnership?;
    get objectOwnership(): string;
    set objectOwnership(value: string);
    get objectOwnershipInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_ownership_controls aws_s3_bucket_ownership_controls}
*/
export declare class S3BucketOwnershipControls extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_bucket_ownership_controls";
    /**
    * Generates CDKTF code for importing a S3BucketOwnershipControls resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketOwnershipControls to import
    * @param importFromId The id of the existing S3BucketOwnershipControls that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_ownership_controls#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketOwnershipControls to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_ownership_controls aws_s3_bucket_ownership_controls} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketOwnershipControlsConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketOwnershipControlsConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _rule;
    get rule(): S3BucketOwnershipControlsRuleOutputReference;
    putRule(value: S3BucketOwnershipControlsRule): void;
    get ruleInput(): S3BucketOwnershipControlsRule | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
