/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEcrRepositoryCreationTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ecr_repository_creation_template#id DataAwsEcrRepositoryCreationTemplate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ecr_repository_creation_template#prefix DataAwsEcrRepositoryCreationTemplate#prefix}
    */
    readonly prefix: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ecr_repository_creation_template#resource_tags DataAwsEcrRepositoryCreationTemplate#resource_tags}
    */
    readonly resourceTags?: {
        [key: string]: string;
    };
}
export interface DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration {
}
export declare function dataAwsEcrRepositoryCreationTemplateEncryptionConfigurationToTerraform(struct?: DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration): any;
export declare function dataAwsEcrRepositoryCreationTemplateEncryptionConfigurationToHclTerraform(struct?: DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration): any;
export declare class DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration | undefined;
    set internalValue(value: DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration | undefined);
    get encryptionType(): string;
    get kmsKey(): string;
}
export declare class DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ecr_repository_creation_template aws_ecr_repository_creation_template}
*/
export declare class DataAwsEcrRepositoryCreationTemplate extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ecr_repository_creation_template";
    /**
    * Generates CDKTF code for importing a DataAwsEcrRepositoryCreationTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEcrRepositoryCreationTemplate to import
    * @param importFromId The id of the existing DataAwsEcrRepositoryCreationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ecr_repository_creation_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEcrRepositoryCreationTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ecr_repository_creation_template aws_ecr_repository_creation_template} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcrRepositoryCreationTemplateConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEcrRepositoryCreationTemplateConfig);
    get appliedFor(): string[];
    get customRoleArn(): string;
    get description(): string;
    private _encryptionConfiguration;
    get encryptionConfiguration(): DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get imageTagMutability(): string;
    get lifecyclePolicy(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    get prefixInput(): string | undefined;
    get registryId(): string;
    get repositoryPolicy(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
