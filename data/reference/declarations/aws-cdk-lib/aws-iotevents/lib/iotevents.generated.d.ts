import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Represents an alarm model to monitor an AWS IoT Events input attribute.
 *
 * You can use the alarm to get notified when the value is outside a specified range. For more information, see [Create an alarm model](https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html) in the *AWS IoT Events Developer Guide* .
 *
 * @cloudformationResource AWS::IoTEvents::AlarmModel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-alarmmodel.html
 */
export declare class CfnAlarmModel extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAlarmModel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAlarmModel;
    /**
     * Contains the configuration information of alarm state changes.
     */
    alarmCapabilities?: CfnAlarmModel.AlarmCapabilitiesProperty | cdk.IResolvable;
    /**
     * Contains information about one or more alarm actions.
     */
    alarmEventActions?: CfnAlarmModel.AlarmEventActionsProperty | cdk.IResolvable;
    /**
     * The description of the alarm model.
     */
    alarmModelDescription?: string;
    /**
     * The name of the alarm model.
     */
    alarmModelName?: string;
    /**
     * Defines when your alarm is invoked.
     */
    alarmRule: CfnAlarmModel.AlarmRuleProperty | cdk.IResolvable;
    /**
     * An input attribute used as a key to create an alarm.
     */
    key?: string;
    /**
     * The ARN of the IAM role that allows the alarm to perform actions and access AWS resources.
     */
    roleArn: string;
    /**
     * A non-negative integer that reflects the severity level of the alarm.
     */
    severity?: number;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of key-value pairs that contain metadata for the alarm model.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAlarmModelProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAlarmModel {
    /**
     * Defines when your alarm is invoked.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmrule.html
     */
    interface AlarmRuleProperty {
        /**
         * A rule that compares an input property value to a threshold value with a comparison operator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmrule.html#cfn-iotevents-alarmmodel-alarmrule-simplerule
         */
        readonly simpleRule?: cdk.IResolvable | CfnAlarmModel.SimpleRuleProperty;
    }
    /**
     * A rule that compares an input property value to a threshold value with a comparison operator.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-simplerule.html
     */
    interface SimpleRuleProperty {
        /**
         * The comparison operator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-simplerule.html#cfn-iotevents-alarmmodel-simplerule-comparisonoperator
         */
        readonly comparisonOperator: string;
        /**
         * The value on the left side of the comparison operator.
         *
         * You can specify an AWS IoT Events input attribute as an input property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-simplerule.html#cfn-iotevents-alarmmodel-simplerule-inputproperty
         */
        readonly inputProperty: string;
        /**
         * The value on the right side of the comparison operator.
         *
         * You can enter a number or specify an AWS IoT Events input attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-simplerule.html#cfn-iotevents-alarmmodel-simplerule-threshold
         */
        readonly threshold: string;
    }
    /**
     * Contains the configuration information of alarm state changes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmcapabilities.html
     */
    interface AlarmCapabilitiesProperty {
        /**
         * Specifies whether to get notified for alarm state changes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmcapabilities.html#cfn-iotevents-alarmmodel-alarmcapabilities-acknowledgeflow
         */
        readonly acknowledgeFlow?: CfnAlarmModel.AcknowledgeFlowProperty | cdk.IResolvable;
        /**
         * Specifies the default alarm state.
         *
         * The configuration applies to all alarms that were created based on this alarm model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmcapabilities.html#cfn-iotevents-alarmmodel-alarmcapabilities-initializationconfiguration
         */
        readonly initializationConfiguration?: CfnAlarmModel.InitializationConfigurationProperty | cdk.IResolvable;
    }
    /**
     * Specifies whether to get notified for alarm state changes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-acknowledgeflow.html
     */
    interface AcknowledgeFlowProperty {
        /**
         * The value must be `TRUE` or `FALSE` .
         *
         * If `TRUE` , you receive a notification when the alarm state changes. You must choose to acknowledge the notification before the alarm state can return to `NORMAL` . If `FALSE` , you won't receive notifications. The alarm automatically changes to the `NORMAL` state when the input property value returns to the specified range.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-acknowledgeflow.html#cfn-iotevents-alarmmodel-acknowledgeflow-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
    }
    /**
     * Specifies the default alarm state.
     *
     * The configuration applies to all alarms that were created based on this alarm model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-initializationconfiguration.html
     */
    interface InitializationConfigurationProperty {
        /**
         * The value must be `TRUE` or `FALSE` .
         *
         * If `FALSE` , all alarm instances created based on the alarm model are activated. The default value is `TRUE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-initializationconfiguration.html#cfn-iotevents-alarmmodel-initializationconfiguration-disabledoninitialization
         */
        readonly disabledOnInitialization: boolean | cdk.IResolvable;
    }
    /**
     * Contains information about one or more alarm actions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmeventactions.html
     */
    interface AlarmEventActionsProperty {
        /**
         * Specifies one or more supported actions to receive notifications when the alarm state changes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmeventactions.html#cfn-iotevents-alarmmodel-alarmeventactions-alarmactions
         */
        readonly alarmActions?: Array<CfnAlarmModel.AlarmActionProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Specifies one of the following actions to receive notifications when the alarm state changes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmaction.html
     */
    interface AlarmActionProperty {
        /**
         * Defines an action to write to the Amazon DynamoDB table that you created.
         *
         * The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html) . One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.
         *
         * You must use expressions for all parameters in `DynamoDBAction` . The expressions accept literals, operators, functions, references, and substitution templates.
         *
         * **Examples** - For literal values, the expressions must contain single quotes. For example, the value for the `hashKeyType` parameter can be `'STRING'` .
         * - For references, you must specify either variables or input values. For example, the value for the `hashKeyField` parameter can be `$input.GreenhouseInput.name` .
         * - For a substitution template, you must use `${}` , and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
         *
         * In the following example, the value for the `hashKeyValue` parameter uses a substitution template.
         *
         * `'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'`
         * - For a string concatenation, you must use `+` . A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
         *
         * In the following example, the value for the `tableName` parameter uses a string concatenation.
         *
         * `'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`
         *
         * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide* .
         *
         * If the defined payload type is a string, `DynamoDBAction` writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the `payloadField` parameter is `<payload-field>_raw` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmaction.html#cfn-iotevents-alarmmodel-alarmaction-dynamodb
         */
        readonly dynamoDb?: CfnAlarmModel.DynamoDBProperty | cdk.IResolvable;
        /**
         * Defines an action to write to the Amazon DynamoDB table that you created.
         *
         * The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html) . A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.
         *
         * You must use expressions for all parameters in `DynamoDBv2Action` . The expressions accept literals, operators, functions, references, and substitution templates.
         *
         * **Examples** - For literal values, the expressions must contain single quotes. For example, the value for the `tableName` parameter can be `'GreenhouseTemperatureTable'` .
         * - For references, you must specify either variables or input values. For example, the value for the `tableName` parameter can be `$variable.ddbtableName` .
         * - For a substitution template, you must use `${}` , and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
         *
         * In the following example, the value for the `contentExpression` parameter in `Payload` uses a substitution template.
         *
         * `'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\": \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'`
         * - For a string concatenation, you must use `+` . A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
         *
         * In the following example, the value for the `tableName` parameter uses a string concatenation.
         *
         * `'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`
         *
         * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide* .
         *
         * The value for the `type` parameter in `Payload` must be `JSON` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmaction.html#cfn-iotevents-alarmmodel-alarmaction-dynamodbv2
         */
        readonly dynamoDBv2?: CfnAlarmModel.DynamoDBv2Property | cdk.IResolvable;
        /**
         * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmaction.html#cfn-iotevents-alarmmodel-alarmaction-firehose
         */
        readonly firehose?: CfnAlarmModel.FirehoseProperty | cdk.IResolvable;
        /**
         * Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmaction.html#cfn-iotevents-alarmmodel-alarmaction-iotevents
         */
        readonly iotEvents?: CfnAlarmModel.IotEventsProperty | cdk.IResolvable;
        /**
         * Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise .
         *
         * You must use expressions for all parameters in `IotSiteWiseAction` . The expressions accept literals, operators, functions, references, and substitutions templates.
         *
         * **Examples** - For literal values, the expressions must contain single quotes. For example, the value for the `propertyAlias` parameter can be `'/company/windfarm/3/turbine/7/temperature'` .
         * - For references, you must specify either variables or input values. For example, the value for the `assetId` parameter can be `$input.TurbineInput.assetId1` .
         * - For a substitution template, you must use `${}` , and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
         *
         * In the following example, the value for the `propertyAlias` parameter uses a substitution template.
         *
         * `'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/ ${$input.TemperatureInput.sensorData.turbineID}/temperature'`
         *
         * You must specify either `propertyAlias` or both `assetId` and `propertyId` to identify the target asset property in AWS IoT SiteWise .
         *
         * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmaction.html#cfn-iotevents-alarmmodel-alarmaction-iotsitewise
         */
        readonly iotSiteWise?: CfnAlarmModel.IotSiteWiseProperty | cdk.IResolvable;
        /**
         * Information required to publish the MQTT message through the AWS IoT message broker.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmaction.html#cfn-iotevents-alarmmodel-alarmaction-iottopicpublish
         */
        readonly iotTopicPublish?: CfnAlarmModel.IotTopicPublishProperty | cdk.IResolvable;
        /**
         * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmaction.html#cfn-iotevents-alarmmodel-alarmaction-lambda
         */
        readonly lambda?: cdk.IResolvable | CfnAlarmModel.LambdaProperty;
        /**
         * Information required to publish the Amazon SNS message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmaction.html#cfn-iotevents-alarmmodel-alarmaction-sns
         */
        readonly sns?: cdk.IResolvable | CfnAlarmModel.SnsProperty;
        /**
         * Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmaction.html#cfn-iotevents-alarmmodel-alarmaction-sqs
         */
        readonly sqs?: cdk.IResolvable | CfnAlarmModel.SqsProperty;
    }
    /**
     * Defines an action to write to the Amazon DynamoDB table that you created.
     *
     * The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html) . A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.
     *
     * You must use expressions for all parameters in `DynamoDBv2Action` . The expressions accept literals, operators, functions, references, and substitution templates.
     *
     * **Examples** - For literal values, the expressions must contain single quotes. For example, the value for the `tableName` parameter can be `'GreenhouseTemperatureTable'` .
     * - For references, you must specify either variables or input values. For example, the value for the `tableName` parameter can be `$variable.ddbtableName` .
     * - For a substitution template, you must use `${}` , and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
     *
     * In the following example, the value for the `contentExpression` parameter in `Payload` uses a substitution template.
     *
     * `'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\": \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'`
     * - For a string concatenation, you must use `+` . A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
     *
     * In the following example, the value for the `tableName` parameter uses a string concatenation.
     *
     * `'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`
     *
     * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide* .
     *
     * The value for the `type` parameter in `Payload` must be `JSON` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodbv2.html
     */
    interface DynamoDBv2Property {
        /**
         * Information needed to configure the payload.
         *
         * By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodbv2.html#cfn-iotevents-alarmmodel-dynamodbv2-payload
         */
        readonly payload?: cdk.IResolvable | CfnAlarmModel.PayloadProperty;
        /**
         * The name of the DynamoDB table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodbv2.html#cfn-iotevents-alarmmodel-dynamodbv2-tablename
         */
        readonly tableName: string;
    }
    /**
     * Information needed to configure the payload.
     *
     * By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-payload.html
     */
    interface PayloadProperty {
        /**
         * The content of the payload.
         *
         * You can use a string expression that includes quoted strings ( `'<string>'` ), variables ( `$variable.<variable-name>` ), input values ( `$input.<input-name>.<path-to-datum>` ), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-payload.html#cfn-iotevents-alarmmodel-payload-contentexpression
         */
        readonly contentExpression: string;
        /**
         * The value of the payload type can be either `STRING` or `JSON` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-payload.html#cfn-iotevents-alarmmodel-payload-type
         */
        readonly type: string;
    }
    /**
     * Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iotevents.html
     */
    interface IotEventsProperty {
        /**
         * The name of the AWS IoT Events input where the data is sent.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iotevents.html#cfn-iotevents-alarmmodel-iotevents-inputname
         */
        readonly inputName: string;
        /**
         * You can configure the action payload when you send a message to an AWS IoT Events input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iotevents.html#cfn-iotevents-alarmmodel-iotevents-payload
         */
        readonly payload?: cdk.IResolvable | CfnAlarmModel.PayloadProperty;
    }
    /**
     * Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise .
     *
     * You must use expressions for all parameters in `IotSiteWiseAction` . The expressions accept literals, operators, functions, references, and substitutions templates.
     *
     * **Examples** - For literal values, the expressions must contain single quotes. For example, the value for the `propertyAlias` parameter can be `'/company/windfarm/3/turbine/7/temperature'` .
     * - For references, you must specify either variables or input values. For example, the value for the `assetId` parameter can be `$input.TurbineInput.assetId1` .
     * - For a substitution template, you must use `${}` , and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
     *
     * In the following example, the value for the `propertyAlias` parameter uses a substitution template.
     *
     * `'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/ ${$input.TemperatureInput.sensorData.turbineID}/temperature'`
     *
     * You must specify either `propertyAlias` or both `assetId` and `propertyId` to identify the target asset property in AWS IoT SiteWise .
     *
     * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iotsitewise.html
     */
    interface IotSiteWiseProperty {
        /**
         * The ID of the asset that has the specified property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iotsitewise.html#cfn-iotevents-alarmmodel-iotsitewise-assetid
         */
        readonly assetId?: string;
        /**
         * A unique identifier for this entry.
         *
         * You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iotsitewise.html#cfn-iotevents-alarmmodel-iotsitewise-entryid
         */
        readonly entryId?: string;
        /**
         * The alias of the asset property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iotsitewise.html#cfn-iotevents-alarmmodel-iotsitewise-propertyalias
         */
        readonly propertyAlias?: string;
        /**
         * The ID of the asset property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iotsitewise.html#cfn-iotevents-alarmmodel-iotsitewise-propertyid
         */
        readonly propertyId?: string;
        /**
         * The value to send to the asset property.
         *
         * This value contains timestamp, quality, and value (TQV) information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iotsitewise.html#cfn-iotevents-alarmmodel-iotsitewise-propertyvalue
         */
        readonly propertyValue?: CfnAlarmModel.AssetPropertyValueProperty | cdk.IResolvable;
    }
    /**
     * A structure that contains value information. For more information, see [AssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html) in the *AWS IoT SiteWise API Reference* .
     *
     * You must use expressions for all parameters in `AssetPropertyValue` . The expressions accept literals, operators, functions, references, and substitution templates.
     *
     * **Examples** - For literal values, the expressions must contain single quotes. For example, the value for the `quality` parameter can be `'GOOD'` .
     * - For references, you must specify either variables or input values. For example, the value for the `quality` parameter can be `$input.TemperatureInput.sensorData.quality` .
     *
     * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertyvalue.html
     */
    interface AssetPropertyValueProperty {
        /**
         * The quality of the asset property value.
         *
         * The value must be `'GOOD'` , `'BAD'` , or `'UNCERTAIN'` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertyvalue.html#cfn-iotevents-alarmmodel-assetpropertyvalue-quality
         */
        readonly quality?: string;
        /**
         * The timestamp associated with the asset property value.
         *
         * The default is the current event time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertyvalue.html#cfn-iotevents-alarmmodel-assetpropertyvalue-timestamp
         */
        readonly timestamp?: CfnAlarmModel.AssetPropertyTimestampProperty | cdk.IResolvable;
        /**
         * The value to send to an asset property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertyvalue.html#cfn-iotevents-alarmmodel-assetpropertyvalue-value
         */
        readonly value: CfnAlarmModel.AssetPropertyVariantProperty | cdk.IResolvable;
    }
    /**
     * A structure that contains an asset property value.
     *
     * For more information, see [Variant](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html) in the *AWS IoT SiteWise API Reference* .
     *
     * You must use expressions for all parameters in `AssetPropertyVariant` . The expressions accept literals, operators, functions, references, and substitution templates.
     *
     * **Examples** - For literal values, the expressions must contain single quotes. For example, the value for the `integerValue` parameter can be `'100'` .
     * - For references, you must specify either variables or parameters. For example, the value for the `booleanValue` parameter can be `$variable.offline` .
     * - For a substitution template, you must use `${}` , and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
     *
     * In the following example, the value for the `doubleValue` parameter uses a substitution template.
     *
     * `'${$input.TemperatureInput.sensorData.temperature * 6 / 5 + 32}'`
     *
     * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide* .
     *
     * You must specify one of the following value types, depending on the `dataType` of the specified asset property. For more information, see [AssetProperty](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetProperty.html) in the *AWS IoT SiteWise API Reference* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertyvariant.html
     */
    interface AssetPropertyVariantProperty {
        /**
         * The asset property value is a Boolean value that must be `'TRUE'` or `'FALSE'` .
         *
         * You must use an expression, and the evaluated result should be a Boolean value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertyvariant.html#cfn-iotevents-alarmmodel-assetpropertyvariant-booleanvalue
         */
        readonly booleanValue?: string;
        /**
         * The asset property value is a double.
         *
         * You must use an expression, and the evaluated result should be a double.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertyvariant.html#cfn-iotevents-alarmmodel-assetpropertyvariant-doublevalue
         */
        readonly doubleValue?: string;
        /**
         * The asset property value is an integer.
         *
         * You must use an expression, and the evaluated result should be an integer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertyvariant.html#cfn-iotevents-alarmmodel-assetpropertyvariant-integervalue
         */
        readonly integerValue?: string;
        /**
         * The asset property value is a string.
         *
         * You must use an expression, and the evaluated result should be a string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertyvariant.html#cfn-iotevents-alarmmodel-assetpropertyvariant-stringvalue
         */
        readonly stringValue?: string;
    }
    /**
     * A structure that contains timestamp information. For more information, see [TimeInNanos](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html) in the *AWS IoT SiteWise API Reference* .
     *
     * You must use expressions for all parameters in `AssetPropertyTimestamp` . The expressions accept literals, operators, functions, references, and substitution templates.
     *
     * **Examples** - For literal values, the expressions must contain single quotes. For example, the value for the `timeInSeconds` parameter can be `'1586400675'` .
     * - For references, you must specify either variables or input values. For example, the value for the `offsetInNanos` parameter can be `$variable.time` .
     * - For a substitution template, you must use `${}` , and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
     *
     * In the following example, the value for the `timeInSeconds` parameter uses a substitution template.
     *
     * `'${$input.TemperatureInput.sensorData.timestamp / 1000}'`
     *
     * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertytimestamp.html
     */
    interface AssetPropertyTimestampProperty {
        /**
         * The nanosecond offset converted from `timeInSeconds` .
         *
         * The valid range is between 0-999999999.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertytimestamp.html#cfn-iotevents-alarmmodel-assetpropertytimestamp-offsetinnanos
         */
        readonly offsetInNanos?: string;
        /**
         * The timestamp, in seconds, in the Unix epoch format.
         *
         * The valid range is between 1-31556889864403199.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertytimestamp.html#cfn-iotevents-alarmmodel-assetpropertytimestamp-timeinseconds
         */
        readonly timeInSeconds: string;
    }
    /**
     * Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-sqs.html
     */
    interface SqsProperty {
        /**
         * You can configure the action payload when you send a message to an Amazon SQS queue.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-sqs.html#cfn-iotevents-alarmmodel-sqs-payload
         */
        readonly payload?: cdk.IResolvable | CfnAlarmModel.PayloadProperty;
        /**
         * The URL of the SQS queue where the data is written.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-sqs.html#cfn-iotevents-alarmmodel-sqs-queueurl
         */
        readonly queueUrl: string;
        /**
         * Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue.
         *
         * Otherwise, set this to FALSE.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-sqs.html#cfn-iotevents-alarmmodel-sqs-usebase64
         */
        readonly useBase64?: boolean | cdk.IResolvable;
    }
    /**
     * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-firehose.html
     */
    interface FirehoseProperty {
        /**
         * The name of the Kinesis Data Firehose delivery stream where the data is written.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-firehose.html#cfn-iotevents-alarmmodel-firehose-deliverystreamname
         */
        readonly deliveryStreamName: string;
        /**
         * You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-firehose.html#cfn-iotevents-alarmmodel-firehose-payload
         */
        readonly payload?: cdk.IResolvable | CfnAlarmModel.PayloadProperty;
        /**
         * A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream.
         *
         * Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-firehose.html#cfn-iotevents-alarmmodel-firehose-separator
         */
        readonly separator?: string;
    }
    /**
     * Defines an action to write to the Amazon DynamoDB table that you created.
     *
     * The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html) . One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.
     *
     * You must use expressions for all parameters in `DynamoDBAction` . The expressions accept literals, operators, functions, references, and substitution templates.
     *
     * **Examples** - For literal values, the expressions must contain single quotes. For example, the value for the `hashKeyType` parameter can be `'STRING'` .
     * - For references, you must specify either variables or input values. For example, the value for the `hashKeyField` parameter can be `$input.GreenhouseInput.name` .
     * - For a substitution template, you must use `${}` , and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
     *
     * In the following example, the value for the `hashKeyValue` parameter uses a substitution template.
     *
     * `'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'`
     * - For a string concatenation, you must use `+` . A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
     *
     * In the following example, the value for the `tableName` parameter uses a string concatenation.
     *
     * `'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`
     *
     * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide* .
     *
     * If the defined payload type is a string, `DynamoDBAction` writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the `payloadField` parameter is `<payload-field>_raw` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodb.html
     */
    interface DynamoDBProperty {
        /**
         * The name of the hash key (also called the partition key).
         *
         * The `hashKeyField` value must match the partition key of the target DynamoDB table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodb.html#cfn-iotevents-alarmmodel-dynamodb-hashkeyfield
         */
        readonly hashKeyField: string;
        /**
         * The data type for the hash key (also called the partition key). You can specify the following values:.
         *
         * - `'STRING'` - The hash key is a string.
         * - `'NUMBER'` - The hash key is a number.
         *
         * If you don't specify `hashKeyType` , the default value is `'STRING'` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodb.html#cfn-iotevents-alarmmodel-dynamodb-hashkeytype
         */
        readonly hashKeyType?: string;
        /**
         * The value of the hash key (also called the partition key).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodb.html#cfn-iotevents-alarmmodel-dynamodb-hashkeyvalue
         */
        readonly hashKeyValue: string;
        /**
         * The type of operation to perform. You can specify the following values:.
         *
         * - `'INSERT'` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
         * - `'UPDATE'` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
         * - `'DELETE'` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
         *
         * If you don't specify this parameter, AWS IoT Events triggers the `'INSERT'` operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodb.html#cfn-iotevents-alarmmodel-dynamodb-operation
         */
        readonly operation?: string;
        /**
         * Information needed to configure the payload.
         *
         * By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodb.html#cfn-iotevents-alarmmodel-dynamodb-payload
         */
        readonly payload?: cdk.IResolvable | CfnAlarmModel.PayloadProperty;
        /**
         * The name of the DynamoDB column that receives the action payload.
         *
         * If you don't specify this parameter, the name of the DynamoDB column is `payload` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodb.html#cfn-iotevents-alarmmodel-dynamodb-payloadfield
         */
        readonly payloadField?: string;
        /**
         * The name of the range key (also called the sort key).
         *
         * The `rangeKeyField` value must match the sort key of the target DynamoDB table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodb.html#cfn-iotevents-alarmmodel-dynamodb-rangekeyfield
         */
        readonly rangeKeyField?: string;
        /**
         * The data type for the range key (also called the sort key), You can specify the following values:.
         *
         * - `'STRING'` - The range key is a string.
         * - `'NUMBER'` - The range key is number.
         *
         * If you don't specify `rangeKeyField` , the default value is `'STRING'` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodb.html#cfn-iotevents-alarmmodel-dynamodb-rangekeytype
         */
        readonly rangeKeyType?: string;
        /**
         * The value of the range key (also called the sort key).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodb.html#cfn-iotevents-alarmmodel-dynamodb-rangekeyvalue
         */
        readonly rangeKeyValue?: string;
        /**
         * The name of the DynamoDB table.
         *
         * The `tableName` value must match the table name of the target DynamoDB table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodb.html#cfn-iotevents-alarmmodel-dynamodb-tablename
         */
        readonly tableName: string;
    }
    /**
     * Information required to publish the MQTT message through the AWS IoT message broker.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iottopicpublish.html
     */
    interface IotTopicPublishProperty {
        /**
         * The MQTT topic of the message.
         *
         * You can use a string expression that includes variables ( `$variable.<variable-name>` ) and input values ( `$input.<input-name>.<path-to-datum>` ) as the topic string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iottopicpublish.html#cfn-iotevents-alarmmodel-iottopicpublish-mqtttopic
         */
        readonly mqttTopic: string;
        /**
         * You can configure the action payload when you publish a message to an AWS IoT Core topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iottopicpublish.html#cfn-iotevents-alarmmodel-iottopicpublish-payload
         */
        readonly payload?: cdk.IResolvable | CfnAlarmModel.PayloadProperty;
    }
    /**
     * Information required to publish the Amazon SNS message.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-sns.html
     */
    interface SnsProperty {
        /**
         * You can configure the action payload when you send a message as an Amazon SNS push notification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-sns.html#cfn-iotevents-alarmmodel-sns-payload
         */
        readonly payload?: cdk.IResolvable | CfnAlarmModel.PayloadProperty;
        /**
         * The ARN of the Amazon SNS target where the message is sent.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-sns.html#cfn-iotevents-alarmmodel-sns-targetarn
         */
        readonly targetArn: string;
    }
    /**
     * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-lambda.html
     */
    interface LambdaProperty {
        /**
         * The ARN of the Lambda function that is executed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-lambda.html#cfn-iotevents-alarmmodel-lambda-functionarn
         */
        readonly functionArn: string;
        /**
         * You can configure the action payload when you send a message to a Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-lambda.html#cfn-iotevents-alarmmodel-lambda-payload
         */
        readonly payload?: cdk.IResolvable | CfnAlarmModel.PayloadProperty;
    }
}
/**
 * Properties for defining a `CfnAlarmModel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-alarmmodel.html
 */
export interface CfnAlarmModelProps {
    /**
     * Contains the configuration information of alarm state changes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-alarmmodel.html#cfn-iotevents-alarmmodel-alarmcapabilities
     */
    readonly alarmCapabilities?: CfnAlarmModel.AlarmCapabilitiesProperty | cdk.IResolvable;
    /**
     * Contains information about one or more alarm actions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-alarmmodel.html#cfn-iotevents-alarmmodel-alarmeventactions
     */
    readonly alarmEventActions?: CfnAlarmModel.AlarmEventActionsProperty | cdk.IResolvable;
    /**
     * The description of the alarm model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-alarmmodel.html#cfn-iotevents-alarmmodel-alarmmodeldescription
     */
    readonly alarmModelDescription?: string;
    /**
     * The name of the alarm model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-alarmmodel.html#cfn-iotevents-alarmmodel-alarmmodelname
     */
    readonly alarmModelName?: string;
    /**
     * Defines when your alarm is invoked.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-alarmmodel.html#cfn-iotevents-alarmmodel-alarmrule
     */
    readonly alarmRule: CfnAlarmModel.AlarmRuleProperty | cdk.IResolvable;
    /**
     * An input attribute used as a key to create an alarm.
     *
     * AWS IoT Events routes [inputs](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html) associated with this key to the alarm.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-alarmmodel.html#cfn-iotevents-alarmmodel-key
     */
    readonly key?: string;
    /**
     * The ARN of the IAM role that allows the alarm to perform actions and access AWS resources.
     *
     * For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *AWS General Reference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-alarmmodel.html#cfn-iotevents-alarmmodel-rolearn
     */
    readonly roleArn: string;
    /**
     * A non-negative integer that reflects the severity level of the alarm.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-alarmmodel.html#cfn-iotevents-alarmmodel-severity
     */
    readonly severity?: number;
    /**
     * A list of key-value pairs that contain metadata for the alarm model.
     *
     * The tags help you manage the alarm model. For more information, see [Tagging your AWS IoT Events resources](https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html) in the *AWS IoT Events Developer Guide* .
     *
     * You can create up to 50 tags for one alarm model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-alarmmodel.html#cfn-iotevents-alarmmodel-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The AWS::IoTEvents::DetectorModel resource creates a detector model.
 *
 * You create a *detector model* (a model of your equipment or process) using *states* . For each state, you define conditional (Boolean) logic that evaluates the incoming inputs to detect significant events. When an event is detected, it can change the state or trigger custom-built or predefined actions using other AWS services. You can define additional events that trigger actions when entering or exiting a state and, optionally, when a condition is met. For more information, see [How to Use AWS IoT Events](https://docs.aws.amazon.com/iotevents/latest/developerguide/how-to-use-iotevents.html) in the *AWS IoT Events Developer Guide* .
 *
 * > When you successfully update a detector model (using the AWS IoT Events console, AWS IoT Events API or CLI commands, or AWS CloudFormation ) all detector instances created by the model are reset to their initial states. (The detector's `state` , and the values of any variables and timers are reset.)
 * >
 * > When you successfully update a detector model (using the AWS IoT Events console, AWS IoT Events API or CLI commands, or AWS CloudFormation ) the version number of the detector model is incremented. (A detector model with version number 1 before the update has version number 2 after the update succeeds.)
 * >
 * > If you attempt to update a detector model using AWS CloudFormation and the update does not succeed, the system may, in some cases, restore the original detector model. When this occurs, the detector model's version is incremented twice (for example, from version 1 to version 3) and the detector instances are reset.
 * >
 * > Also, be aware that if you attempt to update several detector models at once using AWS CloudFormation , some updates may succeed and others fail. In this case, the effects on each detector model's detector instances and version number depend on whether the update succeeded or failed, with the results as stated.
 *
 * @cloudformationResource AWS::IoTEvents::DetectorModel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-detectormodel.html
 */
export declare class CfnDetectorModel extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDetectorModel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDetectorModel;
    /**
     * Information that defines how a detector operates.
     */
    detectorModelDefinition: CfnDetectorModel.DetectorModelDefinitionProperty | cdk.IResolvable;
    /**
     * A brief description of the detector model.
     */
    detectorModelDescription?: string;
    /**
     * The name of the detector model.
     */
    detectorModelName?: string;
    /**
     * Information about the order in which events are evaluated and how actions are executed.
     */
    evaluationMethod?: string;
    /**
     * The value used to identify a detector instance.
     */
    key?: string;
    /**
     * The ARN of the role that grants permission to AWS IoT Events to perform its operations.
     */
    roleArn: string;
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
    constructor(scope: constructs.Construct, id: string, props: CfnDetectorModelProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDetectorModel {
    /**
     * Information that defines how a detector operates.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-detectormodeldefinition.html
     */
    interface DetectorModelDefinitionProperty {
        /**
         * The state that is entered at the creation of each detector (instance).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-detectormodeldefinition.html#cfn-iotevents-detectormodel-detectormodeldefinition-initialstatename
         */
        readonly initialStateName: string;
        /**
         * Information about the states of the detector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-detectormodeldefinition.html#cfn-iotevents-detectormodel-detectormodeldefinition-states
         */
        readonly states: Array<cdk.IResolvable | CfnDetectorModel.StateProperty> | cdk.IResolvable;
    }
    /**
     * Information that defines a state of a detector.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-state.html
     */
    interface StateProperty {
        /**
         * When entering this state, perform these `actions` if the `condition` is TRUE.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-state.html#cfn-iotevents-detectormodel-state-onenter
         */
        readonly onEnter?: cdk.IResolvable | CfnDetectorModel.OnEnterProperty;
        /**
         * When exiting this state, perform these `actions` if the specified `condition` is `TRUE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-state.html#cfn-iotevents-detectormodel-state-onexit
         */
        readonly onExit?: cdk.IResolvable | CfnDetectorModel.OnExitProperty;
        /**
         * When an input is received and the `condition` is TRUE, perform the specified `actions` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-state.html#cfn-iotevents-detectormodel-state-oninput
         */
        readonly onInput?: cdk.IResolvable | CfnDetectorModel.OnInputProperty;
        /**
         * The name of the state.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-state.html#cfn-iotevents-detectormodel-state-statename
         */
        readonly stateName: string;
    }
    /**
     * Specifies the actions performed when the `condition` evaluates to TRUE.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-oninput.html
     */
    interface OnInputProperty {
        /**
         * Specifies the actions performed when the `condition` evaluates to TRUE.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-oninput.html#cfn-iotevents-detectormodel-oninput-events
         */
        readonly events?: Array<CfnDetectorModel.EventProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Specifies the actions performed, and the next state entered, when a `condition` evaluates to TRUE.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-oninput.html#cfn-iotevents-detectormodel-oninput-transitionevents
         */
        readonly transitionEvents?: Array<cdk.IResolvable | CfnDetectorModel.TransitionEventProperty> | cdk.IResolvable;
    }
    /**
     * Specifies the `actions` to be performed when the `condition` evaluates to TRUE.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-event.html
     */
    interface EventProperty {
        /**
         * The actions to be performed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-event.html#cfn-iotevents-detectormodel-event-actions
         */
        readonly actions?: Array<CfnDetectorModel.ActionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Optional.
         *
         * The Boolean expression that, when TRUE, causes the `actions` to be performed. If not present, the actions are performed (=TRUE). If the expression result is not a Boolean value, the actions are not performed (=FALSE).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-event.html#cfn-iotevents-detectormodel-event-condition
         */
        readonly condition?: string;
        /**
         * The name of the event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-event.html#cfn-iotevents-detectormodel-event-eventname
         */
        readonly eventName: string;
    }
    /**
     * An action to be performed when the `condition` is TRUE.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-action.html
     */
    interface ActionProperty {
        /**
         * Information needed to clear the timer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-action.html#cfn-iotevents-detectormodel-action-cleartimer
         */
        readonly clearTimer?: CfnDetectorModel.ClearTimerProperty | cdk.IResolvable;
        /**
         * Writes to the DynamoDB table that you created.
         *
         * The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html) . One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *AWS IoT Events Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-action.html#cfn-iotevents-detectormodel-action-dynamodb
         */
        readonly dynamoDb?: CfnDetectorModel.DynamoDBProperty | cdk.IResolvable;
        /**
         * Writes to the DynamoDB table that you created.
         *
         * The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html) . A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *AWS IoT Events Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-action.html#cfn-iotevents-detectormodel-action-dynamodbv2
         */
        readonly dynamoDBv2?: CfnDetectorModel.DynamoDBv2Property | cdk.IResolvable;
        /**
         * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-action.html#cfn-iotevents-detectormodel-action-firehose
         */
        readonly firehose?: CfnDetectorModel.FirehoseProperty | cdk.IResolvable;
        /**
         * Sends AWS IoT Events input, which passes information about the detector model instance and the event that triggered the action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-action.html#cfn-iotevents-detectormodel-action-iotevents
         */
        readonly iotEvents?: CfnDetectorModel.IotEventsProperty | cdk.IResolvable;
        /**
         * Sends information about the detector model instance and the event that triggered the action to an asset property in AWS IoT SiteWise .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-action.html#cfn-iotevents-detectormodel-action-iotsitewise
         */
        readonly iotSiteWise?: CfnDetectorModel.IotSiteWiseProperty | cdk.IResolvable;
        /**
         * Publishes an MQTT message with the given topic to the AWS IoT message broker.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-action.html#cfn-iotevents-detectormodel-action-iottopicpublish
         */
        readonly iotTopicPublish?: CfnDetectorModel.IotTopicPublishProperty | cdk.IResolvable;
        /**
         * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-action.html#cfn-iotevents-detectormodel-action-lambda
         */
        readonly lambda?: cdk.IResolvable | CfnDetectorModel.LambdaProperty;
        /**
         * Information needed to reset the timer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-action.html#cfn-iotevents-detectormodel-action-resettimer
         */
        readonly resetTimer?: cdk.IResolvable | CfnDetectorModel.ResetTimerProperty;
        /**
         * Information needed to set the timer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-action.html#cfn-iotevents-detectormodel-action-settimer
         */
        readonly setTimer?: cdk.IResolvable | CfnDetectorModel.SetTimerProperty;
        /**
         * Sets a variable to a specified value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-action.html#cfn-iotevents-detectormodel-action-setvariable
         */
        readonly setVariable?: cdk.IResolvable | CfnDetectorModel.SetVariableProperty;
        /**
         * Sends an Amazon SNS message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-action.html#cfn-iotevents-detectormodel-action-sns
         */
        readonly sns?: cdk.IResolvable | CfnDetectorModel.SnsProperty;
        /**
         * Sends an Amazon SNS message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-action.html#cfn-iotevents-detectormodel-action-sqs
         */
        readonly sqs?: cdk.IResolvable | CfnDetectorModel.SqsProperty;
    }
    /**
     * Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iotevents.html
     */
    interface IotEventsProperty {
        /**
         * The name of the AWS IoT Events input where the data is sent.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iotevents.html#cfn-iotevents-detectormodel-iotevents-inputname
         */
        readonly inputName: string;
        /**
         * You can configure the action payload when you send a message to an AWS IoT Events input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iotevents.html#cfn-iotevents-detectormodel-iotevents-payload
         */
        readonly payload?: cdk.IResolvable | CfnDetectorModel.PayloadProperty;
    }
    /**
     * Information needed to configure the payload.
     *
     * By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-payload.html
     */
    interface PayloadProperty {
        /**
         * The content of the payload.
         *
         * You can use a string expression that includes quoted strings ( `'<string>'` ), variables ( `$variable.<variable-name>` ), input values ( `$input.<input-name>.<path-to-datum>` ), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-payload.html#cfn-iotevents-detectormodel-payload-contentexpression
         */
        readonly contentExpression: string;
        /**
         * The value of the payload type can be either `STRING` or `JSON` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-payload.html#cfn-iotevents-detectormodel-payload-type
         */
        readonly type: string;
    }
    /**
     * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-firehose.html
     */
    interface FirehoseProperty {
        /**
         * The name of the Kinesis Data Firehose delivery stream where the data is written.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-firehose.html#cfn-iotevents-detectormodel-firehose-deliverystreamname
         */
        readonly deliveryStreamName: string;
        /**
         * You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-firehose.html#cfn-iotevents-detectormodel-firehose-payload
         */
        readonly payload?: cdk.IResolvable | CfnDetectorModel.PayloadProperty;
        /**
         * A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream.
         *
         * Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-firehose.html#cfn-iotevents-detectormodel-firehose-separator
         */
        readonly separator?: string;
    }
    /**
     * Defines an action to write to the Amazon DynamoDB table that you created.
     *
     * The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html) . One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.
     *
     * You must use expressions for all parameters in `DynamoDBAction` . The expressions accept literals, operators, functions, references, and substitution templates.
     *
     * **Examples** - For literal values, the expressions must contain single quotes. For example, the value for the `hashKeyType` parameter can be `'STRING'` .
     * - For references, you must specify either variables or input values. For example, the value for the `hashKeyField` parameter can be `$input.GreenhouseInput.name` .
     * - For a substitution template, you must use `${}` , and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
     *
     * In the following example, the value for the `hashKeyValue` parameter uses a substitution template.
     *
     * `'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'`
     * - For a string concatenation, you must use `+` . A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
     *
     * In the following example, the value for the `tableName` parameter uses a string concatenation.
     *
     * `'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`
     *
     * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide* .
     *
     * If the defined payload type is a string, `DynamoDBAction` writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the `payloadField` parameter is `<payload-field>_raw` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodb.html
     */
    interface DynamoDBProperty {
        /**
         * The name of the hash key (also called the partition key).
         *
         * The `hashKeyField` value must match the partition key of the target DynamoDB table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodb.html#cfn-iotevents-detectormodel-dynamodb-hashkeyfield
         */
        readonly hashKeyField: string;
        /**
         * The data type for the hash key (also called the partition key). You can specify the following values:.
         *
         * - `'STRING'` - The hash key is a string.
         * - `'NUMBER'` - The hash key is a number.
         *
         * If you don't specify `hashKeyType` , the default value is `'STRING'` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodb.html#cfn-iotevents-detectormodel-dynamodb-hashkeytype
         */
        readonly hashKeyType?: string;
        /**
         * The value of the hash key (also called the partition key).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodb.html#cfn-iotevents-detectormodel-dynamodb-hashkeyvalue
         */
        readonly hashKeyValue: string;
        /**
         * The type of operation to perform. You can specify the following values:.
         *
         * - `'INSERT'` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
         * - `'UPDATE'` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
         * - `'DELETE'` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
         *
         * If you don't specify this parameter, AWS IoT Events triggers the `'INSERT'` operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodb.html#cfn-iotevents-detectormodel-dynamodb-operation
         */
        readonly operation?: string;
        /**
         * Information needed to configure the payload.
         *
         * By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodb.html#cfn-iotevents-detectormodel-dynamodb-payload
         */
        readonly payload?: cdk.IResolvable | CfnDetectorModel.PayloadProperty;
        /**
         * The name of the DynamoDB column that receives the action payload.
         *
         * If you don't specify this parameter, the name of the DynamoDB column is `payload` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodb.html#cfn-iotevents-detectormodel-dynamodb-payloadfield
         */
        readonly payloadField?: string;
        /**
         * The name of the range key (also called the sort key).
         *
         * The `rangeKeyField` value must match the sort key of the target DynamoDB table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodb.html#cfn-iotevents-detectormodel-dynamodb-rangekeyfield
         */
        readonly rangeKeyField?: string;
        /**
         * The data type for the range key (also called the sort key), You can specify the following values:.
         *
         * - `'STRING'` - The range key is a string.
         * - `'NUMBER'` - The range key is number.
         *
         * If you don't specify `rangeKeyField` , the default value is `'STRING'` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodb.html#cfn-iotevents-detectormodel-dynamodb-rangekeytype
         */
        readonly rangeKeyType?: string;
        /**
         * The value of the range key (also called the sort key).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodb.html#cfn-iotevents-detectormodel-dynamodb-rangekeyvalue
         */
        readonly rangeKeyValue?: string;
        /**
         * The name of the DynamoDB table.
         *
         * The `tableName` value must match the table name of the target DynamoDB table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodb.html#cfn-iotevents-detectormodel-dynamodb-tablename
         */
        readonly tableName: string;
    }
    /**
     * Information required to publish the MQTT message through the AWS IoT message broker.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iottopicpublish.html
     */
    interface IotTopicPublishProperty {
        /**
         * The MQTT topic of the message.
         *
         * You can use a string expression that includes variables ( `$variable.<variable-name>` ) and input values ( `$input.<input-name>.<path-to-datum>` ) as the topic string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iottopicpublish.html#cfn-iotevents-detectormodel-iottopicpublish-mqtttopic
         */
        readonly mqttTopic: string;
        /**
         * You can configure the action payload when you publish a message to an AWS IoT Core topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iottopicpublish.html#cfn-iotevents-detectormodel-iottopicpublish-payload
         */
        readonly payload?: cdk.IResolvable | CfnDetectorModel.PayloadProperty;
    }
    /**
     * Defines an action to write to the Amazon DynamoDB table that you created.
     *
     * The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html) . A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.
     *
     * You must use expressions for all parameters in `DynamoDBv2Action` . The expressions accept literals, operators, functions, references, and substitution templates.
     *
     * **Examples** - For literal values, the expressions must contain single quotes. For example, the value for the `tableName` parameter can be `'GreenhouseTemperatureTable'` .
     * - For references, you must specify either variables or input values. For example, the value for the `tableName` parameter can be `$variable.ddbtableName` .
     * - For a substitution template, you must use `${}` , and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
     *
     * In the following example, the value for the `contentExpression` parameter in `Payload` uses a substitution template.
     *
     * `'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\": \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'`
     * - For a string concatenation, you must use `+` . A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
     *
     * In the following example, the value for the `tableName` parameter uses a string concatenation.
     *
     * `'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`
     *
     * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide* .
     *
     * The value for the `type` parameter in `Payload` must be `JSON` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodbv2.html
     */
    interface DynamoDBv2Property {
        /**
         * Information needed to configure the payload.
         *
         * By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodbv2.html#cfn-iotevents-detectormodel-dynamodbv2-payload
         */
        readonly payload?: cdk.IResolvable | CfnDetectorModel.PayloadProperty;
        /**
         * The name of the DynamoDB table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodbv2.html#cfn-iotevents-detectormodel-dynamodbv2-tablename
         */
        readonly tableName: string;
    }
    /**
     * Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise .
     *
     * You must use expressions for all parameters in `IotSiteWiseAction` . The expressions accept literals, operators, functions, references, and substitutions templates.
     *
     * **Examples** - For literal values, the expressions must contain single quotes. For example, the value for the `propertyAlias` parameter can be `'/company/windfarm/3/turbine/7/temperature'` .
     * - For references, you must specify either variables or input values. For example, the value for the `assetId` parameter can be `$input.TurbineInput.assetId1` .
     * - For a substitution template, you must use `${}` , and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
     *
     * In the following example, the value for the `propertyAlias` parameter uses a substitution template.
     *
     * `'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/ ${$input.TemperatureInput.sensorData.turbineID}/temperature'`
     *
     * You must specify either `propertyAlias` or both `assetId` and `propertyId` to identify the target asset property in AWS IoT SiteWise .
     *
     * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iotsitewise.html
     */
    interface IotSiteWiseProperty {
        /**
         * The ID of the asset that has the specified property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iotsitewise.html#cfn-iotevents-detectormodel-iotsitewise-assetid
         */
        readonly assetId?: string;
        /**
         * A unique identifier for this entry.
         *
         * You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iotsitewise.html#cfn-iotevents-detectormodel-iotsitewise-entryid
         */
        readonly entryId?: string;
        /**
         * The alias of the asset property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iotsitewise.html#cfn-iotevents-detectormodel-iotsitewise-propertyalias
         */
        readonly propertyAlias?: string;
        /**
         * The ID of the asset property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iotsitewise.html#cfn-iotevents-detectormodel-iotsitewise-propertyid
         */
        readonly propertyId?: string;
        /**
         * The value to send to the asset property.
         *
         * This value contains timestamp, quality, and value (TQV) information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iotsitewise.html#cfn-iotevents-detectormodel-iotsitewise-propertyvalue
         */
        readonly propertyValue: CfnDetectorModel.AssetPropertyValueProperty | cdk.IResolvable;
    }
    /**
     * A structure that contains value information. For more information, see [AssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html) in the *AWS IoT SiteWise API Reference* .
     *
     * You must use expressions for all parameters in `AssetPropertyValue` . The expressions accept literals, operators, functions, references, and substitution templates.
     *
     * **Examples** - For literal values, the expressions must contain single quotes. For example, the value for the `quality` parameter can be `'GOOD'` .
     * - For references, you must specify either variables or input values. For example, the value for the `quality` parameter can be `$input.TemperatureInput.sensorData.quality` .
     *
     * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertyvalue.html
     */
    interface AssetPropertyValueProperty {
        /**
         * The quality of the asset property value.
         *
         * The value must be `'GOOD'` , `'BAD'` , or `'UNCERTAIN'` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertyvalue.html#cfn-iotevents-detectormodel-assetpropertyvalue-quality
         */
        readonly quality?: string;
        /**
         * The timestamp associated with the asset property value.
         *
         * The default is the current event time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertyvalue.html#cfn-iotevents-detectormodel-assetpropertyvalue-timestamp
         */
        readonly timestamp?: CfnDetectorModel.AssetPropertyTimestampProperty | cdk.IResolvable;
        /**
         * The value to send to an asset property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertyvalue.html#cfn-iotevents-detectormodel-assetpropertyvalue-value
         */
        readonly value: CfnDetectorModel.AssetPropertyVariantProperty | cdk.IResolvable;
    }
    /**
     * A structure that contains an asset property value.
     *
     * For more information, see [Variant](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html) in the *AWS IoT SiteWise API Reference* .
     *
     * You must use expressions for all parameters in `AssetPropertyVariant` . The expressions accept literals, operators, functions, references, and substitution templates.
     *
     * **Examples** - For literal values, the expressions must contain single quotes. For example, the value for the `integerValue` parameter can be `'100'` .
     * - For references, you must specify either variables or parameters. For example, the value for the `booleanValue` parameter can be `$variable.offline` .
     * - For a substitution template, you must use `${}` , and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
     *
     * In the following example, the value for the `doubleValue` parameter uses a substitution template.
     *
     * `'${$input.TemperatureInput.sensorData.temperature * 6 / 5 + 32}'`
     *
     * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide* .
     *
     * You must specify one of the following value types, depending on the `dataType` of the specified asset property. For more information, see [AssetProperty](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetProperty.html) in the *AWS IoT SiteWise API Reference* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertyvariant.html
     */
    interface AssetPropertyVariantProperty {
        /**
         * The asset property value is a Boolean value that must be `'TRUE'` or `'FALSE'` .
         *
         * You must use an expression, and the evaluated result should be a Boolean value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertyvariant.html#cfn-iotevents-detectormodel-assetpropertyvariant-booleanvalue
         */
        readonly booleanValue?: string;
        /**
         * The asset property value is a double.
         *
         * You must use an expression, and the evaluated result should be a double.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertyvariant.html#cfn-iotevents-detectormodel-assetpropertyvariant-doublevalue
         */
        readonly doubleValue?: string;
        /**
         * The asset property value is an integer.
         *
         * You must use an expression, and the evaluated result should be an integer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertyvariant.html#cfn-iotevents-detectormodel-assetpropertyvariant-integervalue
         */
        readonly integerValue?: string;
        /**
         * The asset property value is a string.
         *
         * You must use an expression, and the evaluated result should be a string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertyvariant.html#cfn-iotevents-detectormodel-assetpropertyvariant-stringvalue
         */
        readonly stringValue?: string;
    }
    /**
     * A structure that contains timestamp information. For more information, see [TimeInNanos](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html) in the *AWS IoT SiteWise API Reference* .
     *
     * You must use expressions for all parameters in `AssetPropertyTimestamp` . The expressions accept literals, operators, functions, references, and substitution templates.
     *
     * **Examples** - For literal values, the expressions must contain single quotes. For example, the value for the `timeInSeconds` parameter can be `'1586400675'` .
     * - For references, you must specify either variables or input values. For example, the value for the `offsetInNanos` parameter can be `$variable.time` .
     * - For a substitution template, you must use `${}` , and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
     *
     * In the following example, the value for the `timeInSeconds` parameter uses a substitution template.
     *
     * `'${$input.TemperatureInput.sensorData.timestamp / 1000}'`
     *
     * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertytimestamp.html
     */
    interface AssetPropertyTimestampProperty {
        /**
         * The nanosecond offset converted from `timeInSeconds` .
         *
         * The valid range is between 0-999999999.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertytimestamp.html#cfn-iotevents-detectormodel-assetpropertytimestamp-offsetinnanos
         */
        readonly offsetInNanos?: string;
        /**
         * The timestamp, in seconds, in the Unix epoch format.
         *
         * The valid range is between 1-31556889864403199.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertytimestamp.html#cfn-iotevents-detectormodel-assetpropertytimestamp-timeinseconds
         */
        readonly timeInSeconds: string;
    }
    /**
     * Information required to reset the timer.
     *
     * The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-resettimer.html
     */
    interface ResetTimerProperty {
        /**
         * The name of the timer to reset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-resettimer.html#cfn-iotevents-detectormodel-resettimer-timername
         */
        readonly timerName: string;
    }
    /**
     * Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-sqs.html
     */
    interface SqsProperty {
        /**
         * You can configure the action payload when you send a message to an Amazon SQS queue.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-sqs.html#cfn-iotevents-detectormodel-sqs-payload
         */
        readonly payload?: cdk.IResolvable | CfnDetectorModel.PayloadProperty;
        /**
         * The URL of the SQS queue where the data is written.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-sqs.html#cfn-iotevents-detectormodel-sqs-queueurl
         */
        readonly queueUrl: string;
        /**
         * Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue.
         *
         * Otherwise, set this to FALSE.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-sqs.html#cfn-iotevents-detectormodel-sqs-usebase64
         */
        readonly useBase64?: boolean | cdk.IResolvable;
    }
    /**
     * Information needed to set the timer.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-settimer.html
     */
    interface SetTimerProperty {
        /**
         * The duration of the timer, in seconds.
         *
         * You can use a string expression that includes numbers, variables ( `$variable.<variable-name>` ), and input values ( `$input.<input-name>.<path-to-datum>` ) as the duration. The range of the duration is 1-31622400 seconds. To ensure accuracy, the minimum duration is 60 seconds. The evaluated result of the duration is rounded down to the nearest whole number.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-settimer.html#cfn-iotevents-detectormodel-settimer-durationexpression
         */
        readonly durationExpression?: string;
        /**
         * The number of seconds until the timer expires.
         *
         * The minimum value is 60 seconds to ensure accuracy. The maximum value is 31622400 seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-settimer.html#cfn-iotevents-detectormodel-settimer-seconds
         */
        readonly seconds?: number;
        /**
         * The name of the timer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-settimer.html#cfn-iotevents-detectormodel-settimer-timername
         */
        readonly timerName: string;
    }
    /**
     * Information required to publish the Amazon SNS message.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-sns.html
     */
    interface SnsProperty {
        /**
         * You can configure the action payload when you send a message as an Amazon SNS push notification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-sns.html#cfn-iotevents-detectormodel-sns-payload
         */
        readonly payload?: cdk.IResolvable | CfnDetectorModel.PayloadProperty;
        /**
         * The ARN of the Amazon SNS target where the message is sent.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-sns.html#cfn-iotevents-detectormodel-sns-targetarn
         */
        readonly targetArn: string;
    }
    /**
     * Information needed to clear the timer.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-cleartimer.html
     */
    interface ClearTimerProperty {
        /**
         * The name of the timer to clear.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-cleartimer.html#cfn-iotevents-detectormodel-cleartimer-timername
         */
        readonly timerName: string;
    }
    /**
     * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-lambda.html
     */
    interface LambdaProperty {
        /**
         * The ARN of the Lambda function that is executed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-lambda.html#cfn-iotevents-detectormodel-lambda-functionarn
         */
        readonly functionArn: string;
        /**
         * You can configure the action payload when you send a message to a Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-lambda.html#cfn-iotevents-detectormodel-lambda-payload
         */
        readonly payload?: cdk.IResolvable | CfnDetectorModel.PayloadProperty;
    }
    /**
     * Information about the variable and its new value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-setvariable.html
     */
    interface SetVariableProperty {
        /**
         * The new value of the variable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-setvariable.html#cfn-iotevents-detectormodel-setvariable-value
         */
        readonly value: string;
        /**
         * The name of the variable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-setvariable.html#cfn-iotevents-detectormodel-setvariable-variablename
         */
        readonly variableName: string;
    }
    /**
     * Specifies the actions performed and the next state entered when a `condition` evaluates to TRUE.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-transitionevent.html
     */
    interface TransitionEventProperty {
        /**
         * The actions to be performed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-transitionevent.html#cfn-iotevents-detectormodel-transitionevent-actions
         */
        readonly actions?: Array<CfnDetectorModel.ActionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Required.
         *
         * A Boolean expression that when TRUE causes the actions to be performed and the `nextState` to be entered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-transitionevent.html#cfn-iotevents-detectormodel-transitionevent-condition
         */
        readonly condition: string;
        /**
         * The name of the transition event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-transitionevent.html#cfn-iotevents-detectormodel-transitionevent-eventname
         */
        readonly eventName: string;
        /**
         * The next state to enter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-transitionevent.html#cfn-iotevents-detectormodel-transitionevent-nextstate
         */
        readonly nextState: string;
    }
    /**
     * When exiting this state, perform these `actions` if the specified `condition` is `TRUE` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-onexit.html
     */
    interface OnExitProperty {
        /**
         * Specifies the `actions` that are performed when the state is exited and the `condition` is `TRUE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-onexit.html#cfn-iotevents-detectormodel-onexit-events
         */
        readonly events?: Array<CfnDetectorModel.EventProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * When entering this state, perform these `actions` if the `condition` is TRUE.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-onenter.html
     */
    interface OnEnterProperty {
        /**
         * Specifies the actions that are performed when the state is entered and the `condition` is `TRUE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-onenter.html#cfn-iotevents-detectormodel-onenter-events
         */
        readonly events?: Array<CfnDetectorModel.EventProperty | cdk.IResolvable> | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnDetectorModel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-detectormodel.html
 */
export interface CfnDetectorModelProps {
    /**
     * Information that defines how a detector operates.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-detectormodel.html#cfn-iotevents-detectormodel-detectormodeldefinition
     */
    readonly detectorModelDefinition: CfnDetectorModel.DetectorModelDefinitionProperty | cdk.IResolvable;
    /**
     * A brief description of the detector model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-detectormodel.html#cfn-iotevents-detectormodel-detectormodeldescription
     */
    readonly detectorModelDescription?: string;
    /**
     * The name of the detector model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-detectormodel.html#cfn-iotevents-detectormodel-detectormodelname
     */
    readonly detectorModelName?: string;
    /**
     * Information about the order in which events are evaluated and how actions are executed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-detectormodel.html#cfn-iotevents-detectormodel-evaluationmethod
     */
    readonly evaluationMethod?: string;
    /**
     * The value used to identify a detector instance.
     *
     * When a device or system sends input, a new detector instance with a unique key value is created. AWS IoT Events can continue to route input to its corresponding detector instance based on this identifying information.
     *
     * This parameter uses a JSON-path expression to select the attribute-value pair in the message payload that is used for identification. To route the message to the correct detector instance, the device must send a message payload that contains the same attribute-value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-detectormodel.html#cfn-iotevents-detectormodel-key
     */
    readonly key?: string;
    /**
     * The ARN of the role that grants permission to AWS IoT Events to perform its operations.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-detectormodel.html#cfn-iotevents-detectormodel-rolearn
     */
    readonly roleArn: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-detectormodel.html#cfn-iotevents-detectormodel-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The AWS::IoTEvents::Input resource creates an input.
 *
 * To monitor your devices and processes, they must have a way to get telemetry data into AWS IoT Events . This is done by sending messages as *inputs* to AWS IoT Events . For more information, see [How to Use AWS IoT Events](https://docs.aws.amazon.com/iotevents/latest/developerguide/how-to-use-iotevents.html) in the *AWS IoT Events Developer Guide* .
 *
 * @cloudformationResource AWS::IoTEvents::Input
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-input.html
 */
export declare class CfnInput extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInput from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInput;
    /**
     * The definition of the input.
     */
    inputDefinition: CfnInput.InputDefinitionProperty | cdk.IResolvable;
    /**
     * A brief description of the input.
     */
    inputDescription?: string;
    /**
     * The name of the input.
     */
    inputName?: string;
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
    constructor(scope: constructs.Construct, id: string, props: CfnInputProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnInput {
    /**
     * The definition of the input.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-input-inputdefinition.html
     */
    interface InputDefinitionProperty {
        /**
         * The attributes from the JSON payload that are made available by the input.
         *
         * Inputs are derived from messages sent to the AWS IoT Events system using `BatchPutMessage` . Each such message contains a JSON payload, and those attributes (and their paired values) specified here are available for use in the `condition` expressions used by detectors that monitor this input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-input-inputdefinition.html#cfn-iotevents-input-inputdefinition-attributes
         */
        readonly attributes: Array<CfnInput.AttributeProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * The attributes from the JSON payload that are made available by the input.
     *
     * Inputs are derived from messages sent to the AWS IoT Events system using `BatchPutMessage` . Each such message contains a JSON payload. Those attributes (and their paired values) specified here are available for use in the `condition` expressions used by detectors.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-input-attribute.html
     */
    interface AttributeProperty {
        /**
         * An expression that specifies an attribute-value pair in a JSON structure.
         *
         * Use this to specify an attribute from the JSON payload that is made available by the input. Inputs are derived from messages sent to AWS IoT Events ( `BatchPutMessage` ). Each such message contains a JSON payload. The attribute (and its paired value) specified here are available for use in the `condition` expressions used by detectors.
         *
         * Syntax: `<field-name>.<field-name>...`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-input-attribute.html#cfn-iotevents-input-attribute-jsonpath
         */
        readonly jsonPath: string;
    }
}
/**
 * Properties for defining a `CfnInput`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-input.html
 */
export interface CfnInputProps {
    /**
     * The definition of the input.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-input.html#cfn-iotevents-input-inputdefinition
     */
    readonly inputDefinition: CfnInput.InputDefinitionProperty | cdk.IResolvable;
    /**
     * A brief description of the input.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-input.html#cfn-iotevents-input-inputdescription
     */
    readonly inputDescription?: string;
    /**
     * The name of the input.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-input.html#cfn-iotevents-input-inputname
     */
    readonly inputName?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-input.html#cfn-iotevents-input-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
