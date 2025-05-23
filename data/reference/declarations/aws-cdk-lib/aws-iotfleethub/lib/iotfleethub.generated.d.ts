import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Represents a Fleet Hub for AWS IoT Device Management web application.
 *
 * @cloudformationResource AWS::IoTFleetHub::Application
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html
 */
export declare class CfnApplication extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApplication from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApplication;
    /**
     * The ARN of the web application.
     *
     * @cloudformationAttribute ApplicationArn
     */
    readonly attrApplicationArn: string;
    /**
     * The date (in Unix epoch time) when the web application was created.
     *
     * @cloudformationAttribute ApplicationCreationDate
     */
    readonly attrApplicationCreationDate: number;
    /**
     * The unique Id of the web application.
     *
     * @cloudformationAttribute ApplicationId
     */
    readonly attrApplicationId: string;
    /**
     * The date (in Unix epoch time) when the web application was last updated.
     *
     * @cloudformationAttribute ApplicationLastUpdateDate
     */
    readonly attrApplicationLastUpdateDate: number;
    /**
     * The current state of the web application.
     *
     * @cloudformationAttribute ApplicationState
     */
    readonly attrApplicationState: string;
    /**
     * The URL of the web application.
     *
     * @cloudformationAttribute ApplicationUrl
     */
    readonly attrApplicationUrl: string;
    /**
     * A message that explains any failures included in the applicationState response field. This message explains failures in the `CreateApplication` and `DeleteApplication` actions.
     *
     * @cloudformationAttribute ErrorMessage
     */
    readonly attrErrorMessage: string;
    /**
     * The Id of the single sign-on client that you use to authenticate and authorize users on the web application.
     *
     * @cloudformationAttribute SsoClientId
     */
    readonly attrSsoClientId: string;
    /**
     * An optional description of the web application.
     */
    applicationDescription?: string;
    /**
     * The name of the web application.
     */
    applicationName: string;
    /**
     * The ARN of the role that the web application assumes when it interacts with AWS IoT Core .
     */
    roleArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A set of key/value pairs that you can use to manage the web application resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApplicationProps);
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
 * Properties for defining a `CfnApplication`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html
 */
export interface CfnApplicationProps {
    /**
     * An optional description of the web application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html#cfn-iotfleethub-application-applicationdescription
     */
    readonly applicationDescription?: string;
    /**
     * The name of the web application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html#cfn-iotfleethub-application-applicationname
     */
    readonly applicationName: string;
    /**
     * The ARN of the role that the web application assumes when it interacts with AWS IoT Core .
     *
     * > The name of the role must be in the form `FleetHub_random_string` .
     *
     * Pattern: `^arn:[!-~]+$`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html#cfn-iotfleethub-application-rolearn
     */
    readonly roleArn: string;
    /**
     * A set of key/value pairs that you can use to manage the web application resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html#cfn-iotfleethub-application-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
