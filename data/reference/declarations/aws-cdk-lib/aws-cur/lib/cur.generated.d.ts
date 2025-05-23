import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The definition of AWS Cost and Usage Report.
 *
 * You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition.
 *
 * @cloudformationResource AWS::CUR::ReportDefinition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html
 */
export declare class CfnReportDefinition extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnReportDefinition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnReportDefinition;
    /**
     * A list of manifests that you want AWS to create for this report.
     */
    additionalArtifacts?: Array<string>;
    /**
     * A list of strings that indicate additional content that AWS includes in the report, such as individual resource IDs.
     */
    additionalSchemaElements?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the billing view.
     */
    billingViewArn?: string;
    /**
     * The compression format that Amazon Web Services uses for the report.
     */
    compression: string;
    /**
     * The format that Amazon Web Services saves the report in.
     */
    format: string;
    /**
     * Whether you want AWS to update your reports after they have been finalized if AWS detects charges related to previous months.
     */
    refreshClosedReports: boolean | cdk.IResolvable;
    /**
     * The name of the report that you want to create.
     */
    reportName: string;
    /**
     * Whether you want AWS to overwrite the previous version of each report or to deliver the report in addition to the previous versions.
     */
    reportVersioning: string;
    /**
     * The S3 bucket where Amazon Web Services delivers the report.
     */
    s3Bucket: string;
    /**
     * The prefix that Amazon Web Services adds to the report name when Amazon Web Services delivers the report.
     */
    s3Prefix: string;
    /**
     * The Region of the S3 bucket that Amazon Web Services delivers the report into.
     */
    s3Region: string;
    /**
     * The granularity of the line items in the report.
     */
    timeUnit: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnReportDefinitionProps);
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
 * Properties for defining a `CfnReportDefinition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html
 */
export interface CfnReportDefinitionProps {
    /**
     * A list of manifests that you want AWS to create for this report.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-additionalartifacts
     */
    readonly additionalArtifacts?: Array<string>;
    /**
     * A list of strings that indicate additional content that AWS includes in the report, such as individual resource IDs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-additionalschemaelements
     */
    readonly additionalSchemaElements?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the billing view.
     *
     * You can get this value by using the billing view service public APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-billingviewarn
     */
    readonly billingViewArn?: string;
    /**
     * The compression format that Amazon Web Services uses for the report.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-compression
     */
    readonly compression: string;
    /**
     * The format that Amazon Web Services saves the report in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-format
     */
    readonly format: string;
    /**
     * Whether you want AWS to update your reports after they have been finalized if AWS detects charges related to previous months.
     *
     * These charges can include refunds, credits, or support fees.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-refreshclosedreports
     */
    readonly refreshClosedReports: boolean | cdk.IResolvable;
    /**
     * The name of the report that you want to create.
     *
     * The name must be unique, is case sensitive, and can't include spaces.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-reportname
     */
    readonly reportName: string;
    /**
     * Whether you want AWS to overwrite the previous version of each report or to deliver the report in addition to the previous versions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-reportversioning
     */
    readonly reportVersioning: string;
    /**
     * The S3 bucket where Amazon Web Services delivers the report.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-s3bucket
     */
    readonly s3Bucket: string;
    /**
     * The prefix that Amazon Web Services adds to the report name when Amazon Web Services delivers the report.
     *
     * Your prefix can't include spaces.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-s3prefix
     */
    readonly s3Prefix: string;
    /**
     * The Region of the S3 bucket that Amazon Web Services delivers the report into.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-s3region
     */
    readonly s3Region: string;
    /**
     * The granularity of the line items in the report.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-timeunit
     */
    readonly timeUnit: string;
}
