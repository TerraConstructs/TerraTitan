import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates or updates an Evidently *experiment* .
 *
 * Before you create an experiment, you must create the feature to use for the experiment.
 *
 * An experiment helps you make feature design decisions based on evidence and data. An experiment can test as many as five variations at once. Evidently collects experiment data and analyzes it by statistical methods, and provides clear recommendations about which variations perform better.
 *
 * @cloudformationResource AWS::Evidently::Experiment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html
 */
export declare class CfnExperiment extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnExperiment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnExperiment;
    /**
     * The ARN of the experiment. For example, `arn:aws:evidently:us-west-2:0123455678912:project/myProject/experiment/myExperiment`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * An optional description of the experiment.
     */
    description?: string;
    /**
     * An array of structures that defines the metrics used for the experiment, and whether a higher or lower value for each metric is the goal.
     */
    metricGoals: Array<cdk.IResolvable | CfnExperiment.MetricGoalObjectProperty> | cdk.IResolvable;
    /**
     * A name for the new experiment.
     */
    name: string;
    /**
     * A structure that contains the configuration of which variation to use as the "control" version.
     */
    onlineAbConfig: cdk.IResolvable | CfnExperiment.OnlineAbConfigObjectProperty;
    /**
     * The name or the ARN of the project where this experiment is to be created.
     */
    project: string;
    /**
     * When Evidently assigns a particular user session to an experiment, it must use a randomization ID to determine which variation the user session is served.
     */
    randomizationSalt?: string;
    /**
     * Set this to `true` to remove the segment that is associated with this experiment.
     */
    removeSegment?: boolean | cdk.IResolvable;
    /**
     * A structure that you can use to start and stop the experiment.
     */
    runningStatus?: cdk.IResolvable | CfnExperiment.RunningStatusObjectProperty;
    /**
     * The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent.
     */
    samplingRate?: number;
    /**
     * Specifies an audience *segment* to use in the experiment.
     */
    segment?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Assigns one or more tags (key-value pairs) to the experiment.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * An array of structures that describe the configuration of each feature variation used in the experiment.
     */
    treatments: Array<cdk.IResolvable | CfnExperiment.TreatmentObjectProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnExperimentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnExperiment {
    /**
     * Use this structure to start and stop the experiment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-runningstatusobject.html
     */
    interface RunningStatusObjectProperty {
        /**
         * If you are using AWS CloudFormation to start the experiment, use this field to specify when the experiment is to end.
         *
         * The format is as a UNIX timestamp. For more information about this format, see [The Current Epoch Unix Timestamp](https://docs.aws.amazon.com/https://www.unixtimestamp.com/index.php) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-runningstatusobject.html#cfn-evidently-experiment-runningstatusobject-analysiscompletetime
         */
        readonly analysisCompleteTime?: string;
        /**
         * If you are using AWS CloudFormation to stop this experiment, specify either `COMPLETED` or `CANCELLED` here to indicate how to classify this experiment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-runningstatusobject.html#cfn-evidently-experiment-runningstatusobject-desiredstate
         */
        readonly desiredState?: string;
        /**
         * If you are using AWS CloudFormation to stop this experiment, this is an optional field that you can use to record why the experiment is being stopped or cancelled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-runningstatusobject.html#cfn-evidently-experiment-runningstatusobject-reason
         */
        readonly reason?: string;
        /**
         * To start the experiment now, specify `START` for this parameter.
         *
         * If this experiment is currently running and you want to stop it now, specify `STOP` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-runningstatusobject.html#cfn-evidently-experiment-runningstatusobject-status
         */
        readonly status: string;
    }
    /**
     * Use this structure to tell Evidently whether higher or lower values are desired for a metric that is used in an experiment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-metricgoalobject.html
     */
    interface MetricGoalObjectProperty {
        /**
         * `INCREASE` means that a variation with a higher number for this metric is performing better.
         *
         * `DECREASE` means that a variation with a lower number for this metric is performing better.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-metricgoalobject.html#cfn-evidently-experiment-metricgoalobject-desiredchange
         */
        readonly desiredChange: string;
        /**
         * The entity, such as a user or session, that does an action that causes a metric value to be recorded.
         *
         * An example is `userDetails.userID` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-metricgoalobject.html#cfn-evidently-experiment-metricgoalobject-entityidkey
         */
        readonly entityIdKey: string;
        /**
         * The EventBridge event pattern that defines how the metric is recorded.
         *
         * For more information about EventBridge event patterns, see [Amazon EventBridge event patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-metricgoalobject.html#cfn-evidently-experiment-metricgoalobject-eventpattern
         */
        readonly eventPattern?: string;
        /**
         * A name for the metric.
         *
         * It can include up to 255 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-metricgoalobject.html#cfn-evidently-experiment-metricgoalobject-metricname
         */
        readonly metricName: string;
        /**
         * A label for the units that the metric is measuring.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-metricgoalobject.html#cfn-evidently-experiment-metricgoalobject-unitlabel
         */
        readonly unitLabel?: string;
        /**
         * The JSON path to reference the numerical metric value in the event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-metricgoalobject.html#cfn-evidently-experiment-metricgoalobject-valuekey
         */
        readonly valueKey: string;
    }
    /**
     * A structure that contains the configuration of which variation to use as the "control" version.
     *
     * The "control" version is used for comparison with other variations. This structure also specifies how much experiment traffic is allocated to each variation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-onlineabconfigobject.html
     */
    interface OnlineAbConfigObjectProperty {
        /**
         * The name of the variation that is to be the default variation that the other variations are compared to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-onlineabconfigobject.html#cfn-evidently-experiment-onlineabconfigobject-controltreatmentname
         */
        readonly controlTreatmentName?: string;
        /**
         * A set of key-value pairs.
         *
         * The keys are treatment names, and the values are the portion of experiment traffic to be assigned to that treatment. Specify the traffic portion in thousandths of a percent, so 20,000 for a variation would allocate 20% of the experiment traffic to that variation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-onlineabconfigobject.html#cfn-evidently-experiment-onlineabconfigobject-treatmentweights
         */
        readonly treatmentWeights?: Array<cdk.IResolvable | CfnExperiment.TreatmentToWeightProperty> | cdk.IResolvable;
    }
    /**
     * This structure defines how much experiment traffic to allocate to one treatment used in the experiment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-treatmenttoweight.html
     */
    interface TreatmentToWeightProperty {
        /**
         * The portion of experiment traffic to allocate to this treatment.
         *
         * Specify the traffic portion in thousandths of a percent, so 20,000 allocated to a treatment would allocate 20% of the experiment traffic to that treatment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-treatmenttoweight.html#cfn-evidently-experiment-treatmenttoweight-splitweight
         */
        readonly splitWeight: number;
        /**
         * The name of the treatment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-treatmenttoweight.html#cfn-evidently-experiment-treatmenttoweight-treatment
         */
        readonly treatment: string;
    }
    /**
     * A structure that defines one treatment in an experiment.
     *
     * A treatment is a variation of the feature that you are including in the experiment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-treatmentobject.html
     */
    interface TreatmentObjectProperty {
        /**
         * The description of the treatment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-treatmentobject.html#cfn-evidently-experiment-treatmentobject-description
         */
        readonly description?: string;
        /**
         * The name of the feature for this experiment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-treatmentobject.html#cfn-evidently-experiment-treatmentobject-feature
         */
        readonly feature: string;
        /**
         * A name for this treatment.
         *
         * It can include up to 127 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-treatmentobject.html#cfn-evidently-experiment-treatmentobject-treatmentname
         */
        readonly treatmentName: string;
        /**
         * The name of the variation to use for this treatment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-treatmentobject.html#cfn-evidently-experiment-treatmentobject-variation
         */
        readonly variation: string;
    }
}
/**
 * Properties for defining a `CfnExperiment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html
 */
