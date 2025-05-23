import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Represents the hypervisor's permissions to which the gateway will connect.
 *
 * A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.
 *
 * @cloudformationResource AWS::BackupGateway::Hypervisor
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html
 */
export declare class CfnHypervisor extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnHypervisor from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnHypervisor;
    /**
     * Returns `HypervisorArn` , an Amazon Resource Name (ARN) that uniquely identifies a Hypervisor. For example: `arn:aws:backup-gateway:us-east-1:123456789012:hypervisor/hype-1234D67D`
     *
     * @cloudformationAttribute HypervisorArn
     */
    readonly attrHypervisorArn: string;
    /**
     * The server host of the hypervisor.
     */
    host?: string;
    /**
     * The Amazon Resource Name (ARN) of the AWS Key Management Service used to encrypt the hypervisor.
     */
    kmsKeyArn?: string;
    /**
     * The Amazon Resource Name (ARN) of the group of gateways within the requested log.
     */
    logGroupArn?: string;
    /**
     * The name of the hypervisor.
     */
    name?: string;
    /**
     * The password for the hypervisor.
     */
    password?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags of the hypervisor configuration to import.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The username for the hypervisor.
     */
    username?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnHypervisorProps);
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
 * Properties for defining a `CfnHypervisor`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html
 */
export interface CfnHypervisorProps {
    /**
     * The server host of the hypervisor.
     *
     * This can be either an IP address or a fully-qualified domain name (FQDN).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html#cfn-backupgateway-hypervisor-host
     */
    readonly host?: string;
    /**
     * The Amazon Resource Name (ARN) of the AWS Key Management Service used to encrypt the hypervisor.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html#cfn-backupgateway-hypervisor-kmskeyarn
     */
    readonly kmsKeyArn?: string;
    /**
     * The Amazon Resource Name (ARN) of the group of gateways within the requested log.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html#cfn-backupgateway-hypervisor-loggrouparn
     */
    readonly logGroupArn?: string;
    /**
     * The name of the hypervisor.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html#cfn-backupgateway-hypervisor-name
     */
    readonly name?: string;
    /**
     * The password for the hypervisor.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html#cfn-backupgateway-hypervisor-password
     */
    readonly password?: string;
    /**
     * The tags of the hypervisor configuration to import.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html#cfn-backupgateway-hypervisor-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The username for the hypervisor.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html#cfn-backupgateway-hypervisor-username
     */
    readonly username?: string;
}
