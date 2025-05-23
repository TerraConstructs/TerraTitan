import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::DMS::Certificate` resource creates an Secure Sockets Layer (SSL) certificate that encrypts connections between AWS DMS endpoints and the replication instance.
 *
 * @cloudformationResource AWS::DMS::Certificate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-certificate.html
 */
export declare class CfnCertificate extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCertificate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCertificate;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A customer-assigned name for the certificate.
     */
    certificateIdentifier?: string;
    /**
     * The contents of a `.pem` file, which contains an X.509 certificate.
     */
    certificatePem?: string;
    /**
     * The location of an imported Oracle Wallet certificate for use with SSL.
     */
    certificateWallet?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnCertificateProps);
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
 * Properties for defining a `CfnCertificate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-certificate.html
 */
export interface CfnCertificateProps {
    /**
     * A customer-assigned name for the certificate.
     *
     * Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-certificate.html#cfn-dms-certificate-certificateidentifier
     */
    readonly certificateIdentifier?: string;
    /**
     * The contents of a `.pem` file, which contains an X.509 certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-certificate.html#cfn-dms-certificate-certificatepem
     */
    readonly certificatePem?: string;
    /**
     * The location of an imported Oracle Wallet certificate for use with SSL.
     *
     * An example is: `filebase64("${path.root}/rds-ca-2019-root.sso")`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-certificate.html#cfn-dms-certificate-certificatewallet
     */
    readonly certificateWallet?: string;
}
/**
 * The `AWS::DMS::Endpoint` resource specifies an AWS DMS endpoint.
 *
 * Currently, AWS CloudFormation supports all AWS DMS endpoint types.
 *
 * @cloudformationResource AWS::DMS::Endpoint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html
 */
