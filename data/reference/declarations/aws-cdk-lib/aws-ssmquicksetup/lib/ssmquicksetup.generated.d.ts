import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a Quick Setup configuration manager resource.
 *
 * This object is a collection of desired state configurations for multiple configuration definitions and summaries describing the deployments of those definitions.
 *
 * @cloudformationResource AWS::SSMQuickSetup::ConfigurationManager
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html
 */
export declare class CfnConfigurationManager extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConfigurationManager from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConfigurationManager;
    /**
     * The datetime stamp when the configuration manager was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The datetime stamp when the configuration manager was last updated.
     *
     * @cloudformationAttribute LastModifiedAt
     */
    readonly attrLastModifiedAt: string;
    /**
     * The ARN of the Quick Setup configuration.
     *
     * @cloudformationAttribute ManagerArn
     */
    readonly attrManagerArn: string;
    /**
     * Summaries of the state of the configuration manager. These summaries include an aggregate of the statuses from the configuration definition associated with the configuration manager. This includes deployment statuses, association statuses, drift statuses, health checks, and more.
     *
     * @cloudformationAttribute StatusSummaries
     */
    readonly attrStatusSummaries: cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The definition of the Quick Setup configuration that the configuration manager deploys.
     */
    configurationDefinitions: Array<CfnConfigurationManager.ConfigurationDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the configuration.
     */
    description?: string;
    /**
     * The name of the configuration.
     */
    name?: string;
    /**
     * Key-value pairs of metadata to assign to the configuration manager.
     */
    tags?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConfigurationManagerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConfigurationManager {
    /**
     * The definition of a Quick Setup configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-configurationdefinition.html
     */
    interface ConfigurationDefinitionProperty {
        /**
         * The ID of the configuration definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-configurationdefinition.html#cfn-ssmquicksetup-configurationmanager-configurationdefinition-id
         */
        readonly id?: string;
        /**
         * The ARN of the IAM role used to administrate local configuration deployments.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-configurationdefinition.html#cfn-ssmquicksetup-configurationmanager-configurationdefinition-localdeploymentadministrationrolearn
         */
        readonly localDeploymentAdministrationRoleArn?: string;
        /**
         * The name of the IAM role used to deploy local configurations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-configurationdefinition.html#cfn-ssmquicksetup-configurationmanager-configurationdefinition-localdeploymentexecutionrolename
         */
        readonly localDeploymentExecutionRoleName?: string;
        /**
         * The parameters for the configuration definition type.
         *
         * Parameters for configuration definitions vary based the configuration type. The following lists outline the parameters for each configuration type.
         *
         * - **AWS Config Recording (Type: AWS QuickSetupType-CFGRecording)** - - `RecordAllResources`
         *
         * - Description: (Optional) A boolean value that determines whether all supported resources are recorded. The default value is " `true` ".
         * - `ResourceTypesToRecord`
         *
         * - Description: (Optional) A comma separated list of resource types you want to record.
         * - `RecordGlobalResourceTypes`
         *
         * - Description: (Optional) A boolean value that determines whether global resources are recorded with all resource configurations. The default value is " `false` ".
         * - `GlobalResourceTypesRegion`
         *
         * - Description: (Optional) Determines the AWS Region where global resources are recorded.
         * - `UseCustomBucket`
         *
         * - Description: (Optional) A boolean value that determines whether a custom Amazon S3 bucket is used for delivery. The default value is " `false` ".
         * - `DeliveryBucketName`
         *
         * - Description: (Optional) The name of the Amazon S3 bucket you want AWS Config to deliver configuration snapshots and configuration history files to.
         * - `DeliveryBucketPrefix`
         *
         * - Description: (Optional) The key prefix you want to use in the custom Amazon S3 bucket.
         * - `NotificationOptions`
         *
         * - Description: (Optional) Determines the notification configuration for the recorder. The valid values are `NoStreaming` , `UseExistingTopic` , and `CreateTopic` . The default value is `NoStreaming` .
         * - `CustomDeliveryTopicAccountId`
         *
         * - Description: (Optional) The ID of the AWS account where the Amazon SNS topic you want to use for notifications resides. You must specify a value for this parameter if you use the `UseExistingTopic` notification option.
         * - `CustomDeliveryTopicName`
         *
         * - Description: (Optional) The name of the Amazon SNS topic you want to use for notifications. You must specify a value for this parameter if you use the `UseExistingTopic` notification option.
         * - `RemediationSchedule`
         *
         * - Description: (Optional) A rate expression that defines the schedule for drift remediation. The valid values are `rate(30 days)` , `rate(7 days)` , `rate(1 days)` , and `none` . The default value is " `none` ".
         * - `TargetAccounts`
         *
         * - Description: (Optional) The ID of the AWS account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either `TargetAccounts` or `TargetOrganizationalUnits` .
         * - `TargetOrganizationalUnits`
         *
         * - Description: (Optional) The ID of the root of your Organization. This configuration type doesn't currently support choosing specific OUs. The configuration will be deployed to all the OUs in the Organization.
         * - `TargetRegions`
         *
         * - Description: (Required) A comma separated list of AWS Regions you want to deploy the configuration to.
         * - **Change Manager (Type: AWS QuickSetupType-SSMChangeMgr)** - - `DelegatedAccountId`
         *
         * - Description: (Required) The ID of the delegated administrator account.
         * - `JobFunction`
         *
         * - Description: (Required) The name for the Change Manager job function.
         * - `PermissionType`
         *
         * - Description: (Optional) Specifies whether you want to use default administrator permissions for the job function role, or provide a custom IAM policy. The valid values are `CustomPermissions` and `AdminPermissions` . The default value for the parameter is `CustomerPermissions` .
         * - `CustomPermissions`
         *
         * - Description: (Optional) A JSON string containing the IAM policy you want your job function to use. You must provide a value for this parameter if you specify `CustomPermissions` for the `PermissionType` parameter.
         * - `TargetOrganizationalUnits`
         *
         * - Description: (Required) A comma separated list of organizational units (OUs) you want to deploy the configuration to.
         * - `TargetRegions`
         *
         * - Description: (Required) A comma separated list of AWS Regions you want to deploy the configuration to.
         * - **Conformance Packs (Type: AWS QuickSetupType-CFGCPacks)** - - `DelegatedAccountId`
         *
         * - Description: (Optional) The ID of the delegated administrator account. This parameter is required for Organization deployments.
         * - `RemediationSchedule`
         *
         * - Description: (Optional) A rate expression that defines the schedule for drift remediation. The valid values are `rate(30 days)` , `rate(14 days)` , `rate(2 days)` , and `none` . The default value is " `none` ".
         * - `CPackNames`
         *
         * - Description: (Required) A comma separated list of AWS Config conformance packs.
         * - `TargetAccounts`
         *
         * - Description: (Optional) The ID of the AWS account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either `TargetAccounts` or `TargetOrganizationalUnits` .
         * - `TargetOrganizationalUnits`
         *
         * - Description: (Optional) The ID of the root of your Organization. This configuration type doesn't currently support choosing specific OUs. The configuration will be deployed to all the OUs in the Organization.
         * - `TargetRegions`
         *
         * - Description: (Required) A comma separated list of AWS Regions you want to deploy the configuration to.
         * - **Default Host Management Configuration (Type: AWS QuickSetupType-DHMC)** - - `UpdateSSMAgent`
         *
         * - Description: (Optional) A boolean value that determines whether the SSM Agent is updated on the target instances every 2 weeks. The default value is " `true` ".
         * - `TargetOrganizationalUnits`
         *
         * - Description: (Required) A comma separated list of organizational units (OUs) you want to deploy the configuration to.
         * - `TargetRegions`
         *
         * - Description: (Required) A comma separated list of AWS Regions you want to deploy the configuration to.
         * - **DevOps Guru (Type: AWS QuickSetupType-DevOpsGuru)** - - `AnalyseAllResources`
         *
         * - Description: (Optional) A boolean value that determines whether DevOps Guru analyzes all AWS CloudFormation stacks in the account. The default value is " `false` ".
         * - `EnableSnsNotifications`
         *
         * - Description: (Optional) A boolean value that determines whether DevOps Guru sends notifications when an insight is created. The default value is " `true` ".
         * - `EnableSsmOpsItems`
         *
         * - Description: (Optional) A boolean value that determines whether DevOps Guru creates an OpsCenter OpsItem when an insight is created. The default value is " `true` ".
         * - `EnableDriftRemediation`
         *
         * - Description: (Optional) A boolean value that determines whether a drift remediation schedule is used. The default value is " `false` ".
         * - `RemediationSchedule`
         *
         * - Description: (Optional) A rate expression that defines the schedule for drift remediation. The valid values are `rate(30 days)` , `rate(14 days)` , `rate(1 days)` , and `none` . The default value is " `none` ".
         * - `TargetAccounts`
         *
         * - Description: (Optional) The ID of the AWS account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either `TargetAccounts` or `TargetOrganizationalUnits` .
         * - `TargetOrganizationalUnits`
         *
         * - Description: (Optional) A comma separated list of organizational units (OUs) you want to deploy the configuration to.
         * - `TargetRegions`
         *
         * - Description: (Required) A comma separated list of AWS Regions you want to deploy the configuration to.
         * - **Distributor (Type: AWS QuickSetupType-Distributor)** - - `PackagesToInstall`
         *
         * - Description: (Required) A comma separated list of packages you want to install on the target instances. The valid values are `AWSEFSTools` , `AWSCWAgent` , and `AWSEC2LaunchAgent` .
         * - `RemediationSchedule`
         *
         * - Description: (Optional) A rate expression that defines the schedule for drift remediation. The valid values are `rate(30 days)` , `rate(14 days)` , `rate(2 days)` , and `none` . The default value is " `rate(30 days)` ".
         * - `IsPolicyAttachAllowed`
         *
         * - Description: (Optional) A boolean value that determines whether Quick Setup attaches policies to instances profiles already associated with the target instances. The default value is " `false` ".
         * - `TargetType`
         *
         * - Description: (Optional) Determines how instances are targeted for local account deployments. Don't specify a value for this parameter if you're deploying to OUs. The valid values are `*` , `InstanceIds` , `ResourceGroups` , and `Tags` . Use `*` to target all instances in the account.
         * - `TargetInstances`
         *
         * - Description: (Optional) A comma separated list of instance IDs. You must provide a value for this parameter if you specify `InstanceIds` for the `TargetType` parameter.
         * - `TargetTagKey`
         *
         * - Description: (Required) The tag key assigned to the instances you want to target. You must provide a value for this parameter if you specify `Tags` for the `TargetType` parameter.
         * - `TargetTagValue`
         *
         * - Description: (Required) The value of the tag key assigned to the instances you want to target. You must provide a value for this parameter if you specify `Tags` for the `TargetType` parameter.
         * - `ResourceGroupName`
         *
         * - Description: (Required) The name of the resource group associated with the instances you want to target. You must provide a value for this parameter if you specify `ResourceGroups` for the `TargetType` parameter.
         * - `TargetAccounts`
         *
         * - Description: (Optional) The ID of the AWS account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either `TargetAccounts` or `TargetOrganizationalUnits` .
         * - `TargetOrganizationalUnits`
         *
         * - Description: (Optional) A comma separated list of organizational units (OUs) you want to deploy the configuration to.
         * - `TargetRegions`
         *
         * - Description: (Required) A comma separated list of AWS Regions you want to deploy the configuration to.
         * - **Host Management (Type: AWS QuickSetupType-SSMHostMgmt)** - - `UpdateSSMAgent`
         *
         * - Description: (Optional) A boolean value that determines whether the SSM Agent is updated on the target instances every 2 weeks. The default value is " `true` ".
         * - `UpdateEc2LaunchAgent`
         *
         * - Description: (Optional) A boolean value that determines whether the EC2 Launch agent is updated on the target instances every month. The default value is " `false` ".
         * - `CollectInventory`
         *
         * - Description: (Optional) A boolean value that determines whether instance metadata is collected on the target instances every 30 minutes. The default value is " `true` ".
         * - `ScanInstances`
         *
         * - Description: (Optional) A boolean value that determines whether the target instances are scanned daily for available patches. The default value is " `true` ".
         * - `InstallCloudWatchAgent`
         *
         * - Description: (Optional) A boolean value that determines whether the Amazon CloudWatch agent is installed on the target instances. The default value is " `false` ".
         * - `UpdateCloudWatchAgent`
         *
         * - Description: (Optional) A boolean value that determines whether the Amazon CloudWatch agent is updated on the target instances every month. The default value is " `false` ".
         * - `IsPolicyAttachAllowed`
         *
         * - Description: (Optional) A boolean value that determines whether Quick Setup attaches policies to instances profiles already associated with the target instances. The default value is " `false` ".
         * - `TargetType`
         *
         * - Description: (Optional) Determines how instances are targeted for local account deployments. Don't specify a value for this parameter if you're deploying to OUs. The valid values are `*` , `InstanceIds` , `ResourceGroups` , and `Tags` . Use `*` to target all instances in the account.
         * - `TargetInstances`
         *
         * - Description: (Optional) A comma separated list of instance IDs. You must provide a value for this parameter if you specify `InstanceIds` for the `TargetType` parameter.
         * - `TargetTagKey`
         *
         * - Description: (Optional) The tag key assigned to the instances you want to target. You must provide a value for this parameter if you specify `Tags` for the `TargetType` parameter.
         * - `TargetTagValue`
         *
         * - Description: (Optional) The value of the tag key assigned to the instances you want to target. You must provide a value for this parameter if you specify `Tags` for the `TargetType` parameter.
         * - `ResourceGroupName`
         *
         * - Description: (Optional) The name of the resource group associated with the instances you want to target. You must provide a value for this parameter if you specify `ResourceGroups` for the `TargetType` parameter.
         * - `TargetAccounts`
         *
         * - Description: (Optional) The ID of the AWS account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either `TargetAccounts` or `TargetOrganizationalUnits` .
         * - `TargetOrganizationalUnits`
         *
         * - Description: (Optional) A comma separated list of organizational units (OUs) you want to deploy the configuration to.
         * - `TargetRegions`
         *
         * - Description: (Required) A comma separated list of AWS Regions you want to deploy the configuration to.
         * - **OpsCenter (Type: AWS QuickSetupType-SSMOpsCenter)** - - `DelegatedAccountId`
         *
         * - Description: (Required) The ID of the delegated administrator account.
         * - `TargetOrganizationalUnits`
         *
         * - Description: (Required) A comma separated list of organizational units (OUs) you want to deploy the configuration to.
         * - `TargetRegions`
         *
         * - Description: (Required) A comma separated list of AWS Regions you want to deploy the configuration to.
         * - **Patch Policy (Type: AWS QuickSetupType-PatchPolicy)** - - `PatchPolicyName`
         *
         * - Description: (Required) A name for the patch policy. The value you provide is applied to target Amazon EC2 instances as a tag.
         * - `SelectedPatchBaselines`
         *
         * - Description: (Required) An array of JSON objects containing the information for the patch baselines to include in your patch policy.
         * - `PatchBaselineUseDefault`
         *
         * - Description: (Optional) A boolean value that determines whether the selected patch baselines are all AWS provided.
         * - `ConfigurationOptionsPatchOperation`
         *
         * - Description: (Optional) Determines whether target instances scan for available patches, or scan and install available patches. The valid values are `Scan` and `ScanAndInstall` . The default value for the parameter is `Scan` .
         * - `ConfigurationOptionsScanValue`
         *
         * - Description: (Optional) A cron expression that is used as the schedule for when instances scan for available patches.
         * - `ConfigurationOptionsInstallValue`
         *
         * - Description: (Optional) A cron expression that is used as the schedule for when instances install available patches.
         * - `ConfigurationOptionsScanNextInterval`
         *
         * - Description: (Optional) A boolean value that determines whether instances should scan for available patches at the next cron interval. The default value is " `false` ".
         * - `ConfigurationOptionsInstallNextInterval`
         *
         * - Description: (Optional) A boolean value that determines whether instances should scan for available patches at the next cron interval. The default value is " `false` ".
         * - `RebootOption`
         *
         * - Description: (Optional) Determines whether instances are rebooted after patches are installed. Valid values are `RebootIfNeeded` and `NoReboot` .
         * - `IsPolicyAttachAllowed`
         *
         * - Description: (Optional) A boolean value that determines whether Quick Setup attaches policies to instances profiles already associated with the target instances. The default value is " `false` ".
         * - `OutputLogEnableS3`
         *
         * - Description: (Optional) A boolean value that determines whether command output logs are sent to Amazon S3.
         * - `OutputS3Location`
         *
         * - Description: (Optional) A JSON string containing information about the Amazon S3 bucket where you want to store the output details of the request.
         *
         * - `OutputS3BucketRegion`
         *
         * - Description: (Optional) The AWS Region where the Amazon S3 bucket you want to deliver command output to is located.
         * - `OutputS3BucketName`
         *
         * - Description: (Optional) The name of the Amazon S3 bucket you want to deliver command output to.
         * - `OutputS3KeyPrefix`
         *
         * - Description: (Optional) The key prefix you want to use in the custom Amazon S3 bucket.
         * - `TargetType`
         *
         * - Description: (Optional) Determines how instances are targeted for local account deployments. Don't specify a value for this parameter if you're deploying to OUs. The valid values are `*` , `InstanceIds` , `ResourceGroups` , and `Tags` . Use `*` to target all instances in the account.
         * - `TargetInstances`
         *
         * - Description: (Optional) A comma separated list of instance IDs. You must provide a value for this parameter if you specify `InstanceIds` for the `TargetType` parameter.
         * - `TargetTagKey`
         *
         * - Description: (Required) The tag key assigned to the instances you want to target. You must provide a value for this parameter if you specify `Tags` for the `TargetType` parameter.
         * - `TargetTagValue`
         *
         * - Description: (Required) The value of the tag key assigned to the instances you want to target. You must provide a value for this parameter if you specify `Tags` for the `TargetType` parameter.
         * - `ResourceGroupName`
         *
         * - Description: (Required) The name of the resource group associated with the instances you want to target. You must provide a value for this parameter if you specify `ResourceGroups` for the `TargetType` parameter.
         * - `TargetAccounts`
         *
         * - Description: (Optional) The ID of the AWS account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either `TargetAccounts` or `TargetOrganizationalUnits` .
         * - `TargetOrganizationalUnits`
         *
         * - Description: (Optional) A comma separated list of organizational units (OUs) you want to deploy the configuration to.
         * - `TargetRegions`
         *
         * - Description: (Required) A comma separated list of AWS Regions you want to deploy the configuration to.
         * - **Resource Explorer (Type: AWS QuickSetupType-ResourceExplorer)** - - `SelectedAggregatorRegion`
         *
         * - Description: (Required) The AWS Region where you want to create the aggregator index.
         * - `ReplaceExistingAggregator`
         *
         * - Description: (Required) A boolean value that determines whether to demote an existing aggregator if it is in a Region that differs from the value you specify for the `SelectedAggregatorRegion` .
         * - `TargetOrganizationalUnits`
         *
         * - Description: (Required) A comma separated list of organizational units (OUs) you want to deploy the configuration to.
         * - `TargetRegions`
         *
         * - Description: (Required) A comma separated list of AWS Regions you want to deploy the configuration to.
         * - **Resource Scheduler (Type: AWS QuickSetupType-Scheduler)** - - `TargetTagKey`
         *
         * - Description: (Required) The tag key assigned to the instances you want to target.
         * - `TargetTagValue`
         *
         * - Description: (Required) The value of the tag key assigned to the instances you want to target.
         * - `ICalendarString`
         *
         * - Description: (Required) An iCalendar formatted string containing the schedule you want Change Manager to use.
         * - `TargetAccounts`
         *
         * - Description: (Optional) The ID of the AWS account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either `TargetAccounts` or `TargetOrganizationalUnits` .
         * - `TargetOrganizationalUnits`
         *
         * - Description: (Optional) A comma separated list of organizational units (OUs) you want to deploy the configuration to.
         * - `TargetRegions`
         *
         * - Description: (Required) A comma separated list of AWS Regions you want to deploy the configuration to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-configurationdefinition.html#cfn-ssmquicksetup-configurationmanager-configurationdefinition-parameters
         */
        readonly parameters: cdk.IResolvable | Record<string, string>;
        /**
         * The type of the Quick Setup configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-configurationdefinition.html#cfn-ssmquicksetup-configurationmanager-configurationdefinition-type
         */
        readonly type: string;
        /**
         * The version of the Quick Setup type used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-configurationdefinition.html#cfn-ssmquicksetup-configurationmanager-configurationdefinition-typeversion
         */
        readonly typeVersion?: string;
    }
    /**
     * A summarized description of the status.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-statussummary.html
     */
    interface StatusSummaryProperty {
        /**
         * The datetime stamp when the status was last updated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-statussummary.html#cfn-ssmquicksetup-configurationmanager-statussummary-lastupdatedat
         */
        readonly lastUpdatedAt: string;
        /**
         * The current status.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-statussummary.html#cfn-ssmquicksetup-configurationmanager-statussummary-status
         */
        readonly status?: string;
        /**
         * Details about the status.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-statussummary.html#cfn-ssmquicksetup-configurationmanager-statussummary-statusdetails
         */
        readonly statusDetails?: cdk.IResolvable | Record<string, string>;
        /**
         * When applicable, returns an informational message relevant to the current status and status type of the status summary object.
         *
         * We don't recommend implementing parsing logic around this value since the messages returned can vary in format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-statussummary.html#cfn-ssmquicksetup-configurationmanager-statussummary-statusmessage
         */
        readonly statusMessage?: string;
        /**
         * The type of a status summary.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-statussummary.html#cfn-ssmquicksetup-configurationmanager-statussummary-statustype
         */
        readonly statusType: string;
    }
}
/**
 * Properties for defining a `CfnConfigurationManager`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html
 */
export interface CfnConfigurationManagerProps {
    /**
     * The definition of the Quick Setup configuration that the configuration manager deploys.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html#cfn-ssmquicksetup-configurationmanager-configurationdefinitions
     */
    readonly configurationDefinitions: Array<CfnConfigurationManager.ConfigurationDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html#cfn-ssmquicksetup-configurationmanager-description
     */
    readonly description?: string;
    /**
     * The name of the configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html#cfn-ssmquicksetup-configurationmanager-name
     */
    readonly name?: string;
    /**
     * Key-value pairs of metadata to assign to the configuration manager.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html#cfn-ssmquicksetup-configurationmanager-tags
     */
    readonly tags?: Record<string, string>;
}
