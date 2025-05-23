/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodepipelineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#execution_mode Codepipeline#execution_mode}
    */
    readonly executionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#id Codepipeline#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#name Codepipeline#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#pipeline_type Codepipeline#pipeline_type}
    */
    readonly pipelineType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#tags Codepipeline#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#tags_all Codepipeline#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * artifact_store block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#artifact_store Codepipeline#artifact_store}
    */
    readonly artifactStore: CodepipelineArtifactStore[] | cdktf.IResolvable;
    /**
    * stage block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#stage Codepipeline#stage}
    */
    readonly stage: CodepipelineStage[] | cdktf.IResolvable;
    /**
    * trigger block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#trigger Codepipeline#trigger}
    */
    readonly trigger?: CodepipelineTrigger[] | cdktf.IResolvable;
    /**
    * variable block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#variable Codepipeline#variable}
    */
    readonly variable?: CodepipelineVariable[] | cdktf.IResolvable;
}
export interface CodepipelineArtifactStoreEncryptionKey {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#id Codepipeline#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#type Codepipeline#type}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#location Codepipeline#location}
    */
    readonly location: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#region Codepipeline#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#type Codepipeline#type}
    */
    readonly type: string;
    /**
    * encryption_key block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#encryption_key Codepipeline#encryption_key}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#category Codepipeline#category}
    */
    readonly category: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#configuration Codepipeline#configuration}
    */
    readonly configuration?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}
    */
    readonly inputArtifacts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#name Codepipeline#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#namespace Codepipeline#namespace}
    */
    readonly namespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#output_artifacts Codepipeline#output_artifacts}
    */
    readonly outputArtifacts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#owner Codepipeline#owner}
    */
    readonly owner: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#provider Codepipeline#provider}
    */
    readonly provider: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#region Codepipeline#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#run_order Codepipeline#run_order}
    */
    readonly runOrder?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}
    */
    readonly timeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#version Codepipeline#version}
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
export interface CodepipelineStage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#name Codepipeline#name}
    */
    readonly name: string;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#action Codepipeline#action}
    */
    readonly action: CodepipelineStageAction[] | cdktf.IResolvable;
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#excludes Codepipeline#excludes}
    */
    readonly excludes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#includes Codepipeline#includes}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#excludes Codepipeline#excludes}
    */
    readonly excludes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#includes Codepipeline#includes}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#events Codepipeline#events}
    */
    readonly events?: string[];
    /**
    * branches block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#branches Codepipeline#branches}
    */
    readonly branches?: CodepipelineTriggerGitConfigurationPullRequestBranches;
    /**
    * file_paths block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#file_paths Codepipeline#file_paths}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#excludes Codepipeline#excludes}
    */
    readonly excludes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#includes Codepipeline#includes}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#excludes Codepipeline#excludes}
    */
    readonly excludes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#includes Codepipeline#includes}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#excludes Codepipeline#excludes}
    */
    readonly excludes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#includes Codepipeline#includes}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#branches Codepipeline#branches}
    */
    readonly branches?: CodepipelineTriggerGitConfigurationPushBranches;
    /**
    * file_paths block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#file_paths Codepipeline#file_paths}
    */
    readonly filePaths?: CodepipelineTriggerGitConfigurationPushFilePaths;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#tags Codepipeline#tags}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#source_action_name Codepipeline#source_action_name}
    */
    readonly sourceActionName: string;
    /**
    * pull_request block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#pull_request Codepipeline#pull_request}
    */
    readonly pullRequest?: CodepipelineTriggerGitConfigurationPullRequest[] | cdktf.IResolvable;
    /**
    * push block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#push Codepipeline#push}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#provider_type Codepipeline#provider_type}
    */
    readonly providerType: string;
    /**
    * git_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#git_configuration Codepipeline#git_configuration}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#default_value Codepipeline#default_value}
    */
    readonly defaultValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#description Codepipeline#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#name Codepipeline#name}
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline aws_codepipeline}
*/
export declare class Codepipeline extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codepipeline";
    /**
    * Generates CDKTF code for importing a Codepipeline resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Codepipeline to import
    * @param importFromId The id of the existing Codepipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Codepipeline to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codepipeline aws_codepipeline} Resource
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