export declare class CfnEndpoint extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEndpoint from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEndpoint;
    /**
     * A value that can be used for cross-account validation.
     *
     * @cloudformationAttribute ExternalId
     */
    readonly attrExternalId: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The Amazon Resource Name (ARN) for the certificate.
     */
    certificateArn?: string;
    /**
     * The name of the endpoint database.
     */
    databaseName?: string;
    /**
     * Settings in JSON format for the source and target DocumentDB endpoint.
     */
    docDbSettings?: CfnEndpoint.DocDbSettingsProperty | cdk.IResolvable;
    /**
     * Settings in JSON format for the target Amazon DynamoDB endpoint.
     */
    dynamoDbSettings?: CfnEndpoint.DynamoDbSettingsProperty | cdk.IResolvable;
    /**
     * Settings in JSON format for the target OpenSearch endpoint.
     */
    elasticsearchSettings?: CfnEndpoint.ElasticsearchSettingsProperty | cdk.IResolvable;
    /**
     * The database endpoint identifier.
     */
    endpointIdentifier?: string;
    /**
     * The type of endpoint.
     */
    endpointType: string;
    /**
     * The type of engine for the endpoint, depending on the `EndpointType` value.
     */
    engineName: string;
    /**
     * Additional attributes associated with the connection.
     */
    extraConnectionAttributes?: string;
    /**
     * Settings in JSON format for the source GCP MySQL endpoint.
     */
    gcpMySqlSettings?: CfnEndpoint.GcpMySQLSettingsProperty | cdk.IResolvable;
    /**
     * Settings in JSON format for the source IBM Db2 LUW endpoint.
     */
    ibmDb2Settings?: CfnEndpoint.IbmDb2SettingsProperty | cdk.IResolvable;
    /**
     * Settings in JSON format for the target Apache Kafka endpoint.
     */
    kafkaSettings?: cdk.IResolvable | CfnEndpoint.KafkaSettingsProperty;
    /**
     * Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams.
     */
    kinesisSettings?: cdk.IResolvable | CfnEndpoint.KinesisSettingsProperty;
    /**
     * An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.
     */
    kmsKeyId?: string;
    /**
     * Settings in JSON format for the source and target Microsoft SQL Server endpoint.
     */
    microsoftSqlServerSettings?: cdk.IResolvable | CfnEndpoint.MicrosoftSqlServerSettingsProperty;
    /**
     * Settings in JSON format for the source MongoDB endpoint.
     */
    mongoDbSettings?: cdk.IResolvable | CfnEndpoint.MongoDbSettingsProperty;
    /**
     * Settings in JSON format for the source and target MySQL endpoint.
     */
    mySqlSettings?: cdk.IResolvable | CfnEndpoint.MySqlSettingsProperty;
    /**
     * Settings in JSON format for the target Amazon Neptune endpoint.
     */
    neptuneSettings?: cdk.IResolvable | CfnEndpoint.NeptuneSettingsProperty;
    /**
     * Settings in JSON format for the source and target Oracle endpoint.
     */
    oracleSettings?: cdk.IResolvable | CfnEndpoint.OracleSettingsProperty;
    /**
     * The password to be used to log in to the endpoint database.
     */
    password?: string;
    /**
     * The port used by the endpoint database.
     */
    port?: number;
    /**
     * Settings in JSON format for the source and target PostgreSQL endpoint.
     */
    postgreSqlSettings?: cdk.IResolvable | CfnEndpoint.PostgreSqlSettingsProperty;
    /**
     * Settings in JSON format for the target Redis endpoint.
     */
    redisSettings?: cdk.IResolvable | CfnEndpoint.RedisSettingsProperty;
    /**
     * Settings in JSON format for the Amazon Redshift endpoint.
     */
    redshiftSettings?: cdk.IResolvable | CfnEndpoint.RedshiftSettingsProperty;
    /**
     * A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object.
     */
    resourceIdentifier?: string;
    /**
     * Settings in JSON format for the source and target Amazon S3 endpoint.
     */
    s3Settings?: cdk.IResolvable | CfnEndpoint.S3SettingsProperty;
    /**
     * The name of the server where the endpoint database resides.
     */
    serverName?: string;
    /**
     * The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is `none` .
     */
    sslMode?: string;
    /**
     * Settings in JSON format for the source and target SAP ASE endpoint.
     */
    sybaseSettings?: cdk.IResolvable | CfnEndpoint.SybaseSettingsProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * One or more tags to be assigned to the endpoint.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The user name to be used to log in to the endpoint database.
     */
    username?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEndpointProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEndpoint {
    /**
     * Provides information that defines a SAP ASE endpoint.
     *
     * This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For information about other available settings, see [Extra connection attributes when using SAP ASE as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SAP.html#CHAP_Source.SAP.ConnectionAttrib) and [Extra connection attributes when using SAP ASE as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SAP.html#CHAP_Target.SAP.ConnectionAttrib) in the *AWS Database Migration Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-sybasesettings.html
     */
    interface SybaseSettingsProperty {
        /**
         * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret` .
         *
         * The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the AWS Secrets Manager secret that allows access to the SAP ASE endpoint.
         *
         * > You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId` . Or you can specify clear-text values for `UserName` , `Password` , `ServerName` , and `Port` . You can't specify both.
         * >
         * > For more information on creating this `SecretsManagerSecret` , the corresponding `SecretsManagerAccessRoleArn` , and the `SecretsManagerSecretId` that is required to access it, see [Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *AWS Database Migration Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-sybasesettings.html#cfn-dms-endpoint-sybasesettings-secretsmanageraccessrolearn
         */
        readonly secretsManagerAccessRoleArn?: string;
        /**
         * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the SAP SAE endpoint connection details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-sybasesettings.html#cfn-dms-endpoint-sybasesettings-secretsmanagersecretid
         */
        readonly secretsManagerSecretId?: string;
    }
    /**
     * Provides information that defines a Redis target endpoint.
     *
     * This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For information about other available settings, see [Specifying endpoint settings for Redis as a target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Redis.html#CHAP_Target.Redis.EndpointSettings) in the *AWS Database Migration Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redissettings.html
     */
    interface RedisSettingsProperty {
        /**
         * The password provided with the `auth-role` and `auth-token` options of the `AuthType` setting for a Redis target endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redissettings.html#cfn-dms-endpoint-redissettings-authpassword
         */
        readonly authPassword?: string;
        /**
         * The type of authentication to perform when connecting to a Redis target.
         *
         * Options include `none` , `auth-token` , and `auth-role` . The `auth-token` option requires an `AuthPassword` value to be provided. The `auth-role` option requires `AuthUserName` and `AuthPassword` values to be provided.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redissettings.html#cfn-dms-endpoint-redissettings-authtype
         */
        readonly authType?: string;
        /**
         * The user name provided with the `auth-role` option of the `AuthType` setting for a Redis target endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redissettings.html#cfn-dms-endpoint-redissettings-authusername
         */
        readonly authUserName?: string;
        /**
         * Transmission Control Protocol (TCP) port for the endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redissettings.html#cfn-dms-endpoint-redissettings-port
         */
        readonly port?: number;
        /**
         * Fully qualified domain name of the endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redissettings.html#cfn-dms-endpoint-redissettings-servername
         */
        readonly serverName?: string;
        /**
         * The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to connect to your Redis target endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redissettings.html#cfn-dms-endpoint-redissettings-sslcacertificatearn
         */
        readonly sslCaCertificateArn?: string;
        /**
         * The connection to a Redis target endpoint using Transport Layer Security (TLS).
         *
         * Valid values include `plaintext` and `ssl-encryption` . The default is `ssl-encryption` . The `ssl-encryption` option makes an encrypted connection. Optionally, you can identify an Amazon Resource Name (ARN) for an SSL certificate authority (CA) using the `SslCaCertificateArn` setting. If an ARN isn't given for a CA, DMS uses the Amazon root CA.
         *
         * The `plaintext` option doesn't provide Transport Layer Security (TLS) encryption for traffic between endpoint and database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redissettings.html#cfn-dms-endpoint-redissettings-sslsecurityprotocol
         */
        readonly sslSecurityProtocol?: string;
    }
    /**
     * Provides information that defines an Oracle endpoint.
     *
     * This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For information about other available settings, see [Extra connection attributes when using Oracle as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.ConnectionAttrib) and [Extra connection attributes when using Oracle as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Oracle.html#CHAP_Target.Oracle.ConnectionAttrib) in the *AWS Database Migration Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html
     */
    interface OracleSettingsProperty {
        /**
         * Set this attribute to `false` in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.
         *
         * This tells the DMS instance to not access redo logs through any specified path prefix replacement using direct file access.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-accessalternatedirectly
         */
        readonly accessAlternateDirectly?: boolean | cdk.IResolvable;
        /**
         * Set this attribute with `ArchivedLogDestId` in a primary/ standby setup.
         *
         * This attribute is useful in the case of a switchover. In this case, AWS DMS needs to know which destination to get archive redo logs from to read changes. This need arises because the previous primary instance is now a standby instance after switchover.
         *
         * Although AWS DMS supports the use of the Oracle `RESETLOGS` option to open the database, never use `RESETLOGS` unless necessary. For additional information about `RESETLOGS` , see [RMAN Data Repair Concepts](https://docs.aws.amazon.com/https://docs.oracle.com/en/database/oracle/oracle-database/19/bradv/rman-data-repair-concepts.html#GUID-1805CCF7-4AF2-482D-B65A-998192F89C2B) in the *Oracle Database Backup and Recovery User's Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-additionalarchivedlogdestid
         */
        readonly additionalArchivedLogDestId?: number;
        /**
         * Set this attribute to set up table-level supplemental logging for the Oracle database.
         *
         * This attribute enables PRIMARY KEY supplemental logging on all tables selected for a migration task.
         *
         * If you use this option, you still need to enable database-level supplemental logging.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-addsupplementallogging
         */
        readonly addSupplementalLogging?: boolean | cdk.IResolvable;
        /**
         * Set this attribute to `true` to enable replication of Oracle tables containing columns that are nested tables or defined types.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-allowselectnestedtables
         */
        readonly allowSelectNestedTables?: boolean | cdk.IResolvable;
        /**
         * Specifies the ID of the destination for the archived redo logs.
         *
         * This value should be the same as a number in the dest_id column of the v$archived_log view. If you work with an additional redo log destination, use the `AdditionalArchivedLogDestId` option to specify the additional destination ID. Doing this improves performance by ensuring that the correct logs are accessed from the outset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-archivedlogdestid
         */
        readonly archivedLogDestId?: number;
        /**
         * When this field is set to `True` , AWS DMS only accesses the archived redo logs.
         *
         * If the archived redo logs are stored on Automatic Storage Management (ASM) only, the AWS DMS user account needs to be granted ASM privileges.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-archivedlogsonly
         */
        readonly archivedLogsOnly?: boolean | cdk.IResolvable;
        /**
         * For an Oracle source endpoint, your Oracle Automatic Storage Management (ASM) password.
         *
         * You can set this value from the `*asm_user_password*` value. You set this value as part of the comma-separated value that you set to the `Password` request parameter when you create the endpoint to access transaction logs using Binary Reader. For more information, see [Configuration for change data capture (CDC) on an Oracle source database](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-asmpassword
         */
        readonly asmPassword?: string;
        /**
         * For an Oracle source endpoint, your ASM server address.
         *
         * You can set this value from the `asm_server` value. You set `asm_server` as part of the extra connection attribute string to access an Oracle server with Binary Reader that uses ASM. For more information, see [Configuration for change data capture (CDC) on an Oracle source database](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-asmserver
         */
        readonly asmServer?: string;
        /**
         * For an Oracle source endpoint, your ASM user name.
         *
         * You can set this value from the `asm_user` value. You set `asm_user` as part of the extra connection attribute string to access an Oracle server with Binary Reader that uses ASM. For more information, see [Configuration for change data capture (CDC) on an Oracle source database](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-asmuser
         */
        readonly asmUser?: string;
        /**
         * Specifies whether the length of a character column is in bytes or in characters.
         *
         * To indicate that the character column length is in characters, set this attribute to `CHAR` . Otherwise, the character column length is in bytes.
         *
         * Example: `charLengthSemantics=CHAR;`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-charlengthsemantics
         */
        readonly charLengthSemantics?: string;
        /**
         * When set to `true` , this attribute helps to increase the commit rate on the Oracle target database by writing directly to tables and not writing a trail to database logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-directpathnolog
         */
        readonly directPathNoLog?: boolean | cdk.IResolvable;
        /**
         * When set to `true` , this attribute specifies a parallel load when `useDirectPathFullLoad` is set to `Y` .
         *
         * This attribute also only applies when you use the AWS DMS parallel load feature. Note that the target table cannot have any constraints or indexes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-directpathparallelload
         */
        readonly directPathParallelLoad?: boolean | cdk.IResolvable;
        /**
         * Set this attribute to enable homogenous tablespace replication and create existing tables or indexes under the same tablespace on the target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-enablehomogenoustablespace
         */
        readonly enableHomogenousTablespace?: boolean | cdk.IResolvable;
        /**
         * Specifies the IDs of one more destinations for one or more archived redo logs.
         *
         * These IDs are the values of the `dest_id` column in the `v$archived_log` view. Use this setting with the `archivedLogDestId` extra connection attribute in a primary-to-single setup or a primary-to-multiple-standby setup.
         *
         * This setting is useful in a switchover when you use an Oracle Data Guard database as a source. In this case, AWS DMS needs information about what destination to get archive redo logs from to read changes. AWS DMS needs this because after the switchover the previous primary is a standby instance. For example, in a primary-to-single standby setup you might apply the following settings.
         *
         * `archivedLogDestId=1; ExtraArchivedLogDestIds=[2]`
         *
         * In a primary-to-multiple-standby setup, you might apply the following settings.
         *
         * `archivedLogDestId=1; ExtraArchivedLogDestIds=[2,3,4]`
         *
         * Although AWS DMS supports the use of the Oracle `RESETLOGS` option to open the database, never use `RESETLOGS` unless it's necessary. For more information about `RESETLOGS` , see [RMAN Data Repair Concepts](https://docs.aws.amazon.com/https://docs.oracle.com/en/database/oracle/oracle-database/19/bradv/rman-data-repair-concepts.html#GUID-1805CCF7-4AF2-482D-B65A-998192F89C2B) in the *Oracle Database Backup and Recovery User's Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-extraarchivedlogdestids
         */
        readonly extraArchivedLogDestIds?: Array<number> | cdk.IResolvable;
        /**
         * When set to `true` , this attribute causes a task to fail if the actual size of an LOB column is greater than the specified `LobMaxSize` .
         *
         * If a task is set to limited LOB mode and this option is set to `true` , the task fails instead of truncating the LOB data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-failtasksonlobtruncation
         */
        readonly failTasksOnLobTruncation?: boolean | cdk.IResolvable;
        /**
         * Specifies the number scale.
         *
         * You can select a scale up to 38, or you can select FLOAT. By default, the NUMBER data type is converted to precision 38, scale 10.
         *
         * Example: `numberDataTypeScale=12`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-numberdatatypescale
         */
        readonly numberDatatypeScale?: number;
        /**
         * Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.
         *
         * This value specifies the default Oracle root used to access the redo logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-oraclepathprefix
         */
        readonly oraclePathPrefix?: string;
        /**
         * Set this attribute to change the number of threads that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM).
         *
         * You can specify an integer value between 2 (the default) and 8 (the maximum). Use this attribute together with the `readAheadBlocks` attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-parallelasmreadthreads
         */
        readonly parallelAsmReadThreads?: number;
        /**
         * Set this attribute to change the number of read-ahead blocks that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM).
         *
         * You can specify an integer value between 1000 (the default) and 200,000 (the maximum).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-readaheadblocks
         */
        readonly readAheadBlocks?: number;
        /**
         * When set to `true` , this attribute supports tablespace replication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-readtablespacename
         */
        readonly readTableSpaceName?: boolean | cdk.IResolvable;
        /**
         * Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.
         *
         * This setting tells DMS instance to replace the default Oracle root with the specified `usePathPrefix` setting to access the redo logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-replacepathprefix
         */
        readonly replacePathPrefix?: boolean | cdk.IResolvable;
        /**
         * Specifies the number of seconds that the system waits before resending a query.
         *
         * Example: `retryInterval=6;`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-retryinterval
         */
        readonly retryInterval?: number;
        /**
         * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret` .
         *
         * The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the AWS Secrets Manager secret that allows access to the Oracle endpoint.
         *
         * > You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId` . Or you can specify clear-text values for `UserName` , `Password` , `ServerName` , and `Port` . You can't specify both.
         * >
         * > For more information on creating this `SecretsManagerSecret` , the corresponding `SecretsManagerAccessRoleArn` , and the `SecretsManagerSecretId` that is required to access it, see [Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *AWS Database Migration Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-secretsmanageraccessrolearn
         */
        readonly secretsManagerAccessRoleArn?: string;
        /**
         * Required only if your Oracle endpoint uses Advanced Storage Manager (ASM).
         *
         * The full ARN of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the `SecretsManagerOracleAsmSecret` . This `SecretsManagerOracleAsmSecret` has the secret value that allows access to the Oracle ASM of the endpoint.
         *
         * > You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerOracleAsmSecretId` . Or you can specify clear-text values for `AsmUser` , `AsmPassword` , and `AsmServerName` . You can't specify both.
         * >
         * > For more information on creating this `SecretsManagerOracleAsmSecret` , the corresponding `SecretsManagerOracleAsmAccessRoleArn` , and the `SecretsManagerOracleAsmSecretId` that is required to access it, see [Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *AWS Database Migration Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-secretsmanageroracleasmaccessrolearn
         */
        readonly secretsManagerOracleAsmAccessRoleArn?: string;
        /**
         * Required only if your Oracle endpoint uses Advanced Storage Manager (ASM).
         *
         * The full ARN, partial ARN, or display name of the `SecretsManagerOracleAsmSecret` that contains the Oracle ASM connection details for the Oracle endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-secretsmanageroracleasmsecretid
         */
        readonly secretsManagerOracleAsmSecretId?: string;
        /**
         * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the Oracle endpoint connection details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-secretsmanagersecretid
         */
        readonly secretsManagerSecretId?: string;
        /**
         * For an Oracle source endpoint, the transparent data encryption (TDE) password required by AWM DMS to access Oracle redo logs encrypted by TDE using Binary Reader.
         *
         * It is also the `*TDE_Password*` part of the comma-separated value you set to the `Password` request parameter when you create the endpoint. The `SecurityDbEncryptian` setting is related to this `SecurityDbEncryptionName` setting. For more information, see [Supported encryption methods for using Oracle as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.Encryption) in the *AWS Database Migration Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-securitydbencryption
         */
        readonly securityDbEncryption?: string;
        /**
         * For an Oracle source endpoint, the name of a key used for the transparent data encryption (TDE) of the columns and tablespaces in an Oracle source database that is encrypted using TDE.
         *
         * The key value is the value of the `SecurityDbEncryption` setting. For more information on setting the key name value of `SecurityDbEncryptionName` , see the information and example for setting the `securityDbEncryptionName` extra connection attribute in [Supported encryption methods for using Oracle as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.Encryption) in the *AWS Database Migration Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-securitydbencryptionname
         */
        readonly securityDbEncryptionName?: string;
        /**
         * Use this attribute to convert `SDO_GEOMETRY` to `GEOJSON` format.
         *
         * By default, DMS calls the `SDO2GEOJSON` custom function if present and accessible. Or you can create your own custom function that mimics the operation of `SDOGEOJSON` and set `SpatialDataOptionToGeoJsonFunctionName` to call it instead.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-spatialdataoptiontogeojsonfunctionname
         */
        readonly spatialDataOptionToGeoJsonFunctionName?: string;
        /**
         * Use this attribute to specify a time in minutes for the delay in standby sync.
         *
         * If the source is an Oracle Active Data Guard standby database, use this attribute to specify the time lag between primary and standby databases.
         *
         * In AWS DMS , you can create an Oracle CDC task that uses an Active Data Guard standby instance as a source for replicating ongoing changes. Doing this eliminates the need to connect to an active database that might be in production.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-standbydelaytime
         */
        readonly standbyDelayTime?: number;
        /**
         * Set this attribute to `true` in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.
         *
         * This tells the DMS instance to use any specified prefix replacement to access all online redo logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-usealternatefolderforonline
         */
        readonly useAlternateFolderForOnline?: boolean | cdk.IResolvable;
        /**
         * Set this attribute to True to capture change data using the Binary Reader utility.
         *
         * Set `UseLogminerReader` to False to set this attribute to True. To use Binary Reader with Amazon RDS for Oracle as the source, you set additional attributes. For more information about using this setting with Oracle Automatic Storage Management (ASM), see [Using Oracle LogMiner or AWS DMS Binary Reader for CDC](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-usebfile
         */
        readonly useBFile?: boolean | cdk.IResolvable;
        /**
         * Set this attribute to True to have AWS DMS use a direct path full load.
         *
         * Specify this value to use the direct path protocol in the Oracle Call Interface (OCI). By using this OCI protocol, you can bulk-load Oracle target tables during a full load.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-usedirectpathfullload
         */
        readonly useDirectPathFullLoad?: boolean | cdk.IResolvable;
        /**
         * Set this attribute to True to capture change data using the Oracle LogMiner utility (the default).
         *
         * Set this attribute to False if you want to access the redo logs as a binary file. When you set `UseLogminerReader` to False, also set `UseBfile` to True. For more information on this setting and using Oracle ASM, see [Using Oracle LogMiner or AWS DMS Binary Reader for CDC](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC) in the *AWS DMS User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-uselogminerreader
         */
        readonly useLogminerReader?: boolean | cdk.IResolvable;
        /**
         * Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.
         *
         * This value specifies the path prefix used to replace the default Oracle root to access the redo logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html#cfn-dms-endpoint-oraclesettings-usepathprefix
         */
        readonly usePathPrefix?: string;
    }
    /**
     * Provides information that describes an Apache Kafka endpoint.
     *
     * This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For more information about other available settings, see [Using object mapping to migrate data to a Kafka topic](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html#CHAP_Target.Kafka.ObjectMapping) in the *AWS Database Migration Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html
     */
    interface KafkaSettingsProperty {
        /**
         * A comma-separated list of one or more broker locations in your Kafka cluster that host your Kafka instance.
         *
         * Specify each broker location in the form `*broker-hostname-or-ip* : *port*` . For example, `"ec2-12-345-678-901.compute-1.amazonaws.com:2345"` . For more information and examples of specifying a list of broker locations, see [Using Apache Kafka as a target for AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html) in the *AWS Database Migration Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html#cfn-dms-endpoint-kafkasettings-broker
         */
        readonly broker?: string;
        /**
         * Shows detailed control information for table definition, column definition, and table and column changes in the Kafka message output.
         *
         * The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html#cfn-dms-endpoint-kafkasettings-includecontroldetails
         */
        readonly includeControlDetails?: boolean | cdk.IResolvable;
        /**
         * Include NULL and empty columns for records migrated to the endpoint.
         *
         * The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html#cfn-dms-endpoint-kafkasettings-includenullandempty
         */
        readonly includeNullAndEmpty?: boolean | cdk.IResolvable;
        /**
         * Shows the partition value within the Kafka message output unless the partition type is `schema-table-type` .
         *
         * The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html#cfn-dms-endpoint-kafkasettings-includepartitionvalue
         */
        readonly includePartitionValue?: boolean | cdk.IResolvable;
        /**
         * Includes any data definition language (DDL) operations that change the table in the control data, such as `rename-table` , `drop-table` , `add-column` , `drop-column` , and `rename-column` .
         *
         * The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html#cfn-dms-endpoint-kafkasettings-includetablealteroperations
         */
        readonly includeTableAlterOperations?: boolean | cdk.IResolvable;
        /**
         * Provides detailed transaction information from the source database.
         *
         * This information includes a commit timestamp, a log position, and values for `transaction_id` , previous `transaction_id` , and `transaction_record_id` (the record offset within a transaction). The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html#cfn-dms-endpoint-kafkasettings-includetransactiondetails
         */
        readonly includeTransactionDetails?: boolean | cdk.IResolvable;
        /**
         * The output format for the records created on the endpoint.
         *
         * The message format is `JSON` (default) or `JSON_UNFORMATTED` (a single line with no tab).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html#cfn-dms-endpoint-kafkasettings-messageformat
         */
        readonly messageFormat?: string;
        /**
         * The maximum size in bytes for records created on the endpoint The default is 1,000,000.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html#cfn-dms-endpoint-kafkasettings-messagemaxbytes
         */
        readonly messageMaxBytes?: number;
        /**
         * Set this optional parameter to `true` to avoid adding a '0x' prefix to raw data in hexadecimal format.
         *
         * For example, by default, AWS DMS adds a '0x' prefix to the LOB column type in hexadecimal format moving from an Oracle source to a Kafka target. Use the `NoHexPrefix` endpoint setting to enable migration of RAW data type columns without adding the '0x' prefix.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html#cfn-dms-endpoint-kafkasettings-nohexprefix
         */
        readonly noHexPrefix?: boolean | cdk.IResolvable;
        /**
         * Prefixes schema and table names to partition values, when the partition type is `primary-key-type` .
         *
         * Doing this increases data distribution among Kafka partitions. For example, suppose that a SysBench schema has thousands of tables and each table has only limited range for a primary key. In this case, the same primary key is sent from thousands of tables to the same partition, which causes throttling. The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html#cfn-dms-endpoint-kafkasettings-partitionincludeschematable
         */
        readonly partitionIncludeSchemaTable?: boolean | cdk.IResolvable;
        /**
         * The secure password that you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html#cfn-dms-endpoint-kafkasettings-saslpassword
         */
        readonly saslPassword?: string;
        /**
         * The secure user name you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html#cfn-dms-endpoint-kafkasettings-saslusername
         */
        readonly saslUserName?: string;
        /**
         * Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS).
         *
         * Options include `ssl-encryption` , `ssl-authentication` , and `sasl-ssl` . `sasl-ssl` requires `SaslUsername` and `SaslPassword` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html#cfn-dms-endpoint-kafkasettings-securityprotocol
         */
        readonly securityProtocol?: string;
        /**
         * The Amazon Resource Name (ARN) for the private certificate authority (CA) cert that AWS DMS uses to securely connect to your Kafka target endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html#cfn-dms-endpoint-kafkasettings-sslcacertificatearn
         */
        readonly sslCaCertificateArn?: string;
        /**
         * The Amazon Resource Name (ARN) of the client certificate used to securely connect to a Kafka target endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html#cfn-dms-endpoint-kafkasettings-sslclientcertificatearn
         */
        readonly sslClientCertificateArn?: string;
        /**
         * The Amazon Resource Name (ARN) for the client private key used to securely connect to a Kafka target endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html#cfn-dms-endpoint-kafkasettings-sslclientkeyarn
         */
        readonly sslClientKeyArn?: string;
        /**
         * The password for the client private key used to securely connect to a Kafka target endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html#cfn-dms-endpoint-kafkasettings-sslclientkeypassword
         */
        readonly sslClientKeyPassword?: string;
        /**
         * The topic to which you migrate the data.
         *
         * If you don't specify a topic, AWS DMS specifies `"kafka-default-topic"` as the migration topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html#cfn-dms-endpoint-kafkasettings-topic
         */
        readonly topic?: string;
    }
    /**
     * Provides information that defines a MySQL endpoint.
     *
     * This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For information about other available settings, see [Extra connection attributes when using MySQL as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html#CHAP_Source.MySQL.ConnectionAttrib) and [Extra connection attributes when using a MySQL-compatible database as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.MySQL.html#CHAP_Target.MySQL.ConnectionAttrib) in the *AWS Database Migration Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html
     */
    interface MySqlSettingsProperty {
        /**
         * Specifies a script to run immediately after AWS DMS connects to the endpoint.
         *
         * The migration task continues running regardless if the SQL statement succeeds or fails.
         *
         * For this parameter, provide the code of the script itself, not the name of a file containing the script.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html#cfn-dms-endpoint-mysqlsettings-afterconnectscript
         */
        readonly afterConnectScript?: string;
        /**
         * Cleans and recreates table metadata information on the replication instance when a mismatch occurs.
         *
         * For example, in a situation where running an alter DDL on the table could result in different information about the table cached in the replication instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html#cfn-dms-endpoint-mysqlsettings-cleansourcemetadataonmismatch
         */
        readonly cleanSourceMetadataOnMismatch?: boolean | cdk.IResolvable;
        /**
         * Specifies how often to check the binary log for new changes/events when the database is idle.
         *
         * The default is five seconds.
         *
         * Example: `eventsPollInterval=5;`
         *
         * In the example, AWS DMS checks for changes in the binary logs every five seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html#cfn-dms-endpoint-mysqlsettings-eventspollinterval
         */
        readonly eventsPollInterval?: number;
        /**
         * Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.
         *
         * Example: `maxFileSize=512`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html#cfn-dms-endpoint-mysqlsettings-maxfilesize
         */
        readonly maxFileSize?: number;
        /**
         * Improves performance when loading data into the MySQL-compatible target database.
         *
         * Specifies how many threads to use to load the data into the MySQL-compatible target database. Setting a large number of threads can have an adverse effect on database performance, because a separate connection is required for each thread. The default is one.
         *
         * Example: `parallelLoadThreads=1`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html#cfn-dms-endpoint-mysqlsettings-parallelloadthreads
         */
        readonly parallelLoadThreads?: number;
        /**
         * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret` .
         *
         * The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the AWS Secrets Manager secret that allows access to the MySQL endpoint.
         *
         * > You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId` . Or you can specify clear-text values for `UserName` , `Password` , `ServerName` , and `Port` . You can't specify both.
         * >
         * > For more information on creating this `SecretsManagerSecret` , the corresponding `SecretsManagerAccessRoleArn` , and the `SecretsManagerSecretId` that is required to access it, see [Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *AWS Database Migration Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html#cfn-dms-endpoint-mysqlsettings-secretsmanageraccessrolearn
         */
        readonly secretsManagerAccessRoleArn?: string;
        /**
         * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the MySQL endpoint connection details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html#cfn-dms-endpoint-mysqlsettings-secretsmanagersecretid
         */
        readonly secretsManagerSecretId?: string;
        /**
         * Specifies the time zone for the source MySQL database.
         *
         * Example: `serverTimezone=US/Pacific;`
         *
         * Note: Do not enclose time zones in single quotes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html#cfn-dms-endpoint-mysqlsettings-servertimezone
         */
        readonly serverTimezone?: string;
        /**
         * Specifies where to migrate source tables on the target, either to a single database or multiple databases.
         *
         * If you specify `SPECIFIC_DATABASE` , specify the database name using the `DatabaseName` parameter of the `Endpoint` object.
         *
         * Example: `targetDbType=MULTIPLE_DATABASES`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html#cfn-dms-endpoint-mysqlsettings-targetdbtype
         */
        readonly targetDbType?: string;
    }
    /**
     * Provides information that defines an Amazon S3 endpoint.
     *
     * This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For more information about the available settings, see [Extra connection attributes when using Amazon S3 as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.S3.html#CHAP_Source.S3.Configuring) and [Extra connection attributes when using Amazon S3 as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring) in the *AWS Database Migration Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html
     */
    interface S3SettingsProperty {
        /**
         * An optional parameter that, when set to `true` or `y` , you can use to add column name information to the .csv output file.
         *
         * The default value is `false` . Valid values are `true` , `false` , `y` , and `n` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-addcolumnname
         */
        readonly addColumnName?: boolean | cdk.IResolvable;
        /**
         * Use the S3 target endpoint setting `AddTrailingPaddingCharacter` to add padding on string data.
         *
         * The default value is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-addtrailingpaddingcharacter
         */
        readonly addTrailingPaddingCharacter?: boolean | cdk.IResolvable;
        /**
         * An optional parameter to set a folder name in the S3 bucket.
         *
         * If provided, tables are created in the path `*bucketFolder* / *schema_name* / *table_name* /` . If this parameter isn't specified, the path used is `*schema_name* / *table_name* /` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-bucketfolder
         */
        readonly bucketFolder?: string;
        /**
         * The name of the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-bucketname
         */
        readonly bucketName?: string;
        /**
         * A value that enables AWS DMS to specify a predefined (canned) access control list (ACL) for objects created in an Amazon S3 bucket as .csv or .parquet files. For more information about Amazon S3 canned ACLs, see [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) in the *Amazon S3 Developer Guide* .
         *
         * The default value is NONE. Valid values include NONE, PRIVATE, PUBLIC_READ, PUBLIC_READ_WRITE, AUTHENTICATED_READ, AWS_EXEC_READ, BUCKET_OWNER_READ, and BUCKET_OWNER_FULL_CONTROL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cannedaclforobjects
         */
        readonly cannedAclForObjects?: string;
        /**
         * A value that enables a change data capture (CDC) load to write INSERT and UPDATE operations to .csv or .parquet (columnar storage) output files. The default setting is `false` , but when `CdcInsertsAndUpdates` is set to `true` or `y` , only INSERTs and UPDATEs from the source database are migrated to the .csv or .parquet file.
         *
         * For .csv file format only, how these INSERTs and UPDATEs are recorded depends on the value of the `IncludeOpForFullLoad` parameter. If `IncludeOpForFullLoad` is set to `true` , the first field of every CDC record is set to either `I` or `U` to indicate INSERT and UPDATE operations at the source. But if `IncludeOpForFullLoad` is set to `false` , CDC records are written without an indication of INSERT or UPDATE operations at the source. For more information about how these settings work together, see [Indicating Source DB Operations in Migrated S3 Data](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps) in the *AWS Database Migration Service User Guide* .
         *
         * > AWS DMS supports the use of the `CdcInsertsAndUpdates` parameter in versions 3.3.1 and later.
         * >
         * > `CdcInsertsOnly` and `CdcInsertsAndUpdates` can't both be set to `true` for the same endpoint. Set either `CdcInsertsOnly` or `CdcInsertsAndUpdates` to `true` for the same endpoint, but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcinsertsandupdates
         */
        readonly cdcInsertsAndUpdates?: boolean | cdk.IResolvable;
        /**
         * A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the `false` setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target.
         *
         * If `CdcInsertsOnly` is set to `true` or `y` , only INSERTs from the source database are migrated to the .csv or .parquet file. For .csv format only, how these INSERTs are recorded depends on the value of `IncludeOpForFullLoad` . If `IncludeOpForFullLoad` is set to `true` , the first field of every CDC record is set to I to indicate the INSERT operation at the source. If `IncludeOpForFullLoad` is set to `false` , every CDC record is written without a first field to indicate the INSERT operation at the source. For more information about how these settings work together, see [Indicating Source DB Operations in Migrated S3 Data](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps) in the *AWS Database Migration Service User Guide* .
         *
         * > AWS DMS supports the interaction described preceding between the `CdcInsertsOnly` and `IncludeOpForFullLoad` parameters in versions 3.1.4 and later.
         * >
         * > `CdcInsertsOnly` and `CdcInsertsAndUpdates` can't both be set to `true` for the same endpoint. Set either `CdcInsertsOnly` or `CdcInsertsAndUpdates` to `true` for the same endpoint, but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcinsertsonly
         */
        readonly cdcInsertsOnly?: boolean | cdk.IResolvable;
        /**
         * Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3.
         *
         * When `CdcMaxBatchInterval` and `CdcMinFileSize` are both specified, the file write is triggered by whichever parameter condition is met first within an AWS DMS CloudFormation template.
         *
         * The default value is 60 seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcmaxbatchinterval
         */
        readonly cdcMaxBatchInterval?: number;
        /**
         * Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3.
         *
         * When `CdcMinFileSize` and `CdcMaxBatchInterval` are both specified, the file write is triggered by whichever parameter condition is met first within an AWS DMS CloudFormation template.
         *
         * The default value is 32 MB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcminfilesize
         */
        readonly cdcMinFileSize?: number;
        /**
         * Specifies the folder path of CDC files.
         *
         * For an S3 source, this setting is required if a task captures change data; otherwise, it's optional. If `CdcPath` is set, AWS DMS reads CDC files from this path and replicates the data changes to the target endpoint. For an S3 target if you set [`PreserveTransactions`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-PreserveTransactions) to `true` , AWS DMS verifies that you have set this parameter to a folder path on your S3 target where AWS DMS can save the transaction order for the CDC load. AWS DMS creates this CDC folder path in either your S3 target working directory or the S3 target location specified by [`BucketFolder`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketFolder) and [`BucketName`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketName) .
         *
         * For example, if you specify `CdcPath` as `MyChangedData` , and you specify `BucketName` as `MyTargetBucket` but do not specify `BucketFolder` , AWS DMS creates the CDC folder path following: `MyTargetBucket/MyChangedData` .
         *
         * If you specify the same `CdcPath` , and you specify `BucketName` as `MyTargetBucket` and `BucketFolder` as `MyTargetData` , AWS DMS creates the CDC folder path following: `MyTargetBucket/MyTargetData/MyChangedData` .
         *
         * For more information on CDC including transaction order on an S3 target, see [Capturing data changes (CDC) including transaction order on the S3 target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.EndpointSettings.CdcPath) .
         *
         * > This setting is supported in AWS DMS versions 3.4.2 and later.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-cdcpath
         */
        readonly cdcPath?: string;
        /**
         * An optional parameter.
         *
         * When set to GZIP it enables the service to compress the target files. To allow the service to write the target files uncompressed, either set this parameter to NONE (the default) or don't specify the parameter at all. This parameter applies to both .csv and .parquet file formats.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-compressiontype
         */
        readonly compressionType?: string;
        /**
         * The delimiter used to separate columns in the .csv file for both source and target. The default is a comma.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvdelimiter
         */
        readonly csvDelimiter?: string;
        /**
         * This setting only applies if your Amazon S3 output files during a change data capture (CDC) load are written in .csv format. If [`UseCsvNoSupValue`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-UseCsvNoSupValue) is set to true, specify a string value that you want AWS DMS to use for all columns not included in the supplemental log. If you do not specify a string value, AWS DMS uses the null value for these columns regardless of the `UseCsvNoSupValue` setting.
         *
         * > This setting is supported in AWS DMS versions 3.4.1 and later.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvnosupvalue
         */
        readonly csvNoSupValue?: string;
        /**
         * An optional parameter that specifies how AWS DMS treats null values.
         *
         * While handling the null value, you can use this parameter to pass a user-defined string as null when writing to the target. For example, when target columns are not nullable, you can use this option to differentiate between the empty string value and the null value. So, if you set this parameter value to the empty string ("" or ''), AWS DMS treats the empty string as the null value instead of `NULL` .
         *
         * The default value is `NULL` . Valid values include any valid string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvnullvalue
         */
        readonly csvNullValue?: string;
        /**
         * The delimiter used to separate rows in the .csv file for both source and target.
         *
         * The default is a carriage return ( `\n` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-csvrowdelimiter
         */
        readonly csvRowDelimiter?: string;
        /**
         * The format of the data that you want to use for output. You can choose one of the following:.
         *
         * - `csv` : This is a row-based file format with comma-separated values (.csv).
         * - `parquet` : Apache Parquet (.parquet) is a columnar storage file format that features efficient compression and provides faster query response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-dataformat
         */
        readonly dataFormat?: string;
        /**
         * The size of one data page in bytes.
         *
         * This parameter defaults to 1024 * 1024 bytes (1 MiB). This number is used for .parquet file format only.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-datapagesize
         */
        readonly dataPageSize?: number;
        /**
         * Specifies a date separating delimiter to use during folder partitioning.
         *
         * The default value is `SLASH` . Use this parameter when `DatePartitionedEnabled` is set to `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-datepartitiondelimiter
         */
        readonly datePartitionDelimiter?: string;
        /**
         * When set to `true` , this parameter partitions S3 bucket folders based on transaction commit dates.
         *
         * The default value is `false` . For more information about date-based folder partitioning, see [Using date-based folder partitioning](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.DatePartitioning) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-datepartitionenabled
         */
        readonly datePartitionEnabled?: boolean | cdk.IResolvable;
        /**
         * Identifies the sequence of the date format to use during folder partitioning.
         *
         * The default value is `YYYYMMDD` . Use this parameter when `DatePartitionedEnabled` is set to `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-datepartitionsequence
         */
        readonly datePartitionSequence?: string;
        /**
         * When creating an S3 target endpoint, set `DatePartitionTimezone` to convert the current UTC time into a specified time zone.
         *
         * The conversion occurs when a date partition folder is created and a change data capture (CDC) file name is generated. The time zone format is Area/Location. Use this parameter when `DatePartitionedEnabled` is set to `true` , as shown in the following example.
         *
         * `s3-settings='{"DatePartitionEnabled": true, "DatePartitionSequence": "YYYYMMDDHH", "DatePartitionDelimiter": "SLASH", "DatePartitionTimezone":" *Asia/Seoul* ", "BucketName": "dms-nattarat-test"}'`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-datepartitiontimezone
         */
        readonly datePartitionTimezone?: string;
        /**
         * The maximum size of an encoded dictionary page of a column.
         *
         * If the dictionary page exceeds this, this column is stored using an encoding type of `PLAIN` . This parameter defaults to 1024 * 1024 bytes (1 MiB), the maximum size of a dictionary page before it reverts to `PLAIN` encoding. This size is used for .parquet file format only.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-dictpagesizelimit
         */
        readonly dictPageSizeLimit?: number;
        /**
         * A value that enables statistics for Parquet pages and row groups.
         *
         * Choose `true` to enable statistics, `false` to disable. Statistics include `NULL` , `DISTINCT` , `MAX` , and `MIN` values. This parameter defaults to `true` . This value is used for .parquet file format only.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-enablestatistics
         */
        readonly enableStatistics?: boolean | cdk.IResolvable;
        /**
         * The type of encoding that you're using:.
         *
         * - `RLE_DICTIONARY` uses a combination of bit-packing and run-length encoding to store repeated values more efficiently. This is the default.
         * - `PLAIN` doesn't use encoding at all. Values are stored as they are.
         * - `PLAIN_DICTIONARY` builds a dictionary of the values encountered in a given column. The dictionary is stored in a dictionary page for each column chunk.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-encodingtype
         */
        readonly encodingType?: string;
        /**
         * The type of server-side encryption that you want to use for your data.
         *
         * This encryption type is part of the endpoint settings or the extra connections attributes for Amazon S3. You can choose either `SSE_S3` (the default) or `SSE_KMS` .
         *
         * > For the `ModifyEndpoint` operation, you can change the existing value of the `EncryptionMode` parameter from `SSE_KMS` to `SSE_S3` . But you can’t change the existing value from `SSE_S3` to `SSE_KMS` .
         *
         * To use `SSE_S3` , you need an IAM role with permission to allow `"arn:aws:s3:::dms-*"` to use the following actions:
         *
         * - `s3:CreateBucket`
         * - `s3:ListBucket`
         * - `s3:DeleteBucket`
         * - `s3:GetBucketLocation`
         * - `s3:GetObject`
         * - `s3:PutObject`
         * - `s3:DeleteObject`
         * - `s3:GetObjectVersion`
         * - `s3:GetBucketPolicy`
         * - `s3:PutBucketPolicy`
         * - `s3:DeleteBucketPolicy`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-encryptionmode
         */
        readonly encryptionMode?: string;
        /**
         * To specify a bucket owner and prevent sniping, you can use the `ExpectedBucketOwner` endpoint setting.
         *
         * Example: `--s3-settings='{"ExpectedBucketOwner": " *AWS_Account_ID* "}'`
         *
         * When you make a request to test a connection or perform a migration, S3 checks the account ID of the bucket owner against the specified parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-expectedbucketowner
         */
        readonly expectedBucketOwner?: string;
        /**
         * The external table definition.
         *
         * Conditional: If `S3` is used as a source then `ExternalTableDefinition` is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-externaltabledefinition
         */
        readonly externalTableDefinition?: string;
        /**
         * When true, allows AWS Glue to catalog your S3 bucket.
         *
         * Creating an AWS Glue catalog lets you use Athena to query your data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-gluecataloggeneration
         */
        readonly glueCatalogGeneration?: boolean | cdk.IResolvable;
        /**
         * When this value is set to 1, AWS DMS ignores the first row header in a .csv file. A value of 1 turns on the feature; a value of 0 turns off the feature.
         *
         * The default is 0.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-ignoreheaderrows
         */
        readonly ignoreHeaderRows?: number;
        /**
         * A value that enables a full load to write INSERT operations to the comma-separated value (.csv) output files only to indicate how the rows were added to the source database.
         *
         * > AWS DMS supports the `IncludeOpForFullLoad` parameter in versions 3.1.4 and later.
         *
         * For full load, records can only be inserted. By default (the `false` setting), no information is recorded in these output files for a full load to indicate that the rows were inserted at the source database. If `IncludeOpForFullLoad` is set to `true` or `y` , the INSERT is recorded as an I annotation in the first field of the .csv file. This allows the format of your target records from a full load to be consistent with the target records from a CDC load.
         *
         * > This setting works together with the `CdcInsertsOnly` and the `CdcInsertsAndUpdates` parameters for output to .csv files only. For more information about how these settings work together, see [Indicating Source DB Operations in Migrated S3 Data](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps) in the *AWS Database Migration Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-includeopforfullload
         */
        readonly includeOpForFullLoad?: boolean | cdk.IResolvable;
        /**
         * A value that specifies the maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load.
         *
         * The default value is 1,048,576 KB (1 GB). Valid values include 1 to 1,048,576.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-maxfilesize
         */
        readonly maxFileSize?: number;
        /**
         * A value that specifies the precision of any `TIMESTAMP` column values that are written to an Amazon S3 object file in .parquet format.
         *
         * > AWS DMS supports the `ParquetTimestampInMillisecond` parameter in versions 3.1.4 and later.
         *
         * When `ParquetTimestampInMillisecond` is set to `true` or `y` , AWS DMS writes all `TIMESTAMP` columns in a .parquet formatted file with millisecond precision. Otherwise, DMS writes them with microsecond precision.
         *
         * Currently, Amazon Athena and AWS Glue can handle only millisecond precision for `TIMESTAMP` values. Set this parameter to `true` for S3 endpoint object files that are .parquet formatted only if you plan to query or process the data with Athena or AWS Glue .
         *
         * > AWS DMS writes any `TIMESTAMP` column values written to an S3 file in .csv format with microsecond precision.
         * >
         * > Setting `ParquetTimestampInMillisecond` has no effect on the string format of the timestamp column value that is inserted by setting the `TimestampColumnName` parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-parquettimestampinmillisecond
         */
        readonly parquetTimestampInMillisecond?: boolean | cdk.IResolvable;
        /**
         * The version of the Apache Parquet format that you want to use: `parquet_1_0` (the default) or `parquet_2_0` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-parquetversion
         */
        readonly parquetVersion?: string;
        /**
         * If this setting is set to `true` , AWS DMS saves the transaction order for a change data capture (CDC) load on the Amazon S3 target specified by [`CdcPath`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-CdcPath) . For more information, see [Capturing data changes (CDC) including transaction order on the S3 target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.EndpointSettings.CdcPath) .
         *
         * > This setting is supported in AWS DMS versions 3.4.2 and later.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-preservetransactions
         */
        readonly preserveTransactions?: boolean | cdk.IResolvable;
        /**
         * For an S3 source, when this value is set to `true` or `y` , each leading double quotation mark has to be followed by an ending double quotation mark.
         *
         * This formatting complies with RFC 4180. When this value is set to `false` or `n` , string literals are copied to the target as is. In this case, a delimiter (row or column) signals the end of the field. Thus, you can't use a delimiter as part of the string, because it signals the end of the value.
         *
         * For an S3 target, an optional parameter used to set behavior to comply with RFC 4180 for data migrated to Amazon S3 using .csv file format only. When this value is set to `true` or `y` using Amazon S3 as a target, if the data has quotation marks or newline characters in it, AWS DMS encloses the entire column with an additional pair of double quotation marks ("). Every quotation mark within the data is repeated twice.
         *
         * The default value is `true` . Valid values include `true` , `false` , `y` , and `n` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-rfc4180
         */
        readonly rfc4180?: boolean | cdk.IResolvable;
        /**
         * The number of rows in a row group.
         *
         * A smaller row group size provides faster reads. But as the number of row groups grows, the slower writes become. This parameter defaults to 10,000 rows. This number is used for .parquet file format only.
         *
         * If you choose a value larger than the maximum, `RowGroupLength` is set to the max row group length in bytes (64 * 1024 * 1024).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-rowgrouplength
         */
        readonly rowGroupLength?: number;
        /**
         * If you are using `SSE_KMS` for the `EncryptionMode` , provide the AWS KMS key ID.
         *
         * The key that you use needs an attached policy that enables IAM user permissions and allows use of the key.
         *
         * Here is a CLI example: `aws dms create-endpoint --endpoint-identifier *value* --endpoint-type target --engine-name s3 --s3-settings ServiceAccessRoleArn= *value* ,BucketFolder= *value* ,BucketName= *value* ,EncryptionMode=SSE_KMS,ServerSideEncryptionKmsKeyId= *value*`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-serversideencryptionkmskeyid
         */
        readonly serverSideEncryptionKmsKeyId?: string;
        /**
         * A required parameter that specifies the Amazon Resource Name (ARN) used by the service to access the IAM role.
         *
         * The role must allow the `iam:PassRole` action. It enables AWS DMS to read and write objects from an S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-serviceaccessrolearn
         */
        readonly serviceAccessRoleArn?: string;
        /**
         * A value that when nonblank causes AWS DMS to add a column with timestamp information to the endpoint data for an Amazon S3 target.
         *
         * > AWS DMS supports the `TimestampColumnName` parameter in versions 3.1.4 and later.
         *
         * AWS DMS includes an additional `STRING` column in the .csv or .parquet object files of your migrated data when you set `TimestampColumnName` to a nonblank value.
         *
         * For a full load, each row of this timestamp column contains a timestamp for when the data was transferred from the source to the target by DMS.
         *
         * For a change data capture (CDC) load, each row of the timestamp column contains the timestamp for the commit of that row in the source database.
         *
         * The string format for this timestamp column value is `yyyy-MM-dd HH:mm:ss.SSSSSS` . By default, the precision of this value is in microseconds. For a CDC load, the rounding of the precision depends on the commit timestamp supported by DMS for the source database.
         *
         * When the `AddColumnName` parameter is set to `true` , DMS also includes a name for the timestamp column that you set with `TimestampColumnName` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-timestampcolumnname
         */
        readonly timestampColumnName?: string;
        /**
         * This setting applies if the S3 output files during a change data capture (CDC) load are written in .csv format. If this setting is set to `true` for columns not included in the supplemental log, AWS DMS uses the value specified by [`CsvNoSupValue`](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-CsvNoSupValue) . If this setting isn't set or is set to `false` , AWS DMS uses the null value for these columns.
         *
         * > This setting is supported in AWS DMS versions 3.4.1 and later.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-usecsvnosupvalue
         */
        readonly useCsvNoSupValue?: boolean | cdk.IResolvable;
        /**
         * When set to true, this parameter uses the task start time as the timestamp column value instead of the time data is written to target.
         *
         * For full load, when `useTaskStartTimeForFullLoadTimestamp` is set to `true` , each row of the timestamp column contains the task start time. For CDC loads, each row of the timestamp column contains the transaction commit time.
         *
         * When `useTaskStartTimeForFullLoadTimestamp` is set to `false` , the full load timestamp in the timestamp column increments with the time data arrives at the target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html#cfn-dms-endpoint-s3settings-usetaskstarttimeforfullloadtimestamp
         */
        readonly useTaskStartTimeForFullLoadTimestamp?: boolean | cdk.IResolvable;
    }
    /**
     * Provides information that describes an Amazon Kinesis Data Stream endpoint.
     *
     * This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For more information about other available settings, see [Using object mapping to migrate data to a Kinesis data stream](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html#CHAP_Target.Kinesis.ObjectMapping) in the *AWS Database Migration Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kinesissettings.html
     */
    interface KinesisSettingsProperty {
        /**
         * Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output.
         *
         * The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kinesissettings.html#cfn-dms-endpoint-kinesissettings-includecontroldetails
         */
        readonly includeControlDetails?: boolean | cdk.IResolvable;
        /**
         * Include NULL and empty columns for records migrated to the endpoint.
         *
         * The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kinesissettings.html#cfn-dms-endpoint-kinesissettings-includenullandempty
         */
        readonly includeNullAndEmpty?: boolean | cdk.IResolvable;
        /**
         * Shows the partition value within the Kinesis message output, unless the partition type is `schema-table-type` .
         *
         * The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kinesissettings.html#cfn-dms-endpoint-kinesissettings-includepartitionvalue
         */
        readonly includePartitionValue?: boolean | cdk.IResolvable;
        /**
         * Includes any data definition language (DDL) operations that change the table in the control data, such as `rename-table` , `drop-table` , `add-column` , `drop-column` , and `rename-column` .
         *
         * The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kinesissettings.html#cfn-dms-endpoint-kinesissettings-includetablealteroperations
         */
        readonly includeTableAlterOperations?: boolean | cdk.IResolvable;
        /**
         * Provides detailed transaction information from the source database.
         *
         * This information includes a commit timestamp, a log position, and values for `transaction_id` , previous `transaction_id` , and `transaction_record_id` (the record offset within a transaction). The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kinesissettings.html#cfn-dms-endpoint-kinesissettings-includetransactiondetails
         */
        readonly includeTransactionDetails?: boolean | cdk.IResolvable;
        /**
         * The output format for the records created on the endpoint.
         *
         * The message format is `JSON` (default) or `JSON_UNFORMATTED` (a single line with no tab).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kinesissettings.html#cfn-dms-endpoint-kinesissettings-messageformat
         */
        readonly messageFormat?: string;
        /**
         * Set this optional parameter to `true` to avoid adding a '0x' prefix to raw data in hexadecimal format.
         *
         * For example, by default, AWS DMS adds a '0x' prefix to the LOB column type in hexadecimal format moving from an Oracle source to an Amazon Kinesis target. Use the `NoHexPrefix` endpoint setting to enable migration of RAW data type columns without adding the '0x' prefix.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kinesissettings.html#cfn-dms-endpoint-kinesissettings-nohexprefix
         */
        readonly noHexPrefix?: boolean | cdk.IResolvable;
        /**
         * Prefixes schema and table names to partition values, when the partition type is `primary-key-type` .
         *
         * Doing this increases data distribution among Kinesis shards. For example, suppose that a SysBench schema has thousands of tables and each table has only limited range for a primary key. In this case, the same primary key is sent from thousands of tables to the same shard, which causes throttling. The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kinesissettings.html#cfn-dms-endpoint-kinesissettings-partitionincludeschematable
         */
        readonly partitionIncludeSchemaTable?: boolean | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) for the IAM role that AWS DMS uses to write to the Kinesis data stream.
         *
         * The role must allow the `iam:PassRole` action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kinesissettings.html#cfn-dms-endpoint-kinesissettings-serviceaccessrolearn
         */
        readonly serviceAccessRoleArn?: string;
        /**
         * The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kinesissettings.html#cfn-dms-endpoint-kinesissettings-streamarn
         */
        readonly streamArn?: string;
    }
    /**
     * Provides information that defines an Amazon Redshift endpoint.
     *
     * This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For more information about other available settings, see [Extra connection attributes when using Amazon Redshift as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Redshift.html#CHAP_Target.Redshift.ConnectionAttrib) in the *AWS Database Migration Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html
     */
    interface RedshiftSettingsProperty {
        /**
         * A value that indicates to allow any date format, including invalid formats such as 00/00/00 00:00:00, to be loaded without generating an error.
         *
         * You can choose `true` or `false` (the default).
         *
         * This parameter applies only to TIMESTAMP and DATE columns. Always use ACCEPTANYDATE with the DATEFORMAT parameter. If the date format for the data doesn't match the DATEFORMAT specification, Amazon Redshift inserts a NULL value into that field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-acceptanydate
         */
        readonly acceptAnyDate?: boolean | cdk.IResolvable;
        /**
         * Code to run after connecting.
         *
         * This parameter should contain the code itself, not the name of a file containing the code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-afterconnectscript
         */
        readonly afterConnectScript?: string;
        /**
         * An S3 folder where the comma-separated-value (.csv) files are stored before being uploaded to the target Redshift cluster.
         *
         * For full load mode, AWS DMS converts source records into .csv files and loads them to the *BucketFolder/TableID* path. AWS DMS uses the Redshift `COPY` command to upload the .csv files to the target table. The files are deleted once the `COPY` operation has finished. For more information, see [COPY](https://docs.aws.amazon.com/redshift/latest/dg/r_COPY.html) in the *Amazon Redshift Database Developer Guide* .
         *
         * For change-data-capture (CDC) mode, AWS DMS creates a *NetChanges* table, and loads the .csv files to this *BucketFolder/NetChangesTableID* path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-bucketfolder
         */
        readonly bucketFolder?: string;
        /**
         * The name of the intermediate S3 bucket used to store .csv files before uploading data to Redshift.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-bucketname
         */
        readonly bucketName?: string;
        /**
         * If Amazon Redshift is configured to support case sensitive schema names, set `CaseSensitiveNames` to `true` .
         *
         * The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-casesensitivenames
         */
        readonly caseSensitiveNames?: boolean | cdk.IResolvable;
        /**
         * If you set `CompUpdate` to `true` Amazon Redshift applies automatic compression if the table is empty.
         *
         * This applies even if the table columns already have encodings other than `RAW` . If you set `CompUpdate` to `false` , automatic compression is disabled and existing column encodings aren't changed. The default is `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-compupdate
         */
        readonly compUpdate?: boolean | cdk.IResolvable;
        /**
         * A value that sets the amount of time to wait (in milliseconds) before timing out, beginning from when you initially establish a connection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-connectiontimeout
         */
        readonly connectionTimeout?: number;
        /**
         * The date format that you are using.
         *
         * Valid values are `auto` (case-sensitive), your date format string enclosed in quotes, or NULL. If this parameter is left unset (NULL), it defaults to a format of 'YYYY-MM-DD'. Using `auto` recognizes most strings, even some that aren't supported when you use a date format string.
         *
         * If your date and time values use formats different from each other, set this to `auto` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-dateformat
         */
        readonly dateFormat?: string;
        /**
         * A value that specifies whether AWS DMS should migrate empty CHAR and VARCHAR fields as NULL.
         *
         * A value of `true` sets empty CHAR and VARCHAR fields to null. The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-emptyasnull
         */
        readonly emptyAsNull?: boolean | cdk.IResolvable;
        /**
         * The type of server-side encryption that you want to use for your data.
         *
         * This encryption type is part of the endpoint settings or the extra connections attributes for Amazon S3. You can choose either `SSE_S3` (the default) or `SSE_KMS` .
         *
         * > For the `ModifyEndpoint` operation, you can change the existing value of the `EncryptionMode` parameter from `SSE_KMS` to `SSE_S3` . But you can’t change the existing value from `SSE_S3` to `SSE_KMS` .
         *
         * To use `SSE_S3` , create an AWS Identity and Access Management (IAM) role with a policy that allows `"arn:aws:s3:::*"` to use the following actions: `"s3:PutObject", "s3:ListBucket"`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-encryptionmode
         */
        readonly encryptionMode?: string;
        /**
         * This setting is only valid for a full-load migration task.
         *
         * Set `ExplicitIds` to `true` to have tables with `IDENTITY` columns override their auto-generated values with explicit values loaded from the source data files used to populate the tables. The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-explicitids
         */
        readonly explicitIds?: boolean | cdk.IResolvable;
        /**
         * The number of threads used to upload a single file.
         *
         * This parameter accepts a value from 1 through 64. It defaults to 10.
         *
         * The number of parallel streams used to upload a single .csv file to an S3 bucket using S3 Multipart Upload. For more information, see [Multipart upload overview](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html) .
         *
         * `FileTransferUploadStreams` accepts a value from 1 through 64. It defaults to 10.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-filetransferuploadstreams
         */
        readonly fileTransferUploadStreams?: number;
        /**
         * The amount of time to wait (in milliseconds) before timing out of operations performed by AWS DMS on a Redshift cluster, such as Redshift COPY, INSERT, DELETE, and UPDATE.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-loadtimeout
         */
        readonly loadTimeout?: number;
        /**
         * When true, lets Redshift migrate the boolean type as boolean.
         *
         * By default, Redshift migrates booleans as `varchar(1)` . You must set this setting on both the source and target endpoints for it to take effect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-mapbooleanasboolean
         */
        readonly mapBooleanAsBoolean?: boolean | cdk.IResolvable;
        /**
         * The maximum size (in KB) of any .csv file used to load data on an S3 bucket and transfer data to Amazon Redshift. It defaults to 1048576KB (1 GB).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-maxfilesize
         */
        readonly maxFileSize?: number;
        /**
         * A value that specifies to remove surrounding quotation marks from strings in the incoming data.
         *
         * All characters within the quotation marks, including delimiters, are retained. Choose `true` to remove quotation marks. The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-removequotes
         */
        readonly removeQuotes?: boolean | cdk.IResolvable;
        /**
         * A value that specifies to replaces the invalid characters specified in `ReplaceInvalidChars` , substituting the specified characters instead.
         *
         * The default is `"?"` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-replacechars
         */
        readonly replaceChars?: string;
        /**
         * A list of characters that you want to replace.
         *
         * Use with `ReplaceChars` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-replaceinvalidchars
         */
        readonly replaceInvalidChars?: string;
        /**
         * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret` .
         *
         * The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the AWS Secrets Manager secret that allows access to the Amazon Redshift endpoint.
         *
         * > You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId` . Or you can specify clear-text values for `UserName` , `Password` , `ServerName` , and `Port` . You can't specify both.
         * >
         * > For more information on creating this `SecretsManagerSecret` , the corresponding `SecretsManagerAccessRoleArn` , and the `SecretsManagerSecretId` that is required to access it, see [Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *AWS Database Migration Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-secretsmanageraccessrolearn
         */
        readonly secretsManagerAccessRoleArn?: string;
        /**
         * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the Amazon Redshift endpoint connection details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-secretsmanagersecretid
         */
        readonly secretsManagerSecretId?: string;
        /**
         * The AWS KMS key ID.
         *
         * If you are using `SSE_KMS` for the `EncryptionMode` , provide this key ID. The key that you use needs an attached policy that enables IAM user permissions and allows use of the key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-serversideencryptionkmskeyid
         */
        readonly serverSideEncryptionKmsKeyId?: string;
        /**
         * The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift service.
         *
         * The role must allow the `iam:PassRole` action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-serviceaccessrolearn
         */
        readonly serviceAccessRoleArn?: string;
        /**
         * The time format that you want to use.
         *
         * Valid values are `auto` (case-sensitive), `'timeformat_string'` , `'epochsecs'` , or `'epochmillisecs'` . It defaults to 10. Using `auto` recognizes most strings, even some that aren't supported when you use a time format string.
         *
         * If your date and time values use formats different from each other, set this parameter to `auto` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-timeformat
         */
        readonly timeFormat?: string;
        /**
         * A value that specifies to remove the trailing white space characters from a VARCHAR string.
         *
         * This parameter applies only to columns with a VARCHAR data type. Choose `true` to remove unneeded white space. The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-trimblanks
         */
        readonly trimBlanks?: boolean | cdk.IResolvable;
        /**
         * A value that specifies to truncate data in columns to the appropriate number of characters, so that the data fits in the column.
         *
         * This parameter applies only to columns with a VARCHAR or CHAR data type, and rows with a size of 4 MB or less. Choose `true` to truncate data. The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-truncatecolumns
         */
        readonly truncateColumns?: boolean | cdk.IResolvable;
        /**
         * The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk at the DMS replication instance. The default value is 1000 (buffer size is 1000KB).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html#cfn-dms-endpoint-redshiftsettings-writebuffersize
         */
        readonly writeBufferSize?: number;
    }
    /**
     * Provides information that defines a MongoDB endpoint.
     *
     * This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For more information about other available settings, see [Endpoint configuration settings when using MongoDB as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html#CHAP_Source.MongoDB.Configuration) in the *AWS Database Migration Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html
     */
    interface MongoDbSettingsProperty {
        /**
         * The authentication mechanism you use to access the MongoDB source endpoint.
         *
         * For the default value, in MongoDB version 2.x, `"default"` is `"mongodb_cr"` . For MongoDB version 3.x or later, `"default"` is `"scram_sha_1"` . This setting isn't used when `AuthType` is set to `"no"` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-authmechanism
         */
        readonly authMechanism?: string;
        /**
         * The MongoDB database name. This setting isn't used when `AuthType` is set to `"no"` .
         *
         * The default is `"admin"` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-authsource
         */
        readonly authSource?: string;
        /**
         * The authentication type you use to access the MongoDB source endpoint.
         *
         * When set to `"no"` , user name and password parameters are not used and can be empty.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-authtype
         */
        readonly authType?: string;
        /**
         * The database name on the MongoDB source endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-databasename
         */
        readonly databaseName?: string;
        /**
         * Indicates the number of documents to preview to determine the document organization.
         *
         * Use this setting when `NestingLevel` is set to `"one"` .
         *
         * Must be a positive value greater than `0` . Default value is `1000` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-docstoinvestigate
         */
        readonly docsToInvestigate?: string;
        /**
         * Specifies the document ID. Use this setting when `NestingLevel` is set to `"none"` .
         *
         * Default value is `"false"` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-extractdocid
         */
        readonly extractDocId?: string;
        /**
         * Specifies either document or table mode.
         *
         * Default value is `"none"` . Specify `"none"` to use document mode. Specify `"one"` to use table mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-nestinglevel
         */
        readonly nestingLevel?: string;
        /**
         * The password for the user account you use to access the MongoDB source endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-password
         */
        readonly password?: string;
        /**
         * The port value for the MongoDB source endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-port
         */
        readonly port?: number;
        /**
         * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret` .
         *
         * The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the AWS Secrets Manager secret that allows access to the MongoDB endpoint.
         *
         * > You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId` . Or you can specify clear-text values for `UserName` , `Password` , `ServerName` , and `Port` . You can't specify both.
         * >
         * > For more information on creating this `SecretsManagerSecret` , the corresponding `SecretsManagerAccessRoleArn` , and the `SecretsManagerSecretId` that is required to access it, see [Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *AWS Database Migration Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-secretsmanageraccessrolearn
         */
        readonly secretsManagerAccessRoleArn?: string;
        /**
         * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the MongoDB endpoint connection details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-secretsmanagersecretid
         */
        readonly secretsManagerSecretId?: string;
        /**
         * The name of the server on the MongoDB source endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-servername
         */
        readonly serverName?: string;
        /**
         * The user name you use to access the MongoDB source endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html#cfn-dms-endpoint-mongodbsettings-username
         */
        readonly username?: string;
    }
    /**
     * Provides information that defines an IBMDB2 endpoint.
     *
     * This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For more information about other available settings, see [Extra connection attributes when using Db2 LUW as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DB2.html#CHAP_Source.DB2.ConnectionAttrib) in the *AWS Database Migration Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-ibmdb2settings.html
     */
    interface IbmDb2SettingsProperty {
        /**
         * For ongoing replication (CDC), use CurrentLSN to specify a log sequence number (LSN) where you want the replication to start.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-ibmdb2settings.html#cfn-dms-endpoint-ibmdb2settings-currentlsn
         */
        readonly currentLsn?: string;
        /**
         * If true, AWS DMS saves any .csv files to the Db2 LUW target that were used to replicate data. DMS uses these files for analysis and troubleshooting.
         *
         * The default value is false.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-ibmdb2settings.html#cfn-dms-endpoint-ibmdb2settings-keepcsvfiles
         */
        readonly keepCsvFiles?: boolean | cdk.IResolvable;
        /**
         * The amount of time (in milliseconds) before AWS DMS times out operations performed by DMS on the Db2 target.
         *
         * The default value is 1200 (20 minutes).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-ibmdb2settings.html#cfn-dms-endpoint-ibmdb2settings-loadtimeout
         */
        readonly loadTimeout?: number;
        /**
         * Specifies the maximum size (in KB) of .csv files used to transfer data to Db2 LUW.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-ibmdb2settings.html#cfn-dms-endpoint-ibmdb2settings-maxfilesize
         */
        readonly maxFileSize?: number;
        /**
         * Maximum number of bytes per read, as a NUMBER value.
         *
         * The default is 64 KB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-ibmdb2settings.html#cfn-dms-endpoint-ibmdb2settings-maxkbytesperread
         */
        readonly maxKBytesPerRead?: number;
        /**
         * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret` .
         *
         * The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value ofthe AWS Secrets Manager secret that allows access to the Db2 LUW endpoint.
         *
         * > You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId` . Or you can specify clear-text values for `UserName` , `Password` , `ServerName` , and `Port` . You can't specify both.
         * >
         * > For more information on creating this `SecretsManagerSecret` , the corresponding `SecretsManagerAccessRoleArn` , and the `SecretsManagerSecretId` that is required to access it, see [Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *AWS Database Migration Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-ibmdb2settings.html#cfn-dms-endpoint-ibmdb2settings-secretsmanageraccessrolearn
         */
        readonly secretsManagerAccessRoleArn?: string;
        /**
         * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the IBMDB2 endpoint connection details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-ibmdb2settings.html#cfn-dms-endpoint-ibmdb2settings-secretsmanagersecretid
         */
        readonly secretsManagerSecretId?: string;
        /**
         * Enables ongoing replication (CDC) as a BOOLEAN value.
         *
         * The default is true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-ibmdb2settings.html#cfn-dms-endpoint-ibmdb2settings-setdatacapturechanges
         */
        readonly setDataCaptureChanges?: boolean | cdk.IResolvable;
        /**
         * The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk on the DMS replication instance. The default value is 1024 (1 MB).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-ibmdb2settings.html#cfn-dms-endpoint-ibmdb2settings-writebuffersize
         */
        readonly writeBufferSize?: number;
    }
    /**
     * Provides information that defines an Amazon Neptune endpoint.
     *
     * This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For more information about the available settings, see [Specifying endpoint settings for Amazon Neptune as a target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.EndpointSettings) in the *AWS Database Migration Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-neptunesettings.html
     */
    interface NeptuneSettingsProperty {
        /**
         * The number of milliseconds for AWS DMS to wait to retry a bulk-load of migrated graph data to the Neptune target database before raising an error.
         *
         * The default is 250.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-neptunesettings.html#cfn-dms-endpoint-neptunesettings-errorretryduration
         */
        readonly errorRetryDuration?: number;
        /**
         * If you want IAM authorization enabled for this endpoint, set this parameter to `true` .
         *
         * Then attach the appropriate IAM policy document to your service role specified by `ServiceAccessRoleArn` . The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-neptunesettings.html#cfn-dms-endpoint-neptunesettings-iamauthenabled
         */
        readonly iamAuthEnabled?: boolean | cdk.IResolvable;
        /**
         * The maximum size in kilobytes of migrated graph data stored in a .csv file before AWS DMS bulk-loads the data to the Neptune target database. The default is 1,048,576 KB. If the bulk load is successful, AWS DMS clears the bucket, ready to store the next batch of migrated graph data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-neptunesettings.html#cfn-dms-endpoint-neptunesettings-maxfilesize
         */
        readonly maxFileSize?: number;
        /**
         * The number of times for AWS DMS to retry a bulk load of migrated graph data to the Neptune target database before raising an error.
         *
         * The default is 5.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-neptunesettings.html#cfn-dms-endpoint-neptunesettings-maxretrycount
         */
        readonly maxRetryCount?: number;
        /**
         * A folder path where you want AWS DMS to store migrated graph data in the S3 bucket specified by `S3BucketName`.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-neptunesettings.html#cfn-dms-endpoint-neptunesettings-s3bucketfolder
         */
        readonly s3BucketFolder?: string;
        /**
         * The name of the Amazon S3 bucket where AWS DMS can temporarily store migrated graph data in .csv files before bulk-loading it to the Neptune target database. AWS DMS maps the SQL source data to graph data before storing it in these .csv files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-neptunesettings.html#cfn-dms-endpoint-neptunesettings-s3bucketname
         */
        readonly s3BucketName?: string;
        /**
         * The Amazon Resource Name (ARN) of the service role that you created for the Neptune target endpoint.
         *
         * The role must allow the `iam:PassRole` action.
         *
         * For more information, see [Creating an IAM Service Role for Accessing Amazon Neptune as a Target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.ServiceRole) in the *AWS Database Migration Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-neptunesettings.html#cfn-dms-endpoint-neptunesettings-serviceaccessrolearn
         */
        readonly serviceAccessRoleArn?: string;
    }
    /**
     * Provides information that defines an OpenSearch endpoint.
     *
     * This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For more information about the available settings, see [Extra connection attributes when using OpenSearch as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Elasticsearch.html#CHAP_Target.Elasticsearch.Configuration) in the *AWS Database Migration Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-elasticsearchsettings.html
     */
    interface ElasticsearchSettingsProperty {
        /**
         * The endpoint for the OpenSearch cluster.
         *
         * AWS DMS uses HTTPS if a transport protocol (either HTTP or HTTPS) isn't specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-elasticsearchsettings.html#cfn-dms-endpoint-elasticsearchsettings-endpointuri
         */
        readonly endpointUri?: string;
        /**
         * The maximum number of seconds for which DMS retries failed API requests to the OpenSearch cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-elasticsearchsettings.html#cfn-dms-endpoint-elasticsearchsettings-errorretryduration
         */
        readonly errorRetryDuration?: number;
        /**
         * The maximum percentage of records that can fail to be written before a full load operation stops.
         *
         * To avoid early failure, this counter is only effective after 1,000 records are transferred. OpenSearch also has the concept of error monitoring during the last 10 minutes of an Observation Window. If transfer of all records fail in the last 10 minutes, the full load operation stops.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-elasticsearchsettings.html#cfn-dms-endpoint-elasticsearchsettings-fullloaderrorpercentage
         */
        readonly fullLoadErrorPercentage?: number;
        /**
         * The Amazon Resource Name (ARN) used by the service to access the IAM role.
         *
         * The role must allow the `iam:PassRole` action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-elasticsearchsettings.html#cfn-dms-endpoint-elasticsearchsettings-serviceaccessrolearn
         */
        readonly serviceAccessRoleArn?: string;
    }
    /**
     * Provides information that defines a DocumentDB endpoint.
     *
     * This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For more information about other available settings, see [Using extra connections attributes with Amazon DocumentDB as a source](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DocumentDB.html#CHAP_Source.DocumentDB.ECAs) and [Using Amazon DocumentDB as a target for AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DocumentDB.html) in the *AWS Database Migration Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-docdbsettings.html
     */
    interface DocDbSettingsProperty {
        /**
         * Indicates the number of documents to preview to determine the document organization.
         *
         * Use this setting when `NestingLevel` is set to `"one"` .
         *
         * Must be a positive value greater than `0` . Default value is `1000` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-docdbsettings.html#cfn-dms-endpoint-docdbsettings-docstoinvestigate
         */
        readonly docsToInvestigate?: number;
        /**
         * Specifies the document ID. Use this setting when `NestingLevel` is set to `"none"` .
         *
         * Default value is `"false"` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-docdbsettings.html#cfn-dms-endpoint-docdbsettings-extractdocid
         */
        readonly extractDocId?: boolean | cdk.IResolvable;
        /**
         * Specifies either document or table mode.
         *
         * Default value is `"none"` . Specify `"none"` to use document mode. Specify `"one"` to use table mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-docdbsettings.html#cfn-dms-endpoint-docdbsettings-nestinglevel
         */
        readonly nestingLevel?: string;
        /**
         * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret` .
         *
         * The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the AWS Secrets Manager secret that allows access to the DocumentDB endpoint.
         *
         * > You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId` . Or you can specify clear-text values for `UserName` , `Password` , `ServerName` , and `Port` . You can't specify both.
         * >
         * > For more information on creating this `SecretsManagerSecret` , the corresponding `SecretsManagerAccessRoleArn` , and the `SecretsManagerSecretId` that is required to access it, see [Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *AWS Database Migration Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-docdbsettings.html#cfn-dms-endpoint-docdbsettings-secretsmanageraccessrolearn
         */
        readonly secretsManagerAccessRoleArn?: string;
        /**
         * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the DocumentDB endpoint connection details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-docdbsettings.html#cfn-dms-endpoint-docdbsettings-secretsmanagersecretid
         */
        readonly secretsManagerSecretId?: string;
    }
    /**
     * Provides information, including the Amazon Resource Name (ARN) of the IAM role used to define an Amazon DynamoDB target endpoint.
     *
     * This information also includes the output format of records applied to the endpoint and details of transaction and control table data information. For information about other available settings, see [Using object mapping to migrate data to DynamoDB](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB.html#CHAP_Target.DynamoDB.ObjectMapping) in the *AWS Database Migration Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-dynamodbsettings.html
     */
    interface DynamoDbSettingsProperty {
        /**
         * The Amazon Resource Name (ARN) used by the service to access the IAM role.
         *
         * The role must allow the `iam:PassRole` action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-dynamodbsettings.html#cfn-dms-endpoint-dynamodbsettings-serviceaccessrolearn
         */
        readonly serviceAccessRoleArn?: string;
    }
    /**
     * Provides information that defines a Microsoft SQL Server endpoint.
     *
     * This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For information about other available settings, see [Extra connection attributes when using SQL Server as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SQLServer.html#CHAP_Source.SQLServer.ConnectionAttrib) and [Extra connection attributes when using SQL Server as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SQLServer.html#CHAP_Target.SQLServer.ConnectionAttrib) in the *AWS Database Migration Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html
     */
    interface MicrosoftSqlServerSettingsProperty {
        /**
         * The maximum size of the packets (in bytes) used to transfer data using BCP.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html#cfn-dms-endpoint-microsoftsqlserversettings-bcppacketsize
         */
        readonly bcpPacketSize?: number;
        /**
         * Specifies a file group for the AWS DMS internal tables.
         *
         * When the replication task starts, all the internal AWS DMS control tables (awsdms_ apply_exception, awsdms_apply, awsdms_changes) are created for the specified file group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html#cfn-dms-endpoint-microsoftsqlserversettings-controltablesfilegroup
         */
        readonly controlTablesFileGroup?: string;
        /**
         * Database name for the endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html#cfn-dms-endpoint-microsoftsqlserversettings-databasename
         */
        readonly databaseName?: string;
        /**
         * Forces LOB lookup on inline LOB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html#cfn-dms-endpoint-microsoftsqlserversettings-forceloblookup
         */
        readonly forceLobLookup?: boolean | cdk.IResolvable;
        /**
         * Endpoint connection password.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html#cfn-dms-endpoint-microsoftsqlserversettings-password
         */
        readonly password?: string;
        /**
         * Endpoint TCP port.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html#cfn-dms-endpoint-microsoftsqlserversettings-port
         */
        readonly port?: number;
        /**
         * Cleans and recreates table metadata information on the replication instance when a mismatch occurs.
         *
         * An example is a situation where running an alter DDL statement on a table might result in different information about the table cached in the replication instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html#cfn-dms-endpoint-microsoftsqlserversettings-querysinglealwaysonnode
         */
        readonly querySingleAlwaysOnNode?: boolean | cdk.IResolvable;
        /**
         * When this attribute is set to `Y` , AWS DMS only reads changes from transaction log backups and doesn't read from the active transaction log file during ongoing replication.
         *
         * Setting this parameter to `Y` enables you to control active transaction log file growth during full load and ongoing replication tasks. However, it can add some source latency to ongoing replication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html#cfn-dms-endpoint-microsoftsqlserversettings-readbackuponly
         */
        readonly readBackupOnly?: boolean | cdk.IResolvable;
        /**
         * Use this attribute to minimize the need to access the backup log and enable AWS DMS to prevent truncation using one of the following two methods.
         *
         * *Start transactions in the database:* This is the default method. When this method is used, AWS DMS prevents TLOG truncation by mimicking a transaction in the database. As long as such a transaction is open, changes that appear after the transaction started aren't truncated. If you need Microsoft Replication to be enabled in your database, then you must choose this method.
         *
         * *Exclusively use sp_repldone within a single task* : When this method is used, AWS DMS reads the changes and then uses sp_repldone to mark the TLOG transactions as ready for truncation. Although this method doesn't involve any transactional activities, it can only be used when Microsoft Replication isn't running. Also, when using this method, only one AWS DMS task can access the database at any given time. Therefore, if you need to run parallel AWS DMS tasks against the same database, use the default method.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html#cfn-dms-endpoint-microsoftsqlserversettings-safeguardpolicy
         */
        readonly safeguardPolicy?: string;
        /**
         * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret` .
         *
         * The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the AWS Secrets Manager secret that allows access to the SQL Server endpoint.
         *
         * > You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId` . Or you can specify clear-text values for `UserName` , `Password` , `ServerName` , and `Port` . You can't specify both.
         * >
         * > For more information on creating this `SecretsManagerSecret` , the corresponding `SecretsManagerAccessRoleArn` , and the `SecretsManagerSecretId` that is required to access it, see [Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *AWS Database Migration Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html#cfn-dms-endpoint-microsoftsqlserversettings-secretsmanageraccessrolearn
         */
        readonly secretsManagerAccessRoleArn?: string;
        /**
         * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the MicrosoftSQLServer endpoint connection details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html#cfn-dms-endpoint-microsoftsqlserversettings-secretsmanagersecretid
         */
        readonly secretsManagerSecretId?: string;
        /**
         * Fully qualified domain name of the endpoint.
         *
         * For an Amazon RDS SQL Server instance, this is the output of [DescribeDBInstances](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html) , in the `[Endpoint](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Endpoint.html) .Address` field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html#cfn-dms-endpoint-microsoftsqlserversettings-servername
         */
        readonly serverName?: string;
        /**
         * Indicates the mode used to fetch CDC data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html#cfn-dms-endpoint-microsoftsqlserversettings-tlogaccessmode
         */
        readonly tlogAccessMode?: string;
        /**
         * Use the `TrimSpaceInChar` source endpoint setting to right-trim data on CHAR and NCHAR data types during migration.
         *
         * Setting `TrimSpaceInChar` does not left-trim data. The default value is `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html#cfn-dms-endpoint-microsoftsqlserversettings-trimspaceinchar
         */
        readonly trimSpaceInChar?: boolean | cdk.IResolvable;
        /**
         * Use this to attribute to transfer data for full-load operations using BCP.
         *
         * When the target table contains an identity column that does not exist in the source table, you must disable the use BCP for loading table option.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html#cfn-dms-endpoint-microsoftsqlserversettings-usebcpfullload
         */
        readonly useBcpFullLoad?: boolean | cdk.IResolvable;
        /**
         * Endpoint connection user name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html#cfn-dms-endpoint-microsoftsqlserversettings-username
         */
        readonly username?: string;
        /**
         * When this attribute is set to `Y` , DMS processes third-party transaction log backups if they are created in native format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html#cfn-dms-endpoint-microsoftsqlserversettings-usethirdpartybackupdevice
         */
        readonly useThirdPartyBackupDevice?: boolean | cdk.IResolvable;
    }
    /**
     * Provides information that defines a GCP MySQL endpoint.
     *
     * This information includes the output format of records applied to the endpoint and details of transaction and control table data information. These settings are much the same as the settings for any MySQL-compatible endpoint. For more information, see [Extra connection attributes when using MySQL as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html#CHAP_Source.MySQL.ConnectionAttrib) in the *AWS Database Migration Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html
     */
    interface GcpMySQLSettingsProperty {
        /**
         * Specifies a script to run immediately after AWS DMS connects to the endpoint.
         *
         * The migration task continues running regardless if the SQL statement succeeds or fails.
         *
         * For this parameter, provide the code of the script itself, not the name of a file containing the script.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html#cfn-dms-endpoint-gcpmysqlsettings-afterconnectscript
         */
        readonly afterConnectScript?: string;
        /**
         * Adjusts the behavior of AWS DMS when migrating from an SQL Server source database that is hosted as part of an Always On availability group cluster.
         *
         * If you need AWS DMS to poll all the nodes in the Always On cluster for transaction backups, set this attribute to `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html#cfn-dms-endpoint-gcpmysqlsettings-cleansourcemetadataonmismatch
         */
        readonly cleanSourceMetadataOnMismatch?: boolean | cdk.IResolvable;
        /**
         * Database name for the endpoint.
         *
         * For a MySQL source or target endpoint, don't explicitly specify the database using the `DatabaseName` request parameter on either the `CreateEndpoint` or `ModifyEndpoint` API call. Specifying `DatabaseName` when you create or modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the AWS DMS task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html#cfn-dms-endpoint-gcpmysqlsettings-databasename
         */
        readonly databaseName?: string;
        /**
         * Specifies how often to check the binary log for new changes/events when the database is idle.
         *
         * The default is five seconds.
         *
         * Example: `eventsPollInterval=5;`
         *
         * In the example, AWS DMS checks for changes in the binary logs every five seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html#cfn-dms-endpoint-gcpmysqlsettings-eventspollinterval
         */
        readonly eventsPollInterval?: number;
        /**
         * Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.
         *
         * Example: `maxFileSize=512`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html#cfn-dms-endpoint-gcpmysqlsettings-maxfilesize
         */
        readonly maxFileSize?: number;
        /**
         * Improves performance when loading data into the MySQL-compatible target database.
         *
         * Specifies how many threads to use to load the data into the MySQL-compatible target database. Setting a large number of threads can have an adverse effect on database performance, because a separate connection is required for each thread. The default is one.
         *
         * Example: `parallelLoadThreads=1`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html#cfn-dms-endpoint-gcpmysqlsettings-parallelloadthreads
         */
        readonly parallelLoadThreads?: number;
        /**
         * Endpoint connection password.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html#cfn-dms-endpoint-gcpmysqlsettings-password
         */
        readonly password?: string;
        /**
         * The port used by the endpoint database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html#cfn-dms-endpoint-gcpmysqlsettings-port
         */
        readonly port?: number;
        /**
         * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret.` The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the AWS Secrets Manager secret that allows access to the MySQL endpoint.
         *
         * > You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId` . Or you can specify clear-text values for `UserName` , `Password` , `ServerName` , and `Port` . You can't specify both.
         * >
         * > For more information on creating this `SecretsManagerSecret` , the corresponding `SecretsManagerAccessRoleArn` , and the `SecretsManagerSecretId` required to access it, see [Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *AWS Database Migration Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html#cfn-dms-endpoint-gcpmysqlsettings-secretsmanageraccessrolearn
         */
        readonly secretsManagerAccessRoleArn?: string;
        /**
         * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the MySQL endpoint connection details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html#cfn-dms-endpoint-gcpmysqlsettings-secretsmanagersecretid
         */
        readonly secretsManagerSecretId?: string;
        /**
         * The MySQL host name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html#cfn-dms-endpoint-gcpmysqlsettings-servername
         */
        readonly serverName?: string;
        /**
         * Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks.
         *
         * Example: `serverTimezone=US/Pacific;`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html#cfn-dms-endpoint-gcpmysqlsettings-servertimezone
         */
        readonly serverTimezone?: string;
        /**
         * Endpoint connection user name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html#cfn-dms-endpoint-gcpmysqlsettings-username
         */
        readonly username?: string;
    }
    /**
     * Provides information that defines a PostgreSQL endpoint.
     *
     * This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For information about other available settings, see [Extra connection attributes when using PostgreSQL as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib) and [Extra connection attributes when using PostgreSQL as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.PostgreSQL.html#CHAP_Target.PostgreSQL.ConnectionAttrib) in the *AWS Database Migration Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html
     */
    interface PostgreSqlSettingsProperty {
        /**
         * For use with change data capture (CDC) only, this attribute has AWS DMS bypass foreign keys and user triggers to reduce the time it takes to bulk load data.
         *
         * Example: `afterConnectScript=SET session_replication_role='replica'`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-afterconnectscript
         */
        readonly afterConnectScript?: string;
        /**
         * The Babelfish for Aurora PostgreSQL database name for the endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-babelfishdatabasename
         */
        readonly babelfishDatabaseName?: string;
        /**
         * To capture DDL events, AWS DMS creates various artifacts in the PostgreSQL database when the task starts.
         *
         * You can later remove these artifacts.
         *
         * If this value is set to `True` , you don't have to create tables or triggers on the source database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-captureddls
         */
        readonly captureDdls?: boolean | cdk.IResolvable;
        /**
         * Specifies the default behavior of the replication's handling of PostgreSQL- compatible endpoints that require some additional configuration, such as Babelfish endpoints.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-databasemode
         */
        readonly databaseMode?: string;
        /**
         * The schema in which the operational DDL database artifacts are created.
         *
         * The default value is `public` .
         *
         * Example: `ddlArtifactsSchema=xyzddlschema;`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-ddlartifactsschema
         */
        readonly ddlArtifactsSchema?: string;
        /**
         * Sets the client statement timeout for the PostgreSQL instance, in seconds. The default value is 60 seconds.
         *
         * Example: `executeTimeout=100;`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-executetimeout
         */
        readonly executeTimeout?: number;
        /**
         * When set to `true` , this value causes a task to fail if the actual size of a LOB column is greater than the specified `LobMaxSize` .
         *
         * The default value is `false` .
         *
         * If task is set to Limited LOB mode and this option is set to true, the task fails instead of truncating the LOB data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-failtasksonlobtruncation
         */
        readonly failTasksOnLobTruncation?: boolean | cdk.IResolvable;
        /**
         * The write-ahead log (WAL) heartbeat feature mimics a dummy transaction.
         *
         * By doing this, it prevents idle logical replication slots from holding onto old WAL logs, which can result in storage full situations on the source. This heartbeat keeps `restart_lsn` moving and prevents storage full scenarios.
         *
         * The default value is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-heartbeatenable
         */
        readonly heartbeatEnable?: boolean | cdk.IResolvable;
        /**
         * Sets the WAL heartbeat frequency (in minutes).
         *
         * The default value is 5 minutes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-heartbeatfrequency
         */
        readonly heartbeatFrequency?: number;
        /**
         * Sets the schema in which the heartbeat artifacts are created.
         *
         * The default value is `public` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-heartbeatschema
         */
        readonly heartbeatSchema?: string;
        /**
         * When true, lets PostgreSQL migrate the boolean type as boolean.
         *
         * By default, PostgreSQL migrates booleans as `varchar(5)` . You must set this setting on both the source and target endpoints for it to take effect.
         *
         * The default value is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-mapbooleanasboolean
         */
        readonly mapBooleanAsBoolean?: boolean | cdk.IResolvable;
        /**
         * Specifies the maximum size (in KB) of any .csv file used to transfer data to PostgreSQL.
         *
         * The default value is 32,768 KB (32 MB).
         *
         * Example: `maxFileSize=512`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-maxfilesize
         */
        readonly maxFileSize?: number;
        /**
         * Specifies the plugin to use to create a replication slot.
         *
         * The default value is `pglogical` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-pluginname
         */
        readonly pluginName?: string;
        /**
         * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret` .
         *
         * The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the AWS Secrets Manager secret that allows access to the PostgreSQL endpoint.
         *
         * > You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId` . Or you can specify clear-text values for `UserName` , `Password` , `ServerName` , and `Port` . You can't specify both.
         * >
         * > For more information on creating this `SecretsManagerSecret` , the corresponding `SecretsManagerAccessRoleArn` , and the `SecretsManagerSecretId` that is required to access it, see [Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *AWS Database Migration Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-secretsmanageraccessrolearn
         */
        readonly secretsManagerAccessRoleArn?: string;
        /**
         * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the PostgreSQL endpoint connection details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-secretsmanagersecretid
         */
        readonly secretsManagerSecretId?: string;
        /**
         * Sets the name of a previously created logical replication slot for a change data capture (CDC) load of the PostgreSQL source instance.
         *
         * When used with the `CdcStartPosition` request parameter for the AWS DMS API , this attribute also makes it possible to use native CDC start points. DMS verifies that the specified logical replication slot exists before starting the CDC load task. It also verifies that the task was created with a valid setting of `CdcStartPosition` . If the specified slot doesn't exist or the task doesn't have a valid `CdcStartPosition` setting, DMS raises an error.
         *
         * For more information about setting the `CdcStartPosition` request parameter, see [Determining a CDC native start point](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html#CHAP_Task.CDC.StartPoint.Native) in the *AWS Database Migration Service User Guide* . For more information about using `CdcStartPosition` , see [CreateReplicationTask](https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationTask.html) , [StartReplicationTask](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html) , and [ModifyReplicationTask](https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationTask.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html#cfn-dms-endpoint-postgresqlsettings-slotname
         */
        readonly slotName?: string;
    }
}
/**
 * Properties for defining a `CfnEndpoint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html
 */
