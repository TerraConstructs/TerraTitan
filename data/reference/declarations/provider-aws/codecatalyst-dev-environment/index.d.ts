/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodecatalystDevEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment#alias CodecatalystDevEnvironment#alias}
    */
    readonly alias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment#id CodecatalystDevEnvironment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment#inactivity_timeout_minutes CodecatalystDevEnvironment#inactivity_timeout_minutes}
    */
    readonly inactivityTimeoutMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment#instance_type CodecatalystDevEnvironment#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment#project_name CodecatalystDevEnvironment#project_name}
    */
    readonly projectName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment#space_name CodecatalystDevEnvironment#space_name}
    */
    readonly spaceName: string;
    /**
    * ides block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment#ides CodecatalystDevEnvironment#ides}
    */
    readonly ides: CodecatalystDevEnvironmentIdes;
    /**
    * persistent_storage block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment#persistent_storage CodecatalystDevEnvironment#persistent_storage}
    */
    readonly persistentStorage: CodecatalystDevEnvironmentPersistentStorage;
    /**
    * repositories block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment#repositories CodecatalystDevEnvironment#repositories}
    */
    readonly repositories?: CodecatalystDevEnvironmentRepositories[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment#timeouts CodecatalystDevEnvironment#timeouts}
    */
    readonly timeouts?: CodecatalystDevEnvironmentTimeouts;
}
export interface CodecatalystDevEnvironmentIdes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment#name CodecatalystDevEnvironment#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment#runtime CodecatalystDevEnvironment#runtime}
    */
    readonly runtime?: string;
}
export declare function codecatalystDevEnvironmentIdesToTerraform(struct?: CodecatalystDevEnvironmentIdesOutputReference | CodecatalystDevEnvironmentIdes): any;
export declare function codecatalystDevEnvironmentIdesToHclTerraform(struct?: CodecatalystDevEnvironmentIdesOutputReference | CodecatalystDevEnvironmentIdes): any;
export declare class CodecatalystDevEnvironmentIdesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodecatalystDevEnvironmentIdes | undefined;
    set internalValue(value: CodecatalystDevEnvironmentIdes | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _runtime?;
    get runtime(): string;
    set runtime(value: string);
    resetRuntime(): void;
    get runtimeInput(): string | undefined;
}
export interface CodecatalystDevEnvironmentPersistentStorage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment#size CodecatalystDevEnvironment#size}
    */
    readonly size: number;
}
export declare function codecatalystDevEnvironmentPersistentStorageToTerraform(struct?: CodecatalystDevEnvironmentPersistentStorageOutputReference | CodecatalystDevEnvironmentPersistentStorage): any;
export declare function codecatalystDevEnvironmentPersistentStorageToHclTerraform(struct?: CodecatalystDevEnvironmentPersistentStorageOutputReference | CodecatalystDevEnvironmentPersistentStorage): any;
export declare class CodecatalystDevEnvironmentPersistentStorageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodecatalystDevEnvironmentPersistentStorage | undefined;
    set internalValue(value: CodecatalystDevEnvironmentPersistentStorage | undefined);
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number | undefined;
}
export interface CodecatalystDevEnvironmentRepositories {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment#branch_name CodecatalystDevEnvironment#branch_name}
    */
    readonly branchName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment#repository_name CodecatalystDevEnvironment#repository_name}
    */
    readonly repositoryName: string;
}
export declare function codecatalystDevEnvironmentRepositoriesToTerraform(struct?: CodecatalystDevEnvironmentRepositories | cdktf.IResolvable): any;
export declare function codecatalystDevEnvironmentRepositoriesToHclTerraform(struct?: CodecatalystDevEnvironmentRepositories | cdktf.IResolvable): any;
export declare class CodecatalystDevEnvironmentRepositoriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodecatalystDevEnvironmentRepositories | cdktf.IResolvable | undefined;
    set internalValue(value: CodecatalystDevEnvironmentRepositories | cdktf.IResolvable | undefined);
    private _branchName?;
    get branchName(): string;
    set branchName(value: string);
    resetBranchName(): void;
    get branchNameInput(): string | undefined;
    private _repositoryName?;
    get repositoryName(): string;
    set repositoryName(value: string);
    get repositoryNameInput(): string | undefined;
}
export declare class CodecatalystDevEnvironmentRepositoriesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodecatalystDevEnvironmentRepositories[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodecatalystDevEnvironmentRepositoriesOutputReference;
}
export interface CodecatalystDevEnvironmentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment#create CodecatalystDevEnvironment#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment#delete CodecatalystDevEnvironment#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment#update CodecatalystDevEnvironment#update}
    */
    readonly update?: string;
}
export declare function codecatalystDevEnvironmentTimeoutsToTerraform(struct?: CodecatalystDevEnvironmentTimeouts | cdktf.IResolvable): any;
export declare function codecatalystDevEnvironmentTimeoutsToHclTerraform(struct?: CodecatalystDevEnvironmentTimeouts | cdktf.IResolvable): any;
export declare class CodecatalystDevEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodecatalystDevEnvironmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CodecatalystDevEnvironmentTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment aws_codecatalyst_dev_environment}
*/
export declare class CodecatalystDevEnvironment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codecatalyst_dev_environment";
    /**
    * Generates CDKTF code for importing a CodecatalystDevEnvironment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodecatalystDevEnvironment to import
    * @param importFromId The id of the existing CodecatalystDevEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodecatalystDevEnvironment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_dev_environment aws_codecatalyst_dev_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodecatalystDevEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: CodecatalystDevEnvironmentConfig);
    private _alias?;
    get alias(): string;
    set alias(value: string);
    resetAlias(): void;
    get aliasInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _inactivityTimeoutMinutes?;
    get inactivityTimeoutMinutes(): number;
    set inactivityTimeoutMinutes(value: number);
    resetInactivityTimeoutMinutes(): void;
    get inactivityTimeoutMinutesInput(): number | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    private _projectName?;
    get projectName(): string;
    set projectName(value: string);
    get projectNameInput(): string | undefined;
    private _spaceName?;
    get spaceName(): string;
    set spaceName(value: string);
    get spaceNameInput(): string | undefined;
    private _ides;
    get ides(): CodecatalystDevEnvironmentIdesOutputReference;
    putIdes(value: CodecatalystDevEnvironmentIdes): void;
    get idesInput(): CodecatalystDevEnvironmentIdes | undefined;
    private _persistentStorage;
    get persistentStorage(): CodecatalystDevEnvironmentPersistentStorageOutputReference;
    putPersistentStorage(value: CodecatalystDevEnvironmentPersistentStorage): void;
    get persistentStorageInput(): CodecatalystDevEnvironmentPersistentStorage | undefined;
    private _repositories;
    get repositories(): CodecatalystDevEnvironmentRepositoriesList;
    putRepositories(value: CodecatalystDevEnvironmentRepositories[] | cdktf.IResolvable): void;
    resetRepositories(): void;
    get repositoriesInput(): cdktf.IResolvable | CodecatalystDevEnvironmentRepositories[] | undefined;
    private _timeouts;
    get timeouts(): CodecatalystDevEnvironmentTimeoutsOutputReference;
    putTimeouts(value: CodecatalystDevEnvironmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CodecatalystDevEnvironmentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
