/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCodecatalystDevEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codecatalyst_dev_environment#alias DataAwsCodecatalystDevEnvironment#alias}
    */
    readonly alias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codecatalyst_dev_environment#creator_id DataAwsCodecatalystDevEnvironment#creator_id}
    */
    readonly creatorId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codecatalyst_dev_environment#env_id DataAwsCodecatalystDevEnvironment#env_id}
    */
    readonly envId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codecatalyst_dev_environment#id DataAwsCodecatalystDevEnvironment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codecatalyst_dev_environment#project_name DataAwsCodecatalystDevEnvironment#project_name}
    */
    readonly projectName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codecatalyst_dev_environment#space_name DataAwsCodecatalystDevEnvironment#space_name}
    */
    readonly spaceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codecatalyst_dev_environment#tags DataAwsCodecatalystDevEnvironment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * repositories block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codecatalyst_dev_environment#repositories DataAwsCodecatalystDevEnvironment#repositories}
    */
    readonly repositories?: DataAwsCodecatalystDevEnvironmentRepositories[] | cdktf.IResolvable;
}
export interface DataAwsCodecatalystDevEnvironmentIdes {
}
export declare function dataAwsCodecatalystDevEnvironmentIdesToTerraform(struct?: DataAwsCodecatalystDevEnvironmentIdes): any;
export declare function dataAwsCodecatalystDevEnvironmentIdesToHclTerraform(struct?: DataAwsCodecatalystDevEnvironmentIdes): any;
export declare class DataAwsCodecatalystDevEnvironmentIdesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCodecatalystDevEnvironmentIdes | undefined;
    set internalValue(value: DataAwsCodecatalystDevEnvironmentIdes | undefined);
    get name(): string;
    get runtime(): string;
}
export declare class DataAwsCodecatalystDevEnvironmentIdesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCodecatalystDevEnvironmentIdesOutputReference;
}
export interface DataAwsCodecatalystDevEnvironmentPersistentStorage {
}
export declare function dataAwsCodecatalystDevEnvironmentPersistentStorageToTerraform(struct?: DataAwsCodecatalystDevEnvironmentPersistentStorage): any;
export declare function dataAwsCodecatalystDevEnvironmentPersistentStorageToHclTerraform(struct?: DataAwsCodecatalystDevEnvironmentPersistentStorage): any;
export declare class DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCodecatalystDevEnvironmentPersistentStorage | undefined;
    set internalValue(value: DataAwsCodecatalystDevEnvironmentPersistentStorage | undefined);
    get size(): number;
}
export declare class DataAwsCodecatalystDevEnvironmentPersistentStorageList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference;
}
export interface DataAwsCodecatalystDevEnvironmentRepositories {
}
export declare function dataAwsCodecatalystDevEnvironmentRepositoriesToTerraform(struct?: DataAwsCodecatalystDevEnvironmentRepositories | cdktf.IResolvable): any;
export declare function dataAwsCodecatalystDevEnvironmentRepositoriesToHclTerraform(struct?: DataAwsCodecatalystDevEnvironmentRepositories | cdktf.IResolvable): any;
export declare class DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCodecatalystDevEnvironmentRepositories | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsCodecatalystDevEnvironmentRepositories | cdktf.IResolvable | undefined);
    get branchName(): string;
    get repositoryName(): string;
}
export declare class DataAwsCodecatalystDevEnvironmentRepositoriesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsCodecatalystDevEnvironmentRepositories[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codecatalyst_dev_environment aws_codecatalyst_dev_environment}
*/
export declare class DataAwsCodecatalystDevEnvironment extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_codecatalyst_dev_environment";
    /**
    * Generates CDKTF code for importing a DataAwsCodecatalystDevEnvironment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCodecatalystDevEnvironment to import
    * @param importFromId The id of the existing DataAwsCodecatalystDevEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codecatalyst_dev_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCodecatalystDevEnvironment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codecatalyst_dev_environment aws_codecatalyst_dev_environment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCodecatalystDevEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCodecatalystDevEnvironmentConfig);
    private _alias?;
    get alias(): string;
    set alias(value: string);
    resetAlias(): void;
    get aliasInput(): string | undefined;
    private _creatorId?;
    get creatorId(): string;
    set creatorId(value: string);
    resetCreatorId(): void;
    get creatorIdInput(): string | undefined;
    private _envId?;
    get envId(): string;
    set envId(value: string);
    get envIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ides;
    get ides(): DataAwsCodecatalystDevEnvironmentIdesList;
    get inactivityTimeoutMinutes(): number;
    get instanceType(): string;
    get lastUpdatedTime(): string;
    private _persistentStorage;
    get persistentStorage(): DataAwsCodecatalystDevEnvironmentPersistentStorageList;
    private _projectName?;
    get projectName(): string;
    set projectName(value: string);
    get projectNameInput(): string | undefined;
    private _spaceName?;
    get spaceName(): string;
    set spaceName(value: string);
    get spaceNameInput(): string | undefined;
    get status(): string;
    get statusReason(): string;
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
    private _repositories;
    get repositories(): DataAwsCodecatalystDevEnvironmentRepositoriesList;
    putRepositories(value: DataAwsCodecatalystDevEnvironmentRepositories[] | cdktf.IResolvable): void;
    resetRepositories(): void;
    get repositoriesInput(): cdktf.IResolvable | DataAwsCodecatalystDevEnvironmentRepositories[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
