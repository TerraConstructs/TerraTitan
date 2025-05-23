import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::CodePipeline::CustomActionType` resource creates a custom action for activities that aren't included in the CodePipeline default actions, such as running an internally developed build process or a test suite.
 *
 * You can use these custom actions in the stage of a pipeline. For more information, see [Create and Add a Custom Action in AWS CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/how-to-create-custom-action.html) in the *AWS CodePipeline User Guide* .
 *
 * @cloudformationResource AWS::CodePipeline::CustomActionType
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype.html
 */
export declare class CfnCustomActionType extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCustomActionType from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCustomActionType;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The category of the custom action, such as a build action or a test action.
     */
    category: string;
    /**
     * The configuration properties for the custom action.
     */
    configurationProperties?: Array<CfnCustomActionType.ConfigurationPropertiesProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The details of the input artifact for the action, such as its commit ID.
     */
    inputArtifactDetails: CfnCustomActionType.ArtifactDetailsProperty | cdk.IResolvable;
    /**
     * The details of the output artifact of the action, such as its commit ID.
     */
    outputArtifactDetails: CfnCustomActionType.ArtifactDetailsProperty | cdk.IResolvable;
    /**
     * The provider of the service used in the custom action, such as CodeDeploy.
     */
    provider: string;
    /**
     * URLs that provide users information about this custom action.
     */
    settings?: cdk.IResolvable | CfnCustomActionType.SettingsProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags for the custom action.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The version identifier of the custom action.
     */
    version: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCustomActionTypeProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCustomActionType {
    /**
     * Returns information about the details of an artifact.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-artifactdetails.html
     */
    interface ArtifactDetailsProperty {
        /**
         * The maximum number of artifacts allowed for the action type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-artifactdetails.html#cfn-codepipeline-customactiontype-artifactdetails-maximumcount
         */
        readonly maximumCount: number;
        /**
         * The minimum number of artifacts allowed for the action type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-artifactdetails.html#cfn-codepipeline-customactiontype-artifactdetails-minimumcount
         */
        readonly minimumCount: number;
    }
    /**
     * The configuration properties for the custom action.
     *
     * > You can refer to a name in the configuration properties of the custom action within the URL templates by following the format of {Config:name}, as long as the configuration property is both required and not secret. For more information, see [Create a Custom Action for a Pipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/how-to-create-custom-action.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-configurationproperties.html
     */
    interface ConfigurationPropertiesProperty {
        /**
         * The description of the action configuration property that is displayed to users.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-configurationproperties.html#cfn-codepipeline-customactiontype-configurationproperties-description
         */
        readonly description?: string;
        /**
         * Whether the configuration property is a key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-configurationproperties.html#cfn-codepipeline-customactiontype-configurationproperties-key
         */
        readonly key: boolean | cdk.IResolvable;
        /**
         * The name of the action configuration property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-configurationproperties.html#cfn-codepipeline-customactiontype-configurationproperties-name
         */
        readonly name: string;
        /**
         * Indicates that the property is used with `PollForJobs` .
         *
         * When creating a custom action, an action can have up to one queryable property. If it has one, that property must be both required and not secret.
         *
         * If you create a pipeline with a custom action type, and that custom action contains a queryable property, the value for that configuration property is subject to other restrictions. The value must be less than or equal to twenty (20) characters. The value can contain only alphanumeric characters, underscores, and hyphens.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-configurationproperties.html#cfn-codepipeline-customactiontype-configurationproperties-queryable
         */
        readonly queryable?: boolean | cdk.IResolvable;
        /**
         * Whether the configuration property is a required value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-configurationproperties.html#cfn-codepipeline-customactiontype-configurationproperties-required
         */
        readonly required: boolean | cdk.IResolvable;
        /**
         * Whether the configuration property is secret.
         *
         * Secrets are hidden from all calls except for `GetJobDetails` , `GetThirdPartyJobDetails` , `PollForJobs` , and `PollForThirdPartyJobs` .
         *
         * When updating a pipeline, passing * * * * * without changing any other values of the action preserves the previous value of the secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-configurationproperties.html#cfn-codepipeline-customactiontype-configurationproperties-secret
         */
        readonly secret: boolean | cdk.IResolvable;
        /**
         * The type of the configuration property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-configurationproperties.html#cfn-codepipeline-customactiontype-configurationproperties-type
         */
        readonly type?: string;
    }
    /**
     * `Settings` is a property of the `AWS::CodePipeline::CustomActionType` resource that provides URLs that users can access to view information about the CodePipeline custom action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-settings.html
     */
    interface SettingsProperty {
        /**
         * The URL returned to the CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for a CodeDeploy deployment group.
         *
         * This link is provided as part of the action display in the pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-settings.html#cfn-codepipeline-customactiontype-settings-entityurltemplate
         */
        readonly entityUrlTemplate?: string;
        /**
         * The URL returned to the CodePipeline console that contains a link to the top-level landing page for the external system, such as the console page for CodeDeploy.
         *
         * This link is shown on the pipeline view page in the CodePipeline console and provides a link to the execution entity of the external action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-settings.html#cfn-codepipeline-customactiontype-settings-executionurltemplate
         */
        readonly executionUrlTemplate?: string;
        /**
         * The URL returned to the CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-settings.html#cfn-codepipeline-customactiontype-settings-revisionurltemplate
         */
        readonly revisionUrlTemplate?: string;
        /**
         * The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-settings.html#cfn-codepipeline-customactiontype-settings-thirdpartyconfigurationurl
         */
        readonly thirdPartyConfigurationUrl?: string;
    }
}
/**
 * Properties for defining a `CfnCustomActionType`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype.html
 */
export interface CfnCustomActionTypeProps {
    /**
     * The category of the custom action, such as a build action or a test action.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype.html#cfn-codepipeline-customactiontype-category
     */
    readonly category: string;
    /**
     * The configuration properties for the custom action.
     *
     * > You can refer to a name in the configuration properties of the custom action within the URL templates by following the format of {Config:name}, as long as the configuration property is both required and not secret. For more information, see [Create a Custom Action for a Pipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/how-to-create-custom-action.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype.html#cfn-codepipeline-customactiontype-configurationproperties
     */
    readonly configurationProperties?: Array<CfnCustomActionType.ConfigurationPropertiesProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The details of the input artifact for the action, such as its commit ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype.html#cfn-codepipeline-customactiontype-inputartifactdetails
     */
    readonly inputArtifactDetails: CfnCustomActionType.ArtifactDetailsProperty | cdk.IResolvable;
    /**
     * The details of the output artifact of the action, such as its commit ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype.html#cfn-codepipeline-customactiontype-outputartifactdetails
     */
    readonly outputArtifactDetails: CfnCustomActionType.ArtifactDetailsProperty | cdk.IResolvable;
    /**
     * The provider of the service used in the custom action, such as CodeDeploy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype.html#cfn-codepipeline-customactiontype-provider
     */
    readonly provider: string;
    /**
     * URLs that provide users information about this custom action.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype.html#cfn-codepipeline-customactiontype-settings
     */
    readonly settings?: cdk.IResolvable | CfnCustomActionType.SettingsProperty;
    /**
     * The tags for the custom action.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype.html#cfn-codepipeline-customactiontype-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The version identifier of the custom action.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype.html#cfn-codepipeline-customactiontype-version
     */
    readonly version: string;
}
/**
 * The `AWS::CodePipeline::Pipeline` resource creates a CodePipeline pipeline that describes how software changes go through a release process.
 *
 * For more information, see [What Is CodePipeline?](https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html) in the *CodePipeline User Guide* .
 *
 * For an example in YAML and JSON that contains the parameters in this reference, see [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#aws-resource-codepipeline-pipeline--examples) .
 *
 * @cloudformationResource AWS::CodePipeline::Pipeline
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html
 */
export declare class CfnPipeline extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
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
     * The version of the pipeline.
     *
     * > A new pipeline is always assigned a version number of 1. This number increments when a pipeline is updated.
     *
     * @cloudformationAttribute Version
     */
    readonly attrVersion: string;
    /**
     * The S3 bucket where artifacts for the pipeline are stored.
     */
    artifactStore?: CfnPipeline.ArtifactStoreProperty | cdk.IResolvable;
    /**
     * A mapping of `artifactStore` objects and their corresponding AWS Regions.
     */
    artifactStores?: Array<CfnPipeline.ArtifactStoreMapProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Represents the input of a `DisableStageTransition` action.
     */
    disableInboundStageTransitions?: Array<cdk.IResolvable | CfnPipeline.StageTransitionProperty> | cdk.IResolvable;
    /**
     * The method that the pipeline will use to handle multiple executions.
     */
    executionMode?: string;
    /**
     * The name of the pipeline.
     */
    name?: string;
    /**
     * CodePipeline provides the following pipeline types, which differ in characteristics and price, so that you can tailor your pipeline features and cost to the needs of your applications.
     */
    pipelineType?: string;
    /**
     * Indicates whether to rerun the CodePipeline pipeline after you update it.
     */
    restartExecutionOnUpdate?: boolean | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) for CodePipeline to use to either perform actions with no `actionRoleArn` , or to use to assume roles for actions with an `actionRoleArn` .
     */
    roleArn: string;
    /**
     * Represents information about a stage and its definition.
     */
    stages: Array<cdk.IResolvable | CfnPipeline.StageDeclarationProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies the tags applied to the pipeline.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The trigger configuration specifying a type of event, such as Git tags, that starts the pipeline.
     */
    triggers?: Array<cdk.IResolvable | CfnPipeline.PipelineTriggerDeclarationProperty> | cdk.IResolvable;
    /**
     * A list that defines the pipeline variables for a pipeline resource.
     */
    variables?: Array<cdk.IResolvable | CfnPipeline.VariableDeclarationProperty> | cdk.IResolvable;
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
     * The S3 bucket where artifacts for the pipeline are stored.
     *
     * > You must include either `artifactStore` or `artifactStores` in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use `artifactStores` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstore.html
     */
    interface ArtifactStoreProperty {
        /**
         * The encryption key used to encrypt the data in the artifact store, such as an AWS Key Management Service ( AWS KMS) key.
         *
         * If this is undefined, the default key for Amazon S3 is used. To see an example artifact store encryption key field, see the example structure here: [AWS::CodePipeline::Pipeline](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstore.html#cfn-codepipeline-pipeline-artifactstore-encryptionkey
         */
        readonly encryptionKey?: CfnPipeline.EncryptionKeyProperty | cdk.IResolvable;
        /**
         * The S3 bucket used for storing the artifacts for a pipeline.
         *
         * You can specify the name of an S3 bucket but not a folder in the bucket. A folder to contain the pipeline artifacts is created for you based on the name of the pipeline. You can use any S3 bucket in the same AWS Region as the pipeline to store your pipeline artifacts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstore.html#cfn-codepipeline-pipeline-artifactstore-location
         */
        readonly location: string;
        /**
         * The type of the artifact store, such as S3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstore.html#cfn-codepipeline-pipeline-artifactstore-type
         */
        readonly type: string;
    }
    /**
     * Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service ( AWS KMS) key.
     *
     * `EncryptionKey` is a property of the [ArtifactStore](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstore.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-encryptionkey.html
     */
    interface EncryptionKeyProperty {
        /**
         * The ID used to identify the key.
         *
         * For an AWS KMS key, you can use the key ID, the key ARN, or the alias ARN.
         *
         * > Aliases are recognized only in the account that created the AWS KMS key. For cross-account actions, you can only use the key ID or key ARN to identify the key. Cross-account actions involve using the role from the other account (AccountB), so specifying the key ID will use the key from the other account (AccountB).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-encryptionkey.html#cfn-codepipeline-pipeline-encryptionkey-id
         */
        readonly id: string;
        /**
         * The type of encryption key, such as an AWS KMS key.
         *
         * When creating or updating a pipeline, the value must be set to 'KMS'.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-encryptionkey.html#cfn-codepipeline-pipeline-encryptionkey-type
         */
        readonly type: string;
    }
    /**
     * A mapping of `artifactStore` objects and their corresponding AWS Regions.
     *
     * There must be an artifact store for the pipeline Region and for each cross-region action in the pipeline.
     *
     * > You must include either `artifactStore` or `artifactStores` in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use `artifactStores` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstoremap.html
     */
    interface ArtifactStoreMapProperty {
        /**
         * Represents information about the S3 bucket where artifacts are stored for the pipeline.
         *
         * > You must include either `artifactStore` or `artifactStores` in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use `artifactStores` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstoremap.html#cfn-codepipeline-pipeline-artifactstoremap-artifactstore
         */
        readonly artifactStore: CfnPipeline.ArtifactStoreProperty | cdk.IResolvable;
        /**
         * The action declaration's AWS Region, such as us-east-1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstoremap.html#cfn-codepipeline-pipeline-artifactstoremap-region
         */
        readonly region: string;
    }
    /**
     * The name of the pipeline in which you want to disable the flow of artifacts from one stage to another.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stagetransition.html
     */
    interface StageTransitionProperty {
        /**
         * The reason given to the user that a stage is disabled, such as waiting for manual approval or manual tests.
         *
         * This message is displayed in the pipeline console UI.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stagetransition.html#cfn-codepipeline-pipeline-stagetransition-reason
         */
        readonly reason: string;
        /**
         * The name of the stage where you want to disable the inbound or outbound transition of artifacts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stagetransition.html#cfn-codepipeline-pipeline-stagetransition-stagename
         */
        readonly stageName: string;
    }
    /**
     * Represents information about a stage and its definition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stagedeclaration.html
     */
    interface StageDeclarationProperty {
        /**
         * The actions included in a stage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stagedeclaration.html#cfn-codepipeline-pipeline-stagedeclaration-actions
         */
        readonly actions: Array<CfnPipeline.ActionDeclarationProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The method to use when a stage allows entry.
         *
         * For example, configuring this field for conditions will allow entry to the stage when the conditions are met.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stagedeclaration.html#cfn-codepipeline-pipeline-stagedeclaration-beforeentry
         */
        readonly beforeEntry?: CfnPipeline.BeforeEntryConditionsProperty | cdk.IResolvable;
        /**
         * Reserved for future use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stagedeclaration.html#cfn-codepipeline-pipeline-stagedeclaration-blockers
         */
        readonly blockers?: Array<CfnPipeline.BlockerDeclarationProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The name of the stage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stagedeclaration.html#cfn-codepipeline-pipeline-stagedeclaration-name
         */
        readonly name: string;
        /**
         * The method to use when a stage has not completed successfully.
         *
         * For example, configuring this field for rollback will roll back a failed stage automatically to the last successful pipeline execution in the stage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stagedeclaration.html#cfn-codepipeline-pipeline-stagedeclaration-onfailure
         */
        readonly onFailure?: CfnPipeline.FailureConditionsProperty | cdk.IResolvable;
        /**
         * The method to use when a stage has succeeded.
         *
         * For example, configuring this field for conditions will allow the stage to succeed when the conditions are met.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stagedeclaration.html#cfn-codepipeline-pipeline-stagedeclaration-onsuccess
         */
        readonly onSuccess?: cdk.IResolvable | CfnPipeline.SuccessConditionsProperty;
    }
    /**
     * Represents information about an action declaration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiondeclaration.html
     */
    interface ActionDeclarationProperty {
        /**
         * Specifies the action type and the provider of the action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiondeclaration.html#cfn-codepipeline-pipeline-actiondeclaration-actiontypeid
         */
        readonly actionTypeId: CfnPipeline.ActionTypeIdProperty | cdk.IResolvable;
        /**
         * The shell commands to run with your compute action in CodePipeline.
         *
         * All commands are supported except multi-line formats. While CodeBuild logs and permissions are used, you do not need to create any resources in CodeBuild.
         *
         * > Using compute time for this action will incur separate charges in AWS CodeBuild .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiondeclaration.html#cfn-codepipeline-pipeline-actiondeclaration-commands
         */
        readonly commands?: Array<string>;
        /**
         * The action's configuration.
         *
         * These are key-value pairs that specify input values for an action. For more information, see [Action Structure Requirements in CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#action-requirements) . For the list of configuration properties for the AWS CloudFormation action type in CodePipeline, see [Configuration Properties Reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/continuous-delivery-codepipeline-action-reference.html) in the *AWS CloudFormation User Guide* . For template snippets with examples, see [Using Parameter Override Functions with CodePipeline Pipelines](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/continuous-delivery-codepipeline-parameter-override-functions.html) in the *AWS CloudFormation User Guide* .
         *
         * The values can be represented in either JSON or YAML format. For example, the JSON configuration item format is as follows:
         *
         * *JSON:*
         *
         * `"Configuration" : { Key : Value },`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiondeclaration.html#cfn-codepipeline-pipeline-actiondeclaration-configuration
         */
        readonly configuration?: any | cdk.IResolvable;
        /**
         * The name or ID of the artifact consumed by the action, such as a test or build artifact.
         *
         * While the field is not a required parameter, most actions have an action configuration that requires a specified quantity of input artifacts. To refer to the action configuration specification by action provider, see the [Action structure reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference.html) in the *AWS CodePipeline User Guide* .
         *
         * > For a CodeBuild action with multiple input artifacts, one of your input sources must be designated the PrimarySource. For more information, see the [CodeBuild action reference page](https://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference-CodeBuild.html) in the *AWS CodePipeline User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiondeclaration.html#cfn-codepipeline-pipeline-actiondeclaration-inputartifacts
         */
        readonly inputArtifacts?: Array<CfnPipeline.InputArtifactProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The action declaration's name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiondeclaration.html#cfn-codepipeline-pipeline-actiondeclaration-name
         */
        readonly name: string;
        /**
         * The variable namespace associated with the action.
         *
         * All variables produced as output by this action fall under this namespace.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiondeclaration.html#cfn-codepipeline-pipeline-actiondeclaration-namespace
         */
        readonly namespace?: string;
        /**
         * The name or ID of the result of the action declaration, such as a test or build artifact.
         *
         * While the field is not a required parameter, most actions have an action configuration that requires a specified quantity of output artifacts. To refer to the action configuration specification by action provider, see the [Action structure reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference.html) in the *AWS CodePipeline User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiondeclaration.html#cfn-codepipeline-pipeline-actiondeclaration-outputartifacts
         */
        readonly outputArtifacts?: Array<cdk.IResolvable | CfnPipeline.OutputArtifactProperty> | cdk.IResolvable;
        /**
         * The list of variables that are to be exported from the compute action.
         *
         * This is specifically CodeBuild environment variables as used for that action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiondeclaration.html#cfn-codepipeline-pipeline-actiondeclaration-outputvariables
         */
        readonly outputVariables?: Array<string>;
        /**
         * The action declaration's AWS Region, such as us-east-1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiondeclaration.html#cfn-codepipeline-pipeline-actiondeclaration-region
         */
        readonly region?: string;
        /**
         * The ARN of the IAM service role that performs the declared action.
         *
         * This is assumed through the roleArn for the pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiondeclaration.html#cfn-codepipeline-pipeline-actiondeclaration-rolearn
         */
        readonly roleArn?: string;
        /**
         * The order in which actions are run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiondeclaration.html#cfn-codepipeline-pipeline-actiondeclaration-runorder
         */
        readonly runOrder?: number;
        /**
         * A timeout duration in minutes that can be applied against the ActionType’s default timeout value specified in [Quotas for AWS CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/limits.html) . This attribute is available only to the manual approval ActionType.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiondeclaration.html#cfn-codepipeline-pipeline-actiondeclaration-timeoutinminutes
         */
        readonly timeoutInMinutes?: number;
    }
    /**
     * Represents information about an action type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiontypeid.html
     */
    interface ActionTypeIdProperty {
        /**
         * A category defines what kind of action can be taken in the stage, and constrains the provider type for the action.
         *
         * Valid categories are limited to one of the values below.
         *
         * - `Source`
         * - `Build`
         * - `Test`
         * - `Deploy`
         * - `Invoke`
         * - `Approval`
         * - `Compute`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiontypeid.html#cfn-codepipeline-pipeline-actiontypeid-category
         */
        readonly category: string;
        /**
         * The creator of the action being called.
         *
         * There are three valid values for the `Owner` field in the action category section within your pipeline structure: `AWS` , `ThirdParty` , and `Custom` . For more information, see [Valid Action Types and Providers in CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#actions-valid-providers) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiontypeid.html#cfn-codepipeline-pipeline-actiontypeid-owner
         */
        readonly owner: string;
        /**
         * The provider of the service being called by the action.
         *
         * Valid providers are determined by the action category. For example, an action in the Deploy category type might have a provider of CodeDeploy, which would be specified as `CodeDeploy` . For more information, see [Valid Action Types and Providers in CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#actions-valid-providers) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiontypeid.html#cfn-codepipeline-pipeline-actiontypeid-provider
         */
        readonly provider: string;
        /**
         * A string that describes the action version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiontypeid.html#cfn-codepipeline-pipeline-actiontypeid-version
         */
        readonly version: string;
    }
    /**
     * Represents information about an artifact to be worked on, such as a test or build artifact.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-inputartifact.html
     */
    interface InputArtifactProperty {
        /**
         * The name of the artifact to be worked on (for example, "My App").
         *
         * Artifacts are the files that are worked on by actions in the pipeline. See the action configuration for each action for details about artifact parameters. For example, the S3 source action input artifact is a file name (or file path), and the files are generally provided as a ZIP file. Example artifact name: SampleApp_Windows.zip
         *
         * The input artifact of an action must exactly match the output artifact declared in a preceding action, but the input artifact does not have to be the next action in strict sequence from the action that provided the output artifact. Actions in parallel can declare different output artifacts, which are in turn consumed by different following actions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-inputartifact.html#cfn-codepipeline-pipeline-inputartifact-name
         */
        readonly name: string;
    }
    /**
     * Represents information about the output of an action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-outputartifact.html
     */
    interface OutputArtifactProperty {
        /**
         * The files that you want to associate with the output artifact that will be exported from the compute action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-outputartifact.html#cfn-codepipeline-pipeline-outputartifact-files
         */
        readonly files?: Array<string>;
        /**
         * The name of the output of an artifact, such as "My App".
         *
         * The output artifact name must exactly match the input artifact declared for a downstream action. However, the downstream action's input artifact does not have to be the next action in strict sequence from the action that provided the output artifact. Actions in parallel can declare different output artifacts, which are in turn consumed by different following actions.
         *
         * Output artifact names must be unique within a pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-outputartifact.html#cfn-codepipeline-pipeline-outputartifact-name
         */
        readonly name: string;
    }
    /**
     * Reserved for future use.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-blockerdeclaration.html
     */
    interface BlockerDeclarationProperty {
        /**
         * Reserved for future use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-blockerdeclaration.html#cfn-codepipeline-pipeline-blockerdeclaration-name
         */
        readonly name: string;
        /**
         * Reserved for future use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-blockerdeclaration.html#cfn-codepipeline-pipeline-blockerdeclaration-type
         */
        readonly type: string;
    }
    /**
     * The configuration that specifies the result, such as rollback, to occur upon stage failure.
     *
     * For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) and [How do stage conditions work?](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-failureconditions.html
     */
    interface FailureConditionsProperty {
        /**
         * The conditions that are configured as failure conditions.
         *
         * For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) and [How do stage conditions work?](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-failureconditions.html#cfn-codepipeline-pipeline-failureconditions-conditions
         */
        readonly conditions?: Array<CfnPipeline.ConditionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The specified result for when the failure conditions are met, such as rolling back the stage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-failureconditions.html#cfn-codepipeline-pipeline-failureconditions-result
         */
        readonly result?: string;
        /**
         * The retry configuration specifies automatic retry for a failed stage, along with the configured retry mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-failureconditions.html#cfn-codepipeline-pipeline-failureconditions-retryconfiguration
         */
        readonly retryConfiguration?: cdk.IResolvable | CfnPipeline.RetryConfigurationProperty;
    }
    /**
     * The retry configuration specifies automatic retry for a failed stage, along with the configured retry mode.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-retryconfiguration.html
     */
    interface RetryConfigurationProperty {
        /**
         * The method that you want to configure for automatic stage retry on stage failure.
         *
         * You can specify to retry only failed action in the stage or all actions in the stage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-retryconfiguration.html#cfn-codepipeline-pipeline-retryconfiguration-retrymode
         */
        readonly retryMode?: string;
    }
    /**
     * The condition for the stage.
     *
     * A condition is made up of the rules and the result for the condition. For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) and [How do stage conditions work?](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html) .. For more information about rules, see the [AWS CodePipeline rule reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/rule-reference.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-condition.html
     */
    interface ConditionProperty {
        /**
         * The action to be done when the condition is met.
         *
         * For example, rolling back an execution for a failure condition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-condition.html#cfn-codepipeline-pipeline-condition-result
         */
        readonly result?: string;
        /**
         * The rules that make up the condition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-condition.html#cfn-codepipeline-pipeline-condition-rules
         */
        readonly rules?: Array<cdk.IResolvable | CfnPipeline.RuleDeclarationProperty> | cdk.IResolvable;
    }
    /**
     * Represents information about the rule to be created for an associated condition.
     *
     * An example would be creating a new rule for an entry condition, such as a rule that checks for a test result before allowing the run to enter the deployment stage. For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) and [How do stage conditions work?](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html) . For more information about rules, see the [AWS CodePipeline rule reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/rule-reference.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-ruledeclaration.html
     */
    interface RuleDeclarationProperty {
        /**
         * The shell commands to run with your commands rule in CodePipeline.
         *
         * All commands are supported except multi-line formats. While CodeBuild logs and permissions are used, you do not need to create any resources in CodeBuild.
         *
         * > Using compute time for this action will incur separate charges in AWS CodeBuild .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-ruledeclaration.html#cfn-codepipeline-pipeline-ruledeclaration-commands
         */
        readonly commands?: Array<string>;
        /**
         * The action configuration fields for the rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-ruledeclaration.html#cfn-codepipeline-pipeline-ruledeclaration-configuration
         */
        readonly configuration?: any | cdk.IResolvable;
        /**
         * The input artifacts fields for the rule, such as specifying an input file for the rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-ruledeclaration.html#cfn-codepipeline-pipeline-ruledeclaration-inputartifacts
         */
        readonly inputArtifacts?: Array<CfnPipeline.InputArtifactProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The name of the rule that is created for the condition, such as `VariableCheck` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-ruledeclaration.html#cfn-codepipeline-pipeline-ruledeclaration-name
         */
        readonly name?: string;
        /**
         * The Region for the condition associated with the rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-ruledeclaration.html#cfn-codepipeline-pipeline-ruledeclaration-region
         */
        readonly region?: string;
        /**
         * The pipeline role ARN associated with the rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-ruledeclaration.html#cfn-codepipeline-pipeline-ruledeclaration-rolearn
         */
        readonly roleArn?: string;
        /**
         * The ID for the rule type, which is made up of the combined values for category, owner, provider, and version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-ruledeclaration.html#cfn-codepipeline-pipeline-ruledeclaration-ruletypeid
         */
        readonly ruleTypeId?: cdk.IResolvable | CfnPipeline.RuleTypeIdProperty;
    }
    /**
     * The ID for the rule type, which is made up of the combined values for category, owner, provider, and version.
     *
     * For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) . For more information about rules, see the [AWS CodePipeline rule reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/rule-reference.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-ruletypeid.html
     */
    interface RuleTypeIdProperty {
        /**
         * A category defines what kind of rule can be run in the stage, and constrains the provider type for the rule.
         *
         * The valid category is `Rule` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-ruletypeid.html#cfn-codepipeline-pipeline-ruletypeid-category
         */
        readonly category?: string;
        /**
         * The creator of the rule being called.
         *
         * The valid value for the `Owner` field in the rule category is `AWS` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-ruletypeid.html#cfn-codepipeline-pipeline-ruletypeid-owner
         */
        readonly owner?: string;
        /**
         * The rule provider, such as the `DeploymentWindow` rule.
         *
         * For a list of rule provider names, see the rules listed in the [AWS CodePipeline rule reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/rule-reference.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-ruletypeid.html#cfn-codepipeline-pipeline-ruletypeid-provider
         */
        readonly provider?: string;
        /**
         * A string that describes the rule version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-ruletypeid.html#cfn-codepipeline-pipeline-ruletypeid-version
         */
        readonly version?: string;
    }
    /**
     * The conditions for making checks that, if met, succeed a stage.
     *
     * For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) and [How do stage conditions work?](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-successconditions.html
     */
    interface SuccessConditionsProperty {
        /**
         * The conditions that are success conditions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-successconditions.html#cfn-codepipeline-pipeline-successconditions-conditions
         */
        readonly conditions?: Array<CfnPipeline.ConditionProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * The conditions for making checks for entry to a stage.
     *
     * For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) and [How do stage conditions work?](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-beforeentryconditions.html
     */
    interface BeforeEntryConditionsProperty {
        /**
         * The conditions that are configured as entry conditions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-beforeentryconditions.html#cfn-codepipeline-pipeline-beforeentryconditions-conditions
         */
        readonly conditions?: Array<CfnPipeline.ConditionProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Represents information about the specified trigger configuration, such as the filter criteria and the source stage for the action that contains the trigger.
     *
     * > This is only supported for the `CodeStarSourceConnection` action type. > When a trigger configuration is specified, default change detection for repository and branch commits is disabled.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-pipelinetriggerdeclaration.html
     */
    interface PipelineTriggerDeclarationProperty {
        /**
         * Provides the filter criteria and the source stage for the repository event that starts the pipeline, such as Git tags.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-pipelinetriggerdeclaration.html#cfn-codepipeline-pipeline-pipelinetriggerdeclaration-gitconfiguration
         */
        readonly gitConfiguration?: CfnPipeline.GitConfigurationProperty | cdk.IResolvable;
        /**
         * The source provider for the event, such as connections configured for a repository with Git tags, for the specified trigger configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-pipelinetriggerdeclaration.html#cfn-codepipeline-pipeline-pipelinetriggerdeclaration-providertype
         */
        readonly providerType: string;
    }
    /**
     * A type of trigger configuration for Git-based source actions.
     *
     * > You can specify the Git configuration trigger type for all third-party Git-based source actions that are supported by the `CodeStarSourceConnection` action type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitconfiguration.html
     */
    interface GitConfigurationProperty {
        /**
         * The field where the repository event that will start the pipeline is specified as pull requests.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitconfiguration.html#cfn-codepipeline-pipeline-gitconfiguration-pullrequest
         */
        readonly pullRequest?: Array<CfnPipeline.GitPullRequestFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The field where the repository event that will start the pipeline, such as pushing Git tags, is specified with details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitconfiguration.html#cfn-codepipeline-pipeline-gitconfiguration-push
         */
        readonly push?: Array<CfnPipeline.GitPushFilterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The name of the pipeline source action where the trigger configuration, such as Git tags, is specified.
         *
         * The trigger configuration will start the pipeline upon the specified change only.
         *
         * > You can only specify one trigger configuration per source action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitconfiguration.html#cfn-codepipeline-pipeline-gitconfiguration-sourceactionname
         */
        readonly sourceActionName: string;
    }
    /**
     * The event criteria that specify when a specified repository event will start the pipeline for the specified trigger configuration, such as the lists of Git tags to include and exclude.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitpushfilter.html
     */
    interface GitPushFilterProperty {
        /**
         * The field that specifies to filter on branches for the push trigger configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitpushfilter.html#cfn-codepipeline-pipeline-gitpushfilter-branches
         */
        readonly branches?: CfnPipeline.GitBranchFilterCriteriaProperty | cdk.IResolvable;
        /**
         * The field that specifies to filter on file paths for the push trigger configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitpushfilter.html#cfn-codepipeline-pipeline-gitpushfilter-filepaths
         */
        readonly filePaths?: CfnPipeline.GitFilePathFilterCriteriaProperty | cdk.IResolvable;
        /**
         * The field that contains the details for the Git tags trigger configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitpushfilter.html#cfn-codepipeline-pipeline-gitpushfilter-tags
         */
        readonly tags?: CfnPipeline.GitTagFilterCriteriaProperty;
    }
    /**
     * The Git repository file paths specified as filter criteria to start the pipeline.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitfilepathfiltercriteria.html
     */
    interface GitFilePathFilterCriteriaProperty {
        /**
         * The list of patterns of Git repository file paths that, when a commit is pushed, are to be excluded from starting the pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitfilepathfiltercriteria.html#cfn-codepipeline-pipeline-gitfilepathfiltercriteria-excludes
         */
        readonly excludes?: Array<string>;
        /**
         * The list of patterns of Git repository file paths that, when a commit is pushed, are to be included as criteria that starts the pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitfilepathfiltercriteria.html#cfn-codepipeline-pipeline-gitfilepathfiltercriteria-includes
         */
        readonly includes?: Array<string>;
    }
    /**
     * The Git repository branches specified as filter criteria to start the pipeline.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitbranchfiltercriteria.html
     */
    interface GitBranchFilterCriteriaProperty {
        /**
         * The list of patterns of Git branches that, when a commit is pushed, are to be excluded from starting the pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitbranchfiltercriteria.html#cfn-codepipeline-pipeline-gitbranchfiltercriteria-excludes
         */
        readonly excludes?: Array<string>;
        /**
         * The list of patterns of Git branches that, when a commit is pushed, are to be included as criteria that starts the pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitbranchfiltercriteria.html#cfn-codepipeline-pipeline-gitbranchfiltercriteria-includes
         */
        readonly includes?: Array<string>;
    }
    /**
     * The Git tags specified as filter criteria for whether a Git tag repository event will start the pipeline.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gittagfiltercriteria.html
     */
    interface GitTagFilterCriteriaProperty {
        /**
         * The list of patterns of Git tags that, when pushed, are to be excluded from starting the pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gittagfiltercriteria.html#cfn-codepipeline-pipeline-gittagfiltercriteria-excludes
         */
        readonly excludes?: Array<string>;
        /**
         * The list of patterns of Git tags that, when pushed, are to be included as criteria that starts the pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gittagfiltercriteria.html#cfn-codepipeline-pipeline-gittagfiltercriteria-includes
         */
        readonly includes?: Array<string>;
    }
    /**
     * The event criteria for the pull request trigger configuration, such as the lists of branches or file paths to include and exclude.
     *
     * The following are valid values for the events for this filter:
     *
     * - CLOSED
     * - OPEN
     * - UPDATED
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitpullrequestfilter.html
     */
    interface GitPullRequestFilterProperty {
        /**
         * The field that specifies to filter on branches for the pull request trigger configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitpullrequestfilter.html#cfn-codepipeline-pipeline-gitpullrequestfilter-branches
         */
        readonly branches?: CfnPipeline.GitBranchFilterCriteriaProperty | cdk.IResolvable;
        /**
         * The field that specifies which pull request events to filter on (OPEN, UPDATED, CLOSED) for the trigger configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitpullrequestfilter.html#cfn-codepipeline-pipeline-gitpullrequestfilter-events
         */
        readonly events?: Array<string>;
        /**
         * The field that specifies to filter on file paths for the pull request trigger configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitpullrequestfilter.html#cfn-codepipeline-pipeline-gitpullrequestfilter-filepaths
         */
        readonly filePaths?: CfnPipeline.GitFilePathFilterCriteriaProperty | cdk.IResolvable;
    }
    /**
     * A variable declared at the pipeline level.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-variabledeclaration.html
     */
    interface VariableDeclarationProperty {
        /**
         * The value of a pipeline-level variable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-variabledeclaration.html#cfn-codepipeline-pipeline-variabledeclaration-defaultvalue
         */
        readonly defaultValue?: string;
        /**
         * The description of a pipeline-level variable.
         *
         * It's used to add additional context about the variable, and not being used at time when pipeline executes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-variabledeclaration.html#cfn-codepipeline-pipeline-variabledeclaration-description
         */
        readonly description?: string;
        /**
         * The name of a pipeline-level variable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-variabledeclaration.html#cfn-codepipeline-pipeline-variabledeclaration-name
         */
        readonly name: string;
    }
}
/**
 * Properties for defining a `CfnPipeline`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html
 */
export interface CfnPipelineProps {
    /**
     * The S3 bucket where artifacts for the pipeline are stored.
     *
     * > You must include either `artifactStore` or `artifactStores` in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use `artifactStores` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-artifactstore
     */
    readonly artifactStore?: CfnPipeline.ArtifactStoreProperty | cdk.IResolvable;
    /**
     * A mapping of `artifactStore` objects and their corresponding AWS Regions.
     *
     * There must be an artifact store for the pipeline Region and for each cross-region action in the pipeline.
     *
     * > You must include either `artifactStore` or `artifactStores` in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use `artifactStores` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-artifactstores
     */
    readonly artifactStores?: Array<CfnPipeline.ArtifactStoreMapProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Represents the input of a `DisableStageTransition` action.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-disableinboundstagetransitions
     */
    readonly disableInboundStageTransitions?: Array<cdk.IResolvable | CfnPipeline.StageTransitionProperty> | cdk.IResolvable;
    /**
     * The method that the pipeline will use to handle multiple executions.
     *
     * The default mode is SUPERSEDED.
     *
     * @default - "SUPERSEDED"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-executionmode
     */
    readonly executionMode?: string;
    /**
     * The name of the pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-name
     */
    readonly name?: string;
    /**
     * CodePipeline provides the following pipeline types, which differ in characteristics and price, so that you can tailor your pipeline features and cost to the needs of your applications.
     *
     * - V1 type pipelines have a JSON structure that contains standard pipeline, stage, and action-level parameters.
     * - V2 type pipelines have the same structure as a V1 type, along with additional parameters for release safety and trigger configuration.
     *
     * > Including V2 parameters, such as triggers on Git tags, in the pipeline JSON when creating or updating a pipeline will result in the pipeline having the V2 type of pipeline and the associated costs.
     *
     * For information about pricing for CodePipeline, see [Pricing](https://docs.aws.amazon.com/codepipeline/pricing/) .
     *
     * For information about which type of pipeline to choose, see [What type of pipeline is right for me?](https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-types-planning.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-pipelinetype
     */
    readonly pipelineType?: string;
    /**
     * Indicates whether to rerun the CodePipeline pipeline after you update it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-restartexecutiononupdate
     */
    readonly restartExecutionOnUpdate?: boolean | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) for CodePipeline to use to either perform actions with no `actionRoleArn` , or to use to assume roles for actions with an `actionRoleArn` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-rolearn
     */
    readonly roleArn: string;
    /**
     * Represents information about a stage and its definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-stages
     */
    readonly stages: Array<cdk.IResolvable | CfnPipeline.StageDeclarationProperty> | cdk.IResolvable;
    /**
     * Specifies the tags applied to the pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The trigger configuration specifying a type of event, such as Git tags, that starts the pipeline.
     *
     * > When a trigger configuration is specified, default change detection for repository and branch commits is disabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-triggers
     */
    readonly triggers?: Array<cdk.IResolvable | CfnPipeline.PipelineTriggerDeclarationProperty> | cdk.IResolvable;
    /**
     * A list that defines the pipeline variables for a pipeline resource.
     *
     * Variable names can have alphanumeric and underscore characters, and the values must match `[A-Za-z0-9@\-_]+` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-variables
     */
    readonly variables?: Array<cdk.IResolvable | CfnPipeline.VariableDeclarationProperty> | cdk.IResolvable;
}
/**
 * The `AWS::CodePipeline::Webhook` resource creates and registers your webhook.
 *
 * After the webhook is created and registered, it triggers your pipeline to start every time an external event occurs. For more information, see [Migrate polling pipelines to use event-based change detection](https://docs.aws.amazon.com/codepipeline/latest/userguide/update-change-detection.html) in the *AWS CodePipeline User Guide* .
 *
 * We strongly recommend that you use AWS Secrets Manager to store your credentials. If you use Secrets Manager, you must have already configured and stored your secret parameters in Secrets Manager. For more information, see [Using Dynamic References to Specify Template Values](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) .
 *
 * > When passing secret parameters, do not enter the value directly into the template. The value is rendered as plaintext and is therefore readable. For security reasons, do not use plaintext in your AWS CloudFormation template to store your credentials.
 *
 * @cloudformationResource AWS::CodePipeline::Webhook
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-webhook.html
 */
export declare class CfnWebhook extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWebhook from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWebhook;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The webhook URL generated by AWS CodePipeline , such as `https://eu-central-1.webhooks.aws/trigger123456` .
     *
     * @cloudformationAttribute Url
     */
    readonly attrUrl: string;
    /**
     * Supported options are GITHUB_HMAC, IP, and UNAUTHENTICATED.
     */
    authentication: string;
    /**
     * Properties that configure the authentication applied to incoming webhook trigger requests.
     */
    authenticationConfiguration: cdk.IResolvable | CfnWebhook.WebhookAuthConfigurationProperty;
    /**
     * A list of rules applied to the body/payload sent in the POST request to a webhook URL.
     */
    filters: Array<cdk.IResolvable | CfnWebhook.WebhookFilterRuleProperty> | cdk.IResolvable;
    /**
     * The name of the webhook.
     */
    name?: string;
    /**
     * Configures a connection between the webhook that was created and the external tool with events to be detected.
     */
    registerWithThirdParty?: boolean | cdk.IResolvable;
    /**
     * The name of the action in a pipeline you want to connect to the webhook.
     */
    targetAction: string;
    /**
     * The name of the pipeline you want to connect to the webhook.
     */
    targetPipeline: string;
    /**
     * The version number of the pipeline to be connected to the trigger request.
     */
    targetPipelineVersion: number;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnWebhookProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnWebhook {
    /**
     * The authentication applied to incoming webhook trigger requests.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-webhook-webhookauthconfiguration.html
     */
    interface WebhookAuthConfigurationProperty {
        /**
         * The property used to configure acceptance of webhooks in an IP address range.
         *
         * For IP, only the `AllowedIPRange` property must be set. This property must be set to a valid CIDR range.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-webhook-webhookauthconfiguration.html#cfn-codepipeline-webhook-webhookauthconfiguration-allowediprange
         */
        readonly allowedIpRange?: string;
        /**
         * The property used to configure GitHub authentication. For GITHUB_HMAC, only the `SecretToken` property must be set.
         *
         * > When creating CodePipeline webhooks, do not use your own credentials or reuse the same secret token across multiple webhooks. For optimal security, generate a unique secret token for each webhook you create. The secret token is an arbitrary string that you provide, which GitHub uses to compute and sign the webhook payloads sent to CodePipeline, for protecting the integrity and authenticity of the webhook payloads. Using your own credentials or reusing the same token across multiple webhooks can lead to security vulnerabilities. > If a secret token was provided, it will be redacted in the response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-webhook-webhookauthconfiguration.html#cfn-codepipeline-webhook-webhookauthconfiguration-secrettoken
         */
        readonly secretToken?: string;
    }
    /**
     * The event criteria that specify when a webhook notification is sent to your URL.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-webhook-webhookfilterrule.html
     */
    interface WebhookFilterRuleProperty {
        /**
         * A JsonPath expression that is applied to the body/payload of the webhook.
         *
         * The value selected by the JsonPath expression must match the value specified in the `MatchEquals` field. Otherwise, the request is ignored. For more information, see [Java JsonPath implementation](https://docs.aws.amazon.com/https://github.com/json-path/JsonPath) in GitHub.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-webhook-webhookfilterrule.html#cfn-codepipeline-webhook-webhookfilterrule-jsonpath
         */
        readonly jsonPath: string;
        /**
         * The value selected by the `JsonPath` expression must match what is supplied in the `MatchEquals` field.
         *
         * Otherwise, the request is ignored. Properties from the target action configuration can be included as placeholders in this value by surrounding the action configuration key with curly brackets. For example, if the value supplied here is "refs/heads/{Branch}" and the target action has an action configuration property called "Branch" with a value of "main", the `MatchEquals` value is evaluated as "refs/heads/main". For a list of action configuration properties for built-in action types, see [Pipeline Structure Reference Action Requirements](https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#action-requirements) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-webhook-webhookfilterrule.html#cfn-codepipeline-webhook-webhookfilterrule-matchequals
         */
        readonly matchEquals?: string;
    }
}
/**
 * Properties for defining a `CfnWebhook`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-webhook.html
 */
