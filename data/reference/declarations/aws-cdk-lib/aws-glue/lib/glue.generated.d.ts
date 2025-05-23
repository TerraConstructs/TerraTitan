import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::Glue::Classifier` resource creates an AWS Glue classifier that categorizes data sources and specifies schemas.
 *
 * For more information, see [Adding Classifiers to a Crawler](https://docs.aws.amazon.com/glue/latest/dg/add-classifier.html) and [Classifier Structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-Classifier) in the *AWS Glue Developer Guide* .
 *
 * @cloudformationResource AWS::Glue::Classifier
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-classifier.html
 */
export declare class CfnClassifier extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnClassifier from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnClassifier;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A classifier for comma-separated values (CSV).
     */
    csvClassifier?: CfnClassifier.CsvClassifierProperty | cdk.IResolvable;
    /**
     * A classifier that uses `grok` .
     */
    grokClassifier?: CfnClassifier.GrokClassifierProperty | cdk.IResolvable;
    /**
     * A classifier for JSON content.
     */
    jsonClassifier?: cdk.IResolvable | CfnClassifier.JsonClassifierProperty;
    /**
     * A classifier for XML content.
     */
    xmlClassifier?: cdk.IResolvable | CfnClassifier.XMLClassifierProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnClassifierProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnClassifier {
    /**
     * A classifier for `XML` content.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-xmlclassifier.html
     */
    interface XMLClassifierProperty {
        /**
         * An identifier of the data format that the classifier matches.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-xmlclassifier.html#cfn-glue-classifier-xmlclassifier-classification
         */
        readonly classification: string;
        /**
         * The name of the classifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-xmlclassifier.html#cfn-glue-classifier-xmlclassifier-name
         */
        readonly name?: string;
        /**
         * The XML tag designating the element that contains each record in an XML document being parsed.
         *
         * This can't identify a self-closing element (closed by `/>` ). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, `<row item_a="A" item_b="B"></row>` is okay, but `<row item_a="A" item_b="B" />` is not).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-xmlclassifier.html#cfn-glue-classifier-xmlclassifier-rowtag
         */
        readonly rowTag: string;
    }
    /**
     * A classifier for `JSON` content.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-jsonclassifier.html
     */
    interface JsonClassifierProperty {
        /**
         * A `JsonPath` string defining the JSON data for the classifier to classify.
         *
         * AWS Glue supports a subset of `JsonPath` , as described in [Writing JsonPath Custom Classifiers](https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-jsonclassifier.html#cfn-glue-classifier-jsonclassifier-jsonpath
         */
        readonly jsonPath: string;
        /**
         * The name of the classifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-jsonclassifier.html#cfn-glue-classifier-jsonclassifier-name
         */
        readonly name?: string;
    }
    /**
     * A classifier for custom `CSV` content.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-csvclassifier.html
     */
    interface CsvClassifierProperty {
        /**
         * Enables the processing of files that contain only one column.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-csvclassifier.html#cfn-glue-classifier-csvclassifier-allowsinglecolumn
         */
        readonly allowSingleColumn?: boolean | cdk.IResolvable;
        /**
         * Indicates whether the CSV file contains custom data types.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-csvclassifier.html#cfn-glue-classifier-csvclassifier-containscustomdatatype
         */
        readonly containsCustomDatatype?: Array<string>;
        /**
         * Indicates whether the CSV file contains a header.
         *
         * A value of `UNKNOWN` specifies that the classifier will detect whether the CSV file contains headings.
         *
         * A value of `PRESENT` specifies that the CSV file contains headings.
         *
         * A value of `ABSENT` specifies that the CSV file does not contain headings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-csvclassifier.html#cfn-glue-classifier-csvclassifier-containsheader
         */
        readonly containsHeader?: string;
        /**
         * Enables the configuration of custom data types.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-csvclassifier.html#cfn-glue-classifier-csvclassifier-customdatatypeconfigured
         */
        readonly customDatatypeConfigured?: boolean | cdk.IResolvable;
        /**
         * A custom symbol to denote what separates each column entry in the row.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-csvclassifier.html#cfn-glue-classifier-csvclassifier-delimiter
         */
        readonly delimiter?: string;
        /**
         * Specifies not to trim values before identifying the type of column values.
         *
         * The default value is `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-csvclassifier.html#cfn-glue-classifier-csvclassifier-disablevaluetrimming
         */
        readonly disableValueTrimming?: boolean | cdk.IResolvable;
        /**
         * A list of strings representing column names.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-csvclassifier.html#cfn-glue-classifier-csvclassifier-header
         */
        readonly header?: Array<string>;
        /**
         * The name of the classifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-csvclassifier.html#cfn-glue-classifier-csvclassifier-name
         */
        readonly name?: string;
        /**
         * A custom symbol to denote what combines content into a single column value.
         *
         * It must be different from the column delimiter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-csvclassifier.html#cfn-glue-classifier-csvclassifier-quotesymbol
         */
        readonly quoteSymbol?: string;
    }
    /**
     * A classifier that uses `grok` patterns.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-grokclassifier.html
     */
    interface GrokClassifierProperty {
        /**
         * An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and so on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-grokclassifier.html#cfn-glue-classifier-grokclassifier-classification
         */
        readonly classification: string;
        /**
         * Optional custom grok patterns defined by this classifier.
         *
         * For more information, see custom patterns in [Writing Custom Classifiers](https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-grokclassifier.html#cfn-glue-classifier-grokclassifier-custompatterns
         */
        readonly customPatterns?: string;
        /**
         * The grok pattern applied to a data store by this classifier.
         *
         * For more information, see built-in patterns in [Writing Custom Classifiers](https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-grokclassifier.html#cfn-glue-classifier-grokclassifier-grokpattern
         */
        readonly grokPattern: string;
        /**
         * The name of the classifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-grokclassifier.html#cfn-glue-classifier-grokclassifier-name
         */
        readonly name?: string;
    }
}
/**
 * Properties for defining a `CfnClassifier`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-classifier.html
 */
export interface CfnClassifierProps {
    /**
     * A classifier for comma-separated values (CSV).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-classifier.html#cfn-glue-classifier-csvclassifier
     */
    readonly csvClassifier?: CfnClassifier.CsvClassifierProperty | cdk.IResolvable;
    /**
     * A classifier that uses `grok` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-classifier.html#cfn-glue-classifier-grokclassifier
     */
    readonly grokClassifier?: CfnClassifier.GrokClassifierProperty | cdk.IResolvable;
    /**
     * A classifier for JSON content.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-classifier.html#cfn-glue-classifier-jsonclassifier
     */
    readonly jsonClassifier?: cdk.IResolvable | CfnClassifier.JsonClassifierProperty;
    /**
     * A classifier for XML content.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-classifier.html#cfn-glue-classifier-xmlclassifier
     */
    readonly xmlClassifier?: cdk.IResolvable | CfnClassifier.XMLClassifierProperty;
}
/**
 * The `AWS::Glue::Connection` resource specifies an AWS Glue connection to a data source.
 *
 * For more information, see [Adding a Connection to Your Data Store](https://docs.aws.amazon.com/glue/latest/dg/populate-add-connection.html) and [Connection Structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-Connection) in the *AWS Glue Developer Guide* .
 *
 * @cloudformationResource AWS::Glue::Connection
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html
 */
export declare class CfnConnection extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConnection from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConnection;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ID of the data catalog to create the catalog object in.
     */
    catalogId: string;
    /**
     * The connection that you want to create.
     */
    connectionInput: CfnConnection.ConnectionInputProperty | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConnectionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConnection {
    /**
     * A structure that is used to specify a connection to create or update.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-connectioninput.html
     */
    interface ConnectionInputProperty {
        /**
         * Connection properties specific to the Athena compute environment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-connectioninput.html#cfn-glue-connection-connectioninput-athenaproperties
         */
        readonly athenaProperties?: any | cdk.IResolvable;
        /**
         * The authentication properties of the connection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-connectioninput.html#cfn-glue-connection-connectioninput-authenticationconfiguration
         */
        readonly authenticationConfiguration?: CfnConnection.AuthenticationConfigurationInputProperty | cdk.IResolvable;
        /**
         * These key-value pairs define parameters for the connection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-connectioninput.html#cfn-glue-connection-connectioninput-connectionproperties
         */
        readonly connectionProperties?: any | cdk.IResolvable;
        /**
         * The type of the connection. Currently, these types are supported:.
         *
         * - `JDBC` - Designates a connection to a database through Java Database Connectivity (JDBC).
         *
         * `JDBC` Connections use the following ConnectionParameters.
         *
         * - Required: All of ( `HOST` , `PORT` , `JDBC_ENGINE` ) or `JDBC_CONNECTION_URL` .
         * - Required: All of ( `USERNAME` , `PASSWORD` ) or `SECRET_ID` .
         * - Optional: `JDBC_ENFORCE_SSL` , `CUSTOM_JDBC_CERT` , `CUSTOM_JDBC_CERT_STRING` , `SKIP_CUSTOM_JDBC_CERT_VALIDATION` . These parameters are used to configure SSL with JDBC.
         * - `KAFKA` - Designates a connection to an Apache Kafka streaming platform.
         *
         * `KAFKA` Connections use the following ConnectionParameters.
         *
         * - Required: `KAFKA_BOOTSTRAP_SERVERS` .
         * - Optional: `KAFKA_SSL_ENABLED` , `KAFKA_CUSTOM_CERT` , `KAFKA_SKIP_CUSTOM_CERT_VALIDATION` . These parameters are used to configure SSL with `KAFKA` .
         * - Optional: `KAFKA_CLIENT_KEYSTORE` , `KAFKA_CLIENT_KEYSTORE_PASSWORD` , `KAFKA_CLIENT_KEY_PASSWORD` , `ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD` , `ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD` . These parameters are used to configure TLS client configuration with SSL in `KAFKA` .
         * - Optional: `KAFKA_SASL_MECHANISM` . Can be specified as `SCRAM-SHA-512` , `GSSAPI` , or `AWS_MSK_IAM` .
         * - Optional: `KAFKA_SASL_SCRAM_USERNAME` , `KAFKA_SASL_SCRAM_PASSWORD` , `ENCRYPTED_KAFKA_SASL_SCRAM_PASSWORD` . These parameters are used to configure SASL/SCRAM-SHA-512 authentication with `KAFKA` .
         * - Optional: `KAFKA_SASL_GSSAPI_KEYTAB` , `KAFKA_SASL_GSSAPI_KRB5_CONF` , `KAFKA_SASL_GSSAPI_SERVICE` , `KAFKA_SASL_GSSAPI_PRINCIPAL` . These parameters are used to configure SASL/GSSAPI authentication with `KAFKA` .
         * - `MONGODB` - Designates a connection to a MongoDB document database.
         *
         * `MONGODB` Connections use the following ConnectionParameters.
         *
         * - Required: `CONNECTION_URL` .
         * - Required: All of ( `USERNAME` , `PASSWORD` ) or `SECRET_ID` .
         * - `VIEW_VALIDATION_REDSHIFT` - Designates a connection used for view validation by Amazon Redshift.
         * - `VIEW_VALIDATION_ATHENA` - Designates a connection used for view validation by Amazon Athena.
         * - `NETWORK` - Designates a network connection to a data source within an Amazon Virtual Private Cloud environment (Amazon VPC).
         *
         * `NETWORK` Connections do not require ConnectionParameters. Instead, provide a PhysicalConnectionRequirements.
         * - `MARKETPLACE` - Uses configuration settings contained in a connector purchased from AWS Marketplace to read from and write to data stores that are not natively supported by AWS Glue .
         *
         * `MARKETPLACE` Connections use the following ConnectionParameters.
         *
         * - Required: `CONNECTOR_TYPE` , `CONNECTOR_URL` , `CONNECTOR_CLASS_NAME` , `CONNECTION_URL` .
         * - Required for `JDBC` `CONNECTOR_TYPE` connections: All of ( `USERNAME` , `PASSWORD` ) or `SECRET_ID` .
         * - `CUSTOM` - Uses configuration settings contained in a custom connector to read from and write to data stores that are not natively supported by AWS Glue .
         *
         * Additionally, a `ConnectionType` for the following SaaS connectors is supported:
         *
         * - `FACEBOOKADS` - Designates a connection to Facebook Ads.
         * - `GOOGLEADS` - Designates a connection to Google Ads.
         * - `GOOGLESHEETS` - Designates a connection to Google Sheets.
         * - `GOOGLEANALYTICS4` - Designates a connection to Google Analytics 4.
         * - `HUBSPOT` - Designates a connection to HubSpot.
         * - `INSTAGRAMADS` - Designates a connection to Instagram Ads.
         * - `INTERCOM` - Designates a connection to Intercom.
         * - `JIRACLOUD` - Designates a connection to Jira Cloud.
         * - `MARKETO` - Designates a connection to Adobe Marketo Engage.
         * - `NETSUITEERP` - Designates a connection to Oracle NetSuite.
         * - `SALESFORCE` - Designates a connection to Salesforce using OAuth authentication.
         * - `SALESFORCEMARKETINGCLOUD` - Designates a connection to Salesforce Marketing Cloud.
         * - `SALESFORCEPARDOT` - Designates a connection to Salesforce Marketing Cloud Account Engagement (MCAE).
         * - `SAPODATA` - Designates a connection to SAP OData.
         * - `SERVICENOW` - Designates a connection to ServiceNow.
         * - `SLACK` - Designates a connection to Slack.
         * - `SNAPCHATADS` - Designates a connection to Snapchat Ads.
         * - `STRIPE` - Designates a connection to Stripe.
         * - `ZENDESK` - Designates a connection to Zendesk.
         * - `ZOHOCRM` - Designates a connection to Zoho CRM.
         *
         * For more information on the connection parameters needed for a particular connector, see the documentation for the connector in [Adding an AWS Glue connection](https://docs.aws.amazon.com/glue/latest/dg/console-connections.html) in the AWS Glue User Guide.
         *
         * `SFTP` is not supported.
         *
         * For more information about how optional ConnectionProperties are used to configure features in AWS Glue , consult [AWS Glue connection properties](https://docs.aws.amazon.com/glue/latest/dg/connection-defining.html) .
         *
         * For more information about how optional ConnectionProperties are used to configure features in AWS Glue Studio, consult [Using connectors and connections](https://docs.aws.amazon.com/glue/latest/ug/connectors-chapter.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-connectioninput.html#cfn-glue-connection-connectioninput-connectiontype
         */
        readonly connectionType: string;
        /**
         * The description of the connection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-connectioninput.html#cfn-glue-connection-connectioninput-description
         */
        readonly description?: string;
        /**
         * A list of criteria that can be used in selecting this connection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-connectioninput.html#cfn-glue-connection-connectioninput-matchcriteria
         */
        readonly matchCriteria?: Array<string>;
        /**
         * The name of the connection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-connectioninput.html#cfn-glue-connection-connectioninput-name
         */
        readonly name?: string;
        /**
         * The physical connection requirements, such as virtual private cloud (VPC) and `SecurityGroup` , that are needed to successfully make this connection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-connectioninput.html#cfn-glue-connection-connectioninput-physicalconnectionrequirements
         */
        readonly physicalConnectionRequirements?: cdk.IResolvable | CfnConnection.PhysicalConnectionRequirementsProperty;
        /**
         * Connection properties specific to the Python compute environment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-connectioninput.html#cfn-glue-connection-connectioninput-pythonproperties
         */
        readonly pythonProperties?: any | cdk.IResolvable;
        /**
         * Connection properties specific to the Spark compute environment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-connectioninput.html#cfn-glue-connection-connectioninput-sparkproperties
         */
        readonly sparkProperties?: any | cdk.IResolvable;
        /**
         * A flag to validate the credentials during create connection.
         *
         * Default is true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-connectioninput.html#cfn-glue-connection-connectioninput-validatecredentials
         */
        readonly validateCredentials?: boolean | cdk.IResolvable;
        /**
         * The compute environments that the specified connection properties are validated against.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-connectioninput.html#cfn-glue-connection-connectioninput-validateforcomputeenvironments
         */
        readonly validateForComputeEnvironments?: Array<string>;
    }
    /**
     * The OAuth client app in GetConnection response.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-physicalconnectionrequirements.html
     */
    interface PhysicalConnectionRequirementsProperty {
        /**
         * The connection's Availability Zone.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-physicalconnectionrequirements.html#cfn-glue-connection-physicalconnectionrequirements-availabilityzone
         */
        readonly availabilityZone?: string;
        /**
         * The security group ID list used by the connection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-physicalconnectionrequirements.html#cfn-glue-connection-physicalconnectionrequirements-securitygroupidlist
         */
        readonly securityGroupIdList?: Array<string>;
        /**
         * The subnet ID used by the connection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-physicalconnectionrequirements.html#cfn-glue-connection-physicalconnectionrequirements-subnetid
         */
        readonly subnetId?: string;
    }
    /**
     * A structure containing the authentication configuration in the CreateConnection request.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-authenticationconfigurationinput.html
     */
    interface AuthenticationConfigurationInputProperty {
        /**
         * A structure containing the authentication configuration in the CreateConnection request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-authenticationconfigurationinput.html#cfn-glue-connection-authenticationconfigurationinput-authenticationtype
         */
        readonly authenticationType: string;
        /**
         * The credentials used when the authentication type is basic authentication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-authenticationconfigurationinput.html#cfn-glue-connection-authenticationconfigurationinput-basicauthenticationcredentials
         */
        readonly basicAuthenticationCredentials?: CfnConnection.BasicAuthenticationCredentialsProperty | cdk.IResolvable;
        /**
         * The credentials used when the authentication type is custom authentication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-authenticationconfigurationinput.html#cfn-glue-connection-authenticationconfigurationinput-customauthenticationcredentials
         */
        readonly customAuthenticationCredentials?: any | cdk.IResolvable;
        /**
         * The ARN of the KMS key used to encrypt the connection.
         *
         * Only taken an as input in the request and stored in the Secret Manager.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-authenticationconfigurationinput.html#cfn-glue-connection-authenticationconfigurationinput-kmskeyarn
         */
        readonly kmsKeyArn?: string;
        /**
         * The properties for OAuth2 authentication in the CreateConnection request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-authenticationconfigurationinput.html#cfn-glue-connection-authenticationconfigurationinput-oauth2properties
         */
        readonly oAuth2Properties?: cdk.IResolvable | CfnConnection.OAuth2PropertiesInputProperty;
        /**
         * The secret manager ARN to store credentials in the CreateConnection request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-authenticationconfigurationinput.html#cfn-glue-connection-authenticationconfigurationinput-secretarn
         */
        readonly secretArn?: string;
    }
    /**
     * A structure containing properties for OAuth2 in the CreateConnection request.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-oauth2propertiesinput.html
     */
    interface OAuth2PropertiesInputProperty {
        /**
         * The set of properties required for the the OAuth2 `AUTHORIZATION_CODE` grant type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-oauth2propertiesinput.html#cfn-glue-connection-oauth2propertiesinput-authorizationcodeproperties
         */
        readonly authorizationCodeProperties?: CfnConnection.AuthorizationCodePropertiesProperty | cdk.IResolvable;
        /**
         * The client application type in the CreateConnection request.
         *
         * For example, `AWS_MANAGED` or `USER_MANAGED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-oauth2propertiesinput.html#cfn-glue-connection-oauth2propertiesinput-oauth2clientapplication
         */
        readonly oAuth2ClientApplication?: cdk.IResolvable | CfnConnection.OAuth2ClientApplicationProperty;
        /**
         * The credentials used when the authentication type is OAuth2 authentication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-oauth2propertiesinput.html#cfn-glue-connection-oauth2propertiesinput-oauth2credentials
         */
        readonly oAuth2Credentials?: cdk.IResolvable | CfnConnection.OAuth2CredentialsProperty;
        /**
         * The OAuth2 grant type in the CreateConnection request.
         *
         * For example, `AUTHORIZATION_CODE` , `JWT_BEARER` , or `CLIENT_CREDENTIALS` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-oauth2propertiesinput.html#cfn-glue-connection-oauth2propertiesinput-oauth2granttype
         */
        readonly oAuth2GrantType?: string;
        /**
         * The URL of the provider's authentication server, to exchange an authorization code for an access token.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-oauth2propertiesinput.html#cfn-glue-connection-oauth2propertiesinput-tokenurl
         */
        readonly tokenUrl?: string;
        /**
         * A map of parameters that are added to the token `GET` request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-oauth2propertiesinput.html#cfn-glue-connection-oauth2propertiesinput-tokenurlparametersmap
         */
        readonly tokenUrlParametersMap?: any | cdk.IResolvable;
    }
    /**
     * The set of properties required for the the OAuth2 `AUTHORIZATION_CODE` grant type workflow.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-authorizationcodeproperties.html
     */
    interface AuthorizationCodePropertiesProperty {
        /**
         * An authorization code to be used in the third leg of the `AUTHORIZATION_CODE` grant workflow.
         *
         * This is a single-use code which becomes invalid once exchanged for an access token, thus it is acceptable to have this value as a request parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-authorizationcodeproperties.html#cfn-glue-connection-authorizationcodeproperties-authorizationcode
         */
        readonly authorizationCode?: string;
        /**
         * The redirect URI where the user gets redirected to by authorization server when issuing an authorization code.
         *
         * The URI is subsequently used when the authorization code is exchanged for an access token.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-authorizationcodeproperties.html#cfn-glue-connection-authorizationcodeproperties-redirecturi
         */
        readonly redirectUri?: string;
    }
    /**
     * The OAuth2 client app used for the connection.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-oauth2clientapplication.html
     */
    interface OAuth2ClientApplicationProperty {
        /**
         * The reference to the SaaS-side client app that is AWS managed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-oauth2clientapplication.html#cfn-glue-connection-oauth2clientapplication-awsmanagedclientapplicationreference
         */
        readonly awsManagedClientApplicationReference?: string;
        /**
         * The client application clientID if the ClientAppType is `USER_MANAGED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-oauth2clientapplication.html#cfn-glue-connection-oauth2clientapplication-usermanagedclientapplicationclientid
         */
        readonly userManagedClientApplicationClientId?: string;
    }
    /**
     * The credentials used when the authentication type is OAuth2 authentication.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-oauth2credentials.html
     */
    interface OAuth2CredentialsProperty {
        /**
         * The access token used when the authentication type is OAuth2.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-oauth2credentials.html#cfn-glue-connection-oauth2credentials-accesstoken
         */
        readonly accessToken?: string;
        /**
         * The JSON Web Token (JWT) used when the authentication type is OAuth2.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-oauth2credentials.html#cfn-glue-connection-oauth2credentials-jwttoken
         */
        readonly jwtToken?: string;
        /**
         * The refresh token used when the authentication type is OAuth2.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-oauth2credentials.html#cfn-glue-connection-oauth2credentials-refreshtoken
         */
        readonly refreshToken?: string;
        /**
         * The client application client secret if the client application is user managed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-oauth2credentials.html#cfn-glue-connection-oauth2credentials-usermanagedclientapplicationclientsecret
         */
        readonly userManagedClientApplicationClientSecret?: string;
    }
    /**
     * For supplying basic auth credentials when not providing a `SecretArn` value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-basicauthenticationcredentials.html
     */
    interface BasicAuthenticationCredentialsProperty {
        /**
         * The password to connect to the data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-basicauthenticationcredentials.html#cfn-glue-connection-basicauthenticationcredentials-password
         */
        readonly password?: string;
        /**
         * The username to connect to the data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-basicauthenticationcredentials.html#cfn-glue-connection-basicauthenticationcredentials-username
         */
        readonly username?: string;
    }
}
/**
 * Properties for defining a `CfnConnection`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html
 */
