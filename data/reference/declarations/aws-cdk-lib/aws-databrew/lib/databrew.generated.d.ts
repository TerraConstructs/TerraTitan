import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Specifies a new DataBrew dataset.
 *
 * @cloudformationResource AWS::DataBrew::Dataset
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html
 */
export declare class CfnDataset extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataset from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataset;
    /**
     * The file format of a dataset that is created from an Amazon S3 file or folder.
     */
    format?: string;
    /**
     * A set of options that define how DataBrew interprets the data in the dataset.
     */
    formatOptions?: CfnDataset.FormatOptionsProperty | cdk.IResolvable;
    /**
     * Information on how DataBrew can find the dataset, in either the AWS Glue Data Catalog or Amazon S3 .
     */
    input: CfnDataset.InputProperty | cdk.IResolvable;
    /**
     * The unique name of the dataset.
     */
    name: string;
    /**
     * A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.
     */
    pathOptions?: cdk.IResolvable | CfnDataset.PathOptionsProperty;
    /**
     * The location of the data for the dataset, either Amazon S3 or the AWS Glue Data Catalog .
     */
    source?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata tags that have been applied to the dataset.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDatasetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataset {
    /**
     * Represents information on how DataBrew can find data, in either the AWS Glue Data Catalog or Amazon S3.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-input.html
     */
    interface InputProperty {
        /**
         * Connection information for dataset input files stored in a database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-input.html#cfn-databrew-dataset-input-databaseinputdefinition
         */
        readonly databaseInputDefinition?: CfnDataset.DatabaseInputDefinitionProperty | cdk.IResolvable;
        /**
         * The AWS Glue Data Catalog parameters for the data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-input.html#cfn-databrew-dataset-input-datacataloginputdefinition
         */
        readonly dataCatalogInputDefinition?: CfnDataset.DataCatalogInputDefinitionProperty | cdk.IResolvable;
        /**
         * Contains additional resource information needed for specific datasets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-input.html#cfn-databrew-dataset-input-metadata
         */
        readonly metadata?: cdk.IResolvable | CfnDataset.MetadataProperty;
        /**
         * The Amazon S3 location where the data is stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-input.html#cfn-databrew-dataset-input-s3inputdefinition
         */
        readonly s3InputDefinition?: cdk.IResolvable | CfnDataset.S3LocationProperty;
    }
    /**
     * Connection information for dataset input files stored in a database.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-databaseinputdefinition.html
     */
    interface DatabaseInputDefinitionProperty {
        /**
         * The table within the target database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-databaseinputdefinition.html#cfn-databrew-dataset-databaseinputdefinition-databasetablename
         */
        readonly databaseTableName?: string;
        /**
         * The AWS Glue Connection that stores the connection information for the target database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-databaseinputdefinition.html#cfn-databrew-dataset-databaseinputdefinition-glueconnectionname
         */
        readonly glueConnectionName: string;
        /**
         * Custom SQL to run against the provided AWS Glue connection.
         *
         * This SQL will be used as the input for DataBrew projects and jobs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-databaseinputdefinition.html#cfn-databrew-dataset-databaseinputdefinition-querystring
         */
        readonly queryString?: string;
        /**
         * An Amazon location that AWS Glue Data Catalog can use as a temporary directory.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-databaseinputdefinition.html#cfn-databrew-dataset-databaseinputdefinition-tempdirectory
         */
        readonly tempDirectory?: cdk.IResolvable | CfnDataset.S3LocationProperty;
    }
    /**
     * Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-s3location.html
     */
    interface S3LocationProperty {
        /**
         * The Amazon S3 bucket name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-s3location.html#cfn-databrew-dataset-s3location-bucket
         */
        readonly bucket: string;
        /**
         * The AWS account ID of the bucket owner.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-s3location.html#cfn-databrew-dataset-s3location-bucketowner
         */
        readonly bucketOwner?: string;
        /**
         * The unique name of the object in the bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-s3location.html#cfn-databrew-dataset-s3location-key
         */
        readonly key?: string;
    }
    /**
     * Contains additional resource information needed for specific datasets.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-metadata.html
     */
    interface MetadataProperty {
        /**
         * The Amazon Resource Name (ARN) associated with the dataset.
         *
         * Currently, DataBrew only supports ARNs from Amazon AppFlow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-metadata.html#cfn-databrew-dataset-metadata-sourcearn
         */
        readonly sourceArn?: string;
    }
    /**
     * Represents how metadata stored in the AWS Glue Data Catalog is defined in a DataBrew dataset.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datacataloginputdefinition.html
     */
    interface DataCatalogInputDefinitionProperty {
        /**
         * The unique identifier of the AWS account that holds the Data Catalog that stores the data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datacataloginputdefinition.html#cfn-databrew-dataset-datacataloginputdefinition-catalogid
         */
        readonly catalogId?: string;
        /**
         * The name of a database in the Data Catalog.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datacataloginputdefinition.html#cfn-databrew-dataset-datacataloginputdefinition-databasename
         */
        readonly databaseName?: string;
        /**
         * The name of a database table in the Data Catalog.
         *
         * This table corresponds to a DataBrew dataset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datacataloginputdefinition.html#cfn-databrew-dataset-datacataloginputdefinition-tablename
         */
        readonly tableName?: string;
        /**
         * An Amazon location that AWS Glue Data Catalog can use as a temporary directory.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datacataloginputdefinition.html#cfn-databrew-dataset-datacataloginputdefinition-tempdirectory
         */
        readonly tempDirectory?: cdk.IResolvable | CfnDataset.S3LocationProperty;
    }
    /**
     * Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-formatoptions.html
     */
    interface FormatOptionsProperty {
        /**
         * Options that define how CSV input is to be interpreted by DataBrew.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-formatoptions.html#cfn-databrew-dataset-formatoptions-csv
         */
        readonly csv?: CfnDataset.CsvOptionsProperty | cdk.IResolvable;
        /**
         * Options that define how Excel input is to be interpreted by DataBrew.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-formatoptions.html#cfn-databrew-dataset-formatoptions-excel
         */
        readonly excel?: CfnDataset.ExcelOptionsProperty | cdk.IResolvable;
        /**
         * Options that define how JSON input is to be interpreted by DataBrew.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-formatoptions.html#cfn-databrew-dataset-formatoptions-json
         */
        readonly json?: cdk.IResolvable | CfnDataset.JsonOptionsProperty;
    }
    /**
     * Represents a set of options that define how DataBrew will interpret a Microsoft Excel file when creating a dataset from that file.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-exceloptions.html
     */
    interface ExcelOptionsProperty {
        /**
         * A variable that specifies whether the first row in the file is parsed as the header.
         *
         * If this value is false, column names are auto-generated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-exceloptions.html#cfn-databrew-dataset-exceloptions-headerrow
         */
        readonly headerRow?: boolean | cdk.IResolvable;
        /**
         * One or more sheet numbers in the Excel file that will be included in the dataset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-exceloptions.html#cfn-databrew-dataset-exceloptions-sheetindexes
         */
        readonly sheetIndexes?: Array<number> | cdk.IResolvable;
        /**
         * One or more named sheets in the Excel file that will be included in the dataset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-exceloptions.html#cfn-databrew-dataset-exceloptions-sheetnames
         */
        readonly sheetNames?: Array<string>;
    }
    /**
     * Represents a set of options that define how DataBrew will read a comma-separated value (CSV) file when creating a dataset from that file.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-csvoptions.html
     */
    interface CsvOptionsProperty {
        /**
         * A single character that specifies the delimiter being used in the CSV file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-csvoptions.html#cfn-databrew-dataset-csvoptions-delimiter
         */
        readonly delimiter?: string;
        /**
         * A variable that specifies whether the first row in the file is parsed as the header.
         *
         * If this value is false, column names are auto-generated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-csvoptions.html#cfn-databrew-dataset-csvoptions-headerrow
         */
        readonly headerRow?: boolean | cdk.IResolvable;
    }
    /**
     * Represents the JSON-specific options that define how input is to be interpreted by AWS Glue DataBrew .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-jsonoptions.html
     */
    interface JsonOptionsProperty {
        /**
         * A value that specifies whether JSON input contains embedded new line characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-jsonoptions.html#cfn-databrew-dataset-jsonoptions-multiline
         */
        readonly multiLine?: boolean | cdk.IResolvable;
    }
    /**
     * Represents a set of options that define how DataBrew selects files for a given Amazon S3 path in a dataset.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-pathoptions.html
     */
    interface PathOptionsProperty {
        /**
         * If provided, this structure imposes a limit on a number of files that should be selected.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-pathoptions.html#cfn-databrew-dataset-pathoptions-fileslimit
         */
        readonly filesLimit?: CfnDataset.FilesLimitProperty | cdk.IResolvable;
        /**
         * If provided, this structure defines a date range for matching Amazon S3 objects based on their LastModifiedDate attribute in Amazon S3 .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-pathoptions.html#cfn-databrew-dataset-pathoptions-lastmodifieddatecondition
         */
        readonly lastModifiedDateCondition?: CfnDataset.FilterExpressionProperty | cdk.IResolvable;
        /**
         * A structure that maps names of parameters used in the Amazon S3 path of a dataset to their definitions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-pathoptions.html#cfn-databrew-dataset-pathoptions-parameters
         */
        readonly parameters?: Array<cdk.IResolvable | CfnDataset.PathParameterProperty> | cdk.IResolvable;
    }
    /**
     * Represents a single entry in the path parameters of a dataset.
     *
     * Each `PathParameter` consists of a name and a parameter definition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-pathparameter.html
     */
    interface PathParameterProperty {
        /**
         * The path parameter definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-pathparameter.html#cfn-databrew-dataset-pathparameter-datasetparameter
         */
        readonly datasetParameter: CfnDataset.DatasetParameterProperty | cdk.IResolvable;
        /**
         * The name of the path parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-pathparameter.html#cfn-databrew-dataset-pathparameter-pathparametername
         */
        readonly pathParameterName: string;
    }
    /**
     * Represents a dataset paramater that defines type and conditions for a parameter in the Amazon S3 path of the dataset.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datasetparameter.html
     */
    interface DatasetParameterProperty {
        /**
         * Optional boolean value that defines whether the captured value of this parameter should be loaded as an additional column in the dataset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datasetparameter.html#cfn-databrew-dataset-datasetparameter-createcolumn
         */
        readonly createColumn?: boolean | cdk.IResolvable;
        /**
         * Additional parameter options such as a format and a timezone.
         *
         * Required for datetime parameters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datasetparameter.html#cfn-databrew-dataset-datasetparameter-datetimeoptions
         */
        readonly datetimeOptions?: CfnDataset.DatetimeOptionsProperty | cdk.IResolvable;
        /**
         * The optional filter expression structure to apply additional matching criteria to the parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datasetparameter.html#cfn-databrew-dataset-datasetparameter-filter
         */
        readonly filter?: CfnDataset.FilterExpressionProperty | cdk.IResolvable;
        /**
         * The name of the parameter that is used in the dataset's Amazon S3 path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datasetparameter.html#cfn-databrew-dataset-datasetparameter-name
         */
        readonly name: string;
        /**
         * The type of the dataset parameter, can be one of a 'String', 'Number' or 'Datetime'.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datasetparameter.html#cfn-databrew-dataset-datasetparameter-type
         */
        readonly type: string;
    }
    /**
     * Represents additional options for correct interpretation of datetime parameters used in the Amazon S3 path of a dataset.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datetimeoptions.html
     */
    interface DatetimeOptionsProperty {
        /**
         * Required option, that defines the datetime format used for a date parameter in the Amazon S3 path.
         *
         * Should use only supported datetime specifiers and separation characters, all litera a-z or A-Z character should be escaped with single quotes. E.g. "MM.dd.yyyy-'at'-HH:mm".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datetimeoptions.html#cfn-databrew-dataset-datetimeoptions-format
         */
        readonly format: string;
        /**
         * Optional value for a non-US locale code, needed for correct interpretation of some date formats.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datetimeoptions.html#cfn-databrew-dataset-datetimeoptions-localecode
         */
        readonly localeCode?: string;
        /**
         * Optional value for a timezone offset of the datetime parameter value in the Amazon S3 path.
         *
         * Shouldn't be used if Format for this parameter includes timezone fields. If no offset specified, UTC is assumed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datetimeoptions.html#cfn-databrew-dataset-datetimeoptions-timezoneoffset
         */
        readonly timezoneOffset?: string;
    }
    /**
     * Represents a structure for defining parameter conditions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-filterexpression.html
     */
    interface FilterExpressionProperty {
        /**
         * The expression which includes condition names followed by substitution variables, possibly grouped and combined with other conditions.
         *
         * For example, "(starts_with :prefix1 or starts_with :prefix2) and (ends_with :suffix1 or ends_with :suffix2)". Substitution variables should start with ':' symbol.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-filterexpression.html#cfn-databrew-dataset-filterexpression-expression
         */
        readonly expression: string;
        /**
         * The map of substitution variable names to their values used in this filter expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-filterexpression.html#cfn-databrew-dataset-filterexpression-valuesmap
         */
        readonly valuesMap: Array<CfnDataset.FilterValueProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Represents a single entry in the `ValuesMap` of a `FilterExpression` .
     *
     * A `FilterValue` associates the name of a substitution variable in an expression to its value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-filtervalue.html
     */
    interface FilterValueProperty {
        /**
         * The value to be associated with the substitution variable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-filtervalue.html#cfn-databrew-dataset-filtervalue-value
         */
        readonly value: string;
        /**
         * The substitution variable reference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-filtervalue.html#cfn-databrew-dataset-filtervalue-valuereference
         */
        readonly valueReference: string;
    }
    /**
     * Represents a limit imposed on number of Amazon S3 files that should be selected for a dataset from a connected Amazon S3 path.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-fileslimit.html
     */
    interface FilesLimitProperty {
        /**
         * The number of Amazon S3 files to select.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-fileslimit.html#cfn-databrew-dataset-fileslimit-maxfiles
         */
        readonly maxFiles: number;
        /**
         * A criteria to use for Amazon S3 files sorting before their selection.
         *
         * By default uses DESCENDING order, i.e. most recent files are selected first. Anotherpossible value is ASCENDING.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-fileslimit.html#cfn-databrew-dataset-fileslimit-order
         */
        readonly order?: string;
        /**
         * A criteria to use for Amazon S3 files sorting before their selection.
         *
         * By default uses LAST_MODIFIED_DATE as a sorting criteria. Currently it's the only allowed value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-fileslimit.html#cfn-databrew-dataset-fileslimit-orderedby
         */
        readonly orderedBy?: string;
    }
}
/**
 * Properties for defining a `CfnDataset`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html
 */
export interface CfnDatasetProps {
    /**
     * The file format of a dataset that is created from an Amazon S3 file or folder.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-format
     */
    readonly format?: string;
    /**
     * A set of options that define how DataBrew interprets the data in the dataset.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-formatoptions
     */
    readonly formatOptions?: CfnDataset.FormatOptionsProperty | cdk.IResolvable;
    /**
     * Information on how DataBrew can find the dataset, in either the AWS Glue Data Catalog or Amazon S3 .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-input
     */
    readonly input: CfnDataset.InputProperty | cdk.IResolvable;
    /**
     * The unique name of the dataset.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-name
     */
    readonly name: string;
    /**
     * A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-pathoptions
     */
    readonly pathOptions?: cdk.IResolvable | CfnDataset.PathOptionsProperty;
    /**
     * The location of the data for the dataset, either Amazon S3 or the AWS Glue Data Catalog .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-source
     */
    readonly source?: string;
    /**
     * Metadata tags that have been applied to the dataset.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies a new DataBrew job.
 *
 * @cloudformationResource AWS::DataBrew::Job
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html
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
     * Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.
     */
    databaseOutputs?: Array<CfnJob.DatabaseOutputProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * One or more artifacts that represent the AWS Glue Data Catalog output from running the job.
     */
    dataCatalogOutputs?: Array<CfnJob.DataCatalogOutputProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A dataset that the job is to process.
     */
    datasetName?: string;
    /**
     * The Amazon Resource Name (ARN) of an encryption key that is used to protect the job output.
     */
    encryptionKeyArn?: string;
    /**
     * The encryption mode for the job, which can be one of the following:.
     */
    encryptionMode?: string;
    /**
     * A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run.
     */
    jobSample?: cdk.IResolvable | CfnJob.JobSampleProperty;
    /**
     * The current status of Amazon CloudWatch logging for the job.
     */
    logSubscription?: string;
    /**
     * The maximum number of nodes that can be consumed when the job processes data.
     */
    maxCapacity?: number;
    /**
     * The maximum number of times to retry the job after a job run fails.
     */
    maxRetries?: number;
    /**
     * The unique name of the job.
     */
    name: string;
    /**
     * The location in Amazon S3 where the job writes its output.
     */
    outputLocation?: cdk.IResolvable | CfnJob.OutputLocationProperty;
    /**
     * One or more artifacts that represent output from running the job.
     */
    outputs?: Array<cdk.IResolvable | CfnJob.OutputProperty> | cdk.IResolvable;
    /**
     * Configuration for profile jobs.
     */
    profileConfiguration?: cdk.IResolvable | CfnJob.ProfileConfigurationProperty;
    /**
     * The name of the project that the job is associated with.
     */
    projectName?: string;
    /**
     * A series of data transformation steps that the job runs.
     */
    recipe?: cdk.IResolvable | CfnJob.RecipeProperty;
    /**
     * The Amazon Resource Name (ARN) of the role to be assumed for this job.
     */
    roleArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata tags that have been applied to the job.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The job's timeout in minutes.
     */
    timeout?: number;
    /**
     * The job type of the job, which must be one of the following:.
     */
    type: string;
    /**
     * List of validation configurations that are applied to the profile job.
     */
    validationConfigurations?: Array<cdk.IResolvable | CfnJob.ValidationConfigurationProperty> | cdk.IResolvable;
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
     * Represents one or more actions to be performed on a DataBrew dataset.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-recipe.html
     */
    interface RecipeProperty {
        /**
         * The unique name for the recipe.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-recipe.html#cfn-databrew-job-recipe-name
         */
        readonly name: string;
        /**
         * The identifier for the version for the recipe.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-recipe.html#cfn-databrew-job-recipe-version
         */
        readonly version?: string;
    }
    /**
     * Represents a JDBC database output object which defines the output destination for a DataBrew recipe job to write into.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-databaseoutput.html
     */
    interface DatabaseOutputProperty {
        /**
         * Represents options that specify how and where DataBrew writes the database output generated by recipe jobs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-databaseoutput.html#cfn-databrew-job-databaseoutput-databaseoptions
         */
        readonly databaseOptions: CfnJob.DatabaseTableOutputOptionsProperty | cdk.IResolvable;
        /**
         * The output mode to write into the database.
         *
         * Currently supported option: NEW_TABLE.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-databaseoutput.html#cfn-databrew-job-databaseoutput-databaseoutputmode
         */
        readonly databaseOutputMode?: string;
        /**
         * The AWS Glue connection that stores the connection information for the target database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-databaseoutput.html#cfn-databrew-job-databaseoutput-glueconnectionname
         */
        readonly glueConnectionName: string;
    }
    /**
     * Represents options that specify how and where DataBrew writes the database output generated by recipe jobs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-databasetableoutputoptions.html
     */
    interface DatabaseTableOutputOptionsProperty {
        /**
         * A prefix for the name of a table DataBrew will create in the database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-databasetableoutputoptions.html#cfn-databrew-job-databasetableoutputoptions-tablename
         */
        readonly tableName: string;
        /**
         * Represents an Amazon S3 location (bucket name and object key) where DataBrew can store intermediate results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-databasetableoutputoptions.html#cfn-databrew-job-databasetableoutputoptions-tempdirectory
         */
        readonly tempDirectory?: cdk.IResolvable | CfnJob.S3LocationProperty;
    }
    /**
     * Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-s3location.html
     */
    interface S3LocationProperty {
        /**
         * The Amazon S3 bucket name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-s3location.html#cfn-databrew-job-s3location-bucket
         */
        readonly bucket: string;
        /**
         * The AWS account ID of the bucket owner.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-s3location.html#cfn-databrew-job-s3location-bucketowner
         */
        readonly bucketOwner?: string;
        /**
         * The unique name of the object in the bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-s3location.html#cfn-databrew-job-s3location-key
         */
        readonly key?: string;
    }
    /**
     * The location in Amazon S3 or AWS Glue Data Catalog where the job writes its output.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-outputlocation.html
     */
    interface OutputLocationProperty {
        /**
         * The Amazon S3 bucket name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-outputlocation.html#cfn-databrew-job-outputlocation-bucket
         */
        readonly bucket: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-outputlocation.html#cfn-databrew-job-outputlocation-bucketowner
         */
        readonly bucketOwner?: string;
        /**
         * The unique name of the object in the bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-outputlocation.html#cfn-databrew-job-outputlocation-key
         */
        readonly key?: string;
    }
    /**
     * Configuration for profile jobs.
     *
     * Configuration can be used to select columns, do evaluations, and override default parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all supported columns.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-profileconfiguration.html
     */
    interface ProfileConfigurationProperty {
        /**
         * List of configurations for column evaluations.
         *
         * ColumnStatisticsConfigurations are used to select evaluations and override parameters of evaluations for particular columns. When ColumnStatisticsConfigurations is undefined, the profile job will profile all supported columns and run all supported evaluations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-profileconfiguration.html#cfn-databrew-job-profileconfiguration-columnstatisticsconfigurations
         */
        readonly columnStatisticsConfigurations?: Array<CfnJob.ColumnStatisticsConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Configuration for inter-column evaluations.
         *
         * Configuration can be used to select evaluations and override parameters of evaluations. When configuration is undefined, the profile job will run all supported inter-column evaluations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-profileconfiguration.html#cfn-databrew-job-profileconfiguration-datasetstatisticsconfiguration
         */
        readonly datasetStatisticsConfiguration?: cdk.IResolvable | CfnJob.StatisticsConfigurationProperty;
        /**
         * Configuration of entity detection for a profile job.
         *
         * When undefined, entity detection is disabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-profileconfiguration.html#cfn-databrew-job-profileconfiguration-entitydetectorconfiguration
         */
        readonly entityDetectorConfiguration?: CfnJob.EntityDetectorConfigurationProperty | cdk.IResolvable;
        /**
         * List of column selectors.
         *
         * ProfileColumns can be used to select columns from the dataset. When ProfileColumns is undefined, the profile job will profile all supported columns.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-profileconfiguration.html#cfn-databrew-job-profileconfiguration-profilecolumns
         */
        readonly profileColumns?: Array<CfnJob.ColumnSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Selector of a column from a dataset for profile job configuration.
     *
     * One selector includes either a column name or a regular expression.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-columnselector.html
     */
    interface ColumnSelectorProperty {
        /**
         * The name of a column from a dataset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-columnselector.html#cfn-databrew-job-columnselector-name
         */
        readonly name?: string;
        /**
         * A regular expression for selecting a column from a dataset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-columnselector.html#cfn-databrew-job-columnselector-regex
         */
        readonly regex?: string;
    }
    /**
     * Configuration of evaluations for a profile job.
     *
     * This configuration can be used to select evaluations and override the parameters of selected evaluations.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-statisticsconfiguration.html
     */
    interface StatisticsConfigurationProperty {
        /**
         * List of included evaluations.
         *
         * When the list is undefined, all supported evaluations will be included.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-statisticsconfiguration.html#cfn-databrew-job-statisticsconfiguration-includedstatistics
         */
        readonly includedStatistics?: Array<string>;
        /**
         * List of overrides for evaluations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-statisticsconfiguration.html#cfn-databrew-job-statisticsconfiguration-overrides
         */
        readonly overrides?: Array<cdk.IResolvable | CfnJob.StatisticOverrideProperty> | cdk.IResolvable;
    }
    /**
     * Override of a particular evaluation for a profile job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-statisticoverride.html
     */
    interface StatisticOverrideProperty {
        /**
         * A map that includes overrides of an evaluation’s parameters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-statisticoverride.html#cfn-databrew-job-statisticoverride-parameters
         */
        readonly parameters: cdk.IResolvable | Record<string, string>;
        /**
         * The name of an evaluation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-statisticoverride.html#cfn-databrew-job-statisticoverride-statistic
         */
        readonly statistic: string;
    }
    /**
     * Configuration for column evaluations for a profile job.
     *
     * ColumnStatisticsConfiguration can be used to select evaluations and override parameters of evaluations for particular columns.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-columnstatisticsconfiguration.html
     */
    interface ColumnStatisticsConfigurationProperty {
        /**
         * List of column selectors.
         *
         * Selectors can be used to select columns from the dataset. When selectors are undefined, configuration will be applied to all supported columns.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-columnstatisticsconfiguration.html#cfn-databrew-job-columnstatisticsconfiguration-selectors
         */
        readonly selectors?: Array<CfnJob.ColumnSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Configuration for evaluations.
         *
         * Statistics can be used to select evaluations and override parameters of evaluations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-columnstatisticsconfiguration.html#cfn-databrew-job-columnstatisticsconfiguration-statistics
         */
        readonly statistics: cdk.IResolvable | CfnJob.StatisticsConfigurationProperty;
    }
    /**
     * Configuration of entity detection for a profile job.
     *
     * When undefined, entity detection is disabled.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-entitydetectorconfiguration.html
     */
    interface EntityDetectorConfigurationProperty {
        /**
         * Configuration of statistics that are allowed to be run on columns that contain detected entities.
         *
         * When undefined, no statistics will be computed on columns that contain detected entities.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-entitydetectorconfiguration.html#cfn-databrew-job-entitydetectorconfiguration-allowedstatistics
         */
        readonly allowedStatistics?: CfnJob.AllowedStatisticsProperty | cdk.IResolvable;
        /**
         * Entity types to detect. Can be any of the following:.
         *
         * - USA_SSN
         * - EMAIL
         * - USA_ITIN
         * - USA_PASSPORT_NUMBER
         * - PHONE_NUMBER
         * - USA_DRIVING_LICENSE
         * - BANK_ACCOUNT
         * - CREDIT_CARD
         * - IP_ADDRESS
         * - MAC_ADDRESS
         * - USA_DEA_NUMBER
         * - USA_HCPCS_CODE
         * - USA_NATIONAL_PROVIDER_IDENTIFIER
         * - USA_NATIONAL_DRUG_CODE
         * - USA_HEALTH_INSURANCE_CLAIM_NUMBER
         * - USA_MEDICARE_BENEFICIARY_IDENTIFIER
         * - USA_CPT_CODE
         * - PERSON_NAME
         * - DATE
         *
         * The Entity type group USA_ALL is also supported, and includes all of the above entity types except PERSON_NAME and DATE.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-entitydetectorconfiguration.html#cfn-databrew-job-entitydetectorconfiguration-entitytypes
         */
        readonly entityTypes: Array<string>;
    }
    /**
     * Configuration of statistics that are allowed to be run on columns that contain detected entities.
     *
     * When undefined, no statistics will be computed on columns that contain detected entities.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-allowedstatistics.html
     */
    interface AllowedStatisticsProperty {
        /**
         * One or more column statistics to allow for columns that contain detected entities.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-allowedstatistics.html#cfn-databrew-job-allowedstatistics-statistics
         */
        readonly statistics: Array<string>;
    }
    /**
     * Represents options that specify how and where in Amazon S3 DataBrew writes the output generated by recipe jobs or profile jobs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-output.html
     */
    interface OutputProperty {
        /**
         * The compression algorithm used to compress the output text of the job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-output.html#cfn-databrew-job-output-compressionformat
         */
        readonly compressionFormat?: string;
        /**
         * The data format of the output of the job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-output.html#cfn-databrew-job-output-format
         */
        readonly format?: string;
        /**
         * Represents options that define how DataBrew formats job output files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-output.html#cfn-databrew-job-output-formatoptions
         */
        readonly formatOptions?: cdk.IResolvable | CfnJob.OutputFormatOptionsProperty;
        /**
         * The location in Amazon S3 where the job writes its output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-output.html#cfn-databrew-job-output-location
         */
        readonly location: cdk.IResolvable | CfnJob.S3LocationProperty;
        /**
         * The maximum number of files to be generated by the job and written to the output folder.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-output.html#cfn-databrew-job-output-maxoutputfiles
         */
        readonly maxOutputFiles?: number;
        /**
         * A value that, if true, means that any data in the location specified for output is overwritten with new output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-output.html#cfn-databrew-job-output-overwrite
         */
        readonly overwrite?: boolean | cdk.IResolvable;
        /**
         * The names of one or more partition columns for the output of the job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-output.html#cfn-databrew-job-output-partitioncolumns
         */
        readonly partitionColumns?: Array<string>;
    }
    /**
     * Represents a set of options that define the structure of comma-separated (CSV) job output.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-outputformatoptions.html
     */
    interface OutputFormatOptionsProperty {
        /**
         * Represents a set of options that define the structure of comma-separated value (CSV) job output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-outputformatoptions.html#cfn-databrew-job-outputformatoptions-csv
         */
        readonly csv?: CfnJob.CsvOutputOptionsProperty | cdk.IResolvable;
    }
    /**
     * Represents a set of options that define how DataBrew will write a comma-separated value (CSV) file.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-csvoutputoptions.html
     */
    interface CsvOutputOptionsProperty {
        /**
         * A single character that specifies the delimiter used to create CSV job output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-csvoutputoptions.html#cfn-databrew-job-csvoutputoptions-delimiter
         */
        readonly delimiter?: string;
    }
    /**
     * Configuration for data quality validation.
     *
     * Used to select the Rulesets and Validation Mode to be used in the profile job. When ValidationConfiguration is null, the profile job will run without data quality validation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-validationconfiguration.html
     */
    interface ValidationConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) for the ruleset to be validated in the profile job.
         *
         * The TargetArn of the selected ruleset should be the same as the Amazon Resource Name (ARN) of the dataset that is associated with the profile job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-validationconfiguration.html#cfn-databrew-job-validationconfiguration-rulesetarn
         */
        readonly rulesetArn: string;
        /**
         * Mode of data quality validation.
         *
         * Default mode is “CHECK_ALL” which verifies all rules defined in the selected ruleset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-validationconfiguration.html#cfn-databrew-job-validationconfiguration-validationmode
         */
        readonly validationMode?: string;
    }
    /**
     * A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run.
     *
     * If a `JobSample` value isn't provided, the default is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-jobsample.html
     */
    interface JobSampleProperty {
        /**
         * A value that determines whether the profile job is run on the entire dataset or a specified number of rows.
         *
         * This value must be one of the following:
         *
         * - FULL_DATASET - The profile job is run on the entire dataset.
         * - CUSTOM_ROWS - The profile job is run on the number of rows specified in the `Size` parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-jobsample.html#cfn-databrew-job-jobsample-mode
         */
        readonly mode?: string;
        /**
         * The `Size` parameter is only required when the mode is CUSTOM_ROWS.
         *
         * The profile job is run on the specified number of rows. The maximum value for size is Long.MAX_VALUE.
         *
         * Long.MAX_VALUE = 9223372036854775807
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-jobsample.html#cfn-databrew-job-jobsample-size
         */
        readonly size?: number;
    }
    /**
     * Represents options that specify how and where in the AWS Glue Data Catalog DataBrew writes the output generated by recipe jobs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-datacatalogoutput.html
     */
    interface DataCatalogOutputProperty {
        /**
         * The unique identifier of the AWS account that holds the Data Catalog that stores the data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-datacatalogoutput.html#cfn-databrew-job-datacatalogoutput-catalogid
         */
        readonly catalogId?: string;
        /**
         * The name of a database in the Data Catalog.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-datacatalogoutput.html#cfn-databrew-job-datacatalogoutput-databasename
         */
        readonly databaseName: string;
        /**
         * Represents options that specify how and where DataBrew writes the database output generated by recipe jobs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-datacatalogoutput.html#cfn-databrew-job-datacatalogoutput-databaseoptions
         */
        readonly databaseOptions?: CfnJob.DatabaseTableOutputOptionsProperty | cdk.IResolvable;
        /**
         * A value that, if true, means that any data in the location specified for output is overwritten with new output.
         *
         * Not supported with DatabaseOptions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-datacatalogoutput.html#cfn-databrew-job-datacatalogoutput-overwrite
         */
        readonly overwrite?: boolean | cdk.IResolvable;
        /**
         * Represents options that specify how and where DataBrew writes the Amazon S3 output generated by recipe jobs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-datacatalogoutput.html#cfn-databrew-job-datacatalogoutput-s3options
         */
        readonly s3Options?: cdk.IResolvable | CfnJob.S3TableOutputOptionsProperty;
        /**
         * The name of a table in the Data Catalog.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-datacatalogoutput.html#cfn-databrew-job-datacatalogoutput-tablename
         */
        readonly tableName: string;
    }
    /**
     * Represents options that specify how and where DataBrew writes the Amazon S3 output generated by recipe jobs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-s3tableoutputoptions.html
     */
    interface S3TableOutputOptionsProperty {
        /**
         * Represents an Amazon S3 location (bucket name and object key) where DataBrew can write output from a job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-s3tableoutputoptions.html#cfn-databrew-job-s3tableoutputoptions-location
         */
        readonly location: cdk.IResolvable | CfnJob.S3LocationProperty;
    }
}
/**
 * Properties for defining a `CfnJob`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html
 */
