import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * This resource creates and trains a document classifier to categorize documents.
 *
 * You provide a set of training documents that are labeled with the categories that you want to identify. After the classifier is trained you can use it to categorize a set of labeled documents into the categories. For more information, see [Document Classification](https://docs.aws.amazon.com/comprehend/latest/dg/how-document-classification.html) in the Comprehend Developer Guide.
 *
 * @cloudformationResource AWS::Comprehend::DocumentClassifier
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html
 */
export declare class CfnDocumentClassifier extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDocumentClassifier from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDocumentClassifier;
    /**
     * The Amazon Resource Name (ARN) of the document classifier.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
     */
    dataAccessRoleArn: string;
    /**
     * The name of the document classifier.
     */
    documentClassifierName: string;
    /**
     * Specifies the format and location of the input data for the job.
     */
    inputDataConfig: CfnDocumentClassifier.DocumentClassifierInputDataConfigProperty | cdk.IResolvable;
    /**
     * The language of the input documents.
     */
    languageCode: string;
    /**
     * Indicates the mode in which the classifier will be trained.
     */
    mode?: string;
    /**
     * ID for the AWS KMS key that Amazon Comprehend uses to encrypt trained custom models.
     */
    modelKmsKeyId?: string;
    /**
     * The resource-based policy to attach to your custom document classifier model.
     */
    modelPolicy?: string;
    /**
     * Provides output results configuration parameters for custom classifier jobs.
     */
    outputDataConfig?: CfnDocumentClassifier.DocumentClassifierOutputDataConfigProperty | cdk.IResolvable;
    /**
     * Tags to associate with the document classifier.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The version name given to the newly created classifier.
     */
    versionName?: string;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job.
     */
    volumeKmsKeyId?: string;
    /**
     * Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your custom classifier.
     */
    vpcConfig?: cdk.IResolvable | CfnDocumentClassifier.VpcConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDocumentClassifierProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDocumentClassifier {
    /**
     * Provide the location for output data from a custom classifier job.
     *
     * This field is mandatory if you are training a native document model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifieroutputdataconfig.html
     */
    interface DocumentClassifierOutputDataConfigProperty {
        /**
         * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the output results from an analysis job.
         *
         * The KmsKeyId can be one of the following formats:
         *
         * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
         * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
         * - KMS Key Alias: `"alias/ExampleAlias"`
         * - ARN of a KMS Key Alias: `"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifieroutputdataconfig.html#cfn-comprehend-documentclassifier-documentclassifieroutputdataconfig-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * When you use the `OutputDataConfig` object while creating a custom classifier, you specify the Amazon S3 location where you want to write the confusion matrix and other output files.
         *
         * The URI must be in the same Region as the API endpoint that you are calling. The location is used as the prefix for the actual location of this output file.
         *
         * When the custom classifier job is finished, the service creates the output file in a directory specific to the job. The `S3Uri` field contains the location of the output file, called `output.tar.gz` . It is a compressed archive that contains the confusion matrix.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifieroutputdataconfig.html#cfn-comprehend-documentclassifier-documentclassifieroutputdataconfig-s3uri
         */
        readonly s3Uri?: string;
    }
    /**
     * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job.
     *
     * For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-vpcconfig.html
     */
    interface VpcConfigProperty {
        /**
         * The ID number for a security group on an instance of your private VPC.
         *
         * Security groups on your VPC function serve as a virtual firewall to control inbound and outbound traffic and provides security for the resources that you’ll be accessing on the VPC. This ID number is preceded by "sg-", for instance: "sg-03b388029b0a285ea". For more information, see [Security Groups for your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-vpcconfig.html#cfn-comprehend-documentclassifier-vpcconfig-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * The ID for each subnet being used in your private VPC.
         *
         * This subnet is a subset of the a range of IPv4 addresses used by the VPC and is specific to a given availability zone in the VPC’s Region. This ID number is preceded by "subnet-", for instance: "subnet-04ccf456919e69055". For more information, see [VPCs and Subnets](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-vpcconfig.html#cfn-comprehend-documentclassifier-vpcconfig-subnets
         */
        readonly subnets: Array<string>;
    }
    /**
     * The input properties for training a document classifier.
     *
     * For more information on how the input file is formatted, see [Preparing training data](https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html) in the Comprehend Developer Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifierinputdataconfig.html
     */
    interface DocumentClassifierInputDataConfigProperty {
        /**
         * A list of augmented manifest files that provide training data for your custom model.
         *
         * An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
         *
         * This parameter is required if you set `DataFormat` to `AUGMENTED_MANIFEST` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifierinputdataconfig.html#cfn-comprehend-documentclassifier-documentclassifierinputdataconfig-augmentedmanifests
         */
        readonly augmentedManifests?: Array<CfnDocumentClassifier.AugmentedManifestsListItemProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The format of your training data:.
         *
         * - `COMPREHEND_CSV` : A two-column CSV file, where labels are provided in the first column, and documents are provided in the second. If you use this value, you must provide the `S3Uri` parameter in your request.
         * - `AUGMENTED_MANIFEST` : A labeled dataset that is produced by Amazon SageMaker Ground Truth. This file is in JSON lines format. Each line is a complete JSON object that contains a training document and its associated labels.
         *
         * If you use this value, you must provide the `AugmentedManifests` parameter in your request.
         *
         * If you don't specify a value, Amazon Comprehend uses `COMPREHEND_CSV` as the default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifierinputdataconfig.html#cfn-comprehend-documentclassifier-documentclassifierinputdataconfig-dataformat
         */
        readonly dataFormat?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifierinputdataconfig.html#cfn-comprehend-documentclassifier-documentclassifierinputdataconfig-documentreaderconfig
         */
        readonly documentReaderConfig?: CfnDocumentClassifier.DocumentReaderConfigProperty | cdk.IResolvable;
        /**
         * The S3 location of the training documents.
         *
         * This parameter is required in a request to create a native document model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifierinputdataconfig.html#cfn-comprehend-documentclassifier-documentclassifierinputdataconfig-documents
         */
        readonly documents?: CfnDocumentClassifier.DocumentClassifierDocumentsProperty | cdk.IResolvable;
        /**
         * The type of input documents for training the model.
         *
         * Provide plain-text documents to create a plain-text model, and provide semi-structured documents to create a native document model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifierinputdataconfig.html#cfn-comprehend-documentclassifier-documentclassifierinputdataconfig-documenttype
         */
        readonly documentType?: string;
        /**
         * Indicates the delimiter used to separate each label for training a multi-label classifier.
         *
         * The default delimiter between labels is a pipe (|). You can use a different character as a delimiter (if it's an allowed character) by specifying it under Delimiter for labels. If the training documents use a delimiter other than the default or the delimiter you specify, the labels on that line will be combined to make a single unique label, such as LABELLABELLABEL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifierinputdataconfig.html#cfn-comprehend-documentclassifier-documentclassifierinputdataconfig-labeldelimiter
         */
        readonly labelDelimiter?: string;
        /**
         * The Amazon S3 URI for the input data.
         *
         * The S3 bucket must be in the same Region as the API endpoint that you are calling. The URI can point to a single input file or it can provide the prefix for a collection of input files.
         *
         * For example, if you use the URI `S3://bucketName/prefix` , if the prefix is a single file, Amazon Comprehend uses that file as input. If more than one file begins with the prefix, Amazon Comprehend uses all of them as input.
         *
         * This parameter is required if you set `DataFormat` to `COMPREHEND_CSV` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifierinputdataconfig.html#cfn-comprehend-documentclassifier-documentclassifierinputdataconfig-s3uri
         */
        readonly s3Uri?: string;
        /**
         * This specifies the Amazon S3 location that contains the test annotations for the document classifier.
         *
         * The URI must be in the same AWS Region as the API endpoint that you are calling.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifierinputdataconfig.html#cfn-comprehend-documentclassifier-documentclassifierinputdataconfig-tests3uri
         */
        readonly testS3Uri?: string;
    }
    /**
     * Provides configuration parameters to override the default actions for extracting text from PDF documents and image files.
     *
     * By default, Amazon Comprehend performs the following actions to extract text from files, based on the input file type:
     *
     * - *Word files* - Amazon Comprehend parser extracts the text.
     * - *Digital PDF files* - Amazon Comprehend parser extracts the text.
     * - *Image files and scanned PDF files* - Amazon Comprehend uses the Amazon Textract `DetectDocumentText` API to extract the text.
     *
     * `DocumentReaderConfig` does not apply to plain text files or Word files.
     *
     * For image files and PDF documents, you can override these default actions using the fields listed below. For more information, see [Setting text extraction options](https://docs.aws.amazon.com/comprehend/latest/dg/idp-set-textract-options.html) in the Comprehend Developer Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentreaderconfig.html
     */
    interface DocumentReaderConfigProperty {
        /**
         * This field defines the Amazon Textract API operation that Amazon Comprehend uses to extract text from PDF files and image files.
         *
         * Enter one of the following values:
         *
         * - `TEXTRACT_DETECT_DOCUMENT_TEXT` - The Amazon Comprehend service uses the `DetectDocumentText` API operation.
         * - `TEXTRACT_ANALYZE_DOCUMENT` - The Amazon Comprehend service uses the `AnalyzeDocument` API operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentreaderconfig.html#cfn-comprehend-documentclassifier-documentreaderconfig-documentreadaction
         */
        readonly documentReadAction: string;
        /**
         * Determines the text extraction actions for PDF files. Enter one of the following values:.
         *
         * - `SERVICE_DEFAULT` - use the Amazon Comprehend service defaults for PDF files.
         * - `FORCE_DOCUMENT_READ_ACTION` - Amazon Comprehend uses the Textract API specified by DocumentReadAction for all PDF files, including digital PDF files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentreaderconfig.html#cfn-comprehend-documentclassifier-documentreaderconfig-documentreadmode
         */
        readonly documentReadMode?: string;
        /**
         * Specifies the type of Amazon Textract features to apply.
         *
         * If you chose `TEXTRACT_ANALYZE_DOCUMENT` as the read action, you must specify one or both of the following values:
         *
         * - `TABLES` - Returns additional information about any tables that are detected in the input document.
         * - `FORMS` - Returns additional information about any forms that are detected in the input document.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentreaderconfig.html#cfn-comprehend-documentclassifier-documentreaderconfig-featuretypes
         */
        readonly featureTypes?: Array<string>;
    }
    /**
     * The location of the training documents.
     *
     * This parameter is required in a request to create a semi-structured document classification model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifierdocuments.html
     */
    interface DocumentClassifierDocumentsProperty {
        /**
         * The S3 URI location of the training documents specified in the S3Uri CSV file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifierdocuments.html#cfn-comprehend-documentclassifier-documentclassifierdocuments-s3uri
         */
        readonly s3Uri: string;
        /**
         * The S3 URI location of the test documents included in the TestS3Uri CSV file.
         *
         * This field is not required if you do not specify a test CSV file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifierdocuments.html#cfn-comprehend-documentclassifier-documentclassifierdocuments-tests3uri
         */
        readonly testS3Uri?: string;
    }
    /**
     * An augmented manifest file that provides training data for your custom model.
     *
     * An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-augmentedmanifestslistitem.html
     */
    interface AugmentedManifestsListItemProperty {
        /**
         * The JSON attribute that contains the annotations for your training documents.
         *
         * The number of attribute names that you specify depends on whether your augmented manifest file is the output of a single labeling job or a chained labeling job.
         *
         * If your file is the output of a single labeling job, specify the LabelAttributeName key that was used when the job was created in Ground Truth.
         *
         * If your file is the output of a chained labeling job, specify the LabelAttributeName key for one or more jobs in the chain. Each LabelAttributeName key provides the annotations from an individual job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-augmentedmanifestslistitem.html#cfn-comprehend-documentclassifier-augmentedmanifestslistitem-attributenames
         */
        readonly attributeNames: Array<string>;
        /**
         * The Amazon S3 location of the augmented manifest file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-augmentedmanifestslistitem.html#cfn-comprehend-documentclassifier-augmentedmanifestslistitem-s3uri
         */
        readonly s3Uri: string;
        /**
         * The purpose of the data you've provided in the augmented manifest.
         *
         * You can either train or test this data. If you don't specify, the default is train.
         *
         * TRAIN - all of the documents in the manifest will be used for training. If no test documents are provided, Amazon Comprehend will automatically reserve a portion of the training documents for testing.
         *
         * TEST - all of the documents in the manifest will be used for testing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-augmentedmanifestslistitem.html#cfn-comprehend-documentclassifier-augmentedmanifestslistitem-split
         */
        readonly split?: string;
    }
}
/**
 * Properties for defining a `CfnDocumentClassifier`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html
 */
export interface CfnDocumentClassifierProps {
    /**
     * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-dataaccessrolearn
     */
    readonly dataAccessRoleArn: string;
    /**
     * The name of the document classifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-documentclassifiername
     */
    readonly documentClassifierName: string;
    /**
     * Specifies the format and location of the input data for the job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-inputdataconfig
     */
    readonly inputDataConfig: CfnDocumentClassifier.DocumentClassifierInputDataConfigProperty | cdk.IResolvable;
    /**
     * The language of the input documents.
     *
     * You can specify any of the languages supported by Amazon Comprehend. All documents must be in the same language.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-languagecode
     */
    readonly languageCode: string;
    /**
     * Indicates the mode in which the classifier will be trained.
     *
     * The classifier can be trained in multi-class (single-label) mode or multi-label mode. Multi-class mode identifies a single class label for each document and multi-label mode identifies one or more class labels for each document. Multiple labels for an individual document are separated by a delimiter. The default delimiter between labels is a pipe (|).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-mode
     */
    readonly mode?: string;
    /**
     * ID for the AWS KMS key that Amazon Comprehend uses to encrypt trained custom models.
     *
     * The ModelKmsKeyId can be either of the following formats:
     *
     * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
     * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-modelkmskeyid
     */
    readonly modelKmsKeyId?: string;
    /**
     * The resource-based policy to attach to your custom document classifier model.
     *
     * You can use this policy to allow another AWS account to import your custom model.
     *
     * Provide your policy as a JSON body that you enter as a UTF-8 encoded string without line breaks. To provide valid JSON, enclose the attribute names and values in double quotes. If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are inside the policy:
     *
     * `"{\"attribute\": \"value\", \"attribute\": [\"value\"]}"`
     *
     * To avoid escaping quotes, you can use single quotes to enclose the policy and double quotes to enclose the JSON names and values:
     *
     * `'{"attribute": "value", "attribute": ["value"]}'`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-modelpolicy
     */
    readonly modelPolicy?: string;
    /**
     * Provides output results configuration parameters for custom classifier jobs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-outputdataconfig
     */
    readonly outputDataConfig?: CfnDocumentClassifier.DocumentClassifierOutputDataConfigProperty | cdk.IResolvable;
    /**
     * Tags to associate with the document classifier.
     *
     * A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The version name given to the newly created classifier.
     *
     * Version names can have a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version name must be unique among all models with the same classifier name in the AWS account / AWS Region .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-versionname
     */
    readonly versionName?: string;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job.
     *
     * The VolumeKmsKeyId can be either of the following formats:
     *
     * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
     * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-volumekmskeyid
     */
    readonly volumeKmsKeyId?: string;
    /**
     * Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your custom classifier.
     *
     * For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-vpcconfig
     */
    readonly vpcConfig?: cdk.IResolvable | CfnDocumentClassifier.VpcConfigProperty;
}
/**
 * A flywheel is an AWS resource that orchestrates the ongoing training of a model for custom classification or custom entity recognition.
 *
 * You can create a flywheel to start with an existing trained model, or Comprehend can create and train a new model.
 *
 * When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training data and test data for all versions of the model.
 *
 * To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's training data and test data into the flywheel's data lake.
 *
 * To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data) when you create the flywheel.
 *
 * For more information about flywheels, see [Flywheel overview](https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html) in the *Amazon Comprehend Developer Guide* .
 *
 * @cloudformationResource AWS::Comprehend::Flywheel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-flywheel.html
 */
export declare class CfnFlywheel extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFlywheel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFlywheel;
    /**
     * The Amazon Resource Name (ARN) of the flywheel.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The Amazon Resource Number (ARN) of the active model version.
     */
    activeModelArn?: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to access the flywheel data.
     */
    dataAccessRoleArn: string;
    /**
     * Amazon S3 URI of the data lake location.
     */
    dataLakeS3Uri: string;
    /**
     * Data security configuration.
     */
    dataSecurityConfig?: CfnFlywheel.DataSecurityConfigProperty | cdk.IResolvable;
    /**
     * Name for the flywheel.
     */
    flywheelName: string;
    /**
     * Model type of the flywheel's model.
     */
    modelType?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags associated with the endpoint being created.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Configuration about the model associated with a flywheel.
     */
    taskConfig?: cdk.IResolvable | CfnFlywheel.TaskConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFlywheelProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFlywheel {
    /**
     * Configuration about the model associated with a flywheel.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-taskconfig.html
     */
    interface TaskConfigProperty {
        /**
         * Configuration required for a document classification model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-taskconfig.html#cfn-comprehend-flywheel-taskconfig-documentclassificationconfig
         */
        readonly documentClassificationConfig?: CfnFlywheel.DocumentClassificationConfigProperty | cdk.IResolvable;
        /**
         * Configuration required for an entity recognition model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-taskconfig.html#cfn-comprehend-flywheel-taskconfig-entityrecognitionconfig
         */
        readonly entityRecognitionConfig?: CfnFlywheel.EntityRecognitionConfigProperty | cdk.IResolvable;
        /**
         * Language code for the language that the model supports.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-taskconfig.html#cfn-comprehend-flywheel-taskconfig-languagecode
         */
        readonly languageCode: string;
    }
    /**
     * Configuration required for a document classification model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-documentclassificationconfig.html
     */
    interface DocumentClassificationConfigProperty {
        /**
         * One or more labels to associate with the custom classifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-documentclassificationconfig.html#cfn-comprehend-flywheel-documentclassificationconfig-labels
         */
        readonly labels?: Array<string>;
        /**
         * Classification mode indicates whether the documents are `MULTI_CLASS` or `MULTI_LABEL` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-documentclassificationconfig.html#cfn-comprehend-flywheel-documentclassificationconfig-mode
         */
        readonly mode: string;
    }
    /**
     * Configuration required for an entity recognition model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-entityrecognitionconfig.html
     */
    interface EntityRecognitionConfigProperty {
        /**
         * Up to 25 entity types that the model is trained to recognize.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-entityrecognitionconfig.html#cfn-comprehend-flywheel-entityrecognitionconfig-entitytypes
         */
        readonly entityTypes?: Array<CfnFlywheel.EntityTypesListItemProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom entity recognizer.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-entitytypeslistitem.html
     */
    interface EntityTypesListItemProperty {
        /**
         * An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom entity recognizer.
         *
         * Entity types must not contain the following invalid characters: \n (line break), \\n (escaped line break, \r (carriage return), \\r (escaped carriage return), \t (tab), \\t (escaped tab), and , (comma).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-entitytypeslistitem.html#cfn-comprehend-flywheel-entitytypeslistitem-type
         */
        readonly type: string;
    }
    /**
     * Data security configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-datasecurityconfig.html
     */
    interface DataSecurityConfigProperty {
        /**
         * ID for the AWS KMS key that Amazon Comprehend uses to encrypt the data in the data lake.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-datasecurityconfig.html#cfn-comprehend-flywheel-datasecurityconfig-datalakekmskeyid
         */
        readonly dataLakeKmsKeyId?: string;
        /**
         * ID for the AWS KMS key that Amazon Comprehend uses to encrypt trained custom models.
         *
         * The ModelKmsKeyId can be either of the following formats:
         *
         * - KMS Key ID: `"1234abcd-12ab-34cd-56ef-1234567890ab"`
         * - Amazon Resource Name (ARN) of a KMS Key: `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-datasecurityconfig.html#cfn-comprehend-flywheel-datasecurityconfig-modelkmskeyid
         */
        readonly modelKmsKeyId?: string;
        /**
         * ID for the AWS KMS key that Amazon Comprehend uses to encrypt the volume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-datasecurityconfig.html#cfn-comprehend-flywheel-datasecurityconfig-volumekmskeyid
         */
        readonly volumeKmsKeyId?: string;
        /**
         * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job.
         *
         * For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-datasecurityconfig.html#cfn-comprehend-flywheel-datasecurityconfig-vpcconfig
         */
        readonly vpcConfig?: cdk.IResolvable | CfnFlywheel.VpcConfigProperty;
    }
    /**
     * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job.
     *
     * For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-vpcconfig.html
     */
    interface VpcConfigProperty {
        /**
         * The ID number for a security group on an instance of your private VPC.
         *
         * Security groups on your VPC function serve as a virtual firewall to control inbound and outbound traffic and provides security for the resources that you’ll be accessing on the VPC. This ID number is preceded by "sg-", for instance: "sg-03b388029b0a285ea". For more information, see [Security Groups for your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-vpcconfig.html#cfn-comprehend-flywheel-vpcconfig-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * The ID for each subnet being used in your private VPC.
         *
         * This subnet is a subset of the a range of IPv4 addresses used by the VPC and is specific to a given availability zone in the VPC’s Region. This ID number is preceded by "subnet-", for instance: "subnet-04ccf456919e69055". For more information, see [VPCs and Subnets](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-vpcconfig.html#cfn-comprehend-flywheel-vpcconfig-subnets
         */
        readonly subnets: Array<string>;
    }
}
/**
 * Properties for defining a `CfnFlywheel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-flywheel.html
 */
export interface CfnFlywheelProps {
    /**
     * The Amazon Resource Number (ARN) of the active model version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-flywheel.html#cfn-comprehend-flywheel-activemodelarn
     */
    readonly activeModelArn?: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to access the flywheel data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-flywheel.html#cfn-comprehend-flywheel-dataaccessrolearn
     */
    readonly dataAccessRoleArn: string;
    /**
     * Amazon S3 URI of the data lake location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-flywheel.html#cfn-comprehend-flywheel-datalakes3uri
     */
    readonly dataLakeS3Uri: string;
    /**
     * Data security configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-flywheel.html#cfn-comprehend-flywheel-datasecurityconfig
     */
    readonly dataSecurityConfig?: CfnFlywheel.DataSecurityConfigProperty | cdk.IResolvable;
    /**
     * Name for the flywheel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-flywheel.html#cfn-comprehend-flywheel-flywheelname
     */
    readonly flywheelName: string;
    /**
     * Model type of the flywheel's model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-flywheel.html#cfn-comprehend-flywheel-modeltype
     */
    readonly modelType?: string;
    /**
     * Tags associated with the endpoint being created.
     *
     * A tag is a key-value pair that adds metadata to the endpoint. For example, a tag with "Sales" as the key might be added to an endpoint to indicate its use by the sales department.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-flywheel.html#cfn-comprehend-flywheel-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Configuration about the model associated with a flywheel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-flywheel.html#cfn-comprehend-flywheel-taskconfig
     */
    readonly taskConfig?: cdk.IResolvable | CfnFlywheel.TaskConfigProperty;
}
