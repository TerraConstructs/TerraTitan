import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The AWS::DataPipeline::Pipeline resource specifies a data pipeline that you can use to automate the movement and transformation of data.
 *
 * > AWS Data Pipeline is no longer available to new customers. Existing customers of AWS Data Pipeline can continue to use the service as normal. [Learn more](https://docs.aws.amazon.com/big-data/migrate-workloads-from-aws-data-pipeline/)
 *
 * In each pipeline, you define pipeline objects, such as activities, schedules, data nodes, and resources.
 *
 * The `AWS::DataPipeline::Pipeline` resource adds tasks, schedules, and preconditions to the specified pipeline. You can use `PutPipelineDefinition` to populate a new pipeline.
 *
 * `PutPipelineDefinition` also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one of the following validation errors exist in the pipeline.
 *
 * - An object is missing a name or identifier field.
 * - A string or reference field is empty.
 * - The number of objects in the pipeline exceeds the allowed maximum number of objects.
 * - The pipeline is in a FINISHED state.
 *
 * Pipeline object definitions are passed to the [PutPipelineDefinition](https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PutPipelineDefinition.html) action and returned by the [GetPipelineDefinition](https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_GetPipelineDefinition.html) action.
 *
 * @cloudformationResource AWS::DataPipeline::Pipeline
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datapipeline-pipeline.html
 */
export declare class CfnPipeline extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPipeline from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPipeline;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ID of the pipeline.
     *
     * @cloudformationAttribute PipelineId
     */
    readonly attrPipelineId: string;
    /**
     * Indicates whether to validate and start the pipeline or stop an active pipeline.
     */
    activate?: boolean | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A description of the pipeline.
     */
    description?: string;
    /**
     * The name of the pipeline.
     */
    name: string;
    /**
     * The parameter objects used with the pipeline.
     */
    parameterObjects?: Array<cdk.IResolvable | CfnPipeline.ParameterObjectProperty> | cdk.IResolvable;
    /**
     * The parameter values used with the pipeline.
     */
    parameterValues?: Array<cdk.IResolvable | CfnPipeline.ParameterValueProperty> | cdk.IResolvable;
    /**
     * The objects that define the pipeline.
     */
    pipelineObjects?: Array<cdk.IResolvable | CfnPipeline.PipelineObjectProperty> | cdk.IResolvable;
    /**
     * A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions.
     */
    pipelineTags?: Array<CfnPipeline.PipelineTagProperty>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPipelineProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPipeline {
    /**
     * A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions.
     *
     * For more information, see [Controlling Access to Pipelines and Resources](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html) in the *AWS Data Pipeline Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-pipelinetag.html
     */
    interface PipelineTagProperty {
        /**
         * The key name of a tag.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-pipelinetag.html#cfn-datapipeline-pipeline-pipelinetag-key
         */
        readonly key: string;
        /**
         * The value to associate with the key name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-pipelinetag.html#cfn-datapipeline-pipeline-pipelinetag-value
         */
        readonly value: string;
    }
    /**
     * Contains information about a parameter object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parameterobject.html
     */
    interface ParameterObjectProperty {
        /**
         * The attributes of the parameter object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parameterobject.html#cfn-datapipeline-pipeline-parameterobject-attributes
         */
        readonly attributes: Array<cdk.IResolvable | CfnPipeline.ParameterAttributeProperty> | cdk.IResolvable;
        /**
         * The ID of the parameter object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parameterobject.html#cfn-datapipeline-pipeline-parameterobject-id
         */
        readonly id: string;
    }
    /**
     * `Attribute` is a property of `ParameterObject` that defines the attributes of a parameter object as key-value pairs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parameterattribute.html
     */
    interface ParameterAttributeProperty {
        /**
         * The field identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parameterattribute.html#cfn-datapipeline-pipeline-parameterattribute-key
         */
        readonly key: string;
        /**
         * The field value, expressed as a String.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parameterattribute.html#cfn-datapipeline-pipeline-parameterattribute-stringvalue
         */
        readonly stringValue: string;
    }
    /**
     * PipelineObject is property of the AWS::DataPipeline::Pipeline resource that contains information about a pipeline object.
     *
     * This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-pipelineobject.html
     */
    interface PipelineObjectProperty {
        /**
         * Key-value pairs that define the properties of the object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-pipelineobject.html#cfn-datapipeline-pipeline-pipelineobject-fields
         */
        readonly fields: Array<CfnPipeline.FieldProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The ID of the object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-pipelineobject.html#cfn-datapipeline-pipeline-pipelineobject-id
         */
        readonly id: string;
        /**
         * The name of the object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-pipelineobject.html#cfn-datapipeline-pipeline-pipelineobject-name
         */
        readonly name: string;
    }
    /**
     * A key-value pair that describes a property of a `PipelineObject` .
     *
     * The value is specified as either a string value ( `StringValue` ) or a reference to another object ( `RefValue` ) but not as both. To view fields for a data pipeline object, see [Pipeline Object Reference](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-pipeline-objects.html) in the *AWS Data Pipeline Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-field.html
     */
    interface FieldProperty {
        /**
         * Specifies the name of a field for a particular object.
         *
         * To view valid values for a particular field, see [Pipeline Object Reference](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-pipeline-objects.html) in the *AWS Data Pipeline Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-field.html#cfn-datapipeline-pipeline-field-key
         */
        readonly key: string;
        /**
         * A field value that you specify as an identifier of another object in the same pipeline definition.
         *
         * > You can specify the field value as either a string value ( `StringValue` ) or a reference to another object ( `RefValue` ), but not both.
         *
         * Required if the key that you are using requires it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-field.html#cfn-datapipeline-pipeline-field-refvalue
         */
        readonly refValue?: string;
        /**
         * A field value that you specify as a string.
         *
         * To view valid values for a particular field, see [Pipeline Object Reference](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-pipeline-objects.html) in the *AWS Data Pipeline Developer Guide* .
         *
         * > You can specify the field value as either a string value ( `StringValue` ) or a reference to another object ( `RefValue` ), but not both.
         *
         * Required if the key that you are using requires it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-field.html#cfn-datapipeline-pipeline-field-stringvalue
         */
        readonly stringValue?: string;
    }
    /**
     * A value or list of parameter values.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parametervalue.html
     */
    interface ParameterValueProperty {
        /**
         * The ID of the parameter value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parametervalue.html#cfn-datapipeline-pipeline-parametervalue-id
         */
        readonly id: string;
        /**
         * The field value, expressed as a String.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parametervalue.html#cfn-datapipeline-pipeline-parametervalue-stringvalue
         */
        readonly stringValue: string;
    }
}
/**
 * Properties for defining a `CfnPipeline`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datapipeline-pipeline.html
 */
export interface CfnPipelineProps {
    /**
     * Indicates whether to validate and start the pipeline or stop an active pipeline.
     *
     * By default, the value is set to `true` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datapipeline-pipeline.html#cfn-datapipeline-pipeline-activate
     */
    readonly activate?: boolean | cdk.IResolvable;
    /**
     * A description of the pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datapipeline-pipeline.html#cfn-datapipeline-pipeline-description
     */
    readonly description?: string;
    /**
     * The name of the pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datapipeline-pipeline.html#cfn-datapipeline-pipeline-name
     */
    readonly name: string;
    /**
     * The parameter objects used with the pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datapipeline-pipeline.html#cfn-datapipeline-pipeline-parameterobjects
     */
    readonly parameterObjects?: Array<cdk.IResolvable | CfnPipeline.ParameterObjectProperty> | cdk.IResolvable;
    /**
     * The parameter values used with the pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datapipeline-pipeline.html#cfn-datapipeline-pipeline-parametervalues
     */
    readonly parameterValues?: Array<cdk.IResolvable | CfnPipeline.ParameterValueProperty> | cdk.IResolvable;
    /**
     * The objects that define the pipeline.
     *
     * These objects overwrite the existing pipeline definition. Not all objects, fields, and values can be updated. For information about restrictions, see [Editing Your Pipeline](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-manage-pipeline-modify-console.html) in the *AWS Data Pipeline Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datapipeline-pipeline.html#cfn-datapipeline-pipeline-pipelineobjects
     */
    readonly pipelineObjects?: Array<cdk.IResolvable | CfnPipeline.PipelineObjectProperty> | cdk.IResolvable;
    /**
     * A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions.
     *
     * For more information, see [Controlling Access to Pipelines and Resources](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html) in the *AWS Data Pipeline Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datapipeline-pipeline.html#cfn-datapipeline-pipeline-pipelinetags
     */
    readonly pipelineTags?: Array<CfnPipeline.PipelineTagProperty>;
}
