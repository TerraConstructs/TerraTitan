/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcrRepositoryCreationTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecr_repository_creation_template#applied_for EcrRepositoryCreationTemplate#applied_for}
    */
    readonly appliedFor: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecr_repository_creation_template#custom_role_arn EcrRepositoryCreationTemplate#custom_role_arn}
    */
    readonly customRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecr_repository_creation_template#description EcrRepositoryCreationTemplate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecr_repository_creation_template#id EcrRepositoryCreationTemplate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecr_repository_creation_template#image_tag_mutability EcrRepositoryCreationTemplate#image_tag_mutability}
    */
    readonly imageTagMutability?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecr_repository_creation_template#lifecycle_policy EcrRepositoryCreationTemplate#lifecycle_policy}
    */
    readonly lifecyclePolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecr_repository_creation_template#prefix EcrRepositoryCreationTemplate#prefix}
    */
    readonly prefix: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecr_repository_creation_template#repository_policy EcrRepositoryCreationTemplate#repository_policy}
    */
    readonly repositoryPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecr_repository_creation_template#resource_tags EcrRepositoryCreationTemplate#resource_tags}
    */
    readonly resourceTags?: {
        [key: string]: string;
    };
    /**
    * encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecr_repository_creation_template#encryption_configuration EcrRepositoryCreationTemplate#encryption_configuration}
    */
    readonly encryptionConfiguration?: EcrRepositoryCreationTemplateEncryptionConfiguration[] | cdktf.IResolvable;
}
export interface EcrRepositoryCreationTemplateEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecr_repository_creation_template#encryption_type EcrRepositoryCreationTemplate#encryption_type}
    */
    readonly encryptionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecr_repository_creation_template#kms_key EcrRepositoryCreationTemplate#kms_key}
    */
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
