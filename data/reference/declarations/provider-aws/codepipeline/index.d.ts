/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodepipelineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#execution_mode Codepipeline#execution_mode}
    */
    readonly executionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#id Codepipeline#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#name Codepipeline#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#pipeline_type Codepipeline#pipeline_type}
    */
    readonly pipelineType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#tags Codepipeline#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#tags_all Codepipeline#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * artifact_store block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#artifact_store Codepipeline#artifact_store}
    */
    readonly artifactStore: CodepipelineArtifactStore[] | cdktf.IResolvable;
    /**
    * stage block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#stage Codepipeline#stage}
    */
    readonly stage: CodepipelineStage[] | cdktf.IResolvable;
    /**
    * trigger block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#trigger Codepipeline#trigger}
    */
    readonly trigger?: CodepipelineTrigger[] | cdktf.IResolvable;
    /**
    * variable block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#variable Codepipeline#variable}
    */
    readonly variable?: CodepipelineVariable[] | cdktf.IResolvable;
}
export interface CodepipelineTriggerAllGitConfigurationPullRequestBranches {
}
export declare function codepipelineTriggerAllGitConfigurationPullRequestBranchesToTerraform(struct?: CodepipelineTriggerAllGitConfigurationPullRequestBranches): any;
export declare function codepipelineTriggerAllGitConfigurationPullRequestBranchesToHclTerraform(struct?: CodepipelineTriggerAllGitConfigurationPullRequestBranches): any;
export declare class CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineTriggerAllGitConfigurationPullRequestBranches | undefined;
    set internalValue(value: CodepipelineTriggerAllGitConfigurationPullRequestBranches | undefined);
    get excludes(): string[];
    get includes(): string[];
}
export declare class CodepipelineTriggerAllGitConfigurationPullRequestBranchesList extends cdktf.ComplexList {
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
    get(index: number): CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference;
}
export interface CodepipelineTriggerAllGitConfigurationPullRequestFilePaths {
}
export declare function codepipelineTriggerAllGitConfigurationPullRequestFilePathsToTerraform(struct?: CodepipelineTriggerAllGitConfigurationPullRequestFilePaths): any;
export declare function codepipelineTriggerAllGitConfigurationPullRequestFilePathsToHclTerraform(struct?: CodepipelineTriggerAllGitConfigurationPullRequestFilePaths): any;
export declare class CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineTriggerAllGitConfigurationPullRequestFilePaths | undefined;
    set internalValue(value: CodepipelineTriggerAllGitConfigurationPullRequestFilePaths | undefined);
    get excludes(): string[];
    get includes(): string[];
}
export declare class CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList extends cdktf.ComplexList {
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
    get(index: number): CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference;
}
export interface CodepipelineTriggerAllGitConfigurationPullRequest {
}
export declare function codepipelineTriggerAllGitConfigurationPullRequestToTerraform(struct?: CodepipelineTriggerAllGitConfigurationPullRequest): any;
export declare function codepipelineTriggerAllGitConfigurationPullRequestToHclTerraform(struct?: CodepipelineTriggerAllGitConfigurationPullRequest): any;
export declare class CodepipelineTriggerAllGitConfigurationPullRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineTriggerAllGitConfigurationPullRequest | undefined;
    set internalValue(value: CodepipelineTriggerAllGitConfigurationPullRequest | undefined);
    private _branches;
    get branches(): CodepipelineTriggerAllGitConfigurationPullRequestBranchesList;
    get events(): string[];
    private _filePaths;
    get filePaths(): CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList;
}
export declare class CodepipelineTriggerAllGitConfigurationPullRequestList extends cdktf.ComplexList {
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
    get(index: number): CodepipelineTriggerAllGitConfigurationPullRequestOutputReference;
}
export interface CodepipelineTriggerAllGitConfigurationPushBranches {
}
export declare function codepipelineTriggerAllGitConfigurationPushBranchesToTerraform(struct?: CodepipelineTriggerAllGitConfigurationPushBranches): any;
export declare function codepipelineTriggerAllGitConfigurationPushBranchesToHclTerraform(struct?: CodepipelineTriggerAllGitConfigurationPushBranches): any;
export declare class CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineTriggerAllGitConfigurationPushBranches | undefined;
    set internalValue(value: CodepipelineTriggerAllGitConfigurationPushBranches | undefined);
    get excludes(): string[];
    get includes(): string[];
}
export declare class CodepipelineTriggerAllGitConfigurationPushBranchesList extends cdktf.ComplexList {
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
    get(index: number): CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference;
}
export interface CodepipelineTriggerAllGitConfigurationPushFilePaths {
}
export declare function codepipelineTriggerAllGitConfigurationPushFilePathsToTerraform(struct?: CodepipelineTriggerAllGitConfigurationPushFilePaths): any;
export declare function codepipelineTriggerAllGitConfigurationPushFilePathsToHclTerraform(struct?: CodepipelineTriggerAllGitConfigurationPushFilePaths): any;
export declare class CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineTriggerAllGitConfigurationPushFilePaths | undefined;
    set internalValue(value: CodepipelineTriggerAllGitConfigurationPushFilePaths | undefined);
    get excludes(): string[];
    get includes(): string[];
}
export declare class CodepipelineTriggerAllGitConfigurationPushFilePathsList extends cdktf.ComplexList {
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
    get(index: number): CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference;
}
export interface CodepipelineTriggerAllGitConfigurationPushTags {
}
export declare function codepipelineTriggerAllGitConfigurationPushTagsToTerraform(struct?: CodepipelineTriggerAllGitConfigurationPushTags): any;
export declare function codepipelineTriggerAllGitConfigurationPushTagsToHclTerraform(struct?: CodepipelineTriggerAllGitConfigurationPushTags): any;
export declare class CodepipelineTriggerAllGitConfigurationPushTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineTriggerAllGitConfigurationPushTags | undefined;
    set internalValue(value: CodepipelineTriggerAllGitConfigurationPushTags | undefined);
    get excludes(): string[];
    get includes(): string[];
}
export declare class CodepipelineTriggerAllGitConfigurationPushTagsList extends cdktf.ComplexList {
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
    get(index: number): CodepipelineTriggerAllGitConfigurationPushTagsOutputReference;
}
export interface CodepipelineTriggerAllGitConfigurationPush {
}
export declare function codepipelineTriggerAllGitConfigurationPushToTerraform(struct?: CodepipelineTriggerAllGitConfigurationPush): any;
export declare function codepipelineTriggerAllGitConfigurationPushToHclTerraform(struct?: CodepipelineTriggerAllGitConfigurationPush): any;
export declare class CodepipelineTriggerAllGitConfigurationPushOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineTriggerAllGitConfigurationPush | undefined;
    set internalValue(value: CodepipelineTriggerAllGitConfigurationPush | undefined);
    private _branches;
    get branches(): CodepipelineTriggerAllGitConfigurationPushBranchesList;
    private _filePaths;
    get filePaths(): CodepipelineTriggerAllGitConfigurationPushFilePathsList;
    private _tags;
    get tags(): CodepipelineTriggerAllGitConfigurationPushTagsList;
}
export declare class CodepipelineTriggerAllGitConfigurationPushList extends cdktf.ComplexList {
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
    get(index: number): CodepipelineTriggerAllGitConfigurationPushOutputReference;
}
export interface CodepipelineTriggerAllGitConfiguration {
}
export declare function codepipelineTriggerAllGitConfigurationToTerraform(struct?: CodepipelineTriggerAllGitConfiguration): any;
export declare function codepipelineTriggerAllGitConfigurationToHclTerraform(struct?: CodepipelineTriggerAllGitConfiguration): any;
export declare class CodepipelineTriggerAllGitConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineTriggerAllGitConfiguration | undefined;
    set internalValue(value: CodepipelineTriggerAllGitConfiguration | undefined);
    private _pullRequest;
    get pullRequest(): CodepipelineTriggerAllGitConfigurationPullRequestList;
    private _push;
    get push(): CodepipelineTriggerAllGitConfigurationPushList;
    get sourceActionName(): string;
}
export declare class CodepipelineTriggerAllGitConfigurationList extends cdktf.ComplexList {
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
    get(index: number): CodepipelineTriggerAllGitConfigurationOutputReference;
}
export interface CodepipelineTriggerAll {
}
export declare function codepipelineTriggerAllToTerraform(struct?: CodepipelineTriggerAll): any;
export declare function codepipelineTriggerAllToHclTerraform(struct?: CodepipelineTriggerAll): any;
export declare class CodepipelineTriggerAllOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineTriggerAll | undefined;
    set internalValue(value: CodepipelineTriggerAll | undefined);
    private _gitConfiguration;
    get gitConfiguration(): CodepipelineTriggerAllGitConfigurationList;
    get providerType(): string;
}
export declare class CodepipelineTriggerAllList extends cdktf.ComplexList {
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
    get(index: number): CodepipelineTriggerAllOutputReference;
}
export interface CodepipelineArtifactStoreEncryptionKey {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#id Codepipeline#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#type Codepipeline#type}
    */
    readonly type: string;
}
export declare function codepipelineArtifactStoreEncryptionKeyToTerraform(struct?: CodepipelineArtifactStoreEncryptionKeyOutputReference | CodepipelineArtifactStoreEncryptionKey): any;
export declare function codepipelineArtifactStoreEncryptionKeyToHclTerraform(struct?: CodepipelineArtifactStoreEncryptionKeyOutputReference | CodepipelineArtifactStoreEncryptionKey): any;
export declare class CodepipelineArtifactStoreEncryptionKeyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineArtifactStoreEncryptionKey | undefined;
    set internalValue(value: CodepipelineArtifactStoreEncryptionKey | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface CodepipelineArtifactStore {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#location Codepipeline#location}
    */
    readonly location: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#region Codepipeline#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#type Codepipeline#type}
    */
    readonly type: string;
    /**
    * encryption_key block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#encryption_key Codepipeline#encryption_key}
    */
    readonly encryptionKey?: CodepipelineArtifactStoreEncryptionKey;
}
export declare function codepipelineArtifactStoreToTerraform(struct?: CodepipelineArtifactStore | cdktf.IResolvable): any;
export declare function codepipelineArtifactStoreToHclTerraform(struct?: CodepipelineArtifactStore | cdktf.IResolvable): any;
export declare class CodepipelineArtifactStoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineArtifactStore | cdktf.IResolvable | undefined;
    set internalValue(value: CodepipelineArtifactStore | cdktf.IResolvable | undefined);
    private _location?;
    get location(): string;
    set location(value: string);
    get locationInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _encryptionKey;
    get encryptionKey(): CodepipelineArtifactStoreEncryptionKeyOutputReference;
    putEncryptionKey(value: CodepipelineArtifactStoreEncryptionKey): void;
    resetEncryptionKey(): void;
    get encryptionKeyInput(): CodepipelineArtifactStoreEncryptionKey | undefined;
}
export declare class CodepipelineArtifactStoreList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodepipelineArtifactStore[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodepipelineArtifactStoreOutputReference;
}
export interface CodepipelineStageAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#category Codepipeline#category}
    */
    readonly category: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#configuration Codepipeline#configuration}
    */
    readonly configuration?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}
    */
    readonly inputArtifacts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#name Codepipeline#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#namespace Codepipeline#namespace}
    */
    readonly namespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#output_artifacts Codepipeline#output_artifacts}
    */
    readonly outputArtifacts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#owner Codepipeline#owner}
    */
    readonly owner: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#provider Codepipeline#provider}
    */
    readonly provider: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#region Codepipeline#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#run_order Codepipeline#run_order}
    */
    readonly runOrder?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}
    */
    readonly timeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#version Codepipeline#version}
    */
    readonly version: string;
}
export declare function codepipelineStageActionToTerraform(struct?: CodepipelineStageAction | cdktf.IResolvable): any;
export declare function codepipelineStageActionToHclTerraform(struct?: CodepipelineStageAction | cdktf.IResolvable): any;
export declare class CodepipelineStageActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineStageAction | cdktf.IResolvable | undefined;
    set internalValue(value: CodepipelineStageAction | cdktf.IResolvable | undefined);
    private _category?;
    get category(): string;
    set category(value: string);
    get categoryInput(): string | undefined;
    private _configuration?;
    get configuration(): {
        [key: string]: string;
    };
    set configuration(value: {
        [key: string]: string;
    });
    resetConfiguration(): void;
    get configurationInput(): {
        [key: string]: string;
    } | undefined;
    private _inputArtifacts?;
    get inputArtifacts(): string[];
    set inputArtifacts(value: string[]);
    resetInputArtifacts(): void;
    get inputArtifactsInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    resetNamespace(): void;
    get namespaceInput(): string | undefined;
    private _outputArtifacts?;
    get outputArtifacts(): string[];
    set outputArtifacts(value: string[]);
    resetOutputArtifacts(): void;
    get outputArtifactsInput(): string[] | undefined;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string | undefined;
    private _provider?;
    get provider(): string;
    set provider(value: string);
    get providerInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _runOrder?;
    get runOrder(): number;
    set runOrder(value: number);
    resetRunOrder(): void;
    get runOrderInput(): number | undefined;
    private _timeoutInMinutes?;
    get timeoutInMinutes(): number;
    set timeoutInMinutes(value: number);
    resetTimeoutInMinutes(): void;
    get timeoutInMinutesInput(): number | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    get versionInput(): string | undefined;
}
export declare class CodepipelineStageActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodepipelineStageAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodepipelineStageActionOutputReference;
}
export interface CodepipelineStageBeforeEntryConditionRuleRuleTypeId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#category Codepipeline#category}
    */
    readonly category: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#owner Codepipeline#owner}
    */
    readonly owner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#provider Codepipeline#provider}
    */
    readonly provider: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#version Codepipeline#version}
    */
    readonly version?: string;
}
export declare function codepipelineStageBeforeEntryConditionRuleRuleTypeIdToTerraform(struct?: CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference | CodepipelineStageBeforeEntryConditionRuleRuleTypeId): any;
export declare function codepipelineStageBeforeEntryConditionRuleRuleTypeIdToHclTerraform(struct?: CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference | CodepipelineStageBeforeEntryConditionRuleRuleTypeId): any;
export declare class CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineStageBeforeEntryConditionRuleRuleTypeId | undefined;
    set internalValue(value: CodepipelineStageBeforeEntryConditionRuleRuleTypeId | undefined);
    private _category?;
    get category(): string;
    set category(value: string);
    get categoryInput(): string | undefined;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    resetOwner(): void;
    get ownerInput(): string | undefined;
    private _provider?;
    get provider(): string;
    set provider(value: string);
    get providerInput(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
}
export interface CodepipelineStageBeforeEntryConditionRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#commands Codepipeline#commands}
    */
    readonly commands?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#configuration Codepipeline#configuration}
    */
    readonly configuration?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}
    */
    readonly inputArtifacts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#name Codepipeline#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#region Codepipeline#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}
    */
    readonly timeoutInMinutes?: number;
    /**
    * rule_type_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#rule_type_id Codepipeline#rule_type_id}
    */
    readonly ruleTypeId: CodepipelineStageBeforeEntryConditionRuleRuleTypeId;
}
export declare function codepipelineStageBeforeEntryConditionRuleToTerraform(struct?: CodepipelineStageBeforeEntryConditionRule | cdktf.IResolvable): any;
export declare function codepipelineStageBeforeEntryConditionRuleToHclTerraform(struct?: CodepipelineStageBeforeEntryConditionRule | cdktf.IResolvable): any;
export declare class CodepipelineStageBeforeEntryConditionRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineStageBeforeEntryConditionRule | cdktf.IResolvable | undefined;
    set internalValue(value: CodepipelineStageBeforeEntryConditionRule | cdktf.IResolvable | undefined);
    private _commands?;
    get commands(): string[];
    set commands(value: string[]);
    resetCommands(): void;
    get commandsInput(): string[] | undefined;
    private _configuration?;
    get configuration(): {
        [key: string]: string;
    };
    set configuration(value: {
        [key: string]: string;
    });
    resetConfiguration(): void;
    get configurationInput(): {
        [key: string]: string;
    } | undefined;
    private _inputArtifacts?;
    get inputArtifacts(): string[];
    set inputArtifacts(value: string[]);
    resetInputArtifacts(): void;
    get inputArtifactsInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _timeoutInMinutes?;
    get timeoutInMinutes(): number;
    set timeoutInMinutes(value: number);
    resetTimeoutInMinutes(): void;
    get timeoutInMinutesInput(): number | undefined;
    private _ruleTypeId;
    get ruleTypeId(): CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference;
    putRuleTypeId(value: CodepipelineStageBeforeEntryConditionRuleRuleTypeId): void;
    get ruleTypeIdInput(): CodepipelineStageBeforeEntryConditionRuleRuleTypeId | undefined;
}
export declare class CodepipelineStageBeforeEntryConditionRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodepipelineStageBeforeEntryConditionRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodepipelineStageBeforeEntryConditionRuleOutputReference;
}
export interface CodepipelineStageBeforeEntryCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#result Codepipeline#result}
    */
    readonly result?: string;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#rule Codepipeline#rule}
    */
    readonly rule: CodepipelineStageBeforeEntryConditionRule[] | cdktf.IResolvable;
}
export declare function codepipelineStageBeforeEntryConditionToTerraform(struct?: CodepipelineStageBeforeEntryConditionOutputReference | CodepipelineStageBeforeEntryCondition): any;
export declare function codepipelineStageBeforeEntryConditionToHclTerraform(struct?: CodepipelineStageBeforeEntryConditionOutputReference | CodepipelineStageBeforeEntryCondition): any;
export declare class CodepipelineStageBeforeEntryConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineStageBeforeEntryCondition | undefined;
    set internalValue(value: CodepipelineStageBeforeEntryCondition | undefined);
    private _result?;
    get result(): string;
    set result(value: string);
    resetResult(): void;
    get resultInput(): string | undefined;
    private _rule;
    get rule(): CodepipelineStageBeforeEntryConditionRuleList;
    putRule(value: CodepipelineStageBeforeEntryConditionRule[] | cdktf.IResolvable): void;
    get ruleInput(): cdktf.IResolvable | CodepipelineStageBeforeEntryConditionRule[] | undefined;
}
export interface CodepipelineStageBeforeEntry {
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#condition Codepipeline#condition}
    */
    readonly condition: CodepipelineStageBeforeEntryCondition;
}
export declare function codepipelineStageBeforeEntryToTerraform(struct?: CodepipelineStageBeforeEntryOutputReference | CodepipelineStageBeforeEntry): any;
export declare function codepipelineStageBeforeEntryToHclTerraform(struct?: CodepipelineStageBeforeEntryOutputReference | CodepipelineStageBeforeEntry): any;
export declare class CodepipelineStageBeforeEntryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineStageBeforeEntry | undefined;
    set internalValue(value: CodepipelineStageBeforeEntry | undefined);
    private _condition;
    get condition(): CodepipelineStageBeforeEntryConditionOutputReference;
    putCondition(value: CodepipelineStageBeforeEntryCondition): void;
    get conditionInput(): CodepipelineStageBeforeEntryCondition | undefined;
}
export interface CodepipelineStageOnFailureConditionRuleRuleTypeId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#category Codepipeline#category}
    */
    readonly category: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#owner Codepipeline#owner}
    */
    readonly owner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#provider Codepipeline#provider}
    */
    readonly provider: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#version Codepipeline#version}
    */
    readonly version?: string;
}
export declare function codepipelineStageOnFailureConditionRuleRuleTypeIdToTerraform(struct?: CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference | CodepipelineStageOnFailureConditionRuleRuleTypeId): any;
export declare function codepipelineStageOnFailureConditionRuleRuleTypeIdToHclTerraform(struct?: CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference | CodepipelineStageOnFailureConditionRuleRuleTypeId): any;
export declare class CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineStageOnFailureConditionRuleRuleTypeId | undefined;
    set internalValue(value: CodepipelineStageOnFailureConditionRuleRuleTypeId | undefined);
    private _category?;
    get category(): string;
    set category(value: string);
    get categoryInput(): string | undefined;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    resetOwner(): void;
    get ownerInput(): string | undefined;
    private _provider?;
    get provider(): string;
    set provider(value: string);
    get providerInput(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
}
export interface CodepipelineStageOnFailureConditionRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#commands Codepipeline#commands}
    */
    readonly commands?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#configuration Codepipeline#configuration}
    */
    readonly configuration?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}
    */
    readonly inputArtifacts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#name Codepipeline#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#region Codepipeline#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}
    */
    readonly timeoutInMinutes?: number;
    /**
    * rule_type_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#rule_type_id Codepipeline#rule_type_id}
    */
    readonly ruleTypeId: CodepipelineStageOnFailureConditionRuleRuleTypeId;
}
export declare function codepipelineStageOnFailureConditionRuleToTerraform(struct?: CodepipelineStageOnFailureConditionRule | cdktf.IResolvable): any;
export declare function codepipelineStageOnFailureConditionRuleToHclTerraform(struct?: CodepipelineStageOnFailureConditionRule | cdktf.IResolvable): any;
export declare class CodepipelineStageOnFailureConditionRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineStageOnFailureConditionRule | cdktf.IResolvable | undefined;
    set internalValue(value: CodepipelineStageOnFailureConditionRule | cdktf.IResolvable | undefined);
    private _commands?;
    get commands(): string[];
    set commands(value: string[]);
    resetCommands(): void;
    get commandsInput(): string[] | undefined;
    private _configuration?;
    get configuration(): {
        [key: string]: string;
    };
    set configuration(value: {
        [key: string]: string;
    });
    resetConfiguration(): void;
    get configurationInput(): {
        [key: string]: string;
    } | undefined;
    private _inputArtifacts?;
    get inputArtifacts(): string[];
    set inputArtifacts(value: string[]);
    resetInputArtifacts(): void;
    get inputArtifactsInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _timeoutInMinutes?;
    get timeoutInMinutes(): number;
    set timeoutInMinutes(value: number);
    resetTimeoutInMinutes(): void;
    get timeoutInMinutesInput(): number | undefined;
    private _ruleTypeId;
    get ruleTypeId(): CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference;
    putRuleTypeId(value: CodepipelineStageOnFailureConditionRuleRuleTypeId): void;
    get ruleTypeIdInput(): CodepipelineStageOnFailureConditionRuleRuleTypeId | undefined;
}
export declare class CodepipelineStageOnFailureConditionRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodepipelineStageOnFailureConditionRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodepipelineStageOnFailureConditionRuleOutputReference;
}
export interface CodepipelineStageOnFailureCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#result Codepipeline#result}
    */
    readonly result?: string;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#rule Codepipeline#rule}
    */
    readonly rule: CodepipelineStageOnFailureConditionRule[] | cdktf.IResolvable;
}
export declare function codepipelineStageOnFailureConditionToTerraform(struct?: CodepipelineStageOnFailureConditionOutputReference | CodepipelineStageOnFailureCondition): any;
export declare function codepipelineStageOnFailureConditionToHclTerraform(struct?: CodepipelineStageOnFailureConditionOutputReference | CodepipelineStageOnFailureCondition): any;
export declare class CodepipelineStageOnFailureConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineStageOnFailureCondition | undefined;
    set internalValue(value: CodepipelineStageOnFailureCondition | undefined);
    private _result?;
    get result(): string;
    set result(value: string);
    resetResult(): void;
    get resultInput(): string | undefined;
    private _rule;
    get rule(): CodepipelineStageOnFailureConditionRuleList;
    putRule(value: CodepipelineStageOnFailureConditionRule[] | cdktf.IResolvable): void;
    get ruleInput(): cdktf.IResolvable | CodepipelineStageOnFailureConditionRule[] | undefined;
}
export interface CodepipelineStageOnFailureRetryConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#retry_mode Codepipeline#retry_mode}
    */
    readonly retryMode?: string;
}
export declare function codepipelineStageOnFailureRetryConfigurationToTerraform(struct?: CodepipelineStageOnFailureRetryConfigurationOutputReference | CodepipelineStageOnFailureRetryConfiguration): any;
export declare function codepipelineStageOnFailureRetryConfigurationToHclTerraform(struct?: CodepipelineStageOnFailureRetryConfigurationOutputReference | CodepipelineStageOnFailureRetryConfiguration): any;
export declare class CodepipelineStageOnFailureRetryConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineStageOnFailureRetryConfiguration | undefined;
    set internalValue(value: CodepipelineStageOnFailureRetryConfiguration | undefined);
    private _retryMode?;
    get retryMode(): string;
    set retryMode(value: string);
    resetRetryMode(): void;
    get retryModeInput(): string | undefined;
}
export interface CodepipelineStageOnFailure {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#result Codepipeline#result}
    */
    readonly result?: string;
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#condition Codepipeline#condition}
    */
    readonly condition?: CodepipelineStageOnFailureCondition;
    /**
    * retry_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#retry_configuration Codepipeline#retry_configuration}
    */
    readonly retryConfiguration?: CodepipelineStageOnFailureRetryConfiguration;
}
export declare function codepipelineStageOnFailureToTerraform(struct?: CodepipelineStageOnFailureOutputReference | CodepipelineStageOnFailure): any;
export declare function codepipelineStageOnFailureToHclTerraform(struct?: CodepipelineStageOnFailureOutputReference | CodepipelineStageOnFailure): any;
export declare class CodepipelineStageOnFailureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineStageOnFailure | undefined;
    set internalValue(value: CodepipelineStageOnFailure | undefined);
    private _result?;
    get result(): string;
    set result(value: string);
    resetResult(): void;
    get resultInput(): string | undefined;
    private _condition;
    get condition(): CodepipelineStageOnFailureConditionOutputReference;
    putCondition(value: CodepipelineStageOnFailureCondition): void;
    resetCondition(): void;
    get conditionInput(): CodepipelineStageOnFailureCondition | undefined;
    private _retryConfiguration;
    get retryConfiguration(): CodepipelineStageOnFailureRetryConfigurationOutputReference;
    putRetryConfiguration(value: CodepipelineStageOnFailureRetryConfiguration): void;
    resetRetryConfiguration(): void;
    get retryConfigurationInput(): CodepipelineStageOnFailureRetryConfiguration | undefined;
}
export interface CodepipelineStageOnSuccessConditionRuleRuleTypeId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#category Codepipeline#category}
    */
    readonly category: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#owner Codepipeline#owner}
    */
    readonly owner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#provider Codepipeline#provider}
    */
    readonly provider: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#version Codepipeline#version}
    */
    readonly version?: string;
}
export declare function codepipelineStageOnSuccessConditionRuleRuleTypeIdToTerraform(struct?: CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference | CodepipelineStageOnSuccessConditionRuleRuleTypeId): any;
export declare function codepipelineStageOnSuccessConditionRuleRuleTypeIdToHclTerraform(struct?: CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference | CodepipelineStageOnSuccessConditionRuleRuleTypeId): any;
export declare class CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineStageOnSuccessConditionRuleRuleTypeId | undefined;
    set internalValue(value: CodepipelineStageOnSuccessConditionRuleRuleTypeId | undefined);
    private _category?;
    get category(): string;
    set category(value: string);
    get categoryInput(): string | undefined;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    resetOwner(): void;
    get ownerInput(): string | undefined;
    private _provider?;
    get provider(): string;
    set provider(value: string);
    get providerInput(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
}
export interface CodepipelineStageOnSuccessConditionRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#commands Codepipeline#commands}
    */
    readonly commands?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#configuration Codepipeline#configuration}
    */
    readonly configuration?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}
    */
    readonly inputArtifacts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#name Codepipeline#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#region Codepipeline#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}
    */
    readonly timeoutInMinutes?: number;
    /**
    * rule_type_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#rule_type_id Codepipeline#rule_type_id}
    */
    readonly ruleTypeId: CodepipelineStageOnSuccessConditionRuleRuleTypeId;
}
export declare function codepipelineStageOnSuccessConditionRuleToTerraform(struct?: CodepipelineStageOnSuccessConditionRule | cdktf.IResolvable): any;
export declare function codepipelineStageOnSuccessConditionRuleToHclTerraform(struct?: CodepipelineStageOnSuccessConditionRule | cdktf.IResolvable): any;
export declare class CodepipelineStageOnSuccessConditionRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineStageOnSuccessConditionRule | cdktf.IResolvable | undefined;
    set internalValue(value: CodepipelineStageOnSuccessConditionRule | cdktf.IResolvable | undefined);
    private _commands?;
    get commands(): string[];
    set commands(value: string[]);
    resetCommands(): void;
    get commandsInput(): string[] | undefined;
    private _configuration?;
    get configuration(): {
        [key: string]: string;
    };
    set configuration(value: {
        [key: string]: string;
    });
    resetConfiguration(): void;
    get configurationInput(): {
        [key: string]: string;
    } | undefined;
    private _inputArtifacts?;
    get inputArtifacts(): string[];
    set inputArtifacts(value: string[]);
    resetInputArtifacts(): void;
    get inputArtifactsInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _timeoutInMinutes?;
    get timeoutInMinutes(): number;
    set timeoutInMinutes(value: number);
    resetTimeoutInMinutes(): void;
    get timeoutInMinutesInput(): number | undefined;
    private _ruleTypeId;
    get ruleTypeId(): CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference;
    putRuleTypeId(value: CodepipelineStageOnSuccessConditionRuleRuleTypeId): void;
    get ruleTypeIdInput(): CodepipelineStageOnSuccessConditionRuleRuleTypeId | undefined;
}
export declare class CodepipelineStageOnSuccessConditionRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodepipelineStageOnSuccessConditionRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodepipelineStageOnSuccessConditionRuleOutputReference;
}
export interface CodepipelineStageOnSuccessCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#result Codepipeline#result}
    */
    readonly result?: string;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#rule Codepipeline#rule}
    */
    readonly rule: CodepipelineStageOnSuccessConditionRule[] | cdktf.IResolvable;
}
export declare function codepipelineStageOnSuccessConditionToTerraform(struct?: CodepipelineStageOnSuccessConditionOutputReference | CodepipelineStageOnSuccessCondition): any;
export declare function codepipelineStageOnSuccessConditionToHclTerraform(struct?: CodepipelineStageOnSuccessConditionOutputReference | CodepipelineStageOnSuccessCondition): any;
export declare class CodepipelineStageOnSuccessConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineStageOnSuccessCondition | undefined;
    set internalValue(value: CodepipelineStageOnSuccessCondition | undefined);
    private _result?;
    get result(): string;
    set result(value: string);
    resetResult(): void;
    get resultInput(): string | undefined;
    private _rule;
    get rule(): CodepipelineStageOnSuccessConditionRuleList;
    putRule(value: CodepipelineStageOnSuccessConditionRule[] | cdktf.IResolvable): void;
    get ruleInput(): cdktf.IResolvable | CodepipelineStageOnSuccessConditionRule[] | undefined;
}
export interface CodepipelineStageOnSuccess {
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#condition Codepipeline#condition}
    */
    readonly condition: CodepipelineStageOnSuccessCondition;
}
export declare function codepipelineStageOnSuccessToTerraform(struct?: CodepipelineStageOnSuccessOutputReference | CodepipelineStageOnSuccess): any;
export declare function codepipelineStageOnSuccessToHclTerraform(struct?: CodepipelineStageOnSuccessOutputReference | CodepipelineStageOnSuccess): any;
export declare class CodepipelineStageOnSuccessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineStageOnSuccess | undefined;
    set internalValue(value: CodepipelineStageOnSuccess | undefined);
    private _condition;
    get condition(): CodepipelineStageOnSuccessConditionOutputReference;
    putCondition(value: CodepipelineStageOnSuccessCondition): void;
    get conditionInput(): CodepipelineStageOnSuccessCondition | undefined;
}
export interface CodepipelineStage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#name Codepipeline#name}
    */
    readonly name: string;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#action Codepipeline#action}
    */
    readonly action: CodepipelineStageAction[] | cdktf.IResolvable;
    /**
    * before_entry block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#before_entry Codepipeline#before_entry}
    */
    readonly beforeEntry?: CodepipelineStageBeforeEntry;
    /**
    * on_failure block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#on_failure Codepipeline#on_failure}
    */
    readonly onFailure?: CodepipelineStageOnFailure;
    /**
    * on_success block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#on_success Codepipeline#on_success}
    */
    readonly onSuccess?: CodepipelineStageOnSuccess;
}
export declare function codepipelineStageToTerraform(struct?: CodepipelineStage | cdktf.IResolvable): any;
export declare function codepipelineStageToHclTerraform(struct?: CodepipelineStage | cdktf.IResolvable): any;
export declare class CodepipelineStageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineStage | cdktf.IResolvable | undefined;
    set internalValue(value: CodepipelineStage | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _action;
    get action(): CodepipelineStageActionList;
    putAction(value: CodepipelineStageAction[] | cdktf.IResolvable): void;
    get actionInput(): cdktf.IResolvable | CodepipelineStageAction[] | undefined;
    private _beforeEntry;
    get beforeEntry(): CodepipelineStageBeforeEntryOutputReference;
    putBeforeEntry(value: CodepipelineStageBeforeEntry): void;
    resetBeforeEntry(): void;
    get beforeEntryInput(): CodepipelineStageBeforeEntry | undefined;
    private _onFailure;
    get onFailure(): CodepipelineStageOnFailureOutputReference;
    putOnFailure(value: CodepipelineStageOnFailure): void;
    resetOnFailure(): void;
    get onFailureInput(): CodepipelineStageOnFailure | undefined;
    private _onSuccess;
    get onSuccess(): CodepipelineStageOnSuccessOutputReference;
    putOnSuccess(value: CodepipelineStageOnSuccess): void;
    resetOnSuccess(): void;
    get onSuccessInput(): CodepipelineStageOnSuccess | undefined;
}
export declare class CodepipelineStageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodepipelineStage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodepipelineStageOutputReference;
}
export interface CodepipelineTriggerGitConfigurationPullRequestBranches {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#excludes Codepipeline#excludes}
    */
    readonly excludes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#includes Codepipeline#includes}
    */
    readonly includes?: string[];
}
export declare function codepipelineTriggerGitConfigurationPullRequestBranchesToTerraform(struct?: CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference | CodepipelineTriggerGitConfigurationPullRequestBranches): any;
export declare function codepipelineTriggerGitConfigurationPullRequestBranchesToHclTerraform(struct?: CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference | CodepipelineTriggerGitConfigurationPullRequestBranches): any;
export declare class CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineTriggerGitConfigurationPullRequestBranches | undefined;
    set internalValue(value: CodepipelineTriggerGitConfigurationPullRequestBranches | undefined);
    private _excludes?;
    get excludes(): string[];
    set excludes(value: string[]);
    resetExcludes(): void;
    get excludesInput(): string[] | undefined;
    private _includes?;
    get includes(): string[];
    set includes(value: string[]);
    resetIncludes(): void;
    get includesInput(): string[] | undefined;
}
export interface CodepipelineTriggerGitConfigurationPullRequestFilePaths {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#excludes Codepipeline#excludes}
    */
    readonly excludes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#includes Codepipeline#includes}
    */
    readonly includes?: string[];
}
export declare function codepipelineTriggerGitConfigurationPullRequestFilePathsToTerraform(struct?: CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference | CodepipelineTriggerGitConfigurationPullRequestFilePaths): any;
export declare function codepipelineTriggerGitConfigurationPullRequestFilePathsToHclTerraform(struct?: CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference | CodepipelineTriggerGitConfigurationPullRequestFilePaths): any;
export declare class CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineTriggerGitConfigurationPullRequestFilePaths | undefined;
    set internalValue(value: CodepipelineTriggerGitConfigurationPullRequestFilePaths | undefined);
    private _excludes?;
    get excludes(): string[];
    set excludes(value: string[]);
    resetExcludes(): void;
    get excludesInput(): string[] | undefined;
    private _includes?;
    get includes(): string[];
    set includes(value: string[]);
    resetIncludes(): void;
    get includesInput(): string[] | undefined;
}
export interface CodepipelineTriggerGitConfigurationPullRequest {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#events Codepipeline#events}
    */
    readonly events?: string[];
    /**
    * branches block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#branches Codepipeline#branches}
    */
    readonly branches?: CodepipelineTriggerGitConfigurationPullRequestBranches;
    /**
    * file_paths block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#file_paths Codepipeline#file_paths}
    */
    readonly filePaths?: CodepipelineTriggerGitConfigurationPullRequestFilePaths;
}
export declare function codepipelineTriggerGitConfigurationPullRequestToTerraform(struct?: CodepipelineTriggerGitConfigurationPullRequest | cdktf.IResolvable): any;
export declare function codepipelineTriggerGitConfigurationPullRequestToHclTerraform(struct?: CodepipelineTriggerGitConfigurationPullRequest | cdktf.IResolvable): any;
export declare class CodepipelineTriggerGitConfigurationPullRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineTriggerGitConfigurationPullRequest | cdktf.IResolvable | undefined;
    set internalValue(value: CodepipelineTriggerGitConfigurationPullRequest | cdktf.IResolvable | undefined);
    private _events?;
    get events(): string[];
    set events(value: string[]);
    resetEvents(): void;
    get eventsInput(): string[] | undefined;
    private _branches;
    get branches(): CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference;
    putBranches(value: CodepipelineTriggerGitConfigurationPullRequestBranches): void;
    resetBranches(): void;
    get branchesInput(): CodepipelineTriggerGitConfigurationPullRequestBranches | undefined;
    private _filePaths;
    get filePaths(): CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference;
    putFilePaths(value: CodepipelineTriggerGitConfigurationPullRequestFilePaths): void;
    resetFilePaths(): void;
    get filePathsInput(): CodepipelineTriggerGitConfigurationPullRequestFilePaths | undefined;
}
export declare class CodepipelineTriggerGitConfigurationPullRequestList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodepipelineTriggerGitConfigurationPullRequest[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodepipelineTriggerGitConfigurationPullRequestOutputReference;
}
export interface CodepipelineTriggerGitConfigurationPushBranches {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#excludes Codepipeline#excludes}
    */
    readonly excludes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#includes Codepipeline#includes}
    */
    readonly includes?: string[];
}
export declare function codepipelineTriggerGitConfigurationPushBranchesToTerraform(struct?: CodepipelineTriggerGitConfigurationPushBranchesOutputReference | CodepipelineTriggerGitConfigurationPushBranches): any;
export declare function codepipelineTriggerGitConfigurationPushBranchesToHclTerraform(struct?: CodepipelineTriggerGitConfigurationPushBranchesOutputReference | CodepipelineTriggerGitConfigurationPushBranches): any;
export declare class CodepipelineTriggerGitConfigurationPushBranchesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineTriggerGitConfigurationPushBranches | undefined;
    set internalValue(value: CodepipelineTriggerGitConfigurationPushBranches | undefined);
    private _excludes?;
    get excludes(): string[];
    set excludes(value: string[]);
    resetExcludes(): void;
    get excludesInput(): string[] | undefined;
    private _includes?;
    get includes(): string[];
    set includes(value: string[]);
    resetIncludes(): void;
    get includesInput(): string[] | undefined;
}
export interface CodepipelineTriggerGitConfigurationPushFilePaths {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#excludes Codepipeline#excludes}
    */
    readonly excludes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#includes Codepipeline#includes}
    */
    readonly includes?: string[];
}
export declare function codepipelineTriggerGitConfigurationPushFilePathsToTerraform(struct?: CodepipelineTriggerGitConfigurationPushFilePathsOutputReference | CodepipelineTriggerGitConfigurationPushFilePaths): any;
export declare function codepipelineTriggerGitConfigurationPushFilePathsToHclTerraform(struct?: CodepipelineTriggerGitConfigurationPushFilePathsOutputReference | CodepipelineTriggerGitConfigurationPushFilePaths): any;
export declare class CodepipelineTriggerGitConfigurationPushFilePathsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineTriggerGitConfigurationPushFilePaths | undefined;
    set internalValue(value: CodepipelineTriggerGitConfigurationPushFilePaths | undefined);
    private _excludes?;
    get excludes(): string[];
    set excludes(value: string[]);
    resetExcludes(): void;
    get excludesInput(): string[] | undefined;
    private _includes?;
    get includes(): string[];
    set includes(value: string[]);
    resetIncludes(): void;
    get includesInput(): string[] | undefined;
}
export interface CodepipelineTriggerGitConfigurationPushTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#excludes Codepipeline#excludes}
    */
    readonly excludes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#includes Codepipeline#includes}
    */
    readonly includes?: string[];
}
export declare function codepipelineTriggerGitConfigurationPushTagsToTerraform(struct?: CodepipelineTriggerGitConfigurationPushTagsOutputReference | CodepipelineTriggerGitConfigurationPushTags): any;
export declare function codepipelineTriggerGitConfigurationPushTagsToHclTerraform(struct?: CodepipelineTriggerGitConfigurationPushTagsOutputReference | CodepipelineTriggerGitConfigurationPushTags): any;
export declare class CodepipelineTriggerGitConfigurationPushTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineTriggerGitConfigurationPushTags | undefined;
    set internalValue(value: CodepipelineTriggerGitConfigurationPushTags | undefined);
    private _excludes?;
    get excludes(): string[];
    set excludes(value: string[]);
    resetExcludes(): void;
    get excludesInput(): string[] | undefined;
    private _includes?;
    get includes(): string[];
    set includes(value: string[]);
    resetIncludes(): void;
    get includesInput(): string[] | undefined;
}
export interface CodepipelineTriggerGitConfigurationPush {
    /**
    * branches block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#branches Codepipeline#branches}
    */
    readonly branches?: CodepipelineTriggerGitConfigurationPushBranches;
    /**
    * file_paths block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#file_paths Codepipeline#file_paths}
    */
    readonly filePaths?: CodepipelineTriggerGitConfigurationPushFilePaths;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#tags Codepipeline#tags}
    */
    readonly tags?: CodepipelineTriggerGitConfigurationPushTags;
}
export declare function codepipelineTriggerGitConfigurationPushToTerraform(struct?: CodepipelineTriggerGitConfigurationPush | cdktf.IResolvable): any;
export declare function codepipelineTriggerGitConfigurationPushToHclTerraform(struct?: CodepipelineTriggerGitConfigurationPush | cdktf.IResolvable): any;
export declare class CodepipelineTriggerGitConfigurationPushOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineTriggerGitConfigurationPush | cdktf.IResolvable | undefined;
    set internalValue(value: CodepipelineTriggerGitConfigurationPush | cdktf.IResolvable | undefined);
    private _branches;
    get branches(): CodepipelineTriggerGitConfigurationPushBranchesOutputReference;
    putBranches(value: CodepipelineTriggerGitConfigurationPushBranches): void;
    resetBranches(): void;
    get branchesInput(): CodepipelineTriggerGitConfigurationPushBranches | undefined;
    private _filePaths;
    get filePaths(): CodepipelineTriggerGitConfigurationPushFilePathsOutputReference;
    putFilePaths(value: CodepipelineTriggerGitConfigurationPushFilePaths): void;
    resetFilePaths(): void;
    get filePathsInput(): CodepipelineTriggerGitConfigurationPushFilePaths | undefined;
    private _tags;
    get tags(): CodepipelineTriggerGitConfigurationPushTagsOutputReference;
    putTags(value: CodepipelineTriggerGitConfigurationPushTags): void;
    resetTags(): void;
    get tagsInput(): CodepipelineTriggerGitConfigurationPushTags | undefined;
}
export declare class CodepipelineTriggerGitConfigurationPushList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodepipelineTriggerGitConfigurationPush[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodepipelineTriggerGitConfigurationPushOutputReference;
}
export interface CodepipelineTriggerGitConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#source_action_name Codepipeline#source_action_name}
    */
    readonly sourceActionName: string;
    /**
    * pull_request block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#pull_request Codepipeline#pull_request}
    */
    readonly pullRequest?: CodepipelineTriggerGitConfigurationPullRequest[] | cdktf.IResolvable;
    /**
    * push block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#push Codepipeline#push}
    */
    readonly push?: CodepipelineTriggerGitConfigurationPush[] | cdktf.IResolvable;
}
export declare function codepipelineTriggerGitConfigurationToTerraform(struct?: CodepipelineTriggerGitConfigurationOutputReference | CodepipelineTriggerGitConfiguration): any;
export declare function codepipelineTriggerGitConfigurationToHclTerraform(struct?: CodepipelineTriggerGitConfigurationOutputReference | CodepipelineTriggerGitConfiguration): any;
export declare class CodepipelineTriggerGitConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodepipelineTriggerGitConfiguration | undefined;
    set internalValue(value: CodepipelineTriggerGitConfiguration | undefined);
    private _sourceActionName?;
    get sourceActionName(): string;
    set sourceActionName(value: string);
    get sourceActionNameInput(): string | undefined;
    private _pullRequest;
    get pullRequest(): CodepipelineTriggerGitConfigurationPullRequestList;
    putPullRequest(value: CodepipelineTriggerGitConfigurationPullRequest[] | cdktf.IResolvable): void;
    resetPullRequest(): void;
    get pullRequestInput(): cdktf.IResolvable | CodepipelineTriggerGitConfigurationPullRequest[] | undefined;
    private _push;
    get push(): CodepipelineTriggerGitConfigurationPushList;
    putPush(value: CodepipelineTriggerGitConfigurationPush[] | cdktf.IResolvable): void;
    resetPush(): void;
    get pushInput(): cdktf.IResolvable | CodepipelineTriggerGitConfigurationPush[] | undefined;
}
export interface CodepipelineTrigger {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#provider_type Codepipeline#provider_type}
    */
    readonly providerType: string;
    /**
    * git_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#git_configuration Codepipeline#git_configuration}
    */
    readonly gitConfiguration: CodepipelineTriggerGitConfiguration;
}
export declare function codepipelineTriggerToTerraform(struct?: CodepipelineTrigger | cdktf.IResolvable): any;
export declare function codepipelineTriggerToHclTerraform(struct?: CodepipelineTrigger | cdktf.IResolvable): any;
export declare class CodepipelineTriggerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineTrigger | cdktf.IResolvable | undefined;
    set internalValue(value: CodepipelineTrigger | cdktf.IResolvable | undefined);
    private _providerType?;
    get providerType(): string;
    set providerType(value: string);
    get providerTypeInput(): string | undefined;
    private _gitConfiguration;
    get gitConfiguration(): CodepipelineTriggerGitConfigurationOutputReference;
    putGitConfiguration(value: CodepipelineTriggerGitConfiguration): void;
    get gitConfigurationInput(): CodepipelineTriggerGitConfiguration | undefined;
}
export declare class CodepipelineTriggerList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodepipelineTrigger[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodepipelineTriggerOutputReference;
}
export interface CodepipelineVariable {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#default_value Codepipeline#default_value}
    */
    readonly defaultValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#description Codepipeline#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#name Codepipeline#name}
    */
    readonly name: string;
}
export declare function codepipelineVariableToTerraform(struct?: CodepipelineVariable | cdktf.IResolvable): any;
export declare function codepipelineVariableToHclTerraform(struct?: CodepipelineVariable | cdktf.IResolvable): any;
export declare class CodepipelineVariableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodepipelineVariable | cdktf.IResolvable | undefined;
    set internalValue(value: CodepipelineVariable | cdktf.IResolvable | undefined);
    private _defaultValue?;
    get defaultValue(): string;
    set defaultValue(value: string);
    resetDefaultValue(): void;
    get defaultValueInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export declare class CodepipelineVariableList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodepipelineVariable[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodepipelineVariableOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline aws_codepipeline}
