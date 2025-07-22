/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcrRepositoryCreationTemplateConfig extends cdktf.TerraformMetaArguments {
    /** (Required) Which features this template applies to. Must contain one or more of `PULL_THROUGH_CACHE` or `REPLICATION`. */
    readonly appliedFor: string[];
    /** (Optional) A custom IAM role to use for repository creation. Required if using repository tags or KMS encryption. */
    readonly customRoleArn?: string;
    /** (Optional) The description for this template. */
    readonly description?: string;
    /** */
    readonly id?: string;
    /** (Optional) The tag mutability setting for any created repositories. Must be one of: `MUTABLE` or `IMMUTABLE`. Defaults to `MUTABLE`. */
    readonly imageTagMutability?: string;
    /** (Optional) The lifecycle policy document to apply to any created repositories. See more details about [Policy Parameters](http://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html#lifecycle_policy_parameters) in the official AWS docs. Consider using the [`aws_ecr_lifecycle_policy_document` data_source](/docs/providers/aws/d/ecr_lifecycle_policy_document.html) to generate/manage the JSON document used for the `lifecyclePolicy` argument. */
    readonly lifecyclePolicy?: string;
    /** (Required, Forces new resource) The repository name prefix to match against. Use `ROOT` to match any prefix that doesn't explicitly match another template. */
    readonly prefix: string;
    /** (Optional) The registry policy document to apply to any created repositories. This is a JSON formatted string. For more information about building IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). */
    readonly repositoryPolicy?: string;
    /** (Optional) A map of tags to assign to any created repositories. */
    readonly resourceTags?: {
        [key: string]: string;
    };
    /** */
    readonly encryptionConfiguration?: EcrRepositoryCreationTemplateEncryptionConfiguration[] | cdktf.IResolvable;
}
export interface EcrRepositoryCreationTemplateEncryptionConfiguration {
    /** (Optional) The encryption type to use for any created repositories. Valid values are `AES256` or `KMS`. Defaults to `AES256`. */
    readonly encryptionType?: string;
    /** (Optional) The ARN of the KMS key to use when `encryptionType` is `KMS`. If not specified, uses the default AWS managed key for ECR. */
    readonly kmsKey?: string;
}
export declare function ecrRepositoryCreationTemplateEncryptionConfigurationToTerraform(struct?: EcrRepositoryCreationTemplateEncryptionConfiguration | cdktf.IResolvable): any;
export declare function ecrRepositoryCreationTemplateEncryptionConfigurationToHclTerraform(struct?: EcrRepositoryCreationTemplateEncryptionConfiguration | cdktf.IResolvable): any;
export declare class EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcrRepositoryCreationTemplateEncryptionConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: EcrRepositoryCreationTemplateEncryptionConfiguration | cdktf.IResolvable | undefined);
    private _encryptionType?;
    get encryptionType(): string;
    set encryptionType(value: string);
    resetEncryptionType(): void;
    get encryptionTypeInput(): string | undefined;
    private _kmsKey?;
    get kmsKey(): string;
    set kmsKey(value: string);
    resetKmsKey(): void;
    get kmsKeyInput(): string | undefined;
}
export declare class EcrRepositoryCreationTemplateEncryptionConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcrRepositoryCreationTemplateEncryptionConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecr_repository_creation_template aws_ecr_repository_creation_template}
*/
export declare class EcrRepositoryCreationTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ecr_repository_creation_template";
    /**
    * Generates CDKTF code for importing a EcrRepositoryCreationTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EcrRepositoryCreationTemplate to import
    * @param importFromId The id of the existing EcrRepositoryCreationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecr_repository_creation_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EcrRepositoryCreationTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecr_repository_creation_template aws_ecr_repository_creation_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrRepositoryCreationTemplateConfig
    */
    constructor(scope: Construct, id: string, config: EcrRepositoryCreationTemplateConfig);
    private _appliedFor?;
    get appliedFor(): string[];
    set appliedFor(value: string[]);
    get appliedForInput(): string[] | undefined;
    private _customRoleArn?;
    get customRoleArn(): string;
    set customRoleArn(value: string);
    resetCustomRoleArn(): void;
    get customRoleArnInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _imageTagMutability?;
    get imageTagMutability(): string;
    set imageTagMutability(value: string);
    resetImageTagMutability(): void;
    get imageTagMutabilityInput(): string | undefined;
    private _lifecyclePolicy?;
    get lifecyclePolicy(): string;
    set lifecyclePolicy(value: string);
    resetLifecyclePolicy(): void;
    get lifecyclePolicyInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    get prefixInput(): string | undefined;
    get registryId(): string;
    private _repositoryPolicy?;
    get repositoryPolicy(): string;
    set repositoryPolicy(value: string);
    resetRepositoryPolicy(): void;
    get repositoryPolicyInput(): string | undefined;
    private _resourceTags?;
    get resourceTags(): {
        [key: string]: string;
    };
    set resourceTags(value: {
        [key: string]: string;
    });
    resetResourceTags(): void;
    get resourceTagsInput(): {
        [key: string]: string;
    } | undefined;
    private _encryptionConfiguration;
    get encryptionConfiguration(): EcrRepositoryCreationTemplateEncryptionConfigurationList;
    putEncryptionConfiguration(value: EcrRepositoryCreationTemplateEncryptionConfiguration[] | cdktf.IResolvable): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): cdktf.IResolvable | EcrRepositoryCreationTemplateEncryptionConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
