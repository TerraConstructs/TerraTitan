/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AmplifyAppConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#access_token AmplifyApp#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}
    */
    readonly autoBranchCreationPatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#basic_auth_credentials AmplifyApp#basic_auth_credentials}
    */
    readonly basicAuthCredentials?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}
    */
    readonly buildSpec?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#custom_headers AmplifyApp#custom_headers}
    */
    readonly customHeaders?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#description AmplifyApp#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}
    */
    readonly enableAutoBranchCreation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}
    */
    readonly enableBasicAuth?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#enable_branch_auto_build AmplifyApp#enable_branch_auto_build}
    */
    readonly enableBranchAutoBuild?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}
    */
    readonly enableBranchAutoDeletion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}
    */
    readonly environmentVariables?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#iam_service_role_arn AmplifyApp#iam_service_role_arn}
    */
    readonly iamServiceRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#id AmplifyApp#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#name AmplifyApp#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#oauth_token AmplifyApp#oauth_token}
    */
    readonly oauthToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#platform AmplifyApp#platform}
    */
    readonly platform?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#repository AmplifyApp#repository}
    */
    readonly repository?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#tags AmplifyApp#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#tags_all AmplifyApp#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * auto_branch_creation_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}
    */
    readonly autoBranchCreationConfig?: AmplifyAppAutoBranchCreationConfig;
    /**
    * cache_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#cache_config AmplifyApp#cache_config}
    */
    readonly cacheConfig?: AmplifyAppCacheConfig;
    /**
    * custom_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#custom_rule AmplifyApp#custom_rule}
    */
    readonly customRule?: AmplifyAppCustomRule[] | cdktf.IResolvable;
}
export interface AmplifyAppProductionBranch {
}
export declare function amplifyAppProductionBranchToTerraform(struct?: AmplifyAppProductionBranch): any;
export declare function amplifyAppProductionBranchToHclTerraform(struct?: AmplifyAppProductionBranch): any;
export declare class AmplifyAppProductionBranchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AmplifyAppProductionBranch | undefined;
    set internalValue(value: AmplifyAppProductionBranch | undefined);
    get branchName(): string;
    get lastDeployTime(): string;
    get status(): string;
    get thumbnailUrl(): string;
}
export declare class AmplifyAppProductionBranchList extends cdktf.ComplexList {
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
    get(index: number): AmplifyAppProductionBranchOutputReference;
}
export interface AmplifyAppAutoBranchCreationConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#basic_auth_credentials AmplifyApp#basic_auth_credentials}
    */
    readonly basicAuthCredentials?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}
    */
    readonly buildSpec?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#enable_auto_build AmplifyApp#enable_auto_build}
    */
    readonly enableAutoBuild?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}
    */
    readonly enableBasicAuth?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#enable_performance_mode AmplifyApp#enable_performance_mode}
    */
    readonly enablePerformanceMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}
    */
    readonly enablePullRequestPreview?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}
    */
    readonly environmentVariables?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#framework AmplifyApp#framework}
    */
    readonly framework?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#pull_request_environment_name AmplifyApp#pull_request_environment_name}
    */
    readonly pullRequestEnvironmentName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#stage AmplifyApp#stage}
    */
    readonly stage?: string;
}
export declare function amplifyAppAutoBranchCreationConfigToTerraform(struct?: AmplifyAppAutoBranchCreationConfigOutputReference | AmplifyAppAutoBranchCreationConfig): any;
export declare function amplifyAppAutoBranchCreationConfigToHclTerraform(struct?: AmplifyAppAutoBranchCreationConfigOutputReference | AmplifyAppAutoBranchCreationConfig): any;
export declare class AmplifyAppAutoBranchCreationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AmplifyAppAutoBranchCreationConfig | undefined;
    set internalValue(value: AmplifyAppAutoBranchCreationConfig | undefined);
    private _basicAuthCredentials?;
    get basicAuthCredentials(): string;
    set basicAuthCredentials(value: string);
    resetBasicAuthCredentials(): void;
    get basicAuthCredentialsInput(): string | undefined;
    private _buildSpec?;
    get buildSpec(): string;
    set buildSpec(value: string);
    resetBuildSpec(): void;
    get buildSpecInput(): string | undefined;
    private _enableAutoBuild?;
    get enableAutoBuild(): boolean | cdktf.IResolvable;
    set enableAutoBuild(value: boolean | cdktf.IResolvable);
    resetEnableAutoBuild(): void;
    get enableAutoBuildInput(): boolean | cdktf.IResolvable | undefined;
    private _enableBasicAuth?;
    get enableBasicAuth(): boolean | cdktf.IResolvable;
    set enableBasicAuth(value: boolean | cdktf.IResolvable);
    resetEnableBasicAuth(): void;
    get enableBasicAuthInput(): boolean | cdktf.IResolvable | undefined;
    private _enablePerformanceMode?;
    get enablePerformanceMode(): boolean | cdktf.IResolvable;
    set enablePerformanceMode(value: boolean | cdktf.IResolvable);
    resetEnablePerformanceMode(): void;
    get enablePerformanceModeInput(): boolean | cdktf.IResolvable | undefined;
    private _enablePullRequestPreview?;
    get enablePullRequestPreview(): boolean | cdktf.IResolvable;
    set enablePullRequestPreview(value: boolean | cdktf.IResolvable);
    resetEnablePullRequestPreview(): void;
    get enablePullRequestPreviewInput(): boolean | cdktf.IResolvable | undefined;
    private _environmentVariables?;
    get environmentVariables(): {
        [key: string]: string;
    };
    set environmentVariables(value: {
        [key: string]: string;
    });
    resetEnvironmentVariables(): void;
    get environmentVariablesInput(): {
        [key: string]: string;
    } | undefined;
    private _framework?;
    get framework(): string;
    set framework(value: string);
    resetFramework(): void;
    get frameworkInput(): string | undefined;
    private _pullRequestEnvironmentName?;
    get pullRequestEnvironmentName(): string;
    set pullRequestEnvironmentName(value: string);
    resetPullRequestEnvironmentName(): void;
    get pullRequestEnvironmentNameInput(): string | undefined;
    private _stage?;
    get stage(): string;
    set stage(value: string);
    resetStage(): void;
    get stageInput(): string | undefined;
}
export interface AmplifyAppCacheConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#type AmplifyApp#type}
    */
    readonly type: string;
}
export declare function amplifyAppCacheConfigToTerraform(struct?: AmplifyAppCacheConfigOutputReference | AmplifyAppCacheConfig): any;
export declare function amplifyAppCacheConfigToHclTerraform(struct?: AmplifyAppCacheConfigOutputReference | AmplifyAppCacheConfig): any;
export declare class AmplifyAppCacheConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AmplifyAppCacheConfig | undefined;
    set internalValue(value: AmplifyAppCacheConfig | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface AmplifyAppCustomRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#condition AmplifyApp#condition}
    */
    readonly condition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#source AmplifyApp#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#status AmplifyApp#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#target AmplifyApp#target}
    */
    readonly target: string;
}
export declare function amplifyAppCustomRuleToTerraform(struct?: AmplifyAppCustomRule | cdktf.IResolvable): any;
export declare function amplifyAppCustomRuleToHclTerraform(struct?: AmplifyAppCustomRule | cdktf.IResolvable): any;
export declare class AmplifyAppCustomRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AmplifyAppCustomRule | cdktf.IResolvable | undefined;
    set internalValue(value: AmplifyAppCustomRule | cdktf.IResolvable | undefined);
    private _condition?;
    get condition(): string;
    set condition(value: string);
    resetCondition(): void;
    get conditionInput(): string | undefined;
    private _source?;
    get source(): string;
    set source(value: string);
    get sourceInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _target?;
    get target(): string;
    set target(value: string);
    get targetInput(): string | undefined;
}
export declare class AmplifyAppCustomRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AmplifyAppCustomRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AmplifyAppCustomRuleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app aws_amplify_app}
*/
export declare class AmplifyApp extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_amplify_app";
    /**
    * Generates CDKTF code for importing a AmplifyApp resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AmplifyApp to import
    * @param importFromId The id of the existing AmplifyApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AmplifyApp to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_app aws_amplify_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyAppConfig
    */
    constructor(scope: Construct, id: string, config: AmplifyAppConfig);
    private _accessToken?;
    get accessToken(): string;
    set accessToken(value: string);
    resetAccessToken(): void;
    get accessTokenInput(): string | undefined;
    get arn(): string;
    private _autoBranchCreationPatterns?;
    get autoBranchCreationPatterns(): string[];
    set autoBranchCreationPatterns(value: string[]);
    resetAutoBranchCreationPatterns(): void;
    get autoBranchCreationPatternsInput(): string[] | undefined;
    private _basicAuthCredentials?;
    get basicAuthCredentials(): string;
    set basicAuthCredentials(value: string);
    resetBasicAuthCredentials(): void;
    get basicAuthCredentialsInput(): string | undefined;
    private _buildSpec?;
    get buildSpec(): string;
    set buildSpec(value: string);
    resetBuildSpec(): void;
    get buildSpecInput(): string | undefined;
    private _customHeaders?;
    get customHeaders(): string;
    set customHeaders(value: string);
    resetCustomHeaders(): void;
    get customHeadersInput(): string | undefined;
    get defaultDomain(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _enableAutoBranchCreation?;
    get enableAutoBranchCreation(): boolean | cdktf.IResolvable;
    set enableAutoBranchCreation(value: boolean | cdktf.IResolvable);
    resetEnableAutoBranchCreation(): void;
    get enableAutoBranchCreationInput(): boolean | cdktf.IResolvable | undefined;
    private _enableBasicAuth?;
    get enableBasicAuth(): boolean | cdktf.IResolvable;
    set enableBasicAuth(value: boolean | cdktf.IResolvable);
    resetEnableBasicAuth(): void;
    get enableBasicAuthInput(): boolean | cdktf.IResolvable | undefined;
    private _enableBranchAutoBuild?;
    get enableBranchAutoBuild(): boolean | cdktf.IResolvable;
    set enableBranchAutoBuild(value: boolean | cdktf.IResolvable);
    resetEnableBranchAutoBuild(): void;
    get enableBranchAutoBuildInput(): boolean | cdktf.IResolvable | undefined;
    private _enableBranchAutoDeletion?;
    get enableBranchAutoDeletion(): boolean | cdktf.IResolvable;
    set enableBranchAutoDeletion(value: boolean | cdktf.IResolvable);
    resetEnableBranchAutoDeletion(): void;
    get enableBranchAutoDeletionInput(): boolean | cdktf.IResolvable | undefined;
    private _environmentVariables?;
    get environmentVariables(): {
        [key: string]: string;
    };
    set environmentVariables(value: {
        [key: string]: string;
    });
    resetEnvironmentVariables(): void;
    get environmentVariablesInput(): {
        [key: string]: string;
    } | undefined;
    private _iamServiceRoleArn?;
    get iamServiceRoleArn(): string;
    set iamServiceRoleArn(value: string);
    resetIamServiceRoleArn(): void;
    get iamServiceRoleArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _oauthToken?;
    get oauthToken(): string;
    set oauthToken(value: string);
    resetOauthToken(): void;
    get oauthTokenInput(): string | undefined;
    private _platform?;
    get platform(): string;
    set platform(value: string);
    resetPlatform(): void;
    get platformInput(): string | undefined;
    private _productionBranch;
    get productionBranch(): AmplifyAppProductionBranchList;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    resetRepository(): void;
    get repositoryInput(): string | undefined;
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
    private _autoBranchCreationConfig;
    get autoBranchCreationConfig(): AmplifyAppAutoBranchCreationConfigOutputReference;
    putAutoBranchCreationConfig(value: AmplifyAppAutoBranchCreationConfig): void;
    resetAutoBranchCreationConfig(): void;
    get autoBranchCreationConfigInput(): AmplifyAppAutoBranchCreationConfig | undefined;
    private _cacheConfig;
    get cacheConfig(): AmplifyAppCacheConfigOutputReference;
    putCacheConfig(value: AmplifyAppCacheConfig): void;
    resetCacheConfig(): void;
    get cacheConfigInput(): AmplifyAppCacheConfig | undefined;
    private _customRule;
    get customRule(): AmplifyAppCustomRuleList;
    putCustomRule(value: AmplifyAppCustomRule[] | cdktf.IResolvable): void;
    resetCustomRule(): void;
    get customRuleInput(): cdktf.IResolvable | AmplifyAppCustomRule[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