export interface CfnJobProps {
    /**
     * Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-databaseoutputs
     */
    readonly databaseOutputs?: Array<CfnJob.DatabaseOutputProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * One or more artifacts that represent the AWS Glue Data Catalog output from running the job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-datacatalogoutputs
     */
    readonly dataCatalogOutputs?: Array<CfnJob.DataCatalogOutputProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A dataset that the job is to process.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-datasetname
     */
    readonly datasetName?: string;
    /**
     * The Amazon Resource Name (ARN) of an encryption key that is used to protect the job output.
     *
     * For more information, see [Encrypting data written by DataBrew jobs](https://docs.aws.amazon.com/databrew/latest/dg/encryption-security-configuration.html)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-encryptionkeyarn
     */
    readonly encryptionKeyArn?: string;
    /**
     * The encryption mode for the job, which can be one of the following:.
     *
     * - `SSE-KMS` - Server-side encryption with keys managed by AWS KMS .
     * - `SSE-S3` - Server-side encryption with keys managed by Amazon S3.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-encryptionmode
     */
    readonly encryptionMode?: string;
    /**
     * A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run.
     *
     * If a `JobSample` value isn't provided, the default value is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-jobsample
     */
    readonly jobSample?: cdk.IResolvable | CfnJob.JobSampleProperty;
    /**
     * The current status of Amazon CloudWatch logging for the job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-logsubscription
     */
    readonly logSubscription?: string;
    /**
     * The maximum number of nodes that can be consumed when the job processes data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-maxcapacity
     */
    readonly maxCapacity?: number;
    /**
     * The maximum number of times to retry the job after a job run fails.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-maxretries
     */
    readonly maxRetries?: number;
    /**
     * The unique name of the job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-name
     */
    readonly name: string;
    /**
     * The location in Amazon S3 where the job writes its output.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-outputlocation
     */
    readonly outputLocation?: cdk.IResolvable | CfnJob.OutputLocationProperty;
    /**
     * One or more artifacts that represent output from running the job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-outputs
     */
    readonly outputs?: Array<cdk.IResolvable | CfnJob.OutputProperty> | cdk.IResolvable;
    /**
     * Configuration for profile jobs.
     *
     * Configuration can be used to select columns, do evaluations, and override default parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all supported columns.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-profileconfiguration
     */
    readonly profileConfiguration?: cdk.IResolvable | CfnJob.ProfileConfigurationProperty;
    /**
     * The name of the project that the job is associated with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-projectname
     */
    readonly projectName?: string;
    /**
     * A series of data transformation steps that the job runs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-recipe
     */
    readonly recipe?: cdk.IResolvable | CfnJob.RecipeProperty;
    /**
     * The Amazon Resource Name (ARN) of the role to be assumed for this job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-rolearn
     */
    readonly roleArn: string;
    /**
     * Metadata tags that have been applied to the job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The job's timeout in minutes.
     *
     * A job that attempts to run longer than this timeout period ends with a status of `TIMEOUT` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-timeout
     */
    readonly timeout?: number;
    /**
     * The job type of the job, which must be one of the following:.
     *
     * - `PROFILE` - A job to analyze a dataset, to determine its size, data types, data distribution, and more.
     * - `RECIPE` - A job to apply one or more transformations to a dataset.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-type
     */
    readonly type: string;
    /**
     * List of validation configurations that are applied to the profile job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-validationconfigurations
     */
    readonly validationConfigurations?: Array<cdk.IResolvable | CfnJob.ValidationConfigurationProperty> | cdk.IResolvable;
}
/**
 * Specifies a new AWS Glue DataBrew project.
 *
 * @cloudformationResource AWS::DataBrew::Project
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-project.html
 */