*/
export declare class Codepipeline extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codepipeline";
    /**
    * Generates CDKTF code for importing a Codepipeline resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Codepipeline to import
    * @param importFromId The id of the existing Codepipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Codepipeline to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codepipeline aws_codepipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodepipelineConfig
    */
    constructor(scope: Construct, id: string, config: CodepipelineConfig);
    get arn(): string;
    private _executionMode?;
    get executionMode(): string;
    set executionMode(value: string);
    resetExecutionMode(): void;
    get executionModeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _pipelineType?;
    get pipelineType(): string;
    set pipelineType(value: string);
    resetPipelineType(): void;
    get pipelineTypeInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _triggerAll;
    get triggerAll(): CodepipelineTriggerAllList;
    private _artifactStore;
    get artifactStore(): CodepipelineArtifactStoreList;
    putArtifactStore(value: CodepipelineArtifactStore[] | cdktf.IResolvable): void;
    get artifactStoreInput(): cdktf.IResolvable | CodepipelineArtifactStore[] | undefined;
    private _stage;
    get stage(): CodepipelineStageList;
    putStage(value: CodepipelineStage[] | cdktf.IResolvable): void;
    get stageInput(): cdktf.IResolvable | CodepipelineStage[] | undefined;
    private _trigger;
    get trigger(): CodepipelineTriggerList;
    putTrigger(value: CodepipelineTrigger[] | cdktf.IResolvable): void;
    resetTrigger(): void;
    get triggerInput(): cdktf.IResolvable | CodepipelineTrigger[] | undefined;
    private _variable;
    get variable(): CodepipelineVariableList;
    putVariable(value: CodepipelineVariable[] | cdktf.IResolvable): void;
    resetVariable(): void;
    get variableInput(): cdktf.IResolvable | CodepipelineVariable[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
