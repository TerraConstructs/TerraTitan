import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Specifies a capacity reservation with the provided name and number of requested data processing units.
 *
 * @cloudformationResource AWS::Athena::CapacityReservation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-capacityreservation.html
 */
export declare class CfnCapacityReservation extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCapacityReservation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCapacityReservation;
    /**
     * The number of data processing units currently allocated.
     *
     * @cloudformationAttribute AllocatedDpus
     */
    readonly attrAllocatedDpus: number;
    /**
     * The ARN of the capacity reservation.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The time in UTC epoch millis when the capacity reservation was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The time of the most recent capacity allocation that succeeded.
     *
     * @cloudformationAttribute LastSuccessfulAllocationTime
     */
    readonly attrLastSuccessfulAllocationTime: string;
    /**
     * The status of the capacity reservation.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Assigns Athena workgroups (and hence their queries) to capacity reservations.
     */
    capacityAssignmentConfiguration?: CfnCapacityReservation.CapacityAssignmentConfigurationProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of the capacity reservation.
     */
    name: string;
    /**
     * An array of key-value pairs to apply to the capacity reservation.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The number of data processing units requested.
     */
    targetDpus: number;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCapacityReservationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCapacityReservation {
    /**
     * Assigns Athena workgroups (and hence their queries) to capacity reservations.
     *
     * A capacity reservation can have only one capacity assignment configuration, but the capacity assignment configuration can be made up of multiple individual assignments. Each assignment specifies how Athena queries can consume capacity from the capacity reservation that their workgroup is mapped to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-capacityreservation-capacityassignmentconfiguration.html
     */
    interface CapacityAssignmentConfigurationProperty {
        /**
         * The list of assignments that make up the capacity assignment configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-capacityreservation-capacityassignmentconfiguration.html#cfn-athena-capacityreservation-capacityassignmentconfiguration-capacityassignments
         */
        readonly capacityAssignments: Array<CfnCapacityReservation.CapacityAssignmentProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * A mapping between one or more workgroups and a capacity reservation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-capacityreservation-capacityassignment.html
     */
    interface CapacityAssignmentProperty {
        /**
         * The list of workgroup names for the capacity assignment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-capacityreservation-capacityassignment.html#cfn-athena-capacityreservation-capacityassignment-workgroupnames
         */
        readonly workgroupNames: Array<string>;
    }
}
/**
 * Properties for defining a `CfnCapacityReservation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-capacityreservation.html
 */
export interface CfnCapacityReservationProps {
    /**
     * Assigns Athena workgroups (and hence their queries) to capacity reservations.
     *
     * A capacity reservation can have only one capacity assignment configuration, but the capacity assignment configuration can be made up of multiple individual assignments. Each assignment specifies how Athena queries can consume capacity from the capacity reservation that their workgroup is mapped to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-capacityreservation.html#cfn-athena-capacityreservation-capacityassignmentconfiguration
     */
    readonly capacityAssignmentConfiguration?: CfnCapacityReservation.CapacityAssignmentConfigurationProperty | cdk.IResolvable;
    /**
     * The name of the capacity reservation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-capacityreservation.html#cfn-athena-capacityreservation-name
     */
    readonly name: string;
    /**
     * An array of key-value pairs to apply to the capacity reservation.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-capacityreservation.html#cfn-athena-capacityreservation-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The number of data processing units requested.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-capacityreservation.html#cfn-athena-capacityreservation-targetdpus
     */
    readonly targetDpus: number;
}
/**
 * The AWS::Athena::DataCatalog resource specifies an Amazon Athena data catalog, which contains a name, description, type, parameters, and tags.
 *
 * For more information, see [DataCatalog](https://docs.aws.amazon.com/athena/latest/APIReference/API_DataCatalog.html) in the *Amazon Athena API Reference* .
 *
 * @cloudformationResource AWS::Athena::DataCatalog
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html
 */
export declare class CfnDataCatalog extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataCatalog from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataCatalog;
    /**
     * A description of the data catalog.
     */
    description?: string;
    /**
     * The name of the data catalog.
     */
    name: string;
    /**
     * Specifies the Lambda function or functions to use for the data catalog.
     */
    parameters?: cdk.IResolvable | Record<string, string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags (key-value pairs) to associate with this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The type of data catalog: `LAMBDA` for a federated catalog, `GLUE` for AWS Glue Catalog, or `HIVE` for an external hive metastore.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDataCatalogProps);
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
 * Properties for defining a `CfnDataCatalog`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html
 */