export interface CfnExperimentProps {
    /**
     * An optional description of the experiment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html#cfn-evidently-experiment-description
     */
    readonly description?: string;
    /**
     * An array of structures that defines the metrics used for the experiment, and whether a higher or lower value for each metric is the goal.
     *
     * You can use up to three metrics in an experiment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html#cfn-evidently-experiment-metricgoals
     */
    readonly metricGoals: Array<cdk.IResolvable | CfnExperiment.MetricGoalObjectProperty> | cdk.IResolvable;
    /**
     * A name for the new experiment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html#cfn-evidently-experiment-name
     */
    readonly name: string;
    /**
     * A structure that contains the configuration of which variation to use as the "control" version.
     *
     * The "control" version is used for comparison with other variations. This structure also specifies how much experiment traffic is allocated to each variation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html#cfn-evidently-experiment-onlineabconfig
     */
    readonly onlineAbConfig: cdk.IResolvable | CfnExperiment.OnlineAbConfigObjectProperty;
    /**
     * The name or the ARN of the project where this experiment is to be created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html#cfn-evidently-experiment-project
     */
    readonly project: string;
    /**
     * When Evidently assigns a particular user session to an experiment, it must use a randomization ID to determine which variation the user session is served.
     *
     * This randomization ID is a combination of the entity ID and `randomizationSalt` . If you omit `randomizationSalt` , Evidently uses the experiment name as the `randomizationSalt` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html#cfn-evidently-experiment-randomizationsalt
     */
    readonly randomizationSalt?: string;
    /**
     * Set this to `true` to remove the segment that is associated with this experiment.
     *
     * You can't use this parameter if the experiment is currently running.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html#cfn-evidently-experiment-removesegment
     */
    readonly removeSegment?: boolean | cdk.IResolvable;
    /**
     * A structure that you can use to start and stop the experiment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html#cfn-evidently-experiment-runningstatus
     */
    readonly runningStatus?: cdk.IResolvable | CfnExperiment.RunningStatusObjectProperty;
    /**
     * The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent.
     *
     * The available audience is the total audience minus the audience that you have allocated to overrides or current launches of this feature.
     *
     * This is represented in thousandths of a percent. For example, specify 10,000 to allocate 10% of the available audience.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html#cfn-evidently-experiment-samplingrate
     */
    readonly samplingRate?: number;
    /**
     * Specifies an audience *segment* to use in the experiment.
     *
     * When a segment is used in an experiment, only user sessions that match the segment pattern are used in the experiment.
     *
     * For more information, see [Segment rule pattern syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html#CloudWatch-Evidently-segments-syntax) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html#cfn-evidently-experiment-segment
     */
    readonly segment?: string;
    /**
     * Assigns one or more tags (key-value pairs) to the experiment.
     *
     * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
     *
     * Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.
     *
     * You can associate as many as 50 tags with an experiment.
     *
     * For more information, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html#cfn-evidently-experiment-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * An array of structures that describe the configuration of each feature variation used in the experiment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html#cfn-evidently-experiment-treatments
     */
    readonly treatments: Array<cdk.IResolvable | CfnExperiment.TreatmentObjectProperty> | cdk.IResolvable;
}
/**
 * Creates or updates an Evidently *feature* that you want to launch or test.
 *
 * You can define up to five variations of a feature, and use these variations in your launches and experiments. A feature must be created in a project. For information about creating a project, see [CreateProject](https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html) .
 *
 * @cloudformationResource AWS::Evidently::Feature
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-feature.html
 */
