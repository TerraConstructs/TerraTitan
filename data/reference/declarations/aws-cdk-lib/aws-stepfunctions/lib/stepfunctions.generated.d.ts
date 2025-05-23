import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * An activity is a task that you write in any programming language and host on any machine that has access to AWS Step Functions .
 *
 * Activities must poll Step Functions using the `GetActivityTask` API action and respond using `SendTask*` API actions. This function makes Step Functions aware of your activity and returns an identifier for use in a state machine and when polling from the activity.
 *
 * For information about creating an activity, see [Creating an Activity State Machine](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-creating-activity-state-machine.html) in the *AWS Step Functions Developer Guide* and [CreateActivity](https://docs.aws.amazon.com/step-functions/latest/apireference/API_CreateActivity.html) in the *AWS Step Functions API Reference* .
 *
 * @cloudformationResource AWS::StepFunctions::Activity
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html
 */
export declare class CfnActivity extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnActivity from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnActivity;
    /**
     * Returns the ARN of the resource.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Returns the name of the activity. For example:
     *
     * `{ "Fn::GetAtt": ["MyActivity", "Name"] }`
     *
     * Returns a value similar to the following:
     *
     * `myActivity`
     *
     * For more information about using `Fn::GetAtt` , see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html) .
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * Encryption configuration for the activity.
     */
    encryptionConfiguration?: CfnActivity.EncryptionConfigurationProperty | cdk.IResolvable;
    /**
     * The name of the activity.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The list of tags to add to a resource.
     */
    tagsRaw?: Array<CfnActivity.TagsEntryProperty>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnActivityProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnActivity {
    /**
     * The `TagsEntry` property specifies *tags* to identify an activity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-activity-tagsentry.html
     */
    interface TagsEntryProperty {
        /**
         * The `key` for a key-value pair in a tag entry.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-activity-tagsentry.html#cfn-stepfunctions-activity-tagsentry-key
         */
        readonly key: string;
        /**
         * The `value` for a key-value pair in a tag entry.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-activity-tagsentry.html#cfn-stepfunctions-activity-tagsentry-value
         */
        readonly value: string;
    }
    /**
     * Settings to configure server-side encryption for an activity.
     *
     * By default, Step Functions provides transparent server-side encryption. With this configuration, you can specify a customer managed AWS KMS key for encryption.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-activity-encryptionconfiguration.html
     */
    interface EncryptionConfigurationProperty {
        /**
         * Maximum duration that Step Functions will reuse data keys.
         *
         * When the period expires, Step Functions will call `GenerateDataKey` . Only applies to customer managed keys.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-activity-encryptionconfiguration.html#cfn-stepfunctions-activity-encryptionconfiguration-kmsdatakeyreuseperiodseconds
         */
        readonly kmsDataKeyReusePeriodSeconds?: number;
        /**
         * An alias, alias ARN, key ID, or key ARN of a symmetric encryption AWS KMS key to encrypt data.
         *
         * To specify a AWS KMS key in a different AWS account, you must use the key ARN or alias ARN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-activity-encryptionconfiguration.html#cfn-stepfunctions-activity-encryptionconfiguration-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * Encryption option for an activity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-activity-encryptionconfiguration.html#cfn-stepfunctions-activity-encryptionconfiguration-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnActivity`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html
 */
export interface CfnActivityProps {
    /**
     * Encryption configuration for the activity.
     *
     * Activity configuration is immutable, and resource names must be unique. To set customer managed keys for encryption, you must create a *new Activity* . If you attempt to change the configuration in your CFN template for an existing activity, you will receive an `ActivityAlreadyExists` exception.
     *
     * To update your activity to include customer managed keys, set a new activity name within your AWS CloudFormation template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html#cfn-stepfunctions-activity-encryptionconfiguration
     */
    readonly encryptionConfiguration?: CfnActivity.EncryptionConfigurationProperty | cdk.IResolvable;
    /**
     * The name of the activity.
     *
     * A name must *not* contain:
     *
     * - white space
     * - brackets `< > { } [ ]`
     * - wildcard characters `? *`
     * - special characters `" # % \ ^ | ~ ` $ & , ; : /`
     * - control characters ( `U+0000-001F` , `U+007F-009F` )
     *
     * To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html#cfn-stepfunctions-activity-name
     */
    readonly name: string;
    /**
     * The list of tags to add to a resource.
     *
     * Tags may only contain Unicode letters, digits, white space, or these symbols: `_ . : / = + - @` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html#cfn-stepfunctions-activity-tags
     */
    readonly tags?: Array<CfnActivity.TagsEntryProperty>;
}
/**
 * Provisions a state machine.
 *
 * A state machine consists of a collection of states that can do work ( `Task` states), determine to which states to transition next ( `Choice` states), stop an execution with an error ( `Fail` states), and so on. State machines are specified using a JSON-based, structured language.
 *
 * @cloudformationResource AWS::StepFunctions::StateMachine
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html
 */
export declare class CfnStateMachine extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStateMachine from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStateMachine;
    /**
     * Returns the ARN of the resource.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Returns the name of the state machine. For example:
     *
     * `{ "Fn::GetAtt": ["MyStateMachine", "Name"] }`
     *
     * Returns the name of your state machine:
     *
     * `HelloWorld-StateMachine`
     *
     * If you did not specify the name it will be similar to the following:
     *
     * `MyStateMachine-1234abcdefgh`
     *
     * For more information about using `Fn::GetAtt` , see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html) .
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * Identifier for a state machine revision, which is an immutable, read-only snapshot of a state machine’s definition and configuration.
     *
     * @cloudformationAttribute StateMachineRevisionId
     */
    readonly attrStateMachineRevisionId: string;
    /**
     * The Amazon States Language definition of the state machine.
     */
    definition?: any | cdk.IResolvable;
    /**
     * The name of the S3 bucket where the state machine definition is stored.
     */
    definitionS3Location?: cdk.IResolvable | CfnStateMachine.S3LocationProperty;
    /**
     * The Amazon States Language definition of the state machine.
     */
    definitionString?: string;
    /**
     * A map (string to string) that specifies the mappings for placeholder variables in the state machine definition.
     */
    definitionSubstitutions?: cdk.IResolvable | Record<string, string>;
    /**
     * Encryption configuration for the state machine.
     */
    encryptionConfiguration?: CfnStateMachine.EncryptionConfigurationProperty | cdk.IResolvable;
    /**
     * Defines what execution history events are logged and where they are logged.
     */
    loggingConfiguration?: cdk.IResolvable | CfnStateMachine.LoggingConfigurationProperty;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to use for this state machine.
     */
    roleArn: string;
    /**
     * The name of the state machine.
     */
    stateMachineName?: string;
    /**
     * Determines whether a `STANDARD` or `EXPRESS` state machine is created.
     */
    stateMachineType?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The list of tags to add to a resource.
     */
    tagsRaw?: Array<CfnStateMachine.TagsEntryProperty>;
    /**
     * Selects whether or not the state machine's AWS X-Ray tracing is enabled.
     */
    tracingConfiguration?: cdk.IResolvable | CfnStateMachine.TracingConfigurationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStateMachineProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnStateMachine {
    /**
     * Defines what execution history events are logged and where they are logged.
     *
     * Step Functions provides the log levels — `OFF` , `ALL` , `ERROR` , and `FATAL` . No event types log when set to `OFF` and all event types do when set to `ALL` .
     *
     * > By default, the `level` is set to `OFF` . For more information see [Log Levels](https://docs.aws.amazon.com/step-functions/latest/dg/cloudwatch-log-level.html) in the AWS Step Functions User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-loggingconfiguration.html
     */
    interface LoggingConfigurationProperty {
        /**
         * An array of objects that describes where your execution history events will be logged.
         *
         * Limited to size 1. Required, if your log level is not set to `OFF` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-loggingconfiguration.html#cfn-stepfunctions-statemachine-loggingconfiguration-destinations
         */
        readonly destinations?: Array<cdk.IResolvable | CfnStateMachine.LogDestinationProperty> | cdk.IResolvable;
        /**
         * Determines whether execution data is included in your log.
         *
         * When set to `false` , data is excluded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-loggingconfiguration.html#cfn-stepfunctions-statemachine-loggingconfiguration-includeexecutiondata
         */
        readonly includeExecutionData?: boolean | cdk.IResolvable;
        /**
         * Defines which category of execution history events are logged.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-loggingconfiguration.html#cfn-stepfunctions-statemachine-loggingconfiguration-level
         */
        readonly level?: string;
    }
    /**
     * Defines a destination for `LoggingConfiguration` .
     *
     * > For more information on logging with `EXPRESS` workflows, see [Logging Express Workflows Using CloudWatch Logs](https://docs.aws.amazon.com/step-functions/latest/dg/cw-logs.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-logdestination.html
     */
    interface LogDestinationProperty {
        /**
         * An object describing a CloudWatch log group.
         *
         * For more information, see [AWS::Logs::LogGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html) in the AWS CloudFormation User Guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-logdestination.html#cfn-stepfunctions-statemachine-logdestination-cloudwatchlogsloggroup
         */
        readonly cloudWatchLogsLogGroup?: CfnStateMachine.CloudWatchLogsLogGroupProperty | cdk.IResolvable;
    }
    /**
     * Defines a CloudWatch log group.
     *
     * > For more information see [Standard Versus Express Workflows](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-standard-vs-express.html) in the AWS Step Functions Developer Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-cloudwatchlogsloggroup.html
     */
    interface CloudWatchLogsLogGroupProperty {
        /**
         * The ARN of the the CloudWatch log group to which you want your logs emitted to.
         *
         * The ARN must end with `:*`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-cloudwatchlogsloggroup.html#cfn-stepfunctions-statemachine-cloudwatchlogsloggroup-loggrouparn
         */
        readonly logGroupArn?: string;
    }
    /**
     * Defines the S3 bucket location where a state machine definition is stored.
     *
     * The state machine definition must be a JSON or YAML file.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-s3location.html
     */
    interface S3LocationProperty {
        /**
         * The name of the S3 bucket where the state machine definition JSON or YAML file is stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-s3location.html#cfn-stepfunctions-statemachine-s3location-bucket
         */
        readonly bucket: string;
        /**
         * The name of the state machine definition file (Amazon S3 object name).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-s3location.html#cfn-stepfunctions-statemachine-s3location-key
         */
        readonly key: string;
        /**
         * For versioning-enabled buckets, a specific version of the state machine definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-s3location.html#cfn-stepfunctions-statemachine-s3location-version
         */
        readonly version?: string;
    }
    /**
     * The `TagsEntry` property specifies *tags* to identify a state machine.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-tagsentry.html
     */
    interface TagsEntryProperty {
        /**
         * The `key` for a key-value pair in a tag entry.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-tagsentry.html#cfn-stepfunctions-statemachine-tagsentry-key
         */
        readonly key: string;
        /**
         * The `value` for a key-value pair in a tag entry.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-tagsentry.html#cfn-stepfunctions-statemachine-tagsentry-value
         */
        readonly value: string;
    }
    /**
     * Selects whether or not the state machine's AWS X-Ray tracing is enabled.
     *
     * To configure your state machine to send trace data to X-Ray, set `Enabled` to `true` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-tracingconfiguration.html
     */
    interface TracingConfigurationProperty {
        /**
         * When set to `true` , X-Ray tracing is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-tracingconfiguration.html#cfn-stepfunctions-statemachine-tracingconfiguration-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
    }
    /**
     * Settings to configure server-side encryption for a state machine.
     *
     * By default, Step Functions provides transparent server-side encryption. With this configuration, you can specify a customer managed AWS KMS key for encryption.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-encryptionconfiguration.html
     */
    interface EncryptionConfigurationProperty {
        /**
         * Maximum duration that Step Functions will reuse data keys.
         *
         * When the period expires, Step Functions will call `GenerateDataKey` . Only applies to customer managed keys.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-encryptionconfiguration.html#cfn-stepfunctions-statemachine-encryptionconfiguration-kmsdatakeyreuseperiodseconds
         */
        readonly kmsDataKeyReusePeriodSeconds?: number;
        /**
         * An alias, alias ARN, key ID, or key ARN of a symmetric encryption AWS KMS key to encrypt data.
         *
         * To specify a AWS KMS key in a different AWS account, you must use the key ARN or alias ARN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-encryptionconfiguration.html#cfn-stepfunctions-statemachine-encryptionconfiguration-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * Encryption option for a state machine.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-encryptionconfiguration.html#cfn-stepfunctions-statemachine-encryptionconfiguration-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnStateMachine`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html
 */
export interface CfnStateMachineProps {
    /**
     * The Amazon States Language definition of the state machine.
     *
     * The state machine definition must be in JSON or YAML, and the format of the object must match the format of your CloudFormation template file. See [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-definition
     */
    readonly definition?: any | cdk.IResolvable;
    /**
     * The name of the S3 bucket where the state machine definition is stored.
     *
     * The state machine definition must be a JSON or YAML file.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-definitions3location
     */
    readonly definitionS3Location?: cdk.IResolvable | CfnStateMachine.S3LocationProperty;
    /**
     * The Amazon States Language definition of the state machine.
     *
     * The state machine definition must be in JSON. See [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-definitionstring
     */
    readonly definitionString?: string;
    /**
     * A map (string to string) that specifies the mappings for placeholder variables in the state machine definition.
     *
     * This enables the customer to inject values obtained at runtime, for example from intrinsic functions, in the state machine definition. Variables can be template parameter names, resource logical IDs, resource attributes, or a variable in a key-value map.
     *
     * Substitutions must follow the syntax: `${key_name}` or `${variable_1,variable_2,...}` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-definitionsubstitutions
     */
    readonly definitionSubstitutions?: cdk.IResolvable | Record<string, string>;
    /**
     * Encryption configuration for the state machine.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-encryptionconfiguration
     */
    readonly encryptionConfiguration?: CfnStateMachine.EncryptionConfigurationProperty | cdk.IResolvable;
    /**
     * Defines what execution history events are logged and where they are logged.
     *
     * > By default, the `level` is set to `OFF` . For more information see [Log Levels](https://docs.aws.amazon.com/step-functions/latest/dg/cloudwatch-log-level.html) in the AWS Step Functions User Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-loggingconfiguration
     */
    readonly loggingConfiguration?: cdk.IResolvable | CfnStateMachine.LoggingConfigurationProperty;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to use for this state machine.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-rolearn
     */
    readonly roleArn: string;
    /**
     * The name of the state machine.
     *
     * A name must *not* contain:
     *
     * - white space
     * - brackets `< > { } [ ]`
     * - wildcard characters `? *`
     * - special characters `" # % \ ^ | ~ ` $ & , ; : /`
     * - control characters ( `U+0000-001F` , `U+007F-009F` )
     *
     * > If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-statemachinename
     */
    readonly stateMachineName?: string;
    /**
     * Determines whether a `STANDARD` or `EXPRESS` state machine is created.
     *
     * The default is `STANDARD` . You cannot update the `type` of a state machine once it has been created. For more information on `STANDARD` and `EXPRESS` workflows, see [Standard Versus Express Workflows](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-standard-vs-express.html) in the AWS Step Functions Developer Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-statemachinetype
     */
    readonly stateMachineType?: string;
    /**
     * The list of tags to add to a resource.
     *
     * Tags may only contain Unicode letters, digits, white space, or these symbols: `_ . : / = + - @` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-tags
     */
    readonly tags?: Array<CfnStateMachine.TagsEntryProperty>;
    /**
     * Selects whether or not the state machine's AWS X-Ray tracing is enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-tracingconfiguration
     */
    readonly tracingConfiguration?: cdk.IResolvable | CfnStateMachine.TracingConfigurationProperty;
}
/**
 * Represents a state machine [alias](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html) . An alias routes traffic to one or two versions of the same state machine.
 *
 * You can create up to 100 aliases for each state machine.
 *
 * @cloudformationResource AWS::StepFunctions::StateMachineAlias
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachinealias.html
 */
export declare class CfnStateMachineAlias extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStateMachineAlias from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStateMachineAlias;
    /**
     * Returns the ARN of the state machine alias. For example, `arn:aws:states:us-east-1:123456789012:stateMachine:myStateMachine:PROD` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The settings that enable gradual state machine deployments.
     */
    deploymentPreference?: CfnStateMachineAlias.DeploymentPreferenceProperty | cdk.IResolvable;
    /**
     * An optional description of the state machine alias.
     */
    description?: string;
    /**
     * The name of the state machine alias.
     */
    name?: string;
    /**
     * The routing configuration of an alias.
     */
    routingConfiguration?: Array<cdk.IResolvable | CfnStateMachineAlias.RoutingConfigurationVersionProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnStateMachineAliasProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnStateMachineAlias {
    /**
     * The state machine version to which you want to route the execution traffic.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachinealias-routingconfigurationversion.html
     */
    interface RoutingConfigurationVersionProperty {
        /**
         * The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the routing configuration.
         *
         * If you specify the ARN of a second version, it must belong to the same state machine as the first version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachinealias-routingconfigurationversion.html#cfn-stepfunctions-statemachinealias-routingconfigurationversion-statemachineversionarn
         */
        readonly stateMachineVersionArn: string;
        /**
         * The percentage of traffic you want to route to the state machine version.
         *
         * The sum of the weights in the routing configuration must be equal to 100.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachinealias-routingconfigurationversion.html#cfn-stepfunctions-statemachinealias-routingconfigurationversion-weight
         */
        readonly weight: number;
    }
    /**
     * Enables gradual state machine deployments.
     *
     * CloudFormation automatically shifts traffic from the version the alias currently points to, to a new state machine version that you specify.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachinealias-deploymentpreference.html
     */
    interface DeploymentPreferenceProperty {
        /**
         * A list of Amazon CloudWatch alarm names to be monitored during the deployment.
         *
         * The deployment fails and rolls back if any of these alarms go into the `ALARM` state.
         *
         * > Amazon CloudWatch considers nonexistent alarms to have an `OK` state. If you provide an invalid alarm name or provide the ARN of an alarm instead of its name, your deployment may not roll back correctly.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachinealias-deploymentpreference.html#cfn-stepfunctions-statemachinealias-deploymentpreference-alarms
         */
        readonly alarms?: Array<string>;
        /**
         * The time in minutes between each traffic shifting increment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachinealias-deploymentpreference.html#cfn-stepfunctions-statemachinealias-deploymentpreference-interval
         */
        readonly interval?: number;
        /**
         * The percentage of traffic to shift to the new version in each increment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachinealias-deploymentpreference.html#cfn-stepfunctions-statemachinealias-deploymentpreference-percentage
         */
        readonly percentage?: number;
        /**
         * The Amazon Resource Name (ARN) of the [`AWS::StepFunctions::StateMachineVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachineversion.html) resource that will be the final version to which the alias points to when the traffic shifting is complete.
         *
         * While performing gradual deployments, you can only provide a single state machine version ARN. To explicitly set version weights in a CloudFormation template, use `RoutingConfiguration` instead.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachinealias-deploymentpreference.html#cfn-stepfunctions-statemachinealias-deploymentpreference-statemachineversionarn
         */
        readonly stateMachineVersionArn: string;
        /**
         * The type of deployment you want to perform. You can specify one of the following types:.
         *
         * - `LINEAR` - Shifts traffic to the new version in equal increments with an equal number of minutes between each increment.
         *
         * For example, if you specify the increment percent as `20` with an interval of `600` minutes, this deployment increases traffic by 20 percent every 600 minutes until the new version receives 100 percent of the traffic. This deployment immediately rolls back the new version if any CloudWatch alarms are triggered.
         * - `ALL_AT_ONCE` - Shifts 100 percent of traffic to the new version immediately. CloudFormation monitors the new version and rolls it back automatically to the previous version if any CloudWatch alarms are triggered.
         * - `CANARY` - Shifts traffic in two increments.
         *
         * In the first increment, a small percentage of traffic, for example, 10 percent is shifted to the new version. In the second increment, before a specified time interval in seconds gets over, the remaining traffic is shifted to the new version. The shift to the new version for the remaining traffic takes place only if no CloudWatch alarms are triggered during the specified time interval.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachinealias-deploymentpreference.html#cfn-stepfunctions-statemachinealias-deploymentpreference-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnStateMachineAlias`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachinealias.html
 */
export interface CfnStateMachineAliasProps {
    /**
     * The settings that enable gradual state machine deployments.
     *
     * These settings include [Alarms](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachinealias-deploymentpreference.html#cfn-stepfunctions-statemachinealias-deploymentpreference-alarms) , [Interval](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachinealias-deploymentpreference.html#cfn-stepfunctions-statemachinealias-deploymentpreference-interval) , [Percentage](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachinealias-deploymentpreference.html#cfn-stepfunctions-statemachinealias-deploymentpreference-percentage) , [StateMachineVersionArn](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachinealias-deploymentpreference.html#cfn-stepfunctions-statemachinealias-deploymentpreference-statemachineversionarn) , and [Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachinealias-deploymentpreference.html#cfn-stepfunctions-statemachinealias-deploymentpreference-type) .
     *
     * CloudFormation automatically shifts traffic from the version an alias currently points to, to a new state machine version that you specify.
     *
     * > `RoutingConfiguration` and `DeploymentPreference` are mutually exclusive properties. You must define only one of these properties.
     *
     * Based on the type of deployment you want to perform, you can specify one of the following settings:
     *
     * - `LINEAR` - Shifts traffic to the new version in equal increments with an equal number of minutes between each increment.
     *
     * For example, if you specify the increment percent as `20` with an interval of `600` minutes, this deployment increases traffic by 20 percent every 600 minutes until the new version receives 100 percent of the traffic. This deployment immediately rolls back the new version if any Amazon CloudWatch alarms are triggered.
     * - `ALL_AT_ONCE` - Shifts 100 percent of traffic to the new version immediately. CloudFormation monitors the new version and rolls it back automatically to the previous version if any CloudWatch alarms are triggered.
     * - `CANARY` - Shifts traffic in two increments.
     *
     * In the first increment, a small percentage of traffic, for example, 10 percent is shifted to the new version. In the second increment, before a specified time interval in seconds gets over, the remaining traffic is shifted to the new version. The shift to the new version for the remaining traffic takes place only if no CloudWatch alarms are triggered during the specified time interval.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachinealias.html#cfn-stepfunctions-statemachinealias-deploymentpreference
     */
    readonly deploymentPreference?: CfnStateMachineAlias.DeploymentPreferenceProperty | cdk.IResolvable;
    /**
     * An optional description of the state machine alias.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachinealias.html#cfn-stepfunctions-statemachinealias-description
     */
    readonly description?: string;
    /**
     * The name of the state machine alias.
     *
     * If you don't provide a name, it uses an automatically generated name based on the logical ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachinealias.html#cfn-stepfunctions-statemachinealias-name
     */
    readonly name?: string;
    /**
     * The routing configuration of an alias.
     *
     * Routing configuration splits [StartExecution](https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html) requests between one or two versions of the same state machine.
     *
     * Use `RoutingConfiguration` if you want to explicitly set the alias [weights](https://docs.aws.amazon.com/step-functions/latest/apireference/API_RoutingConfigurationListItem.html#StepFunctions-Type-RoutingConfigurationListItem-weight) . Weight is the percentage of traffic you want to route to a state machine version.
     *
     * > `RoutingConfiguration` and `DeploymentPreference` are mutually exclusive properties. You must define only one of these properties.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachinealias.html#cfn-stepfunctions-statemachinealias-routingconfiguration
     */
    readonly routingConfiguration?: Array<cdk.IResolvable | CfnStateMachineAlias.RoutingConfigurationVersionProperty> | cdk.IResolvable;
}
/**
 * Represents a state machine [version](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html) . A published version uses the latest state machine [*revision*](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html) . A revision is an immutable, read-only snapshot of a state machine’s definition and configuration.
 *
 * You can publish up to 1000 versions for each state machine.
 *
 * > Before you delete a version, make sure that version's ARN isn't being referenced in any long-running workflows or application code outside of the stack.
 *
 * @cloudformationResource AWS::StepFunctions::StateMachineVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachineversion.html
 */
export declare class CfnStateMachineVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStateMachineVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStateMachineVersion;
    /**
     * Returns the ARN of the state machine version. For example, `arn:aws:states:us-east-1:123456789012:stateMachine:myStateMachine:1` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * An optional description of the state machine version.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of the state machine.
     */
    stateMachineArn: string;
    /**
     * Identifier for a state machine revision, which is an immutable, read-only snapshot of a state machine’s definition and configuration.
     */
    stateMachineRevisionId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStateMachineVersionProps);
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
 * Properties for defining a `CfnStateMachineVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachineversion.html
 */
export interface CfnStateMachineVersionProps {
    /**
     * An optional description of the state machine version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachineversion.html#cfn-stepfunctions-statemachineversion-description
     */
    readonly description?: string;
    /**
     * The Amazon Resource Name (ARN) of the state machine.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachineversion.html#cfn-stepfunctions-statemachineversion-statemachinearn
     */
    readonly stateMachineArn: string;
    /**
     * Identifier for a state machine revision, which is an immutable, read-only snapshot of a state machine’s definition and configuration.
     *
     * Only publish the state machine version if the current state machine's revision ID matches the specified ID. Use this option to avoid publishing a version if the state machine has changed since you last updated it.
     *
     * To specify the initial state machine revision, set the value as `INITIAL` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachineversion.html#cfn-stepfunctions-statemachineversion-statemachinerevisionid
     */
    readonly stateMachineRevisionId?: string;
}
