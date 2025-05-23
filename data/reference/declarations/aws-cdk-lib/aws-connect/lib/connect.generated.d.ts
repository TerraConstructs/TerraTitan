import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The approved origin for the instance.
 *
 * @cloudformationResource AWS::Connect::ApprovedOrigin
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-approvedorigin.html
 */
export declare class CfnApprovedOrigin extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApprovedOrigin from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApprovedOrigin;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    instanceId: string;
    /**
     * Domain name to be added to the allow-list of the instance.
     */
    origin: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApprovedOriginProps);
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
 * Properties for defining a `CfnApprovedOrigin`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-approvedorigin.html
 */
export interface CfnApprovedOriginProps {
    /**
     * The Amazon Resource Name (ARN) of the instance.
     *
     * *Minimum* : `1`
     *
     * *Maximum* : `100`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-approvedorigin.html#cfn-connect-approvedorigin-instanceid
     */
    readonly instanceId: string;
    /**
     * Domain name to be added to the allow-list of the instance.
     *
     * *Maximum* : `267`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-approvedorigin.html#cfn-connect-approvedorigin-origin
     */
    readonly origin: string;
}
/**
 * Specifies a flow for an Amazon Connect instance.
 *
 * @cloudformationResource AWS::Connect::ContactFlow
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflow.html
 */
export declare class CfnContactFlow extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnContactFlow from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnContactFlow;
    /**
     * `Ref` returns the Amazon Resource Name (ARN) of the flow. For example:
     *
     * `{ "Ref": "myFlowArn" }`
     *
     * @cloudformationAttribute ContactFlowArn
     */
    readonly attrContactFlowArn: string;
    /**
     * The content of the flow.
     */
    content: string;
    /**
     * The description of the flow.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Connect instance.
     */
    instanceArn: string;
    /**
     * The name of the flow.
     */
    name: string;
    /**
     * The state of the flow.
     */
    state?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The type of the flow.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnContactFlowProps);
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
 * Properties for defining a `CfnContactFlow`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflow.html
 */
