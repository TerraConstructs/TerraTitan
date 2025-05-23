import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a new, empty repository.
 *
 * > AWS CodeCommit is no longer available to new customers. Existing customers of AWS CodeCommit can continue to use the service as normal. [Learn more"](https://docs.aws.amazon.com/devops/how-to-migrate-your-aws-codecommit-repository-to-another-git-provider)
 *
 * @cloudformationResource AWS::CodeCommit::Repository
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codecommit-repository.html
 */
export declare class CfnRepository extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRepository from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRepository;
    /**
     * When you pass the logical ID of this resource, the function returns the Amazon Resource Name (ARN) of the repository.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * When you pass the logical ID of this resource, the function returns the URL to use for cloning the repository over HTTPS.
     *
     * @cloudformationAttribute CloneUrlHttp
     */
    readonly attrCloneUrlHttp: string;
    /**
     * When you pass the logical ID of this resource, the function returns the URL to use for cloning the repository over SSH.
     *
     * @cloudformationAttribute CloneUrlSsh
     */
    readonly attrCloneUrlSsh: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * When you pass the logical ID of this resource, the function returns the repository's name.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * Information about code to be committed to a repository after it is created in an AWS CloudFormation stack.
     */
    code?: CfnRepository.CodeProperty | cdk.IResolvable;
    /**
     * The ID of the AWS Key Management Service encryption key used to encrypt and decrypt the repository.
     */
    kmsKeyId?: string;
    /**
     * A comment or description about the new repository.
     */
    repositoryDescription?: string;
    /**
     * The name of the new repository to be created.
     */
    repositoryName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * One or more tag key-value pairs to use when tagging this repository.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The JSON block of configuration information for each trigger.
     */
    triggers?: Array<cdk.IResolvable | CfnRepository.RepositoryTriggerProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRepositoryProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRepository {
    /**
     * Information about a trigger for a repository.
     *
     * > If you want to receive notifications about repository events, consider using notifications instead of triggers. For more information, see [Configuring notifications for repository events](https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-repository-email.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-repositorytrigger.html
     */
    interface RepositoryTriggerProperty {
        /**
         * The branches to be included in the trigger configuration.
         *
         * If you specify an empty array, the trigger applies to all branches.
         *
         * > Although no content is required in the array, you must include the array itself.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-repositorytrigger.html#cfn-codecommit-repository-repositorytrigger-branches
         */
        readonly branches?: Array<string>;
        /**
         * Any custom data associated with the trigger to be included in the information sent to the target of the trigger.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-repositorytrigger.html#cfn-codecommit-repository-repositorytrigger-customdata
         */
        readonly customData?: string;
        /**
         * The ARN of the resource that is the target for a trigger (for example, the ARN of a topic in Amazon SNS).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-repositorytrigger.html#cfn-codecommit-repository-repositorytrigger-destinationarn
         */
        readonly destinationArn: string;
        /**
         * The repository events that cause the trigger to run actions in another service, such as sending a notification through Amazon SNS.
         *
         * > The valid value "all" cannot be used with any other values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-repositorytrigger.html#cfn-codecommit-repository-repositorytrigger-events
         */
        readonly events: Array<string>;
        /**
         * The name of the trigger.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-repositorytrigger.html#cfn-codecommit-repository-repositorytrigger-name
         */
        readonly name: string;
    }
    /**
     * Information about code to be committed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-code.html
     */
    interface CodeProperty {
        /**
         * Optional.
         *
         * Specifies a branch name to be used as the default branch when importing code into a repository on initial creation. If this property is not set, the name *main* will be used for the default branch for the repository. Changes to this property are ignored after initial resource creation. We recommend using this parameter to set the name to *main* to align with the default behavior of CodeCommit unless another name is needed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-code.html#cfn-codecommit-repository-code-branchname
         */
        readonly branchName?: string;
        /**
         * Information about the Amazon S3 bucket that contains a ZIP file of code to be committed to the repository.
         *
         * Changes to this property are ignored after initial resource creation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-code.html#cfn-codecommit-repository-code-s3
         */
        readonly s3: cdk.IResolvable | CfnRepository.S3Property;
    }
    /**
     * Information about the Amazon S3 bucket that contains the code that will be committed to the new repository.
     *
     * Changes to this property are ignored after initial resource creation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-s3.html
     */
    interface S3Property {
        /**
         * The name of the Amazon S3 bucket that contains the ZIP file with the content that will be committed to the new repository.
         *
         * This can be specified using the name of the bucket in the AWS account . Changes to this property are ignored after initial resource creation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-s3.html#cfn-codecommit-repository-s3-bucket
         */
        readonly bucket: string;
        /**
         * The key to use for accessing the Amazon S3 bucket.
         *
         * Changes to this property are ignored after initial resource creation. For more information, see [Creating object key names](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html) and [Uploading objects](https://docs.aws.amazon.com/AmazonS3/latest/userguide/upload-objects.html) in the Amazon S3 User Guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-s3.html#cfn-codecommit-repository-s3-key
         */
        readonly key: string;
        /**
         * The object version of the ZIP file, if versioning is enabled for the Amazon S3 bucket.
         *
         * Changes to this property are ignored after initial resource creation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-s3.html#cfn-codecommit-repository-s3-objectversion
         */
        readonly objectVersion?: string;
    }
}
/**
 * Properties for defining a `CfnRepository`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codecommit-repository.html
 */
export interface CfnRepositoryProps {
    /**
     * Information about code to be committed to a repository after it is created in an AWS CloudFormation stack.
     *
     * Information about code is only used in resource creation. Updates to a stack will not reflect changes made to code properties after initial resource creation.
     *
     * > You can only use this property to add code when creating a repository with a AWS CloudFormation template at creation time. This property cannot be used for updating code to an existing repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codecommit-repository.html#cfn-codecommit-repository-code
     */
    readonly code?: CfnRepository.CodeProperty | cdk.IResolvable;
    /**
     * The ID of the AWS Key Management Service encryption key used to encrypt and decrypt the repository.
     *
     * > The input can be the full ARN, the key ID, or the key alias. For more information, see [Finding the key ID and key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/find-cmk-id-arn.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codecommit-repository.html#cfn-codecommit-repository-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * A comment or description about the new repository.
     *
     * > The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codecommit-repository.html#cfn-codecommit-repository-repositorydescription
     */
    readonly repositoryDescription?: string;
    /**
     * The name of the new repository to be created.
     *
     * > The repository name must be unique across the calling AWS account . Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. For more information about the limits on repository names, see [Quotas](https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html) in the *AWS CodeCommit User Guide* . The suffix .git is prohibited.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codecommit-repository.html#cfn-codecommit-repository-repositoryname
     */
    readonly repositoryName: string;
    /**
     * One or more tag key-value pairs to use when tagging this repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codecommit-repository.html#cfn-codecommit-repository-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The JSON block of configuration information for each trigger.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codecommit-repository.html#cfn-codecommit-repository-triggers
     */
    readonly triggers?: Array<cdk.IResolvable | CfnRepository.RepositoryTriggerProperty> | cdk.IResolvable;
}
