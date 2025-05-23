import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The AWS::Amplify::App resource specifies Apps in Amplify Hosting.
 *
 * An App is a collection of branches.
 *
 * @cloudformationResource AWS::Amplify::App
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html
 */
export declare class CfnApp extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApp from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApp;
    /**
     * Unique Id for the Amplify App.
     *
     * @cloudformationAttribute AppId
     */
    readonly attrAppId: string;
    /**
     * Name for the Amplify App.
     *
     * @cloudformationAttribute AppName
     */
    readonly attrAppName: string;
    /**
     * ARN for the Amplify App.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Default domain for the Amplify App.
     *
     * @cloudformationAttribute DefaultDomain
     */
    readonly attrDefaultDomain: string;
    /**
     * The personal access token for a GitHub repository for an Amplify app.
     */
    accessToken?: string;
    /**
     * Sets the configuration for your automatic branch creation.
     */
    autoBranchCreationConfig?: CfnApp.AutoBranchCreationConfigProperty | cdk.IResolvable;
    /**
     * The credentials for basic authorization for an Amplify app.
     */
    basicAuthConfig?: CfnApp.BasicAuthConfigProperty | cdk.IResolvable;
    /**
     * The build specification (build spec) for an Amplify app.
     */
    buildSpec?: string;
    /**
     * The cache configuration for the Amplify app.
     */
    cacheConfig?: CfnApp.CacheConfigProperty | cdk.IResolvable;
    /**
     * The custom HTTP headers for an Amplify app.
     */
    customHeaders?: string;
    /**
     * The custom rewrite and redirect rules for an Amplify app.
     */
    customRules?: Array<CfnApp.CustomRuleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the Amplify app.
     */
    description?: string;
    /**
     * Automatically disconnect a branch in Amplify Hosting when you delete a branch from your Git repository.
     */
    enableBranchAutoDeletion?: boolean | cdk.IResolvable;
    /**
     * The environment variables for the Amplify app.
     */
    environmentVariables?: Array<CfnApp.EnvironmentVariableProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * AWS Identity and Access Management ( IAM ) service role for the Amazon Resource Name (ARN) of the Amplify app.
     */
    iamServiceRole?: string;
    /**
     * The name of the Amplify app.
     */
    name: string;
    /**
     * The OAuth token for a third-party source control system for an Amplify app.
     */
    oauthToken?: string;
    /**
     * The platform for the Amplify app.
     */
    platform?: string;
    /**
     * The Git repository for the Amplify app.
     */
    repository?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tag for an Amplify app.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAppProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApp {
    /**
     * Use the AutoBranchCreationConfig property type to automatically create branches that match a certain pattern.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-autobranchcreationconfig.html
     */
    interface AutoBranchCreationConfigProperty {
        /**
         * Automated branch creation glob patterns for the Amplify app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-autobranchcreationconfig.html#cfn-amplify-app-autobranchcreationconfig-autobranchcreationpatterns
         */
        readonly autoBranchCreationPatterns?: Array<string>;
        /**
         * Sets password protection for your auto created branch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-autobranchcreationconfig.html#cfn-amplify-app-autobranchcreationconfig-basicauthconfig
         */
        readonly basicAuthConfig?: CfnApp.BasicAuthConfigProperty | cdk.IResolvable;
        /**
         * The build specification (build spec) for the autocreated branch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-autobranchcreationconfig.html#cfn-amplify-app-autobranchcreationconfig-buildspec
         */
        readonly buildSpec?: string;
        /**
         * Enables automated branch creation for the Amplify app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-autobranchcreationconfig.html#cfn-amplify-app-autobranchcreationconfig-enableautobranchcreation
         */
        readonly enableAutoBranchCreation?: boolean | cdk.IResolvable;
        /**
         * Enables auto building for the auto created branch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-autobranchcreationconfig.html#cfn-amplify-app-autobranchcreationconfig-enableautobuild
         */
        readonly enableAutoBuild?: boolean | cdk.IResolvable;
        /**
         * Enables performance mode for the branch.
         *
         * Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-autobranchcreationconfig.html#cfn-amplify-app-autobranchcreationconfig-enableperformancemode
         */
        readonly enablePerformanceMode?: boolean | cdk.IResolvable;
        /**
         * Sets whether pull request previews are enabled for each branch that Amplify Hosting automatically creates for your app.
         *
         * Amplify creates previews by deploying your app to a unique URL whenever a pull request is opened for the branch. Development and QA teams can use this preview to test the pull request before it's merged into a production or integration branch.
         *
         * To provide backend support for your preview, Amplify Hosting automatically provisions a temporary backend environment that it deletes when the pull request is closed. If you want to specify a dedicated backend environment for your previews, use the `PullRequestEnvironmentName` property.
         *
         * For more information, see [Web Previews](https://docs.aws.amazon.com/amplify/latest/userguide/pr-previews.html) in the *AWS Amplify Hosting User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-autobranchcreationconfig.html#cfn-amplify-app-autobranchcreationconfig-enablepullrequestpreview
         */
        readonly enablePullRequestPreview?: boolean | cdk.IResolvable;
        /**
         * The environment variables for the autocreated branch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-autobranchcreationconfig.html#cfn-amplify-app-autobranchcreationconfig-environmentvariables
         */
        readonly environmentVariables?: Array<CfnApp.EnvironmentVariableProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The framework for the autocreated branch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-autobranchcreationconfig.html#cfn-amplify-app-autobranchcreationconfig-framework
         */
        readonly framework?: string;
        /**
         * If pull request previews are enabled, you can use this property to specify a dedicated backend environment for your previews.
         *
         * For example, you could specify an environment named `prod` , `test` , or `dev` that you initialized with the Amplify CLI.
         *
         * To enable pull request previews, set the `EnablePullRequestPreview` property to `true` .
         *
         * If you don't specify an environment, Amplify Hosting provides backend support for each preview by automatically provisioning a temporary backend environment. Amplify deletes this environment when the pull request is closed.
         *
         * For more information about creating backend environments, see [Feature Branch Deployments and Team Workflows](https://docs.aws.amazon.com/amplify/latest/userguide/multi-environments.html) in the *AWS Amplify Hosting User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-autobranchcreationconfig.html#cfn-amplify-app-autobranchcreationconfig-pullrequestenvironmentname
         */
        readonly pullRequestEnvironmentName?: string;
        /**
         * Stage for the auto created branch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-autobranchcreationconfig.html#cfn-amplify-app-autobranchcreationconfig-stage
         */
        readonly stage?: string;
    }
    /**
     * Environment variables are key-value pairs that are available at build time.
     *
     * Set environment variables for all branches in your app.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-environmentvariable.html
     */
    interface EnvironmentVariableProperty {
        /**
         * The environment variable name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-environmentvariable.html#cfn-amplify-app-environmentvariable-name
         */
        readonly name: string;
        /**
         * The environment variable value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-environmentvariable.html#cfn-amplify-app-environmentvariable-value
         */
        readonly value: string;
    }
    /**
     * Use the BasicAuthConfig property type to set password protection at an app level to all your branches.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-basicauthconfig.html
     */
    interface BasicAuthConfigProperty {
        /**
         * Enables basic authorization for the Amplify app's branches.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-basicauthconfig.html#cfn-amplify-app-basicauthconfig-enablebasicauth
         */
        readonly enableBasicAuth?: boolean | cdk.IResolvable;
        /**
         * The password for basic authorization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-basicauthconfig.html#cfn-amplify-app-basicauthconfig-password
         */
        readonly password?: string;
        /**
         * The user name for basic authorization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-basicauthconfig.html#cfn-amplify-app-basicauthconfig-username
         */
        readonly username?: string;
    }
    /**
     * The CustomRule property type allows you to specify redirects, rewrites, and reverse proxies.
     *
     * Redirects enable a web app to reroute navigation from one URL to another.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-customrule.html
     */
    interface CustomRuleProperty {
        /**
         * The condition for a URL rewrite or redirect rule, such as a country code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-customrule.html#cfn-amplify-app-customrule-condition
         */
        readonly condition?: string;
        /**
         * The source pattern for a URL rewrite or redirect rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-customrule.html#cfn-amplify-app-customrule-source
         */
        readonly source: string;
        /**
         * The status code for a URL rewrite or redirect rule.
         *
         * - **200** - Represents a 200 rewrite rule.
         * - **301** - Represents a 301 (moved pemanently) redirect rule. This and all future requests should be directed to the target URL.
         * - **302** - Represents a 302 temporary redirect rule.
         * - **404** - Represents a 404 redirect rule.
         * - **404-200** - Represents a 404 rewrite rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-customrule.html#cfn-amplify-app-customrule-status
         */
        readonly status?: string;
        /**
         * The target pattern for a URL rewrite or redirect rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-customrule.html#cfn-amplify-app-customrule-target
         */
        readonly target: string;
    }
    /**
     * Describes the cache configuration for an Amplify app.
     *
     * For more information about how Amplify applies an optimal cache configuration for your app based on the type of content that is being served, see [Managing cache configuration](https://docs.aws.amazon.com/amplify/latest/userguide/managing-cache-configuration) in the *Amplify User guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-cacheconfig.html
     */
    interface CacheConfigProperty {
        /**
         * The type of cache configuration to use for an Amplify app.
         *
         * The `AMPLIFY_MANAGED` cache configuration automatically applies an optimized cache configuration for your app based on its platform, routing rules, and rewrite rules. This is the default setting.
         *
         * The `AMPLIFY_MANAGED_NO_COOKIES` cache configuration type is the same as `AMPLIFY_MANAGED` , except that it excludes all cookies from the cache key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-cacheconfig.html#cfn-amplify-app-cacheconfig-type
         */
        readonly type?: string;
    }
}
/**
 * Properties for defining a `CfnApp`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html
 */
