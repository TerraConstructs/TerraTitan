import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::AuditManager::Assessment` resource is an Audit Manager resource type that defines the scope of audit evidence collected by Audit Manager .
 *
 * An Audit Manager assessment is an implementation of an Audit Manager framework.
 *
 * @cloudformationResource AWS::AuditManager::Assessment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html
 */
export declare class CfnAssessment extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAssessment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAssessment;
    /**
     * The Amazon Resource Name (ARN) of the assessment.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The unique identifier for the assessment.
     *
     * @cloudformationAttribute AssessmentId
     */
    readonly attrAssessmentId: string;
    /**
     * Specifies when the assessment was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: cdk.IResolvable;
    /**
     * The destination that evidence reports are stored in for the assessment.
     */
    assessmentReportsDestination?: CfnAssessment.AssessmentReportsDestinationProperty | cdk.IResolvable;
    /**
     * The AWS account that's associated with the assessment.
     */
    awsAccount?: CfnAssessment.AWSAccountProperty | cdk.IResolvable;
    /**
     * The delegations that are associated with the assessment.
     */
    delegations?: Array<CfnAssessment.DelegationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the assessment.
     */
    description?: string;
    /**
     * The unique identifier for the framework.
     */
    frameworkId?: string;
    /**
     * The name of the assessment.
     */
    name?: string;
    /**
     * The roles that are associated with the assessment.
     */
    roles?: Array<cdk.IResolvable | CfnAssessment.RoleProperty> | cdk.IResolvable;
    /**
     * The wrapper of AWS accounts and services that are in scope for the assessment.
     */
    scope?: cdk.IResolvable | CfnAssessment.ScopeProperty;
    /**
     * The overall status of the assessment.
     */
    status?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags that are associated with the assessment.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnAssessmentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAssessment {
    /**
     * The `AssessmentReportsDestination` property type specifies the location in which AWS Audit Manager saves assessment reports for the given assessment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-assessmentreportsdestination.html
     */
    interface AssessmentReportsDestinationProperty {
        /**
         * The destination bucket where Audit Manager stores assessment reports.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-assessmentreportsdestination.html#cfn-auditmanager-assessment-assessmentreportsdestination-destination
         */
        readonly destination?: string;
        /**
         * The destination type, such as Amazon S3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-assessmentreportsdestination.html#cfn-auditmanager-assessment-assessmentreportsdestination-destinationtype
         */
        readonly destinationType?: string;
    }
    /**
     * The `Delegation` property type specifies the assignment of a control set to a delegate for review.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html
     */
    interface DelegationProperty {
        /**
         * The identifier for the assessment that's associated with the delegation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-assessmentid
         */
        readonly assessmentId?: string;
        /**
         * The name of the assessment that's associated with the delegation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-assessmentname
         */
        readonly assessmentName?: string;
        /**
         * The comment that's related to the delegation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-comment
         */
        readonly comment?: string;
        /**
         * The identifier for the control set that's associated with the delegation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-controlsetid
         */
        readonly controlSetId?: string;
        /**
         * The user or role that created the delegation.
         *
         * *Minimum* : `1`
         *
         * *Maximum* : `100`
         *
         * *Pattern* : `^[a-zA-Z0-9-_()\\[\\]\\s]+$`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-createdby
         */
        readonly createdBy?: string;
        /**
         * Specifies when the delegation was created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-creationtime
         */
        readonly creationTime?: number;
        /**
         * The unique identifier for the delegation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-id
         */
        readonly id?: string;
        /**
         * Specifies when the delegation was last updated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-lastupdated
         */
        readonly lastUpdated?: number;
        /**
         * The Amazon Resource Name (ARN) of the IAM role.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-rolearn
         */
        readonly roleArn?: string;
        /**
         * The type of customer persona.
         *
         * > In `CreateAssessment` , `roleType` can only be `PROCESS_OWNER` .
         * >
         * > In `UpdateSettings` , `roleType` can only be `PROCESS_OWNER` .
         * >
         * > In `BatchCreateDelegationByAssessment` , `roleType` can only be `RESOURCE_OWNER` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-roletype
         */
        readonly roleType?: string;
        /**
         * The status of the delegation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-status
         */
        readonly status?: string;
    }
    /**
     * The `Scope` property type specifies the wrapper that contains the AWS accounts and services that are in scope for the assessment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-scope.html
     */
    interface ScopeProperty {
        /**
         * The AWS accounts that are included in the scope of the assessment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-scope.html#cfn-auditmanager-assessment-scope-awsaccounts
         */
        readonly awsAccounts?: Array<CfnAssessment.AWSAccountProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The AWS services that are included in the scope of the assessment.
         *
         * > This API parameter is no longer supported. If you use this parameter to specify one or more AWS services , Audit Manager ignores this input. Instead, the value for `awsServices` will show as empty.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-scope.html#cfn-auditmanager-assessment-scope-awsservices
         */
        readonly awsServices?: Array<CfnAssessment.AWSServiceProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * The `AWSAccount` property type specifies the wrapper of the AWS account details, such as account ID, email address, and so on.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-awsaccount.html
     */
    interface AWSAccountProperty {
        /**
         * The email address that's associated with the AWS account .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-awsaccount.html#cfn-auditmanager-assessment-awsaccount-emailaddress
         */
        readonly emailAddress?: string;
        /**
         * The identifier for the AWS account .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-awsaccount.html#cfn-auditmanager-assessment-awsaccount-id
         */
        readonly id?: string;
        /**
         * The name of the AWS account .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-awsaccount.html#cfn-auditmanager-assessment-awsaccount-name
         */
        readonly name?: string;
    }
    /**
     * The `AWSService` property type specifies an AWS service such as Amazon S3 , AWS CloudTrail , and so on.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-awsservice.html
     */
    interface AWSServiceProperty {
        /**
         * The name of the AWS service .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-awsservice.html#cfn-auditmanager-assessment-awsservice-servicename
         */
        readonly serviceName?: string;
    }
    /**
     * The `Role` property type specifies the wrapper that contains AWS Audit Manager role information, such as the role type and IAM Amazon Resource Name (ARN).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-role.html
     */
    interface RoleProperty {
        /**
         * The Amazon Resource Name (ARN) of the IAM role.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-role.html#cfn-auditmanager-assessment-role-rolearn
         */
        readonly roleArn?: string;
        /**
         * The type of customer persona.
         *
         * > In `CreateAssessment` , `roleType` can only be `PROCESS_OWNER` .
         * >
         * > In `UpdateSettings` , `roleType` can only be `PROCESS_OWNER` .
         * >
         * > In `BatchCreateDelegationByAssessment` , `roleType` can only be `RESOURCE_OWNER` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-role.html#cfn-auditmanager-assessment-role-roletype
         */
        readonly roleType?: string;
    }
}
/**
 * Properties for defining a `CfnAssessment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html
 */
