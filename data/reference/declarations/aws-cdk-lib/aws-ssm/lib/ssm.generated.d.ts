import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::SSM::Association` resource creates a State Manager association for your managed instances.
 *
 * A State Manager association defines the state that you want to maintain on your instances. For example, an association can specify that anti-virus software must be installed and running on your instances, or that certain ports must be closed. For static targets, the association specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an AWS Resource Groups or an AWS Auto Scaling Group, State Manager applies the configuration when new instances are added to the group. The association also specifies actions to take when applying the configuration. For example, an association for anti-virus software might run once a day. If the software is not installed, then State Manager installs it. If the software is installed, but the service is not running, then the association might instruct State Manager to start the service.
 *
 * @cloudformationResource AWS::SSM::Association
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html
 */
export declare class CfnAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAssociation;
    /**
     * The association ID.
     *
     * @cloudformationAttribute AssociationId
     */
    readonly attrAssociationId: string;
    /**
     * By default, when you create a new association, the system runs it immediately after it is created and then according to the schedule you specified.
     */
    applyOnlyAtCronInterval?: boolean | cdk.IResolvable;
    /**
     * Specify a descriptive name for the association.
     */
    associationName?: string;
    /**
     * Choose the parameter that will define how your automation will branch out.
     */
    automationTargetParameterName?: string;
    /**
     * The names or Amazon Resource Names (ARNs) of the Change Calendar type documents your associations are gated under.
     */
    calendarNames?: Array<string>;
    /**
     * The severity level that is assigned to the association.
     */
    complianceSeverity?: string;
    /**
     * The version of the SSM document to associate with the target.
     */
    documentVersion?: string;
    /**
     * The ID of the instance that the SSM document is associated with.
     */
    instanceId?: string;
    /**
     * The maximum number of targets allowed to run the association at the same time.
     */
    maxConcurrency?: string;
    /**
     * The number of errors that are allowed before the system stops sending requests to run the association on additional targets.
     */
    maxErrors?: string;
    /**
     * The name of the SSM document that contains the configuration information for the instance.
     */
    name: string;
    /**
     * An Amazon Simple Storage Service (Amazon S3) bucket where you want to store the output details of the request.
     */
    outputLocation?: CfnAssociation.InstanceAssociationOutputLocationProperty | cdk.IResolvable;
    /**
     * The parameters for the runtime configuration of the document.
     */
    parameters?: any | cdk.IResolvable;
    /**
     * A cron expression that specifies a schedule when the association runs.
     */
    scheduleExpression?: string;
    /**
     * Number of days to wait after the scheduled day to run an association.
     */
    scheduleOffset?: number;
    /**
     * The mode for generating association compliance.
     */
    syncCompliance?: string;
    /**
     * The targets for the association.
     */
    targets?: Array<cdk.IResolvable | CfnAssociation.TargetProperty> | cdk.IResolvable;
    /**
     * The number of seconds the service should wait for the association status to show "Success" before proceeding with the stack execution.
     */
    waitForSuccessTimeoutSeconds?: number;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAssociationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAssociation {
    /**
     * `Target` is a property of the [AWS::SSM::Association](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html) resource that specifies the targets for an SSM document in Systems Manager . You can target all instances in an AWS account by specifying the `InstanceIds` key with a value of `*` . To view a JSON and a YAML example that targets all instances, see the example "Create an association for all managed instances in an AWS account " later in this page.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-target.html
     */
    interface TargetProperty {
        /**
         * User-defined criteria for sending commands that target managed nodes that meet the criteria.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-target.html#cfn-ssm-association-target-key
         */
        readonly key: string;
        /**
         * User-defined criteria that maps to `Key` .
         *
         * For example, if you specified `tag:ServerRole` , you could specify `value:WebServer` to run a command on instances that include EC2 tags of `ServerRole,WebServer` .
         *
         * Depending on the type of target, the maximum number of values for a key might be lower than the global maximum of 50.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-target.html#cfn-ssm-association-target-values
         */
        readonly values: Array<string>;
    }
    /**
     * `InstanceAssociationOutputLocation` is a property of the [AWS::SSM::Association](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html) resource that specifies an Amazon S3 bucket where you want to store the results of this association request.
     *
     * For the minimal permissions required to enable Amazon S3 output for an association, see [Creating associations](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-state-assoc.html) in the *Systems Manager User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-instanceassociationoutputlocation.html
     */
    interface InstanceAssociationOutputLocationProperty {
        /**
         * `S3OutputLocation` is a property of the [InstanceAssociationOutputLocation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-instanceassociationoutputlocation.html) property that specifies an Amazon S3 bucket where you want to store the results of this request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-instanceassociationoutputlocation.html#cfn-ssm-association-instanceassociationoutputlocation-s3location
         */
        readonly s3Location?: cdk.IResolvable | CfnAssociation.S3OutputLocationProperty;
    }
    /**
     * `S3OutputLocation` is a property of the [AWS::SSM::Association](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html) resource that specifies an Amazon S3 bucket where you want to store the results of this association request.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-s3outputlocation.html
     */
    interface S3OutputLocationProperty {
        /**
         * The name of the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-s3outputlocation.html#cfn-ssm-association-s3outputlocation-outputs3bucketname
         */
        readonly outputS3BucketName?: string;
        /**
         * The S3 bucket subfolder.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-s3outputlocation.html#cfn-ssm-association-s3outputlocation-outputs3keyprefix
         */
        readonly outputS3KeyPrefix?: string;
        /**
         * The AWS Region of the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-s3outputlocation.html#cfn-ssm-association-s3outputlocation-outputs3region
         */
        readonly outputS3Region?: string;
    }
}
/**
 * Properties for defining a `CfnAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html
 */
export interface CfnAssociationProps {
    /**
     * By default, when you create a new association, the system runs it immediately after it is created and then according to the schedule you specified.
     *
     * Specify this option if you don't want an association to run immediately after you create it. This parameter is not supported for rate expressions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html#cfn-ssm-association-applyonlyatcroninterval
     */
    readonly applyOnlyAtCronInterval?: boolean | cdk.IResolvable;
    /**
     * Specify a descriptive name for the association.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html#cfn-ssm-association-associationname
     */
    readonly associationName?: string;
    /**
     * Choose the parameter that will define how your automation will branch out.
     *
     * This target is required for associations that use an Automation runbook and target resources by using rate controls. Automation is a tool in AWS Systems Manager .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html#cfn-ssm-association-automationtargetparametername
     */
    readonly automationTargetParameterName?: string;
    /**
     * The names or Amazon Resource Names (ARNs) of the Change Calendar type documents your associations are gated under.
     *
     * The associations only run when that Change Calendar is open. For more information, see [AWS Systems Manager Change Calendar](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar) in the *AWS Systems Manager User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html#cfn-ssm-association-calendarnames
     */
    readonly calendarNames?: Array<string>;
    /**
     * The severity level that is assigned to the association.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html#cfn-ssm-association-complianceseverity
     */
    readonly complianceSeverity?: string;
    /**
     * The version of the SSM document to associate with the target.
     *
     * > Note the following important information.
     * >
     * > - State Manager doesn't support running associations that use a new version of a document if that document is shared from another account. State Manager always runs the `default` version of a document if shared from another account, even though the Systems Manager console shows that a new version was processed. If you want to run an association using a new version of a document shared form another account, you must set the document version to `default` .
     * > - `DocumentVersion` is not valid for documents owned by AWS , such as `AWS-RunPatchBaseline` or `AWS-UpdateSSMAgent` . If you specify `DocumentVersion` for an AWS document, the system returns the following error: "Error occurred during operation 'CreateAssociation'." (RequestToken: <token>, HandlerErrorCode: GeneralServiceException).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html#cfn-ssm-association-documentversion
     */
    readonly documentVersion?: string;
    /**
     * The ID of the instance that the SSM document is associated with.
     *
     * You must specify the `InstanceId` or `Targets` property.
     *
     * > `InstanceId` has been deprecated. To specify an instance ID for an association, use the `Targets` parameter. If you use the parameter `InstanceId` , you cannot use the parameters `AssociationName` , `DocumentVersion` , `MaxErrors` , `MaxConcurrency` , `OutputLocation` , or `ScheduleExpression` . To use these parameters, you must use the `Targets` parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html#cfn-ssm-association-instanceid
     */
    readonly instanceId?: string;
    /**
     * The maximum number of targets allowed to run the association at the same time.
     *
     * You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time.
     *
     * If a new managed node starts and attempts to run an association while Systems Manager is running `MaxConcurrency` associations, the association is allowed to run. During the next association interval, the new managed node will process its association within the limit specified for `MaxConcurrency` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html#cfn-ssm-association-maxconcurrency
     */
    readonly maxConcurrency?: string;
    /**
     * The number of errors that are allowed before the system stops sending requests to run the association on additional targets.
     *
     * You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 managed nodes and set `MaxError` to 10%, then the system stops sending the request when the sixth error is received.
     *
     * Executions that are already running an association when `MaxErrors` is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set `MaxConcurrency` to 1 so that executions proceed one at a time.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html#cfn-ssm-association-maxerrors
     */
    readonly maxErrors?: string;
    /**
     * The name of the SSM document that contains the configuration information for the instance.
     *
     * You can specify `Command` or `Automation` documents. The documents can be AWS -predefined documents, documents you created, or a document that is shared with you from another account. For SSM documents that are shared with you from other AWS accounts , you must specify the complete SSM document ARN, in the following format:
     *
     * `arn:partition:ssm:region:account-id:document/document-name`
     *
     * For example: `arn:aws:ssm:us-east-2:12345678912:document/My-Shared-Document`
     *
     * For AWS -predefined documents and SSM documents you created in your account, you only need to specify the document name. For example, `AWS -ApplyPatchBaseline` or `My-Document` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html#cfn-ssm-association-name
     */
    readonly name: string;
    /**
     * An Amazon Simple Storage Service (Amazon S3) bucket where you want to store the output details of the request.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html#cfn-ssm-association-outputlocation
     */
    readonly outputLocation?: CfnAssociation.InstanceAssociationOutputLocationProperty | cdk.IResolvable;
    /**
     * The parameters for the runtime configuration of the document.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html#cfn-ssm-association-parameters
     */
    readonly parameters?: any | cdk.IResolvable;
    /**
     * A cron expression that specifies a schedule when the association runs.
     *
     * The schedule runs in Coordinated Universal Time (UTC).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html#cfn-ssm-association-scheduleexpression
     */
    readonly scheduleExpression?: string;
    /**
     * Number of days to wait after the scheduled day to run an association.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html#cfn-ssm-association-scheduleoffset
     */
    readonly scheduleOffset?: number;
    /**
     * The mode for generating association compliance.
     *
     * You can specify `AUTO` or `MANUAL` . In `AUTO` mode, the system uses the status of the association execution to determine the compliance status. If the association execution runs successfully, then the association is `COMPLIANT` . If the association execution doesn't run successfully, the association is `NON-COMPLIANT` .
     *
     * In `MANUAL` mode, you must specify the `AssociationId` as a parameter for the `PutComplianceItems` API action. In this case, compliance data is not managed by State Manager. It is managed by your direct call to the `PutComplianceItems` API action.
     *
     * By default, all associations use `AUTO` mode.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html#cfn-ssm-association-synccompliance
     */
    readonly syncCompliance?: string;
    /**
     * The targets for the association.
     *
     * You must specify the `InstanceId` or `Targets` property. You can target all instances in an AWS account by specifying t he `InstanceIds` key with a value of `*` .
     *
     * Supported formats include the following.
     *
     * - `Key=InstanceIds,Values=<instance-id-1>,<instance-id-2>,<instance-id-3>`
     * - `Key=tag-key,Values=<my-tag-key-1>,<my-tag-key-2>`
     *
     * To view a JSON and a YAML example that targets all instances, see "Create an association for all managed instances in an AWS account " on the Examples page.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html#cfn-ssm-association-targets
     */
    readonly targets?: Array<cdk.IResolvable | CfnAssociation.TargetProperty> | cdk.IResolvable;
    /**
     * The number of seconds the service should wait for the association status to show "Success" before proceeding with the stack execution.
     *
     * If the association status doesn't show "Success" after the specified number of seconds, then stack creation fails.
     *
     * > When you specify a value for the `WaitForSuccessTimeoutSeconds` , [drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html) for your AWS CloudFormation stack’s configuration might yield inaccurate results. If drift detection is important in your scenario, we recommend that you don’t include `WaitForSuccessTimeoutSeconds` in your template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html#cfn-ssm-association-waitforsuccesstimeoutseconds
     */
    readonly waitForSuccessTimeoutSeconds?: number;
}
/**
 * The `AWS::SSM::Document` resource creates a Systems Manager (SSM) document in AWS Systems Manager .
 *
 * This document defines the actions that Systems Manager performs on your AWS resources.
 *
 * > This resource does not support AWS CloudFormation drift detection.
 *
 * @cloudformationResource AWS::SSM::Document
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html
 */