export interface CfnEndpointProps {
    /**
     * The Amazon Resource Name (ARN) for the certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-certificatearn
     */
    readonly certificateArn?: string;
    /**
     * The name of the endpoint database.
     *
     * For a MySQL source or target endpoint, don't specify `DatabaseName` . To migrate to a specific database, use this setting and `targetDbType` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-databasename
     */
    readonly databaseName?: string;
    /**
     * Settings in JSON format for the source and target DocumentDB endpoint.
     *
     * For more information about other available settings, see [Using extra connections attributes with Amazon DocumentDB as a source](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DocumentDB.html#CHAP_Source.DocumentDB.ECAs) and [Using Amazon DocumentDB as a target for AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DocumentDB.html) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-docdbsettings
     */
    readonly docDbSettings?: CfnEndpoint.DocDbSettingsProperty | cdk.IResolvable;
    /**
     * Settings in JSON format for the target Amazon DynamoDB endpoint.
     *
     * For information about other available settings, see [Using object mapping to migrate data to DynamoDB](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB.html#CHAP_Target.DynamoDB.ObjectMapping) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-dynamodbsettings
     */
    readonly dynamoDbSettings?: CfnEndpoint.DynamoDbSettingsProperty | cdk.IResolvable;
    /**
     * Settings in JSON format for the target OpenSearch endpoint.
     *
     * For more information about the available settings, see [Extra connection attributes when using OpenSearch as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Elasticsearch.html#CHAP_Target.Elasticsearch.Configuration) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-elasticsearchsettings
     */
    readonly elasticsearchSettings?: CfnEndpoint.ElasticsearchSettingsProperty | cdk.IResolvable;
    /**
     * The database endpoint identifier.
     *
     * Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-endpointidentifier
     */
    readonly endpointIdentifier?: string;
    /**
     * The type of endpoint.
     *
     * Valid values are `source` and `target` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-endpointtype
     */
    readonly endpointType: string;
    /**
     * The type of engine for the endpoint, depending on the `EndpointType` value.
     *
     * *Valid values* : `mysql` | `oracle` | `postgres` | `mariadb` | `aurora` | `aurora-postgresql` | `opensearch` | `redshift` | `redshift-serverless` | `s3` | `db2` | `azuredb` | `sybase` | `dynamodb` | `mongodb` | `kinesis` | `kafka` | `elasticsearch` | `docdb` | `sqlserver` | `neptune`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-enginename
     */
    readonly engineName: string;
    /**
     * Additional attributes associated with the connection.
     *
     * Each attribute is specified as a name-value pair associated by an equal sign (=). Multiple attributes are separated by a semicolon (;) with no additional white space. For information on the attributes available for connecting your source or target endpoint, see [Working with AWS DMS Endpoints](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Endpoints.html) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-extraconnectionattributes
     */
    readonly extraConnectionAttributes?: string;
    /**
     * Settings in JSON format for the source GCP MySQL endpoint.
     *
     * These settings are much the same as the settings for any MySQL-compatible endpoint. For more information, see [Extra connection attributes when using MySQL as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html#CHAP_Source.MySQL.ConnectionAttrib) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-gcpmysqlsettings
     */
    readonly gcpMySqlSettings?: CfnEndpoint.GcpMySQLSettingsProperty | cdk.IResolvable;
    /**
     * Settings in JSON format for the source IBM Db2 LUW endpoint.
     *
     * For information about other available settings, see [Extra connection attributes when using Db2 LUW as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DB2.html#CHAP_Source.DB2.ConnectionAttrib) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-ibmdb2settings
     */
    readonly ibmDb2Settings?: CfnEndpoint.IbmDb2SettingsProperty | cdk.IResolvable;
    /**
     * Settings in JSON format for the target Apache Kafka endpoint.
     *
     * For more information about other available settings, see [Using object mapping to migrate data to a Kafka topic](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html#CHAP_Target.Kafka.ObjectMapping) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-kafkasettings
     */
    readonly kafkaSettings?: cdk.IResolvable | CfnEndpoint.KafkaSettingsProperty;
    /**
     * Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams.
     *
     * For more information about other available settings, see [Using object mapping to migrate data to a Kinesis data stream](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html#CHAP_Target.Kinesis.ObjectMapping) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-kinesissettings
     */
    readonly kinesisSettings?: cdk.IResolvable | CfnEndpoint.KinesisSettingsProperty;
    /**
     * An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.
     *
     * If you don't specify a value for the `KmsKeyId` parameter, AWS DMS uses your default encryption key.
     *
     * AWS KMS creates the default encryption key for your AWS account . Your AWS account has a different default encryption key for each AWS Region .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * Settings in JSON format for the source and target Microsoft SQL Server endpoint.
     *
     * For information about other available settings, see [Extra connection attributes when using SQL Server as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SQLServer.html#CHAP_Source.SQLServer.ConnectionAttrib) and [Extra connection attributes when using SQL Server as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SQLServer.html#CHAP_Target.SQLServer.ConnectionAttrib) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-microsoftsqlserversettings
     */
    readonly microsoftSqlServerSettings?: cdk.IResolvable | CfnEndpoint.MicrosoftSqlServerSettingsProperty;
    /**
     * Settings in JSON format for the source MongoDB endpoint.
     *
     * For more information about the available settings, see [Using MongoDB as a target for AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html#CHAP_Source.MongoDB.Configuration) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-mongodbsettings
     */
    readonly mongoDbSettings?: cdk.IResolvable | CfnEndpoint.MongoDbSettingsProperty;
    /**
     * Settings in JSON format for the source and target MySQL endpoint.
     *
     * For information about other available settings, see [Extra connection attributes when using MySQL as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html#CHAP_Source.MySQL.ConnectionAttrib) and [Extra connection attributes when using a MySQL-compatible database as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.MySQL.html#CHAP_Target.MySQL.ConnectionAttrib) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-mysqlsettings
     */
    readonly mySqlSettings?: cdk.IResolvable | CfnEndpoint.MySqlSettingsProperty;
    /**
     * Settings in JSON format for the target Amazon Neptune endpoint.
     *
     * For more information about the available settings, see [Specifying endpoint settings for Amazon Neptune as a target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.EndpointSettings) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-neptunesettings
     */
    readonly neptuneSettings?: cdk.IResolvable | CfnEndpoint.NeptuneSettingsProperty;
    /**
     * Settings in JSON format for the source and target Oracle endpoint.
     *
     * For information about other available settings, see [Extra connection attributes when using Oracle as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.ConnectionAttrib) and [Extra connection attributes when using Oracle as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Oracle.html#CHAP_Target.Oracle.ConnectionAttrib) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-oraclesettings
     */
    readonly oracleSettings?: cdk.IResolvable | CfnEndpoint.OracleSettingsProperty;
    /**
     * The password to be used to log in to the endpoint database.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-password
     */
    readonly password?: string;
    /**
     * The port used by the endpoint database.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-port
     */
    readonly port?: number;
    /**
     * Settings in JSON format for the source and target PostgreSQL endpoint.
     *
     * For information about other available settings, see [Extra connection attributes when using PostgreSQL as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib) and [Extra connection attributes when using PostgreSQL as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.PostgreSQL.html#CHAP_Target.PostgreSQL.ConnectionAttrib) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-postgresqlsettings
     */
    readonly postgreSqlSettings?: cdk.IResolvable | CfnEndpoint.PostgreSqlSettingsProperty;
    /**
     * Settings in JSON format for the target Redis endpoint.
     *
     * For information about other available settings, see [Specifying endpoint settings for Redis as a target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Redis.html#CHAP_Target.Redis.EndpointSettings) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-redissettings
     */
    readonly redisSettings?: cdk.IResolvable | CfnEndpoint.RedisSettingsProperty;
    /**
     * Settings in JSON format for the Amazon Redshift endpoint.
     *
     * For more information about other available settings, see [Extra connection attributes when using Amazon Redshift as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Redshift.html#CHAP_Target.Redshift.ConnectionAttrib) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-redshiftsettings
     */
    readonly redshiftSettings?: cdk.IResolvable | CfnEndpoint.RedshiftSettingsProperty;
    /**
     * A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object.
     *
     * The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as `Example-App-ARN1` .
     *
     * For example, this value might result in the `EndpointArn` value `arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1` . If you don't specify a `ResourceIdentifier` value, AWS DMS generates a default identifier value for the end of `EndpointArn` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-resourceidentifier
     */
    readonly resourceIdentifier?: string;
    /**
     * Settings in JSON format for the source and target Amazon S3 endpoint.
     *
     * For more information about other available settings, see [Extra connection attributes when using Amazon S3 as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.S3.html#CHAP_Source.S3.Configuring) and [Extra connection attributes when using Amazon S3 as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-s3settings
     */
    readonly s3Settings?: cdk.IResolvable | CfnEndpoint.S3SettingsProperty;
    /**
     * The name of the server where the endpoint database resides.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-servername
     */
    readonly serverName?: string;
    /**
     * The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is `none` .
     *
     * > When `engine_name` is set to S3, the only allowed value is `none` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-sslmode
     */
    readonly sslMode?: string;
    /**
     * Settings in JSON format for the source and target SAP ASE endpoint.
     *
     * For information about other available settings, see [Extra connection attributes when using SAP ASE as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SAP.html#CHAP_Source.SAP.ConnectionAttrib) and [Extra connection attributes when using SAP ASE as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SAP.html#CHAP_Target.SAP.ConnectionAttrib) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-sybasesettings
     */
    readonly sybaseSettings?: cdk.IResolvable | CfnEndpoint.SybaseSettingsProperty;
    /**
     * One or more tags to be assigned to the endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The user name to be used to log in to the endpoint database.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#cfn-dms-endpoint-username
     */
    readonly username?: string;
}
/**
 * Use the `AWS::DMS::EventSubscription` resource to get notifications for AWS Database Migration Service events through the Amazon Simple Notification Service .
 *
 * For more information, see [Working with events and notifications in AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html) in the *AWS Database Migration Service User Guide* .
 *
 * @cloudformationResource AWS::DMS::EventSubscription
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-eventsubscription.html
 */
