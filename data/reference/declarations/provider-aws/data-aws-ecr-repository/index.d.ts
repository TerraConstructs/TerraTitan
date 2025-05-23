/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEcrRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_repository#id DataAwsEcrRepository#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_repository#name DataAwsEcrRepository#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_repository#registry_id DataAwsEcrRepository#registry_id}
    */
    readonly registryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_repository#tags DataAwsEcrRepository#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsEcrRepositoryEncryptionConfiguration {
}
export declare function dataAwsEcrRepositoryEncryptionConfigurationToTerraform(struct?: DataAwsEcrRepositoryEncryptionConfiguration): any;
export declare function dataAwsEcrRepositoryEncryptionConfigurationToHclTerraform(struct?: DataAwsEcrRepositoryEncryptionConfiguration): any;
export declare class DataAwsEcrRepositoryEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcrRepositoryEncryptionConfiguration | undefined;
    set internalValue(value: DataAwsEcrRepositoryEncryptionConfiguration | undefined);
    get encryptionType(): string;
    get kmsKey(): string;
}
export declare class DataAwsEcrRepositoryEncryptionConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEcrRepositoryEncryptionConfigurationOutputReference;
}
export interface DataAwsEcrRepositoryImageScanningConfiguration {
}
export declare function dataAwsEcrRepositoryImageScanningConfigurationToTerraform(struct?: DataAwsEcrRepositoryImageScanningConfiguration): any;
export declare function dataAwsEcrRepositoryImageScanningConfigurationToHclTerraform(struct?: DataAwsEcrRepositoryImageScanningConfiguration): any;
export declare class DataAwsEcrRepositoryImageScanningConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcrRepositoryImageScanningConfiguration | undefined;
    set internalValue(value: DataAwsEcrRepositoryImageScanningConfiguration | undefined);
    get scanOnPush(): cdktf.IResolvable;
}
export declare class DataAwsEcrRepositoryImageScanningConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEcrRepositoryImageScanningConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_repository aws_ecr_repository}
*/
export declare class DataAwsEcrRepository extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ecr_repository";
    /**
    * Generates CDKTF code for importing a DataAwsEcrRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEcrRepository to import
    * @param importFromId The id of the existing DataAwsEcrRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEcrRepository to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_repository aws_ecr_repository} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcrRepositoryConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEcrRepositoryConfig);
    get arn(): string;
    private _encryptionConfiguration;
    get encryptionConfiguration(): DataAwsEcrRepositoryEncryptionConfigurationList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _imageScanningConfiguration;
    get imageScanningConfiguration(): DataAwsEcrRepositoryImageScanningConfigurationList;
    get imageTagMutability(): string;
    get mostRecentImageTags(): string[];
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _registryId?;
    get registryId(): string;
    set registryId(value: string);
    resetRegistryId(): void;
    get registryIdInput(): string | undefined;
    get repositoryUrl(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
