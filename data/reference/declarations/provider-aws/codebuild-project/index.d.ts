/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodebuildProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#badge_enabled CodebuildProject#badge_enabled}
    */
    readonly badgeEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#build_timeout CodebuildProject#build_timeout}
    */
    readonly buildTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#concurrent_build_limit CodebuildProject#concurrent_build_limit}
    */
    readonly concurrentBuildLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#description CodebuildProject#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#encryption_key CodebuildProject#encryption_key}
    */
    readonly encryptionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#id CodebuildProject#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#name CodebuildProject#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#project_visibility CodebuildProject#project_visibility}
    */
    readonly projectVisibility?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#queued_timeout CodebuildProject#queued_timeout}
    */
    readonly queuedTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#resource_access_role CodebuildProject#resource_access_role}
    */
    readonly resourceAccessRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#service_role CodebuildProject#service_role}
    */
    readonly serviceRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#source_version CodebuildProject#source_version}
    */
    readonly sourceVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#tags CodebuildProject#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#tags_all CodebuildProject#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * artifacts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#artifacts CodebuildProject#artifacts}
    */
    readonly artifacts: CodebuildProjectArtifacts;
    /**
    * build_batch_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#build_batch_config CodebuildProject#build_batch_config}
    */
    readonly buildBatchConfig?: CodebuildProjectBuildBatchConfig;
    /**
    * cache block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#cache CodebuildProject#cache}
    */
    readonly cache?: CodebuildProjectCache;
    /**
    * environment block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#environment CodebuildProject#environment}
    */
    readonly environment: CodebuildProjectEnvironment;
    /**
    * file_system_locations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#file_system_locations CodebuildProject#file_system_locations}
    */
    readonly fileSystemLocations?: CodebuildProjectFileSystemLocations[] | cdktf.IResolvable;
    /**
    * logs_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#logs_config CodebuildProject#logs_config}
    */
    readonly logsConfig?: CodebuildProjectLogsConfig;
    /**
    * secondary_artifacts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#secondary_artifacts CodebuildProject#secondary_artifacts}
    */
    readonly secondaryArtifacts?: CodebuildProjectSecondaryArtifacts[] | cdktf.IResolvable;
    /**
    * secondary_source_version block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#secondary_source_version CodebuildProject#secondary_source_version}
    */
    readonly secondarySourceVersion?: CodebuildProjectSecondarySourceVersion[] | cdktf.IResolvable;
    /**
    * secondary_sources block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#secondary_sources CodebuildProject#secondary_sources}
    */
    readonly secondarySources?: CodebuildProjectSecondarySources[] | cdktf.IResolvable;
    /**
    * source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#source CodebuildProject#source}
    */
    readonly source: CodebuildProjectSource;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#vpc_config CodebuildProject#vpc_config}
    */
    readonly vpcConfig?: CodebuildProjectVpcConfig;
}
export interface CodebuildProjectArtifacts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}
    */
    readonly artifactIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}
    */
    readonly bucketOwnerAccess?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}
    */
    readonly encryptionDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#name CodebuildProject#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#namespace_type CodebuildProject#namespace_type}
    */
    readonly namespaceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}
    */
    readonly overrideArtifactName?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#packaging CodebuildProject#packaging}
    */
    readonly packaging?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#path CodebuildProject#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#type CodebuildProject#type}
    */
    readonly type: string;
}
export declare function codebuildProjectArtifactsToTerraform(struct?: CodebuildProjectArtifactsOutputReference | CodebuildProjectArtifacts): any;
export declare function codebuildProjectArtifactsToHclTerraform(struct?: CodebuildProjectArtifactsOutputReference | CodebuildProjectArtifacts): any;
export declare class CodebuildProjectArtifactsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildProjectArtifacts | undefined;
    set internalValue(value: CodebuildProjectArtifacts | undefined);
    private _artifactIdentifier?;
    get artifactIdentifier(): string;
    set artifactIdentifier(value: string);
    resetArtifactIdentifier(): void;
    get artifactIdentifierInput(): string | undefined;
    private _bucketOwnerAccess?;
    get bucketOwnerAccess(): string;
    set bucketOwnerAccess(value: string);
    resetBucketOwnerAccess(): void;
    get bucketOwnerAccessInput(): string | undefined;
    private _encryptionDisabled?;
    get encryptionDisabled(): boolean | cdktf.IResolvable;
    set encryptionDisabled(value: boolean | cdktf.IResolvable);
    resetEncryptionDisabled(): void;
    get encryptionDisabledInput(): boolean | cdktf.IResolvable | undefined;
    private _location?;
    get location(): string;
    set location(value: string);
    resetLocation(): void;
    get locationInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namespaceType?;
    get namespaceType(): string;
    set namespaceType(value: string);
    resetNamespaceType(): void;
    get namespaceTypeInput(): string | undefined;
    private _overrideArtifactName?;
    get overrideArtifactName(): boolean | cdktf.IResolvable;
    set overrideArtifactName(value: boolean | cdktf.IResolvable);
    resetOverrideArtifactName(): void;
    get overrideArtifactNameInput(): boolean | cdktf.IResolvable | undefined;
    private _packaging?;
    get packaging(): string;
    set packaging(value: string);
    resetPackaging(): void;
    get packagingInput(): string | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface CodebuildProjectBuildBatchConfigRestrictions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#compute_types_allowed CodebuildProject#compute_types_allowed}
    */
    readonly computeTypesAllowed?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#maximum_builds_allowed CodebuildProject#maximum_builds_allowed}
    */
    readonly maximumBuildsAllowed?: number;
}
export declare function codebuildProjectBuildBatchConfigRestrictionsToTerraform(struct?: CodebuildProjectBuildBatchConfigRestrictionsOutputReference | CodebuildProjectBuildBatchConfigRestrictions): any;
export declare function codebuildProjectBuildBatchConfigRestrictionsToHclTerraform(struct?: CodebuildProjectBuildBatchConfigRestrictionsOutputReference | CodebuildProjectBuildBatchConfigRestrictions): any;
export declare class CodebuildProjectBuildBatchConfigRestrictionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildProjectBuildBatchConfigRestrictions | undefined;
    set internalValue(value: CodebuildProjectBuildBatchConfigRestrictions | undefined);
    private _computeTypesAllowed?;
    get computeTypesAllowed(): string[];
    set computeTypesAllowed(value: string[]);
    resetComputeTypesAllowed(): void;
    get computeTypesAllowedInput(): string[] | undefined;
    private _maximumBuildsAllowed?;
    get maximumBuildsAllowed(): number;
    set maximumBuildsAllowed(value: number);
    resetMaximumBuildsAllowed(): void;
    get maximumBuildsAllowedInput(): number | undefined;
}
export interface CodebuildProjectBuildBatchConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#combine_artifacts CodebuildProject#combine_artifacts}
    */
    readonly combineArtifacts?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#service_role CodebuildProject#service_role}
    */
    readonly serviceRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#timeout_in_mins CodebuildProject#timeout_in_mins}
    */
    readonly timeoutInMins?: number;
    /**
    * restrictions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#restrictions CodebuildProject#restrictions}
    */
    readonly restrictions?: CodebuildProjectBuildBatchConfigRestrictions;
}
export declare function codebuildProjectBuildBatchConfigToTerraform(struct?: CodebuildProjectBuildBatchConfigOutputReference | CodebuildProjectBuildBatchConfig): any;
export declare function codebuildProjectBuildBatchConfigToHclTerraform(struct?: CodebuildProjectBuildBatchConfigOutputReference | CodebuildProjectBuildBatchConfig): any;
export declare class CodebuildProjectBuildBatchConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildProjectBuildBatchConfig | undefined;
    set internalValue(value: CodebuildProjectBuildBatchConfig | undefined);
    private _combineArtifacts?;
    get combineArtifacts(): boolean | cdktf.IResolvable;
    set combineArtifacts(value: boolean | cdktf.IResolvable);
    resetCombineArtifacts(): void;
    get combineArtifactsInput(): boolean | cdktf.IResolvable | undefined;
    private _serviceRole?;
    get serviceRole(): string;
    set serviceRole(value: string);
    get serviceRoleInput(): string | undefined;
    private _timeoutInMins?;
    get timeoutInMins(): number;
    set timeoutInMins(value: number);
    resetTimeoutInMins(): void;
    get timeoutInMinsInput(): number | undefined;
    private _restrictions;
    get restrictions(): CodebuildProjectBuildBatchConfigRestrictionsOutputReference;
    putRestrictions(value: CodebuildProjectBuildBatchConfigRestrictions): void;
    resetRestrictions(): void;
    get restrictionsInput(): CodebuildProjectBuildBatchConfigRestrictions | undefined;
}
export interface CodebuildProjectCache {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#modes CodebuildProject#modes}
    */
    readonly modes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#type CodebuildProject#type}
    */
    readonly type?: string;
}
export declare function codebuildProjectCacheToTerraform(struct?: CodebuildProjectCacheOutputReference | CodebuildProjectCache): any;
export declare function codebuildProjectCacheToHclTerraform(struct?: CodebuildProjectCacheOutputReference | CodebuildProjectCache): any;
export declare class CodebuildProjectCacheOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildProjectCache | undefined;
    set internalValue(value: CodebuildProjectCache | undefined);
    private _location?;
    get location(): string;
    set location(value: string);
    resetLocation(): void;
    get locationInput(): string | undefined;
    private _modes?;
    get modes(): string[];
    set modes(value: string[]);
    resetModes(): void;
    get modesInput(): string[] | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export interface CodebuildProjectEnvironmentEnvironmentVariable {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#name CodebuildProject#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#type CodebuildProject#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#value CodebuildProject#value}
    */
    readonly value: string;
}
export declare function codebuildProjectEnvironmentEnvironmentVariableToTerraform(struct?: CodebuildProjectEnvironmentEnvironmentVariable | cdktf.IResolvable): any;
export declare function codebuildProjectEnvironmentEnvironmentVariableToHclTerraform(struct?: CodebuildProjectEnvironmentEnvironmentVariable | cdktf.IResolvable): any;
export declare class CodebuildProjectEnvironmentEnvironmentVariableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodebuildProjectEnvironmentEnvironmentVariable | cdktf.IResolvable | undefined;
    set internalValue(value: CodebuildProjectEnvironmentEnvironmentVariable | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class CodebuildProjectEnvironmentEnvironmentVariableList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodebuildProjectEnvironmentEnvironmentVariable[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodebuildProjectEnvironmentEnvironmentVariableOutputReference;
}
export interface CodebuildProjectEnvironmentFleet {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#fleet_arn CodebuildProject#fleet_arn}
    */
    readonly fleetArn?: string;
}
export declare function codebuildProjectEnvironmentFleetToTerraform(struct?: CodebuildProjectEnvironmentFleetOutputReference | CodebuildProjectEnvironmentFleet): any;
export declare function codebuildProjectEnvironmentFleetToHclTerraform(struct?: CodebuildProjectEnvironmentFleetOutputReference | CodebuildProjectEnvironmentFleet): any;
export declare class CodebuildProjectEnvironmentFleetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildProjectEnvironmentFleet | undefined;
    set internalValue(value: CodebuildProjectEnvironmentFleet | undefined);
    private _fleetArn?;
    get fleetArn(): string;
    set fleetArn(value: string);
    resetFleetArn(): void;
    get fleetArnInput(): string | undefined;
}
export interface CodebuildProjectEnvironmentRegistryCredential {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#credential CodebuildProject#credential}
    */
    readonly credential: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#credential_provider CodebuildProject#credential_provider}
    */
    readonly credentialProvider: string;
}
export declare function codebuildProjectEnvironmentRegistryCredentialToTerraform(struct?: CodebuildProjectEnvironmentRegistryCredentialOutputReference | CodebuildProjectEnvironmentRegistryCredential): any;
export declare function codebuildProjectEnvironmentRegistryCredentialToHclTerraform(struct?: CodebuildProjectEnvironmentRegistryCredentialOutputReference | CodebuildProjectEnvironmentRegistryCredential): any;
export declare class CodebuildProjectEnvironmentRegistryCredentialOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildProjectEnvironmentRegistryCredential | undefined;
    set internalValue(value: CodebuildProjectEnvironmentRegistryCredential | undefined);
    private _credential?;
    get credential(): string;
    set credential(value: string);
    get credentialInput(): string | undefined;
    private _credentialProvider?;
    get credentialProvider(): string;
    set credentialProvider(value: string);
    get credentialProviderInput(): string | undefined;
}
export interface CodebuildProjectEnvironment {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#certificate CodebuildProject#certificate}
    */
    readonly certificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#compute_type CodebuildProject#compute_type}
    */
    readonly computeType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#image CodebuildProject#image}
    */
    readonly image: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#image_pull_credentials_type CodebuildProject#image_pull_credentials_type}
    */
    readonly imagePullCredentialsType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#privileged_mode CodebuildProject#privileged_mode}
    */
    readonly privilegedMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#type CodebuildProject#type}
    */
    readonly type: string;
    /**
    * environment_variable block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#environment_variable CodebuildProject#environment_variable}
    */
    readonly environmentVariable?: CodebuildProjectEnvironmentEnvironmentVariable[] | cdktf.IResolvable;
    /**
    * fleet block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#fleet CodebuildProject#fleet}
    */
    readonly fleet?: CodebuildProjectEnvironmentFleet;
    /**
    * registry_credential block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#registry_credential CodebuildProject#registry_credential}
    */
    readonly registryCredential?: CodebuildProjectEnvironmentRegistryCredential;
}
export declare function codebuildProjectEnvironmentToTerraform(struct?: CodebuildProjectEnvironmentOutputReference | CodebuildProjectEnvironment): any;
export declare function codebuildProjectEnvironmentToHclTerraform(struct?: CodebuildProjectEnvironmentOutputReference | CodebuildProjectEnvironment): any;
export declare class CodebuildProjectEnvironmentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildProjectEnvironment | undefined;
    set internalValue(value: CodebuildProjectEnvironment | undefined);
    private _certificate?;
    get certificate(): string;
    set certificate(value: string);
    resetCertificate(): void;
    get certificateInput(): string | undefined;
    private _computeType?;
    get computeType(): string;
    set computeType(value: string);
    get computeTypeInput(): string | undefined;
    private _image?;
    get image(): string;
    set image(value: string);
    get imageInput(): string | undefined;
    private _imagePullCredentialsType?;
    get imagePullCredentialsType(): string;
    set imagePullCredentialsType(value: string);
    resetImagePullCredentialsType(): void;
    get imagePullCredentialsTypeInput(): string | undefined;
    private _privilegedMode?;
    get privilegedMode(): boolean | cdktf.IResolvable;
    set privilegedMode(value: boolean | cdktf.IResolvable);
    resetPrivilegedMode(): void;
    get privilegedModeInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _environmentVariable;
    get environmentVariable(): CodebuildProjectEnvironmentEnvironmentVariableList;
    putEnvironmentVariable(value: CodebuildProjectEnvironmentEnvironmentVariable[] | cdktf.IResolvable): void;
    resetEnvironmentVariable(): void;
    get environmentVariableInput(): cdktf.IResolvable | CodebuildProjectEnvironmentEnvironmentVariable[] | undefined;
    private _fleet;
    get fleet(): CodebuildProjectEnvironmentFleetOutputReference;
    putFleet(value: CodebuildProjectEnvironmentFleet): void;
    resetFleet(): void;
    get fleetInput(): CodebuildProjectEnvironmentFleet | undefined;
    private _registryCredential;
    get registryCredential(): CodebuildProjectEnvironmentRegistryCredentialOutputReference;
    putRegistryCredential(value: CodebuildProjectEnvironmentRegistryCredential): void;
    resetRegistryCredential(): void;
    get registryCredentialInput(): CodebuildProjectEnvironmentRegistryCredential | undefined;
}
export interface CodebuildProjectFileSystemLocations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#identifier CodebuildProject#identifier}
    */
    readonly identifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#mount_options CodebuildProject#mount_options}
    */
    readonly mountOptions?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#mount_point CodebuildProject#mount_point}
    */
    readonly mountPoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#type CodebuildProject#type}
    */
    readonly type?: string;
}
export declare function codebuildProjectFileSystemLocationsToTerraform(struct?: CodebuildProjectFileSystemLocations | cdktf.IResolvable): any;
export declare function codebuildProjectFileSystemLocationsToHclTerraform(struct?: CodebuildProjectFileSystemLocations | cdktf.IResolvable): any;
export declare class CodebuildProjectFileSystemLocationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodebuildProjectFileSystemLocations | cdktf.IResolvable | undefined;
    set internalValue(value: CodebuildProjectFileSystemLocations | cdktf.IResolvable | undefined);
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    resetIdentifier(): void;
    get identifierInput(): string | undefined;
    private _location?;
    get location(): string;
    set location(value: string);
    resetLocation(): void;
    get locationInput(): string | undefined;
    private _mountOptions?;
    get mountOptions(): string;
    set mountOptions(value: string);
    resetMountOptions(): void;
    get mountOptionsInput(): string | undefined;
    private _mountPoint?;
    get mountPoint(): string;
    set mountPoint(value: string);
    resetMountPoint(): void;
    get mountPointInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class CodebuildProjectFileSystemLocationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodebuildProjectFileSystemLocations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodebuildProjectFileSystemLocationsOutputReference;
}
export interface CodebuildProjectLogsConfigCloudwatchLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#group_name CodebuildProject#group_name}
    */
    readonly groupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#status CodebuildProject#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#stream_name CodebuildProject#stream_name}
    */
    readonly streamName?: string;
}
export declare function codebuildProjectLogsConfigCloudwatchLogsToTerraform(struct?: CodebuildProjectLogsConfigCloudwatchLogsOutputReference | CodebuildProjectLogsConfigCloudwatchLogs): any;
export declare function codebuildProjectLogsConfigCloudwatchLogsToHclTerraform(struct?: CodebuildProjectLogsConfigCloudwatchLogsOutputReference | CodebuildProjectLogsConfigCloudwatchLogs): any;
export declare class CodebuildProjectLogsConfigCloudwatchLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildProjectLogsConfigCloudwatchLogs | undefined;
    set internalValue(value: CodebuildProjectLogsConfigCloudwatchLogs | undefined);
    private _groupName?;
    get groupName(): string;
    set groupName(value: string);
    resetGroupName(): void;
    get groupNameInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _streamName?;
    get streamName(): string;
    set streamName(value: string);
    resetStreamName(): void;
    get streamNameInput(): string | undefined;
}
export interface CodebuildProjectLogsConfigS3Logs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}
    */
    readonly bucketOwnerAccess?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}
    */
    readonly encryptionDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#status CodebuildProject#status}
    */
    readonly status?: string;
}
export declare function codebuildProjectLogsConfigS3LogsToTerraform(struct?: CodebuildProjectLogsConfigS3LogsOutputReference | CodebuildProjectLogsConfigS3Logs): any;
export declare function codebuildProjectLogsConfigS3LogsToHclTerraform(struct?: CodebuildProjectLogsConfigS3LogsOutputReference | CodebuildProjectLogsConfigS3Logs): any;
export declare class CodebuildProjectLogsConfigS3LogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildProjectLogsConfigS3Logs | undefined;
    set internalValue(value: CodebuildProjectLogsConfigS3Logs | undefined);
    private _bucketOwnerAccess?;
    get bucketOwnerAccess(): string;
    set bucketOwnerAccess(value: string);
    resetBucketOwnerAccess(): void;
    get bucketOwnerAccessInput(): string | undefined;
    private _encryptionDisabled?;
    get encryptionDisabled(): boolean | cdktf.IResolvable;
    set encryptionDisabled(value: boolean | cdktf.IResolvable);
    resetEncryptionDisabled(): void;
    get encryptionDisabledInput(): boolean | cdktf.IResolvable | undefined;
    private _location?;
    get location(): string;
    set location(value: string);
    resetLocation(): void;
    get locationInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface CodebuildProjectLogsConfig {
    /**
    * cloudwatch_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#cloudwatch_logs CodebuildProject#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: CodebuildProjectLogsConfigCloudwatchLogs;
    /**
    * s3_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#s3_logs CodebuildProject#s3_logs}
    */
    readonly s3Logs?: CodebuildProjectLogsConfigS3Logs;
}
export declare function codebuildProjectLogsConfigToTerraform(struct?: CodebuildProjectLogsConfigOutputReference | CodebuildProjectLogsConfig): any;
export declare function codebuildProjectLogsConfigToHclTerraform(struct?: CodebuildProjectLogsConfigOutputReference | CodebuildProjectLogsConfig): any;
export declare class CodebuildProjectLogsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildProjectLogsConfig | undefined;
    set internalValue(value: CodebuildProjectLogsConfig | undefined);
    private _cloudwatchLogs;
    get cloudwatchLogs(): CodebuildProjectLogsConfigCloudwatchLogsOutputReference;
    putCloudwatchLogs(value: CodebuildProjectLogsConfigCloudwatchLogs): void;
    resetCloudwatchLogs(): void;
    get cloudwatchLogsInput(): CodebuildProjectLogsConfigCloudwatchLogs | undefined;
    private _s3Logs;
    get s3Logs(): CodebuildProjectLogsConfigS3LogsOutputReference;
    putS3Logs(value: CodebuildProjectLogsConfigS3Logs): void;
    resetS3Logs(): void;
    get s3LogsInput(): CodebuildProjectLogsConfigS3Logs | undefined;
}
export interface CodebuildProjectSecondaryArtifacts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}
    */
    readonly artifactIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}
    */
    readonly bucketOwnerAccess?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}
    */
    readonly encryptionDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#name CodebuildProject#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#namespace_type CodebuildProject#namespace_type}
    */
    readonly namespaceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}
    */
    readonly overrideArtifactName?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#packaging CodebuildProject#packaging}
    */
    readonly packaging?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#path CodebuildProject#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#type CodebuildProject#type}
    */
    readonly type: string;
}
export declare function codebuildProjectSecondaryArtifactsToTerraform(struct?: CodebuildProjectSecondaryArtifacts | cdktf.IResolvable): any;
export declare function codebuildProjectSecondaryArtifactsToHclTerraform(struct?: CodebuildProjectSecondaryArtifacts | cdktf.IResolvable): any;
export declare class CodebuildProjectSecondaryArtifactsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodebuildProjectSecondaryArtifacts | cdktf.IResolvable | undefined;
    set internalValue(value: CodebuildProjectSecondaryArtifacts | cdktf.IResolvable | undefined);
    private _artifactIdentifier?;
    get artifactIdentifier(): string;
    set artifactIdentifier(value: string);
    get artifactIdentifierInput(): string | undefined;
    private _bucketOwnerAccess?;
    get bucketOwnerAccess(): string;
    set bucketOwnerAccess(value: string);
    resetBucketOwnerAccess(): void;
    get bucketOwnerAccessInput(): string | undefined;
    private _encryptionDisabled?;
    get encryptionDisabled(): boolean | cdktf.IResolvable;
    set encryptionDisabled(value: boolean | cdktf.IResolvable);
    resetEncryptionDisabled(): void;
    get encryptionDisabledInput(): boolean | cdktf.IResolvable | undefined;
    private _location?;
    get location(): string;
    set location(value: string);
    resetLocation(): void;
    get locationInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namespaceType?;
    get namespaceType(): string;
    set namespaceType(value: string);
    resetNamespaceType(): void;
    get namespaceTypeInput(): string | undefined;
    private _overrideArtifactName?;
    get overrideArtifactName(): boolean | cdktf.IResolvable;
    set overrideArtifactName(value: boolean | cdktf.IResolvable);
    resetOverrideArtifactName(): void;
    get overrideArtifactNameInput(): boolean | cdktf.IResolvable | undefined;
    private _packaging?;
    get packaging(): string;
    set packaging(value: string);
    resetPackaging(): void;
    get packagingInput(): string | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class CodebuildProjectSecondaryArtifactsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodebuildProjectSecondaryArtifacts[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodebuildProjectSecondaryArtifactsOutputReference;
}
export interface CodebuildProjectSecondarySourceVersion {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#source_identifier CodebuildProject#source_identifier}
    */
    readonly sourceIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#source_version CodebuildProject#source_version}
    */
    readonly sourceVersion: string;
}
export declare function codebuildProjectSecondarySourceVersionToTerraform(struct?: CodebuildProjectSecondarySourceVersion | cdktf.IResolvable): any;
export declare function codebuildProjectSecondarySourceVersionToHclTerraform(struct?: CodebuildProjectSecondarySourceVersion | cdktf.IResolvable): any;
export declare class CodebuildProjectSecondarySourceVersionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodebuildProjectSecondarySourceVersion | cdktf.IResolvable | undefined;
    set internalValue(value: CodebuildProjectSecondarySourceVersion | cdktf.IResolvable | undefined);
    private _sourceIdentifier?;
    get sourceIdentifier(): string;
    set sourceIdentifier(value: string);
    get sourceIdentifierInput(): string | undefined;
    private _sourceVersion?;
    get sourceVersion(): string;
    set sourceVersion(value: string);
    get sourceVersionInput(): string | undefined;
}
export declare class CodebuildProjectSecondarySourceVersionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodebuildProjectSecondarySourceVersion[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodebuildProjectSecondarySourceVersionOutputReference;
}
export interface CodebuildProjectSecondarySourcesBuildStatusConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#context CodebuildProject#context}
    */
    readonly context?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#target_url CodebuildProject#target_url}
    */
    readonly targetUrl?: string;
}
export declare function codebuildProjectSecondarySourcesBuildStatusConfigToTerraform(struct?: CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference | CodebuildProjectSecondarySourcesBuildStatusConfig): any;
export declare function codebuildProjectSecondarySourcesBuildStatusConfigToHclTerraform(struct?: CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference | CodebuildProjectSecondarySourcesBuildStatusConfig): any;
export declare class CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildProjectSecondarySourcesBuildStatusConfig | undefined;
    set internalValue(value: CodebuildProjectSecondarySourcesBuildStatusConfig | undefined);
    private _context?;
    get context(): string;
    set context(value: string);
    resetContext(): void;
    get contextInput(): string | undefined;
    private _targetUrl?;
    get targetUrl(): string;
    set targetUrl(value: string);
    resetTargetUrl(): void;
    get targetUrlInput(): string | undefined;
}
export interface CodebuildProjectSecondarySourcesGitSubmodulesConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}
    */
    readonly fetchSubmodules: boolean | cdktf.IResolvable;
}
export declare function codebuildProjectSecondarySourcesGitSubmodulesConfigToTerraform(struct?: CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference | CodebuildProjectSecondarySourcesGitSubmodulesConfig): any;
export declare function codebuildProjectSecondarySourcesGitSubmodulesConfigToHclTerraform(struct?: CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference | CodebuildProjectSecondarySourcesGitSubmodulesConfig): any;
export declare class CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildProjectSecondarySourcesGitSubmodulesConfig | undefined;
    set internalValue(value: CodebuildProjectSecondarySourcesGitSubmodulesConfig | undefined);
    private _fetchSubmodules?;
    get fetchSubmodules(): boolean | cdktf.IResolvable;
    set fetchSubmodules(value: boolean | cdktf.IResolvable);
    get fetchSubmodulesInput(): boolean | cdktf.IResolvable | undefined;
}
export interface CodebuildProjectSecondarySources {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#buildspec CodebuildProject#buildspec}
    */
    readonly buildspec?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}
    */
    readonly gitCloneDepth?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}
    */
    readonly insecureSsl?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#report_build_status CodebuildProject#report_build_status}
    */
    readonly reportBuildStatus?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#source_identifier CodebuildProject#source_identifier}
    */
    readonly sourceIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#type CodebuildProject#type}
    */
    readonly type: string;
    /**
    * build_status_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#build_status_config CodebuildProject#build_status_config}
    */
    readonly buildStatusConfig?: CodebuildProjectSecondarySourcesBuildStatusConfig;
    /**
    * git_submodules_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#git_submodules_config CodebuildProject#git_submodules_config}
    */
    readonly gitSubmodulesConfig?: CodebuildProjectSecondarySourcesGitSubmodulesConfig;
}
export declare function codebuildProjectSecondarySourcesToTerraform(struct?: CodebuildProjectSecondarySources | cdktf.IResolvable): any;
export declare function codebuildProjectSecondarySourcesToHclTerraform(struct?: CodebuildProjectSecondarySources | cdktf.IResolvable): any;
export declare class CodebuildProjectSecondarySourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodebuildProjectSecondarySources | cdktf.IResolvable | undefined;
    set internalValue(value: CodebuildProjectSecondarySources | cdktf.IResolvable | undefined);
    private _buildspec?;
    get buildspec(): string;
    set buildspec(value: string);
    resetBuildspec(): void;
    get buildspecInput(): string | undefined;
    private _gitCloneDepth?;
    get gitCloneDepth(): number;
    set gitCloneDepth(value: number);
    resetGitCloneDepth(): void;
    get gitCloneDepthInput(): number | undefined;
    private _insecureSsl?;
    get insecureSsl(): boolean | cdktf.IResolvable;
    set insecureSsl(value: boolean | cdktf.IResolvable);
    resetInsecureSsl(): void;
    get insecureSslInput(): boolean | cdktf.IResolvable | undefined;
    private _location?;
    get location(): string;
    set location(value: string);
    resetLocation(): void;
    get locationInput(): string | undefined;
    private _reportBuildStatus?;
    get reportBuildStatus(): boolean | cdktf.IResolvable;
    set reportBuildStatus(value: boolean | cdktf.IResolvable);
    resetReportBuildStatus(): void;
    get reportBuildStatusInput(): boolean | cdktf.IResolvable | undefined;
    private _sourceIdentifier?;
    get sourceIdentifier(): string;
    set sourceIdentifier(value: string);
    get sourceIdentifierInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _buildStatusConfig;
    get buildStatusConfig(): CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference;
    putBuildStatusConfig(value: CodebuildProjectSecondarySourcesBuildStatusConfig): void;
    resetBuildStatusConfig(): void;
    get buildStatusConfigInput(): CodebuildProjectSecondarySourcesBuildStatusConfig | undefined;
    private _gitSubmodulesConfig;
    get gitSubmodulesConfig(): CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference;
    putGitSubmodulesConfig(value: CodebuildProjectSecondarySourcesGitSubmodulesConfig): void;
    resetGitSubmodulesConfig(): void;
    get gitSubmodulesConfigInput(): CodebuildProjectSecondarySourcesGitSubmodulesConfig | undefined;
}
export declare class CodebuildProjectSecondarySourcesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodebuildProjectSecondarySources[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodebuildProjectSecondarySourcesOutputReference;
}
export interface CodebuildProjectSourceBuildStatusConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#context CodebuildProject#context}
    */
    readonly context?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#target_url CodebuildProject#target_url}
    */
    readonly targetUrl?: string;
}
export declare function codebuildProjectSourceBuildStatusConfigToTerraform(struct?: CodebuildProjectSourceBuildStatusConfigOutputReference | CodebuildProjectSourceBuildStatusConfig): any;
export declare function codebuildProjectSourceBuildStatusConfigToHclTerraform(struct?: CodebuildProjectSourceBuildStatusConfigOutputReference | CodebuildProjectSourceBuildStatusConfig): any;
export declare class CodebuildProjectSourceBuildStatusConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildProjectSourceBuildStatusConfig | undefined;
    set internalValue(value: CodebuildProjectSourceBuildStatusConfig | undefined);
    private _context?;
    get context(): string;
    set context(value: string);
    resetContext(): void;
    get contextInput(): string | undefined;
    private _targetUrl?;
    get targetUrl(): string;
    set targetUrl(value: string);
    resetTargetUrl(): void;
    get targetUrlInput(): string | undefined;
}
export interface CodebuildProjectSourceGitSubmodulesConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}
    */
    readonly fetchSubmodules: boolean | cdktf.IResolvable;
}
export declare function codebuildProjectSourceGitSubmodulesConfigToTerraform(struct?: CodebuildProjectSourceGitSubmodulesConfigOutputReference | CodebuildProjectSourceGitSubmodulesConfig): any;
export declare function codebuildProjectSourceGitSubmodulesConfigToHclTerraform(struct?: CodebuildProjectSourceGitSubmodulesConfigOutputReference | CodebuildProjectSourceGitSubmodulesConfig): any;
export declare class CodebuildProjectSourceGitSubmodulesConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildProjectSourceGitSubmodulesConfig | undefined;
    set internalValue(value: CodebuildProjectSourceGitSubmodulesConfig | undefined);
    private _fetchSubmodules?;
    get fetchSubmodules(): boolean | cdktf.IResolvable;
    set fetchSubmodules(value: boolean | cdktf.IResolvable);
    get fetchSubmodulesInput(): boolean | cdktf.IResolvable | undefined;
}
export interface CodebuildProjectSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#buildspec CodebuildProject#buildspec}
    */
    readonly buildspec?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}
    */
    readonly gitCloneDepth?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}
    */
    readonly insecureSsl?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#report_build_status CodebuildProject#report_build_status}
    */
    readonly reportBuildStatus?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#type CodebuildProject#type}
    */
    readonly type: string;
    /**
    * build_status_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#build_status_config CodebuildProject#build_status_config}
    */
    readonly buildStatusConfig?: CodebuildProjectSourceBuildStatusConfig;
    /**
    * git_submodules_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#git_submodules_config CodebuildProject#git_submodules_config}
    */
    readonly gitSubmodulesConfig?: CodebuildProjectSourceGitSubmodulesConfig;
}
export declare function codebuildProjectSourceToTerraform(struct?: CodebuildProjectSourceOutputReference | CodebuildProjectSource): any;
export declare function codebuildProjectSourceToHclTerraform(struct?: CodebuildProjectSourceOutputReference | CodebuildProjectSource): any;
export declare class CodebuildProjectSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildProjectSource | undefined;
    set internalValue(value: CodebuildProjectSource | undefined);
    private _buildspec?;
    get buildspec(): string;
    set buildspec(value: string);
    resetBuildspec(): void;
    get buildspecInput(): string | undefined;
    private _gitCloneDepth?;
    get gitCloneDepth(): number;
    set gitCloneDepth(value: number);
    resetGitCloneDepth(): void;
    get gitCloneDepthInput(): number | undefined;
    private _insecureSsl?;
    get insecureSsl(): boolean | cdktf.IResolvable;
    set insecureSsl(value: boolean | cdktf.IResolvable);
    resetInsecureSsl(): void;
    get insecureSslInput(): boolean | cdktf.IResolvable | undefined;
    private _location?;
    get location(): string;
    set location(value: string);
    resetLocation(): void;
    get locationInput(): string | undefined;
    private _reportBuildStatus?;
    get reportBuildStatus(): boolean | cdktf.IResolvable;
    set reportBuildStatus(value: boolean | cdktf.IResolvable);
    resetReportBuildStatus(): void;
    get reportBuildStatusInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _buildStatusConfig;
    get buildStatusConfig(): CodebuildProjectSourceBuildStatusConfigOutputReference;
    putBuildStatusConfig(value: CodebuildProjectSourceBuildStatusConfig): void;
    resetBuildStatusConfig(): void;
    get buildStatusConfigInput(): CodebuildProjectSourceBuildStatusConfig | undefined;
    private _gitSubmodulesConfig;
    get gitSubmodulesConfig(): CodebuildProjectSourceGitSubmodulesConfigOutputReference;
    putGitSubmodulesConfig(value: CodebuildProjectSourceGitSubmodulesConfig): void;
    resetGitSubmodulesConfig(): void;
    get gitSubmodulesConfigInput(): CodebuildProjectSourceGitSubmodulesConfig | undefined;
}
export interface CodebuildProjectVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#security_group_ids CodebuildProject#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#subnets CodebuildProject#subnets}
    */
    readonly subnets: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#vpc_id CodebuildProject#vpc_id}
    */
    readonly vpcId: string;
}
export declare function codebuildProjectVpcConfigToTerraform(struct?: CodebuildProjectVpcConfigOutputReference | CodebuildProjectVpcConfig): any;
export declare function codebuildProjectVpcConfigToHclTerraform(struct?: CodebuildProjectVpcConfigOutputReference | CodebuildProjectVpcConfig): any;
export declare class CodebuildProjectVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildProjectVpcConfig | undefined;
    set internalValue(value: CodebuildProjectVpcConfig | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[] | undefined;
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    get subnetsInput(): string[] | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project aws_codebuild_project}
*/
export declare class CodebuildProject extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codebuild_project";
    /**
    * Generates CDKTF code for importing a CodebuildProject resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodebuildProject to import
    * @param importFromId The id of the existing CodebuildProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodebuildProject to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_project aws_codebuild_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildProjectConfig
    */
    constructor(scope: Construct, id: string, config: CodebuildProjectConfig);
    get arn(): string;
    private _badgeEnabled?;
    get badgeEnabled(): boolean | cdktf.IResolvable;
    set badgeEnabled(value: boolean | cdktf.IResolvable);
    resetBadgeEnabled(): void;
    get badgeEnabledInput(): boolean | cdktf.IResolvable | undefined;
    get badgeUrl(): string;
    private _buildTimeout?;
    get buildTimeout(): number;
    set buildTimeout(value: number);
    resetBuildTimeout(): void;
    get buildTimeoutInput(): number | undefined;
    private _concurrentBuildLimit?;
    get concurrentBuildLimit(): number;
    set concurrentBuildLimit(value: number);
    resetConcurrentBuildLimit(): void;
    get concurrentBuildLimitInput(): number | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _encryptionKey?;
    get encryptionKey(): string;
    set encryptionKey(value: string);
    resetEncryptionKey(): void;
    get encryptionKeyInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _projectVisibility?;
    get projectVisibility(): string;
    set projectVisibility(value: string);
    resetProjectVisibility(): void;
    get projectVisibilityInput(): string | undefined;
    get publicProjectAlias(): string;
    private _queuedTimeout?;
    get queuedTimeout(): number;
    set queuedTimeout(value: number);
    resetQueuedTimeout(): void;
    get queuedTimeoutInput(): number | undefined;
    private _resourceAccessRole?;
    get resourceAccessRole(): string;
    set resourceAccessRole(value: string);
    resetResourceAccessRole(): void;
    get resourceAccessRoleInput(): string | undefined;
    private _serviceRole?;
    get serviceRole(): string;
    set serviceRole(value: string);
    get serviceRoleInput(): string | undefined;
    private _sourceVersion?;
    get sourceVersion(): string;
    set sourceVersion(value: string);
    resetSourceVersion(): void;
    get sourceVersionInput(): string | undefined;
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
    private _artifacts;
    get artifacts(): CodebuildProjectArtifactsOutputReference;
    putArtifacts(value: CodebuildProjectArtifacts): void;
    get artifactsInput(): CodebuildProjectArtifacts | undefined;
    private _buildBatchConfig;
    get buildBatchConfig(): CodebuildProjectBuildBatchConfigOutputReference;
    putBuildBatchConfig(value: CodebuildProjectBuildBatchConfig): void;
    resetBuildBatchConfig(): void;
    get buildBatchConfigInput(): CodebuildProjectBuildBatchConfig | undefined;
    private _cache;
    get cache(): CodebuildProjectCacheOutputReference;
    putCache(value: CodebuildProjectCache): void;
    resetCache(): void;
    get cacheInput(): CodebuildProjectCache | undefined;
    private _environment;
    get environment(): CodebuildProjectEnvironmentOutputReference;
    putEnvironment(value: CodebuildProjectEnvironment): void;
    get environmentInput(): CodebuildProjectEnvironment | undefined;
    private _fileSystemLocations;
    get fileSystemLocations(): CodebuildProjectFileSystemLocationsList;
    putFileSystemLocations(value: CodebuildProjectFileSystemLocations[] | cdktf.IResolvable): void;
    resetFileSystemLocations(): void;
    get fileSystemLocationsInput(): cdktf.IResolvable | CodebuildProjectFileSystemLocations[] | undefined;
    private _logsConfig;
    get logsConfig(): CodebuildProjectLogsConfigOutputReference;
    putLogsConfig(value: CodebuildProjectLogsConfig): void;
    resetLogsConfig(): void;
    get logsConfigInput(): CodebuildProjectLogsConfig | undefined;
    private _secondaryArtifacts;
    get secondaryArtifacts(): CodebuildProjectSecondaryArtifactsList;
    putSecondaryArtifacts(value: CodebuildProjectSecondaryArtifacts[] | cdktf.IResolvable): void;
    resetSecondaryArtifacts(): void;
    get secondaryArtifactsInput(): cdktf.IResolvable | CodebuildProjectSecondaryArtifacts[] | undefined;
    private _secondarySourceVersion;
    get secondarySourceVersion(): CodebuildProjectSecondarySourceVersionList;
    putSecondarySourceVersion(value: CodebuildProjectSecondarySourceVersion[] | cdktf.IResolvable): void;
    resetSecondarySourceVersion(): void;
    get secondarySourceVersionInput(): cdktf.IResolvable | CodebuildProjectSecondarySourceVersion[] | undefined;
    private _secondarySources;
    get secondarySources(): CodebuildProjectSecondarySourcesList;
    putSecondarySources(value: CodebuildProjectSecondarySources[] | cdktf.IResolvable): void;
    resetSecondarySources(): void;
    get secondarySourcesInput(): cdktf.IResolvable | CodebuildProjectSecondarySources[] | undefined;
    private _source;
    get source(): CodebuildProjectSourceOutputReference;
    putSource(value: CodebuildProjectSource): void;
    get sourceInput(): CodebuildProjectSource | undefined;
    private _vpcConfig;
    get vpcConfig(): CodebuildProjectVpcConfigOutputReference;
    putVpcConfig(value: CodebuildProjectVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): CodebuildProjectVpcConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
