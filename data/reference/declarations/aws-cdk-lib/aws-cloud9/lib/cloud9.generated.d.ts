import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::Cloud9::EnvironmentEC2` resource creates an Amazon EC2 development environment in AWS Cloud9 .
 *
 * For more information, see [Creating an Environment](https://docs.aws.amazon.com/cloud9/latest/user-guide/create-environment.html) in the *AWS Cloud9 User Guide* .
 *
 * @cloudformationResource AWS::Cloud9::EnvironmentEC2
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html
 */
export declare class CfnEnvironmentEC2 extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEnvironmentEC2 from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEnvironmentEC2;
    /**
     * The Amazon Resource Name (ARN) of the development environment, such as `arn:aws:cloud9:us-east-2:123456789012:environment:2bc3642873c342e485f7e0c561234567` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the environment.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The number of minutes until the running instance is shut down after the environment was last used.
     */
    automaticStopTimeMinutes?: number;
    /**
     * The connection type used for connecting to an Amazon EC2 environment.
     */
    connectionType?: string;
    /**
     * The description of the environment to create.
     */
    description?: string;
    /**
     * The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance.
     */
    imageId: string;
    /**
     * The type of instance to connect to the environment (for example, `t2.micro` ).
     */
    instanceType: string;
    /**
     * The name of the environment.
     */
    name?: string;
    /**
     * The Amazon Resource Name (ARN) of the environment owner.
     */
    ownerArn?: string;
    /**
     * Any AWS CodeCommit source code repositories to be cloned into the development environment.
     */
    repositories?: Array<cdk.IResolvable | CfnEnvironmentEC2.RepositoryProperty> | cdk.IResolvable;
    /**
     * The ID of the subnet in Amazon Virtual Private Cloud (Amazon VPC) that AWS Cloud9 will use to communicate with the Amazon Elastic Compute Cloud (Amazon EC2) instance.
     */
    subnetId?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs that will be associated with the new AWS Cloud9 development environment.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEnvironmentEC2Props);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEnvironmentEC2 {
    /**
     * The `Repository` property type specifies an AWS CodeCommit source code repository to be cloned into an AWS Cloud9 development environment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloud9-environmentec2-repository.html
     */
    interface RepositoryProperty {
        /**
         * The path within the development environment's default file system location to clone the AWS CodeCommit repository into.
         *
         * For example, `/REPOSITORY_NAME` would clone the repository into the `/home/USER_NAME/environment/REPOSITORY_NAME` directory in the environment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloud9-environmentec2-repository.html#cfn-cloud9-environmentec2-repository-pathcomponent
         */
        readonly pathComponent: string;
        /**
         * The clone URL of the AWS CodeCommit repository to be cloned.
         *
         * For example, for an AWS CodeCommit repository this might be `https://git-codecommit.us-east-2.amazonaws.com/v1/repos/REPOSITORY_NAME` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloud9-environmentec2-repository.html#cfn-cloud9-environmentec2-repository-repositoryurl
         */
        readonly repositoryUrl: string;
    }
}
/**
 * Properties for defining a `CfnEnvironmentEC2`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html
 */
export interface CfnEnvironmentEC2Props {
    /**
     * The number of minutes until the running instance is shut down after the environment was last used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html#cfn-cloud9-environmentec2-automaticstoptimeminutes
     */
    readonly automaticStopTimeMinutes?: number;
    /**
     * The connection type used for connecting to an Amazon EC2 environment.
     *
     * Valid values are `CONNECT_SSH` (default) and `CONNECT_SSM` (connected through AWS Systems Manager ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html#cfn-cloud9-environmentec2-connectiontype
     */
    readonly connectionType?: string;
    /**
     * The description of the environment to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html#cfn-cloud9-environmentec2-description
     */
    readonly description?: string;
    /**
     * The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance.
     *
     * To choose an AMI for the instance, you must specify a valid AMI alias or a valid AWS Systems Manager path.
     *
     * From December 04, 2023, you will be required to include the `ImageId` parameter for the `CreateEnvironmentEC2` action. This change will be reflected across all direct methods of communicating with the API, such as AWS SDK, AWS CLI and AWS CloudFormation. This change will only affect direct API consumers, and not AWS Cloud9 console users.
     *
     * Since Ubuntu 18.04 has ended standard support as of May 31, 2023, we recommend you choose Ubuntu 22.04.
     *
     * *AMI aliases*
     *
     * - Amazon Linux 2: `amazonlinux-2-x86_64`
     * - Amazon Linux 2023 (recommended): `amazonlinux-2023-x86_64`
     * - Ubuntu 18.04: `ubuntu-18.04-x86_64`
     * - Ubuntu 22.04: `ubuntu-22.04-x86_64`
     *
     * *SSM paths*
     *
     * - Amazon Linux 2: `resolve:ssm:/aws/service/cloud9/amis/amazonlinux-2-x86_64`
     * - Amazon Linux 2023 (recommended): `resolve:ssm:/aws/service/cloud9/amis/amazonlinux-2023-x86_64`
     * - Ubuntu 18.04: `resolve:ssm:/aws/service/cloud9/amis/ubuntu-18.04-x86_64`
     * - Ubuntu 22.04: `resolve:ssm:/aws/service/cloud9/amis/ubuntu-22.04-x86_64`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html#cfn-cloud9-environmentec2-imageid
     */
    readonly imageId: string;
    /**
     * The type of instance to connect to the environment (for example, `t2.micro` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html#cfn-cloud9-environmentec2-instancetype
     */
    readonly instanceType: string;
    /**
     * The name of the environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html#cfn-cloud9-environmentec2-name
     */
    readonly name?: string;
    /**
     * The Amazon Resource Name (ARN) of the environment owner.
     *
     * This ARN can be the ARN of any AWS Identity and Access Management principal. If this value is not specified, the ARN defaults to this environment's creator.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html#cfn-cloud9-environmentec2-ownerarn
     */
    readonly ownerArn?: string;
    /**
     * Any AWS CodeCommit source code repositories to be cloned into the development environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html#cfn-cloud9-environmentec2-repositories
     */
    readonly repositories?: Array<cdk.IResolvable | CfnEnvironmentEC2.RepositoryProperty> | cdk.IResolvable;
    /**
     * The ID of the subnet in Amazon Virtual Private Cloud (Amazon VPC) that AWS Cloud9 will use to communicate with the Amazon Elastic Compute Cloud (Amazon EC2) instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html#cfn-cloud9-environmentec2-subnetid
     */
    readonly subnetId?: string;
    /**
     * An array of key-value pairs that will be associated with the new AWS Cloud9 development environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html#cfn-cloud9-environmentec2-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
