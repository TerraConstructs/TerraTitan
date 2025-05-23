import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::GuardDuty::Detector` resource specifies a new GuardDuty detector.
 *
 * A detector is an object that represents the GuardDuty service. A detector is required for GuardDuty to become operational.
 *
 * Make sure you use either `DataSources` or `Features` in a one request, and not both.
 *
 * @cloudformationResource AWS::GuardDuty::Detector
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html
 */
export declare class CfnDetector extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDetector from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDetector;
    /**
     * The unique ID of the detector.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Describes which data sources will be enabled for the detector.
     */
    dataSources?: CfnDetector.CFNDataSourceConfigurationsProperty | cdk.IResolvable;
    /**
     * Specifies whether the detector is to be enabled on creation.
     */
    enable: boolean | cdk.IResolvable;
    /**
     * A list of features that will be configured for the detector.
     */
    features?: Array<CfnDetector.CFNFeatureConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies how frequently updated findings are exported.
     */
    findingPublishingFrequency?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies tags added to a new detector resource.
     */
    tagsRaw?: Array<CfnDetector.TagItemProperty>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDetectorProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDetector {
    /**
     * Describes whether S3 data event logs, Kubernetes audit logs, or Malware Protection will be enabled as a data source when the detector is created.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfndatasourceconfigurations.html
     */
    interface CFNDataSourceConfigurationsProperty {
        /**
         * Describes which Kubernetes data sources are enabled for a detector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfndatasourceconfigurations.html#cfn-guardduty-detector-cfndatasourceconfigurations-kubernetes
         */
        readonly kubernetes?: CfnDetector.CFNKubernetesConfigurationProperty | cdk.IResolvable;
        /**
         * Describes whether Malware Protection will be enabled as a data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfndatasourceconfigurations.html#cfn-guardduty-detector-cfndatasourceconfigurations-malwareprotection
         */
        readonly malwareProtection?: CfnDetector.CFNMalwareProtectionConfigurationProperty | cdk.IResolvable;
        /**
         * Describes whether S3 data event logs are enabled as a data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfndatasourceconfigurations.html#cfn-guardduty-detector-cfndatasourceconfigurations-s3logs
         */
        readonly s3Logs?: CfnDetector.CFNS3LogsConfigurationProperty | cdk.IResolvable;
    }
    /**
     * Describes whether Malware Protection will be enabled as a data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnmalwareprotectionconfiguration.html
     */
    interface CFNMalwareProtectionConfigurationProperty {
        /**
         * Describes the configuration of Malware Protection for EC2 instances with findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnmalwareprotectionconfiguration.html#cfn-guardduty-detector-cfnmalwareprotectionconfiguration-scanec2instancewithfindings
         */
        readonly scanEc2InstanceWithFindings?: CfnDetector.CFNScanEc2InstanceWithFindingsConfigurationProperty | cdk.IResolvable;
    }
    /**
     * Describes whether Malware Protection for EC2 instances with findings will be enabled as a data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnscanec2instancewithfindingsconfiguration.html
     */
    interface CFNScanEc2InstanceWithFindingsConfigurationProperty {
        /**
         * Describes the configuration for scanning EBS volumes as data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnscanec2instancewithfindingsconfiguration.html#cfn-guardduty-detector-cfnscanec2instancewithfindingsconfiguration-ebsvolumes
         */
        readonly ebsVolumes?: boolean | cdk.IResolvable;
    }
    /**
     * Describes whether S3 data event logs will be enabled as a data source when the detector is created.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfns3logsconfiguration.html
     */
    interface CFNS3LogsConfigurationProperty {
        /**
         * The status of S3 data event logs as a data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfns3logsconfiguration.html#cfn-guardduty-detector-cfns3logsconfiguration-enable
         */
        readonly enable: boolean | cdk.IResolvable;
    }
    /**
     * Describes which Kubernetes protection data sources are enabled for the detector.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnkubernetesconfiguration.html
     */
    interface CFNKubernetesConfigurationProperty {
        /**
         * Describes whether Kubernetes audit logs are enabled as a data source for the detector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnkubernetesconfiguration.html#cfn-guardduty-detector-cfnkubernetesconfiguration-auditlogs
         */
        readonly auditLogs: CfnDetector.CFNKubernetesAuditLogsConfigurationProperty | cdk.IResolvable;
    }
    /**
     * Describes which optional data sources are enabled for a detector.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnkubernetesauditlogsconfiguration.html
     */
    interface CFNKubernetesAuditLogsConfigurationProperty {
        /**
         * Describes whether Kubernetes audit logs are enabled as a data source for the detector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnkubernetesauditlogsconfiguration.html#cfn-guardduty-detector-cfnkubernetesauditlogsconfiguration-enable
         */
        readonly enable: boolean | cdk.IResolvable;
    }
    /**
     * Information about the configuration of a feature in your account.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnfeatureconfiguration.html
     */
    interface CFNFeatureConfigurationProperty {
        /**
         * Information about the additional configuration of a feature in your account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnfeatureconfiguration.html#cfn-guardduty-detector-cfnfeatureconfiguration-additionalconfiguration
         */
        readonly additionalConfiguration?: Array<CfnDetector.CFNFeatureAdditionalConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Name of the feature.
         *
         * For a list of allowed values, see [DetectorFeatureConfiguration](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DetectorFeatureConfiguration.html#guardduty-Type-DetectorFeatureConfiguration-name) in the *GuardDuty API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnfeatureconfiguration.html#cfn-guardduty-detector-cfnfeatureconfiguration-name
         */
        readonly name: string;
        /**
         * Status of the feature configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnfeatureconfiguration.html#cfn-guardduty-detector-cfnfeatureconfiguration-status
         */
        readonly status: string;
    }
    /**
     * Information about the additional configuration of a feature in your account.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnfeatureadditionalconfiguration.html
     */
    interface CFNFeatureAdditionalConfigurationProperty {
        /**
         * Name of the additional configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnfeatureadditionalconfiguration.html#cfn-guardduty-detector-cfnfeatureadditionalconfiguration-name
         */
        readonly name?: string;
        /**
         * Status of the additional configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnfeatureadditionalconfiguration.html#cfn-guardduty-detector-cfnfeatureadditionalconfiguration-status
         */
        readonly status?: string;
    }
    /**
     * Describes a tag.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-tagitem.html
     */
    interface TagItemProperty {
        /**
         * The tag key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-tagitem.html#cfn-guardduty-detector-tagitem-key
         */
        readonly key: string;
        /**
         * The tag value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-tagitem.html#cfn-guardduty-detector-tagitem-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnDetector`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html
 */