export interface CfnAssessmentProps {
    /**
     * The destination that evidence reports are stored in for the assessment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-assessmentreportsdestination
     */
    readonly assessmentReportsDestination?: CfnAssessment.AssessmentReportsDestinationProperty | cdk.IResolvable;
    /**
     * The AWS account that's associated with the assessment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-awsaccount
     */
    readonly awsAccount?: CfnAssessment.AWSAccountProperty | cdk.IResolvable;
    /**
     * The delegations that are associated with the assessment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-delegations
     */
    readonly delegations?: Array<CfnAssessment.DelegationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the assessment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-description
     */
    readonly description?: string;
    /**
     * The unique identifier for the framework.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-frameworkid
     */
    readonly frameworkId?: string;
    /**
     * The name of the assessment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-name
     */
    readonly name?: string;
    /**
     * The roles that are associated with the assessment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-roles
     */
    readonly roles?: Array<cdk.IResolvable | CfnAssessment.RoleProperty> | cdk.IResolvable;
    /**
     * The wrapper of AWS accounts and services that are in scope for the assessment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-scope
     */
    readonly scope?: cdk.IResolvable | CfnAssessment.ScopeProperty;
    /**
     * The overall status of the assessment.
     *
     * When you create a new assessment, the initial `Status` value is always `ACTIVE` . When you create an assessment, even if you specify the value as `INACTIVE` , the value overrides to `ACTIVE` .
     *
     * After you create an assessment, you can change the value of the `Status` property at any time. For example, when you want to stop collecting evidence for your assessment, you can change the assessment status to `INACTIVE` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-status
     */
    readonly status?: string;
    /**
     * The tags that are associated with the assessment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