export interface CfnDataCatalogProps {
    /**
     * A description of the data catalog.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-description
     */
    readonly description?: string;
    /**
     * The name of the data catalog.
     *
     * The catalog name must be unique for the AWS account and can use a maximum of 128 alphanumeric, underscore, at sign, or hyphen characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-name
     */
    readonly name: string;
    /**
     * Specifies the Lambda function or functions to use for the data catalog.
     *
     * The mapping used depends on the catalog type.
     *
     * - The `HIVE` data catalog type uses the following syntax. The `metadata-function` parameter is required. `The sdk-version` parameter is optional and defaults to the currently supported version.
     *
     * `metadata-function= *lambda_arn* , sdk-version= *version_number*`
     * - The `LAMBDA` data catalog type uses one of the following sets of required parameters, but not both.
     *
     * - When one Lambda function processes metadata and another Lambda function reads data, the following syntax is used. Both parameters are required.
     *
     * `metadata-function= *lambda_arn* , record-function= *lambda_arn*`
     * - A composite Lambda function that processes both metadata and data uses the following syntax.
     *
     * `function= *lambda_arn*`
     * - The `GLUE` type takes a catalog ID parameter and is required. The `*catalog_id*` is the account ID of the AWS account to which the Glue catalog belongs.
     *
     * `catalog-id= *catalog_id*`
     *
     * - The `GLUE` data catalog type also applies to the default `AwsDataCatalog` that already exists in your account, of which you can have only one and cannot modify.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-parameters
     */
    readonly parameters?: cdk.IResolvable | Record<string, string>;
    /**
     * The tags (key-value pairs) to associate with this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The type of data catalog: `LAMBDA` for a federated catalog, `GLUE` for AWS Glue Catalog, or `HIVE` for an external hive metastore.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-type
     */
    readonly type: string;
}
/**
 * The `AWS::Athena::NamedQuery` resource specifies an Amazon Athena saved query, where `QueryString` contains the SQL query statements that make up the query.
 *
 * @cloudformationResource AWS::Athena::NamedQuery
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html
 */
export declare class CfnNamedQuery extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnNamedQuery from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnNamedQuery;
    /**
     * The unique ID of the query.
     *
     * @cloudformationAttribute NamedQueryId
     */
    readonly attrNamedQueryId: string;
    /**
     * The database to which the query belongs.
     */
    database: string;
    /**
     * The query description.
     */
    description?: string;
    /**
     * The query name.
     */
    name?: string;
    /**
     * The SQL statements that make up the query.
     */
    queryString: string;
    /**
     * The name of the workgroup that contains the named query.
     */
    workGroup?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnNamedQueryProps);
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
 * Properties for defining a `CfnNamedQuery`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html
 */
export interface CfnNamedQueryProps {
    /**
     * The database to which the query belongs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html#cfn-athena-namedquery-database
     */
    readonly database: string;
    /**
     * The query description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html#cfn-athena-namedquery-description
     */
    readonly description?: string;
    /**
     * The query name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html#cfn-athena-namedquery-name
     */
    readonly name?: string;
    /**
     * The SQL statements that make up the query.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html#cfn-athena-namedquery-querystring
     */
    readonly queryString: string;
    /**
     * The name of the workgroup that contains the named query.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html#cfn-athena-namedquery-workgroup
     */
    readonly workGroup?: string;
}
/**
 * Specifies a prepared statement for use with SQL queries in Athena.
 *
 * @cloudformationResource AWS::Athena::PreparedStatement
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-preparedstatement.html
 */
export declare class CfnPreparedStatement extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPreparedStatement from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPreparedStatement;
    /**
     * The description of the prepared statement.
     */
    description?: string;
    /**
     * The query string for the prepared statement.
     */
    queryStatement: string;
    /**
     * The name of the prepared statement.
     */
    statementName: string;
    /**
     * The workgroup to which the prepared statement belongs.
     */
    workGroup: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPreparedStatementProps);
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
 * Properties for defining a `CfnPreparedStatement`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-preparedstatement.html
 */