export declare class CfnProject extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnProject from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnProject;
    /**
     * The dataset that the project is to act upon.
     */
    datasetName: string;
    /**
     * The unique name of a project.
     */
    name: string;
    /**
     * The name of a recipe that will be developed during a project session.
     */
    recipeName: string;
    /**
     * The Amazon Resource Name (ARN) of the role that will be assumed for this project.
     */
    roleArn: string;
    /**
     * The sample size and sampling type to apply to the data.
     */
    sample?: cdk.IResolvable | CfnProject.SampleProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata tags that have been applied to the project.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnProjectProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnProject {
    /**
     * Represents the sample size and sampling type for DataBrew to use for interactive data analysis.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-project-sample.html
     */
    interface SampleProperty {
        /**
         * The number of rows in the sample.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-project-sample.html#cfn-databrew-project-sample-size
         */
        readonly size?: number;
        /**
         * The way in which DataBrew obtains rows from a dataset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-project-sample.html#cfn-databrew-project-sample-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnProject`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-project.html
 */
export interface CfnProjectProps {
    /**
     * The dataset that the project is to act upon.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-project.html#cfn-databrew-project-datasetname
     */
    readonly datasetName: string;
    /**
     * The unique name of a project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-project.html#cfn-databrew-project-name
     */
    readonly name: string;
    /**
     * The name of a recipe that will be developed during a project session.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-project.html#cfn-databrew-project-recipename
     */
    readonly recipeName: string;
    /**
     * The Amazon Resource Name (ARN) of the role that will be assumed for this project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-project.html#cfn-databrew-project-rolearn
     */
    readonly roleArn: string;
    /**
     * The sample size and sampling type to apply to the data.
     *
     * If this parameter isn't specified, then the sample consists of the first 500 rows from the dataset.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-project.html#cfn-databrew-project-sample
     */
    readonly sample?: cdk.IResolvable | CfnProject.SampleProperty;
    /**
     * Metadata tags that have been applied to the project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-project.html#cfn-databrew-project-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies a new AWS Glue DataBrew transformation recipe.
 *
 * @cloudformationResource AWS::DataBrew::Recipe
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-recipe.html
 */
export declare class CfnRecipe extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRecipe from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRecipe;
    /**
     * The description of the recipe.
     */
    description?: string;
    /**
     * The unique name for the recipe.
     */
    name: string;
    /**
     * A list of steps that are defined by the recipe.
     */
    steps: Array<cdk.IResolvable | CfnRecipe.RecipeStepProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata tags that have been applied to the recipe.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRecipeProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRecipe {
    /**
     * Represents a single step from a DataBrew recipe to be performed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipestep.html
     */
    interface RecipeStepProperty {
        /**
         * The particular action to be performed in the recipe step.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipestep.html#cfn-databrew-recipe-recipestep-action
         */
        readonly action: CfnRecipe.ActionProperty | cdk.IResolvable;
        /**
         * One or more conditions that must be met for the recipe step to succeed.
         *
         * > All of the conditions in the array must be met. In other words, all of the conditions must be combined using a logical AND operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipestep.html#cfn-databrew-recipe-recipestep-conditionexpressions
         */
        readonly conditionExpressions?: Array<CfnRecipe.ConditionExpressionProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Represents a transformation and associated parameters that are used to apply a change to an AWS Glue DataBrew dataset.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-action.html
     */
    interface ActionProperty {
        /**
         * The name of a valid DataBrew transformation to be performed on the data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-action.html#cfn-databrew-recipe-action-operation
         */
        readonly operation: string;
        /**
         * Contextual parameters for the transformation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-action.html#cfn-databrew-recipe-action-parameters
         */
        readonly parameters?: cdk.IResolvable | Record<string, string>;
    }
    /**
     * Represents an individual condition that evaluates to true or false.
     *
     * Conditions are used with recipe actions. The action is only performed for column values where the condition evaluates to true.
     *
     * If a recipe requires more than one condition, then the recipe must specify multiple `ConditionExpression` elements. Each condition is applied to the rows in a dataset first, before the recipe action is performed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-conditionexpression.html
     */
    interface ConditionExpressionProperty {
        /**
         * A specific condition to apply to a recipe action.
         *
         * For more information, see [Recipe structure](https://docs.aws.amazon.com/databrew/latest/dg/recipe-structure.html) in the *AWS Glue DataBrew Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-conditionexpression.html#cfn-databrew-recipe-conditionexpression-condition
         */
        readonly condition: string;
        /**
         * A column to apply this condition to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-conditionexpression.html#cfn-databrew-recipe-conditionexpression-targetcolumn
         */
        readonly targetColumn: string;
        /**
         * A value that the condition must evaluate to for the condition to succeed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-conditionexpression.html#cfn-databrew-recipe-conditionexpression-value
         */
        readonly value?: string;
    }
    /**
     * Represents how metadata stored in the AWS Glue Data Catalog is defined in a DataBrew dataset.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-datacataloginputdefinition.html
     */
    interface DataCatalogInputDefinitionProperty {
        /**
         * The unique identifier of the AWS account that holds the Data Catalog that stores the data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-datacataloginputdefinition.html#cfn-databrew-recipe-datacataloginputdefinition-catalogid
         */
        readonly catalogId?: string;
        /**
         * The name of a database in the Data Catalog.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-datacataloginputdefinition.html#cfn-databrew-recipe-datacataloginputdefinition-databasename
         */
        readonly databaseName?: string;
        /**
         * The name of a database table in the Data Catalog.
         *
         * This table corresponds to a DataBrew dataset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-datacataloginputdefinition.html#cfn-databrew-recipe-datacataloginputdefinition-tablename
         */
        readonly tableName?: string;
        /**
         * Represents an Amazon location where DataBrew can store intermediate results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-datacataloginputdefinition.html#cfn-databrew-recipe-datacataloginputdefinition-tempdirectory
         */
        readonly tempDirectory?: cdk.IResolvable | CfnRecipe.S3LocationProperty;
    }
    /**
     * Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-s3location.html
     */
    interface S3LocationProperty {
        /**
         * The Amazon S3 bucket name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-s3location.html#cfn-databrew-recipe-s3location-bucket
         */
        readonly bucket: string;
        /**
         * The unique name of the object in the bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-s3location.html#cfn-databrew-recipe-s3location-key
         */
        readonly key?: string;
    }
    /**
     * Represents information on how DataBrew can find data, in either the AWS Glue Data Catalog or Amazon S3.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-input.html
     */
    interface InputProperty {
        /**
         * The AWS Glue Data Catalog parameters for the data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-input.html#cfn-databrew-recipe-input-datacataloginputdefinition
         */
        readonly dataCatalogInputDefinition?: CfnRecipe.DataCatalogInputDefinitionProperty | cdk.IResolvable;
        /**
         * The Amazon S3 location where the data is stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-input.html#cfn-databrew-recipe-input-s3inputdefinition
         */
        readonly s3InputDefinition?: cdk.IResolvable | CfnRecipe.S3LocationProperty;
    }
    /**
     * Parameters that are used as inputs for various recipe actions.
     *
     * The parameters are specific to the context in which they're used.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html
     */
    interface RecipeParametersProperty {
        /**
         * The name of an aggregation function to apply.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-aggregatefunction
         */
        readonly aggregateFunction?: string;
        /**
         * The number of digits used in a counting system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-base
         */
        readonly base?: string;
        /**
         * A case statement associated with a recipe.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-casestatement
         */
        readonly caseStatement?: string;
        /**
         * A category map used for one-hot encoding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-categorymap
         */
        readonly categoryMap?: string;
        /**
         * Characters to remove from a step that applies one-hot encoding or tokenization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-charstoremove
         */
        readonly charsToRemove?: string;
        /**
         * Remove any non-word non-punctuation character.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-collapseconsecutivewhitespace
         */
        readonly collapseConsecutiveWhitespace?: string;
        /**
         * The data type of the column.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-columndatatype
         */
        readonly columnDataType?: string;
        /**
         * A range of columns to which a step is applied.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-columnrange
         */
        readonly columnRange?: string;
        /**
         * The number of times a string needs to be repeated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-count
         */
        readonly count?: string;
        /**
         * One or more characters that can be substituted or removed, depending on the context.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-customcharacters
         */
        readonly customCharacters?: string;
        /**
         * A list of words to ignore in a step that applies word tokenization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-customstopwords
         */
        readonly customStopWords?: string;
        /**
         * A list of custom values to use in a step that requires that you provide a value to finish the operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-customvalue
         */
        readonly customValue?: string;
        /**
         * A list of the dataset columns included in a project.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-datasetscolumns
         */
        readonly datasetsColumns?: string;
        /**
         * A value that specifies how many units of time to add or subtract for a date math operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-dateaddvalue
         */
        readonly dateAddValue?: string;
        /**
         * A date format to apply to a date.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-datetimeformat
         */
        readonly dateTimeFormat?: string;
        /**
         * A set of parameters associated with a datetime.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-datetimeparameters
         */
        readonly dateTimeParameters?: string;
        /**
         * Determines whether unmapped rows in a categorical mapping should be deleted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-deleteotherrows
         */
        readonly deleteOtherRows?: string;
        /**
         * The delimiter to use when parsing separated values in a text file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-delimiter
         */
        readonly delimiter?: string;
        /**
         * The end pattern to locate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-endpattern
         */
        readonly endPattern?: string;
        /**
         * The end position to locate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-endposition
         */
        readonly endPosition?: string;
        /**
         * The end value to locate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-endvalue
         */
        readonly endValue?: string;
        /**
         * A list of word contractions and what they expand to.
         *
         * For eample: *can't* ; *cannot* ; *can not* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-expandcontractions
         */
        readonly expandContractions?: string;
        /**
         * The exponent to apply in an exponential operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-exponent
         */
        readonly exponent?: string;
        /**
         * A value that represents `FALSE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-falsestring
         */
        readonly falseString?: string;
        /**
         * Specifies options to apply to the `GROUP BY` used in an aggregation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-groupbyaggfunctionoptions
         */
        readonly groupByAggFunctionOptions?: string;
        /**
         * The columns to use in the `GROUP BY` clause.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-groupbycolumns
         */
        readonly groupByColumns?: string;
        /**
         * A list of columns to hide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-hiddencolumns
         */
        readonly hiddenColumns?: string;
        /**
         * Indicates that lower and upper case letters are treated equally.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-ignorecase
         */
        readonly ignoreCase?: string;
        /**
         * Indicates if this column is participating in a split transform.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-includeinsplit
         */
        readonly includeInSplit?: string;
        /**
         * The input location to load the dataset from - Amazon S3 or AWS Glue Data Catalog .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-input
         */
        readonly input?: any | cdk.IResolvable;
        /**
         * The number of characters to split by.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-interval
         */
        readonly interval?: string;
        /**
         * Indicates if the content is text.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-istext
         */
        readonly isText?: string;
        /**
         * The keys or columns involved in a join.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-joinkeys
         */
        readonly joinKeys?: string;
        /**
         * The type of join to use, for example, `INNER JOIN` , `OUTER JOIN` , and so on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-jointype
         */
        readonly joinType?: string;
        /**
         * The columns on the left side of the join.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-leftcolumns
         */
        readonly leftColumns?: string;
        /**
         * The number of times to perform `split` or `replaceBy` in a string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-limit
         */
        readonly limit?: string;
        /**
         * The lower boundary for a value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-lowerbound
         */
        readonly lowerBound?: string;
        /**
         * The type of mappings to apply to construct a new dynamic frame.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-maptype
         */
        readonly mapType?: string;
        /**
         * Determines the manner in which mode value is calculated, in case there is more than one mode value.
         *
         * Valid values: `NONE` | `AVERAGE` | `MINIMUM` | `MAXIMUM`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-modetype
         */
        readonly modeType?: string;
        /**
         * Specifies whether JSON input contains embedded new line characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-multiline
         */
        readonly multiLine?: boolean | cdk.IResolvable;
        /**
         * The number of rows to consider in a window.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-numrows
         */
        readonly numRows?: string;
        /**
         * The number of rows to consider after the current row in a window.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-numrowsafter
         */
        readonly numRowsAfter?: string;
        /**
         * The number of rows to consider before the current row in a window.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-numrowsbefore
         */
        readonly numRowsBefore?: string;
        /**
         * A column to sort the results by.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-orderbycolumn
         */
        readonly orderByColumn?: string;
        /**
         * The columns to sort the results by.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-orderbycolumns
         */
        readonly orderByColumns?: string;
        /**
         * The value to assign to unmapped cells, in categorical mapping.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-other
         */
        readonly other?: string;
        /**
         * The pattern to locate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-pattern
         */
        readonly pattern?: string;
        /**
         * The starting pattern to split between.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-patternoption1
         */
        readonly patternOption1?: string;
        /**
         * The ending pattern to split between.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-patternoption2
         */
        readonly patternOption2?: string;
        /**
         * For splitting by multiple delimiters: A JSON-encoded string that lists the patterns in the format.
         *
         * For example: `[{\"pattern\":\"1\",\"includeInSplit\":true}]`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-patternoptions
         */
        readonly patternOptions?: string;
        /**
         * The size of the rolling window.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-period
         */
        readonly period?: string;
        /**
         * The character index within a string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-position
         */
        readonly position?: string;
        /**
         * If `true` , removes all of the following characters: `.` `.!` `.,` `.?`.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-removeallpunctuation
         */
        readonly removeAllPunctuation?: string;
        /**
         * If `true` , removes all single quotes and double quotes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-removeallquotes
         */
        readonly removeAllQuotes?: string;
        /**
         * If `true` , removes all whitespaces from the value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-removeallwhitespace
         */
        readonly removeAllWhitespace?: string;
        /**
         * If `true` , removes all chraracters specified by `CustomCharacters` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-removecustomcharacters
         */
        readonly removeCustomCharacters?: string;
        /**
         * If `true` , removes all chraracters specified by `CustomValue` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-removecustomvalue
         */
        readonly removeCustomValue?: string;
        /**
         * If `true` , removes the following characters if they occur at the start or end of the value: `.` `!` `,` `?`.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-removeleadingandtrailingpunctuation
         */
        readonly removeLeadingAndTrailingPunctuation?: string;
        /**
         * If `true` , removes single quotes and double quotes from the beginning and end of the value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-removeleadingandtrailingquotes
         */
        readonly removeLeadingAndTrailingQuotes?: string;
        /**
         * If `true` , removes all whitespaces from the beginning and end of the value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-removeleadingandtrailingwhitespace
         */
        readonly removeLeadingAndTrailingWhitespace?: string;
        /**
         * If `true` , removes all uppercase and lowercase alphabetic characters (A through Z;
         *
         * a through z).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-removeletters
         */
        readonly removeLetters?: string;
        /**
         * If `true` , removes all numeric characters (0 through 9).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-removenumbers
         */
        readonly removeNumbers?: string;
        /**
         * If `true` , the source column will be removed after un-nesting that column.
         *
         * (Used with nested column types, such as Map, Struct, or Array.)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-removesourcecolumn
         */
        readonly removeSourceColumn?: string;
        /**
         * If `true` , removes all of the following characters: `!
         *
         * " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-removespecialcharacters
         */
        readonly removeSpecialCharacters?: string;
        /**
         * The columns on the right side of a join.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-rightcolumns
         */
        readonly rightColumns?: string;
        /**
         * The number of rows in the sample.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-samplesize
         */
        readonly sampleSize?: string;
        /**
         * The sampling type to apply to the dataset.
         *
         * Valid values: `FIRST_N` | `LAST_N` | `RANDOM`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-sampletype
         */
        readonly sampleType?: string;
        /**
         * A list of secondary inputs in a UNION transform.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-secondaryinputs
         */
        readonly secondaryInputs?: Array<cdk.IResolvable | CfnRecipe.SecondaryInputProperty> | cdk.IResolvable;
        /**
         * A object value to indicate the second dataset used in a join.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-secondinput
         */
        readonly secondInput?: string;
        /**
         * One or more sheet numbers in the Excel file, which will be included in a dataset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-sheetindexes
         */
        readonly sheetIndexes?: Array<number> | cdk.IResolvable;
        /**
         * Oone or more named sheets in the Excel file, which will be included in a dataset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-sheetnames
         */
        readonly sheetNames?: Array<string>;
        /**
         * A source column needed for an operation, step, or transform.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-sourcecolumn
         */
        readonly sourceColumn?: string;
        /**
         * A source column needed for an operation, step, or transform.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-sourcecolumn1
         */
        readonly sourceColumn1?: string;
        /**
         * A source column needed for an operation, step, or transform.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-sourcecolumn2
         */
        readonly sourceColumn2?: string;
        /**
         * A list of source columns needed for an operation, step, or transform.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-sourcecolumns
         */
        readonly sourceColumns?: string;
        /**
         * The index number of the first column used by an operation, step, or transform.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-startcolumnindex
         */
        readonly startColumnIndex?: string;
        /**
         * The starting pattern to locate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-startpattern
         */
        readonly startPattern?: string;
        /**
         * The starting position to locate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-startposition
         */
        readonly startPosition?: string;
        /**
         * The starting value to locate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-startvalue
         */
        readonly startValue?: string;
        /**
         * Indicates this operation uses stems and lemmas (base words) for word tokenization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-stemmingmode
         */
        readonly stemmingMode?: string;
        /**
         * The total number of transforms in this recipe.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-stepcount
         */
        readonly stepCount?: string;
        /**
         * The index ID of a step.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-stepindex
         */
        readonly stepIndex?: string;
        /**
         * Indicates this operation uses stop words as part of word tokenization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-stopwordsmode
         */
        readonly stopWordsMode?: string;
        /**
         * The resolution strategy to apply in resolving ambiguities.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-strategy
         */
        readonly strategy?: string;
        /**
         * The column targeted by this operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-targetcolumn
         */
        readonly targetColumn?: string;
        /**
         * The names to give columns altered by this operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-targetcolumnnames
         */
        readonly targetColumnNames?: string;
        /**
         * The date format to convert to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-targetdateformat
         */
        readonly targetDateFormat?: string;
        /**
         * The index number of an object that is targeted by this operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-targetindex
         */
        readonly targetIndex?: string;
        /**
         * The current timezone that you want to use for dates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-timezone
         */
        readonly timeZone?: string;
        /**
         * A regex expression to use when splitting text into terms, also called words or tokens.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-tokenizerpattern
         */
        readonly tokenizerPattern?: string;
        /**
         * A value to use to represent `TRUE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-truestring
         */
        readonly trueString?: string;
        /**
         * The language that's used in the user-defined function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-udflang
         */
        readonly udfLang?: string;
        /**
         * Specifies a unit of time.
         *
         * For example: `MINUTES` ; `SECONDS` ; `HOURS` ; etc.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-units
         */
        readonly units?: string;
        /**
         * Cast columns as rows, so that each value is a different row in a single column.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-unpivotcolumn
         */
        readonly unpivotColumn?: string;
        /**
         * The upper boundary for a value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-upperbound
         */
        readonly upperBound?: string;
        /**
         * Create a new container to hold a dataset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-usenewdataframe
         */
        readonly useNewDataFrame?: string;
        /**
         * A static value that can be used in a comparison, a substitution, or in another context-specific way.
         *
         * A `Value` can be a number, string, or other datatype, depending on the recipe action in which it's used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-value
         */
        readonly value?: string;
        /**
         * A value that's used by this operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-value1
         */
        readonly value1?: string;
        /**
         * A value that's used by this operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-value2
         */
        readonly value2?: string;
        /**
         * The column that is provided as a value that's used by this operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-valuecolumn
         */
        readonly valueColumn?: string;
        /**
         * The subset of rows currently available for viewing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html#cfn-databrew-recipe-recipeparameters-viewframe
         */
        readonly viewFrame?: string;
    }
    /**
     * Represents secondary inputs in a UNION transform.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-secondaryinput.html
     */
    interface SecondaryInputProperty {
        /**
         * The AWS Glue Data Catalog parameters for the data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-secondaryinput.html#cfn-databrew-recipe-secondaryinput-datacataloginputdefinition
         */
        readonly dataCatalogInputDefinition?: CfnRecipe.DataCatalogInputDefinitionProperty | cdk.IResolvable;
        /**
         * The Amazon S3 location where the data is stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-secondaryinput.html#cfn-databrew-recipe-secondaryinput-s3inputdefinition
         */
        readonly s3InputDefinition?: cdk.IResolvable | CfnRecipe.S3LocationProperty;
    }
}
/**
 * Properties for defining a `CfnRecipe`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-recipe.html
 */
export interface CfnRecipeProps {
    /**
     * The description of the recipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-recipe.html#cfn-databrew-recipe-description
     */
    readonly description?: string;
    /**
     * The unique name for the recipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-recipe.html#cfn-databrew-recipe-name
     */
    readonly name: string;
    /**
     * A list of steps that are defined by the recipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-recipe.html#cfn-databrew-recipe-steps
     */
    readonly steps: Array<cdk.IResolvable | CfnRecipe.RecipeStepProperty> | cdk.IResolvable;
    /**
     * Metadata tags that have been applied to the recipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-recipe.html#cfn-databrew-recipe-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies a new ruleset that can be used in a profile job to validate the data quality of a dataset.
 *
 * @cloudformationResource AWS::DataBrew::Ruleset
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-ruleset.html
 */
export declare class CfnRuleset extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRuleset from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRuleset;
    /**
     * The description of the ruleset.
     */
    description?: string;
    /**
     * The name of the ruleset.
     */
    name: string;
    /**
     * Contains metadata about the ruleset.
     */
    rules: Array<cdk.IResolvable | CfnRuleset.RuleProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is associated with.
     */
    targetArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRulesetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRuleset {
    /**
     * Represents a single data quality requirement that should be validated in the scope of this dataset.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-rule.html
     */
    interface RuleProperty {
        /**
         * The expression which includes column references, condition names followed by variable references, possibly grouped and combined with other conditions.
         *
         * For example, `(:col1 starts_with :prefix1 or :col1 starts_with :prefix2) and (:col1 ends_with :suffix1 or :col1 ends_with :suffix2)` . Column and value references are substitution variables that should start with the ':' symbol. Depending on the context, substitution variables' values can be either an actual value or a column name. These values are defined in the SubstitutionMap. If a CheckExpression starts with a column reference, then ColumnSelectors in the rule should be null. If ColumnSelectors has been defined, then there should be no columnn reference in the left side of a condition, for example, `is_between :val1 and :val2` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-rule.html#cfn-databrew-ruleset-rule-checkexpression
         */
        readonly checkExpression: string;
        /**
         * List of column selectors.
         *
         * Selectors can be used to select columns using a name or regular expression from the dataset. Rule will be applied to selected columns.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-rule.html#cfn-databrew-ruleset-rule-columnselectors
         */
        readonly columnSelectors?: Array<CfnRuleset.ColumnSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A value that specifies whether the rule is disabled.
         *
         * Once a rule is disabled, a profile job will not validate it during a job run. Default value is false.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-rule.html#cfn-databrew-ruleset-rule-disabled
         */
        readonly disabled?: boolean | cdk.IResolvable;
        /**
         * The name of the rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-rule.html#cfn-databrew-ruleset-rule-name
         */
        readonly name: string;
        /**
         * The map of substitution variable names to their values used in a check expression.
         *
         * Variable names should start with a ':' (colon). Variable values can either be actual values or column names. To differentiate between the two, column names should be enclosed in backticks, for example, `":col1": "`Column A`".`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-rule.html#cfn-databrew-ruleset-rule-substitutionmap
         */
        readonly substitutionMap?: Array<cdk.IResolvable | CfnRuleset.SubstitutionValueProperty> | cdk.IResolvable;
        /**
         * The threshold used with a non-aggregate check expression.
         *
         * Non-aggregate check expressions will be applied to each row in a specific column, and the threshold will be used to determine whether the validation succeeds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-rule.html#cfn-databrew-ruleset-rule-threshold
         */
        readonly threshold?: cdk.IResolvable | CfnRuleset.ThresholdProperty;
    }
    /**
     * Selector of a column from a dataset for profile job configuration.
     *
     * One selector includes either a column name or a regular expression.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-columnselector.html
     */
    interface ColumnSelectorProperty {
        /**
         * The name of a column from a dataset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-columnselector.html#cfn-databrew-ruleset-columnselector-name
         */
        readonly name?: string;
        /**
         * A regular expression for selecting a column from a dataset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-columnselector.html#cfn-databrew-ruleset-columnselector-regex
         */
        readonly regex?: string;
    }
    /**
     * A key-value pair to associate an expression's substitution variable names with their values.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-substitutionvalue.html
     */
    interface SubstitutionValueProperty {
        /**
         * Value or column name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-substitutionvalue.html#cfn-databrew-ruleset-substitutionvalue-value
         */
        readonly value: string;
        /**
         * Variable name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-substitutionvalue.html#cfn-databrew-ruleset-substitutionvalue-valuereference
         */
        readonly valueReference: string;
    }
    /**
     * The threshold used with a non-aggregate check expression.
     *
     * The non-aggregate check expression will be applied to each row in a specific column. Then the threshold will be used to determine whether the validation succeeds.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-threshold.html
     */
    interface ThresholdProperty {
        /**
         * The type of a threshold.
         *
         * Used for comparison of an actual count of rows that satisfy the rule to the threshold value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-threshold.html#cfn-databrew-ruleset-threshold-type
         */
        readonly type?: string;
        /**
         * Unit of threshold value.
         *
         * Can be either a COUNT or PERCENTAGE of the full sample size used for validation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-threshold.html#cfn-databrew-ruleset-threshold-unit
         */
        readonly unit?: string;
        /**
         * The value of a threshold.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-threshold.html#cfn-databrew-ruleset-threshold-value
         */
        readonly value: number;
    }
}
/**
 * Properties for defining a `CfnRuleset`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-ruleset.html
 */
export interface CfnRulesetProps {
    /**
     * The description of the ruleset.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-ruleset.html#cfn-databrew-ruleset-description
     */
    readonly description?: string;
    /**
     * The name of the ruleset.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-ruleset.html#cfn-databrew-ruleset-name
     */
    readonly name: string;
    /**
     * Contains metadata about the ruleset.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-ruleset.html#cfn-databrew-ruleset-rules
     */
    readonly rules: Array<cdk.IResolvable | CfnRuleset.RuleProperty> | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-ruleset.html#cfn-databrew-ruleset-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is associated with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-ruleset.html#cfn-databrew-ruleset-targetarn
     */
    readonly targetArn: string;
}
/**
 * Specifies a new schedule for one or more AWS Glue DataBrew jobs.
 *
 * Jobs can be run at a specific date and time, or at regular intervals.
 *
 * @cloudformationResource AWS::DataBrew::Schedule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-schedule.html
 */
export declare class CfnSchedule extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSchedule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSchedule;
    /**
     * The dates and times when the job is to run.
     */
    cronExpression: string;
    /**
     * A list of jobs to be run, according to the schedule.
     */
    jobNames?: Array<string>;
    /**
     * The name of the schedule.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata tags that have been applied to the schedule.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnScheduleProps);
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
 * Properties for defining a `CfnSchedule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-schedule.html
 */
export interface CfnScheduleProps {
    /**
     * The dates and times when the job is to run.
     *
     * For more information, see [Working with cron expressions for recipe jobs](https://docs.aws.amazon.com/databrew/latest/dg/jobs.recipe.html#jobs.cron) in the *AWS Glue DataBrew Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-schedule.html#cfn-databrew-schedule-cronexpression
     */
    readonly cronExpression: string;
    /**
     * A list of jobs to be run, according to the schedule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-schedule.html#cfn-databrew-schedule-jobnames
     */
    readonly jobNames?: Array<string>;
    /**
     * The name of the schedule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-schedule.html#cfn-databrew-schedule-name
     */
    readonly name: string;
    /**
     * Metadata tags that have been applied to the schedule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-schedule.html#cfn-databrew-schedule-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
