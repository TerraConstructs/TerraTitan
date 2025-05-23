/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AmplifyBranchConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#app_id AmplifyBranch#app_id}
    */
    readonly appId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#backend_environment_arn AmplifyBranch#backend_environment_arn}
    */
    readonly backendEnvironmentArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#basic_auth_credentials AmplifyBranch#basic_auth_credentials}
    */
    readonly basicAuthCredentials?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#branch_name AmplifyBranch#branch_name}
    */
    readonly branchName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#description AmplifyBranch#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#display_name AmplifyBranch#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}
    */
    readonly enableAutoBuild?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}
    */
    readonly enableBasicAuth?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#enable_notification AmplifyBranch#enable_notification}
    */
    readonly enableNotification?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}
    */
    readonly enablePerformanceMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}
    */
    readonly enablePullRequestPreview?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#environment_variables AmplifyBranch#environment_variables}
    */
    readonly environmentVariables?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#framework AmplifyBranch#framework}
    */
    readonly framework?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#id AmplifyBranch#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}
    */
    readonly pullRequestEnvironmentName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#stage AmplifyBranch#stage}
    */
    readonly stage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#tags AmplifyBranch#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#tags_all AmplifyBranch#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#ttl AmplifyBranch#ttl}
    */
    readonly ttl?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch aws_amplify_branch}
*/
export declare class AmplifyBranch extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_amplify_branch";
    /**
    * Generates CDKTF code for importing a AmplifyBranch resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AmplifyBranch to import
    * @param importFromId The id of the existing AmplifyBranch that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AmplifyBranch to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_branch aws_amplify_branch} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyBranchConfig
    */
    constructor(scope: Construct, id: string, config: AmplifyBranchConfig);
    private _appId?;
    get appId(): string;
    set appId(value: string);
    get appIdInput(): string | undefined;
    get arn(): string;
    get associatedResources(): string[];
    private _backendEnvironmentArn?;
    get backendEnvironmentArn(): string;
    set backendEnvironmentArn(value: string);
    resetBackendEnvironmentArn(): void;
    get backendEnvironmentArnInput(): string | undefined;
    private _basicAuthCredentials?;
    get basicAuthCredentials(): string;
    set basicAuthCredentials(value: string);
    resetBasicAuthCredentials(): void;
    get basicAuthCredentialsInput(): string | undefined;
    private _branchName?;
    get branchName(): string;
    set branchName(value: string);
    get branchNameInput(): string | undefined;
    get customDomains(): string[];
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get destinationBranch(): string;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string | undefined;
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
    private _enableNotification?;
    get enableNotification(): boolean | cdktf.IResolvable;
    set enableNotification(value: boolean | cdktf.IResolvable);
    resetEnableNotification(): void;
    get enableNotificationInput(): boolean | cdktf.IResolvable | undefined;
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
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _pullRequestEnvironmentName?;
    get pullRequestEnvironmentName(): string;
    set pullRequestEnvironmentName(value: string);
    resetPullRequestEnvironmentName(): void;
    get pullRequestEnvironmentNameInput(): string | undefined;
    get sourceBranch(): string;
    private _stage?;
    get stage(): string;
    set stage(value: string);
    resetStage(): void;
    get stageInput(): string | undefined;
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
    private _ttl?;
    get ttl(): string;
    set ttl(value: string);
    resetTtl(): void;
    get ttlInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
