import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * This resource configures how Amazon CodeGuru Reviewer retrieves the source code to be reviewed.
 *
 * You can use an AWS CloudFormation template to create an association with the following repository types:
 *
 * - AWS CodeCommit - For more information, see [Create an AWS CodeCommit repository association](https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/create-codecommit-association.html) in the *Amazon CodeGuru Reviewer User Guide* .
 * - Bitbucket - For more information, see [Create a Bitbucket repository association](https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/create-bitbucket-association.html) in the *Amazon CodeGuru Reviewer User Guide* .
 * - GitHub Enterprise Server - For more information, see [Create a GitHub Enterprise Server repository association](https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/create-github-enterprise-association.html) in the *Amazon CodeGuru Reviewer User Guide* .
 * - S3Bucket - For more information, see [Create code reviews with GitHub Actions](https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/working-with-cicd.html) in the *Amazon CodeGuru Reviewer User Guide* .
 *
 * > You cannot use a CloudFormation template to create an association with a GitHub repository.
 *
 * @cloudformationResource AWS::CodeGuruReviewer::RepositoryAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html
 */
export declare class CfnRepositoryAssociation extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRepositoryAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRepositoryAssociation;
    /**
     * The Amazon Resource Name (ARN) of the [`RepositoryAssociation`](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html) object. You can retrieve this ARN by calling `ListRepositories` .
     *
     * @cloudformationAttribute AssociationArn
     */
    readonly attrAssociationArn: string;
    /**
     * The name of the bucket.
     */
    bucketName?: string;
    /**
     * The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection.
     */
    connectionArn?: string;
    /**
     * The name of the repository.
     */
    name: string;
    /**
     * The owner of the repository.
     */
    owner?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs used to tag an associated repository.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The type of repository that contains the source code to be reviewed. The valid values are:.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRepositoryAssociationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnRepositoryAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html
 */
export interface CfnRepositoryAssociationProps {
    /**
     * The name of the bucket.
     *
     * This is required for your S3Bucket repository. The name must start with the prefix `codeguru-reviewer-*` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html#cfn-codegurureviewer-repositoryassociation-bucketname
     */
    readonly bucketName?: string;
    /**
     * The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection.
     *
     * Its format is `arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id` . For more information, see [Connection](https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html) in the *AWS CodeStar Connections API Reference* .
     *
     * `ConnectionArn` must be specified for Bitbucket and GitHub Enterprise Server repositories. It has no effect if it is specified for an AWS CodeCommit repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html#cfn-codegurureviewer-repositoryassociation-connectionarn
     */
    readonly connectionArn?: string;
    /**
     * The name of the repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html#cfn-codegurureviewer-repositoryassociation-name
     */
    readonly name: string;
    /**
     * The owner of the repository.
     *
     * For a GitHub Enterprise Server or Bitbucket repository, this is the username for the account that owns the repository.
     *
     * `Owner` must be specified for Bitbucket and GitHub Enterprise Server repositories. It has no effect if it is specified for an AWS CodeCommit repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html#cfn-codegurureviewer-repositoryassociation-owner
     */
    readonly owner?: string;
    /**
     * An array of key-value pairs used to tag an associated repository.
     *
     * A tag is a custom attribute label with two parts:
     *
     * - A *tag key* (for example, `CostCenter` , `Environment` , `Project` , or `Secret` ). Tag keys are case sensitive.
     * - An optional field known as a *tag value* (for example, `111122223333` , `Production` , or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html#cfn-codegurureviewer-repositoryassociation-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The type of repository that contains the source code to be reviewed. The valid values are:.
     *
     * - `CodeCommit`
     * - `Bitbucket`
     * - `GitHubEnterpriseServer`
     * - `S3Bucket`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html#cfn-codegurureviewer-repositoryassociation-type
     */
    readonly type: string;
}