export declare class CfnEventSubscription extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEventSubscription from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEventSubscription;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Indicates whether to activate the subscription.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * A list of event categories for a source type that you want to subscribe to.
     */
    eventCategories?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification.
     */
    snsTopicArn: string;
    /**
     * A list of identifiers for which AWS DMS provides notification events.
     */
    sourceIds?: Array<string>;
    /**
     * The type of AWS DMS resource that generates the events.
     */
    sourceType?: string;
    /**
     * The name of the AWS DMS event notification subscription.
     */
    subscriptionName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * One or more tags to be assigned to the event subscription.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEventSubscriptionProps);
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
 * Properties for defining a `CfnEventSubscription`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-eventsubscription.html
 */
export interface CfnEventSubscriptionProps {
    /**
     * Indicates whether to activate the subscription.
     *
     * If you don't specify this property, AWS CloudFormation activates the subscription.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-eventsubscription.html#cfn-dms-eventsubscription-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * A list of event categories for a source type that you want to subscribe to.
     *
     * If you don't specify this property, you are notified about all event categories. For more information, see [Working with Events and Notifications](https://docs.aws.amazon.com//dms/latest/userguide/CHAP_Events.html) in the *AWS DMS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-eventsubscription.html#cfn-dms-eventsubscription-eventcategories
     */
    readonly eventCategories?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification.
     *
     * The ARN is created by Amazon SNS when you create a topic and subscribe to it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-eventsubscription.html#cfn-dms-eventsubscription-snstopicarn
     */
    readonly snsTopicArn: string;
    /**
     * A list of identifiers for which AWS DMS provides notification events.
     *
     * If you don't specify a value, notifications are provided for all sources.
     *
     * If you specify multiple values, they must be of the same type. For example, if you specify a database instance ID, then all of the other values must be database instance IDs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-eventsubscription.html#cfn-dms-eventsubscription-sourceids
     */
    readonly sourceIds?: Array<string>;
    /**
     * The type of AWS DMS resource that generates the events.
     *
     * For example, if you want to be notified of events generated by a replication instance, you set this parameter to `replication-instance` . If this value isn't specified, all events are returned.
     *
     * *Valid values* : `replication-instance` | `replication-task`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-eventsubscription.html#cfn-dms-eventsubscription-sourcetype
     */
    readonly sourceType?: string;
    /**
     * The name of the AWS DMS event notification subscription.
     *
     * This name must be less than 255 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-eventsubscription.html#cfn-dms-eventsubscription-subscriptionname
     */
    readonly subscriptionName?: string;
    /**
     * One or more tags to be assigned to the event subscription.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-eventsubscription.html#cfn-dms-eventsubscription-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationconfig.html.
 *
 * @cloudformationResource AWS::DMS::ReplicationConfig
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationconfig.html
 */
export declare class CfnReplicationConfig extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnReplicationConfig from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnReplicationConfig;
    /**
     * The Amazon Resource Name (ARN) of this AWS DMS Serverless replication configuration.
     *
     * @cloudformationAttribute ReplicationConfigArn
     */
    readonly attrReplicationConfigArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Configuration parameters for provisioning an AWS DMS Serverless replication.
     */
    computeConfig: CfnReplicationConfig.ComputeConfigProperty | cdk.IResolvable;
    /**
     * A unique identifier that you want to use to create a `ReplicationConfigArn` that is returned as part of the output from this action.
     */
    replicationConfigIdentifier: string;
    /**
     * Optional JSON settings for AWS DMS Serverless replications that are provisioned using this replication configuration.
     */
    replicationSettings?: any | cdk.IResolvable;
    /**
     * The type of AWS DMS Serverless replication to provision using this replication configuration.
     */
    replicationType: string;
    /**
     * Optional unique value or name that you set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource.
     */
    resourceIdentifier?: string;
    /**
     * The Amazon Resource Name (ARN) of the source endpoint for this AWS DMS Serverless replication configuration.
     */
    sourceEndpointArn: string;
    /**
     * Optional JSON settings for specifying supplemental data.
     */
    supplementalSettings?: any | cdk.IResolvable;
    /**
     * JSON table mappings for AWS DMS Serverless replications that are provisioned using this replication configuration.
     */
    tableMappings: any | cdk.IResolvable;
    /**
     * One or more optional tags associated with resources used by the AWS DMS Serverless replication.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The Amazon Resource Name (ARN) of the target endpoint for this AWS DMS serverless replication configuration.
     */
    targetEndpointArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnReplicationConfigProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnReplicationConfig {
    /**
     * Configuration parameters for provisioning an AWS DMS Serverless replication.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-replicationconfig-computeconfig.html
     */
    interface ComputeConfigProperty {
        /**
         * The Availability Zone where the AWS DMS Serverless replication using this configuration will run.
         *
         * The default value is a random, system-chosen Availability Zone in the configuration's AWS Region , for example, `"us-west-2"` . You can't set this parameter if the `MultiAZ` parameter is set to `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-replicationconfig-computeconfig.html#cfn-dms-replicationconfig-computeconfig-availabilityzone
         */
        readonly availabilityZone?: string;
        /**
         * A list of custom DNS name servers supported for the AWS DMS Serverless replication to access your source or target database.
         *
         * This list overrides the default name servers supported by the AWS DMS Serverless replication. You can specify a comma-separated list of internet addresses for up to four DNS name servers. For example: `"1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4"`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-replicationconfig-computeconfig.html#cfn-dms-replicationconfig-computeconfig-dnsnameservers
         */
        readonly dnsNameServers?: string;
        /**
         * An AWS Key Management Service ( AWS KMS ) key Amazon Resource Name (ARN) that is used to encrypt the data during AWS DMS Serverless replication.
         *
         * If you don't specify a value for the `KmsKeyId` parameter, AWS DMS uses your default encryption key.
         *
         * AWS KMS creates the default encryption key for your Amazon Web Services account. Your AWS account has a different default encryption key for each AWS Region .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-replicationconfig-computeconfig.html#cfn-dms-replicationconfig-computeconfig-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * Specifies the maximum value of the AWS DMS capacity units (DCUs) for which a given AWS DMS Serverless replication can be provisioned.
         *
         * A single DCU is 2GB of RAM, with 1 DCU as the minimum value allowed. The list of valid DCU values includes 1, 2, 4, 8, 16, 32, 64, 128, 192, 256, and 384. So, the maximum value that you can specify for AWS DMS Serverless is 384. The `MaxCapacityUnits` parameter is the only DCU parameter you are required to specify.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-replicationconfig-computeconfig.html#cfn-dms-replicationconfig-computeconfig-maxcapacityunits
         */
        readonly maxCapacityUnits: number;
        /**
         * Specifies the minimum value of the AWS DMS capacity units (DCUs) for which a given AWS DMS Serverless replication can be provisioned.
         *
         * A single DCU is 2GB of RAM, with 1 DCU as the minimum value allowed. The list of valid DCU values includes 1, 2, 4, 8, 16, 32, 64, 128, 192, 256, and 384. So, the minimum DCU value that you can specify for AWS DMS Serverless is 1. If you don't set this value, AWS DMS sets this parameter to the minimum DCU value allowed, 1. If there is no current source activity, AWS DMS scales down your replication until it reaches the value specified in `MinCapacityUnits` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-replicationconfig-computeconfig.html#cfn-dms-replicationconfig-computeconfig-mincapacityunits
         */
        readonly minCapacityUnits?: number;
        /**
         * Specifies whether the AWS DMS Serverless replication is a Multi-AZ deployment.
         *
         * You can't set the `AvailabilityZone` parameter if the `MultiAZ` parameter is set to `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-replicationconfig-computeconfig.html#cfn-dms-replicationconfig-computeconfig-multiaz
         */
        readonly multiAz?: boolean | cdk.IResolvable;
        /**
         * The weekly time range during which system maintenance can occur for the AWS DMS Serverless replication, in Universal Coordinated Time (UTC).
         *
         * The format is `ddd:hh24:mi-ddd:hh24:mi` .
         *
         * The default is a 30-minute window selected at random from an 8-hour block of time per AWS Region . This maintenance occurs on a random day of the week. Valid values for days of the week include `Mon` , `Tue` , `Wed` , `Thu` , `Fri` , `Sat` , and `Sun` .
         *
         * Constraints include a minimum 30-minute window.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-replicationconfig-computeconfig.html#cfn-dms-replicationconfig-computeconfig-preferredmaintenancewindow
         */
        readonly preferredMaintenanceWindow?: string;
        /**
         * Specifies a subnet group identifier to associate with the AWS DMS Serverless replication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-replicationconfig-computeconfig.html#cfn-dms-replicationconfig-computeconfig-replicationsubnetgroupid
         */
        readonly replicationSubnetGroupId?: string;
        /**
         * Specifies the virtual private cloud (VPC) security group to use with the AWS DMS Serverless replication.
         *
         * The VPC security group must work with the VPC containing the replication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-replicationconfig-computeconfig.html#cfn-dms-replicationconfig-computeconfig-vpcsecuritygroupids
         */
        readonly vpcSecurityGroupIds?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnReplicationConfig`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationconfig.html
 */
export interface CfnReplicationConfigProps {
    /**
     * Configuration parameters for provisioning an AWS DMS Serverless replication.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationconfig.html#cfn-dms-replicationconfig-computeconfig
     */
    readonly computeConfig: CfnReplicationConfig.ComputeConfigProperty | cdk.IResolvable;
    /**
     * A unique identifier that you want to use to create a `ReplicationConfigArn` that is returned as part of the output from this action.
     *
     * You can then pass this output `ReplicationConfigArn` as the value of the `ReplicationConfigArn` option for other actions to identify both AWS DMS Serverless replications and replication configurations that you want those actions to operate on. For some actions, you can also use either this unique identifier or a corresponding ARN in action filters to identify the specific replication and replication configuration to operate on.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationconfig.html#cfn-dms-replicationconfig-replicationconfigidentifier
     */
    readonly replicationConfigIdentifier: string;
    /**
     * Optional JSON settings for AWS DMS Serverless replications that are provisioned using this replication configuration.
     *
     * For example, see [Change processing tuning settings](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.ChangeProcessingTuning.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationconfig.html#cfn-dms-replicationconfig-replicationsettings
     */
    readonly replicationSettings?: any | cdk.IResolvable;
    /**
     * The type of AWS DMS Serverless replication to provision using this replication configuration.
     *
     * Possible values:
     *
     * - `"full-load"`
     * - `"cdc"`
     * - `"full-load-and-cdc"`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationconfig.html#cfn-dms-replicationconfig-replicationtype
     */
    readonly replicationType: string;
    /**
     * Optional unique value or name that you set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource.
     *
     * For more information, see [Fine-grained access control using resource names and tags](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.FineGrainedAccess) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationconfig.html#cfn-dms-replicationconfig-resourceidentifier
     */
    readonly resourceIdentifier?: string;
    /**
     * The Amazon Resource Name (ARN) of the source endpoint for this AWS DMS Serverless replication configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationconfig.html#cfn-dms-replicationconfig-sourceendpointarn
     */
    readonly sourceEndpointArn: string;
    /**
     * Optional JSON settings for specifying supplemental data.
     *
     * For more information, see [Specifying supplemental data for task settings](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationconfig.html#cfn-dms-replicationconfig-supplementalsettings
     */
    readonly supplementalSettings?: any | cdk.IResolvable;
    /**
     * JSON table mappings for AWS DMS Serverless replications that are provisioned using this replication configuration.
     *
     * For more information, see [Specifying table selection and transformations rules using JSON](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.SelectionTransformation.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationconfig.html#cfn-dms-replicationconfig-tablemappings
     */
    readonly tableMappings: any | cdk.IResolvable;
    /**
     * One or more optional tags associated with resources used by the AWS DMS Serverless replication.
     *
     * For more information, see [Tagging resources in AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tagging.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationconfig.html#cfn-dms-replicationconfig-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The Amazon Resource Name (ARN) of the target endpoint for this AWS DMS serverless replication configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationconfig.html#cfn-dms-replicationconfig-targetendpointarn
     */
    readonly targetEndpointArn: string;
}
/**
 * The `AWS::DMS::ReplicationInstance` resource creates an AWS DMS replication instance.
 *
 * To create a ReplicationInstance, you need permissions to create instances. You'll need similar permissions to terminate instances when you delete stacks with instances.
 *
 * @cloudformationResource AWS::DMS::ReplicationInstance
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html
 */
export declare class CfnReplicationInstance extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnReplicationInstance from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnReplicationInstance;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * One or more private IP addresses for the replication instance.
     *
     * @cloudformationAttribute ReplicationInstancePrivateIpAddresses
     */
    readonly attrReplicationInstancePrivateIpAddresses: string;
    /**
     * One or more public IP addresses for the replication instance.
     *
     * @cloudformationAttribute ReplicationInstancePublicIpAddresses
     */
    readonly attrReplicationInstancePublicIpAddresses: string;
    /**
     * The amount of storage (in gigabytes) to be initially allocated for the replication instance.
     */
    allocatedStorage?: number;
    /**
     * Indicates that major version upgrades are allowed.
     */
    allowMajorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * A value that indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window.
     */
    autoMinorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * The Availability Zone that the replication instance will be created in.
     */
    availabilityZone?: string;
    /**
     * The engine version number of the replication instance.
     */
    engineVersion?: string;
    /**
     * An AWS KMS key identifier that is used to encrypt the data on the replication instance.
     */
    kmsKeyId?: string;
    /**
     * Specifies whether the replication instance is a Multi-AZ deployment.
     */
    multiAz?: boolean | cdk.IResolvable;
    /**
     * The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing.
     */
    networkType?: string;
    /**
     * The weekly time range during which system maintenance can occur, in UTC.
     */
    preferredMaintenanceWindow?: string;
    /**
     * Specifies the accessibility options for the replication instance.
     */
    publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * The compute and memory capacity of the replication instance as defined for the specified replication instance class.
     */
    replicationInstanceClass: string;
    /**
     * The replication instance identifier. This parameter is stored as a lowercase string.
     */
    replicationInstanceIdentifier?: string;
    /**
     * A subnet group to associate with the replication instance.
     */
    replicationSubnetGroupIdentifier?: string;
    /**
     * A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object.
     */
    resourceIdentifier?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * One or more tags to be assigned to the replication instance.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Specifies the virtual private cloud (VPC) security group to be used with the replication instance.
     */
    vpcSecurityGroupIds?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnReplicationInstanceProps);
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
 * Properties for defining a `CfnReplicationInstance`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html
 */
export interface CfnReplicationInstanceProps {
    /**
     * The amount of storage (in gigabytes) to be initially allocated for the replication instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-allocatedstorage
     */
    readonly allocatedStorage?: number;
    /**
     * Indicates that major version upgrades are allowed.
     *
     * Changing this parameter does not result in an outage, and the change is asynchronously applied as soon as possible.
     *
     * This parameter must be set to `true` when specifying a value for the `EngineVersion` parameter that is a different major version than the replication instance's current version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-allowmajorversionupgrade
     */
    readonly allowMajorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * A value that indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window.
     *
     * This parameter defaults to `true` .
     *
     * Default: `true`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-autominorversionupgrade
     */
    readonly autoMinorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * The Availability Zone that the replication instance will be created in.
     *
     * The default value is a random, system-chosen Availability Zone in the endpoint's AWS Region , for example `us-east-1d` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-availabilityzone
     */
    readonly availabilityZone?: string;
    /**
     * The engine version number of the replication instance.
     *
     * If an engine version number is not specified when a replication instance is created, the default is the latest engine version available.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-engineversion
     */
    readonly engineVersion?: string;
    /**
     * An AWS KMS key identifier that is used to encrypt the data on the replication instance.
     *
     * If you don't specify a value for the `KmsKeyId` parameter, AWS DMS uses your default encryption key.
     *
     * AWS KMS creates the default encryption key for your AWS account . Your AWS account has a different default encryption key for each AWS Region .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * Specifies whether the replication instance is a Multi-AZ deployment.
     *
     * You can't set the `AvailabilityZone` parameter if the Multi-AZ parameter is set to `true` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-multiaz
     */
    readonly multiAz?: boolean | cdk.IResolvable;
    /**
     * The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing.
     *
     * IPv6 only is not yet supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-networktype
     */
    readonly networkType?: string;
    /**
     * The weekly time range during which system maintenance can occur, in UTC.
     *
     * *Format* : `ddd:hh24:mi-ddd:hh24:mi`
     *
     * *Default* : A 30-minute window selected at random from an 8-hour block of time per AWS Region , occurring on a random day of the week.
     *
     * *Valid days* ( `ddd` ): `Mon` | `Tue` | `Wed` | `Thu` | `Fri` | `Sat` | `Sun`
     *
     * *Constraints* : Minimum 30-minute window.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-preferredmaintenancewindow
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * Specifies the accessibility options for the replication instance.
     *
     * A value of `true` represents an instance with a public IP address. A value of `false` represents an instance with a private IP address. The default value is `true` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-publiclyaccessible
     */
    readonly publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * The compute and memory capacity of the replication instance as defined for the specified replication instance class.
     *
     * For example, to specify the instance class dms.c4.large, set this parameter to `"dms.c4.large"` . For more information on the settings and capacities for the available replication instance classes, see [Selecting the right AWS DMS replication instance for your migration](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-replicationinstanceclass
     */
    readonly replicationInstanceClass: string;
    /**
     * The replication instance identifier. This parameter is stored as a lowercase string.
     *
     * Constraints:
     *
     * - Must contain 1-63 alphanumeric characters or hyphens.
     * - First character must be a letter.
     * - Can't end with a hyphen or contain two consecutive hyphens.
     *
     * Example: `myrepinstance`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-replicationinstanceidentifier
     */
    readonly replicationInstanceIdentifier?: string;
    /**
     * A subnet group to associate with the replication instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-replicationsubnetgroupidentifier
     */
    readonly replicationSubnetGroupIdentifier?: string;
    /**
     * A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object.
     *
     * The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as `Example-App-ARN1` . For example, this value might result in the `EndpointArn` value `arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1` . If you don't specify a `ResourceIdentifier` value, AWS DMS generates a default identifier value for the end of `EndpointArn` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-resourceidentifier
     */
    readonly resourceIdentifier?: string;
    /**
     * One or more tags to be assigned to the replication instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specifies the virtual private cloud (VPC) security group to be used with the replication instance.
     *
     * The VPC security group must work with the VPC containing the replication instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-vpcsecuritygroupids
     */
    readonly vpcSecurityGroupIds?: Array<string>;
}
/**
 * The `AWS::DMS::ReplicationSubnetGroup` resource creates an AWS DMS replication subnet group.
 *
 * Subnet groups must contain at least two subnets in two different Availability Zones in the same AWS Region .
 *
 * > Resource creation fails if the `dms-vpc-role` AWS Identity and Access Management ( IAM ) role doesn't already exist. For more information, see [Creating the IAM Roles to Use With the AWS CLI and AWS DMS API](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.APIRole.html) in the *AWS Database Migration Service User Guide* .
 *
 * @cloudformationResource AWS::DMS::ReplicationSubnetGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html
 */
export declare class CfnReplicationSubnetGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnReplicationSubnetGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnReplicationSubnetGroup;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The description for the subnet group.
     */
    replicationSubnetGroupDescription: string;
    /**
     * The identifier for the replication subnet group.
     */
    replicationSubnetGroupIdentifier?: string;
    /**
     * One or more subnet IDs to be assigned to the subnet group.
     */
    subnetIds: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * One or more tags to be assigned to the subnet group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnReplicationSubnetGroupProps);
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
 * Properties for defining a `CfnReplicationSubnetGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html
 */
export interface CfnReplicationSubnetGroupProps {
    /**
     * The description for the subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html#cfn-dms-replicationsubnetgroup-replicationsubnetgroupdescription
     */
    readonly replicationSubnetGroupDescription: string;
    /**
     * The identifier for the replication subnet group.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html#cfn-dms-replicationsubnetgroup-replicationsubnetgroupidentifier
     */
    readonly replicationSubnetGroupIdentifier?: string;
    /**
     * One or more subnet IDs to be assigned to the subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html#cfn-dms-replicationsubnetgroup-subnetids
     */
    readonly subnetIds: Array<string>;
    /**
     * One or more tags to be assigned to the subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html#cfn-dms-replicationsubnetgroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::DMS::ReplicationTask` resource creates an AWS DMS replication task.
 *
 * @cloudformationResource AWS::DMS::ReplicationTask
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationtask.html
 */
export declare class CfnReplicationTask extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnReplicationTask from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnReplicationTask;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Indicates when you want a change data capture (CDC) operation to start.
     */
    cdcStartPosition?: string;
    /**
     * Indicates the start time for a change data capture (CDC) operation.
     */
    cdcStartTime?: number;
    /**
     * Indicates when you want a change data capture (CDC) operation to stop.
     */
    cdcStopPosition?: string;
    /**
     * The migration type.
     */
    migrationType: string;
    /**
     * The Amazon Resource Name (ARN) of a replication instance.
     */
    replicationInstanceArn: string;
    /**
     * An identifier for the replication task.
     */
    replicationTaskIdentifier?: string;
    /**
     * Overall settings for the task, in JSON format.
     */
    replicationTaskSettings?: string;
    /**
     * A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object.
     */
    resourceIdentifier?: string;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies the source endpoint.
     */
    sourceEndpointArn: string;
    /**
     * The table mappings for the task, in JSON format.
     */
    tableMappings: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * One or more tags to be assigned to the replication task.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies the target endpoint.
     */
    targetEndpointArn: string;
    /**
     * Supplemental information that the task requires to migrate the data for certain source and target endpoints.
     */
    taskData?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnReplicationTaskProps);
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
 * Properties for defining a `CfnReplicationTask`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationtask.html
 */
export interface CfnReplicationTaskProps {
    /**
     * Indicates when you want a change data capture (CDC) operation to start.
     *
     * Use either `CdcStartPosition` or `CdcStartTime` to specify when you want a CDC operation to start. Specifying both values results in an error.
     *
     * The value can be in date, checkpoint, log sequence number (LSN), or system change number (SCN) format.
     *
     * Here is a date example: `--cdc-start-position "2018-03-08T12:12:12"`
     *
     * Here is a checkpoint example: `--cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93"`
     *
     * Here is an LSN example: `--cdc-start-position “mysql-bin-changelog.000024:373”`
     *
     * > When you use this task setting with a source PostgreSQL database, a logical replication slot should already be created and associated with the source endpoint. You can verify this by setting the `slotName` extra connection attribute to the name of this logical replication slot. For more information, see [Extra Connection Attributes When Using PostgreSQL as a Source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationtask.html#cfn-dms-replicationtask-cdcstartposition
     */
    readonly cdcStartPosition?: string;
    /**
     * Indicates the start time for a change data capture (CDC) operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationtask.html#cfn-dms-replicationtask-cdcstarttime
     */
    readonly cdcStartTime?: number;
    /**
     * Indicates when you want a change data capture (CDC) operation to stop.
     *
     * The value can be either server time or commit time.
     *
     * Here is a server time example: `--cdc-stop-position "server_time:2018-02-09T12:12:12"`
     *
     * Here is a commit time example: `--cdc-stop-position "commit_time: 2018-02-09T12:12:12"`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationtask.html#cfn-dms-replicationtask-cdcstopposition
     */
    readonly cdcStopPosition?: string;
    /**
     * The migration type.
     *
     * Valid values: `full-load` | `cdc` | `full-load-and-cdc`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationtask.html#cfn-dms-replicationtask-migrationtype
     */
    readonly migrationType: string;
    /**
     * The Amazon Resource Name (ARN) of a replication instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationtask.html#cfn-dms-replicationtask-replicationinstancearn
     */
    readonly replicationInstanceArn: string;
    /**
     * An identifier for the replication task.
     *
     * Constraints:
     *
     * - Must contain 1-255 alphanumeric characters or hyphens.
     * - First character must be a letter.
     * - Cannot end with a hyphen or contain two consecutive hyphens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationtask.html#cfn-dms-replicationtask-replicationtaskidentifier
     */
    readonly replicationTaskIdentifier?: string;
    /**
     * Overall settings for the task, in JSON format.
     *
     * For more information, see [Specifying Task Settings for AWS Database Migration Service Tasks](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationtask.html#cfn-dms-replicationtask-replicationtasksettings
     */
    readonly replicationTaskSettings?: string;
    /**
     * A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object.
     *
     * The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as `Example-App-ARN1` .
     *
     * For example, this value might result in the `EndpointArn` value `arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1` . If you don't specify a `ResourceIdentifier` value, AWS DMS generates a default identifier value for the end of `EndpointArn` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationtask.html#cfn-dms-replicationtask-resourceidentifier
     */
    readonly resourceIdentifier?: string;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies the source endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationtask.html#cfn-dms-replicationtask-sourceendpointarn
     */
    readonly sourceEndpointArn: string;
    /**
     * The table mappings for the task, in JSON format.
     *
     * For more information, see [Using Table Mapping to Specify Task Settings](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html) in the *AWS Database Migration Service User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationtask.html#cfn-dms-replicationtask-tablemappings
     */
    readonly tableMappings: string;
    /**
     * One or more tags to be assigned to the replication task.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationtask.html#cfn-dms-replicationtask-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies the target endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationtask.html#cfn-dms-replicationtask-targetendpointarn
     */
    readonly targetEndpointArn: string;
    /**
     * Supplemental information that the task requires to migrate the data for certain source and target endpoints.
     *
     * For more information, see [Specifying Supplemental Data for Task Settings](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html) in the *AWS Database Migration Service User Guide.*
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationtask.html#cfn-dms-replicationtask-taskdata
     */
    readonly taskData?: string;
}
/**
 * This object provides information about a AWS DMS data migration.
 *
 * @cloudformationResource AWS::DMS::DataMigration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html
 */
export declare class CfnDataMigration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataMigration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataMigration;
    /**
     * The Amazon Resource Name (ARN) that identifies this replication.
     *
     * @cloudformationAttribute DataMigrationArn
     */
    readonly attrDataMigrationArn: string;
    /**
     * The UTC time when DMS created the data migration.
     *
     * @cloudformationAttribute DataMigrationCreateTime
     */
    readonly attrDataMigrationCreateTime: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The property describes an ARN of the data migration.
     */
    dataMigrationIdentifier?: string;
    /**
     * The user-friendly name for the data migration.
     */
    dataMigrationName?: string;
    /**
     * Specifies CloudWatch settings and selection rules for the data migration.
     */
    dataMigrationSettings?: CfnDataMigration.DataMigrationSettingsProperty | cdk.IResolvable;
    /**
     * Specifies whether the data migration is full-load only, change data capture (CDC) only, or full-load and CDC.
     */
    dataMigrationType: string;
    /**
     * The property describes an identifier for the migration project.
     */
    migrationProjectIdentifier: string;
    /**
     * The IAM role that the data migration uses to access AWS resources.
     */
    serviceAccessRoleArn: string;
    /**
     * Specifies information about the data migration's source data provider.
     */
    sourceDataSettings?: Array<cdk.IResolvable | CfnDataMigration.SourceDataSettingsProperty> | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDataMigrationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataMigration {
    /**
     * Options for configuring a data migration, including whether to enable CloudWatch logs, and the selection rules to use to include or exclude database objects from the migration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-datamigration-datamigrationsettings.html
     */
    interface DataMigrationSettingsProperty {
        /**
         * Whether to enable CloudWatch logging for the data migration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-datamigration-datamigrationsettings.html#cfn-dms-datamigration-datamigrationsettings-cloudwatchlogsenabled
         */
        readonly cloudwatchLogsEnabled?: boolean | cdk.IResolvable;
        /**
         * The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-datamigration-datamigrationsettings.html#cfn-dms-datamigration-datamigrationsettings-numberofjobs
         */
        readonly numberOfJobs?: number;
        /**
         * A JSON-formatted string that defines what objects to include and exclude from the migration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-datamigration-datamigrationsettings.html#cfn-dms-datamigration-datamigrationsettings-selectionrules
         */
        readonly selectionRules?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-datamigration-sourcedatasettings.html
     */
    interface SourceDataSettingsProperty {
        /**
         * The property is a point in the database engine's log that defines a time where you can begin CDC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-datamigration-sourcedatasettings.html#cfn-dms-datamigration-sourcedatasettings-cdcstartposition
         */
        readonly cdcStartPosition?: string;
        /**
         * The property indicates the start time for a change data capture (CDC) operation.
         *
         * The value is server time in UTC format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-datamigration-sourcedatasettings.html#cfn-dms-datamigration-sourcedatasettings-cdcstarttime
         */
        readonly cdcStartTime?: string;
        /**
         * The property indicates the stop time for a change data capture (CDC) operation.
         *
         * The value is server time in UTC format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-datamigration-sourcedatasettings.html#cfn-dms-datamigration-sourcedatasettings-cdcstoptime
         */
        readonly cdcStopTime?: string;
        /**
         * The property sets the name of a previously created logical replication slot for a change data capture (CDC) load of the source instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-datamigration-sourcedatasettings.html#cfn-dms-datamigration-sourcedatasettings-slotname
         */
        readonly slotName?: string;
    }
}
/**
 * Properties for defining a `CfnDataMigration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html
 */
export interface CfnDataMigrationProps {
    /**
     * The property describes an ARN of the data migration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-datamigrationidentifier
     */
    readonly dataMigrationIdentifier?: string;
    /**
     * The user-friendly name for the data migration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-datamigrationname
     */
    readonly dataMigrationName?: string;
    /**
     * Specifies CloudWatch settings and selection rules for the data migration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-datamigrationsettings
     */
    readonly dataMigrationSettings?: CfnDataMigration.DataMigrationSettingsProperty | cdk.IResolvable;
    /**
     * Specifies whether the data migration is full-load only, change data capture (CDC) only, or full-load and CDC.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-datamigrationtype
     */
    readonly dataMigrationType: string;
    /**
     * The property describes an identifier for the migration project.
     *
     * It is used for describing/deleting/modifying can be name/arn
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-migrationprojectidentifier
     */
    readonly migrationProjectIdentifier: string;
    /**
     * The IAM role that the data migration uses to access AWS resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-serviceaccessrolearn
     */
    readonly serviceAccessRoleArn: string;
    /**
     * Specifies information about the data migration's source data provider.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-sourcedatasettings
     */
    readonly sourceDataSettings?: Array<cdk.IResolvable | CfnDataMigration.SourceDataSettingsProperty> | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Provides information that defines a data provider.
 *
 * @cloudformationResource AWS::DMS::DataProvider
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-dataprovider.html
 */
export declare class CfnDataProvider extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataProvider from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataProvider;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the data provider.
     *
     * @cloudformationAttribute DataProviderArn
     */
    readonly attrDataProviderArn: string;
    /**
     * The time the data provider was created.
     *
     * @cloudformationAttribute DataProviderCreationTime
     */
    readonly attrDataProviderCreationTime: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The identifier of the data provider.
     */
    dataProviderIdentifier?: string;
    /**
     * The name of the data provider.
     */
    dataProviderName?: string;
    /**
     * A description of the data provider.
     */
    description?: string;
    /**
     * The type of database engine for the data provider.
     */
    engine: string;
    /**
     * The property describes the exact settings which can be modified.
     */
    exactSettings?: boolean | cdk.IResolvable;
    /**
     * The settings in JSON format for a data provider.
     */
    settings?: cdk.IResolvable | CfnDataProvider.SettingsProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDataProviderProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataProvider {
    /**
     * The property identifies the exact type of settings for the data provider.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-settings.html
     */
    interface SettingsProperty {
        /**
         * DocDbSettings property identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-settings.html#cfn-dms-dataprovider-settings-docdbsettings
         */
        readonly docDbSettings?: CfnDataProvider.DocDbSettingsProperty | cdk.IResolvable;
        /**
         * MariaDbSettings property identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-settings.html#cfn-dms-dataprovider-settings-mariadbsettings
         */
        readonly mariaDbSettings?: cdk.IResolvable | CfnDataProvider.MariaDbSettingsProperty;
        /**
         * MicrosoftSqlServerSettings property identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-settings.html#cfn-dms-dataprovider-settings-microsoftsqlserversettings
         */
        readonly microsoftSqlServerSettings?: cdk.IResolvable | CfnDataProvider.MicrosoftSqlServerSettingsProperty;
        /**
         * MongoDbSettings property identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-settings.html#cfn-dms-dataprovider-settings-mongodbsettings
         */
        readonly mongoDbSettings?: cdk.IResolvable | CfnDataProvider.MongoDbSettingsProperty;
        /**
         * MySqlSettings property identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-settings.html#cfn-dms-dataprovider-settings-mysqlsettings
         */
        readonly mySqlSettings?: cdk.IResolvable | CfnDataProvider.MySqlSettingsProperty;
        /**
         * OracleSettings property identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-settings.html#cfn-dms-dataprovider-settings-oraclesettings
         */
        readonly oracleSettings?: cdk.IResolvable | CfnDataProvider.OracleSettingsProperty;
        /**
         * PostgreSqlSettings property identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-settings.html#cfn-dms-dataprovider-settings-postgresqlsettings
         */
        readonly postgreSqlSettings?: cdk.IResolvable | CfnDataProvider.PostgreSqlSettingsProperty;
        /**
         * RedshiftSettings property identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-settings.html#cfn-dms-dataprovider-settings-redshiftsettings
         */
        readonly redshiftSettings?: cdk.IResolvable | CfnDataProvider.RedshiftSettingsProperty;
    }
    /**
     * Provides information that defines a PostgreSQL endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-postgresqlsettings.html
     */
    interface PostgreSqlSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-postgresqlsettings.html#cfn-dms-dataprovider-postgresqlsettings-certificatearn
         */
        readonly certificateArn?: string;
        /**
         * Database name for the endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-postgresqlsettings.html#cfn-dms-dataprovider-postgresqlsettings-databasename
         */
        readonly databaseName: string;
        /**
         * Endpoint TCP port.
         *
         * The default is 5432.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-postgresqlsettings.html#cfn-dms-dataprovider-postgresqlsettings-port
         */
        readonly port: number;
        /**
         * The host name of the endpoint database.
         *
         * For an Amazon RDS PostgreSQL instance, this is the output of [DescribeDBInstances](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html) , in the `[Endpoint](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Endpoint.html) .Address` field.
         *
         * For an Aurora PostgreSQL instance, this is the output of [DescribeDBClusters](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusters.html) , in the `Endpoint` field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-postgresqlsettings.html#cfn-dms-dataprovider-postgresqlsettings-servername
         */
        readonly serverName: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-postgresqlsettings.html#cfn-dms-dataprovider-postgresqlsettings-sslmode
         */
        readonly sslMode: string;
    }
    /**
     * Provides information that defines a MySQL endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mysqlsettings.html
     */
    interface MySqlSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mysqlsettings.html#cfn-dms-dataprovider-mysqlsettings-certificatearn
         */
        readonly certificateArn?: string;
        /**
         * Endpoint TCP port.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mysqlsettings.html#cfn-dms-dataprovider-mysqlsettings-port
         */
        readonly port: number;
        /**
         * The host name of the endpoint database.
         *
         * For an Amazon RDS MySQL instance, this is the output of [DescribeDBInstances](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html) , in the `[Endpoint](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Endpoint.html) .Address` field.
         *
         * For an Aurora MySQL instance, this is the output of [DescribeDBClusters](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusters.html) , in the `Endpoint` field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mysqlsettings.html#cfn-dms-dataprovider-mysqlsettings-servername
         */
        readonly serverName: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mysqlsettings.html#cfn-dms-dataprovider-mysqlsettings-sslmode
         */
        readonly sslMode: string;
    }
    /**
     * Provides information that defines an Oracle endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-oraclesettings.html
     */
    interface OracleSettingsProperty {
        /**
         * For an Oracle source endpoint, your ASM server address.
         *
         * You can set this value from the `asm_server` value. You set `asm_server` as part of the extra connection attribute string to access an Oracle server with Binary Reader that uses ASM. For more information, see [Configuration for change data capture (CDC) on an Oracle source database](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-oraclesettings.html#cfn-dms-dataprovider-oraclesettings-asmserver
         */
        readonly asmServer?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-oraclesettings.html#cfn-dms-dataprovider-oraclesettings-certificatearn
         */
        readonly certificateArn?: string;
        /**
         * Database name for the endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-oraclesettings.html#cfn-dms-dataprovider-oraclesettings-databasename
         */
        readonly databaseName: string;
        /**
         * Endpoint TCP port.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-oraclesettings.html#cfn-dms-dataprovider-oraclesettings-port
         */
        readonly port: number;
        /**
         * Required only if your Oracle endpoint uses Automatic Storage Management (ASM).
         *
         * The full ARN of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the `SecretsManagerOracleAsmSecret` . This `SecretsManagerOracleAsmSecret` has the secret value that allows access to the Oracle ASM of the endpoint.
         *
         * > You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerOracleAsmSecretId` . Or you can specify clear-text values for `AsmUser` , `AsmPassword` , and `AsmServerName` . You can't specify both. For more information on creating this `SecretsManagerOracleAsmSecret` and the `SecretsManagerOracleAsmAccessRoleArn` and `SecretsManagerOracleAsmSecretId` required to access it, see [Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the *AWS Database Migration Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-oraclesettings.html#cfn-dms-dataprovider-oraclesettings-secretsmanageroracleasmaccessrolearn
         */
        readonly secretsManagerOracleAsmAccessRoleArn?: string;
        /**
         * Required only if your Oracle endpoint uses Automatic Storage Management (ASM).
         *
         * The full ARN, partial ARN, or friendly name of the `SecretsManagerOracleAsmSecret` that contains the Oracle ASM connection details for the Oracle endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-oraclesettings.html#cfn-dms-dataprovider-oraclesettings-secretsmanageroracleasmsecretid
         */
        readonly secretsManagerOracleAsmSecretId?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-oraclesettings.html#cfn-dms-dataprovider-oraclesettings-secretsmanagersecuritydbencryptionaccessrolearn
         */
        readonly secretsManagerSecurityDbEncryptionAccessRoleArn?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-oraclesettings.html#cfn-dms-dataprovider-oraclesettings-secretsmanagersecuritydbencryptionsecretid
         */
        readonly secretsManagerSecurityDbEncryptionSecretId?: string;
        /**
         * Fully qualified domain name of the endpoint.
         *
         * For an Amazon RDS Oracle instance, this is the output of [DescribeDBInstances](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html) , in the `[Endpoint](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Endpoint.html) .Address` field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-oraclesettings.html#cfn-dms-dataprovider-oraclesettings-servername
         */
        readonly serverName: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-oraclesettings.html#cfn-dms-dataprovider-oraclesettings-sslmode
         */
        readonly sslMode: string;
    }
    /**
     * Provides information that defines a Microsoft SQL Server endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-microsoftsqlserversettings.html
     */
    interface MicrosoftSqlServerSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-microsoftsqlserversettings.html#cfn-dms-dataprovider-microsoftsqlserversettings-certificatearn
         */
        readonly certificateArn?: string;
        /**
         * Database name for the endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-microsoftsqlserversettings.html#cfn-dms-dataprovider-microsoftsqlserversettings-databasename
         */
        readonly databaseName: string;
        /**
         * Endpoint TCP port.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-microsoftsqlserversettings.html#cfn-dms-dataprovider-microsoftsqlserversettings-port
         */
        readonly port: number;
        /**
         * Fully qualified domain name of the endpoint.
         *
         * For an Amazon RDS SQL Server instance, this is the output of [DescribeDBInstances](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html) , in the `[Endpoint](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Endpoint.html) .Address` field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-microsoftsqlserversettings.html#cfn-dms-dataprovider-microsoftsqlserversettings-servername
         */
        readonly serverName: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-microsoftsqlserversettings.html#cfn-dms-dataprovider-microsoftsqlserversettings-sslmode
         */
        readonly sslMode: string;
    }
    /**
     * Provides information that defines an Amazon Redshift endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-redshiftsettings.html
     */
    interface RedshiftSettingsProperty {
        /**
         * The name of the Amazon Redshift data warehouse (service) that you are working with.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-redshiftsettings.html#cfn-dms-dataprovider-redshiftsettings-databasename
         */
        readonly databaseName: string;
        /**
         * The port number for Amazon Redshift.
         *
         * The default value is 5439.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-redshiftsettings.html#cfn-dms-dataprovider-redshiftsettings-port
         */
        readonly port: number;
        /**
         * The name of the Amazon Redshift cluster you are using.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-redshiftsettings.html#cfn-dms-dataprovider-redshiftsettings-servername
         */
        readonly serverName: string;
    }
    /**
     * MariaDbSettings property identifier.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mariadbsettings.html
     */
    interface MariaDbSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mariadbsettings.html#cfn-dms-dataprovider-mariadbsettings-certificatearn
         */
        readonly certificateArn?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mariadbsettings.html#cfn-dms-dataprovider-mariadbsettings-port
         */
        readonly port: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mariadbsettings.html#cfn-dms-dataprovider-mariadbsettings-servername
         */
        readonly serverName: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mariadbsettings.html#cfn-dms-dataprovider-mariadbsettings-sslmode
         */
        readonly sslMode: string;
    }
    /**
     * Provides information that defines a DocumentDB endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-docdbsettings.html
     */
    interface DocDbSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-docdbsettings.html#cfn-dms-dataprovider-docdbsettings-certificatearn
         */
        readonly certificateArn?: string;
        /**
         * The database name on the DocumentDB source endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-docdbsettings.html#cfn-dms-dataprovider-docdbsettings-databasename
         */
        readonly databaseName: string;
        /**
         * The port value for the DocumentDB source endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-docdbsettings.html#cfn-dms-dataprovider-docdbsettings-port
         */
        readonly port: number;
        /**
         * The name of the server on the DocumentDB source endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-docdbsettings.html#cfn-dms-dataprovider-docdbsettings-servername
         */
        readonly serverName: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-docdbsettings.html#cfn-dms-dataprovider-docdbsettings-sslmode
         */
        readonly sslMode?: string;
    }
    /**
     * Provides information that defines a MongoDB endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mongodbsettings.html
     */
    interface MongoDbSettingsProperty {
        /**
         * The authentication mechanism you use to access the MongoDB source endpoint.
         *
         * For the default value, in MongoDB version 2.x, `"default"` is `"mongodb_cr"` . For MongoDB version 3.x or later, `"default"` is `"scram_sha_1"` . This setting isn't used when `AuthType` is set to `"no"` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mongodbsettings.html#cfn-dms-dataprovider-mongodbsettings-authmechanism
         */
        readonly authMechanism?: string;
        /**
         * The MongoDB database name. This setting isn't used when `AuthType` is set to `"no"` .
         *
         * The default is `"admin"` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mongodbsettings.html#cfn-dms-dataprovider-mongodbsettings-authsource
         */
        readonly authSource?: string;
        /**
         * The authentication type you use to access the MongoDB source endpoint.
         *
         * When when set to `"no"` , user name and password parameters are not used and can be empty.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mongodbsettings.html#cfn-dms-dataprovider-mongodbsettings-authtype
         */
        readonly authType?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mongodbsettings.html#cfn-dms-dataprovider-mongodbsettings-certificatearn
         */
        readonly certificateArn?: string;
        /**
         * The database name on the MongoDB source endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mongodbsettings.html#cfn-dms-dataprovider-mongodbsettings-databasename
         */
        readonly databaseName?: string;
        /**
         * The port value for the MongoDB source endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mongodbsettings.html#cfn-dms-dataprovider-mongodbsettings-port
         */
        readonly port: number;
        /**
         * The name of the server on the MongoDB source endpoint.
         *
         * For MongoDB Atlas, provide the server name for any of the servers in the replication set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mongodbsettings.html#cfn-dms-dataprovider-mongodbsettings-servername
         */
        readonly serverName: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mongodbsettings.html#cfn-dms-dataprovider-mongodbsettings-sslmode
         */
        readonly sslMode?: string;
    }
}
/**
 * Properties for defining a `CfnDataProvider`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-dataprovider.html
 */
