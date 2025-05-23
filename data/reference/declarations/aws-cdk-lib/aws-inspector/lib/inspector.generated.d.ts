import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::Inspector::AssessmentTarget` resource is used to create Amazon Inspector assessment targets, which specify the Amazon EC2 instances that will be analyzed during an assessment run.
 *
 * @cloudformationResource AWS::Inspector::AssessmentTarget
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttarget.html
 */
export declare class CfnAssessmentTarget extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAssessmentTarget from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAssessmentTarget;
    /**
     * The Amazon Resource Name (ARN) that specifies the assessment target that is created.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of the Amazon Inspector assessment target.
     */
    assessmentTargetName?: string;
    /**
     * The ARN that specifies the resource group that is used to create the assessment target.
     */
    resourceGroupArn?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnAssessmentTargetProps);
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
 * Properties for defining a `CfnAssessmentTarget`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttarget.html
 */
export interface CfnAssessmentTargetProps {
    /**
     * The name of the Amazon Inspector assessment target.
     *
     * The name must be unique within the AWS account .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttarget.html#cfn-inspector-assessmenttarget-assessmenttargetname
     */
    readonly assessmentTargetName?: string;
    /**
     * The ARN that specifies the resource group that is used to create the assessment target.
     *
     * If `resourceGroupArn` is not specified, all EC2 instances in the current AWS account and Region are included in the assessment target.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttarget.html#cfn-inspector-assessmenttarget-resourcegrouparn
     */
    readonly resourceGroupArn?: string;
}
/**
 * The `AWS::Inspector::AssessmentTemplate` resource creates an Amazon Inspector assessment template, which specifies the Inspector assessment targets that will be evaluated by an assessment run and its related configurations.
 *
 * @cloudformationResource AWS::Inspector::AssessmentTemplate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html
 */
export declare class CfnAssessmentTemplate extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAssessmentTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAssessmentTemplate;
    /**
     * The Amazon Resource Name (ARN) that specifies the assessment template that is created.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ARN of the assessment target to be included in the assessment template.
     */
    assessmentTargetArn: string;
    /**
     * The user-defined name that identifies the assessment template that you want to create.
     */
    assessmentTemplateName?: string;
    /**
     * The duration of the assessment run in seconds.
     */
    durationInSeconds: number;
    /**
     * The ARNs of the rules packages that you want to use in the assessment template.
     */
    rulesPackageArns: Array<string>;
    /**
     * The user-defined attributes that are assigned to every finding that is generated by the assessment run that uses this assessment template.
     */
    userAttributesForFindings?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAssessmentTemplateProps);
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
 * Properties for defining a `CfnAssessmentTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html
 */
export interface CfnAssessmentTemplateProps {
    /**
     * The ARN of the assessment target to be included in the assessment template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html#cfn-inspector-assessmenttemplate-assessmenttargetarn
     */
    readonly assessmentTargetArn: string;
    /**
     * The user-defined name that identifies the assessment template that you want to create.
     *
     * You can create several assessment templates for the same assessment target. The names of the assessment templates that correspond to a particular assessment target must be unique.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html#cfn-inspector-assessmenttemplate-assessmenttemplatename
     */
    readonly assessmentTemplateName?: string;
    /**
     * The duration of the assessment run in seconds.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html#cfn-inspector-assessmenttemplate-durationinseconds
     */
    readonly durationInSeconds: number;
    /**
     * The ARNs of the rules packages that you want to use in the assessment template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html#cfn-inspector-assessmenttemplate-rulespackagearns
     */
    readonly rulesPackageArns: Array<string>;
    /**
     * The user-defined attributes that are assigned to every finding that is generated by the assessment run that uses this assessment template.
     *
     * Within an assessment template, each key must be unique.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html#cfn-inspector-assessmenttemplate-userattributesforfindings
     */
    readonly userAttributesForFindings?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
}
/**
 * The `AWS::Inspector::ResourceGroup` resource is used to create Amazon Inspector resource groups.
 *
 * A resource group defines a set of tags that, when queried, identify the AWS resources that make up the assessment target.
 *
 * @cloudformationResource AWS::Inspector::ResourceGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-resourcegroup.html
 */
export declare class CfnResourceGroup extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResourceGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResourceGroup;
    /**
     * The Amazon Resource Name (ARN) that specifies the resource group that is created.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The tags (key and value pairs) that will be associated with the resource group.
     */
    resourceGroupTags: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourceGroupProps);
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
 * Properties for defining a `CfnResourceGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-resourcegroup.html
 */
export interface CfnResourceGroupProps {
    /**
     * The tags (key and value pairs) that will be associated with the resource group.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-resourcegroup.html#cfn-inspector-resourcegroup-resourcegrouptags
     */
    readonly resourceGroupTags: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
}