export interface CfnAppProps {
    /**
     * The personal access token for a GitHub repository for an Amplify app.
     *
     * The personal access token is used to authorize access to a GitHub repository using the Amplify GitHub App. The token is not stored.
     *
     * Use `AccessToken` for GitHub repositories only. To authorize access to a repository provider such as Bitbucket or CodeCommit, use `OauthToken` .
     *
     * You must specify either `AccessToken` or `OauthToken` when you create a new app.
     *
     * Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see [Migrating an existing OAuth app to the Amplify GitHub App](https://docs.aws.amazon.com/amplify/latest/userguide/setting-up-GitHub-access.html#migrating-to-github-app-auth) in the *Amplify User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-accesstoken
     */
    readonly accessToken?: string;
    /**
     * Sets the configuration for your automatic branch creation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-autobranchcreationconfig
     */
    readonly autoBranchCreationConfig?: CfnApp.AutoBranchCreationConfigProperty | cdk.IResolvable;
    /**
     * The credentials for basic authorization for an Amplify app.
     *
     * You must base64-encode the authorization credentials and provide them in the format `user:password` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-basicauthconfig
     */
    readonly basicAuthConfig?: CfnApp.BasicAuthConfigProperty | cdk.IResolvable;
    /**
     * The build specification (build spec) for an Amplify app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-buildspec
     */
    readonly buildSpec?: string;
    /**
     * The cache configuration for the Amplify app.
     *
     * If you don't specify the cache configuration `type` , Amplify uses the default `AMPLIFY_MANAGED` setting.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-cacheconfig
     */
    readonly cacheConfig?: CfnApp.CacheConfigProperty | cdk.IResolvable;
    /**
     * The custom HTTP headers for an Amplify app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-customheaders
     */
    readonly customHeaders?: string;
    /**
     * The custom rewrite and redirect rules for an Amplify app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-customrules
     */
    readonly customRules?: Array<CfnApp.CustomRuleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the Amplify app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-description
     */
    readonly description?: string;
    /**
     * Automatically disconnect a branch in Amplify Hosting when you delete a branch from your Git repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-enablebranchautodeletion
     */
    readonly enableBranchAutoDeletion?: boolean | cdk.IResolvable;
    /**
     * The environment variables for the Amplify app.
     *
     * For a list of the environment variables that are accessible to Amplify by default, see [Amplify Environment variables](https://docs.aws.amazon.com/amplify/latest/userguide/amplify-console-environment-variables.html) in the *Amplify Hosting User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-environmentvariables
     */
    readonly environmentVariables?: Array<CfnApp.EnvironmentVariableProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * AWS Identity and Access Management ( IAM ) service role for the Amazon Resource Name (ARN) of the Amplify app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-iamservicerole
     */
    readonly iamServiceRole?: string;
    /**
     * The name of the Amplify app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-name
     */
    readonly name: string;
    /**
     * The OAuth token for a third-party source control system for an Amplify app.
     *
     * The OAuth token is used to create a webhook and a read-only deploy key using SSH cloning. The OAuth token is not stored.
     *
     * Use `OauthToken` for repository providers other than GitHub, such as Bitbucket or CodeCommit. To authorize access to GitHub as your repository provider, use `AccessToken` .
     *
     * You must specify either `OauthToken` or `AccessToken` when you create a new app.
     *
     * Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see [Migrating an existing OAuth app to the Amplify GitHub App](https://docs.aws.amazon.com/amplify/latest/userguide/setting-up-GitHub-access.html#migrating-to-github-app-auth) in the *Amplify User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-oauthtoken
     */
    readonly oauthToken?: string;
    /**
     * The platform for the Amplify app.
     *
     * For a static app, set the platform type to `WEB` . For a dynamic server-side rendered (SSR) app, set the platform type to `WEB_COMPUTE` . For an app requiring Amplify Hosting's original SSR support only, set the platform type to `WEB_DYNAMIC` .
     *
     * If you are deploying an SSG only app with Next.js version 14 or later, you must set the platform type to `WEB_COMPUTE` and set the artifacts `baseDirectory` to `.next` in the application's build settings. For an example of the build specification settings, see [Amplify build settings for a Next.js 14 SSG application](https://docs.aws.amazon.com/amplify/latest/userguide/deploy-nextjs-app.html#build-setting-detection-ssg-14) in the *Amplify Hosting User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-platform
     */
    readonly platform?: string;
    /**
     * The Git repository for the Amplify app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-repository
     */
    readonly repository?: string;
    /**
     * The tag for an Amplify app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The AWS::Amplify::Branch resource specifies a new branch within an app.
 *
 * @cloudformationResource AWS::Amplify::Branch
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html
 */
export declare class CfnBranch extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBranch from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBranch;
    /**
     * ARN for a branch, part of an Amplify App.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Name for a branch, part of an Amplify App.
     *
     * @cloudformationAttribute BranchName
     */
    readonly attrBranchName: string;
    /**
     * The unique ID for an Amplify app.
     */
    appId: string;
    /**
     * The backend for a `Branch` of an Amplify app. Use for a backend created from an AWS CloudFormation stack.
     */
    backend?: CfnBranch.BackendProperty | cdk.IResolvable;
    /**
     * The basic authorization credentials for a branch of an Amplify app.
     */
    basicAuthConfig?: CfnBranch.BasicAuthConfigProperty | cdk.IResolvable;
    /**
     * The name for the branch.
     */
    branchName: string;
    /**
     * The build specification (build spec) for the branch.
     */
    buildSpec?: string;
    /**
     * The description for the branch that is part of an Amplify app.
     */
    description?: string;
    /**
     * Enables auto building for the branch.
     */
    enableAutoBuild?: boolean | cdk.IResolvable;
    /**
     * Enables performance mode for the branch.
     */
    enablePerformanceMode?: boolean | cdk.IResolvable;
    /**
     * Specifies whether Amplify Hosting creates a preview for each pull request that is made for this branch.
     */
    enablePullRequestPreview?: boolean | cdk.IResolvable;
    /**
     * The environment variables for the branch.
     */
    environmentVariables?: Array<CfnBranch.EnvironmentVariableProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The framework for the branch.
     */
    framework?: string;
    /**
     * If pull request previews are enabled for this branch, you can use this property to specify a dedicated backend environment for your previews.
     */
    pullRequestEnvironmentName?: string;
    /**
     * Describes the current stage for the branch.
     */
    stage?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tag for the branch.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBranchProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnBranch {
    /**
     * The EnvironmentVariable property type sets environment variables for a specific branch.
     *
     * Environment variables are key-value pairs that are available at build time.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-branch-environmentvariable.html
     */
    interface EnvironmentVariableProperty {
        /**
         * The environment variable name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-branch-environmentvariable.html#cfn-amplify-branch-environmentvariable-name
         */
        readonly name: string;
        /**
         * The environment variable value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-branch-environmentvariable.html#cfn-amplify-branch-environmentvariable-value
         */
        readonly value: string;
    }
    /**
     * Use the BasicAuthConfig property type to set password protection for a specific branch.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-branch-basicauthconfig.html
     */
    interface BasicAuthConfigProperty {
        /**
         * Enables basic authorization for the branch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-branch-basicauthconfig.html#cfn-amplify-branch-basicauthconfig-enablebasicauth
         */
        readonly enableBasicAuth?: boolean | cdk.IResolvable;
        /**
         * The password for basic authorization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-branch-basicauthconfig.html#cfn-amplify-branch-basicauthconfig-password
         */
        readonly password: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-branch-basicauthconfig.html#cfn-amplify-branch-basicauthconfig-username
         */
        readonly username: string;
    }
    /**
     * Describes the backend associated with an Amplify `Branch` .
     *
     * This property is available to Amplify Gen 2 apps only. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-branch-backend.html
     */
    interface BackendProperty {
        /**
         * The Amazon Resource Name (ARN) for the AWS CloudFormation stack.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-branch-backend.html#cfn-amplify-branch-backend-stackarn
         */
        readonly stackArn?: string;
    }
}
/**
 * Properties for defining a `CfnBranch`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html
 */
export interface CfnBranchProps {
    /**
     * The unique ID for an Amplify app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html#cfn-amplify-branch-appid
     */
    readonly appId: string;
    /**
     * The backend for a `Branch` of an Amplify app. Use for a backend created from an AWS CloudFormation stack.
     *
     * This field is available to Amplify Gen 2 apps only. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html#cfn-amplify-branch-backend
     */
    readonly backend?: CfnBranch.BackendProperty | cdk.IResolvable;
    /**
     * The basic authorization credentials for a branch of an Amplify app.
     *
     * You must base64-encode the authorization credentials and provide them in the format `user:password` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html#cfn-amplify-branch-basicauthconfig
     */
    readonly basicAuthConfig?: CfnBranch.BasicAuthConfigProperty | cdk.IResolvable;
    /**
     * The name for the branch.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html#cfn-amplify-branch-branchname
     */
    readonly branchName: string;
    /**
     * The build specification (build spec) for the branch.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html#cfn-amplify-branch-buildspec
     */
    readonly buildSpec?: string;
    /**
     * The description for the branch that is part of an Amplify app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html#cfn-amplify-branch-description
     */
    readonly description?: string;
    /**
     * Enables auto building for the branch.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html#cfn-amplify-branch-enableautobuild
     */
    readonly enableAutoBuild?: boolean | cdk.IResolvable;
    /**
     * Enables performance mode for the branch.
     *
     * Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html#cfn-amplify-branch-enableperformancemode
     */
    readonly enablePerformanceMode?: boolean | cdk.IResolvable;
    /**
     * Specifies whether Amplify Hosting creates a preview for each pull request that is made for this branch.
     *
     * If this property is enabled, Amplify deploys your app to a unique preview URL after each pull request is opened. Development and QA teams can use this preview to test the pull request before it's merged into a production or integration branch.
     *
     * To provide backend support for your preview, Amplify automatically provisions a temporary backend environment that it deletes when the pull request is closed. If you want to specify a dedicated backend environment for your previews, use the `PullRequestEnvironmentName` property.
     *
     * For more information, see [Web Previews](https://docs.aws.amazon.com/amplify/latest/userguide/pr-previews.html) in the *AWS Amplify Hosting User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html#cfn-amplify-branch-enablepullrequestpreview
     */
    readonly enablePullRequestPreview?: boolean | cdk.IResolvable;
    /**
     * The environment variables for the branch.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html#cfn-amplify-branch-environmentvariables
     */
    readonly environmentVariables?: Array<CfnBranch.EnvironmentVariableProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The framework for the branch.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html#cfn-amplify-branch-framework
     */
    readonly framework?: string;
    /**
     * If pull request previews are enabled for this branch, you can use this property to specify a dedicated backend environment for your previews.
     *
     * For example, you could specify an environment named `prod` , `test` , or `dev` that you initialized with the Amplify CLI and mapped to this branch.
     *
     * To enable pull request previews, set the `EnablePullRequestPreview` property to `true` .
     *
     * If you don't specify an environment, Amplify Hosting provides backend support for each preview by automatically provisioning a temporary backend environment. Amplify Hosting deletes this environment when the pull request is closed.
     *
     * For more information about creating backend environments, see [Feature Branch Deployments and Team Workflows](https://docs.aws.amazon.com/amplify/latest/userguide/multi-environments.html) in the *AWS Amplify Hosting User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html#cfn-amplify-branch-pullrequestenvironmentname
     */
    readonly pullRequestEnvironmentName?: string;
    /**
     * Describes the current stage for the branch.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html#cfn-amplify-branch-stage
     */
    readonly stage?: string;
    /**
     * The tag for the branch.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html#cfn-amplify-branch-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies the AWS::Amplify::Domain resource that enables you to connect a custom domain to your app.
 *
 * @cloudformationResource AWS::Amplify::Domain
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html
 */
export declare class CfnDomain extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDomain from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDomain;
    /**
     * ARN for the Domain Association.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Branch patterns for the automatically created subdomain.
     *
     * @cloudformationAttribute AutoSubDomainCreationPatterns
     */
    readonly attrAutoSubDomainCreationPatterns: Array<string>;
    /**
     * The IAM service role for the subdomain.
     *
     * @cloudformationAttribute AutoSubDomainIAMRole
     */
    readonly attrAutoSubDomainIamRole: string;
    /**
     * @cloudformationAttribute Certificate
     */
    readonly attrCertificate: cdk.IResolvable;
    /**
     * DNS Record for certificate verification.
     *
     * @cloudformationAttribute CertificateRecord
     */
    readonly attrCertificateRecord: string;
    /**
     * Name of the domain.
     *
     * @cloudformationAttribute DomainName
     */
    readonly attrDomainName: string;
    /**
     * Status for the Domain Association.
     *
     * @cloudformationAttribute DomainStatus
     */
    readonly attrDomainStatus: string;
    /**
     * Specifies whether the automated creation of subdomains for branches is enabled.
     *
     * @cloudformationAttribute EnableAutoSubDomain
     */
    readonly attrEnableAutoSubDomain: cdk.IResolvable;
    /**
     * Reason for the current status of the domain.
     *
     * @cloudformationAttribute StatusReason
     */
    readonly attrStatusReason: string;
    /**
     * The status of the domain update operation that is currently in progress. The following list describes the valid update states.
     *
     * - **REQUESTING_CERTIFICATE** - The certificate is in the process of being updated.
     * - **PENDING_VERIFICATION** - Indicates that an Amplify managed certificate is in the process of being verified. This occurs during the creation of a custom domain or when a custom domain is updated to use a managed certificate.
     * - **IMPORTING_CUSTOM_CERTIFICATE** - Indicates that an Amplify custom certificate is in the process of being imported. This occurs during the creation of a custom domain or when a custom domain is updated to use a custom certificate.
     * - **PENDING_DEPLOYMENT** - Indicates that the subdomain or certificate changes are being propagated.
     * - **AWAITING_APP_CNAME** - Amplify is waiting for CNAME records corresponding to subdomains to be propagated. If your custom domain is on Route 53, Amplify handles this for you automatically. For more information about custom domains, see [Setting up custom domains](https://docs.aws.amazon.com/amplify/latest/userguide/custom-domains.html) in the *Amplify Hosting User Guide* .
     * - **UPDATE_COMPLETE** - The certificate has been associated with a domain.
     * - **UPDATE_FAILED** - The certificate has failed to be provisioned or associated, and there is no existing active certificate to roll back to.
     *
     * @cloudformationAttribute UpdateStatus
     */
    readonly attrUpdateStatus: string;
    /**
     * The unique ID for an Amplify app.
     */
    appId: string;
    /**
     * Sets the branch patterns for automatic subdomain creation.
     */
    autoSubDomainCreationPatterns?: Array<string>;
    /**
     * The required AWS Identity and Access Management (IAMlong) service role for the Amazon Resource Name (ARN) for automatically creating subdomains.
     */
    autoSubDomainIamRole?: string;
    /**
     * The type of SSL/TLS certificate to use for your custom domain.
     */
    certificateSettings?: CfnDomain.CertificateSettingsProperty | cdk.IResolvable;
    /**
     * The domain name for the domain association.
     */
    domainName: string;
    /**
     * Enables the automated creation of subdomains for branches.
     */
    enableAutoSubDomain?: boolean | cdk.IResolvable;
    /**
     * The setting for the subdomain.
     */
    subDomainSettings: Array<cdk.IResolvable | CfnDomain.SubDomainSettingProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDomainProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDomain {
    /**
     * The SubDomainSetting property type enables you to connect a subdomain (for example, example.exampledomain.com) to a specific branch.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-domain-subdomainsetting.html
     */
    interface SubDomainSettingProperty {
        /**
         * The branch name setting for the subdomain.
         *
         * *Length Constraints:* Minimum length of 1. Maximum length of 255.
         *
         * *Pattern:* (?s).+
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-domain-subdomainsetting.html#cfn-amplify-domain-subdomainsetting-branchname
         */
        readonly branchName: string;
        /**
         * The prefix setting for the subdomain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-domain-subdomainsetting.html#cfn-amplify-domain-subdomainsetting-prefix
         */
        readonly prefix: string;
    }
    /**
     * The type of SSL/TLS certificate to use for your custom domain.
     *
     * If a certificate type isn't specified, Amplify uses the default `AMPLIFY_MANAGED` certificate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-domain-certificatesettings.html
     */
    interface CertificateSettingsProperty {
        /**
         * The certificate type.
         *
         * Specify `AMPLIFY_MANAGED` to use the default certificate that Amplify provisions for you.
         *
         * Specify `CUSTOM` to use your own certificate that you have already added to AWS Certificate Manager in your AWS account . Make sure you request (or import) the certificate in the US East (N. Virginia) Region (us-east-1). For more information about using ACM, see [Importing certificates into AWS Certificate Manager](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) in the *ACM User guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-domain-certificatesettings.html#cfn-amplify-domain-certificatesettings-certificatetype
         */
        readonly certificateType?: string;
        /**
         * The Amazon resource name (ARN) for the custom certificate that you have already added to AWS Certificate Manager in your AWS account .
         *
         * This field is required only when the certificate type is `CUSTOM` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-domain-certificatesettings.html#cfn-amplify-domain-certificatesettings-customcertificatearn
         */
        readonly customCertificateArn?: string;
    }
    /**
     * Describes the SSL/TLS certificate for the domain association.
     *
     * This can be your own custom certificate or the default certificate that Amplify provisions for you.
     *
     * If you are updating your domain to use a different certificate, `Certificate` points to the new certificate that is being created instead of the current active certificate. Otherwise, `Certificate` points to the current active certificate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-domain-certificate.html
     */
    interface CertificateProperty {
        /**
         * The Amazon resource name (ARN) for a custom certificate that you have already added to AWS Certificate Manager in your AWS account .
         *
         * This field is required only when the certificate type is `CUSTOM` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-domain-certificate.html#cfn-amplify-domain-certificate-certificatearn
         */
        readonly certificateArn?: string;
        /**
         * The type of SSL/TLS certificate that you want to use.
         *
         * Specify `AMPLIFY_MANAGED` to use the default certificate that Amplify provisions for you.
         *
         * Specify `CUSTOM` to use your own certificate that you have already added to AWS Certificate Manager in your AWS account . Make sure you request (or import) the certificate in the US East (N. Virginia) Region (us-east-1). For more information about using ACM, see [Importing certificates into AWS Certificate Manager](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) in the *ACM User guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-domain-certificate.html#cfn-amplify-domain-certificate-certificatetype
         */
        readonly certificateType?: string;
        /**
         * The DNS record for certificate verification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-domain-certificate.html#cfn-amplify-domain-certificate-certificateverificationdnsrecord
         */
        readonly certificateVerificationDnsRecord?: string;
    }
}
/**
 * Properties for defining a `CfnDomain`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html
 */
export interface CfnDomainProps {
    /**
     * The unique ID for an Amplify app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-appid
     */
    readonly appId: string;
    /**
     * Sets the branch patterns for automatic subdomain creation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-autosubdomaincreationpatterns
     */
    readonly autoSubDomainCreationPatterns?: Array<string>;
    /**
     * The required AWS Identity and Access Management (IAMlong) service role for the Amazon Resource Name (ARN) for automatically creating subdomains.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-autosubdomainiamrole
     */
    readonly autoSubDomainIamRole?: string;
    /**
     * The type of SSL/TLS certificate to use for your custom domain.
     *
     * If you don't specify a certificate type, Amplify uses the default certificate that it provisions and manages for you.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-certificatesettings
     */
    readonly certificateSettings?: CfnDomain.CertificateSettingsProperty | cdk.IResolvable;
    /**
     * The domain name for the domain association.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-domainname
     */
    readonly domainName: string;
    /**
     * Enables the automated creation of subdomains for branches.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-enableautosubdomain
     */
    readonly enableAutoSubDomain?: boolean | cdk.IResolvable;
    /**
     * The setting for the subdomain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-subdomainsettings
     */
    readonly subDomainSettings: Array<cdk.IResolvable | CfnDomain.SubDomainSettingProperty> | cdk.IResolvable;
}