export declare class CfnDocument extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDocument from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDocument;
    /**
     * A list of key-value pairs that describe attachments to a version of a document.
     */
    attachments?: Array<CfnDocument.AttachmentsSourceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The content for the new SSM document in JSON or YAML.
     */
    content: any | cdk.IResolvable;
    /**
     * Specify the document format for the request.
     */
    documentFormat?: string;
    /**
     * The type of document to create.
     */
    documentType?: string;
    /**
     * A name for the SSM document.
     */
    name?: string;
    /**
     * A list of SSM documents required by a document.
     */
    requires?: Array<CfnDocument.DocumentRequiresProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * AWS CloudFormation resource tags to apply to the document.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Specify a target type to define the kinds of resources the document can run on.
     */
    targetType?: string;
    /**
     * If the document resource you specify in your template already exists, this parameter determines whether a new version of the existing document is created, or the existing document is replaced.
     */
    updateMethod?: string;
    /**
     * An optional field specifying the version of the artifact you are creating with the document.
     */
    versionName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDocumentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDocument {
    /**
     * An SSM document required by the current document.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-documentrequires.html
     */
    interface DocumentRequiresProperty {
        /**
         * The name of the required SSM document.
         *
         * The name can be an Amazon Resource Name (ARN).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-documentrequires.html#cfn-ssm-document-documentrequires-name
         */
        readonly name?: string;
        /**
         * The document version required by the current document.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-documentrequires.html#cfn-ssm-document-documentrequires-version
         */
        readonly version?: string;
    }
    /**
     * Identifying information about a document attachment, including the file name and a key-value pair that identifies the location of an attachment to a document.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-attachmentssource.html
     */
    interface AttachmentsSourceProperty {
        /**
         * The key of a key-value pair that identifies the location of an attachment to a document.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-attachmentssource.html#cfn-ssm-document-attachmentssource-key
         */
        readonly key?: string;
        /**
         * The name of the document attachment file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-attachmentssource.html#cfn-ssm-document-attachmentssource-name
         */
        readonly name?: string;
        /**
         * The value of a key-value pair that identifies the location of an attachment to a document.
         *
         * The format for *Value* depends on the type of key you specify.
         *
         * - For the key *SourceUrl* , the value is an S3 bucket location. For example:
         *
         * `"Values": [ "s3://amzn-s3-demo-bucket/my-prefix" ]`
         * - For the key *S3FileUrl* , the value is a file in an S3 bucket. For example:
         *
         * `"Values": [ "s3://amzn-s3-demo-bucket/my-prefix/my-file.py" ]`
         * - For the key *AttachmentReference* , the value is constructed from the name of another SSM document in your account, a version number of that document, and a file attached to that document version that you want to reuse. For example:
         *
         * `"Values": [ "MyOtherDocument/3/my-other-file.py" ]`
         *
         * However, if the SSM document is shared with you from another account, the full SSM document ARN must be specified instead of the document name only. For example:
         *
         * `"Values": [ "arn:aws:ssm:us-east-2:111122223333:document/OtherAccountDocument/3/their-file.py" ]`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-attachmentssource.html#cfn-ssm-document-attachmentssource-values
         */
        readonly values?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnDocument`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html
 */
export interface CfnDocumentProps {
    /**
     * A list of key-value pairs that describe attachments to a version of a document.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-attachments
     */
    readonly attachments?: Array<CfnDocument.AttachmentsSourceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The content for the new SSM document in JSON or YAML.
     *
     * For more information about the schemas for SSM document content, see [SSM document schema features and examples](https://docs.aws.amazon.com/systems-manager/latest/userguide/document-schemas-features.html) in the *AWS Systems Manager User Guide* .
     *
     * > This parameter also supports `String` data types.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-content
     */
    readonly content: any | cdk.IResolvable;
    /**
     * Specify the document format for the request.
     *
     * `JSON` is the default format.
     *
     * @default - "JSON"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-documentformat
     */
    readonly documentFormat?: string;
    /**
     * The type of document to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-documenttype
     */
    readonly documentType?: string;
    /**
     * A name for the SSM document.
     *
     * > You can't use the following strings as document name prefixes. These are reserved by AWS for use as document name prefixes:
     * >
     * > - `aws`
     * > - `amazon`
     * > - `amzn`
     * > - `AWSEC2`
     * > - `AWSConfigRemediation`
     * > - `AWSSupport`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-name
     */
    readonly name?: string;
    /**
     * A list of SSM documents required by a document.
     *
     * This parameter is used exclusively by AWS AppConfig . When a user creates an AWS AppConfig configuration in an SSM document, the user must also specify a required document for validation purposes. In this case, an `ApplicationConfiguration` document requires an `ApplicationConfigurationSchema` document for validation purposes. For more information, see [What is AWS AppConfig ?](https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html) in the *AWS AppConfig User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-requires
     */
    readonly requires?: Array<CfnDocument.DocumentRequiresProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * AWS CloudFormation resource tags to apply to the document.
     *
     * Use tags to help you identify and categorize resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specify a target type to define the kinds of resources the document can run on.
     *
     * For example, to run a document on EC2 instances, specify the following value: `/AWS::EC2::Instance` . If you specify a value of '/' the document can run on all types of resources. If you don't specify a value, the document can't run on any resources. For a list of valid resource types, see [AWS resource and property types reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) in the *AWS CloudFormation User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-targettype
     */
    readonly targetType?: string;
    /**
     * If the document resource you specify in your template already exists, this parameter determines whether a new version of the existing document is created, or the existing document is replaced.
     *
     * `Replace` is the default method. If you specify `NewVersion` for the `UpdateMethod` parameter, and the `Name` of the document does not match an existing resource, a new document is created. When you specify `NewVersion` , the default version of the document is changed to the newly created version.
     *
     * @default - "Replace"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-updatemethod
     */
    readonly updateMethod?: string;
    /**
     * An optional field specifying the version of the artifact you are creating with the document.
     *
     * For example, `Release12.1` . This value is unique across all versions of a document, and can't be changed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-versionname
     */
    readonly versionName?: string;
}
/**
 * The `AWS::SSM::MaintenanceWindow` resource represents general information about a maintenance window for AWS Systems Manager .
 *
 * Maintenance windows let you define a schedule for when to perform potentially disruptive actions on your instances, such as patching an operating system (OS), updating drivers, or installing software. Each maintenance window has a schedule, a duration, a set of registered targets, and a set of registered tasks.
 *
 * For more information, see [Systems Manager Maintenance Windows](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-maintenance.html) in the *AWS Systems Manager User Guide* and [CreateMaintenanceWindow](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateMaintenanceWindow.html) in the *AWS Systems Manager API Reference* .
 *
 * @cloudformationResource AWS::SSM::MaintenanceWindow
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html
 */
export declare class CfnMaintenanceWindow extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMaintenanceWindow from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMaintenanceWindow;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Enables a maintenance window task to run on managed instances, even if you have not registered those instances as targets.
     */
    allowUnassociatedTargets: boolean | cdk.IResolvable;
    /**
     * The number of hours before the end of the maintenance window that AWS Systems Manager stops scheduling new tasks for execution.
     */
    cutoff: number;
    /**
     * A description of the maintenance window.
     */
    description?: string;
    /**
     * The duration of the maintenance window in hours.
     */
    duration: number;
    /**
     * The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive.
     */
    endDate?: string;
    /**
     * The name of the maintenance window.
     */
    name: string;
    /**
     * The schedule of the maintenance window in the form of a cron or rate expression.
     */
    schedule: string;
    /**
     * The number of days to wait to run a maintenance window after the scheduled cron expression date and time.
     */
    scheduleOffset?: number;
    /**
     * The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format.
     */
    scheduleTimezone?: string;
    /**
     * The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active.
     */
    startDate?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs).
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMaintenanceWindowProps);
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
 * Properties for defining a `CfnMaintenanceWindow`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html
 */
export interface CfnMaintenanceWindowProps {
    /**
     * Enables a maintenance window task to run on managed instances, even if you have not registered those instances as targets.
     *
     * If enabled, then you must specify the unregistered instances (by instance ID) when you register a task with the maintenance window.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-allowunassociatedtargets
     */
    readonly allowUnassociatedTargets: boolean | cdk.IResolvable;
    /**
     * The number of hours before the end of the maintenance window that AWS Systems Manager stops scheduling new tasks for execution.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-cutoff
     */
    readonly cutoff: number;
    /**
     * A description of the maintenance window.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-description
     */
    readonly description?: string;
    /**
     * The duration of the maintenance window in hours.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-duration
     */
    readonly duration: number;
    /**
     * The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-enddate
     */
    readonly endDate?: string;
    /**
     * The name of the maintenance window.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-name
     */
    readonly name: string;
    /**
     * The schedule of the maintenance window in the form of a cron or rate expression.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-schedule
     */
    readonly schedule: string;
    /**
     * The number of days to wait to run a maintenance window after the scheduled cron expression date and time.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-scheduleoffset
     */
    readonly scheduleOffset?: number;
    /**
     * The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-scheduletimezone
     */
    readonly scheduleTimezone?: string;
    /**
     * The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active.
     *
     * `StartDate` allows you to delay activation of the maintenance window until the specified future date.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-startdate
     */
    readonly startDate?: string;
    /**
     * Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs).
     *
     * Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a maintenance window to identify the type of tasks it will run, the types of targets, and the environment it will run in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::SSM::MaintenanceWindowTarget` resource registers a target with a maintenance window for AWS Systems Manager .
 *
 * For more information, see [RegisterTargetWithMaintenanceWindow](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterTargetWithMaintenanceWindow.html) in the *AWS Systems Manager API Reference* .
 *
 * @cloudformationResource AWS::SSM::MaintenanceWindowTarget
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html
 */
export declare class CfnMaintenanceWindowTarget extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMaintenanceWindowTarget from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMaintenanceWindowTarget;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A description for the target.
     */
    description?: string;
    /**
     * The name for the maintenance window target.
     */
    name?: string;
    /**
     * A user-provided value that will be included in any Amazon CloudWatch Events events that are raised while running tasks for these targets in this maintenance window.
     */
    ownerInformation?: string;
    /**
     * The type of target that is being registered with the maintenance window.
     */
    resourceType: string;
    /**
     * The targets to register with the maintenance window.
     */
    targets: Array<cdk.IResolvable | CfnMaintenanceWindowTarget.TargetsProperty> | cdk.IResolvable;
    /**
     * The ID of the maintenance window to register the target with.
     */
    windowId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMaintenanceWindowTargetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMaintenanceWindowTarget {
    /**
     * The `Targets` property type specifies adding a target to a maintenance window target in AWS Systems Manager .
     *
     * `Targets` is a property of the [AWS::SSM::MaintenanceWindowTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtarget-targets.html
     */
    interface TargetsProperty {
        /**
         * User-defined criteria for sending commands that target managed nodes that meet the criteria.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtarget-targets.html#cfn-ssm-maintenancewindowtarget-targets-key
         */
        readonly key: string;
        /**
         * User-defined criteria that maps to `Key` .
         *
         * For example, if you specified `tag:ServerRole` , you could specify `value:WebServer` to run a command on instances that include EC2 tags of `ServerRole,WebServer` .
         *
         * Depending on the type of target, the maximum number of values for a key might be lower than the global maximum of 50.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtarget-targets.html#cfn-ssm-maintenancewindowtarget-targets-values
         */
        readonly values: Array<string>;
    }
}
/**
 * Properties for defining a `CfnMaintenanceWindowTarget`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html
 */
export interface CfnMaintenanceWindowTargetProps {
    /**
     * A description for the target.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html#cfn-ssm-maintenancewindowtarget-description
     */
    readonly description?: string;
    /**
     * The name for the maintenance window target.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html#cfn-ssm-maintenancewindowtarget-name
     */
    readonly name?: string;
    /**
     * A user-provided value that will be included in any Amazon CloudWatch Events events that are raised while running tasks for these targets in this maintenance window.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html#cfn-ssm-maintenancewindowtarget-ownerinformation
     */
    readonly ownerInformation?: string;
    /**
     * The type of target that is being registered with the maintenance window.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html#cfn-ssm-maintenancewindowtarget-resourcetype
     */
    readonly resourceType: string;
    /**
     * The targets to register with the maintenance window.
     *
     * In other words, the instances to run commands on when the maintenance window runs.
     *
     * You must specify targets by using the `WindowTargetIds` parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html#cfn-ssm-maintenancewindowtarget-targets
     */
    readonly targets: Array<cdk.IResolvable | CfnMaintenanceWindowTarget.TargetsProperty> | cdk.IResolvable;
    /**
     * The ID of the maintenance window to register the target with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html#cfn-ssm-maintenancewindowtarget-windowid
     */
    readonly windowId: string;
}
/**
 * The `AWS::SSM::MaintenanceWindowTask` resource defines information about a task for an AWS Systems Manager maintenance window.
 *
 * For more information, see [RegisterTaskWithMaintenanceWindow](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterTaskWithMaintenanceWindow.html) in the *AWS Systems Manager API Reference* .
 *
 * @cloudformationResource AWS::SSM::MaintenanceWindowTask
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html
 */
export declare class CfnMaintenanceWindowTask extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMaintenanceWindowTask from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMaintenanceWindowTask;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The specification for whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached.
     */
    cutoffBehavior?: string;
    /**
     * A description of the task.
     */
    description?: string;
    /**
     * Information about an Amazon S3 bucket to write Run Command task-level logs to.
     */
    loggingInfo?: cdk.IResolvable | CfnMaintenanceWindowTask.LoggingInfoProperty;
    /**
     * The maximum number of targets this task can be run for, in parallel.
     */
    maxConcurrency?: string;
    /**
     * The maximum number of errors allowed before this task stops being scheduled.
     */
    maxErrors?: string;
    /**
     * The task name.
     */
    name?: string;
    /**
     * The priority of the task in the maintenance window.
     */
    priority: number;
    /**
     * The Amazon Resource Name (ARN) of the IAM service role for AWS Systems Manager to assume when running a maintenance window task.
     */
    serviceRoleArn?: string;
    /**
     * The targets, either instances or window target IDs.
     */
    targets?: Array<cdk.IResolvable | CfnMaintenanceWindowTask.TargetProperty> | cdk.IResolvable;
    /**
     * The resource that the task uses during execution.
     */
    taskArn: string;
    /**
     * The parameters to pass to the task when it runs.
     */
    taskInvocationParameters?: cdk.IResolvable | CfnMaintenanceWindowTask.TaskInvocationParametersProperty;
    /**
     * The parameters to pass to the task when it runs.
     */
    taskParameters?: any | cdk.IResolvable;
    /**
     * The type of task.
     */
    taskType: string;
    /**
     * The ID of the maintenance window where the task is registered.
     */
    windowId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMaintenanceWindowTaskProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMaintenanceWindowTask {
    /**
     * The `Target` property type specifies targets (either instances or window target IDs).
     *
     * You specify instances by using `Key=InstanceIds,Values=< *instanceid1* >,< *instanceid2* >` . You specify window target IDs using `Key=WindowTargetIds,Values=< *window-target-id-1* >,< *window-target-id-2* >` for a maintenance window task in AWS Systems Manager .
     *
     * `Target` is a property of the [AWS::SSM::MaintenanceWindowTask](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html) property type.
     *
     * > To use `resource-groups:Name` as the key for a maintenance window target, specify the resource group as a `AWS::SSM::MaintenanceWindowTarget` type, and use the `Ref` function to specify the target for `AWS::SSM::MaintenanceWindowTask` . For an example, see *Create a Run Command task that targets instances using a resource group name* in [AWS::SSM::MaintenanceWindowTask Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html#aws-resource-ssm-maintenancewindowtask--examples) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-target.html
     */
    interface TargetProperty {
        /**
         * User-defined criteria for sending commands that target instances that meet the criteria.
         *
         * `Key` can be `InstanceIds` or `WindowTargetIds` . For more information about how to target instances within a maintenance window task, see [About 'register-task-with-maintenance-window' Options and Values](https://docs.aws.amazon.com/systems-manager/latest/userguide/register-tasks-options.html) in the *AWS Systems Manager User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-target.html#cfn-ssm-maintenancewindowtask-target-key
         */
        readonly key: string;
        /**
         * User-defined criteria that maps to `Key` .
         *
         * For example, if you specify `InstanceIds` , you can specify `i-1234567890abcdef0,i-9876543210abcdef0` to run a command on two EC2 instances. For more information about how to target instances within a maintenance window task, see [About 'register-task-with-maintenance-window' Options and Values](https://docs.aws.amazon.com/systems-manager/latest/userguide/register-tasks-options.html) in the *AWS Systems Manager User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-target.html#cfn-ssm-maintenancewindowtask-target-values
         */
        readonly values: Array<string>;
    }
    /**
     * The `TaskInvocationParameters` property type specifies the task execution parameters for a maintenance window task in AWS Systems Manager .
     *
     * `TaskInvocationParameters` is a property of the [AWS::SSM::MaintenanceWindowTask](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-taskinvocationparameters.html
     */
    interface TaskInvocationParametersProperty {
        /**
         * The parameters for an `AUTOMATION` task type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-taskinvocationparameters.html#cfn-ssm-maintenancewindowtask-taskinvocationparameters-maintenancewindowautomationparameters
         */
        readonly maintenanceWindowAutomationParameters?: cdk.IResolvable | CfnMaintenanceWindowTask.MaintenanceWindowAutomationParametersProperty;
        /**
         * The parameters for a `LAMBDA` task type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-taskinvocationparameters.html#cfn-ssm-maintenancewindowtask-taskinvocationparameters-maintenancewindowlambdaparameters
         */
        readonly maintenanceWindowLambdaParameters?: cdk.IResolvable | CfnMaintenanceWindowTask.MaintenanceWindowLambdaParametersProperty;
        /**
         * The parameters for a `RUN_COMMAND` task type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-taskinvocationparameters.html#cfn-ssm-maintenancewindowtask-taskinvocationparameters-maintenancewindowruncommandparameters
         */
        readonly maintenanceWindowRunCommandParameters?: cdk.IResolvable | CfnMaintenanceWindowTask.MaintenanceWindowRunCommandParametersProperty;
        /**
         * The parameters for a `STEP_FUNCTIONS` task type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-taskinvocationparameters.html#cfn-ssm-maintenancewindowtask-taskinvocationparameters-maintenancewindowstepfunctionsparameters
         */
        readonly maintenanceWindowStepFunctionsParameters?: cdk.IResolvable | CfnMaintenanceWindowTask.MaintenanceWindowStepFunctionsParametersProperty;
    }
    /**
     * The `MaintenanceWindowRunCommandParameters` property type specifies the parameters for a `RUN_COMMAND` task type for a maintenance window task in AWS Systems Manager .
     *
     * This means that these parameters are the same as those for the `SendCommand` API call. For more information about `SendCommand` parameters, see [SendCommand](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_SendCommand.html) in the *AWS Systems Manager API Reference* .
     *
     * For information about available parameters in SSM Command documents, you can view the content of the document itself in the Systems Manager console. For information, see [Viewing SSM command document content](https://docs.aws.amazon.com/systems-manager/latest/userguide/viewing-ssm-document-content.html) in the *AWS Systems Manager User Guide* .
     *
     * `MaintenanceWindowRunCommandParameters` is a property of the [TaskInvocationParameters](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-taskinvocationparameters.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html
     */
    interface MaintenanceWindowRunCommandParametersProperty {
        /**
         * Configuration options for sending command output to Amazon CloudWatch Logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html#cfn-ssm-maintenancewindowtask-maintenancewindowruncommandparameters-cloudwatchoutputconfig
         */
        readonly cloudWatchOutputConfig?: CfnMaintenanceWindowTask.CloudWatchOutputConfigProperty | cdk.IResolvable;
        /**
         * Information about the command or commands to run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html#cfn-ssm-maintenancewindowtask-maintenancewindowruncommandparameters-comment
         */
        readonly comment?: string;
        /**
         * The SHA-256 or SHA-1 hash created by the system when the document was created.
         *
         * SHA-1 hashes have been deprecated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html#cfn-ssm-maintenancewindowtask-maintenancewindowruncommandparameters-documenthash
         */
        readonly documentHash?: string;
        /**
         * The SHA-256 or SHA-1 hash type.
         *
         * SHA-1 hashes are deprecated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html#cfn-ssm-maintenancewindowtask-maintenancewindowruncommandparameters-documenthashtype
         */
        readonly documentHashType?: string;
        /**
         * The AWS Systems Manager document (SSM document) version to use in the request.
         *
         * You can specify `$DEFAULT` , `$LATEST` , or a specific version number. If you run commands by using the AWS CLI, then you must escape the first two options by using a backslash. If you specify a version number, then you don't need to use the backslash. For example:
         *
         * `--document-version "\$DEFAULT"`
         *
         * `--document-version "\$LATEST"`
         *
         * `--document-version "3"`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html#cfn-ssm-maintenancewindowtask-maintenancewindowruncommandparameters-documentversion
         */
        readonly documentVersion?: string;
        /**
         * Configurations for sending notifications about command status changes on a per-managed node basis.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html#cfn-ssm-maintenancewindowtask-maintenancewindowruncommandparameters-notificationconfig
         */
        readonly notificationConfig?: cdk.IResolvable | CfnMaintenanceWindowTask.NotificationConfigProperty;
        /**
         * The name of the Amazon Simple Storage Service (Amazon S3) bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html#cfn-ssm-maintenancewindowtask-maintenancewindowruncommandparameters-outputs3bucketname
         */
        readonly outputS3BucketName?: string;
        /**
         * The S3 bucket subfolder.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html#cfn-ssm-maintenancewindowtask-maintenancewindowruncommandparameters-outputs3keyprefix
         */
        readonly outputS3KeyPrefix?: string;
        /**
         * The parameters for the `RUN_COMMAND` task execution.
         *
         * The supported parameters are the same as those for the `SendCommand` API call. For more information, see [SendCommand](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_SendCommand.html) in the *AWS Systems Manager API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html#cfn-ssm-maintenancewindowtask-maintenancewindowruncommandparameters-parameters
         */
        readonly parameters?: any | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) of the IAM service role for AWS Systems Manager to assume when running a maintenance window task.
         *
         * If you do not specify a service role ARN, Systems Manager uses a service-linked role in your account. If no appropriate service-linked role for Systems Manager exists in your account, it is created when you run `RegisterTaskWithMaintenanceWindow` .
         *
         * However, for an improved security posture, we strongly recommend creating a custom policy and custom service role for running your maintenance window tasks. The policy can be crafted to provide only the permissions needed for your particular maintenance window tasks. For more information, see [Setting up Maintenance Windows](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-permissions.html) in the in the *AWS Systems Manager User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html#cfn-ssm-maintenancewindowtask-maintenancewindowruncommandparameters-servicerolearn
         */
        readonly serviceRoleArn?: string;
        /**
         * If this time is reached and the command hasn't already started running, it doesn't run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html#cfn-ssm-maintenancewindowtask-maintenancewindowruncommandparameters-timeoutseconds
         */
        readonly timeoutSeconds?: number;
    }
    /**
     * Configuration options for sending command output to Amazon CloudWatch Logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-cloudwatchoutputconfig.html
     */
    interface CloudWatchOutputConfigProperty {
        /**
         * The name of the CloudWatch Logs log group where you want to send command output.
         *
         * If you don't specify a group name, AWS Systems Manager automatically creates a log group for you. The log group uses the following naming format:
         *
         * `aws/ssm/ *SystemsManagerDocumentName*`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-cloudwatchoutputconfig.html#cfn-ssm-maintenancewindowtask-cloudwatchoutputconfig-cloudwatchloggroupname
         */
        readonly cloudWatchLogGroupName?: string;
        /**
         * Enables Systems Manager to send command output to CloudWatch Logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-cloudwatchoutputconfig.html#cfn-ssm-maintenancewindowtask-cloudwatchoutputconfig-cloudwatchoutputenabled
         */
        readonly cloudWatchOutputEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * The `NotificationConfig` property type specifies configurations for sending notifications for a maintenance window task in AWS Systems Manager .
     *
     * `NotificationConfig` is a property of the [MaintenanceWindowRunCommandParameters](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-notificationconfig.html
     */
    interface NotificationConfigProperty {
        /**
         * An Amazon Resource Name (ARN) for an Amazon Simple Notification Service (Amazon SNS) topic.
         *
         * Run Command pushes notifications about command status changes to this topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-notificationconfig.html#cfn-ssm-maintenancewindowtask-notificationconfig-notificationarn
         */
        readonly notificationArn: string;
        /**
         * The different events that you can receive notifications for.
         *
         * These events include the following: `All` (events), `InProgress` , `Success` , `TimedOut` , `Cancelled` , `Failed` . To learn more about these events, see [Configuring Amazon SNS Notifications for AWS Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/monitoring-sns-notifications.html) in the *AWS Systems Manager User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-notificationconfig.html#cfn-ssm-maintenancewindowtask-notificationconfig-notificationevents
         */
        readonly notificationEvents?: Array<string>;
        /**
         * The notification type.
         *
         * - `Command` : Receive notification when the status of a command changes.
         * - `Invocation` : For commands sent to multiple instances, receive notification on a per-instance basis when the status of a command changes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-notificationconfig.html#cfn-ssm-maintenancewindowtask-notificationconfig-notificationtype
         */
        readonly notificationType?: string;
    }
    /**
     * The `MaintenanceWindowAutomationParameters` property type specifies the parameters for an `AUTOMATION` task type for a maintenance window task in AWS Systems Manager .
     *
     * `MaintenanceWindowAutomationParameters` is a property of the [TaskInvocationParameters](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-taskinvocationparameters.html) property type.
     *
     * For information about available parameters in Automation runbooks, you can view the content of the runbook itself in the Systems Manager console. For information, see [View runbook content](https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-documents-reference-details.html#view-automation-json) in the *AWS Systems Manager User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowautomationparameters.html
     */
    interface MaintenanceWindowAutomationParametersProperty {
        /**
         * The version of an Automation runbook to use during task execution.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowautomationparameters.html#cfn-ssm-maintenancewindowtask-maintenancewindowautomationparameters-documentversion
         */
        readonly documentVersion?: string;
        /**
         * The parameters for the `AUTOMATION` type task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowautomationparameters.html#cfn-ssm-maintenancewindowtask-maintenancewindowautomationparameters-parameters
         */
        readonly parameters?: any | cdk.IResolvable;
    }
    /**
     * The `MaintenanceWindowStepFunctionsParameters` property type specifies the parameters for the execution of a `STEP_FUNCTIONS` task in a Systems Manager maintenance window.
     *
     * `MaintenanceWindowStepFunctionsParameters` is a property of the [TaskInvocationParameters](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-taskinvocationparameters.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters.html
     */
    interface MaintenanceWindowStepFunctionsParametersProperty {
        /**
         * The inputs for the `STEP_FUNCTIONS` task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters.html#cfn-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters-input
         */
        readonly input?: string;
        /**
         * The name of the `STEP_FUNCTIONS` task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters.html#cfn-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters-name
         */
        readonly name?: string;
    }
    /**
     * The `MaintenanceWindowLambdaParameters` property type specifies the parameters for a `LAMBDA` task type for a maintenance window task in AWS Systems Manager .
     *
     * `MaintenanceWindowLambdaParameters` is a property of the [TaskInvocationParameters](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-taskinvocationparameters.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowlambdaparameters.html
     */
    interface MaintenanceWindowLambdaParametersProperty {
        /**
         * Client-specific information to pass to the AWS Lambda function that you're invoking.
         *
         * You can then use the `context` variable to process the client information in your AWS Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowlambdaparameters.html#cfn-ssm-maintenancewindowtask-maintenancewindowlambdaparameters-clientcontext
         */
        readonly clientContext?: string;
        /**
         * JSON to provide to your AWS Lambda function as input.
         *
         * > Although `Type` is listed as "String" for this property, the payload content must be formatted as a Base64-encoded binary data object.
         *
         * *Length Constraint:* 4096
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowlambdaparameters.html#cfn-ssm-maintenancewindowtask-maintenancewindowlambdaparameters-payload
         */
        readonly payload?: string;
        /**
         * An AWS Lambda function version or alias name.
         *
         * If you specify a function version, the action uses the qualified function Amazon Resource Name (ARN) to invoke a specific Lambda function. If you specify an alias name, the action uses the alias ARN to invoke the Lambda function version that the alias points to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowlambdaparameters.html#cfn-ssm-maintenancewindowtask-maintenancewindowlambdaparameters-qualifier
         */
        readonly qualifier?: string;
    }
    /**
     * The `LoggingInfo` property type specifies information about the Amazon S3 bucket to write instance-level logs to.
     *
     * `LoggingInfo` is a property of the [AWS::SSM::MaintenanceWindowTask](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html) resource.
     *
     * > `LoggingInfo` has been deprecated. To specify an Amazon S3 bucket to contain logs, instead use the `OutputS3BucketName` and `OutputS3KeyPrefix` options in the `TaskInvocationParameters` structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see [AWS ::SSM::MaintenanceWindowTask MaintenanceWindowRunCommandParameters](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-logginginfo.html
     */
    interface LoggingInfoProperty {
        /**
         * The AWS Region where the S3 bucket is located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-logginginfo.html#cfn-ssm-maintenancewindowtask-logginginfo-region
         */
        readonly region: string;
        /**
         * The name of an S3 bucket where execution logs are stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-logginginfo.html#cfn-ssm-maintenancewindowtask-logginginfo-s3bucket
         */
        readonly s3Bucket: string;
        /**
         * The Amazon S3 bucket subfolder.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-logginginfo.html#cfn-ssm-maintenancewindowtask-logginginfo-s3prefix
         */
        readonly s3Prefix?: string;
    }
}
/**
 * Properties for defining a `CfnMaintenanceWindowTask`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html
 */
export interface CfnMaintenanceWindowTaskProps {
    /**
     * The specification for whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html#cfn-ssm-maintenancewindowtask-cutoffbehavior
     */
    readonly cutoffBehavior?: string;
    /**
     * A description of the task.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html#cfn-ssm-maintenancewindowtask-description
     */
    readonly description?: string;
    /**
     * Information about an Amazon S3 bucket to write Run Command task-level logs to.
     *
     * > `LoggingInfo` has been deprecated. To specify an Amazon S3 bucket to contain logs for Run Command tasks, instead use the `OutputS3BucketName` and `OutputS3KeyPrefix` options in the `TaskInvocationParameters` structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see [AWS ::SSM::MaintenanceWindowTask MaintenanceWindowRunCommandParameters](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html#cfn-ssm-maintenancewindowtask-logginginfo
     */
    readonly loggingInfo?: cdk.IResolvable | CfnMaintenanceWindowTask.LoggingInfoProperty;
    /**
     * The maximum number of targets this task can be run for, in parallel.
     *
     * > Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a [targetless task](https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html) You must provide a value in all other cases.
     * >
     * > For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of `1` . This value doesn't affect the running of your task.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html#cfn-ssm-maintenancewindowtask-maxconcurrency
     */
    readonly maxConcurrency?: string;
    /**
     * The maximum number of errors allowed before this task stops being scheduled.
     *
     * > Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a [targetless task](https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html) You must provide a value in all other cases.
     * >
     * > For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of `1` . This value doesn't affect the running of your task.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html#cfn-ssm-maintenancewindowtask-maxerrors
     */
    readonly maxErrors?: string;
    /**
     * The task name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html#cfn-ssm-maintenancewindowtask-name
     */
    readonly name?: string;
    /**
     * The priority of the task in the maintenance window.
     *
     * The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html#cfn-ssm-maintenancewindowtask-priority
     */
    readonly priority: number;
    /**
     * The Amazon Resource Name (ARN) of the IAM service role for AWS Systems Manager to assume when running a maintenance window task.
     *
     * If you do not specify a service role ARN, Systems Manager uses a service-linked role in your account. If no appropriate service-linked role for Systems Manager exists in your account, it is created when you run `RegisterTaskWithMaintenanceWindow` .
     *
     * However, for an improved security posture, we strongly recommend creating a custom policy and custom service role for running your maintenance window tasks. The policy can be crafted to provide only the permissions needed for your particular maintenance window tasks. For more information, see [Setting up Maintenance Windows](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-permissions.html) in the in the *AWS Systems Manager User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html#cfn-ssm-maintenancewindowtask-servicerolearn
     */
    readonly serviceRoleArn?: string;
    /**
     * The targets, either instances or window target IDs.
     *
     * - Specify instances using `Key=InstanceIds,Values= *instanceid1* , *instanceid2*` .
     * - Specify window target IDs using `Key=WindowTargetIds,Values= *window-target-id-1* , *window-target-id-2*` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html#cfn-ssm-maintenancewindowtask-targets
     */
    readonly targets?: Array<cdk.IResolvable | CfnMaintenanceWindowTask.TargetProperty> | cdk.IResolvable;
    /**
     * The resource that the task uses during execution.
     *
     * For `RUN_COMMAND` and `AUTOMATION` task types, `TaskArn` is the SSM document name or Amazon Resource Name (ARN).
     *
     * For `LAMBDA` tasks, `TaskArn` is the function name or ARN.
     *
     * For `STEP_FUNCTIONS` tasks, `TaskArn` is the state machine ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html#cfn-ssm-maintenancewindowtask-taskarn
     */
    readonly taskArn: string;
    /**
     * The parameters to pass to the task when it runs.
     *
     * Populate only the fields that match the task type. All other fields should be empty.
     *
     * > When you update a maintenance window task that has options specified in `TaskInvocationParameters` , you must provide again all the `TaskInvocationParameters` values that you want to retain. The values you do not specify again are removed. For example, suppose that when you registered a Run Command task, you specified `TaskInvocationParameters` values for `Comment` , `NotificationConfig` , and `OutputS3BucketName` . If you update the maintenance window task and specify only a different `OutputS3BucketName` value, the values for `Comment` and `NotificationConfig` are removed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html#cfn-ssm-maintenancewindowtask-taskinvocationparameters
     */
    readonly taskInvocationParameters?: cdk.IResolvable | CfnMaintenanceWindowTask.TaskInvocationParametersProperty;
    /**
     * The parameters to pass to the task when it runs.
     *
     * > `TaskParameters` has been deprecated. To specify parameters to pass to a task when it runs, instead use the `Parameters` option in the `TaskInvocationParameters` structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see [MaintenanceWindowTaskInvocationParameters](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_MaintenanceWindowTaskInvocationParameters.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html#cfn-ssm-maintenancewindowtask-taskparameters
     */
    readonly taskParameters?: any | cdk.IResolvable;
    /**
     * The type of task.
     *
     * Valid values: `RUN_COMMAND` , `AUTOMATION` , `LAMBDA` , `STEP_FUNCTIONS` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html#cfn-ssm-maintenancewindowtask-tasktype
     */
    readonly taskType: string;
    /**
     * The ID of the maintenance window where the task is registered.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html#cfn-ssm-maintenancewindowtask-windowid
     */
    readonly windowId: string;
}
/**
 * The `AWS::SSM::Parameter` resource creates an SSM parameter in AWS Systems Manager Parameter Store.
 *
 * > To create an SSM parameter, you must have the AWS Identity and Access Management ( IAM ) permissions `ssm:PutParameter` and `ssm:AddTagsToResource` . On stack creation, AWS CloudFormation adds the following three tags to the parameter: `aws:cloudformation:stack-name` , `aws:cloudformation:logical-id` , and `aws:cloudformation:stack-id` , in addition to any custom tags you specify.
 * >
 * > To add, update, or remove tags during stack update, you must have IAM permissions for both `ssm:AddTagsToResource` and `ssm:RemoveTagsFromResource` . For more information, see [Managing Access Using Policies](https://docs.aws.amazon.com/systems-manager/latest/userguide/security-iam.html#security_iam_access-manage) in the *AWS Systems Manager User Guide* .
 *
 * For information about valid values for parameters, see [About requirements and constraints for parameter names](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-su-create.html#sysman-parameter-name-constraints) in the *AWS Systems Manager User Guide* and [PutParameter](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutParameter.html) in the *AWS Systems Manager API Reference* .
 *
 * > Parameters of type `SecureString` are not supported by AWS CloudFormation .
 *
 * @cloudformationResource AWS::SSM::Parameter
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html
 */
export declare class CfnParameter extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnParameter from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnParameter;
    /**
     * Returns the type of the parameter. Valid values are `String` or `StringList` .
     *
     * @cloudformationAttribute Type
     */
    readonly attrType: string;
    /**
     * Returns the value of the parameter.
     *
     * @cloudformationAttribute Value
     */
    readonly attrValue: string;
    /**
     * A regular expression used to validate the parameter value.
     */
    allowedPattern?: string;
    /**
     * The data type of the parameter, such as `text` or `aws:ec2:image` .
     */
    dataType?: string;
    /**
     * Information about the parameter.
     */
    description?: string;
    /**
     * The name of the parameter.
     */
    name?: string;
    /**
     * Information about the policies assigned to a parameter.
     */
    policies?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs).
     */
    tagsRaw?: Record<string, string>;
    /**
     * The parameter tier.
     */
    tier?: string;
    /**
     * The type of parameter.
     */
    type: string;
    /**
     * The parameter value.
     */
    value: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnParameterProps);
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
 * Properties for defining a `CfnParameter`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html
 */
export interface CfnParameterProps {
    /**
     * A regular expression used to validate the parameter value.
     *
     * For example, for `String` types with values restricted to numbers, you can specify the following: `AllowedPattern=^\d+$`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html#cfn-ssm-parameter-allowedpattern
     */
    readonly allowedPattern?: string;
    /**
     * The data type of the parameter, such as `text` or `aws:ec2:image` .
     *
     * The default is `text` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html#cfn-ssm-parameter-datatype
     */
    readonly dataType?: string;
    /**
     * Information about the parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html#cfn-ssm-parameter-description
     */
    readonly description?: string;
    /**
     * The name of the parameter.
     *
     * > The maximum length constraint listed below includes capacity for additional system attributes that aren't part of the name. The maximum length for a parameter name, including the full length of the parameter Amazon Resource Name (ARN), is 1011 characters. For example, the length of the following parameter name is 65 characters, not 20 characters: `arn:aws:ssm:us-east-2:111222333444:parameter/ExampleParameterName`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html#cfn-ssm-parameter-name
     */
    readonly name?: string;
    /**
     * Information about the policies assigned to a parameter.
     *
     * [Assigning parameter policies](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-policies.html) in the *AWS Systems Manager User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html#cfn-ssm-parameter-policies
     */
    readonly policies?: string;
    /**
     * Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs).
     *
     * Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a Systems Manager parameter to identify the type of resource to which it applies, the environment, or the type of configuration data referenced by the parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html#cfn-ssm-parameter-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The parameter tier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html#cfn-ssm-parameter-tier
     */
    readonly tier?: string;
    /**
     * The type of parameter.
     *
     * > Parameters of type `SecureString` are not supported by AWS CloudFormation .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html#cfn-ssm-parameter-type
     */
    readonly type: string;
    /**
     * The parameter value.
     *
     * > If type is `StringList` , the system returns a comma-separated string with no spaces between commas in the `Value` field.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html#cfn-ssm-parameter-value
     */
    readonly value: string;
}
/**
 * The `AWS::SSM::PatchBaseline` resource defines the basic information for an AWS Systems Manager patch baseline.
 *
 * A patch baseline defines which patches are approved for installation on your instances.
 *
 * For more information, see [CreatePatchBaseline](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreatePatchBaseline.html) in the *AWS Systems Manager API Reference* .
 *
 * @cloudformationResource AWS::SSM::PatchBaseline
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html
 */
export declare class CfnPatchBaseline extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPatchBaseline from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPatchBaseline;
    /**
     * The ID of the patch baseline.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A set of rules used to include patches in the baseline.
     */
    approvalRules?: cdk.IResolvable | CfnPatchBaseline.RuleGroupProperty;
    /**
     * A list of explicitly approved patches for the baseline.
     */
    approvedPatches?: Array<string>;
    /**
     * Defines the compliance level for approved patches.
     */
    approvedPatchesComplianceLevel?: string;
    /**
     * Indicates whether the list of approved patches includes non-security updates that should be applied to the managed nodes.
     */
    approvedPatchesEnableNonSecurity?: boolean | cdk.IResolvable;
    /**
     * Indicates whether this is the default baseline.
     */
    defaultBaseline?: boolean | cdk.IResolvable;
    /**
     * A description of the patch baseline.
     */
    description?: string;
    /**
     * A set of global filters used to include patches in the baseline.
     */
    globalFilters?: cdk.IResolvable | CfnPatchBaseline.PatchFilterGroupProperty;
    /**
     * The name of the patch baseline.
     */
    name: string;
    /**
     * Defines the operating system the patch baseline applies to.
     */
    operatingSystem?: string;
    /**
     * The name of the patch group to be registered with the patch baseline.
     */
    patchGroups?: Array<string>;
    /**
     * A list of explicitly rejected patches for the baseline.
     */
    rejectedPatches?: Array<string>;
    /**
     * The action for Patch Manager to take on patches included in the `RejectedPackages` list.
     */
    rejectedPatchesAction?: string;
    /**
     * Information about the patches to use to update the managed nodes, including target operating systems and source repositories.
     */
    sources?: Array<cdk.IResolvable | CfnPatchBaseline.PatchSourceProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Optional metadata that you assign to a resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPatchBaselineProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPatchBaseline {
    /**
     * The `RuleGroup` property type specifies a set of rules that define the approval rules for an AWS Systems Manager patch baseline.
     *
     * `RuleGroup` is the property type for the `ApprovalRules` property of the [AWS::SSM::PatchBaseline](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rulegroup.html
     */
    interface RuleGroupProperty {
        /**
         * The rules that make up the rule group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rulegroup.html#cfn-ssm-patchbaseline-rulegroup-patchrules
         */
        readonly patchRules?: Array<cdk.IResolvable | CfnPatchBaseline.RuleProperty> | cdk.IResolvable;
    }
    /**
     * The `Rule` property type specifies an approval rule for a Systems Manager patch baseline.
     *
     * The `PatchRules` property of the [RuleGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rulegroup.html) property type contains a list of `Rule` property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rule.html
     */
    interface RuleProperty {
        /**
         * The number of days after the release date of each patch matched by the rule that the patch is marked as approved in the patch baseline.
         *
         * For example, a value of `7` means that patches are approved seven days after they are released.
         *
         * This parameter is marked as `Required: No` , but your request must include a value for either `ApproveAfterDays` or `ApproveUntilDate` .
         *
         * Not supported for Debian Server or Ubuntu Server.
         *
         * > Use caution when setting this value for Windows Server patch baselines. Because patch updates that are replaced by later updates are removed, setting too broad a value for this parameter can result in crucial patches not being installed. For more information, see the *Windows Server* tab in the topic [How security patches are selected](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-selecting-patches.html) in the *AWS Systems Manager User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rule.html#cfn-ssm-patchbaseline-rule-approveafterdays
         */
        readonly approveAfterDays?: number;
        /**
         * The cutoff date for auto approval of released patches.
         *
         * Any patches released on or before this date are installed automatically.
         *
         * Enter dates in the format `YYYY-MM-DD` . For example, `2024-12-31` .
         *
         * This parameter is marked as `Required: No` , but your request must include a value for either `ApproveUntilDate` or `ApproveAfterDays` .
         *
         * Not supported for Debian Server or Ubuntu Server.
         *
         * > Use caution when setting this value for Windows Server patch baselines. Because patch updates that are replaced by later updates are removed, setting too broad a value for this parameter can result in crucial patches not being installed. For more information, see the *Windows Server* tab in the topic [How security patches are selected](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-selecting-patches.html) in the *AWS Systems Manager User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rule.html#cfn-ssm-patchbaseline-rule-approveuntildate
         */
        readonly approveUntilDate?: string;
        /**
         * A compliance severity level for all approved patches in a patch baseline.
         *
         * Valid compliance severity levels include the following: `UNSPECIFIED` , `CRITICAL` , `HIGH` , `MEDIUM` , `LOW` , and `INFORMATIONAL` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rule.html#cfn-ssm-patchbaseline-rule-compliancelevel
         */
        readonly complianceLevel?: string;
        /**
         * For managed nodes identified by the approval rule filters, enables a patch baseline to apply non-security updates available in the specified repository.
         *
         * The default value is `false` . Applies to Linux managed nodes only.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rule.html#cfn-ssm-patchbaseline-rule-enablenonsecurity
         */
        readonly enableNonSecurity?: boolean | cdk.IResolvable;
        /**
         * The patch filter group that defines the criteria for the rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rule.html#cfn-ssm-patchbaseline-rule-patchfiltergroup
         */
        readonly patchFilterGroup?: cdk.IResolvable | CfnPatchBaseline.PatchFilterGroupProperty;
    }
    /**
     * The `PatchFilterGroup` property type specifies a set of patch filters for an AWS Systems Manager patch baseline, typically used for approval rules for a Systems Manager patch baseline.
     *
     * `PatchFilterGroup` is the property type for the `GlobalFilters` property of the [AWS::SSM::PatchBaseline](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html) resource and the `PatchFilterGroup` property of the [Rule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rule.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchfiltergroup.html
     */
    interface PatchFilterGroupProperty {
        /**
         * The set of patch filters that make up the group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchfiltergroup.html#cfn-ssm-patchbaseline-patchfiltergroup-patchfilters
         */
        readonly patchFilters?: Array<cdk.IResolvable | CfnPatchBaseline.PatchFilterProperty> | cdk.IResolvable;
    }
    /**
     * The `PatchFilter` property type defines a patch filter for an AWS Systems Manager patch baseline.
     *
     * The `PatchFilters` property of the [PatchFilterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchfiltergroup.html) property type contains a list of `PatchFilter` property types.
     *
     * You can view lists of valid values for the patch properties by running the `DescribePatchProperties` command. For more information, see [DescribePatchProperties](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchProperties.html) in the *AWS Systems Manager API Reference* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchfilter.html
     */
    interface PatchFilterProperty {
        /**
         * The key for the filter.
         *
         * For information about valid keys, see [PatchFilter](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html) in the *AWS Systems Manager API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchfilter.html#cfn-ssm-patchbaseline-patchfilter-key
         */
        readonly key?: string;
        /**
         * The value for the filter key.
         *
         * For information about valid values for each key based on operating system type, see [PatchFilter](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html) in the *AWS Systems Manager API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchfilter.html#cfn-ssm-patchbaseline-patchfilter-values
         */
        readonly values?: Array<string>;
    }
    /**
     * `PatchSource` is the property type for the `Sources` resource of the [AWS::SSM::PatchBaseline](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html) resource.
     *
     * The AWS CloudFormation `AWS::SSM::PatchSource` resource is used to provide information about the patches to use to update target instances, including target operating systems and source repository. Applies to Linux managed nodes only.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchsource.html
     */
    interface PatchSourceProperty {
        /**
         * The value of the yum repo configuration. For example:.
         *
         * `[main]`
         *
         * `name=MyCustomRepository`
         *
         * `baseurl=https://my-custom-repository`
         *
         * `enabled=1`
         *
         * > For information about other options available for your yum repository configuration, see [dnf.conf(5)](https://docs.aws.amazon.com/https://man7.org/linux/man-pages/man5/dnf.conf.5.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchsource.html#cfn-ssm-patchbaseline-patchsource-configuration
         */
        readonly configuration?: string;
        /**
         * The name specified to identify the patch source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchsource.html#cfn-ssm-patchbaseline-patchsource-name
         */
        readonly name?: string;
        /**
         * The specific operating system versions a patch repository applies to, such as "Ubuntu16.04", "RedhatEnterpriseLinux7.2" or "Suse12.7". For lists of supported product values, see [PatchFilter](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html) in the *AWS Systems Manager API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchsource.html#cfn-ssm-patchbaseline-patchsource-products
         */
        readonly products?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnPatchBaseline`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html
 */
export interface CfnPatchBaselineProps {
    /**
     * A set of rules used to include patches in the baseline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-approvalrules
     */
    readonly approvalRules?: cdk.IResolvable | CfnPatchBaseline.RuleGroupProperty;
    /**
     * A list of explicitly approved patches for the baseline.
     *
     * For information about accepted formats for lists of approved patches and rejected patches, see [Package name formats for approved and rejected patch lists](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html) in the *AWS Systems Manager User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-approvedpatches
     */
    readonly approvedPatches?: Array<string>;
    /**
     * Defines the compliance level for approved patches.
     *
     * When an approved patch is reported as missing, this value describes the severity of the compliance violation. The default value is `UNSPECIFIED` .
     *
     * @default - "UNSPECIFIED"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-approvedpatchescompliancelevel
     */
    readonly approvedPatchesComplianceLevel?: string;
    /**
     * Indicates whether the list of approved patches includes non-security updates that should be applied to the managed nodes.
     *
     * The default value is `false` . Applies to Linux managed nodes only.
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-approvedpatchesenablenonsecurity
     */
    readonly approvedPatchesEnableNonSecurity?: boolean | cdk.IResolvable;
    /**
     * Indicates whether this is the default baseline.
     *
     * AWS Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system.
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-defaultbaseline
     */
    readonly defaultBaseline?: boolean | cdk.IResolvable;
    /**
     * A description of the patch baseline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-description
     */
    readonly description?: string;
    /**
     * A set of global filters used to include patches in the baseline.
     *
     * > The `GlobalFilters` parameter can be configured only by using the AWS CLI or an AWS SDK. It can't be configured from the Patch Manager console, and its value isn't displayed in the console.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-globalfilters
     */
    readonly globalFilters?: cdk.IResolvable | CfnPatchBaseline.PatchFilterGroupProperty;
    /**
     * The name of the patch baseline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-name
     */
    readonly name: string;
    /**
     * Defines the operating system the patch baseline applies to.
     *
     * The default value is `WINDOWS` .
     *
     * @default - "WINDOWS"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-operatingsystem
     */
    readonly operatingSystem?: string;
    /**
     * The name of the patch group to be registered with the patch baseline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-patchgroups
     */
    readonly patchGroups?: Array<string>;
    /**
     * A list of explicitly rejected patches for the baseline.
     *
     * For information about accepted formats for lists of approved patches and rejected patches, see [Package name formats for approved and rejected patch lists](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html) in the *AWS Systems Manager User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-rejectedpatches
     */
    readonly rejectedPatches?: Array<string>;
    /**
     * The action for Patch Manager to take on patches included in the `RejectedPackages` list.
     *
     * - **ALLOW_AS_DEPENDENCY** - *Linux and macOS* : A package in the rejected patches list is installed only if it is a dependency of another package. It is considered compliant with the patch baseline, and its status is reported as `INSTALLED_OTHER` . This is the default action if no option is specified.
     *
     * *Windows Server* : Windows Server doesn't support the concept of package dependencies. If a package in the rejected patches list and already installed on the node, its status is reported as `INSTALLED_OTHER` . Any package not already installed on the node is skipped. This is the default action if no option is specified.
     * - **BLOCK** - *All OSs* : Packages in the rejected patches list, and packages that include them as dependencies, aren't installed by Patch Manager under any circumstances. If a package was installed before it was added to the rejected patches list, or is installed outside of Patch Manager afterward, it's considered noncompliant with the patch baseline and its status is reported as `INSTALLED_REJECTED` .
     *
     * @default - "ALLOW_AS_DEPENDENCY"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-rejectedpatchesaction
     */
    readonly rejectedPatchesAction?: string;
    /**
     * Information about the patches to use to update the managed nodes, including target operating systems and source repositories.
     *
     * Applies to Linux managed nodes only.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-sources
     */
    readonly sources?: Array<cdk.IResolvable | CfnPatchBaseline.PatchSourceProperty> | cdk.IResolvable;
    /**
     * Optional metadata that you assign to a resource.
     *
     * Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a patch baseline to identify the severity level of patches it specifies and the operating system family it applies to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::SSM::ResourceDataSync` resource creates, updates, or deletes a resource data sync for AWS Systems Manager .
 *
 * A resource data sync helps you view data from multiple sources in a single location. Systems Manager offers two types of resource data sync: `SyncToDestination` and `SyncFromSource` .
 *
 * You can configure Systems Manager Inventory to use the `SyncToDestination` type to synchronize Inventory data from multiple AWS Regions to a single Amazon S3 bucket.
 *
 * You can configure Systems Manager Explorer to use the `SyncFromSource` type to synchronize operational work items (OpsItems) and operational data (OpsData) from multiple AWS Regions . This type can synchronize OpsItems and OpsData from multiple AWS accounts and Regions or from an `EntireOrganization` by using AWS Organizations .
 *
 * A resource data sync is an asynchronous operation that returns immediately. After a successful initial sync is completed, the system continuously syncs data.
 *
 * By default, data is not encrypted in Amazon S3 . We strongly recommend that you enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3 bucket by creating a restrictive bucket policy.
 *
 * For more information, see [Configuring Inventory Collection](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-configuring.html#sysman-inventory-datasync) and [Setting Up Systems Manager Explorer to Display Data from Multiple Accounts and Regions](https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html) in the *AWS Systems Manager User Guide* .
 *
 * > The following *Syntax* section shows all fields that are supported for a resource data sync. The *Examples* section below shows the recommended way to specify configurations for each sync type. Refer to the *Examples* section when you create your resource data sync.
 *
 * @cloudformationResource AWS::SSM::ResourceDataSync
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html
 */
export declare class CfnResourceDataSync extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResourceDataSync from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResourceDataSync;
    /**
     * @cloudformationAttribute SyncName
     */
    readonly attrSyncName: string;
    /**
     * The name of the S3 bucket where the aggregated data is stored.
     */
    bucketName?: string;
    /**
     * An Amazon S3 prefix for the bucket.
     */
    bucketPrefix?: string;
    /**
     * The AWS Region with the S3 bucket targeted by the resource data sync.
     */
    bucketRegion?: string;
    /**
     * The Amazon Resource Name (ARN) of an encryption key for a destination in Amazon S3 .
     */
    kmsKeyArn?: string;
    /**
     * Configuration information for the target S3 bucket.
     */
    s3Destination?: cdk.IResolvable | CfnResourceDataSync.S3DestinationProperty;
    /**
     * A supported sync format.
     */
    syncFormat?: string;
    /**
     * A name for the resource data sync.
     */
    syncName: string;
    /**
     * Information about the source where the data was synchronized.
     */
    syncSource?: cdk.IResolvable | CfnResourceDataSync.SyncSourceProperty;
    /**
     * The type of resource data sync.
     */
    syncType?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourceDataSyncProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnResourceDataSync {
    /**
     * Information about the target S3 bucket for the resource data sync.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-s3destination.html
     */
    interface S3DestinationProperty {
        /**
         * The name of the S3 bucket where the aggregated data is stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-s3destination.html#cfn-ssm-resourcedatasync-s3destination-bucketname
         */
        readonly bucketName: string;
        /**
         * An Amazon S3 prefix for the bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-s3destination.html#cfn-ssm-resourcedatasync-s3destination-bucketprefix
         */
        readonly bucketPrefix?: string;
        /**
         * The AWS Region with the S3 bucket targeted by the resource data sync.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-s3destination.html#cfn-ssm-resourcedatasync-s3destination-bucketregion
         */
        readonly bucketRegion: string;
        /**
         * The ARN of an encryption key for a destination in Amazon S3.
         *
         * Must belong to the same Region as the destination S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-s3destination.html#cfn-ssm-resourcedatasync-s3destination-kmskeyarn
         */
        readonly kmsKeyArn?: string;
        /**
         * A supported sync format.
         *
         * The following format is currently supported: JsonSerDe
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-s3destination.html#cfn-ssm-resourcedatasync-s3destination-syncformat
         */
        readonly syncFormat: string;
    }
    /**
     * Information about the source of the data included in the resource data sync.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-syncsource.html
     */
    interface SyncSourceProperty {
        /**
         * Information about the AwsOrganizationsSource resource data sync source.
         *
         * A sync source of this type can synchronize data from AWS Organizations .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-syncsource.html#cfn-ssm-resourcedatasync-syncsource-awsorganizationssource
         */
        readonly awsOrganizationsSource?: CfnResourceDataSync.AwsOrganizationsSourceProperty | cdk.IResolvable;
        /**
         * Whether to automatically synchronize and aggregate data from new AWS Regions when those Regions come online.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-syncsource.html#cfn-ssm-resourcedatasync-syncsource-includefutureregions
         */
        readonly includeFutureRegions?: boolean | cdk.IResolvable;
        /**
         * The `SyncSource` AWS Regions included in the resource data sync.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-syncsource.html#cfn-ssm-resourcedatasync-syncsource-sourceregions
         */
        readonly sourceRegions: Array<string>;
        /**
         * The type of data source for the resource data sync.
         *
         * `SourceType` is either `AwsOrganizations` (if an organization is present in AWS Organizations ) or `SingleAccountMultiRegions` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-syncsource.html#cfn-ssm-resourcedatasync-syncsource-sourcetype
         */
        readonly sourceType: string;
    }
    /**
     * Information about the `AwsOrganizationsSource` resource data sync source.
     *
     * A sync source of this type can synchronize data from AWS Organizations or, if an AWS organization isn't present, from multiple AWS Regions .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-awsorganizationssource.html
     */
    interface AwsOrganizationsSourceProperty {
        /**
         * The AWS Organizations organization units included in the sync.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-awsorganizationssource.html#cfn-ssm-resourcedatasync-awsorganizationssource-organizationalunits
         */
        readonly organizationalUnits?: Array<string>;
        /**
         * If an AWS organization is present, this is either `OrganizationalUnits` or `EntireOrganization` .
         *
         * For `OrganizationalUnits` , the data is aggregated from a set of organization units. For `EntireOrganization` , the data is aggregated from the entire AWS organization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-awsorganizationssource.html#cfn-ssm-resourcedatasync-awsorganizationssource-organizationsourcetype
         */
        readonly organizationSourceType: string;
    }
}
/**
 * Properties for defining a `CfnResourceDataSync`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html
 */
export interface CfnResourceDataSyncProps {
    /**
     * The name of the S3 bucket where the aggregated data is stored.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html#cfn-ssm-resourcedatasync-bucketname
     */
    readonly bucketName?: string;
    /**
     * An Amazon S3 prefix for the bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html#cfn-ssm-resourcedatasync-bucketprefix
     */
    readonly bucketPrefix?: string;
    /**
     * The AWS Region with the S3 bucket targeted by the resource data sync.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html#cfn-ssm-resourcedatasync-bucketregion
     */
    readonly bucketRegion?: string;
    /**
     * The Amazon Resource Name (ARN) of an encryption key for a destination in Amazon S3 .
     *
     * You can use a KMS key to encrypt inventory data in Amazon S3 . You must specify a key that exist in the same AWS Region as the destination Amazon S3 bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html#cfn-ssm-resourcedatasync-kmskeyarn
     */
    readonly kmsKeyArn?: string;
    /**
     * Configuration information for the target S3 bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html#cfn-ssm-resourcedatasync-s3destination
     */
    readonly s3Destination?: cdk.IResolvable | CfnResourceDataSync.S3DestinationProperty;
    /**
     * A supported sync format.
     *
     * The following format is currently supported: JsonSerDe
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html#cfn-ssm-resourcedatasync-syncformat
     */
    readonly syncFormat?: string;
    /**
     * A name for the resource data sync.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html#cfn-ssm-resourcedatasync-syncname
     */
    readonly syncName: string;
    /**
     * Information about the source where the data was synchronized.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html#cfn-ssm-resourcedatasync-syncsource
     */
    readonly syncSource?: cdk.IResolvable | CfnResourceDataSync.SyncSourceProperty;
    /**
     * The type of resource data sync.
     *
     * If `SyncType` is `SyncToDestination` , then the resource data sync synchronizes data to an S3 bucket. If the `SyncType` is `SyncFromSource` then the resource data sync synchronizes data from AWS Organizations or from multiple AWS Regions .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html#cfn-ssm-resourcedatasync-synctype
     */
    readonly syncType?: string;
}
/**
 * Creates or updates a Systems Manager resource policy.
 *
 * A resource policy helps you to define the IAM entity (for example, an AWS account ) that can manage your Systems Manager resources. Currently, `OpsItemGroup` is the only resource that supports Systems Manager resource policies. The resource policy for `OpsItemGroup` enables AWS accounts to view and interact with OpsCenter operational work items (OpsItems). OpsCenter is a tool in Systems Manager .
 *
 * @cloudformationResource AWS::SSM::ResourcePolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcepolicy.html
 */
export declare class CfnResourcePolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResourcePolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResourcePolicy;
    /**
     * ID of the current policy version. The hash helps to prevent a situation where multiple users attempt to overwrite a policy. You must provide this hash and the policy ID when updating or deleting a policy.
     *
     * @cloudformationAttribute PolicyHash
     */
    readonly attrPolicyHash: string;
    /**
     * ID of the current policy version.
     *
     * @cloudformationAttribute PolicyId
     */
    readonly attrPolicyId: string;
    /**
     * A policy you want to associate with a resource.
     */
    policy: any | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the resource to which you want to attach a policy.
     */
    resourceArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourcePolicyProps);
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
 * Properties for defining a `CfnResourcePolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcepolicy.html
 */
export interface CfnResourcePolicyProps {
    /**
     * A policy you want to associate with a resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcepolicy.html#cfn-ssm-resourcepolicy-policy
     */
    readonly policy: any | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the resource to which you want to attach a policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcepolicy.html#cfn-ssm-resourcepolicy-resourcearn
     */
    readonly resourceArn: string;
}
