import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::SSMIncidents::ReplicationSet` resource specifies a set of AWS Regions that Incident Manager data is replicated to and the AWS Key Management Service ( AWS KMS key used to encrypt the data.
 *
 * @cloudformationResource AWS::SSMIncidents::ReplicationSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html
 */
export declare class CfnReplicationSet extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnReplicationSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnReplicationSet;
    /**
     * The ARN of the ReplicationSet.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Determines if the replication set deletion protection is enabled or not.
     */
    deletionProtected?: boolean | cdk.IResolvable;
    /**
     * Specifies the Regions of the replication set.
     */
    regions: Array<cdk.IResolvable | CfnReplicationSet.ReplicationRegionProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tags to add to the replication set.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnReplicationSetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnReplicationSet {
    /**
     * The `ReplicationRegion` property type specifies the Region and AWS Key Management Service key to add to the replication set.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-replicationset-replicationregion.html
     */
    interface ReplicationRegionProperty {
        /**
         * Specifies the Region configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-replicationset-replicationregion.html#cfn-ssmincidents-replicationset-replicationregion-regionconfiguration
         */
        readonly regionConfiguration?: cdk.IResolvable | CfnReplicationSet.RegionConfigurationProperty;
        /**
         * Specifies the region name to add to the replication set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-replicationset-replicationregion.html#cfn-ssmincidents-replicationset-replicationregion-regionname
         */
        readonly regionName?: string;
    }
    /**
     * The `RegionConfiguration` property specifies the Region and AWS Key Management Service key to add to the replication set.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-replicationset-regionconfiguration.html
     */
    interface RegionConfigurationProperty {
        /**
         * The AWS Key Management Service key ID to use to encrypt your replication set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-replicationset-regionconfiguration.html#cfn-ssmincidents-replicationset-regionconfiguration-ssekmskeyid
         */
        readonly sseKmsKeyId: string;
    }
}
/**
 * Properties for defining a `CfnReplicationSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html
 */
