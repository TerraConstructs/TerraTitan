import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * A calculated attribute definition for Customer Profiles.
 *
 * @cloudformationResource AWS::CustomerProfiles::CalculatedAttributeDefinition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-calculatedattributedefinition.html
 */
export declare class CfnCalculatedAttributeDefinition extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCalculatedAttributeDefinition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCalculatedAttributeDefinition;
    /**
     * The timestamp of when the calculated attribute definition was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The timestamp of when the calculated attribute definition was most recently edited.
     *
     * @cloudformationAttribute LastUpdatedAt
     */
    readonly attrLastUpdatedAt: string;
    /**
     * Mathematical expression and a list of attribute items specified in that expression.
     */
    attributeDetails: CfnCalculatedAttributeDefinition.AttributeDetailsProperty | cdk.IResolvable;
    /**
     * The name of an attribute defined in a profile object type.
     */
    calculatedAttributeName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The conditions including range, object count, and threshold for the calculated attribute.
     */
    conditions?: CfnCalculatedAttributeDefinition.ConditionsProperty | cdk.IResolvable;
    /**
     * The description of the calculated attribute.
     */
    description?: string;
    /**
     * The display name of the calculated attribute.
     */
    displayName?: string;
    /**
     * The unique name of the domain.
     */
    domainName: string;
    /**
     * The aggregation operation to perform for the calculated attribute.
     */
    statistic: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCalculatedAttributeDefinitionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCalculatedAttributeDefinition {
    /**
     * Mathematical expression and a list of attribute items specified in that expression.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-attributedetails.html
     */
    interface AttributeDetailsProperty {
        /**
         * Mathematical expression and a list of attribute items specified in that expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-attributedetails.html#cfn-customerprofiles-calculatedattributedefinition-attributedetails-attributes
         */
        readonly attributes: Array<CfnCalculatedAttributeDefinition.AttributeItemProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Mathematical expression that is performed on attribute items provided in the attribute list.
         *
         * Each element in the expression should follow the structure of \"{ObjectTypeName.AttributeName}\".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-attributedetails.html#cfn-customerprofiles-calculatedattributedefinition-attributedetails-expression
         */
        readonly expression: string;
    }
    /**
     * The details of a single attribute item specified in the mathematical expression.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-attributeitem.html
     */
    interface AttributeItemProperty {
        /**
         * The unique name of the calculated attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-attributeitem.html#cfn-customerprofiles-calculatedattributedefinition-attributeitem-name
         */
        readonly name: string;
    }
    /**
     * The conditions including range, object count, and threshold for the calculated attribute.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-conditions.html
     */
    interface ConditionsProperty {
        /**
         * The number of profile objects used for the calculated attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-conditions.html#cfn-customerprofiles-calculatedattributedefinition-conditions-objectcount
         */
        readonly objectCount?: number;
        /**
         * The relative time period over which data is included in the aggregation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-conditions.html#cfn-customerprofiles-calculatedattributedefinition-conditions-range
         */
        readonly range?: cdk.IResolvable | CfnCalculatedAttributeDefinition.RangeProperty;
        /**
         * The threshold for the calculated attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-conditions.html#cfn-customerprofiles-calculatedattributedefinition-conditions-threshold
         */
        readonly threshold?: cdk.IResolvable | CfnCalculatedAttributeDefinition.ThresholdProperty;
    }
    /**
     * The relative time period over which data is included in the aggregation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-range.html
     */
    interface RangeProperty {
        /**
         * The unit of time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-range.html#cfn-customerprofiles-calculatedattributedefinition-range-unit
         */
        readonly unit: string;
        /**
         * The amount of time of the specified unit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-range.html#cfn-customerprofiles-calculatedattributedefinition-range-value
         */
        readonly value: number;
    }
    /**
     * The threshold for the calculated attribute.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-threshold.html
     */
    interface ThresholdProperty {
        /**
         * The operator of the threshold.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-threshold.html#cfn-customerprofiles-calculatedattributedefinition-threshold-operator
         */
        readonly operator: string;
        /**
         * The value of the threshold.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-threshold.html#cfn-customerprofiles-calculatedattributedefinition-threshold-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnCalculatedAttributeDefinition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-calculatedattributedefinition.html
 */
export interface CfnCalculatedAttributeDefinitionProps {
    /**
     * Mathematical expression and a list of attribute items specified in that expression.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-calculatedattributedefinition.html#cfn-customerprofiles-calculatedattributedefinition-attributedetails
     */
    readonly attributeDetails: CfnCalculatedAttributeDefinition.AttributeDetailsProperty | cdk.IResolvable;
    /**
     * The name of an attribute defined in a profile object type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-calculatedattributedefinition.html#cfn-customerprofiles-calculatedattributedefinition-calculatedattributename
     */
    readonly calculatedAttributeName: string;
    /**
     * The conditions including range, object count, and threshold for the calculated attribute.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-calculatedattributedefinition.html#cfn-customerprofiles-calculatedattributedefinition-conditions
     */
    readonly conditions?: CfnCalculatedAttributeDefinition.ConditionsProperty | cdk.IResolvable;
    /**
     * The description of the calculated attribute.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-calculatedattributedefinition.html#cfn-customerprofiles-calculatedattributedefinition-description
     */
    readonly description?: string;
    /**
     * The display name of the calculated attribute.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-calculatedattributedefinition.html#cfn-customerprofiles-calculatedattributedefinition-displayname
     */
    readonly displayName?: string;
    /**
     * The unique name of the domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-calculatedattributedefinition.html#cfn-customerprofiles-calculatedattributedefinition-domainname
     */
    readonly domainName: string;
    /**
     * The aggregation operation to perform for the calculated attribute.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-calculatedattributedefinition.html#cfn-customerprofiles-calculatedattributedefinition-statistic
     */
    readonly statistic: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-calculatedattributedefinition.html#cfn-customerprofiles-calculatedattributedefinition-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies an Amazon Connect Customer Profiles Domain.
 *
 * @cloudformationResource AWS::CustomerProfiles::Domain
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-domain.html
 */
export declare class CfnDomain extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDomain from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDomain;
    /**
     * The timestamp of when the domain was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The timestamp of when the domain was most recently edited.
     *
     * @cloudformationAttribute LastUpdatedAt
     */
    readonly attrLastUpdatedAt: string;
    /**
     * The status of rule-based matching rule.
     *
     * @cloudformationAttribute RuleBasedMatching.Status
     */
    readonly attrRuleBasedMatchingStatus: string;
    /**
     * Usage-specific statistics about the domain.
     *
     * @cloudformationAttribute Stats
     */
    readonly attrStats: cdk.IResolvable;
    /**
     * The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications.
     */
    deadLetterQueueUrl?: string;
    /**
     * The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified.
     */
    defaultEncryptionKey?: string;
    /**
     * The default number of days until the data within the domain expires.
     */
    defaultExpirationDays: number;
    /**
     * The unique name of the domain.
     */
    domainName: string;
    /**
     * The process of matching duplicate profiles.
     */
    matching?: cdk.IResolvable | CfnDomain.MatchingProperty;
    /**
     * The process of matching duplicate profiles using Rule-Based matching.
     */
    ruleBasedMatching?: cdk.IResolvable | CfnDomain.RuleBasedMatchingProperty;
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
    constructor(scope: constructs.Construct, id: string, props: CfnDomainProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDomain {
    /**
     * The process of matching duplicate profiles.
     *
     * If `Matching = true` , Amazon Connect Customer Profiles starts a weekly batch process called *Identity Resolution Job* . If you do not specify a date and time for the *Identity Resolution Job* to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. After the *Identity Resolution Job* completes, use the `GetMatches` API to return and review the results. Or, if you have configured `ExportingConfig` in the `MatchingRequest` , you can download the results from S3.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-matching.html
     */
    interface MatchingProperty {
        /**
         * Configuration information about the auto-merging process.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-matching.html#cfn-customerprofiles-domain-matching-automerging
         */
        readonly autoMerging?: CfnDomain.AutoMergingProperty | cdk.IResolvable;
        /**
         * The flag that enables the matching process of duplicate profiles.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-matching.html#cfn-customerprofiles-domain-matching-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
        /**
         * The S3 location where Identity Resolution Jobs write result files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-matching.html#cfn-customerprofiles-domain-matching-exportingconfig
         */
        readonly exportingConfig?: CfnDomain.ExportingConfigProperty | cdk.IResolvable;
        /**
         * The day and time when do you want to start the Identity Resolution Job every week.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-matching.html#cfn-customerprofiles-domain-matching-jobschedule
         */
        readonly jobSchedule?: cdk.IResolvable | CfnDomain.JobScheduleProperty;
    }
    /**
     * Configuration information about the auto-merging process.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-automerging.html
     */
    interface AutoMergingProperty {
        /**
         * Determines how the auto-merging process should resolve conflicts between different profiles.
         *
         * For example, if Profile A and Profile B have the same `FirstName` and `LastName` , `ConflictResolution` specifies which `EmailAddress` should be used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-automerging.html#cfn-customerprofiles-domain-automerging-conflictresolution
         */
        readonly conflictResolution?: CfnDomain.ConflictResolutionProperty | cdk.IResolvable;
        /**
         * A list of matching attributes that represent matching criteria.
         *
         * If two profiles meet at least one of the requirements in the matching attributes list, they will be merged.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-automerging.html#cfn-customerprofiles-domain-automerging-consolidation
         */
        readonly consolidation?: CfnDomain.ConsolidationProperty | cdk.IResolvable;
        /**
         * The flag that enables the auto-merging of duplicate profiles.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-automerging.html#cfn-customerprofiles-domain-automerging-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
        /**
         * A number between 0 and 1 that represents the minimum confidence score required for profiles within a matching group to be merged during the auto-merge process.
         *
         * A higher score means that a higher similarity is required to merge profiles.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-automerging.html#cfn-customerprofiles-domain-automerging-minallowedconfidencescoreformerging
         */
        readonly minAllowedConfidenceScoreForMerging?: number;
    }
    /**
     * Determines how the auto-merging process should resolve conflicts between different profiles.
     *
     * For example, if Profile A and Profile B have the same `FirstName` and `LastName` , `ConflictResolution` specifies which `EmailAddress` should be used.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-conflictresolution.html
     */
    interface ConflictResolutionProperty {
        /**
         * How the auto-merging process should resolve conflicts between different profiles.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-conflictresolution.html#cfn-customerprofiles-domain-conflictresolution-conflictresolvingmodel
         */
        readonly conflictResolvingModel: string;
        /**
         * The `ObjectType` name that is used to resolve profile merging conflicts when choosing `SOURCE` as the `ConflictResolvingModel` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-conflictresolution.html#cfn-customerprofiles-domain-conflictresolution-sourcename
         */
        readonly sourceName?: string;
    }
    /**
     * A list of matching attributes that represent matching criteria.
     *
     * If two profiles meet at least one of the requirements in the matching attributes list, they will be merged.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-consolidation.html
     */
    interface ConsolidationProperty {
        /**
         * A list of matching criteria.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-consolidation.html#cfn-customerprofiles-domain-consolidation-matchingattributeslist
         */
        readonly matchingAttributesList: Array<Array<string>> | cdk.IResolvable;
    }
    /**
     * Configuration information for exporting Identity Resolution results, for example, to an S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-exportingconfig.html
     */
    interface ExportingConfigProperty {
        /**
         * The S3 location where Identity Resolution Jobs write result files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-exportingconfig.html#cfn-customerprofiles-domain-exportingconfig-s3exporting
         */
        readonly s3Exporting?: cdk.IResolvable | CfnDomain.S3ExportingConfigProperty;
    }
    /**
     * The S3 location where Identity Resolution Jobs write result files.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-s3exportingconfig.html
     */
    interface S3ExportingConfigProperty {
        /**
         * The name of the S3 bucket where Identity Resolution Jobs write result files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-s3exportingconfig.html#cfn-customerprofiles-domain-s3exportingconfig-s3bucketname
         */
        readonly s3BucketName: string;
        /**
         * The S3 key name of the location where Identity Resolution Jobs write result files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-s3exportingconfig.html#cfn-customerprofiles-domain-s3exportingconfig-s3keyname
         */
        readonly s3KeyName?: string;
    }
    /**
     * The day and time when do you want to start the Identity Resolution Job every week.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-jobschedule.html
     */
    interface JobScheduleProperty {
        /**
         * The day when the Identity Resolution Job should run every week.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-jobschedule.html#cfn-customerprofiles-domain-jobschedule-dayoftheweek
         */
        readonly dayOfTheWeek: string;
        /**
         * The time when the Identity Resolution Job should run every week.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-jobschedule.html#cfn-customerprofiles-domain-jobschedule-time
         */
        readonly time: string;
    }
    /**
     * The process of matching duplicate profiles using Rule-Based matching.
     *
     * If `RuleBasedMatching = true` , Amazon Connect Customer Profiles will start to match and merge your profiles according to your configuration in the `RuleBasedMatchingRequest` . You can use the `ListRuleBasedMatches` and `GetSimilarProfiles` API to return and review the results. Also, if you have configured `ExportingConfig` in the `RuleBasedMatchingRequest` , you can download the results from S3.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-rulebasedmatching.html
     */
    interface RuleBasedMatchingProperty {
        /**
         * Configures information about the `AttributeTypesSelector` where the rule-based identity resolution uses to match profiles.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-rulebasedmatching.html#cfn-customerprofiles-domain-rulebasedmatching-attributetypesselector
         */
        readonly attributeTypesSelector?: CfnDomain.AttributeTypesSelectorProperty | cdk.IResolvable;
        /**
         * Determines how the auto-merging process should resolve conflicts between different profiles.
         *
         * For example, if Profile A and Profile B have the same `FirstName` and `LastName` , `ConflictResolution` specifies which `EmailAddress` should be used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-rulebasedmatching.html#cfn-customerprofiles-domain-rulebasedmatching-conflictresolution
         */
        readonly conflictResolution?: CfnDomain.ConflictResolutionProperty | cdk.IResolvable;
        /**
         * The flag that enables the matching process of duplicate profiles.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-rulebasedmatching.html#cfn-customerprofiles-domain-rulebasedmatching-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
        /**
         * The S3 location where Identity Resolution Jobs write result files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-rulebasedmatching.html#cfn-customerprofiles-domain-rulebasedmatching-exportingconfig
         */
        readonly exportingConfig?: CfnDomain.ExportingConfigProperty | cdk.IResolvable;
        /**
         * Configures how the rule-based matching process should match profiles.
         *
         * You can have up to 15 `MatchingRule` in the `MatchingRules` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-rulebasedmatching.html#cfn-customerprofiles-domain-rulebasedmatching-matchingrules
         */
        readonly matchingRules?: Array<cdk.IResolvable | CfnDomain.MatchingRuleProperty> | cdk.IResolvable;
        /**
         * Indicates the maximum allowed rule level for matching.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-rulebasedmatching.html#cfn-customerprofiles-domain-rulebasedmatching-maxallowedrulelevelformatching
         */
        readonly maxAllowedRuleLevelForMatching?: number;
        /**
         * Indicates the maximum allowed rule level for merging.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-rulebasedmatching.html#cfn-customerprofiles-domain-rulebasedmatching-maxallowedrulelevelformerging
         */
        readonly maxAllowedRuleLevelForMerging?: number;
        /**
         * The status of rule-based matching rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-rulebasedmatching.html#cfn-customerprofiles-domain-rulebasedmatching-status
         */
        readonly status?: string;
    }
    /**
     * Configures information about the `AttributeTypesSelector` which rule-based identity resolution uses to match profiles.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-attributetypesselector.html
     */
    interface AttributeTypesSelectorProperty {
        /**
         * The `Address` type.
         *
         * You can choose from `Address` , `BusinessAddress` , `MaillingAddress` , and `ShippingAddress` . You only can use the `Address` type in the `MatchingRule` . For example, if you want to match a profile based on `BusinessAddress.City` or `MaillingAddress.City` , you can choose the `BusinessAddress` and the `MaillingAddress` to represent the `Address` type and specify the `Address.City` on the matching rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-attributetypesselector.html#cfn-customerprofiles-domain-attributetypesselector-address
         */
        readonly address?: Array<string>;
        /**
         * Configures the `AttributeMatchingModel` , you can either choose `ONE_TO_ONE` or `MANY_TO_MANY` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-attributetypesselector.html#cfn-customerprofiles-domain-attributetypesselector-attributematchingmodel
         */
        readonly attributeMatchingModel: string;
        /**
         * The Email type.
         *
         * You can choose from `EmailAddress` , `BusinessEmailAddress` and `PersonalEmailAddress` . You only can use the `EmailAddress` type in the `MatchingRule` . For example, if you want to match profile based on `PersonalEmailAddress` or `BusinessEmailAddress` , you can choose the `PersonalEmailAddress` and the `BusinessEmailAddress` to represent the `EmailAddress` type and only specify the `EmailAddress` on the matching rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-attributetypesselector.html#cfn-customerprofiles-domain-attributetypesselector-emailaddress
         */
        readonly emailAddress?: Array<string>;
        /**
         * The `PhoneNumber` type.
         *
         * You can choose from `PhoneNumber` , `HomePhoneNumber` , and `MobilePhoneNumber` . You only can use the `PhoneNumber` type in the `MatchingRule` . For example, if you want to match a profile based on `Phone` or `HomePhone` , you can choose the `Phone` and the `HomePhone` to represent the `PhoneNumber` type and only specify the `PhoneNumber` on the matching rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-attributetypesselector.html#cfn-customerprofiles-domain-attributetypesselector-phonenumber
         */
        readonly phoneNumber?: Array<string>;
    }
    /**
     * Specifies how the rule-based matching process should match profiles.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-matchingrule.html
     */
    interface MatchingRuleProperty {
        /**
         * A single rule level of the `MatchRules` .
         *
         * Configures how the rule-based matching process should match profiles.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-matchingrule.html#cfn-customerprofiles-domain-matchingrule-rule
         */
        readonly rule: Array<string>;
    }
    /**
     * Usage-specific statistics about the domain.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-domainstats.html
     */
    interface DomainStatsProperty {
        /**
         * The number of profiles that you are currently paying for in the domain.
         *
         * If you have more than 100 objects associated with a single profile, that profile counts as two profiles. If you have more than 200 objects, that profile counts as three, and so on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-domainstats.html#cfn-customerprofiles-domain-domainstats-meteringprofilecount
         */
        readonly meteringProfileCount?: number;
        /**
         * The total number of objects in domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-domainstats.html#cfn-customerprofiles-domain-domainstats-objectcount
         */
        readonly objectCount?: number;
        /**
         * The total number of profiles currently in the domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-domainstats.html#cfn-customerprofiles-domain-domainstats-profilecount
         */
        readonly profileCount?: number;
        /**
         * The total size, in bytes, of all objects in the domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-domainstats.html#cfn-customerprofiles-domain-domainstats-totalsize
         */
        readonly totalSize?: number;
    }
}
/**
 * Properties for defining a `CfnDomain`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-domain.html
 */
export interface CfnDomainProps {
    /**
     * The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications.
     *
     * You must set up a policy on the `DeadLetterQueue` for the `SendMessage` operation to enable Amazon Connect Customer Profiles to send messages to the `DeadLetterQueue` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-domain.html#cfn-customerprofiles-domain-deadletterqueueurl
     */
    readonly deadLetterQueueUrl?: string;
    /**
     * The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified.
     *
     * It is used to encrypt all data before it is placed in permanent or semi-permanent storage.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-domain.html#cfn-customerprofiles-domain-defaultencryptionkey
     */
    readonly defaultEncryptionKey?: string;
    /**
     * The default number of days until the data within the domain expires.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-domain.html#cfn-customerprofiles-domain-defaultexpirationdays
     */
    readonly defaultExpirationDays: number;
    /**
     * The unique name of the domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-domain.html#cfn-customerprofiles-domain-domainname
     */
    readonly domainName: string;
    /**
     * The process of matching duplicate profiles.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-domain.html#cfn-customerprofiles-domain-matching
     */
    readonly matching?: cdk.IResolvable | CfnDomain.MatchingProperty;
    /**
     * The process of matching duplicate profiles using Rule-Based matching.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-domain.html#cfn-customerprofiles-domain-rulebasedmatching
     */
    readonly ruleBasedMatching?: cdk.IResolvable | CfnDomain.RuleBasedMatchingProperty;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-domain.html#cfn-customerprofiles-domain-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * An Event Stream resource of Amazon Connect Customer Profiles.
 *
 * @cloudformationResource AWS::CustomerProfiles::EventStream
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventstream.html
 */
export declare class CfnEventStream extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEventStream from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEventStream;
    /**
     * The timestamp of when the export was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * Details regarding the Kinesis stream.
     *
     * @cloudformationAttribute DestinationDetails
     */
    readonly attrDestinationDetails: cdk.IResolvable;
    /**
     * @cloudformationAttribute DestinationDetails.Status
     */
    readonly attrDestinationDetailsStatus: string;
    /**
     * @cloudformationAttribute DestinationDetails.Uri
     */
    readonly attrDestinationDetailsUri: string;
    /**
     * A unique identifier for the event stream.
     *
     * @cloudformationAttribute EventStreamArn
     */
    readonly attrEventStreamArn: string;
    /**
     * The operational state of destination stream for export.
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The unique name of the domain.
     */
    domainName: string;
    /**
     * The name of the event stream.
     */
    eventStreamName: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The StreamARN of the destination to deliver profile events to.
     */
    uri: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEventStreamProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEventStream {
    /**
     * Details regarding the Kinesis stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventstream-destinationdetails.html
     */
    interface DestinationDetailsProperty {
        /**
         * The status of enabling the Kinesis stream as a destination for export.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventstream-destinationdetails.html#cfn-customerprofiles-eventstream-destinationdetails-status
         */
        readonly status: string;
        /**
         * The StreamARN of the destination to deliver profile events to.
         *
         * For example, arn:aws:kinesis:region:account-id:stream/stream-name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventstream-destinationdetails.html#cfn-customerprofiles-eventstream-destinationdetails-uri
         */
        readonly uri: string;
    }
}
/**
 * Properties for defining a `CfnEventStream`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventstream.html
 */
export interface CfnEventStreamProps {
    /**
     * The unique name of the domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventstream.html#cfn-customerprofiles-eventstream-domainname
     */
    readonly domainName: string;
    /**
     * The name of the event stream.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventstream.html#cfn-customerprofiles-eventstream-eventstreamname
     */
    readonly eventStreamName: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventstream.html#cfn-customerprofiles-eventstream-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The StreamARN of the destination to deliver profile events to.
     *
     * For example, arn:aws:kinesis:region:account-id:stream/stream-name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventstream.html#cfn-customerprofiles-eventstream-uri
     */
    readonly uri: string;
}
/**
 * Specifies an Amazon Connect Customer Profiles Integration.
 *
 * @cloudformationResource AWS::CustomerProfiles::Integration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html
 */
export declare class CfnIntegration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIntegration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIntegration;
    /**
     * The timestamp of when the integration was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The timestamp of when the integration was most recently edited.
     *
     * @cloudformationAttribute LastUpdatedAt
     */
    readonly attrLastUpdatedAt: string;
    /**
     * The unique name of the domain.
     */
    domainName: string;
    /**
     * A list of unique names for active event triggers associated with the integration.
     */
    eventTriggerNames?: Array<string>;
    /**
     * The configuration that controls how Customer Profiles retrieves data from the source.
     */
    flowDefinition?: CfnIntegration.FlowDefinitionProperty | cdk.IResolvable;
    /**
     * The name of the profile object type mapping to use.
     */
    objectTypeName?: string;
    /**
     * The object type mapping.
     */
    objectTypeNames?: Array<cdk.IResolvable | CfnIntegration.ObjectTypeMappingProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The URI of the S3 bucket or any other type of data source.
     */
    uri?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIntegrationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnIntegration {
    /**
     * A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an `ObjectTypeName` (template) used to ingest the event.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-objecttypemapping.html
     */
    interface ObjectTypeMappingProperty {
        /**
         * The key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-objecttypemapping.html#cfn-customerprofiles-integration-objecttypemapping-key
         */
        readonly key: string;
        /**
         * The value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-objecttypemapping.html#cfn-customerprofiles-integration-objecttypemapping-value
         */
        readonly value: string;
    }
    /**
     * The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow.
     *
     * Customer Profiles uses this information to create an AppFlow flow on behalf of customers.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-flowdefinition.html
     */
    interface FlowDefinitionProperty {
        /**
         * A description of the flow you want to create.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-flowdefinition.html#cfn-customerprofiles-integration-flowdefinition-description
         */
        readonly description?: string;
        /**
         * The specified name of the flow.
         *
         * Use underscores (_) or hyphens (-) only. Spaces are not allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-flowdefinition.html#cfn-customerprofiles-integration-flowdefinition-flowname
         */
        readonly flowName: string;
        /**
         * The Amazon Resource Name (ARN) of the AWS Key Management Service (KMS) key you provide for encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-flowdefinition.html#cfn-customerprofiles-integration-flowdefinition-kmsarn
         */
        readonly kmsArn: string;
        /**
         * The configuration that controls how Customer Profiles retrieves data from the source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-flowdefinition.html#cfn-customerprofiles-integration-flowdefinition-sourceflowconfig
         */
        readonly sourceFlowConfig: cdk.IResolvable | CfnIntegration.SourceFlowConfigProperty;
        /**
         * A list of tasks that Customer Profiles performs while transferring the data in the flow run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-flowdefinition.html#cfn-customerprofiles-integration-flowdefinition-tasks
         */
        readonly tasks: Array<cdk.IResolvable | CfnIntegration.TaskProperty> | cdk.IResolvable;
        /**
         * The trigger settings that determine how and when the flow runs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-flowdefinition.html#cfn-customerprofiles-integration-flowdefinition-triggerconfig
         */
        readonly triggerConfig: cdk.IResolvable | CfnIntegration.TriggerConfigProperty;
    }
    /**
     * The `Task` property type specifies the class for modeling different type of tasks.
     *
     * Task implementation varies based on the TaskType.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-task.html
     */
    interface TaskProperty {
        /**
         * The operation to be performed on the provided source fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-task.html#cfn-customerprofiles-integration-task-connectoroperator
         */
        readonly connectorOperator?: CfnIntegration.ConnectorOperatorProperty | cdk.IResolvable;
        /**
         * A field in a destination connector, or a field value against which Amazon AppFlow validates a source field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-task.html#cfn-customerprofiles-integration-task-destinationfield
         */
        readonly destinationField?: string;
        /**
         * The source fields to which a particular task is applied.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-task.html#cfn-customerprofiles-integration-task-sourcefields
         */
        readonly sourceFields: Array<string>;
        /**
         * A map used to store task-related information.
         *
         * The service looks for particular information based on the TaskType.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-task.html#cfn-customerprofiles-integration-task-taskproperties
         */
        readonly taskProperties?: Array<cdk.IResolvable | CfnIntegration.TaskPropertiesMapProperty> | cdk.IResolvable;
        /**
         * Specifies the particular task implementation that Amazon AppFlow performs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-task.html#cfn-customerprofiles-integration-task-tasktype
         */
        readonly taskType: string;
    }
    /**
     * The operation to be performed on the provided source fields.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-connectoroperator.html
     */
    interface ConnectorOperatorProperty {
        /**
         * The operation to be performed on the provided Marketo source fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-connectoroperator.html#cfn-customerprofiles-integration-connectoroperator-marketo
         */
        readonly marketo?: string;
        /**
         * The operation to be performed on the provided Amazon S3 source fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-connectoroperator.html#cfn-customerprofiles-integration-connectoroperator-s3
         */
        readonly s3?: string;
        /**
         * The operation to be performed on the provided Salesforce source fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-connectoroperator.html#cfn-customerprofiles-integration-connectoroperator-salesforce
         */
        readonly salesforce?: string;
        /**
         * The operation to be performed on the provided ServiceNow source fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-connectoroperator.html#cfn-customerprofiles-integration-connectoroperator-servicenow
         */
        readonly serviceNow?: string;
        /**
         * The operation to be performed on the provided Zendesk source fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-connectoroperator.html#cfn-customerprofiles-integration-connectoroperator-zendesk
         */
        readonly zendesk?: string;
    }
    /**
     * A map used to store task-related information.
     *
     * The execution service looks for particular information based on the `TaskType` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-taskpropertiesmap.html
     */
    interface TaskPropertiesMapProperty {
        /**
         * The task property key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-taskpropertiesmap.html#cfn-customerprofiles-integration-taskpropertiesmap-operatorpropertykey
         */
        readonly operatorPropertyKey: string;
        /**
         * The task property value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-taskpropertiesmap.html#cfn-customerprofiles-integration-taskpropertiesmap-property
         */
        readonly property: string;
    }
    /**
     * The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-triggerconfig.html
     */
    interface TriggerConfigProperty {
        /**
         * Specifies the configuration details of a schedule-triggered flow that you define.
         *
         * Currently, these settings only apply to the Scheduled trigger type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-triggerconfig.html#cfn-customerprofiles-integration-triggerconfig-triggerproperties
         */
        readonly triggerProperties?: cdk.IResolvable | CfnIntegration.TriggerPropertiesProperty;
        /**
         * Specifies the type of flow trigger.
         *
         * It can be OnDemand, Scheduled, or Event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-triggerconfig.html#cfn-customerprofiles-integration-triggerconfig-triggertype
         */
        readonly triggerType: string;
    }
    /**
     * Specifies the configuration details that control the trigger for a flow.
     *
     * Currently, these settings only apply to the Scheduled trigger type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-triggerproperties.html
     */
    interface TriggerPropertiesProperty {
        /**
         * Specifies the configuration details of a schedule-triggered flow that you define.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-triggerproperties.html#cfn-customerprofiles-integration-triggerproperties-scheduled
         */
        readonly scheduled?: cdk.IResolvable | CfnIntegration.ScheduledTriggerPropertiesProperty;
    }
    /**
     * Specifies the configuration details of a scheduled-trigger flow that you define.
     *
     * Currently, these settings only apply to the scheduled-trigger type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-scheduledtriggerproperties.html
     */
    interface ScheduledTriggerPropertiesProperty {
        /**
         * Specifies whether a scheduled flow has an incremental data transfer or a complete data transfer for each flow run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-scheduledtriggerproperties.html#cfn-customerprofiles-integration-scheduledtriggerproperties-datapullmode
         */
        readonly dataPullMode?: string;
        /**
         * Specifies the date range for the records to import from the connector in the first flow run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-scheduledtriggerproperties.html#cfn-customerprofiles-integration-scheduledtriggerproperties-firstexecutionfrom
         */
        readonly firstExecutionFrom?: number;
        /**
         * Specifies the scheduled end time for a scheduled-trigger flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-scheduledtriggerproperties.html#cfn-customerprofiles-integration-scheduledtriggerproperties-scheduleendtime
         */
        readonly scheduleEndTime?: number;
        /**
         * The scheduling expression that determines the rate at which the schedule will run, for example rate (5 minutes).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-scheduledtriggerproperties.html#cfn-customerprofiles-integration-scheduledtriggerproperties-scheduleexpression
         */
        readonly scheduleExpression: string;
        /**
         * Specifies the optional offset that is added to the time interval for a schedule-triggered flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-scheduledtriggerproperties.html#cfn-customerprofiles-integration-scheduledtriggerproperties-scheduleoffset
         */
        readonly scheduleOffset?: number;
        /**
         * Specifies the scheduled start time for a scheduled-trigger flow.
         *
         * The value must be a date/time value in EPOCH format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-scheduledtriggerproperties.html#cfn-customerprofiles-integration-scheduledtriggerproperties-schedulestarttime
         */
        readonly scheduleStartTime?: number;
        /**
         * Specifies the time zone used when referring to the date and time of a scheduled-triggered flow, such as America/New_York.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-scheduledtriggerproperties.html#cfn-customerprofiles-integration-scheduledtriggerproperties-timezone
         */
        readonly timezone?: string;
    }
    /**
     * The configuration that controls how Customer Profiles retrieves data from the source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-sourceflowconfig.html
     */
    interface SourceFlowConfigProperty {
        /**
         * The name of the Amazon AppFlow connector profile.
         *
         * This name must be unique for each connector profile in the AWS account .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-sourceflowconfig.html#cfn-customerprofiles-integration-sourceflowconfig-connectorprofilename
         */
        readonly connectorProfileName?: string;
        /**
         * The type of connector, such as Salesforce, Marketo, and so on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-sourceflowconfig.html#cfn-customerprofiles-integration-sourceflowconfig-connectortype
         */
        readonly connectorType: string;
        /**
         * Defines the configuration for a scheduled incremental data pull.
         *
         * If a valid configuration is provided, the fields specified in the configuration are used when querying for the incremental data pull.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-sourceflowconfig.html#cfn-customerprofiles-integration-sourceflowconfig-incrementalpullconfig
         */
        readonly incrementalPullConfig?: CfnIntegration.IncrementalPullConfigProperty | cdk.IResolvable;
        /**
         * Specifies the information that is required to query a particular source connector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-sourceflowconfig.html#cfn-customerprofiles-integration-sourceflowconfig-sourceconnectorproperties
         */
        readonly sourceConnectorProperties: cdk.IResolvable | CfnIntegration.SourceConnectorPropertiesProperty;
    }
    /**
     * Specifies the information that is required to query a particular Amazon AppFlow connector.
     *
     * Customer Profiles supports Salesforce, Zendesk, Marketo, ServiceNow and Amazon S3.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-sourceconnectorproperties.html
     */
    interface SourceConnectorPropertiesProperty {
        /**
         * The properties that are applied when Marketo is being used as a source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-sourceconnectorproperties.html#cfn-customerprofiles-integration-sourceconnectorproperties-marketo
         */
        readonly marketo?: cdk.IResolvable | CfnIntegration.MarketoSourcePropertiesProperty;
        /**
         * The properties that are applied when Amazon S3 is being used as the flow source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-sourceconnectorproperties.html#cfn-customerprofiles-integration-sourceconnectorproperties-s3
         */
        readonly s3?: cdk.IResolvable | CfnIntegration.S3SourcePropertiesProperty;
        /**
         * The properties that are applied when Salesforce is being used as a source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-sourceconnectorproperties.html#cfn-customerprofiles-integration-sourceconnectorproperties-salesforce
         */
        readonly salesforce?: cdk.IResolvable | CfnIntegration.SalesforceSourcePropertiesProperty;
        /**
         * The properties that are applied when ServiceNow is being used as a source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-sourceconnectorproperties.html#cfn-customerprofiles-integration-sourceconnectorproperties-servicenow
         */
        readonly serviceNow?: cdk.IResolvable | CfnIntegration.ServiceNowSourcePropertiesProperty;
        /**
         * The properties that are applied when using Zendesk as a flow source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-sourceconnectorproperties.html#cfn-customerprofiles-integration-sourceconnectorproperties-zendesk
         */
        readonly zendesk?: cdk.IResolvable | CfnIntegration.ZendeskSourcePropertiesProperty;
    }
    /**
     * The properties that are applied when Amazon S3 is being used as the flow source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-s3sourceproperties.html
     */
    interface S3SourcePropertiesProperty {
        /**
         * The Amazon S3 bucket name where the source files are stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-s3sourceproperties.html#cfn-customerprofiles-integration-s3sourceproperties-bucketname
         */
        readonly bucketName: string;
        /**
         * The object key for the Amazon S3 bucket in which the source files are stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-s3sourceproperties.html#cfn-customerprofiles-integration-s3sourceproperties-bucketprefix
         */
        readonly bucketPrefix?: string;
    }
    /**
     * The properties that are applied when ServiceNow is being used as a source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-servicenowsourceproperties.html
     */
    interface ServiceNowSourcePropertiesProperty {
        /**
         * The object specified in the ServiceNow flow source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-servicenowsourceproperties.html#cfn-customerprofiles-integration-servicenowsourceproperties-object
         */
        readonly object: string;
    }
    /**
     * The properties that are applied when using Zendesk as a flow source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-zendesksourceproperties.html
     */
    interface ZendeskSourcePropertiesProperty {
        /**
         * The object specified in the Zendesk flow source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-zendesksourceproperties.html#cfn-customerprofiles-integration-zendesksourceproperties-object
         */
        readonly object: string;
    }
    /**
     * The properties that are applied when Marketo is being used as a source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-marketosourceproperties.html
     */
    interface MarketoSourcePropertiesProperty {
        /**
         * The object specified in the Marketo flow source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-marketosourceproperties.html#cfn-customerprofiles-integration-marketosourceproperties-object
         */
        readonly object: string;
    }
    /**
     * The properties that are applied when Salesforce is being used as a source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-salesforcesourceproperties.html
     */
    interface SalesforceSourcePropertiesProperty {
        /**
         * The flag that enables dynamic fetching of new (recently added) fields in the Salesforce objects while running a flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-salesforcesourceproperties.html#cfn-customerprofiles-integration-salesforcesourceproperties-enabledynamicfieldupdate
         */
        readonly enableDynamicFieldUpdate?: boolean | cdk.IResolvable;
        /**
         * Indicates whether Amazon AppFlow includes deleted files in the flow run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-salesforcesourceproperties.html#cfn-customerprofiles-integration-salesforcesourceproperties-includedeletedrecords
         */
        readonly includeDeletedRecords?: boolean | cdk.IResolvable;
        /**
         * The object specified in the Salesforce flow source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-salesforcesourceproperties.html#cfn-customerprofiles-integration-salesforcesourceproperties-object
         */
        readonly object: string;
    }
    /**
     * Specifies the configuration used when importing incremental records from the source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-incrementalpullconfig.html
     */
    interface IncrementalPullConfigProperty {
        /**
         * A field that specifies the date time or timestamp field as the criteria to use when importing incremental records from the source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-incrementalpullconfig.html#cfn-customerprofiles-integration-incrementalpullconfig-datetimetypefieldname
         */
        readonly datetimeTypeFieldName?: string;
    }
}
/**
 * Properties for defining a `CfnIntegration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html
 */
export interface CfnIntegrationProps {
    /**
     * The unique name of the domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-domainname
     */
    readonly domainName: string;
    /**
     * A list of unique names for active event triggers associated with the integration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-eventtriggernames
     */
    readonly eventTriggerNames?: Array<string>;
    /**
     * The configuration that controls how Customer Profiles retrieves data from the source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-flowdefinition
     */
    readonly flowDefinition?: CfnIntegration.FlowDefinitionProperty | cdk.IResolvable;
    /**
     * The name of the profile object type mapping to use.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-objecttypename
     */
    readonly objectTypeName?: string;
    /**
     * The object type mapping.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-objecttypenames
     */
    readonly objectTypeNames?: Array<cdk.IResolvable | CfnIntegration.ObjectTypeMappingProperty> | cdk.IResolvable;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The URI of the S3 bucket or any other type of data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-uri
     */
    readonly uri?: string;
}
/**
 * Specifies an Amazon Connect Customer Profiles Object Type Mapping.
 *
 * @cloudformationResource AWS::CustomerProfiles::ObjectType
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-objecttype.html
 */
export declare class CfnObjectType extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnObjectType from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnObjectType;
    /**
     * The timestamp of when the object type was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The timestamp of when the object type was most recently edited.
     *
     * @cloudformationAttribute LastUpdatedAt
     */
    readonly attrLastUpdatedAt: string;
    /**
     * Indicates whether a profile should be created when data is received if one doesn’t exist for an object of this type.
     */
    allowProfileCreation?: boolean | cdk.IResolvable;
    /**
     * The description of the profile object type mapping.
     */
    description: string;
    /**
     * The unique name of the domain.
     */
    domainName: string;
    /**
     * The customer-provided key to encrypt the profile object that will be created in this profile object type mapping.
     */
    encryptionKey?: string;
    /**
     * The number of days until the data of this type expires.
     */
    expirationDays?: number;
    /**
     * A list of field definitions for the object type mapping.
     */
    fields?: Array<CfnObjectType.FieldMapProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A list of keys that can be used to map data to the profile or search for the profile.
     */
    keys?: Array<cdk.IResolvable | CfnObjectType.KeyMapProperty> | cdk.IResolvable;
    /**
     * The name of the profile object type.
     */
    objectTypeName: string;
    /**
     * The format of your sourceLastUpdatedTimestamp that was previously set up.
     */
    sourceLastUpdatedTimestampFormat?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * A unique identifier for the template mapping.
     */
    templateId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnObjectTypeProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnObjectType {
    /**
     * A map of the name and ObjectType field.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-objecttype-fieldmap.html
     */
    interface FieldMapProperty {
        /**
         * Name of the field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-objecttype-fieldmap.html#cfn-customerprofiles-objecttype-fieldmap-name
         */
        readonly name?: string;
        /**
         * Represents a field in a ProfileObjectType.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-objecttype-fieldmap.html#cfn-customerprofiles-objecttype-fieldmap-objecttypefield
         */
        readonly objectTypeField?: cdk.IResolvable | CfnObjectType.ObjectTypeFieldProperty;
    }
    /**
     * Represents a field in a ProfileObjectType.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-objecttype-objecttypefield.html
     */
    interface ObjectTypeFieldProperty {
        /**
         * The content type of the field.
         *
         * Used for determining equality when searching.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-objecttype-objecttypefield.html#cfn-customerprofiles-objecttype-objecttypefield-contenttype
         */
        readonly contentType?: string;
        /**
         * A field of a ProfileObject.
         *
         * For example: _source.FirstName, where “_source” is a ProfileObjectType of a Zendesk user and “FirstName” is a field in that ObjectType.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-objecttype-objecttypefield.html#cfn-customerprofiles-objecttype-objecttypefield-source
         */
        readonly source?: string;
        /**
         * The location of the data in the standard ProfileObject model.
         *
         * For example: _profile.Address.PostalCode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-objecttype-objecttypefield.html#cfn-customerprofiles-objecttype-objecttypefield-target
         */
        readonly target?: string;
    }
    /**
     * A unique key map that can be used to map data to the profile.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-objecttype-keymap.html
     */
    interface KeyMapProperty {
        /**
         * Name of the key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-objecttype-keymap.html#cfn-customerprofiles-objecttype-keymap-name
         */
        readonly name?: string;
        /**
         * A list of ObjectTypeKey.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-objecttype-keymap.html#cfn-customerprofiles-objecttype-keymap-objecttypekeylist
         */
        readonly objectTypeKeyList?: Array<cdk.IResolvable | CfnObjectType.ObjectTypeKeyProperty> | cdk.IResolvable;
    }
    /**
     * An object that defines the Key element of a ProfileObject.
     *
     * A Key is a special element that can be used to search for a customer profile.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-objecttype-objecttypekey.html
     */
    interface ObjectTypeKeyProperty {
        /**
         * The reference for the key name of the fields map.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-objecttype-objecttypekey.html#cfn-customerprofiles-objecttype-objecttypekey-fieldnames
         */
        readonly fieldNames?: Array<string>;
        /**
         * The types of keys that a ProfileObject can have.
         *
         * Each ProfileObject can have only 1 UNIQUE key but multiple PROFILE keys. PROFILE means that this key can be used to tie an object to a PROFILE. UNIQUE means that it can be used to uniquely identify an object. If a key a is marked as SECONDARY, it will be used to search for profiles after all other PROFILE keys have been searched. A LOOKUP_ONLY key is only used to match a profile but is not persisted to be used for searching of the profile. A NEW_ONLY key is only used if the profile does not already exist before the object is ingested, otherwise it is only used for matching objects to profiles.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-objecttype-objecttypekey.html#cfn-customerprofiles-objecttype-objecttypekey-standardidentifiers
         */
        readonly standardIdentifiers?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnObjectType`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-objecttype.html
 */
export interface CfnObjectTypeProps {
    /**
     * Indicates whether a profile should be created when data is received if one doesn’t exist for an object of this type.
     *
     * The default is `FALSE` . If the AllowProfileCreation flag is set to `FALSE` , then the service tries to fetch a standard profile and associate this object with the profile. If it is set to `TRUE` , and if no match is found, then the service creates a new standard profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-objecttype.html#cfn-customerprofiles-objecttype-allowprofilecreation
     */
    readonly allowProfileCreation?: boolean | cdk.IResolvable;
    /**
     * The description of the profile object type mapping.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-objecttype.html#cfn-customerprofiles-objecttype-description
     */
    readonly description: string;
    /**
     * The unique name of the domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-objecttype.html#cfn-customerprofiles-objecttype-domainname
     */
    readonly domainName: string;
    /**
     * The customer-provided key to encrypt the profile object that will be created in this profile object type mapping.
     *
     * If not specified the system will use the encryption key of the domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-objecttype.html#cfn-customerprofiles-objecttype-encryptionkey
     */
    readonly encryptionKey?: string;
    /**
     * The number of days until the data of this type expires.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-objecttype.html#cfn-customerprofiles-objecttype-expirationdays
     */
    readonly expirationDays?: number;
    /**
     * A list of field definitions for the object type mapping.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-objecttype.html#cfn-customerprofiles-objecttype-fields
     */
    readonly fields?: Array<CfnObjectType.FieldMapProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A list of keys that can be used to map data to the profile or search for the profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-objecttype.html#cfn-customerprofiles-objecttype-keys
     */
    readonly keys?: Array<cdk.IResolvable | CfnObjectType.KeyMapProperty> | cdk.IResolvable;
    /**
     * The name of the profile object type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-objecttype.html#cfn-customerprofiles-objecttype-objecttypename
     */
    readonly objectTypeName: string;
    /**
     * The format of your sourceLastUpdatedTimestamp that was previously set up.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-objecttype.html#cfn-customerprofiles-objecttype-sourcelastupdatedtimestampformat
     */
    readonly sourceLastUpdatedTimestampFormat?: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-objecttype.html#cfn-customerprofiles-objecttype-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * A unique identifier for the template mapping.
     *
     * This can be used instead of specifying the Keys and Fields properties directly.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-objecttype.html#cfn-customerprofiles-objecttype-templateid
     */
    readonly templateId?: string;
}
/**
 * Specifies the rules to perform an action based on customer ingested data.
 *
 * @cloudformationResource AWS::CustomerProfiles::EventTrigger
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html
 */
export declare class CfnEventTrigger extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEventTrigger from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEventTrigger;
    /**
     * The timestamp of when the event trigger was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The timestamp of when the event trigger was most recently updated.
     *
     * @cloudformationAttribute LastUpdatedAt
     */
    readonly attrLastUpdatedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the event trigger.
     */
    description?: string;
    /**
     * The unique name of the domain.
     */
    domainName: string;
    /**
     * A list of conditions that determine when an event should trigger the destination.
     */
    eventTriggerConditions: Array<CfnEventTrigger.EventTriggerConditionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.
     */
    eventTriggerLimits?: CfnEventTrigger.EventTriggerLimitsProperty | cdk.IResolvable;
    /**
     * The unique name of the event trigger.
     */
    eventTriggerName: string;
    /**
     * The unique name of the object type.
     */
    objectTypeName: string;
    /**
     * The destination is triggered only for profiles that meet the criteria of a segment definition.
     */
    segmentFilter?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEventTriggerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEventTrigger {
    /**
     * Specifies the circumstances under which the event should trigger the destination.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-eventtriggercondition.html
     */
    interface EventTriggerConditionProperty {
        /**
         * A list of dimensions to be evaluated for the event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-eventtriggercondition.html#cfn-customerprofiles-eventtrigger-eventtriggercondition-eventtriggerdimensions
         */
        readonly eventTriggerDimensions: Array<CfnEventTrigger.EventTriggerDimensionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The operator used to combine multiple dimensions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-eventtriggercondition.html#cfn-customerprofiles-eventtrigger-eventtriggercondition-logicaloperator
         */
        readonly logicalOperator: string;
    }
    /**
     * A specific event dimension to be assessed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-eventtriggerdimension.html
     */
    interface EventTriggerDimensionProperty {
        /**
         * A list of object attributes to be evaluated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-eventtriggerdimension.html#cfn-customerprofiles-eventtrigger-eventtriggerdimension-objectattributes
         */
        readonly objectAttributes: Array<cdk.IResolvable | CfnEventTrigger.ObjectAttributeProperty> | cdk.IResolvable;
    }
    /**
     * The criteria that a specific object attribute must meet to trigger the destination.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-objectattribute.html
     */
    interface ObjectAttributeProperty {
        /**
         * The operator used to compare an attribute against a list of values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-objectattribute.html#cfn-customerprofiles-eventtrigger-objectattribute-comparisonoperator
         */
        readonly comparisonOperator: string;
        /**
         * A field defined within an object type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-objectattribute.html#cfn-customerprofiles-eventtrigger-objectattribute-fieldname
         */
        readonly fieldName?: string;
        /**
         * An attribute contained within a source object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-objectattribute.html#cfn-customerprofiles-eventtrigger-objectattribute-source
         */
        readonly source?: string;
        /**
         * The amount of time of the specified unit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-objectattribute.html#cfn-customerprofiles-eventtrigger-objectattribute-values
         */
        readonly values: Array<string>;
    }
    /**
     * Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-eventtriggerlimits.html
     */
    interface EventTriggerLimitsProperty {
        /**
         * Specifies that an event will only trigger the destination if it is processed within a certain latency period.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-eventtriggerlimits.html#cfn-customerprofiles-eventtrigger-eventtriggerlimits-eventexpiration
         */
        readonly eventExpiration?: number;
        /**
         * A list of time periods during which the limits apply.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-eventtriggerlimits.html#cfn-customerprofiles-eventtrigger-eventtriggerlimits-periods
         */
        readonly periods?: Array<cdk.IResolvable | CfnEventTrigger.PeriodProperty> | cdk.IResolvable;
    }
    /**
     * Defines a limit and the time period during which it is enforced.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-period.html
     */
    interface PeriodProperty {
        /**
         * The maximum allowed number of destination invocations per profile.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-period.html#cfn-customerprofiles-eventtrigger-period-maxinvocationsperprofile
         */
        readonly maxInvocationsPerProfile?: number;
        /**
         * The unit of time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-period.html#cfn-customerprofiles-eventtrigger-period-unit
         */
        readonly unit: string;
        /**
         * If set to true, there is no limit on the number of destination invocations per profile.
         *
         * The default is false.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-period.html#cfn-customerprofiles-eventtrigger-period-unlimited
         */
        readonly unlimited?: boolean | cdk.IResolvable;
        /**
         * The amount of time of the specified unit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-period.html#cfn-customerprofiles-eventtrigger-period-value
         */
        readonly value: number;
    }
}
/**
 * Properties for defining a `CfnEventTrigger`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html
 */
export interface CfnEventTriggerProps {
    /**
     * The description of the event trigger.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-description
     */
    readonly description?: string;
    /**
     * The unique name of the domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-domainname
     */
    readonly domainName: string;
    /**
     * A list of conditions that determine when an event should trigger the destination.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-eventtriggerconditions
     */
    readonly eventTriggerConditions: Array<CfnEventTrigger.EventTriggerConditionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-eventtriggerlimits
     */
    readonly eventTriggerLimits?: CfnEventTrigger.EventTriggerLimitsProperty | cdk.IResolvable;
    /**
     * The unique name of the event trigger.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-eventtriggername
     */
    readonly eventTriggerName: string;
    /**
     * The unique name of the object type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-objecttypename
     */
    readonly objectTypeName: string;
    /**
     * The destination is triggered only for profiles that meet the criteria of a segment definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-segmentfilter
     */
    readonly segmentFilter?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * A segment definition resource of Amazon Connect Customer Profiles.
 *
 * @cloudformationResource AWS::CustomerProfiles::SegmentDefinition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html
 */
export declare class CfnSegmentDefinition extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSegmentDefinition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSegmentDefinition;
    /**
     * When the segment definition was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The arn of the segment definition.
     *
     * @cloudformationAttribute SegmentDefinitionArn
     */
    readonly attrSegmentDefinitionArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the segment definition.
     */
    description?: string;
    /**
     * Display name of the segment definition.
     */
    displayName: string;
    /**
     * The name of the domain.
     */
    domainName: string;
    /**
     * Name of the segment definition.
     */
    segmentDefinitionName: string;
    /**
     * Contains all groups of the segment definition.
     */
    segmentGroups: cdk.IResolvable | CfnSegmentDefinition.SegmentGroupProperty;
    /**
     * The tags belonging to the segment definition.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSegmentDefinitionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSegmentDefinition {
    /**
     * Contains all groups of the segment definition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-segmentgroup.html
     */
    interface SegmentGroupProperty {
        /**
         * Holds the list of groups within the segment definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-segmentgroup.html#cfn-customerprofiles-segmentdefinition-segmentgroup-groups
         */
        readonly groups?: Array<CfnSegmentDefinition.GroupProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Defines whether to include or exclude the profiles that fit the segment criteria.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-segmentgroup.html#cfn-customerprofiles-segmentdefinition-segmentgroup-include
         */
        readonly include?: string;
    }
    /**
     * Contains dimensions that determine what to segment on.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-group.html
     */
    interface GroupProperty {
        /**
         * Defines the attributes to segment on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-group.html#cfn-customerprofiles-segmentdefinition-group-dimensions
         */
        readonly dimensions?: Array<CfnSegmentDefinition.DimensionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Defines the starting source of data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-group.html#cfn-customerprofiles-segmentdefinition-group-sourcesegments
         */
        readonly sourceSegments?: Array<cdk.IResolvable | CfnSegmentDefinition.SourceSegmentProperty> | cdk.IResolvable;
        /**
         * Defines how to interact with the source data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-group.html#cfn-customerprofiles-segmentdefinition-group-sourcetype
         */
        readonly sourceType?: string;
        /**
         * Defines how to interact with the profiles found in the current filtering.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-group.html#cfn-customerprofiles-segmentdefinition-group-type
         */
        readonly type?: string;
    }
    /**
     * Defines the attribute to segment on.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-dimension.html
     */
    interface DimensionProperty {
        /**
         * Object that holds the calculated attributes to segment on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-dimension.html#cfn-customerprofiles-segmentdefinition-dimension-calculatedattributes
         */
        readonly calculatedAttributes?: cdk.IResolvable | Record<string, CfnSegmentDefinition.CalculatedAttributeDimensionProperty | cdk.IResolvable>;
        /**
         * Object that holds the profile attributes to segment on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-dimension.html#cfn-customerprofiles-segmentdefinition-dimension-profileattributes
         */
        readonly profileAttributes?: cdk.IResolvable | CfnSegmentDefinition.ProfileAttributesProperty;
    }
    /**
     * The object used to segment on attributes within the customer profile.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html
     */
    interface ProfileAttributesProperty {
        /**
         * A field to describe values to segment on within account number.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-accountnumber
         */
        readonly accountNumber?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
        /**
         * A field to describe values to segment on within additional information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-additionalinformation
         */
        readonly additionalInformation?: CfnSegmentDefinition.ExtraLengthValueProfileDimensionProperty | cdk.IResolvable;
        /**
         * A field to describe values to segment on within address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-address
         */
        readonly address?: CfnSegmentDefinition.AddressDimensionProperty | cdk.IResolvable;
        /**
         * A field to describe values to segment on within attributes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-attributes
         */
        readonly attributes?: cdk.IResolvable | Record<string, CfnSegmentDefinition.AttributeDimensionProperty | cdk.IResolvable>;
        /**
         * A field to describe values to segment on within billing address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-billingaddress
         */
        readonly billingAddress?: CfnSegmentDefinition.AddressDimensionProperty | cdk.IResolvable;
        /**
         * A field to describe values to segment on within birthDate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-birthdate
         */
        readonly birthDate?: CfnSegmentDefinition.DateDimensionProperty | cdk.IResolvable;
        /**
         * A field to describe values to segment on within business email address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-businessemailaddress
         */
        readonly businessEmailAddress?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
        /**
         * A field to describe values to segment on within business name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-businessname
         */
        readonly businessName?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
        /**
         * A field to describe values to segment on within business phone number.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-businessphonenumber
         */
        readonly businessPhoneNumber?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
        /**
         * A field to describe values to segment on within email address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-emailaddress
         */
        readonly emailAddress?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
        /**
         * A field to describe values to segment on within first name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-firstname
         */
        readonly firstName?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
        /**
         * A field to describe values to segment on within genderString.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-genderstring
         */
        readonly genderString?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
        /**
         * A field to describe values to segment on within home phone number.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-homephonenumber
         */
        readonly homePhoneNumber?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
        /**
         * A field to describe values to segment on within last name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-lastname
         */
        readonly lastName?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
        /**
         * A field to describe values to segment on within mailing address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-mailingaddress
         */
        readonly mailingAddress?: CfnSegmentDefinition.AddressDimensionProperty | cdk.IResolvable;
        /**
         * A field to describe values to segment on within middle name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-middlename
         */
        readonly middleName?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
        /**
         * A field to describe values to segment on within mobile phone number.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-mobilephonenumber
         */
        readonly mobilePhoneNumber?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
        /**
         * A field to describe values to segment on within partyTypeString.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-partytypestring
         */
        readonly partyTypeString?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
        /**
         * A field to describe values to segment on within personal email address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-personalemailaddress
         */
        readonly personalEmailAddress?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
        /**
         * A field to describe values to segment on within phone number.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-phonenumber
         */
        readonly phoneNumber?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
        /**
         * A field to describe values to segment on within shipping address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html#cfn-customerprofiles-segmentdefinition-profileattributes-shippingaddress
         */
        readonly shippingAddress?: CfnSegmentDefinition.AddressDimensionProperty | cdk.IResolvable;
    }
    /**
     * Object that segments on various Customer profile's fields that are larger than normal.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profiledimension.html
     */
    interface ProfileDimensionProperty {
        /**
         * The action to segment on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profiledimension.html#cfn-customerprofiles-segmentdefinition-profiledimension-dimensiontype
         */
        readonly dimensionType: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profiledimension.html#cfn-customerprofiles-segmentdefinition-profiledimension-values
         */
        readonly values: Array<string>;
    }
    /**
     * Object that segments on various Customer profile's fields that are larger than normal.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-extralengthvalueprofiledimension.html
     */
    interface ExtraLengthValueProfileDimensionProperty {
        /**
         * The action to segment with.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-extralengthvalueprofiledimension.html#cfn-customerprofiles-segmentdefinition-extralengthvalueprofiledimension-dimensiontype
         */
        readonly dimensionType: string;
        /**
         * The values to apply the DimensionType on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-extralengthvalueprofiledimension.html#cfn-customerprofiles-segmentdefinition-extralengthvalueprofiledimension-values
         */
        readonly values: Array<string>;
    }
    /**
     * Object that segments on various Customer Profile's date fields.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-datedimension.html
     */
    interface DateDimensionProperty {
        /**
         * The action to segment on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-datedimension.html#cfn-customerprofiles-segmentdefinition-datedimension-dimensiontype
         */
        readonly dimensionType: string;
        /**
         * The values to apply the DimensionType on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-datedimension.html#cfn-customerprofiles-segmentdefinition-datedimension-values
         */
        readonly values: Array<string>;
    }
    /**
     * Object that segments on Customer Profile's address object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-addressdimension.html
     */
    interface AddressDimensionProperty {
        /**
         * The city belonging to the address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-addressdimension.html#cfn-customerprofiles-segmentdefinition-addressdimension-city
         */
        readonly city?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
        /**
         * The country belonging to the address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-addressdimension.html#cfn-customerprofiles-segmentdefinition-addressdimension-country
         */
        readonly country?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
        /**
         * The county belonging to the address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-addressdimension.html#cfn-customerprofiles-segmentdefinition-addressdimension-county
         */
        readonly county?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
        /**
         * The postal code belonging to the address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-addressdimension.html#cfn-customerprofiles-segmentdefinition-addressdimension-postalcode
         */
        readonly postalCode?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
        /**
         * The province belonging to the address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-addressdimension.html#cfn-customerprofiles-segmentdefinition-addressdimension-province
         */
        readonly province?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
        /**
         * The state belonging to the address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-addressdimension.html#cfn-customerprofiles-segmentdefinition-addressdimension-state
         */
        readonly state?: cdk.IResolvable | CfnSegmentDefinition.ProfileDimensionProperty;
    }
    /**
     * Object that defines how to filter the incoming objects for the calculated attribute.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-attributedimension.html
     */
    interface AttributeDimensionProperty {
        /**
         * The action to segment with.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-attributedimension.html#cfn-customerprofiles-segmentdefinition-attributedimension-dimensiontype
         */
        readonly dimensionType: string;
        /**
         * The values to apply the DimensionType on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-attributedimension.html#cfn-customerprofiles-segmentdefinition-attributedimension-values
         */
        readonly values: Array<string>;
    }
    /**
     * Object that segments on Customer Profile's Calculated Attributes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-calculatedattributedimension.html
     */
    interface CalculatedAttributeDimensionProperty {
        /**
         * Applies the given condition over the initial Calculated Attribute's definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-calculatedattributedimension.html#cfn-customerprofiles-segmentdefinition-calculatedattributedimension-conditionoverrides
         */
        readonly conditionOverrides?: CfnSegmentDefinition.ConditionOverridesProperty | cdk.IResolvable;
        /**
         * The action to segment with.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-calculatedattributedimension.html#cfn-customerprofiles-segmentdefinition-calculatedattributedimension-dimensiontype
         */
        readonly dimensionType: string;
        /**
         * The values to apply the DimensionType with.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-calculatedattributedimension.html#cfn-customerprofiles-segmentdefinition-calculatedattributedimension-values
         */
        readonly values: Array<string>;
    }
    /**
     * An object to override the original condition block of a calculated attribute.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-conditionoverrides.html
     */
    interface ConditionOverridesProperty {
        /**
         * The relative time period over which data is included in the aggregation for this override.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-conditionoverrides.html#cfn-customerprofiles-segmentdefinition-conditionoverrides-range
         */
        readonly range?: cdk.IResolvable | CfnSegmentDefinition.RangeOverrideProperty;
    }
    /**
     * Overrides the original range on a calculated attribute definition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-rangeoverride.html
     */
    interface RangeOverrideProperty {
        /**
         * The end time of when to include objects.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-rangeoverride.html#cfn-customerprofiles-segmentdefinition-rangeoverride-end
         */
        readonly end?: number;
        /**
         * The start time of when to include objects.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-rangeoverride.html#cfn-customerprofiles-segmentdefinition-rangeoverride-start
         */
        readonly start: number;
        /**
         * The unit for start and end.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-rangeoverride.html#cfn-customerprofiles-segmentdefinition-rangeoverride-unit
         */
        readonly unit: string;
    }
    /**
     * The source segments to build off of.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-sourcesegment.html
     */
    interface SourceSegmentProperty {
        /**
         * The name of the source segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-sourcesegment.html#cfn-customerprofiles-segmentdefinition-sourcesegment-segmentdefinitionname
         */
        readonly segmentDefinitionName?: string;
    }
}
/**
 * Properties for defining a `CfnSegmentDefinition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html
 */
export interface CfnSegmentDefinitionProps {
    /**
     * The description of the segment definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-description
     */
    readonly description?: string;
    /**
     * Display name of the segment definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-displayname
     */
    readonly displayName: string;
    /**
     * The name of the domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-domainname
     */
    readonly domainName: string;
    /**
     * Name of the segment definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-segmentdefinitionname
     */
    readonly segmentDefinitionName: string;
    /**
     * Contains all groups of the segment definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-segmentgroups
     */
    readonly segmentGroups: cdk.IResolvable | CfnSegmentDefinition.SegmentGroupProperty;
    /**
     * The tags belonging to the segment definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
