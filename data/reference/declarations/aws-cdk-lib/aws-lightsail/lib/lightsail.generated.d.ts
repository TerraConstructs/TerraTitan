import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::Lightsail::Alarm` resource specifies an alarm that can be used to monitor a single metric for one of your Lightsail resources.
 *
 * @cloudformationResource AWS::Lightsail::Alarm
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html
 */
export declare class CfnAlarm extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAlarm from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAlarm;
    /**
     * The Amazon Resource Name (ARN) of the alarm.
     *
     * @cloudformationAttribute AlarmArn
     */
    readonly attrAlarmArn: string;
    /**
     * The current state of the alarm.
     *
     * An alarm has the following possible states:
     *
     * - `ALARM` - The metric is outside of the defined threshold.
     * - `INSUFFICIENT_DATA` - The alarm has recently started, the metric is not available, or not enough data is available for the metric to determine the alarm state.
     * - `OK` - The metric is within the defined threshold.
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * The name of the alarm.
     */
    alarmName: string;
    /**
     * The arithmetic operation to use when comparing the specified statistic and threshold.
     */
    comparisonOperator: string;
    /**
     * The contact protocols for the alarm, such as `Email` , `SMS` (text messaging), or both.
     */
    contactProtocols?: Array<string>;
    /**
     * The number of data points within the evaluation periods that must be breaching to cause the alarm to go to the `ALARM` state.
     */
    datapointsToAlarm?: number;
    /**
     * The number of periods over which data is compared to the specified threshold.
     */
    evaluationPeriods: number;
    /**
     * The name of the metric associated with the alarm.
     */
    metricName: string;
    /**
     * The name of the Lightsail resource that the alarm monitors.
     */
    monitoredResourceName: string;
    /**
     * A Boolean value indicating whether the alarm is enabled.
     */
    notificationEnabled?: boolean | cdk.IResolvable;
    /**
     * The alarm states that trigger a notification.
     */
    notificationTriggers?: Array<string>;
    /**
     * The value against which the specified statistic is compared.
     */
    threshold: number;
    /**
     * Specifies how the alarm handles missing data points.
     */
    treatMissingData?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAlarmProps);
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
 * Properties for defining a `CfnAlarm`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html
 */
export interface CfnAlarmProps {
    /**
     * The name of the alarm.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-alarmname
     */
    readonly alarmName: string;
    /**
     * The arithmetic operation to use when comparing the specified statistic and threshold.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-comparisonoperator
     */
    readonly comparisonOperator: string;
    /**
     * The contact protocols for the alarm, such as `Email` , `SMS` (text messaging), or both.
     *
     * *Allowed Values* : `Email` | `SMS`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-contactprotocols
     */
    readonly contactProtocols?: Array<string>;
    /**
     * The number of data points within the evaluation periods that must be breaching to cause the alarm to go to the `ALARM` state.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-datapointstoalarm
     */
    readonly datapointsToAlarm?: number;
    /**
     * The number of periods over which data is compared to the specified threshold.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-evaluationperiods
     */
    readonly evaluationPeriods: number;
    /**
     * The name of the metric associated with the alarm.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-metricname
     */
    readonly metricName: string;
    /**
     * The name of the Lightsail resource that the alarm monitors.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-monitoredresourcename
     */
    readonly monitoredResourceName: string;
    /**
     * A Boolean value indicating whether the alarm is enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-notificationenabled
     */
    readonly notificationEnabled?: boolean | cdk.IResolvable;
    /**
     * The alarm states that trigger a notification.
     *
     * > To specify the `OK` and `INSUFFICIENT_DATA` values, you must also specify `ContactProtocols` values. Otherwise, the `OK` and `INSUFFICIENT_DATA` values will not take effect and the stack will drift.
     *
     * *Allowed Values* : `OK` | `ALARM` | `INSUFFICIENT_DATA`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-notificationtriggers
     */
    readonly notificationTriggers?: Array<string>;
    /**
     * The value against which the specified statistic is compared.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-threshold
     */
    readonly threshold: number;
    /**
     * Specifies how the alarm handles missing data points.
     *
     * An alarm can treat missing data in the following ways:
     *
     * - `breaching` - Assumes the missing data is not within the threshold. Missing data counts towards the number of times that the metric is not within the threshold.
     * - `notBreaching` - Assumes the missing data is within the threshold. Missing data does not count towards the number of times that the metric is not within the threshold.
     * - `ignore` - Ignores the missing data. Maintains the current alarm state.
     * - `missing` - Missing data is treated as missing.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-treatmissingdata
     */
    readonly treatMissingData?: string;
}
/**
 * The `AWS::Lightsail::Bucket` resource specifies a bucket.
 *
 * @cloudformationResource AWS::Lightsail::Bucket
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-bucket.html
 */
export declare class CfnBucket extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBucket from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBucket;
    /**
     * A Boolean value indicating whether the bundle that is currently applied to your distribution can be changed to another bundle.
     *
     * @cloudformationAttribute AbleToUpdateBundle
     */
    readonly attrAbleToUpdateBundle: cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the bucket.
     *
     * @cloudformationAttribute BucketArn
     */
    readonly attrBucketArn: string;
    /**
     * The URL of the bucket.
     *
     * @cloudformationAttribute Url
     */
    readonly attrUrl: string;
    /**
     * An object that describes the access rules for the bucket.
     */
    accessRules?: CfnBucket.AccessRulesProperty | cdk.IResolvable;
    /**
     * The name of the bucket.
     */
    bucketName: string;
    /**
     * The bundle ID for the bucket (for example, `small_1_0` ).
     */
    bundleId: string;
    /**
     * Indicates whether object versioning is enabled for the bucket.
     */
    objectVersioning?: boolean | cdk.IResolvable;
    /**
     * An array of AWS account IDs that have read-only access to the bucket.
     */
    readOnlyAccessAccounts?: Array<string>;
    /**
     * An array of Lightsail instances that have access to the bucket.
     */
    resourcesReceivingAccess?: Array<string>;
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
    constructor(scope: constructs.Construct, id: string, props: CfnBucketProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnBucket {
    /**
     * `AccessRules` is a property of the [AWS::Lightsail::Bucket](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-bucket.html) resource. It describes access rules for a bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-bucket-accessrules.html
     */
    interface AccessRulesProperty {
        /**
         * A Boolean value indicating whether the access control list (ACL) permissions that are applied to individual objects override the `GetObject` option that is currently specified.
         *
         * When this is true, you can use the [PutObjectAcl](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html) Amazon S3 API operation to set individual objects to public (read-only) or private, using either the `public-read` ACL or the `private` ACL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-bucket-accessrules.html#cfn-lightsail-bucket-accessrules-allowpublicoverrides
         */
        readonly allowPublicOverrides?: boolean | cdk.IResolvable;
        /**
         * Specifies the anonymous access to all objects in a bucket.
         *
         * The following options can be specified:
         *
         * - `public` - Sets all objects in the bucket to public (read-only), making them readable by everyone on the internet.
         *
         * If the `GetObject` value is set to `public` , then all objects in the bucket default to public regardless of the `allowPublicOverrides` value.
         * - `private` - Sets all objects in the bucket to private, making them readable only by you and anyone that you grant access to.
         *
         * If the `GetObject` value is set to `private` , and the `allowPublicOverrides` value is set to `true` , then all objects in the bucket default to private unless they are configured with a `public-read` ACL. Individual objects with a `public-read` ACL are readable by everyone on the internet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-bucket-accessrules.html#cfn-lightsail-bucket-accessrules-getobject
         */
        readonly objectAccess?: string;
    }
}
/**
 * Properties for defining a `CfnBucket`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-bucket.html
 */
export interface CfnBucketProps {
    /**
     * An object that describes the access rules for the bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-bucket.html#cfn-lightsail-bucket-accessrules
     */
    readonly accessRules?: CfnBucket.AccessRulesProperty | cdk.IResolvable;
    /**
     * The name of the bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-bucket.html#cfn-lightsail-bucket-bucketname
     */
    readonly bucketName: string;
    /**
     * The bundle ID for the bucket (for example, `small_1_0` ).
     *
     * A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-bucket.html#cfn-lightsail-bucket-bundleid
     */
    readonly bundleId: string;
    /**
     * Indicates whether object versioning is enabled for the bucket.
     *
     * The following options can be configured:
     *
     * - `Enabled` - Object versioning is enabled.
     * - `Suspended` - Object versioning was previously enabled but is currently suspended. Existing object versions are retained.
     * - `NeverEnabled` - Object versioning has never been enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-bucket.html#cfn-lightsail-bucket-objectversioning
     */
    readonly objectVersioning?: boolean | cdk.IResolvable;
    /**
     * An array of AWS account IDs that have read-only access to the bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-bucket.html#cfn-lightsail-bucket-readonlyaccessaccounts
     */
    readonly readOnlyAccessAccounts?: Array<string>;
    /**
     * An array of Lightsail instances that have access to the bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-bucket.html#cfn-lightsail-bucket-resourcesreceivingaccess
     */
    readonly resourcesReceivingAccess?: Array<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *AWS CloudFormation User Guide* .
     *
     * > The `Value` of `Tags` is optional for Lightsail resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-bucket.html#cfn-lightsail-bucket-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::Lightsail::Certificate` resource specifies an SSL/TLS certificate that you can use with a content delivery network (CDN) distribution and a container service.
 *
 * > For information about certificates that you can use with a load balancer, see [AWS::Lightsail::LoadBalancerTlsCertificate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html) .
 *
 * @cloudformationResource AWS::Lightsail::Certificate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-certificate.html
 */
export declare class CfnCertificate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
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
     * The Amazon Resource Name (ARN) of the certificate.
     *
     * @cloudformationAttribute CertificateArn
     */
    readonly attrCertificateArn: string;
    /**
     * The validation status of the certificate.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The name of the certificate.
     */
    certificateName: string;
    /**
     * The domain name of the certificate.
     */
    domainName: string;
    /**
     * An array of strings that specify the alternate domains (such as `example.org` ) and subdomains (such as `blog.example.com` ) of the certificate.
     */
    subjectAlternativeNames?: Array<string>;
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
    constructor(scope: constructs.Construct, id: string, props: CfnCertificateProps);
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
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-certificate.html
 */