export interface CfnWebhookProps {
    /**
     * Supported options are GITHUB_HMAC, IP, and UNAUTHENTICATED.
     *
     * > When creating CodePipeline webhooks, do not use your own credentials or reuse the same secret token across multiple webhooks. For optimal security, generate a unique secret token for each webhook you create. The secret token is an arbitrary string that you provide, which GitHub uses to compute and sign the webhook payloads sent to CodePipeline, for protecting the integrity and authenticity of the webhook payloads. Using your own credentials or reusing the same token across multiple webhooks can lead to security vulnerabilities. > If a secret token was provided, it will be redacted in the response.
     *
     * - For information about the authentication scheme implemented by GITHUB_HMAC, see [Securing your webhooks](https://docs.aws.amazon.com/https://developer.github.com/webhooks/securing/) on the GitHub Developer website.
     * - IP rejects webhooks trigger requests unless they originate from an IP address in the IP range whitelisted in the authentication configuration.
     * - UNAUTHENTICATED accepts all webhook trigger requests regardless of origin.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-webhook.html#cfn-codepipeline-webhook-authentication
     */
    readonly authentication: string;
    /**
     * Properties that configure the authentication applied to incoming webhook trigger requests.
     *
     * The required properties depend on the authentication type. For GITHUB_HMAC, only the `SecretToken` property must be set. For IP, only the `AllowedIPRange` property must be set to a valid CIDR range. For UNAUTHENTICATED, no properties can be set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-webhook.html#cfn-codepipeline-webhook-authenticationconfiguration
     */
    readonly authenticationConfiguration: cdk.IResolvable | CfnWebhook.WebhookAuthConfigurationProperty;
    /**
     * A list of rules applied to the body/payload sent in the POST request to a webhook URL.
     *
     * All defined rules must pass for the request to be accepted and the pipeline started.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-webhook.html#cfn-codepipeline-webhook-filters
     */
    readonly filters: Array<cdk.IResolvable | CfnWebhook.WebhookFilterRuleProperty> | cdk.IResolvable;
    /**
     * The name of the webhook.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-webhook.html#cfn-codepipeline-webhook-name
     */
    readonly name?: string;
    /**
     * Configures a connection between the webhook that was created and the external tool with events to be detected.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-webhook.html#cfn-codepipeline-webhook-registerwiththirdparty
     */
    readonly registerWithThirdParty?: boolean | cdk.IResolvable;
    /**
     * The name of the action in a pipeline you want to connect to the webhook.
     *
     * The action must be from the source (first) stage of the pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-webhook.html#cfn-codepipeline-webhook-targetaction
     */
    readonly targetAction: string;
    /**
     * The name of the pipeline you want to connect to the webhook.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-webhook.html#cfn-codepipeline-webhook-targetpipeline
     */
    readonly targetPipeline: string;
    /**
     * The version number of the pipeline to be connected to the trigger request.
     *
     * Required: Yes
     *
     * Type: Integer
     *
     * Update requires: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-webhook.html#cfn-codepipeline-webhook-targetpipelineversion
     */
    readonly targetPipelineVersion: number;
}
