import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * A *broker* is a message broker environment running on Amazon MQ .
 *
 * It is the basic building block of Amazon MQ .
 *
 * The `AWS::AmazonMQ::Broker` resource lets you create Amazon MQ for ActiveMQ and Amazon MQ for RabbitMQ brokers, add configuration changes or modify users for a speified ActiveMQ broker, return information about the specified broker, and delete the broker. For more information, see [How Amazon MQ works](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/amazon-mq-how-it-works.html) in the *Amazon MQ Developer Guide* .
 *
 * - `ec2:CreateNetworkInterface`
 *
 * This permission is required to allow Amazon MQ to create an elastic network interface (ENI) on behalf of your account.
 * - `ec2:CreateNetworkInterfacePermission`
 *
 * This permission is required to attach the ENI to the broker instance.
 * - `ec2:DeleteNetworkInterface`
 * - `ec2:DeleteNetworkInterfacePermission`
 * - `ec2:DetachNetworkInterface`
 * - `ec2:DescribeInternetGateways`
 * - `ec2:DescribeNetworkInterfaces`
 * - `ec2:DescribeNetworkInterfacePermissions`
 * - `ec2:DescribeRouteTables`
 * - `ec2:DescribeSecurityGroups`
 * - `ec2:DescribeSubnets`
 * - `ec2:DescribeVpcs`
 *
 * @cloudformationResource AWS::AmazonMQ::Broker
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html
 */