export declare class CfnFeature extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFeature from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFeature;
    /**
     * The ARN of the feature. For example, `arn:aws:evidently:us-west-2:0123455678912:project/myProject/feature/myFeature` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of the variation to use as the default variation.
     */
    defaultVariation?: string;
    /**
     * An optional description of the feature.
     */
    description?: string;
    /**
     * Specify users that should always be served a specific variation of a feature.
     */
    entityOverrides?: Array<CfnFeature.EntityOverrideProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specify `ALL_RULES` to activate the traffic allocation specified by any ongoing launches or experiments.
     */
    evaluationStrategy?: string;
    /**
     * The name for the feature.
     */
    name: string;
    /**
     * The name or ARN of the project that is to contain the new feature.
     */
    project: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Assigns one or more tags (key-value pairs) to the feature.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * An array of structures that contain the configuration of the feature's different variations.
     */
    variations: Array<cdk.IResolvable | CfnFeature.VariationObjectProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFeatureProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFeature {
    /**
     * A set of key-value pairs that specify users who should always be served a specific variation of a feature.
     *
     * Each key specifies a user using their user ID, account ID, or some other identifier. The value specifies the name of the variation that the user is to be served.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-feature-entityoverride.html
     */
    interface EntityOverrideProperty {
        /**
         * The entity ID to be served the variation specified in `Variation` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-feature-entityoverride.html#cfn-evidently-feature-entityoverride-entityid
         */
        readonly entityId?: string;
        /**
         * The name of the variation to serve to the user session that matches the `EntityId` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-feature-entityoverride.html#cfn-evidently-feature-entityoverride-variation
         */
        readonly variation?: string;
    }
    /**
     * This structure contains the name and variation value of one variation of a feature.
     *
     * It can contain only one of the following parameters: `BooleanValue` , `DoubleValue` , `LongValue` or `StringValue` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-feature-variationobject.html
     */
    interface VariationObjectProperty {
        /**
         * The value assigned to this variation, if the variation type is boolean.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-feature-variationobject.html#cfn-evidently-feature-variationobject-booleanvalue
         */
        readonly booleanValue?: boolean | cdk.IResolvable;
        /**
         * The value assigned to this variation, if the variation type is a double.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-feature-variationobject.html#cfn-evidently-feature-variationobject-doublevalue
         */
        readonly doubleValue?: number;
        /**
         * The value assigned to this variation, if the variation type is a long.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-feature-variationobject.html#cfn-evidently-feature-variationobject-longvalue
         */
        readonly longValue?: number;
        /**
         * The value assigned to this variation, if the variation type is a string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-feature-variationobject.html#cfn-evidently-feature-variationobject-stringvalue
         */
        readonly stringValue?: string;
        /**
         * A name for the variation.
         *
         * It can include up to 127 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-feature-variationobject.html#cfn-evidently-feature-variationobject-variationname
         */
        readonly variationName: string;
    }
}
/**
 * Properties for defining a `CfnFeature`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-feature.html
 */
