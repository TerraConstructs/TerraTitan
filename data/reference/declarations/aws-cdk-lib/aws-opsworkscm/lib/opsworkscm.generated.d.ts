import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::OpsWorksCM::Server` resource creates an AWS OpsWorks for Chef Automate or OpsWorks for Puppet Enterprise configuration management server.
 *
 * For more information, see [Create a Chef Automate Server in AWS CloudFormation](https://docs.aws.amazon.com/opsworks/latest/userguide/opscm-create-server-cfn.html) or [Create a Puppet Enterprise Master in AWS CloudFormation](https://docs.aws.amazon.com/opsworks/latest/userguide/opspup-create-server-cfn.html) in the *AWS OpsWorks User Guide* , and [CreateServer](https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_CreateServer.html) in the *AWS OpsWorks CM API Reference* .
 *
 * @cloudformationResource AWS::OpsWorksCM::Server
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html
 */
export declare class CfnServer extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnServer from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnServer;
    /**
     * The Amazon Resource Name (ARN) of the server, such as `arn:aws:OpsWorksCM:us-east-1:123456789012:server/server-a1bzhi` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A DNS name that can be used to access the engine. Example: `myserver-asdfghjkl.us-east-1.opsworks.io` .
     *
     * @cloudformationAttribute Endpoint
     */
    readonly attrEndpoint: string;
    /**
     * The name of the server.
     *
     * @cloudformationAttribute ServerName
     */
    readonly attrServerName: string;
    /**
     * Associate a public IP address with a server that you are launching.
     */
    associatePublicIpAddress?: boolean | cdk.IResolvable;
    /**
     * If you specify this field, AWS OpsWorks CM creates the server by using the backup represented by BackupId.
     */
    backupId?: string;
    /**
     * The number of automated backups that you want to keep.
     */
    backupRetentionCount?: number;
    /**
     * Supported on servers running Chef Automate 2.0 only. A PEM-formatted HTTPS certificate. The value can be be a single, self-signed certificate, or a certificate chain. If you specify a custom certificate, you must also specify values for `CustomDomain` and `CustomPrivateKey` . The following are requirements for the `CustomCertificate` value:.
     */
    customCertificate?: string;
    /**
     * Supported on servers running Chef Automate 2.0 only. An optional public endpoint of a server, such as `https://aws.my-company.com` . To access the server, create a CNAME DNS record in your preferred DNS service that points the custom domain to the endpoint that is generated when the server is created (the value of the CreateServer Endpoint attribute). You cannot access the server by using the generated `Endpoint` value if the server is using a custom domain. If you specify a custom domain, you must also specify values for `CustomCertificate` and `CustomPrivateKey` .
     */
    customDomain?: string;
    /**
     * Supported on servers running Chef Automate 2.0 only. A private key in PEM format for connecting to the server by using HTTPS. The private key must not be encrypted; it cannot be protected by a password or passphrase. If you specify a custom private key, you must also specify values for `CustomDomain` and `CustomCertificate` .
     */
    customPrivateKey?: string;
    /**
     * Enable or disable scheduled backups.
     */
    disableAutomatedBackup?: boolean | cdk.IResolvable;
    /**
     * The configuration management engine to use.
     */
    engine?: string;
    /**
     * Optional engine attributes on a specified server.
     */
    engineAttributes?: Array<CfnServer.EngineAttributeProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The engine model of the server.
     */
    engineModel?: string;
    /**
     * The major release version of the engine that you want to use.
     */
    engineVersion?: string;
    /**
     * The ARN of the instance profile that your Amazon EC2 instances use.
     */
    instanceProfileArn: string;
    /**
     * The Amazon EC2 instance type to use.
     */
    instanceType: string;
    /**
     * The Amazon EC2 key pair to set for the instance.
     */
    keyPair?: string;
    /**
     * The start time for a one-hour period during which AWS OpsWorks CM backs up application-level data on your server if automated backups are enabled.
     */
    preferredBackupWindow?: string;
    /**
     * The start time for a one-hour period each week during which AWS OpsWorks CM performs maintenance on the instance.
     */
    preferredMaintenanceWindow?: string;
    /**
     * A list of security group IDs to attach to the Amazon EC2 instance.
     */
    securityGroupIds?: Array<string>;
    /**
     * The name of the server.
     */
    serverName?: string;
    /**
     * The service role that the AWS OpsWorks CM service backend uses to work with your account.
     */
    serviceRoleArn: string;
    /**
     * The IDs of subnets in which to launch the server EC2 instance.
     */
    subnetIds?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A map that contains tag keys and tag values to attach to an AWS OpsWorks for Chef Automate or OpsWorks for Puppet Enterprise server.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnServerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnServer {
    /**
     * The `EngineAttribute` property type specifies administrator credentials for an AWS OpsWorks for Chef Automate or OpsWorks for Puppet Enterprise server.
     *
     * `EngineAttribute` is a property of the `AWS::OpsWorksCM::Server` resource type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworkscm-server-engineattribute.html
     */
    interface EngineAttributeProperty {
        /**
         * The name of the engine attribute.
         *
         * *Attribute name for Chef Automate servers:*
         *
         * - `CHEF_AUTOMATE_ADMIN_PASSWORD`
         *
         * *Attribute names for Puppet Enterprise servers:*
         *
         * - `PUPPET_ADMIN_PASSWORD`
         * - `PUPPET_R10K_REMOTE`
         * - `PUPPET_R10K_PRIVATE_KEY`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworkscm-server-engineattribute.html#cfn-opsworkscm-server-engineattribute-name
         */
        readonly name?: string;
        /**
         * The value of the engine attribute.
         *
         * *Attribute value for Chef Automate servers:*
         *
         * - `CHEF_AUTOMATE_PIVOTAL_KEY` : A base64-encoded RSA public key. The corresponding private key is required to access the Chef API. You can generate this key by running the following [OpenSSL](https://docs.aws.amazon.com/https://www.openssl.org/) command on Linux-based computers.
         *
         * `openssl genrsa -out *pivotal_key_file_name* .pem 2048`
         *
         * On Windows-based computers, you can use the PuTTYgen utility to generate a base64-encoded RSA private key. For more information, see [PuTTYgen - Key Generator for PuTTY on Windows](https://docs.aws.amazon.com/https://www.ssh.com/ssh/putty/windows/puttygen) on SSH.com.
         *
         * *Attribute values for Puppet Enterprise servers:*
         *
         * - `PUPPET_ADMIN_PASSWORD` : An administrator password that you can use to sign in to the Puppet Enterprise console webpage after the server is online. The password must use between 8 and 32 ASCII characters.
         * - `PUPPET_R10K_REMOTE` : The r10k remote is the URL of your control repository (for example, ssh://git@your.git-repo.com:user/control-repo.git). Specifying an r10k remote opens TCP port 8170.
         * - `PUPPET_R10K_PRIVATE_KEY` : If you are using a private Git repository, add `PUPPET_R10K_PRIVATE_KEY` to specify a PEM-encoded private SSH key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworkscm-server-engineattribute.html#cfn-opsworkscm-server-engineattribute-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnServer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html
 */
export interface CfnServerProps {
    /**
     * Associate a public IP address with a server that you are launching.
     *
     * Valid values are `true` or `false` . The default value is `true` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-associatepublicipaddress
     */
    readonly associatePublicIpAddress?: boolean | cdk.IResolvable;
    /**
     * If you specify this field, AWS OpsWorks CM creates the server by using the backup represented by BackupId.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-backupid
     */
    readonly backupId?: string;
    /**
     * The number of automated backups that you want to keep.
     *
     * Whenever a new backup is created, AWS OpsWorks CM deletes the oldest backups if this number is exceeded. The default value is `1` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-backupretentioncount
     */
    readonly backupRetentionCount?: number;
    /**
     * Supported on servers running Chef Automate 2.0 only. A PEM-formatted HTTPS certificate. The value can be be a single, self-signed certificate, or a certificate chain. If you specify a custom certificate, you must also specify values for `CustomDomain` and `CustomPrivateKey` . The following are requirements for the `CustomCertificate` value:.
     *
     * - You can provide either a self-signed, custom certificate, or the full certificate chain.
     * - The certificate must be a valid X509 certificate, or a certificate chain in PEM format.
     * - The certificate must be valid at the time of upload. A certificate can't be used before its validity period begins (the certificate's `NotBefore` date), or after it expires (the certificate's `NotAfter` date).
     * - The certificate’s common name or subject alternative names (SANs), if present, must match the value of `CustomDomain` .
     * - The certificate must match the value of `CustomPrivateKey` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-customcertificate
     */
    readonly customCertificate?: string;
    /**
     * Supported on servers running Chef Automate 2.0 only. An optional public endpoint of a server, such as `https://aws.my-company.com` . To access the server, create a CNAME DNS record in your preferred DNS service that points the custom domain to the endpoint that is generated when the server is created (the value of the CreateServer Endpoint attribute). You cannot access the server by using the generated `Endpoint` value if the server is using a custom domain. If you specify a custom domain, you must also specify values for `CustomCertificate` and `CustomPrivateKey` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-customdomain
     */
    readonly customDomain?: string;
    /**
     * Supported on servers running Chef Automate 2.0 only. A private key in PEM format for connecting to the server by using HTTPS. The private key must not be encrypted; it cannot be protected by a password or passphrase. If you specify a custom private key, you must also specify values for `CustomDomain` and `CustomCertificate` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-customprivatekey
     */
    readonly customPrivateKey?: string;
    /**
     * Enable or disable scheduled backups.
     *
     * Valid values are `true` or `false` . The default value is `true` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-disableautomatedbackup
     */
    readonly disableAutomatedBackup?: boolean | cdk.IResolvable;
    /**
     * The configuration management engine to use.
     *
     * Valid values include `ChefAutomate` and `Puppet` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-engine
     */
    readonly engine?: string;
    /**
     * Optional engine attributes on a specified server.
     *
     * **Attributes accepted in a Chef createServer request:** - `CHEF_AUTOMATE_PIVOTAL_KEY` : A base64-encoded RSA public key. The corresponding private key is required to access the Chef API. When no CHEF_AUTOMATE_PIVOTAL_KEY is set, a private key is generated and returned in the response. When you are specifying the value of CHEF_AUTOMATE_PIVOTAL_KEY as a parameter in the AWS CloudFormation console, you must add newline ( `\n` ) characters at the end of each line of the pivotal key value.
     * - `CHEF_AUTOMATE_ADMIN_PASSWORD` : The password for the administrative user in the Chef Automate web-based dashboard. The password length is a minimum of eight characters, and a maximum of 32. The password can contain letters, numbers, and special characters (!/@#$%^&+=_). The password must contain at least one lower case letter, one upper case letter, one number, and one special character. When no CHEF_AUTOMATE_ADMIN_PASSWORD is set, one is generated and returned in the response.
     *
     * **Attributes accepted in a Puppet createServer request:** - `PUPPET_ADMIN_PASSWORD` : To work with the Puppet Enterprise console, a password must use ASCII characters.
     * - `PUPPET_R10K_REMOTE` : The r10k remote is the URL of your control repository (for example, ssh://git@your.git-repo.com:user/control-repo.git). Specifying an r10k remote opens TCP port 8170.
     * - `PUPPET_R10K_PRIVATE_KEY` : If you are using a private Git repository, add PUPPET_R10K_PRIVATE_KEY to specify a PEM-encoded private SSH key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-engineattributes
     */
    readonly engineAttributes?: Array<CfnServer.EngineAttributeProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The engine model of the server.
     *
     * Valid values in this release include `Monolithic` for Puppet and `Single` for Chef.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-enginemodel
     */
    readonly engineModel?: string;
    /**
     * The major release version of the engine that you want to use.
     *
     * For a Chef server, the valid value for EngineVersion is currently `2` . For a Puppet server, valid values are `2019` or `2017` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-engineversion
     */
    readonly engineVersion?: string;
    /**
     * The ARN of the instance profile that your Amazon EC2 instances use.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-instanceprofilearn
     */
    readonly instanceProfileArn: string;
    /**
     * The Amazon EC2 instance type to use.
     *
     * For example, `m5.large` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-instancetype
     */
    readonly instanceType: string;
    /**
     * The Amazon EC2 key pair to set for the instance.
     *
     * This parameter is optional; if desired, you may specify this parameter to connect to your instances by using SSH.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-keypair
     */
    readonly keyPair?: string;
    /**
     * The start time for a one-hour period during which AWS OpsWorks CM backs up application-level data on your server if automated backups are enabled.
     *
     * Valid values must be specified in one of the following formats:
     *
     * - `HH:MM` for daily backups
     * - `DDD:HH:MM` for weekly backups
     *
     * `MM` must be specified as `00` . The specified time is in coordinated universal time (UTC). The default value is a random, daily start time.
     *
     * *Example:* `08:00` , which represents a daily start time of 08:00 UTC.
     *
     * *Example:* `Mon:08:00` , which represents a start time of every Monday at 08:00 UTC. (8:00 a.m.)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-preferredbackupwindow
     */
    readonly preferredBackupWindow?: string;
    /**
     * The start time for a one-hour period each week during which AWS OpsWorks CM performs maintenance on the instance.
     *
     * Valid values must be specified in the following format: `DDD:HH:MM` . `MM` must be specified as `00` . The specified time is in coordinated universal time (UTC). The default value is a random one-hour period on Tuesday, Wednesday, or Friday. See `TimeWindowDefinition` for more information.
     *
     * *Example:* `Mon:08:00` , which represents a start time of every Monday at 08:00 UTC. (8:00 a.m.)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-preferredmaintenancewindow
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * A list of security group IDs to attach to the Amazon EC2 instance.
     *
     * If you add this parameter, the specified security groups must be within the VPC that is specified by `SubnetIds` .
     *
     * If you do not specify this parameter, AWS OpsWorks CM creates one new security group that uses TCP ports 22 and 443, open to 0.0.0.0/0 (everyone).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-securitygroupids
     */
    readonly securityGroupIds?: Array<string>;
    /**
     * The name of the server.
     *
     * The server name must be unique within your AWS account, within each region. Server names must start with a letter; then letters, numbers, or hyphens (-) are allowed, up to a maximum of 40 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-servername
     */
    readonly serverName?: string;
    /**
     * The service role that the AWS OpsWorks CM service backend uses to work with your account.
     *
     * Although the AWS OpsWorks management console typically creates the service role for you, if you are using the AWS CLI or API commands, run the service-role-creation.yaml AWS CloudFormation template, located at https://s3.amazonaws.com/opsworks-cm-us-east-1-prod-default-assets/misc/opsworks-cm-roles.yaml. This template creates a CloudFormation stack that includes the service role and instance profile that you need.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-servicerolearn
     */
    readonly serviceRoleArn: string;
    /**
     * The IDs of subnets in which to launch the server EC2 instance.
     *
     * Amazon EC2-Classic customers: This field is required. All servers must run within a VPC. The VPC must have "Auto Assign Public IP" enabled.
     *
     * EC2-VPC customers: This field is optional. If you do not specify subnet IDs, your EC2 instances are created in a default subnet that is selected by Amazon EC2. If you specify subnet IDs, the VPC must have "Auto Assign Public IP" enabled.
     *
     * For more information about supported Amazon EC2 platforms, see [Supported Platforms](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-subnetids
     */
    readonly subnetIds?: Array<string>;
    /**
     * A map that contains tag keys and tag values to attach to an AWS OpsWorks for Chef Automate or OpsWorks for Puppet Enterprise server.
     *
     * - The key cannot be empty.
     * - The key can be a maximum of 127 characters, and can contain only Unicode letters, numbers, or separators, or the following special characters: `+ - = . _ : / @`
     * - The value can be a maximum 255 characters, and contain only Unicode letters, numbers, or separators, or the following special characters: `+ - = . _ : / @`
     * - Leading and trailing spaces are trimmed from both the key and value.
     * - A maximum of 50 user-applied tags is allowed for any AWS OpsWorks CM server.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#cfn-opsworkscm-server-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