export interface CfnCertificateProps {
    /**
     * The name of the certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-certificate.html#cfn-lightsail-certificate-certificatename
     */
    readonly certificateName: string;
    /**
     * The domain name of the certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-certificate.html#cfn-lightsail-certificate-domainname
     */
    readonly domainName: string;
    /**
     * An array of strings that specify the alternate domains (such as `example.org` ) and subdomains (such as `blog.example.com` ) of the certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-certificate.html#cfn-lightsail-certificate-subjectalternativenames
     */
    readonly subjectAlternativeNames?: Array<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *AWS CloudFormation User Guide* .
     *
     * > The `Value` of `Tags` is optional for Lightsail resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-certificate.html#cfn-lightsail-certificate-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::Lightsail::Container` resource specifies a container service.
 *
 * A Lightsail container service is a compute resource to which you can deploy containers.
 *
 * @cloudformationResource AWS::Lightsail::Container
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html
 */
export declare class CfnContainer extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnContainer from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnContainer;
    /**
     * The Amazon Resource Name (ARN) of the container.
     *
     * @cloudformationAttribute ContainerArn
     */
    readonly attrContainerArn: string;
    /**
     * The principle Amazon Resource Name (ARN) of the role.
     *
     * @cloudformationAttribute PrincipalArn
     */
    readonly attrPrincipalArn: string;
    /**
     * The principle Amazon Resource Name (ARN) of the role.
     *
     * @cloudformationAttribute PrivateRegistryAccess.EcrImagePullerRole.PrincipalArn
     */
    readonly attrPrivateRegistryAccessEcrImagePullerRolePrincipalArn: string;
    /**
     * The publicly accessible URL of the container service.
     *
     * If no public endpoint is specified in the current deployment, this URL returns a 404 response.
     *
     * @cloudformationAttribute Url
     */
    readonly attrUrl: string;
    /**
     * An object that describes the current container deployment of the container service.
     */
    containerServiceDeployment?: CfnContainer.ContainerServiceDeploymentProperty | cdk.IResolvable;
    /**
     * A Boolean value indicating whether the container service is disabled.
     */
    isDisabled?: boolean | cdk.IResolvable;
    /**
     * The power specification of the container service.
     */
    power: string;
    /**
     * An object that describes the configuration for the container service to access private container image repositories, such as Amazon Elastic Container Registry ( Amazon ECR ) private repositories.
     */
    privateRegistryAccess?: cdk.IResolvable | CfnContainer.PrivateRegistryAccessProperty;
    /**
     * The public domain name of the container service, such as `example.com` and `www.example.com` .
     */
    publicDomainNames?: Array<cdk.IResolvable | CfnContainer.PublicDomainNameProperty> | cdk.IResolvable;
    /**
     * The scale specification of the container service.
     */
    scale: number;
    /**
     * The name of the container service.
     */
    serviceName: string;
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
    constructor(scope: constructs.Construct, id: string, props: CfnContainerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnContainer {
    /**
     * `PublicDomainName` is a property of the [AWS::Lightsail::Container](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html) resource. It describes the public domain names to use with a container service, such as `example.com` and `www.example.com` . It also describes the certificates to use with a container service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-publicdomainname.html
     */
    interface PublicDomainNameProperty {
        /**
         * The name of the certificate for the public domains.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-publicdomainname.html#cfn-lightsail-container-publicdomainname-certificatename
         */
        readonly certificateName?: string;
        /**
         * The public domain names to use with the container service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-publicdomainname.html#cfn-lightsail-container-publicdomainname-domainnames
         */
        readonly domainNames?: Array<string>;
    }
    /**
     * Describes the configuration for an Amazon Lightsail container service to access private container image repositories, such as Amazon Elastic Container Registry ( Amazon ECR ) private repositories.
     *
     * For more information, see [Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-container-service-ecr-private-repo-access) in the *Amazon Lightsail Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-privateregistryaccess.html
     */
    interface PrivateRegistryAccessProperty {
        /**
         * An object that describes the activation status of the role that you can use to grant a Lightsail container service access to Amazon ECR private repositories.
         *
         * If the role is activated, the Amazon Resource Name (ARN) of the role is also listed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-privateregistryaccess.html#cfn-lightsail-container-privateregistryaccess-ecrimagepullerrole
         */
        readonly ecrImagePullerRole?: CfnContainer.EcrImagePullerRoleProperty | cdk.IResolvable;
    }
    /**
     * Describes the IAM role that you can use to grant a Lightsail container service access to Amazon ECR private repositories.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-ecrimagepullerrole.html
     */
    interface EcrImagePullerRoleProperty {
        /**
         * A boolean value that indicates whether the `ECRImagePullerRole` is active.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-ecrimagepullerrole.html#cfn-lightsail-container-ecrimagepullerrole-isactive
         */
        readonly isActive?: boolean | cdk.IResolvable;
        /**
         * The principle Amazon Resource Name (ARN) of the role.
         *
         * This property is read-only.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-ecrimagepullerrole.html#cfn-lightsail-container-ecrimagepullerrole-principalarn
         */
        readonly principalArn?: string;
    }
    /**
     * `ContainerServiceDeployment` is a property of the [AWS::Lightsail::Container](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html) resource. It describes a container deployment configuration of a container service.
     *
     * A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-containerservicedeployment.html
     */
    interface ContainerServiceDeploymentProperty {
        /**
         * An object that describes the configuration for the containers of the deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-containerservicedeployment.html#cfn-lightsail-container-containerservicedeployment-containers
         */
        readonly containers?: Array<CfnContainer.ContainerProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * An object that describes the endpoint of the deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-containerservicedeployment.html#cfn-lightsail-container-containerservicedeployment-publicendpoint
         */
        readonly publicEndpoint?: cdk.IResolvable | CfnContainer.PublicEndpointProperty;
    }
    /**
     * `Container` is a property of the [ContainerServiceDeployment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-containerservicedeployment.html) property. It describes the settings of a container that will be launched, or that is launched, to an Amazon Lightsail container service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-container.html
     */
    interface ContainerProperty {
        /**
         * The launch command for the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-container.html#cfn-lightsail-container-container-command
         */
        readonly command?: Array<string>;
        /**
         * The name of the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-container.html#cfn-lightsail-container-container-containername
         */
        readonly containerName?: string;
        /**
         * The environment variables of the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-container.html#cfn-lightsail-container-container-environment
         */
        readonly environment?: Array<CfnContainer.EnvironmentVariableProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The name of the image used for the container.
         *
         * Container images that are sourced from (registered and stored on) your container service start with a colon ( `:` ). For example, if your container service name is `container-service-1` , the container image label is `mystaticsite` , and you want to use the third version ( `3` ) of the registered container image, then you should specify `:container-service-1.mystaticsite.3` . To use the latest version of a container image, specify `latest` instead of a version number (for example, `:container-service-1.mystaticsite.latest` ). Your container service will automatically use the highest numbered version of the registered container image.
         *
         * Container images that are sourced from a public registry like Docker Hub don’t start with a colon. For example, `nginx:latest` or `nginx` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-container.html#cfn-lightsail-container-container-image
         */
        readonly image?: string;
        /**
         * An object that describes the open firewall ports and protocols of the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-container.html#cfn-lightsail-container-container-ports
         */
        readonly ports?: Array<cdk.IResolvable | CfnContainer.PortInfoProperty> | cdk.IResolvable;
    }
    /**
     * `EnvironmentVariable` is a property of the [Container](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-container.html) property. It describes the environment variables of a container on a container service which are key-value parameters that provide dynamic configuration of the application or script run by the container.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-environmentvariable.html
     */
    interface EnvironmentVariableProperty {
        /**
         * The environment variable value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-environmentvariable.html#cfn-lightsail-container-environmentvariable-value
         */
        readonly value?: string;
        /**
         * The environment variable key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-environmentvariable.html#cfn-lightsail-container-environmentvariable-variable
         */
        readonly variable?: string;
    }
    /**
     * `PortInfo` is a property of the [Container](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-container.html) property. It describes the ports to open and the protocols to use for a container on a Amazon Lightsail container service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-portinfo.html
     */
    interface PortInfoProperty {
        /**
         * The open firewall ports of the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-portinfo.html#cfn-lightsail-container-portinfo-port
         */
        readonly port?: string;
        /**
         * The protocol name for the open ports.
         *
         * *Allowed values* : `HTTP` | `HTTPS` | `TCP` | `UDP`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-portinfo.html#cfn-lightsail-container-portinfo-protocol
         */
        readonly protocol?: string;
    }
    /**
     * `PublicEndpoint` is a property of the [ContainerServiceDeployment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-containerservicedeployment.html) property. It describes describes the settings of the public endpoint of a container on a container service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-publicendpoint.html
     */
    interface PublicEndpointProperty {
        /**
         * The name of the container entry of the deployment that the endpoint configuration applies to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-publicendpoint.html#cfn-lightsail-container-publicendpoint-containername
         */
        readonly containerName?: string;
        /**
         * The port of the specified container to which traffic is forwarded to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-publicendpoint.html#cfn-lightsail-container-publicendpoint-containerport
         */
        readonly containerPort?: number;
        /**
         * An object that describes the health check configuration of the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-publicendpoint.html#cfn-lightsail-container-publicendpoint-healthcheckconfig
         */
        readonly healthCheckConfig?: CfnContainer.HealthCheckConfigProperty | cdk.IResolvable;
    }
    /**
     * `HealthCheckConfig` is a property of the [PublicEndpoint](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-publicendpoint.html) property. It describes the healthcheck configuration of a container deployment on a container service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-healthcheckconfig.html
     */
    interface HealthCheckConfigProperty {
        /**
         * The number of consecutive health check successes required before moving the container to the `Healthy` state.
         *
         * The default value is `2` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-healthcheckconfig.html#cfn-lightsail-container-healthcheckconfig-healthythreshold
         */
        readonly healthyThreshold?: number;
        /**
         * The approximate interval, in seconds, between health checks of an individual container.
         *
         * You can specify between `5` and `300` seconds. The default value is `5` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-healthcheckconfig.html#cfn-lightsail-container-healthcheckconfig-intervalseconds
         */
        readonly intervalSeconds?: number;
        /**
         * The path on the container on which to perform the health check.
         *
         * The default value is `/` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-healthcheckconfig.html#cfn-lightsail-container-healthcheckconfig-path
         */
        readonly path?: string;
        /**
         * The HTTP codes to use when checking for a successful response from a container.
         *
         * You can specify values between `200` and `499` . You can specify multiple values (for example, `200,202` ) or a range of values (for example, `200-299` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-healthcheckconfig.html#cfn-lightsail-container-healthcheckconfig-successcodes
         */
        readonly successCodes?: string;
        /**
         * The amount of time, in seconds, during which no response means a failed health check.
         *
         * You can specify between `2` and `60` seconds. The default value is `2` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-healthcheckconfig.html#cfn-lightsail-container-healthcheckconfig-timeoutseconds
         */
        readonly timeoutSeconds?: number;
        /**
         * The number of consecutive health check failures required before moving the container to the `Unhealthy` state.
         *
         * The default value is `2` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-healthcheckconfig.html#cfn-lightsail-container-healthcheckconfig-unhealthythreshold
         */
        readonly unhealthyThreshold?: number;
    }
}
/**
 * Properties for defining a `CfnContainer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html
 */
export interface CfnContainerProps {
    /**
     * An object that describes the current container deployment of the container service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html#cfn-lightsail-container-containerservicedeployment
     */
    readonly containerServiceDeployment?: CfnContainer.ContainerServiceDeploymentProperty | cdk.IResolvable;
    /**
     * A Boolean value indicating whether the container service is disabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html#cfn-lightsail-container-isdisabled
     */
    readonly isDisabled?: boolean | cdk.IResolvable;
    /**
     * The power specification of the container service.
     *
     * The power specifies the amount of RAM, the number of vCPUs, and the base price of the container service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html#cfn-lightsail-container-power
     */
    readonly power: string;
    /**
     * An object that describes the configuration for the container service to access private container image repositories, such as Amazon Elastic Container Registry ( Amazon ECR ) private repositories.
     *
     * For more information, see [Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-container-service-ecr-private-repo-access) in the *Amazon Lightsail Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html#cfn-lightsail-container-privateregistryaccess
     */
    readonly privateRegistryAccess?: cdk.IResolvable | CfnContainer.PrivateRegistryAccessProperty;
    /**
     * The public domain name of the container service, such as `example.com` and `www.example.com` .
     *
     * You can specify up to four public domain names for a container service. The domain names that you specify are used when you create a deployment with a container that is configured as the public endpoint of your container service.
     *
     * If you don't specify public domain names, then you can use the default domain of the container service.
     *
     * > You must create and validate an SSL/TLS certificate before you can use public domain names with your container service. Use the [AWS::Lightsail::Certificate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-certificate.html) resource to create a certificate for the public domain names that you want to use with your container service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html#cfn-lightsail-container-publicdomainnames
     */
    readonly publicDomainNames?: Array<cdk.IResolvable | CfnContainer.PublicDomainNameProperty> | cdk.IResolvable;
    /**
     * The scale specification of the container service.
     *
     * The scale specifies the allocated compute nodes of the container service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html#cfn-lightsail-container-scale
     */
    readonly scale: number;
    /**
     * The name of the container service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html#cfn-lightsail-container-servicename
     */
    readonly serviceName: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *AWS CloudFormation User Guide* .
     *
     * > The `Value` of `Tags` is optional for Lightsail resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html#cfn-lightsail-container-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::Lightsail::Database` resource specifies an Amazon Lightsail database.
 *
 * @cloudformationResource AWS::Lightsail::Database
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html
 */
export declare class CfnDatabase extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
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
     * The Amazon Resource Name (ARN) of the database (for example, `arn:aws:lightsail:us-east-2:123456789101:RelationalDatabase/244ad76f-8aad-4741-809f-12345EXAMPLE` ).
     *
     * @cloudformationAttribute DatabaseArn
     */
    readonly attrDatabaseArn: string;
    /**
     * The Availability Zone for the database.
     */
    availabilityZone?: string;
    /**
     * A Boolean value indicating whether automated backup retention is enabled for the database.
     */
    backupRetention?: boolean | cdk.IResolvable;
    /**
     * The certificate associated with the database.
     */
    caCertificateIdentifier?: string;
    /**
     * The meaning of this parameter differs according to the database engine you use.
     */
    masterDatabaseName: string;
    /**
     * The name for the primary user.
     */
    masterUsername: string;
    /**
     * The password for the primary user of the database.
     */
    masterUserPassword?: string;
    /**
     * The daily time range during which automated backups are created for the database (for example, `16:00-16:30` ).
     */
    preferredBackupWindow?: string;
    /**
     * The weekly time range during which system maintenance can occur for the database, formatted as follows: `ddd:hh24:mi-ddd:hh24:mi` .
     */
    preferredMaintenanceWindow?: string;
    /**
     * A Boolean value indicating whether the database is accessible to anyone on the internet.
     */
    publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * The blueprint ID for the database (for example, `mysql_8_0` ).
     */
    relationalDatabaseBlueprintId: string;
    /**
     * The bundle ID for the database (for example, `medium_1_0` ).
     */
    relationalDatabaseBundleId: string;
    /**
     * The name of the instance.
     */
    relationalDatabaseName: string;
    /**
     * An array of parameters for the database.
     */
    relationalDatabaseParameters?: Array<cdk.IResolvable | CfnDatabase.RelationalDatabaseParameterProperty> | cdk.IResolvable;
    /**
     * A Boolean value indicating whether to change the primary user password to a new, strong password generated by Lightsail .
     */
    rotateMasterUserPassword?: boolean | cdk.IResolvable;
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
     * `RelationalDatabaseParameter` is a property of the [AWS::Lightsail::Database](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html) resource. It describes parameters for the database.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-database-relationaldatabaseparameter.html
     */
    interface RelationalDatabaseParameterProperty {
        /**
         * The valid range of values for the parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-database-relationaldatabaseparameter.html#cfn-lightsail-database-relationaldatabaseparameter-allowedvalues
         */
        readonly allowedValues?: string;
        /**
         * Indicates when parameter updates are applied.
         *
         * Can be `immediate` or `pending-reboot` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-database-relationaldatabaseparameter.html#cfn-lightsail-database-relationaldatabaseparameter-applymethod
         */
        readonly applyMethod?: string;
        /**
         * Specifies the engine-specific parameter type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-database-relationaldatabaseparameter.html#cfn-lightsail-database-relationaldatabaseparameter-applytype
         */
        readonly applyType?: string;
        /**
         * The valid data type of the parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-database-relationaldatabaseparameter.html#cfn-lightsail-database-relationaldatabaseparameter-datatype
         */
        readonly dataType?: string;
        /**
         * A description of the parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-database-relationaldatabaseparameter.html#cfn-lightsail-database-relationaldatabaseparameter-description
         */
        readonly description?: string;
        /**
         * A Boolean value indicating whether the parameter can be modified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-database-relationaldatabaseparameter.html#cfn-lightsail-database-relationaldatabaseparameter-ismodifiable
         */
        readonly isModifiable?: boolean | cdk.IResolvable;
        /**
         * The name of the parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-database-relationaldatabaseparameter.html#cfn-lightsail-database-relationaldatabaseparameter-parametername
         */
        readonly parameterName?: string;
        /**
         * The value for the parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-database-relationaldatabaseparameter.html#cfn-lightsail-database-relationaldatabaseparameter-parametervalue
         */
        readonly parameterValue?: string;
    }
}
/**
 * Properties for defining a `CfnDatabase`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html
 */
export interface CfnDatabaseProps {
    /**
     * The Availability Zone for the database.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html#cfn-lightsail-database-availabilityzone
     */
    readonly availabilityZone?: string;
    /**
     * A Boolean value indicating whether automated backup retention is enabled for the database.
     *
     * Data Import Mode is enabled when `BackupRetention` is set to `false` , and is disabled when `BackupRetention` is set to `true` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html#cfn-lightsail-database-backupretention
     */
    readonly backupRetention?: boolean | cdk.IResolvable;
    /**
     * The certificate associated with the database.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html#cfn-lightsail-database-cacertificateidentifier
     */
    readonly caCertificateIdentifier?: string;
    /**
     * The meaning of this parameter differs according to the database engine you use.
     *
     * *MySQL*
     *
     * The name of the database to create when the Lightsail database resource is created. If this parameter isn't specified, no database is created in the database resource.
     *
     * Constraints:
     *
     * - Must contain 1-64 letters or numbers.
     * - Must begin with a letter. Subsequent characters can be letters, underscores, or numbers (0-9).
     * - Can't be a word reserved by the specified database engine.
     *
     * For more information about reserved words in MySQL, see the Keywords and Reserved Words articles for [MySQL 5.6](https://docs.aws.amazon.com/https://dev.mysql.com/doc/refman/5.6/en/keywords.html) , [MySQL 5.7](https://docs.aws.amazon.com/https://dev.mysql.com/doc/refman/5.7/en/keywords.html) , and [MySQL 8.0](https://docs.aws.amazon.com/https://dev.mysql.com/doc/refman/8.0/en/keywords.html) .
     *
     * *PostgreSQL*
     *
     * The name of the database to create when the Lightsail database resource is created. If this parameter isn't specified, a database named `postgres` is created in the database resource.
     *
     * Constraints:
     *
     * - Must contain 1-63 letters or numbers.
     * - Must begin with a letter. Subsequent characters can be letters, underscores, or numbers (0-9).
     * - Can't be a word reserved by the specified database engine.
     *
     * For more information about reserved words in PostgreSQL, see the SQL Key Words articles for [PostgreSQL 9.6](https://docs.aws.amazon.com/https://www.postgresql.org/docs/9.6/sql-keywords-appendix.html) , [PostgreSQL 10](https://docs.aws.amazon.com/https://www.postgresql.org/docs/10/sql-keywords-appendix.html) , [PostgreSQL 11](https://docs.aws.amazon.com/https://www.postgresql.org/docs/11/sql-keywords-appendix.html) , and [PostgreSQL 12](https://docs.aws.amazon.com/https://www.postgresql.org/docs/12/sql-keywords-appendix.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html#cfn-lightsail-database-masterdatabasename
     */
    readonly masterDatabaseName: string;
    /**
     * The name for the primary user.
     *
     * *MySQL*
     *
     * Constraints:
     *
     * - Required for MySQL.
     * - Must be 1-16 letters or numbers. Can contain underscores.
     * - First character must be a letter.
     * - Can't be a reserved word for the chosen database engine.
     *
     * For more information about reserved words in MySQL 5.6 or 5.7, see the Keywords and Reserved Words articles for [MySQL 5.6](https://docs.aws.amazon.com/https://dev.mysql.com/doc/refman/5.6/en/keywords.html) , [MySQL 5.7](https://docs.aws.amazon.com/https://dev.mysql.com/doc/refman/5.7/en/keywords.html) , or [MySQL 8.0](https://docs.aws.amazon.com/https://dev.mysql.com/doc/refman/8.0/en/keywords.html) .
     *
     * *PostgreSQL*
     *
     * Constraints:
     *
     * - Required for PostgreSQL.
     * - Must be 1-63 letters or numbers. Can contain underscores.
     * - First character must be a letter.
     * - Can't be a reserved word for the chosen database engine.
     *
     * For more information about reserved words in MySQL 5.6 or 5.7, see the Keywords and Reserved Words articles for [PostgreSQL 9.6](https://docs.aws.amazon.com/https://www.postgresql.org/docs/9.6/sql-keywords-appendix.html) , [PostgreSQL 10](https://docs.aws.amazon.com/https://www.postgresql.org/docs/10/sql-keywords-appendix.html) , [PostgreSQL 11](https://docs.aws.amazon.com/https://www.postgresql.org/docs/11/sql-keywords-appendix.html) , and [PostgreSQL 12](https://docs.aws.amazon.com/https://www.postgresql.org/docs/12/sql-keywords-appendix.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html#cfn-lightsail-database-masterusername
     */
    readonly masterUsername: string;
    /**
     * The password for the primary user of the database.
     *
     * The password can include any printable ASCII character except the following: /, ", or @. It cannot contain spaces.
     *
     * > The `MasterUserPassword` and `RotateMasterUserPassword` parameters cannot be used together in the same template.
     *
     * *MySQL*
     *
     * Constraints: Must contain 8-41 characters.
     *
     * *PostgreSQL*
     *
     * Constraints: Must contain 8-128 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html#cfn-lightsail-database-masteruserpassword
     */
    readonly masterUserPassword?: string;
    /**
     * The daily time range during which automated backups are created for the database (for example, `16:00-16:30` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html#cfn-lightsail-database-preferredbackupwindow
     */
    readonly preferredBackupWindow?: string;
    /**
     * The weekly time range during which system maintenance can occur for the database, formatted as follows: `ddd:hh24:mi-ddd:hh24:mi` .
     *
     * For example, `Tue:17:00-Tue:17:30` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html#cfn-lightsail-database-preferredmaintenancewindow
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * A Boolean value indicating whether the database is accessible to anyone on the internet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html#cfn-lightsail-database-publiclyaccessible
     */
    readonly publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * The blueprint ID for the database (for example, `mysql_8_0` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html#cfn-lightsail-database-relationaldatabaseblueprintid
     */
    readonly relationalDatabaseBlueprintId: string;
    /**
     * The bundle ID for the database (for example, `medium_1_0` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html#cfn-lightsail-database-relationaldatabasebundleid
     */
    readonly relationalDatabaseBundleId: string;
    /**
     * The name of the instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html#cfn-lightsail-database-relationaldatabasename
     */
    readonly relationalDatabaseName: string;
    /**
     * An array of parameters for the database.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html#cfn-lightsail-database-relationaldatabaseparameters
     */
    readonly relationalDatabaseParameters?: Array<cdk.IResolvable | CfnDatabase.RelationalDatabaseParameterProperty> | cdk.IResolvable;
    /**
     * A Boolean value indicating whether to change the primary user password to a new, strong password generated by Lightsail .
     *
     * > The `RotateMasterUserPassword` and `MasterUserPassword` parameters cannot be used together in the same template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html#cfn-lightsail-database-rotatemasteruserpassword
     */
    readonly rotateMasterUserPassword?: boolean | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *AWS CloudFormation User Guide* .
     *
     * > The `Value` of `Tags` is optional for Lightsail resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html#cfn-lightsail-database-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::Lightsail::Disk` resource specifies a disk that can be attached to an Amazon Lightsail instance that is in the same AWS Region and Availability Zone.
 *
 * @cloudformationResource AWS::Lightsail::Disk
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html
 */
export declare class CfnDisk extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDisk from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDisk;
    /**
     * The resources to which the disk is attached.
     *
     * @cloudformationAttribute AttachedTo
     */
    readonly attrAttachedTo: string;
    /**
     * (Deprecated) The attachment state of the disk.
     *
     * > In releases prior to November 14, 2017, this parameter returned `attached` for system disks in the API response. It is now deprecated, but still included in the response. Use `isAttached` instead.
     *
     * @cloudformationAttribute AttachmentState
     */
    readonly attrAttachmentState: string;
    /**
     * The Amazon Resource Name (ARN) of the disk.
     *
     * @cloudformationAttribute DiskArn
     */
    readonly attrDiskArn: string;
    /**
     * The input/output operations per second (IOPS) of the disk.
     *
     * @cloudformationAttribute Iops
     */
    readonly attrIops: number;
    /**
     * A Boolean value indicating whether the disk is attached.
     *
     * @cloudformationAttribute IsAttached
     */
    readonly attrIsAttached: cdk.IResolvable;
    /**
     * The Availability Zone where the disk is located.
     *
     * @cloudformationAttribute Location.AvailabilityZone
     */
    readonly attrLocationAvailabilityZone: string;
    /**
     * The AWS Region where the disk is located.
     *
     * @cloudformationAttribute Location.RegionName
     */
    readonly attrLocationRegionName: string;
    /**
     * The disk path.
     *
     * @cloudformationAttribute Path
     */
    readonly attrPath: string;
    /**
     * The resource type of the disk (for example, `Disk` ).
     *
     * @cloudformationAttribute ResourceType
     */
    readonly attrResourceType: string;
    /**
     * The state of the disk (for example, `in-use` ).
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * The support code of the disk.
     *
     * Include this code in your email to support when you have questions about a disk or another resource in Lightsail . This code helps our support team to look up your Lightsail information.
     *
     * @cloudformationAttribute SupportCode
     */
    readonly attrSupportCode: string;
    /**
     * An array of add-ons for the disk.
     */
    addOns?: Array<CfnDisk.AddOnProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The AWS Region and Availability Zone location for the disk (for example, `us-east-1a` ).
     */
    availabilityZone?: string;
    /**
     * The name of the disk.
     */
    diskName: string;
    /**
     * The AWS Region and Availability Zone where the disk is located.
     */
    location?: cdk.IResolvable | CfnDisk.LocationProperty;
    /**
     * The size of the disk in GB.
     */
    sizeInGb: number;
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
    constructor(scope: constructs.Construct, id: string, props: CfnDiskProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDisk {
    /**
     * `AddOn` is a property of the [AWS::Lightsail::Disk](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html) resource. It describes the add-ons for a disk.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-addon.html
     */
    interface AddOnProperty {
        /**
         * The add-on type (for example, `AutoSnapshot` ).
         *
         * > `AutoSnapshot` is the only add-on that can be enabled for a disk.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-addon.html#cfn-lightsail-disk-addon-addontype
         */
        readonly addOnType: string;
        /**
         * The parameters for the automatic snapshot add-on, such as the daily time when an automatic snapshot will be created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-addon.html#cfn-lightsail-disk-addon-autosnapshotaddonrequest
         */
        readonly autoSnapshotAddOnRequest?: CfnDisk.AutoSnapshotAddOnProperty | cdk.IResolvable;
        /**
         * The status of the add-on.
         *
         * Valid Values: `Enabled` | `Disabled`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-addon.html#cfn-lightsail-disk-addon-status
         */
        readonly status?: string;
    }
    /**
     * `AutoSnapshotAddOn` is a property of the [AddOn](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-addon.html) property. It describes the automatic snapshot add-on for a disk.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-autosnapshotaddon.html
     */
    interface AutoSnapshotAddOnProperty {
        /**
         * The daily time when an automatic snapshot will be created.
         *
         * Constraints:
         *
         * - Must be in `HH:00` format, and in an hourly increment.
         * - Specified in Coordinated Universal Time (UTC).
         * - The snapshot will be automatically created between the time specified and up to 45 minutes after.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-autosnapshotaddon.html#cfn-lightsail-disk-autosnapshotaddon-snapshottimeofday
         */
        readonly snapshotTimeOfDay?: string;
    }
    /**
     * The AWS Region and Availability Zone where the disk is located.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-location.html
     */
    interface LocationProperty {
        /**
         * The Availability Zone where the disk is located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-location.html#cfn-lightsail-disk-location-availabilityzone
         */
        readonly availabilityZone?: string;
        /**
         * The AWS Region where the disk is located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-location.html#cfn-lightsail-disk-location-regionname
         */
        readonly regionName?: string;
    }
}
/**
 * Properties for defining a `CfnDisk`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html
 */
export interface CfnDiskProps {
    /**
     * An array of add-ons for the disk.
     *
     * > If the disk has an add-on enabled when performing a delete disk request, the add-on is automatically disabled before the disk is deleted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-addons
     */
    readonly addOns?: Array<CfnDisk.AddOnProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The AWS Region and Availability Zone location for the disk (for example, `us-east-1a` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-availabilityzone
     */
    readonly availabilityZone?: string;
    /**
     * The name of the disk.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-diskname
     */
    readonly diskName: string;
    /**
     * The AWS Region and Availability Zone where the disk is located.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-location
     */
    readonly location?: cdk.IResolvable | CfnDisk.LocationProperty;
    /**
     * The size of the disk in GB.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-sizeingb
     */
    readonly sizeInGb: number;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *AWS CloudFormation User Guide* .
     *
     * > The `Value` of `Tags` is optional for Lightsail resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::Lightsail::Distribution` resource specifies a content delivery network (CDN) distribution.
 *
 * You can create distributions only in the `us-east-1` AWS Region.
 *
 * A distribution is a globally distributed network of caching servers that improve the performance of your website or web application hosted on a Lightsail instance, static content hosted on a Lightsail bucket, or through a Lightsail load balancer.
 *
 * @cloudformationResource AWS::Lightsail::Distribution
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html
 */
export declare class CfnDistribution extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDistribution from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDistribution;
    /**
     * Indicates whether you can update the distribution’s current bundle to another bundle.
     *
     * @cloudformationAttribute AbleToUpdateBundle
     */
    readonly attrAbleToUpdateBundle: cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the distribution.
     *
     * @cloudformationAttribute DistributionArn
     */
    readonly attrDistributionArn: string;
    /**
     * The status of the distribution.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The ID of the bundle applied to the distribution.
     */
    bundleId: string;
    /**
     * An array of objects that describe the per-path cache behavior of the distribution.
     */
    cacheBehaviors?: Array<CfnDistribution.CacheBehaviorPerPathProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * An object that describes the cache behavior settings of the distribution.
     */
    cacheBehaviorSettings?: CfnDistribution.CacheSettingsProperty | cdk.IResolvable;
    /**
     * The name of the SSL/TLS certificate attached to the distribution.
     */
    certificateName?: string;
    /**
     * An object that describes the default cache behavior of the distribution.
     */
    defaultCacheBehavior: CfnDistribution.CacheBehaviorProperty | cdk.IResolvable;
    /**
     * The name of the distribution.
     */
    distributionName: string;
    /**
     * The IP address type of the distribution.
     */
    ipAddressType?: string;
    /**
     * A Boolean value indicating whether the distribution is enabled.
     */
    isEnabled?: boolean | cdk.IResolvable;
    /**
     * An object that describes the origin resource of the distribution, such as a Lightsail instance, bucket, or load balancer.
     */
    origin: CfnDistribution.InputOriginProperty | cdk.IResolvable;
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
    constructor(scope: constructs.Construct, id: string, props: CfnDistributionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDistribution {
    /**
     * `InputOrigin` is a property of the [AWS::Lightsail::Distribution](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html) resource. It describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.
     *
     * An origin can be a instance, bucket, or load balancer. A distribution pulls content from an origin, caches it, and serves it to viewers through a worldwide network of edge servers.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-inputorigin.html
     */
    interface InputOriginProperty {
        /**
         * The name of the origin resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-inputorigin.html#cfn-lightsail-distribution-inputorigin-name
         */
        readonly name?: string;
        /**
         * The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-inputorigin.html#cfn-lightsail-distribution-inputorigin-protocolpolicy
         */
        readonly protocolPolicy?: string;
        /**
         * The AWS Region name of the origin resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-inputorigin.html#cfn-lightsail-distribution-inputorigin-regionname
         */
        readonly regionName?: string;
    }
    /**
     * `CacheBehavior` is a property of the [AWS::Lightsail::Distribution](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html) resource. It describes the default cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachebehavior.html
     */
    interface CacheBehaviorProperty {
        /**
         * The cache behavior of the distribution.
         *
         * The following cache behaviors can be specified:
         *
         * - *`cache`* - This option is best for static sites. When specified, your distribution caches and serves your entire website as static content. This behavior is ideal for websites with static content that doesn't change depending on who views it, or for websites that don't use cookies, headers, or query strings to personalize content.
         * - *`dont-cache`* - This option is best for sites that serve a mix of static and dynamic content. When specified, your distribution caches and serves only the content that is specified in the distribution’s `CacheBehaviorPerPath` parameter. This behavior is ideal for websites or web applications that use cookies, headers, and query strings to personalize content for individual users.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachebehavior.html#cfn-lightsail-distribution-cachebehavior-behavior
         */
        readonly behavior?: string;
    }
    /**
     * `CacheSettings` is a property of the [AWS::Lightsail::Distribution](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html) resource. It describes the cache settings of an Amazon Lightsail content delivery network (CDN) distribution.
     *
     * These settings apply only to your distribution’s `CacheBehaviors` that have a `Behavior` of `cache` . This includes the `DefaultCacheBehavior` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachesettings.html
     */
    interface CacheSettingsProperty {
        /**
         * The HTTP methods that are processed and forwarded to the distribution's origin.
         *
         * You can specify the following options:
         *
         * - `GET,HEAD` - The distribution forwards the `GET` and `HEAD` methods.
         * - `GET,HEAD,OPTIONS` - The distribution forwards the `GET` , `HEAD` , and `OPTIONS` methods.
         * - `GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE` - The distribution forwards the `GET` , `HEAD` , `OPTIONS` , `PUT` , `PATCH` , `POST` , and `DELETE` methods.
         *
         * If you specify `GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE` , you might need to restrict access to your distribution's origin so users can't perform operations that you don't want them to. For example, you might not want users to have permission to delete objects from your origin.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachesettings.html#cfn-lightsail-distribution-cachesettings-allowedhttpmethods
         */
        readonly allowedHttpMethods?: string;
        /**
         * The HTTP method responses that are cached by your distribution.
         *
         * You can specify the following options:
         *
         * - `GET,HEAD` - The distribution caches responses to the `GET` and `HEAD` methods.
         * - `GET,HEAD,OPTIONS` - The distribution caches responses to the `GET` , `HEAD` , and `OPTIONS` methods.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachesettings.html#cfn-lightsail-distribution-cachesettings-cachedhttpmethods
         */
        readonly cachedHttpMethods?: string;
        /**
         * The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated.
         *
         * > The value specified applies only when the origin does not add HTTP headers such as `Cache-Control max-age` , `Cache-Control s-maxage` , and `Expires` to objects.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachesettings.html#cfn-lightsail-distribution-cachesettings-defaultttl
         */
        readonly defaultTtl?: number;
        /**
         * An object that describes the cookies that are forwarded to the origin.
         *
         * Your content is cached based on the cookies that are forwarded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachesettings.html#cfn-lightsail-distribution-cachesettings-forwardedcookies
         */
        readonly forwardedCookies?: CfnDistribution.CookieObjectProperty | cdk.IResolvable;
        /**
         * An object that describes the headers that are forwarded to the origin.
         *
         * Your content is cached based on the headers that are forwarded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachesettings.html#cfn-lightsail-distribution-cachesettings-forwardedheaders
         */
        readonly forwardedHeaders?: CfnDistribution.HeaderObjectProperty | cdk.IResolvable;
        /**
         * An object that describes the query strings that are forwarded to the origin.
         *
         * Your content is cached based on the query strings that are forwarded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachesettings.html#cfn-lightsail-distribution-cachesettings-forwardedquerystrings
         */
        readonly forwardedQueryStrings?: cdk.IResolvable | CfnDistribution.QueryStringObjectProperty;
        /**
         * The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.
         *
         * The value specified applies only when the origin adds HTTP headers such as `Cache-Control max-age` , `Cache-Control s-maxage` , and `Expires` to objects.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachesettings.html#cfn-lightsail-distribution-cachesettings-maximumttl
         */
        readonly maximumTtl?: number;
        /**
         * The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.
         *
         * A value of `0` must be specified for `minimumTTL` if the distribution is configured to forward all headers to the origin.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachesettings.html#cfn-lightsail-distribution-cachesettings-minimumttl
         */
        readonly minimumTtl?: number;
    }
    /**
     * `CookieObject` is a property of the [CacheSettings](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachesettings.html) property. It describes whether an Amazon Lightsail content delivery network (CDN) distribution forwards cookies to the origin and, if so, which ones.
     *
     * For the cookies that you specify, your distribution caches separate versions of the specified content based on the cookie values in viewer requests.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cookieobject.html
     */
    interface CookieObjectProperty {
        /**
         * The specific cookies to forward to your distribution's origin.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cookieobject.html#cfn-lightsail-distribution-cookieobject-cookiesallowlist
         */
        readonly cookiesAllowList?: Array<string>;
        /**
         * Specifies which cookies to forward to the distribution's origin for a cache behavior.
         *
         * Use one of the following configurations for your distribution:
         *
         * - *`all`* - Forwards all cookies to your origin.
         * - *`none`* - Doesn’t forward cookies to your origin.
         * - *`allow-list`* - Forwards only the cookies that you specify using the `CookiesAllowList` parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cookieobject.html#cfn-lightsail-distribution-cookieobject-option
         */
        readonly option?: string;
    }
    /**
     * `HeaderObject` is a property of the [CacheSettings](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachesettings.html) property. It describes the request headers used by your distribution, which caches your content based on the request headers.
     *
     * For the headers that you specify, your distribution caches separate versions of the specified content based on the header values in viewer requests. For example, suppose that viewer requests for logo.jpg contain a custom product header that has a value of either acme or apex. Also, suppose that you configure your distribution to cache your content based on values in the product header. Your distribution forwards the product header to the origin and caches the response from the origin once for each header value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-headerobject.html
     */
    interface HeaderObjectProperty {
        /**
         * The specific headers to forward to your distribution's origin.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-headerobject.html#cfn-lightsail-distribution-headerobject-headersallowlist
         */
        readonly headersAllowList?: Array<string>;
        /**
         * The headers that you want your distribution to forward to your origin.
         *
         * Your distribution caches your content based on these headers.
         *
         * Use one of the following configurations for your distribution:
         *
         * - *`all`* - Forwards all headers to your origin..
         * - *`none`* - Forwards only the default headers.
         * - *`allow-list`* - Forwards only the headers that you specify using the `HeadersAllowList` parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-headerobject.html#cfn-lightsail-distribution-headerobject-option
         */
        readonly option?: string;
    }
    /**
     * `QueryStringObject` is a property of the [CacheSettings](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachesettings.html) property. It describes the query string parameters that an Amazon Lightsail content delivery network (CDN) distribution to bases caching on.
     *
     * For the query strings that you specify, your distribution caches separate versions of the specified content based on the query string values in viewer requests.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-querystringobject.html
     */
    interface QueryStringObjectProperty {
        /**
         * Indicates whether the distribution forwards and caches based on query strings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-querystringobject.html#cfn-lightsail-distribution-querystringobject-option
         */
        readonly option?: boolean | cdk.IResolvable;
        /**
         * The specific query strings that the distribution forwards to the origin.
         *
         * Your distribution caches content based on the specified query strings.
         *
         * If the `option` parameter is true, then your distribution forwards all query strings, regardless of what you specify using the `QueryStringsAllowList` parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-querystringobject.html#cfn-lightsail-distribution-querystringobject-querystringsallowlist
         */
        readonly queryStringsAllowList?: Array<string>;
    }
    /**
     * `CacheBehaviorPerPath` is a property of the [AWS::Lightsail::Distribution](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html) resource. It describes the per-path cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.
     *
     * Use a per-path cache behavior to override the default cache behavior of a distribution, or to add an exception to it. For example, if you set the `CacheBehavior` to `cache` , you can use a per-path cache behavior to specify a directory, file, or file type that your distribution will cache. If you don’t want your distribution to cache a specified directory, file, or file type, set the per-path cache behavior to `dont-cache` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachebehaviorperpath.html
     */
    interface CacheBehaviorPerPathProperty {
        /**
         * The cache behavior for the specified path.
         *
         * You can specify one of the following per-path cache behaviors:
         *
         * - *`cache`* - This behavior caches the specified path.
         * - *`dont-cache`* - This behavior doesn't cache the specified path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachebehaviorperpath.html#cfn-lightsail-distribution-cachebehaviorperpath-behavior
         */
        readonly behavior?: string;
        /**
         * The path to a directory or file to cache, or not cache.
         *
         * Use an asterisk symbol to specify wildcard directories ( `path/to/assets/*` ), and file types ( `*.html` , `*jpg` , `*js` ). Directories and file paths are case-sensitive.
         *
         * Examples:
         *
         * - Specify the following to cache all files in the document root of an Apache web server running on a instance.
         *
         * `var/www/html/`
         * - Specify the following file to cache only the index page in the document root of an Apache web server.
         *
         * `var/www/html/index.html`
         * - Specify the following to cache only the .html files in the document root of an Apache web server.
         *
         * `var/www/html/*.html`
         * - Specify the following to cache only the .jpg, .png, and .gif files in the images sub-directory of the document root of an Apache web server.
         *
         * `var/www/html/images/*.jpg`
         *
         * `var/www/html/images/*.png`
         *
         * `var/www/html/images/*.gif`
         *
         * Specify the following to cache all files in the images subdirectory of the document root of an Apache web server.
         *
         * `var/www/html/images/`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachebehaviorperpath.html#cfn-lightsail-distribution-cachebehaviorperpath-path
         */
        readonly path?: string;
    }
}
/**
 * Properties for defining a `CfnDistribution`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html
 */
export interface CfnDistributionProps {
    /**
     * The ID of the bundle applied to the distribution.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html#cfn-lightsail-distribution-bundleid
     */
    readonly bundleId: string;
    /**
     * An array of objects that describe the per-path cache behavior of the distribution.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html#cfn-lightsail-distribution-cachebehaviors
     */
    readonly cacheBehaviors?: Array<CfnDistribution.CacheBehaviorPerPathProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * An object that describes the cache behavior settings of the distribution.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html#cfn-lightsail-distribution-cachebehaviorsettings
     */
    readonly cacheBehaviorSettings?: CfnDistribution.CacheSettingsProperty | cdk.IResolvable;
    /**
     * The name of the SSL/TLS certificate attached to the distribution.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html#cfn-lightsail-distribution-certificatename
     */
    readonly certificateName?: string;
    /**
     * An object that describes the default cache behavior of the distribution.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html#cfn-lightsail-distribution-defaultcachebehavior
     */
    readonly defaultCacheBehavior: CfnDistribution.CacheBehaviorProperty | cdk.IResolvable;
    /**
     * The name of the distribution.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html#cfn-lightsail-distribution-distributionname
     */
    readonly distributionName: string;
    /**
     * The IP address type of the distribution.
     *
     * The possible values are `ipv4` for IPv4 only, and `dualstack` for IPv4 and IPv6.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html#cfn-lightsail-distribution-ipaddresstype
     */
    readonly ipAddressType?: string;
    /**
     * A Boolean value indicating whether the distribution is enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html#cfn-lightsail-distribution-isenabled
     */
    readonly isEnabled?: boolean | cdk.IResolvable;
    /**
     * An object that describes the origin resource of the distribution, such as a Lightsail instance, bucket, or load balancer.
     *
     * The distribution pulls, caches, and serves content from the origin.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html#cfn-lightsail-distribution-origin
     */
    readonly origin: CfnDistribution.InputOriginProperty | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *AWS CloudFormation User Guide* .
     *
     * > The `Value` of `Tags` is optional for Lightsail resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html#cfn-lightsail-distribution-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::Lightsail::Instance` resource specifies an Amazon Lightsail instance.
 *
 * @cloudformationResource AWS::Lightsail::Instance
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html
 */
export declare class CfnInstance extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInstance from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInstance;
    /**
     * The number of vCPUs the instance has.
     *
     * @cloudformationAttribute Hardware.CpuCount
     */
    readonly attrHardwareCpuCount: number;
    /**
     * The amount of RAM in GB on the instance (for example, `1.0` ).
     *
     * @cloudformationAttribute Hardware.RamSizeInGb
     */
    readonly attrHardwareRamSizeInGb: number;
    /**
     * The Amazon Resource Name (ARN) of the instance (for example, `arn:aws:lightsail:us-east-2:123456789101:Instance/244ad76f-8aad-4741-809f-12345EXAMPLE` ).
     *
     * @cloudformationAttribute InstanceArn
     */
    readonly attrInstanceArn: string;
    /**
     * The IPv6 addresses of the instance.
     *
     * @cloudformationAttribute Ipv6Addresses
     */
    readonly attrIpv6Addresses: Array<string>;
    /**
     * A Boolean value indicating whether the instance has a static IP assigned to it.
     *
     * @cloudformationAttribute IsStaticIp
     */
    readonly attrIsStaticIp: cdk.IResolvable;
    /**
     * The AWS Region and Availability Zone where the instance is located.
     *
     * @cloudformationAttribute Location.AvailabilityZone
     */
    readonly attrLocationAvailabilityZone: string;
    /**
     * The AWS Region of the instance.
     *
     * @cloudformationAttribute Location.RegionName
     */
    readonly attrLocationRegionName: string;
    /**
     * The amount of allocated monthly data transfer (in GB) for an instance.
     *
     * @cloudformationAttribute Networking.MonthlyTransfer.GbPerMonthAllocated
     */
    readonly attrNetworkingMonthlyTransferGbPerMonthAllocated: string;
    /**
     * The private IP address of the instance.
     *
     * @cloudformationAttribute PrivateIpAddress
     */
    readonly attrPrivateIpAddress: string;
    /**
     * The public IP address of the instance.
     *
     * @cloudformationAttribute PublicIpAddress
     */
    readonly attrPublicIpAddress: string;
    /**
     * The resource type of the instance (for example, `Instance` ).
     *
     * @cloudformationAttribute ResourceType
     */
    readonly attrResourceType: string;
    /**
     * The name of the SSH key pair used by the instance.
     *
     * @cloudformationAttribute SshKeyName
     */
    readonly attrSshKeyName: string;
    /**
     * The status code of the instance.
     *
     * @cloudformationAttribute State.Code
     */
    readonly attrStateCode: number;
    /**
     * The state of the instance (for example, `running` or `pending` ).
     *
     * @cloudformationAttribute State.Name
     */
    readonly attrStateName: string;
    /**
     * The support code of the instance.
     *
     * Include this code in your email to support when you have questions about an instance or another resource in Lightsail . This code helps our support team to look up your Lightsail information.
     *
     * @cloudformationAttribute SupportCode
     */
    readonly attrSupportCode: string;
    /**
     * The user name for connecting to the instance (for example, `ec2-user` ).
     *
     * @cloudformationAttribute UserName
     */
    readonly attrUserName: string;
    /**
     * An array of add-ons for the instance.
     */
    addOns?: Array<CfnInstance.AddOnProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Availability Zone for the instance.
     */
    availabilityZone?: string;
    /**
     * The blueprint ID for the instance (for example, `os_amlinux_2016_03` ).
     */
    blueprintId: string;
    /**
     * The bundle ID for the instance (for example, `micro_1_0` ).
     */
    bundleId: string;
    /**
     * The hardware properties for the instance, such as the vCPU count, attached disks, and amount of RAM.
     */
    hardware?: CfnInstance.HardwareProperty | cdk.IResolvable;
    /**
     * The name of the instance.
     */
    instanceName: string;
    /**
     * The name of the key pair to use for the instance.
     */
    keyPairName?: string;
    /**
     * The location for the instance, such as the AWS Region and Availability Zone.
     */
    location?: cdk.IResolvable | CfnInstance.LocationProperty;
    /**
     * The public ports and the monthly amount of data transfer allocated for the instance.
     */
    networking?: cdk.IResolvable | CfnInstance.NetworkingProperty;
    /**
     * The status code and the state (for example, `running` ) of the instance.
     */
    state?: cdk.IResolvable | CfnInstance.StateProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The optional launch script for the instance.
     */
    userData?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnInstanceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnInstance {
    /**
     * `Networking` is a property of the [AWS::Lightsail::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html) resource. It describes the public ports and the monthly amount of data transfer allocated for the instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-networking.html
     */
    interface NetworkingProperty {
        /**
         * The monthly amount of data transfer, in GB, allocated for the instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-networking.html#cfn-lightsail-instance-networking-monthlytransfer
         */
        readonly monthlyTransfer?: cdk.IResolvable | CfnInstance.MonthlyTransferProperty;
        /**
         * An array of ports to open on the instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-networking.html#cfn-lightsail-instance-networking-ports
         */
        readonly ports: Array<cdk.IResolvable | CfnInstance.PortProperty> | cdk.IResolvable;
    }
    /**
     * `Port` is a property of the [Networking](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-networking.html) property. It describes information about ports for an instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-port.html
     */
    interface PortProperty {
        /**
         * The access direction ( `inbound` or `outbound` ).
         *
         * > Lightsail currently supports only `inbound` access direction.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-port.html#cfn-lightsail-instance-port-accessdirection
         */
        readonly accessDirection?: string;
        /**
         * The location from which access is allowed.
         *
         * For example, `Anywhere (0.0.0.0/0)` , or `Custom` if a specific IP address or range of IP addresses is allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-port.html#cfn-lightsail-instance-port-accessfrom
         */
        readonly accessFrom?: string;
        /**
         * The type of access ( `Public` or `Private` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-port.html#cfn-lightsail-instance-port-accesstype
         */
        readonly accessType?: string;
        /**
         * An alias that defines access for a preconfigured range of IP addresses.
         *
         * The only alias currently supported is `lightsail-connect` , which allows IP addresses of the browser-based RDP/SSH client in the Lightsail console to connect to your instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-port.html#cfn-lightsail-instance-port-cidrlistaliases
         */
        readonly cidrListAliases?: Array<string>;
        /**
         * The IPv4 address, or range of IPv4 addresses (in CIDR notation) that are allowed to connect to an instance through the ports, and the protocol.
         *
         * > The `ipv6Cidrs` parameter lists the IPv6 addresses that are allowed to connect to an instance.
         *
         * Examples:
         *
         * - To allow the IP address `192.0.2.44` , specify `192.0.2.44` or `192.0.2.44/32` .
         * - To allow the IP addresses `192.0.2.0` to `192.0.2.255` , specify `192.0.2.0/24` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-port.html#cfn-lightsail-instance-port-cidrs
         */
        readonly cidrs?: Array<string>;
        /**
         * The common name of the port information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-port.html#cfn-lightsail-instance-port-commonname
         */
        readonly commonName?: string;
        /**
         * The first port in a range of open ports on an instance.
         *
         * Allowed ports:
         *
         * - TCP and UDP - `0` to `65535`
         * - ICMP - The ICMP type for IPv4 addresses. For example, specify `8` as the `fromPort` (ICMP type), and `-1` as the `toPort` (ICMP code), to enable ICMP Ping.
         * - ICMPv6 - The ICMP type for IPv6 addresses. For example, specify `128` as the `fromPort` (ICMPv6 type), and `0` as `toPort` (ICMPv6 code).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-port.html#cfn-lightsail-instance-port-fromport
         */
        readonly fromPort?: number;
        /**
         * The IPv6 address, or range of IPv6 addresses (in CIDR notation) that are allowed to connect to an instance through the ports, and the protocol.
         *
         * Only devices with an IPv6 address can connect to an instance through IPv6; otherwise, IPv4 should be used.
         *
         * > The `cidrs` parameter lists the IPv4 addresses that are allowed to connect to an instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-port.html#cfn-lightsail-instance-port-ipv6cidrs
         */
        readonly ipv6Cidrs?: Array<string>;
        /**
         * The IP protocol name.
         *
         * The name can be one of the following:
         *
         * - `tcp` - Transmission Control Protocol (TCP) provides reliable, ordered, and error-checked delivery of streamed data between applications running on hosts communicating by an IP network. If you have an application that doesn't require reliable data stream service, use UDP instead.
         * - `all` - All transport layer protocol types.
         * - `udp` - With User Datagram Protocol (UDP), computer applications can send messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior communications are not required to set up transmission channels or data paths. Applications that don't require reliable data stream service can use UDP, which provides a connectionless datagram service that emphasizes reduced latency over reliability. If you do require reliable data stream service, use TCP instead.
         * - `icmp` - Internet Control Message Protocol (ICMP) is used to send error messages and operational information indicating success or failure when communicating with an instance. For example, an error is indicated when an instance could not be reached. When you specify `icmp` as the `protocol` , you must specify the ICMP type using the `fromPort` parameter, and ICMP code using the `toPort` parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-port.html#cfn-lightsail-instance-port-protocol
         */
        readonly protocol?: string;
        /**
         * The last port in a range of open ports on an instance.
         *
         * Allowed ports:
         *
         * - TCP and UDP - `0` to `65535`
         * - ICMP - The ICMP code for IPv4 addresses. For example, specify `8` as the `fromPort` (ICMP type), and `-1` as the `toPort` (ICMP code), to enable ICMP Ping.
         * - ICMPv6 - The ICMP code for IPv6 addresses. For example, specify `128` as the `fromPort` (ICMPv6 type), and `0` as `toPort` (ICMPv6 code).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-port.html#cfn-lightsail-instance-port-toport
         */
        readonly toPort?: number;
    }
    /**
     * `MonthlyTransfer` is a property of the [Networking](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-networking.html) property. It describes the amount of allocated monthly data transfer (in GB) for an instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-monthlytransfer.html
     */
    interface MonthlyTransferProperty {
        /**
         * The amount of allocated monthly data transfer (in GB) for an instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-monthlytransfer.html#cfn-lightsail-instance-monthlytransfer-gbpermonthallocated
         */
        readonly gbPerMonthAllocated?: string;
    }
    /**
     * `State` is a property of the [AWS::Lightsail::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html) resource. It describes the status code and the state (for example, `running` ) of an instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-state.html
     */
    interface StateProperty {
        /**
         * The status code of the instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-state.html#cfn-lightsail-instance-state-code
         */
        readonly code?: number;
        /**
         * The state of the instance (for example, `running` or `pending` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-state.html#cfn-lightsail-instance-state-name
         */
        readonly name?: string;
    }
    /**
     * `AddOn` is a property of the [AWS::Lightsail::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html) resource. It describes the add-ons for an instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-addon.html
     */
    interface AddOnProperty {
        /**
         * The add-on type (for example, `AutoSnapshot` ).
         *
         * > `AutoSnapshot` is the only add-on that can be enabled for an instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-addon.html#cfn-lightsail-instance-addon-addontype
         */
        readonly addOnType: string;
        /**
         * The parameters for the automatic snapshot add-on, such as the daily time when an automatic snapshot will be created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-addon.html#cfn-lightsail-instance-addon-autosnapshotaddonrequest
         */
        readonly autoSnapshotAddOnRequest?: CfnInstance.AutoSnapshotAddOnProperty | cdk.IResolvable;
        /**
         * The status of the add-on.
         *
         * Valid Values: `Enabled` | `Disabled`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-addon.html#cfn-lightsail-instance-addon-status
         */
        readonly status?: string;
    }
    /**
     * `AutoSnapshotAddOn` is a property of the [AddOn](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-addon.html) property. It describes the automatic snapshot add-on for an instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-autosnapshotaddon.html
     */
    interface AutoSnapshotAddOnProperty {
        /**
         * The daily time when an automatic snapshot will be created.
         *
         * Constraints:
         *
         * - Must be in `HH:00` format, and in an hourly increment.
         * - Specified in Coordinated Universal Time (UTC).
         * - The snapshot will be automatically created between the time specified and up to 45 minutes after.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-autosnapshotaddon.html#cfn-lightsail-instance-autosnapshotaddon-snapshottimeofday
         */
        readonly snapshotTimeOfDay?: string;
    }
    /**
     * `Hardware` is a property of the [AWS::Lightsail::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html) resource. It describes the hardware properties for the instance, such as the vCPU count, attached disks, and amount of RAM.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-hardware.html
     */
    interface HardwareProperty {
        /**
         * The number of vCPUs the instance has.
         *
         * > The `CpuCount` property is read-only and should not be specified in a create instance or update instance request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-hardware.html#cfn-lightsail-instance-hardware-cpucount
         */
        readonly cpuCount?: number;
        /**
         * The disks attached to the instance.
         *
         * The instance restarts when performing an attach disk or detach disk request. This resets the public IP address of your instance if a static IP isn't attached to it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-hardware.html#cfn-lightsail-instance-hardware-disks
         */
        readonly disks?: Array<CfnInstance.DiskProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The amount of RAM in GB on the instance (for example, `1.0` ).
         *
         * > The `RamSizeInGb` property is read-only and should not be specified in a create instance or update instance request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-hardware.html#cfn-lightsail-instance-hardware-ramsizeingb
         */
        readonly ramSizeInGb?: number;
    }
    /**
     * `Disk` is a property of the [Hardware](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-hardware.html) property. It describes a disk attached to an instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-disk.html
     */
    interface DiskProperty {
        /**
         * The resources to which the disk is attached.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-disk.html#cfn-lightsail-instance-disk-attachedto
         */
        readonly attachedTo?: string;
        /**
         * (Deprecated) The attachment state of the disk.
         *
         * > In releases prior to November 14, 2017, this parameter returned `attached` for system disks in the API response. It is now deprecated, but still included in the response. Use `isAttached` instead.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-disk.html#cfn-lightsail-instance-disk-attachmentstate
         */
        readonly attachmentState?: string;
        /**
         * The unique name of the disk.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-disk.html#cfn-lightsail-instance-disk-diskname
         */
        readonly diskName: string;
        /**
         * The input/output operations per second (IOPS) of the disk.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-disk.html#cfn-lightsail-instance-disk-iops
         */
        readonly iops?: number;
        /**
         * A Boolean value indicating whether this disk is a system disk (has an operating system loaded on it).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-disk.html#cfn-lightsail-instance-disk-issystemdisk
         */
        readonly isSystemDisk?: boolean | cdk.IResolvable;
        /**
         * The disk path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-disk.html#cfn-lightsail-instance-disk-path
         */
        readonly path: string;
        /**
         * The size of the disk in GB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-disk.html#cfn-lightsail-instance-disk-sizeingb
         */
        readonly sizeInGb?: string;
    }
    /**
     * `Location` is a property of the [AWS::Lightsail::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html) resource. It describes the location for an instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-location.html
     */
    interface LocationProperty {
        /**
         * The Availability Zone for the instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-location.html#cfn-lightsail-instance-location-availabilityzone
         */
        readonly availabilityZone?: string;
        /**
         * The name of the AWS Region for the instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-location.html#cfn-lightsail-instance-location-regionname
         */
        readonly regionName?: string;
    }
}
/**
 * Properties for defining a `CfnInstance`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html
 */
export interface CfnInstanceProps {
    /**
     * An array of add-ons for the instance.
     *
     * > If the instance has an add-on enabled when performing a delete instance request, the add-on is automatically disabled before the instance is deleted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-addons
     */
    readonly addOns?: Array<CfnInstance.AddOnProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Availability Zone for the instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-availabilityzone
     */
    readonly availabilityZone?: string;
    /**
     * The blueprint ID for the instance (for example, `os_amlinux_2016_03` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-blueprintid
     */
    readonly blueprintId: string;
    /**
     * The bundle ID for the instance (for example, `micro_1_0` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-bundleid
     */
    readonly bundleId: string;
    /**
     * The hardware properties for the instance, such as the vCPU count, attached disks, and amount of RAM.
     *
     * > The instance restarts when performing an attach disk or detach disk request. This resets the public IP address of your instance if a static IP isn't attached to it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-hardware
     */
    readonly hardware?: CfnInstance.HardwareProperty | cdk.IResolvable;
    /**
     * The name of the instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-instancename
     */
    readonly instanceName: string;
    /**
     * The name of the key pair to use for the instance.
     *
     * If no key pair name is specified, the Regional Lightsail default key pair is used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-keypairname
     */
    readonly keyPairName?: string;
    /**
     * The location for the instance, such as the AWS Region and Availability Zone.
     *
     * > The `Location` property is read-only and should not be specified in a create instance or update instance request.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-location
     */
    readonly location?: cdk.IResolvable | CfnInstance.LocationProperty;
    /**
     * The public ports and the monthly amount of data transfer allocated for the instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-networking
     */
    readonly networking?: cdk.IResolvable | CfnInstance.NetworkingProperty;
    /**
     * The status code and the state (for example, `running` ) of the instance.
     *
     * > The `State` property is read-only and should not be specified in a create instance or update instance request.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-state
     */
    readonly state?: cdk.IResolvable | CfnInstance.StateProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *AWS CloudFormation User Guide* .
     *
     * > The `Value` of `Tags` is optional for Lightsail resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The optional launch script for the instance.
     *
     * Specify a launch script to configure an instance with additional user data. For example, you might want to specify `apt-get -y update` as a launch script.
     *
     * > Depending on the blueprint of your instance, the command to get software on your instance varies. Amazon Linux and CentOS use `yum` , Debian and Ubuntu use `apt-get` , and FreeBSD uses `pkg` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-userdata
     */
    readonly userData?: string;
}
/**
 * The `AWS::Lightsail::LoadBalancer` resource specifies a load balancer that can be used with Lightsail instances.
 *
 * > You cannot attach a TLS certificate to a load balancer using the `AWS::Lightsail::LoadBalancer` resource type. Instead, use the `AWS::Lightsail::LoadBalancerTlsCertificate` resource type to create a certificate and attach it to a load balancer.
 *
 * @cloudformationResource AWS::Lightsail::LoadBalancer
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancer.html
 */
export declare class CfnLoadBalancer extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLoadBalancer from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLoadBalancer;
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     *
     * @cloudformationAttribute LoadBalancerArn
     */
    readonly attrLoadBalancerArn: string;
    /**
     * The Lightsail instances to attach to the load balancer.
     */
    attachedInstances?: Array<string>;
    /**
     * The path on the attached instance where the health check will be performed.
     */
    healthCheckPath?: string;
    /**
     * The port that the load balancer uses to direct traffic to your Lightsail instances.
     */
    instancePort: number;
    /**
     * The IP address type of the load balancer.
     */
    ipAddressType?: string;
    /**
     * The name of the load balancer.
     */
    loadBalancerName: string;
    /**
     * A Boolean value indicating whether session stickiness is enabled.
     */
    sessionStickinessEnabled?: boolean | cdk.IResolvable;
    /**
     * The time period, in seconds, after which the load balancer session stickiness cookie should be considered stale.
     */
    sessionStickinessLbCookieDurationSeconds?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The name of the TLS security policy for the load balancer.
     */
    tlsPolicyName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLoadBalancerProps);
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
 * Properties for defining a `CfnLoadBalancer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancer.html
 */
export interface CfnLoadBalancerProps {
    /**
     * The Lightsail instances to attach to the load balancer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancer.html#cfn-lightsail-loadbalancer-attachedinstances
     */
    readonly attachedInstances?: Array<string>;
    /**
     * The path on the attached instance where the health check will be performed.
     *
     * If no path is specified, the load balancer tries to make a request to the default (root) page ( `/index.html` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancer.html#cfn-lightsail-loadbalancer-healthcheckpath
     */
    readonly healthCheckPath?: string;
    /**
     * The port that the load balancer uses to direct traffic to your Lightsail instances.
     *
     * For HTTP traffic, specify port `80` . For HTTPS traffic, specify port `443` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancer.html#cfn-lightsail-loadbalancer-instanceport
     */
    readonly instancePort: number;
    /**
     * The IP address type of the load balancer.
     *
     * The possible values are `ipv4` for IPv4 only, and `dualstack` for both IPv4 and IPv6.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancer.html#cfn-lightsail-loadbalancer-ipaddresstype
     */
    readonly ipAddressType?: string;
    /**
     * The name of the load balancer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancer.html#cfn-lightsail-loadbalancer-loadbalancername
     */
    readonly loadBalancerName: string;
    /**
     * A Boolean value indicating whether session stickiness is enabled.
     *
     * Enable session stickiness (also known as *session affinity* ) to bind a user's session to a specific instance. This ensures that all requests from the user during the session are sent to the same instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancer.html#cfn-lightsail-loadbalancer-sessionstickinessenabled
     */
    readonly sessionStickinessEnabled?: boolean | cdk.IResolvable;
    /**
     * The time period, in seconds, after which the load balancer session stickiness cookie should be considered stale.
     *
     * If you do not specify this parameter, the default value is 0, which indicates that the sticky session should last for the duration of the browser session.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancer.html#cfn-lightsail-loadbalancer-sessionstickinesslbcookiedurationseconds
     */
    readonly sessionStickinessLbCookieDurationSeconds?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *AWS CloudFormation User Guide* .
     *
     * > The `Value` of `Tags` is optional for Lightsail resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancer.html#cfn-lightsail-loadbalancer-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name of the TLS security policy for the load balancer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancer.html#cfn-lightsail-loadbalancer-tlspolicyname
     */
    readonly tlsPolicyName?: string;
}
/**
 * The `AWS::Lightsail::LoadBalancerTlsCertificate` resource specifies a TLS certificate that can be used with a Lightsail load balancer.
 *
 * @cloudformationResource AWS::Lightsail::LoadBalancerTlsCertificate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html
 */
export declare class CfnLoadBalancerTlsCertificate extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLoadBalancerTlsCertificate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLoadBalancerTlsCertificate;
    /**
     * The Amazon Resource Name (ARN) of the SSL/TLS certificate.
     *
     * @cloudformationAttribute LoadBalancerTlsCertificateArn
     */
    readonly attrLoadBalancerTlsCertificateArn: string;
    /**
     * The validation status of the SSL/TLS certificate.
     *
     * Valid Values: `PENDING_VALIDATION` | `ISSUED` | `INACTIVE` | `EXPIRED` | `VALIDATION_TIMED_OUT` | `REVOKED` | `FAILED` | `UNKNOWN`
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * An array of alternative domain names and subdomain names for your SSL/TLS certificate.
     */
    certificateAlternativeNames?: Array<string>;
    /**
     * The domain name for the SSL/TLS certificate.
     */
    certificateDomainName: string;
    /**
     * The name of the SSL/TLS certificate.
     */
    certificateName: string;
    /**
     * A Boolean value indicating whether HTTPS redirection is enabled for the load balancer that the TLS certificate is attached to.
     */
    httpsRedirectionEnabled?: boolean | cdk.IResolvable;
    /**
     * A Boolean value indicating whether the SSL/TLS certificate is attached to a Lightsail load balancer.
     */
    isAttached?: boolean | cdk.IResolvable;
    /**
     * The name of the load balancer that the SSL/TLS certificate is attached to.
     */
    loadBalancerName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLoadBalancerTlsCertificateProps);
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
 * Properties for defining a `CfnLoadBalancerTlsCertificate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html
 */
export interface CfnLoadBalancerTlsCertificateProps {
    /**
     * An array of alternative domain names and subdomain names for your SSL/TLS certificate.
     *
     * In addition to the primary domain name, you can have up to nine alternative domain names. Wildcards (such as `*.example.com` ) are not supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html#cfn-lightsail-loadbalancertlscertificate-certificatealternativenames
     */
    readonly certificateAlternativeNames?: Array<string>;
    /**
     * The domain name for the SSL/TLS certificate.
     *
     * For example, `example.com` or `www.example.com` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html#cfn-lightsail-loadbalancertlscertificate-certificatedomainname
     */
    readonly certificateDomainName: string;
    /**
     * The name of the SSL/TLS certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html#cfn-lightsail-loadbalancertlscertificate-certificatename
     */
    readonly certificateName: string;
    /**
     * A Boolean value indicating whether HTTPS redirection is enabled for the load balancer that the TLS certificate is attached to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html#cfn-lightsail-loadbalancertlscertificate-httpsredirectionenabled
     */
    readonly httpsRedirectionEnabled?: boolean | cdk.IResolvable;
    /**
     * A Boolean value indicating whether the SSL/TLS certificate is attached to a Lightsail load balancer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html#cfn-lightsail-loadbalancertlscertificate-isattached
     */
    readonly isAttached?: boolean | cdk.IResolvable;
    /**
     * The name of the load balancer that the SSL/TLS certificate is attached to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html#cfn-lightsail-loadbalancertlscertificate-loadbalancername
     */
    readonly loadBalancerName: string;
}
/**
 * The `AWS::Lightsail::StaticIp` resource specifies a static IP that can be attached to an Amazon Lightsail instance that is in the same AWS Region and Availability Zone.
 *
 * @cloudformationResource AWS::Lightsail::StaticIp
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-staticip.html
 */
export declare class CfnStaticIp extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStaticIp from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStaticIp;
    /**
     * The IP address of the static IP.
     *
     * @cloudformationAttribute IpAddress
     */
    readonly attrIpAddress: string;
    /**
     * A Boolean value indicating whether the static IP is attached to an instance.
     *
     * @cloudformationAttribute IsAttached
     */
    readonly attrIsAttached: cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the static IP (for example, `arn:aws:lightsail:us-east-2:123456789101:StaticIp/244ad76f-8aad-4741-809f-12345EXAMPLE` ).
     *
     * @cloudformationAttribute StaticIpArn
     */
    readonly attrStaticIpArn: string;
    /**
     * The instance that the static IP is attached to.
     */
    attachedTo?: string;
    /**
     * The name of the static IP.
     */
    staticIpName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStaticIpProps);
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
 * Properties for defining a `CfnStaticIp`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-staticip.html
 */
export interface CfnStaticIpProps {
    /**
     * The instance that the static IP is attached to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-staticip.html#cfn-lightsail-staticip-attachedto
     */
    readonly attachedTo?: string;
    /**
     * The name of the static IP.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-staticip.html#cfn-lightsail-staticip-staticipname
     */
    readonly staticIpName: string;
}