export interface CfnFeatureProps {
    /**
     * The name of the variation to use as the default variation.
     *
     * The default variation is served to users who are not allocated to any ongoing launches or experiments of this feature.
     *
     * This variation must also be listed in the `Variations` structure.
     *
     * If you omit `DefaultVariation` , the first variation listed in the `Variations` structure is used as the default variation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-feature.html#cfn-evidently-feature-defaultvariation
     */
    readonly defaultVariation?: string;
    /**
     * An optional description of the feature.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-feature.html#cfn-evidently-feature-description
     */
    readonly description?: string;
    /**
     * Specify users that should always be served a specific variation of a feature.
     *
     * Each user is specified by a key-value pair . For each key, specify a user by entering their user ID, account ID, or some other identifier. For the value, specify the name of the variation that they are to be served.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-feature.html#cfn-evidently-feature-entityoverrides
     */
    readonly entityOverrides?: Array<CfnFeature.EntityOverrideProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specify `ALL_RULES` to activate the traffic allocation specified by any ongoing launches or experiments.
     *
     * Specify `DEFAULT_VARIATION` to serve the default variation to all users instead.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-feature.html#cfn-evidently-feature-evaluationstrategy
     */
    readonly evaluationStrategy?: string;
    /**
     * The name for the feature.
     *
     * It can include up to 127 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-feature.html#cfn-evidently-feature-name
     */
    readonly name: string;
    /**
     * The name or ARN of the project that is to contain the new feature.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-feature.html#cfn-evidently-feature-project
     */
    readonly project: string;
    /**
     * Assigns one or more tags (key-value pairs) to the feature.
     *
     * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
     *
     * Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.
     *
     * You can associate as many as 50 tags with a feature.
     *
     * For more information, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-feature.html#cfn-evidently-feature-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * An array of structures that contain the configuration of the feature's different variations.
     *
     * Each `VariationObject` in the `Variations` array for a feature must have the same type of value ( `BooleanValue` , `DoubleValue` , `LongValue` or `StringValue` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-feature.html#cfn-evidently-feature-variations
     */
    readonly variations: Array<cdk.IResolvable | CfnFeature.VariationObjectProperty> | cdk.IResolvable;
}
/**
 * Creates or updates a *launch* of a given feature.
 *
 * Before you create a launch, you must create the feature to use for the launch.
 *
 * You can use a launch to safely validate new features by serving them to a specified percentage of your users while you roll out the feature. You can monitor the performance of the new feature to help you decide when to ramp up traffic to more users. This helps you reduce risk and identify unintended consequences before you fully launch the feature.
 *
 * @cloudformationResource AWS::Evidently::Launch
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-launch.html
 */