export interface CfnReplicationSetProps {
    /**
     * Determines if the replication set deletion protection is enabled or not.
     *
     * If deletion protection is enabled, you can't delete the last Region in the replication set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html#cfn-ssmincidents-replicationset-deletionprotected
     */
    readonly deletionProtected?: boolean | cdk.IResolvable;
    /**
     * Specifies the Regions of the replication set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html#cfn-ssmincidents-replicationset-regions
     */
    readonly regions: Array<cdk.IResolvable | CfnReplicationSet.ReplicationRegionProperty> | cdk.IResolvable;
    /**
     * A list of tags to add to the replication set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html#cfn-ssmincidents-replicationset-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::SSMIncidents::ResponsePlan` resource specifies the details of the response plan that are used when creating an incident.
 *
 * @cloudformationResource AWS::SSMIncidents::ResponsePlan
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html
 */
export declare class CfnResponsePlan extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResponsePlan from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResponsePlan;
    /**
     * The ARN of the response plan.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The actions that the response plan starts at the beginning of an incident.
     */
    actions?: Array<CfnResponsePlan.ActionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The AWS Chatbot chat channel used for collaboration during an incident.
     */
    chatChannel?: CfnResponsePlan.ChatChannelProperty | cdk.IResolvable;
    /**
     * The human readable name of the response plan.
     */
    displayName?: string;
    /**
     * The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.
     */
    engagements?: Array<string>;
    /**
     * Details used to create an incident when using this response plan.
     */
    incidentTemplate: CfnResponsePlan.IncidentTemplateProperty | cdk.IResolvable;
    /**
     * Information about third-party services integrated into the response plan.
     */
    integrations?: Array<CfnResponsePlan.IntegrationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the response plan.
     */
    name: string;
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
    constructor(scope: constructs.Construct, id: string, props: CfnResponsePlanProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnResponsePlan {
    /**
     * The AWS Chatbot chat channel used for collaboration during an incident.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-chatchannel.html
     */
    interface ChatChannelProperty {
        /**
         * The Amazon SNS targets that AWS Chatbot uses to notify the chat channel of updates to an incident.
         *
         * You can also make updates to the incident through the chat channel by using the Amazon SNS topics
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-chatchannel.html#cfn-ssmincidents-responseplan-chatchannel-chatbotsns
         */
        readonly chatbotSns?: Array<string>;
    }
    /**
     * Information about third-party services integrated into a response plan.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-integration.html
     */
    interface IntegrationProperty {
        /**
         * Information about the PagerDuty service where the response plan creates an incident.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-integration.html#cfn-ssmincidents-responseplan-integration-pagerdutyconfiguration
         */
        readonly pagerDutyConfiguration: cdk.IResolvable | CfnResponsePlan.PagerDutyConfigurationProperty;
    }
    /**
     * Details about the PagerDuty configuration for a response plan.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-pagerdutyconfiguration.html
     */
    interface PagerDutyConfigurationProperty {
        /**
         * The name of the PagerDuty configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-pagerdutyconfiguration.html#cfn-ssmincidents-responseplan-pagerdutyconfiguration-name
         */
        readonly name: string;
        /**
         * Details about the PagerDuty service associated with the configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-pagerdutyconfiguration.html#cfn-ssmincidents-responseplan-pagerdutyconfiguration-pagerdutyincidentconfiguration
         */
        readonly pagerDutyIncidentConfiguration: cdk.IResolvable | CfnResponsePlan.PagerDutyIncidentConfigurationProperty;
        /**
         * The ID of the AWS Secrets Manager secret that stores your PagerDuty key, either a General Access REST API Key or User Token REST API Key, and other user credentials.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-pagerdutyconfiguration.html#cfn-ssmincidents-responseplan-pagerdutyconfiguration-secretid
         */
        readonly secretId: string;
    }
    /**
     * Details about the PagerDuty service where the response plan creates an incident.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-pagerdutyincidentconfiguration.html
     */
    interface PagerDutyIncidentConfigurationProperty {
        /**
         * The ID of the PagerDuty service that the response plan associates with an incident when it launches.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-pagerdutyincidentconfiguration.html#cfn-ssmincidents-responseplan-pagerdutyincidentconfiguration-serviceid
         */
        readonly serviceId: string;
    }
    /**
     * The `Action` property type specifies the configuration to launch.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-action.html
     */
    interface ActionProperty {
        /**
         * Details about the Systems Manager automation document that will be used as a runbook during an incident.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-action.html#cfn-ssmincidents-responseplan-action-ssmautomation
         */
        readonly ssmAutomation?: cdk.IResolvable | CfnResponsePlan.SsmAutomationProperty;
    }
    /**
     * The `SsmAutomation` property type specifies details about the Systems Manager Automation runbook that will be used as the runbook during an incident.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-ssmautomation.html
     */
    interface SsmAutomationProperty {
        /**
         * The automation document's name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-ssmautomation.html#cfn-ssmincidents-responseplan-ssmautomation-documentname
         */
        readonly documentName: string;
        /**
         * The version of the runbook to use when running.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-ssmautomation.html#cfn-ssmincidents-responseplan-ssmautomation-documentversion
         */
        readonly documentVersion?: string;
        /**
         * The key-value pairs to resolve dynamic parameter values when processing a Systems Manager Automation runbook.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-ssmautomation.html#cfn-ssmincidents-responseplan-ssmautomation-dynamicparameters
         */
        readonly dynamicParameters?: Array<CfnResponsePlan.DynamicSsmParameterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The key-value pair parameters to use when running the runbook.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-ssmautomation.html#cfn-ssmincidents-responseplan-ssmautomation-parameters
         */
        readonly parameters?: Array<cdk.IResolvable | CfnResponsePlan.SsmParameterProperty> | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) of the role that the automation document will assume when running commands.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-ssmautomation.html#cfn-ssmincidents-responseplan-ssmautomation-rolearn
         */
        readonly roleArn: string;
        /**
         * The account that the automation document will be run in.
         *
         * This can be in either the management account or an application account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-ssmautomation.html#cfn-ssmincidents-responseplan-ssmautomation-targetaccount
         */
        readonly targetAccount?: string;
    }
    /**
     * The key-value pair parameters to use when running the Automation runbook.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-ssmparameter.html
     */
    interface SsmParameterProperty {
        /**
         * The key parameter to use when running the Automation runbook.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-ssmparameter.html#cfn-ssmincidents-responseplan-ssmparameter-key
         */
        readonly key: string;
        /**
         * The value parameter to use when running the Automation runbook.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-ssmparameter.html#cfn-ssmincidents-responseplan-ssmparameter-values
         */
        readonly values: Array<string>;
    }
    /**
     * When you add a runbook to a response plan, you can specify the parameters for the runbook to use at runtime.
     *
     * Response plans support parameters with both static and dynamic values. For static values, you enter the value when you define the parameter in the response plan. For dynamic values, the system determines the correct parameter value by collecting information from the incident. Incident Manager supports the following dynamic parameters:
     *
     * *Incident ARN*
     *
     * When Incident Manager creates an incident, the system captures the Amazon Resource Name (ARN) of the corresponding incident record and enters it for this parameter in the runbook.
     *
     * > This value can only be assigned to parameters of type `String` . If assigned to a parameter of any other type, the runbook fails to run.
     *
     * *Involved resources*
     *
     * When Incident Manager creates an incident, the system captures the ARNs of the resources involved in the incident. These resource ARNs are then assigned to this parameter in the runbook.
     *
     * > This value can only be assigned to parameters of type `StringList` . If assigned to a parameter of any other type, the runbook fails to run.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-dynamicssmparameter.html
     */
    interface DynamicSsmParameterProperty {
        /**
         * The key parameter to use when running the Systems Manager Automation runbook.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-dynamicssmparameter.html#cfn-ssmincidents-responseplan-dynamicssmparameter-key
         */
        readonly key: string;
        /**
         * The dynamic parameter value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-dynamicssmparameter.html#cfn-ssmincidents-responseplan-dynamicssmparameter-value
         */
        readonly value: CfnResponsePlan.DynamicSsmParameterValueProperty | cdk.IResolvable;
    }
    /**
     * The dynamic parameter value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-dynamicssmparametervalue.html
     */
    interface DynamicSsmParameterValueProperty {
        /**
         * Variable dynamic parameters.
         *
         * A parameter value is determined when an incident is created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-dynamicssmparametervalue.html#cfn-ssmincidents-responseplan-dynamicssmparametervalue-variable
         */
        readonly variable?: string;
    }
    /**
     * The `IncidentTemplate` property type specifies details used to create an incident when using this response plan.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-incidenttemplate.html
     */
    interface IncidentTemplateProperty {
        /**
         * Used to create only one incident record for an incident.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-incidenttemplate.html#cfn-ssmincidents-responseplan-incidenttemplate-dedupestring
         */
        readonly dedupeString?: string;
        /**
         * Defines the impact to the customers. Providing an impact overwrites the impact provided by a response plan.
         *
         * **Possible impacts:** - `1` - Critical impact, this typically relates to full application failure that impacts many to all customers.
         * - `2` - High impact, partial application failure with impact to many customers.
         * - `3` - Medium impact, the application is providing reduced service to customers.
         * - `4` - Low impact, customer might aren't impacted by the problem yet.
         * - `5` - No impact, customers aren't currently impacted but urgent action is needed to avoid impact.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-incidenttemplate.html#cfn-ssmincidents-responseplan-incidenttemplate-impact
         */
        readonly impact: number;
        /**
         * Tags to assign to the template.
         *
         * When the `StartIncident` API action is called, Incident Manager assigns the tags specified in the template to the incident.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-incidenttemplate.html#cfn-ssmincidents-responseplan-incidenttemplate-incidenttags
         */
        readonly incidentTags?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The Amazon Simple Notification Service ( Amazon SNS ) targets that AWS Chatbot uses to notify the chat channel of updates to an incident.
         *
         * You can also make updates to the incident through the chat channel using the Amazon SNS topics.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-incidenttemplate.html#cfn-ssmincidents-responseplan-incidenttemplate-notificationtargets
         */
        readonly notificationTargets?: Array<cdk.IResolvable | CfnResponsePlan.NotificationTargetItemProperty> | cdk.IResolvable;
        /**
         * The summary describes what has happened during the incident.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-incidenttemplate.html#cfn-ssmincidents-responseplan-incidenttemplate-summary
         */
        readonly summary?: string;
        /**
         * The title of the incident is a brief and easily recognizable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-incidenttemplate.html#cfn-ssmincidents-responseplan-incidenttemplate-title
         */
        readonly title: string;
    }
    /**
     * The Amazon SNS topic that's used by AWS Chatbot to notify the incidents chat channel.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-notificationtargetitem.html
     */
    interface NotificationTargetItemProperty {
        /**
         * The Amazon Resource Name (ARN) of the Amazon SNS topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-notificationtargetitem.html#cfn-ssmincidents-responseplan-notificationtargetitem-snstopicarn
         */
        readonly snsTopicArn?: string;
    }
}
/**
 * Properties for defining a `CfnResponsePlan`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html
 */
export interface CfnResponsePlanProps {
    /**
     * The actions that the response plan starts at the beginning of an incident.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-actions
     */
    readonly actions?: Array<CfnResponsePlan.ActionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The AWS Chatbot chat channel used for collaboration during an incident.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-chatchannel
     */
    readonly chatChannel?: CfnResponsePlan.ChatChannelProperty | cdk.IResolvable;
    /**
     * The human readable name of the response plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-displayname
     */
    readonly displayName?: string;
    /**
     * The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-engagements
     */
    readonly engagements?: Array<string>;
    /**
     * Details used to create an incident when using this response plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-incidenttemplate
     */
    readonly incidentTemplate: CfnResponsePlan.IncidentTemplateProperty | cdk.IResolvable;
    /**
     * Information about third-party services integrated into the response plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-integrations
     */
    readonly integrations?: Array<CfnResponsePlan.IntegrationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the response plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-name
     */
    readonly name: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