export interface CfnContactFlowProps {
    /**
     * The content of the flow.
     *
     * For more information, see [Amazon Connect Flow language](https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html) in the *Amazon Connect Administrator Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflow.html#cfn-connect-contactflow-content
     */
    readonly content: string;
    /**
     * The description of the flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflow.html#cfn-connect-contactflow-description
     */
    readonly description?: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Connect instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflow.html#cfn-connect-contactflow-instancearn
     */
    readonly instanceArn: string;
    /**
     * The name of the flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflow.html#cfn-connect-contactflow-name
     */
    readonly name: string;
    /**
     * The state of the flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflow.html#cfn-connect-contactflow-state
     */
    readonly state?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflow.html#cfn-connect-contactflow-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The type of the flow.
     *
     * For descriptions of the available types, see [Choose a flow type](https://docs.aws.amazon.com/connect/latest/adminguide/create-contact-flow.html#contact-flow-types) in the *Amazon Connect Administrator Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflow.html#cfn-connect-contactflow-type
     */
    readonly type: string;
}
/**
 * Specifies a flow module for an Amazon Connect instance.
 *
 * @cloudformationResource AWS::Connect::ContactFlowModule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmodule.html
 */
export declare class CfnContactFlowModule extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnContactFlowModule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnContactFlowModule;
    /**
     * `Ref` returns the Amazon Resource Name (ARN) of the flow module. For example:
     *
     * `{ "Ref": "myFlowModuleArn" }`
     *
     * @cloudformationAttribute ContactFlowModuleArn
     */
    readonly attrContactFlowModuleArn: string;
    /**
     * The status of the contact flow module.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The content of the flow module.
     */
    content: string;
    /**
     * The description of the flow module.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Connect instance.
     */
    instanceArn: string;
    /**
     * The name of the flow module.
     */
    name: string;
    /**
     * The state of the flow module.
     */
    state?: string;
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
    constructor(scope: constructs.Construct, id: string, props: CfnContactFlowModuleProps);
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
 * Properties for defining a `CfnContactFlowModule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmodule.html
 */
export interface CfnContactFlowModuleProps {
    /**
     * The content of the flow module.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmodule.html#cfn-connect-contactflowmodule-content
     */
    readonly content: string;
    /**
     * The description of the flow module.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmodule.html#cfn-connect-contactflowmodule-description
     */
    readonly description?: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Connect instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmodule.html#cfn-connect-contactflowmodule-instancearn
     */
    readonly instanceArn: string;
    /**
     * The name of the flow module.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmodule.html#cfn-connect-contactflowmodule-name
     */
    readonly name: string;
    /**
     * The state of the flow module.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmodule.html#cfn-connect-contactflowmodule-state
     */
    readonly state?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmodule.html#cfn-connect-contactflowmodule-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates an evaluation form for the specified Amazon Connect instance.
 *
 * @cloudformationResource AWS::Connect::EvaluationForm
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html
 */
export declare class CfnEvaluationForm extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEvaluationForm from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEvaluationForm;
    /**
     * The Amazon Resource Name (ARN) of the evaluation form.
     *
     * @cloudformationAttribute EvaluationFormArn
     */
    readonly attrEvaluationFormArn: string;
    /**
     * The description of the evaluation form.
     */
    description?: string;
    /**
     * The identifier of the Amazon Connect instance.
     */
    instanceArn: string;
    /**
     * Items that are part of the evaluation form.
     */
    items: Array<CfnEvaluationForm.EvaluationFormBaseItemProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A scoring strategy of the evaluation form.
     */
    scoringStrategy?: cdk.IResolvable | CfnEvaluationForm.ScoringStrategyProperty;
    /**
     * The status of the evaluation form.
     */
    status: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * A title of the evaluation form.
     */
    title: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEvaluationFormProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEvaluationForm {
    /**
     * A scoring strategy of the evaluation form.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-scoringstrategy.html
     */
    interface ScoringStrategyProperty {
        /**
         * The scoring mode of the evaluation form.
         *
         * *Allowed values* : `QUESTION_ONLY` | `SECTION_ONLY`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-scoringstrategy.html#cfn-connect-evaluationform-scoringstrategy-mode
         */
        readonly mode: string;
        /**
         * The scoring status of the evaluation form.
         *
         * *Allowed values* : `ENABLED` | `DISABLED`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-scoringstrategy.html#cfn-connect-evaluationform-scoringstrategy-status
         */
        readonly status: string;
    }
    /**
     * An item at the root level.
     *
     * All items must be sections.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformbaseitem.html
     */
    interface EvaluationFormBaseItemProperty {
        /**
         * A subsection or inner section of an item.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformbaseitem.html#cfn-connect-evaluationform-evaluationformbaseitem-section
         */
        readonly section: CfnEvaluationForm.EvaluationFormSectionProperty | cdk.IResolvable;
    }
    /**
     * Information about a section from an evaluation form.
     *
     * A section can contain sections and/or questions. Evaluation forms can only contain sections and subsections (two level nesting).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsection.html
     */
    interface EvaluationFormSectionProperty {
        /**
         * The instructions of the section.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsection.html#cfn-connect-evaluationform-evaluationformsection-instructions
         */
        readonly instructions?: string;
        /**
         * The items of the section.
         *
         * *Minimum* : 1
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsection.html#cfn-connect-evaluationform-evaluationformsection-items
         */
        readonly items?: Array<CfnEvaluationForm.EvaluationFormItemProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The identifier of the section. An identifier must be unique within the evaluation form.
         *
         * *Length Constraints* : Minimum length of 1. Maximum length of 40.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsection.html#cfn-connect-evaluationform-evaluationformsection-refid
         */
        readonly refId: string;
        /**
         * The title of the section.
         *
         * *Length Constraints* : Minimum length of 1. Maximum length of 128.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsection.html#cfn-connect-evaluationform-evaluationformsection-title
         */
        readonly title: string;
        /**
         * The scoring weight of the section.
         *
         * *Minimum* : 0
         *
         * *Maximum* : 100
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsection.html#cfn-connect-evaluationform-evaluationformsection-weight
         */
        readonly weight?: number;
    }
    /**
     * Items that are part of the evaluation form.
     *
     * The total number of sections and questions must not exceed 100 each. Questions must be contained in a section.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformitem.html
     */
    interface EvaluationFormItemProperty {
        /**
         * The information of the question.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformitem.html#cfn-connect-evaluationform-evaluationformitem-question
         */
        readonly question?: CfnEvaluationForm.EvaluationFormQuestionProperty | cdk.IResolvable;
        /**
         * The information of the section.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformitem.html#cfn-connect-evaluationform-evaluationformitem-section
         */
        readonly section?: CfnEvaluationForm.EvaluationFormSectionProperty | cdk.IResolvable;
    }
    /**
     * Information about a question from an evaluation form.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformquestion.html
     */
    interface EvaluationFormQuestionProperty {
        /**
         * The instructions of the section.
         *
         * *Length Constraints* : Minimum length of 0. Maximum length of 1024.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformquestion.html#cfn-connect-evaluationform-evaluationformquestion-instructions
         */
        readonly instructions?: string;
        /**
         * The flag to enable not applicable answers to the question.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformquestion.html#cfn-connect-evaluationform-evaluationformquestion-notapplicableenabled
         */
        readonly notApplicableEnabled?: boolean | cdk.IResolvable;
        /**
         * The type of the question.
         *
         * *Allowed values* : `NUMERIC` | `SINGLESELECT` | `TEXT`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformquestion.html#cfn-connect-evaluationform-evaluationformquestion-questiontype
         */
        readonly questionType: string;
        /**
         * The properties of the type of question.
         *
         * Text questions do not have to define question type properties.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformquestion.html#cfn-connect-evaluationform-evaluationformquestion-questiontypeproperties
         */
        readonly questionTypeProperties?: CfnEvaluationForm.EvaluationFormQuestionTypePropertiesProperty | cdk.IResolvable;
        /**
         * The identifier of the question. An identifier must be unique within the evaluation form.
         *
         * *Length Constraints* : Minimum length of 1. Maximum length of 40.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformquestion.html#cfn-connect-evaluationform-evaluationformquestion-refid
         */
        readonly refId: string;
        /**
         * The title of the question.
         *
         * *Length Constraints* : Minimum length of 1. Maximum length of 350.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformquestion.html#cfn-connect-evaluationform-evaluationformquestion-title
         */
        readonly title: string;
        /**
         * The scoring weight of the section.
         *
         * *Minimum* : 0
         *
         * *Maximum* : 100
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformquestion.html#cfn-connect-evaluationform-evaluationformquestion-weight
         */
        readonly weight?: number;
    }
    /**
     * Information about properties for a question in an evaluation form.
     *
     * The question type properties must be either for a numeric question or a single select question.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformquestiontypeproperties.html
     */
    interface EvaluationFormQuestionTypePropertiesProperty {
        /**
         * The properties of the numeric question.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformquestiontypeproperties.html#cfn-connect-evaluationform-evaluationformquestiontypeproperties-numeric
         */
        readonly numeric?: CfnEvaluationForm.EvaluationFormNumericQuestionPropertiesProperty | cdk.IResolvable;
        /**
         * The properties of the numeric question.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformquestiontypeproperties.html#cfn-connect-evaluationform-evaluationformquestiontypeproperties-singleselect
         */
        readonly singleSelect?: CfnEvaluationForm.EvaluationFormSingleSelectQuestionPropertiesProperty | cdk.IResolvable;
    }
    /**
     * Information about properties for a numeric question in an evaluation form.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionproperties.html
     */
    interface EvaluationFormNumericQuestionPropertiesProperty {
        /**
         * The automation properties of the numeric question.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionproperties.html#cfn-connect-evaluationform-evaluationformnumericquestionproperties-automation
         */
        readonly automation?: CfnEvaluationForm.EvaluationFormNumericQuestionAutomationProperty | cdk.IResolvable;
        /**
         * The maximum answer value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionproperties.html#cfn-connect-evaluationform-evaluationformnumericquestionproperties-maxvalue
         */
        readonly maxValue: number;
        /**
         * The minimum answer value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionproperties.html#cfn-connect-evaluationform-evaluationformnumericquestionproperties-minvalue
         */
        readonly minValue: number;
        /**
         * The scoring options of the numeric question.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionproperties.html#cfn-connect-evaluationform-evaluationformnumericquestionproperties-options
         */
        readonly options?: Array<CfnEvaluationForm.EvaluationFormNumericQuestionOptionProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Information about the option range used for scoring in numeric questions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionoption.html
     */
    interface EvaluationFormNumericQuestionOptionProperty {
        /**
         * The flag to mark the option as automatic fail.
         *
         * If an automatic fail answer is provided, the overall evaluation gets a score of 0.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionoption.html#cfn-connect-evaluationform-evaluationformnumericquestionoption-automaticfail
         */
        readonly automaticFail?: boolean | cdk.IResolvable;
        /**
         * The maximum answer value of the range option.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionoption.html#cfn-connect-evaluationform-evaluationformnumericquestionoption-maxvalue
         */
        readonly maxValue: number;
        /**
         * The minimum answer value of the range option.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionoption.html#cfn-connect-evaluationform-evaluationformnumericquestionoption-minvalue
         */
        readonly minValue: number;
        /**
         * The score assigned to answer values within the range option.
         *
         * *Minimum* : 0
         *
         * *Maximum* : 10
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionoption.html#cfn-connect-evaluationform-evaluationformnumericquestionoption-score
         */
        readonly score?: number;
    }
    /**
     * Information about the automation configuration in numeric questions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionautomation.html
     */
    interface EvaluationFormNumericQuestionAutomationProperty {
        /**
         * The property value of the automation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionautomation.html#cfn-connect-evaluationform-evaluationformnumericquestionautomation-propertyvalue
         */
        readonly propertyValue: cdk.IResolvable | CfnEvaluationForm.NumericQuestionPropertyValueAutomationProperty;
    }
    /**
     * Information about the property value used in automation of a numeric questions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-numericquestionpropertyvalueautomation.html
     */
    interface NumericQuestionPropertyValueAutomationProperty {
        /**
         * The property label of the automation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-numericquestionpropertyvalueautomation.html#cfn-connect-evaluationform-numericquestionpropertyvalueautomation-label
         */
        readonly label: string;
    }
    /**
     * Information about the options in single select questions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionproperties.html
     */
    interface EvaluationFormSingleSelectQuestionPropertiesProperty {
        /**
         * The display mode of the single select question.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionproperties.html#cfn-connect-evaluationform-evaluationformsingleselectquestionproperties-automation
         */
        readonly automation?: CfnEvaluationForm.EvaluationFormSingleSelectQuestionAutomationProperty | cdk.IResolvable;
        /**
         * The display mode of the single select question.
         *
         * *Allowed values* : `DROPDOWN` | `RADIO`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionproperties.html#cfn-connect-evaluationform-evaluationformsingleselectquestionproperties-displayas
         */
        readonly displayAs?: string;
        /**
         * The answer options of the single select question.
         *
         * *Minimum* : 2
         *
         * *Maximum* : 256
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionproperties.html#cfn-connect-evaluationform-evaluationformsingleselectquestionproperties-options
         */
        readonly options: Array<CfnEvaluationForm.EvaluationFormSingleSelectQuestionOptionProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Information about the automation configuration in single select questions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionoption.html
     */
    interface EvaluationFormSingleSelectQuestionOptionProperty {
        /**
         * The flag to mark the option as automatic fail.
         *
         * If an automatic fail answer is provided, the overall evaluation gets a score of 0.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionoption.html#cfn-connect-evaluationform-evaluationformsingleselectquestionoption-automaticfail
         */
        readonly automaticFail?: boolean | cdk.IResolvable;
        /**
         * The identifier of the answer option. An identifier must be unique within the question.
         *
         * *Length Constraints* : Minimum length of 1. Maximum length of 40.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionoption.html#cfn-connect-evaluationform-evaluationformsingleselectquestionoption-refid
         */
        readonly refId: string;
        /**
         * The score assigned to the answer option.
         *
         * *Minimum* : 0
         *
         * *Maximum* : 10
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionoption.html#cfn-connect-evaluationform-evaluationformsingleselectquestionoption-score
         */
        readonly score?: number;
        /**
         * The title of the answer option.
         *
         * *Length Constraints* : Minimum length of 1. Maximum length of 128.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionoption.html#cfn-connect-evaluationform-evaluationformsingleselectquestionoption-text
         */
        readonly text: string;
    }
    /**
     * Information about the automation configuration in single select questions.
     *
     * Automation options are evaluated in order, and the first matched option is applied. If no automation option matches, and there is a default option, then the default option is applied.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionautomation.html
     */
    interface EvaluationFormSingleSelectQuestionAutomationProperty {
        /**
         * The identifier of the default answer option, when none of the automation options match the criteria.
         *
         * *Length Constraints* : Minimum length of 1. Maximum length of 40.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionautomation.html#cfn-connect-evaluationform-evaluationformsingleselectquestionautomation-defaultoptionrefid
         */
        readonly defaultOptionRefId?: string;
        /**
         * The automation options of the single select question.
         *
         * *Minimum* : 1
         *
         * *Maximum* : 20
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionautomation.html#cfn-connect-evaluationform-evaluationformsingleselectquestionautomation-options
         */
        readonly options: Array<CfnEvaluationForm.EvaluationFormSingleSelectQuestionAutomationOptionProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * The automation options of the single select question.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionautomationoption.html
     */
    interface EvaluationFormSingleSelectQuestionAutomationOptionProperty {
        /**
         * The automation option based on a rule category for the single select question.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionautomationoption.html#cfn-connect-evaluationform-evaluationformsingleselectquestionautomationoption-rulecategory
         */
        readonly ruleCategory: cdk.IResolvable | CfnEvaluationForm.SingleSelectQuestionRuleCategoryAutomationProperty;
    }
    /**
     * Information about the automation option based on a rule category for a single select question.
     *
     * *Length Constraints* : Minimum length of 1. Maximum length of 50.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-singleselectquestionrulecategoryautomation.html
     */
    interface SingleSelectQuestionRuleCategoryAutomationProperty {
        /**
         * The category name, as defined in Rules.
         *
         * *Minimum* : 1
         *
         * *Maximum* : 50
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-singleselectquestionrulecategoryautomation.html#cfn-connect-evaluationform-singleselectquestionrulecategoryautomation-category
         */
        readonly category: string;
        /**
         * The condition to apply for the automation option.
         *
         * If the condition is PRESENT, then the option is applied when the contact data includes the category. Similarly, if the condition is NOT_PRESENT, then the option is applied when the contact data does not include the category.
         *
         * *Allowed values* : `PRESENT` | `NOT_PRESENT`
         *
         * *Maximum* : 50
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-singleselectquestionrulecategoryautomation.html#cfn-connect-evaluationform-singleselectquestionrulecategoryautomation-condition
         */
        readonly condition: string;
        /**
         * The identifier of the answer option. An identifier must be unique within the question.
         *
         * *Length Constraints* : Minimum length of 1. Maximum length of 40.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-singleselectquestionrulecategoryautomation.html#cfn-connect-evaluationform-singleselectquestionrulecategoryautomation-optionrefid
         */
        readonly optionRefId: string;
    }
}
/**
 * Properties for defining a `CfnEvaluationForm`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html
 */
export interface CfnEvaluationFormProps {
    /**
     * The description of the evaluation form.
     *
     * *Length Constraints* : Minimum length of 0. Maximum length of 1024.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-description
     */
    readonly description?: string;
    /**
     * The identifier of the Amazon Connect instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-instancearn
     */
    readonly instanceArn: string;
    /**
     * Items that are part of the evaluation form.
     *
     * The total number of sections and questions must not exceed 100 each. Questions must be contained in a section.
     *
     * *Minimum size* : 1
     *
     * *Maximum size* : 100
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-items
     */
    readonly items: Array<CfnEvaluationForm.EvaluationFormBaseItemProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A scoring strategy of the evaluation form.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-scoringstrategy
     */
    readonly scoringStrategy?: cdk.IResolvable | CfnEvaluationForm.ScoringStrategyProperty;
    /**
     * The status of the evaluation form.
     *
     * *Allowed values* : `DRAFT` | `ACTIVE`
     *
     * @default - "DRAFT"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-status
     */
    readonly status: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * A title of the evaluation form.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-title
     */
    readonly title: string;
}
/**
 * Specifies hours of operation.
 *
 * @cloudformationResource AWS::Connect::HoursOfOperation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html
 */
export declare class CfnHoursOfOperation extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnHoursOfOperation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnHoursOfOperation;
    /**
     * The Amazon Resource Name (ARN) of the hours of operation.
     *
     * @cloudformationAttribute HoursOfOperationArn
     */
    readonly attrHoursOfOperationArn: string;
    /**
     * Configuration information for the hours of operation.
     */
    config: Array<CfnHoursOfOperation.HoursOfOperationConfigProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description for the hours of operation.
     */
    description?: string;
    /**
     * One or more hours of operation overrides assigned to an hour of operation.
     */
    hoursOfOperationOverrides?: Array<CfnHoursOfOperation.HoursOfOperationOverrideProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    instanceArn: string;
    /**
     * The name for the hours of operation.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The time zone for the hours of operation.
     */
    timeZone: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnHoursOfOperationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnHoursOfOperation {
    /**
     * Contains information about the hours of operation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationconfig.html
     */
    interface HoursOfOperationConfigProperty {
        /**
         * The day that the hours of operation applies to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationconfig.html#cfn-connect-hoursofoperation-hoursofoperationconfig-day
         */
        readonly day: string;
        /**
         * The end time that your contact center closes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationconfig.html#cfn-connect-hoursofoperation-hoursofoperationconfig-endtime
         */
        readonly endTime: CfnHoursOfOperation.HoursOfOperationTimeSliceProperty | cdk.IResolvable;
        /**
         * The start time that your contact center opens.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationconfig.html#cfn-connect-hoursofoperation-hoursofoperationconfig-starttime
         */
        readonly startTime: CfnHoursOfOperation.HoursOfOperationTimeSliceProperty | cdk.IResolvable;
    }
    /**
     * The start time or end time for an hours of operation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationtimeslice.html
     */
    interface HoursOfOperationTimeSliceProperty {
        /**
         * The hours.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationtimeslice.html#cfn-connect-hoursofoperation-hoursofoperationtimeslice-hours
         */
        readonly hours: number;
        /**
         * The minutes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationtimeslice.html#cfn-connect-hoursofoperation-hoursofoperationtimeslice-minutes
         */
        readonly minutes: number;
    }
    /**
     * Information about the hours of operations override.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationoverride.html
     */
    interface HoursOfOperationOverrideProperty {
        /**
         * The date from which the hours of operation override would be effective.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationoverride.html#cfn-connect-hoursofoperation-hoursofoperationoverride-effectivefrom
         */
        readonly effectiveFrom: string;
        /**
         * The date till which the hours of operation override would be effective.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationoverride.html#cfn-connect-hoursofoperation-hoursofoperationoverride-effectivetill
         */
        readonly effectiveTill: string;
        /**
         * The identifier for the hours of operation override.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationoverride.html#cfn-connect-hoursofoperation-hoursofoperationoverride-hoursofoperationoverrideid
         */
        readonly hoursOfOperationOverrideId?: string;
        /**
         * Configuration information for the hours of operation override: day, start time, and end time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationoverride.html#cfn-connect-hoursofoperation-hoursofoperationoverride-overrideconfig
         */
        readonly overrideConfig: Array<CfnHoursOfOperation.HoursOfOperationOverrideConfigProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The description of the hours of operation override.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationoverride.html#cfn-connect-hoursofoperation-hoursofoperationoverride-overridedescription
         */
        readonly overrideDescription?: string;
        /**
         * The name of the hours of operation override.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationoverride.html#cfn-connect-hoursofoperation-hoursofoperationoverride-overridename
         */
        readonly overrideName: string;
    }
    /**
     * Information about the hours of operation override config: day, start time, and end time.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationoverrideconfig.html
     */
    interface HoursOfOperationOverrideConfigProperty {
        /**
         * The day that the hours of operation override applies to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationoverrideconfig.html#cfn-connect-hoursofoperation-hoursofoperationoverrideconfig-day
         */
        readonly day: string;
        /**
         * The end time that your contact center closes if overrides are applied.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationoverrideconfig.html#cfn-connect-hoursofoperation-hoursofoperationoverrideconfig-endtime
         */
        readonly endTime: cdk.IResolvable | CfnHoursOfOperation.OverrideTimeSliceProperty;
        /**
         * The start time when your contact center opens if overrides are applied.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationoverrideconfig.html#cfn-connect-hoursofoperation-hoursofoperationoverrideconfig-starttime
         */
        readonly startTime: cdk.IResolvable | CfnHoursOfOperation.OverrideTimeSliceProperty;
    }
    /**
     * The start time or end time for an hours of operation override.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-overridetimeslice.html
     */
    interface OverrideTimeSliceProperty {
        /**
         * The hours.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-overridetimeslice.html#cfn-connect-hoursofoperation-overridetimeslice-hours
         */
        readonly hours: number;
        /**
         * The minutes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-overridetimeslice.html#cfn-connect-hoursofoperation-overridetimeslice-minutes
         */
        readonly minutes: number;
    }
}
/**
 * Properties for defining a `CfnHoursOfOperation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html
 */
export interface CfnHoursOfOperationProps {
    /**
     * Configuration information for the hours of operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-config
     */
    readonly config: Array<CfnHoursOfOperation.HoursOfOperationConfigProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description for the hours of operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-description
     */
    readonly description?: string;
    /**
     * One or more hours of operation overrides assigned to an hour of operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-hoursofoperationoverrides
     */
    readonly hoursOfOperationOverrides?: Array<CfnHoursOfOperation.HoursOfOperationOverrideProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-instancearn
     */
    readonly instanceArn: string;
    /**
     * The name for the hours of operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-name
     */
    readonly name: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * For example, { "Tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The time zone for the hours of operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-timezone
     */
    readonly timeZone: string;
}
/**
 * *This is a preview release for Amazon Connect . It is subject to change.*.
 *
 * Initiates an Amazon Connect instance with all the supported channels enabled. It does not attach any storage, such as Amazon Simple Storage Service (Amazon S3) or Amazon Kinesis.
 *
 * Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days. If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances. You must wait 30 days before you can restart creating and deleting instances in your account.
 *
 * @cloudformationResource AWS::Connect::Instance
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html
 */
export declare class CfnInstance extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
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
     * The Amazon Resource Name (ARN) of the instance.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * When the instance was created.
     *
     * @cloudformationAttribute CreatedTime
     */
    readonly attrCreatedTime: string;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The state of the instance.
     *
     * @cloudformationAttribute InstanceStatus
     */
    readonly attrInstanceStatus: string;
    /**
     * The service role of the instance.
     *
     * @cloudformationAttribute ServiceRole
     */
    readonly attrServiceRole: string;
    /**
     * A toggle for an individual feature at the instance level.
     */
    attributes: CfnInstance.AttributesProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The identifier for the directory.
     */
    directoryId?: string;
    /**
     * The identity management type.
     */
    identityManagementType: string;
    /**
     * The alias of instance.
     */
    instanceAlias?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
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
     * *This is a preview release for Amazon Connect .
     *
     * It is subject to change.*
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instance-attributes.html
     */
    interface AttributesProperty {
        /**
         * Boolean flag which enables AUTO_RESOLVE_BEST_VOICES on an instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instance-attributes.html#cfn-connect-instance-attributes-autoresolvebestvoices
         */
        readonly autoResolveBestVoices?: boolean | cdk.IResolvable;
        /**
         * Boolean flag which enables CONTACTFLOW_LOGS on an instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instance-attributes.html#cfn-connect-instance-attributes-contactflowlogs
         */
        readonly contactflowLogs?: boolean | cdk.IResolvable;
        /**
         * Boolean flag which enables CONTACT_LENS on an instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instance-attributes.html#cfn-connect-instance-attributes-contactlens
         */
        readonly contactLens?: boolean | cdk.IResolvable;
        /**
         * Boolean flag which enables EARLY_MEDIA on an instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instance-attributes.html#cfn-connect-instance-attributes-earlymedia
         */
        readonly earlyMedia?: boolean | cdk.IResolvable;
        /**
         * Mandatory element which enables inbound calls on new instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instance-attributes.html#cfn-connect-instance-attributes-inboundcalls
         */
        readonly inboundCalls: boolean | cdk.IResolvable;
        /**
         * Mandatory element which enables outbound calls on new instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instance-attributes.html#cfn-connect-instance-attributes-outboundcalls
         */
        readonly outboundCalls: boolean | cdk.IResolvable;
        /**
         * Boolean flag which enables USE_CUSTOM_TTS_VOICES on an instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instance-attributes.html#cfn-connect-instance-attributes-usecustomttsvoices
         */
        readonly useCustomTtsVoices?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnInstance`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html
 */
export interface CfnInstanceProps {
    /**
     * A toggle for an individual feature at the instance level.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#cfn-connect-instance-attributes
     */
    readonly attributes: CfnInstance.AttributesProperty | cdk.IResolvable;
    /**
     * The identifier for the directory.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#cfn-connect-instance-directoryid
     */
    readonly directoryId?: string;
    /**
     * The identity management type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#cfn-connect-instance-identitymanagementtype
     */
    readonly identityManagementType: string;
    /**
     * The alias of instance.
     *
     * `InstanceAlias` is only required when `IdentityManagementType` is `CONNECT_MANAGED` or `SAML` . `InstanceAlias` is not required when `IdentityManagementType` is `EXISTING_DIRECTORY` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#cfn-connect-instance-instancealias
     */
    readonly instanceAlias?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#cfn-connect-instance-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The storage configuration for the instance.
 *
 * @cloudformationResource AWS::Connect::InstanceStorageConfig
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html
 */
export declare class CfnInstanceStorageConfig extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInstanceStorageConfig from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInstanceStorageConfig;
    /**
     * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
     *
     * @cloudformationAttribute AssociationId
     */
    readonly attrAssociationId: string;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    instanceArn: string;
    /**
     * The configuration of the Kinesis Firehose delivery stream.
     */
    kinesisFirehoseConfig?: cdk.IResolvable | CfnInstanceStorageConfig.KinesisFirehoseConfigProperty;
    /**
     * The configuration of the Kinesis data stream.
     */
    kinesisStreamConfig?: cdk.IResolvable | CfnInstanceStorageConfig.KinesisStreamConfigProperty;
    /**
     * The configuration of the Kinesis video stream.
     */
    kinesisVideoStreamConfig?: cdk.IResolvable | CfnInstanceStorageConfig.KinesisVideoStreamConfigProperty;
    /**
     * A valid resource type.
     */
    resourceType: string;
    /**
     * The S3 bucket configuration.
     */
    s3Config?: cdk.IResolvable | CfnInstanceStorageConfig.S3ConfigProperty;
    /**
     * A valid storage type.
     */
    storageType: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnInstanceStorageConfigProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnInstanceStorageConfig {
    /**
     * Configuration information of a Kinesis data stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-kinesisstreamconfig.html
     */
    interface KinesisStreamConfigProperty {
        /**
         * The Amazon Resource Name (ARN) of the data stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-kinesisstreamconfig.html#cfn-connect-instancestorageconfig-kinesisstreamconfig-streamarn
         */
        readonly streamArn: string;
    }
    /**
     * Information about the Amazon Simple Storage Service (Amazon S3) storage type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-s3config.html
     */
    interface S3ConfigProperty {
        /**
         * The S3 bucket name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-s3config.html#cfn-connect-instancestorageconfig-s3config-bucketname
         */
        readonly bucketName: string;
        /**
         * The S3 bucket prefix.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-s3config.html#cfn-connect-instancestorageconfig-s3config-bucketprefix
         */
        readonly bucketPrefix: string;
        /**
         * The Amazon S3 encryption configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-s3config.html#cfn-connect-instancestorageconfig-s3config-encryptionconfig
         */
        readonly encryptionConfig?: CfnInstanceStorageConfig.EncryptionConfigProperty | cdk.IResolvable;
    }
    /**
     * The encryption configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-encryptionconfig.html
     */
    interface EncryptionConfigProperty {
        /**
         * The type of encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-encryptionconfig.html#cfn-connect-instancestorageconfig-encryptionconfig-encryptiontype
         */
        readonly encryptionType: string;
        /**
         * The full ARN of the encryption key.
         *
         * > Be sure to provide the full ARN of the encryption key, not just the ID.
         * >
         * > Amazon Connect supports only KMS keys with the default key spec of [`SYMMETRIC_DEFAULT`](https://docs.aws.amazon.com/kms/latest/developerguide/asymmetric-key-specs.html#key-spec-symmetric-default) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-encryptionconfig.html#cfn-connect-instancestorageconfig-encryptionconfig-keyid
         */
        readonly keyId: string;
    }
    /**
     * Configuration information of a Kinesis video stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-kinesisvideostreamconfig.html
     */
    interface KinesisVideoStreamConfigProperty {
        /**
         * The encryption configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-kinesisvideostreamconfig.html#cfn-connect-instancestorageconfig-kinesisvideostreamconfig-encryptionconfig
         */
        readonly encryptionConfig: CfnInstanceStorageConfig.EncryptionConfigProperty | cdk.IResolvable;
        /**
         * The prefix of the video stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-kinesisvideostreamconfig.html#cfn-connect-instancestorageconfig-kinesisvideostreamconfig-prefix
         */
        readonly prefix: string;
        /**
         * The number of hours data is retained in the stream.
         *
         * Kinesis Video Streams retains the data in a data store that is associated with the stream.
         *
         * The default value is 0, indicating that the stream does not persist data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-kinesisvideostreamconfig.html#cfn-connect-instancestorageconfig-kinesisvideostreamconfig-retentionperiodhours
         */
        readonly retentionPeriodHours: number;
    }
    /**
     * Configuration information of a Kinesis Data Firehose delivery stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-kinesisfirehoseconfig.html
     */
    interface KinesisFirehoseConfigProperty {
        /**
         * The Amazon Resource Name (ARN) of the delivery stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-kinesisfirehoseconfig.html#cfn-connect-instancestorageconfig-kinesisfirehoseconfig-firehosearn
         */
        readonly firehoseArn: string;
    }
}
/**
 * Properties for defining a `CfnInstanceStorageConfig`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html
 */
export interface CfnInstanceStorageConfigProps {
    /**
     * The Amazon Resource Name (ARN) of the instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-instancearn
     */
    readonly instanceArn: string;
    /**
     * The configuration of the Kinesis Firehose delivery stream.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-kinesisfirehoseconfig
     */
    readonly kinesisFirehoseConfig?: cdk.IResolvable | CfnInstanceStorageConfig.KinesisFirehoseConfigProperty;
    /**
     * The configuration of the Kinesis data stream.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-kinesisstreamconfig
     */
    readonly kinesisStreamConfig?: cdk.IResolvable | CfnInstanceStorageConfig.KinesisStreamConfigProperty;
    /**
     * The configuration of the Kinesis video stream.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-kinesisvideostreamconfig
     */
    readonly kinesisVideoStreamConfig?: cdk.IResolvable | CfnInstanceStorageConfig.KinesisVideoStreamConfigProperty;
    /**
     * A valid resource type.
     *
     * Following are the valid resource types: `CHAT_TRANSCRIPTS` | `CALL_RECORDINGS` | `SCHEDULED_REPORTS` | `MEDIA_STREAMS` | `CONTACT_TRACE_RECORDS` | `AGENT_EVENTS`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-resourcetype
     */
    readonly resourceType: string;
    /**
     * The S3 bucket configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-s3config
     */
    readonly s3Config?: cdk.IResolvable | CfnInstanceStorageConfig.S3ConfigProperty;
    /**
     * A valid storage type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-storagetype
     */
    readonly storageType: string;
}
/**
 * Specifies the association of an AWS resource such as Lex bot (both v1 and v2) and Lambda function with an Amazon Connect instance.
 *
 * @cloudformationResource AWS::Connect::IntegrationAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-integrationassociation.html
 */
export declare class CfnIntegrationAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIntegrationAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIntegrationAssociation;
    /**
     * Identifier of the association with an Amazon Connect instance.
     *
     * @cloudformationAttribute IntegrationAssociationId
     */
    readonly attrIntegrationAssociationId: string;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    instanceId: string;
    /**
     * ARN of the integration being associated with the instance.
     */
    integrationArn: string;
    /**
     * Specifies the integration type to be associated with the instance.
     */
    integrationType: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIntegrationAssociationProps);
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
 * Properties for defining a `CfnIntegrationAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-integrationassociation.html
 */
export interface CfnIntegrationAssociationProps {
    /**
     * The Amazon Resource Name (ARN) of the instance.
     *
     * *Minimum* : `1`
     *
     * *Maximum* : `100`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-integrationassociation.html#cfn-connect-integrationassociation-instanceid
     */
    readonly instanceId: string;
    /**
     * ARN of the integration being associated with the instance.
     *
     * *Minimum* : `1`
     *
     * *Maximum* : `140`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-integrationassociation.html#cfn-connect-integrationassociation-integrationarn
     */
    readonly integrationArn: string;
    /**
     * Specifies the integration type to be associated with the instance.
     *
     * *Allowed Values* : `LEX_BOT` | `LAMBDA_FUNCTION`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-integrationassociation.html#cfn-connect-integrationassociation-integrationtype
     */
    readonly integrationType: string;
}
/**
 * Claims a phone number to the specified Amazon Connect instance or traffic distribution group.
 *
 * @cloudformationResource AWS::Connect::PhoneNumber
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-phonenumber.html
 */
export declare class CfnPhoneNumber extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPhoneNumber from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPhoneNumber;
    /**
     * The phone number, in E.164 format.
     *
     * @cloudformationAttribute Address
     */
    readonly attrAddress: string;
    /**
     * The Amazon Resource Name (ARN) of the phone number.
     *
     * @cloudformationAttribute PhoneNumberArn
     */
    readonly attrPhoneNumberArn: string;
    /**
     * The ISO country code.
     */
    countryCode?: string;
    /**
     * The description of the phone number.
     */
    description?: string;
    /**
     * The prefix of the phone number. If provided, it must contain `+` as part of the country code.
     */
    prefix?: string;
    /**
     * The claimed phone number ARN that was previously imported from the external service, such as AWS End User Messaging.
     */
    sourcePhoneNumberArn?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution group that phone numbers are claimed to.
     */
    targetArn: string;
    /**
     * The type of phone number.
     */
    type?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPhoneNumberProps);
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
 * Properties for defining a `CfnPhoneNumber`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-phonenumber.html
 */
export interface CfnPhoneNumberProps {
    /**
     * The ISO country code.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-phonenumber.html#cfn-connect-phonenumber-countrycode
     */
    readonly countryCode?: string;
    /**
     * The description of the phone number.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-phonenumber.html#cfn-connect-phonenumber-description
     */
    readonly description?: string;
    /**
     * The prefix of the phone number. If provided, it must contain `+` as part of the country code.
     *
     * *Pattern* : `^\\+[0-9]{1,15}`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-phonenumber.html#cfn-connect-phonenumber-prefix
     */
    readonly prefix?: string;
    /**
     * The claimed phone number ARN that was previously imported from the external service, such as AWS End User Messaging.
     *
     * If it is from AWS End User Messaging, it looks like the ARN of the phone number that was imported from AWS End User Messaging.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-phonenumber.html#cfn-connect-phonenumber-sourcephonenumberarn
     */
    readonly sourcePhoneNumberArn?: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-phonenumber.html#cfn-connect-phonenumber-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution group that phone numbers are claimed to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-phonenumber.html#cfn-connect-phonenumber-targetarn
     */
    readonly targetArn: string;
    /**
     * The type of phone number.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-phonenumber.html#cfn-connect-phonenumber-type
     */
    readonly type?: string;
}
/**
 * Creates a prompt for the specified Amazon Connect instance.
 *
 * @cloudformationResource AWS::Connect::Prompt
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-prompt.html
 */
export declare class CfnPrompt extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPrompt from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPrompt;
    /**
     * The Amazon Resource Name (ARN) of the prompt.
     *
     * @cloudformationAttribute PromptArn
     */
    readonly attrPromptArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the prompt.
     */
    description?: string;
    /**
     * The identifier of the Amazon Connect instance.
     */
    instanceArn: string;
    /**
     * The name of the prompt.
     */
    name: string;
    /**
     * The URI for the S3 bucket where the prompt is stored.
     */
    s3Uri?: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPromptProps);
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
 * Properties for defining a `CfnPrompt`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-prompt.html
 */
export interface CfnPromptProps {
    /**
     * The description of the prompt.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-prompt.html#cfn-connect-prompt-description
     */
    readonly description?: string;
    /**
     * The identifier of the Amazon Connect instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-prompt.html#cfn-connect-prompt-instancearn
     */
    readonly instanceArn: string;
    /**
     * The name of the prompt.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-prompt.html#cfn-connect-prompt-name
     */
    readonly name: string;
    /**
     * The URI for the S3 bucket where the prompt is stored.
     *
     * This property is required when you create a prompt.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-prompt.html#cfn-connect-prompt-s3uri
     */
    readonly s3Uri?: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-prompt.html#cfn-connect-prompt-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Contains information about a queue.
 *
 * @cloudformationResource AWS::Connect::Queue
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-queue.html
 */
export declare class CfnQueue extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnQueue from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnQueue;
    /**
     * The Amazon Resource Name (ARN) of the queue.
     *
     * @cloudformationAttribute QueueArn
     */
    readonly attrQueueArn: string;
    /**
     * The type of queue.
     *
     * @cloudformationAttribute Type
     */
    readonly attrType: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the queue.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of the hours of operation.
     */
    hoursOfOperationArn: string;
    /**
     * The identifier of the Amazon Connect instance.
     */
    instanceArn: string;
    /**
     * The maximum number of contacts that can be in the queue before it is considered full.
     */
    maxContacts?: number;
    /**
     * The name of the queue.
     */
    name: string;
    /**
     * The outbound caller ID name, number, and outbound whisper flow.
     */
    outboundCallerConfig?: cdk.IResolvable | CfnQueue.OutboundCallerConfigProperty;
    /**
     * The outbound email address ID for a specified queue.
     */
    outboundEmailConfig?: cdk.IResolvable | CfnQueue.OutboundEmailConfigProperty;
    /**
     * The Amazon Resource Names (ARN) of the of the quick connects available to agents who are working the queue.
     */
    quickConnectArns?: Array<string>;
    /**
     * The status of the queue.
     */
    status?: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnQueueProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnQueue {
    /**
     * The outbound caller ID name, number, and outbound whisper flow.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-queue-outboundcallerconfig.html
     */
    interface OutboundCallerConfigProperty {
        /**
         * The caller ID name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-queue-outboundcallerconfig.html#cfn-connect-queue-outboundcallerconfig-outboundcalleridname
         */
        readonly outboundCallerIdName?: string;
        /**
         * The Amazon Resource Name (ARN) of the outbound caller ID number.
         *
         * > Only use the phone number ARN format that doesn't contain `instance` in the path, for example, `arn:aws:connect:us-east-1:1234567890:phone-number/uuid` . This is the same ARN format that is returned when you create a phone number using CloudFormation , or when you call the [ListPhoneNumbersV2](https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbersV2.html) API.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-queue-outboundcallerconfig.html#cfn-connect-queue-outboundcallerconfig-outboundcalleridnumberarn
         */
        readonly outboundCallerIdNumberArn?: string;
        /**
         * The Amazon Resource Name (ARN) of the outbound flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-queue-outboundcallerconfig.html#cfn-connect-queue-outboundcallerconfig-outboundflowarn
         */
        readonly outboundFlowArn?: string;
    }
    /**
     * The outbound email address Id.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-queue-outboundemailconfig.html
     */
    interface OutboundEmailConfigProperty {
        /**
         * The identifier of the email address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-queue-outboundemailconfig.html#cfn-connect-queue-outboundemailconfig-outboundemailaddressid
         */
        readonly outboundEmailAddressId?: string;
    }
}
/**
 * Properties for defining a `CfnQueue`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-queue.html
 */
export interface CfnQueueProps {
    /**
     * The description of the queue.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-queue.html#cfn-connect-queue-description
     */
    readonly description?: string;
    /**
     * The Amazon Resource Name (ARN) of the hours of operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-queue.html#cfn-connect-queue-hoursofoperationarn
     */
    readonly hoursOfOperationArn: string;
    /**
     * The identifier of the Amazon Connect instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-queue.html#cfn-connect-queue-instancearn
     */
    readonly instanceArn: string;
    /**
     * The maximum number of contacts that can be in the queue before it is considered full.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-queue.html#cfn-connect-queue-maxcontacts
     */
    readonly maxContacts?: number;
    /**
     * The name of the queue.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-queue.html#cfn-connect-queue-name
     */
    readonly name: string;
    /**
     * The outbound caller ID name, number, and outbound whisper flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-queue.html#cfn-connect-queue-outboundcallerconfig
     */
    readonly outboundCallerConfig?: cdk.IResolvable | CfnQueue.OutboundCallerConfigProperty;
    /**
     * The outbound email address ID for a specified queue.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-queue.html#cfn-connect-queue-outboundemailconfig
     */
    readonly outboundEmailConfig?: cdk.IResolvable | CfnQueue.OutboundEmailConfigProperty;
    /**
     * The Amazon Resource Names (ARN) of the of the quick connects available to agents who are working the queue.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-queue.html#cfn-connect-queue-quickconnectarns
     */
    readonly quickConnectArns?: Array<string>;
    /**
     * The status of the queue.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-queue.html#cfn-connect-queue-status
     */
    readonly status?: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * For example, { "Tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-queue.html#cfn-connect-queue-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies a quick connect for an Amazon Connect instance.
 *
 * @cloudformationResource AWS::Connect::QuickConnect
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-quickconnect.html
 */
export declare class CfnQuickConnect extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnQuickConnect from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnQuickConnect;
    /**
     * The Amazon Resource Name (ARN) for the quick connect.
     *
     * @cloudformationAttribute QuickConnectArn
     */
    readonly attrQuickConnectArn: string;
    /**
     * The type of quick connect. In the Amazon Connect admin website, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).
     *
     * @cloudformationAttribute QuickConnectType
     */
    readonly attrQuickConnectType: string;
    /**
     * The description of the quick connect.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    instanceArn: string;
    /**
     * The name of the quick connect.
     */
    name: string;
    /**
     * Contains information about the quick connect.
     */
    quickConnectConfig: cdk.IResolvable | CfnQuickConnect.QuickConnectConfigProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnQuickConnectProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnQuickConnect {
    /**
     * Contains configuration settings for a quick connect.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-quickconnectconfig.html
     */
    interface QuickConnectConfigProperty {
        /**
         * The phone configuration.
         *
         * This is required only if QuickConnectType is PHONE_NUMBER.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-quickconnectconfig.html#cfn-connect-quickconnect-quickconnectconfig-phoneconfig
         */
        readonly phoneConfig?: cdk.IResolvable | CfnQuickConnect.PhoneNumberQuickConnectConfigProperty;
        /**
         * The queue configuration.
         *
         * This is required only if QuickConnectType is QUEUE.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-quickconnectconfig.html#cfn-connect-quickconnect-quickconnectconfig-queueconfig
         */
        readonly queueConfig?: cdk.IResolvable | CfnQuickConnect.QueueQuickConnectConfigProperty;
        /**
         * The type of quick connect.
         *
         * In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-quickconnectconfig.html#cfn-connect-quickconnect-quickconnectconfig-quickconnecttype
         */
        readonly quickConnectType: string;
        /**
         * The user configuration.
         *
         * This is required only if QuickConnectType is USER.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-quickconnectconfig.html#cfn-connect-quickconnect-quickconnectconfig-userconfig
         */
        readonly userConfig?: cdk.IResolvable | CfnQuickConnect.UserQuickConnectConfigProperty;
    }
    /**
     * Contains information about a queue for a quick connect.
     *
     * The flow must be of type Transfer to Queue.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-queuequickconnectconfig.html
     */
    interface QueueQuickConnectConfigProperty {
        /**
         * The Amazon Resource Name (ARN) of the flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-queuequickconnectconfig.html#cfn-connect-quickconnect-queuequickconnectconfig-contactflowarn
         */
        readonly contactFlowArn: string;
        /**
         * The Amazon Resource Name (ARN) of the queue.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-queuequickconnectconfig.html#cfn-connect-quickconnect-queuequickconnectconfig-queuearn
         */
        readonly queueArn: string;
    }
    /**
     * Contains information about a phone number for a quick connect.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-phonenumberquickconnectconfig.html
     */
    interface PhoneNumberQuickConnectConfigProperty {
        /**
         * The phone number in E.164 format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-phonenumberquickconnectconfig.html#cfn-connect-quickconnect-phonenumberquickconnectconfig-phonenumber
         */
        readonly phoneNumber: string;
    }
    /**
     * Contains information about the quick connect configuration settings for a user.
     *
     * The contact flow must be of type Transfer to Agent.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-userquickconnectconfig.html
     */
    interface UserQuickConnectConfigProperty {
        /**
         * The Amazon Resource Name (ARN) of the flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-userquickconnectconfig.html#cfn-connect-quickconnect-userquickconnectconfig-contactflowarn
         */
        readonly contactFlowArn: string;
        /**
         * The Amazon Resource Name (ARN) of the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-userquickconnectconfig.html#cfn-connect-quickconnect-userquickconnectconfig-userarn
         */
        readonly userArn: string;
    }
}
/**
 * Properties for defining a `CfnQuickConnect`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-quickconnect.html
 */
export interface CfnQuickConnectProps {
    /**
     * The description of the quick connect.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-quickconnect.html#cfn-connect-quickconnect-description
     */
    readonly description?: string;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-quickconnect.html#cfn-connect-quickconnect-instancearn
     */
    readonly instanceArn: string;
    /**
     * The name of the quick connect.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-quickconnect.html#cfn-connect-quickconnect-name
     */
    readonly name: string;
    /**
     * Contains information about the quick connect.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-quickconnect.html#cfn-connect-quickconnect-quickconnectconfig
     */
    readonly quickConnectConfig: cdk.IResolvable | CfnQuickConnect.QuickConnectConfigProperty;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * For example, { "Tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-quickconnect.html#cfn-connect-quickconnect-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a new routing profile.
 *
 * @cloudformationResource AWS::Connect::RoutingProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-routingprofile.html
 */
export declare class CfnRoutingProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRoutingProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRoutingProfile;
    /**
     * The Amazon Resource Name (ARN) of the routing profile.
     *
     * @cloudformationAttribute RoutingProfileArn
     */
    readonly attrRoutingProfileArn: string;
    /**
     * Whether agents with this routing profile will have their routing order calculated based on *time since their last inbound contact* or *longest idle time* .
     */
    agentAvailabilityTimer?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The Amazon Resource Name (ARN) of the default outbound queue for the routing profile.
     */
    defaultOutboundQueueArn: string;
    /**
     * The description of the routing profile.
     */
    description: string;
    /**
     * The identifier of the Amazon Connect instance.
     */
    instanceArn: string;
    /**
     * The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.
     */
    mediaConcurrencies: Array<cdk.IResolvable | CfnRoutingProfile.MediaConcurrencyProperty> | cdk.IResolvable;
    /**
     * The name of the routing profile.
     */
    name: string;
    /**
     * The inbound queues associated with the routing profile.
     */
    queueConfigs?: Array<cdk.IResolvable | CfnRoutingProfile.RoutingProfileQueueConfigProperty> | cdk.IResolvable;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRoutingProfileProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRoutingProfile {
    /**
     * Contains information about which channels are supported, and how many contacts an agent can have on a channel simultaneously.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-mediaconcurrency.html
     */
    interface MediaConcurrencyProperty {
        /**
         * The channels that agents can handle in the Contact Control Panel (CCP).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-mediaconcurrency.html#cfn-connect-routingprofile-mediaconcurrency-channel
         */
        readonly channel: string;
        /**
         * The number of contacts an agent can have on a channel simultaneously.
         *
         * Valid Range for `VOICE` : Minimum value of 1. Maximum value of 1.
         *
         * Valid Range for `CHAT` : Minimum value of 1. Maximum value of 10.
         *
         * Valid Range for `TASK` : Minimum value of 1. Maximum value of 10.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-mediaconcurrency.html#cfn-connect-routingprofile-mediaconcurrency-concurrency
         */
        readonly concurrency: number;
        /**
         * Defines the cross-channel routing behavior for each channel that is enabled for this Routing Profile.
         *
         * For example, this allows you to offer an agent a different contact from another channel when they are currently working with a contact from a Voice channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-mediaconcurrency.html#cfn-connect-routingprofile-mediaconcurrency-crosschannelbehavior
         */
        readonly crossChannelBehavior?: CfnRoutingProfile.CrossChannelBehaviorProperty | cdk.IResolvable;
    }
    /**
     * Defines the cross-channel routing behavior that allows an agent working on a contact in one channel to be offered a contact from a different channel.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-crosschannelbehavior.html
     */
    interface CrossChannelBehaviorProperty {
        /**
         * Specifies the other channels that can be routed to an agent handling their current channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-crosschannelbehavior.html#cfn-connect-routingprofile-crosschannelbehavior-behaviortype
         */
        readonly behaviorType: string;
    }
    /**
     * Contains information about the queue and channel for which priority and delay can be set.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-routingprofilequeueconfig.html
     */
    interface RoutingProfileQueueConfigProperty {
        /**
         * The delay, in seconds, a contact should be in the queue before they are routed to an available agent.
         *
         * For more information, see [Queues: priority and delay](https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html) in the *Amazon Connect Administrator Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-routingprofilequeueconfig.html#cfn-connect-routingprofile-routingprofilequeueconfig-delay
         */
        readonly delay: number;
        /**
         * The order in which contacts are to be handled for the queue.
         *
         * For more information, see [Queues: priority and delay](https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-routingprofilequeueconfig.html#cfn-connect-routingprofile-routingprofilequeueconfig-priority
         */
        readonly priority: number;
        /**
         * Contains information about a queue resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-routingprofilequeueconfig.html#cfn-connect-routingprofile-routingprofilequeueconfig-queuereference
         */
        readonly queueReference: cdk.IResolvable | CfnRoutingProfile.RoutingProfileQueueReferenceProperty;
    }
    /**
     * Contains the channel and queue identifier for a routing profile.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-routingprofilequeuereference.html
     */
    interface RoutingProfileQueueReferenceProperty {
        /**
         * The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-routingprofilequeuereference.html#cfn-connect-routingprofile-routingprofilequeuereference-channel
         */
        readonly channel: string;
        /**
         * The Amazon Resource Name (ARN) of the queue.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-routingprofilequeuereference.html#cfn-connect-routingprofile-routingprofilequeuereference-queuearn
         */
        readonly queueArn: string;
    }
}
/**
 * Properties for defining a `CfnRoutingProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-routingprofile.html
 */
export interface CfnRoutingProfileProps {
    /**
     * Whether agents with this routing profile will have their routing order calculated based on *time since their last inbound contact* or *longest idle time* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-routingprofile.html#cfn-connect-routingprofile-agentavailabilitytimer
     */
    readonly agentAvailabilityTimer?: string;
    /**
     * The Amazon Resource Name (ARN) of the default outbound queue for the routing profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-routingprofile.html#cfn-connect-routingprofile-defaultoutboundqueuearn
     */
    readonly defaultOutboundQueueArn: string;
    /**
     * The description of the routing profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-routingprofile.html#cfn-connect-routingprofile-description
     */
    readonly description: string;
    /**
     * The identifier of the Amazon Connect instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-routingprofile.html#cfn-connect-routingprofile-instancearn
     */
    readonly instanceArn: string;
    /**
     * The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-routingprofile.html#cfn-connect-routingprofile-mediaconcurrencies
     */
    readonly mediaConcurrencies: Array<cdk.IResolvable | CfnRoutingProfile.MediaConcurrencyProperty> | cdk.IResolvable;
    /**
     * The name of the routing profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-routingprofile.html#cfn-connect-routingprofile-name
     */
    readonly name: string;
    /**
     * The inbound queues associated with the routing profile.
     *
     * If no queue is added, the agent can make only outbound calls.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-routingprofile.html#cfn-connect-routingprofile-queueconfigs
     */
    readonly queueConfigs?: Array<cdk.IResolvable | CfnRoutingProfile.RoutingProfileQueueConfigProperty> | cdk.IResolvable;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * For example, { "Tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-routingprofile.html#cfn-connect-routingprofile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a rule for the specified Amazon Connect instance.
 *
 * @cloudformationResource AWS::Connect::Rule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-rule.html
 */
export declare class CfnRule extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRule;
    /**
     * The Amazon Resource Name (ARN) of the rule.
     *
     * @cloudformationAttribute RuleArn
     */
    readonly attrRuleArn: string;
    /**
     * A list of actions to be run when the rule is triggered.
     */
    actions: CfnRule.ActionsProperty | cdk.IResolvable;
    /**
     * The conditions of the rule.
     */
    function: string;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    instanceArn: string;
    /**
     * The name of the rule.
     */
    name: string;
    /**
     * The publish status of the rule.
     */
    publishStatus: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The event source to trigger the rule.
     */
    triggerEventSource: cdk.IResolvable | CfnRule.RuleTriggerEventSourceProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRuleProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRule {
    /**
     * The name of the event source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-ruletriggereventsource.html
     */
    interface RuleTriggerEventSourceProperty {
        /**
         * The name of the event source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-ruletriggereventsource.html#cfn-connect-rule-ruletriggereventsource-eventsourcename
         */
        readonly eventSourceName: string;
        /**
         * The Amazon Resource Name (ARN) of the integration association.
         *
         * `IntegrationAssociationArn` is required if `TriggerEventSource` is one of the following values: `OnZendeskTicketCreate` | `OnZendeskTicketStatusUpdate` | `OnSalesforceCaseCreate`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-ruletriggereventsource.html#cfn-connect-rule-ruletriggereventsource-integrationassociationarn
         */
        readonly integrationAssociationArn?: string;
    }
    /**
     * A list of actions to be run when the rule is triggered.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-actions.html
     */
    interface ActionsProperty {
        /**
         * Information about the contact category action.
         *
         * The syntax can be empty, for example, `{}` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-actions.html#cfn-connect-rule-actions-assigncontactcategoryactions
         */
        readonly assignContactCategoryActions?: Array<any | cdk.IResolvable> | cdk.IResolvable;
        /**
         * This action will create a case when a rule is triggered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-actions.html#cfn-connect-rule-actions-createcaseactions
         */
        readonly createCaseActions?: Array<CfnRule.CreateCaseActionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * This action will end associated tasks when a rule is triggered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-actions.html#cfn-connect-rule-actions-endassociatedtasksactions
         */
        readonly endAssociatedTasksActions?: Array<any | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Information about the EventBridge action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-actions.html#cfn-connect-rule-actions-eventbridgeactions
         */
        readonly eventBridgeActions?: Array<CfnRule.EventBridgeActionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Information about the send notification action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-actions.html#cfn-connect-rule-actions-sendnotificationactions
         */
        readonly sendNotificationActions?: Array<cdk.IResolvable | CfnRule.SendNotificationActionProperty> | cdk.IResolvable;
        /**
         * This action will submit an auto contact evaluation when a rule is triggered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-actions.html#cfn-connect-rule-actions-submitautoevaluationactions
         */
        readonly submitAutoEvaluationActions?: Array<cdk.IResolvable | CfnRule.SubmitAutoEvaluationActionProperty> | cdk.IResolvable;
        /**
         * Information about the task action.
         *
         * This field is required if `TriggerEventSource` is one of the following values: `OnZendeskTicketCreate` | `OnZendeskTicketStatusUpdate` | `OnSalesforceCaseCreate`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-actions.html#cfn-connect-rule-actions-taskactions
         */
        readonly taskActions?: Array<cdk.IResolvable | CfnRule.TaskActionProperty> | cdk.IResolvable;
        /**
         * This action will update a case when a rule is triggered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-actions.html#cfn-connect-rule-actions-updatecaseactions
         */
        readonly updateCaseActions?: Array<cdk.IResolvable | CfnRule.UpdateCaseActionProperty> | cdk.IResolvable;
    }
    /**
     * The EventBridge action definition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-eventbridgeaction.html
     */
    interface EventBridgeActionProperty {
        /**
         * The name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-eventbridgeaction.html#cfn-connect-rule-eventbridgeaction-name
         */
        readonly name: string;
    }
    /**
     * Information about the task action.
     *
     * This field is required if `TriggerEventSource` is one of the following values: `OnZendeskTicketCreate` | `OnZendeskTicketStatusUpdate` | `OnSalesforceCaseCreate`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-taskaction.html
     */
    interface TaskActionProperty {
        /**
         * The Amazon Resource Name (ARN) of the flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-taskaction.html#cfn-connect-rule-taskaction-contactflowarn
         */
        readonly contactFlowArn: string;
        /**
         * The description.
         *
         * Supports variable injection. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the *Amazon Connect Administrators Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-taskaction.html#cfn-connect-rule-taskaction-description
         */
        readonly description?: string;
        /**
         * The name.
         *
         * Supports variable injection. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the *Amazon Connect Administrators Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-taskaction.html#cfn-connect-rule-taskaction-name
         */
        readonly name: string;
        /**
         * Information about the reference when the `referenceType` is `URL` .
         *
         * Otherwise, null. `URL` is the only accepted type. (Supports variable injection in the `Value` field.)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-taskaction.html#cfn-connect-rule-taskaction-references
         */
        readonly references?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnRule.ReferenceProperty>;
    }
    /**
     * Information about the reference when the `referenceType` is `URL` .
     *
     * Otherwise, null. (Supports variable injection in the `Value` field.)
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-reference.html
     */
    interface ReferenceProperty {
        /**
         * The type of the reference. `DATE` must be of type Epoch timestamp.
         *
         * *Allowed values* : `URL` | `ATTACHMENT` | `NUMBER` | `STRING` | `DATE` | `EMAIL`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-reference.html#cfn-connect-rule-reference-type
         */
        readonly type: string;
        /**
         * A valid value for the reference.
         *
         * For example, for a URL reference, a formatted URL that is displayed to an agent in the Contact Control Panel (CCP).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-reference.html#cfn-connect-rule-reference-value
         */
        readonly value: string;
    }
    /**
     * Information about the send notification action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-sendnotificationaction.html
     */
    interface SendNotificationActionProperty {
        /**
         * Notification content.
         *
         * Supports variable injection. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the *Amazon Connect Administrators Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-sendnotificationaction.html#cfn-connect-rule-sendnotificationaction-content
         */
        readonly content: string;
        /**
         * Content type format.
         *
         * *Allowed value* : `PLAIN_TEXT`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-sendnotificationaction.html#cfn-connect-rule-sendnotificationaction-contenttype
         */
        readonly contentType: string;
        /**
         * Notification delivery method.
         *
         * *Allowed value* : `EMAIL`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-sendnotificationaction.html#cfn-connect-rule-sendnotificationaction-deliverymethod
         */
        readonly deliveryMethod: string;
        /**
         * Notification recipient.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-sendnotificationaction.html#cfn-connect-rule-sendnotificationaction-recipient
         */
        readonly recipient: cdk.IResolvable | CfnRule.NotificationRecipientTypeProperty;
        /**
         * The subject of the email if the delivery method is `EMAIL` .
         *
         * Supports variable injection. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the *Amazon Connect Administrators Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-sendnotificationaction.html#cfn-connect-rule-sendnotificationaction-subject
         */
        readonly subject?: string;
    }
    /**
     * The type of notification recipient.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-notificationrecipienttype.html
     */
    interface NotificationRecipientTypeProperty {
        /**
         * The Amazon Resource Name (ARN) of the user account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-notificationrecipienttype.html#cfn-connect-rule-notificationrecipienttype-userarns
         */
        readonly userArns?: Array<string>;
        /**
         * The tags used to organize, track, or control access for this resource.
         *
         * For example, { "tags": {"key1":"value1", "key2":"value2"} }. Amazon Connect users with the specified tags will be notified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-notificationrecipienttype.html#cfn-connect-rule-notificationrecipienttype-usertags
         */
        readonly userTags?: cdk.IResolvable | Record<string, string>;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-createcaseaction.html
     */
    interface CreateCaseActionProperty {
        /**
         * An array of case fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-createcaseaction.html#cfn-connect-rule-createcaseaction-fields
         */
        readonly fields: Array<CfnRule.FieldProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-createcaseaction.html#cfn-connect-rule-createcaseaction-templateid
         */
        readonly templateId: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-field.html
     */
    interface FieldProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-field.html#cfn-connect-rule-field-id
         */
        readonly id: string;
        /**
         * Object for case field values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-field.html#cfn-connect-rule-field-value
         */
        readonly value: CfnRule.FieldValueProperty | cdk.IResolvable;
    }
    /**
     * Object for case field values.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-fieldvalue.html
     */
    interface FieldValueProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-fieldvalue.html#cfn-connect-rule-fieldvalue-booleanvalue
         */
        readonly booleanValue?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-fieldvalue.html#cfn-connect-rule-fieldvalue-doublevalue
         */
        readonly doubleValue?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-fieldvalue.html#cfn-connect-rule-fieldvalue-emptyvalue
         */
        readonly emptyValue?: any | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-fieldvalue.html#cfn-connect-rule-fieldvalue-stringvalue
         */
        readonly stringValue?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-updatecaseaction.html
     */
    interface UpdateCaseActionProperty {
        /**
         * An array of case fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-updatecaseaction.html#cfn-connect-rule-updatecaseaction-fields
         */
        readonly fields: Array<CfnRule.FieldProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-submitautoevaluationaction.html
     */
    interface SubmitAutoEvaluationActionProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-submitautoevaluationaction.html#cfn-connect-rule-submitautoevaluationaction-evaluationformarn
         */
        readonly evaluationFormArn: string;
    }
}
/**
 * Properties for defining a `CfnRule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-rule.html
 */
export interface CfnRuleProps {
    /**
     * A list of actions to be run when the rule is triggered.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-rule.html#cfn-connect-rule-actions
     */
    readonly actions: CfnRule.ActionsProperty | cdk.IResolvable;
    /**
     * The conditions of the rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-rule.html#cfn-connect-rule-function
     */
    readonly function: string;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-rule.html#cfn-connect-rule-instancearn
     */
    readonly instanceArn: string;
    /**
     * The name of the rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-rule.html#cfn-connect-rule-name
     */
    readonly name: string;
    /**
     * The publish status of the rule.
     *
     * *Allowed values* : `DRAFT` | `PUBLISHED`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-rule.html#cfn-connect-rule-publishstatus
     */
    readonly publishStatus: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-rule.html#cfn-connect-rule-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The event source to trigger the rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-rule.html#cfn-connect-rule-triggereventsource
     */
    readonly triggerEventSource: cdk.IResolvable | CfnRule.RuleTriggerEventSourceProperty;
}
/**
 * The security key for the instance.
 *
 * > Only two security keys are allowed per Amazon Connect instance.
 *
 * @cloudformationResource AWS::Connect::SecurityKey
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securitykey.html
 */
export declare class CfnSecurityKey extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSecurityKey from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSecurityKey;
    /**
     * An `AssociationId` is automatically generated when a storage config is associated with an instance.
     *
     * @cloudformationAttribute AssociationId
     */
    readonly attrAssociationId: string;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    instanceId: string;
    /**
     * A valid security key in PEM format. For example:.
     */
    key: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSecurityKeyProps);
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
 * Properties for defining a `CfnSecurityKey`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securitykey.html
 */
export interface CfnSecurityKeyProps {
    /**
     * The Amazon Resource Name (ARN) of the instance.
     *
     * *Minimum* : `1`
     *
     * *Maximum* : `100`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securitykey.html#cfn-connect-securitykey-instanceid
     */
    readonly instanceId: string;
    /**
     * A valid security key in PEM format. For example:.
     *
     * `"-----BEGIN PUBLIC KEY-----\ [a lot of characters] ----END PUBLIC KEY-----"`
     *
     * *Minimum* : `1`
     *
     * *Maximum* : `1024`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securitykey.html#cfn-connect-securitykey-key
     */
    readonly key: string;
}
/**
 * Creates a security profile.
 *
 * For information about security profiles, see [Security Profiles](https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html) in the *Amazon Connect Administrator Guide* . For a mapping of the API name and user interface name of the security profile permissions, see [List of security profile permissions](https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html) .
 *
 * @cloudformationResource AWS::Connect::SecurityProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html
 */
export declare class CfnSecurityProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSecurityProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSecurityProfile;
    /**
     * The AWS Region where this resource was last modified.
     *
     * @cloudformationAttribute LastModifiedRegion
     */
    readonly attrLastModifiedRegion: string;
    /**
     * The timestamp when this resource was last modified.
     *
     * @cloudformationAttribute LastModifiedTime
     */
    readonly attrLastModifiedTime: cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the security profile.
     *
     * @cloudformationAttribute SecurityProfileArn
     */
    readonly attrSecurityProfileArn: string;
    /**
     * The identifier of the hierarchy group that a security profile uses to restrict access to resources in Amazon Connect.
     */
    allowedAccessControlHierarchyGroupId?: string;
    /**
     * The list of tags that a security profile uses to restrict access to resources in Amazon Connect.
     */
    allowedAccessControlTags?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A list of third-party applications that the security profile will give access to.
     */
    applications?: Array<CfnSecurityProfile.ApplicationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the security profile.
     */
    description?: string;
    /**
     * The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect.
     */
    hierarchyRestrictedResources?: Array<string>;
    /**
     * The identifier of the Amazon Connect instance.
     */
    instanceArn: string;
    /**
     * Permissions assigned to the security profile.
     */
    permissions?: Array<string>;
    /**
     * The name for the security profile.
     */
    securityProfileName: string;
    /**
     * The list of resources that a security profile applies tag restrictions to in Amazon Connect.
     */
    tagRestrictedResources?: Array<string>;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSecurityProfileProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSecurityProfile {
    /**
     * This API is in preview release for Amazon Connect and is subject to change.
     *
     * A third-party application's metadata.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-securityprofile-application.html
     */
    interface ApplicationProperty {
        /**
         * The permissions that the agent is granted on the application.
         *
         * Only the `ACCESS` permission is supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-securityprofile-application.html#cfn-connect-securityprofile-application-applicationpermissions
         */
        readonly applicationPermissions: Array<string>;
        /**
         * Namespace of the application that you want to give access to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-securityprofile-application.html#cfn-connect-securityprofile-application-namespace
         */
        readonly namespace: string;
    }
}
/**
 * Properties for defining a `CfnSecurityProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html
 */
export interface CfnSecurityProfileProps {
    /**
     * The identifier of the hierarchy group that a security profile uses to restrict access to resources in Amazon Connect.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html#cfn-connect-securityprofile-allowedaccesscontrolhierarchygroupid
     */
    readonly allowedAccessControlHierarchyGroupId?: string;
    /**
     * The list of tags that a security profile uses to restrict access to resources in Amazon Connect.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html#cfn-connect-securityprofile-allowedaccesscontroltags
     */
    readonly allowedAccessControlTags?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A list of third-party applications that the security profile will give access to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html#cfn-connect-securityprofile-applications
     */
    readonly applications?: Array<CfnSecurityProfile.ApplicationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the security profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html#cfn-connect-securityprofile-description
     */
    readonly description?: string;
    /**
     * The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect.
     *
     * Following are acceptable ResourceNames: `User` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html#cfn-connect-securityprofile-hierarchyrestrictedresources
     */
    readonly hierarchyRestrictedResources?: Array<string>;
    /**
     * The identifier of the Amazon Connect instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html#cfn-connect-securityprofile-instancearn
     */
    readonly instanceArn: string;
    /**
     * Permissions assigned to the security profile.
     *
     * For a list of valid permissions, see [List of security profile permissions](https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html#cfn-connect-securityprofile-permissions
     */
    readonly permissions?: Array<string>;
    /**
     * The name for the security profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html#cfn-connect-securityprofile-securityprofilename
     */
    readonly securityProfileName: string;
    /**
     * The list of resources that a security profile applies tag restrictions to in Amazon Connect.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html#cfn-connect-securityprofile-tagrestrictedresources
     */
    readonly tagRestrictedResources?: Array<string>;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * For example, { "Tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html#cfn-connect-securityprofile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies a task template for a Amazon Connect instance.
 *
 * @cloudformationResource AWS::Connect::TaskTemplate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html
 */
export declare class CfnTaskTemplate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTaskTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTaskTemplate;
    /**
     * The Amazon Resource Name (ARN) of the task template.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientToken?: string;
    /**
     * Constraints that are applicable to the fields listed.
     */
    constraints?: any | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the flow that runs by default when a task is created by referencing this template.
     */
    contactFlowArn?: string;
    /**
     * The default values for fields when a task is created by referencing this template.
     */
    defaults?: Array<CfnTaskTemplate.DefaultFieldValueProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the task template.
     */
    description?: string;
    /**
     * Fields that are part of the template.
     */
    fields?: Array<CfnTaskTemplate.FieldProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Connect instance.
     */
    instanceArn: string;
    /**
     * The name of the task template.
     */
    name?: string;
    /**
     * The Amazon Resource Name (ARN) of the flow.
     */
    selfAssignContactFlowArn?: string;
    /**
     * The status of the task template.
     */
    status?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTaskTemplateProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTaskTemplate {
    /**
     * Describes constraints that apply to the template fields.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-constraints.html
     */
    interface ConstraintsProperty {
        /**
         * Lists the fields that are invisible to agents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-constraints.html#cfn-connect-tasktemplate-constraints-invisiblefields
         */
        readonly invisibleFields?: Array<CfnTaskTemplate.InvisibleFieldInfoProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Lists the fields that are read-only to agents, and cannot be edited.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-constraints.html#cfn-connect-tasktemplate-constraints-readonlyfields
         */
        readonly readOnlyFields?: Array<cdk.IResolvable | CfnTaskTemplate.ReadOnlyFieldInfoProperty> | cdk.IResolvable;
        /**
         * Lists the fields that are required to be filled by agents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-constraints.html#cfn-connect-tasktemplate-constraints-requiredfields
         */
        readonly requiredFields?: Array<cdk.IResolvable | CfnTaskTemplate.RequiredFieldInfoProperty> | cdk.IResolvable;
    }
    /**
     * Indicates a field that is read-only to an agent.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-readonlyfieldinfo.html
     */
    interface ReadOnlyFieldInfoProperty {
        /**
         * Identifier of the read-only field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-readonlyfieldinfo.html#cfn-connect-tasktemplate-readonlyfieldinfo-id
         */
        readonly id: CfnTaskTemplate.FieldIdentifierProperty | cdk.IResolvable;
    }
    /**
     * The identifier of the task template field.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-fieldidentifier.html
     */
    interface FieldIdentifierProperty {
        /**
         * The name of the task template field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-fieldidentifier.html#cfn-connect-tasktemplate-fieldidentifier-name
         */
        readonly name: string;
    }
    /**
     * A field that is invisible to an agent.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-invisiblefieldinfo.html
     */
    interface InvisibleFieldInfoProperty {
        /**
         * Identifier of the invisible field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-invisiblefieldinfo.html#cfn-connect-tasktemplate-invisiblefieldinfo-id
         */
        readonly id: CfnTaskTemplate.FieldIdentifierProperty | cdk.IResolvable;
    }
    /**
     * Information about a required field.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-requiredfieldinfo.html
     */
    interface RequiredFieldInfoProperty {
        /**
         * The unique identifier for the field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-requiredfieldinfo.html#cfn-connect-tasktemplate-requiredfieldinfo-id
         */
        readonly id: CfnTaskTemplate.FieldIdentifierProperty | cdk.IResolvable;
    }
    /**
     * Describes a default field and its corresponding value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-defaultfieldvalue.html
     */
    interface DefaultFieldValueProperty {
        /**
         * Default value for the field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-defaultfieldvalue.html#cfn-connect-tasktemplate-defaultfieldvalue-defaultvalue
         */
        readonly defaultValue: string;
        /**
         * Identifier of a field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-defaultfieldvalue.html#cfn-connect-tasktemplate-defaultfieldvalue-id
         */
        readonly id: CfnTaskTemplate.FieldIdentifierProperty | cdk.IResolvable;
    }
    /**
     * Describes a single task template field.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-field.html
     */
    interface FieldProperty {
        /**
         * The description of the field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-field.html#cfn-connect-tasktemplate-field-description
         */
        readonly description?: string;
        /**
         * The unique identifier for the field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-field.html#cfn-connect-tasktemplate-field-id
         */
        readonly id: CfnTaskTemplate.FieldIdentifierProperty | cdk.IResolvable;
        /**
         * A list of options for a single select field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-field.html#cfn-connect-tasktemplate-field-singleselectoptions
         */
        readonly singleSelectOptions?: Array<string>;
        /**
         * Indicates the type of field.
         *
         * Following are the valid field types: `NAME` `DESCRIPTION` | `SCHEDULED_TIME` | `QUICK_CONNECT` | `URL` | `NUMBER` | `TEXT` | `TEXT_AREA` | `DATE_TIME` | `BOOLEAN` | `SINGLE_SELECT` | `EMAIL`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-field.html#cfn-connect-tasktemplate-field-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnTaskTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html
 */
export interface CfnTaskTemplateProps {
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-clienttoken
     */
    readonly clientToken?: string;
    /**
     * Constraints that are applicable to the fields listed.
     *
     * The values can be represented in either JSON or YAML format. For an example of the JSON configuration, see *Examples* at the bottom of this page.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-constraints
     */
    readonly constraints?: any | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the flow that runs by default when a task is created by referencing this template.
     *
     * `ContactFlowArn` is not required when there is a field with `fieldType` = `QUICK_CONNECT` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-contactflowarn
     */
    readonly contactFlowArn?: string;
    /**
     * The default values for fields when a task is created by referencing this template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-defaults
     */
    readonly defaults?: Array<CfnTaskTemplate.DefaultFieldValueProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the task template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-description
     */
    readonly description?: string;
    /**
     * Fields that are part of the template.
     *
     * A template requires at least one field that has type `Name` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-fields
     */
    readonly fields?: Array<CfnTaskTemplate.FieldProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Connect instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-instancearn
     */
    readonly instanceArn: string;
    /**
     * The name of the task template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-name
     */
    readonly name?: string;
    /**
     * The Amazon Resource Name (ARN) of the flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-selfassigncontactflowarn
     */
    readonly selfAssignContactFlowArn?: string;
    /**
     * The status of the task template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-status
     */
    readonly status?: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Information about a traffic distribution group.
 *
 * @cloudformationResource AWS::Connect::TrafficDistributionGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-trafficdistributiongroup.html
 */
export declare class CfnTrafficDistributionGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTrafficDistributionGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTrafficDistributionGroup;
    /**
     * Describes whether this is the default traffic distribution group.
     *
     * @cloudformationAttribute IsDefault
     */
    readonly attrIsDefault: cdk.IResolvable;
    /**
     * The status of the traffic distribution group.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The Amazon Resource Name (ARN) of the traffic distribution group.
     *
     * @cloudformationAttribute TrafficDistributionGroupArn
     */
    readonly attrTrafficDistributionGroupArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the traffic distribution group.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN).
     */
    instanceArn: string;
    /**
     * The name of the traffic distribution group.
     */
    name: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTrafficDistributionGroupProps);
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
 * Properties for defining a `CfnTrafficDistributionGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-trafficdistributiongroup.html
 */
export interface CfnTrafficDistributionGroupProps {
    /**
     * The description of the traffic distribution group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-trafficdistributiongroup.html#cfn-connect-trafficdistributiongroup-description
     */
    readonly description?: string;
    /**
     * The Amazon Resource Name (ARN).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-trafficdistributiongroup.html#cfn-connect-trafficdistributiongroup-instancearn
     */
    readonly instanceArn: string;
    /**
     * The name of the traffic distribution group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-trafficdistributiongroup.html#cfn-connect-trafficdistributiongroup-name
     */
    readonly name: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * For example, {"tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-trafficdistributiongroup.html#cfn-connect-trafficdistributiongroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies a user account for an Amazon Connect instance.
 *
 * For information about how to create user accounts using the Amazon Connect console, see [Add Users](https://docs.aws.amazon.com/connect/latest/adminguide/user-management.html) in the *Amazon Connect Administrator Guide* .
 *
 * @cloudformationResource AWS::Connect::User
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html
 */
export declare class CfnUser extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUser from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUser;
    /**
     * The Amazon Resource Name (ARN) of the user.
     *
     * @cloudformationAttribute UserArn
     */
    readonly attrUserArn: string;
    /**
     * The identifier of the user account in the directory used for identity management.
     */
    directoryUserId?: string;
    /**
     * The Amazon Resource Name (ARN) of the user's hierarchy group.
     */
    hierarchyGroupArn?: string;
    /**
     * Information about the user identity.
     */
    identityInfo?: cdk.IResolvable | CfnUser.UserIdentityInfoProperty;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    instanceArn: string;
    /**
     * The user's password.
     */
    password?: string;
    /**
     * Information about the phone configuration for the user.
     */
    phoneConfig: cdk.IResolvable | CfnUser.UserPhoneConfigProperty;
    /**
     * The Amazon Resource Name (ARN) of the user's routing profile.
     */
    routingProfileArn: string;
    /**
     * The Amazon Resource Name (ARN) of the user's security profile.
     */
    securityProfileArns: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The user name assigned to the user account.
     */
    username: string;
    /**
     * One or more predefined attributes assigned to a user, with a numeric value that indicates how their level of skill in a specified area.
     */
    userProficiencies?: Array<cdk.IResolvable | CfnUser.UserProficiencyProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnUser {
    /**
     * Contains information about the phone configuration settings for a user.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-userphoneconfig.html
     */
    interface UserPhoneConfigProperty {
        /**
         * The After Call Work (ACW) timeout setting, in seconds.
         *
         * This parameter has a minimum value of 0 and a maximum value of 2,000,000 seconds (24 days). Enter 0 if you don't want to allocate a specific amount of ACW time. It essentially means an indefinite amount of time. When the conversation ends, ACW starts; the agent must choose Close contact to end ACW.
         *
         * > When returned by a `SearchUsers` call, `AfterContactWorkTimeLimit` is returned in milliseconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-userphoneconfig.html#cfn-connect-user-userphoneconfig-aftercontactworktimelimit
         */
        readonly afterContactWorkTimeLimit?: number;
        /**
         * The Auto accept setting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-userphoneconfig.html#cfn-connect-user-userphoneconfig-autoaccept
         */
        readonly autoAccept?: boolean | cdk.IResolvable;
        /**
         * The phone number for the user's desk phone.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-userphoneconfig.html#cfn-connect-user-userphoneconfig-deskphonenumber
         */
        readonly deskPhoneNumber?: string;
        /**
         * The phone type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-userphoneconfig.html#cfn-connect-user-userphoneconfig-phonetype
         */
        readonly phoneType: string;
    }
    /**
     * Contains information about the identity of a user.
     *
     * > For Amazon Connect instances that are created with the `EXISTING_DIRECTORY` identity management type, `FirstName` , `LastName` , and `Email` cannot be updated from within Amazon Connect because they are managed by the directory. > The `FirstName` and `LastName` length constraints below apply only to instances using SAML for identity management. If you are using Amazon Connect for identity management, the length constraints are 1-255 for `FirstName` , and 1-256 for `LastName` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-useridentityinfo.html
     */
    interface UserIdentityInfoProperty {
        /**
         * The email address.
         *
         * If you are using SAML for identity management and include this parameter, an error is returned.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-useridentityinfo.html#cfn-connect-user-useridentityinfo-email
         */
        readonly email?: string;
        /**
         * The first name.
         *
         * This is required if you are using Amazon Connect or SAML for identity management. Inputs must be in Unicode Normalization Form C (NFC). Text containing characters in a non-NFC form (for example, decomposed characters or combining marks) are not accepted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-useridentityinfo.html#cfn-connect-user-useridentityinfo-firstname
         */
        readonly firstName?: string;
        /**
         * The last name.
         *
         * This is required if you are using Amazon Connect or SAML for identity management. Inputs must be in Unicode Normalization Form C (NFC). Text containing characters in a non-NFC form (for example, decomposed characters or combining marks) are not accepted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-useridentityinfo.html#cfn-connect-user-useridentityinfo-lastname
         */
        readonly lastName?: string;
        /**
         * The user's mobile number.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-useridentityinfo.html#cfn-connect-user-useridentityinfo-mobile
         */
        readonly mobile?: string;
        /**
         * The user's secondary email address.
         *
         * If you provide a secondary email, the user receives email notifications -- other than password reset notifications -- to this email address instead of to their primary email address.
         *
         * *Pattern* : `(?=^.{0,265}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-useridentityinfo.html#cfn-connect-user-useridentityinfo-secondaryemail
         */
        readonly secondaryEmail?: string;
    }
    /**
     * > A predefined attribute must be created before using `UserProficiencies` in the Cloudformation *User* template.
     *
     * For more information, see [Predefined attributes](https://docs.aws.amazon.com/connect/latest/adminguide/predefined-attributes.html) .
     *
     * Proficiency of a user.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-userproficiency.html
     */
    interface UserProficiencyProperty {
        /**
         * The name of user’s proficiency.
         *
         * You must use a predefined attribute name that is present in the Amazon Connect instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-userproficiency.html#cfn-connect-user-userproficiency-attributename
         */
        readonly attributeName: string;
        /**
         * The value of user’s proficiency.
         *
         * You must use a predefined attribute value that is present in the Amazon Connect instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-userproficiency.html#cfn-connect-user-userproficiency-attributevalue
         */
        readonly attributeValue: string;
        /**
         * The level of the proficiency.
         *
         * The valid values are 1, 2, 3, 4 and 5.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-userproficiency.html#cfn-connect-user-userproficiency-level
         */
        readonly level: number;
    }
}
/**
 * Properties for defining a `CfnUser`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html
 */
export interface CfnUserProps {
    /**
     * The identifier of the user account in the directory used for identity management.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html#cfn-connect-user-directoryuserid
     */
    readonly directoryUserId?: string;
    /**
     * The Amazon Resource Name (ARN) of the user's hierarchy group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html#cfn-connect-user-hierarchygrouparn
     */
    readonly hierarchyGroupArn?: string;
    /**
     * Information about the user identity.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html#cfn-connect-user-identityinfo
     */
    readonly identityInfo?: cdk.IResolvable | CfnUser.UserIdentityInfoProperty;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html#cfn-connect-user-instancearn
     */
    readonly instanceArn: string;
    /**
     * The user's password.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html#cfn-connect-user-password
     */
    readonly password?: string;
    /**
     * Information about the phone configuration for the user.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html#cfn-connect-user-phoneconfig
     */
    readonly phoneConfig: cdk.IResolvable | CfnUser.UserPhoneConfigProperty;
    /**
     * The Amazon Resource Name (ARN) of the user's routing profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html#cfn-connect-user-routingprofilearn
     */
    readonly routingProfileArn: string;
    /**
     * The Amazon Resource Name (ARN) of the user's security profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html#cfn-connect-user-securityprofilearns
     */
    readonly securityProfileArns: Array<string>;
    /**
     * The tags.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html#cfn-connect-user-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The user name assigned to the user account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html#cfn-connect-user-username
     */
    readonly username: string;
    /**
     * One or more predefined attributes assigned to a user, with a numeric value that indicates how their level of skill in a specified area.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html#cfn-connect-user-userproficiencies
     */
    readonly userProficiencies?: Array<cdk.IResolvable | CfnUser.UserProficiencyProperty> | cdk.IResolvable;
}
/**
 * Specifies a new user hierarchy group.
 *
 * @cloudformationResource AWS::Connect::UserHierarchyGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchygroup.html
 */
export declare class CfnUserHierarchyGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUserHierarchyGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUserHierarchyGroup;
    /**
     * The Amazon Resource Name (ARN) of the user hierarchy group.
     *
     * @cloudformationAttribute UserHierarchyGroupArn
     */
    readonly attrUserHierarchyGroupArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The Amazon Resource Name (ARN) of the user hierarchy group.
     */
    instanceArn: string;
    /**
     * The name of the user hierarchy group.
     */
    name: string;
    /**
     * The Amazon Resource Name (ARN) of the parent group.
     */
    parentGroupArn?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserHierarchyGroupProps);
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
 * Properties for defining a `CfnUserHierarchyGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchygroup.html
 */
export interface CfnUserHierarchyGroupProps {
    /**
     * The Amazon Resource Name (ARN) of the user hierarchy group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchygroup.html#cfn-connect-userhierarchygroup-instancearn
     */
    readonly instanceArn: string;
    /**
     * The name of the user hierarchy group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchygroup.html#cfn-connect-userhierarchygroup-name
     */
    readonly name: string;
    /**
     * The Amazon Resource Name (ARN) of the parent group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchygroup.html#cfn-connect-userhierarchygroup-parentgrouparn
     */
    readonly parentGroupArn?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchygroup.html#cfn-connect-userhierarchygroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a customer-managed view in the published state within the specified instance.
 *
 * @cloudformationResource AWS::Connect::View
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-view.html
 */
export declare class CfnView extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnView from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnView;
    /**
     * The unqualified Amazon Resource Name (ARN) of the view.
     *
     * For example:
     *
     * `arn:<partition>:connect:<region>:<accountId>:instance/00000000-0000-0000-0000-000000000000/view/00000000-0000-0000-0000-000000000000`
     *
     * @cloudformationAttribute ViewArn
     */
    readonly attrViewArn: string;
    /**
     * Indicates the checksum value of the latest published view content.
     *
     * @cloudformationAttribute ViewContentSha256
     */
    readonly attrViewContentSha256: string;
    /**
     * The identifier of the view.
     *
     * @cloudformationAttribute ViewId
     */
    readonly attrViewId: string;
    /**
     * A list of actions possible from the view.
     */
    actions: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the view.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    instanceArn: string;
    /**
     * The name of the view.
     */
    name: string;
    /**
     * The tags associated with the view resource (not specific to view version).
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The view template representing the structure of the view.
     */
    template: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnViewProps);
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
 * Properties for defining a `CfnView`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-view.html
 */
export interface CfnViewProps {
    /**
     * A list of actions possible from the view.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-view.html#cfn-connect-view-actions
     */
    readonly actions: Array<string>;
    /**
     * The description of the view.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-view.html#cfn-connect-view-description
     */
    readonly description?: string;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-view.html#cfn-connect-view-instancearn
     */
    readonly instanceArn: string;
    /**
     * The name of the view.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-view.html#cfn-connect-view-name
     */
    readonly name: string;
    /**
     * The tags associated with the view resource (not specific to view version).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-view.html#cfn-connect-view-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The view template representing the structure of the view.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-view.html#cfn-connect-view-template
     */
    readonly template: any | cdk.IResolvable;
}
/**
 * Creates a version for the specified customer-managed view within the specified instance.
 *
 * @cloudformationResource AWS::Connect::ViewVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-viewversion.html
 */
export declare class CfnViewVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnViewVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnViewVersion;
    /**
     * Current version of the view.
     *
     * @cloudformationAttribute Version
     */
    readonly attrVersion: number;
    /**
     * The Amazon Resource Name (ARN) of the view version.
     *
     * @cloudformationAttribute ViewVersionArn
     */
    readonly attrViewVersionArn: string;
    /**
     * The description of the view version.
     */
    versionDescription?: string;
    /**
     * The unqualified Amazon Resource Name (ARN) of the view.
     */
    viewArn: string;
    /**
     * Indicates the checksum value of the latest published view content.
     */
    viewContentSha256?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnViewVersionProps);
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
 * Properties for defining a `CfnViewVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-viewversion.html
 */
export interface CfnViewVersionProps {
    /**
     * The description of the view version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-viewversion.html#cfn-connect-viewversion-versiondescription
     */
    readonly versionDescription?: string;
    /**
     * The unqualified Amazon Resource Name (ARN) of the view.
     *
     * For example:
     *
     * `arn:<partition>:connect:<region>:<accountId>:instance/00000000-0000-0000-0000-000000000000/view/00000000-0000-0000-0000-000000000000`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-viewversion.html#cfn-connect-viewversion-viewarn
     */
    readonly viewArn: string;
    /**
     * Indicates the checksum value of the latest published view content.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-viewversion.html#cfn-connect-viewversion-viewcontentsha256
     */
    readonly viewContentSha256?: string;
}
/**
 * Contains information about an agent status.
 *
 * @cloudformationResource AWS::Connect::AgentStatus
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html
 */
export declare class CfnAgentStatus extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAgentStatus from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAgentStatus;
    /**
     * The Amazon Resource Name (ARN) of the agent status.
     *
     * @cloudformationAttribute AgentStatusArn
     */
    readonly attrAgentStatusArn: string;
    /**
     * The AWS Region where this resource was last modified.
     *
     * @cloudformationAttribute LastModifiedRegion
     */
    readonly attrLastModifiedRegion: string;
    /**
     * The timestamp when this resource was last modified.
     *
     * @cloudformationAttribute LastModifiedTime
     */
    readonly attrLastModifiedTime: cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the agent status.
     */
    description?: string;
    /**
     * The display order of the agent status.
     */
    displayOrder?: number;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    instanceArn: string;
    /**
     * The name of the agent status.
     */
    name: string;
    /**
     * A number indicating the reset order of the agent status.
     */
    resetOrderNumber?: boolean | cdk.IResolvable;
    /**
     * The state of the agent status.
     */
    state: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The type of agent status.
     */
    type?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAgentStatusProps);
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
 * Properties for defining a `CfnAgentStatus`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html
 */
export interface CfnAgentStatusProps {
    /**
     * The description of the agent status.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html#cfn-connect-agentstatus-description
     */
    readonly description?: string;
    /**
     * The display order of the agent status.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html#cfn-connect-agentstatus-displayorder
     */
    readonly displayOrder?: number;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html#cfn-connect-agentstatus-instancearn
     */
    readonly instanceArn: string;
    /**
     * The name of the agent status.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html#cfn-connect-agentstatus-name
     */
    readonly name: string;
    /**
     * A number indicating the reset order of the agent status.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html#cfn-connect-agentstatus-resetordernumber
     */
    readonly resetOrderNumber?: boolean | cdk.IResolvable;
    /**
     * The state of the agent status.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html#cfn-connect-agentstatus-state
     */
    readonly state: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * For example, { "Tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html#cfn-connect-agentstatus-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The type of agent status.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html#cfn-connect-agentstatus-type
     */
    readonly type?: string;
}
/**
 * Creates a version for the specified customer-managed flow within the specified instance.
 *
 * @cloudformationResource AWS::Connect::ContactFlowVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowversion.html
 */
export declare class CfnContactFlowVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnContactFlowVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnContactFlowVersion;
    /**
     * The Amazon Resource Name (ARN) of the contact flow version.
     *
     * @cloudformationAttribute ContactFlowVersionARN
     */
    readonly attrContactFlowVersionArn: string;
    /**
     * Indicates the checksum value of the flow content.
     *
     * @cloudformationAttribute FlowContentSha256
     */
    readonly attrFlowContentSha256: string;
    /**
     * The identifier of the flow version.
     *
     * @cloudformationAttribute Version
     */
    readonly attrVersion: number;
    /**
     * The identifier of the flow.
     */
    contactFlowId: string;
    /**
     * The description of the flow version.
     */
    description?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnContactFlowVersionProps);
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
 * Properties for defining a `CfnContactFlowVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowversion.html
 */
export interface CfnContactFlowVersionProps {
    /**
     * The identifier of the flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowversion.html#cfn-connect-contactflowversion-contactflowid
     */
    readonly contactFlowId: string;
    /**
     * The description of the flow version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowversion.html#cfn-connect-contactflowversion-description
     */
    readonly description?: string;
}
/**
 * Create new email address in the specified Amazon Connect instance.
 *
 * For more information about email addresses, see [Create email addresses](https://docs.aws.amazon.com/connect/latest/adminguide/create-email-address1.html) in the Amazon Connect Administrator Guide.
 *
 * @cloudformationResource AWS::Connect::EmailAddress
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-emailaddress.html
 */
export declare class CfnEmailAddress extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEmailAddress from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEmailAddress;
    /**
     * The Amazon Resource Name (ARN) of the email address.
     *
     * @cloudformationAttribute EmailAddressArn
     */
    readonly attrEmailAddressArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the email address.
     */
    description?: string;
    /**
     * The display name of email address.
     */
    displayName?: string;
    /**
     * The email address with the instance, in [^\s@]+@[^\s@]+\.[^\s@]+ format.
     */
    emailAddress: string;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    instanceArn: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEmailAddressProps);
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
 * Properties for defining a `CfnEmailAddress`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-emailaddress.html
 */
export interface CfnEmailAddressProps {
    /**
     * The description of the email address.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-emailaddress.html#cfn-connect-emailaddress-description
     */
    readonly description?: string;
    /**
     * The display name of email address.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-emailaddress.html#cfn-connect-emailaddress-displayname
     */
    readonly displayName?: string;
    /**
     * The email address with the instance, in [^\s@]+@[^\s@]+\.[^\s@]+ format.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-emailaddress.html#cfn-connect-emailaddress-emailaddress
     */
    readonly emailAddress: string;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-emailaddress.html#cfn-connect-emailaddress-instancearn
     */
    readonly instanceArn: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-emailaddress.html#cfn-connect-emailaddress-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Textual or numeric value that describes an attribute.
 *
 * @cloudformationResource AWS::Connect::PredefinedAttribute
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-predefinedattribute.html
 */
export declare class CfnPredefinedAttribute extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPredefinedAttribute from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPredefinedAttribute;
    /**
     * Last modified region.
     *
     * @cloudformationAttribute LastModifiedRegion
     */
    readonly attrLastModifiedRegion: string;
    /**
     * Last modified time.
     *
     * @cloudformationAttribute LastModifiedTime
     */
    readonly attrLastModifiedTime: cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    instanceArn: string;
    /**
     * The name of the predefined attribute.
     */
    name: string;
    /**
     * The values of a predefined attribute.
     */
    values: cdk.IResolvable | CfnPredefinedAttribute.ValuesProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPredefinedAttributeProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPredefinedAttribute {
    /**
     * The values of a predefined attribute.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-predefinedattribute-values.html
     */
    interface ValuesProperty {
        /**
         * Predefined attribute values of type string list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-predefinedattribute-values.html#cfn-connect-predefinedattribute-values-stringlist
         */
        readonly stringList?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnPredefinedAttribute`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-predefinedattribute.html
 */
export interface CfnPredefinedAttributeProps {
    /**
     * The Amazon Resource Name (ARN) of the instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-predefinedattribute.html#cfn-connect-predefinedattribute-instancearn
     */
    readonly instanceArn: string;
    /**
     * The name of the predefined attribute.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-predefinedattribute.html#cfn-connect-predefinedattribute-name
     */
    readonly name: string;
    /**
     * The values of a predefined attribute.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-predefinedattribute.html#cfn-connect-predefinedattribute-values
     */
    readonly values: cdk.IResolvable | CfnPredefinedAttribute.ValuesProperty;
}
/**
 * Contains information about a hierarchy structure.
 *
 * @cloudformationResource AWS::Connect::UserHierarchyStructure
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html
 */
export declare class CfnUserHierarchyStructure extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUserHierarchyStructure from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUserHierarchyStructure;
    /**
     * The identifier for the user hierarchy structure.
     *
     * @cloudformationAttribute UserHierarchyStructureArn
     */
    readonly attrUserHierarchyStructureArn: string;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    instanceArn: string;
    /**
     * Contains information about a hierarchy structure.
     */
    userHierarchyStructure?: cdk.IResolvable | CfnUserHierarchyStructure.UserHierarchyStructureProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserHierarchyStructureProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnUserHierarchyStructure {
    /**
     * Contains information about a hierarchy structure.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-userhierarchystructure.html
     */
    interface UserHierarchyStructureProperty {
        /**
         * Information about level five.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-userhierarchystructure.html#cfn-connect-userhierarchystructure-userhierarchystructure-levelfive
         */
        readonly levelFive?: cdk.IResolvable | CfnUserHierarchyStructure.LevelFiveProperty;
        /**
         * The update for level four.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-userhierarchystructure.html#cfn-connect-userhierarchystructure-userhierarchystructure-levelfour
         */
        readonly levelFour?: cdk.IResolvable | CfnUserHierarchyStructure.LevelFourProperty;
        /**
         * The update for level one.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-userhierarchystructure.html#cfn-connect-userhierarchystructure-userhierarchystructure-levelone
         */
        readonly levelOne?: cdk.IResolvable | CfnUserHierarchyStructure.LevelOneProperty;
        /**
         * The update for level three.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-userhierarchystructure.html#cfn-connect-userhierarchystructure-userhierarchystructure-levelthree
         */
        readonly levelThree?: cdk.IResolvable | CfnUserHierarchyStructure.LevelThreeProperty;
        /**
         * The update for level two.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-userhierarchystructure.html#cfn-connect-userhierarchystructure-userhierarchystructure-leveltwo
         */
        readonly levelTwo?: cdk.IResolvable | CfnUserHierarchyStructure.LevelTwoProperty;
    }
    /**
     * Information about level one.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelone.html
     */
    interface LevelOneProperty {
        /**
         * The Amazon Resource Name (ARN) of the hierarchy level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelone.html#cfn-connect-userhierarchystructure-levelone-hierarchylevelarn
         */
        readonly hierarchyLevelArn?: string;
        /**
         * The identifier of the hierarchy level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelone.html#cfn-connect-userhierarchystructure-levelone-hierarchylevelid
         */
        readonly hierarchyLevelId?: string;
        /**
         * The name of the hierarchy level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelone.html#cfn-connect-userhierarchystructure-levelone-name
         */
        readonly name: string;
    }
    /**
     * The update for level two.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-leveltwo.html
     */
    interface LevelTwoProperty {
        /**
         * The Amazon Resource Name (ARN) of the hierarchy level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-leveltwo.html#cfn-connect-userhierarchystructure-leveltwo-hierarchylevelarn
         */
        readonly hierarchyLevelArn?: string;
        /**
         * The identifier of the hierarchy level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-leveltwo.html#cfn-connect-userhierarchystructure-leveltwo-hierarchylevelid
         */
        readonly hierarchyLevelId?: string;
        /**
         * The name of the hierarchy level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-leveltwo.html#cfn-connect-userhierarchystructure-leveltwo-name
         */
        readonly name: string;
    }
    /**
     * The update for level three.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelthree.html
     */
    interface LevelThreeProperty {
        /**
         * The Amazon Resource Name (ARN) of the hierarchy level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelthree.html#cfn-connect-userhierarchystructure-levelthree-hierarchylevelarn
         */
        readonly hierarchyLevelArn?: string;
        /**
         * The identifier of the hierarchy level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelthree.html#cfn-connect-userhierarchystructure-levelthree-hierarchylevelid
         */
        readonly hierarchyLevelId?: string;
        /**
         * The name of the hierarchy level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelthree.html#cfn-connect-userhierarchystructure-levelthree-name
         */
        readonly name: string;
    }
    /**
     * The update for level four.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelfour.html
     */
    interface LevelFourProperty {
        /**
         * The Amazon Resource Name (ARN) of the hierarchy level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelfour.html#cfn-connect-userhierarchystructure-levelfour-hierarchylevelarn
         */
        readonly hierarchyLevelArn?: string;
        /**
         * The identifier of the hierarchy level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelfour.html#cfn-connect-userhierarchystructure-levelfour-hierarchylevelid
         */
        readonly hierarchyLevelId?: string;
        /**
         * The name of the hierarchy level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelfour.html#cfn-connect-userhierarchystructure-levelfour-name
         */
        readonly name: string;
    }
    /**
     * The update for level five.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelfive.html
     */
    interface LevelFiveProperty {
        /**
         * The Amazon Resource Name (ARN) of the hierarchy level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelfive.html#cfn-connect-userhierarchystructure-levelfive-hierarchylevelarn
         */
        readonly hierarchyLevelArn?: string;
        /**
         * The identifier of the hierarchy level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelfive.html#cfn-connect-userhierarchystructure-levelfive-hierarchylevelid
         */
        readonly hierarchyLevelId?: string;
        /**
         * The name of the hierarchy level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelfive.html#cfn-connect-userhierarchystructure-levelfive-name
         */
        readonly name: string;
    }
}
/**
 * Properties for defining a `CfnUserHierarchyStructure`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html
 */
export interface CfnUserHierarchyStructureProps {
    /**
     * The Amazon Resource Name (ARN) of the instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-instancearn
     */
    readonly instanceArn: string;
    /**
     * Contains information about a hierarchy structure.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-userhierarchystructure
     */
    readonly userHierarchyStructure?: cdk.IResolvable | CfnUserHierarchyStructure.UserHierarchyStructureProperty;
}