export interface CfnPreparedStatementProps {
    /**
     * The description of the prepared statement.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-preparedstatement.html#cfn-athena-preparedstatement-description
     */
    readonly description?: string;
    /**
     * The query string for the prepared statement.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-preparedstatement.html#cfn-athena-preparedstatement-querystatement
     */
    readonly queryStatement: string;
    /**
     * The name of the prepared statement.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-preparedstatement.html#cfn-athena-preparedstatement-statementname
     */
    readonly statementName: string;
    /**
     * The workgroup to which the prepared statement belongs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-preparedstatement.html#cfn-athena-preparedstatement-workgroup
     */
    readonly workGroup: string;
}
/**
 * The AWS::Athena::WorkGroup resource specifies an Amazon Athena workgroup, which contains a name, description, creation time, state, and other configuration, listed under `WorkGroupConfiguration` .
 *
 * Each workgroup enables you to isolate queries for you or your group from other queries in the same account. For more information, see [CreateWorkGroup](https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateWorkGroup.html) in the *Amazon Athena API Reference* .
 *
 * @cloudformationResource AWS::Athena::WorkGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html
 */
export declare class CfnWorkGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWorkGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWorkGroup;
    /**
     * The date and time the workgroup was created, as a UNIX timestamp in seconds. For example: `1582761016` .
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * Read only. The engine version on which the query runs. If the user requests a valid engine version other than Auto, the effective engine version is the same as the engine version that the user requested. If the user requests Auto, the effective engine version is chosen by Athena. When a request to update the engine version is made by a CreateWorkGroup or UpdateWorkGroup operation, the EffectiveEngineVersion field is ignored.
     *
     * @cloudformationAttribute WorkGroupConfiguration.EngineVersion.EffectiveEngineVersion
     */
    readonly attrWorkGroupConfigurationEngineVersionEffectiveEngineVersion: string;
    /**
     * Read only. The engine version on which the query runs. If the user requests a valid engine version other than Auto, the effective engine version is the same as the engine version that the user requested. If the user requests Auto, the effective engine version is chosen by Athena. When a request to update the engine version is made by a `CreateWorkGroup` or `UpdateWorkGroup` operation, the `EffectiveEngineVersion` field is ignored.
     *
     * @cloudformationAttribute WorkGroupConfigurationUpdates.EngineVersion.EffectiveEngineVersion
     */
    readonly attrWorkGroupConfigurationUpdatesEngineVersionEffectiveEngineVersion: string;
    /**
     * The workgroup description.
     */
    description?: string;
    /**
     * The workgroup name.
     */
    name: string;
    /**
     * The option to delete a workgroup and its contents even if the workgroup contains any named queries.
     */
    recursiveDeleteOption?: boolean | cdk.IResolvable;
    /**
     * The state of the workgroup: ENABLED or DISABLED.
     */
    state?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags (key-value pairs) to associate with this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether Amazon CloudWatch Metrics are enabled for the workgroup, and the limit for the amount of bytes scanned (cutoff) per query, if it is specified.
     */
    workGroupConfiguration?: cdk.IResolvable | CfnWorkGroup.WorkGroupConfigurationProperty;
    /**
     * The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified.
     *
     * @deprecated this property has been deprecated
     */
    workGroupConfigurationUpdates?: cdk.IResolvable | CfnWorkGroup.WorkGroupConfigurationUpdatesProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnWorkGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnWorkGroup {
    /**
     * The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether Amazon CloudWatch Metrics are enabled for the workgroup, and the limit for the amount of bytes scanned (cutoff) per query, if it is specified.
     *
     * The `EnforceWorkGroupConfiguration` option determines whether workgroup settings override client-side query settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html
     */
    interface WorkGroupConfigurationProperty {
        /**
         * Specifies a user defined JSON string that is passed to the session engine.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html#cfn-athena-workgroup-workgroupconfiguration-additionalconfiguration
         */
        readonly additionalConfiguration?: string;
        /**
         * The upper limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.
         *
         * No default is defined.
         *
         * > This property currently supports integer types. Support for long values is planned.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html#cfn-athena-workgroup-workgroupconfiguration-bytesscannedcutoffperquery
         */
        readonly bytesScannedCutoffPerQuery?: number;
        /**
         * Specifies the KMS key that is used to encrypt the user's data stores in Athena.
         *
         * This setting does not apply to Athena SQL workgroups.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html#cfn-athena-workgroup-workgroupconfiguration-customercontentencryptionconfiguration
         */
        readonly customerContentEncryptionConfiguration?: CfnWorkGroup.CustomerContentEncryptionConfigurationProperty | cdk.IResolvable;
        /**
         * If set to "true", the settings for the workgroup override client-side settings.
         *
         * If set to "false", client-side settings are used. For more information, see [Override client-side settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html#cfn-athena-workgroup-workgroupconfiguration-enforceworkgroupconfiguration
         */
        readonly enforceWorkGroupConfiguration?: boolean | cdk.IResolvable;
        /**
         * The engine version that all queries running on the workgroup use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html#cfn-athena-workgroup-workgroupconfiguration-engineversion
         */
        readonly engineVersion?: CfnWorkGroup.EngineVersionProperty | cdk.IResolvable;
        /**
         * Role used to access user resources in an Athena for Apache Spark session.
         *
         * This property applies only to Spark-enabled workgroups in Athena.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html#cfn-athena-workgroup-workgroupconfiguration-executionrole
         */
        readonly executionRole?: string;
        /**
         * Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html#cfn-athena-workgroup-workgroupconfiguration-publishcloudwatchmetricsenabled
         */
        readonly publishCloudWatchMetricsEnabled?: boolean | cdk.IResolvable;
        /**
         * If set to `true` , allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries.
         *
         * If set to `false` , workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error. The default is `false` . For more information about Requester Pays buckets, see [Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html#cfn-athena-workgroup-workgroupconfiguration-requesterpaysenabled
         */
        readonly requesterPaysEnabled?: boolean | cdk.IResolvable;
        /**
         * Specifies the location in Amazon S3 where query results are stored and the encryption option, if any, used for query results.
         *
         * For more information, see [Work with query results and recent queries](https://docs.aws.amazon.com/athena/latest/ug/querying.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html#cfn-athena-workgroup-workgroupconfiguration-resultconfiguration
         */
        readonly resultConfiguration?: cdk.IResolvable | CfnWorkGroup.ResultConfigurationProperty;
    }
    /**
     * The Athena engine version for running queries, or the PySpark engine version for running sessions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-engineversion.html
     */
    interface EngineVersionProperty {
        /**
         * Read only.
         *
         * The engine version on which the query runs. If the user requests a valid engine version other than Auto, the effective engine version is the same as the engine version that the user requested. If the user requests Auto, the effective engine version is chosen by Athena. When a request to update the engine version is made by a `CreateWorkGroup` or `UpdateWorkGroup` operation, the `EffectiveEngineVersion` field is ignored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-engineversion.html#cfn-athena-workgroup-engineversion-effectiveengineversion
         */
        readonly effectiveEngineVersion?: string;
        /**
         * The engine version requested by the user.
         *
         * Possible values are determined by the output of `ListEngineVersions` , including AUTO. The default is AUTO.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-engineversion.html#cfn-athena-workgroup-engineversion-selectedengineversion
         */
        readonly selectedEngineVersion?: string;
    }
    /**
     * The location in Amazon S3 where query and calculation results are stored and the encryption option, if any, used for query and calculation results.
     *
     * These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfiguration.html
     */
    interface ResultConfigurationProperty {
        /**
         * Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results.
         *
         * Currently the only supported canned ACL is `BUCKET_OWNER_FULL_CONTROL` . This is a client-side setting. If workgroup settings override client-side settings, then the query uses the ACL configuration that is specified for the workgroup, and also uses the location for storing query results specified in the workgroup. See `EnforceWorkGroupConfiguration` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfiguration.html#cfn-athena-workgroup-resultconfiguration-aclconfiguration
         */
        readonly aclConfiguration?: CfnWorkGroup.AclConfigurationProperty | cdk.IResolvable;
        /**
         * If query results are encrypted in Amazon S3, indicates the encryption option used (for example, `SSE_KMS` or `CSE_KMS` ) and key information.
         *
         * This is a client-side setting. If workgroup settings override client-side settings, then the query uses the encryption configuration that is specified for the workgroup, and also uses the location for storing query results specified in the workgroup. See `EnforceWorkGroupConfiguration` and [Override client-side settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfiguration.html#cfn-athena-workgroup-resultconfiguration-encryptionconfiguration
         */
        readonly encryptionConfiguration?: CfnWorkGroup.EncryptionConfigurationProperty | cdk.IResolvable;
        /**
         * The account ID that you expect to be the owner of the Amazon S3 bucket specified by `ResultConfiguration:OutputLocation` .
         *
         * If set, Athena uses the value for `ExpectedBucketOwner` when it makes Amazon S3 calls to your specified output location. If the `ExpectedBucketOwner` account ID does not match the actual owner of the Amazon S3 bucket, the call fails with a permissions error.
         *
         * This is a client-side setting. If workgroup settings override client-side settings, then the query uses the `ExpectedBucketOwner` setting that is specified for the workgroup, and also uses the location for storing query results specified in the workgroup. See `EnforceWorkGroupConfiguration` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfiguration.html#cfn-athena-workgroup-resultconfiguration-expectedbucketowner
         */
        readonly expectedBucketOwner?: string;
        /**
         * The location in Amazon S3 where your query results are stored, such as `s3://path/to/query/bucket/` .
         *
         * To run a query, you must specify the query results location using either a client-side setting for individual queries or a location specified by the workgroup. If workgroup settings override client-side settings, then the query uses the location specified for the workgroup. If no query location is set, Athena issues an error. For more information, see [Work with query results and recent queries](https://docs.aws.amazon.com/athena/latest/ug/querying.html) and `EnforceWorkGroupConfiguration` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfiguration.html#cfn-athena-workgroup-resultconfiguration-outputlocation
         */
        readonly outputLocation?: string;
    }
    /**
     * If query results are encrypted in Amazon S3, indicates the encryption option used (for example, `SSE_KMS` or `CSE_KMS` ) and key information.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-encryptionconfiguration.html
     */
    interface EncryptionConfigurationProperty {
        /**
         * Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys ( `SSE_S3` ), server-side encryption with KMS-managed keys ( `SSE_KMS` ), or client-side encryption with KMS-managed keys ( `CSE_KMS` ) is used.
         *
         * If a query runs in a workgroup and the workgroup overrides client-side settings, then the workgroup's setting for encryption is used. It specifies whether query results must be encrypted, for all queries that run in this workgroup.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-encryptionconfiguration.html#cfn-athena-workgroup-encryptionconfiguration-encryptionoption
         */
        readonly encryptionOption: string;
        /**
         * For `SSE_KMS` and `CSE_KMS` , this is the KMS key ARN or ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-encryptionconfiguration.html#cfn-athena-workgroup-encryptionconfiguration-kmskey
         */
        readonly kmsKey?: string;
    }
    /**
     * Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results, including data files inserted by Athena as the result of statements like CTAS or INSERT INTO.
     *
     * When Athena stores query results in Amazon S3, the canned ACL is set with the `x-amz-acl` request header. For more information about S3 Object Ownership, see [Object Ownership settings](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html#object-ownership-overview) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-aclconfiguration.html
     */
    interface AclConfigurationProperty {
        /**
         * The Amazon S3 canned ACL that Athena should specify when storing query results, including data files inserted by Athena as the result of statements like CTAS or INSERT INTO.
         *
         * Currently the only supported canned ACL is `BUCKET_OWNER_FULL_CONTROL` . If a query runs in a workgroup and the workgroup overrides client-side settings, then the Amazon S3 canned ACL specified in the workgroup's settings is used for all queries that run in the workgroup. For more information about Amazon S3 canned ACLs, see [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl) in the *Amazon S3 User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-aclconfiguration.html#cfn-athena-workgroup-aclconfiguration-s3acloption
         */
        readonly s3AclOption: string;
    }
    /**
     * Specifies the customer managed KMS key that is used to encrypt the user's data stores in Athena.
     *
     * When an AWS managed key is used, this value is null. This setting does not apply to Athena SQL workgroups.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-customercontentencryptionconfiguration.html
     */
    interface CustomerContentEncryptionConfigurationProperty {
        /**
         * The customer managed KMS key that is used to encrypt the user's data stores in Athena.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-customercontentencryptionconfiguration.html#cfn-athena-workgroup-customercontentencryptionconfiguration-kmskey
         */
        readonly kmsKey: string;
    }
    /**
     * The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html
     */
    interface WorkGroupConfigurationUpdatesProperty {
        /**
         * Additional Configuration that are passed to Athena Spark Calculations running in this workgroup.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html#cfn-athena-workgroup-workgroupconfigurationupdates-additionalconfiguration
         */
        readonly additionalConfiguration?: string;
        /**
         * The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html#cfn-athena-workgroup-workgroupconfigurationupdates-bytesscannedcutoffperquery
         */
        readonly bytesScannedCutoffPerQuery?: number;
        /**
         * Indicates the KMS key for encrypting notebook content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html#cfn-athena-workgroup-workgroupconfigurationupdates-customercontentencryptionconfiguration
         */
        readonly customerContentEncryptionConfiguration?: CfnWorkGroup.CustomerContentEncryptionConfigurationProperty | cdk.IResolvable;
        /**
         * If set to "true", the settings for the workgroup override client-side settings.
         *
         * If set to "false", client-side settings are used
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html#cfn-athena-workgroup-workgroupconfigurationupdates-enforceworkgroupconfiguration
         */
        readonly enforceWorkGroupConfiguration?: boolean | cdk.IResolvable;
        /**
         * The Athena engine version for running queries.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html#cfn-athena-workgroup-workgroupconfigurationupdates-engineversion
         */
        readonly engineVersion?: CfnWorkGroup.EngineVersionProperty | cdk.IResolvable;
        /**
         * Execution Role ARN required to run Athena Spark Calculations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html#cfn-athena-workgroup-workgroupconfigurationupdates-executionrole
         */
        readonly executionRole?: string;
        /**
         * Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html#cfn-athena-workgroup-workgroupconfigurationupdates-publishcloudwatchmetricsenabled
         */
        readonly publishCloudWatchMetricsEnabled?: boolean | cdk.IResolvable;
        /**
         * Indicates that the data usage control limit per query is removed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html#cfn-athena-workgroup-workgroupconfigurationupdates-removebytesscannedcutoffperquery
         */
        readonly removeBytesScannedCutoffPerQuery?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html#cfn-athena-workgroup-workgroupconfigurationupdates-removecustomercontentencryptionconfiguration
         */
        readonly removeCustomerContentEncryptionConfiguration?: boolean | cdk.IResolvable;
        /**
         * If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries.
         *
         * If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html#cfn-athena-workgroup-workgroupconfigurationupdates-requesterpaysenabled
         */
        readonly requesterPaysEnabled?: boolean | cdk.IResolvable;
        /**
         * The result configuration information about the queries in this workgroup that will be updated.
         *
         * Includes the updated results location and an updated option for encrypting query results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html#cfn-athena-workgroup-workgroupconfigurationupdates-resultconfigurationupdates
         */
        readonly resultConfigurationUpdates?: cdk.IResolvable | CfnWorkGroup.ResultConfigurationUpdatesProperty;
    }
    /**
     * The information about the updates in the query results, such as output location and encryption configuration for the query results.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfigurationupdates.html
     */
    interface ResultConfigurationUpdatesProperty {
        /**
         * The ACL configuration for the query results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfigurationupdates.html#cfn-athena-workgroup-resultconfigurationupdates-aclconfiguration
         */
        readonly aclConfiguration?: CfnWorkGroup.AclConfigurationProperty | cdk.IResolvable;
        /**
         * The encryption configuration for the query results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfigurationupdates.html#cfn-athena-workgroup-resultconfigurationupdates-encryptionconfiguration
         */
        readonly encryptionConfiguration?: CfnWorkGroup.EncryptionConfigurationProperty | cdk.IResolvable;
        /**
         * The AWS account ID that you expect to be the owner of the Amazon S3 bucket specified by `ResultConfiguration$OutputLocation` .
         *
         * If set, Athena uses the value for `ExpectedBucketOwner` when it makes Amazon S3 calls to your specified output location. If the `ExpectedBucketOwner` AWS account ID does not match the actual owner of the Amazon S3 bucket, the call fails with a permissions error.
         *
         * If workgroup settings override client-side settings, then the query uses the `ExpectedBucketOwner` setting that is specified for the workgroup, and also uses the location for storing query results specified in the workgroup. See `WorkGroupConfiguration$EnforceWorkGroupConfiguration` and [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfigurationupdates.html#cfn-athena-workgroup-resultconfigurationupdates-expectedbucketowner
         */
        readonly expectedBucketOwner?: string;
        /**
         * The location in Amazon S3 where your query results are stored, such as `s3://path/to/query/bucket/` .
         *
         * For more information, see [Query Results](https://docs.aws.amazon.com/athena/latest/ug/querying.html) If workgroup settings override client-side settings, then the query uses the location for the query results and the encryption configuration that are specified for the workgroup. The "workgroup settings override" is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See `EnforceWorkGroupConfiguration` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfigurationupdates.html#cfn-athena-workgroup-resultconfigurationupdates-outputlocation
         */
        readonly outputLocation?: string;
        /**
         * If set to `true` , indicates that the previously-specified ACL configuration for queries in this workgroup should be ignored and set to null.
         *
         * If set to `false` or not set, and a value is present in the `AclConfiguration` of `ResultConfigurationUpdates` , the `AclConfiguration` in the workgroup's `ResultConfiguration` is updated with the new value. For more information, see [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfigurationupdates.html#cfn-athena-workgroup-resultconfigurationupdates-removeaclconfiguration
         */
        readonly removeAclConfiguration?: boolean | cdk.IResolvable;
        /**
         * If set to "true", indicates that the previously-specified encryption configuration (also known as the client-side setting) for queries in this workgroup should be ignored and set to null.
         *
         * If set to "false" or not set, and a value is present in the EncryptionConfiguration in ResultConfigurationUpdates (the client-side setting), the EncryptionConfiguration in the workgroup's ResultConfiguration will be updated with the new value. For more information, see [Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfigurationupdates.html#cfn-athena-workgroup-resultconfigurationupdates-removeencryptionconfiguration
         */
        readonly removeEncryptionConfiguration?: boolean | cdk.IResolvable;
        /**
         * If set to "true", removes the AWS account ID previously specified for `ResultConfiguration$ExpectedBucketOwner` .
         *
         * If set to "false" or not set, and a value is present in the `ExpectedBucketOwner` in `ResultConfigurationUpdates` (the client-side setting), the `ExpectedBucketOwner` in the workgroup's `ResultConfiguration` is updated with the new value. For more information, see [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfigurationupdates.html#cfn-athena-workgroup-resultconfigurationupdates-removeexpectedbucketowner
         */
        readonly removeExpectedBucketOwner?: boolean | cdk.IResolvable;
        /**
         * If set to "true", indicates that the previously-specified query results location (also known as a client-side setting) for queries in this workgroup should be ignored and set to null.
         *
         * If set to "false" or not set, and a value is present in the OutputLocation in ResultConfigurationUpdates (the client-side setting), the OutputLocation in the workgroup's ResultConfiguration will be updated with the new value. For more information, see [Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfigurationupdates.html#cfn-athena-workgroup-resultconfigurationupdates-removeoutputlocation
         */
        readonly removeOutputLocation?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnWorkGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html
 */
export interface CfnWorkGroupProps {
    /**
     * The workgroup description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html#cfn-athena-workgroup-description
     */
    readonly description?: string;
    /**
     * The workgroup name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html#cfn-athena-workgroup-name
     */
    readonly name: string;
    /**
     * The option to delete a workgroup and its contents even if the workgroup contains any named queries.
     *
     * The default is false.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html#cfn-athena-workgroup-recursivedeleteoption
     */
    readonly recursiveDeleteOption?: boolean | cdk.IResolvable;
    /**
     * The state of the workgroup: ENABLED or DISABLED.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html#cfn-athena-workgroup-state
     */
    readonly state?: string;
    /**
     * The tags (key-value pairs) to associate with this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html#cfn-athena-workgroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether Amazon CloudWatch Metrics are enabled for the workgroup, and the limit for the amount of bytes scanned (cutoff) per query, if it is specified.
     *
     * The `EnforceWorkGroupConfiguration` option determines whether workgroup settings override client-side query settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html#cfn-athena-workgroup-workgroupconfiguration
     */
    readonly workGroupConfiguration?: cdk.IResolvable | CfnWorkGroup.WorkGroupConfigurationProperty;
    /**
     * The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified.
     *
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html#cfn-athena-workgroup-workgroupconfigurationupdates
     */
    readonly workGroupConfigurationUpdates?: cdk.IResolvable | CfnWorkGroup.WorkGroupConfigurationUpdatesProperty;
}