export interface CfnConnectionProps {
    /**
     * The ID of the data catalog to create the catalog object in.
     *
     * Currently, this should be the AWS account ID.
     *
     * > To specify the account ID, you can use the `Ref` intrinsic function with the `AWS::AccountId` pseudo parameter. For example: `!Ref AWS::AccountId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-catalogid
     */
    readonly catalogId: string;
    /**
     * The connection that you want to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-connectioninput
     */
    readonly connectionInput: CfnConnection.ConnectionInputProperty | cdk.IResolvable;
}
/**
 * The `AWS::Glue::Crawler` resource specifies an AWS Glue crawler.
 *
 * For more information, see [Cataloging Tables with a Crawler](https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html) and [Crawler Structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-Crawler) in the *AWS Glue Developer Guide* .
 *
 * @cloudformationResource AWS::Glue::Crawler
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html
 */
export declare class CfnCrawler extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCrawler from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCrawler;
    /**
     * A list of UTF-8 strings that specify the names of custom classifiers that are associated with the crawler.
     */
    classifiers?: Array<string>;
    /**
     * Crawler configuration information.
     */
    configuration?: string;
    /**
     * The name of the `SecurityConfiguration` structure to be used by this crawler.
     */
    crawlerSecurityConfiguration?: string;
    /**
     * The name of the database in which the crawler's output is stored.
     */
    databaseName?: string;
    /**
     * A description of the crawler.
     */
    description?: string;
    /**
     * Specifies whether the crawler should use AWS Lake Formation credentials for the crawler instead of the IAM role credentials.
     */
    lakeFormationConfiguration?: cdk.IResolvable | CfnCrawler.LakeFormationConfigurationProperty;
    /**
     * The name of the crawler.
     */
    name?: string;
    /**
     * A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.
     */
    recrawlPolicy?: cdk.IResolvable | CfnCrawler.RecrawlPolicyProperty;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data.
     */
    role: string;
    /**
     * For scheduled crawlers, the schedule when the crawler runs.
     */
    schedule?: cdk.IResolvable | CfnCrawler.ScheduleProperty;
    /**
     * The policy that specifies update and delete behaviors for the crawler.
     */
    schemaChangePolicy?: cdk.IResolvable | CfnCrawler.SchemaChangePolicyProperty;
    /**
     * The prefix added to the names of tables that are created.
     */
    tablePrefix?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to use with this crawler.
     */
    tagsRaw?: any;
    /**
     * A collection of targets to crawl.
     */
    targets: cdk.IResolvable | CfnCrawler.TargetsProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCrawlerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCrawler {
    /**
     * The policy that specifies update and delete behaviors for the crawler.
     *
     * The policy tells the crawler what to do in the event that it detects a change in a table that already exists in the customer's database at the time of the crawl. The `SchemaChangePolicy` does not affect whether or how new tables and partitions are added. New tables and partitions are always created regardless of the `SchemaChangePolicy` on a crawler.
     *
     * The SchemaChangePolicy consists of two components, `UpdateBehavior` and `DeleteBehavior` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-schemachangepolicy.html
     */
    interface SchemaChangePolicyProperty {
        /**
         * The deletion behavior when the crawler finds a deleted object.
         *
         * A value of `LOG` specifies that if a table or partition is found to no longer exist, do not delete it, only log that it was found to no longer exist.
         *
         * A value of `DELETE_FROM_DATABASE` specifies that if a table or partition is found to have been removed, delete it from the database.
         *
         * A value of `DEPRECATE_IN_DATABASE` specifies that if a table has been found to no longer exist, to add a property to the table that says "DEPRECATED" and includes a timestamp with the time of deprecation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-schemachangepolicy.html#cfn-glue-crawler-schemachangepolicy-deletebehavior
         */
        readonly deleteBehavior?: string;
        /**
         * The update behavior when the crawler finds a changed schema.
         *
         * A value of `LOG` specifies that if a table or a partition already exists, and a change is detected, do not update it, only log that a change was detected. Add new tables and new partitions (including on existing tables).
         *
         * A value of `UPDATE_IN_DATABASE` specifies that if a table or partition already exists, and a change is detected, update it. Add new tables and partitions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-schemachangepolicy.html#cfn-glue-crawler-schemachangepolicy-updatebehavior
         */
        readonly updateBehavior?: string;
    }
    /**
     * When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run.
     *
     * For more information, see [Incremental Crawls in AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/incremental-crawls.html) in the developer guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-recrawlpolicy.html
     */
    interface RecrawlPolicyProperty {
        /**
         * Specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run.
         *
         * A value of `CRAWL_EVERYTHING` specifies crawling the entire dataset again.
         *
         * A value of `CRAWL_NEW_FOLDERS_ONLY` specifies crawling only folders that were added since the last crawler run.
         *
         * A value of `CRAWL_EVENT_MODE` specifies crawling only the changes identified by Amazon S3 events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-recrawlpolicy.html#cfn-glue-crawler-recrawlpolicy-recrawlbehavior
         */
        readonly recrawlBehavior?: string;
    }
    /**
     * Specifies data stores to crawl.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-targets.html
     */
    interface TargetsProperty {
        /**
         * Specifies AWS Glue Data Catalog targets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-targets.html#cfn-glue-crawler-targets-catalogtargets
         */
        readonly catalogTargets?: Array<CfnCrawler.CatalogTargetProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Specifies an array of Delta data store targets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-targets.html#cfn-glue-crawler-targets-deltatargets
         */
        readonly deltaTargets?: Array<CfnCrawler.DeltaTargetProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Specifies Amazon DynamoDB targets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-targets.html#cfn-glue-crawler-targets-dynamodbtargets
         */
        readonly dynamoDbTargets?: Array<CfnCrawler.DynamoDBTargetProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Specifies Apache Hudi data store targets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-targets.html#cfn-glue-crawler-targets-huditargets
         */
        readonly hudiTargets?: Array<CfnCrawler.HudiTargetProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Specifies Apache Iceberg data store targets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-targets.html#cfn-glue-crawler-targets-icebergtargets
         */
        readonly icebergTargets?: Array<CfnCrawler.IcebergTargetProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Specifies JDBC targets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-targets.html#cfn-glue-crawler-targets-jdbctargets
         */
        readonly jdbcTargets?: Array<cdk.IResolvable | CfnCrawler.JdbcTargetProperty> | cdk.IResolvable;
        /**
         * A list of Mongo DB targets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-targets.html#cfn-glue-crawler-targets-mongodbtargets
         */
        readonly mongoDbTargets?: Array<cdk.IResolvable | CfnCrawler.MongoDBTargetProperty> | cdk.IResolvable;
        /**
         * Specifies Amazon Simple Storage Service (Amazon S3) targets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-targets.html#cfn-glue-crawler-targets-s3targets
         */
        readonly s3Targets?: Array<cdk.IResolvable | CfnCrawler.S3TargetProperty> | cdk.IResolvable;
    }
    /**
     * Specifies a data store in Amazon Simple Storage Service (Amazon S3).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-s3target.html
     */
    interface S3TargetProperty {
        /**
         * The name of a connection which allows a job or crawler to access data in Amazon S3 within an Amazon Virtual Private Cloud environment (Amazon VPC).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-s3target.html#cfn-glue-crawler-s3target-connectionname
         */
        readonly connectionName?: string;
        /**
         * A valid Amazon dead-letter SQS ARN.
         *
         * For example, `arn:aws:sqs:region:account:deadLetterQueue` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-s3target.html#cfn-glue-crawler-s3target-dlqeventqueuearn
         */
        readonly dlqEventQueueArn?: string;
        /**
         * A valid Amazon SQS ARN.
         *
         * For example, `arn:aws:sqs:region:account:sqs` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-s3target.html#cfn-glue-crawler-s3target-eventqueuearn
         */
        readonly eventQueueArn?: string;
        /**
         * A list of glob patterns used to exclude from the crawl.
         *
         * For more information, see [Catalog Tables with a Crawler](https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-s3target.html#cfn-glue-crawler-s3target-exclusions
         */
        readonly exclusions?: Array<string>;
        /**
         * The path to the Amazon S3 target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-s3target.html#cfn-glue-crawler-s3target-path
         */
        readonly path?: string;
        /**
         * Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset.
         *
         * If not set, all the files are crawled. A valid value is an integer between 1 and 249.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-s3target.html#cfn-glue-crawler-s3target-samplesize
         */
        readonly sampleSize?: number;
    }
    /**
     * Specifies an AWS Glue Data Catalog target.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-catalogtarget.html
     */
    interface CatalogTargetProperty {
        /**
         * The name of the connection for an Amazon S3-backed Data Catalog table to be a target of the crawl when using a `Catalog` connection type paired with a `NETWORK` Connection type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-catalogtarget.html#cfn-glue-crawler-catalogtarget-connectionname
         */
        readonly connectionName?: string;
        /**
         * The name of the database to be synchronized.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-catalogtarget.html#cfn-glue-crawler-catalogtarget-databasename
         */
        readonly databaseName?: string;
        /**
         * A valid Amazon dead-letter SQS ARN.
         *
         * For example, `arn:aws:sqs:region:account:deadLetterQueue` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-catalogtarget.html#cfn-glue-crawler-catalogtarget-dlqeventqueuearn
         */
        readonly dlqEventQueueArn?: string;
        /**
         * A valid Amazon SQS ARN.
         *
         * For example, `arn:aws:sqs:region:account:sqs` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-catalogtarget.html#cfn-glue-crawler-catalogtarget-eventqueuearn
         */
        readonly eventQueueArn?: string;
        /**
         * A list of the tables to be synchronized.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-catalogtarget.html#cfn-glue-crawler-catalogtarget-tables
         */
        readonly tables?: Array<string>;
    }
    /**
     * Specifies a Delta data store to crawl one or more Delta tables.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-deltatarget.html
     */
    interface DeltaTargetProperty {
        /**
         * The name of the connection to use to connect to the Delta table target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-deltatarget.html#cfn-glue-crawler-deltatarget-connectionname
         */
        readonly connectionName?: string;
        /**
         * Specifies whether the crawler will create native tables, to allow integration with query engines that support querying of the Delta transaction log directly.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-deltatarget.html#cfn-glue-crawler-deltatarget-createnativedeltatable
         */
        readonly createNativeDeltaTable?: boolean | cdk.IResolvable;
        /**
         * A list of the Amazon S3 paths to the Delta tables.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-deltatarget.html#cfn-glue-crawler-deltatarget-deltatables
         */
        readonly deltaTables?: Array<string>;
        /**
         * Specifies whether to write the manifest files to the Delta table path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-deltatarget.html#cfn-glue-crawler-deltatarget-writemanifest
         */
        readonly writeManifest?: boolean | cdk.IResolvable;
    }
    /**
     * Specifies an Amazon DocumentDB or MongoDB data store to crawl.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-mongodbtarget.html
     */
    interface MongoDBTargetProperty {
        /**
         * The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-mongodbtarget.html#cfn-glue-crawler-mongodbtarget-connectionname
         */
        readonly connectionName?: string;
        /**
         * The path of the Amazon DocumentDB or MongoDB target (database/collection).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-mongodbtarget.html#cfn-glue-crawler-mongodbtarget-path
         */
        readonly path?: string;
    }
    /**
     * Specifies a JDBC data store to crawl.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-jdbctarget.html
     */
    interface JdbcTargetProperty {
        /**
         * The name of the connection to use to connect to the JDBC target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-jdbctarget.html#cfn-glue-crawler-jdbctarget-connectionname
         */
        readonly connectionName?: string;
        /**
         * Specify a value of `RAWTYPES` or `COMMENTS` to enable additional metadata in table responses.
         *
         * `RAWTYPES` provides the native-level datatype. `COMMENTS` provides comments associated with a column or table in the database.
         *
         * If you do not need additional metadata, keep the field empty.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-jdbctarget.html#cfn-glue-crawler-jdbctarget-enableadditionalmetadata
         */
        readonly enableAdditionalMetadata?: Array<string>;
        /**
         * A list of glob patterns used to exclude from the crawl.
         *
         * For more information, see [Catalog Tables with a Crawler](https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-jdbctarget.html#cfn-glue-crawler-jdbctarget-exclusions
         */
        readonly exclusions?: Array<string>;
        /**
         * The path of the JDBC target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-jdbctarget.html#cfn-glue-crawler-jdbctarget-path
         */
        readonly path?: string;
    }
    /**
     * Specifies an Amazon DynamoDB table to crawl.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-dynamodbtarget.html
     */
    interface DynamoDBTargetProperty {
        /**
         * The name of the DynamoDB table to crawl.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-dynamodbtarget.html#cfn-glue-crawler-dynamodbtarget-path
         */
        readonly path?: string;
    }
    /**
     * Specifies Apache Iceberg data store targets.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-icebergtarget.html
     */
    interface IcebergTargetProperty {
        /**
         * The name of the connection to use to connect to the Iceberg target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-icebergtarget.html#cfn-glue-crawler-icebergtarget-connectionname
         */
        readonly connectionName?: string;
        /**
         * A list of global patterns used to exclude from the crawl.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-icebergtarget.html#cfn-glue-crawler-icebergtarget-exclusions
         */
        readonly exclusions?: Array<string>;
        /**
         * The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Iceberg metadata folder in your Amazon S3 path.
         *
         * Used to limit the crawler run time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-icebergtarget.html#cfn-glue-crawler-icebergtarget-maximumtraversaldepth
         */
        readonly maximumTraversalDepth?: number;
        /**
         * One or more Amazon S3 paths that contains Iceberg metadata folders as s3://bucket/prefix .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-icebergtarget.html#cfn-glue-crawler-icebergtarget-paths
         */
        readonly paths?: Array<string>;
    }
    /**
     * Specifies an Apache Hudi data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-huditarget.html
     */
    interface HudiTargetProperty {
        /**
         * The name of the connection to use to connect to the Hudi target.
         *
         * If your Hudi files are stored in buckets that require VPC authorization, you can set their connection properties here.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-huditarget.html#cfn-glue-crawler-huditarget-connectionname
         */
        readonly connectionName?: string;
        /**
         * A list of glob patterns used to exclude from the crawl.
         *
         * For more information, see [Catalog Tables with a Crawler](https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-huditarget.html#cfn-glue-crawler-huditarget-exclusions
         */
        readonly exclusions?: Array<string>;
        /**
         * The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Hudi metadata folder in your Amazon S3 path.
         *
         * Used to limit the crawler run time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-huditarget.html#cfn-glue-crawler-huditarget-maximumtraversaldepth
         */
        readonly maximumTraversalDepth?: number;
        /**
         * An array of Amazon S3 location strings for Hudi, each indicating the root folder with which the metadata files for a Hudi table resides.
         *
         * The Hudi folder may be located in a child folder of the root folder.
         *
         * The crawler will scan all folders underneath a path for a Hudi folder.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-huditarget.html#cfn-glue-crawler-huditarget-paths
         */
        readonly paths?: Array<string>;
    }
    /**
     * A scheduling object using a `cron` statement to schedule an event.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-schedule.html
     */
    interface ScheduleProperty {
        /**
         * A `cron` expression used to specify the schedule.
         *
         * For more information, see [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html) . For example, to run something every day at 12:15 UTC, specify `cron(15 12 * * ? *)` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-schedule.html#cfn-glue-crawler-schedule-scheduleexpression
         */
        readonly scheduleExpression?: string;
    }
    /**
     * Specifies AWS Lake Formation configuration settings for the crawler.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-lakeformationconfiguration.html
     */
    interface LakeFormationConfigurationProperty {
        /**
         * Required for cross account crawls.
         *
         * For same account crawls as the target data, this can be left as null.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-lakeformationconfiguration.html#cfn-glue-crawler-lakeformationconfiguration-accountid
         */
        readonly accountId?: string;
        /**
         * Specifies whether to use AWS Lake Formation credentials for the crawler instead of the IAM role credentials.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-lakeformationconfiguration.html#cfn-glue-crawler-lakeformationconfiguration-uselakeformationcredentials
         */
        readonly useLakeFormationCredentials?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnCrawler`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html
 */
export interface CfnCrawlerProps {
    /**
     * A list of UTF-8 strings that specify the names of custom classifiers that are associated with the crawler.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html#cfn-glue-crawler-classifiers
     */
    readonly classifiers?: Array<string>;
    /**
     * Crawler configuration information.
     *
     * This versioned JSON string allows users to specify aspects of a crawler's behavior. For more information, see [Configuring a Crawler](https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html#cfn-glue-crawler-configuration
     */
    readonly configuration?: string;
    /**
     * The name of the `SecurityConfiguration` structure to be used by this crawler.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html#cfn-glue-crawler-crawlersecurityconfiguration
     */
    readonly crawlerSecurityConfiguration?: string;
    /**
     * The name of the database in which the crawler's output is stored.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html#cfn-glue-crawler-databasename
     */
    readonly databaseName?: string;
    /**
     * A description of the crawler.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html#cfn-glue-crawler-description
     */
    readonly description?: string;
    /**
     * Specifies whether the crawler should use AWS Lake Formation credentials for the crawler instead of the IAM role credentials.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html#cfn-glue-crawler-lakeformationconfiguration
     */
    readonly lakeFormationConfiguration?: cdk.IResolvable | CfnCrawler.LakeFormationConfigurationProperty;
    /**
     * The name of the crawler.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html#cfn-glue-crawler-name
     */
    readonly name?: string;
    /**
     * A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html#cfn-glue-crawler-recrawlpolicy
     */
    readonly recrawlPolicy?: cdk.IResolvable | CfnCrawler.RecrawlPolicyProperty;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html#cfn-glue-crawler-role
     */
    readonly role: string;
    /**
     * For scheduled crawlers, the schedule when the crawler runs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html#cfn-glue-crawler-schedule
     */
    readonly schedule?: cdk.IResolvable | CfnCrawler.ScheduleProperty;
    /**
     * The policy that specifies update and delete behaviors for the crawler.
     *
     * The policy tells the crawler what to do in the event that it detects a change in a table that already exists in the customer's database at the time of the crawl. The `SchemaChangePolicy` does not affect whether or how new tables and partitions are added. New tables and partitions are always created regardless of the `SchemaChangePolicy` on a crawler.
     *
     * The SchemaChangePolicy consists of two components, `UpdateBehavior` and `DeleteBehavior` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html#cfn-glue-crawler-schemachangepolicy
     */
    readonly schemaChangePolicy?: cdk.IResolvable | CfnCrawler.SchemaChangePolicyProperty;
    /**
     * The prefix added to the names of tables that are created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html#cfn-glue-crawler-tableprefix
     */
    readonly tablePrefix?: string;
    /**
     * The tags to use with this crawler.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html#cfn-glue-crawler-tags
     */
    readonly tags?: any;
    /**
     * A collection of targets to crawl.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html#cfn-glue-crawler-targets
     */
    readonly targets: cdk.IResolvable | CfnCrawler.TargetsProperty;
}
/**
 * Sets the security configuration for a specified catalog.
 *
 * After the configuration has been set, the specified encryption is applied to every catalog write thereafter.
 *
 * @cloudformationResource AWS::Glue::DataCatalogEncryptionSettings
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-datacatalogencryptionsettings.html
 */
export declare class CfnDataCatalogEncryptionSettings extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataCatalogEncryptionSettings from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataCatalogEncryptionSettings;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ID of the Data Catalog in which the settings are created.
     */
    catalogId: string;
    /**
     * Contains configuration information for maintaining Data Catalog security.
     */
    dataCatalogEncryptionSettings: CfnDataCatalogEncryptionSettings.DataCatalogEncryptionSettingsProperty | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDataCatalogEncryptionSettingsProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataCatalogEncryptionSettings {
    /**
     * Contains configuration information for maintaining Data Catalog security.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-datacatalogencryptionsettings.html
     */
    interface DataCatalogEncryptionSettingsProperty {
        /**
         * When connection password protection is enabled, the Data Catalog uses a customer-provided key to encrypt the password as part of `CreateConnection` or `UpdateConnection` and store it in the `ENCRYPTED_PASSWORD` field in the connection properties.
         *
         * You can enable catalog encryption or only password encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-datacatalogencryptionsettings.html#cfn-glue-datacatalogencryptionsettings-datacatalogencryptionsettings-connectionpasswordencryption
         */
        readonly connectionPasswordEncryption?: CfnDataCatalogEncryptionSettings.ConnectionPasswordEncryptionProperty | cdk.IResolvable;
        /**
         * Specifies the encryption-at-rest configuration for the Data Catalog.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-datacatalogencryptionsettings.html#cfn-glue-datacatalogencryptionsettings-datacatalogencryptionsettings-encryptionatrest
         */
        readonly encryptionAtRest?: CfnDataCatalogEncryptionSettings.EncryptionAtRestProperty | cdk.IResolvable;
    }
    /**
     * The data structure used by the Data Catalog to encrypt the password as part of `CreateConnection` or `UpdateConnection` and store it in the `ENCRYPTED_PASSWORD` field in the connection properties.
     *
     * You can enable catalog encryption or only password encryption.
     *
     * When a `CreationConnection` request arrives containing a password, the Data Catalog first encrypts the password using your AWS KMS key. It then encrypts the whole connection object again if catalog encryption is also enabled.
     *
     * This encryption requires that you set AWS KMS key permissions to enable or restrict access on the password key according to your security requirements. For example, you might want only administrators to have decrypt permission on the password key.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-connectionpasswordencryption.html
     */
    interface ConnectionPasswordEncryptionProperty {
        /**
         * An AWS KMS key that is used to encrypt the connection password.
         *
         * If connection password protection is enabled, the caller of `CreateConnection` and `UpdateConnection` needs at least `kms:Encrypt` permission on the specified AWS KMS key, to encrypt passwords before storing them in the Data Catalog. You can set the decrypt permission to enable or restrict access on the password key according to your security requirements.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-connectionpasswordencryption.html#cfn-glue-datacatalogencryptionsettings-connectionpasswordencryption-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * When the `ReturnConnectionPasswordEncrypted` flag is set to "true", passwords remain encrypted in the responses of `GetConnection` and `GetConnections` .
         *
         * This encryption takes effect independently from catalog encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-connectionpasswordencryption.html#cfn-glue-datacatalogencryptionsettings-connectionpasswordencryption-returnconnectionpasswordencrypted
         */
        readonly returnConnectionPasswordEncrypted?: boolean | cdk.IResolvable;
    }
    /**
     * Specifies the encryption-at-rest configuration for the Data Catalog.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-encryptionatrest.html
     */
    interface EncryptionAtRestProperty {
        /**
         * The encryption-at-rest mode for encrypting Data Catalog data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-encryptionatrest.html#cfn-glue-datacatalogencryptionsettings-encryptionatrest-catalogencryptionmode
         */
        readonly catalogEncryptionMode?: string;
        /**
         * The role that AWS Glue assumes to encrypt and decrypt the Data Catalog objects on the caller's behalf.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-encryptionatrest.html#cfn-glue-datacatalogencryptionsettings-encryptionatrest-catalogencryptionservicerole
         */
        readonly catalogEncryptionServiceRole?: string;
        /**
         * The ID of the AWS KMS key to use for encryption at rest.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-encryptionatrest.html#cfn-glue-datacatalogencryptionsettings-encryptionatrest-sseawskmskeyid
         */
        readonly sseAwsKmsKeyId?: string;
    }
}
/**
 * Properties for defining a `CfnDataCatalogEncryptionSettings`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-datacatalogencryptionsettings.html
 */
export interface CfnDataCatalogEncryptionSettingsProps {
    /**
     * The ID of the Data Catalog in which the settings are created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-datacatalogencryptionsettings.html#cfn-glue-datacatalogencryptionsettings-catalogid
     */
    readonly catalogId: string;
    /**
     * Contains configuration information for maintaining Data Catalog security.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-datacatalogencryptionsettings.html#cfn-glue-datacatalogencryptionsettings-datacatalogencryptionsettings
     */
    readonly dataCatalogEncryptionSettings: CfnDataCatalogEncryptionSettings.DataCatalogEncryptionSettingsProperty | cdk.IResolvable;
}
/**
 * The `AWS::Glue::DataQualityRuleset` resource specifies a data quality ruleset with DQDL rules applied to a specified AWS Glue table.
 *
 * For more information, see AWS Glue Data Quality in the AWS Glue Developer Guide.
 *
 * @cloudformationResource AWS::Glue::DataQualityRuleset
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-dataqualityruleset.html
 */
export declare class CfnDataQualityRuleset extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataQualityRuleset from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataQualityRuleset;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Used for idempotency and is recommended to be set to a random ID (such as a UUID) to avoid creating or starting multiple instances of the same resource.
     */
    clientToken?: string;
    /**
     * A description of the data quality ruleset.
     */
    description?: string;
    /**
     * The name of the data quality ruleset.
     */
    name?: string;
    /**
     * A Data Quality Definition Language (DQDL) ruleset.
     */
    ruleset?: string;
    /**
     * A list of tags applied to the data quality ruleset.
     */
    tags?: any;
    /**
     * An object representing an AWS Glue table.
     */
    targetTable?: CfnDataQualityRuleset.DataQualityTargetTableProperty | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnDataQualityRulesetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataQualityRuleset {
    /**
     * An object representing an AWS Glue table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-dataqualityruleset-dataqualitytargettable.html
     */
    interface DataQualityTargetTableProperty {
        /**
         * The name of the database where the AWS Glue table exists.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-dataqualityruleset-dataqualitytargettable.html#cfn-glue-dataqualityruleset-dataqualitytargettable-databasename
         */
        readonly databaseName?: string;
        /**
         * The name of the AWS Glue table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-dataqualityruleset-dataqualitytargettable.html#cfn-glue-dataqualityruleset-dataqualitytargettable-tablename
         */
        readonly tableName?: string;
    }
}
/**
 * Properties for defining a `CfnDataQualityRuleset`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-dataqualityruleset.html
 */
export interface CfnDataQualityRulesetProps {
    /**
     * Used for idempotency and is recommended to be set to a random ID (such as a UUID) to avoid creating or starting multiple instances of the same resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-dataqualityruleset.html#cfn-glue-dataqualityruleset-clienttoken
     */
    readonly clientToken?: string;
    /**
     * A description of the data quality ruleset.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-dataqualityruleset.html#cfn-glue-dataqualityruleset-description
     */
    readonly description?: string;
    /**
     * The name of the data quality ruleset.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-dataqualityruleset.html#cfn-glue-dataqualityruleset-name
     */
    readonly name?: string;
    /**
     * A Data Quality Definition Language (DQDL) ruleset.
     *
     * For more information see the AWS Glue Developer Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-dataqualityruleset.html#cfn-glue-dataqualityruleset-ruleset
     */
    readonly ruleset?: string;
    /**
     * A list of tags applied to the data quality ruleset.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-dataqualityruleset.html#cfn-glue-dataqualityruleset-tags
     */
    readonly tags?: any;
    /**
     * An object representing an AWS Glue table.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-dataqualityruleset.html#cfn-glue-dataqualityruleset-targettable
     */
    readonly targetTable?: CfnDataQualityRuleset.DataQualityTargetTableProperty | cdk.IResolvable;
}
/**
 * The `AWS::Glue::Database` resource specifies a logical grouping of tables in AWS Glue .
 *
 * For more information, see [Defining a Database in Your Data Catalog](https://docs.aws.amazon.com/glue/latest/dg/define-database.html) and [Database Structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-Database) in the *AWS Glue Developer Guide* .
 *
 * @cloudformationResource AWS::Glue::Database
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-database.html
 */
export declare class CfnDatabase extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDatabase from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDatabase;
    /**
     * The AWS account ID for the account in which to create the catalog object.
     */
    catalogId: string;
    /**
     * The metadata for the database.
     */
    databaseInput: CfnDatabase.DatabaseInputProperty | cdk.IResolvable;
    /**
     * The name of the catalog database.
     */
    databaseName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDatabaseProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDatabase {
    /**
     * The structure used to create or update a database.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseinput.html
     */
    interface DatabaseInputProperty {
        /**
         * Creates a set of default permissions on the table for principals.
         *
         * Used by AWS Lake Formation . Not used in the normal course of AWS Glue operations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseinput.html#cfn-glue-database-databaseinput-createtabledefaultpermissions
         */
        readonly createTableDefaultPermissions?: Array<cdk.IResolvable | CfnDatabase.PrincipalPrivilegesProperty> | cdk.IResolvable;
        /**
         * A description of the database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseinput.html#cfn-glue-database-databaseinput-description
         */
        readonly description?: string;
        /**
         * A `FederatedDatabase` structure that references an entity outside the AWS Glue Data Catalog .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseinput.html#cfn-glue-database-databaseinput-federateddatabase
         */
        readonly federatedDatabase?: CfnDatabase.FederatedDatabaseProperty | cdk.IResolvable;
        /**
         * The location of the database (for example, an HDFS path).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseinput.html#cfn-glue-database-databaseinput-locationuri
         */
        readonly locationUri?: string;
        /**
         * The name of the database.
         *
         * For Hive compatibility, this is folded to lowercase when it is stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseinput.html#cfn-glue-database-databaseinput-name
         */
        readonly name?: string;
        /**
         * These key-value pairs define parameters and properties of the database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseinput.html#cfn-glue-database-databaseinput-parameters
         */
        readonly parameters?: any | cdk.IResolvable;
        /**
         * A `DatabaseIdentifier` structure that describes a target database for resource linking.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseinput.html#cfn-glue-database-databaseinput-targetdatabase
         */
        readonly targetDatabase?: CfnDatabase.DatabaseIdentifierProperty | cdk.IResolvable;
    }
    /**
     * the permissions granted to a principal.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-principalprivileges.html
     */
    interface PrincipalPrivilegesProperty {
        /**
         * The permissions that are granted to the principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-principalprivileges.html#cfn-glue-database-principalprivileges-permissions
         */
        readonly permissions?: Array<string>;
        /**
         * The principal who is granted permissions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-principalprivileges.html#cfn-glue-database-principalprivileges-principal
         */
        readonly principal?: CfnDatabase.DataLakePrincipalProperty | cdk.IResolvable;
    }
    /**
     * The AWS Lake Formation principal.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-datalakeprincipal.html
     */
    interface DataLakePrincipalProperty {
        /**
         * An identifier for the AWS Lake Formation principal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-datalakeprincipal.html#cfn-glue-database-datalakeprincipal-datalakeprincipalidentifier
         */
        readonly dataLakePrincipalIdentifier?: string;
    }
    /**
     * A structure that describes a target database for resource linking.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseidentifier.html
     */
    interface DatabaseIdentifierProperty {
        /**
         * The ID of the Data Catalog in which the database resides.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseidentifier.html#cfn-glue-database-databaseidentifier-catalogid
         */
        readonly catalogId?: string;
        /**
         * The name of the catalog database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseidentifier.html#cfn-glue-database-databaseidentifier-databasename
         */
        readonly databaseName?: string;
        /**
         * The Region of the database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseidentifier.html#cfn-glue-database-databaseidentifier-region
         */
        readonly region?: string;
    }
    /**
     * A `FederatedDatabase` structure that references an entity outside the AWS Glue Data Catalog .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-federateddatabase.html
     */
    interface FederatedDatabaseProperty {
        /**
         * The name of the connection to the external metastore.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-federateddatabase.html#cfn-glue-database-federateddatabase-connectionname
         */
        readonly connectionName?: string;
        /**
         * A unique identifier for the federated database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-federateddatabase.html#cfn-glue-database-federateddatabase-identifier
         */
        readonly identifier?: string;
    }
}
/**
 * Properties for defining a `CfnDatabase`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-database.html
 */
export interface CfnDatabaseProps {
    /**
     * The AWS account ID for the account in which to create the catalog object.
     *
     * > To specify the account ID, you can use the `Ref` intrinsic function with the `AWS::AccountId` pseudo parameter. For example: `!Ref AWS::AccountId`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-database.html#cfn-glue-database-catalogid
     */
    readonly catalogId: string;
    /**
     * The metadata for the database.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-database.html#cfn-glue-database-databaseinput
     */
    readonly databaseInput: CfnDatabase.DatabaseInputProperty | cdk.IResolvable;
    /**
     * The name of the catalog database.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-database.html#cfn-glue-database-databasename
     */
    readonly databaseName?: string;
}
/**
 * The `AWS::Glue::DevEndpoint` resource specifies a development endpoint where a developer can remotely debug ETL scripts for AWS Glue .
 *
 * For more information, see [DevEndpoint Structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-dev-endpoint.html#aws-glue-api-jobs-dev-endpoint-DevEndpoint) in the AWS Glue Developer Guide.
 *
 * @cloudformationResource AWS::Glue::DevEndpoint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html
 */
export declare class CfnDevEndpoint extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDevEndpoint from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDevEndpoint;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A map of arguments used to configure the `DevEndpoint` .
     */
    arguments?: any | cdk.IResolvable;
    /**
     * The name of the `DevEndpoint` .
     */
    endpointName?: string;
    /**
     * The path to one or more Java `.jar` files in an S3 bucket that should be loaded in your `DevEndpoint` .
     */
    extraJarsS3Path?: string;
    /**
     * The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in your `DevEndpoint` .
     */
    extraPythonLibsS3Path?: string;
    /**
     * The AWS Glue version determines the versions of Apache Spark and Python that AWS Glue supports.
     */
    glueVersion?: string;
    /**
     * The number of AWS Glue Data Processing Units (DPUs) allocated to this `DevEndpoint` .
     */
    numberOfNodes?: number;
    /**
     * The number of workers of a defined `workerType` that are allocated to the development endpoint.
     */
    numberOfWorkers?: number;
    /**
     * The public key to be used by this `DevEndpoint` for authentication.
     */
    publicKey?: string;
    /**
     * A list of public keys to be used by the `DevEndpoints` for authentication.
     */
    publicKeys?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the IAM role used in this `DevEndpoint` .
     */
    roleArn: string;
    /**
     * The name of the `SecurityConfiguration` structure to be used with this `DevEndpoint` .
     */
    securityConfiguration?: string;
    /**
     * A list of security group identifiers used in this `DevEndpoint` .
     */
    securityGroupIds?: Array<string>;
    /**
     * The subnet ID for this `DevEndpoint` .
     */
    subnetId?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to use with this DevEndpoint.
     */
    tagsRaw?: any;
    /**
     * The type of predefined worker that is allocated to the development endpoint.
     */
    workerType?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDevEndpointProps);
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
 * Properties for defining a `CfnDevEndpoint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html
 */
export interface CfnDevEndpointProps {
    /**
     * A map of arguments used to configure the `DevEndpoint` .
     *
     * Valid arguments are:
     *
     * - `"--enable-glue-datacatalog": ""`
     * - `"GLUE_PYTHON_VERSION": "3"`
     * - `"GLUE_PYTHON_VERSION": "2"`
     *
     * You can specify a version of Python support for development endpoints by using the `Arguments` parameter in the `CreateDevEndpoint` or `UpdateDevEndpoint` APIs. If no arguments are provided, the version defaults to Python 2.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html#cfn-glue-devendpoint-arguments
     */
    readonly arguments?: any | cdk.IResolvable;
    /**
     * The name of the `DevEndpoint` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html#cfn-glue-devendpoint-endpointname
     */
    readonly endpointName?: string;
    /**
     * The path to one or more Java `.jar` files in an S3 bucket that should be loaded in your `DevEndpoint` .
     *
     * > You can only use pure Java/Scala libraries with a `DevEndpoint` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html#cfn-glue-devendpoint-extrajarss3path
     */
    readonly extraJarsS3Path?: string;
    /**
     * The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in your `DevEndpoint` .
     *
     * Multiple values must be complete paths separated by a comma.
     *
     * > You can only use pure Python libraries with a `DevEndpoint` . Libraries that rely on C extensions, such as the [pandas](https://docs.aws.amazon.com/http://pandas.pydata.org/) Python data analysis library, are not currently supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html#cfn-glue-devendpoint-extrapythonlibss3path
     */
    readonly extraPythonLibsS3Path?: string;
    /**
     * The AWS Glue version determines the versions of Apache Spark and Python that AWS Glue supports.
     *
     * The Python version indicates the version supported for running your ETL scripts on development endpoints.
     *
     * For more information about the available AWS Glue versions and corresponding Spark and Python versions, see [Glue version](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) in the developer guide.
     *
     * Development endpoints that are created without specifying a Glue version default to Glue 0.9.
     *
     * You can specify a version of Python support for development endpoints by using the `Arguments` parameter in the `CreateDevEndpoint` or `UpdateDevEndpoint` APIs. If no arguments are provided, the version defaults to Python 2.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html#cfn-glue-devendpoint-glueversion
     */
    readonly glueVersion?: string;
    /**
     * The number of AWS Glue Data Processing Units (DPUs) allocated to this `DevEndpoint` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html#cfn-glue-devendpoint-numberofnodes
     */
    readonly numberOfNodes?: number;
    /**
     * The number of workers of a defined `workerType` that are allocated to the development endpoint.
     *
     * The maximum number of workers you can define are 299 for `G.1X` , and 149 for `G.2X` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html#cfn-glue-devendpoint-numberofworkers
     */
    readonly numberOfWorkers?: number;
    /**
     * The public key to be used by this `DevEndpoint` for authentication.
     *
     * This attribute is provided for backward compatibility because the recommended attribute to use is public keys.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html#cfn-glue-devendpoint-publickey
     */
    readonly publicKey?: string;
    /**
     * A list of public keys to be used by the `DevEndpoints` for authentication.
     *
     * Using this attribute is preferred over a single public key because the public keys allow you to have a different private key per client.
     *
     * > If you previously created an endpoint with a public key, you must remove that key to be able to set a list of public keys. Call the `UpdateDevEndpoint` API operation with the public key content in the `deletePublicKeys` attribute, and the list of new keys in the `addPublicKeys` attribute.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html#cfn-glue-devendpoint-publickeys
     */
    readonly publicKeys?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the IAM role used in this `DevEndpoint` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html#cfn-glue-devendpoint-rolearn
     */
    readonly roleArn: string;
    /**
     * The name of the `SecurityConfiguration` structure to be used with this `DevEndpoint` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html#cfn-glue-devendpoint-securityconfiguration
     */
    readonly securityConfiguration?: string;
    /**
     * A list of security group identifiers used in this `DevEndpoint` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html#cfn-glue-devendpoint-securitygroupids
     */
    readonly securityGroupIds?: Array<string>;
    /**
     * The subnet ID for this `DevEndpoint` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html#cfn-glue-devendpoint-subnetid
     */
    readonly subnetId?: string;
    /**
     * The tags to use with this DevEndpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html#cfn-glue-devendpoint-tags
     */
    readonly tags?: any;
    /**
     * The type of predefined worker that is allocated to the development endpoint.
     *
     * Accepts a value of Standard, G.1X, or G.2X.
     *
     * - For the `Standard` worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.
     * - For the `G.1X` worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.
     * - For the `G.2X` worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.
     *
     * Known issue: when a development endpoint is created with the `G.2X` `WorkerType` configuration, the Spark drivers for the development endpoint will run on 4 vCPU, 16 GB of memory, and a 64 GB disk.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html#cfn-glue-devendpoint-workertype
     */
    readonly workerType?: string;
}
/**
 * The `AWS::Glue::Job` resource specifies an AWS Glue job in the data catalog.
 *
 * For more information, see [Adding Jobs in AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) and [Job Structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job) in the *AWS Glue Developer Guide.*
 *
 * @cloudformationResource AWS::Glue::Job
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html
 */
export declare class CfnJob extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnJob from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnJob;
    /**
     * This parameter is no longer supported. Use `MaxCapacity` instead.
     */
    allocatedCapacity?: number;
    /**
     * The code that executes a job.
     */
    command: cdk.IResolvable | CfnJob.JobCommandProperty;
    /**
     * The connections used for this job.
     */
    connections?: CfnJob.ConnectionsListProperty | cdk.IResolvable;
    /**
     * The default arguments for this job, specified as name-value pairs.
     */
    defaultArguments?: any | cdk.IResolvable;
    /**
     * A description of the job.
     */
    description?: string;
    /**
     * Indicates whether the job is run with a standard or flexible execution class.
     */
    executionClass?: string;
    /**
     * The maximum number of concurrent runs that are allowed for this job.
     */
    executionProperty?: CfnJob.ExecutionPropertyProperty | cdk.IResolvable;
    /**
     * Glue version determines the versions of Apache Spark and Python that AWS Glue supports.
     */
    glueVersion?: string;
    /**
     * A mode that describes how a job was created. Valid values are:.
     */
    jobMode?: string;
    /**
     * Specifies whether job run queuing is enabled for the job runs for this job.
     */
    jobRunQueuingEnabled?: boolean | cdk.IResolvable;
    /**
     * This field is reserved for future use.
     */
    logUri?: string;
    /**
     * This field specifies a day of the week and hour for a maintenance window for streaming jobs.
     */
    maintenanceWindow?: string;
    /**
     * The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs.
     */
    maxCapacity?: number;
    /**
     * The maximum number of times to retry this job after a JobRun fails.
     */
    maxRetries?: number;
    /**
     * The name you assign to this job definition.
     */
    name?: string;
    /**
     * Non-overridable arguments for this job, specified as name-value pairs.
     */
    nonOverridableArguments?: any | cdk.IResolvable;
    /**
     * Specifies configuration properties of a notification.
     */
    notificationProperty?: cdk.IResolvable | CfnJob.NotificationPropertyProperty;
    /**
     * The number of workers of a defined `workerType` that are allocated when a job runs.
     */
    numberOfWorkers?: number;
    /**
     * The name or Amazon Resource Name (ARN) of the IAM role associated with this job.
     */
    role: string;
    /**
     * The name of the `SecurityConfiguration` structure to be used with this job.
     */
    securityConfiguration?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to use with this job.
     */
    tagsRaw?: any;
    /**
     * The job timeout in minutes.
     */
    timeout?: number;
    /**
     * The type of predefined worker that is allocated when a job runs.
     */
    workerType?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnJobProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnJob {
    /**
     * Specifies the connections used by a job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-connectionslist.html
     */
    interface ConnectionsListProperty {
        /**
         * A list of connections used by the job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-connectionslist.html#cfn-glue-job-connectionslist-connections
         */
        readonly connections?: Array<string>;
    }
    /**
     * Specifies configuration properties of a notification.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-notificationproperty.html
     */
    interface NotificationPropertyProperty {
        /**
         * After a job run starts, the number of minutes to wait before sending a job run delay notification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-notificationproperty.html#cfn-glue-job-notificationproperty-notifydelayafter
         */
        readonly notifyDelayAfter?: number;
    }
    /**
     * Specifies code executed when a job is run.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-jobcommand.html
     */
    interface JobCommandProperty {
        /**
         * The name of the job command.
         *
         * For an Apache Spark ETL job, this must be `glueetl` . For a Python shell job, it must be `pythonshell` . For an Apache Spark streaming ETL job, this must be `gluestreaming` . For a Ray job, this must be `glueray` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-jobcommand.html#cfn-glue-job-jobcommand-name
         */
        readonly name?: string;
        /**
         * The Python version being used to execute a Python shell job.
         *
         * Allowed values are 3 or 3.9. Version 2 is deprecated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-jobcommand.html#cfn-glue-job-jobcommand-pythonversion
         */
        readonly pythonVersion?: string;
        /**
         * In Ray jobs, Runtime is used to specify the versions of Ray, Python and additional libraries available in your environment.
         *
         * This field is not used in other job types. For supported runtime environment values, see [Working with Ray jobs](https://docs.aws.amazon.com/glue/latest/dg/ray-jobs-section.html) in the AWS Glue Developer Guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-jobcommand.html#cfn-glue-job-jobcommand-runtime
         */
        readonly runtime?: string;
        /**
         * Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job (required).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-jobcommand.html#cfn-glue-job-jobcommand-scriptlocation
         */
        readonly scriptLocation?: string;
    }
    /**
     * An execution property of a job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-executionproperty.html
     */
    interface ExecutionPropertyProperty {
        /**
         * The maximum number of concurrent runs allowed for the job.
         *
         * The default is 1. An error is returned when this threshold is reached. The maximum value you can specify is controlled by a service limit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-executionproperty.html#cfn-glue-job-executionproperty-maxconcurrentruns
         */
        readonly maxConcurrentRuns?: number;
    }
}
/**
 * Properties for defining a `CfnJob`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html
 */
export interface CfnJobProps {
    /**
     * This parameter is no longer supported. Use `MaxCapacity` instead.
     *
     * The number of capacity units that are allocated to this job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-allocatedcapacity
     */
    readonly allocatedCapacity?: number;
    /**
     * The code that executes a job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-command
     */
    readonly command: cdk.IResolvable | CfnJob.JobCommandProperty;
    /**
     * The connections used for this job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-connections
     */
    readonly connections?: CfnJob.ConnectionsListProperty | cdk.IResolvable;
    /**
     * The default arguments for this job, specified as name-value pairs.
     *
     * You can specify arguments here that your own job-execution script consumes, in addition to arguments that AWS Glue itself consumes.
     *
     * For information about how to specify and consume your own job arguments, see [Calling AWS Glue APIs in Python](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html) in the *AWS Glue Developer Guide* .
     *
     * For information about the key-value pairs that AWS Glue consumes to set up your job, see [Special Parameters Used by AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html) in the *AWS Glue Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-defaultarguments
     */
    readonly defaultArguments?: any | cdk.IResolvable;
    /**
     * A description of the job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-description
     */
    readonly description?: string;
    /**
     * Indicates whether the job is run with a standard or flexible execution class.
     *
     * The standard execution class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.
     *
     * The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary.
     *
     * Only jobs with AWS Glue version 3.0 and above and command type `glueetl` will be allowed to set `ExecutionClass` to `FLEX` . The flexible execution class is available for Spark jobs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-executionclass
     */
    readonly executionClass?: string;
    /**
     * The maximum number of concurrent runs that are allowed for this job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-executionproperty
     */
    readonly executionProperty?: CfnJob.ExecutionPropertyProperty | cdk.IResolvable;
    /**
     * Glue version determines the versions of Apache Spark and Python that AWS Glue supports.
     *
     * The Python version indicates the version supported for jobs of type Spark.
     *
     * For more information about the available AWS Glue versions and corresponding Spark and Python versions, see [Glue version](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) in the developer guide.
     *
     * Jobs that are created without specifying a Glue version default to the latest Glue version available.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-glueversion
     */
    readonly glueVersion?: string;
    /**
     * A mode that describes how a job was created. Valid values are:.
     *
     * - `SCRIPT` - The job was created using the AWS Glue Studio script editor.
     * - `VISUAL` - The job was created using the AWS Glue Studio visual editor.
     * - `NOTEBOOK` - The job was created using an interactive sessions notebook.
     *
     * When the `JobMode` field is missing or null, `SCRIPT` is assigned as the default value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-jobmode
     */
    readonly jobMode?: string;
    /**
     * Specifies whether job run queuing is enabled for the job runs for this job.
     *
     * A value of true means job run queuing is enabled for the job runs. If false or not populated, the job runs will not be considered for queueing.
     *
     * If this field does not match the value set in the job run, then the value from the job run field will be used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-jobrunqueuingenabled
     */
    readonly jobRunQueuingEnabled?: boolean | cdk.IResolvable;
    /**
     * This field is reserved for future use.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-loguri
     */
    readonly logUri?: string;
    /**
     * This field specifies a day of the week and hour for a maintenance window for streaming jobs.
     *
     * AWS Glue periodically performs maintenance activities. During these maintenance windows, AWS Glue will need to restart your streaming jobs.
     *
     * AWS Glue will restart the job within 3 hours of the specified maintenance window. For instance, if you set up the maintenance window for Monday at 10:00AM GMT, your jobs will be restarted between 10:00AM GMT to 1:00PM GMT.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-maintenancewindow
     */
    readonly maintenanceWindow?: string;
    /**
     * The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs.
     *
     * A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
     *
     * Do not set `Max Capacity` if using `WorkerType` and `NumberOfWorkers` .
     *
     * The value that can be allocated for `MaxCapacity` depends on whether you are running a Python shell job or an Apache Spark ETL job:
     *
     * - When you specify a Python shell job ( `JobCommand.Name` ="pythonshell"), you can allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.
     * - When you specify an Apache Spark ETL job ( `JobCommand.Name` ="glueetl"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-maxcapacity
     */
    readonly maxCapacity?: number;
    /**
     * The maximum number of times to retry this job after a JobRun fails.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-maxretries
     */
    readonly maxRetries?: number;
    /**
     * The name you assign to this job definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-name
     */
    readonly name?: string;
    /**
     * Non-overridable arguments for this job, specified as name-value pairs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-nonoverridablearguments
     */
    readonly nonOverridableArguments?: any | cdk.IResolvable;
    /**
     * Specifies configuration properties of a notification.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-notificationproperty
     */
    readonly notificationProperty?: cdk.IResolvable | CfnJob.NotificationPropertyProperty;
    /**
     * The number of workers of a defined `workerType` that are allocated when a job runs.
     *
     * The maximum number of workers you can define are 299 for `G.1X` , and 149 for `G.2X` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-numberofworkers
     */
    readonly numberOfWorkers?: number;
    /**
     * The name or Amazon Resource Name (ARN) of the IAM role associated with this job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-role
     */
    readonly role: string;
    /**
     * The name of the `SecurityConfiguration` structure to be used with this job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-securityconfiguration
     */
    readonly securityConfiguration?: string;
    /**
     * The tags to use with this job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-tags
     */
    readonly tags?: any;
    /**
     * The job timeout in minutes.
     *
     * This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-timeout
     */
    readonly timeout?: number;
    /**
     * The type of predefined worker that is allocated when a job runs.
     *
     * Accepts a value of G.1X, G.2X, G.4X, G.8X or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs.
     *
     * - For the `G.1X` worker type, each worker maps to 1 DPU (4 vCPUs, 16 GB of memory) with 94GB disk, and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.
     * - For the `G.2X` worker type, each worker maps to 2 DPU (8 vCPUs, 32 GB of memory) with 138GB disk, and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.
     * - For the `G.4X` worker type, each worker maps to 4 DPU (16 vCPUs, 64 GB of memory) with 256GB disk, and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for AWS Glue version 3.0 or later Spark ETL jobs in the following AWS Regions: US East (Ohio), US East (N. Virginia), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Canada (Central), Europe (Frankfurt), Europe (Ireland), and Europe (Stockholm).
     * - For the `G.8X` worker type, each worker maps to 8 DPU (32 vCPUs, 128 GB of memory) with 512GB disk, and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for AWS Glue version 3.0 or later Spark ETL jobs, in the same AWS Regions as supported for the `G.4X` worker type.
     * - For the `G.025X` worker type, each worker maps to 0.25 DPU (2 vCPUs, 4 GB of memory) with 84GB disk, and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for AWS Glue version 3.0 or later streaming jobs.
     * - For the `Z.2X` worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk, and provides up to 8 Ray workers based on the autoscaler.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-workertype
     */
    readonly workerType?: string;
}
/**
 * The AWS::Glue::MLTransform is an AWS Glue resource type that manages machine learning transforms.
 *
 * @cloudformationResource AWS::Glue::MLTransform
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html
 */
export declare class CfnMLTransform extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMLTransform from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMLTransform;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A user-defined, long-form description text for the machine learning transform.
     */
    description?: string;
    /**
     * This value determines which version of AWS Glue this machine learning transform is compatible with.
     */
    glueVersion?: string;
    /**
     * A list of AWS Glue table definitions used by the transform.
     */
    inputRecordTables: CfnMLTransform.InputRecordTablesProperty | cdk.IResolvable;
    /**
     * The number of AWS Glue data processing units (DPUs) that are allocated to task runs for this transform.
     */
    maxCapacity?: number;
    /**
     * The maximum number of times to retry after an `MLTaskRun` of the machine learning transform fails.
     */
    maxRetries?: number;
    /**
     * A user-defined name for the machine learning transform. Names are required to be unique. `Name` is optional:.
     */
    name?: string;
    /**
     * The number of workers of a defined `workerType` that are allocated when a task of the transform runs.
     */
    numberOfWorkers?: number;
    /**
     * The name or Amazon Resource Name (ARN) of the IAM role with the required permissions.
     */
    role: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to use with this machine learning transform.
     */
    tagsRaw?: any;
    /**
     * The timeout in minutes of the machine learning transform.
     */
    timeout?: number;
    /**
     * The encryption-at-rest settings of the transform that apply to accessing user data.
     */
    transformEncryption?: cdk.IResolvable | CfnMLTransform.TransformEncryptionProperty;
    /**
     * The algorithm-specific parameters that are associated with the machine learning transform.
     */
    transformParameters: cdk.IResolvable | CfnMLTransform.TransformParametersProperty;
    /**
     * The type of predefined worker that is allocated when a task of this transform runs.
     */
    workerType?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMLTransformProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMLTransform {
    /**
     * The encryption-at-rest settings of the transform that apply to accessing user data.
     *
     * Machine learning
     * transforms can access user data encrypted in Amazon S3 using KMS.
     *
     * Additionally, imported labels and trained transforms can now be encrypted using a customer provided
     * KMS key.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-transformencryption.html
     */
    interface TransformEncryptionProperty {
        /**
         * The encryption-at-rest settings of the transform that apply to accessing user data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-transformencryption.html#cfn-glue-mltransform-transformencryption-mluserdataencryption
         */
        readonly mlUserDataEncryption?: cdk.IResolvable | CfnMLTransform.MLUserDataEncryptionProperty;
        /**
         * The name of the security configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-transformencryption.html#cfn-glue-mltransform-transformencryption-taskrunsecurityconfigurationname
         */
        readonly taskRunSecurityConfigurationName?: string;
    }
    /**
     * The encryption-at-rest settings of the transform that apply to accessing user data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-mluserdataencryption.html
     */
    interface MLUserDataEncryptionProperty {
        /**
         * The ID for the customer-provided KMS key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-mluserdataencryption.html#cfn-glue-mltransform-mluserdataencryption-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * The encryption mode applied to user data. Valid values are:.
         *
         * - DISABLED: encryption is disabled.
         * - SSEKMS: use of server-side encryption with AWS Key Management Service (SSE-KMS) for user data
         * stored in Amazon S3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-mluserdataencryption.html#cfn-glue-mltransform-mluserdataencryption-mluserdataencryptionmode
         */
        readonly mlUserDataEncryptionMode: string;
    }
    /**
     * The algorithm-specific parameters that are associated with the machine learning transform.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-transformparameters.html
     */
    interface TransformParametersProperty {
        /**
         * The parameters for the find matches algorithm.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-transformparameters.html#cfn-glue-mltransform-transformparameters-findmatchesparameters
         */
        readonly findMatchesParameters?: CfnMLTransform.FindMatchesParametersProperty | cdk.IResolvable;
        /**
         * The type of machine learning transform. `FIND_MATCHES` is the only option.
         *
         * For information about the types of machine learning transforms, see [Working with machine learning transforms](https://docs.aws.amazon.com/glue/latest/dg/console-machine-learning-transforms.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-transformparameters.html#cfn-glue-mltransform-transformparameters-transformtype
         */
        readonly transformType: string;
    }
    /**
     * The parameters to configure the find matches transform.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-findmatchesparameters.html
     */
    interface FindMatchesParametersProperty {
        /**
         * The value that is selected when tuning your transform for a balance between accuracy and cost.
         *
         * A value of 0.5 means that the system balances accuracy and cost concerns. A value of 1.0 means a bias purely for accuracy, which typically results in a higher cost, sometimes substantially higher. A value of 0.0 means a bias purely for cost, which results in a less accurate `FindMatches` transform, sometimes with unacceptable accuracy.
         *
         * Accuracy measures how well the transform finds true positives and true negatives. Increasing accuracy requires more machine resources and cost. But it also results in increased recall.
         *
         * Cost measures how many compute resources, and thus money, are consumed to run the transform.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-findmatchesparameters.html#cfn-glue-mltransform-findmatchesparameters-accuracycosttradeoff
         */
        readonly accuracyCostTradeoff?: number;
        /**
         * The value to switch on or off to force the output to match the provided labels from users.
         *
         * If the value is `True` , the `find matches` transform forces the output to match the provided labels. The results override the normal conflation results. If the value is `False` , the `find matches` transform does not ensure all the labels provided are respected, and the results rely on the trained model.
         *
         * Note that setting this value to true may increase the conflation execution time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-findmatchesparameters.html#cfn-glue-mltransform-findmatchesparameters-enforceprovidedlabels
         */
        readonly enforceProvidedLabels?: boolean | cdk.IResolvable;
        /**
         * The value selected when tuning your transform for a balance between precision and recall.
         *
         * A value of 0.5 means no preference; a value of 1.0 means a bias purely for precision, and a value of 0.0 means a bias for recall. Because this is a tradeoff, choosing values close to 1.0 means very low recall, and choosing values close to 0.0 results in very low precision.
         *
         * The precision metric indicates how often your model is correct when it predicts a match.
         *
         * The recall metric indicates that for an actual match, how often your model predicts the match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-findmatchesparameters.html#cfn-glue-mltransform-findmatchesparameters-precisionrecalltradeoff
         */
        readonly precisionRecallTradeoff?: number;
        /**
         * The name of a column that uniquely identifies rows in the source table.
         *
         * Used to help identify matching records.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-findmatchesparameters.html#cfn-glue-mltransform-findmatchesparameters-primarykeycolumnname
         */
        readonly primaryKeyColumnName: string;
    }
    /**
     * A list of AWS Glue table definitions used by the transform.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-inputrecordtables.html
     */
    interface InputRecordTablesProperty {
        /**
         * The database and table in the AWS Glue Data Catalog that is used for input or output data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-inputrecordtables.html#cfn-glue-mltransform-inputrecordtables-gluetables
         */
        readonly glueTables?: Array<CfnMLTransform.GlueTablesProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * The database and table in the AWS Glue Data Catalog that is used for input or output data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-gluetables.html
     */
    interface GlueTablesProperty {
        /**
         * A unique identifier for the AWS Glue Data Catalog .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-gluetables.html#cfn-glue-mltransform-gluetables-catalogid
         */
        readonly catalogId?: string;
        /**
         * The name of the connection to the AWS Glue Data Catalog .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-gluetables.html#cfn-glue-mltransform-gluetables-connectionname
         */
        readonly connectionName?: string;
        /**
         * A database name in the AWS Glue Data Catalog .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-gluetables.html#cfn-glue-mltransform-gluetables-databasename
         */
        readonly databaseName: string;
        /**
         * A table name in the AWS Glue Data Catalog .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-gluetables.html#cfn-glue-mltransform-gluetables-tablename
         */
        readonly tableName: string;
    }
}
/**
 * Properties for defining a `CfnMLTransform`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html
 */
export interface CfnMLTransformProps {
    /**
     * A user-defined, long-form description text for the machine learning transform.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html#cfn-glue-mltransform-description
     */
    readonly description?: string;
    /**
     * This value determines which version of AWS Glue this machine learning transform is compatible with.
     *
     * Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9. For more information, see [AWS Glue Versions](https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions) in the developer guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html#cfn-glue-mltransform-glueversion
     */
    readonly glueVersion?: string;
    /**
     * A list of AWS Glue table definitions used by the transform.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html#cfn-glue-mltransform-inputrecordtables
     */
    readonly inputRecordTables: CfnMLTransform.InputRecordTablesProperty | cdk.IResolvable;
    /**
     * The number of AWS Glue data processing units (DPUs) that are allocated to task runs for this transform.
     *
     * You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the [AWS Glue pricing page](https://docs.aws.amazon.com/glue/pricing/) .
     *
     * `MaxCapacity` is a mutually exclusive option with `NumberOfWorkers` and `WorkerType` .
     *
     * - If either `NumberOfWorkers` or `WorkerType` is set, then `MaxCapacity` cannot be set.
     * - If `MaxCapacity` is set then neither `NumberOfWorkers` or `WorkerType` can be set.
     * - If `WorkerType` is set, then `NumberOfWorkers` is required (and vice versa).
     * - `MaxCapacity` and `NumberOfWorkers` must both be at least 1.
     *
     * When the `WorkerType` field is set to a value other than `Standard` , the `MaxCapacity` field is set automatically and becomes read-only.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html#cfn-glue-mltransform-maxcapacity
     */
    readonly maxCapacity?: number;
    /**
     * The maximum number of times to retry after an `MLTaskRun` of the machine learning transform fails.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html#cfn-glue-mltransform-maxretries
     */
    readonly maxRetries?: number;
    /**
     * A user-defined name for the machine learning transform. Names are required to be unique. `Name` is optional:.
     *
     * - If you supply `Name` , the stack cannot be repeatedly created.
     * - If `Name` is not provided, a randomly generated name will be used instead.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html#cfn-glue-mltransform-name
     */
    readonly name?: string;
    /**
     * The number of workers of a defined `workerType` that are allocated when a task of the transform runs.
     *
     * If `WorkerType` is set, then `NumberOfWorkers` is required (and vice versa).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html#cfn-glue-mltransform-numberofworkers
     */
    readonly numberOfWorkers?: number;
    /**
     * The name or Amazon Resource Name (ARN) of the IAM role with the required permissions.
     *
     * The required permissions include both AWS Glue service role permissions to AWS Glue resources, and Amazon S3 permissions required by the transform.
     *
     * - This role needs AWS Glue service role permissions to allow access to resources in AWS Glue . See [Attach a Policy to IAM Users That Access AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/attach-policy-iam-user.html) .
     * - This role needs permission to your Amazon Simple Storage Service (Amazon S3) sources, targets, temporary directory, scripts, and any libraries used by the task run for this transform.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html#cfn-glue-mltransform-role
     */
    readonly role: string;
    /**
     * The tags to use with this machine learning transform.
     *
     * You may use tags to limit access to the machine learning transform. For more information about tags in AWS Glue , see [AWS Tags in AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html) in the developer guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html#cfn-glue-mltransform-tags
     */
    readonly tags?: any;
    /**
     * The timeout in minutes of the machine learning transform.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html#cfn-glue-mltransform-timeout
     */
    readonly timeout?: number;
    /**
     * The encryption-at-rest settings of the transform that apply to accessing user data.
     *
     * Machine learning
     * transforms can access user data encrypted in Amazon S3 using KMS.
     *
     * Additionally, imported labels and trained transforms can now be encrypted using a customer provided
     * KMS key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html#cfn-glue-mltransform-transformencryption
     */
    readonly transformEncryption?: cdk.IResolvable | CfnMLTransform.TransformEncryptionProperty;
    /**
     * The algorithm-specific parameters that are associated with the machine learning transform.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html#cfn-glue-mltransform-transformparameters
     */
    readonly transformParameters: cdk.IResolvable | CfnMLTransform.TransformParametersProperty;
    /**
     * The type of predefined worker that is allocated when a task of this transform runs.
     *
     * Accepts a value of Standard, G.1X, or G.2X.
     *
     * - For the `Standard` worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.
     * - For the `G.1X` worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.
     * - For the `G.2X` worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.
     *
     * `MaxCapacity` is a mutually exclusive option with `NumberOfWorkers` and `WorkerType` .
     *
     * - If either `NumberOfWorkers` or `WorkerType` is set, then `MaxCapacity` cannot be set.
     * - If `MaxCapacity` is set then neither `NumberOfWorkers` or `WorkerType` can be set.
     * - If `WorkerType` is set, then `NumberOfWorkers` is required (and vice versa).
     * - `MaxCapacity` and `NumberOfWorkers` must both be at least 1.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html#cfn-glue-mltransform-workertype
     */
    readonly workerType?: string;
}
/**
 * The `AWS::Glue::Partition` resource creates an AWS Glue partition, which represents a slice of table data.
 *
 * For more information, see [CreatePartition Action](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-CreatePartition) and [Partition Structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-Partition) in the *AWS Glue Developer Guide* .
 *
 * @cloudformationResource AWS::Glue::Partition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-partition.html
 */
export declare class CfnPartition extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPartition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPartition;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The AWS account ID of the catalog in which the partion is to be created.
     */
    catalogId: string;
    /**
     * The name of the catalog database in which to create the partition.
     */
    databaseName: string;
    /**
     * The structure used to create and update a partition.
     */
    partitionInput: cdk.IResolvable | CfnPartition.PartitionInputProperty;
    /**
     * The name of the metadata table in which the partition is to be created.
     */
    tableName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPartitionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPartition {
    /**
     * The structure used to create and update a partition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-partitioninput.html
     */
    interface PartitionInputProperty {
        /**
         * These key-value pairs define partition parameters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-partitioninput.html#cfn-glue-partition-partitioninput-parameters
         */
        readonly parameters?: any | cdk.IResolvable;
        /**
         * Provides information about the physical location where the partition is stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-partitioninput.html#cfn-glue-partition-partitioninput-storagedescriptor
         */
        readonly storageDescriptor?: cdk.IResolvable | CfnPartition.StorageDescriptorProperty;
        /**
         * The values of the partition.
         *
         * Although this parameter is not required by the SDK, you must specify this parameter for a valid input.
         *
         * The values for the keys for the new partition must be passed as an array of String objects that must be ordered in the same order as the partition keys appearing in the Amazon S3 prefix. Otherwise AWS Glue will add the values to the wrong keys.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-partitioninput.html#cfn-glue-partition-partitioninput-values
         */
        readonly values: Array<string>;
    }
    /**
     * Describes the physical storage of table data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-storagedescriptor.html
     */
    interface StorageDescriptorProperty {
        /**
         * A list of reducer grouping columns, clustering columns, and bucketing columns in the table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-storagedescriptor.html#cfn-glue-partition-storagedescriptor-bucketcolumns
         */
        readonly bucketColumns?: Array<string>;
        /**
         * A list of the `Columns` in the table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-storagedescriptor.html#cfn-glue-partition-storagedescriptor-columns
         */
        readonly columns?: Array<CfnPartition.ColumnProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * `True` if the data in the table is compressed, or `False` if not.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-storagedescriptor.html#cfn-glue-partition-storagedescriptor-compressed
         */
        readonly compressed?: boolean | cdk.IResolvable;
        /**
         * The input format: `SequenceFileInputFormat` (binary), or `TextInputFormat` , or a custom format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-storagedescriptor.html#cfn-glue-partition-storagedescriptor-inputformat
         */
        readonly inputFormat?: string;
        /**
         * The physical location of the table.
         *
         * By default, this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-storagedescriptor.html#cfn-glue-partition-storagedescriptor-location
         */
        readonly location?: string;
        /**
         * The number of buckets.
         *
         * You must specify this property if the partition contains any dimension columns.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-storagedescriptor.html#cfn-glue-partition-storagedescriptor-numberofbuckets
         */
        readonly numberOfBuckets?: number;
        /**
         * The output format: `SequenceFileOutputFormat` (binary), or `IgnoreKeyTextOutputFormat` , or a custom format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-storagedescriptor.html#cfn-glue-partition-storagedescriptor-outputformat
         */
        readonly outputFormat?: string;
        /**
         * The user-supplied properties in key-value form.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-storagedescriptor.html#cfn-glue-partition-storagedescriptor-parameters
         */
        readonly parameters?: any | cdk.IResolvable;
        /**
         * An object that references a schema stored in the AWS Glue Schema Registry.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-storagedescriptor.html#cfn-glue-partition-storagedescriptor-schemareference
         */
        readonly schemaReference?: cdk.IResolvable | CfnPartition.SchemaReferenceProperty;
        /**
         * The serialization/deserialization (SerDe) information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-storagedescriptor.html#cfn-glue-partition-storagedescriptor-serdeinfo
         */
        readonly serdeInfo?: cdk.IResolvable | CfnPartition.SerdeInfoProperty;
        /**
         * The information about values that appear frequently in a column (skewed values).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-storagedescriptor.html#cfn-glue-partition-storagedescriptor-skewedinfo
         */
        readonly skewedInfo?: cdk.IResolvable | CfnPartition.SkewedInfoProperty;
        /**
         * A list specifying the sort order of each bucket in the table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-storagedescriptor.html#cfn-glue-partition-storagedescriptor-sortcolumns
         */
        readonly sortColumns?: Array<cdk.IResolvable | CfnPartition.OrderProperty> | cdk.IResolvable;
        /**
         * `True` if the table data is stored in subdirectories, or `False` if not.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-storagedescriptor.html#cfn-glue-partition-storagedescriptor-storedassubdirectories
         */
        readonly storedAsSubDirectories?: boolean | cdk.IResolvable;
    }
    /**
     * A column in a `Table` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-column.html
     */
    interface ColumnProperty {
        /**
         * A free-form text comment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-column.html#cfn-glue-partition-column-comment
         */
        readonly comment?: string;
        /**
         * The name of the `Column` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-column.html#cfn-glue-partition-column-name
         */
        readonly name: string;
        /**
         * The data type of the `Column` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-column.html#cfn-glue-partition-column-type
         */
        readonly type?: string;
    }
    /**
     * Information about a serialization/deserialization program (SerDe) that serves as an extractor and loader.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-serdeinfo.html
     */
    interface SerdeInfoProperty {
        /**
         * Name of the SerDe.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-serdeinfo.html#cfn-glue-partition-serdeinfo-name
         */
        readonly name?: string;
        /**
         * These key-value pairs define initialization parameters for the SerDe.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-serdeinfo.html#cfn-glue-partition-serdeinfo-parameters
         */
        readonly parameters?: any | cdk.IResolvable;
        /**
         * Usually the class that implements the SerDe.
         *
         * An example is `org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-serdeinfo.html#cfn-glue-partition-serdeinfo-serializationlibrary
         */
        readonly serializationLibrary?: string;
    }
    /**
     * Specifies the sort order of a sorted column.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-order.html
     */
    interface OrderProperty {
        /**
         * The name of the column.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-order.html#cfn-glue-partition-order-column
         */
        readonly column: string;
        /**
         * Indicates that the column is sorted in ascending order ( `== 1` ), or in descending order ( `==0` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-order.html#cfn-glue-partition-order-sortorder
         */
        readonly sortOrder?: number;
    }
    /**
     * An object that references a schema stored in the AWS Glue Schema Registry.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-schemareference.html
     */
    interface SchemaReferenceProperty {
        /**
         * A structure that contains schema identity fields.
         *
         * Either this or the `SchemaVersionId` has to be
         * provided.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-schemareference.html#cfn-glue-partition-schemareference-schemaid
         */
        readonly schemaId?: cdk.IResolvable | CfnPartition.SchemaIdProperty;
        /**
         * The unique ID assigned to a version of the schema.
         *
         * Either this or the `SchemaId` has to be provided.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-schemareference.html#cfn-glue-partition-schemareference-schemaversionid
         */
        readonly schemaVersionId?: string;
        /**
         * The version number of the schema.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-schemareference.html#cfn-glue-partition-schemareference-schemaversionnumber
         */
        readonly schemaVersionNumber?: number;
    }
    /**
     * A structure that contains schema identity fields.
     *
     * Either this or the `SchemaVersionId` has to be
     * provided.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-schemaid.html
     */
    interface SchemaIdProperty {
        /**
         * The name of the schema registry that contains the schema.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-schemaid.html#cfn-glue-partition-schemaid-registryname
         */
        readonly registryName?: string;
        /**
         * The Amazon Resource Name (ARN) of the schema.
         *
         * One of `SchemaArn` or `SchemaName` has to be
         * provided.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-schemaid.html#cfn-glue-partition-schemaid-schemaarn
         */
        readonly schemaArn?: string;
        /**
         * The name of the schema.
         *
         * One of `SchemaArn` or `SchemaName` has to be provided.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-schemaid.html#cfn-glue-partition-schemaid-schemaname
         */
        readonly schemaName?: string;
    }
    /**
     * Specifies skewed values in a table.
     *
     * Skewed values are those that occur with very high frequency.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-skewedinfo.html
     */
    interface SkewedInfoProperty {
        /**
         * A list of names of columns that contain skewed values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-skewedinfo.html#cfn-glue-partition-skewedinfo-skewedcolumnnames
         */
        readonly skewedColumnNames?: Array<string>;
        /**
         * A mapping of skewed values to the columns that contain them.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-skewedinfo.html#cfn-glue-partition-skewedinfo-skewedcolumnvaluelocationmaps
         */
        readonly skewedColumnValueLocationMaps?: any | cdk.IResolvable;
        /**
         * A list of values that appear so frequently as to be considered skewed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-skewedinfo.html#cfn-glue-partition-skewedinfo-skewedcolumnvalues
         */
        readonly skewedColumnValues?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnPartition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-partition.html
 */
export interface CfnPartitionProps {
    /**
     * The AWS account ID of the catalog in which the partion is to be created.
     *
     * > To specify the account ID, you can use the `Ref` intrinsic function with the `AWS::AccountId` pseudo parameter. For example: `!Ref AWS::AccountId`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-partition.html#cfn-glue-partition-catalogid
     */
    readonly catalogId: string;
    /**
     * The name of the catalog database in which to create the partition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-partition.html#cfn-glue-partition-databasename
     */
    readonly databaseName: string;
    /**
     * The structure used to create and update a partition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-partition.html#cfn-glue-partition-partitioninput
     */
    readonly partitionInput: cdk.IResolvable | CfnPartition.PartitionInputProperty;
    /**
     * The name of the metadata table in which the partition is to be created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-partition.html#cfn-glue-partition-tablename
     */
    readonly tableName: string;
}
/**
 * The AWS::Glue::Registry is an AWS Glue resource type that manages registries of schemas in the AWS Glue Schema Registry.
 *
 * @cloudformationResource AWS::Glue::Registry
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-registry.html
 */
export declare class CfnRegistry extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRegistry from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRegistry;
    /**
     * Amazon Resource Name for the created Registry.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A description of the registry.
     */
    description?: string;
    /**
     * The name of the registry.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * AWS tags that contain a key value pair and may be searched by console, command line, or API.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRegistryProps);
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
 * Properties for defining a `CfnRegistry`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-registry.html
 */
export interface CfnRegistryProps {
    /**
     * A description of the registry.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-registry.html#cfn-glue-registry-description
     */
    readonly description?: string;
    /**
     * The name of the registry.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-registry.html#cfn-glue-registry-name
     */
    readonly name: string;
    /**
     * AWS tags that contain a key value pair and may be searched by console, command line, or API.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-registry.html#cfn-glue-registry-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::Glue::Schema` is an AWS Glue resource type that manages schemas in the AWS Glue Schema Registry.
 *
 * @cloudformationResource AWS::Glue::Schema
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html
 */
export declare class CfnSchema extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSchema from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSchema;
    /**
     * The Amazon Resource Name (ARN) of the schema.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Represents the version ID associated with the initial schema version.
     *
     * @cloudformationAttribute InitialSchemaVersionId
     */
    readonly attrInitialSchemaVersionId: string;
    /**
     * Specify the `VersionNumber` or the `IsLatest` for setting the checkpoint for the schema.
     */
    checkpointVersion?: cdk.IResolvable | CfnSchema.SchemaVersionProperty;
    /**
     * The compatibility mode of the schema.
     */
    compatibility: string;
    /**
     * The data format of the schema definition.
     */
    dataFormat: string;
    /**
     * A description of the schema if specified when created.
     */
    description?: string;
    /**
     * Name of the schema to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark.
     */
    name: string;
    /**
     * The registry where a schema is stored.
     */
    registry?: cdk.IResolvable | CfnSchema.RegistryProperty;
    /**
     * The schema definition using the `DataFormat` setting for `SchemaName` .
     */
    schemaDefinition?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * AWS tags that contain a key value pair and may be searched by console, command line, or API.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSchemaProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSchema {
    /**
     * Specifies a registry in the AWS Glue Schema Registry.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schema-registry.html
     */
    interface RegistryProperty {
        /**
         * The Amazon Resource Name (ARN) of the registry.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schema-registry.html#cfn-glue-schema-registry-arn
         */
        readonly arn?: string;
        /**
         * The name of the registry.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schema-registry.html#cfn-glue-schema-registry-name
         */
        readonly name?: string;
    }
    /**
     * Specifies the version of a schema.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schema-schemaversion.html
     */
    interface SchemaVersionProperty {
        /**
         * Indicates if this version is the latest version of the schema.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schema-schemaversion.html#cfn-glue-schema-schemaversion-islatest
         */
        readonly isLatest?: boolean | cdk.IResolvable;
        /**
         * The version number of the schema.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schema-schemaversion.html#cfn-glue-schema-schemaversion-versionnumber
         */
        readonly versionNumber?: number;
    }
}
/**
 * Properties for defining a `CfnSchema`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html
 */
export interface CfnSchemaProps {
    /**
     * Specify the `VersionNumber` or the `IsLatest` for setting the checkpoint for the schema.
     *
     * This is only required for updating a checkpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html#cfn-glue-schema-checkpointversion
     */
    readonly checkpointVersion?: cdk.IResolvable | CfnSchema.SchemaVersionProperty;
    /**
     * The compatibility mode of the schema.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html#cfn-glue-schema-compatibility
     */
    readonly compatibility: string;
    /**
     * The data format of the schema definition.
     *
     * Currently only `AVRO` is supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html#cfn-glue-schema-dataformat
     */
    readonly dataFormat: string;
    /**
     * A description of the schema if specified when created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html#cfn-glue-schema-description
     */
    readonly description?: string;
    /**
     * Name of the schema to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark.
     *
     * No whitespace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html#cfn-glue-schema-name
     */
    readonly name: string;
    /**
     * The registry where a schema is stored.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html#cfn-glue-schema-registry
     */
    readonly registry?: cdk.IResolvable | CfnSchema.RegistryProperty;
    /**
     * The schema definition using the `DataFormat` setting for `SchemaName` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html#cfn-glue-schema-schemadefinition
     */
    readonly schemaDefinition?: string;
    /**
     * AWS tags that contain a key value pair and may be searched by console, command line, or API.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html#cfn-glue-schema-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::Glue::SchemaVersion` is an AWS Glue resource type that manages schema versions of schemas in the AWS Glue Schema Registry.
 *
 * @cloudformationResource AWS::Glue::SchemaVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html
 */
export declare class CfnSchemaVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSchemaVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSchemaVersion;
    /**
     * Represents the version ID associated with the schema version.
     *
     * @cloudformationAttribute VersionId
     */
    readonly attrVersionId: string;
    /**
     * The schema that includes the schema version.
     */
    schema: cdk.IResolvable | CfnSchemaVersion.SchemaProperty;
    /**
     * The schema definition for the schema version.
     */
    schemaDefinition: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSchemaVersionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSchemaVersion {
    /**
     * A wrapper structure to contain schema identity fields.
     *
     * Either `SchemaArn` , or `SchemaName` and `RegistryName` has to be provided.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schemaversion-schema.html
     */
    interface SchemaProperty {
        /**
         * The name of the registry where the schema is stored.
         *
         * Either `SchemaArn` , or `SchemaName` and `RegistryName` has to be provided.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schemaversion-schema.html#cfn-glue-schemaversion-schema-registryname
         */
        readonly registryName?: string;
        /**
         * The Amazon Resource Name (ARN) of the schema.
         *
         * Either `SchemaArn` , or `SchemaName` and `RegistryName` has to be provided.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schemaversion-schema.html#cfn-glue-schemaversion-schema-schemaarn
         */
        readonly schemaArn?: string;
        /**
         * The name of the schema.
         *
         * Either `SchemaArn` , or `SchemaName` and `RegistryName` has to be provided.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schemaversion-schema.html#cfn-glue-schemaversion-schema-schemaname
         */
        readonly schemaName?: string;
    }
}
/**
 * Properties for defining a `CfnSchemaVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html
 */
export interface CfnSchemaVersionProps {
    /**
     * The schema that includes the schema version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html#cfn-glue-schemaversion-schema
     */
    readonly schema: cdk.IResolvable | CfnSchemaVersion.SchemaProperty;
    /**
     * The schema definition for the schema version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html#cfn-glue-schemaversion-schemadefinition
     */
    readonly schemaDefinition: string;
}
/**
 * The `AWS::Glue::SchemaVersionMetadata` is an AWS Glue resource type that defines the metadata key-value pairs for a schema version in AWS Glue Schema Registry.
 *
 * @cloudformationResource AWS::Glue::SchemaVersionMetadata
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversionmetadata.html
 */
export declare class CfnSchemaVersionMetadata extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSchemaVersionMetadata from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSchemaVersionMetadata;
    /**
     * A metadata key in a key-value pair for metadata.
     */
    key: string;
    /**
     * The version number of the schema.
     */
    schemaVersionId: string;
    /**
     * A metadata key's corresponding value.
     */
    value: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSchemaVersionMetadataProps);
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
 * Properties for defining a `CfnSchemaVersionMetadata`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversionmetadata.html
 */
export interface CfnSchemaVersionMetadataProps {
    /**
     * A metadata key in a key-value pair for metadata.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversionmetadata.html#cfn-glue-schemaversionmetadata-key
     */
    readonly key: string;
    /**
     * The version number of the schema.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversionmetadata.html#cfn-glue-schemaversionmetadata-schemaversionid
     */
    readonly schemaVersionId: string;
    /**
     * A metadata key's corresponding value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversionmetadata.html#cfn-glue-schemaversionmetadata-value
     */
    readonly value: string;
}
/**
 * Creates a new security configuration.
 *
 * A security configuration is a set of security properties that can be used by AWS Glue . You can use a security configuration to encrypt data at rest. For information about using security configurations in AWS Glue , see [Encrypting Data Written by Crawlers, Jobs, and Development Endpoints](https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html) .
 *
 * @cloudformationResource AWS::Glue::SecurityConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html
 */
export declare class CfnSecurityConfiguration extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSecurityConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSecurityConfiguration;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The encryption configuration associated with this security configuration.
     */
    encryptionConfiguration: CfnSecurityConfiguration.EncryptionConfigurationProperty | cdk.IResolvable;
    /**
     * The name of the security configuration.
     */
    name: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSecurityConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSecurityConfiguration {
    /**
     * Specifies an encryption configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-encryptionconfiguration.html
     */
    interface EncryptionConfigurationProperty {
        /**
         * The encryption configuration for Amazon CloudWatch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-encryptionconfiguration.html#cfn-glue-securityconfiguration-encryptionconfiguration-cloudwatchencryption
         */
        readonly cloudWatchEncryption?: CfnSecurityConfiguration.CloudWatchEncryptionProperty | cdk.IResolvable;
        /**
         * The encryption configuration for job bookmarks.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-encryptionconfiguration.html#cfn-glue-securityconfiguration-encryptionconfiguration-jobbookmarksencryption
         */
        readonly jobBookmarksEncryption?: cdk.IResolvable | CfnSecurityConfiguration.JobBookmarksEncryptionProperty;
        /**
         * The encyption configuration for Amazon Simple Storage Service (Amazon S3) data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-encryptionconfiguration.html#cfn-glue-securityconfiguration-encryptionconfiguration-s3encryptions
         */
        readonly s3Encryptions?: Array<cdk.IResolvable | CfnSecurityConfiguration.S3EncryptionProperty> | cdk.IResolvable;
    }
    /**
     * Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-s3encryption.html
     */
    interface S3EncryptionProperty {
        /**
         * The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-s3encryption.html#cfn-glue-securityconfiguration-s3encryption-kmskeyarn
         */
        readonly kmsKeyArn?: string;
        /**
         * The encryption mode to use for Amazon S3 data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-s3encryption.html#cfn-glue-securityconfiguration-s3encryption-s3encryptionmode
         */
        readonly s3EncryptionMode?: string;
    }
    /**
     * Specifies how Amazon CloudWatch data should be encrypted.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-cloudwatchencryption.html
     */
    interface CloudWatchEncryptionProperty {
        /**
         * The encryption mode to use for CloudWatch data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-cloudwatchencryption.html#cfn-glue-securityconfiguration-cloudwatchencryption-cloudwatchencryptionmode
         */
        readonly cloudWatchEncryptionMode?: string;
        /**
         * The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-cloudwatchencryption.html#cfn-glue-securityconfiguration-cloudwatchencryption-kmskeyarn
         */
        readonly kmsKeyArn?: string;
    }
    /**
     * Specifies how job bookmark data should be encrypted.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-jobbookmarksencryption.html
     */
    interface JobBookmarksEncryptionProperty {
        /**
         * The encryption mode to use for job bookmarks data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-jobbookmarksencryption.html#cfn-glue-securityconfiguration-jobbookmarksencryption-jobbookmarksencryptionmode
         */
        readonly jobBookmarksEncryptionMode?: string;
        /**
         * The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-jobbookmarksencryption.html#cfn-glue-securityconfiguration-jobbookmarksencryption-kmskeyarn
         */
        readonly kmsKeyArn?: string;
    }
}
/**
 * Properties for defining a `CfnSecurityConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html
 */
export interface CfnSecurityConfigurationProps {
    /**
     * The encryption configuration associated with this security configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html#cfn-glue-securityconfiguration-encryptionconfiguration
     */
    readonly encryptionConfiguration: CfnSecurityConfiguration.EncryptionConfigurationProperty | cdk.IResolvable;
    /**
     * The name of the security configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html#cfn-glue-securityconfiguration-name
     */
    readonly name: string;
}
/**
 * The `AWS::Glue::Table` resource specifies tabular data in the AWS Glue data catalog.
 *
 * For more information, see [Defining Tables in the AWS Glue Data Catalog](https://docs.aws.amazon.com/glue/latest/dg/tables-described.html) and [Table Structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-Table) in the *AWS Glue Developer Guide* .
 *
 * @cloudformationResource AWS::Glue::Table
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-table.html
 */
export declare class CfnTable extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTable from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTable;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ID of the Data Catalog in which to create the `Table` .
     */
    catalogId: string;
    /**
     * The name of the database where the table metadata resides.
     */
    databaseName: string;
    /**
     * Specifies an `OpenTableFormatInput` structure when creating an open format table.
     */
    openTableFormatInput?: cdk.IResolvable | CfnTable.OpenTableFormatInputProperty;
    /**
     * A structure used to define a table.
     */
    tableInput: cdk.IResolvable | CfnTable.TableInputProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTableProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTable {
    /**
     * A structure used to define a table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html
     */
    interface TableInputProperty {
        /**
         * A description of the table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-description
         */
        readonly description?: string;
        /**
         * The table name.
         *
         * For Hive compatibility, this is folded to lowercase when it is stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-name
         */
        readonly name?: string;
        /**
         * The table owner.
         *
         * Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-owner
         */
        readonly owner?: string;
        /**
         * These key-value pairs define properties associated with the table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-parameters
         */
        readonly parameters?: any | cdk.IResolvable;
        /**
         * A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
         *
         * When you create a table used by Amazon Athena, and you do not specify any `partitionKeys` , you must at least set the value of `partitionKeys` to an empty list. For example:
         *
         * `"PartitionKeys": []`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-partitionkeys
         */
        readonly partitionKeys?: Array<CfnTable.ColumnProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The retention time for this table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-retention
         */
        readonly retention?: number;
        /**
         * A storage descriptor containing information about the physical storage of this table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-storagedescriptor
         */
        readonly storageDescriptor?: cdk.IResolvable | CfnTable.StorageDescriptorProperty;
        /**
         * The type of this table.
         *
         * AWS Glue will create tables with the `EXTERNAL_TABLE` type. Other services, such as Athena, may create tables with additional table types.
         *
         * AWS Glue related table types:
         *
         * - **EXTERNAL_TABLE** - Hive compatible attribute - indicates a non-Hive managed table.
         * - **GOVERNED** - Used by AWS Lake Formation . The AWS Glue Data Catalog understands `GOVERNED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-tabletype
         */
        readonly tableType?: string;
        /**
         * A `TableIdentifier` structure that describes a target table for resource linking.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-targettable
         */
        readonly targetTable?: cdk.IResolvable | CfnTable.TableIdentifierProperty;
        /**
         * Included for Apache Hive compatibility.
         *
         * Not used in the normal course of AWS Glue operations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-viewexpandedtext
         */
        readonly viewExpandedText?: string;
        /**
         * Included for Apache Hive compatibility.
         *
         * Not used in the normal course of AWS Glue operations. If the table is a `VIRTUAL_VIEW` , certain Athena configuration encoded in base64.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-vieworiginaltext
         */
        readonly viewOriginalText?: string;
    }
    /**
     * Describes the physical storage of table data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html
     */
    interface StorageDescriptorProperty {
        /**
         * A list of reducer grouping columns, clustering columns, and bucketing columns in the table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-bucketcolumns
         */
        readonly bucketColumns?: Array<string>;
        /**
         * A list of the `Columns` in the table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-columns
         */
        readonly columns?: Array<CfnTable.ColumnProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * `True` if the data in the table is compressed, or `False` if not.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-compressed
         */
        readonly compressed?: boolean | cdk.IResolvable;
        /**
         * The input format: `SequenceFileInputFormat` (binary), or `TextInputFormat` , or a custom format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-inputformat
         */
        readonly inputFormat?: string;
        /**
         * The physical location of the table.
         *
         * By default, this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-location
         */
        readonly location?: string;
        /**
         * Must be specified if the table contains any dimension columns.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-numberofbuckets
         */
        readonly numberOfBuckets?: number;
        /**
         * The output format: `SequenceFileOutputFormat` (binary), or `IgnoreKeyTextOutputFormat` , or a custom format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-outputformat
         */
        readonly outputFormat?: string;
        /**
         * The user-supplied properties in key-value form.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-parameters
         */
        readonly parameters?: any | cdk.IResolvable;
        /**
         * An object that references a schema stored in the AWS Glue Schema Registry.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-schemareference
         */
        readonly schemaReference?: cdk.IResolvable | CfnTable.SchemaReferenceProperty;
        /**
         * The serialization/deserialization (SerDe) information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-serdeinfo
         */
        readonly serdeInfo?: cdk.IResolvable | CfnTable.SerdeInfoProperty;
        /**
         * The information about values that appear frequently in a column (skewed values).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-skewedinfo
         */
        readonly skewedInfo?: cdk.IResolvable | CfnTable.SkewedInfoProperty;
        /**
         * A list specifying the sort order of each bucket in the table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-sortcolumns
         */
        readonly sortColumns?: Array<cdk.IResolvable | CfnTable.OrderProperty> | cdk.IResolvable;
        /**
         * `True` if the table data is stored in subdirectories, or `False` if not.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-storedassubdirectories
         */
        readonly storedAsSubDirectories?: boolean | cdk.IResolvable;
    }
    /**
     * A column in a `Table` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-column.html
     */
    interface ColumnProperty {
        /**
         * A free-form text comment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-column.html#cfn-glue-table-column-comment
         */
        readonly comment?: string;
        /**
         * The name of the `Column` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-column.html#cfn-glue-table-column-name
         */
        readonly name: string;
        /**
         * The data type of the `Column` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-column.html#cfn-glue-table-column-type
         */
        readonly type?: string;
    }
    /**
     * Information about a serialization/deserialization program (SerDe) that serves as an extractor and loader.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-serdeinfo.html
     */
    interface SerdeInfoProperty {
        /**
         * Name of the SerDe.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-serdeinfo.html#cfn-glue-table-serdeinfo-name
         */
        readonly name?: string;
        /**
         * These key-value pairs define initialization parameters for the SerDe.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-serdeinfo.html#cfn-glue-table-serdeinfo-parameters
         */
        readonly parameters?: any | cdk.IResolvable;
        /**
         * Usually the class that implements the SerDe.
         *
         * An example is `org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-serdeinfo.html#cfn-glue-table-serdeinfo-serializationlibrary
         */
        readonly serializationLibrary?: string;
    }
    /**
     * Specifies the sort order of a sorted column.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-order.html
     */
    interface OrderProperty {
        /**
         * The name of the column.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-order.html#cfn-glue-table-order-column
         */
        readonly column: string;
        /**
         * Indicates that the column is sorted in ascending order ( `== 1` ), or in descending order ( `==0` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-order.html#cfn-glue-table-order-sortorder
         */
        readonly sortOrder: number;
    }
    /**
     * An object that references a schema stored in the AWS Glue Schema Registry.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-schemareference.html
     */
    interface SchemaReferenceProperty {
        /**
         * A structure that contains schema identity fields.
         *
         * Either this or the `SchemaVersionId` has to be
         * provided.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-schemareference.html#cfn-glue-table-schemareference-schemaid
         */
        readonly schemaId?: cdk.IResolvable | CfnTable.SchemaIdProperty;
        /**
         * The unique ID assigned to a version of the schema.
         *
         * Either this or the `SchemaId` has to be provided.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-schemareference.html#cfn-glue-table-schemareference-schemaversionid
         */
        readonly schemaVersionId?: string;
        /**
         * The version number of the schema.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-schemareference.html#cfn-glue-table-schemareference-schemaversionnumber
         */
        readonly schemaVersionNumber?: number;
    }
    /**
     * A structure that contains schema identity fields.
     *
     * Either this or the `SchemaVersionId` has to be
     * provided.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-schemaid.html
     */
    interface SchemaIdProperty {
        /**
         * The name of the schema registry that contains the schema.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-schemaid.html#cfn-glue-table-schemaid-registryname
         */
        readonly registryName?: string;
        /**
         * The Amazon Resource Name (ARN) of the schema.
         *
         * One of `SchemaArn` or `SchemaName` has to be
         * provided.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-schemaid.html#cfn-glue-table-schemaid-schemaarn
         */
        readonly schemaArn?: string;
        /**
         * The name of the schema.
         *
         * One of `SchemaArn` or `SchemaName` has to be provided.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-schemaid.html#cfn-glue-table-schemaid-schemaname
         */
        readonly schemaName?: string;
    }
    /**
     * Specifies skewed values in a table.
     *
     * Skewed values are those that occur with very high frequency.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-skewedinfo.html
     */
    interface SkewedInfoProperty {
        /**
         * A list of names of columns that contain skewed values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-skewedinfo.html#cfn-glue-table-skewedinfo-skewedcolumnnames
         */
        readonly skewedColumnNames?: Array<string>;
        /**
         * A mapping of skewed values to the columns that contain them.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-skewedinfo.html#cfn-glue-table-skewedinfo-skewedcolumnvaluelocationmaps
         */
        readonly skewedColumnValueLocationMaps?: any | cdk.IResolvable;
        /**
         * A list of values that appear so frequently as to be considered skewed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-skewedinfo.html#cfn-glue-table-skewedinfo-skewedcolumnvalues
         */
        readonly skewedColumnValues?: Array<string>;
    }
    /**
     * A structure that describes a target table for resource linking.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableidentifier.html
     */
    interface TableIdentifierProperty {
        /**
         * The ID of the Data Catalog in which the table resides.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableidentifier.html#cfn-glue-table-tableidentifier-catalogid
         */
        readonly catalogId?: string;
        /**
         * The name of the catalog database that contains the target table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableidentifier.html#cfn-glue-table-tableidentifier-databasename
         */
        readonly databaseName?: string;
        /**
         * The name of the target table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableidentifier.html#cfn-glue-table-tableidentifier-name
         */
        readonly name?: string;
        /**
         * The Region of the table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableidentifier.html#cfn-glue-table-tableidentifier-region
         */
        readonly region?: string;
    }
    /**
     * Specifies an `OpenTableFormatInput` structure when creating an open format table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-opentableformatinput.html
     */
    interface OpenTableFormatInputProperty {
        /**
         * Specifies an `IcebergInput` structure that defines an Apache Iceberg metadata table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-opentableformatinput.html#cfn-glue-table-opentableformatinput-iceberginput
         */
        readonly icebergInput?: CfnTable.IcebergInputProperty | cdk.IResolvable;
    }
    /**
     * Specifies an input structure that defines an Apache Iceberg metadata table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-iceberginput.html
     */
    interface IcebergInputProperty {
        /**
         * A required metadata operation.
         *
         * Can only be set to CREATE.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-iceberginput.html#cfn-glue-table-iceberginput-metadataoperation
         */
        readonly metadataOperation?: string;
        /**
         * The table version for the Iceberg table.
         *
         * Defaults to 2.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-iceberginput.html#cfn-glue-table-iceberginput-version
         */
        readonly version?: string;
    }
}
/**
 * Properties for defining a `CfnTable`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-table.html
 */
export interface CfnTableProps {
    /**
     * The ID of the Data Catalog in which to create the `Table` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-table.html#cfn-glue-table-catalogid
     */
    readonly catalogId: string;
    /**
     * The name of the database where the table metadata resides.
     *
     * For Hive compatibility, this must be all lowercase.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-table.html#cfn-glue-table-databasename
     */
    readonly databaseName: string;
    /**
     * Specifies an `OpenTableFormatInput` structure when creating an open format table.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-table.html#cfn-glue-table-opentableformatinput
     */
    readonly openTableFormatInput?: cdk.IResolvable | CfnTable.OpenTableFormatInputProperty;
    /**
     * A structure used to define a table.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-table.html#cfn-glue-table-tableinput
     */
    readonly tableInput: cdk.IResolvable | CfnTable.TableInputProperty;
}
/**
 * The `AWS::Glue::Trigger` resource specifies triggers that run AWS Glue jobs.
 *
 * For more information, see [Triggering Jobs in AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html) and [Trigger Structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-Trigger) in the *AWS Glue Developer Guide* .
 *
 * @cloudformationResource AWS::Glue::Trigger
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html
 */
export declare class CfnTrigger extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTrigger from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTrigger;
    /**
     * The actions initiated by this trigger.
     */
    actions: Array<CfnTrigger.ActionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A description of this trigger.
     */
    description?: string;
    /**
     * Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
     */
    eventBatchingCondition?: CfnTrigger.EventBatchingConditionProperty | cdk.IResolvable;
    /**
     * The name of the trigger.
     */
    name?: string;
    /**
     * The predicate of this trigger, which defines when it will fire.
     */
    predicate?: cdk.IResolvable | CfnTrigger.PredicateProperty;
    /**
     * A `cron` expression used to specify the schedule.
     */
    schedule?: string;
    /**
     * Set to true to start `SCHEDULED` and `CONDITIONAL` triggers when created.
     */
    startOnCreation?: boolean | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to use with this trigger.
     */
    tagsRaw?: any;
    /**
     * The type of trigger that this is.
     */
    type: string;
    /**
     * The name of the workflow associated with the trigger.
     */
    workflowName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTriggerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTrigger {
    /**
     * Defines an action to be initiated by a trigger.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-action.html
     */
    interface ActionProperty {
        /**
         * The job arguments used when this trigger fires.
         *
         * For this job run, they replace the default arguments set in the job definition itself.
         *
         * You can specify arguments here that your own job-execution script consumes, in addition to arguments that AWS Glue itself consumes.
         *
         * For information about how to specify and consume your own job arguments, see [Calling AWS Glue APIs in Python](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html) in the *AWS Glue Developer Guide* .
         *
         * For information about the key-value pairs that AWS Glue consumes to set up your job, see the [Special Parameters Used by AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html) topic in the developer guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-action.html#cfn-glue-trigger-action-arguments
         */
        readonly arguments?: any | cdk.IResolvable;
        /**
         * The name of the crawler to be used with this action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-action.html#cfn-glue-trigger-action-crawlername
         */
        readonly crawlerName?: string;
        /**
         * The name of a job to be executed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-action.html#cfn-glue-trigger-action-jobname
         */
        readonly jobName?: string;
        /**
         * Specifies configuration properties of a job run notification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-action.html#cfn-glue-trigger-action-notificationproperty
         */
        readonly notificationProperty?: cdk.IResolvable | CfnTrigger.NotificationPropertyProperty;
        /**
         * The name of the `SecurityConfiguration` structure to be used with this action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-action.html#cfn-glue-trigger-action-securityconfiguration
         */
        readonly securityConfiguration?: string;
        /**
         * The `JobRun` timeout in minutes.
         *
         * This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-action.html#cfn-glue-trigger-action-timeout
         */
        readonly timeout?: number;
    }
    /**
     * Specifies configuration properties of a job run notification.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-notificationproperty.html
     */
    interface NotificationPropertyProperty {
        /**
         * After a job run starts, the number of minutes to wait before sending a job run delay notification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-notificationproperty.html#cfn-glue-trigger-notificationproperty-notifydelayafter
         */
        readonly notifyDelayAfter?: number;
    }
    /**
     * Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-eventbatchingcondition.html
     */
    interface EventBatchingConditionProperty {
        /**
         * Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-eventbatchingcondition.html#cfn-glue-trigger-eventbatchingcondition-batchsize
         */
        readonly batchSize: number;
        /**
         * Window of time in seconds after which EventBridge event trigger fires.
         *
         * Window starts when first event is received.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-eventbatchingcondition.html#cfn-glue-trigger-eventbatchingcondition-batchwindow
         */
        readonly batchWindow?: number;
    }
    /**
     * Defines the predicate of the trigger, which determines when it fires.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-predicate.html
     */
    interface PredicateProperty {
        /**
         * A list of the conditions that determine when the trigger will fire.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-predicate.html#cfn-glue-trigger-predicate-conditions
         */
        readonly conditions?: Array<CfnTrigger.ConditionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * An optional field if only one condition is listed.
         *
         * If multiple conditions are listed, then this field is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-predicate.html#cfn-glue-trigger-predicate-logical
         */
        readonly logical?: string;
    }
    /**
     * Defines a condition under which a trigger fires.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-condition.html
     */
    interface ConditionProperty {
        /**
         * The name of the crawler to which this condition applies.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-condition.html#cfn-glue-trigger-condition-crawlername
         */
        readonly crawlerName?: string;
        /**
         * The state of the crawler to which this condition applies.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-condition.html#cfn-glue-trigger-condition-crawlstate
         */
        readonly crawlState?: string;
        /**
         * The name of the job whose `JobRuns` this condition applies to, and on which this trigger waits.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-condition.html#cfn-glue-trigger-condition-jobname
         */
        readonly jobName?: string;
        /**
         * A logical operator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-condition.html#cfn-glue-trigger-condition-logicaloperator
         */
        readonly logicalOperator?: string;
        /**
         * The condition state.
         *
         * Currently, the values supported are `SUCCEEDED` , `STOPPED` , `TIMEOUT` , and `FAILED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-condition.html#cfn-glue-trigger-condition-state
         */
        readonly state?: string;
    }
}
/**
 * Properties for defining a `CfnTrigger`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html
 */
export interface CfnTriggerProps {
    /**
     * The actions initiated by this trigger.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html#cfn-glue-trigger-actions
     */
    readonly actions: Array<CfnTrigger.ActionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A description of this trigger.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html#cfn-glue-trigger-description
     */
    readonly description?: string;
    /**
     * Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html#cfn-glue-trigger-eventbatchingcondition
     */
    readonly eventBatchingCondition?: CfnTrigger.EventBatchingConditionProperty | cdk.IResolvable;
    /**
     * The name of the trigger.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html#cfn-glue-trigger-name
     */
    readonly name?: string;
    /**
     * The predicate of this trigger, which defines when it will fire.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html#cfn-glue-trigger-predicate
     */
    readonly predicate?: cdk.IResolvable | CfnTrigger.PredicateProperty;
    /**
     * A `cron` expression used to specify the schedule.
     *
     * For more information, see [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html) in the *AWS Glue Developer Guide* . For example, to run something every day at 12:15 UTC, specify `cron(15 12 * * ? *)` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html#cfn-glue-trigger-schedule
     */
    readonly schedule?: string;
    /**
     * Set to true to start `SCHEDULED` and `CONDITIONAL` triggers when created.
     *
     * True is not supported for `ON_DEMAND` triggers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html#cfn-glue-trigger-startoncreation
     */
    readonly startOnCreation?: boolean | cdk.IResolvable;
    /**
     * The tags to use with this trigger.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html#cfn-glue-trigger-tags
     */
    readonly tags?: any;
    /**
     * The type of trigger that this is.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html#cfn-glue-trigger-type
     */
    readonly type: string;
    /**
     * The name of the workflow associated with the trigger.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html#cfn-glue-trigger-workflowname
     */
    readonly workflowName?: string;
}
/**
 * The `AWS::Glue::Workflow` is an AWS Glue resource type that manages AWS Glue workflows.
 *
 * A workflow is a container for a set of related jobs, crawlers, and triggers in AWS Glue . Using a workflow, you can design a complex multi-job extract, transform, and load (ETL) activity that AWS Glue can execute and track as single entity.
 *
 * @cloudformationResource AWS::Glue::Workflow
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-workflow.html
 */
export declare class CfnWorkflow extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWorkflow from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWorkflow;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A collection of properties to be used as part of each execution of the workflow.
     */
    defaultRunProperties?: any | cdk.IResolvable;
    /**
     * A description of the workflow.
     */
    description?: string;
    /**
     * You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs.
     */
    maxConcurrentRuns?: number;
    /**
     * The name of the workflow representing the flow.
     */
    name?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to use with this workflow.
     */
    tagsRaw?: any;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnWorkflowProps);
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
 * Properties for defining a `CfnWorkflow`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-workflow.html
 */
export interface CfnWorkflowProps {
    /**
     * A collection of properties to be used as part of each execution of the workflow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-workflow.html#cfn-glue-workflow-defaultrunproperties
     */
    readonly defaultRunProperties?: any | cdk.IResolvable;
    /**
     * A description of the workflow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-workflow.html#cfn-glue-workflow-description
     */
    readonly description?: string;
    /**
     * You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs.
     *
     * If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-workflow.html#cfn-glue-workflow-maxconcurrentruns
     */
    readonly maxConcurrentRuns?: number;
    /**
     * The name of the workflow representing the flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-workflow.html#cfn-glue-workflow-name
     */
    readonly name?: string;
    /**
     * The tags to use with this workflow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-workflow.html#cfn-glue-workflow-tags
     */
    readonly tags?: any;
}
/**
 * Creates a custom pattern that is used to detect sensitive data across the columns and rows of your structured data.
 *
 * Each custom pattern you create specifies a regular expression and an optional list of context words. If no context words are passed only a regular expression is checked.
 *
 * @cloudformationResource AWS::Glue::CustomEntityType
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-customentitytype.html
 */
export declare class CfnCustomEntityType extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCustomEntityType from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCustomEntityType;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A list of context words.
     */
    contextWords?: Array<string>;
    /**
     * A name for the custom pattern that allows it to be retrieved or deleted later.
     */
    name?: string;
    /**
     * A regular expression string that is used for detecting sensitive data in a custom pattern.
     */
    regexString?: string;
    /**
     * AWS tags that contain a key value pair and may be searched by console, command line, or API.
     */
    tags?: any;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnCustomEntityTypeProps);
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
 * Properties for defining a `CfnCustomEntityType`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-customentitytype.html
 */
export interface CfnCustomEntityTypeProps {
    /**
     * A list of context words.
     *
     * If none of these context words are found within the vicinity of the regular expression the data will not be detected as sensitive data.
     *
     * If no context words are passed only a regular expression is checked.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-customentitytype.html#cfn-glue-customentitytype-contextwords
     */
    readonly contextWords?: Array<string>;
    /**
     * A name for the custom pattern that allows it to be retrieved or deleted later.
     *
     * This name must be unique per AWS account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-customentitytype.html#cfn-glue-customentitytype-name
     */
    readonly name?: string;
    /**
     * A regular expression string that is used for detecting sensitive data in a custom pattern.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-customentitytype.html#cfn-glue-customentitytype-regexstring
     */
    readonly regexString?: string;
    /**
     * AWS tags that contain a key value pair and may be searched by console, command line, or API.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-customentitytype.html#cfn-glue-customentitytype-tags
     */
    readonly tags?: any;
}
/**
 * A resource that describes the AWS Glue resource for enabling compaction to improve read performance for open table formats.
 *
 * @cloudformationResource AWS::Glue::TableOptimizer
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html
 */
export declare class CfnTableOptimizer extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTableOptimizer from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTableOptimizer;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The catalog ID of the table.
     */
    catalogId: string;
    /**
     * The name of the database.
     */
    databaseName: string;
    /**
     * The table name.
     */
    tableName: string;
    /**
     * Specifies configuration details of a table optimizer.
     */
    tableOptimizerConfiguration: cdk.IResolvable | CfnTableOptimizer.TableOptimizerConfigurationProperty;
    /**
     * The type of table optimizer.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTableOptimizerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTableOptimizer {
    /**
     * Specifies configuration details of a table optimizer.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-tableoptimizerconfiguration.html
     */
    interface TableOptimizerConfigurationProperty {
        /**
         * Whether the table optimization is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-tableoptimizerconfiguration.html#cfn-glue-tableoptimizer-tableoptimizerconfiguration-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-tableoptimizerconfiguration.html#cfn-glue-tableoptimizer-tableoptimizerconfiguration-orphanfiledeletionconfiguration
         */
        readonly orphanFileDeletionConfiguration?: cdk.IResolvable | CfnTableOptimizer.OrphanFileDeletionConfigurationProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-tableoptimizerconfiguration.html#cfn-glue-tableoptimizer-tableoptimizerconfiguration-retentionconfiguration
         */
        readonly retentionConfiguration?: cdk.IResolvable | CfnTableOptimizer.RetentionConfigurationProperty;
        /**
         * A role passed by the caller which gives the service permission to update the resources associated with the optimizer on the caller's behalf.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-tableoptimizerconfiguration.html#cfn-glue-tableoptimizer-tableoptimizerconfiguration-rolearn
         */
        readonly roleArn: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-tableoptimizerconfiguration.html#cfn-glue-tableoptimizer-tableoptimizerconfiguration-vpcconfiguration
         */
        readonly vpcConfiguration?: cdk.IResolvable | CfnTableOptimizer.VpcConfigurationProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-retentionconfiguration.html
     */
    interface RetentionConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-retentionconfiguration.html#cfn-glue-tableoptimizer-retentionconfiguration-icebergconfiguration
         */
        readonly icebergConfiguration?: CfnTableOptimizer.IcebergConfigurationProperty | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-icebergconfiguration.html
     */
    interface IcebergConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-icebergconfiguration.html#cfn-glue-tableoptimizer-icebergconfiguration-location
         */
        readonly location?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-icebergconfiguration.html#cfn-glue-tableoptimizer-icebergconfiguration-orphanfileretentionperiodindays
         */
        readonly orphanFileRetentionPeriodInDays?: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-vpcconfiguration.html
     */
    interface VpcConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-vpcconfiguration.html#cfn-glue-tableoptimizer-vpcconfiguration-glueconnectionname
         */
        readonly glueConnectionName?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-orphanfiledeletionconfiguration.html
     */
    interface OrphanFileDeletionConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-orphanfiledeletionconfiguration.html#cfn-glue-tableoptimizer-orphanfiledeletionconfiguration-icebergconfiguration
         */
        readonly icebergConfiguration?: CfnTableOptimizer.IcebergConfigurationProperty | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnTableOptimizer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html
 */
export interface CfnTableOptimizerProps {
    /**
     * The catalog ID of the table.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-catalogid
     */
    readonly catalogId: string;
    /**
     * The name of the database.
     *
     * For Hive compatibility, this is folded to lowercase when it is stored.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-databasename
     */
    readonly databaseName: string;
    /**
     * The table name.
     *
     * For Hive compatibility, this must be entirely lowercase.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-tablename
     */
    readonly tableName: string;
    /**
     * Specifies configuration details of a table optimizer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-tableoptimizerconfiguration
     */
    readonly tableOptimizerConfiguration: cdk.IResolvable | CfnTableOptimizer.TableOptimizerConfigurationProperty;
    /**
     * The type of table optimizer.
     *
     * Currently, the only valid value is compaction.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-type
     */
    readonly type: string;
}
/**
 * Creates an AWS Glue usage profile.
 *
 * @cloudformationResource AWS::Glue::UsageProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html
 */
export declare class CfnUsageProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUsageProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUsageProfile;
    /**
     * The date and time when the usage profile was created.
     *
     * @cloudformationAttribute CreatedOn
     */
    readonly attrCreatedOn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    configuration?: cdk.IResolvable | CfnUsageProfile.ProfileConfigurationProperty;
    /**
     * A description of the usage profile.
     */
    description?: string;
    /**
     * The name of the usage profile.
     */
    name: string;
    /**
     * The tags to be applied to this UsageProfiles.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUsageProfileProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnUsageProfile {
    /**
     * Specifies the job and session values that an admin configures in an AWS Glue usage profile.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-usageprofile-profileconfiguration.html
     */
    interface ProfileConfigurationProperty {
        /**
         * A key-value map of configuration parameters for AWS Glue jobs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-usageprofile-profileconfiguration.html#cfn-glue-usageprofile-profileconfiguration-jobconfiguration
         */
        readonly jobConfiguration?: cdk.IResolvable | Record<string, CfnUsageProfile.ConfigurationObjectProperty | cdk.IResolvable>;
        /**
         * A key-value map of configuration parameters for AWS Glue sessions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-usageprofile-profileconfiguration.html#cfn-glue-usageprofile-profileconfiguration-sessionconfiguration
         */
        readonly sessionConfiguration?: cdk.IResolvable | Record<string, CfnUsageProfile.ConfigurationObjectProperty | cdk.IResolvable>;
    }
    /**
     * Specifies the values that an admin sets for each job or session parameter configured in a AWS Glue usage profile.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-usageprofile-configurationobject.html
     */
    interface ConfigurationObjectProperty {
        /**
         * A list of allowed values for the parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-usageprofile-configurationobject.html#cfn-glue-usageprofile-configurationobject-allowedvalues
         */
        readonly allowedValues?: Array<string>;
        /**
         * A default value for the parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-usageprofile-configurationobject.html#cfn-glue-usageprofile-configurationobject-defaultvalue
         */
        readonly defaultValue?: string;
        /**
         * A maximum allowed value for the parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-usageprofile-configurationobject.html#cfn-glue-usageprofile-configurationobject-maxvalue
         */
        readonly maxValue?: string;
        /**
         * A minimum allowed value for the parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-usageprofile-configurationobject.html#cfn-glue-usageprofile-configurationobject-minvalue
         */
        readonly minValue?: string;
    }
}
/**
 * Properties for defining a `CfnUsageProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html
 */
export interface CfnUsageProfileProps {
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html#cfn-glue-usageprofile-configuration
     */
    readonly configuration?: cdk.IResolvable | CfnUsageProfile.ProfileConfigurationProperty;
    /**
     * A description of the usage profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html#cfn-glue-usageprofile-description
     */
    readonly description?: string;
    /**
     * The name of the usage profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html#cfn-glue-usageprofile-name
     */
    readonly name: string;
    /**
     * The tags to be applied to this UsageProfiles.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html#cfn-glue-usageprofile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
