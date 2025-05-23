import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a data source connector that you want to use with an Amazon Kendra index.
 *
 * You specify a name, data source connector type and description for your data source. You also specify configuration information for the data source connector.
 *
 * > `CreateDataSource` does *not* support connectors which [require a `TemplateConfiguration` object](https://docs.aws.amazon.com/kendra/latest/dg/ds-schemas.html) for connecting to Amazon Kendra .
 *
 * @cloudformationResource AWS::Kendra::DataSource
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html
 */
export declare class CfnDataSource extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataSource from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataSource;
    /**
     * The Amazon Resource Name (ARN) of the data source. For example:
     *
     * `arn:aws:kendra:us-west-2:111122223333:index/335c3741-41df-46a6-b5d3-61f85b787884/data-source/b8cae438-6787-4091-8897-684a652bbb0a`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The identifier for the data source. For example:
     *
     * `b8cae438-6787-4091-8897-684a652bbb0a` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Configuration information for altering document metadata and content during the document ingestion process.
     */
    customDocumentEnrichmentConfiguration?: CfnDataSource.CustomDocumentEnrichmentConfigurationProperty | cdk.IResolvable;
    /**
     * Configuration information for an Amazon Kendra data source.
     */
    dataSourceConfiguration?: CfnDataSource.DataSourceConfigurationProperty | cdk.IResolvable;
    /**
     * A description for the data source connector.
     */
    description?: string;
    /**
     * The identifier of the index you want to use with the data source connector.
     */
    indexId: string;
    /**
     * The code for a language.
     */
    languageCode?: string;
    /**
     * The name of the data source.
     */
    name: string;
    /**
     * The Amazon Resource Name (ARN) of a role with permission to access the data source.
     */
    roleArn?: string;
    /**
     * Sets the frequency that Amazon Kendra checks the documents in your data source and updates the index.
     */
    schedule?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The type of the data source.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDataSourceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataSource {
    /**
     * Provides the configuration information for altering document metadata and content during the document ingestion process.
     *
     * For more information, see [Customizing document metadata during the ingestion process](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-customdocumentenrichmentconfiguration.html
     */
    interface CustomDocumentEnrichmentConfigurationProperty {
        /**
         * Configuration information to alter document attributes or metadata fields and content when ingesting documents into Amazon Kendra.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-customdocumentenrichmentconfiguration.html#cfn-kendra-datasource-customdocumentenrichmentconfiguration-inlineconfigurations
         */
        readonly inlineConfigurations?: Array<CfnDataSource.InlineCustomDocumentEnrichmentConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Configuration information for invoking a Lambda function in AWS Lambda on the structured documents with their metadata and text extracted.
         *
         * You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content. For more information, see [Advanced data manipulation](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#advanced-data-manipulation) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-customdocumentenrichmentconfiguration.html#cfn-kendra-datasource-customdocumentenrichmentconfiguration-postextractionhookconfiguration
         */
        readonly postExtractionHookConfiguration?: CfnDataSource.HookConfigurationProperty | cdk.IResolvable;
        /**
         * Configuration information for invoking a Lambda function in AWS Lambda on the original or raw documents before extracting their metadata and text.
         *
         * You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content. For more information, see [Advanced data manipulation](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#advanced-data-manipulation) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-customdocumentenrichmentconfiguration.html#cfn-kendra-datasource-customdocumentenrichmentconfiguration-preextractionhookconfiguration
         */
        readonly preExtractionHookConfiguration?: CfnDataSource.HookConfigurationProperty | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) of an IAM role with permission to run `PreExtractionHookConfiguration` and `PostExtractionHookConfiguration` for altering document metadata and content during the document ingestion process.
         *
         * For more information, see [an IAM roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-customdocumentenrichmentconfiguration.html#cfn-kendra-datasource-customdocumentenrichmentconfiguration-rolearn
         */
        readonly roleArn?: string;
    }
    /**
     * Provides the configuration information for applying basic logic to alter document metadata and content when ingesting documents into Amazon Kendra.
     *
     * To apply advanced logic, to go beyond what you can do with basic logic, see [HookConfiguration](https://docs.aws.amazon.com/kendra/latest/dg/API_HookConfiguration.html) .
     *
     * For more information, see [Customizing document metadata during the ingestion process](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-inlinecustomdocumentenrichmentconfiguration.html
     */
    interface InlineCustomDocumentEnrichmentConfigurationProperty {
        /**
         * Configuration of the condition used for the target document attribute or metadata field when ingesting documents into Amazon Kendra.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-inlinecustomdocumentenrichmentconfiguration.html#cfn-kendra-datasource-inlinecustomdocumentenrichmentconfiguration-condition
         */
        readonly condition?: CfnDataSource.DocumentAttributeConditionProperty | cdk.IResolvable;
        /**
         * `TRUE` to delete content if the condition used for the target attribute is met.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-inlinecustomdocumentenrichmentconfiguration.html#cfn-kendra-datasource-inlinecustomdocumentenrichmentconfiguration-documentcontentdeletion
         */
        readonly documentContentDeletion?: boolean | cdk.IResolvable;
        /**
         * Configuration of the target document attribute or metadata field when ingesting documents into Amazon Kendra.
         *
         * You can also include a value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-inlinecustomdocumentenrichmentconfiguration.html#cfn-kendra-datasource-inlinecustomdocumentenrichmentconfiguration-target
         */
        readonly target?: CfnDataSource.DocumentAttributeTargetProperty | cdk.IResolvable;
    }
    /**
     * The condition used for the target document attribute or metadata field when ingesting documents into Amazon Kendra.
     *
     * You use this with [DocumentAttributeTarget to apply the condition](https://docs.aws.amazon.com/kendra/latest/dg/API_DocumentAttributeTarget.html) .
     *
     * For example, you can create the 'Department' target field and have it prefill department names associated with the documents based on information in the 'Source_URI' field. Set the condition that if the 'Source_URI' field contains 'financial' in its URI value, then prefill the target field 'Department' with the target value 'Finance' for the document.
     *
     * Amazon Kendra cannot create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using `DocumentAttributeTarget` . Amazon Kendra then will map your newly created metadata field to your index field.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributecondition.html
     */
    interface DocumentAttributeConditionProperty {
        /**
         * The identifier of the document attribute used for the condition.
         *
         * For example, 'Source_URI' could be an identifier for the attribute or metadata field that contains source URIs associated with the documents.
         *
         * Amazon Kendra currently does not support `_document_body` as an attribute key used for the condition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributecondition.html#cfn-kendra-datasource-documentattributecondition-conditiondocumentattributekey
         */
        readonly conditionDocumentAttributeKey: string;
        /**
         * The value used by the operator.
         *
         * For example, you can specify the value 'financial' for strings in the 'Source_URI' field that partially match or contain this value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributecondition.html#cfn-kendra-datasource-documentattributecondition-conditiononvalue
         */
        readonly conditionOnValue?: CfnDataSource.DocumentAttributeValueProperty | cdk.IResolvable;
        /**
         * The condition operator.
         *
         * For example, you can use 'Contains' to partially match a string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributecondition.html#cfn-kendra-datasource-documentattributecondition-operator
         */
        readonly operator: string;
    }
    /**
     * The value of a document attribute.
     *
     * You can only provide one value for a document attribute.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributevalue.html
     */
    interface DocumentAttributeValueProperty {
        /**
         * A date expressed as an ISO 8601 string.
         *
         * It is important for the time zone to be included in the ISO 8601 date-time format. For example, 2012-03-25T12:30:10+01:00 is the ISO 8601 date-time format for March 25th 2012 at 12:30PM (plus 10 seconds) in Central European Time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributevalue.html#cfn-kendra-datasource-documentattributevalue-datevalue
         */
        readonly dateValue?: string;
        /**
         * A long integer value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributevalue.html#cfn-kendra-datasource-documentattributevalue-longvalue
         */
        readonly longValue?: number;
        /**
         * A list of strings.
         *
         * The default maximum length or number of strings is 10.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributevalue.html#cfn-kendra-datasource-documentattributevalue-stringlistvalue
         */
        readonly stringListValue?: Array<string>;
        /**
         * A string, such as "department".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributevalue.html#cfn-kendra-datasource-documentattributevalue-stringvalue
         */
        readonly stringValue?: string;
    }
    /**
     * The target document attribute or metadata field you want to alter when ingesting documents into Amazon Kendra.
     *
     * For example, you can delete customer identification numbers associated with the documents, stored in the document metadata field called 'Customer_ID'. You set the target key as 'Customer_ID' and the deletion flag to `TRUE` . This removes all customer ID values in the field 'Customer_ID'. This would scrub personally identifiable information from each document's metadata.
     *
     * Amazon Kendra cannot create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using `DocumentAttributeTarget` . Amazon Kendra then will map your newly created metadata field to your index field.
     *
     * You can also use this with [DocumentAttributeCondition](https://docs.aws.amazon.com/kendra/latest/dg/API_DocumentAttributeCondition.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributetarget.html
     */
    interface DocumentAttributeTargetProperty {
        /**
         * The identifier of the target document attribute or metadata field.
         *
         * For example, 'Department' could be an identifier for the target attribute or metadata field that includes the department names associated with the documents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributetarget.html#cfn-kendra-datasource-documentattributetarget-targetdocumentattributekey
         */
        readonly targetDocumentAttributeKey: string;
        /**
         * The target value you want to create for the target attribute.
         *
         * For example, 'Finance' could be the target value for the target attribute key 'Department'.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributetarget.html#cfn-kendra-datasource-documentattributetarget-targetdocumentattributevalue
         */
        readonly targetDocumentAttributeValue?: CfnDataSource.DocumentAttributeValueProperty | cdk.IResolvable;
        /**
         * `TRUE` to delete the existing target value for your specified target attribute key.
         *
         * You cannot create a target value and set this to `TRUE` . To create a target value ( `TargetDocumentAttributeValue` ), set this to `FALSE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributetarget.html#cfn-kendra-datasource-documentattributetarget-targetdocumentattributevaluedeletion
         */
        readonly targetDocumentAttributeValueDeletion?: boolean | cdk.IResolvable;
    }
    /**
     * Provides the configuration information for invoking a Lambda function in AWS Lambda to alter document metadata and content when ingesting documents into Amazon Kendra.
     *
     * You can configure your Lambda function using [PreExtractionHookConfiguration](https://docs.aws.amazon.com/kendra/latest/dg/API_CustomDocumentEnrichmentConfiguration.html) if you want to apply advanced alterations on the original or raw documents. If you want to apply advanced alterations on the Amazon Kendra structured documents, you must configure your Lambda function using [PostExtractionHookConfiguration](https://docs.aws.amazon.com/kendra/latest/dg/API_CustomDocumentEnrichmentConfiguration.html) . You can only invoke one Lambda function. However, this function can invoke other functions it requires.
     *
     * For more information, see [Customizing document metadata during the ingestion process](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-hookconfiguration.html
     */
    interface HookConfigurationProperty {
        /**
         * The condition used for when a Lambda function should be invoked.
         *
         * For example, you can specify a condition that if there are empty date-time values, then Amazon Kendra should invoke a function that inserts the current date-time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-hookconfiguration.html#cfn-kendra-datasource-hookconfiguration-invocationcondition
         */
        readonly invocationCondition?: CfnDataSource.DocumentAttributeConditionProperty | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) of an IAM role with permission to run a Lambda function during ingestion.
         *
         * For more information, see [an IAM roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-hookconfiguration.html#cfn-kendra-datasource-hookconfiguration-lambdaarn
         */
        readonly lambdaArn: string;
        /**
         * Stores the original, raw documents or the structured, parsed documents before and after altering them.
         *
         * For more information, see [Data contracts for Lambda functions](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#cde-data-contracts-lambda) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-hookconfiguration.html#cfn-kendra-datasource-hookconfiguration-s3bucket
         */
        readonly s3Bucket: string;
    }
    /**
     * Provides the configuration information for an Amazon Kendra data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourceconfiguration.html
     */
    interface DataSourceConfigurationProperty {
        /**
         * Provides the configuration information to connect to Confluence as your data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourceconfiguration.html#cfn-kendra-datasource-datasourceconfiguration-confluenceconfiguration
         */
        readonly confluenceConfiguration?: CfnDataSource.ConfluenceConfigurationProperty | cdk.IResolvable;
        /**
         * Provides the configuration information to connect to a database as your data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourceconfiguration.html#cfn-kendra-datasource-datasourceconfiguration-databaseconfiguration
         */
        readonly databaseConfiguration?: CfnDataSource.DatabaseConfigurationProperty | cdk.IResolvable;
        /**
         * Provides the configuration information to connect to Google Drive as your data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourceconfiguration.html#cfn-kendra-datasource-datasourceconfiguration-googledriveconfiguration
         */
        readonly googleDriveConfiguration?: CfnDataSource.GoogleDriveConfigurationProperty | cdk.IResolvable;
        /**
         * Provides the configuration information to connect to Microsoft OneDrive as your data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourceconfiguration.html#cfn-kendra-datasource-datasourceconfiguration-onedriveconfiguration
         */
        readonly oneDriveConfiguration?: cdk.IResolvable | CfnDataSource.OneDriveConfigurationProperty;
        /**
         * Provides the configuration information to connect to an Amazon S3 bucket as your data source.
         *
         * > Amazon Kendra now supports an upgraded Amazon S3 connector.
         * >
         * > You must now use the [TemplateConfiguration](https://docs.aws.amazon.com/kendra/latest/APIReference/API_TemplateConfiguration.html) object instead of the `S3DataSourceConfiguration` object to configure your connector.
         * >
         * > Connectors configured using the older console and API architecture will continue to function as configured. However, you won't be able to edit or update them. If you want to edit or update your connector configuration, you must create a new connector.
         * >
         * > We recommended migrating your connector workflow to the upgraded version. Support for connectors configured using the older architecture is scheduled to end by June 2024.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourceconfiguration.html#cfn-kendra-datasource-datasourceconfiguration-s3configuration
         */
        readonly s3Configuration?: cdk.IResolvable | CfnDataSource.S3DataSourceConfigurationProperty;
        /**
         * Provides the configuration information to connect to Salesforce as your data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourceconfiguration.html#cfn-kendra-datasource-datasourceconfiguration-salesforceconfiguration
         */
        readonly salesforceConfiguration?: cdk.IResolvable | CfnDataSource.SalesforceConfigurationProperty;
        /**
         * Provides the configuration information to connect to ServiceNow as your data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourceconfiguration.html#cfn-kendra-datasource-datasourceconfiguration-servicenowconfiguration
         */
        readonly serviceNowConfiguration?: cdk.IResolvable | CfnDataSource.ServiceNowConfigurationProperty;
        /**
         * Provides the configuration information to connect to Microsoft SharePoint as your data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourceconfiguration.html#cfn-kendra-datasource-datasourceconfiguration-sharepointconfiguration
         */
        readonly sharePointConfiguration?: cdk.IResolvable | CfnDataSource.SharePointConfigurationProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourceconfiguration.html#cfn-kendra-datasource-datasourceconfiguration-templateconfiguration
         */
        readonly templateConfiguration?: cdk.IResolvable | CfnDataSource.TemplateConfigurationProperty;
        /**
         * Provides the configuration information required for Amazon Kendra Web Crawler.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourceconfiguration.html#cfn-kendra-datasource-datasourceconfiguration-webcrawlerconfiguration
         */
        readonly webCrawlerConfiguration?: cdk.IResolvable | CfnDataSource.WebCrawlerConfigurationProperty;
        /**
         * Provides the configuration information to connect to Amazon WorkDocs as your data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourceconfiguration.html#cfn-kendra-datasource-datasourceconfiguration-workdocsconfiguration
         */
        readonly workDocsConfiguration?: cdk.IResolvable | CfnDataSource.WorkDocsConfigurationProperty;
    }
    /**
     * Provides the configuration information to connect to Google Drive as your data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-googledriveconfiguration.html
     */
    interface GoogleDriveConfigurationProperty {
        /**
         * A list of MIME types to exclude from the index. All documents matching the specified MIME type are excluded.
         *
         * For a list of MIME types, see [Using a Google Workspace Drive data source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-google-drive.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-googledriveconfiguration.html#cfn-kendra-datasource-googledriveconfiguration-excludemimetypes
         */
        readonly excludeMimeTypes?: Array<string>;
        /**
         * A list of identifiers or shared drives to exclude from the index.
         *
         * All files and folders stored on the shared drive are excluded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-googledriveconfiguration.html#cfn-kendra-datasource-googledriveconfiguration-excludeshareddrives
         */
        readonly excludeSharedDrives?: Array<string>;
        /**
         * A list of email addresses of the users.
         *
         * Documents owned by these users are excluded from the index. Documents shared with excluded users are indexed unless they are excluded in another way.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-googledriveconfiguration.html#cfn-kendra-datasource-googledriveconfiguration-excludeuseraccounts
         */
        readonly excludeUserAccounts?: Array<string>;
        /**
         * A list of regular expression patterns to exclude certain items in your Google Drive, including shared drives and users' My Drives.
         *
         * Items that match the patterns are excluded from the index. Items that don't match the patterns are included in the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-googledriveconfiguration.html#cfn-kendra-datasource-googledriveconfiguration-exclusionpatterns
         */
        readonly exclusionPatterns?: Array<string>;
        /**
         * Maps Google Drive data source attributes or field names to Amazon Kendra index field names.
         *
         * To create custom fields, use the `UpdateIndex` API before you map to Google Drive fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html) . The Google Drive data source field names must exist in your Google Drive custom metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-googledriveconfiguration.html#cfn-kendra-datasource-googledriveconfiguration-fieldmappings
         */
        readonly fieldMappings?: Array<CfnDataSource.DataSourceToIndexFieldMappingProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A list of regular expression patterns to include certain items in your Google Drive, including shared drives and users' My Drives.
         *
         * Items that match the patterns are included in the index. Items that don't match the patterns are excluded from the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-googledriveconfiguration.html#cfn-kendra-datasource-googledriveconfiguration-inclusionpatterns
         */
        readonly inclusionPatterns?: Array<string>;
        /**
         * The Amazon Resource Name (ARN) of a AWS Secrets Manager secret that contains the credentials required to connect to Google Drive.
         *
         * For more information, see [Using a Google Workspace Drive data source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-google-drive.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-googledriveconfiguration.html#cfn-kendra-datasource-googledriveconfiguration-secretarn
         */
        readonly secretArn: string;
    }
    /**
     * Maps a column or attribute in the data source to an index field.
     *
     * You must first create the fields in the index using the [UpdateIndex](https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html) operation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourcetoindexfieldmapping.html
     */
    interface DataSourceToIndexFieldMappingProperty {
        /**
         * The name of the field in the data source.
         *
         * You must first create the index field using the `UpdateIndex` API.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourcetoindexfieldmapping.html#cfn-kendra-datasource-datasourcetoindexfieldmapping-datasourcefieldname
         */
        readonly dataSourceFieldName: string;
        /**
         * The format for date fields in the data source.
         *
         * If the field specified in `DataSourceFieldName` is a date field, you must specify the date format. If the field is not a date field, an exception is thrown.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourcetoindexfieldmapping.html#cfn-kendra-datasource-datasourcetoindexfieldmapping-datefieldformat
         */
        readonly dateFieldFormat?: string;
        /**
         * The name of the index field to map to the data source field.
         *
         * The index field type must match the data source field type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourcetoindexfieldmapping.html#cfn-kendra-datasource-datasourcetoindexfieldmapping-indexfieldname
         */
        readonly indexFieldName: string;
    }
    /**
     * Provides the configuration information required for Amazon Kendra Web Crawler.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerconfiguration.html
     */
    interface WebCrawlerConfigurationProperty {
        /**
         * Configuration information required to connect to websites using authentication.
         *
         * You can connect to websites using basic authentication of user name and password. You use a secret in [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html) to store your authentication credentials.
         *
         * You must provide the website host name and port number. For example, the host name of https://a.example.com/page1.html is "a.example.com" and the port is 443, the standard port for HTTPS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerconfiguration.html#cfn-kendra-datasource-webcrawlerconfiguration-authenticationconfiguration
         */
        readonly authenticationConfiguration?: cdk.IResolvable | CfnDataSource.WebCrawlerAuthenticationConfigurationProperty;
        /**
         * The 'depth' or number of levels from the seed level to crawl.
         *
         * For example, the seed URL page is depth 1 and any hyperlinks on this page that are also crawled are depth 2.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerconfiguration.html#cfn-kendra-datasource-webcrawlerconfiguration-crawldepth
         */
        readonly crawlDepth?: number;
        /**
         * The maximum size (in MB) of a web page or attachment to crawl.
         *
         * Files larger than this size (in MB) are skipped/not crawled.
         *
         * The default maximum size of a web page or attachment is set to 50 MB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerconfiguration.html#cfn-kendra-datasource-webcrawlerconfiguration-maxcontentsizeperpageinmegabytes
         */
        readonly maxContentSizePerPageInMegaBytes?: number;
        /**
         * The maximum number of URLs on a web page to include when crawling a website.
         *
         * This number is per web page.
         *
         * As a website’s web pages are crawled, any URLs the web pages link to are also crawled. URLs on a web page are crawled in order of appearance.
         *
         * The default maximum links per page is 100.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerconfiguration.html#cfn-kendra-datasource-webcrawlerconfiguration-maxlinksperpage
         */
        readonly maxLinksPerPage?: number;
        /**
         * The maximum number of URLs crawled per website host per minute.
         *
         * A minimum of one URL is required.
         *
         * The default maximum number of URLs crawled per website host per minute is 300.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerconfiguration.html#cfn-kendra-datasource-webcrawlerconfiguration-maxurlsperminutecrawlrate
         */
        readonly maxUrlsPerMinuteCrawlRate?: number;
        /**
         * Configuration information required to connect to your internal websites via a web proxy.
         *
         * You must provide the website host name and port number. For example, the host name of https://a.example.com/page1.html is "a.example.com" and the port is 443, the standard port for HTTPS.
         *
         * Web proxy credentials are optional and you can use them to connect to a web proxy server that requires basic authentication. To store web proxy credentials, you use a secret in [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerconfiguration.html#cfn-kendra-datasource-webcrawlerconfiguration-proxyconfiguration
         */
        readonly proxyConfiguration?: cdk.IResolvable | CfnDataSource.ProxyConfigurationProperty;
        /**
         * A list of regular expression patterns to exclude certain URLs to crawl.
         *
         * URLs that match the patterns are excluded from the index. URLs that don't match the patterns are included in the index. If a URL matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the URL file isn't included in the index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerconfiguration.html#cfn-kendra-datasource-webcrawlerconfiguration-urlexclusionpatterns
         */
        readonly urlExclusionPatterns?: Array<string>;
        /**
         * A list of regular expression patterns to include certain URLs to crawl.
         *
         * URLs that match the patterns are included in the index. URLs that don't match the patterns are excluded from the index. If a URL matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the URL file isn't included in the index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerconfiguration.html#cfn-kendra-datasource-webcrawlerconfiguration-urlinclusionpatterns
         */
        readonly urlInclusionPatterns?: Array<string>;
        /**
         * Specifies the seed or starting point URLs of the websites or the sitemap URLs of the websites you want to crawl.
         *
         * You can include website subdomains. You can list up to 100 seed URLs and up to three sitemap URLs.
         *
         * You can only crawl websites that use the secure communication protocol, Hypertext Transfer Protocol Secure (HTTPS). If you receive an error when crawling a website, it could be that the website is blocked from crawling.
         *
         * *When selecting websites to index, you must adhere to the [Amazon Acceptable Use Policy](https://docs.aws.amazon.com/aup/) and all other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler to index your own webpages, or webpages that you have authorization to index.*
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerconfiguration.html#cfn-kendra-datasource-webcrawlerconfiguration-urls
         */
        readonly urls: cdk.IResolvable | CfnDataSource.WebCrawlerUrlsProperty;
    }
    /**
     * Provides the configuration information to connect to websites that require user authentication.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerauthenticationconfiguration.html
     */
    interface WebCrawlerAuthenticationConfigurationProperty {
        /**
         * The list of configuration information that's required to connect to and crawl a website host using basic authentication credentials.
         *
         * The list includes the name and port number of the website host.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerauthenticationconfiguration.html#cfn-kendra-datasource-webcrawlerauthenticationconfiguration-basicauthentication
         */
        readonly basicAuthentication?: Array<cdk.IResolvable | CfnDataSource.WebCrawlerBasicAuthenticationProperty> | cdk.IResolvable;
    }
    /**
     * Provides the configuration information to connect to websites that require basic user authentication.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerbasicauthentication.html
     */
    interface WebCrawlerBasicAuthenticationProperty {
        /**
         * The Amazon Resource Name (ARN) of an AWS Secrets Manager secret.
         *
         * You create a secret to store your credentials in [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)
         *
         * You use a secret if basic authentication credentials are required to connect to a website. The secret stores your credentials of user name and password.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerbasicauthentication.html#cfn-kendra-datasource-webcrawlerbasicauthentication-credentials
         */
        readonly credentials: string;
        /**
         * The name of the website host you want to connect to using authentication credentials.
         *
         * For example, the host name of https://a.example.com/page1.html is "a.example.com".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerbasicauthentication.html#cfn-kendra-datasource-webcrawlerbasicauthentication-host
         */
        readonly host: string;
        /**
         * The port number of the website host you want to connect to using authentication credentials.
         *
         * For example, the port for https://a.example.com/page1.html is 443, the standard port for HTTPS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerbasicauthentication.html#cfn-kendra-datasource-webcrawlerbasicauthentication-port
         */
        readonly port: number;
    }
    /**
     * Provides the configuration information for a web proxy to connect to website hosts.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-proxyconfiguration.html
     */
    interface ProxyConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of an AWS Secrets Manager secret.
         *
         * You create a secret to store your credentials in [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)
         *
         * The credentials are optional. You use a secret if web proxy credentials are required to connect to a website host. Amazon Kendra currently support basic authentication to connect to a web proxy server. The secret stores your credentials.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-proxyconfiguration.html#cfn-kendra-datasource-proxyconfiguration-credentials
         */
        readonly credentials?: string;
        /**
         * The name of the website host you want to connect to via a web proxy server.
         *
         * For example, the host name of https://a.example.com/page1.html is "a.example.com".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-proxyconfiguration.html#cfn-kendra-datasource-proxyconfiguration-host
         */
        readonly host: string;
        /**
         * The port number of the website host you want to connect to via a web proxy server.
         *
         * For example, the port for https://a.example.com/page1.html is 443, the standard port for HTTPS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-proxyconfiguration.html#cfn-kendra-datasource-proxyconfiguration-port
         */
        readonly port: number;
    }
    /**
     * Specifies the seed or starting point URLs of the websites or the sitemap URLs of the websites you want to crawl.
     *
     * You can include website subdomains. You can list up to 100 seed URLs and up to three sitemap URLs.
     *
     * You can only crawl websites that use the secure communication protocol, Hypertext Transfer Protocol Secure (HTTPS). If you receive an error when crawling a website, it could be that the website is blocked from crawling.
     *
     * *When selecting websites to index, you must adhere to the [Amazon Acceptable Use Policy](https://docs.aws.amazon.com/aup/) and all other Amazon terms. Remember that you must only use the Amazon Kendra web crawler to index your own webpages, or webpages that you have authorization to index.*
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerurls.html
     */
    interface WebCrawlerUrlsProperty {
        /**
         * Configuration of the seed or starting point URLs of the websites you want to crawl.
         *
         * You can choose to crawl only the website host names, or the website host names with subdomains, or the website host names with subdomains and other domains that the web pages link to.
         *
         * You can list up to 100 seed URLs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerurls.html#cfn-kendra-datasource-webcrawlerurls-seedurlconfiguration
         */
        readonly seedUrlConfiguration?: cdk.IResolvable | CfnDataSource.WebCrawlerSeedUrlConfigurationProperty;
        /**
         * Configuration of the sitemap URLs of the websites you want to crawl.
         *
         * Only URLs belonging to the same website host names are crawled. You can list up to three sitemap URLs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerurls.html#cfn-kendra-datasource-webcrawlerurls-sitemapsconfiguration
         */
        readonly siteMapsConfiguration?: cdk.IResolvable | CfnDataSource.WebCrawlerSiteMapsConfigurationProperty;
    }
    /**
     * Provides the configuration information of the sitemap URLs to crawl.
     *
     * *When selecting websites to index, you must adhere to the [Amazon Acceptable Use Policy](https://docs.aws.amazon.com/aup/) and all other Amazon terms. Remember that you must only use the Amazon Kendra web crawler to index your own webpages, or webpages that you have authorization to index.*
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlersitemapsconfiguration.html
     */
    interface WebCrawlerSiteMapsConfigurationProperty {
        /**
         * The list of sitemap URLs of the websites you want to crawl.
         *
         * The list can include a maximum of three sitemap URLs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlersitemapsconfiguration.html#cfn-kendra-datasource-webcrawlersitemapsconfiguration-sitemaps
         */
        readonly siteMaps: Array<string>;
    }
    /**
     * Provides the configuration information of the seed or starting point URLs to crawl.
     *
     * *When selecting websites to index, you must adhere to the [Amazon Acceptable Use Policy](https://docs.aws.amazon.com/aup/) and all other Amazon terms. Remember that you must only use the Amazon Kendra web crawler to index your own webpages, or webpages that you have authorization to index.*
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerseedurlconfiguration.html
     */
    interface WebCrawlerSeedUrlConfigurationProperty {
        /**
         * The list of seed or starting point URLs of the websites you want to crawl.
         *
         * The list can include a maximum of 100 seed URLs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerseedurlconfiguration.html#cfn-kendra-datasource-webcrawlerseedurlconfiguration-seedurls
         */
        readonly seedUrls: Array<string>;
        /**
         * You can choose one of the following modes:.
         *
         * - `HOST_ONLY` —crawl only the website host names. For example, if the seed URL is "abc.example.com", then only URLs with host name "abc.example.com" are crawled.
         * - `SUBDOMAINS` —crawl the website host names with subdomains. For example, if the seed URL is "abc.example.com", then "a.abc.example.com" and "b.abc.example.com" are also crawled.
         * - `EVERYTHING` —crawl the website host names with subdomains and other domains that the web pages link to.
         *
         * The default mode is set to `HOST_ONLY` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerseedurlconfiguration.html#cfn-kendra-datasource-webcrawlerseedurlconfiguration-webcrawlermode
         */
        readonly webCrawlerMode?: string;
    }
    /**
     * Provides the configuration information to connect to an Amazon S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-s3datasourceconfiguration.html
     */
    interface S3DataSourceConfigurationProperty {
        /**
         * Provides the path to the S3 bucket that contains the user context filtering files for the data source.
         *
         * For the format of the file, see [Access control for S3 data sources](https://docs.aws.amazon.com/kendra/latest/dg/s3-acl.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-s3datasourceconfiguration.html#cfn-kendra-datasource-s3datasourceconfiguration-accesscontrollistconfiguration
         */
        readonly accessControlListConfiguration?: CfnDataSource.AccessControlListConfigurationProperty | cdk.IResolvable;
        /**
         * The name of the bucket that contains the documents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-s3datasourceconfiguration.html#cfn-kendra-datasource-s3datasourceconfiguration-bucketname
         */
        readonly bucketName: string;
        /**
         * Specifies document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes.
         *
         * Each metadata file contains metadata about a single document.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-s3datasourceconfiguration.html#cfn-kendra-datasource-s3datasourceconfiguration-documentsmetadataconfiguration
         */
        readonly documentsMetadataConfiguration?: CfnDataSource.DocumentsMetadataConfigurationProperty | cdk.IResolvable;
        /**
         * A list of glob patterns (patterns that can expand a wildcard pattern into a list of path names that match the given pattern) for certain file names and file types to exclude from your index.
         *
         * If a document matches both an inclusion and exclusion prefix or pattern, the exclusion prefix takes precendence and the document is not indexed. Examples of glob patterns include:
         *
         * - * /myapp/config/** —All files inside config directory.
         * - *** /*.png* —All .png files in all directories.
         * - *** /*.{png, ico, md}* —All .png, .ico or .md files in all directories.
         * - * /myapp/src/** /*.ts* —All .ts files inside src directory (and all its subdirectories).
         * - *** /!(*.module).ts* —All .ts files but not .module.ts
         * - **.png , *.jpg* —All PNG and JPEG image files in a directory (files with the extensions .png and .jpg).
         * - **internal** —All files in a directory that contain 'internal' in the file name, such as 'internal', 'internal_only', 'company_internal'.
         * - *** /*internal** —All internal-related files in a directory and its subdirectories.
         *
         * For more examples, see [Use of Exclude and Include Filters](https://docs.aws.amazon.com/cli/latest/reference/s3/#use-of-exclude-and-include-filters) in the AWS CLI Command Reference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-s3datasourceconfiguration.html#cfn-kendra-datasource-s3datasourceconfiguration-exclusionpatterns
         */
        readonly exclusionPatterns?: Array<string>;
        /**
         * A list of glob patterns (patterns that can expand a wildcard pattern into a list of path names that match the given pattern) for certain file names and file types to include in your index.
         *
         * If a document matches both an inclusion and exclusion prefix or pattern, the exclusion prefix takes precendence and the document is not indexed. Examples of glob patterns include:
         *
         * - * /myapp/config/** —All files inside config directory.
         * - *** /*.png* —All .png files in all directories.
         * - *** /*.{png, ico, md}* —All .png, .ico or .md files in all directories.
         * - * /myapp/src/** /*.ts* —All .ts files inside src directory (and all its subdirectories).
         * - *** /!(*.module).ts* —All .ts files but not .module.ts
         * - **.png , *.jpg* —All PNG and JPEG image files in a directory (files with the extensions .png and .jpg).
         * - **internal** —All files in a directory that contain 'internal' in the file name, such as 'internal', 'internal_only', 'company_internal'.
         * - *** /*internal** —All internal-related files in a directory and its subdirectories.
         *
         * For more examples, see [Use of Exclude and Include Filters](https://docs.aws.amazon.com/cli/latest/reference/s3/#use-of-exclude-and-include-filters) in the AWS CLI Command Reference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-s3datasourceconfiguration.html#cfn-kendra-datasource-s3datasourceconfiguration-inclusionpatterns
         */
        readonly inclusionPatterns?: Array<string>;
        /**
         * A list of S3 prefixes for the documents that should be included in the index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-s3datasourceconfiguration.html#cfn-kendra-datasource-s3datasourceconfiguration-inclusionprefixes
         */
        readonly inclusionPrefixes?: Array<string>;
    }
    /**
     * Specifies access control list files for the documents in a data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-accesscontrollistconfiguration.html
     */
    interface AccessControlListConfigurationProperty {
        /**
         * Path to the AWS S3 bucket that contains the access control list files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-accesscontrollistconfiguration.html#cfn-kendra-datasource-accesscontrollistconfiguration-keypath
         */
        readonly keyPath?: string;
    }
    /**
     * Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes.
     *
     * Each metadata file contains metadata about a single document.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentsmetadataconfiguration.html
     */
    interface DocumentsMetadataConfigurationProperty {
        /**
         * A prefix used to filter metadata configuration files in the AWS S3 bucket.
         *
         * The S3 bucket might contain multiple metadata files. Use `S3Prefix` to include only the desired metadata files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentsmetadataconfiguration.html#cfn-kendra-datasource-documentsmetadataconfiguration-s3prefix
         */
        readonly s3Prefix?: string;
    }
    /**
     * Provides the configuration information to connect to Salesforce as your data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceconfiguration.html
     */
    interface SalesforceConfigurationProperty {
        /**
         * Configuration information for Salesforce chatter feeds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceconfiguration.html#cfn-kendra-datasource-salesforceconfiguration-chatterfeedconfiguration
         */
        readonly chatterFeedConfiguration?: cdk.IResolvable | CfnDataSource.SalesforceChatterFeedConfigurationProperty;
        /**
         * Indicates whether Amazon Kendra should index attachments to Salesforce objects.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceconfiguration.html#cfn-kendra-datasource-salesforceconfiguration-crawlattachments
         */
        readonly crawlAttachments?: boolean | cdk.IResolvable;
        /**
         * A list of regular expression patterns to exclude certain documents in your Salesforce.
         *
         * Documents that match the patterns are excluded from the index. Documents that don't match the patterns are included in the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.
         *
         * The pattern is applied to the name of the attached file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceconfiguration.html#cfn-kendra-datasource-salesforceconfiguration-excludeattachmentfilepatterns
         */
        readonly excludeAttachmentFilePatterns?: Array<string>;
        /**
         * A list of regular expression patterns to include certain documents in your Salesforce.
         *
         * Documents that match the patterns are included in the index. Documents that don't match the patterns are excluded from the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.
         *
         * The pattern is applied to the name of the attached file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceconfiguration.html#cfn-kendra-datasource-salesforceconfiguration-includeattachmentfilepatterns
         */
        readonly includeAttachmentFilePatterns?: Array<string>;
        /**
         * Configuration information for the knowledge article types that Amazon Kendra indexes.
         *
         * Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceconfiguration.html#cfn-kendra-datasource-salesforceconfiguration-knowledgearticleconfiguration
         */
        readonly knowledgeArticleConfiguration?: cdk.IResolvable | CfnDataSource.SalesforceKnowledgeArticleConfigurationProperty;
        /**
         * The Amazon Resource Name (ARN) of an AWS Secrets Manager secret that contains the key/value pairs required to connect to your Salesforce instance.
         *
         * The secret must contain a JSON structure with the following keys:
         *
         * - authenticationUrl - The OAUTH endpoint that Amazon Kendra connects to get an OAUTH token.
         * - consumerKey - The application public key generated when you created your Salesforce application.
         * - consumerSecret - The application private key generated when you created your Salesforce application.
         * - password - The password associated with the user logging in to the Salesforce instance.
         * - securityToken - The token associated with the user logging in to the Salesforce instance.
         * - username - The user name of the user logging in to the Salesforce instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceconfiguration.html#cfn-kendra-datasource-salesforceconfiguration-secretarn
         */
        readonly secretArn: string;
        /**
         * The instance URL for the Salesforce site that you want to index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceconfiguration.html#cfn-kendra-datasource-salesforceconfiguration-serverurl
         */
        readonly serverUrl: string;
        /**
         * Configuration information for processing attachments to Salesforce standard objects.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceconfiguration.html#cfn-kendra-datasource-salesforceconfiguration-standardobjectattachmentconfiguration
         */
        readonly standardObjectAttachmentConfiguration?: cdk.IResolvable | CfnDataSource.SalesforceStandardObjectAttachmentConfigurationProperty;
        /**
         * Configuration of the Salesforce standard objects that Amazon Kendra indexes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceconfiguration.html#cfn-kendra-datasource-salesforceconfiguration-standardobjectconfigurations
         */
        readonly standardObjectConfigurations?: Array<cdk.IResolvable | CfnDataSource.SalesforceStandardObjectConfigurationProperty> | cdk.IResolvable;
    }
    /**
     * Specifies configuration information for indexing a single standard object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardobjectconfiguration.html
     */
    interface SalesforceStandardObjectConfigurationProperty {
        /**
         * The name of the field in the standard object table that contains the document contents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardobjectconfiguration.html#cfn-kendra-datasource-salesforcestandardobjectconfiguration-documentdatafieldname
         */
        readonly documentDataFieldName: string;
        /**
         * The name of the field in the standard object table that contains the document title.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardobjectconfiguration.html#cfn-kendra-datasource-salesforcestandardobjectconfiguration-documenttitlefieldname
         */
        readonly documentTitleFieldName?: string;
        /**
         * Maps attributes or field names of the standard object to Amazon Kendra index field names.
         *
         * To create custom fields, use the `UpdateIndex` API before you map to Salesforce fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html) . The Salesforce data source field names must exist in your Salesforce custom metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardobjectconfiguration.html#cfn-kendra-datasource-salesforcestandardobjectconfiguration-fieldmappings
         */
        readonly fieldMappings?: Array<CfnDataSource.DataSourceToIndexFieldMappingProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The name of the standard object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardobjectconfiguration.html#cfn-kendra-datasource-salesforcestandardobjectconfiguration-name
         */
        readonly name: string;
    }
    /**
     * Provides the configuration information for processing attachments to Salesforce standard objects.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardobjectattachmentconfiguration.html
     */
    interface SalesforceStandardObjectAttachmentConfigurationProperty {
        /**
         * The name of the field used for the document title.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardobjectattachmentconfiguration.html#cfn-kendra-datasource-salesforcestandardobjectattachmentconfiguration-documenttitlefieldname
         */
        readonly documentTitleFieldName?: string;
        /**
         * One or more objects that map fields in attachments to Amazon Kendra index fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardobjectattachmentconfiguration.html#cfn-kendra-datasource-salesforcestandardobjectattachmentconfiguration-fieldmappings
         */
        readonly fieldMappings?: Array<CfnDataSource.DataSourceToIndexFieldMappingProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * The configuration information for syncing a Salesforce chatter feed.
     *
     * The contents of the object comes from the Salesforce FeedItem table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcechatterfeedconfiguration.html
     */
    interface SalesforceChatterFeedConfigurationProperty {
        /**
         * The name of the column in the Salesforce FeedItem table that contains the content to index.
         *
         * Typically this is the `Body` column.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcechatterfeedconfiguration.html#cfn-kendra-datasource-salesforcechatterfeedconfiguration-documentdatafieldname
         */
        readonly documentDataFieldName: string;
        /**
         * The name of the column in the Salesforce FeedItem table that contains the title of the document.
         *
         * This is typically the `Title` column.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcechatterfeedconfiguration.html#cfn-kendra-datasource-salesforcechatterfeedconfiguration-documenttitlefieldname
         */
        readonly documentTitleFieldName?: string;
        /**
         * Maps fields from a Salesforce chatter feed into Amazon Kendra index fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcechatterfeedconfiguration.html#cfn-kendra-datasource-salesforcechatterfeedconfiguration-fieldmappings
         */
        readonly fieldMappings?: Array<CfnDataSource.DataSourceToIndexFieldMappingProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Filters the documents in the feed based on status of the user.
         *
         * When you specify `ACTIVE_USERS` only documents from users who have an active account are indexed. When you specify `STANDARD_USER` only documents for Salesforce standard users are documented. You can specify both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcechatterfeedconfiguration.html#cfn-kendra-datasource-salesforcechatterfeedconfiguration-includefiltertypes
         */
        readonly includeFilterTypes?: Array<string>;
    }
    /**
     * Provides the configuration information for the knowledge article types that Amazon Kendra indexes.
     *
     * Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceknowledgearticleconfiguration.html
     */
    interface SalesforceKnowledgeArticleConfigurationProperty {
        /**
         * Configuration information for custom Salesforce knowledge articles.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceknowledgearticleconfiguration.html#cfn-kendra-datasource-salesforceknowledgearticleconfiguration-customknowledgearticletypeconfigurations
         */
        readonly customKnowledgeArticleTypeConfigurations?: Array<cdk.IResolvable | CfnDataSource.SalesforceCustomKnowledgeArticleTypeConfigurationProperty> | cdk.IResolvable;
        /**
         * Specifies the document states that should be included when Amazon Kendra indexes knowledge articles.
         *
         * You must specify at least one state.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceknowledgearticleconfiguration.html#cfn-kendra-datasource-salesforceknowledgearticleconfiguration-includedstates
         */
        readonly includedStates: Array<string>;
        /**
         * Configuration information for standard Salesforce knowledge articles.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceknowledgearticleconfiguration.html#cfn-kendra-datasource-salesforceknowledgearticleconfiguration-standardknowledgearticletypeconfiguration
         */
        readonly standardKnowledgeArticleTypeConfiguration?: cdk.IResolvable | CfnDataSource.SalesforceStandardKnowledgeArticleTypeConfigurationProperty;
    }
    /**
     * Provides the configuration information for standard Salesforce knowledge articles.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration.html
     */
    interface SalesforceStandardKnowledgeArticleTypeConfigurationProperty {
        /**
         * The name of the field that contains the document data to index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration.html#cfn-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration-documentdatafieldname
         */
        readonly documentDataFieldName: string;
        /**
         * The name of the field that contains the document title.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration.html#cfn-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration-documenttitlefieldname
         */
        readonly documentTitleFieldName?: string;
        /**
         * Maps attributes or field names of the knowledge article to Amazon Kendra index field names.
         *
         * To create custom fields, use the `UpdateIndex` API before you map to Salesforce fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html) . The Salesforce data source field names must exist in your Salesforce custom metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration.html#cfn-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration-fieldmappings
         */
        readonly fieldMappings?: Array<CfnDataSource.DataSourceToIndexFieldMappingProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Provides the configuration information for indexing Salesforce custom articles.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration.html
     */
    interface SalesforceCustomKnowledgeArticleTypeConfigurationProperty {
        /**
         * The name of the field in the custom knowledge article that contains the document data to index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration.html#cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-documentdatafieldname
         */
        readonly documentDataFieldName: string;
        /**
         * The name of the field in the custom knowledge article that contains the document title.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration.html#cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-documenttitlefieldname
         */
        readonly documentTitleFieldName?: string;
        /**
         * Maps attributes or field names of the custom knowledge article to Amazon Kendra index field names.
         *
         * To create custom fields, use the `UpdateIndex` API before you map to Salesforce fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html) . The Salesforce data source field names must exist in your Salesforce custom metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration.html#cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-fieldmappings
         */
        readonly fieldMappings?: Array<CfnDataSource.DataSourceToIndexFieldMappingProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The name of the configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration.html#cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-name
         */
        readonly name: string;
    }
    /**
     * Provides the configuration information to an [Amazon Kendra supported database](https://docs.aws.amazon.com/kendra/latest/dg/data-source-database.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-databaseconfiguration.html
     */
    interface DatabaseConfigurationProperty {
        /**
         * Information about the database column that provides information for user context filtering.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-databaseconfiguration.html#cfn-kendra-datasource-databaseconfiguration-aclconfiguration
         */
        readonly aclConfiguration?: CfnDataSource.AclConfigurationProperty | cdk.IResolvable;
        /**
         * Information about where the index should get the document information from the database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-databaseconfiguration.html#cfn-kendra-datasource-databaseconfiguration-columnconfiguration
         */
        readonly columnConfiguration: CfnDataSource.ColumnConfigurationProperty | cdk.IResolvable;
        /**
         * Configuration information that's required to connect to a database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-databaseconfiguration.html#cfn-kendra-datasource-databaseconfiguration-connectionconfiguration
         */
        readonly connectionConfiguration: CfnDataSource.ConnectionConfigurationProperty | cdk.IResolvable;
        /**
         * The type of database engine that runs the database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-databaseconfiguration.html#cfn-kendra-datasource-databaseconfiguration-databaseenginetype
         */
        readonly databaseEngineType: string;
        /**
         * Provides information about how Amazon Kendra uses quote marks around SQL identifiers when querying a database data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-databaseconfiguration.html#cfn-kendra-datasource-databaseconfiguration-sqlconfiguration
         */
        readonly sqlConfiguration?: cdk.IResolvable | CfnDataSource.SqlConfigurationProperty;
        /**
         * Provides information for connecting to an Amazon VPC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-databaseconfiguration.html#cfn-kendra-datasource-databaseconfiguration-vpcconfiguration
         */
        readonly vpcConfiguration?: CfnDataSource.DataSourceVpcConfigurationProperty | cdk.IResolvable;
    }
    /**
     * Provides information that configures Amazon Kendra to use a SQL database.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sqlconfiguration.html
     */
    interface SqlConfigurationProperty {
        /**
         * Determines whether Amazon Kendra encloses SQL identifiers for tables and column names in double quotes (") when making a database query.
         *
         * You can set the value to `DOUBLE_QUOTES` or `NONE` .
         *
         * By default, Amazon Kendra passes SQL identifiers the way that they are entered into the data source configuration. It does not change the case of identifiers or enclose them in quotes.
         *
         * PostgreSQL internally converts uppercase characters to lower case characters in identifiers unless they are quoted. Choosing this option encloses identifiers in quotes so that PostgreSQL does not convert the character's case.
         *
         * For MySQL databases, you must enable the ansi_quotes option when you set this field to `DOUBLE_QUOTES` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sqlconfiguration.html#cfn-kendra-datasource-sqlconfiguration-queryidentifiersenclosingoption
         */
        readonly queryIdentifiersEnclosingOption?: string;
    }
    /**
     * Provides the configuration information that's required to connect to a database.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-connectionconfiguration.html
     */
    interface ConnectionConfigurationProperty {
        /**
         * The name of the host for the database.
         *
         * Can be either a string (host.subdomain.domain.tld) or an IPv4 or IPv6 address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-connectionconfiguration.html#cfn-kendra-datasource-connectionconfiguration-databasehost
         */
        readonly databaseHost: string;
        /**
         * The name of the database containing the document data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-connectionconfiguration.html#cfn-kendra-datasource-connectionconfiguration-databasename
         */
        readonly databaseName: string;
        /**
         * The port that the database uses for connections.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-connectionconfiguration.html#cfn-kendra-datasource-connectionconfiguration-databaseport
         */
        readonly databasePort: number;
        /**
         * The Amazon Resource Name (ARN) of an AWS Secrets Manager secret that stores the credentials.
         *
         * The credentials should be a user-password pair. For more information, see [Using a Database Data Source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-database.html) . For more information about AWS Secrets Manager , see [What Is AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html) in the *AWS Secrets Manager* user guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-connectionconfiguration.html#cfn-kendra-datasource-connectionconfiguration-secretarn
         */
        readonly secretArn: string;
        /**
         * The name of the table that contains the document data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-connectionconfiguration.html#cfn-kendra-datasource-connectionconfiguration-tablename
         */
        readonly tableName: string;
    }
    /**
     * Provides information about how Amazon Kendra should use the columns of a database in an index.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-columnconfiguration.html
     */
    interface ColumnConfigurationProperty {
        /**
         * One to five columns that indicate when a document in the database has changed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-columnconfiguration.html#cfn-kendra-datasource-columnconfiguration-changedetectingcolumns
         */
        readonly changeDetectingColumns: Array<string>;
        /**
         * The column that contains the contents of the document.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-columnconfiguration.html#cfn-kendra-datasource-columnconfiguration-documentdatacolumnname
         */
        readonly documentDataColumnName: string;
        /**
         * The column that provides the document's identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-columnconfiguration.html#cfn-kendra-datasource-columnconfiguration-documentidcolumnname
         */
        readonly documentIdColumnName: string;
        /**
         * The column that contains the title of the document.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-columnconfiguration.html#cfn-kendra-datasource-columnconfiguration-documenttitlecolumnname
         */
        readonly documentTitleColumnName?: string;
        /**
         * An array of objects that map database column names to the corresponding fields in an index.
         *
         * You must first create the fields in the index using the [UpdateIndex](https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html) operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-columnconfiguration.html#cfn-kendra-datasource-columnconfiguration-fieldmappings
         */
        readonly fieldMappings?: Array<CfnDataSource.DataSourceToIndexFieldMappingProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Provides the configuration information to connect to an Amazon VPC.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourcevpcconfiguration.html
     */
    interface DataSourceVpcConfigurationProperty {
        /**
         * A list of identifiers of security groups within your Amazon VPC.
         *
         * The security groups should enable Amazon Kendra to connect to the data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourcevpcconfiguration.html#cfn-kendra-datasource-datasourcevpcconfiguration-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * A list of identifiers for subnets within your Amazon VPC.
         *
         * The subnets should be able to connect to each other in the VPC, and they should have outgoing access to the Internet through a NAT device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourcevpcconfiguration.html#cfn-kendra-datasource-datasourcevpcconfiguration-subnetids
         */
        readonly subnetIds: Array<string>;
    }
    /**
     * Provides information about the column that should be used for filtering the query response by groups.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-aclconfiguration.html
     */
    interface AclConfigurationProperty {
        /**
         * A list of groups, separated by semi-colons, that filters a query response based on user context.
         *
         * The document is only returned to users that are in one of the groups specified in the `UserContext` field of the [Query](https://docs.aws.amazon.com/kendra/latest/dg/API_Query.html) operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-aclconfiguration.html#cfn-kendra-datasource-aclconfiguration-allowedgroupscolumnname
         */
        readonly allowedGroupsColumnName: string;
    }
    /**
     * Provides the configuration information to connect to Microsoft SharePoint as your data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sharepointconfiguration.html
     */
    interface SharePointConfigurationProperty {
        /**
         * `TRUE` to index document attachments.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sharepointconfiguration.html#cfn-kendra-datasource-sharepointconfiguration-crawlattachments
         */
        readonly crawlAttachments?: boolean | cdk.IResolvable;
        /**
         * `TRUE` to disable local groups information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sharepointconfiguration.html#cfn-kendra-datasource-sharepointconfiguration-disablelocalgroups
         */
        readonly disableLocalGroups?: boolean | cdk.IResolvable;
        /**
         * The Microsoft SharePoint attribute field that contains the title of the document.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sharepointconfiguration.html#cfn-kendra-datasource-sharepointconfiguration-documenttitlefieldname
         */
        readonly documentTitleFieldName?: string;
        /**
         * A list of regular expression patterns.
         *
         * Documents that match the patterns are excluded from the index. Documents that don't match the patterns are included in the index. If a document matches both an exclusion pattern and an inclusion pattern, the document is not included in the index.
         *
         * The regex is applied to the display URL of the SharePoint document.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sharepointconfiguration.html#cfn-kendra-datasource-sharepointconfiguration-exclusionpatterns
         */
        readonly exclusionPatterns?: Array<string>;
        /**
         * A list of `DataSourceToIndexFieldMapping` objects that map Microsoft SharePoint attributes or fields to Amazon Kendra index fields.
         *
         * You must first create the index fields using the [UpdateIndex](https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html) operation before you map SharePoint attributes. For more information, see [Mapping Data Source Fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sharepointconfiguration.html#cfn-kendra-datasource-sharepointconfiguration-fieldmappings
         */
        readonly fieldMappings?: Array<CfnDataSource.DataSourceToIndexFieldMappingProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A list of regular expression patterns to include certain documents in your SharePoint.
         *
         * Documents that match the patterns are included in the index. Documents that don't match the patterns are excluded from the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.
         *
         * The regex applies to the display URL of the SharePoint document.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sharepointconfiguration.html#cfn-kendra-datasource-sharepointconfiguration-inclusionpatterns
         */
        readonly inclusionPatterns?: Array<string>;
        /**
         * The Amazon Resource Name (ARN) of an AWS Secrets Manager secret that contains the user name and password required to connect to the SharePoint instance.
         *
         * For more information, see [Microsoft SharePoint](https://docs.aws.amazon.com/kendra/latest/dg/data-source-sharepoint.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sharepointconfiguration.html#cfn-kendra-datasource-sharepointconfiguration-secretarn
         */
        readonly secretArn: string;
        /**
         * The version of Microsoft SharePoint that you use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sharepointconfiguration.html#cfn-kendra-datasource-sharepointconfiguration-sharepointversion
         */
        readonly sharePointVersion: string;
        /**
         * Information required to find a specific file in an Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sharepointconfiguration.html#cfn-kendra-datasource-sharepointconfiguration-sslcertificates3path
         */
        readonly sslCertificateS3Path?: cdk.IResolvable | CfnDataSource.S3PathProperty;
        /**
         * The Microsoft SharePoint site URLs for the documents you want to index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sharepointconfiguration.html#cfn-kendra-datasource-sharepointconfiguration-urls
         */
        readonly urls: Array<string>;
        /**
         * `TRUE` to use the SharePoint change log to determine which documents require updating in the index.
         *
         * Depending on the change log's size, it may take longer for Amazon Kendra to use the change log than to scan all of your documents in SharePoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sharepointconfiguration.html#cfn-kendra-datasource-sharepointconfiguration-usechangelog
         */
        readonly useChangeLog?: boolean | cdk.IResolvable;
        /**
         * Provides information for connecting to an Amazon VPC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sharepointconfiguration.html#cfn-kendra-datasource-sharepointconfiguration-vpcconfiguration
         */
        readonly vpcConfiguration?: CfnDataSource.DataSourceVpcConfigurationProperty | cdk.IResolvable;
    }
    /**
     * Information required to find a specific file in an Amazon S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-s3path.html
     */
    interface S3PathProperty {
        /**
         * The name of the S3 bucket that contains the file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-s3path.html#cfn-kendra-datasource-s3path-bucket
         */
        readonly bucket: string;
        /**
         * The name of the file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-s3path.html#cfn-kendra-datasource-s3path-key
         */
        readonly key: string;
    }
    /**
     * Provides the configuration information to connect to Confluence as your data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceconfiguration.html
     */
    interface ConfluenceConfigurationProperty {
        /**
         * Configuration information for indexing attachments to Confluence blogs and pages.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceconfiguration.html#cfn-kendra-datasource-confluenceconfiguration-attachmentconfiguration
         */
        readonly attachmentConfiguration?: CfnDataSource.ConfluenceAttachmentConfigurationProperty | cdk.IResolvable;
        /**
         * Configuration information for indexing Confluence blogs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceconfiguration.html#cfn-kendra-datasource-confluenceconfiguration-blogconfiguration
         */
        readonly blogConfiguration?: CfnDataSource.ConfluenceBlogConfigurationProperty | cdk.IResolvable;
        /**
         * A list of regular expression patterns to exclude certain blog posts, pages, spaces, or attachments in your Confluence.
         *
         * Content that matches the patterns are excluded from the index. Content that doesn't match the patterns is included in the index. If content matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the content isn't included in the index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceconfiguration.html#cfn-kendra-datasource-confluenceconfiguration-exclusionpatterns
         */
        readonly exclusionPatterns?: Array<string>;
        /**
         * A list of regular expression patterns to include certain blog posts, pages, spaces, or attachments in your Confluence.
         *
         * Content that matches the patterns are included in the index. Content that doesn't match the patterns is excluded from the index. If content matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the content isn't included in the index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceconfiguration.html#cfn-kendra-datasource-confluenceconfiguration-inclusionpatterns
         */
        readonly inclusionPatterns?: Array<string>;
        /**
         * Configuration information for indexing Confluence pages.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceconfiguration.html#cfn-kendra-datasource-confluenceconfiguration-pageconfiguration
         */
        readonly pageConfiguration?: CfnDataSource.ConfluencePageConfigurationProperty | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) of an AWS Secrets Manager secret that contains the user name and password required to connect to the Confluence instance.
         *
         * If you use Confluence Cloud, you use a generated API token as the password.
         *
         * You can also provide authentication credentials in the form of a personal access token. For more information, see [Using a Confluence data source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-confluence.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceconfiguration.html#cfn-kendra-datasource-confluenceconfiguration-secretarn
         */
        readonly secretArn: string;
        /**
         * The URL of your Confluence instance.
         *
         * Use the full URL of the server. For example, *https://server.example.com:port/* . You can also use an IP address, for example, *https://192.168.1.113/* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceconfiguration.html#cfn-kendra-datasource-confluenceconfiguration-serverurl
         */
        readonly serverUrl: string;
        /**
         * Configuration information for indexing Confluence spaces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceconfiguration.html#cfn-kendra-datasource-confluenceconfiguration-spaceconfiguration
         */
        readonly spaceConfiguration?: CfnDataSource.ConfluenceSpaceConfigurationProperty | cdk.IResolvable;
        /**
         * The version or the type of Confluence installation to connect to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceconfiguration.html#cfn-kendra-datasource-confluenceconfiguration-version
         */
        readonly version: string;
        /**
         * Configuration information for an Amazon Virtual Private Cloud to connect to your Confluence.
         *
         * For more information, see [Configuring a VPC](https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceconfiguration.html#cfn-kendra-datasource-confluenceconfiguration-vpcconfiguration
         */
        readonly vpcConfiguration?: CfnDataSource.DataSourceVpcConfigurationProperty | cdk.IResolvable;
    }
    /**
     * Configuration of attachment settings for the Confluence data source.
     *
     * Attachment settings are optional, if you don't specify settings attachments, Amazon Kendra won't index them.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceattachmentconfiguration.html
     */
    interface ConfluenceAttachmentConfigurationProperty {
        /**
         * Maps attributes or field names of Confluence attachments to Amazon Kendra index field names.
         *
         * To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html) . The Confluence data source field names must exist in your Confluence custom metadata.
         *
         * If you specify the `AttachentFieldMappings` parameter, you must specify at least one field mapping.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceattachmentconfiguration.html#cfn-kendra-datasource-confluenceattachmentconfiguration-attachmentfieldmappings
         */
        readonly attachmentFieldMappings?: Array<CfnDataSource.ConfluenceAttachmentToIndexFieldMappingProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * `TRUE` to index attachments of pages and blogs in Confluence.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceattachmentconfiguration.html#cfn-kendra-datasource-confluenceattachmentconfiguration-crawlattachments
         */
        readonly crawlAttachments?: boolean | cdk.IResolvable;
    }
    /**
     * Maps attributes or field names of Confluence attachments to Amazon Kendra index field names.
     *
     * To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html) . The Confuence data source field names must exist in your Confluence custom metadata.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceattachmenttoindexfieldmapping.html
     */
    interface ConfluenceAttachmentToIndexFieldMappingProperty {
        /**
         * The name of the field in the data source.
         *
         * You must first create the index field using the `UpdateIndex` API.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceattachmenttoindexfieldmapping.html#cfn-kendra-datasource-confluenceattachmenttoindexfieldmapping-datasourcefieldname
         */
        readonly dataSourceFieldName: string;
        /**
         * The format for date fields in the data source.
         *
         * If the field specified in `DataSourceFieldName` is a date field you must specify the date format. If the field is not a date field, an exception is thrown.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceattachmenttoindexfieldmapping.html#cfn-kendra-datasource-confluenceattachmenttoindexfieldmapping-datefieldformat
         */
        readonly dateFieldFormat?: string;
        /**
         * The name of the index field to map to the Confluence data source field.
         *
         * The index field type must match the Confluence field type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceattachmenttoindexfieldmapping.html#cfn-kendra-datasource-confluenceattachmenttoindexfieldmapping-indexfieldname
         */
        readonly indexFieldName: string;
    }
    /**
     * Configuration of the page settings for the Confluence data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencepageconfiguration.html
     */
    interface ConfluencePageConfigurationProperty {
        /**
         * Maps attributes or field names of Confluence pages to Amazon Kendra index field names.
         *
         * To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html) . The Confluence data source field names must exist in your Confluence custom metadata.
         *
         * If you specify the `PageFieldMappings` parameter, you must specify at least one field mapping.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencepageconfiguration.html#cfn-kendra-datasource-confluencepageconfiguration-pagefieldmappings
         */
        readonly pageFieldMappings?: Array<CfnDataSource.ConfluencePageToIndexFieldMappingProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Maps attributes or field names of Confluence pages to Amazon Kendra index field names.
     *
     * To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html) . The Confluence data source field names must exist in your Confluence custom metadata.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencepagetoindexfieldmapping.html
     */
    interface ConfluencePageToIndexFieldMappingProperty {
        /**
         * The name of the field in the data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencepagetoindexfieldmapping.html#cfn-kendra-datasource-confluencepagetoindexfieldmapping-datasourcefieldname
         */
        readonly dataSourceFieldName: string;
        /**
         * The format for date fields in the data source.
         *
         * If the field specified in `DataSourceFieldName` is a date field you must specify the date format. If the field is not a date field, an exception is thrown.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencepagetoindexfieldmapping.html#cfn-kendra-datasource-confluencepagetoindexfieldmapping-datefieldformat
         */
        readonly dateFieldFormat?: string;
        /**
         * The name of the index field to map to the Confluence data source field.
         *
         * The index field type must match the Confluence field type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencepagetoindexfieldmapping.html#cfn-kendra-datasource-confluencepagetoindexfieldmapping-indexfieldname
         */
        readonly indexFieldName: string;
    }
    /**
     * Configuration of blog settings for the Confluence data source.
     *
     * Blogs are always indexed unless filtered from the index by the `ExclusionPatterns` or `InclusionPatterns` fields in the `ConfluenceConfiguration` object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceblogconfiguration.html
     */
    interface ConfluenceBlogConfigurationProperty {
        /**
         * Maps attributes or field names of Confluence blogs to Amazon Kendra index field names.
         *
         * To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html) . The Confluence data source field names must exist in your Confluence custom metadata.
         *
         * If you specify the `BlogFieldMappings` parameter, you must specify at least one field mapping.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceblogconfiguration.html#cfn-kendra-datasource-confluenceblogconfiguration-blogfieldmappings
         */
        readonly blogFieldMappings?: Array<CfnDataSource.ConfluenceBlogToIndexFieldMappingProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Maps attributes or field names of Confluence blog to Amazon Kendra index field names.
     *
     * To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html) . The Confluence data source field names must exist in your Confluence custom metadata.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceblogtoindexfieldmapping.html
     */
    interface ConfluenceBlogToIndexFieldMappingProperty {
        /**
         * The name of the field in the data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceblogtoindexfieldmapping.html#cfn-kendra-datasource-confluenceblogtoindexfieldmapping-datasourcefieldname
         */
        readonly dataSourceFieldName: string;
        /**
         * The format for date fields in the data source.
         *
         * If the field specified in `DataSourceFieldName` is a date field you must specify the date format. If the field is not a date field, an exception is thrown.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceblogtoindexfieldmapping.html#cfn-kendra-datasource-confluenceblogtoindexfieldmapping-datefieldformat
         */
        readonly dateFieldFormat?: string;
        /**
         * The name of the index field to map to the Confluence data source field.
         *
         * The index field type must match the Confluence field type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceblogtoindexfieldmapping.html#cfn-kendra-datasource-confluenceblogtoindexfieldmapping-indexfieldname
         */
        readonly indexFieldName: string;
    }
    /**
     * Configuration information for indexing Confluence spaces.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencespaceconfiguration.html
     */
    interface ConfluenceSpaceConfigurationProperty {
        /**
         * `TRUE` to index archived spaces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencespaceconfiguration.html#cfn-kendra-datasource-confluencespaceconfiguration-crawlarchivedspaces
         */
        readonly crawlArchivedSpaces?: boolean | cdk.IResolvable;
        /**
         * `TRUE` to index personal spaces.
         *
         * You can add restrictions to items in personal spaces. If personal spaces are indexed, queries without user context information may return restricted items from a personal space in their results. For more information, see [Filtering on user context](https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencespaceconfiguration.html#cfn-kendra-datasource-confluencespaceconfiguration-crawlpersonalspaces
         */
        readonly crawlPersonalSpaces?: boolean | cdk.IResolvable;
        /**
         * A list of space keys of Confluence spaces.
         *
         * If you include a key, the blogs, documents, and attachments in the space are not indexed. If a space is in both the `ExcludeSpaces` and the `IncludeSpaces` list, the space is excluded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencespaceconfiguration.html#cfn-kendra-datasource-confluencespaceconfiguration-excludespaces
         */
        readonly excludeSpaces?: Array<string>;
        /**
         * A list of space keys for Confluence spaces.
         *
         * If you include a key, the blogs, documents, and attachments in the space are indexed. Spaces that aren't in the list aren't indexed. A space in the list must exist. Otherwise, Amazon Kendra logs an error when the data source is synchronized. If a space is in both the `IncludeSpaces` and the `ExcludeSpaces` list, the space is excluded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencespaceconfiguration.html#cfn-kendra-datasource-confluencespaceconfiguration-includespaces
         */
        readonly includeSpaces?: Array<string>;
        /**
         * Maps attributes or field names of Confluence spaces to Amazon Kendra index field names.
         *
         * To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html) . The Confluence data source field names must exist in your Confluence custom metadata.
         *
         * If you specify the `SpaceFieldMappings` parameter, you must specify at least one field mapping.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencespaceconfiguration.html#cfn-kendra-datasource-confluencespaceconfiguration-spacefieldmappings
         */
        readonly spaceFieldMappings?: Array<CfnDataSource.ConfluenceSpaceToIndexFieldMappingProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Maps attributes or field names of Confluence spaces to Amazon Kendra index field names.
     *
     * To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html) . The Confluence data source field names must exist in your Confluence custom metadata.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencespacetoindexfieldmapping.html
     */
    interface ConfluenceSpaceToIndexFieldMappingProperty {
        /**
         * The name of the field in the data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencespacetoindexfieldmapping.html#cfn-kendra-datasource-confluencespacetoindexfieldmapping-datasourcefieldname
         */
        readonly dataSourceFieldName: string;
        /**
         * The format for date fields in the data source.
         *
         * If the field specified in `DataSourceFieldName` is a date field you must specify the date format. If the field is not a date field, an exception is thrown.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencespacetoindexfieldmapping.html#cfn-kendra-datasource-confluencespacetoindexfieldmapping-datefieldformat
         */
        readonly dateFieldFormat?: string;
        /**
         * The name of the index field to map to the Confluence data source field.
         *
         * The index field type must match the Confluence field type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencespacetoindexfieldmapping.html#cfn-kendra-datasource-confluencespacetoindexfieldmapping-indexfieldname
         */
        readonly indexFieldName: string;
    }
    /**
     * Provides the configuration information to connect to Amazon WorkDocs as your data source.
     *
     * Amazon WorkDocs connector is available in Oregon, North Virginia, Sydney, Singapore and Ireland regions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-workdocsconfiguration.html
     */
    interface WorkDocsConfigurationProperty {
        /**
         * `TRUE` to include comments on documents in your index.
         *
         * Including comments in your index means each comment is a document that can be searched on.
         *
         * The default is set to `FALSE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-workdocsconfiguration.html#cfn-kendra-datasource-workdocsconfiguration-crawlcomments
         */
        readonly crawlComments?: boolean | cdk.IResolvable;
        /**
         * A list of regular expression patterns to exclude certain files in your Amazon WorkDocs site repository.
         *
         * Files that match the patterns are excluded from the index. Files that don’t match the patterns are included in the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-workdocsconfiguration.html#cfn-kendra-datasource-workdocsconfiguration-exclusionpatterns
         */
        readonly exclusionPatterns?: Array<string>;
        /**
         * A list of `DataSourceToIndexFieldMapping` objects that map Amazon WorkDocs data source attributes or field names to Amazon Kendra index field names.
         *
         * To create custom fields, use the `UpdateIndex` API before you map to Amazon WorkDocs fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html) . The Amazon WorkDocs data source field names must exist in your Amazon WorkDocs custom metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-workdocsconfiguration.html#cfn-kendra-datasource-workdocsconfiguration-fieldmappings
         */
        readonly fieldMappings?: Array<CfnDataSource.DataSourceToIndexFieldMappingProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A list of regular expression patterns to include certain files in your Amazon WorkDocs site repository.
         *
         * Files that match the patterns are included in the index. Files that don't match the patterns are excluded from the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-workdocsconfiguration.html#cfn-kendra-datasource-workdocsconfiguration-inclusionpatterns
         */
        readonly inclusionPatterns?: Array<string>;
        /**
         * The identifier of the directory corresponding to your Amazon WorkDocs site repository.
         *
         * You can find the organization ID in the [AWS Directory Service](https://docs.aws.amazon.com/directoryservicev2/) by going to *Active Directory* , then *Directories* . Your Amazon WorkDocs site directory has an ID, which is the organization ID. You can also set up a new Amazon WorkDocs directory in the AWS Directory Service console and enable a Amazon WorkDocs site for the directory in the Amazon WorkDocs console.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-workdocsconfiguration.html#cfn-kendra-datasource-workdocsconfiguration-organizationid
         */
        readonly organizationId: string;
        /**
         * `TRUE` to use the Amazon WorkDocs change log to determine which documents require updating in the index.
         *
         * Depending on the change log's size, it may take longer for Amazon Kendra to use the change log than to scan all of your documents in Amazon WorkDocs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-workdocsconfiguration.html#cfn-kendra-datasource-workdocsconfiguration-usechangelog
         */
        readonly useChangeLog?: boolean | cdk.IResolvable;
    }
    /**
     * Provides the configuration information to connect to OneDrive as your data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-onedriveconfiguration.html
     */
    interface OneDriveConfigurationProperty {
        /**
         * `TRUE` to disable local groups information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-onedriveconfiguration.html#cfn-kendra-datasource-onedriveconfiguration-disablelocalgroups
         */
        readonly disableLocalGroups?: boolean | cdk.IResolvable;
        /**
         * A list of regular expression patterns to exclude certain documents in your OneDrive.
         *
         * Documents that match the patterns are excluded from the index. Documents that don't match the patterns are included in the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.
         *
         * The pattern is applied to the file name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-onedriveconfiguration.html#cfn-kendra-datasource-onedriveconfiguration-exclusionpatterns
         */
        readonly exclusionPatterns?: Array<string>;
        /**
         * A list of `DataSourceToIndexFieldMapping` objects that map OneDrive data source attributes or field names to Amazon Kendra index field names.
         *
         * To create custom fields, use the `UpdateIndex` API before you map to OneDrive fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html) . The OneDrive data source field names must exist in your OneDrive custom metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-onedriveconfiguration.html#cfn-kendra-datasource-onedriveconfiguration-fieldmappings
         */
        readonly fieldMappings?: Array<CfnDataSource.DataSourceToIndexFieldMappingProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A list of regular expression patterns to include certain documents in your OneDrive.
         *
         * Documents that match the patterns are included in the index. Documents that don't match the patterns are excluded from the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.
         *
         * The pattern is applied to the file name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-onedriveconfiguration.html#cfn-kendra-datasource-onedriveconfiguration-inclusionpatterns
         */
        readonly inclusionPatterns?: Array<string>;
        /**
         * A list of user accounts whose documents should be indexed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-onedriveconfiguration.html#cfn-kendra-datasource-onedriveconfiguration-onedriveusers
         */
        readonly oneDriveUsers: cdk.IResolvable | CfnDataSource.OneDriveUsersProperty;
        /**
         * The Amazon Resource Name (ARN) of an AWS Secrets Manager secret that contains the user name and password to connect to OneDrive.
         *
         * The user name should be the application ID for the OneDrive application, and the password is the application key for the OneDrive application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-onedriveconfiguration.html#cfn-kendra-datasource-onedriveconfiguration-secretarn
         */
        readonly secretArn: string;
        /**
         * The Azure Active Directory domain of the organization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-onedriveconfiguration.html#cfn-kendra-datasource-onedriveconfiguration-tenantdomain
         */
        readonly tenantDomain: string;
    }
    /**
     * User accounts whose documents should be indexed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-onedriveusers.html
     */
    interface OneDriveUsersProperty {
        /**
         * A list of users whose documents should be indexed.
         *
         * Specify the user names in email format, for example, `username@tenantdomain` . If you need to index the documents of more than 10 users, use the `OneDriveUserS3Path` field to specify the location of a file containing a list of users.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-onedriveusers.html#cfn-kendra-datasource-onedriveusers-onedriveuserlist
         */
        readonly oneDriveUserList?: Array<string>;
        /**
         * The S3 bucket location of a file containing a list of users whose documents should be indexed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-onedriveusers.html#cfn-kendra-datasource-onedriveusers-onedriveusers3path
         */
        readonly oneDriveUserS3Path?: cdk.IResolvable | CfnDataSource.S3PathProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-templateconfiguration.html
     */
    interface TemplateConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-templateconfiguration.html#cfn-kendra-datasource-templateconfiguration-template
         */
        readonly template: string;
    }
    /**
     * Provides the configuration information to connect to ServiceNow as your data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowconfiguration.html
     */
    interface ServiceNowConfigurationProperty {
        /**
         * The type of authentication used to connect to the ServiceNow instance.
         *
         * If you choose `HTTP_BASIC` , Amazon Kendra is authenticated using the user name and password provided in the AWS Secrets Manager secret in the `SecretArn` field. If you choose `OAUTH2` , Amazon Kendra is authenticated using the credentials of client ID, client secret, user name and password.
         *
         * When you use `OAUTH2` authentication, you must generate a token and a client secret using the ServiceNow console. For more information, see [Using a ServiceNow data source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-servicenow.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowconfiguration.html#cfn-kendra-datasource-servicenowconfiguration-authenticationtype
         */
        readonly authenticationType?: string;
        /**
         * The ServiceNow instance that the data source connects to.
         *
         * The host endpoint should look like the following: *{instance}.service-now.com.*
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowconfiguration.html#cfn-kendra-datasource-servicenowconfiguration-hosturl
         */
        readonly hostUrl: string;
        /**
         * Configuration information for crawling knowledge articles in the ServiceNow site.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowconfiguration.html#cfn-kendra-datasource-servicenowconfiguration-knowledgearticleconfiguration
         */
        readonly knowledgeArticleConfiguration?: cdk.IResolvable | CfnDataSource.ServiceNowKnowledgeArticleConfigurationProperty;
        /**
         * The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the user name and password required to connect to the ServiceNow instance.
         *
         * You can also provide OAuth authentication credentials of user name, password, client ID, and client secret. For more information, see [Using a ServiceNow data source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-servicenow.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowconfiguration.html#cfn-kendra-datasource-servicenowconfiguration-secretarn
         */
        readonly secretArn: string;
        /**
         * Configuration information for crawling service catalogs in the ServiceNow site.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowconfiguration.html#cfn-kendra-datasource-servicenowconfiguration-servicecatalogconfiguration
         */
        readonly serviceCatalogConfiguration?: cdk.IResolvable | CfnDataSource.ServiceNowServiceCatalogConfigurationProperty;
        /**
         * The identifier of the release that the ServiceNow host is running.
         *
         * If the host is not running the `LONDON` release, use `OTHERS` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowconfiguration.html#cfn-kendra-datasource-servicenowconfiguration-servicenowbuildversion
         */
        readonly serviceNowBuildVersion: string;
    }
    /**
     * Provides the configuration information for crawling service catalog items in the ServiceNow site.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowservicecatalogconfiguration.html
     */
    interface ServiceNowServiceCatalogConfigurationProperty {
        /**
         * `TRUE` to index attachments to service catalog items.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowservicecatalogconfiguration.html#cfn-kendra-datasource-servicenowservicecatalogconfiguration-crawlattachments
         */
        readonly crawlAttachments?: boolean | cdk.IResolvable;
        /**
         * The name of the ServiceNow field that is mapped to the index document contents field in the Amazon Kendra index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowservicecatalogconfiguration.html#cfn-kendra-datasource-servicenowservicecatalogconfiguration-documentdatafieldname
         */
        readonly documentDataFieldName: string;
        /**
         * The name of the ServiceNow field that is mapped to the index document title field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowservicecatalogconfiguration.html#cfn-kendra-datasource-servicenowservicecatalogconfiguration-documenttitlefieldname
         */
        readonly documentTitleFieldName?: string;
        /**
         * A list of regular expression patterns to exclude certain attachments of catalogs in your ServiceNow.
         *
         * Item that match the patterns are excluded from the index. Items that don't match the patterns are included in the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
         *
         * The regex is applied to the file name of the attachment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowservicecatalogconfiguration.html#cfn-kendra-datasource-servicenowservicecatalogconfiguration-excludeattachmentfilepatterns
         */
        readonly excludeAttachmentFilePatterns?: Array<string>;
        /**
         * Maps attributes or field names of catalogs to Amazon Kendra index field names.
         *
         * To create custom fields, use the `UpdateIndex` API before you map to ServiceNow fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html) . The ServiceNow data source field names must exist in your ServiceNow custom metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowservicecatalogconfiguration.html#cfn-kendra-datasource-servicenowservicecatalogconfiguration-fieldmappings
         */
        readonly fieldMappings?: Array<CfnDataSource.DataSourceToIndexFieldMappingProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A list of regular expression patterns to include certain attachments of catalogs in your ServiceNow.
         *
         * Item that match the patterns are included in the index. Items that don't match the patterns are excluded from the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
         *
         * The regex is applied to the file name of the attachment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowservicecatalogconfiguration.html#cfn-kendra-datasource-servicenowservicecatalogconfiguration-includeattachmentfilepatterns
         */
        readonly includeAttachmentFilePatterns?: Array<string>;
    }
    /**
     * Provides the configuration information for crawling knowledge articles in the ServiceNow site.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowknowledgearticleconfiguration.html
     */
    interface ServiceNowKnowledgeArticleConfigurationProperty {
        /**
         * `TRUE` to index attachments to knowledge articles.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowknowledgearticleconfiguration.html#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-crawlattachments
         */
        readonly crawlAttachments?: boolean | cdk.IResolvable;
        /**
         * The name of the ServiceNow field that is mapped to the index document contents field in the Amazon Kendra index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowknowledgearticleconfiguration.html#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-documentdatafieldname
         */
        readonly documentDataFieldName: string;
        /**
         * The name of the ServiceNow field that is mapped to the index document title field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowknowledgearticleconfiguration.html#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-documenttitlefieldname
         */
        readonly documentTitleFieldName?: string;
        /**
         * A list of regular expression patterns applied to exclude certain knowledge article attachments.
         *
         * Attachments that match the patterns are excluded from the index. Items that don't match the patterns are included in the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowknowledgearticleconfiguration.html#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-excludeattachmentfilepatterns
         */
        readonly excludeAttachmentFilePatterns?: Array<string>;
        /**
         * Maps attributes or field names of knoweldge articles to Amazon Kendra index field names.
         *
         * To create custom fields, use the `UpdateIndex` API before you map to ServiceNow fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html) . The ServiceNow data source field names must exist in your ServiceNow custom metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowknowledgearticleconfiguration.html#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-fieldmappings
         */
        readonly fieldMappings?: Array<CfnDataSource.DataSourceToIndexFieldMappingProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A query that selects the knowledge articles to index.
         *
         * The query can return articles from multiple knowledge bases, and the knowledge bases can be public or private.
         *
         * The query string must be one generated by the ServiceNow console. For more information, see [Specifying documents to index with a query](https://docs.aws.amazon.com/kendra/latest/dg/servicenow-query.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowknowledgearticleconfiguration.html#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-filterquery
         */
        readonly filterQuery?: string;
        /**
         * A list of regular expression patterns applied to include knowledge article attachments.
         *
         * Attachments that match the patterns are included in the index. Items that don't match the patterns are excluded from the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowknowledgearticleconfiguration.html#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-includeattachmentfilepatterns
         */
        readonly includeAttachmentFilePatterns?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnDataSource`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html
 */
export interface CfnDataSourceProps {
    /**
     * Configuration information for altering document metadata and content during the document ingestion process.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-customdocumentenrichmentconfiguration
     */
    readonly customDocumentEnrichmentConfiguration?: CfnDataSource.CustomDocumentEnrichmentConfigurationProperty | cdk.IResolvable;
    /**
     * Configuration information for an Amazon Kendra data source.
     *
     * The contents of the configuration depend on the type of data source. You can only specify one type of data source in the configuration.
     *
     * You can't specify the `Configuration` parameter when the `Type` parameter is set to `CUSTOM` .
     *
     * The `Configuration` parameter is required for all other data sources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourceconfiguration
     */
    readonly dataSourceConfiguration?: CfnDataSource.DataSourceConfigurationProperty | cdk.IResolvable;
    /**
     * A description for the data source connector.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-description
     */
    readonly description?: string;
    /**
     * The identifier of the index you want to use with the data source connector.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-indexid
     */
    readonly indexId: string;
    /**
     * The code for a language.
     *
     * This shows a supported language for all documents in the data source. English is supported by default. For more information on supported languages, including their codes, see [Adding documents in languages other than English](https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-languagecode
     */
    readonly languageCode?: string;
    /**
     * The name of the data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-name
     */
    readonly name: string;
    /**
     * The Amazon Resource Name (ARN) of a role with permission to access the data source.
     *
     * You can't specify the `RoleArn` parameter when the `Type` parameter is set to `CUSTOM` .
     *
     * The `RoleArn` parameter is required for all other data sources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-rolearn
     */
    readonly roleArn?: string;
    /**
     * Sets the frequency that Amazon Kendra checks the documents in your data source and updates the index.
     *
     * If you don't set a schedule, Amazon Kendra doesn't periodically update the index.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-schedule
     */
    readonly schedule?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The type of the data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-type
     */
    readonly type: string;
}
/**
 * Creates an new set of frequently asked question (FAQ) questions and answers.
 *
 * @cloudformationResource AWS::Kendra::Faq
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html
 */
export declare class CfnFaq extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFaq from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFaq;
    /**
     * `arn:aws:kendra:us-west-2:111122223333:index/335c3741-41df-46a6-b5d3-61f85b787884/faq/f61995a6-cd5c-4e99-9cfc-58816d8bfaa7`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The identifier for the FAQ. For example:
     *
     * `f61995a6-cd5c-4e99-9cfc-58816d8bfaa7`
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A description for the FAQ.
     */
    description?: string;
    /**
     * The format of the input file.
     */
    fileFormat?: string;
    /**
     * The identifier of the index that contains the FAQ.
     */
    indexId: string;
    /**
     * The code for a language.
     */
    languageCode?: string;
    /**
     * The name that you assigned the FAQ when you created or updated the FAQ.
     */
    name: string;
    /**
     * The Amazon Resource Name (ARN) of a role with permission to access the S3 bucket that contains the FAQ.
     */
    roleArn: string;
    /**
     * The Amazon Simple Storage Service (Amazon S3) location of the FAQ input data.
     */
    s3Path: cdk.IResolvable | CfnFaq.S3PathProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFaqProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFaq {
    /**
     * Information required to find a specific file in an Amazon S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-faq-s3path.html
     */
    interface S3PathProperty {
        /**
         * The name of the S3 bucket that contains the file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-faq-s3path.html#cfn-kendra-faq-s3path-bucket
         */
        readonly bucket: string;
        /**
         * The name of the file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-faq-s3path.html#cfn-kendra-faq-s3path-key
         */
        readonly key: string;
    }
}
/**
 * Properties for defining a `CfnFaq`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html
 */
export interface CfnFaqProps {
    /**
     * A description for the FAQ.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-description
     */
    readonly description?: string;
    /**
     * The format of the input file.
     *
     * You can choose between a basic CSV format, a CSV format that includes customs attributes in a header, and a JSON format that includes custom attributes.
     *
     * The format must match the format of the file stored in the S3 bucket identified in the S3Path parameter.
     *
     * Valid values are:
     *
     * - `CSV`
     * - `CSV_WITH_HEADER`
     * - `JSON`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-fileformat
     */
    readonly fileFormat?: string;
    /**
     * The identifier of the index that contains the FAQ.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-indexid
     */
    readonly indexId: string;
    /**
     * The code for a language.
     *
     * This shows a supported language for the FAQ document as part of the summary information for FAQs. English is supported by default. For more information on supported languages, including their codes, see [Adding documents in languages other than English](https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-languagecode
     */
    readonly languageCode?: string;
    /**
     * The name that you assigned the FAQ when you created or updated the FAQ.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-name
     */
    readonly name: string;
    /**
     * The Amazon Resource Name (ARN) of a role with permission to access the S3 bucket that contains the FAQ.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-rolearn
     */
    readonly roleArn: string;
    /**
     * The Amazon Simple Storage Service (Amazon S3) location of the FAQ input data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-s3path
     */
    readonly s3Path: cdk.IResolvable | CfnFaq.S3PathProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates an Amazon Kendra index.
 *
 * Once the index is active you can add documents to your index using the [BatchPutDocument](https://docs.aws.amazon.com/kendra/latest/dg/BatchPutDocument.html) operation or using one of the supported data sources.
 *
 * @cloudformationResource AWS::Kendra::Index
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html
 */
export declare class CfnIndex extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIndex from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIndex;
    /**
     * The Amazon Resource Name (ARN) of the index. For example: `arn:aws:kendra:us-west-2:111122223333:index/0123456789abcdef` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The identifier for the index. For example: `f4aeaa10-8056-4b2c-a343-522ca0f41234` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Specifies additional capacity units configured for your Enterprise Edition index.
     */
    capacityUnits?: CfnIndex.CapacityUnitsConfigurationProperty | cdk.IResolvable;
    /**
     * A description for the index.
     */
    description?: string;
    /**
     * Specifies the properties of an index field.
     */
    documentMetadataConfigurations?: Array<CfnIndex.DocumentMetadataConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Indicates whether the index is a Enterprise Edition index, a Developer Edition index, or a GenAI Enterprise Edition index.
     */
    edition: string;
    /**
     * The name of the index.
     */
    name: string;
    /**
     * An IAM role that gives Amazon Kendra permissions to access your Amazon CloudWatch logs and metrics.
     */
    roleArn: string;
    /**
     * The identifier of the AWS KMS customer managed key (CMK) to use to encrypt data indexed by Amazon Kendra.
     */
    serverSideEncryptionConfiguration?: cdk.IResolvable | CfnIndex.ServerSideEncryptionConfigurationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The user context policy.
     */
    userContextPolicy?: string;
    /**
     * Defines the type of user token used for the index.
     */
    userTokenConfigurations?: Array<cdk.IResolvable | CfnIndex.UserTokenConfigurationProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIndexProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnIndex {
    /**
     * Specifies additional capacity units configured for your Enterprise Edition index.
     *
     * You can add and remove capacity units to fit your usage requirements.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-capacityunitsconfiguration.html
     */
    interface CapacityUnitsConfigurationProperty {
        /**
         * The amount of extra query capacity for an index and [GetQuerySuggestions](https://docs.aws.amazon.com/kendra/latest/dg/API_GetQuerySuggestions.html) capacity.
         *
         * A single extra capacity unit for an index provides 0.1 queries per second or approximately 8,000 queries per day. You can add up to 100 extra capacity units.
         *
         * `GetQuerySuggestions` capacity is five times the provisioned query capacity for an index, or the base capacity of 2.5 calls per second, whichever is higher. For example, the base capacity for an index is 0.1 queries per second, and `GetQuerySuggestions` capacity has a base of 2.5 calls per second. If you add another 0.1 queries per second to total 0.2 queries per second for an index, the `GetQuerySuggestions` capacity is 2.5 calls per second (higher than five times 0.2 queries per second).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-capacityunitsconfiguration.html#cfn-kendra-index-capacityunitsconfiguration-querycapacityunits
         */
        readonly queryCapacityUnits: number;
        /**
         * The amount of extra storage capacity for an index.
         *
         * A single capacity unit provides 30 GB of storage space or 100,000 documents, whichever is reached first. You can add up to 100 extra capacity units.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-capacityunitsconfiguration.html#cfn-kendra-index-capacityunitsconfiguration-storagecapacityunits
         */
        readonly storageCapacityUnits: number;
    }
    /**
     * Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt data indexed by Amazon Kendra.
     *
     * We suggest that you use a CMK from your account to help secure your index. Amazon Kendra doesn't support asymmetric CMKs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-serversideencryptionconfiguration.html
     */
    interface ServerSideEncryptionConfigurationProperty {
        /**
         * The identifier of the AWS KMS key .
         *
         * Amazon Kendra doesn't support asymmetric keys.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-serversideencryptionconfiguration.html#cfn-kendra-index-serversideencryptionconfiguration-kmskeyid
         */
        readonly kmsKeyId?: string;
    }
    /**
     * Specifies the properties, such as relevance tuning and searchability, of an index field.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-documentmetadataconfiguration.html
     */
    interface DocumentMetadataConfigurationProperty {
        /**
         * The name of the index field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-documentmetadataconfiguration.html#cfn-kendra-index-documentmetadataconfiguration-name
         */
        readonly name: string;
        /**
         * Provides tuning parameters to determine how the field affects the search results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-documentmetadataconfiguration.html#cfn-kendra-index-documentmetadataconfiguration-relevance
         */
        readonly relevance?: cdk.IResolvable | CfnIndex.RelevanceProperty;
        /**
         * Provides information about how the field is used during a search.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-documentmetadataconfiguration.html#cfn-kendra-index-documentmetadataconfiguration-search
         */
        readonly search?: cdk.IResolvable | CfnIndex.SearchProperty;
        /**
         * The data type of the index field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-documentmetadataconfiguration.html#cfn-kendra-index-documentmetadataconfiguration-type
         */
        readonly type: string;
    }
    /**
     * Provides information for tuning the relevance of a field in a search.
     *
     * When a query includes terms that match the field, the results are given a boost in the response based on these tuning parameters.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-relevance.html
     */
    interface RelevanceProperty {
        /**
         * Specifies the time period that the boost applies to.
         *
         * For example, to make the boost apply to documents with the field value within the last month, you would use "2628000s". Once the field value is beyond the specified range, the effect of the boost drops off. The higher the importance, the faster the effect drops off. If you don't specify a value, the default is 3 months. The value of the field is a numeric string followed by the character "s", for example "86400s" for one day, or "604800s" for one week.
         *
         * Only applies to `DATE` fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-relevance.html#cfn-kendra-index-relevance-duration
         */
        readonly duration?: string;
        /**
         * Indicates that this field determines how "fresh" a document is.
         *
         * For example, if document 1 was created on November 5, and document 2 was created on October 31, document 1 is "fresher" than document 2. Only applies to `DATE` fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-relevance.html#cfn-kendra-index-relevance-freshness
         */
        readonly freshness?: boolean | cdk.IResolvable;
        /**
         * The relative importance of the field in the search.
         *
         * Larger numbers provide more of a boost than smaller numbers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-relevance.html#cfn-kendra-index-relevance-importance
         */
        readonly importance?: number;
        /**
         * Determines how values should be interpreted.
         *
         * When the `RankOrder` field is `ASCENDING` , higher numbers are better. For example, a document with a rating score of 10 is higher ranking than a document with a rating score of 1.
         *
         * When the `RankOrder` field is `DESCENDING` , lower numbers are better. For example, in a task tracking application, a priority 1 task is more important than a priority 5 task.
         *
         * Only applies to `LONG` fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-relevance.html#cfn-kendra-index-relevance-rankorder
         */
        readonly rankOrder?: string;
        /**
         * An array of key-value pairs for different boosts when they appear in the search result list.
         *
         * For example, if you want to boost query terms that match the "department" field in the result, query terms that match this field are boosted in the result. You can add entries from the department field to boost documents with those values higher.
         *
         * For example, you can add entries to the map with names of departments. If you add "HR", 5 and "Legal",3 those departments are given special attention when they appear in the metadata of a document.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-relevance.html#cfn-kendra-index-relevance-valueimportanceitems
         */
        readonly valueImportanceItems?: Array<cdk.IResolvable | CfnIndex.ValueImportanceItemProperty> | cdk.IResolvable;
    }
    /**
     * Specifies a key-value pair of the search boost value for a document when the key is part of the metadata of a document.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-valueimportanceitem.html
     */
    interface ValueImportanceItemProperty {
        /**
         * The document metadata value used for the search boost.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-valueimportanceitem.html#cfn-kendra-index-valueimportanceitem-key
         */
        readonly key?: string;
        /**
         * The boost value for a document when the key is part of the metadata of a document.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-valueimportanceitem.html#cfn-kendra-index-valueimportanceitem-value
         */
        readonly value?: number;
    }
    /**
     * Provides information about how a custom index field is used during a search.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-search.html
     */
    interface SearchProperty {
        /**
         * Determines whether the field is returned in the query response.
         *
         * The default is `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-search.html#cfn-kendra-index-search-displayable
         */
        readonly displayable?: boolean | cdk.IResolvable;
        /**
         * Indicates that the field can be used to create search facets, a count of results for each value in the field.
         *
         * The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-search.html#cfn-kendra-index-search-facetable
         */
        readonly facetable?: boolean | cdk.IResolvable;
        /**
         * Determines whether the field is used in the search.
         *
         * If the `Searchable` field is `true` , you can use relevance tuning to manually tune how Amazon Kendra weights the field in the search. The default is `true` for string fields and `false` for number and date fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-search.html#cfn-kendra-index-search-searchable
         */
        readonly searchable?: boolean | cdk.IResolvable;
        /**
         * Determines whether the field can be used to sort the results of a query.
         *
         * The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-search.html#cfn-kendra-index-search-sortable
         */
        readonly sortable?: boolean | cdk.IResolvable;
    }
    /**
     * Provides the configuration information for a token.
     *
     * > If you're using an Amazon Kendra Gen AI Enterprise Edition index and you try to use `UserTokenConfigurations` to configure user context policy, Amazon Kendra returns a `ValidationException` error.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-usertokenconfiguration.html
     */
    interface UserTokenConfigurationProperty {
        /**
         * Information about the JSON token type configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-usertokenconfiguration.html#cfn-kendra-index-usertokenconfiguration-jsontokentypeconfiguration
         */
        readonly jsonTokenTypeConfiguration?: cdk.IResolvable | CfnIndex.JsonTokenTypeConfigurationProperty;
        /**
         * Information about the JWT token type configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-usertokenconfiguration.html#cfn-kendra-index-usertokenconfiguration-jwttokentypeconfiguration
         */
        readonly jwtTokenTypeConfiguration?: cdk.IResolvable | CfnIndex.JwtTokenTypeConfigurationProperty;
    }
    /**
     * Provides the configuration information for the JWT token type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-jwttokentypeconfiguration.html
     */
    interface JwtTokenTypeConfigurationProperty {
        /**
         * The regular expression that identifies the claim.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-jwttokentypeconfiguration.html#cfn-kendra-index-jwttokentypeconfiguration-claimregex
         */
        readonly claimRegex?: string;
        /**
         * The group attribute field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-jwttokentypeconfiguration.html#cfn-kendra-index-jwttokentypeconfiguration-groupattributefield
         */
        readonly groupAttributeField?: string;
        /**
         * The issuer of the token.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-jwttokentypeconfiguration.html#cfn-kendra-index-jwttokentypeconfiguration-issuer
         */
        readonly issuer?: string;
        /**
         * The location of the key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-jwttokentypeconfiguration.html#cfn-kendra-index-jwttokentypeconfiguration-keylocation
         */
        readonly keyLocation: string;
        /**
         * The Amazon Resource Name (arn) of the secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-jwttokentypeconfiguration.html#cfn-kendra-index-jwttokentypeconfiguration-secretmanagerarn
         */
        readonly secretManagerArn?: string;
        /**
         * The signing key URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-jwttokentypeconfiguration.html#cfn-kendra-index-jwttokentypeconfiguration-url
         */
        readonly url?: string;
        /**
         * The user name attribute field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-jwttokentypeconfiguration.html#cfn-kendra-index-jwttokentypeconfiguration-usernameattributefield
         */
        readonly userNameAttributeField?: string;
    }
    /**
     * Provides the configuration information for the JSON token type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-jsontokentypeconfiguration.html
     */
    interface JsonTokenTypeConfigurationProperty {
        /**
         * The group attribute field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-jsontokentypeconfiguration.html#cfn-kendra-index-jsontokentypeconfiguration-groupattributefield
         */
        readonly groupAttributeField: string;
        /**
         * The user name attribute field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-jsontokentypeconfiguration.html#cfn-kendra-index-jsontokentypeconfiguration-usernameattributefield
         */
        readonly userNameAttributeField: string;
    }
}
/**
 * Properties for defining a `CfnIndex`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html
 */
export interface CfnIndexProps {
    /**
     * Specifies additional capacity units configured for your Enterprise Edition index.
     *
     * You can add and remove capacity units to fit your usage requirements.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html#cfn-kendra-index-capacityunits
     */
    readonly capacityUnits?: CfnIndex.CapacityUnitsConfigurationProperty | cdk.IResolvable;
    /**
     * A description for the index.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html#cfn-kendra-index-description
     */
    readonly description?: string;
    /**
     * Specifies the properties of an index field.
     *
     * You can add either a custom or a built-in field. You can add and remove built-in fields at any time. When a built-in field is removed it's configuration reverts to the default for the field. Custom fields can't be removed from an index after they are added.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html#cfn-kendra-index-documentmetadataconfigurations
     */
    readonly documentMetadataConfigurations?: Array<CfnIndex.DocumentMetadataConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Indicates whether the index is a Enterprise Edition index, a Developer Edition index, or a GenAI Enterprise Edition index.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html#cfn-kendra-index-edition
     */
    readonly edition: string;
    /**
     * The name of the index.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html#cfn-kendra-index-name
     */
    readonly name: string;
    /**
     * An IAM role that gives Amazon Kendra permissions to access your Amazon CloudWatch logs and metrics.
     *
     * This is also the role used when you use the [BatchPutDocument](https://docs.aws.amazon.com/kendra/latest/dg/BatchPutDocument.html) operation to index documents from an Amazon S3 bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html#cfn-kendra-index-rolearn
     */
    readonly roleArn: string;
    /**
     * The identifier of the AWS KMS customer managed key (CMK) to use to encrypt data indexed by Amazon Kendra.
     *
     * Amazon Kendra doesn't support asymmetric CMKs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html#cfn-kendra-index-serversideencryptionconfiguration
     */
    readonly serverSideEncryptionConfiguration?: cdk.IResolvable | CfnIndex.ServerSideEncryptionConfigurationProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html#cfn-kendra-index-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The user context policy.
     *
     * ATTRIBUTE_FILTER
     *
     * - All indexed content is searchable and displayable for all users. If you want to filter search results on user context, you can use the attribute filters of `_user_id` and `_group_ids` or you can provide user and group information in `UserContext` .
     *
     * USER_TOKEN
     *
     * - Enables token-based user access control to filter search results on user context. All documents with no access control and all documents accessible to the user will be searchable and displayable.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html#cfn-kendra-index-usercontextpolicy
     */
    readonly userContextPolicy?: string;
    /**
     * Defines the type of user token used for the index.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html#cfn-kendra-index-usertokenconfigurations
     */
    readonly userTokenConfigurations?: Array<cdk.IResolvable | CfnIndex.UserTokenConfigurationProperty> | cdk.IResolvable;
}
