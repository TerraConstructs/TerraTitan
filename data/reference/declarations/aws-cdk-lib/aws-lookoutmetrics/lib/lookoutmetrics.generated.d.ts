import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::LookoutMetrics::Alert` type creates an alert for an anomaly detector.
 *
 * @cloudformationResource AWS::LookoutMetrics::Alert
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html
 */
export declare class CfnAlert extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAlert from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAlert;
    /**
     * The Amazon Resource Name (ARN) of the alert. For example, `arn:aws:lookoutmetrics:us-east-2:123456789012:Alert:my-alert`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Action that will be triggered when there is an alert.
     */
    action: CfnAlert.ActionProperty | cdk.IResolvable;
    /**
     * A description of the alert.
     */
    alertDescription?: string;
    /**
     * The name of the alert.
     */
    alertName?: string;
    /**
     * An integer from 0 to 100 specifying the alert sensitivity threshold.
     */
    alertSensitivityThreshold: number;
    /**
     * The ARN of the detector to which the alert is attached.
     */
    anomalyDetectorArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAlertProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAlert {
    /**
     * A configuration that specifies the action to perform when anomalies are detected.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-alert-action.html
     */
    interface ActionProperty {
        /**
         * A configuration for an AWS Lambda channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-alert-action.html#cfn-lookoutmetrics-alert-action-lambdaconfiguration
         */
        readonly lambdaConfiguration?: cdk.IResolvable | CfnAlert.LambdaConfigurationProperty;
        /**
         * A configuration for an Amazon SNS channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-alert-action.html#cfn-lookoutmetrics-alert-action-snsconfiguration
         */
        readonly snsConfiguration?: cdk.IResolvable | CfnAlert.SNSConfigurationProperty;
    }
    /**
     * Contains information about a Lambda configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-alert-lambdaconfiguration.html
     */
    interface LambdaConfigurationProperty {
        /**
         * The ARN of the Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-alert-lambdaconfiguration.html#cfn-lookoutmetrics-alert-lambdaconfiguration-lambdaarn
         */
        readonly lambdaArn: string;
        /**
         * The ARN of an IAM role that has permission to invoke the Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-alert-lambdaconfiguration.html#cfn-lookoutmetrics-alert-lambdaconfiguration-rolearn
         */
        readonly roleArn: string;
    }
    /**
     * Contains information about the SNS topic to which you want to send your alerts and the IAM role that has access to that topic.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-alert-snsconfiguration.html
     */
    interface SNSConfigurationProperty {
        /**
         * The ARN of the IAM role that has access to the target SNS topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-alert-snsconfiguration.html#cfn-lookoutmetrics-alert-snsconfiguration-rolearn
         */
        readonly roleArn: string;
        /**
         * The ARN of the target SNS topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-alert-snsconfiguration.html#cfn-lookoutmetrics-alert-snsconfiguration-snstopicarn
         */
        readonly snsTopicArn: string;
    }
}
/**
 * Properties for defining a `CfnAlert`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html
 */
export interface CfnAlertProps {
    /**
     * Action that will be triggered when there is an alert.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html#cfn-lookoutmetrics-alert-action
     */
    readonly action: CfnAlert.ActionProperty | cdk.IResolvable;
    /**
     * A description of the alert.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html#cfn-lookoutmetrics-alert-alertdescription
     */
    readonly alertDescription?: string;
    /**
     * The name of the alert.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html#cfn-lookoutmetrics-alert-alertname
     */
    readonly alertName?: string;
    /**
     * An integer from 0 to 100 specifying the alert sensitivity threshold.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html#cfn-lookoutmetrics-alert-alertsensitivitythreshold
     */
    readonly alertSensitivityThreshold: number;
    /**
     * The ARN of the detector to which the alert is attached.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html#cfn-lookoutmetrics-alert-anomalydetectorarn
     */
    readonly anomalyDetectorArn: string;
}
/**
 * The `AWS::LookoutMetrics::AnomalyDetector` type creates an anomaly detector.
 *
 * @cloudformationResource AWS::LookoutMetrics::AnomalyDetector
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html
 */
export declare class CfnAnomalyDetector extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAnomalyDetector from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAnomalyDetector;
    /**
     * The Amazon Resource Name (ARN) of the detector. For example, `arn:aws:lookoutmetrics:us-east-2:123456789012:AnomalyDetector:my-detector`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Contains information about the configuration of the anomaly detector.
     */
    anomalyDetectorConfig: CfnAnomalyDetector.AnomalyDetectorConfigProperty | cdk.IResolvable;
    /**
     * A description of the detector.
     */
    anomalyDetectorDescription?: string;
    /**
     * The name of the detector.
     */
    anomalyDetectorName?: string;
    /**
     * The ARN of the KMS key to use to encrypt your data.
     */
    kmsKeyArn?: string;
    /**
     * The detector's dataset.
     */
    metricSetList: Array<cdk.IResolvable | CfnAnomalyDetector.MetricSetProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAnomalyDetectorProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAnomalyDetector {
    /**
     * Contains information about a detector's configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-anomalydetectorconfig.html
     */
    interface AnomalyDetectorConfigProperty {
        /**
         * The frequency at which the detector analyzes its source data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-anomalydetectorconfig.html#cfn-lookoutmetrics-anomalydetector-anomalydetectorconfig-anomalydetectorfrequency
         */
        readonly anomalyDetectorFrequency: string;
    }
    /**
     * Contains information about a dataset.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricset.html
     */
    interface MetricSetProperty {
        /**
         * A list of the fields you want to treat as dimensions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricset.html#cfn-lookoutmetrics-anomalydetector-metricset-dimensionlist
         */
        readonly dimensionList?: Array<string>;
        /**
         * A list of metrics that the dataset will contain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricset.html#cfn-lookoutmetrics-anomalydetector-metricset-metriclist
         */
        readonly metricList: Array<cdk.IResolvable | CfnAnomalyDetector.MetricProperty> | cdk.IResolvable;
        /**
         * A description of the dataset you are creating.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricset.html#cfn-lookoutmetrics-anomalydetector-metricset-metricsetdescription
         */
        readonly metricSetDescription?: string;
        /**
         * The frequency with which the source data will be analyzed for anomalies.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricset.html#cfn-lookoutmetrics-anomalydetector-metricset-metricsetfrequency
         */
        readonly metricSetFrequency?: string;
        /**
         * The name of the dataset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricset.html#cfn-lookoutmetrics-anomalydetector-metricset-metricsetname
         */
        readonly metricSetName: string;
        /**
         * Contains information about how the source data should be interpreted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricset.html#cfn-lookoutmetrics-anomalydetector-metricset-metricsource
         */
        readonly metricSource: cdk.IResolvable | CfnAnomalyDetector.MetricSourceProperty;
        /**
         * After an interval ends, the amount of seconds that the detector waits before importing data.
         *
         * Offset is only supported for S3, Redshift, Athena and datasources.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricset.html#cfn-lookoutmetrics-anomalydetector-metricset-offset
         */
        readonly offset?: number;
        /**
         * Contains information about the column used for tracking time in your source data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricset.html#cfn-lookoutmetrics-anomalydetector-metricset-timestampcolumn
         */
        readonly timestampColumn?: cdk.IResolvable | CfnAnomalyDetector.TimestampColumnProperty;
        /**
         * The time zone in which your source data was recorded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricset.html#cfn-lookoutmetrics-anomalydetector-metricset-timezone
         */
        readonly timezone?: string;
    }
    /**
     * A calculation made by contrasting a measure and a dimension from your source data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metric.html
     */
    interface MetricProperty {
        /**
         * The function with which the metric is calculated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metric.html#cfn-lookoutmetrics-anomalydetector-metric-aggregationfunction
         */
        readonly aggregationFunction: string;
        /**
         * The name of the metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metric.html#cfn-lookoutmetrics-anomalydetector-metric-metricname
         */
        readonly metricName: string;
        /**
         * The namespace for the metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metric.html#cfn-lookoutmetrics-anomalydetector-metric-namespace
         */
        readonly namespace?: string;
    }
    /**
     * Contains information about how the source data should be interpreted.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricsource.html
     */
    interface MetricSourceProperty {
        /**
         * Details about an AppFlow datasource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricsource.html#cfn-lookoutmetrics-anomalydetector-metricsource-appflowconfig
         */
        readonly appFlowConfig?: CfnAnomalyDetector.AppFlowConfigProperty | cdk.IResolvable;
        /**
         * Details about an Amazon CloudWatch monitoring datasource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricsource.html#cfn-lookoutmetrics-anomalydetector-metricsource-cloudwatchconfig
         */
        readonly cloudwatchConfig?: CfnAnomalyDetector.CloudwatchConfigProperty | cdk.IResolvable;
        /**
         * Details about an Amazon Relational Database Service (RDS) datasource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricsource.html#cfn-lookoutmetrics-anomalydetector-metricsource-rdssourceconfig
         */
        readonly rdsSourceConfig?: cdk.IResolvable | CfnAnomalyDetector.RDSSourceConfigProperty;
        /**
         * Details about an Amazon Redshift database datasource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricsource.html#cfn-lookoutmetrics-anomalydetector-metricsource-redshiftsourceconfig
         */
        readonly redshiftSourceConfig?: cdk.IResolvable | CfnAnomalyDetector.RedshiftSourceConfigProperty;
        /**
         * Contains information about the configuration of the S3 bucket that contains source files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricsource.html#cfn-lookoutmetrics-anomalydetector-metricsource-s3sourceconfig
         */
        readonly s3SourceConfig?: cdk.IResolvable | CfnAnomalyDetector.S3SourceConfigProperty;
    }
    /**
     * Contains information about the configuration of the S3 bucket that contains source files.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-s3sourceconfig.html
     */
    interface S3SourceConfigProperty {
        /**
         * Contains information about a source file's formatting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-s3sourceconfig.html#cfn-lookoutmetrics-anomalydetector-s3sourceconfig-fileformatdescriptor
         */
        readonly fileFormatDescriptor: CfnAnomalyDetector.FileFormatDescriptorProperty | cdk.IResolvable;
        /**
         * A list of paths to the historical data files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-s3sourceconfig.html#cfn-lookoutmetrics-anomalydetector-s3sourceconfig-historicaldatapathlist
         */
        readonly historicalDataPathList?: Array<string>;
        /**
         * The ARN of an IAM role that has read and write access permissions to the source S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-s3sourceconfig.html#cfn-lookoutmetrics-anomalydetector-s3sourceconfig-rolearn
         */
        readonly roleArn: string;
        /**
         * A list of templated paths to the source files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-s3sourceconfig.html#cfn-lookoutmetrics-anomalydetector-s3sourceconfig-templatedpathlist
         */
        readonly templatedPathList?: Array<string>;
    }
    /**
     * Contains information about a source file's formatting.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-fileformatdescriptor.html
     */
    interface FileFormatDescriptorProperty {
        /**
         * Contains information about how a source CSV data file should be analyzed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-fileformatdescriptor.html#cfn-lookoutmetrics-anomalydetector-fileformatdescriptor-csvformatdescriptor
         */
        readonly csvFormatDescriptor?: CfnAnomalyDetector.CsvFormatDescriptorProperty | cdk.IResolvable;
        /**
         * Contains information about how a source JSON data file should be analyzed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-fileformatdescriptor.html#cfn-lookoutmetrics-anomalydetector-fileformatdescriptor-jsonformatdescriptor
         */
        readonly jsonFormatDescriptor?: cdk.IResolvable | CfnAnomalyDetector.JsonFormatDescriptorProperty;
    }
    /**
     * Contains information about how a source JSON data file should be analyzed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-jsonformatdescriptor.html
     */
    interface JsonFormatDescriptorProperty {
        /**
         * The character set in which the source JSON file is written.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-jsonformatdescriptor.html#cfn-lookoutmetrics-anomalydetector-jsonformatdescriptor-charset
         */
        readonly charset?: string;
        /**
         * The level of compression of the source CSV file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-jsonformatdescriptor.html#cfn-lookoutmetrics-anomalydetector-jsonformatdescriptor-filecompression
         */
        readonly fileCompression?: string;
    }
    /**
     * Contains information about how a source CSV data file should be analyzed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-csvformatdescriptor.html
     */
    interface CsvFormatDescriptorProperty {
        /**
         * The character set in which the source CSV file is written.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-csvformatdescriptor.html#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-charset
         */
        readonly charset?: string;
        /**
         * Whether or not the source CSV file contains a header.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-csvformatdescriptor.html#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-containsheader
         */
        readonly containsHeader?: boolean | cdk.IResolvable;
        /**
         * The character used to delimit the source CSV file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-csvformatdescriptor.html#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-delimiter
         */
        readonly delimiter?: string;
        /**
         * The level of compression of the source CSV file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-csvformatdescriptor.html#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-filecompression
         */
        readonly fileCompression?: string;
        /**
         * A list of the source CSV file's headers, if any.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-csvformatdescriptor.html#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-headerlist
         */
        readonly headerList?: Array<string>;
        /**
         * The character used as a quote character.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-csvformatdescriptor.html#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-quotesymbol
         */
        readonly quoteSymbol?: string;
    }
    /**
     * Details about an Amazon CloudWatch datasource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-cloudwatchconfig.html
     */
    interface CloudwatchConfigProperty {
        /**
         * An IAM role that gives Amazon Lookout for Metrics permission to access data in Amazon CloudWatch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-cloudwatchconfig.html#cfn-lookoutmetrics-anomalydetector-cloudwatchconfig-rolearn
         */
        readonly roleArn: string;
    }
    /**
     * Contains information about the Amazon Relational Database Service (RDS) configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-rdssourceconfig.html
     */
    interface RDSSourceConfigProperty {
        /**
         * The host name of the database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-rdssourceconfig.html#cfn-lookoutmetrics-anomalydetector-rdssourceconfig-databasehost
         */
        readonly databaseHost: string;
        /**
         * The name of the RDS database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-rdssourceconfig.html#cfn-lookoutmetrics-anomalydetector-rdssourceconfig-databasename
         */
        readonly databaseName: string;
        /**
         * The port number where the database can be accessed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-rdssourceconfig.html#cfn-lookoutmetrics-anomalydetector-rdssourceconfig-databaseport
         */
        readonly databasePort: number;
        /**
         * A string identifying the database instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-rdssourceconfig.html#cfn-lookoutmetrics-anomalydetector-rdssourceconfig-dbinstanceidentifier
         */
        readonly dbInstanceIdentifier: string;
        /**
         * The Amazon Resource Name (ARN) of the role.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-rdssourceconfig.html#cfn-lookoutmetrics-anomalydetector-rdssourceconfig-rolearn
         */
        readonly roleArn: string;
        /**
         * The Amazon Resource Name (ARN) of the AWS Secrets Manager role.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-rdssourceconfig.html#cfn-lookoutmetrics-anomalydetector-rdssourceconfig-secretmanagerarn
         */
        readonly secretManagerArn: string;
        /**
         * The name of the table in the database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-rdssourceconfig.html#cfn-lookoutmetrics-anomalydetector-rdssourceconfig-tablename
         */
        readonly tableName: string;
        /**
         * An object containing information about the Amazon Virtual Private Cloud (VPC) configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-rdssourceconfig.html#cfn-lookoutmetrics-anomalydetector-rdssourceconfig-vpcconfiguration
         */
        readonly vpcConfiguration: cdk.IResolvable | CfnAnomalyDetector.VpcConfigurationProperty;
    }
    /**
     * Contains configuration information about the Amazon Virtual Private Cloud (VPC).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-vpcconfiguration.html
     */
    interface VpcConfigurationProperty {
        /**
         * An array of strings containing the list of security groups.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-vpcconfiguration.html#cfn-lookoutmetrics-anomalydetector-vpcconfiguration-securitygroupidlist
         */
        readonly securityGroupIdList: Array<string>;
        /**
         * An array of strings containing the Amazon VPC subnet IDs (e.g., `subnet-0bb1c79de3EXAMPLE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-vpcconfiguration.html#cfn-lookoutmetrics-anomalydetector-vpcconfiguration-subnetidlist
         */
        readonly subnetIdList: Array<string>;
    }
    /**
     * Details about an Amazon AppFlow flow datasource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-appflowconfig.html
     */
    interface AppFlowConfigProperty {
        /**
         * name of the flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-appflowconfig.html#cfn-lookoutmetrics-anomalydetector-appflowconfig-flowname
         */
        readonly flowName: string;
        /**
         * An IAM role that gives Amazon Lookout for Metrics permission to access the flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-appflowconfig.html#cfn-lookoutmetrics-anomalydetector-appflowconfig-rolearn
         */
        readonly roleArn: string;
    }
    /**
     * Provides information about the Amazon Redshift database configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-redshiftsourceconfig.html
     */
    interface RedshiftSourceConfigProperty {
        /**
         * A string identifying the Redshift cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-redshiftsourceconfig.html#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-clusteridentifier
         */
        readonly clusterIdentifier: string;
        /**
         * The name of the database host.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-redshiftsourceconfig.html#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-databasehost
         */
        readonly databaseHost: string;
        /**
         * The Redshift database name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-redshiftsourceconfig.html#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-databasename
         */
        readonly databaseName: string;
        /**
         * The port number where the database can be accessed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-redshiftsourceconfig.html#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-databaseport
         */
        readonly databasePort: number;
        /**
         * The Amazon Resource Name (ARN) of the role providing access to the database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-redshiftsourceconfig.html#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-rolearn
         */
        readonly roleArn: string;
        /**
         * The Amazon Resource Name (ARN) of the AWS Secrets Manager role.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-redshiftsourceconfig.html#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-secretmanagerarn
         */
        readonly secretManagerArn: string;
        /**
         * The table name of the Redshift database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-redshiftsourceconfig.html#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-tablename
         */
        readonly tableName: string;
        /**
         * Contains information about the Amazon Virtual Private Cloud (VPC) configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-redshiftsourceconfig.html#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-vpcconfiguration
         */
        readonly vpcConfiguration: cdk.IResolvable | CfnAnomalyDetector.VpcConfigurationProperty;
    }
    /**
     * Contains information about the column used to track time in a source data file.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-timestampcolumn.html
     */
    interface TimestampColumnProperty {
        /**
         * The format of the timestamp column.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-timestampcolumn.html#cfn-lookoutmetrics-anomalydetector-timestampcolumn-columnformat
         */
        readonly columnFormat?: string;
        /**
         * The name of the timestamp column.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-timestampcolumn.html#cfn-lookoutmetrics-anomalydetector-timestampcolumn-columnname
         */
        readonly columnName?: string;
    }
}
/**
 * Properties for defining a `CfnAnomalyDetector`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html
 */
export interface CfnAnomalyDetectorProps {
    /**
     * Contains information about the configuration of the anomaly detector.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-anomalydetectorconfig
     */
    readonly anomalyDetectorConfig: CfnAnomalyDetector.AnomalyDetectorConfigProperty | cdk.IResolvable;
    /**
     * A description of the detector.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-anomalydetectordescription
     */
    readonly anomalyDetectorDescription?: string;
    /**
     * The name of the detector.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-anomalydetectorname
     */
    readonly anomalyDetectorName?: string;
    /**
     * The ARN of the KMS key to use to encrypt your data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-kmskeyarn
     */
    readonly kmsKeyArn?: string;
    /**
     * The detector's dataset.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-metricsetlist
     */
    readonly metricSetList: Array<cdk.IResolvable | CfnAnomalyDetector.MetricSetProperty> | cdk.IResolvable;
}