export interface CfnDetectorProps {
    /**
     * Describes which data sources will be enabled for the detector.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-datasources
     */
    readonly dataSources?: CfnDetector.CFNDataSourceConfigurationsProperty | cdk.IResolvable;
    /**
     * Specifies whether the detector is to be enabled on creation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-enable
     */
    readonly enable: boolean | cdk.IResolvable;
    /**
     * A list of features that will be configured for the detector.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-features
     */
    readonly features?: Array<CfnDetector.CFNFeatureConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies how frequently updated findings are exported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-findingpublishingfrequency
     */
    readonly findingPublishingFrequency?: string;
    /**
     * Specifies tags added to a new detector resource.
     *
     * Each tag consists of a key and an optional value, both of which you define.
     *
     * Currently, support is available only for creating and deleting a tag. No support exists for updating the tags.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-tags
     */
    readonly tags?: Array<CfnDetector.TagItemProperty>;
}
/**
 * The `AWS::GuardDuty::Filter` resource specifies a new filter defined by the provided `findingCriteria` .
 *
 * @cloudformationResource AWS::GuardDuty::Filter
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-filter.html
 */
export declare class CfnFilter extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFilter from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFilter;
    /**
     * Specifies the action that is to be applied to the findings that match the filter.
     */
    action?: string;
    /**
     * The description of the filter.
     */
    description?: string;
    /**
     * The detector ID associated with the GuardDuty account for which you want to create a filter.
     */
    detectorId: string;
    /**
     * Represents the criteria to be used in the filter for querying findings.
     */
    findingCriteria: CfnFilter.FindingCriteriaProperty | cdk.IResolvable;
    /**
     * The name of the filter.
     */
    name: string;
    /**
     * Specifies the position of the filter in the list of current filters.
     */
    rank?: number;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to be added to a new filter resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFilterProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFilter {
    /**
     * Represents a map of finding properties that match specified conditions and values when querying findings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-findingcriteria.html
     */
    interface FindingCriteriaProperty {
        /**
         * Represents a map of finding properties that match specified conditions and values when querying findings.
         *
         * For information about JSON criterion mapping to their console equivalent, see [Finding criteria](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_filter-findings.html#filter_criteria) . The following are the available criterion:
         *
         * - accountId
         * - id
         * - region
         * - severity
         *
         * To filter on the basis of severity, the API and AWS CLI use the following input list for the `FindingCriteria` condition:
         *
         * - *Low* : `["1", "2", "3"]`
         * - *Medium* : `["4", "5", "6"]`
         * - *High* : `["7", "8", "9"]`
         *
         * For more information, see [Severity levels for GuardDuty findings](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings.html#guardduty_findings-severity) in the *Amazon GuardDuty User Guide* .
         * - type
         * - updatedAt
         *
         * Type: ISO 8601 string format: `YYYY-MM-DDTHH:MM:SS.SSSZ` or `YYYY-MM-DDTHH:MM:SSZ` depending on whether the value contains milliseconds.
         * - resource.accessKeyDetails.accessKeyId
         * - resource.accessKeyDetails.principalId
         * - resource.accessKeyDetails.userName
         * - resource.accessKeyDetails.userType
         * - resource.instanceDetails.iamInstanceProfile.id
         * - resource.instanceDetails.imageId
         * - resource.instanceDetails.instanceId
         * - resource.instanceDetails.tags.key
         * - resource.instanceDetails.tags.value
         * - resource.instanceDetails.networkInterfaces.ipv6Addresses
         * - resource.instanceDetails.networkInterfaces.privateIpAddresses.privateIpAddress
         * - resource.instanceDetails.networkInterfaces.publicDnsName
         * - resource.instanceDetails.networkInterfaces.publicIp
         * - resource.instanceDetails.networkInterfaces.securityGroups.groupId
         * - resource.instanceDetails.networkInterfaces.securityGroups.groupName
         * - resource.instanceDetails.networkInterfaces.subnetId
         * - resource.instanceDetails.networkInterfaces.vpcId
         * - resource.instanceDetails.outpostArn
         * - resource.resourceType
         * - resource.s3BucketDetails.publicAccess.effectivePermissions
         * - resource.s3BucketDetails.name
         * - resource.s3BucketDetails.tags.key
         * - resource.s3BucketDetails.tags.value
         * - resource.s3BucketDetails.type
         * - service.action.actionType
         * - service.action.awsApiCallAction.api
         * - service.action.awsApiCallAction.callerType
         * - service.action.awsApiCallAction.errorCode
         * - service.action.awsApiCallAction.remoteIpDetails.city.cityName
         * - service.action.awsApiCallAction.remoteIpDetails.country.countryName
         * - service.action.awsApiCallAction.remoteIpDetails.ipAddressV4
         * - service.action.awsApiCallAction.remoteIpDetails.ipAddressV6
         * - service.action.awsApiCallAction.remoteIpDetails.organization.asn
         * - service.action.awsApiCallAction.remoteIpDetails.organization.asnOrg
         * - service.action.awsApiCallAction.serviceName
         * - service.action.dnsRequestAction.domain
         * - service.action.dnsRequestAction.domainWithSuffix
         * - service.action.networkConnectionAction.blocked
         * - service.action.networkConnectionAction.connectionDirection
         * - service.action.networkConnectionAction.localPortDetails.port
         * - service.action.networkConnectionAction.protocol
         * - service.action.networkConnectionAction.remoteIpDetails.city.cityName
         * - service.action.networkConnectionAction.remoteIpDetails.country.countryName
         * - service.action.networkConnectionAction.remoteIpDetails.ipAddressV4
         * - service.action.networkConnectionAction.remoteIpDetails.ipAddressV6
         * - service.action.networkConnectionAction.remoteIpDetails.organization.asn
         * - service.action.networkConnectionAction.remoteIpDetails.organization.asnOrg
         * - service.action.networkConnectionAction.remotePortDetails.port
         * - service.action.awsApiCallAction.remoteAccountDetails.affiliated
         * - service.action.kubernetesApiCallAction.remoteIpDetails.ipAddressV4
         * - service.action.kubernetesApiCallAction.remoteIpDetails.ipAddressV6
         * - service.action.kubernetesApiCallAction.namespace
         * - service.action.kubernetesApiCallAction.remoteIpDetails.organization.asn
         * - service.action.kubernetesApiCallAction.requestUri
         * - service.action.kubernetesApiCallAction.statusCode
         * - service.action.networkConnectionAction.localIpDetails.ipAddressV4
         * - service.action.networkConnectionAction.localIpDetails.ipAddressV6
         * - service.action.networkConnectionAction.protocol
         * - service.action.awsApiCallAction.serviceName
         * - service.action.awsApiCallAction.remoteAccountDetails.accountId
         * - service.additionalInfo.threatListName
         * - service.resourceRole
         * - resource.eksClusterDetails.name
         * - resource.kubernetesDetails.kubernetesWorkloadDetails.name
         * - resource.kubernetesDetails.kubernetesWorkloadDetails.namespace
         * - resource.kubernetesDetails.kubernetesUserDetails.username
         * - resource.kubernetesDetails.kubernetesWorkloadDetails.containers.image
         * - resource.kubernetesDetails.kubernetesWorkloadDetails.containers.imagePrefix
         * - service.ebsVolumeScanDetails.scanId
         * - service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.name
         * - service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.severity
         * - service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.filePaths.hash
         * - service.malwareScanDetails.threats.name
         * - resource.ecsClusterDetails.name
         * - resource.ecsClusterDetails.taskDetails.containers.image
         * - resource.ecsClusterDetails.taskDetails.definitionArn
         * - resource.containerDetails.image
         * - resource.rdsDbInstanceDetails.dbInstanceIdentifier
         * - resource.rdsDbInstanceDetails.dbClusterIdentifier
         * - resource.rdsDbInstanceDetails.engine
         * - resource.rdsDbUserDetails.user
         * - resource.rdsDbInstanceDetails.tags.key
         * - resource.rdsDbInstanceDetails.tags.value
         * - service.runtimeDetails.process.executableSha256
         * - service.runtimeDetails.process.name
         * - service.runtimeDetails.process.name
         * - resource.lambdaDetails.functionName
         * - resource.lambdaDetails.functionArn
         * - resource.lambdaDetails.tags.key
         * - resource.lambdaDetails.tags.value
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-findingcriteria.html#cfn-guardduty-filter-findingcriteria-criterion
         */
        readonly criterion?: any | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-findingcriteria.html#cfn-guardduty-filter-findingcriteria-itemtype
         */
        readonly itemType?: CfnFilter.ConditionProperty | cdk.IResolvable;
    }
    /**
     * Specifies the condition to apply to a single field when filtering through GuardDuty findings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-condition.html
     */
    interface ConditionProperty {
        /**
         * Represents the equal condition to apply to a single field when querying for findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-condition.html#cfn-guardduty-filter-condition-eq
         */
        readonly eq?: Array<string>;
        /**
         * Represents an *equal* ** condition to be applied to a single field when querying for findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-condition.html#cfn-guardduty-filter-condition-equals
         */
        readonly equalTo?: Array<string>;
        /**
         * Represents a *greater than* condition to be applied to a single field when querying for findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-condition.html#cfn-guardduty-filter-condition-greaterthan
         */
        readonly greaterThan?: number;
        /**
         * Represents a *greater than or equal* condition to be applied to a single field when querying for findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-condition.html#cfn-guardduty-filter-condition-greaterthanorequal
         */
        readonly greaterThanOrEqual?: number;
        /**
         * Represents a *greater than* condition to be applied to a single field when querying for findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-condition.html#cfn-guardduty-filter-condition-gt
         */
        readonly gt?: number;
        /**
         * Represents the greater than or equal condition to apply to a single field when querying for findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-condition.html#cfn-guardduty-filter-condition-gte
         */
        readonly gte?: number;
        /**
         * Represents a *less than* condition to be applied to a single field when querying for findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-condition.html#cfn-guardduty-filter-condition-lessthan
         */
        readonly lessThan?: number;
        /**
         * Represents a *less than or equal* condition to be applied to a single field when querying for findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-condition.html#cfn-guardduty-filter-condition-lessthanorequal
         */
        readonly lessThanOrEqual?: number;
        /**
         * Represents the less than condition to apply to a single field when querying for findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-condition.html#cfn-guardduty-filter-condition-lt
         */
        readonly lt?: number;
        /**
         * Represents the less than or equal condition to apply to a single field when querying for findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-condition.html#cfn-guardduty-filter-condition-lte
         */
        readonly lte?: number;
        /**
         * Represents the not equal condition to apply to a single field when querying for findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-condition.html#cfn-guardduty-filter-condition-neq
         */
        readonly neq?: Array<string>;
        /**
         * Represents a *not equal* ** condition to be applied to a single field when querying for findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-condition.html#cfn-guardduty-filter-condition-notequals
         */
        readonly notEquals?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnFilter`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-filter.html
 */
export interface CfnFilterProps {
    /**
     * Specifies the action that is to be applied to the findings that match the filter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-filter.html#cfn-guardduty-filter-action
     */
    readonly action?: string;
    /**
     * The description of the filter.
     *
     * Valid characters include alphanumeric characters, and special characters such as hyphen, period, colon, underscore, parentheses ( `{ }` , `[ ]` , and `( )` ), forward slash, horizontal tab, vertical tab, newline, form feed, return, and whitespace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-filter.html#cfn-guardduty-filter-description
     */
    readonly description?: string;
    /**
     * The detector ID associated with the GuardDuty account for which you want to create a filter.
     *
     * To find the `detectorId` in the current Region, see the
     * Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-filter.html#cfn-guardduty-filter-detectorid
     */
    readonly detectorId: string;
    /**
     * Represents the criteria to be used in the filter for querying findings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-filter.html#cfn-guardduty-filter-findingcriteria
     */
    readonly findingCriteria: CfnFilter.FindingCriteriaProperty | cdk.IResolvable;
    /**
     * The name of the filter.
     *
     * Valid characters include period (.), underscore (_), dash (-), and alphanumeric characters. A whitespace is considered to be an invalid character.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-filter.html#cfn-guardduty-filter-name
     */
    readonly name: string;
    /**
     * Specifies the position of the filter in the list of current filters.
     *
     * Also specifies the order in which this filter is applied to the findings. The minimum value for this property is 1 and the maximum is 100.
     *
     * By default, filters may not be created in the same order as they are ranked. To ensure that the filters are created in the expected order, you can use an optional attribute, [DependsOn](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) , with the following syntax: `"DependsOn":[ "ObjectName" ]` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-filter.html#cfn-guardduty-filter-rank
     */
    readonly rank?: number;
    /**
     * The tags to be added to a new filter resource.
     *
     * Each tag consists of a key and an optional value, both of which you define.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-filter.html#cfn-guardduty-filter-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::GuardDuty::IPSet` resource specifies a new `IPSet` .
 *
 * An `IPSet` is a list of trusted IP addresses from which secure communication is allowed with AWS infrastructure and applications.
 *
 * @cloudformationResource AWS::GuardDuty::IPSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html
 */
export declare class CfnIPSet extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIPSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIPSet;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Indicates whether or not GuardDuty uses the `IPSet` .
     */
    activate?: boolean | cdk.IResolvable;
    /**
     * The unique ID of the detector of the GuardDuty account for which you want to create an IPSet.
     */
    detectorId?: string;
    /**
     * The format of the file that contains the IPSet.
     */
    format: string;
    /**
     * The URI of the file that contains the IPSet.
     */
    location: string;
    /**
     * The user-friendly name to identify the IPSet.
     */
    name?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to be added to a new IP set resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIPSetProps);
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
 * Properties for defining a `CfnIPSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html
 */
export interface CfnIPSetProps {
    /**
     * Indicates whether or not GuardDuty uses the `IPSet` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html#cfn-guardduty-ipset-activate
     */
    readonly activate?: boolean | cdk.IResolvable;
    /**
     * The unique ID of the detector of the GuardDuty account for which you want to create an IPSet.
     *
     * To find the `detectorId` in the current Region, see the
     * Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html#cfn-guardduty-ipset-detectorid
     */
    readonly detectorId?: string;
    /**
     * The format of the file that contains the IPSet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html#cfn-guardduty-ipset-format
     */
    readonly format: string;
    /**
     * The URI of the file that contains the IPSet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html#cfn-guardduty-ipset-location
     */
    readonly location: string;
    /**
     * The user-friendly name to identify the IPSet.
     *
     * Allowed characters are alphanumeric, whitespace, dash (-), and underscores (_).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html#cfn-guardduty-ipset-name
     */
    readonly name?: string;
    /**
     * The tags to be added to a new IP set resource.
     *
     * Each tag consists of a key and an optional value, both of which you define.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html#cfn-guardduty-ipset-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * You can use the `AWS::GuardDuty::Master` resource in a GuardDuty member account to accept an invitation from a GuardDuty administrator account.
 *
 * The invitation to the member account must be sent prior to using the `AWS::GuardDuty::Master` resource to accept the administrator account's invitation. You can invite a member account by using the `InviteMembers` operation of the GuardDuty API, or by creating an `AWS::GuardDuty::Member` resource.
 *
 * @cloudformationResource AWS::GuardDuty::Master
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html
 */
export declare class CfnMaster extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMaster from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMaster;
    /**
     * The unique ID of the detector of the GuardDuty member account.
     */
    detectorId: string;
    /**
     * The ID of the invitation that is sent to the account designated as a member account.
     */
    invitationId?: string;
    /**
     * The AWS account ID of the account designated as the GuardDuty administrator account.
     */
    masterId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMasterProps);
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
 * Properties for defining a `CfnMaster`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html
 */
export interface CfnMasterProps {
    /**
     * The unique ID of the detector of the GuardDuty member account.
     *
     * To find the `detectorId` in the current Region, see the
     * Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html#cfn-guardduty-master-detectorid
     */
    readonly detectorId: string;
    /**
     * The ID of the invitation that is sent to the account designated as a member account.
     *
     * You can find the invitation ID by running the [ListInvitations](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListInvitations.html) in the *GuardDuty API Reference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html#cfn-guardduty-master-invitationid
     */
    readonly invitationId?: string;
    /**
     * The AWS account ID of the account designated as the GuardDuty administrator account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html#cfn-guardduty-master-masterid
     */
    readonly masterId: string;
}
/**
 * You can use the `AWS::GuardDuty::Member` resource to add an AWS account as a GuardDuty member account to the current GuardDuty administrator account.
 *
 * If the value of the `Status` property is not provided or is set to `Created` , a member account is created but not invited. If the value of the `Status` property is set to `Invited` , a member account is created and invited. An `AWS::GuardDuty::Member` resource must be created with the `Status` property set to `Invited` before the `AWS::GuardDuty::Master` resource can be created in a GuardDuty member account.
 *
 * @cloudformationResource AWS::GuardDuty::Member
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html
 */
export declare class CfnMember extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMember from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMember;
    /**
     * The ID of the detector associated with the GuardDuty service to add the member to.
     */
    detectorId?: string;
    /**
     * Specifies whether or not to disable email notification for the member account that you invite.
     */
    disableEmailNotification?: boolean | cdk.IResolvable;
    /**
     * The email address associated with the member account.
     */
    email: string;
    /**
     * The AWS account ID of the account to designate as a member.
     */
    memberId?: string;
    /**
     * The invitation message that you want to send to the accounts that you're inviting to GuardDuty as members.
     */
    message?: string;
    /**
     * You can use the `Status` property to update the status of the relationship between the member account and its administrator account.
     */
    status?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMemberProps);
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
 * Properties for defining a `CfnMember`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html
 */
export interface CfnMemberProps {
    /**
     * The ID of the detector associated with the GuardDuty service to add the member to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html#cfn-guardduty-member-detectorid
     */
    readonly detectorId?: string;
    /**
     * Specifies whether or not to disable email notification for the member account that you invite.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html#cfn-guardduty-member-disableemailnotification
     */
    readonly disableEmailNotification?: boolean | cdk.IResolvable;
    /**
     * The email address associated with the member account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html#cfn-guardduty-member-email
     */
    readonly email: string;
    /**
     * The AWS account ID of the account to designate as a member.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html#cfn-guardduty-member-memberid
     */
    readonly memberId?: string;
    /**
     * The invitation message that you want to send to the accounts that you're inviting to GuardDuty as members.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html#cfn-guardduty-member-message
     */
    readonly message?: string;
    /**
     * You can use the `Status` property to update the status of the relationship between the member account and its administrator account.
     *
     * Valid values are `Created` and `Invited` when using an `AWS::GuardDuty::Member` resource. If the value for this property is not provided or set to `Created` , a member account is created but not invited. If the value of this property is set to `Invited` , a member account is created and invited.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html#cfn-guardduty-member-status
     */
    readonly status?: string;
}
/**
 * The `AWS::GuardDuty::ThreatIntelSet` resource specifies a new `ThreatIntelSet` .
 *
 * A `ThreatIntelSet` consists of known malicious IP addresses. GuardDuty generates findings based on the `ThreatIntelSet` after it is activated.
 *
 * @cloudformationResource AWS::GuardDuty::ThreatIntelSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html
 */
export declare class CfnThreatIntelSet extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnThreatIntelSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnThreatIntelSet;
    /**
     * The unique ID of the `threatIntelSet` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A Boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet.
     */
    activate?: boolean | cdk.IResolvable;
    /**
     * The unique ID of the detector of the GuardDuty account for which you want to create a `ThreatIntelSet` .
     */
    detectorId?: string;
    /**
     * The format of the file that contains the ThreatIntelSet.
     */
    format: string;
    /**
     * The URI of the file that contains the ThreatIntelSet.
     */
    location: string;
    /**
     * A user-friendly ThreatIntelSet name displayed in all findings that are generated by activity that involves IP addresses included in this ThreatIntelSet.
     */
    name?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to be added to a new threat list resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnThreatIntelSetProps);
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
 * Properties for defining a `CfnThreatIntelSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html
 */
export interface CfnThreatIntelSetProps {
    /**
     * A Boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html#cfn-guardduty-threatintelset-activate
     */
    readonly activate?: boolean | cdk.IResolvable;
    /**
     * The unique ID of the detector of the GuardDuty account for which you want to create a `ThreatIntelSet` .
     *
     * To find the `detectorId` in the current Region, see the
     * Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html#cfn-guardduty-threatintelset-detectorid
     */
    readonly detectorId?: string;
    /**
     * The format of the file that contains the ThreatIntelSet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html#cfn-guardduty-threatintelset-format
     */
    readonly format: string;
    /**
     * The URI of the file that contains the ThreatIntelSet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html#cfn-guardduty-threatintelset-location
     */
    readonly location: string;
    /**
     * A user-friendly ThreatIntelSet name displayed in all findings that are generated by activity that involves IP addresses included in this ThreatIntelSet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html#cfn-guardduty-threatintelset-name
     */
    readonly name?: string;
    /**
     * The tags to be added to a new threat list resource.
     *
     * Each tag consists of a key and an optional value, both of which you define.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html#cfn-guardduty-threatintelset-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a new Malware Protection plan for the protected resource.
 *
 * When you create a Malware Protection plan, the [AWS service terms for GuardDuty Malware Protection](https://docs.aws.amazon.com/service-terms/#87._Amazon_GuardDuty) will apply.
 *
 * @cloudformationResource AWS::GuardDuty::MalwareProtectionPlan
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-malwareprotectionplan.html
 */
export declare class CfnMalwareProtectionPlan extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMalwareProtectionPlan from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMalwareProtectionPlan;
    /**
     * Amazon Resource Name (ARN) associated with this Malware Protection plan.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The timestamp when the Malware Protection plan resource was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * A unique identifier associated with Malware Protection plan.
     *
     * @cloudformationAttribute MalwareProtectionPlanId
     */
    readonly attrMalwareProtectionPlanId: string;
    /**
     * Status of the Malware Protection plan resource.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Status details associated with the Malware Protection plan resource status.
     *
     * @cloudformationAttribute StatusReasons
     */
    readonly attrStatusReasons: cdk.IResolvable;
    /**
     * Specifies the action that is to be applied to the Malware Protection plan resource.
     */
    actions?: CfnMalwareProtectionPlan.CFNActionsProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Information about the protected resource.
     */
    protectedResource: CfnMalwareProtectionPlan.CFNProtectedResourceProperty | cdk.IResolvable;
    /**
     * Amazon Resource Name (ARN) of the IAM role that includes the permissions required to scan and (optionally) add tags to the associated protected resource.
     */
    role: string;
    /**
     * The tags to be added to the created Malware Protection plan resource.
     */
    tags?: Array<CfnMalwareProtectionPlan.TagItemProperty>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMalwareProtectionPlanProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMalwareProtectionPlan {
    /**
     * Information about the protected resource.
     *
     * Presently, `S3Bucket` is the only supported protected resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-malwareprotectionplan-cfnprotectedresource.html
     */
    interface CFNProtectedResourceProperty {
        /**
         * Information about the protected S3 bucket resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-malwareprotectionplan-cfnprotectedresource.html#cfn-guardduty-malwareprotectionplan-cfnprotectedresource-s3bucket
         */
        readonly s3Bucket: cdk.IResolvable | CfnMalwareProtectionPlan.S3BucketProperty;
    }
    /**
     * Information about the protected S3 bucket resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-malwareprotectionplan-s3bucket.html
     */
    interface S3BucketProperty {
        /**
         * Name of the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-malwareprotectionplan-s3bucket.html#cfn-guardduty-malwareprotectionplan-s3bucket-bucketname
         */
        readonly bucketName?: string;
        /**
         * Information about the specified object prefixes.
         *
         * An S3 object will be scanned only if it belongs to any of the specified object prefixes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-malwareprotectionplan-s3bucket.html#cfn-guardduty-malwareprotectionplan-s3bucket-objectprefixes
         */
        readonly objectPrefixes?: Array<string>;
    }
    /**
     * Specifies the action that is to be applied to the Malware Protection plan resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-malwareprotectionplan-cfnactions.html
     */
    interface CFNActionsProperty {
        /**
         * Contains information about tagging status of the Malware Protection plan resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-malwareprotectionplan-cfnactions.html#cfn-guardduty-malwareprotectionplan-cfnactions-tagging
         */
        readonly tagging?: CfnMalwareProtectionPlan.CFNTaggingProperty | cdk.IResolvable;
    }
    /**
     * Contains information about tagging status of the Malware Protection plan resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-malwareprotectionplan-cfntagging.html
     */
    interface CFNTaggingProperty {
        /**
         * Indicates whether or not you chose GuardDuty to add a predefined tag to the scanned S3 object.
         *
         * Potential values include `ENABLED` and `DISABLED` . These values are case-sensitive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-malwareprotectionplan-cfntagging.html#cfn-guardduty-malwareprotectionplan-cfntagging-status
         */
        readonly status?: string;
    }
    /**
     * Describes a tag.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-malwareprotectionplan-tagitem.html
     */
    interface TagItemProperty {
        /**
         * The tag key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-malwareprotectionplan-tagitem.html#cfn-guardduty-malwareprotectionplan-tagitem-key
         */
        readonly key: string;
        /**
         * The tag value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-malwareprotectionplan-tagitem.html#cfn-guardduty-malwareprotectionplan-tagitem-value
         */
        readonly value: string;
    }
    /**
     * Information about the status code and status details associated with the status of the Malware Protection plan.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-malwareprotectionplan-cfnstatusreasons.html
     */
    interface CFNStatusReasonsProperty {
        /**
         * The status code of the Malware Protection plan.
         *
         * For more information, see [Malware Protection plan resource status](https://docs.aws.amazon.com/guardduty/latest/ug/malware-protection-s3-bucket-status-gdu.html) in the *GuardDuty User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-malwareprotectionplan-cfnstatusreasons.html#cfn-guardduty-malwareprotectionplan-cfnstatusreasons-code
         */
        readonly code?: string;
        /**
         * Issue message that specifies the reason.
         *
         * For information about potential troubleshooting steps, see [Troubleshooting Malware Protection for S3 status issues](https://docs.aws.amazon.com/guardduty/latest/ug/troubleshoot-s3-malware-protection-status-errors.html) in the *Amazon GuardDuty User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-malwareprotectionplan-cfnstatusreasons.html#cfn-guardduty-malwareprotectionplan-cfnstatusreasons-message
         */
        readonly message?: string;
    }
}
/**
 * Properties for defining a `CfnMalwareProtectionPlan`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-malwareprotectionplan.html
 */
export interface CfnMalwareProtectionPlanProps {
    /**
     * Specifies the action that is to be applied to the Malware Protection plan resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-malwareprotectionplan.html#cfn-guardduty-malwareprotectionplan-actions
     */
    readonly actions?: CfnMalwareProtectionPlan.CFNActionsProperty | cdk.IResolvable;
    /**
     * Information about the protected resource.
     *
     * Presently, `S3Bucket` is the only supported protected resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-malwareprotectionplan.html#cfn-guardduty-malwareprotectionplan-protectedresource
     */
    readonly protectedResource: CfnMalwareProtectionPlan.CFNProtectedResourceProperty | cdk.IResolvable;
    /**
     * Amazon Resource Name (ARN) of the IAM role that includes the permissions required to scan and (optionally) add tags to the associated protected resource.
     *
     * To find the ARN of your IAM role, go to the IAM console, and select the role name for details.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-malwareprotectionplan.html#cfn-guardduty-malwareprotectionplan-role
     */
    readonly role: string;
    /**
     * The tags to be added to the created Malware Protection plan resource.
     *
     * Each tag consists of a key and an optional value, both of which you need to specify.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-malwareprotectionplan.html#cfn-guardduty-malwareprotectionplan-tags
     */
    readonly tags?: Array<CfnMalwareProtectionPlan.TagItemProperty>;
}
/**
 * Creates a publishing destination where you can export your GuardDuty findings.
 *
 * Before you start exporting the findings, the destination resource must exist.
 *
 * For more information about considerations and permissions, see [Exporting GuardDuty findings to Amazon S3 buckets](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_exportfindings.html) in the *Amazon GuardDuty User Guide* .
 *
 * @cloudformationResource AWS::GuardDuty::PublishingDestination
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html
 */
export declare class CfnPublishingDestination extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPublishingDestination from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPublishingDestination;
    /**
     * The ID of the publishing destination.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The time, in epoch millisecond format, at which GuardDuty was first unable to publish findings to the destination.
     *
     * @cloudformationAttribute PublishingFailureStartTimestamp
     */
    readonly attrPublishingFailureStartTimestamp: string;
    /**
     * The status of the publishing destination.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings.
     */
    destinationProperties: CfnPublishingDestination.CFNDestinationPropertiesProperty | cdk.IResolvable;
    /**
     * The type of publishing destination.
     */
    destinationType: string;
    /**
     * The ID of the GuardDuty detector where the publishing destination exists.
     */
    detectorId: string;
    /**
     * Describes a tag.
     */
    tags?: Array<CfnPublishingDestination.TagItemProperty>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPublishingDestinationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPublishingDestination {
    /**
     * Contains the Amazon Resource Name (ARN) of the resource that receives the published findings, such as an S3 bucket, and the ARN of the KMS key that is used to encrypt these published findings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-publishingdestination-cfndestinationproperties.html
     */
    interface CFNDestinationPropertiesProperty {
        /**
         * The ARN of the resource where the findings are published.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-publishingdestination-cfndestinationproperties.html#cfn-guardduty-publishingdestination-cfndestinationproperties-destinationarn
         */
        readonly destinationArn?: string;
        /**
         * The ARN of the KMS key to use for encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-publishingdestination-cfndestinationproperties.html#cfn-guardduty-publishingdestination-cfndestinationproperties-kmskeyarn
         */
        readonly kmsKeyArn?: string;
    }
    /**
     * Describes a tag.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-publishingdestination-tagitem.html
     */
    interface TagItemProperty {
        /**
         * The tag key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-publishingdestination-tagitem.html#cfn-guardduty-publishingdestination-tagitem-key
         */
        readonly key: string;
        /**
         * The tag value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-publishingdestination-tagitem.html#cfn-guardduty-publishingdestination-tagitem-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnPublishingDestination`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html
 */
export interface CfnPublishingDestinationProps {
    /**
     * Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html#cfn-guardduty-publishingdestination-destinationproperties
     */
    readonly destinationProperties: CfnPublishingDestination.CFNDestinationPropertiesProperty | cdk.IResolvable;
    /**
     * The type of publishing destination.
     *
     * GuardDuty supports Amazon S3 buckets as a publishing destination.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html#cfn-guardduty-publishingdestination-destinationtype
     */
    readonly destinationType: string;
    /**
     * The ID of the GuardDuty detector where the publishing destination exists.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html#cfn-guardduty-publishingdestination-detectorid
     */
    readonly detectorId: string;
    /**
     * Describes a tag.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html#cfn-guardduty-publishingdestination-tags
     */
    readonly tags?: Array<CfnPublishingDestination.TagItemProperty>;
}
