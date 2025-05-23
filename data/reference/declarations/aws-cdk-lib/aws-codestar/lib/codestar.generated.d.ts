import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::CodeStar::GitHubRepository` resource creates a GitHub repository where users can store source code for use with AWS workflows.
 *
 * You must provide a location for the source code ZIP file in the AWS CloudFormation template, so the code can be uploaded to the created repository. You must have created a personal access token in GitHub to provide in the AWS CloudFormation template. AWS uses this token to connect to GitHub on your behalf.
 *
 * @cloudformationResource AWS::CodeStar::GitHubRepository
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html
 */
export declare class CfnGitHubRepository extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGitHubRepository from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGitHubRepository;
    /**
     * The repository ID.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Information about code to be committed to a repository after it is created in an AWS CloudFormation stack.
     */
    code?: CfnGitHubRepository.CodeProperty | cdk.IResolvable;
    connectionArn?: string;
    /**
     * Indicates whether to enable issues for the GitHub repository.
     */
    enableIssues?: boolean | cdk.IResolvable;
    /**
     * Indicates whether the GitHub repository is a private repository.
     */
    isPrivate?: boolean | cdk.IResolvable;
    /**
     * The GitHub user's personal access token for the GitHub repository.
     */
    repositoryAccessToken?: string;
    /**
     * A comment or description about the new repository.
     */
    repositoryDescription?: string;
    /**
     * The name of the repository you want to create in GitHub with AWS CloudFormation stack creation.
     */
    repositoryName: string;
    /**
     * The GitHub user name for the owner of the GitHub repository to be created.
     */
    repositoryOwner: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGitHubRepositoryProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnGitHubRepository {
    /**
     * The `Code` property type specifies information about code to be committed.
     *
     * `Code` is a property of the `AWS::CodeStar::GitHubRepository` resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codestar-githubrepository-code.html
     */
    interface CodeProperty {
        /**
         * Information about the Amazon S3 bucket that contains a ZIP file of code to be committed to the repository.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codestar-githubrepository-code.html#cfn-codestar-githubrepository-code-s3
         */
        readonly s3: cdk.IResolvable | CfnGitHubRepository.S3Property;
    }
    /**
     * The `S3` property type specifies information about the Amazon S3 bucket that contains the code to be committed to the new repository.
     *
     * `S3` is a property of the `AWS::CodeStar::GitHubRepository` resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codestar-githubrepository-s3.html
     */
    interface S3Property {
        /**
         * The name of the Amazon S3 bucket that contains the ZIP file with the content to be committed to the new repository.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codestar-githubrepository-s3.html#cfn-codestar-githubrepository-s3-bucket
         */
        readonly bucket: string;
        /**
         * The S3 object key or file name for the ZIP file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codestar-githubrepository-s3.html#cfn-codestar-githubrepository-s3-key
         */
        readonly key: string;
        /**
         * The object version of the ZIP file, if versioning is enabled for the Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codestar-githubrepository-s3.html#cfn-codestar-githubrepository-s3-objectversion
         */
        readonly objectVersion?: string;
    }
}
/**
 * Properties for defining a `CfnGitHubRepository`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html
 */
export interface CfnGitHubRepositoryProps {
    /**
     * Information about code to be committed to a repository after it is created in an AWS CloudFormation stack.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-code
     */
    readonly code?: CfnGitHubRepository.CodeProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-connectionarn
     */
    readonly connectionArn?: string;
    /**
     * Indicates whether to enable issues for the GitHub repository.
     *
     * You can use GitHub issues to track information and bugs for your repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-enableissues
     */
    readonly enableIssues?: boolean | cdk.IResolvable;
    /**
     * Indicates whether the GitHub repository is a private repository.
     *
     * If so, you choose who can see and commit to this repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-isprivate
     */
    readonly isPrivate?: boolean | cdk.IResolvable;
    /**
     * The GitHub user's personal access token for the GitHub repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-repositoryaccesstoken
     */
    readonly repositoryAccessToken?: string;
    /**
     * A comment or description about the new repository.
     *
     * This description is displayed in GitHub after the repository is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-repositorydescription
     */
    readonly repositoryDescription?: string;
    /**
     * The name of the repository you want to create in GitHub with AWS CloudFormation stack creation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-repositoryname
     */
    readonly repositoryName: string;
    /**
     * The GitHub user name for the owner of the GitHub repository to be created.
     *
     * If this repository should be owned by a GitHub organization, provide its name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-repositoryowner
     */
    readonly repositoryOwner: string;
}