export declare class CfnLaunch extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLaunch from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLaunch;
    /**
     * The ARN of the launch. For example, `arn:aws:evidently:us-west-2:0123455678912:project/myProject/launch/myLaunch`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * An optional description for the launch.
     */
    description?: string;
    /**
     * A structure that you can use to start and stop the launch.
     */
    executionStatus?: CfnLaunch.ExecutionStatusObjectProperty | cdk.IResolvable;
    /**
     * An array of structures that contains the feature and variations that are to be used for the launch.
     */
    groups: Array<cdk.IResolvable | CfnLaunch.LaunchGroupObjectProperty> | cdk.IResolvable;
    /**
     * An array of structures that define the metrics that will be used to monitor the launch performance.
     */
    metricMonitors?: Array<cdk.IResolvable | CfnLaunch.MetricDefinitionObjectProperty> | cdk.IResolvable;
    /**
     * The name for the launch.
     */
    name: string;
    /**
     * The name or ARN of the project that you want to create the launch in.
     */
    project: string;
    /**
     * When Evidently assigns a particular user session to a launch, it must use a randomization ID to determine which variation the user session is served.
     */
    randomizationSalt?: string;
    /**
     * An array of structures that define the traffic allocation percentages among the feature variations during each step of the launch.
     */
    scheduledSplitsConfig: Array<cdk.IResolvable | CfnLaunch.StepConfigProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Assigns one or more tags (key-value pairs) to the launch.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLaunchProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLaunch {
    /**
     * Use this structure to start and stop the launch.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-executionstatusobject.html
     */
    interface ExecutionStatusObjectProperty {
        /**
         * If you are using AWS CloudFormation to stop this launch, specify either `COMPLETED` or `CANCELLED` here to indicate how to classify this experiment.
         *
         * If you omit this parameter, the default of `COMPLETED` is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-executionstatusobject.html#cfn-evidently-launch-executionstatusobject-desiredstate
         */
        readonly desiredState?: string;
        /**
         * If you are using AWS CloudFormation to stop this launch, this is an optional field that you can use to record why the launch is being stopped or cancelled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-executionstatusobject.html#cfn-evidently-launch-executionstatusobject-reason
         */
        readonly reason?: string;
        /**
         * To start the launch now, specify `START` for this parameter.
         *
         * If this launch is currently running and you want to stop it now, specify `STOP` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-executionstatusobject.html#cfn-evidently-launch-executionstatusobject-status
         */
        readonly status: string;
    }
    /**
     * A structure that defines one launch group in a launch.
     *
     * A launch group is a variation of the feature that you are including in the launch.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-launchgroupobject.html
     */
    interface LaunchGroupObjectProperty {
        /**
         * A description of the launch group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-launchgroupobject.html#cfn-evidently-launch-launchgroupobject-description
         */
        readonly description?: string;
        /**
         * The feature that this launch is using.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-launchgroupobject.html#cfn-evidently-launch-launchgroupobject-feature
         */
        readonly feature: string;
        /**
         * A name for this launch group.
         *
         * It can include up to 127 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-launchgroupobject.html#cfn-evidently-launch-launchgroupobject-groupname
         */
        readonly groupName: string;
        /**
         * The feature variation to use for this launch group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-launchgroupobject.html#cfn-evidently-launch-launchgroupobject-variation
         */
        readonly variation: string;
    }
    /**
     * This structure defines a metric that you want to use to evaluate the variations during a launch or experiment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-metricdefinitionobject.html
     */
    interface MetricDefinitionObjectProperty {
        /**
         * The entity, such as a user or session, that does an action that causes a metric value to be recorded.
         *
         * An example is `userDetails.userID` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-metricdefinitionobject.html#cfn-evidently-launch-metricdefinitionobject-entityidkey
         */
        readonly entityIdKey: string;
        /**
         * The EventBridge event pattern that defines how the metric is recorded.
         *
         * For more information about EventBridge event patterns, see [Amazon EventBridge event patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-metricdefinitionobject.html#cfn-evidently-launch-metricdefinitionobject-eventpattern
         */
        readonly eventPattern?: string;
        /**
         * A name for the metric.
         *
         * It can include up to 255 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-metricdefinitionobject.html#cfn-evidently-launch-metricdefinitionobject-metricname
         */
        readonly metricName: string;
        /**
         * A label for the units that the metric is measuring.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-metricdefinitionobject.html#cfn-evidently-launch-metricdefinitionobject-unitlabel
         */
        readonly unitLabel?: string;
        /**
         * The value that is tracked to produce the metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-metricdefinitionobject.html#cfn-evidently-launch-metricdefinitionobject-valuekey
         */
        readonly valueKey: string;
    }
    /**
     * A structure that defines when each step of the launch is to start, and how much launch traffic is to be allocated to each variation during each step.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-stepconfig.html
     */
    interface StepConfigProperty {
        /**
         * An array of structures that define how much launch traffic to allocate to each launch group during this step of the launch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-stepconfig.html#cfn-evidently-launch-stepconfig-groupweights
         */
        readonly groupWeights: Array<CfnLaunch.GroupToWeightProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * An array of structures that you can use to specify different traffic splits for one or more audience *segments* .
         *
         * A segment is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users, users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects, such as age.
         *
         * For more information, see [Use segments to focus your audience](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-stepconfig.html#cfn-evidently-launch-stepconfig-segmentoverrides
         */
        readonly segmentOverrides?: Array<cdk.IResolvable | CfnLaunch.SegmentOverrideProperty> | cdk.IResolvable;
        /**
         * The date and time to start this step of the launch.
         *
         * Use UTC format, `yyyy-MM-ddTHH:mm:ssZ` . For example, `2025-11-25T23:59:59Z`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-stepconfig.html#cfn-evidently-launch-stepconfig-starttime
         */
        readonly startTime: string;
    }
    /**
     * A structure containing the percentage of launch traffic to allocate to one launch group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-grouptoweight.html
     */
    interface GroupToWeightProperty {
        /**
         * The name of the launch group.
         *
         * It can include up to 127 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-grouptoweight.html#cfn-evidently-launch-grouptoweight-groupname
         */
        readonly groupName: string;
        /**
         * The portion of launch traffic to allocate to this launch group.
         *
         * This is represented in thousandths of a percent. For example, specify 20,000 to allocate 20% of the launch audience to this launch group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-grouptoweight.html#cfn-evidently-launch-grouptoweight-splitweight
         */
        readonly splitWeight: number;
    }
    /**
     * Use this structure to specify different traffic splits for one or more audience *segments* .
     *
     * A segment is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users, users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects, such as age.
     *
     * For more information, see [Use segments to focus your audience](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html) .
     *
     * This sructure is an array of up to six segment override objects. Each of these objects specifies a segment that you have already created, and defines the traffic split for that segment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-segmentoverride.html
     */
    interface SegmentOverrideProperty {
        /**
         * A number indicating the order to use to evaluate segment overrides, if there are more than one.
         *
         * Segment overrides with lower numbers are evaluated first.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-segmentoverride.html#cfn-evidently-launch-segmentoverride-evaluationorder
         */
        readonly evaluationOrder: number;
        /**
         * The ARN of the segment to use for this override.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-segmentoverride.html#cfn-evidently-launch-segmentoverride-segment
         */
        readonly segment: string;
        /**
         * The traffic allocation percentages among the feature variations to assign to this segment.
         *
         * This is a set of key-value pairs. The keys are variation names. The values represent the amount of traffic to allocate to that variation for this segment. This is expressed in thousandths of a percent, so a weight of 50000 represents 50% of traffic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-segmentoverride.html#cfn-evidently-launch-segmentoverride-weights
         */
        readonly weights: Array<CfnLaunch.GroupToWeightProperty | cdk.IResolvable> | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnLaunch`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-launch.html
 */
export interface CfnLaunchProps {
    /**
     * An optional description for the launch.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-launch.html#cfn-evidently-launch-description
     */
    readonly description?: string;
    /**
     * A structure that you can use to start and stop the launch.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-launch.html#cfn-evidently-launch-executionstatus
     */
    readonly executionStatus?: CfnLaunch.ExecutionStatusObjectProperty | cdk.IResolvable;
    /**
     * An array of structures that contains the feature and variations that are to be used for the launch.
     *
     * You can up to five launch groups in a launch.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-launch.html#cfn-evidently-launch-groups
     */
    readonly groups: Array<cdk.IResolvable | CfnLaunch.LaunchGroupObjectProperty> | cdk.IResolvable;
    /**
     * An array of structures that define the metrics that will be used to monitor the launch performance.
     *
     * You can have up to three metric monitors in the array.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-launch.html#cfn-evidently-launch-metricmonitors
     */
    readonly metricMonitors?: Array<cdk.IResolvable | CfnLaunch.MetricDefinitionObjectProperty> | cdk.IResolvable;
    /**
     * The name for the launch.
     *
     * It can include up to 127 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-launch.html#cfn-evidently-launch-name
     */
    readonly name: string;
    /**
     * The name or ARN of the project that you want to create the launch in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-launch.html#cfn-evidently-launch-project
     */
    readonly project: string;
    /**
     * When Evidently assigns a particular user session to a launch, it must use a randomization ID to determine which variation the user session is served.
     *
     * This randomization ID is a combination of the entity ID and `randomizationSalt` . If you omit `randomizationSalt` , Evidently uses the launch name as the `randomizationsSalt` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-launch.html#cfn-evidently-launch-randomizationsalt
     */
    readonly randomizationSalt?: string;
    /**
     * An array of structures that define the traffic allocation percentages among the feature variations during each step of the launch.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-launch.html#cfn-evidently-launch-scheduledsplitsconfig
     */
    readonly scheduledSplitsConfig: Array<cdk.IResolvable | CfnLaunch.StepConfigProperty> | cdk.IResolvable;
    /**
     * Assigns one or more tags (key-value pairs) to the launch.
     *
     * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
     *
     * Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.
     *
     * You can associate as many as 50 tags with a launch.
     *
     * For more information, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-launch.html#cfn-evidently-launch-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a project, which is the logical object in Evidently that can contain features, launches, and experiments.
 *
 * Use projects to group similar features together.
 *
 * @cloudformationResource AWS::Evidently::Project
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html
 */
export declare class CfnProject extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnProject from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnProject;
    /**
     * The ARN of the project. For example, `arn:aws:evidently:us-west-2:0123455678912:project/myProject`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Use this parameter if the project will use *client-side evaluation powered by AWS AppConfig* .
     */
    appConfigResource?: CfnProject.AppConfigResourceObjectProperty | cdk.IResolvable;
    /**
     * A structure that contains information about where Evidently is to store evaluation events for longer term storage, if you choose to do so.
     */
    dataDelivery?: CfnProject.DataDeliveryObjectProperty | cdk.IResolvable;
    /**
     * An optional description of the project.
     */
    description?: string;
    /**
     * The name for the project.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Assigns one or more tags (key-value pairs) to the project.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnProjectProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnProject {
    /**
     * A structure that contains information about where Evidently is to store evaluation events for longer term storage.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-project-datadeliveryobject.html
     */
    interface DataDeliveryObjectProperty {
        /**
         * If the project stores evaluation events in CloudWatch Logs , this structure stores the log group name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-project-datadeliveryobject.html#cfn-evidently-project-datadeliveryobject-loggroup
         */
        readonly logGroup?: string;
        /**
         * If the project stores evaluation events in an Amazon S3 bucket, this structure stores the bucket name and bucket prefix.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-project-datadeliveryobject.html#cfn-evidently-project-datadeliveryobject-s3
         */
        readonly s3?: cdk.IResolvable | CfnProject.S3DestinationProperty;
    }
    /**
     * If the project stores evaluation events in an Amazon S3 bucket, this structure stores the bucket name and bucket prefix.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-project-s3destination.html
     */
    interface S3DestinationProperty {
        /**
         * The name of the bucket in which Evidently stores evaluation events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-project-s3destination.html#cfn-evidently-project-s3destination-bucketname
         */
        readonly bucketName: string;
        /**
         * The bucket prefix in which Evidently stores evaluation events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-project-s3destination.html#cfn-evidently-project-s3destination-prefix
         */
        readonly prefix?: string;
    }
    /**
     * This is a structure that defines the configuration of how your application integrates with AWS AppConfig to run client-side evaluation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-project-appconfigresourceobject.html
     */
    interface AppConfigResourceObjectProperty {
        /**
         * The ID of the AWS AppConfig application to use for client-side evaluation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-project-appconfigresourceobject.html#cfn-evidently-project-appconfigresourceobject-applicationid
         */
        readonly applicationId: string;
        /**
         * The ID of the AWS AppConfig environment to use for client-side evaluation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-project-appconfigresourceobject.html#cfn-evidently-project-appconfigresourceobject-environmentid
         */
        readonly environmentId: string;
    }
}
/**
 * Properties for defining a `CfnProject`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html
 */
export interface CfnProjectProps {
    /**
     * Use this parameter if the project will use *client-side evaluation powered by AWS AppConfig* .
     *
     * Client-side evaluation allows your application to assign variations to user sessions locally instead of by calling the [EvaluateFeature](https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html) operation. This mitigates the latency and availability risks that come with an API call. For more information, see [Use client-side evaluation - powered by AWS AppConfig .](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-client-side-evaluation.html)
     *
     * This parameter is a structure that contains information about the AWS AppConfig application that will be used as for client-side evaluation.
     *
     * To create a project that uses client-side evaluation, you must have the `evidently:ExportProjectAsConfiguration` permission.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html#cfn-evidently-project-appconfigresource
     */
    readonly appConfigResource?: CfnProject.AppConfigResourceObjectProperty | cdk.IResolvable;
    /**
     * A structure that contains information about where Evidently is to store evaluation events for longer term storage, if you choose to do so.
     *
     * If you choose not to store these events, Evidently deletes them after using them to produce metrics and other experiment results that you can view.
     *
     * You can't specify both `CloudWatchLogs` and `S3Destination` in the same operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html#cfn-evidently-project-datadelivery
     */
    readonly dataDelivery?: CfnProject.DataDeliveryObjectProperty | cdk.IResolvable;
    /**
     * An optional description of the project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html#cfn-evidently-project-description
     */
    readonly description?: string;
    /**
     * The name for the project.
     *
     * It can include up to 127 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html#cfn-evidently-project-name
     */
    readonly name: string;
    /**
     * Assigns one or more tags (key-value pairs) to the project.
     *
     * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
     *
     * Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.
     *
     * You can associate as many as 50 tags with a project.
     *
     * For more information, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html#cfn-evidently-project-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates or updates a *segment* of your audience.
 *
 * A segment is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users, users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects, such as age.
 *
 * Using a segment in an experiment limits that experiment to evaluate only the users who match the segment criteria. Using one or more segments in a launch allow you to define different traffic splits for the different audience segments.
 *
 * For more information about segment pattern syntax, see [Segment rule pattern syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html#CloudWatch-Evidently-segments-syntax) .
 *
 * The pattern that you define for a segment is matched against the value of `evaluationContext` , which is passed into Evidently in the [EvaluateFeature](https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html) operation, when Evidently assigns a feature variation to a user.
 *
 * @cloudformationResource AWS::Evidently::Segment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-segment.html
 */
export declare class CfnSegment extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSegment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSegment;
    /**
     * The ARN of the segment. For example, `arn:aws:evidently:us-west-2:123456789012:segment/australiaSegment`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * An optional description for this segment.
     */
    description?: string;
    /**
     * A name for the segment.
     */
    name: string;
    /**
     * The pattern to use for the segment.
     */
    pattern?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Assigns one or more tags (key-value pairs) to the feature.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSegmentProps);
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
 * Properties for defining a `CfnSegment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-segment.html
 */
export interface CfnSegmentProps {
    /**
     * An optional description for this segment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-segment.html#cfn-evidently-segment-description
     */
    readonly description?: string;
    /**
     * A name for the segment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-segment.html#cfn-evidently-segment-name
     */
    readonly name: string;
    /**
     * The pattern to use for the segment.
     *
     * For more information about pattern syntax, see [Segment rule pattern syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html#CloudWatch-Evidently-segments-syntax) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-segment.html#cfn-evidently-segment-pattern
     */
    readonly pattern?: string;
    /**
     * Assigns one or more tags (key-value pairs) to the feature.
     *
     * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
     *
     * Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.
     *
     * You can associate as many as 50 tags with a feature.
     *
     * For more information, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-segment.html#cfn-evidently-segment-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