export declare class CfnBroker extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBroker from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBroker;
    /**
     * The AMQP endpoints of each broker instance as a list of strings.
     *
     * `amqp+ssl://b-4aada85d-a80c-4be0-9d30-e344a01b921e-1.mq.eu-central-amazonaws.com:5671`
     *
     * @cloudformationAttribute AmqpEndpoints
     */
    readonly attrAmqpEndpoints: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the Amazon MQ broker.
     *
     * `arn:aws:mq:us-east-2:123456789012:broker:MyBroker:b-1234a5b6-78cd-901e-2fgh-3i45j6k178l9`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The unique ID that Amazon MQ generates for the configuration.
     *
     * `c-1234a5b6-78cd-901e-2fgh-3i45j6k178l9`
     *
     * @cloudformationAttribute ConfigurationId
     */
    readonly attrConfigurationId: string;
    /**
     * The revision number of the configuration.
     *
     * `1`
     *
     * @cloudformationAttribute ConfigurationRevision
     */
    readonly attrConfigurationRevision: number;
    /**
     * Required. The unique ID that Amazon MQ generates for the configuration.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The IP addresses of each broker instance as a list of strings. Does not apply to RabbitMQ brokers.
     *
     * `['198.51.100.2', '203.0.113.9']`
     *
     * @cloudformationAttribute IpAddresses
     */
    readonly attrIpAddresses: Array<string>;
    /**
     * The MQTT endpoints of each broker instance as a list of strings.
     *
     * `mqtt+ssl://b-4aada85d-a80c-4be0-9d30-e344a01b921e-1.mq.eu-central-amazonaws.com:8883`
     *
     * @cloudformationAttribute MqttEndpoints
     */
    readonly attrMqttEndpoints: Array<string>;
    /**
     * The OpenWire endpoints of each broker instance as a list of strings.
     *
     * `ssl://b-4aada85d-a80c-4be0-9d30-e344a01b921e-1.mq.eu-central-amazonaws.com:61617`
     *
     * @cloudformationAttribute OpenWireEndpoints
     */
    readonly attrOpenWireEndpoints: Array<string>;
    /**
     * The STOMP endpoints of each broker instance as a list of strings.
     *
     * `stomp+ssl://b-4aada85d-a80c-4be0-9d30-e344a01b921e-1.mq.eu-central-amazonaws.com:61614`
     *
     * @cloudformationAttribute StompEndpoints
     */
    readonly attrStompEndpoints: Array<string>;
    /**
     * The WSS endpoints of each broker instance as a list of strings.
     *
     * `wss://b-4aada85d-a80c-4be0-9d30-e344a01b921e-1.mq.eu-central-amazonaws.com:61619`
     *
     * @cloudformationAttribute WssEndpoints
     */
    readonly attrWssEndpoints: Array<string>;
    /**
     * Optional.
     */
    authenticationStrategy?: string;
    /**
     * Enables automatic upgrades to new minor versions for brokers, as new broker engine versions are released and supported by Amazon MQ.
     */
    autoMinorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * The name of the broker.
     */
    brokerName: string;
    /**
     * A list of information about the configuration.
     */
    configuration?: CfnBroker.ConfigurationIdProperty | cdk.IResolvable;
    /**
     * Defines whether this broker is a part of a data replication pair.
     */
    dataReplicationMode?: string;
    /**
     * The Amazon Resource Name (ARN) of the primary broker that is used to replicate data from in a data replication pair, and is applied to the replica broker.
     */
    dataReplicationPrimaryBrokerArn?: string;
    /**
     * The deployment mode of the broker. Available values:.
     */
    deploymentMode: string;
    /**
     * Encryption options for the broker.
     */
    encryptionOptions?: CfnBroker.EncryptionOptionsProperty | cdk.IResolvable;
    /**
     * The type of broker engine.
     */
    engineType: string;
    /**
     * The version of the broker engine.
     */
    engineVersion?: string;
    /**
     * The broker's instance type.
     */
    hostInstanceType: string;
    /**
     * Optional.
     */
    ldapServerMetadata?: cdk.IResolvable | CfnBroker.LdapServerMetadataProperty;
    /**
     * Enables Amazon CloudWatch logging for brokers.
     */
    logs?: cdk.IResolvable | CfnBroker.LogListProperty;
    /**
     * The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.
     */
    maintenanceWindowStartTime?: cdk.IResolvable | CfnBroker.MaintenanceWindowProperty;
    /**
     * Enables connections from applications outside of the VPC that hosts the broker's subnets.
     */
    publiclyAccessible: boolean | cdk.IResolvable;
    /**
     * The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.
     */
    securityGroups?: Array<string>;
    /**
     * The broker's storage type.
     */
    storageType?: string;
    /**
     * The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones.
     */
    subnetIds?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs.
     */
    tagsRaw?: Array<CfnBroker.TagsEntryProperty>;
    /**
     * The list of broker users (persons or applications) who can access queues and topics.
     */
    users: Array<cdk.IResolvable | CfnBroker.UserProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBrokerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnBroker {
    /**
     * A list of information about the configuration.
     *
     * > Does not apply to RabbitMQ brokers.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-configurationid.html
     */
    interface ConfigurationIdProperty {
        /**
         * The unique ID that Amazon MQ generates for the configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-configurationid.html#cfn-amazonmq-broker-configurationid-id
         */
        readonly id: string;
        /**
         * The revision number of the configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-configurationid.html#cfn-amazonmq-broker-configurationid-revision
         */
        readonly revision: number;
    }
    /**
     * The parameters that determine the `WeeklyStartTime` to apply pending updates or patches to the broker.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-maintenancewindow.html
     */
    interface MaintenanceWindowProperty {
        /**
         * The day of the week.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-maintenancewindow.html#cfn-amazonmq-broker-maintenancewindow-dayofweek
         */
        readonly dayOfWeek: string;
        /**
         * The time, in 24-hour format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-maintenancewindow.html#cfn-amazonmq-broker-maintenancewindow-timeofday
         */
        readonly timeOfDay: string;
        /**
         * The time zone, UTC by default, in either the Country/City format, or the UTC offset format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-maintenancewindow.html#cfn-amazonmq-broker-maintenancewindow-timezone
         */
        readonly timeZone: string;
    }
    /**
     * The list of broker users (persons or applications) who can access queues and topics.
     *
     * For Amazon MQ for RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created via the RabbitMQ web console or by using the RabbitMQ management API.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-user.html
     */
    interface UserProperty {
        /**
         * Enables access to the ActiveMQ web console for the ActiveMQ user.
         *
         * Does not apply to RabbitMQ brokers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-user.html#cfn-amazonmq-broker-user-consoleaccess
         */
        readonly consoleAccess?: boolean | cdk.IResolvable;
        /**
         * The list of groups (20 maximum) to which the ActiveMQ user belongs.
         *
         * This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long. Does not apply to RabbitMQ brokers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-user.html#cfn-amazonmq-broker-user-groups
         */
        readonly groups?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-user.html#cfn-amazonmq-broker-user-jolokiaapiaccess
         */
        readonly jolokiaApiAccess?: string;
        /**
         * The password of the user.
         *
         * This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-user.html#cfn-amazonmq-broker-user-password
         */
        readonly password: string;
        /**
         * Defines if this user is intended for CRDR replication purposes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-user.html#cfn-amazonmq-broker-user-replicationuser
         */
        readonly replicationUser?: boolean | cdk.IResolvable;
        /**
         * The username of the broker user.
         *
         * For Amazon MQ for ActiveMQ brokers, this value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). For Amazon MQ for RabbitMQ brokers, this value can contain only alphanumeric characters, dashes, periods, underscores (- . _). This value must not contain a tilde (~) character. Amazon MQ prohibts using guest as a valid usename. This value must be 2-100 characters long.
         *
         * > Do not add personally identifiable information (PII) or other confidential or sensitive information in broker usernames. Broker usernames are accessible to other AWS services, including CloudWatch Logs . Broker usernames are not intended to be used for private or sensitive data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-user.html#cfn-amazonmq-broker-user-username
         */
        readonly username: string;
    }
    /**
     * The list of information about logs to be enabled for the specified broker.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-loglist.html
     */
    interface LogListProperty {
        /**
         * Enables audit logging.
         *
         * Every user management action made using JMX or the ActiveMQ Web Console is logged. Does not apply to RabbitMQ brokers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-loglist.html#cfn-amazonmq-broker-loglist-audit
         */
        readonly audit?: boolean | cdk.IResolvable;
        /**
         * Enables general logging.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-loglist.html#cfn-amazonmq-broker-loglist-general
         */
        readonly general?: boolean | cdk.IResolvable;
    }
    /**
     * Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.
     *
     * > Does not apply to RabbitMQ brokers.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-ldapservermetadata.html
     */
    interface LdapServerMetadataProperty {
        /**
         * Specifies the location of the LDAP server such as AWS Directory Service for Microsoft Active Directory .
         *
         * Optional failover server.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-ldapservermetadata.html#cfn-amazonmq-broker-ldapservermetadata-hosts
         */
        readonly hosts: Array<string>;
        /**
         * The distinguished name of the node in the directory information tree (DIT) to search for roles or groups.
         *
         * For example, `ou=group` , `ou=corp` , `dc=corp` , `dc=example` , `dc=com` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-ldapservermetadata.html#cfn-amazonmq-broker-ldapservermetadata-rolebase
         */
        readonly roleBase: string;
        /**
         * The group name attribute in a role entry whose value is the name of that role.
         *
         * For example, you can specify `cn` for a group entry's common name. If authentication succeeds, then the user is assigned the the value of the `cn` attribute for each role entry that they are a member of.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-ldapservermetadata.html#cfn-amazonmq-broker-ldapservermetadata-rolename
         */
        readonly roleName?: string;
        /**
         * The LDAP search filter used to find roles within the roleBase.
         *
         * The distinguished name of the user matched by userSearchMatching is substituted into the `{0}` placeholder in the search filter. The client's username is substituted into the `{1}` placeholder. For example, if you set this option to `(member=uid={1})` for the user janedoe, the search filter becomes `(member=uid=janedoe)` after string substitution. It matches all role entries that have a member attribute equal to `uid=janedoe` under the subtree selected by the `RoleBases` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-ldapservermetadata.html#cfn-amazonmq-broker-ldapservermetadata-rolesearchmatching
         */
        readonly roleSearchMatching: string;
        /**
         * The directory search scope for the role.
         *
         * If set to true, scope is to search the entire subtree.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-ldapservermetadata.html#cfn-amazonmq-broker-ldapservermetadata-rolesearchsubtree
         */
        readonly roleSearchSubtree?: boolean | cdk.IResolvable;
        /**
         * Service account password.
         *
         * A service account is an account in your LDAP server that has access to initiate a connection. For example, `cn=admin` , `dc=corp` , `dc=example` , `dc=com` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-ldapservermetadata.html#cfn-amazonmq-broker-ldapservermetadata-serviceaccountpassword
         */
        readonly serviceAccountPassword: string;
        /**
         * Service account username.
         *
         * A service account is an account in your LDAP server that has access to initiate a connection. For example, `cn=admin` , `ou=corp` , `dc=corp` , `dc=example` , `dc=com` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-ldapservermetadata.html#cfn-amazonmq-broker-ldapservermetadata-serviceaccountusername
         */
        readonly serviceAccountUsername: string;
        /**
         * Select a particular subtree of the directory information tree (DIT) to search for user entries.
         *
         * The subtree is specified by a DN, which specifies the base node of the subtree. For example, by setting this option to `ou=Users` , `ou=corp` , `dc=corp` , `dc=example` , `dc=com` , the search for user entries is restricted to the subtree beneath `ou=Users` , `ou=corp` , `dc=corp` , `dc=example` , `dc=com` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-ldapservermetadata.html#cfn-amazonmq-broker-ldapservermetadata-userbase
         */
        readonly userBase: string;
        /**
         * The name of the LDAP attribute in the user's directory entry for the user's group membership.
         *
         * In some cases, user roles may be identified by the value of an attribute in the user's directory entry. The `UserRoleName` option allows you to provide the name of this attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-ldapservermetadata.html#cfn-amazonmq-broker-ldapservermetadata-userrolename
         */
        readonly userRoleName?: string;
        /**
         * The LDAP search filter used to find users within the `userBase` .
         *
         * The client's username is substituted into the `{0}` placeholder in the search filter. For example, if this option is set to `(uid={0})` and the received username is `janedoe` , the search filter becomes `(uid=janedoe)` after string substitution. It will result in matching an entry like `uid=janedoe` , `ou=Users` , `ou=corp` , `dc=corp` , `dc=example` , `dc=com` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-ldapservermetadata.html#cfn-amazonmq-broker-ldapservermetadata-usersearchmatching
         */
        readonly userSearchMatching: string;
        /**
         * The directory search scope for the user.
         *
         * If set to true, scope is to search the entire subtree.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-ldapservermetadata.html#cfn-amazonmq-broker-ldapservermetadata-usersearchsubtree
         */
        readonly userSearchSubtree?: boolean | cdk.IResolvable;
    }
    /**
     * Encryption options for the broker.
     *
     * > Does not apply to RabbitMQ brokers.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-encryptionoptions.html
     */
    interface EncryptionOptionsProperty {
        /**
         * The customer master key (CMK) to use for the A AWS KMS (KMS).
         *
         * This key is used to encrypt your data at rest. If not provided, Amazon MQ will use a default CMK to encrypt your data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-encryptionoptions.html#cfn-amazonmq-broker-encryptionoptions-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * Enables the use of an AWS owned CMK using AWS KMS (KMS).
         *
         * Set to `true` by default, if no value is provided, for example, for RabbitMQ brokers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-encryptionoptions.html#cfn-amazonmq-broker-encryptionoptions-useawsownedkey
         */
        readonly useAwsOwnedKey: boolean | cdk.IResolvable;
    }
    /**
     * A key-value pair to associate with the broker.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-tagsentry.html
     */
    interface TagsEntryProperty {
        /**
         * The key in a key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-tagsentry.html#cfn-amazonmq-broker-tagsentry-key
         */
        readonly key: string;
        /**
         * The value in a key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-tagsentry.html#cfn-amazonmq-broker-tagsentry-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnBroker`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html
 */
export interface CfnBrokerProps {
    /**
     * Optional.
     *
     * The authentication strategy used to secure the broker. The default is `SIMPLE` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-authenticationstrategy
     */
    readonly authenticationStrategy?: string;
    /**
     * Enables automatic upgrades to new minor versions for brokers, as new broker engine versions are released and supported by Amazon MQ.
     *
     * Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-autominorversionupgrade
     */
    readonly autoMinorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * The name of the broker.
     *
     * This value must be unique in your AWS account , 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.
     *
     * > Do not add personally identifiable information (PII) or other confidential or sensitive information in broker names. Broker names are accessible to other AWS services, including C CloudWatch Logs . Broker names are not intended to be used for private or sensitive data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-brokername
     */
    readonly brokerName: string;
    /**
     * A list of information about the configuration.
     *
     * Does not apply to RabbitMQ brokers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-configuration
     */
    readonly configuration?: CfnBroker.ConfigurationIdProperty | cdk.IResolvable;
    /**
     * Defines whether this broker is a part of a data replication pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-datareplicationmode
     */
    readonly dataReplicationMode?: string;
    /**
     * The Amazon Resource Name (ARN) of the primary broker that is used to replicate data from in a data replication pair, and is applied to the replica broker.
     *
     * Must be set when dataReplicationMode is set to CRDR.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-datareplicationprimarybrokerarn
     */
    readonly dataReplicationPrimaryBrokerArn?: string;
    /**
     * The deployment mode of the broker. Available values:.
     *
     * - `SINGLE_INSTANCE`
     * - `ACTIVE_STANDBY_MULTI_AZ`
     * - `CLUSTER_MULTI_AZ`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-deploymentmode
     */
    readonly deploymentMode: string;
    /**
     * Encryption options for the broker.
     *
     * Does not apply to RabbitMQ brokers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-encryptionoptions
     */
    readonly encryptionOptions?: CfnBroker.EncryptionOptionsProperty | cdk.IResolvable;
    /**
     * The type of broker engine.
     *
     * Currently, Amazon MQ supports `ACTIVEMQ` and `RABBITMQ` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-enginetype
     */
    readonly engineType: string;
    /**
     * The version of the broker engine.
     *
     * For a list of supported engine versions, see [Engine](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html) in the *Amazon MQ Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-engineversion
     */
    readonly engineVersion?: string;
    /**
     * The broker's instance type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-hostinstancetype
     */
    readonly hostInstanceType: string;
    /**
     * Optional.
     *
     * The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-ldapservermetadata
     */
    readonly ldapServerMetadata?: cdk.IResolvable | CfnBroker.LdapServerMetadataProperty;
    /**
     * Enables Amazon CloudWatch logging for brokers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-logs
     */
    readonly logs?: cdk.IResolvable | CfnBroker.LogListProperty;
    /**
     * The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-maintenancewindowstarttime
     */
    readonly maintenanceWindowStartTime?: cdk.IResolvable | CfnBroker.MaintenanceWindowProperty;
    /**
     * Enables connections from applications outside of the VPC that hosts the broker's subnets.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-publiclyaccessible
     */
    readonly publiclyAccessible: boolean | cdk.IResolvable;
    /**
     * The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-securitygroups
     */
    readonly securityGroups?: Array<string>;
    /**
     * The broker's storage type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-storagetype
     */
    readonly storageType?: string;
    /**
     * The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones.
     *
     * If you specify more than one subnet, the subnets must be in different Availability Zones. Amazon MQ will not be able to create VPC endpoints for your broker with multiple subnets in the same Availability Zone. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment (ACTIVEMQ) requires two subnets. A CLUSTER_MULTI_AZ deployment (RABBITMQ) has no subnet requirements when deployed with public accessibility, deployment without public accessibility requires at least one subnet.
     *
     * > If you specify subnets in a shared VPC for a RabbitMQ broker, the associated VPC to which the specified subnets belong must be owned by your AWS account . Amazon MQ will not be able to create VPC enpoints in VPCs that are not owned by your AWS account .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-subnetids
     */
    readonly subnetIds?: Array<string>;
    /**
     * An array of key-value pairs.
     *
     * For more information, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the *Billing and Cost Management User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-tags
     */
    readonly tags?: Array<CfnBroker.TagsEntryProperty>;
    /**
     * The list of broker users (persons or applications) who can access queues and topics.
     *
     * For Amazon MQ for RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent RabbitMQ users are created by via the RabbitMQ web console or by using the RabbitMQ management API.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#cfn-amazonmq-broker-users
     */
    readonly users: Array<cdk.IResolvable | CfnBroker.UserProperty> | cdk.IResolvable;
}
/**
 * Creates a new configuration for the specified configuration name.
 *
 * Amazon MQ uses the default configuration (the engine type and version).
 *
 * > Does not apply to RabbitMQ brokers.
 *
 * @cloudformationResource AWS::AmazonMQ::Configuration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html
 */
export declare class CfnConfiguration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConfiguration;
    /**
     * The Amazon Resource Name (ARN) of the Amazon MQ configuration.
     *
     * `arn:aws:mq:us-east-2:123456789012:configuration:MyConfigurationDevelopment:c-1234a5b6-78cd-901e-2fgh-3i45j6k178l9`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the Amazon MQ configuration.
     *
     * `c-1234a5b6-78cd-901e-2fgh-3i45j6k178l9`
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The revision number of the configuration.
     *
     * `1`
     *
     * @cloudformationAttribute Revision
     */
    readonly attrRevision: number;
    /**
     * Optional.
     */
    authenticationStrategy?: string;
    /**
     * The base64-encoded XML configuration.
     */
    data?: string;
    /**
     * The description of the configuration.
     */
    description?: string;
    /**
     * The type of broker engine.
     */
    engineType: string;
    /**
     * The version of the broker engine.
     */
    engineVersion?: string;
    /**
     * The name of the configuration.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Create tags when creating the configuration.
     */
    tagsRaw?: Array<CfnConfiguration.TagsEntryProperty>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConfiguration {
    /**
     * A key-value pair to associate with the configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-configuration-tagsentry.html
     */
    interface TagsEntryProperty {
        /**
         * The key in a key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-configuration-tagsentry.html#cfn-amazonmq-configuration-tagsentry-key
         */
        readonly key: string;
        /**
         * The value in a key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-configuration-tagsentry.html#cfn-amazonmq-configuration-tagsentry-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html
 */
export interface CfnConfigurationProps {
    /**
     * Optional.
     *
     * The authentication strategy associated with the configuration. The default is `SIMPLE` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html#cfn-amazonmq-configuration-authenticationstrategy
     */
    readonly authenticationStrategy?: string;
    /**
     * The base64-encoded XML configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html#cfn-amazonmq-configuration-data
     */
    readonly data?: string;
    /**
     * The description of the configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html#cfn-amazonmq-configuration-description
     */
    readonly description?: string;
    /**
     * The type of broker engine.
     *
     * Note: Currently, Amazon MQ only supports ACTIVEMQ for creating and editing broker configurations.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html#cfn-amazonmq-configuration-enginetype
     */
    readonly engineType: string;
    /**
     * The version of the broker engine.
     *
     * For a list of supported engine versions, see [](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html#cfn-amazonmq-configuration-engineversion
     */
    readonly engineVersion?: string;
    /**
     * The name of the configuration.
     *
     * This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html#cfn-amazonmq-configuration-name
     */
    readonly name: string;
    /**
     * Create tags when creating the configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html#cfn-amazonmq-configuration-tags
     */
    readonly tags?: Array<CfnConfiguration.TagsEntryProperty>;
}
/**
 * Use the AWS CloudFormation `AWS::AmazonMQ::ConfigurationAssociation` resource to associate a configuration with a broker, or return information about the specified ConfigurationAssociation.
 *
 * Only use one per broker, and don't use a configuration on the broker resource if you have associated a configuration with that broker.
 *
 * > Does not apply to RabbitMQ brokers.
 *
 * @cloudformationResource AWS::AmazonMQ::ConfigurationAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html
 */
export declare class CfnConfigurationAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConfigurationAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConfigurationAssociation;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The broker to associate with a configuration.
     */
    broker: string;
    /**
     * The configuration to associate with a broker.
     */
    configuration: CfnConfigurationAssociation.ConfigurationIdProperty | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConfigurationAssociationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConfigurationAssociation {
    /**
     * The `ConfigurationId` property type specifies a configuration Id and the revision of a configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-configurationassociation-configurationid.html
     */
    interface ConfigurationIdProperty {
        /**
         * The unique ID that Amazon MQ generates for the configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-configurationassociation-configurationid.html#cfn-amazonmq-configurationassociation-configurationid-id
         */
        readonly id: string;
        /**
         * The revision number of the configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-configurationassociation-configurationid.html#cfn-amazonmq-configurationassociation-configurationid-revision
         */
        readonly revision: number;
    }
}
/**
 * Properties for defining a `CfnConfigurationAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html
 */
export interface CfnConfigurationAssociationProps {
    /**
     * The broker to associate with a configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html#cfn-amazonmq-configurationassociation-broker
     */
    readonly broker: string;
    /**
     * The configuration to associate with a broker.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html#cfn-amazonmq-configurationassociation-configuration
     */
    readonly configuration: CfnConfigurationAssociation.ConfigurationIdProperty | cdk.IResolvable;
}