export interface CfnDataProviderProps {
    /**
     * The identifier of the data provider.
     *
     * Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-dataprovider.html#cfn-dms-dataprovider-dataprovideridentifier
     */
    readonly dataProviderIdentifier?: string;
    /**
     * The name of the data provider.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-dataprovider.html#cfn-dms-dataprovider-dataprovidername
     */
    readonly dataProviderName?: string;
    /**
     * A description of the data provider.
     *
     * Descriptions can have up to 31 characters. A description can contain only ASCII letters, digits, and hyphens ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-dataprovider.html#cfn-dms-dataprovider-description
     */
    readonly description?: string;
    /**
     * The type of database engine for the data provider.
     *
     * Valid values include `"aurora"` , `"aurora-postgresql"` , `"mysql"` , `"oracle"` , `"postgres"` , `"sqlserver"` , `redshift` , `mariadb` , `mongodb` , `db2` , `db2-zos` and `docdb` . A value of `"aurora"` represents Amazon Aurora MySQL-Compatible Edition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-dataprovider.html#cfn-dms-dataprovider-engine
     */
    readonly engine: string;
    /**
     * The property describes the exact settings which can be modified.
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-dataprovider.html#cfn-dms-dataprovider-exactsettings
     */
    readonly exactSettings?: boolean | cdk.IResolvable;
    /**
     * The settings in JSON format for a data provider.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-dataprovider.html#cfn-dms-dataprovider-settings
     */
    readonly settings?: cdk.IResolvable | CfnDataProvider.SettingsProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-dataprovider.html#cfn-dms-dataprovider-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Provides information that defines an instance profile.
 *
 * @cloudformationResource AWS::DMS::InstanceProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-instanceprofile.html
 */
export declare class CfnInstanceProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInstanceProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInstanceProfile;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the instance profile.
     *
     * @cloudformationAttribute InstanceProfileArn
     */
    readonly attrInstanceProfileArn: string;
    /**
     * The time the instance profile was created.
     *
     * @cloudformationAttribute InstanceProfileCreationTime
     */
    readonly attrInstanceProfileCreationTime: string;
    /**
     * The Availability Zone where the instance profile runs.
     */
    availabilityZone?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A description of the instance profile.
     */
    description?: string;
    /**
     * The identifier of the instance profile.
     */
    instanceProfileIdentifier?: string;
    /**
     * The user-friendly name for the instance profile.
     */
    instanceProfileName?: string;
    /**
     * The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the connection parameters for the instance profile.
     */
    kmsKeyArn?: string;
    /**
     * Specifies the network type for the instance profile.
     */
    networkType?: string;
    /**
     * Specifies the accessibility options for the instance profile.
     */
    publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * The identifier of the subnet group that is associated with the instance profile.
     */
    subnetGroupIdentifier?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The VPC security groups that are used with the instance profile.
     */
    vpcSecurityGroups?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnInstanceProfileProps);
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
 * Properties for defining a `CfnInstanceProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-instanceprofile.html
 */
export interface CfnInstanceProfileProps {
    /**
     * The Availability Zone where the instance profile runs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-instanceprofile.html#cfn-dms-instanceprofile-availabilityzone
     */
    readonly availabilityZone?: string;
    /**
     * A description of the instance profile.
     *
     * Descriptions can have up to 31 characters. A description can contain only ASCII letters, digits, and hyphens ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-instanceprofile.html#cfn-dms-instanceprofile-description
     */
    readonly description?: string;
    /**
     * The identifier of the instance profile.
     *
     * Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-instanceprofile.html#cfn-dms-instanceprofile-instanceprofileidentifier
     */
    readonly instanceProfileIdentifier?: string;
    /**
     * The user-friendly name for the instance profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-instanceprofile.html#cfn-dms-instanceprofile-instanceprofilename
     */
    readonly instanceProfileName?: string;
    /**
     * The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the connection parameters for the instance profile.
     *
     * If you don't specify a value for the `KmsKeyArn` parameter, then AWS DMS uses your default encryption key.
     *
     * AWS KMS creates the default encryption key for your AWS account . Your AWS account has a different default encryption key for each AWS Region .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-instanceprofile.html#cfn-dms-instanceprofile-kmskeyarn
     */
    readonly kmsKeyArn?: string;
    /**
     * Specifies the network type for the instance profile.
     *
     * A value of `IPV4` represents an instance profile with IPv4 network type and only supports IPv4 addressing. A value of `IPV6` represents an instance profile with IPv6 network type and only supports IPv6 addressing. A value of `DUAL` represents an instance profile with dual network type that supports IPv4 and IPv6 addressing.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-instanceprofile.html#cfn-dms-instanceprofile-networktype
     */
    readonly networkType?: string;
    /**
     * Specifies the accessibility options for the instance profile.
     *
     * A value of `true` represents an instance profile with a public IP address. A value of `false` represents an instance profile with a private IP address. The default value is `true` .
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-instanceprofile.html#cfn-dms-instanceprofile-publiclyaccessible
     */
    readonly publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * The identifier of the subnet group that is associated with the instance profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-instanceprofile.html#cfn-dms-instanceprofile-subnetgroupidentifier
     */
    readonly subnetGroupIdentifier?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-instanceprofile.html#cfn-dms-instanceprofile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The VPC security groups that are used with the instance profile.
     *
     * The VPC security group must work with the VPC containing the instance profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-instanceprofile.html#cfn-dms-instanceprofile-vpcsecuritygroups
     */
    readonly vpcSecurityGroups?: Array<string>;
}
/**
 * Provides information that defines a migration project.
 *
 * @cloudformationResource AWS::DMS::MigrationProject
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-migrationproject.html
 */
export declare class CfnMigrationProject extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMigrationProject from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMigrationProject;
    /**
     * The ARN string that uniquely identifies the migration project.
     *
     * @cloudformationAttribute MigrationProjectArn
     */
    readonly attrMigrationProjectArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A user-friendly description of the migration project.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of the instance profile for your migration project.
     */
    instanceProfileArn?: string;
    /**
     * The identifier of the instance profile for your migration project.
     */
    instanceProfileIdentifier?: string;
    /**
     * The name of the associated instance profile.
     */
    instanceProfileName?: string;
    /**
     * The property describes a creating time of the migration project.
     *
     * @deprecated this property has been deprecated
     */
    migrationProjectCreationTime?: string;
    /**
     * The identifier of the migration project.
     */
    migrationProjectIdentifier?: string;
    /**
     * The name of the migration project.
     */
    migrationProjectName?: string;
    /**
     * The schema conversion application attributes, including the Amazon S3 bucket name and Amazon S3 role ARN.
     */
    schemaConversionApplicationAttributes?: cdk.IResolvable | CfnMigrationProject.SchemaConversionApplicationAttributesProperty;
    /**
     * Information about the source data provider, including the name or ARN, and AWS Secrets Manager parameters.
     */
    sourceDataProviderDescriptors?: Array<CfnMigrationProject.DataProviderDescriptorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * Information about the target data provider, including the name or ARN, and AWS Secrets Manager parameters.
     */
    targetDataProviderDescriptors?: Array<CfnMigrationProject.DataProviderDescriptorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The settings in JSON format for migration rules.
     */
    transformationRules?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnMigrationProjectProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMigrationProject {
    /**
     * The property describes schema conversion application attributes for the migration project.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-migrationproject-schemaconversionapplicationattributes.html
     */
    interface SchemaConversionApplicationAttributesProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-migrationproject-schemaconversionapplicationattributes.html#cfn-dms-migrationproject-schemaconversionapplicationattributes-s3bucketpath
         */
        readonly s3BucketPath?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-migrationproject-schemaconversionapplicationattributes.html#cfn-dms-migrationproject-schemaconversionapplicationattributes-s3bucketrolearn
         */
        readonly s3BucketRoleArn?: string;
    }
    /**
     * Information about a data provider.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-migrationproject-dataproviderdescriptor.html
     */
    interface DataProviderDescriptorProperty {
        /**
         * The Amazon Resource Name (ARN) of the data provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-migrationproject-dataproviderdescriptor.html#cfn-dms-migrationproject-dataproviderdescriptor-dataproviderarn
         */
        readonly dataProviderArn?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-migrationproject-dataproviderdescriptor.html#cfn-dms-migrationproject-dataproviderdescriptor-dataprovideridentifier
         */
        readonly dataProviderIdentifier?: string;
        /**
         * The user-friendly name of the data provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-migrationproject-dataproviderdescriptor.html#cfn-dms-migrationproject-dataproviderdescriptor-dataprovidername
         */
        readonly dataProviderName?: string;
        /**
         * The ARN of the role used to access AWS Secrets Manager.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-migrationproject-dataproviderdescriptor.html#cfn-dms-migrationproject-dataproviderdescriptor-secretsmanageraccessrolearn
         */
        readonly secretsManagerAccessRoleArn?: string;
        /**
         * The identifier of the AWS Secrets Manager Secret used to store access credentials for the data provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-migrationproject-dataproviderdescriptor.html#cfn-dms-migrationproject-dataproviderdescriptor-secretsmanagersecretid
         */
        readonly secretsManagerSecretId?: string;
    }
}
/**
 * Properties for defining a `CfnMigrationProject`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-migrationproject.html
 */
export interface CfnMigrationProjectProps {
    /**
     * A user-friendly description of the migration project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-migrationproject.html#cfn-dms-migrationproject-description
     */
    readonly description?: string;
    /**
     * The Amazon Resource Name (ARN) of the instance profile for your migration project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-migrationproject.html#cfn-dms-migrationproject-instanceprofilearn
     */
    readonly instanceProfileArn?: string;
    /**
     * The identifier of the instance profile for your migration project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-migrationproject.html#cfn-dms-migrationproject-instanceprofileidentifier
     */
    readonly instanceProfileIdentifier?: string;
    /**
     * The name of the associated instance profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-migrationproject.html#cfn-dms-migrationproject-instanceprofilename
     */
    readonly instanceProfileName?: string;
    /**
     * The property describes a creating time of the migration project.
     *
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-migrationproject.html#cfn-dms-migrationproject-migrationprojectcreationtime
     */
    readonly migrationProjectCreationTime?: string;
    /**
     * The identifier of the migration project.
     *
     * Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-migrationproject.html#cfn-dms-migrationproject-migrationprojectidentifier
     */
    readonly migrationProjectIdentifier?: string;
    /**
     * The name of the migration project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-migrationproject.html#cfn-dms-migrationproject-migrationprojectname
     */
    readonly migrationProjectName?: string;
    /**
     * The schema conversion application attributes, including the Amazon S3 bucket name and Amazon S3 role ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-migrationproject.html#cfn-dms-migrationproject-schemaconversionapplicationattributes
     */
    readonly schemaConversionApplicationAttributes?: cdk.IResolvable | CfnMigrationProject.SchemaConversionApplicationAttributesProperty;
    /**
     * Information about the source data provider, including the name or ARN, and AWS Secrets Manager parameters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-migrationproject.html#cfn-dms-migrationproject-sourcedataproviderdescriptors
     */
    readonly sourceDataProviderDescriptors?: Array<CfnMigrationProject.DataProviderDescriptorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-migrationproject.html#cfn-dms-migrationproject-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Information about the target data provider, including the name or ARN, and AWS Secrets Manager parameters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-migrationproject.html#cfn-dms-migrationproject-targetdataproviderdescriptors
     */
    readonly targetDataProviderDescriptors?: Array<CfnMigrationProject.DataProviderDescriptorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The settings in JSON format for migration rules.
     *
     * Migration rules make it possible for you to change the object names according to the rules that you specify. For example, you can change an object name to lowercase or uppercase, add or remove a prefix or suffix, or rename objects.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-migrationproject.html#cfn-dms-migrationproject-transformationrules
     */
    readonly transformationRules?: string;
}
